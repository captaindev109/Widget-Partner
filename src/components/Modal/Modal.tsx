import {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import Card from '@/generics/Card';
import IconButton from '../IconButton';

export interface ModalProps {
  children?: ReactNode;
  className?: string;
  customCloseMethod?: () => void;
}

export interface ModalRef {
  toggle?: () => void;
}

const StyledWrapper = styled(Card)<{
  $visible: boolean;
}>`
  z-index: ${(props) => (props.$visible ? 2 : -1)};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.$visible ? 'auto' : 'none')};
  padding: 10px;
`;

const Backdrop = styled(Card)`
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  overflow: auto;
  z-index: 4;
`;

const Header = styled(Card)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const CloseButtonWrapper = styled(Card)``;

const Modal: ForwardRefRenderFunction<ModalRef, ModalProps> = ({ children, className, customCloseMethod }, ref) => {
  const [isVisible, setVisible] = useState(false);
  const selectContainerRef = useRef(null);

  const handleToggle = () => {
    if (isVisible) {
      customCloseMethod?.();
      setVisible(false);
    } else setVisible(true);
  };

  useImperativeHandle(ref, () => ({
    toggle: () => handleToggle(),
  }));

  const portalRef = useRef<Element | null>(null);

  useEffect(() => {
    portalRef.current = document.getElementById('modal-portal');
  }, []);

  useOnClickOutside(selectContainerRef, () => {
    if (isVisible) {
      setVisible(false);
    }
  });

  return portalRef.current
    ? createPortal(
        <StyledWrapper data-testid="Modal-wrapper" $visible={isVisible}>
          <Backdrop data-testid="Modal-backdrop" onClick={handleToggle} />
          <Container
            data-testid="Modal-container"
            ref={selectContainerRef}
            key={`modal-container-${isVisible}`}
            className={className}
            aria-modal="true"
          >
            <Header>
              <CloseButtonWrapper>
                <IconButton
                  config={{ event_type: 'form', event_destination: 'next' }}
                  data-testid="Modal-close-button"
                  onClick={handleToggle}
                  icon="Close"
                  width="14px"
                  height="14px"
                />
              </CloseButtonWrapper>
            </Header>
            {children}
          </Container>
        </StyledWrapper>,
        portalRef?.current
      )
    : null;
};

export default forwardRef(Modal);

import Card from '@/generics/Card';
import Image from '@/generics/Image';
import Text from '@/generics/Text';
import { PerilV2 } from '@/types/schemaTypes';
import { ANIMATION_DURATION } from '@/utils/animationUtils';
import { device } from '@/utils/constants';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import styled from 'styled-components';
import { List, ListItem } from '../List';
import Modal, { ModalRef } from '../Modal/Modal';
import { CreateSVGComponent } from '../SVGIcons/Index';

// TODO - Add internationalization

export interface PerilsModalProps {
  perils: Array<PerilV2>;
  selectedPeril: PerilV2 | null;
  setSelectedPeril: (peril: PerilV2) => void;
  ref: ModalRef;
}

const ModalContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;

  width: 90vw;
  height: 90vh;

  @media ${device.tablet} {
    width: 70vw;
    height: 70vh;
  }
`;

const PerilSlideList = styled(List)`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
`;

const PerilSliderContent = styled(Card)<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    border-color: ${(props) => !props.selected && props.theme.color.gray500};
  }

  padding: ${(props) => props.theme.size.padding.p8};

  transition: border ${ANIMATION_DURATION} ease-in-out;

  border-bottom: 2px solid ${(props) => (props.selected ? props.theme.color.gray900 : props.theme.color.gray300)};

  height: 100px;
  width: 100px;
`;

const PerilTextWrapper = styled(Card)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const PerilSliderText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InformationWrapper = styled(Card)`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${(props) => props.theme.size.padding.p32};
  overflow-y: scroll;

  @media ${device.tablet} {
    padding: ${(props) => props.theme.size.padding.p56};
  }
`;

const Headline = styled(Text)`
  margin-bottom: ${({ theme }) => theme.size.margin.m16};
`;

const HeadlineWrapper = styled(Card)`
  margin-bottom: ${({ theme }) => theme.size.margin.m20};
`;

const IncludedWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.size.margin.m16};

  @media ${device.tablet} {
    & > *:first-child {
      padding-right: ${({ theme }) => theme.size.padding.p16};
    }
    & > *:last-child {
      padding-left: ${({ theme }) => theme.size.padding.p16};
    }
    flex-direction: row;
  }
`;

const IncludedContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: ${({ theme }) => theme.size.margin.m20};
`;

const InfoWrapper = styled(Card)`
  position: relative;
  padding: 24px 40px;
  background: ${({ theme }) => theme.color.gray100};
  border-radius: ${({ theme }) => theme.size.borderRadius.br4};
`;

const IncludedTitle = styled(Text)`
  margin-bottom: ${({ theme }) => theme.size.margin.m8};
`;

const InfoIcon = styled(Card)`
  position: absolute;
  left: 12px;
`;

const IconTextWrapper = styled(Card)`
  display: flex;
  flex-direction: row;
  word-break: break-word;
  margin-bottom: ${({ theme }) => theme.size.margin.m8};
`;

const Icon = styled(Card)`
  display: flex;
  height: ${({ theme }) => theme.size.lineHeights.lh4};
  flex-direction: row;
  align-items: center;
  margin-right: ${({ theme }) => theme.size.margin.m8};
`;

const PerilsModal: ForwardRefRenderFunction<ModalRef, PerilsModalProps> = (
  { perils, selectedPeril, setSelectedPeril },
  ref
) => {
  return (
    <Modal ref={ref}>
      <ModalContentWrapper>
        <PerilSlideList>
          {perils.map((peril: PerilV2) => (
            <ListItem key={peril.title}>
              <PerilSliderContent
                onClick={() => setSelectedPeril(peril)}
                selected={selectedPeril?.title === peril.title}
              >
                <Image alt={peril.title} src={peril.icon.variants.light.svgUrl} width="40px" height="40px" />
                <PerilTextWrapper>
                  <PerilSliderText variant="Body3">{peril.title}</PerilSliderText>
                </PerilTextWrapper>
              </PerilSliderContent>
            </ListItem>
          ))}
        </PerilSlideList>
        <InformationWrapper>
          <HeadlineWrapper>
            <Headline variant="HeadlineM">{selectedPeril?.title}</Headline>
            <Text variant="Body1">{selectedPeril?.description}</Text>
          </HeadlineWrapper>
          <IncludedWrapper>
            {selectedPeril?.covered && (
              <IncludedContentWrapper>
                <IncludedTitle weight="bold" variant="Body2">
                  Det här täcks
                </IncludedTitle>
                {selectedPeril?.covered.map((item) => (
                  <IconTextWrapper key={item}>
                    <Icon>{CreateSVGComponent('Covered')}</Icon>
                    <Text variant="Body2">{item}</Text>
                  </IconTextWrapper>
                ))}
              </IncludedContentWrapper>
            )}
            {!!selectedPeril?.exceptions.length && (
              <IncludedContentWrapper>
                <IncludedTitle weight="bold" variant="Body2">
                  Undantag
                </IncludedTitle>
                {selectedPeril?.exceptions.map((item) => (
                  <IconTextWrapper key={item}>
                    <Icon>{CreateSVGComponent('Exception')}</Icon>
                    <Text variant="Body2">{item}</Text>
                  </IconTextWrapper>
                ))}
              </IncludedContentWrapper>
            )}
          </IncludedWrapper>
          {!!selectedPeril?.info && (
            <InfoWrapper>
              <InfoIcon>{CreateSVGComponent('Information')}</InfoIcon>
              <Text weight="bold" variant="Body2">
                Att tänka på
              </Text>
              <Text variant="Body3">{selectedPeril?.info}</Text>
            </InfoWrapper>
          )}
        </InformationWrapper>
      </ModalContentWrapper>
    </Modal>
  );
};

export default forwardRef(PerilsModal);

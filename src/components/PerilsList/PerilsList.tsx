import Card from '@/generics/Card';
import Image from '@/generics/Image';
import Text from '@/generics/Text';
import { PerilV2 } from '@/types/schemaTypes';
import { BasicAny } from '@/types/types';
import { device } from '@/utils/constants';
import { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { List, ListItem } from '../List';
import { ModalRef } from '../Modal/Modal';
import PerilsModal from './PerilsModal';

export interface PerilsListProps {
  perils: Array<PerilV2>;
}

export interface PerilProps {
  onClick: (event: BasicAny) => BasicAny;
  peril: PerilV2;
  index: number;
}

const PerilsListItem = styled(ListItem)`
  @media ${device.mobileS} {
    width: 50%;
  }
  @media ${device.tablet} {
    width: 25%;
  }
`;

const StyledPeril = styled(Card)<{ index: number }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;

  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  }

  margin-top: ${(props) => props.theme.size.margin.m4};
  margin-bottom: ${(props) => props.theme.size.margin.m4};

  @media ${device.mobileS} {
    padding: 4px 8px;
    height: 56px;
    ${(props) => props.index % 2 === 0 && `margin-right: ${props.theme.size.margin.m4}`};
    ${(props) => props.index % 2 === 1 && `margin-left: ${props.theme.size.margin.m4}`};

    & > p {
      padding-left: ${({ theme }) => theme.size.padding.p8};
    }
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 140px;

    & > img {
      width: 48px;
      height: 48px;
    }

    & > p {
      padding-left: 0px;
    }

    padding: ${(props) => props.theme.size.padding.p20};
    margin-left: ${(props) => (props.index % 4 === 0 ? 0 : props.theme.size.margin.m10)};
    margin-right: ${(props) => (props.index % 4 === 3 ? 0 : props.theme.size.margin.m10)};
  }

  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.size.borderRadius.br4};
`;

const PerilText = styled(Text)`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//The main component with dynamic rendering and state
export const Peril: FC<PerilProps> = ({ onClick, peril, index }) => {
  const handleClick = () => {
    onClick(peril);
  };

  return (
    <StyledPeril index={index} data-testid="Peril" shadow={1} onClick={handleClick}>
      <Image src={peril.icon.variants.light.svgUrl} alt={peril.title} width="20px" height="20px" />
      <PerilText variant="Body2">{peril.title}</PerilText>
    </StyledPeril>
  );
};

export const PerilsList: FC<PerilsListProps> = ({ perils }) => {
  const modalRef = useRef<ModalRef>(null);
  const [selectedPeril, setSelectedPeril] = useState<PerilV2 | null>(null);

  const handlePerilClick = (peril: PerilV2) => {
    setSelectedPeril(peril);
    modalRef.current?.toggle?.();
  };

  return (
    <>
      <List display="flex" direction="row" wrap="wrap">
        {perils.map((peril: PerilV2, index) => (
          <PerilsListItem key={peril.title}>
            <Peril data-testid={`Peril-${index}`} index={index} peril={peril} onClick={handlePerilClick} />
          </PerilsListItem>
        ))}
      </List>
      <PerilsModal ref={modalRef} perils={perils} selectedPeril={selectedPeril} setSelectedPeril={setSelectedPeril} />
    </>
  );
};

export default PerilsList;

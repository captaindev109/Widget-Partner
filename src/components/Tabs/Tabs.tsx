import React, { FC, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Text from '@/generics/Text';
import Card from '@/generics/Card';
import { TabsProps, TabProps } from '@/types/types';
import { ANIMATION_DURATION } from '@/utils/animationUtils';

const TabName = styled(Card)`
  margin: 0;
  cursor: pointer;
  display: grid;
  place-items: center;
  padding-bottom: 4px;
`;

const TextTabName = styled(Text)<{ $selected: boolean }>`
  transition: color ${ANIMATION_DURATION} ease-in;
  color: ${(props) => (props.$selected ? props.theme.color.gray900 : props.theme.color.gray500)};
  &:hover {
    color: ${(props) => props.theme.color.gray700};
  }
`;

export const Tab: FC<TabProps> = (props) => {
  const { label, selected, onClick } = props;
  return (
    <TabName onClick={onClick} shadow={selected ? '0px 2px 0px #121212' : ''}>
      <TextTabName $selected={selected} variant="HeadlineXS">
        {label}
      </TextTabName>
    </TabName>
  );
};

const TabNames = styled(Card)`
  display: flex;
  box-shadow: 0px 2px 0px #eaeaea;
`;

export const Tabs: FC<TabsProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { activeIndex: initialActiveIndex, children, onChange } = props;
  const childrenArray = useMemo(() => (Array.isArray(children) ? children : [children]), [children]);

  useEffect(() => {
    if (initialActiveIndex != undefined && initialActiveIndex < childrenArray.length) {
      setActiveIndex(initialActiveIndex);
    }
  }, [childrenArray, initialActiveIndex, setActiveIndex]);

  return (
    <>
      <TabNames>
        {childrenArray.map((tab, index) =>
          React.cloneElement(tab, {
            selected: index === activeIndex,
            key: tab.props.label,
            onClick: () => {
              !!onChange && onChange(index);
              setActiveIndex(index);
            },
          })
        )}
      </TabNames>
      <Card paddingTop="10px"> {childrenArray[activeIndex] && childrenArray[activeIndex].props.children}</Card>
    </>
  );
};

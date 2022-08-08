import { FC, useState } from 'react';
import styled, { useTheme } from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import Calendar from 'react-calendar';
import Card from '@/generics/Card';

import 'react-calendar/dist/Calendar.css';

import { CreateSVGComponent } from '../SVGIcons/Index';
import { BasicAny } from '@/types/types';

// A basic Interface or type is required for every each component
export interface DatepickerProps {
  selected: Date;
  onChange: (date: Date) => void;
  disabled?: boolean;
  disableTitle?: string;
}

// The styled component is using composition to inherit the base from Card component
const StyledCalendar = styled(Calendar)`
  border: 1px solid ${(props) => props.theme.color.gray900};
  border-radius: ${({ theme }) => theme.size.borderRadius.br4};
  overflow: hidden;
  z-index: 1;
`;

const CalendarWrapper = styled(Card)<{ isVisible: boolean }>`
  position: absolute;
  z-index: 2;
  width: 100%;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 140ms ease-in, visibility 140ms ease-in;
  margin-top: 8px;
  display: flex;

  button {
    transition: all 140ms ease-in;
  }

  abbr {
    text-decoration: none;
    font-family: ${(props) => props.theme.fonts.FAVORIT};
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
  }

  .react-calendar__navigation__label__labelText {
    font-family: ${(props) => props.theme.fonts.FAVORIT};
    font-size: 18px;
    line-height: 20px;
  }

  .react-calendar__navigation__arrow {
    font-family: ${(props) => props.theme.fonts.FAVORIT};
    font-size: 20px;
    line-height: 20px;
    &:disabled {
      visible: hidden;
    }
  }

  .react-calendar__tile--now {
    background-color: ${(props) => props.theme.color.purple500};
    &:hover {
      background-color: ${(props) => props.theme.color.purple300};
    }
  }

  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.color.gray900};
    &:hover {
      background-color: ${(props) => props.theme.color.gray500};
    }
  }

  .react-calendar__month-view__days__day--weekend {
    color: ${(props) => props.theme.color.gray500};
  }

  .react-calendar__month-view__weekdays__weekday {
    font-size: 12px;
    color: ${(props) => props.theme.color.gray900};
  }
`;

const IconWrapper = styled(Card)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 24px;

  display: flex;
  align-items: center;
`;

const DatepickerInput = styled(Card)<{ disabled: boolean }>`
  outline: none;
  appearance: none;
  background: none;
  border: none;
  display: flex;
  align-items: center;

  width: 100%;
  margin: 0;
  height: 52px;
  padding: 0px 16px;
  border-radius: ${({ theme }) => theme.size.borderRadius.br4};
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color.gray900};
  border: 1px solid ${(props) => props.theme.color.gray300};

  transition: border-color 140ms ease-in;

  ${(props) =>
    props.disabled
      ? `
      {
        cursor: default;
        background-color: ${props.theme.color.gray300};
        border: 1px solid ${props.theme.color.gray300};
        color: ${props.theme.color.gray500};
        &:hover {
          cursor: default;
        }
      }
  `
      : `
        &:hover {
          cursor: pointer;
          border: 1px solid ${props.theme.color.gray900};
        }
    `}
`;

//The main component with dynamic rendering and state
export const Datepicker: FC<DatepickerProps> = ({ selected, onChange, disabled = false, disableTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  const toggle = () => {
    if (!disabled) setIsVisible(!isVisible);
  };

  return (
    <Card>
      <Card position="relative">
        <DatepickerInput disabled={disabled} onClick={toggle}>
          {disableTitle && disabled ? disableTitle : selected.toLocaleDateString('sv-SE')}
        </DatepickerInput>
        <IconWrapper>
          {CreateSVGComponent('DownArrow', { color: disabled ? theme.color.gray500 : theme.color.gray900 })}
        </IconWrapper>
        <CalendarWrapper isVisible={isVisible}>
          <StyledCalendar
            value={selected}
            locale="sv-SE"
            minDate={new Date()}
            onChange={(date: BasicAny) => {
              toggle();
              onChange(date);
            }}
          />
        </CalendarWrapper>
      </Card>
    </Card>
  );
};

export default Datepicker;

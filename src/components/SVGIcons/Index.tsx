import { SVGComponentProps, SVGConfigProps } from '@/types/types';
import React from 'react';
import {
  CheckMark,
  Close,
  LeftArrow,
  RadioSelected,
  RadioUnselected,
  RadioDisabled,
  Information,
  Error,
  HelperInfo,
  DownArrow,
  Exception,
  Covered,
  CircleCheckIcon,
  BankIdIcon,
  BankIcon,
  TrustlyIcon,
  CheckboxSelected,
  CheckboxDisabled,
  WarningIcon,
} from './Icons';

// TODO: FIX TYPE
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SVGComponentsList: Record<any, any> = {
  CheckMark,
  Close,
  LeftArrow,
  Information,
  RadioSelected,
  RadioUnselected,
  RadioDisabled,
  Error,
  HelperInfo,
  DownArrow,
  Exception,
  Covered,
  CircleCheckIcon,
  BankIdIcon,
  BankIcon,
  TrustlyIcon,
  WarningIcon,
  CheckboxSelected,
  CheckboxDisabled,
};

export const CreateSVGComponent = (iconName: string, props: SVGConfigProps = {}) => {
  return React.createElement(SVGComponentsList[iconName], props);
};

export const SVGComponent: React.FC<SVGComponentProps> = ({ iconName, config }) => {
  return <>{CreateSVGComponent(iconName, config)}</>;
};

import { FC, ReactNode } from 'react';
import Card from '@/generics/Card';

export interface FooterProps {
  padding?: string;
  background?: string;
  shadow?: number | string;
  children?: ReactNode;
}

const Footer: FC<FooterProps> = (props) => {
  return <Card {...props} width="100%" position="absolute" bottom="0px" data-testid="footer" />;
};

Footer.defaultProps = {
  padding: '16px',
  background: 'white',
  shadow: 'footer',
};

export default Footer;

import { FC } from 'react';
import useStore from '@/hooks/useStore';
import FooterWithQuote from '.';

// A basic Interface or type is required for every each component
export interface ExoticFooterWithQuoteProps {
  children: React.ReactNode;
}

//The main component with dynamic rendering and state
const ExoticFooterWithQuote: FC<ExoticFooterWithQuoteProps> = ({ children }) => {
  const { cartCostSelector } = useStore();
  return <FooterWithQuote price={cartCostSelector}>{children}</FooterWithQuote>;
};

export default ExoticFooterWithQuote;

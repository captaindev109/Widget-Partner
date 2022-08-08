import { FC } from 'react';
import Text from '@/generics/Text';
import Card from '@/generics/Card';
import { MonetaryAmountV2 } from '@/types/schemaTypes';

// A basic Interface or type is required for every each component
export interface FooterWithQuoteProps {
  price: MonetaryAmountV2;
  children: React.ReactNode;
}

//The main component with dynamic rendering and state
const FooterWithQuote: FC<FooterWithQuoteProps> = ({ price, children }) => {
  return (
    <Card display="flex" alignItems="center" data-testid="FooterWithQuote">
      <Card flex="auto">
        <Text variant="Body2">
          {price.amount} {price.currency}/mnd
        </Text>
        <Text variant="Caption" color="gray700">
          Avsluta när du vill
        </Text>
      </Card>
      <Card>{children}</Card>
    </Card>
  );
};

export default FooterWithQuote;

import { DocumentLink, DocumentList } from '@/components/DocumentList';
import Card from '@/generics/Card';
import Text from '@/generics/Text';
import useStore from '@/hooks/useStore';
import { InsuranceTerm } from '@/types/schemaTypes';
import { FC } from 'react';

const ExoticCheckoutDocuments: FC = () => {
  const { checkoutTermsSelector } = useStore();

  return (
    <Card>
      {checkoutTermsSelector.map((item) => (
        <Card marginBottom="28px">
          <Card marginBottom="12px">
            <Text variant="HeadlineXS">{item.displayName}</Text>
          </Card>
          <DocumentList>
            {item.insuranceTerms?.map(({ url, displayName, type }: InsuranceTerm) => (
              <DocumentLink key={type} href={url}>
                {`${displayName} ↗︎`}
              </DocumentLink>
            ))}
          </DocumentList>
        </Card>
      ))}
    </Card>
  );
};

export default ExoticCheckoutDocuments;

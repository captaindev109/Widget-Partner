import { DocumentLink, DocumentList } from '@/components/DocumentList';
import useStore from '@/hooks/useStore';
import { InsuranceTerm } from '@/types/schemaTypes';
import { FC } from 'react';

const ExoticOfferDocuments: FC = () => {
  const { offerTermsSelector } = useStore();

  return (
    <DocumentList>
      {offerTermsSelector?.map(({ url, displayName, type }: InsuranceTerm) => (
        <DocumentLink key={type} href={url}>
          {`${displayName} ↗︎`}
        </DocumentLink>
      ))}
    </DocumentList>
  );
};

export default ExoticOfferDocuments;

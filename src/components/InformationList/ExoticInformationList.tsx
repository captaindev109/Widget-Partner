import { InformationItem, InformationList } from '@/components/InformationList';
import useStore from '@/hooks/useStore';
import { InsurableLimit } from '@/types/schemaTypes';
import { FC } from 'react';

const ExoticInformationList: FC = () => {
  const { limitsSelector } = useStore();

  return (
    <InformationList>
      {limitsSelector?.map(({ label, limit, description }: InsurableLimit, index) => (
        <InformationItem key={index} title={label} price={limit} description={description} />
      ))}
    </InformationList>
  );
};

export default ExoticInformationList;

import useStore from '@/hooks/useStore';
import { ExoticQuote } from '@/types/types';
import { FC } from 'react';
import { Tab, Tabs } from '.';
import PerilsList from '../PerilsList';

const ExoticTabs: FC = () => {
  const { bundleQuotesSelector, updateSelectedBundleTab } = useStore();
  const handleSelect = (index: number) => {
    if (!!bundleQuotesSelector[index]?.id) {
      updateSelectedBundleTab(bundleQuotesSelector[index].id);
    }
  };

  return (
    <Tabs onChange={handleSelect}>
      {bundleQuotesSelector?.map(({ name, perils }: ExoticQuote) => (
        <Tab key={name} label={name}>
          <PerilsList perils={perils} />
        </Tab>
      ))}
    </Tabs>
  );
};

export default ExoticTabs;

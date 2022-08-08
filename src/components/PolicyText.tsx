import React, { FC } from 'react';
import Text from '@/generics/Text';
import LinkText from '@/generics/LinkText';

export interface PolicyTextProps {
  text?: string;
  linkText?: string;
  linkUrl?: string;
}

const PolicyText: FC<PolicyTextProps> = ({ text, linkText, linkUrl }) => {
  return (
    <Text variant="Caption" color="gray500" data-testid="policy-text">
      {text}
      <LinkText data-testid="policy-link-text" href={linkUrl} target="_blank" rel="noopener noreferrer">
        {` ${linkText}`}
      </LinkText>
      .
    </Text>
  );
};

PolicyText.defaultProps = {
  text: 'Genom att klicka “Få ett prisförslag” accepterar du att du har tagit del av information om.',
  linkText: 'Hedvigs personuppgiftpolicy',
  linkUrl: 'https://www.hedvig.com/se/personuppgifter',
};

export default PolicyText;

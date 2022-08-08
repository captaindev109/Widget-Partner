import React from 'react';
import { Meta, Story } from '@storybook/react';
import { decorators } from '@/../.storybook/preview';
import { DocumentLink, DocumentList } from '.';
import { DocumentLinkProps } from './DocumentList';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/DocumentLink',
  component: DocumentLink,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<DocumentLinkProps> = (args) => (
  <DocumentList>
    <DocumentLink {...args}>Villkor och förköpsinformation ↗︎</DocumentLink>
    <DocumentLink {...args}>Produktfaktablad ↗︎</DocumentLink>
    <DocumentLink {...args}>Personuppgifter ↗︎</DocumentLink>
  </DocumentList>
);

export const DefaultDocumentLink = Template.bind({});

DefaultDocumentLink.args = {
  href: 'https://promise.hedvig.com/Hyresratt_sv_e1c1fb7e6c.pdf',
};

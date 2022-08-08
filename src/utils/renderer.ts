import React from 'react';
import { ConfigProps, Index, EachComponentObjectChildren, BasicAny } from '@/types/types';
import { UIComponents } from './components';

const recursivelyCreateReactComponents = (
  componentToCreate: BasicAny,
  configuration: ConfigProps,
  children: BasicAny
) => {
  if (typeof componentToCreate !== 'undefined') {
    return React.createElement(
      componentToCreate,
      configuration,
      children &&
        (typeof children === 'string'
          ? children
          : children.map((component: EachComponentObjectChildren, index: Index) => viewRenderer(component, index)))
    );
  }
  null;
};

const viewRenderer: BasicAny = (config: ConfigProps, index: Index) => {
  const children = config.children;
  const newConfig = { ...config, key: index };
  const LookForComponentInUILibrary = UIComponents[config.component];
  return recursivelyCreateReactComponents(LookForComponentInUILibrary, newConfig, children);
};

export default viewRenderer;

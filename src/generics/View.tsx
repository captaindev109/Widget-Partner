import { ViewProps, EachComponentDataSchema } from '@/types/types';
import Card from './Card';

// TODO fix types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const View = ({ children, components }: ViewProps): any => {
  return components.map((component: EachComponentDataSchema) => <Card key={component.id}>{children(component)}</Card>);
};

export default View;

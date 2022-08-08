import { FC } from 'react';
import useMain from '@/hooks/useMain';
import NavigationButton from './NavigationButton';

export interface RedirectButtonProps {
  to: 'next' | 'previous';
  children: string;
}

const RedirectButton: FC<RedirectButtonProps> = ({ to, children }: RedirectButtonProps) => {
  const { nextCourse, previousCourse } = useMain();

  return (
    <NavigationButton
      config={{ event_type: 'routing', event_destination: 'next' }}
      onClick={to === 'next' ? nextCourse : previousCourse}
      data-testid="redirect-button"
    >
      {children}
    </NavigationButton>
  );
};

export default RedirectButton;

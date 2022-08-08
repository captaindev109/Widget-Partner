import { useState } from 'react';

/**
 * __useVisible__
 *
 * Best used with a button that toggles the visibility of a component. Can wither be a select or a modal.
 *
 * @param initialState initial state of the component
 * @returns [isVisible, toggle]
 *
 * @example
 * const [isVisible, toggle] = useVisible(false);
 * toggle(true); - To set a specific value
 * or toggle(); - To toggle the value
 *
 */

const useVisible = (initialState = false): [boolean, (state?: boolean) => void] => {
  const [isVisible, setVisible] = useState<boolean>(initialState);

  const toggle = (state?: boolean) => {
    if (state && state !== isVisible) {
      setVisible(state);
    } else {
      setVisible((oldState) => !oldState);
    }
  };

  return [isVisible, toggle];
};

export default useVisible;

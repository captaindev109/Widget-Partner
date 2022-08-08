import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import { List, ListItem } from '@/components/List';

const MockComponent: React.FC = () => {
  return (
    <ApplicationThemeProvider theme={defaultTheme}>
      <List>
        <ListItem>
          <p>text 1</p>
        </ListItem>
        <ListItem>
          <p>text 2</p>
        </ListItem>
        <ListItem>
          <p>text 3</p>
        </ListItem>
        <ListItem>
          <p>text 4</p>
        </ListItem>
      </List>
    </ApplicationThemeProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<List /> Test Cases', () => {
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<MockComponent />);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

import {render, fireEvent, screen} from '@testing-library/react-native';
import {Button} from '../component/Button';

test('Button Rendered Correctly', () => {
  const testComponent = render(<Button />);
  expect(testComponent.getByText('Click Me')).toBeTruthy();
});

test('Button Triggers On Click', () => {
  const mock = jest.fn();
  const testComponent = render(<Button onPress={mock} />);
  fireEvent.press(testComponent.getByText('Click Me'));
  expect(mock).toHaveBeenCalled();
});

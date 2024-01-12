import { render, screen } from '@testing-library/react';

import { createContext } from './createContext';

describe('createContext', () => {
  test('context를 정의하고, context 값을 사용할 수 있다.', async () => {
    const [RootProvider, useContext] = createContext<{ value: string }>('Root');

    const Component = () => {
      const { value } = useContext('Component');

      return <div>{value}</div>;
    };

    render(
      <RootProvider value="default">
        <Component />
      </RootProvider>,
    );

    expect(await screen.findByText('default')).toBeTruthy();
  });

  test('Provider없이 사용할 경우 에러를 반환한다.', () => {
    const [, useContext] = createContext<{ value: string }>('Root');

    const Component = () => {
      const { value } = useContext('Component');

      return <div>{value}</div>;
    };

    expect(() => render(<Component />)).toThrow({
      name: 'ContextError',
      message: 'Component은 Root하위에서 사용할 수 있어요.',
    });
  });
});

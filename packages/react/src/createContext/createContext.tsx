import {
  PropsWithChildren,
  createContext as createContextRaw,
  useMemo,
  useContext as useContextRaw,
} from 'react';

export const createContext = <ContextValue extends object | null>(
  rootComponentName: string,
  defaultContext?: ContextValue,
) => {
  const Context = createContextRaw<ContextValue | undefined>(defaultContext);

  const Provider = (props: PropsWithChildren<ContextValue>) => {
    const { children, ...context } = props;

    const value = useMemo(() => context, [context]) as ContextValue;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = (childrenComponentName: string) => {
    const context = useContextRaw(Context);

    if (context === undefined) {
      throw new Error(`${childrenComponentName}은 ${rootComponentName}하위에서 사용할 수 있어요.`);
    }

    return context;
  };

  return [Provider, useContext] as const;
};

import { FC, PropsWithChildren, StrictMode, Suspense } from 'react';

const App: FC<PropsWithChildren> = ({ children }) => {
  return <Suspense> {children} </Suspense>;
};

const AppStrict: FC<PropsWithChildren> = (props) => (
  <StrictMode>
    <App {...props} />
  </StrictMode>
);

export default AppStrict;

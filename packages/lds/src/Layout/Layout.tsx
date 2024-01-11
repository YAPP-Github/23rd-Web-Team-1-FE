import { container } from './Layout.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className={container}>{children}</section>;
};

export default Layout;

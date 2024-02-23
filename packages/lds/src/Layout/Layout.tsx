import { assignInlineVars } from '@vanilla-extract/dynamic';

import { bgColorVar, container } from './Layout.css';

interface Props {
  children: React.ReactNode;
  bgColor?: string;
}

const Layout = ({ children, bgColor }: Props) => {
  return (
    <section
      className={container}
      style={assignInlineVars(bgColorVar, {
        backgroundColor: bgColor == null ? 'inherit' : bgColor,
      })}
    >
      {children}
    </section>
  );
};

export default Layout;

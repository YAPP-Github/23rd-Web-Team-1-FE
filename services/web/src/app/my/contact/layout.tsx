import { Layout } from '@linker/lds';
import { colors } from '@linker/styles';

function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Layout bgColor={colors.gray000}>{children}</Layout>;
}
export default ContactLayout;

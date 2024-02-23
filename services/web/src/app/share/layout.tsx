import { BackHeader, Layout } from '@linker/lds';
import { colors } from '@linker/styles';

import { backHeader } from './QRCard.css';

const ShaerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout bgColor={colors.gray000}>
      <BackHeader title="내 QR 코드" className={backHeader} />
      {children}
    </Layout>
  );
};

export default ShaerLayout;

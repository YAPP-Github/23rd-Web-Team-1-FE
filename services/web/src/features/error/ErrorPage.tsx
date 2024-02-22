import { Button, Icon, Layout, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { HTTPError } from 'ky';

import { container, cta, errorMessage, title } from './ErrorPage.css';

interface Props {
  error?: HTTPError;
  onClick?: () => void;
}

const Error = ({ error, onClick }: Props) => {
  return (
    <Layout>
      <div className={container}>
        <Icon name="subtract-fill-gray" size={64} />
        <Txt typography="h6" fontWeight="medium" color={colors.gray900} className={title}>
          페이지를 찾을 수 없어요
        </Txt>

        <Txt typography="p1" fontWeight="regular" color={colors.gray500}>
          잠시 후 다시 시도해주세요
        </Txt>

        {process.env.NODE_ENV === 'development' && error != null && (
          <>
            <Txt
              typography="p1"
              fontWeight="regular"
              color={colors.gray900}
              className={errorMessage}
            >
              {error.message}
            </Txt>
          </>
        )}

        <Button onClick={() => onClick?.()} className={cta}>
          이전으로 돌아가기
        </Button>
      </div>
    </Layout>
  );
};

export default Error;

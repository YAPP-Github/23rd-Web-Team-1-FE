import { Button, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';
import Link from 'next/link';

import { button } from './MoreButton.css';

function MoreButton() {
  return (
    <Link href="/trend">
      <Button className={button}>
        <Image
          src="https://static.im-linker.com/icons/refresh.png"
          width={20}
          height={20}
          alt="pencil-icon"
        />
        <Txt typography="b3" color={colors.blue500}>
          관심사 최신뉴스&nbsp;
        </Txt>
        <Txt typography="b3" color={colors.gray500}>
          더 보기&nbsp;
        </Txt>
        {/** @todo 기획적으로 명확하지 않아 임시로 markup만 작성. 추후 구현필요 */}
        <Txt typography="b3" color={colors.gray500}>
          1/5
        </Txt>
      </Button>
    </Link>
  );
}

export default MoreButton;

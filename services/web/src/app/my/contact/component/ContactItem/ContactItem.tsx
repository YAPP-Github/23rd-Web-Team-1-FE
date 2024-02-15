import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import Image from 'next/image';

import { contactItemWrapper, textWrapper, imageWrapper } from './ContactItem.css';
import { ContactData } from '../../types/contact';

function ContactItem({ name, profileImgUrl, careers, school }: ContactData) {
  return (
    <div className={clsx(contactItemWrapper)}>
      <div className={clsx(imageWrapper)}>
        <Image src={profileImgUrl} width={50} height={50} alt="profileImg" />
      </div>
      <div className={clsx(textWrapper)}>
        <Txt typography="p2" color={colors.black}>
          {name}
        </Txt>
        <Txt typography="p5" color={colors.gray400}>
          {careers ?? school}
        </Txt>
      </div>
    </div>
  );
}
export default ContactItem;

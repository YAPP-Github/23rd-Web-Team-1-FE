import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import Image from 'next/image';

import {
  contactItemWrapper,
  textWrapper,
  careerTextWrapper,
  imageWrapper,
} from './ContactItem.css';
import { ContactData } from '../../types/contact';

function ContactItem({ name, profileImgUrl, careers, school, association }: ContactData) {
  return (
    <div className={clsx(contactItemWrapper)}>
      <div className={clsx(textWrapper)}>
        <Txt typography="p1" color={colors.gray700}>
          {name}
        </Txt>
        <div className={clsx(careerTextWrapper)}>
          <Txt typography="p4" color={colors.gray700}>
            {careers}
          </Txt>
          <Txt typography="p4" color={colors.gray700}>
            .
          </Txt>
          <Txt typography="p4" color={colors.gray700}>
            {association ?? school}
          </Txt>
        </div>
      </div>
      <div className={clsx(imageWrapper)}>
        <Image src={profileImgUrl} width={50} height={50} alt="profileImg" />
      </div>
    </div>
  );
}
export default ContactItem;

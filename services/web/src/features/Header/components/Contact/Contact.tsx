import { clsx } from 'clsx';

import { wrapper, profileWrapper } from './Contact.css';

interface ContactProps {
  name: string;
  career: string;
  company: string;
  profileImgUrl: string;
}
function Contact({ name, career, company, profileImgUrl }: ContactProps) {
  return <section className={clsx(wrapper)}></section>;
}
export default Contact;

import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="https://static.im-linker.com/icons/logo.svg"
      alt="Linker ogo"
      width={72}
      height={24}
      priority
      placeholder="blur"
    />
  );
};

export default Logo;

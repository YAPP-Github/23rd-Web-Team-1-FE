import Image from 'next/image';

interface Props {
  type?: 'default' | 'fill';
  width?: number;
  height?: number;
}

const Logo = ({ type = 'default', width = 72, height = 24 }: Props) => {
  const logoName = type === 'default' ? 'logo' : 'logo-fill';

  return (
    <Image
      src={`https://static.im-linker.com/icons/${logoName}.svg`}
      blurDataURL={`https://static.im-linker.com/icons/${logoName}.svg`}
      alt="Linker logo"
      width={width}
      height={height}
      priority
      placeholder="blur"
    />
  );
};

export default Logo;

import Image from 'next/image';

interface Props {
  type?: 'default' | 'fill';
  width?: number;
  height?: number;
}

const Logo = ({ type = 'default', width = 72, height = 24 }: Props) => {
  return (
    <Image
      src={`https://static.im-linker.com/icons/${type === 'default' ? 'logo' : 'logo-fill'}.svg`}
      blurDataURL={`https://static.im-linker.com/icons/${type === 'default' ? 'logo' : 'logo-fill'}.svg`}
      alt="Linker logo"
      width={width}
      height={height}
      priority
      placeholder="blur"
    />
  );
};

export default Logo;

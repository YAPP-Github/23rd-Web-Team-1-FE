import Image, { ImageProps } from 'next/image';

const bucket = 'https://static.im-linker.com';

interface Props extends Omit<ImageProps, 'src' | 'alt' | 'width'> {
  name: string;
  size?: number;
}

const Icon = ({ name, size = 32, ...props }: Props) => {
  return (
    <Image
      src={`${bucket}/icons/${name}.svg`}
      alt={`${name} icon`}
      width={size}
      height={size}
      {...props}
    />
  );
};

export default Icon;

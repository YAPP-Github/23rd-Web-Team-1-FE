import Image, { ImageProps } from 'next/image';

const bucket = 'https://static.im-linker.com';

interface Props extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> {
  name: string;
  size?: number;
  height?: number;
}

const Icon = ({ name, size = 32, height, ...props }: Props) => {
  return (
    <Image
      src={`${bucket}/icons/${name}.svg`}
      alt={`${name} icon`}
      width={size}
      height={height ?? size}
      {...props}
    />
  );
};

export default Icon;

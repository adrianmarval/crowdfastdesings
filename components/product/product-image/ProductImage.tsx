import Image from 'next/image';
import { resolveProductImageUrl } from '@/lib/resolve-image-url';

interface Props {
  src?: string;
  alt: string;
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'];
  style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
  width: number;
  height: number;
  priority?: boolean;
}

export const ProductImage = ({ src, alt, className, style, width, height, priority = false }: Props) => {
  const localSrc = resolveProductImageUrl(src);

  return (
    <Image src={localSrc} width={width} height={height} alt={alt} className={className} style={style} priority={priority} quality={80} />
  );
};

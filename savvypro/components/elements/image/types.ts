interface RequiredProps {
  className?: string;
  style?: any;
  webp: {
    1: string;
    2: string;
  };
}

export interface PngProps extends RequiredProps {
  png: {
    1: string;
    2: string;
  };
}

export interface JpegProps extends RequiredProps {
  jpeg: {
    1: string;
    2: string;
  };
}
export interface SvgProps {
  svg: string;
  className?: string;
  style?: any;
  webp?: {
    1: string;
    2: string;
  };
}
export type ImageProps = JpegProps | PngProps | SvgProps;
export function isJpeg(
  props: JpegProps | PngProps | SvgProps
): props is JpegProps {
  return ((props as JpegProps).jpeg !== undefined) as any;
}
export function isSvg(
  props: JpegProps | PngProps | SvgProps
): props is SvgProps {
  return ((props as SvgProps).svg !== undefined) as any;
}

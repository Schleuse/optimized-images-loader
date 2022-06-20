import type { EncodeOptions as MozjpegOptions } from '@wasm-codecs/mozjpeg/lib/types';
import type { EncodeOptions as OxipngOptions } from '@wasm-codecs/oxipng/lib/types';
import type { EncodeOptions as GifsicleOptions } from '@wasm-codecs/gifsicle/lib/types';
import type { WebpOptions } from 'sharp';
import type { OptimizeOptions as SvgoOptions } from "svgo"

export interface LoaderOptions {
  optimize?: boolean;
  cacheFolder?: string;
  includeStrategy?: 'string' | 'react';
  mozjpeg?: MozjpegOptions;
  oxipng?: OxipngOptions;
  webp?: WebpOptions;
  gifsicle?: GifsicleOptions;
  svgo?: SvgoOptions,
  svgr?: Record<string, unknown>;
}

export interface OptionObject {
  [key: string]: any; // eslint-disable-line
}

// default options for file- & url-loader
export const defaultFurtherLoaderOptions = {
  name: '[name]-[contenthash].[ext]',
  limit: 8192,
};

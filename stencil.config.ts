import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'commentable',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    }
  ]
};

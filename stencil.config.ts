import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'array-shorthand-bug',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'array-shorthand-bug',
      directivesProxyFile: './index.ts',
    }),
  ],
};

import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  tools: {
    rspack(config, { addRules }) {
      addRules([
        {
          test: /\.json$/,
          // Convert assets to separate files and keep import statements
          type: 'asset/resource',
          generator: {
            importMode: 'preserve',
          },
        },
      ]);
    },
  },
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [
    pluginReact(),
    pluginSass()
  ],
});

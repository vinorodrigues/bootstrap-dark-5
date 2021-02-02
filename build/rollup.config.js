import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const banner = require('./banner.js');

const commonConfig = {
  input: 'js/src/darkmode.js',
  output: {
    banner,
    name: 'darkmode'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectories: [
          'node_modules'
        ]
      }
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'inline'
    }),
    commonjs()
  ]
};

const MIN = process.env.MIN === 'true';

// ---------- ESM ----------

// ESM config
const esmConfig = Object.assign({}, commonConfig);
esmConfig.output = Object.assign({}, commonConfig.output, {
  file: 'dist/js/darkmode.esm.js',
  format: 'esm'
});

// ESM prod config
const esmProdConfig = Object.assign({}, esmConfig);
esmProdConfig.output = Object.assign({}, esmConfig.output, {
  file: 'dist/js/darkmode.esm.min.js'
});
esmProdConfig.plugins = [
  ...esmConfig.plugins,
  terser()
];

// ---------- CJS ----------

// CJS config
const cjsConfig = Object.assign({}, commonConfig);
cjsConfig.output = Object.assign({}, commonConfig.output, {
  file: 'dist/js/darkmode.js',
  format: 'cjs'
});
cjsConfig.plugins = [
  ...commonConfig.plugins
];

// Production config
const cjsProdConfig = Object.assign({}, cjsConfig);
cjsProdConfig.output = Object.assign({}, cjsConfig.output, {
  file: 'dist/js/darkmode.min.js'
});
cjsProdConfig.plugins = [
    ...cjsConfig.plugins,
    terser()
];

// ---------- Build ----------

let configurations = [];
if (!MIN) {
  configurations.push(
    esmConfig,
    cjsConfig
  );
} else {
  configurations.push(
    esmProdConfig,
    cjsProdConfig
  );
}

export default configurations;

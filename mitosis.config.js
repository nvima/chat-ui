const { CustomReactPlugin } = require('./plugins/react.ts');
const { CustomSolidPlugin } = require('./plugins/solid.ts');

module.exports = {
    prettier: false,
    files: 'src/components/**',
    targets: ['vue3', 'react', 'solid'],
    options: {
        react: {
            // typescript: true,
            plugins: [CustomReactPlugin],
        },
        solid: {
            // typescript: true,
            plugins: [CustomSolidPlugin],
        },
    }
};
// module.exports = {
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['@builder.io/mitosis'],
//   extends: [
//     // Use this approach for our recommended rules configuration
//     'plugin:@builder.io/mitosis/recommended',
//   ],
//   rules: {
//     // Use this to configure rules individually
//     '@builder.io/mitosis/css-no-vars': 'error',
//   },
// };

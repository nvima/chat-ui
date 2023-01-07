const { CustomReactPlugin } = require('./plugins/react.ts');

module.exports = {
    files: 'src/components/**',
    targets: ['vue3', 'solid', 'svelte', 'react'],
    options: {
        react: {
            // typescript: true,
            plugins: [CustomReactPlugin],
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

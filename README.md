# eslint-config-tjw-import

The Jared Wilcurt's strict ESLint rules for importing files.


## Using this

1. `npm install --save-dev eslint-plugin-import eslint-config-tjw-import`
1. In your `.eslitrc.js` add `tjw-import` to your `extends` like so:
    ```js
    module.exports = {
      extends: [
        'tjw-import'
      ]
    };
    ```


## Vite/Webpack aliases

You may optionally want to add in an import resolver if you use **Vite** or **Webpack** for aliasing. The below code says "webpack" but works for both.

`npm install --save-dev eslint-import-resolver-webpack`

```js
// .eslintrc.js
const path = require('path');

module.exports = {
  extends: [
    'tjw-import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve('src'),
              '@@': path.resolve('tests'),
              '@@@': path.resolve('docs')
            }
          }
        }
      }
    }
  }
};
```


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)

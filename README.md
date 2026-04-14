# eslint-config-tjw-import

The Jared Wilcurt's strict ESLint rules for importing files.

## Important

This repo is for ESLint 9. It uses `eslint-plugin-import` which does not yet have ESLint 10 support.

If you want ESLint 10+ use [eslint-config-tjw-import-x](https://github.com/tjw-lint/eslint-config-tjw-import-x).

* * *

## Migrating to eslint-config-tjw-import-x/ESLint 10

1. Delete the `.eslintrc.cjs` file.
1. `npm uninstall eslint-plugin-import eslint-config-tjw-import`
1. `npm i -D eslint@10 eslint-plugin-import-x eslint-config-tjw-import-x eslint-import-resolver-vite@latest`
1. Edit the `eslint.config.js`:

```diff
 import path from 'node:path';

-import importPlugin from 'eslint-plugin-import';
+import importPlugin from 'eslint-plugin-import-x';
-import tjwImport from 'eslint-config-tjw-import';
+import tjwImport from 'eslint-config-tjw-import-x';

 const __dirname = import.meta.dirname;

 export default [
   importPlugin.flatConfigs.recommended,
   tjwImport,
   {
     // Project specific rules/settings
     settings: {
-      'import/resolver': {
+      'import-x/resolver': {
         vite: {
           viteConfig: {
             resolve: {
               alias: {
                 '@': path.resolve(__dirname, 'src'),
                 '@@': path.resolve(__dirname, 'tests'),
                 '@@@': path.resolve(__dirname, 'docs')
               }
             }
           }
         }
       }
     }
   }
 ];
```


* * *


## Using this

1. `npm install --save-dev eslint eslint-plugin-import eslint-config-tjw-import`
1. In your `eslint.config.js`:
    ```js
    import importPlugin from 'eslint-plugin-import';
    import tjwImport from 'eslint-config-tjw-import';

    export default [
      importPlugin.flatConfigs.recommended,
      tjwImport,
      {
        // Then project specific rules/settings
      }
    ];
    ```
1. You will also need to create an empty `.eslintrc.cjs` file in the root of your project, due to a [known bug](https://github.com/import-js/eslint-plugin-import/issues/3079)



## Vite aliases

You may want to add in an import resolver if you use **Vite** for aliasing.

`npm install --save-dev eslint-import-resolver-vite`

```js
// eslint.config.js
import path from 'node:path';

import importPlugin from 'eslint-plugin-import';
import tjwImport from 'eslint-config-tjw-import';

const __dirname = import.meta.dirname;

export default [
  importPlugin.flatConfigs.recommended,
  tjwImport,
  {
    // Project specific rules/settings
    settings: {
      'import/resolver': {
        vite: {
          viteConfig: {
            resolve: {
              alias: {
                '@': path.resolve(__dirname, 'src'),
                '@@': path.resolve(__dirname, 'tests'),
                '@@@': path.resolve(__dirname, 'docs')
              }
            }
          }
        }
      }
    }
  }
];
```


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import) (ESLint <10)
* [eslint-config-tjw-import-x](https://github.com/tjw-lint/eslint-config-tjw-import-x) (ESLint 10+)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)

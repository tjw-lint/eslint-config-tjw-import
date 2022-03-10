module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'always'
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': [
      'error',
      {
        allowComputed: false
      }
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ],
    'import/no-absolute-path': [
      'error',
      {
        amd: true,
        commonjs: true,
        esmodule: true
      }
    ],
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: true
      }
    ],
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': [
      'error',
      {
        considerQueryString: false
      }
    ],
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        bundledDependencies: false,
        devDependencies: [
          '**/*.test.js',
          '**/tests/unit/*.js',
          '**/e2e/support/*.js',
          '**/e2e/plugins/*.js',
          '**/vue.config.js'
        ],
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': [
      'error',
      {
        amd: true,
        caseSensitive: true,
        caseSensitiveStrict: true,
        commonjs: true
      }
    ],
    'import/no-unused-modules': [
      'error',
      {
        missingExports: false,
        unusedExports: true
      }
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: false
      }
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: false,
          order: 'asc'
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/helpers/**',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@/mixins/**',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '**/*.vue',
            group: 'object',
            position: 'before'
          },
          {
            pattern: '@@/**',
            group: 'object',
            position: 'before'
          }
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off'
  }
};

# @moorthy-g/cra-template

This is the custom template for [Create React App](https://github.com/facebook/create-react-app).

To use this template, add --template @moorthy-g/cra-template when creating a new app.

For example:

```
npx create-react-app my-app --template @moorthy-g/cra-template

#or

yarn create react-app my-app --template @moorthy-g/cra-template
```

## Customization summary

- Directory structure update.
- Include .editorconfig
- Do not open browser when 'start' script runs.
- Enforce [angular conventional commit standards](https://github.com/conventional-changelog/commitlint) (Use commitlint, commitizen & husky).
- Format staged files in pre-commit hook with prettier & pretty-quick.
- Shorter css modules classname in build.
- Bundle reporting with "webpack-bundle-analyzer" plugin
- Progress visibility with "webpackbar"

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.

## StoryBook Study

## storybook에 emotion 적용하기

- yarn add @emotion/core
- declare module '@emotion/core';
- Pragma : /\*_ @jsxImportSource @emotion/react _/

## storybook에 SVG Component 사용

스토리북의 기본 webpack 설정에 이미 file-loader로 svg를 변환하고 있기 때문에 svg를 컴포넌트로 랜더링하면 오류가 난다.

- yarn add @svgr/webpack --save-dev
- ./storybook/main.js

```
module.exports = {
 // ...
  webpackFinal: async config => {
    // ...
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [‘@svgr/webpack’],
    });
    // ...
    return config;
  }
}
```

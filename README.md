## StoryBook Study

## storybook에 emotion 적용하기

- yarn add @emotion/core
- declare module '@emotion/core';
- Pragma : /\*_ @jsxImportSource @emotion/react _/
- .babelrc

```
{
    "presets": [
        [
            "@babel/preset-react",
            {
                "runtime": "automatic",
                "importSource": "@emotion/react"
            }
        ]
    ],
    "plugins": [
        "@emotion/babel-plugin"
    ]
}
```

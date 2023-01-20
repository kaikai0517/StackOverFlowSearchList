This project was tailwindcss with [Create React App](https://github.com/facebook/create-react-app)

# Stack Overflow Question Search List
A webapp that can search stack overflow question.
Using Debounce and lazy data-loading to enhance app performance.
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![image](./src/assets/demo.gif)

## Installation

```shell
$ git clone git@github.com:kaikai0517/StackOverFlowSearchList.git
$ cd StackOverFlowSearchList
$ npm install && npm start (or using yarn instead)
```

## Features:
  - [X] Infinite Scroll
  - [X] Lazy Load
  - [X] Performance
  - [X] Debounce
  - [X] Custom Fetch Hooks
  - [X] Redux

### Infinite Scroll && Lazy Load
Use `IntersectionObserver` API to achieve infinite scroll and only load more data while scrolling to current bottom boundary.

### Performance
In addition to lazy-loading data, this repo also use react core functions to enhance app performance, such as `useCallback`...etc.

## Source Code File Structure
```
src
├── app
│   └── store.js
├── assets
│   └── demo.gif
├── components
│   └── style
│        └── Loading.css
│   └── LazyLoading.js
│   └── Loading.js
│   └── Question.js
│   └── QuestionList.js
│   └── Search.js
│   └── Tags.js
├── constant
│   └── api.js
├── features
│   └── searchSlice.js
│   └── tagSlice.js
├── hooks
│   └── useFetchQuestions.jsx
│   └── useFetchTags.jsx
├── services
│   └── axios.js
│   └── Request.js
├── views
│   └── HomeScreen.js
└── App.js
└── index.css
└── index.jx
```

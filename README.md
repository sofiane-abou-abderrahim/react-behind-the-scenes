# Behind The Scenes

## Understanding & Optimizing React

- How React Updates The DOM
- Avoiding Unnecessary Updates
- A Closer Look At Keys
- State Scheduling & State Batching

## Steps

## 0. Starting Project

1. run `npm install`
2. run `npm run dev`
3. create `README.md`

## 1. Avoiding Component Function Executions with memo()

1. wrap the `Counter.jsx` component function with the `memo` function imported from React
   => `memo` only prevents function executions that are triggered by the parent component, so in this case the `App.jsx` component
   => `memo` does not care about internal changes
   => But external changes of course only makes sense for this component here to be executed if the prop value changed
2. Don't overuse `memo` because checking props with `memo` costs performance

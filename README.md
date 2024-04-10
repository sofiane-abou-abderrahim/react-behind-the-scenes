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

## 2. Avoiding Component Function Executions with Clever Structuring

1. create a new `ConfigureCounter.jsx` component
2. define a new `handleSetCount` function in `App.jsx` to pass the information whether the user clicked on the set button from ``ConfigureCounter.jsx`
3. output the `<ConfigureCounter>` component in `App.jsx`
4. you could consider removing `memo` from `Counter.jsx` because now it doesn't make much sense anymore

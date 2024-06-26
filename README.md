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
   1. `memo` only prevents function executions that are triggered by the parent component, so in this case the `App.jsx` component
   2. `memo` does not care about internal changes
   3. But external changes of course only makes sense for this component here to be executed if the prop value changed
2. Don't overuse `memo` because checking props with `memo` costs performance

## 2. Avoiding Component Function Executions with Clever Structuring

1. create a new `ConfigureCounter.jsx` component
2. define a new `handleSetCount` function in `App.jsx` to pass the information whether the user clicked on the set button from ``ConfigureCounter.jsx`
3. output the `<ConfigureCounter>` component in `App.jsx`
4. you could consider removing `memo` from `Counter.jsx` because now it doesn't make much sense anymore

## 3. Understanding the useCallback() Hook

1. wrap the `IconButton.jsx` component function with the `memo` function
2. use the `useCallback` hook in `Counter.jsx` in conjunction with `memo` to avoid unnecessary re‐executions

## 4. Understanding the useMemo() Hook

1. use the `useMemo` hook in `Counter.jsx` by wrapping the `isPrime` function
   1. this hook prevents the execution of normal functions that are called inside of component functions, unless their input changed
2. don't overuse `useMemo()`

## 5. Why Keys Matter When Managing State!

1. update `Counter.jsx`
2. output the `<CounterHistory>` component in `Counter.jsx`
3. change the logic in `Counter.jsx` so that you have an `id` that does belong to a concrete change object
4. in `CounterHistory.jsx`, use a `key` value that is strictly connected to a specific value to prevent the state from jumping across component instances

## 6. Using Keys For Resetting Components

1. use `useEffect` as a solution for resetting the `initialCount` in `Counter.jsx`
2. use a `key` prop on the `<Counter>` component in `App.jsx` instead of `useEffect` as it's a better way of forcing a component functional reset

## 7. State Scheduling & Batching

1. log the `chosenCount` state inside the `handleSetCount` function in `App.jsx` to find out how states are scheduled
2. try to updated the `chosenCount` like this `setChosenCount(chosenCount + 1);` to see that it will get a strange result
3. update the `chosenCount` state with the function form where you get the `prevChosenCount` to get the `newCount` + 1
4. React performs state batching, which simply means that multiple state updates that are triggered from the same function, for example, are batched together and will only lead to one component function execution

## 8. Optimizing React with MillionJS

1. run `npm install million`
2. update `vite.config.js`

1. What problem does the context API help solve?

The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: Actions are payloads of information that send data from the application to the store. They are the only source of information for the store. You send them to the store using store. dispatch().
Reducer: A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change in state.
Store: A store holds the whole state tree of the application. The only way to change the state inside it is to dispatch an action on it.
The store is known as "single source of truth' in redux application" since it makes the component controllable. It means that the only way to change the data in UI is to dispatch redux action which will change state within redux reducer. And the React components will watch this reducer and if that reducer changes, then UI will change itself too. But never other way around, because Redux state is single source of truth.


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global, and the component state is local.  In Redux, we call a place 'store' to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.
What state and when: Component state is not accessible from other components unless it’s explicitly passed as props to it’s sub components. When the number of components increases, the passing of props starts becoming cumbersome.But global state is a centralised to redux store which is accessible to any component that subscribes to the store.So size and components composition are the major factor in deciding which state is better to use in a particular application.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that let us call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I like to use component state since they are easy to use and I have more experience of working on them. But at the same time, The projects I have worked so far didn't have many components so passing the state via props was not a hard thing to do. But for big application with many components, I would love to use redux since the state is confined to single place called store and that state can be used anywhere in the component tree.

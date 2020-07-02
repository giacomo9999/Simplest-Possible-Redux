const redux = require("redux");
const createStore = redux.createStore;

const initialState = { counter: 0 };

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "ADD_TO_COUNTER":
      return {
        ...state,
        counter: state.counter + action.value,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "INCREMENT_COUNTER" });
store.dispatch({ type: "ADD_TO_COUNTER", value: 10 });

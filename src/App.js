import './App.css';
import { useReducer } from "react";

function App() {
  return (
    <div className="App">
      <AddBox />
    </div>
  );
}

const initialState = { color: "blue" };

const reducer = (state, action) => {
  switch(action.type){
    case "handleChange":
      return {color: state.color};
    default:
      return state;
  }
};

function AddBox() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const styles = { background: state.color };
  console.log(state.color)
  const handleChange = (event) => event.target.value;

  return (
    <div>
      <input
        value={state.color}
        style={styles}
        onChange={() => dispatch({type: handleChange})}
        placeholder="Enter a Color"
      />
    </div>
  );
}

export default App;

import List from "../List";
import "./styles.css";
import { useReducer } from "react";
import { reducer } from "../reducer";

const initialState = {
  person: "",
  people: [{ id: new Date().getTime().toString(), name: "Murat" }],
  isModalOpen: true,
  modalContent: ""
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeletePerson = (id) => {
    dispatch({ type: "DELETE_PERSON", payload: id });
    console.log(id);
  };

  return (
    <>
      <h1>People</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={state.person}
          onChange={(e) => {
            dispatch({ type: "SET_PERSON", payload: e.target.value });
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            dispatch({ type: "SET_PEOPLE" });
          }}
        >
          {" "}
          Add Person
        </button>
      </form>
      <List people={state.people} onClick={handleDeletePerson} />
      <div style={{ marginTop: "1rem" }}></div>
      <button type="button" onClick={() => dispatch({ type: "CLEAR_LIST" })}>
        Clear List
      </button>
    </>
  );
}

export default App;

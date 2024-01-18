export const reducer = (state, action) => {
  if (action.type === "SET_PERSON") {
    const newPerson = action.payload;
    return { ...state, person: newPerson };
  }
  if (action.type === "SET_PEOPLE") {
    const addPerson = {
      id: new Date().getTime().toString(),
      name: state.person
    };
    return { ...state, people: [...state.people, addPerson], person: "" };
  }
  if (action.type === "CLEAR_LIST") {
    return { ...state, people: [], person: "" };
  }
  if (action.type === "DELETE_PERSON") {
    const newPeople = state.people.filter((person) => {
      person.id !== action.payload;
    });
    return { ...state, people: newPeople };
  }

  throw new Error("Not matching type");
};

const List = ({ people, handleDeletePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <p>{person.name}</p>
            <button
              type="button"
              onClick={() => {
                handleDeletePerson(person.id);
              }}
            >
              Delete Person
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;

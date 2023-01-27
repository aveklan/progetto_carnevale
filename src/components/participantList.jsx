import Table from "react-bootstrap/Table";

const ParticipantList = ({ participants, onRemove }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Cognome</th>
            <th>Nome</th>
            <th>Anno</th>
            <th>Sesso</th>
            <th>Residenza</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {participants.map((id, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{id.surname}</td>
              <td>{id.name}</td>
              <td>{id.year}</td>
              <td>{id.gender}</td>
              <td>{id.province}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  id={index}
                  onClick={onRemove}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ParticipantList;

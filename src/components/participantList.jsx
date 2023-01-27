const ParticipantList = ({ participants }) => {
  return (
    <div>
      {participants.map((id) => (
        <div className="user" key={id.id}>
          {id.id}
          {id.surname}
          {id.name}
          {id.year}
          {id.gender}
          {id.province}
        </div>
      ))}
    </div>
  );
};

export default ParticipantList;

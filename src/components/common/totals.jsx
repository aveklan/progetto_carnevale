const Totals = ({ participants }) => {
  var totM = 0,
    totF = 0,
    tot = participants.length;

  const calculateTotals = () => {
    for (var i in participants) {
      if (participants[i].gender === "M") totM++;
      else if (participants[i].gender === "F") totF++;
    }
  };

  calculateTotals();

  return (
    <div>
      <p>Numero totale maschi: {totM}</p>
      <p>Numero totale femmine: {totF}</p>
      <p>Numero totale: {tot}</p>
    </div>
  );
};

export default Totals;

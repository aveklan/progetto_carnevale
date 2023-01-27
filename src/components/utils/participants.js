let participants;

export function saveParticipants() {
  var participant = "";
  for (var id in participants) {
    var numero = 1;
    numero += parseInt(id);
    participant += "Numero: " + numero;
    participant += "\tCognome: " + participants[id].surname;
    participant += "\tNome: " + participants[id].name;
    participant += "\tAnno: " + participants[id].year;
    participant += "\tSesso: " + participants[id].gender;
    participant += "\tResidenza: " + participants[id].province;
    participant += "\r\n";
  }

  const fileData = participant;
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "partecipanti.txt";
  link.href = url;
  link.click();
}

export function loadParticipants() {
  let localParticipants = localStorage.getItem("participants");
  participants = localParticipants ? JSON.parse(localParticipants) : [];
  return participants;
}

export function getParticipants() {
  return participants;
}

export function resetParticipants() {
  participants = [];
  localStorage.setItem("participants", []);
}

export function addParticipant(participant) {
  participants.push(participant);
  localStorage.setItem("participants", JSON.stringify(participants));
}

export function removeParticipant(id) {
  participants.splice(id, 1);
  localStorage.setItem("participants", JSON.stringify(participants));
}

let participants = [];

export const saveParticipants = () => {
  const fileData = JSON.stringify(participants);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "participants.json";
  link.href = url;
  link.click();
};

export const loadParticipants = () => {
  let localParticipants = localStorage.getItem("participants");
  if (localParticipants) participants.push(localParticipants);
  else participants = [];
  return participants || [];
};

export const getParticipants = () => {
  return participants;
};

export const resetParticipants = () => {
  participants = [];
  localStorage.setItem("participants", []);
};

export const addParticipant = (participant) => {
  participant.id = "" + (participants.length + 1);
  participants.push(participant);
  localStorage.setItem("participants", JSON.stringify(participants));
};

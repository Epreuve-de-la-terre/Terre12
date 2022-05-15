#! node
// Script qui converti une heure en format 24 en format 12

if (process.argv[2] == undefined) {
  console.log(
    "Veuillez indiquer au script, un heure au format 24. Exemple : node terre12.js 24:00"
  );
  return;
}

const heure = process.argv[2].split(":");
const min = heure[1];
let hour;

console.log(parseInt(heure[0]));

if (parseInt(heure[0]) > 12) {
  hour = heure[0] - 12;
  console.log(hour + ":" + min + "PM");
} else if (parseInt(heure[0]) === 12) {
  console.log(heure[0] + ":" + min + "PM");
} else if (parseInt(heure[0]) === 00) {
  hour = 12;
  console.log(hour + ":" + min + "AM");
} else {
  hour = heure[0];
  console.log(hour + ":" + min + "AM");
}

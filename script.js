const name = "Promise Onyeka Morka";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

const person = "pRoMiSe";

// Function for fixing capitalization errors in names
const correctName = function (nameOfPerson) {

  const nameOfPersonSmallLetter = nameOfPerson.toLowerCase();
  const correctedNameOfPerson = nameOfPersonSmallLetter[0] + nameOfPersonSmallLetter.slice(1);

  return correctedNameOfPerson;
}

console.log(correctName('ISrEAl'));
console.log(correctName('oNyEkA'));

// Removing white spaces and enter keys from strings
const firstName = " Promise \n";
const trimmedFirstName = firstName.trim();
console.log(trimmedFirstName);

// Replacing parts of strings
const dotedFigure = `200.000`;
const correctFigure = dotedFigure.replace('.', ',');
console.log(correctFigure);

const statement = `JavaScript is an amazing programming language`;
const replaceStatement = statement.replace(`amazing`, `incredible`);
console.log(replaceStatement);

// Replacing more than a single occurence of a string
const announcement = `All passengers come to the boarding door. I repeat, all passengers come to the boarding door`;
const correctedAnnouncement = announcement.replaceAll('door', 'gate');
console.log(correctedAnnouncement);

// Checking if a string includes, startsWith, or endsWith a string
const job = `Software Engineer`;
console.log(job.includes(`Eng`));
console.log(job.includes(`Civil`));
console.log(job.startsWith(`S`));
console.log(job.endsWith(`neer`));

if(job.startsWith('Soft') && job.includes('Eng')) {
  console.log(`The role is a ${job}ing role!`);
} else {
  console.log(`The job is not a Software Engineering role.`)
}


const bannedItems = [`knife`, `gun`];

const checkBaggage = function (items) {

  // convert all inputs to lower case
  const correctItems = items.toLowerCase();

  // use the includes method to check the items
  if (correctItems.includes('knife') || correctItems.includes('gun')) {
    console.log(`You are NOT allowed on this flight.`);
  } else {
    console.log(`Welcome on board!`)
  }

}
checkBaggage(`I have a laptop, some Food and a pocket Knife`);
checkBaggage(`Socks and camera`);
checkBaggage(`Got some snacks and a gun for protection`);
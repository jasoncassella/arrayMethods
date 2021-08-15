// i hate abbreivations like char, str, etc. but i am using them to practice one line arrow functions
const chars = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***REDUCE***
//1. Get total mass of all chars
//2. Get total height of all chars
//3. Get total number of chars by eye color
//4. Get total number of chars in all the char names

//***EVERY***
//1. Does every char have blue eyes?
//2. Does every char have mass more than 40?
//3. Is every char shorter than 200?
//4. Is every char male?

//***FILTER***
//1. Get chars with mass greater than 100
const greaterThan100pounds = chars.filter((char) => char.mass > 100);

//2. Get chars with height less than 200
const shorterThan200cm = chars.filter((char) => char.height < 200);

//3. Get all male chars
const maleChars = chars.filter((char) => char.gender === 'male');

//4. Get all female chars
const femalechars = chars.filter((char) => char.gender === 'female');

//***MAP***
//1. Get array of all names
const names = chars.map((char) => char.name);

//2. Get array of all heights
const heights = chars.map((char) => char.height);

//3. Get array of objects with just name and height properties
const nameAndHeight = chars.map((char) => ({
  name: char.name,
  height: char.height,
}));

//4. Get array of all first names
const firstNames = chars.map((char) => char.name.split(' '));

//***SOME***
//1. Is there at least one male char?
const isOneCharMale = chars.some((char) => char.gender === 'male');

//2. Is there at least one char with blue eyes?
const isOneCharBlueEyed = chars.some((char) => char.eye_color === 'blue');

//3. Is there at least one char taller than 210?
const isOneCharTall = chars.some((char) => char.height > 210);

//4. Is there at least one char that has mass less than 50?
const isOneCharSkinny = chars.some((char) => char.mass < 50);

export function firstName(fullName) {
  let name;

  if (fullName.split(" ")[0]) {
    name = fullName.split(" ")[0];
  } else {
    name = fullName;
  }

  return name[0].charAt(0).toUpperCase() + name.slice(1);
}

function findNextConsonantIndex(word) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  for (let i = 1; i < word.length; i++) {
    if (consonants.includes(word[i].toLowerCase())) {
      return i;
    }
  }
  return -1;
}

export function nameLetters(str) {
  const words = str.trim().split(" ");

  const firstLetter = words[0].charAt(0).toUpperCase();

  if (words.length > 1) {
    const secondLetter = words[1].charAt(0).toUpperCase();
    return `${firstLetter}${secondLetter}`;
  }

  const nextConsonantIndex = findNextConsonantIndex(words[0]);

  if (nextConsonantIndex !== -1) {
    return firstLetter + words[0].charAt(nextConsonantIndex).toUpperCase();
  }

  return firstLetter + words[0].charAt(1).toUpperCase();
}

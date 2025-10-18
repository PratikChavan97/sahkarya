function capitalize(name) {
  const nameArr = name.split(" ");
  let updatedWord = [];

  for (let i = 0; i < nameArr.length; i++) {
    let wordArr = nameArr[i].toLowerCase().split("");
    let alphabet = wordArr[0].toUpperCase();

    wordArr[0] = alphabet;
    let word = wordArr.join("");
    updatedWord.push(word);
  }

  return updatedWord.join(" ");
}

export default capitalize;

////////////////////////////////////////////////////////////
// Constants

const N = "N";
const BEG = "BEG";
const BEG_INT = "BEG_INT";
const MID_INT = "MID_INT";
const END_INT = "END_INT";
const END = "END";
const SCRAMBLE = [N, BEG, BEG_INT, MID_INT, END_INT, END]; 

// WORD-LEVEL FUNCTIONS ////////////////////////////////////
// These shouldn't have to worry about case or punctuation

function injectTypoIntoWord(typoType, word) {
  if (typoType === BEG) {
    return typoBeg(word);
  } else if (typoType === BEG_INT) {
    return typoBegInt(word);
  } else if (typoType === MID_INT) {
    return typoMidInt(word);
  } else if (typoType === END_INT) {
    return typoEndInt(word);
  } else if (typoType === END) {
    return typoEnd(word);
  } else if (typoType === N) {
    return noTypo(word);
  }else {
    throw `The typoType "${typoType}" has a typo!`;
  }
}
function noTypo(word) {
  return word;
}
function typoBeg(word) {
  let first = word.substring(0, 1);
  let second = word.substring(1, 2);
  if (first.toUpperCase() === first) {
    first.toLowerCase();
    second.toUpperCase();
  }
  let newWord = second + first + word.substring(2, word.length);
  return newWord;
}

function typoBegInt(word) {
  let first = word.substring(1, 2);
  let second = word.substring(2, 3);
  let newWord =
    word.substring(0, 1) + second + first + word.substring(3, word.length);
  // console.log(newWord);
  return newWord;
}

function typoMidInt(word) {
  let middle = word.length / 2;
  let first = word.substring(middle - 1, middle);
  let second = word.substring(middle, middle + 1);
  let newWord =
    word.substring(0, middle - 1) +
    second +
    first +
    word.substring(middle + 1, word.length);
  // console.log(newWord);
  return newWord;
}

function typoEndInt(word) {
  let first = word.substring(word.length - 2, word.length - 1);
  let second = word.substring(word.length - 3, word.length - 2);

  let newWord =
    word.substring(0, word.length - 3) +
    first +
    second +
    word.substring(word.length - 1, word.length);
  // console.log(newWord);
  return newWord;
}

function typoEnd(word) {
  let first;
  let second;
  if (word.substring(word.length - 1, word.length) !== ".") {
    first = word.substring(word.length - 1, word.length);
    second = word.substring(word.length - 2, word.length - 1);
  } else {
    first = word.substring(word.length - 2, word.length - 1);
    second = word.substring(word.length - 3, word.length - 2);
  }
  let newWord = word.substring(0, word.length - 2) + first + second;
  // console.log(newWord);
  return newWord;
}


// SENTENCE-LEVEL FUNCTIONS ////////////////////////////////

function injectTyposIntoSentence(typoType, sentence) {
  const words = sentence.split(" ");
  let newWords = [];
  for (const word of words) {
    if (
      word.length > 4 &&
      word.substring(word.length - 1, word.length) !== "." && "," 
    ) {
      let thing = injectTypoIntoWord(typoType, word);
      newWords.push(thing);
    } else {
      newWords.push(word);
    }
  }
  const newSentence = newWords.join(" ");
  //console.log(newSentence);
  return newSentence;
}

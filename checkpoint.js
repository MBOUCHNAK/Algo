var text = "Mejda is ready for today.";

console.log(text.length);

function wordCount(str) {
  totalWord = 0;

  for (i = 0; i < str.length; i++) {
    //condition to calculate the number of words
    if (str[i] == " " || str[i] == ".") {
      totalWord += 1;
    }
  }
  return totalWord;
}
console.log(wordCount(text));

function vowelscount(str) {
  totalvowel = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "i" ||
      str[i] == "e" ||
      str[i] == "u" ||
      str[i] == "o"
    ) {
      totalvowel += 1;
    }
  }

  return totalvowel;
}

console.log(vowelscount(text));

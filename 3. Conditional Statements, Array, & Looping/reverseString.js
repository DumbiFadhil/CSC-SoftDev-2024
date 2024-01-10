function reverseString(s) {
  const input = s;
  const splitString = input.split("");
  const reverseArray = splitString.reverse();
  const output = reverseArray.join("");
  return output;
}

const inputString = process.argv[2];

if (inputString) {
  const reversedString = reverseString(inputString);

  console.log("Original String:", inputString);
  console.log("Reversed String:", reversedString);
} else {
  console.log("Please provide an input string.");
}

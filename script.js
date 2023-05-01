function firstChar(str) {
  // your code here
	for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      return str[i];
    }
  }
  // If the string only contains spaces, return an empty string
  return "";
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

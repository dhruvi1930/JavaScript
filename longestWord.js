// Write a function to find the longest word in a string
function findLongestWord(string) {
  let words = string.split(" "); // Split string by spaces
  let longword = words[0]; // Assume the first word is the longest

  for (let word of words) {
    if (word.length > longword.length) {
      longword = word; // Update if a longer word is found
    }
  }
  return longword;
}

// Select elements from the DOM
const button = document.getElementById("findword");
const sentence = document.getElementById("longestWord");
const result = document.getElementById("result");

// Add event listener for the button click
button.addEventListener("click", () => {
  let value = sentence.value.trim(); // Get input value
  if (value) {
    const longestWord = findLongestWord(value); // Find the longest word
    result.textContent = `Longest Word: "${longestWord}"`; // Display result
    result.style.color = "green"; // Set text color to green
  } else {
    result.textContent = "Please enter a valid string."; // Show error message
    result.style.color = "red"; // Set text color to red
  }
  sentence.value = "";
});

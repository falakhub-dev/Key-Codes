const inputBox = document.getElementById("textInput");

inputBox.addEventListener("keydown", function(event) {
  if (event.key.length === 1) {
    const asciiValue = event.key.charCodeAt(0);

    // Show ASCII value log
    const line = document.createElement("p");
    line.textContent = `Key : ${event.key} | ASCII Value : ${asciiValue}`;
    document.getElementById("output").appendChild(line);

    // Create glowing key effect
    const keyDiv = document.createElement("div");
    keyDiv.classList.add("key", "glow");
    keyDiv.textContent = event.key.toUpperCase();

    document.getElementById("keyboard").appendChild(keyDiv);

    // Remove glow after 1 second
    setTimeout(() => {
      keyDiv.classList.remove("glow");
    }, 1000);
  }
});

// Clear button functionality
document.getElementById("clearBtn").addEventListener("click", function() {
  document.getElementById("output").innerHTML = "";
  document.getElementById("keyboard").innerHTML = "";
  inputBox.value = "";
});

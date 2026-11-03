document.getElementById("classifyBtn").addEventListener("click", function () {
  const input = document.getElementById("variableInput").value.trim().toLowerCase();
  const resultBox = document.getElementById("resultBox");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  if (!input) {
    resultBox.classList.remove("hidden");
    resultTitle.textContent = "Please enter a variable";
    resultText.textContent = "Type a variable name like 'temperature', 'car brand', or 'exam score' to classify it.";
    return;
  }

  // Simple keyword-based classifier logic
  let classification = "";
  let description = "";

  if (
    input.includes("brand") ||
    input.includes("color") ||
    input.includes("gender") ||
    input.includes("name") ||
    input.includes("type")
  ) {
    classification = "Qualitative (Categorical) — Nominal Scale";
    description = "This variable represents distinct categories or labels with no mathematical order.";
  } else if (
    input.includes("rank") ||
    input.includes("grade") ||
    input.includes("rating") ||
    input.includes("level") ||
    input.includes("satisfaction")
  ) {
    classification = "Qualitative/Quantitative — Ordinal Scale";
    description =
      "This variable has ordered categories or rankings, but the exact distance between values cannot be measured precisely.";
  } else if (
    input.includes("temperature") ||
    input.includes("celsius") ||
    input.includes("fahrenheit") ||
    input.includes("year")
  ) {
    classification = "Quantitative (Numerical) — Interval Scale";
    description =
      "This variable has ordered numerical values with equal distances, but zero does not mean total absence (no true zero).";
  } else if (
    input.includes("height") ||
    input.includes("weight") ||
    input.includes("salary") ||
    input.includes("time") ||
    input.includes("age") ||
    input.includes("count") ||
    input.includes("number")
  ) {
    classification = "Quantitative (Numerical) — Ratio Scale";
    description =
      "This variable is numerical with equal intervals and a true absolute zero point (where zero means a total absence of the variable).";
  } else {
    classification = "General Variable";
    description = `"${input}" can be Quantitative or Qualitative depending on how you measure it (e.g., counted numerically vs. grouped into categories).`;
  }

  resultBox.classList.remove("hidden");
  resultTitle.textContent = classification;
  resultText.textContent = description;
});

// Wizard Logic
function selectDataType(type) {
  document.getElementById("wizardStep1").classList.add("hidden");
  if (type === "categorical") {
    document.getElementById("wizardStep2Cat").classList.remove("hidden");
  } else {
    document.getElementById("wizardStep2Num").classList.remove("hidden");
  }
}

function showResult(scaleName, description) {
  document.getElementById("wizardStep2Cat").classList.add("hidden");
  document.getElementById("wizardStep2Num").classList.add("hidden");

  const resultBox = document.getElementById("wizardResult");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  resultTitle.textContent = scaleName;
  resultText.textContent = description;
  resultBox.classList.remove("hidden");
}

function resetWizard() {
  document.getElementById("wizardStep1").classList.remove("hidden");
  document.getElementById("wizardStep2Cat").classList.add("hidden");
  document.getElementById("wizardStep2Num").classList.add("hidden");
  document.getElementById("wizardResult").classList.add("hidden");
}

// Dark Mode as Default Logic
const themeToggleBtn = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Check for saved preference, otherwise default to 'dark'
const savedTheme = localStorage.getItem("theme") || "dark";

if (savedTheme === "light") {
  htmlElement.removeAttribute("data-theme");
  themeToggleBtn.textContent = "🌙";
} else {
  htmlElement.setAttribute("data-theme", "dark");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    htmlElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "🌙";
  } else {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "☀️";
  }
});

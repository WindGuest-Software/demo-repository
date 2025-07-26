function changeTextEnter() {
  document.getElementById("text").textContent = "Click on me";
}
function changeTextLeave() {
  document.getElementById("text").textContent = "Move on me";
}

function gotoGithubPage() {
  const userConfirmed = confirm("Go to our Github home page?");
  if (userConfirmed) {
    window.location.href = "https://github.com/WindGuest-Software";
  }
}

document.getElementById("btn").addEventListener("mouseenter", changeTextEnter);
document.getElementById("btn").addEventListener("mouseleave", changeTextLeave);
document.getElementById("btn").addEventListener("click", gotoGithubPage);

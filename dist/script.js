const form = document.getElementById("voteForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Check if the user has already voted based on the selected radio button
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert("Please select an option before submitting.");
    return;
  }

  const votedCookie = "voted=" + selectedOption.value;

  if (document.cookie.includes(votedCookie)) {
    alert("You have already voted for this option!");
  } else {
    document.cookie = votedCookie + "; max-age=900";
    window.location.href = "./scanner.html";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const workoutList = document.getElementById("workout-list");
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // Hide all list items initially
  Array.from(workoutList.children).forEach((li) => {
    li.style.display = "none";
  });

  // Show the list item for the current day
  const currentDayListItem = document.querySelector(`[data-day="${today}"]`);
  if (currentDayListItem) {
    currentDayListItem.style.display = "block";
  }
});

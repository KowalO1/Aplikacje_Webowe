setTimeout(() => {
  console.log("Test JS");
}, 4000);

const form = document.getElementById("trainingForm");

if (form) {
  const list = document.getElementById("trainingList");

  let trainings = JSON.parse(localStorage.getItem("trainings")) || [];

  function showTrainings() {
    list.innerHTML = "";

    trainings.forEach(function (training) {
      const item = document.createElement("li");

      item.textContent =
        training.exercise +
        " - " +
        training.weight +
        " kg x " +
        training.reps +
        " powtórzeń";

      list.appendChild(item);
    });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const training = {
      exercise: document.getElementById("exercise").value,
      weight: document.getElementById("weight").value,
      reps: document.getElementById("reps").value,
    };

    trainings.push(training);

    localStorage.setItem("trainings", JSON.stringify(trainings));

    form.reset();
    showTrainings();
  });

  showTrainings();
}

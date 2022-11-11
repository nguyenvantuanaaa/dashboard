const random = () => Math.round(Math.random() * 100);
const lineChart = new Chart(document.getElementById("canvas-1"), {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        data: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      },
    ],
  },
  options: { responsive: true },
});
const barChart = new Chart(document.getElementById("canvas-2"), {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        backgroundColor: "rgba(220, 220, 220, 0.5)",
        borderColor: "rgba(220, 220, 220, 0.8)",
        highlightFill: "rgba(220, 220, 220, 0.75)",
        highlightStroke: "rgba(220, 220, 220, 1)",
        data: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      },
      {
        backgroundColor: "rgba(151, 187, 205, 0.5)",
        borderColor: "rgba(151, 187, 205, 0.8)",
        highlightFill: "rgba(151, 187, 205, 0.75)",
        highlightStroke: "rgba(151, 187, 205, 1)",
        data: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      },
    ],
  },
  options: { responsive: true },
});
const doughnutChart = new Chart(document.getElementById("canvas-3"), {
  type: "doughnut",
  data: {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [random(), random(), random()],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  options: { responsive: true },
});
const radarChart = new Chart(document.getElementById("canvas-4"), {
  type: "radar",
  data: {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(220, 220, 220, 0.2)",
        borderColor: "rgba(220, 220, 220, 1)",
        pointBackgroundColor: "rgba(220, 220, 220, 1)",
        pointBorderColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220, 220, 220, 1)",
        data: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      },
      {
        label: "My Second dataset",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(151, 187, 205, 1)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151, 187, 205, 1)",
        data: [
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
          random(),
        ],
      },
    ],
  },
  options: { responsive: true },
});
const pieChart = new Chart(document.getElementById("canvas-5"), {
  type: "pie",
  data: {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [random(), random(), random()],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  options: { responsive: true },
});
const polarAreaChart = new Chart(document.getElementById("canvas-6"), {
  type: "polarArea",
  data: {
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
    datasets: [
      {
        data: [random(), random(), random(), random(), random()],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
        ],
      },
    ],
  },
  options: { responsive: true },
});

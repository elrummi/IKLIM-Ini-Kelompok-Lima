document.getElementById("show-data-btn").addEventListener("click", function () {
  document.getElementById("about").style.display = "none";
  document.getElementById("chart-container").style.display = "block";
});

document.getElementById("back-btn").addEventListener("click", function () {
  document.getElementById("chart-container").style.display = "none";
  document.getElementById("about").style.display = "block";
});

// Data Hasil Panen Padi dan Curah Hujan untuk Beberapa Negara
const data = [
  { year: 2020, country: "Indonesia", yield: 5.2, rainfall: 1500 },
  { year: 2021, country: "Indonesia", yield: 5.4, rainfall: 1550 },
  { year: 2022, country: "Indonesia", yield: 5.1, rainfall: 1400 },
  { year: 2023, country: "Indonesia", yield: 5.3, rainfall: 1600 },
  { year: 2020, country: "India", yield: 3.8, rainfall: 1200 },
  { year: 2021, country: "India", yield: 4.0, rainfall: 1300 },
  { year: 2022, country: "India", yield: 3.7, rainfall: 1150 },
  { year: 2023, country: "India", yield: 4.1, rainfall: 1400 },
  { year: 2020, country: "China", yield: 6.0, rainfall: 1100 },
  { year: 2021, country: "China", yield: 6.2, rainfall: 1200 },
  { year: 2022, country: "China", yield: 5.9, rainfall: 1050 },
  { year: 2023, country: "China", yield: 6.3, rainfall: 1300 },
  { year: 2020, country: "Thailand", yield: 4.5, rainfall: 1400 },
  { year: 2021, country: "Thailand", yield: 4.7, rainfall: 1450 },
  { year: 2022, country: "Thailand", yield: 4.4, rainfall: 1350 },
  { year: 2023, country: "Thailand", yield: 4.6, rainfall: 1500 },
  { year: 2020, country: "Vietnam", yield: 5.0, rainfall: 1300 },
  { year: 2021, country: "Vietnam", yield: 5.2, rainfall: 1350 },
  { year: 2022, country: "Vietnam", yield: 4.9, rainfall: 1250 },
  { year: 2023, country: "Vietnam", yield: 5.1, rainfall: 1400 },
  { year: 2020, country: "Bangladesh", yield: 4.0, rainfall: 1400 },
  { year: 2021, country: "Bangladesh", yield: 4.2, rainfall: 1500 },
  { year: 2022, country: "Bangladesh", yield: 4.1, rainfall: 1450 },
  { year: 2023, country: "Bangladesh", yield: 4.3, rainfall: 1550 },
  { year: 2020, country: "Japan", yield: 5.5, rainfall: 1100 },
  { year: 2021, country: "Japan", yield: 5.6, rainfall: 1150 },
  { year: 2022, country: "Japan", yield: 5.4, rainfall: 1050 },
  { year: 2023, country: "Japan", yield: 5.7, rainfall: 1200 },
];

// Persiapkan Data untuk Chart.js
const dataset = {
  Indonesia: data.filter((d) => d.country === "Indonesia").map((d) => ({ x: d.rainfall, y: d.yield })),
  India: data.filter((d) => d.country === "India").map((d) => ({ x: d.rainfall, y: d.yield })),
  China: data.filter((d) => d.country === "China").map((d) => ({ x: d.rainfall, y: d.yield })),
  Thailand: data.filter((d) => d.country === "Thailand").map((d) => ({ x: d.rainfall, y: d.yield })),
  Vietnam: data.filter((d) => d.country === "Vietnam").map((d) => ({ x: d.rainfall, y: d.yield })),
  Bangladesh: data.filter((d) => d.country === "Bangladesh").map((d) => ({ x: d.rainfall, y: d.yield })),
  Japan: data.filter((d) => d.country === "Japan").map((d) => ({ x: d.rainfall, y: d.yield })),
};

// Buat Scatter Plot Menggunakan Chart.js
const ctx = document.getElementById("rainfallChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Indonesia",
        data: dataset.Indonesia,
        backgroundColor: "rgba(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 1)",
        pointRadius: 8, // Mengganti ukuran titik
        pointHoverRadius: 10, // Ukuran titik saat dihover
      },
      {
        label: "India",
        data: dataset.India,
        backgroundColor: "rgba(255, 206, 86)",
        borderColor: "rgba(255, 206, 86, 1)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
      {
        label: "China",
        data: dataset.China,
        backgroundColor: "rgba(153, 102, 255)",
        borderColor: "rgba(153, 102, 255, 1)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
      {
        label: "Thailand",
        data: dataset.Thailand,
        backgroundColor: "rgba(255, 159, 64)",
        borderColor: "rgba(255, 159, 64, 1)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
      {
        label: "Vietnam",
        data: dataset.Vietnam,
        backgroundColor: "rgba(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
      {
        label: "Bangladesh",
        data: dataset.Bangladesh,
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
      {
        label: "Japan",
        data: dataset.Japan,
        backgroundColor: "rgba(100 , 250, 105)",
        borderColor: "rgba(100 , 250, 105)",
        pointRadius: 8,
        pointHoverRadius: 10,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Curah Hujan (mm)",
          fontSize: 18,
        },
        ticks: {
          fontSize: 14,
        },
        beginAtZero: false, // Tidak mulai dari nol
        min: 1000, // Mulai dari 1000
      },
      y: {
        title: {
          display: true,
          text: "Hasil Panen (ton/ha)",
          fontSize: 18,
        },
        ticks: {
          fontSize: 14,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const year = data[context.dataIndex].year;
            return `${label} (${year}): (${context.raw.x}, ${context.raw.y})`;
          },
        },
      },
    },
  },
});

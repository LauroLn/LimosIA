new Chart(document.getElementById("teste"), {
    type: "bar",
    data: {
      labels: ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"],
      datasets: [{
        label: "Comida Feita",
        backgroundColor: window.theme.primary,
        borderColor: window.theme.primary,
        hoverBackgroundColor: window.theme.primary,
        hoverBorderColor: window.theme.primary,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: .75,
        categoryPercentage: .5
      }, {
        label: "Comida Desperdicada",
        backgroundColor: "#dee2e6",
        borderColor: "#dee2e6",
        hoverBackgroundColor: "#dee2e6",
        hoverBorderColor: "#dee2e6",
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: .75,
        categoryPercentage: .5
      }]
    },
    options: {
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          stacked: false
        }],
        xAxes: [{
          stacked: false,
          gridLines: {
            color: "transparent"
          }
        }]
      }
    }
  });
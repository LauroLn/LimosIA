new Chart(document.getElementById("GraficoPrincipal"), {
    type: "bar",
    data: {
      labels: ["<%= pratodoDia %>", "Terca", "Quarta", "Quinta", "Sexta"],
      datasets: [{
        label: "Comida Consumida",
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        hoverBackgroundColor: "#ff0000",
        hoverBorderColor: "#ff0000",
        data: [54, 97, 41, 55, 62],
        barPercentage: .75,
        categoryPercentage: .5
      }, {
        label: "Comida Desperdicada",
        backgroundColor: "#B0E0E6",
        borderColor: "#B0E0E6",
        hoverBackgroundColor: "#B0E0E6",
        hoverBorderColor: "#B0E0E6",
        data: [
          69,
           66,
            24,
             48,
              52],
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
  
  
import Chart from 'chart.js/auto';

(async function () {


    new Chart(document.getElementById("frontend"), {
        type: 'pie',
        data: {
            labels: ["JavaScript for Frontend", "Flash", "None",],
            datasets: [{
                label: "Cuota de mercado (%)",
                backgroundColor: ["#efd81d", "#d90003", "#3cba9f"],
                data: [98.2, 1.5, 1.8,]
            }]
        },
        options: {
            plugins: {

                title: {
                    display: true,
                    text: 'Lenguajes de programación para Frontend',
                },
                subtitle: {
                    display: true,
                    text: 'Según w3techs.com',
                    color: 'blue',
                    font: {
                        size: 12,
                        family: 'tahoma',
                        weight: 'normal',
                        style: 'italic'
                    },
                    padding: {
                        bottom: 10
                    }
                }
            },

        }
    });


})();
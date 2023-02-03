import Chart from 'chart.js/auto';

(async function () {

    new Chart(document.getElementById("line-chart"), {



        type: 'line',
        data: {
            labels: ["Feb 22", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec", "Jan 23", "Feb"],
            datasets: [{
                data: [2.5, 2.6, 2.8, 2.9, 2.9, 2.9, 2.9, 3, 3, 3, 3.1, 3.2, 3.3, 3.3],
                label: "React",
                borderColor: "#5ed3f3",
                fill: false,

            }, {
                data: [0.4, 0.4, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.5, 1.2, 1.4, 1.4],
                label: "Angular",
                borderColor: "#c3002f",
                fill: false,
                borderDash: [5, 5],
            }, {
                data: [78.3, 78, 77.3, 77.3, 77.3, 77.4, 77.4, 77.4, 77.4, 77.5, 77.1, 77.6, 77.6, 77.6,],
                label: "jQuery",
                borderColor: "#0c63a7",
                fill: false
            },
            {
                data: [22.6, 22.4, 21.9, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.7, 21.5, 21.5, 21.3, 21.3,],
                label: "Bootstrap",
                borderColor: "#8713f4",
                fill: false
            },
            ]
        },

        options: {

            plugins: {

                title: {
                    display: true,
                    text: 'Uso de Frameworks y librerías en la web',
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
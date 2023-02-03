import Chart from 'chart.js/auto';

(async function () {


    new Chart(document.getElementById("polar-chart"), {
        type: 'polarArea',
        data: {
            labels: ["JavaScript Backend", "PHP", "Python"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: [2, 77.7, 1.3]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050'
            },
            plugins: {
                legend: true,
                tooltip: true,
            },
            elements: {
                arc: {
                    backgroundColor: function (context) {
                        let c = colors[context.dataIndex];
                        if (!c) {
                            return;
                        }
                        if (context.active) {
                            c = helpers.getHoverColor(c);
                        }
                        const mid = helpers.color(c).desaturate(0.2).darken(0.2).rgbString();
                        const start = helpers.color(c).lighten(0.2).rotate(270).rgbString();
                        const end = helpers.color(c).lighten(0.1).rgbString();
                        return createRadialGradient3(context, start, mid, end);
                    },
                }
            }
        }
    });


    /////////////////////////////////////////////////////////////////////////////////
    function createRadialGradient3(context, c1, c2, c3) {
        const chartArea = context.chart.chartArea;
        if (!chartArea) {
            // This case happens on initial chart load
            return;
        }

        const chartWidth = chartArea.right - chartArea.left;
        const chartHeight = chartArea.bottom - chartArea.top;
        if (width !== chartWidth || height !== chartHeight) {
            cache.clear();
        }
        let gradient = cache.get(c1 + c2 + c3);
        if (!gradient) {
            // Create the gradient because this is either the first render
            // or the size of the chart has changed
            width = chartWidth;
            height = chartHeight;
            const centerX = (chartArea.left + chartArea.right) / 2;
            const centerY = (chartArea.top + chartArea.bottom) / 2;
            const r = Math.min(
                (chartArea.right - chartArea.left) / 2,
                (chartArea.bottom - chartArea.top) / 2
            );
            const ctx = context.chart.ctx;
            gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, r);
            gradient.addColorStop(0, c1);
            gradient.addColorStop(0.5, c2);
            gradient.addColorStop(1, c3);
            cache.set(c1 + c2 + c3, gradient);
        }

        return gradient;
    }

    ////////////////////////////////////////////////



})();
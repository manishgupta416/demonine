export const series = [30, 30, 40]; 
export const optionDonut = {
    labels: ['Target', 'In Progress', 'Completed'],
    colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
    chart: {
        width: '100%',
        height: 298,
        type: 'donut',
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        offsetY: 0,
        offsetX: 0,
        fontSize: '15px',
        fontFamily: '"Jost", sans-serif',
        fontWeight: 400,
        labels: {
            colors: '#404040',
        },
        markers: {
            width: 6,
            height: 6,
            radius: 20,
            offsetX: -4,
            offsetY: -2,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 5
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                minAngleToShowLabel: undefined
            },
            donut: {
                size: "80%",
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: 'Jost, sans-serif',
                        color: '#404040',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '30px',
                        fontFamily: 'Jost, sans-serif',
                        color: "black",
                        fontWeight: "bold",
                        offsetY: 10,
                        formatter: function (val) {
                            return +val + "K"
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#404040',
                        fontFamily: 'Jost, sans-serif',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    }
                }
            },
        },
    },
    responsive: [{
        breakpoint: 1399,
        options: {
            chart: {
                width: "100%"
            },

        }
    }],
};
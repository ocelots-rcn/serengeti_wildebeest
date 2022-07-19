let wildebeestData = {};

axios.get('../data/wildebeest.json').then((response) => {
    wildebeestData = response.data;
    wildebeestPlot();
});

// Update graph when selections changes
const wildebeestPlot = () => {
    let variable = document.querySelector('input[name=wildebeestVariable]:checked').value;
    let pdata = [];
    Object.keys(wildebeestData.wildebeest[variable]).forEach( (month) => {
        let plotd = {
            y: wildebeestData.wildebeest[variable][month],
            name: month,
            type: 'box'
        };
        pdata.push(plotd);
    });

    if(variable.includes('Distance')){
        Plotly.newPlot('WildebeestPlot', pdata, {showlegend: false, yaxis: {title: variable, range: [0, 11000]}, xaxis: {title: 'Month', tick0: 0, dtick: 1}});
    }
    else {
        Plotly.newPlot('WildebeestPlot', pdata, {showlegend: false, yaxis: {title: variable}, xaxis: {title: 'Month', tick0: 0, dtick: 1}});
    }
};
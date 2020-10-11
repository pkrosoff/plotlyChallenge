// // get the data how you like it
function updatePage() {}


d3.json('samples.json').then(BBdata => {
    // console.log(BBdata);
    // var metadata = Object.entries(BBdata);
    var metadata = BBdata.metadata;
    // var metadata = Object.entries(metadata);
    // console.log(metadata);
    // var metadata2 = metadata.map(data => data["metadata"]);
    // console.log(metadata);
    var names = BBdata.names
    // console.log(names);
    var samples = BBdata.samples
    // console.log(samples);


d3.selectAll("#body").on("change", updatePage);
// let tbody = d3.select("tbody");
// d3.event.preventDefault();


// ********************
// //THIS CAUSES REACTION WHEN DROPDOWN CHANGED
var dropdown = d3.select("#selDataset");

// THIS POPULATES THE NAMES DROPDOWN!
names.forEach((item) => {
    // console.log(item);
    var row = dropdown.append("option")
    .attr("value", item);
    row.text(item);
})
const dropdownchange = () => {
    var inputElement = d3.select("#selDataset");
    //    console.log(inputElement);
       inputValue = inputElement.property("value");
    //    console.log(inputValue);
    // var choiceID = (d3.event.target.value);

    // var choiceIndex = choiceID.findIndex;
    // console.log(`the menu was changed to ${choiceID}!`);
    // console.log(choiceIndex)

var demoTable = d3.select("#demographics-table");
var tableBody = demoTable.append("tbody");

var inputElement = d3.select("#selDataset");
// console.log(inputElement);
inputValue = inputElement.property("value");
// console.log(inputValue);

var filteredData = metadata.filter(item => item.id == inputValue);
var filteredSamples = samples.filter(item => item.id == inputValue)
var SlicedSampleValues = filteredSamples[0].sample_values.slice(0,10).reverse()
// console.log(SlicedSampleValues);
var slicedOTUs = filteredSamples[0].otu_ids.slice(0,10).reverse();
// console.log(slicedOTUs);
var slicedLabels = filteredSamples[0].otu_labels.slice(0,10).reverse();
console.log(slicedOTUs);
// console.log(slicedLabels);
var trace1 = {
  x: SlicedSampleValues,
  y: String(slicedOTUs),
  text: slicedLabels,
  type: "bar",
  orientation: "h"
};

// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.

//Not using sliced values for this chart??
var size = filteredSamples[0].sample_values;
var desired_maximum_marker_size = 200;
var trace2 = {
  x: filteredSamples[0].otu_ids,
  y: filteredSamples[0].sample_values,
  text: filteredSamples[0].otu_labels,
  mode: 'markers',
  marker: {
    // work on this!
    size: size,
    sizeref: 0.1 * (Math.max(filteredSamples[0].sample_values)/(desired_maximum_marker_size**2)),
    // MARKER COLORS?
    sizemode: 'area'
  }
};

var bardata = [trace1];
var barlayout = {
    title: "Top 10 OTUs in Sample",  
};
var bubbledata = [trace2]
var bubblelayout = {
  title: "OTU Prevalence in Sample"
}
Plotly.newPlot("bar", bardata, barlayout);
Plotly.newPlot("bubble", bubbledata, bubblelayout)


// console.log(filteredSampleValues);
// var slicedSamples = filteredSamples.sample_values
// console.log(filteredData);
// tableBody.text("");  
filteredData.forEach((item) => {
    let row = tableBody.append("tr");

    Object.entries(item).forEach(value => {
        let cell = row.append("tr");
        cell.text(`${value[0]}: ${value[1]}`);

    })
})};
// console.log(samples);
// STILL NEED TO CLEAR DEMOGRAPHICS TABLE EACH BUTTON CLICK

// // IDENITFY EACH GRAPH FROM INDEX.HTML AND UPDATE ON CHANGE

// function updatePlotly(optionChanged) {

// GET DATA FUNCTIONS

      // Grab values from the response json object to build the plots
// GET OTU DATA TO LOG
console.log(samples);

    //   var sortedByArrow = numArray.sort((a, b) => b - a);
    //   console.log(sortedByArrow);



    //   var name = data.dataset.name;
    //   var stock = data.dataset.dataset_code;
    //   var startDate = data.dataset.start_date;
    //   var endDate = data.dataset.end_date;
    //   // Print the names of the columns
    //   console.log(data.dataset.column_names);
    //   // Print the data for each day
    //   console.log(data.dataset.data);
    //   var dates = data.dataset.data.map(row => row[0]);
    //   // console.log(dates);
    //   var closingPrices = data.dataset.data.map(row => row[4]);
      // console.log(closingPrices);

//   HORIZONTAL BAR CHART
    //   var trace1 = {
    //     type: "scatter",
    //     mode: "lines",
    //     name: name,
    //     x: dates,
    //     y: closingPrices,
    //     line: {
    //       color: "#17BECF"
    //     }
    //   };

    //   var trace2 = {
    //     type: "scatter",
    //     mode: "lines",
    //     name: name,
    //     x: dates,
    //     y: closingPrices,
    //     line: {
    //       color: "#17BECF"
    //     }
    //   };

    //   var trace3 = {
    //     type: "scatter",
    //     mode: "lines",
    //     name: name,
    //     x: dates,
    //     y: closingPrices,
    //     line: {
    //       color: "#17BECF"
    //     }
    //   };
  
    //   var data = [trace1];
  
    //   var layout = {
    //     title: `${stock} closing prices`,
    //     xaxis: {
    //       range: [startDate, endDate],
    //       type: "date"
    //     },
    //     yaxis: {
    //       autorange: true,
    //       type: "linear"
    //     }
    //   };
    //   var data = [trace2];
  
    //   var layout = {
    //     title: `${stock} closing prices`,
    //     xaxis: {
    //       range: [startDate, endDate],
    //       type: "date"
    //     },
    //     yaxis: {
    //       autorange: true,
    //       type: "linear"
    //     }
    //   };
    //   var data = [trace3];
  
    //   var layout = {
    //     title: `${stock} closing prices`,
    //     xaxis: {
    //       range: [startDate, endDate],
    //       type: "date"
    //     },
    //     yaxis: {
    //       autorange: true,
    //       type: "linear"
    //     }
    //   };
  
    //   Plotly.newPlot("plot", data, layout);
  
    // };
// *************************
// }

dropdown.on("change", dropdownchange);
// dropdown.on("change", filterdemo);
});







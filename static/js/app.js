// read in data
// below console logs names array
// d3.json('samples.json').then(data => {
//     console.log(data.names);
// });
var dropdown = d3.select("#selDataset");
// THIS POPULATES THE NAMES DROPDOWN!
d3.json('samples.json').then(data => {
//     console.log(data);
// })
// populate dropdown with id numbers (names)
    (data.names).forEach((item) => {
        // console.log(item);
        var row = dropdown.append("option")
        .attr("value", item);
        row.text(item);
    });
});

// DO THE DEMOGRAPHIC INFO FOR EACH NAME
function showDemo(subject) {
    var demInfo = "";
    switch(subject) {
      case "somehow grab name not hard coded":
        demInfo = "somehow display their info";
        break;
    // console.log(message);
  }}
  


// DO THE PLOT BIT


d3.selectAll("body").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.node().value;

  var CHART = d3.selectAll("#plot").node();

  // Initialize x and y arrays
  var x = [];
  var y = [];

  switch(dataset) {
    case "dataset1":
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
      break;

    }


    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);
  }
  
  init();
  
// console.log(namesMap);

// var names = d3.json('samples.json')['names'];
// // get reference to the table body

// console.log(dropdown);

// console log each name
// data.forEach(names => {
//     console.log(name);
// })
// console.log(names)

// sort ascending


// make bar chart (.reverse()?)

/// Use sample_values as the values for the bar chart.
/// Use otu_ids as the labels for the bar chart.
/// Use otu_labels as the hovertext for the chart.

// create bubble chart

////Use otu_ids for the x values.
//// Use sample_values for the y values.
//// Use sample_values for the marker size.
//// Use otu_ids for the marker colors.
//// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.

// Display each key-value pair from the metadata JSON object somewhere on the page.

// Update all of the plots any time that a new sample is selected.

// each individual must have a dashboard with the top ten UTOs and their frequency
// how do you combine the data?
// let metadata = data
// console.log(metadata)
console.log(this.value)
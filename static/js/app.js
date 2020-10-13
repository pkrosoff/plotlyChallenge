// @_@_@_@_@_@_@_@_@_@_@_@_@_@_@
// function updatePage() {}
// Where does this ^^ go??
// @_@_@_@_@_@_@_@_@_@_@_@_@_@_@


// GET SOME VARIABLES GOING
// ***************************
d3.json('samples.json').then(BBdata => {
    // console.log(BBdata);

    var metadata = BBdata.metadata;
    // console.log(metadata);

    var names = BBdata.names
    // console.log(names);

    var samples = BBdata.samples
    // console.log(samples);
// ******************************



// @_@_@_@_@_@_@_@_@_@_@_@_@_@_@
// d3.selectAll("#body").on("change", updatePage);
// Where does this ^^ go?
// @_@_@_@_@_@_@_@_@_@_@_@_@_@_@


// THIS POPULATES THE TEST SUBJECT ID DROPDOWN
// ****************************************
var dropdown = d3.select("#selDataset");
names.forEach((item) => {
    // console.log(item);
    var row = dropdown.append("option")
    .attr("value", item);
    row.text(item);
});
// ****************************************



// THIS FILTERS DATA AND POPULATES DEMOGRAPHICS TABLE WHEN DROPDOWN IS SELECTED
// ****************************************

const dropdownchange = () => {

// SELECTING DEMOGRAPHICS TABLE ELEMENTS
//-----------------------------------------
  // var sample_metadata = d3.select("#sample-metadata");
  // sample_metadata.html("");

  var demoTable = d3.select("#demographics-table");

  demoTable.html("")
  var inputElement = d3.select("#selDataset");
  var tableBody = demoTable.append("tbody");
  var inputValue = inputElement.property("value");

// FILTERING DATA UPON INPUT VALUE SELECTION
//-----------------------------------------
var filteredData = metadata.filter(item => item.id == inputValue);
var filteredSamples = samples.filter(item => item.id == inputValue);

// POPULATING TABLE WITH SELECTION DATA
//-----------------------------------------
filteredData.forEach((item) => {
  
  // inputVal.remove();
  let row = tableBody.append("tr");
  
  Object.entries(item).forEach(value => {

      let cell = row.append("tr");
      cell.text("");
      cell.text(`${value[0]}: ${value[1]}`);
    
  })
});

// NEED TO CLEAR DATA BEFORE EACH SELECTION IS POPULATED!!!!!!! WHERE SHOULD THIS OPEN BRACKET CLOSE??
// ****************************************




// SLICING/REVERSING DATA FOR HORIZONTAL BAR CHART
// *****************************************
var SlicedSampleValues = filteredSamples[0].sample_values.slice(0,10).reverse()
// console.log(SlicedSampleValues);

var slicedOTUs = filteredSamples[0].otu_ids.slice(0,10).reverse().map(data => `OTU ` + data);
// console.log(slicedOTUs);
// var slicedOTUs


var slicedLabels = filteredSamples[0].otu_labels.slice(0,10).reverse();
// console.log(slicedLabels);
// ******************************************



// PLOT HORIZONAL BAR CHART
// ************************************
var trace1 = {
  x: SlicedSampleValues,
  // WORK ON BAR LABELS
  y: slicedOTUs,
  text: slicedLabels,
  type: "bar",
  orientation: "h"
};
var bardata = [trace1];
var barlayout = {
    title: "Top 10 OTUs in Sample",  
};
Plotly.newPlot("bar", bardata, barlayout);
// **************************************



// ATTEMPTING BUBBLE CHART-KEEP WORKING!!!!
// *************************************
//Not using sliced values for this chart??
var size = filteredSamples[0].sample_values;
var desired_maximum_marker_size = 200;
var trace2 = {
  x: filteredSamples[0].otu_ids,
  y: filteredSamples[0].sample_values,
  text: filteredSamples[0].otu_labels,
  mode: 'markers',
  marker: {
    // work on this!!!!!!!!
    size: size,
    sizeref: 0.1 * (Math.max(filteredSamples[0].sample_values)/(desired_maximum_marker_size**2)),
    // !!!!!!!NEED MARKER COLORS!!!!!!!
    sizemode: 'area'
  }
};

var bubbledata = [trace2]
var bubblelayout = {
  title: "OTU Prevalence in Sample"
}

Plotly.newPlot("bubble", bubbledata, bubblelayout)
// **********************************************

// THE BELOW BRACK CLOSES THE "CONST DROPDOWN CHANGE FUNCTION"

};

//  *************************

dropdown.on("change", dropdownchange);
});

// GENERAL LAYOUT NEEDS IMPROVEMENT





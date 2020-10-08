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
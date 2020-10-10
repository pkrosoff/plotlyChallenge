// // get the data how you like it
function updatePage() {}


d3.json('samples.json').then(BBdata => {
    console.log(BBdata);
    // var metadata = Object.entries(BBdata);
    var metadata = BBdata.metadata;
    // var metadata = Object.entries(metadata);
    console.log(metadata);
    // var metadata2 = metadata.map(data => data["metadata"]);
    // console.log(metadata);
    var names = BBdata.names
    console.log(names);
    var samples = BBdata.samples
    console.log(samples);


d3.selectAll("#body").on("change", updatePage);




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
console.log(inputValue);

var filteredData = metadata.filter(item => item.id == inputValue);
console.log(filteredData);


   
filteredData.forEach((item) => {
    let row = tableBody.append("tr");
    Object.entries(item).forEach(value => {
        let cell = row.append("tr");
        cell.text(`${value[0]}: ${value[1]}`);

    })
})
// filteredData.forEach((item) => {
//         let cell = tableBody.append("tr")
//         cell.text(item);
//         // console.log(item.id)
//         // console.log(item)
//     });
    
};
// *************************

// //THE DEMOGRAPHIC INFO FOR EVERY NAME
// const filterdemo = () => {
// // console.log("hello")
//     // prevent page from refreshing
//     d3.event.preventDefault();

//    // select input element
// //    var choiceID = (d3.event.target.value);
//    var inputElement = d3.select("#selDataset");
// //    console.log(inputElement);
//    inputValue = inputElement.property("value");
// //    console.log(inputValue)
//    // add filter date
//    filteredData = metadata.filter(row => row.id === inputValue);
//    console.log(row.id)
//    // Populate table with filtered values

// }

dropdown.on("change", dropdownchange);
// dropdown.on("change", filterdemo);
});






// // IDENITFY EACH GRAPH FROM INDEX.HTML AND UPDATE ON CHANGE

// function updatePlotly(optionChanged) {

// //THIS CAUSES REACTION WHEN DROPDOWN CHANGED
//     var dataset = dropdown.property("value");}


//     var BAR = document.getElementById("bar");
//     updatePlotly.restyle(BAR, "values", [optionChanged]);

//     var GUAGE = document.getElementById("guage");
//     updatePlotly.restyle(GUAGE, "values", [optionChanged]);

//     var BUBBLE = document.getElementById("bubble");
//     updatePlotly.restyle(BUBBLE, "values", [optionChanged]);
// }

// // GET DATA FUNCTIONS
// function getData(dataset) {
//     var data = [];
//     switch (dataset) {
//     case "subjectID":
//         data = [940s data];
//         break;
//     }
//     updatePlotly(data);
// }
// Select the button
var button = d3.select("#filter-btn");

// Select the form
// DEBUG!! -- pressing Enter no longer filters the data presented
// var form = d3.select("#form");
var form = d3.select("#filter");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the DATE input element and get the raw HTML node and get value property of DATE input
    var dateInputElement = d3.select("#datetime");
    var dateInputValue = dateInputElement.property("value");

    // DEBUG!! -- City, State, and Shape do not filter
    // Select the CITY input element and get the raw HTML node and get value property of CITY input
    var cityInputElement = d3.select("#city");
    var cityInputValue = cityInputElement.property("value");

    // Select the STATE input element and get the raw HTML node and get value property of STATE input
    var stateInputElement = d3.select("#state");
    var stateInputValue = stateInputElement.property("value");

    // Select the SHAPE input element and get the raw HTML node and get value property of SHAPE input
    var shapeInputElement = d3.select("#shape");
    var shapeInputValue = shapeInputElement.property("value");


    // Print the value to the console
    // DEBUG!! -- why does this print out values for each record in filteredData instead of just what the inputs are???
    console.log(dateInputValue, cityInputValue, stateInputValue, shapeInputValue);

    // filter the table's data Modeled after 14.3.9
    // remove any children from the ufoTable to
    ufoTable.html("");

    // Apply DATE filter if a value is populated in the filter field
    if (dateInputValue !== "") {
        var filteredData = ufoData.filter(element => element.datetime === dateInputValue);
    }

    // Apply CITY filter if a value is populated in the filter field
    if (cityInputValue !== "") {
        filteredData = filteredData.filter(element => element.city === cityInputValue);
    }

    // Apply STATE filter if a value is populated in the filter field
    // DEBUG!! -- values in the state filter cause 0 data rows to show
    if (stateInputValue !== "") {
        filteredData = filteredData.filter(element => element.statetime === stateInputValue);
    }

    // Apply SHAPE filter if a value is populated in the filter field
    if (shapeInputValue !== "") {
        filteredData = filteredData.filter(element => element.shape === shapeInputValue);
    }

    filteredData.forEach(function (element) {
        // COMMENTED OUT TO ALLOW OTHER OUTPUT TO PRINT TO CONSOLE
        // console.log(element);

        let row = ufoTable.append("tr");

        // Tried capitalizing Entries
        Object.entries(element).forEach(function ([key, value]) {
            // COMMENTED OUT TO ALLOW OTHER OUTPUT TO PRINT TO CONSOLE
            // console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });

    // Set the span tag in the h1 element to the text
    // that was entered in the form
    //   d3.select("h1>span").text(inputValue);
}

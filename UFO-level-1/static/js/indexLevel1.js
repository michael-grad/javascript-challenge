// Select the button
var button = d3.select("#filter-btn");
 
// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the function to run for both events
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Print the value to the console
    console.log(inputValue);

    // filter the table's data Modeled after 14.3.9
    // remove any children from the ufoTable to
    ufoTable.html("");
    var filteredData = ufoData.filter(element => element.datetime === inputValue);
    filteredData.forEach(function (element) {
        console.log(element);

        let row = ufoTable.append("tr");

        Object.entries(element).forEach(function ([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });

    // Set the span tag in the h1 element to the text
    // that was entered in the form
    //   d3.select("h1>span").text(inputValue);
}

// Modeled after Activity 14.3.3

// Get a reference to the table body
let ufoData = data;
let ufoTable = d3.select("#ufo-table")
// Console.log the weather data from data.js
console.log(ufoData);

// Step 1: Loop Through `data` and console.log each ufo object

// Step 2:  Use d3 to append one table row `tr` for each ufo object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// Step 3:  Use `Object.entries` to console.log each ufo value
// Step 4: Use d3 to append 1 cell per ufo value (datetime, city, state, country, shape, durationMinutes, comments)
// Step 5: Use d3 to update each cell's text with
// ufo values (datetime, city, state, country, shape, durationMinutes, comments)
ufoData.forEach(function(element) {
    console.log(element);
    let row = ufoTable.append("tr");

    // Tried capitalizing Entries
    Object.entries(element).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

// // BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//     var row = tbody.append("tr");
//     Object.entries(weatherReport).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

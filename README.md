### JavaScript and DOM Manipulation


## Purpose

* A JavaScript file wwas written to display a datatable of reported UFOs.  In addition, a JavaScript file was written to apply filters on the display datatable.

## Scope

* Several files were supplied before JavaScript files were written:  data.js, style.css, and index.html - along with image files.

* App.js displays the data table on the webpage.  

* indexLevel1.js enables filtering of the datatable only by date of observation.

* indexLevel1.js enables filtering of the datatable by date of observation, city, state, and/or shape of UFO.

## Methodology

* App.js (under both UFO-level-1 and UFO-level-2) are identical.  This file uses d3 to select the table body tag.  A <tr> tag is appended.  Following that a <td> tag is appended with the dictionary value from data.js.

* indexLevel1.js uses d3 to select the id filter-button or the id form.  Upon clicking the button or pressing enter, function runEnter is called.  The id datetime is selected and assigned to variable inputElement.  The value in the form field is then assigned to variable inputValue.  Using a conditional statement a new variable filteredData is assgined the array of filtered ufoData.  At this point, the filtered table values are appended to the datatable displayed much the same way as done in app.js.

* indexLevel2.js applies multiple filters.  A filter form field is displayed in index.html (under UFO-level-2) for date, city, state, and shape.  The content for the city, state, and shape was added in lines 43-56 using <li>, <label>, and <input> tags.  In order to get these fields to apply the filters, indexLevel2.js added d3 select statements to assign the values in the filter fields to appropriately named variables.  In addition, in lines 44-63, if statements are used to ensure the filters only apply if the filter form field has a value other than null.  In addition, the variable filteredData has each filter applied in series to ensure that all filter form fields are applied together.

* Pressing enter in the filter form field for UFO-level-2 did not cause any filtering.  As such the index.html line 61 was updated to show id="submit" to enable pressing enter to function as if pressing the filter button.

## Outcome

* Upon loading the webpage from index.html, the full data table sourced from data.js is displayed.  When populating a valid value in the form to filter the table and clicking the filter button, the data table filters appropriately.  The filter also works when populating the filter form and pressing enter.  Using the multifilter form accurately applies all filters to the data table and ignores form fields that are null.
// from data.js
var tableData = data;

// YOUR CODE HERE!
// references and variables creation
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var Date = d3.select("#datetime");
var City = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// html imput
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Event listener 
button.on("click", () => {

    d3.event.preventDefault();
    
var inputDate = Date.property("value").trim();
  
    
var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

        else {
            $tbody.append("tr").append("td").text("No Sightings");
        }
})

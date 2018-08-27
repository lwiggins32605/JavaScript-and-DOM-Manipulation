// Data from data.js

var alienData = data;

var tbody = d3.select("tbody");

var table = d3.select("table");

table.attr("class", "table table-striped");

// Select Submit button with id = "filter-btn" changed to #submit
var submit = d3.select("#submit");

submit.on("click", function() {
    
    // Prevent page from refreshing - from ex 09
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateinputElement = d3.select("#datetime")
    var cityinputElement = d3.select("#city")
    var stateinputElement = d3.select("#state")
    var countryinputElement = d3.select("#country")
    var shapeinputElement = d3.select("#shape")
    
    // Get the property of the input element
    var dateinputValue = dateinputElement.property("value");
    var cityinputValue = cityinputElement.property("value").toLowerCase();
    var stateinputValue = stateinputElement.property("value").toLowerCase();
    var countryinputValue = countryinputElement.property("value").toLowerCase();
    var shapeinputValue = shapeinputElement.property("value").toLowerCase();

    // Filter Data with ONE OR MORE options selected at a time as desired
    // or none as Default for all data
    var tableData = alienData

    if (dateinputValue.length > 0) {
    var tableData = tableData.filter(siting => siting.datetime === dateinputValue);
    }
    if (cityinputValue.length >0) {
        var tableData = tableData.filter(siting => siting.city === cityinputValue);   
    }
    if (stateinputValue.length >0) {
        var tableData = tableData.filter(siting => siting.state === stateinputValue);   
    }
    if (countryinputValue.length >0) {
        var tableData = tableData.filter(siting => siting.country === countryinputValue);   
    }
    if (shapeinputValue.length >0) {
        var tableData = tableData.filter(siting => siting.shape === shapeinputValue);   
    }

    var filteredData = tableData
    filteredData.forEach(x => {
         var row = tbody.append("tr");

        row.append("td").text(x.datetime);
        row.append("td").text(x.city);
        row.append("td").text(x.state);
        row.append("td").text(x.country);
        row.append("td").text(x.shape);
        row.append("td").text(x.durationMinutes);
        row.append("td").text(x.comments);
    })
    
});


// "All of life is calculus: every thing, every movement, every thought" ~ Verna Orsatti


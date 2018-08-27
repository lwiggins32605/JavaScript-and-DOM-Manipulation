// from data.js
var alienData = data;

var tbody = d3.select("tbody");

var table = d3.select("table");

table.attr("class", "table table-striped");

// Select Submit button with id = "filter-btn"
var submit = d3.select("#submit");

submit.on("click", function() {
    
    // Prevent page from refreshing - from ex 09
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    // Get the property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    //console.log(alienData);
    console.log(alienData);

    // Filter
    var filteredData = alienData.filter(siting => siting.datetime === inputValue);
    console.log(filteredData)

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


// "All of life is calculus: every thing, every movement, everythought" ~ Verna Orsatti



var path ="../../samples.json";

// dropdown
var dropdownMenu = d3.select("#selDataset");
const data = d3.json(path).then(function(data) {
    //console.log(data);    
    const names = data.names;
    //console.log(names);
    names.forEach(ID => { 
    //console.log(ID);
    var option = dropdownMenu.append("option");
    option.text(ID);
    // var optionValue = option.property("value");
    // console.log(optionValue);/(153)
    
    });

    

    //demographic info
    const metaData = data.metadata;
    //console.log(metaData);
});
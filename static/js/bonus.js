
var dropdownMenu = d3.select("#selDataset");
function buildID(namearray) {
    namearray.forEach(name => { 
    //console.log(name);
    var option = dropdownMenu.append("option");
    option.text(name);
    var optionValue = option.property("value");
});

};

  
var demography = d3.select("#sample-metadata");
function builtDemography (demo) {
    demography.html(" ");
    Object.entries(demo).forEach(([key, value]) =>{
        var row = demography.append("tr");
        row.text(`${key} :  ${value}`)
       });
    };
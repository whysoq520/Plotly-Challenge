const path = "../../samples.json";

// Assign variables to all selections
var dropdownMenu = d3.select("#selDataset");
var demographic =d3.select("#sample-metadata");
var demographic =d3.select("#bar");
var demographic =d3.select("#gauge");
var demographic =d3.select("#bubble");
var demographic =d3.select("#sample-metadata")


const data = d3.json(path).then((data)=>{
    //console.log(data);

    // dropdown
    const names = data.names;
    //console.log(names);
    names.forEach(ID => { 
        //console.log(ID);
        var option = dropdownMenu.append("option");
        option.text(ID);
        var optionValue = option.property("value");
        console.log(optionValue)
                        
    });

    // //Demographic
    // const info = data.metadata;
    // var selectedsample = info.filter(sample => sample.id == option)
    // info.forEach(function (metadata) {
    //     //console.log(metadata);
    //     var row = demographic.append("tr");
    //     Object.entries(metadata).forEach(function ([key, value]){
    //         console.log(key,value);
    //         var cell = row.append("td");
          
            


    //     })


    // });
    
    // const samples = data.samples;
    // //console.log(samples);
});





// 
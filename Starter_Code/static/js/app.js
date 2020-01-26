var path ="../../samples.json";

// function updateDemography (id) {

//     var initial = d3.select(this).select("option");
//     var initialValue = initial.property("value");
//     var initialID =initial.attr("id");
//     console.log(initialID);
//     console.log(initialValue);
// };



        



function init() {
const data = d3.json(path).then(function(data) {    
    //console.log(data);    

    // dropdownmenu ID
    const names = data.names;
     // d3.event.preventDefault();
     var dropdownMenu = d3.select("#selDataset");
     names.forEach(name => { 
     //console.log(name);
     var option = dropdownMenu.append("option");
     option.text(name);
     var optionValue = option.property("value");
     //console.log(optionValue);
 });



 
 //Demography Info
    var metaData = data.metadata;
    var metaData1 =(metaData[0])
        //console.log(metaData[0]);
    var demography = d3.select("#sample-metadata");
        demography.html(" ");
    Object.entries(metaData1).forEach(([key, value]) =>{
            var row = demography.append("h5");
            row.text(`${key} :  ${value}`)
           });

// plots
    var samples = data.samples
    //console.log(samples);
    var sample_values = samples.map(sample =>sample.sample_values);  
    //console.log(sample_values[0]);
    var top10sample_values = sample_values[0].slice(0,10)
    //console.log(top10sample_values);
    var otu_ids = data.samples.map(sample =>sample.otu_ids); 
    var top10otu_ids = otu_ids[0].slice(0,10)   
    var otu_labels = data.samples.map(sample =>sample.otu_labels);
    var sampleID = samples.map(sample =>sample.id); 
    //console.log(sampleID);


    var bardata =[{
        x:top10sample_values.reverse(),
        y:top10otu_ids.map(id =>  ("OTU" + id.toString())),
        type:"bar",
        orientation: "h"
    }];


    Plotly.newPlot("bar", bardata);  
   




    var bubbledata =[{
        x: otu_ids[0],
        y: sample_values[0],
        text: otu_labels[0],
        mode: "markers",
        marker: {
        size: sample_values[0],
        color: otu_ids[0],
        colorscale: "Earth"}
    }];

    var bubbleLayout = {
        margin: { t: 0 },
        hovermode: "closests",
        xaxis: { title: "OTU ID"}
      };
  
Plotly.plot("bubble", bubbledata, bubbleLayout);


});
};




function optionChanged(newsample){
    
    console.log(newsample);
    // updateDemography (id);
    updatePlots(newsample);
};



function updatePlots(newsample) {
    var ID= d3.select("#selDataset").property("value");
   
    for (var i=0; i<newsample.length; i++) {
        if (newsample[i].id ===ID) {
            
            let bardata =[{
                x:newsamples[i].sample_values.slice(0,10).reverse(),
                y:newsamples[i].otu_ids.slice(0,10).map(id =>  ("OTU" + id.toString())),
                type:"bar",
                orientation: "h"
            }];
            Plotly.newPlot("bar", bardata);  
        };
    };
};


init();



// write a function that reacts to if selDataset changes and reruns all the functions to build plots by passing in the argument of the changed sample


    //biuldbubble(samples[0]);
   // buildBar(samples[0])
    // names.forEach(ID => { 
    // //console.log(ID);
    // var option = dropdownMenu.append("option");
    // option.text(ID);
    // var optionValue = option.property("value");
    // console.log(optionValue);/(153)  
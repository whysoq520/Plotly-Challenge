var path ="../../samples.json";






function optionChanged(id){
    
    console.log(id);
    updateDemography (id);
    updatePlots(id);
}




// function updateDemography () {
//     var initial = d3.select(this).select("option");
//     var initialValue = initial.property("value");
//     var initialID =initial.attr("id");
//     console.log(initialID);
//     console.log(initialValue);
// };


function buildbarplots(sample) {
    //get data 
    for (var i=0; i<sample.length; i++) {
    let sample_values = sample.map(s =>s.sample_values)[i].slice(0,10)
    
    //console.log(sample_values);
    let otu_ids = sample.map(s =>s.otu_ids)[i].slice(0,10);
    
    // bar
    var bardata =[{
        x:sample_values.reverse(),
        y:otu_ids.map(id =>  ("OTU" + id.toString())),
        type:"bar",
        orientation: "h"
    }];
    Plotly.newPlot("bar", bardata);
};
};
    
  


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
 });



 
 //Demography Info
    var metaData = data.metadata;
    var metaData1 =(metaData[0])
        console.log(metaData[0]);
    var demography = d3.select("#sample-metadata");
        demography.html(" ");
    Object.entries(metaData1).forEach(([key, value]) =>{
            var row = demography.append("h5");
            row.text(`${key} :  ${value}`)
           });

// plots
    var samples = data.samples
    var sample_values = samples.map(sample =>sample.sample_values);  
    //console.log(sample_values[0]);
    var top10sample_values = sample_values[0].slice(0,10)
    //console.log(top10sample_values);
    var otu_ids = data.samples.map(sample =>sample.otu_ids); 
    var top10otu_ids = otu_ids[0].slice(0,10)   
    var otu_labels = data.samples.map(sample =>sample.otu_labels);


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



    buildID(names); 
    buildDemography (metaData[0]);
    //buildbarplots(samples);
   

});



// write a function that reacts to if selDataset changes and reruns all the functions to build plots by passing in the argument of the changed sample


    //biuldbubble(samples[0]);
   // buildBar(samples[0])
    // names.forEach(ID => { 
    // //console.log(ID);
    // var option = dropdownMenu.append("option");
    // option.text(ID);
    // var optionValue = option.property("value");
    // console.log(optionValue);/(153)  
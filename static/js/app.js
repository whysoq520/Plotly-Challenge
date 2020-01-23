var path ="../../samples.json";

// dropdown

function buildID(namearray) {
    d3.event.preventDefault();
    var dropdownMenu = d3.select("#selDataset");
    namearray.forEach(name => { 
    //console.log(name);
    var option = dropdownMenu.append("option");
    option.text(name);
    var optionValue = option.property("value");
});

};




function buildDemography (demo) {
    var demography = d3.select("#sample-metadata");
    demography.html(" ");
    Object.entries(demo).forEach(([key, value]) =>{
        var row = demography.append("tr");
        row.text(`${key} :  ${value}`)
       });
    };




function filterDemography () {
    const Demodata = d3.json(path).then(function(Ddata) {
        //console.log(data);    
        
        var metaData = Demodata.metadata;
            console.log(metaData)
        //console.log(data);    
        //let metaData = data1.metadata;
        //console.log(metaData);
        //var sample_values = data.samples.map(sample =>sample.sample_values);

});
};

function updateDemography () {
    var initial = d3.select(this).select("option");
    var initialValue = initial.property("value");
    var initialID =initial.attr("id");
    console.log(initialID);
    console.log(initialValue);
};


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
    
   //built Bubble function 
function biuldbubble(sample) {
    //get data 
    for (var i=0; i<sample.length; i++) {
    let sample_values = sample.map(s =>s.sample_values);
    
  
    //console.log(sample_values);
    let otu_ids = sample.map(s =>s.otu_ids);
    
    let otu_labels = sample.map(s =>s.otu_labels);
    
    //console.log(sample_values);
    
    var bubbledata =[{
        x: otu_ids[i],
        y: sample_values[i],
        text: otu_labels[i],
        mode: "markers",
        marker: {
        size: sample_values[i],
        color: otu_ids[i],
        colorscale: "Earth"}
    }];

    var bubbleLayout = {
        margin: { t: 0 },
        hovermode: "closests",
        xaxis: { title: "OTU ID"}
      };
  
Plotly.plot("bubble", bubbledata, bubbleLayout);

    };
  
}; 



const data = d3.json(path).then(function(data) {
    
    //console.log(data);    
    const names = data.names;
    var metaData = data.metadata;
        //console.log(metaData);


    var samples = data.samples
    var sample_values = samples.map(sample =>sample.sample_values);  
    console.log(sample_values[0]);
    var otu_ids = data.samples.map(sample =>sample.otu_ids);    
    var otu_labels = data.samples.map(sample =>sample.otu_labels);
   
//     // var value =[];
//     // var otu_ids =[];
//     // var otu_labels =[];
//     // for (var i=0; i<samples.length; i++) {
//     //     Object.entries(samples[i]).forEach(([key,value])=> 
//     //     console.log(value.slice(0,10))
//     //     ); 
       
//     // };



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
    buildbarplots(samples);
    //biuldbubble(samples[0]);

});
    //biuldbubble(samples[0]);
   // buildBar(samples[0])
    // names.forEach(ID => { 
    // //console.log(ID);
    // var option = dropdownMenu.append("option");
    // option.text(ID);
    // var optionValue = option.property("value");
    // console.log(optionValue);/(153)  
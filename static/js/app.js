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




function builtDemography (demo) {
    var demography = d3.select("#sample-metadata");
    demography.html(" ");
    Object.entries(demo).forEach(([key, value]) =>{
        var row = demography.append("tr");
        row.text(`${key} :  ${value}`)
       });
    };



// set a function to build bar chart
function buildBar (bar) {
    var barChart = d3.select("#bar");
    barChart.html(" ");
    
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
function biuldbubble() {
    var bubbledata =[{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: "markers",
        marker: {
        size: sample_values/10,
        color: otu_ids,
        colorscale: "Earth"}
    }];

    var bubbleLayout = {
        margin: { t: 0 },
        hovermode: "closests",
        xaxis: { title: "OTU ID"}
      };
  
Plotly.plot("bubble", bubbledata, bubbleLayout);



    };
  
  



const data = d3.json(path).then(function(data) {
    
    //console.log(data);    
    const names = data.names;
    var metaData = data.metadata;
        //console.log(metaData);


    var samples = data.samples
    var sample_values = samples.map(sample =>sample.sample_values);
    var topsample_values= sample_values[0].slice(0,10);
    console.log(sample_values[0]);
    var otu_ids = data.samples.map(sample =>sample.otu_ids);
    var topotu_ids = otu_ids[0].slice(0,10);
    var otu_labels = data.samples.map(sample =>sample.otu_labels);
    var topout_labels = otu_labels[0].slice(0,10);
//     // var value =[];
//     // var otu_ids =[];
//     // var otu_labels =[];
//     // for (var i=0; i<samples.length; i++) {
//     //     Object.entries(samples[i]).forEach(([key,value])=> 
//     //     console.log(value.slice(0,10))
//     //     ); 
       
//     // };

   
//     var bardata =[{
//         x:topsample_values.reverse(),
//         y:topotu_ids.map(id =>  ("OTU" + id.toString())),
//         type:"bar",
//         orientation: "h"
//     }];
    

    // Plotly.newPlot("bar", bardata);

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
    builtDemography (metaData[0]);
    buildbarplots(samples);
    //biuldbubble(samples[0]);
   // buildBar(samples[0])
    // names.forEach(ID => { 
    // //console.log(ID);
    // var option = dropdownMenu.append("option");
    // option.text(ID);
    // var optionValue = option.property("value");
    // console.log(optionValue);/(153)   
    
    });

    

//     //demographic info
//     const metaData = data.metadata;
//     //console.log(metaData);
// });
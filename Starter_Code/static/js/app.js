var path ="../../samples.json";

function init() {
const data = d3.json(path).then(function(data) {    
    //console.log(data);    

// dropdownmenu ID
    // setting all samples ID on the dropdownmenu by appending(IDS) to option 
    const names = data.names;
     //d3.event.preventDefault();
     var dropdownMenu = d3.select("#selDataset");

     names.forEach(name => { 
     //console.log(name);
     var option = dropdownMenu.append("option");
     option.text(name);
    });



 
 //Demography Info
    var metaData = data.metadata;
    // applying the first sample metadata to set demographic Info
    var metaData1 =(metaData[0])
        console.log(metaData1);
    var wfreq =metaData1.wfreq
        //console.log(wfreq);
    var demography = d3.select("#sample-metadata");
        demography.html(" ");
    Object.entries(metaData1).forEach(([key, value]) =>{
            var row = demography.append("h5");
            row.text(`${key} :  ${value}`)
           });

// plots
    // using first sample to plot
    var samples = data.samples
    //console.log(samples);
    var sample_values = samples.map(sample =>sample.sample_values);  
    //console.log(sample_values[0]);
    var top10sample_values = sample_values[0].slice(0,10).reverse();
    console.log(top10sample_values);
    var otu_ids = data.samples.map(sample =>sample.otu_ids); 
    var top10otu_ids = otu_ids[0].slice(0,10).reverse();
    
    var otu_labels = data.samples.map(sample =>sample.otu_labels);
    var top10otu_labels = otu_labels[0].slice(0,10).reverse();
    console.log(top10otu_labels);
    
    
    //bar plot
    var bardata =[{
        x:top10sample_values,
        y:top10otu_ids.map(id =>  ("OTU" + id.toString())),
        type:"bar",
        text:top10otu_labels,
        orientation: "h"
    }];


    Plotly.newPlot("bar", bardata);  
   



    // bubble plot
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



    //gauge plot

    var gaugedata =[{
        domain:{x:[0,1],y:[0,1]},
        value:parseFloat(wfreq),
        title:{text: "Weekly washing Frequency"},
        type:"indicator",
        mode: "gauge+number",
        gauge: {axis:{range:[0,9]},
                steps:[{range:[0,1], color: "#ffebcc"},
                       {range:[1,2], color: "#ffff80"},
                       {range:[2,3], color: "#ffcc80"},
                       {range:[3,4], color: "#ffff66"},
                       {range:[4,5], color: "#b3e6ff"},
                       {range:[5,6], color: "#1ab2ff"},
                       {range:[6,7], color: "#99ff99"},
                       {range:[7,8], color: "#33ff33"},
                       {range:[8,9], color: "#ff33cc"},
                       ]
                }
        }];

    var gaugelayout = {
        width:700,
        height: 600, 
        margin: { t: 30, b: 50, l:100, r:100 } 
        };

    Plotly.newPlot("gauge",gaugedata, gaugelayout);

 });
};




function optionChanged(ID){    
    console.log(ID);
    updateDemography (ID);
    updatePlots(ID);
    updateGauge(ID);
};


function updateDemography(ID) {
    d3.json(path).then(function(data){
        var metaData = data.metadata;
        for (var i=0; i<metaData.length; i++) {
            if (metaData[i].id.toString() ===ID) {
                //console.log(metaData[i].id)    
                var demography = d3.select("#sample-metadata");
                demography.html(" ");
                Object.entries(metaData[i]).forEach(([key, value]) =>{
                var row = demography.append("h5");
                row.text(`${key} :  ${value}`);
                });
            };
        };
    });
};


function updateGauge(ID){
    d3.json(path).then(function(data){
        let metaData=data.metadata;
        for (var j=0; j<metaData.length; j++){
            if(metaData[j].id.toString() ===ID){
                let wfreq=metaData[j].wfreq;
                console.log(wfreq);
                var gaugedata =[{
                    domain:{x:[0,1],y:[0,1]},
                    value:parseFloat(wfreq),
                    title:{text: "Weekly washing Frequency"},
                    type:"indicator",
                    mode: "gauge+number",
                    gauge: {axis:{range:[0,9]},
                            steps:[{range:[0,1], text:0-1,color: "#ffebcc"},
                                   {range:[1,2], color: "#ffff80"},
                                   {range:[2,3], color: "#ffcc80"},
                                   {range:[3,4], color: "#ffff66"},
                                   {range:[4,5], color: "#b3e6ff"},
                                   {range:[5,6], color: "#1ab2ff"},
                                   {range:[6,7], color: "#99ff99"},
                                   {range:[7,8], color: "#33ff33"},
                                   {range:[8,9], color: "#ff33cc"},
                                   ]
                            }
                    }];
            
                var gaugelayout = {
                    width:700,
                    height: 600, 
                    margin: { t: 30, b: 50, l:100, r:100 } 
                    };
            
                Plotly.newPlot("gauge",gaugedata, gaugelayout);

                
            };
        };  
    });

}

function updatePlots(ID) {
    //var ID= d3.select("#selDataset").property("value");
    d3.json(path).then(function(data) {
        var samples = data.samples 
          
    for (var i=0; i<samples.length; i++) {
        if (samples[i].id ===ID) {
            //console.log(samples[i].sample_values)
            
            let bardata =[{
                x:samples[i].sample_values.slice(0,10).reverse(),
                y:samples[i].otu_ids.slice(0,10).map(id =>  ("OTU" + id.toString())).reverse(),
                type:"bar",
                text:samples[i].otu_labels.slice(0,10).reverse(),
                orientation: "h"
            }];
            Plotly.newPlot("bar", bardata);


            let bubbledata =[{
                x: samples[i].otu_ids,
                y: samples[i].sample_values,
                text: samples[i].otu_labels,
                mode: "markers",
                marker: {
                size: samples[i].sample_values,
                color: samples[i].otu_ids,
                colorscale: "Earth"}
            }];
        
            let bubbleLayout = {
                margin: { t: 0 },
                hovermode: "closests",
                xaxis: { title: "OTU ID"}
              };
          
        Plotly.plot("bubble", bubbledata, bubbleLayout);


        
            
            



        };
    };
});
};


init();



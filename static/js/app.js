var path ="../../samples.json";

// dropdown
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

function updateData () {
    var initial = d3.select(this).select("option");
    var initialValue = initial.property("value");
    var initialID =initial.attr("id");
    console.log(initialID);
    console.log(initialValue);
};


function buildbar(sample) {
    
    d3.json(path).then(function(data) {
      // Grab values from the response json object to build the plots
      var sample_values = data.samples.map(sample =>sample.sample_values);
      var otu_ids = data.dataset.dataset_code;
      var otu_lables= data.dataset.start_date;
      
      // Print the names of the columns
      console.log(data.dataset.column_names);
      // Print the data for each day
      console.log(data.dataset.data);
      var dates = data.dataset.data.map(row => row[0]);
      // console.log(dates);
      var closingPrices = data.dataset.data.map(row => row[4]);
      // console.log(closingPrices);
  
      
    });
  }
  
  



const data = d3.json(path).then(function(data) {
    //console.log(data);    
    const names = data.names;
    var metaData = data.metadata;
        console.log(metaData);
        metaData.forEach (meta => console.log(meta.id));
        
    var sample_values = data.samples.map(sample =>sample.sample_values);
    //console.log(sample_values);
    var otu_labels  = data.samples.map(sample =>sample.otu_labels);
    //console.log(otu_labels);
    buildID(names); 
    //buildDemography (metaData);
    //console.log(names);
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
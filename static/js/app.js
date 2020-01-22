const path = "../../samples.json";
// dropdown

// Assign the dropdownmenu option to a variable
var dropdownMenu = d3.select("#selDataset");
const data = d3.json(path).then((data)=>{
    //console.log(data);
    const names = data.names;
    //console.log(names);
    names.forEach(ID => { 
        //console.log(ID);
        var option = dropdownMenu.append("option");
        option.text(ID);
                        
    });
});
    



// 
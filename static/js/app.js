const path = "../../samples.json";
const data = d3.json(path).then((data)=>{
    console.log(data);
    const names = data.names;
    console.log(names);
    console.log(data.samples)

});


// 
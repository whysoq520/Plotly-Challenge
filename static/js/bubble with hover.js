Plotly.d3.csv(
  "https://raw.githubusercontent.com/plotly/datasets/master/job-automation-probability.csv",
  function(rows) {
    var x = [],
      y = [],
      s = [],
      c = [],
      t = [];

    for (var i = 0; i < rows.length; i++) {
      row = rows[i];
      y.push(row["Average annual wage"]);
      x.push(row["prob"]);
      s.push(row["numbEmployed"]);
      c.push(row["education"]);
      t.push(row["short occupation"]);
    }

    Plotly.newPlot('myDiv', {
      data: [
        {
          type: "scatter",
          mode: "markers",
          x: x,
          y: y,
          text: t,
          marker: { size: s, sizeref: 4000, sizemode: "area" },
          transforms: [{ type: "groupby", groups: c }],
          hovertemplate:
            "<b>%{text}</b><br><br>" +
            "%{yaxis.title.text}: %{y:$,.0f}<br>" +
            "%{xaxis.title.text}: %{x:.0%}<br>" +
            "Number Employed: %{marker.size:,}" +
            "<extra></extra>"
        }
      ],
      layout: {
        title: "Higher Risk of Job Automation in Lower Paying Jobs",
        hovermode: "closest",
        hoverlabel: { bgcolor: "#FFF" },
        legend: {orientation: 'h', y: -0.3},
        xaxis: {
          tickformat: ".0%",
          title: "Automation Probability",
          zeroline: false
        },
        yaxis: {
          title: "Income",
          zeroline: false
        }
      },
      config: { responsive: true }
    });
  }
);




// for (var i = 0; i < 153; i++) {
//         // var sample =data.samples[i];
//         var id =data.samples[i].id;
//         var otu_ids =data.samples[i].otu_ids;
//         var sample_values =data.samples[i].sample_values;
//         var otu_labels =data.samples[i].otu_labels;

//         Plotly.newPlot('bar', {
//             data: [
//               {
//                 type: "bar",
//                 mode: "markers",
//                 x: otu_ids,
//                 y: sample_values,
//                 orientation: 'h',
//                 hovertemplate:
//                   "<b>%{text}</b><br><br>" +
//                   "%{yaxis.title.text}: %{y:$,.0f}<br>" +
//                   "%{xaxis.title.text}: %{x:.0%}<br>" +
//                   "Number Employed: %{marker.size:,}" +
//                   "<extra></extra>"
//               }
//             ],
//             layout: {
//               hovermode: "closest",
//               hoverlabel: { bgcolor: "#FFF" },
//               legend: {orientation: 'h', y: -0.3},
//               xaxis: {
//                 tickformat: ".0%",
//                 title: "Automation Probability",
//                 zeroline: false
//               },
//               yaxis: {
//                 title: "Income",
//                 zeroline: false
//               }
//             },
//             config: { responsive: true }
//           });
// }
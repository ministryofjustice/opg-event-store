
var depth = 0;
var STEP=60;
function addEventToGraph(graph, producers, event, consumers, spacing){
  const event_name = 'event-'+event
  spacing = spacing || 200;

  graph.add({  
    data: { id:event_name , name: event, event:true },
    position:{x: (spacing*2), y: depth}
  })
  depth+=STEP;
  var producer_count=0;
  producers.forEach((source_item) => {
    const producer_name = 'producer-'+source_item
    const edge_name = producer_name+'---'+event_name
    if(!graph.getElementById(producer_name).length){
      graph.add({  
        data: { id: producer_name , name:source_item, producer:true},
        position:{x: 0, y: depth}
      })
      depth+=STEP;
      producer_count++;
      
    }
    graph.add({ 
      group: 'edges',
      data: { id:edge_name, source: producer_name, target: event_name , name:"produces"}
    }) 
    
  });

  depth=depth - ( (producer_count) * STEP )

  consumers.forEach((consumed_item)=>{
    const consumer_name = 'consumer-'+consumed_item
    const edge_name = consumer_name+'---'+event_name
    if(!graph.getElementById(consumer_name).length){
      graph.add({
        data: { id: consumer_name, name: consumed_item, consumer:true},
        position:{x: (spacing*4), y: depth}
      })
        depth+=STEP;
    }
     graph.add({ 
      data: {id: edge_name, source: event_name, target: consumer_name , name:'consumes'}
    }) 
    
  }) 
  
}

function reRenderGraph(graph, type){
  if (typeof type == 'string'){
    type={
      name: type
    }
  }
  let layout = graph.layout(type)
  layout.run()
}

function eventGraph(){

  return cytoscape({
    container: document.getElementById('cy'),
      
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
          'color':'white',
          'label': 'data(name)',
          "text-valign" : "center",
          "text-halign" : "center",
          'width':'label',
          'height':'label',
          'shape':'round-rectangle',
          'padding':'7px'
          }
      },
      { selector:'[producer]',  style: {'background-color':'#28a197'}},
       { selector:'[event]',  style: {'background-color':' #1d70b8'}},
     
      { selector:'[consumer]',  style: {'background-color':'#00703c'}},
        
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
          'line-style':'dashed',
          'label': 'data(name)',
          'color': '#666'
        }
      },
      
    ]
    
  });
}
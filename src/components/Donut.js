
import HighchartsReact from "highcharts-react-official"
import Highcharts  from "highcharts"



function Donut(props){





  const arr =[{"timestamp":"2022-09-07T11:03:43.359Z","data":[{"source":"twitter","data":{"count":91,"engagements":17}},{"source":"instagram","data":{"count":16,"engagements":11}}]},{"timestamp":"2022-09-08T11:03:43.359Z","data":[{"source":"twitter","data":{"count":40,"engagements":10}},{"source":"instagram","data":{"count":32,"engagements":6}}]},{"timestamp":"2022-09-09T11:03:43.359Z","data":[{"source":"twitter","data":{"count":86,"engagements":23}},{"source":"instagram","data":{"count":38,"engagements":12}}]},{"timestamp":"2022-09-10T11:03:43.359Z","data":[{"source":"twitter","data":{"count":24,"engagements":20}},{"source":"instagram","data":{"count":20,"engagements":5}}]},{"timestamp":"2022-09-11T11:03:43.359Z","data":[{"source":"twitter","data":{"count":43,"engagements":26}},{"source":"instagram","data":{"count":16,"engagements":5}}]},{"timestamp":"2022-09-12T11:03:43.359Z","data":[{"source":"twitter","data":{"count":99,"engagements":18}},{"source":"instagram","data":{"count":43,"engagements":13}}]},{"timestamp":"2022-09-13T11:03:43.359Z","data":[{"source":"twitter","data":{"count":56,"engagements":28}},{"source":"instagram","data":{"count":13,"engagements":8}}]},{"timestamp":"2022-09-14T11:03:43.359Z","data":[{"source":"twitter","data":{"count":30,"engagements":17}},{"source":"instagram","data":{"count":49,"engagements":6}}]},{"timestamp":"2022-09-15T11:03:43.359Z","data":[{"source":"twitter","data":{"count":54,"engagements":20}},{"source":"instagram","data":{"count":20,"engagements":8}}]},{"timestamp":"2022-09-16T11:03:43.359Z","data":[{"source":"twitter","data":{"count":27,"engagements":21}},{"source":"instagram","data":{"count":34,"engagements":6}}]},{"timestamp":"2022-09-17T11:03:43.359Z","data":[{"source":"twitter","data":{"count":47,"engagements":11}},{"source":"instagram","data":{"count":11,"engagements":13}}]},{"timestamp":"2022-09-18T11:03:43.359Z","data":[{"source":"twitter","data":{"count":69,"engagements":29}},{"source":"instagram","data":{"count":29,"engagements":14}}]},{"timestamp":"2022-09-19T11:03:43.359Z","data":[{"source":"twitter","data":{"count":97,"engagements":17}},{"source":"instagram","data":{"count":49,"engagements":7}}]},{"timestamp":"2022-09-20T11:03:43.359Z","data":[{"source":"twitter","data":{"count":47,"engagements":18}},{"source":"instagram","data":{"count":21,"engagements":13}}]},{"timestamp":"2022-09-21T11:03:43.359Z","data":[{"source":"twitter","data":{"count":62,"engagements":13}},{"source":"instagram","data":{"count":37,"engagements":13}}]},{"timestamp":"2022-09-22T11:03:43.359Z","data":[{"source":"twitter","data":{"count":64,"engagements":28}},{"source":"instagram","data":{"count":36,"engagements":13}}]},{"timestamp":"2022-09-23T11:03:43.359Z","data":[{"source":"twitter","data":{"count":38,"engagements":23}},{"source":"instagram","data":{"count":35,"engagements":5}}]},{"timestamp":"2022-09-24T11:03:43.359Z","data":[{"source":"twitter","data":{"count":54,"engagements":27}},{"source":"instagram","data":{"count":29,"engagements":8}}]},{"timestamp":"2022-09-25T11:03:43.359Z","data":[{"source":"twitter","data":{"count":71,"engagements":28}},{"source":"instagram","data":{"count":22,"engagements":8}}]},{"timestamp":"2022-09-26T11:03:43.359Z","data":[{"source":"twitter","data":{"count":60,"engagements":20}},{"source":"instagram","data":{"count":33,"engagements":7}}]},{"timestamp":"2022-09-27T11:03:43.359Z","data":[{"source":"twitter","data":{"count":68,"engagements":10}},{"source":"instagram","data":{"count":40,"engagements":11}}]},{"timestamp":"2022-09-28T11:03:43.359Z","data":[{"source":"twitter","data":{"count":62,"engagements":23}},{"source":"instagram","data":{"count":36,"engagements":9}}]},{"timestamp":"2022-09-29T11:03:43.359Z","data":[{"source":"twitter","data":{"count":33,"engagements":21}},{"source":"instagram","data":{"count":47,"engagements":7}}]},{"timestamp":"2022-09-30T11:03:43.359Z","data":[{"source":"twitter","data":{"count":62,"engagements":21}},{"source":"instagram","data":{"count":38,"engagements":13}}]},{"timestamp":"2022-10-01T11:03:43.359Z","data":[{"source":"twitter","data":{"count":31,"engagements":13}},{"source":"instagram","data":{"count":30,"engagements":7}}]},{"timestamp":"2022-10-02T11:03:43.359Z","data":[{"source":"twitter","data":{"count":25,"engagements":24}},{"source":"instagram","data":{"count":32,"engagements":11}}]},{"timestamp":"2022-10-03T11:03:43.359Z","data":[{"source":"twitter","data":{"count":48,"engagements":24}},{"source":"instagram","data":{"count":21,"engagements":10}}]},{"timestamp":"2022-10-04T11:03:43.359Z","data":[{"source":"twitter","data":{"count":45,"engagements":26}},{"source":"instagram","data":{"count":42,"engagements":14}}]},{"timestamp":"2022-10-05T11:03:43.359Z","data":[{"source":"twitter","data":{"count":29,"engagements":27}},{"source":"instagram","data":{"count":19,"engagements":6}}]},{"timestamp":"2022-10-06T11:03:43.359Z","data":[{"source":"twitter","data":{"count":92,"engagements":20}},{"source":"instagram","data":{"count":48,"engagements":6}}]},{"timestamp":"2022-10-07T11:03:43.359Z","data":[{"source":"twitter","data":{"count":22,"engagements":22}},{"source":"instagram","data":{"count":22,"engagements":11}}]},{"timestamp":"2022-10-08T11:03:43.359Z","data":[{"source":"twitter","data":{"count":91,"engagements":28}},{"source":"instagram","data":{"count":42,"engagements":12}}]},{"timestamp":"2022-10-09T11:03:43.359Z","data":[{"source":"twitter","data":{"count":77,"engagements":20}},{"source":"instagram","data":{"count":41,"engagements":9}}]},{"timestamp":"2022-10-10T11:03:43.359Z","data":[{"source":"twitter","data":{"count":98,"engagements":26}},{"source":"instagram","data":{"count":34,"engagements":10}}]},{"timestamp":"2022-10-11T11:03:43.359Z","data":[{"source":"twitter","data":{"count":21,"engagements":29}},{"source":"instagram","data":{"count":12,"engagements":14}}]},{"timestamp":"2022-10-12T11:03:43.359Z","data":[{"source":"twitter","data":{"count":91,"engagements":24}},{"source":"instagram","data":{"count":35,"engagements":5}}]},{"timestamp":"2022-10-13T11:03:43.359Z","data":[{"source":"twitter","data":{"count":22,"engagements":29}},{"source":"instagram","data":{"count":42,"engagements":10}}]},{"timestamp":"2022-10-14T11:03:43.359Z","data":[{"source":"twitter","data":{"count":38,"engagements":14}},{"source":"instagram","data":{"count":23,"engagements":10}}]},{"timestamp":"2022-10-15T11:03:43.359Z","data":[{"source":"twitter","data":{"count":38,"engagements":15}},{"source":"instagram","data":{"count":28,"engagements":8}}]},{"timestamp":"2022-10-16T11:03:43.359Z","data":[{"source":"twitter","data":{"count":78,"engagements":23}},{"source":"instagram","data":{"count":19,"engagements":8}}]},{"timestamp":"2022-10-17T11:03:43.359Z","data":[{"source":"twitter","data":{"count":34,"engagements":15}},{"source":"instagram","data":{"count":10,"engagements":7}}]},{"timestamp":"2022-10-18T11:03:43.359Z","data":[{"source":"twitter","data":{"count":89,"engagements":10}},{"source":"instagram","data":{"count":39,"engagements":6}}]},{"timestamp":"2022-10-19T11:03:43.359Z","data":[{"source":"twitter","data":{"count":13,"engagements":11}},{"source":"instagram","data":{"count":25,"engagements":13}}]},{"timestamp":"2022-10-20T11:03:43.359Z","data":[{"source":"twitter","data":{"count":74,"engagements":13}},{"source":"instagram","data":{"count":39,"engagements":6}}]},{"timestamp":"2022-10-21T11:03:43.359Z","data":[{"source":"twitter","data":{"count":96,"engagements":28}},{"source":"instagram","data":{"count":36,"engagements":11}}]},{"timestamp":"2022-10-22T11:03:43.359Z","data":[{"source":"twitter","data":{"count":43,"engagements":28}},{"source":"instagram","data":{"count":35,"engagements":13}}]},{"timestamp":"2022-10-23T11:03:43.359Z","data":[{"source":"twitter","data":{"count":10,"engagements":25}},{"source":"instagram","data":{"count":29,"engagements":8}}]},{"timestamp":"2022-10-24T11:03:43.359Z","data":[{"source":"twitter","data":{"count":59,"engagements":28}},{"source":"instagram","data":{"count":49,"engagements":7}}]},{"timestamp":"2022-10-25T11:03:43.359Z","data":[{"source":"twitter","data":{"count":52,"engagements":24}},{"source":"instagram","data":{"count":38,"engagements":7}}]},{"timestamp":"2022-10-26T11:03:43.359Z","data":[{"source":"twitter","data":{"count":97,"engagements":16}},{"source":"instagram","data":{"count":11,"engagements":8}}]},{"timestamp":"2022-10-27T11:03:43.359Z","data":[{"source":"twitter","data":{"count":43,"engagements":14}},{"source":"instagram","data":{"count":11,"engagements":8}}]},{"timestamp":"2022-10-28T11:03:43.359Z","data":[{"source":"twitter","data":{"count":32,"engagements":14}},{"source":"instagram","data":{"count":37,"engagements":6}}]},{"timestamp":"2022-10-29T11:03:43.359Z","data":[{"source":"twitter","data":{"count":61,"engagements":29}},{"source":"instagram","data":{"count":48,"engagements":14}}]},{"timestamp":"2022-10-30T11:03:43.359Z","data":[{"source":"twitter","data":{"count":91,"engagements":13}},{"source":"instagram","data":{"count":11,"engagements":14}}]},{"timestamp":"2022-10-31T11:03:43.359Z","data":[{"source":"twitter","data":{"count":35,"engagements":18}},{"source":"instagram","data":{"count":23,"engagements":7}}]},{"timestamp":"2022-11-01T11:03:43.359Z","data":[{"source":"twitter","data":{"count":25,"engagements":12}},{"source":"instagram","data":{"count":26,"engagements":6}}]},{"timestamp":"2022-11-02T11:03:43.359Z","data":[{"source":"twitter","data":{"count":13,"engagements":13}},{"source":"instagram","data":{"count":42,"engagements":8}}]},{"timestamp":"2022-11-03T11:03:43.359Z","data":[{"source":"twitter","data":{"count":44,"engagements":19}},{"source":"instagram","data":{"count":12,"engagements":14}}]},{"timestamp":"2022-11-04T11:03:43.359Z","data":[{"source":"twitter","data":{"count":18,"engagements":24}},{"source":"instagram","data":{"count":40,"engagements":7}}]},{"timestamp":"2022-11-05T11:03:43.359Z","data":[{"source":"twitter","data":{"count":32,"engagements":26}},{"source":"instagram","data":{"count":10,"engagements":6}}]},{"timestamp":"2022-11-06T11:03:43.359Z","data":[{"source":"twitter","data":{"count":97,"engagements":25}},{"source":"instagram","data":{"count":23,"engagements":7}}]},{"timestamp":"2022-11-07T11:03:43.359Z","data":[{"source":"twitter","data":{"count":68,"engagements":20}},{"source":"instagram","data":{"count":43,"engagements":12}}]},{"timestamp":"2022-11-08T11:03:43.359Z","data":[{"source":"twitter","data":{"count":85,"engagements":13}},{"source":"instagram","data":{"count":15,"engagements":8}}]},{"timestamp":"2022-11-09T11:03:43.359Z","data":[{"source":"twitter","data":{"count":41,"engagements":26}},{"source":"instagram","data":{"count":43,"engagements":11}}]},{"timestamp":"2022-11-10T11:03:43.359Z","data":[{"source":"twitter","data":{"count":78,"engagements":19}},{"source":"instagram","data":{"count":35,"engagements":12}}]},{"timestamp":"2022-11-11T11:03:43.359Z","data":[{"source":"twitter","data":{"count":61,"engagements":27}},{"source":"instagram","data":{"count":27,"engagements":9}}]},{"timestamp":"2022-11-12T11:03:43.359Z","data":[{"source":"twitter","data":{"count":61,"engagements":22}},{"source":"instagram","data":{"count":46,"engagements":5}}]},{"timestamp":"2022-11-13T11:03:43.359Z","data":[{"source":"twitter","data":{"count":88,"engagements":11}},{"source":"instagram","data":{"count":22,"engagements":13}}]},{"timestamp":"2022-11-14T11:03:43.359Z","data":[{"source":"twitter","data":{"count":64,"engagements":26}},{"source":"instagram","data":{"count":28,"engagements":8}}]},{"timestamp":"2022-11-15T11:03:43.359Z","data":[{"source":"twitter","data":{"count":28,"engagements":23}},{"source":"instagram","data":{"count":38,"engagements":12}}]},{"timestamp":"2022-11-16T11:03:43.359Z","data":[{"source":"twitter","data":{"count":90,"engagements":19}},{"source":"instagram","data":{"count":10,"engagements":12}}]},{"timestamp":"2022-11-17T11:03:43.359Z","data":[{"source":"twitter","data":{"count":14,"engagements":18}},{"source":"instagram","data":{"count":36,"engagements":12}}]},{"timestamp":"2022-11-18T11:03:43.359Z","data":[{"source":"twitter","data":{"count":13,"engagements":27}},{"source":"instagram","data":{"count":43,"engagements":8}}]},{"timestamp":"2022-11-19T11:03:43.359Z","data":[{"source":"twitter","data":{"count":54,"engagements":29}},{"source":"instagram","data":{"count":42,"engagements":10}}]},{"timestamp":"2022-11-20T11:03:43.359Z","data":[{"source":"twitter","data":{"count":37,"engagements":25}},{"source":"instagram","data":{"count":38,"engagements":14}}]},{"timestamp":"2022-11-21T11:03:43.359Z","data":[{"source":"twitter","data":{"count":59,"engagements":16}},{"source":"instagram","data":{"count":24,"engagements":8}}]},{"timestamp":"2022-11-22T11:03:43.359Z","data":[{"source":"twitter","data":{"count":40,"engagements":14}},{"source":"instagram","data":{"count":23,"engagements":14}}]},{"timestamp":"2022-11-23T11:03:43.359Z","data":[{"source":"twitter","data":{"count":68,"engagements":15}},{"source":"instagram","data":{"count":32,"engagements":8}}]},{"timestamp":"2022-11-24T11:03:43.359Z","data":[{"source":"twitter","data":{"count":62,"engagements":18}},{"source":"instagram","data":{"count":14,"engagements":11}}]},{"timestamp":"2022-11-25T11:03:43.359Z","data":[{"source":"twitter","data":{"count":64,"engagements":13}},{"source":"instagram","data":{"count":48,"engagements":13}}]},{"timestamp":"2022-11-26T11:03:43.359Z","data":[{"source":"twitter","data":{"count":29,"engagements":19}},{"source":"instagram","data":{"count":31,"engagements":8}}]},{"timestamp":"2022-11-27T11:03:43.359Z","data":[{"source":"twitter","data":{"count":27,"engagements":25}},{"source":"instagram","data":{"count":23,"engagements":13}}]},{"timestamp":"2022-11-28T11:03:43.359Z","data":[{"source":"twitter","data":{"count":39,"engagements":28}},{"source":"instagram","data":{"count":32,"engagements":9}}]},{"timestamp":"2022-11-29T11:03:43.359Z","data":[{"source":"twitter","data":{"count":55,"engagements":14}},{"source":"instagram","data":{"count":21,"engagements":12}}]},{"timestamp":"2022-11-30T11:03:43.359Z","data":[{"source":"twitter","data":{"count":42,"engagements":20}},{"source":"instagram","data":{"count":11,"engagements":6}}]},{"timestamp":"2022-12-01T11:03:43.359Z","data":[{"source":"twitter","data":{"count":37,"engagements":14}},{"source":"instagram","data":{"count":11,"engagements":7}}]},{"timestamp":"2022-12-02T11:03:43.359Z","data":[{"source":"twitter","data":{"count":13,"engagements":29}},{"source":"instagram","data":{"count":16,"engagements":5}}]},{"timestamp":"2022-12-03T11:03:43.359Z","data":[{"source":"twitter","data":{"count":99,"engagements":22}},{"source":"instagram","data":{"count":21,"engagements":6}}]},{"timestamp":"2022-12-04T11:03:43.359Z","data":[{"source":"twitter","data":{"count":58,"engagements":23}},{"source":"instagram","data":{"count":13,"engagements":10}}]},{"timestamp":"2022-12-05T11:03:43.359Z","data":[{"source":"twitter","data":{"count":99,"engagements":25}},{"source":"instagram","data":{"count":27,"engagements":14}}]},{"timestamp":"2022-12-06T11:03:43.359Z","data":[{"source":"twitter","data":{"count":13,"engagements":13}},{"source":"instagram","data":{"count":13,"engagements":13}}]},{"timestamp":"2022-12-07T11:03:43.359Z","data":[{"source":"twitter","data":{"count":99,"engagements":15}},{"source":"instagram","data":{"count":33,"engagements":7}}]},{"timestamp":"2022-12-08T11:03:43.359Z","data":[{"source":"twitter","data":{"count":32,"engagements":18}},{"source":"instagram","data":{"count":45,"engagements":5}}]},{"timestamp":"2022-12-09T11:03:43.359Z","data":[{"source":"twitter","data":{"count":52,"engagements":18}},{"source":"instagram","data":{"count":19,"engagements":5}}]},{"timestamp":"2022-12-10T11:03:43.359Z","data":[{"source":"twitter","data":{"count":92,"engagements":24}},{"source":"instagram","data":{"count":37,"engagements":13}}]},{"timestamp":"2022-12-11T11:03:43.359Z","data":[{"source":"twitter","data":{"count":84,"engagements":29}},{"source":"instagram","data":{"count":40,"engagements":11}}]},{"timestamp":"2022-12-12T11:03:43.359Z","data":[{"source":"twitter","data":{"count":12,"engagements":16}},{"source":"instagram","data":{"count":17,"engagements":10}}]},{"timestamp":"2022-12-13T11:03:43.359Z","data":[{"source":"twitter","data":{"count":39,"engagements":14}},{"source":"instagram","data":{"count":41,"engagements":6}}]},{"timestamp":"2022-12-14T11:03:43.359Z","data":[{"source":"twitter","data":{"count":54,"engagements":14}},{"source":"instagram","data":{"count":20,"engagements":13}}]},{"timestamp":"2022-12-15T11:03:43.359Z","data":[{"source":"twitter","data":{"count":36,"engagements":19}},{"source":"instagram","data":{"count":34,"engagements":5}}]},{"timestamp":"2022-12-16T11:03:43.359Z","data":[{"source":"twitter","data":{"count":92,"engagements":20}},{"source":"instagram","data":{"count":28,"engagements":7}}]}]

const twittercount=[]
  const twittercumcount=[]
  const twittereng=[]
  const twittercumeng=[]
  const instagramcount=[]
  const instagramcumcount=[]
  const instagrameng=[]
  const instagramcumeng=[]
let tottwitcount=0
let tottwiteng=0
let totinstacount=0
let totinstaeng=0


  for(let i=0;i<arr.length;i++){
     const times=Date.parse(arr[i].timestamp);
     const d=times
     const twitcount=arr[i].data[0].data.count
     const twiteng=arr[i].data[0].data.engagements
     const instacount=arr[i].data[1].data.count
     const instaeng=arr[i].data[1].data.engagements
     twittercount.push([d,twitcount])
     tottwitcount+=twitcount
     twittercumcount.push([d,tottwitcount])
     twittereng.push([d,twiteng])
     tottwiteng+=twiteng
     twittercumeng.push([d,tottwiteng])

     instagramcount.push([d,instacount])
     totinstacount+=instacount
     instagramcumcount.push([d,totinstacount])
     instagrameng.push([d,instaeng])
     totinstaeng+=instaeng
     instagramcumeng.push([d,totinstaeng])


  }

 
const noncumfortwit = {
  
  title: {
    text: 'Non cummulative graph for twitter'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    type: 'datetime'
},

  tooltip: {
    shared: false,
    useHTML: true,
    headerFormat: '<table><tr><th colspan="2">{point.key}</th></tr>',
    pointFormat: '<tr><td style="color: {series.color}">{series.name} </td>' +
        '<td style="text-align: right"><b>{point.y} </b></td></tr>',
    footerFormat: '</table>',

},

  series: [{
     name:'counts',
      data: twittercount,
      color: '#6f2da8',
      
      pointIntervalUnit: 'month'
     

  },
  {
    name:'engagements',
    data:twittereng
  }
]
}
const cumfortwit = {
  title: {
    text: 'cummulative graph for twitter'
  },
  credits: {
    enabled: true
  },
  series: [{
     name:'counts',
      data: twittercumcount,

  },
  {
    name:'engagements',
    data:twittercumeng
  }
]
}
const noncumforinsta= {
  title: {
    text: 'Non cummulative graph for instagrame'
  },
  series: [{
    name:'counts',
      data: instagramcount
  },{
    name:'engagements',
    data:instagrameng
  }
]
}
const cumforinsta= {
  title: {
    text: ' cummulative graph for instagram'
  },
  series: [{
    name:'counts',
      data: instagramcumcount
  },{
    name:'engagements',
    data:instagramcumeng
  }
]
}


  if(props.st==='twitter' && props.type==='noncum'){
  
    return(
      
      <div>
        
         <HighchartsReact 
    highcharts={Highcharts} 
    options={noncumfortwit} 
  />
      </div>
    )
  }
   else if(props.st==='twitter' && props.type==='cum'){
    return(
    
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={cumfortwit} 
/>
   </div>
    
    )
  }
   else if(props.st==='instagram' && props.type==='noncum'){
    return(
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={noncumforinsta} 
/>
   </div>
    )
  }
  else{
    return(
      <div>
      <HighchartsReact 
 highcharts={Highcharts} 
 options={cumforinsta} 
/>
   </div>
    )
  }
}






export default Donut;
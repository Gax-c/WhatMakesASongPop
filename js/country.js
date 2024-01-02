var myChart = echarts.init(document.getElementById('country'),'essos');
var option = {
    title: {
      text: 'Is A Song Popular V.S. Artists country',
      subtext: 'The percentage of Artists country among Top charts',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        { value: 0.530021, name: 'United States' },
 'United Kingdom' ,
 'Canada' ,
 'Australia' ,
 'France' ,
 'Puerto Rico' ,
 'Netherlands' ,
  'Germany' ,
  'Sweden' ,
  'other countries',
      ]
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Top charts artists country',
        type: 'pie',
        radius: [20, 140],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
            { value: 0.530, name: 'United States' },
            { value: 0.207, name: 'United Kingdom' },
            { value: 0.031, name: 'Canada' },
            { value: 0.032, name: 'Australia' },
            { value: 0.017, name: 'France' },
            { value: 0.016, name: 'Puerto Rico' },
            { value: 0.019, name: 'Netherlands' },
            { value: 0.011, name: 'Germany' },
            { value: 0.020, name: 'Sweden' },
            { value: 0.117, name: 'other countries' },
        ]
      }   
    ]
  };

  myChart.setOption(option);
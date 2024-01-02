var myChart = echarts.init(document.getElementById('key'),'essos');
var option = {
    title: {
      text: 'Is A Song Popular V.S. Key',
      subtext: 'The percentage of keys among popular songs',
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
        'A',
        'A#',
        'B',
        'C#',
        'D',
        'D#',
        'E',
        'F',
        'F#',
        'G',
        'G#',
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
        name: 'Year < 2023',
        type: 'pie',
        radius: [20, 140],
        center: ['15%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.091, name: 'A' },
          { value: 0.069, name: 'A#' },
          { value: 0.098, name: 'B' },
          { value: 0.146, name: 'C#' },
          { value: 0.098,  name: 'D' },
          { value: 0.040, name: 'D#' },
          { value: 0.075, name: 'E' },
          { value: 0.108, name: 'F' },
          { value: 0.089, name: 'F#' },
          { value: 0.116, name: 'G' },
          { value: 0.110, name: 'G#' }
        ]
      }  
      
    ]
  };

  myChart.setOption(option);
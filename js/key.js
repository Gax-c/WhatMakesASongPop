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
        name: 'Year:2023',
        type: 'pie',
        radius: [20, 140],
        center: ['15%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.108, name: 'A' },
          { value: 0.04, name: 'A#' },
          { value: 0.131, name: 'B' },
          { value: 0.097, name: 'C#' },
          { value: 0.08,  name: 'D' },
          { value: 0.023, name: 'D#' },
          { value: 0.051, name: 'E' },
          { value: 0.103, name: 'F' },
          { value: 0.103, name: 'F#' },
          { value: 0.109, name: 'G' },
          { value: 0.063, name: 'G#' }
        ]
      },
      {
        name: 'Year:2022',
        type: 'pie',
        radius: [20, 140],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.062, name: 'A' },
          { value: 0.075, name: 'A#' },
          { value: 0.072, name: 'B' },
          { value: 0.132, name: 'C#' },
          { value: 0.072,  name: 'D' },
          { value: 0.035, name: 'D#' },
          { value: 0.065, name: 'E' },
          { value: 0.099, name: 'F' },
          { value: 0.060, name: 'F#' },
          { value: 0.114, name: 'G' },
          { value: 0.114, name: 'G#' }
        ]
      },
      {
        name: 'Previous',
        type: 'pie',
        radius: [20, 140],
        center: ['85%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 0.082, name: 'A' },
          { value: 0.053, name: 'A#' },
          { value: 0.077, name: 'B' },
          { value: 0.133, name: 'C#' },
          { value: 0.101,  name: 'D' },
          { value: 0.040, name: 'D#' },
          { value: 0.072, name: 'E' },
          { value: 0.082, name: 'F' },
          { value: 0.082, name: 'F#' },
          { value: 0.082, name: 'G' },
          { value: 0.090, name: 'G#' }
        ]
      }   
    ]
  };

  myChart.setOption(option);
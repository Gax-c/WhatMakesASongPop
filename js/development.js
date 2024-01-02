var chartDom = document.getElementById('development');
var myChart = echarts.init(chartDom,'essos');
var option = {
    title: {
        text: 'Developments of Musical Parameters'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        name: 'Year',
        type: 'category',
        boundaryGap: false,
        data: ['2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023',]
      }
    ],
    yAxis: [
      {
        name: '%',
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Danceability (%)',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [39,76,48,76,46,66,63,64,78,50,70,53,61,54,64,53,61,58,61,63,64,70,]
      },
      {
        name: 'Acousticness (%)',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [14,10,15,13,58,17,12,48,10,19,49,31,32,68,39,23,37,25,42,41,36,26,]
      },
      {
        name: 'Energy (%)',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [70,78,78,66,46,70,70,68,77,63,43,58,68,42,56,60,60,64,51,55,58,65,]
      },
      {
        name: 'Liveness (%)',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [10,18,12,22,15,18,22,28,9,8,15,9,11,48,20,13,15,12,13,15,17,17,]
      },
      {
        name: 'Speechiness (%)',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [3,11,11,9,10,5,6,6,4,3,6,3,11,5,18,6,8,11,9,8,8,11,]
      },
      {
        name: 'Positiveness (%)',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [49,76,25,51,56,71,51,73,53,62,57,31,52,14,54,50,55,49,46,44,50,53,]
      }
    ]
};
myChart.setOption(option);
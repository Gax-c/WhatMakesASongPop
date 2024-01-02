var nameset=[];//数组初始化
var numset1=[];
var numset2=[];




var chartDom = document.getElementById('final');
var myChart = echarts.init(chartDom,'essos');
var option;


option = {
    title: {
        text: ''
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
    legend: {
      data: ['FGA_winner', 'FG_winner', '3PA_winner', '3P_winner','FGA_loser', 'FG_loser', '3PA_loser', '3P_loser']
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
        type: 'category',
        boundaryGap: false,
        data: ['1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018',]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'FGA_winner',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [92,85.33,91.83,88.5,92.86,90.5,88.83,90.67,75.86,79.25,86.8,80.8,79.67,90.67,74.71,85.75,79,74.83,75.5,67.4,85.33,77.8,72.25,74.5,73.2,71.86,72.83,72,77.33,83.2,76.29,72.67,77,82.17,72.4,83,82.43,91,84.75]
      },
      {
        name: 'FG_winner',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [45,40.17,45.5,43,42,46.33,43.67,46.67,35.43,41.75,39.4,42.6,40.17,43.83,31.86,40.5,32.83,32.33,32.5,30,41,36.2,36.5,32.17,31.4,30.86,33.33,32,34.33,38,31.86,33,35.33,38,38.2,36.17,37.57,43.2,43.5]
      },
      {
        name: '3PA_winner',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0.67,2.83,1.5,0.75,3.29,3.83,5.33,6.83,5.71,5,11.2,4.2,10.83,11.5,17.29,23,22.83,18.67,14.67,12.4,15.33,15,15.25,12.5,13.2,18.29,17.5,19.5,20.17,17.2,17.86,20.67,20.5,20.5,23.6,31,24.29,37.2,34]
      },
      {
        name: '3P_winner',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [0,0.5,0.17,0,1.29,1.33,1.67,2.67,1.43,1.25,5,1,4.17,5.33,5.29,9.25,6,6.5,4.33,4.2,5.83,7.2,7.25,4,4.2,7.29,5.33,7.25,8.67,6.4,5,8.5,8.33,9.33,11,11.17,8,14.2,12.75]
    },
    {
        name: 'FGA_loser',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series'
        },
        data: [88.33,89.33,92.5,90.25,90.71,92,92.83,86.17,81,77.5,82,74.8,79.83,86.83,81.43,87.5,69.67,71.67,71.83,78.6,78.5,83.4,88.75,82,76,81.57,78.17,78.5,74.83,75.2,76.14,74.67,80.4,79.57,71.2,85.17,82.57,90.2,92]
        },
        {
        name: 'FG_loser',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series'
        },
        data: [43,33.83,46.17,40.75,46.71,43.83,41.83,43.67,38.57,36,37.4,33.4,35.33,40.67,33.14,40.75,31,30.83,31.83,30.8,36.33,35.4,38.75,30.33,31.6,35.43,33,31,33,32.2,33,33.67,36.6,35.86,33.6,32.67,35.57,41.6,37.75]
        },
        {
        name: '3PA_loser',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series'
        },
        data: [2.67,1.83,2.33,3.75,2.57,5.67,2.83,7,4.43,10.75,9.4,9.2,8.67,10.33,15,29.5,17,14.17,10,10.8,19.33,11.8,14.75,13.83,17.8,10.71,19.33,18.75,20.67,23,15.29,21.67,21,21.43,23.2,27.83,36,34.6,30.5        ]
        },
        {
        name: '3P_loser',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
            focus: 'series'
        },
        data: [0.17,0.5,0.67,0.75,0.86,2.17,0.83,2.33,1.29,3.25,2.2,2.6,1.67,4.5,5.14,10.25,5.33,5.83,2.17,2.2,8.17,3.4,4.5,3.83,4.4,2.57,5.5,5.5,7.17,7.6,4.71,7.5,6.4,8.71,9.2,8.17,13.43,13.2,9        ]
        }
    ]
};
myChart.setOption(option);
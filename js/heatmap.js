var myChart = echarts.init(document.getElementById('heatmap'));
var data = [
    [0, 0, 1],
    [0, 1, -0.28789385],
    [0, 2, 0.24736085],
    [0, 3, -0.09190788],
    [0, 4, 0.23282157],
    [0, 5, 0.36761946],
    [0, 6, -0.02358562],
    [1, 0, -0.28789385],
    [1, 1, 1],
    [1, 2, -0.56543569],
    [1, 3, -0.04425811],
    [1, 4, -0.03670717],
    [1, 5, -0.19213655],
    [1, 6, 0.01903127],
    [2, 0, 0.24736085],
    [2, 1, -0.56543569],
    [2, 2, 1],
    [2, 3, 0.1066526],
    [2, 4, 0.00693286],
    [2, 5, 0.36567485],
    [2, 6, 0.02371391],
    [3, 0, -0.09190788],
    [3, 1, -0.04425811],
    [3, 2, 0.1066526],
    [3, 3, 1],
    [3, 4, -0.00866878],
    [3, 5, 0.00326813],
    [3, 6, 0.01429926],
    [4, 0, 0.23282157],
    [4, 1, -0.03670717],
    [4, 2, 0.00693286],
    [4, 3, -0.00866878],
    [4, 4, 1],
    [4, 5, 0.05181727],
    [4, 6, -0.08919365],
    [5, 0, 0.36761946],
    [5, 1, -0.19213655],
    [5, 2, 0.36567485],
    [5, 3, 0.00326813],
    [5, 4, 0.05181727],
    [5, 5, 1],
    [5, 6, -0.0296062],
    [6, 0, -0.02358562],
    [6, 1, 0.01903127],
    [6, 2, 0.02371391],
    [6, 3, 0.01429926],
    [6, 4, -0.08919365],
    [6, 5, -0.0296062],
    [6, 6, 1],
];

var option = {
    title: {
      text: 'Heatmap',
      left: 'center'
    },
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      height: '65%',
      y: '10%'
    },
    visualMap: {
        min: -1,
        max: 1,
        splitNumber: 0,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '10%',
        inRange: {
          color: ['blue', 'white', 'red']
        },
        textStyle: {
          color: '#000'
        }
      },
    xAxis: [
      {
        name: 'parameters',
        type: 'category',
        data: [
                    'danceability', 'acousticness', 'energy', 'liveness', 'speechiness', 'positiveness', 'popularity'
              ],
        splitArea:{
          show: true
        }
      }
    ],
    yAxis: [
      {
        name: 'parameters',
        type: 'category',
        data: [
            'danceability', 'acousticness', 'energy', 'liveness', 'speechiness', 'positiveness', 'popularity'
        ],
        splitArea:{
          show: true
        }
      }
    ],
    series: [
      {
        name: 'Relationship with:',
        type: 'heatmap',
        data: data,
        coordinateSystem: 'cartesian2d',
        pointSize: 10,
        blurSize: 20,
        label:{
          show: true
        },
        emphasis: {
          itemStyle:{
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  myChart.setOption(option);
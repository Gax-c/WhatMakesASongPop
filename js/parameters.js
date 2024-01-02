var myChart = echarts.init(document.getElementById('parameters'),'essos');
var option = {
    title: {
      text: 'Relationship between Average Streams and Some Musical Parameters',
      left: 'center'
    },
    grid: {
      bottom: 80
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      }
    },
    legend: {
      data: ['Average Stream'],
      left: 10
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100
      }
    ],
    xAxis: [
      {
        name: '%',
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: true },
        data: [
                  0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
              ]
      }
    ],
    yAxis: [
      {
        name: 'Average Stream',
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Average Streams of Dance Ability(%)',
        type: 'line',
        areaStyle: {},
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [
              {
                xAxis: '0'
              },
              {
                xAxis: '0'
              }
            ]
          ]
        },
        data: [
                0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,863736,1522550,790768,0,105752,322951,2357961,0,3900625,4076415,11844708,16046727,25298319,8207211,7031787,313368,3989624,11505783,6464447,6650926,35700134,13814443,65245825,6945371,17586716,80332789,25205198,103076053,79750257,179236120,26645794,15465224,193480854,91161247,70306480,18489039,91644853,66516570,92113715,39701587,57339979,121713068,90523843,23872631,112628849,78668262,12575110,67896190,199127184,31440878,41648762,46373052,59072062,111490466,62116573,61962347,33615926,127408549,70902553,28260378,28891941,35500607,25981784,30056008,12684219,14622323,3266817,4625118,25655148,42082564,2092751,716131,9689988,450493,0,0,0,0
              ]
      },
      {
        name: 'Average Streams of Valence(%)',
        type: 'line',
        areaStyle: {},
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [
              {
                xAxis: '0'
              },
              {
                xAxis: '0'
              }
            ]
          ]
        },
        data: [
                0,0,0,0,4989732,571162,7811368,2821977,3484980,3050751,19664429,2838110,34490513,38562143,20840403,2474835,3347900,62035676,9702492,23550978,25771725,7377720,21660483,65533089,57583914,11141771,11257777,27582638,30457993,2129073,8805714,14800654,66781748,19806129,4136761,3838273,40062635,17038291,101934413,16802979,31658306,53168649,46241045,102087082,64541791,56010470,18820588,35298775,66148125,72818543,56010107,82179401,29435500,68694605,23223391,28555645,107922717,50575389,191191468,35146727,12893758,75724616,5772101,14997089,13598587,103912607,188953920,36238880,15259781,10617211,9699422,11091227,21130529,13570429,36886169,7944709,44692759,9519009,13540955,10054097,6298795,16863279,63962713,94395989,12982034,25343083,20539536,16137323,29719587,78556295,6342294,68279308,22048674,21756094,1659586,6401372,17823897,4444960,0,0,0
              ]
      },
      {
        name: 'Average Streams of Energy(%)',
        type: 'line',
        areaStyle: {},
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [
              {
                xAxis: '0'
              },
              {
                xAxis: '0'
              }
            ]
          ]
        },
        data: [
                0,0,0,0,0,0,0,0,0,1607730,0,0,0,0,759809,868089,202507,0,0,0,1074184,0,0,1860741,3230165,4544911,3685466,11959336,1501354,2337600,19396200,872213,9070053,6411294,8420742,4564952,4258731,21322983,8277008,3314607,9041573,38534241,59717172,37351121,9958858,36987548,7041221,26477657,73668994,6021700,71359341,12700004,76142195,111327643,41785284,43042472,37778787,25747552,46493675,111402682,33223542,46701731,49335154,83637199,29525416,45609984,93779273,34203465,171966445,37131115,34725528,60643259,201812810,254902026,73369748,15182967,134557684,25848595,55561567,41479250,174034976,70005225,38089983,82385336,7568750,36649039,26758716,7758254,6274475,8050044,22641050,8645248,9479412,18586891,3356504,725766,2076617,26559245,0,0,0
              ]
      },
      {
        name: 'Average Streams of Acousticness(%)',
        type: 'line',
        areaStyle: {},
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        markArea: {
          silent: true,
          itemStyle: {
            opacity: 0.3
          },
          data: [
            [
              {
                xAxis: '0'
              },
              {
                xAxis: '0'
              }
            ]
          ]
        },
        data: [
                184667482,105551398,71504784,63479577,118108393,125950896,129205722,90150285,25729530,128266638,34397864,191536362,113874544,8011330,82750691,16745163,81015136,50172640,21548751,30220136,12836568,80962291,9536421,66407295,19407664,6635151,14876875,15247131,17492370,631292,35050004,77793477,5444643,8122194,157458084,4794027,45610424,34861062,18221692,7327996,9658197,6647049,4642641,86008846,40059766,7934824,17166596,7536990,93136514,1401105,19360773,9576613,4653461,6477267,77876535,20199352,6519237,2908838,46882495,684761,3090224,7436092,17798473,17741669,1182637,13950391,5209561,22607185,2357961,16432945,33347288,3863074,4603518,13570318,741361,34514642,8984805,2155832,10869337,2689888,1674705,2844634,1845621,26104214,12676638,514199,9624606,1120808,1091738,4419468,2552745,4586109,4075835,18589382,10039608,0,1607730,8687775,0,0,0
              ]
      }
    ]
  };

  myChart.setOption(option);
var myChart = echarts.init(document.getElementById('bubble'),'essos');
const data2023 = [
    // [141,2023,147,'hi'],
    // [133,2023,48,'hi'],
    // [140,2023,113,'hi'],
    [147,141381703,2023,'Seven (feat. Latto) (Explicit Ver.)',' Latto  Jung Kook'],
[48,133716286,2023,'LALA','Myke Towers'],
[113,140003974,2023,'vampire','Olivia Rodrigo'],
[50,303236322,2023,'WHERE SHE GOES','Bad Bunny'],
[91,183706234,2023,'Sprinter',' Dave  Central Cee'],
[50,725980112,2023,'Ella Baila Sola',' Eslabon Armado  Peso Pluma'],
[43,58149378,2023,'Columbia','Quevedo'],
[83,95217315,2023,'fukumean','Gunna'],
[44,553634067,2023,'La Bebe - Remix',' Peso Pluma  Yng Lvcas'],
[40,505671438,2023,'un x100to',' Bad Bunny  Grupo Frontera'],
[55,58255150,2023,'Super Shy','NewJeans'],
[115,1316855716,2023,'Flowers','Miley Cyrus'],
[98,387570742,2023,'Daylight','David Kushner'],
[77,496795686,2023,'Cupid - Twin Ver.','Fifty Fifty'],
[104,30546883,2023,'What Was I Made For? [From The Motion Picture "Barbie"]','Billie Eilish'],
[40,335222234,2023,'Classy 101',' Feid  Young Miko'],
[68,363369738,2023,'Like Crazy','Jimin'],
[26,86444842,2023,'LADY GAGA',' Gabito Ballesteros  Junior H  Peso Pluma'],
[38,52135248,2023,'I Can See You (Taylors Version) (From The ','Taylor Swift'],
[40,200647221,2023,'Peso Pluma: Bzrp Music Sessions, Vol. 55',' Bizarrap  Peso Pluma'],
[87,115364561,2023,'Popular (with Playboi Carti & Madonna) - The Idol Vol. 1 (Music from the HBO Original Series)',' The Weeknd  Madonna  Playboi Carti'],
[26,78300654,2023,'SABOR FRESA','Fuerza Regida'],
[40,61245289,2023,'MOJABI GHOST',' Tainy  Bad Bunny'],
[19,429829812,2023,'Last Night','Morgan Wallen'],
[101,127408954,2023,'Dance The Night (From Barbie The Album)','Dua Lipa'],
[78,22581161,2023,'Rush','Troye Sivan'],
[34,52294266,2023,'TULUM',' Peso Pluma  Grupo Frontera'],
[49,618990393,2023,'TQG',' Karol G  Shakira'],

[19,65496046,2023,'S-Class','Stray Kids'],
[0,68616963,2023,'Hits Different','Taylor Swift'],
[10,161460990,2023,'Chanel',' Becky G  Peso Pluma'],
[5,70106975,2023,'Self Love (Spider-Man: Across the Spider-Verse) (Metro Boomin & Coi Leray)',' Metro Boomin  Coi Leray'],
[13,113509496,2023,'Area Codes',' Kaliii  Kaliii'],
[5,89933133,2023,'Abcdario',' Junior H  Eden Mu'],
[3,43522589,2023,'Piman De',' Semicenk  Dou '],
[18,232896922,2023,'FLOWER','JISOO'],
[0,37126685,2023,'All The Way Live (Spider-Man: Across the Spider-Verse) (Metro Boomin & Future, Lil Uzi Vert)',' Future  Lil Uzi Vert  Metro Boomin'],
[30,195576623,2023,'Eyes Closed','Ed Sheeran'],
[0,46142772,2023,'Karma (feat. Ice Spice)',' Taylor Swift  Ice Spice'],
[8,127026613,2023,'Las Morras',' BLESSD  Peso Pluma'],
[2,60350538,2023,'Snow On The Beach (feat. More Lana Del Rey)',' Lana Del Rey  Taylor Swift'],
[69,76767396,2023,'Bite Me','ENHYPEN'],
[5,46065667,2023,'Stand By Me (feat. Morgan Wallen)',' Lil Durk  Morgan Wallen'],
[1,39666245,2023,'Hummingbird (Metro Boomin & James Blake)',' James Blake  Metro Boomin'],
[5,138517666,2023,'Seu Brilho Sumiu - Ao Vivo',' Israel & Rodolffo  Mari Fernandez'],
[6,51985779,2023,'Lilith (feat. SUGA of BTS) (Diablo IV Anthem)',' Halsey  Suga'],
[22,57945987,2023,'69',' Nicky Jam  Feid'],

   ];
 const data2022 = [
    // [251,2022,130,'hi'],
    // [116,2022,77,'hi'],
    // [899,2022,77,'hi'],
    [130,2513188493,2022,'As It Was','Harry Styles'],
[77,1163093654,2022,'Kill Bill','SZA'],
[77,899183384,2022,'Calm Down (with Selena Gomez)',' R��ma  Selena G'],
[88,843957510,2022,'Creepin',' The Weeknd  21 Savage  Metro Boomin'],
[56,999748277,2022,'Anti-Hero','Taylor Swift'],
[45,1214083358,2022,'La Bachata','Manuel Turizo'],
[39,720434240,2022,'Left and Right (Feat. Jung Kook of BTS)',' Charlie Puth  BTS  Jung Kook'],
[38,674072710,2022,'Hey Mor',' Ozuna  Feid'],
[23,404562836,2022,'Karma','Taylor Swift'],
[56,373199958,2022,'People','Libianca'],
[36,751134527,2022,'golden hour','JVKE'],
[45,1356565093,2022,'Quevedo: Bzrp Music Sessions, Vol. 52',' Bizarrap  Quevedo'],
[23,635412045,2022,'Here With Me','d4vd'],
[42,1230675890,2022,'Unholy (feat. Kim Petras)',' Sam Smith  Kim Petras'],
[38,585695368,2022,'Yandel 150',' Yandel  Feid'],
[30,600976848,2022,'Until I Found You (with Em Beihold) - Em Beihold Version',' Em Beihold  Stephen Sanchez'],
[43,1440757818,2022,'Me Porto Bonito',' Chencho Corleone  Bad Bunny'],
[25,399686758,2022,'Snooze','SZA'],
[58,286400165,2022,'Too Many Nights (feat. Don Toliver & with Future)',' Future  Metro Boomin  Don Toliver'],
[27,77309611,2022,'Primera Cita','Carin Leon'],
[6,179659294,2022,'Tak Segampang Itu','Anggi Marito'],
[27,342897938,2022,'Nonsense','Sabrina Carpenter'],
[26,2762,2022,'Que Vuelvas',' Carin Leon  Grupo Frontera'],
[38,601863821,2022,'Feliz Cumpleaos Fe','Feid'],
[46,276259178,2022,'Trance (with Travis Scott & Young Thug)',' Travis Scott  Young Thug  Metro Boomin'],
[23,681583126,2022,'Romantic Homicide','d4vd'],
[38,1133865788,2022,'Ojitos Lindos',' Bomba Estreo  Bad B'],
[27,618885532,2022,'Jimmy Cooks (feat. 21 Savage)',' Drake  21 Savage'],
[18,726307468,2022,'SNAP','Rosa Linn'],
[22,367316268,2022,'Bebe Dame',' Fuerza Regida  Grupo Frontera'],
[42,1264310836,2022,'Titi Me Pregunt','Bad Bunny'],
[22,397582059,2022,'Ditto','NewJeans'],
[19,463564958,2022,'AMG',' Natanael Cano  Gabito Ballesteros  Peso Pluma'],
[6,71007139,2022,'Obsessed',' Abhijay Sharma  Riar Saab'],
[25,532336353,2022,'Escapism.',' RAYE  070 Shake'],
[34,538115192,2022,'La Jumpa',' Arcangel  Bad Bunny'],
[16,401036314,2022,'Superhero (Heroes & Villains) [with Future & Chris Brown]',' Future  Chris Brown  Metro Boomin'],
[36,345031710,2022,'CHORRITO PA LAS ANIMAS','Feid'],
[10,288101651,2022,'Ch y la Pizza',' Fuerza Regida  Natanael Cano'],
[6,335074782,2022,'Players','Coi Leray'],
[36,459276435,2022,'Normal','Feid'],
[12,822633917,2022,'Bad Habit','Steve Lacy'],
[10,595900742,2022,'CUFF IT','Beyonc'],
[8,488386797,2022,'Lavender Haze','Taylor Swift'],
[33,1047480053,2022,'Efecto','Bad Bunny'],
 
 ];
 const dataprevious = [
    // [800,2019,100,'hi'],
    // [129,2013,110,'hi'],
    // [135,2014,53,'hi'],
    [100,800840817,2019,'Cruel Summer','Taylor Swift'],
[110,1297026226,2013,'I Wanna Be Yours','Arctic Monkeys'],
[53,1355959075,2014,'Blank Space','Taylor Swift'],
[42,786181836,2014,'Style','Taylor Swift'],
[78,2808096550,2018,'Sunflower - Spider-Man: Into the Spider-Verse',' Post Malone  Swae Lee'],
[64,1047101291,2017,'See You Again',' Tyler  The Creator  Kali Uchis'],
[19,570515054,2020,'Angels Like You','Miley Cyrus'],
[59,1647990401,2016,'Die For You','The Weeknd'],
[79,2565529693,2016,'Starboy',' The Weeknd  Daft Punk'],
[83,1813673666,2012,'Another Love','Tom Odell'],
[69,3703895074,2019,'Blinding Lights','The Weeknd'],
[29,812019557,2020,'cardigan','Taylor Swift'],
[43,1755214421,1999,'Yellow','Chris Molitor'],
[63,2557975762,2020,'Heat Waves','Glass Animals'],
[61,2282771485,2012,'Sweater Weather','The Neighbourhood'],
[62,1592909789,2008,'Viva La Vida','Coldplay'],
[55,2009094673,1975,'Riptide','Vance Joy'],
[36,2665343922,2021,'STAY (with Justin Bieber)',' Justin Bieber  The Kid Laroi'],
[53,2887241814,2018,'Someone You Loved','Lewis Capaldi'],
[53,165484133,2015,'Makeba','Jain'],
[50,58054811,2012,'MONTAGEM - FR PUNK',' Ayparia  unxbected'],
[23,685032533,2017,'Dont Bl','Taylor Swift'],
[39,38411956,2020,'Still With You','Jung Kook'],
[52,983637508,2011,'Summertime Sadness','Lana Del Rey'],
[23,882831184,2012,'Lover','Taylor Swift'],
[61,1241559043,2004,'Mockingbird','Eminem'],
[52,1605224506,2017,'Cold Heart - PNAU Remix',' Dua Lipa  Elton John  Pnau'],
[21,1116995633,2017,'Dandelions','Ruth B.'],
[44,838079900,2021,'Bones','Imagine Dragons'],
[43,1163620694,2011,'Set Fire to the Rain','Adele'],
[32,1093605526,2012,'Money Trees',' Kendrick Lamar  Jay Rock'],
[25,1205951614,1985,'Everybody Wants To Rule The World','Tears For Fears'],
[36,1791000570,2014,'No Role Modelz','J. Cole'],
[22,607123776,2020,'august','Taylor Swift'],
[24,330346424,2021,'Por las Noches','Peso Pluma'],
[34,2322580122,2019,'Watermelon Sugar','Harry Styles'],
[30,2355719893,2017,'lovely - Bonus Track',' Billie Eilish  Khalid'],
[46,284819874,2011,'Radio','Lana Del Rey'],
[25,1217120710,2007,'505','Arctic Monkeys'],
[13,2559529074,2017,'Perfect','Ed Sheeran'],
[23,2594040133,2017,'Believer','Imagine Dragons'],
[43,1687664027,2002,'Without Me','Eminem'],
[32,611700552,2016,'Stargirl Interlude',' The Weeknd  Lana Del Rey'],
[16,1089402494,2004,'Somewhere Only We Know','Keane'],
[14,411747614,2019,'Those Eyes','New West'],
[37,1279434863,2010,'Danza Kuduro',' Don Omar  Lucenzo'],
[9,1481349984,2012,'Locked Out Of Heaven','Bruno Mars'],
[43,2011464183,2013,'Counting Stars','OneRepublic'],
[24,1167330737,2021,'Ghost','Justin Bieber'],
[26,929964809,2019,'Under The Influence','Chris Brown'],
[18,657723613,2004,'Gasolina','Daddy Yankee'],

[0,466214729,2021,'Oh My God','Adele'],
[0,225259194,2021,'I AM WOMAN','Emmy Meli'],
[2,393230256,2021,'Medallo',' Justin Quiles  Lenny Tav��rez  BL'],
[12,599770206,2018,'Softcore','The Neighbourhood'],
[0,342779426,2021,'Super Gremlin','Kodak Black'],
[10,673801126,2021,'Volv',' Aventura  Bad Bunny'],
[8,1168642797,2020,'Todo De Ti','Rauw Alejandro'],
[0,383550148,2021,'Smokin Out The Window',' Bruno Mars  Anderson .Paak  Silk Sonic'],
[0,530511203,2020,'Meet Me At Our Spot',' THE ANXIETY  Willow  Tyler Cole'],
[9,510876816,2021,'Tacones Rojos','Sebastian Yatra'],
[0,1445941661,2021,'Peaches (feat. Daniel Caesar & Giveon)',' Justin Bieber  Daniel Caesar  Giveon'],  
[21,1763363713,2020,'Dakiti',' Bad Bunny  Jhay Cortez'],
[12,374191487,2021,'Tiago PZK: Bzrp Music Sessions, Vol. 48',' Bizarrap  Tiago pzk'],
[2,436695353,2021,'Nostl',' Chris Brown  Rvssian  Rauw Alejandro'],
[0,421040617,2021,'Better Days (NEIKED x Mae Muller x Polo G)',' NEIKED  Mae Muller  Polo G'],
[0,501541661,2020,'Life Goes On','Oliver Tree'],
[0,354065229,2021,'Sad Girlz Luv Money Remix (feat. Kali Uchis)',' Kali Uchis  Amaarae  Moliy'],       
[6,1143647827,2021,'Butter','BTS'],
[0,672656250,2021,'You Right',' Doja Cat  The Weeknd'],
[4,1256880657,2021,'deja vu','Olivia Rodrigo'],
[5,1692897992,2020,'Dynamite','BTS'],

 ];
 const schema = [
   { name: 'Sporify Charts', index: 0, text: 'Sporify Charts' },
   { name: 'Stream', index: 1, text: 'Stream' },
   { name: 'Year', index: 2, text: 'Year' },
   { name: 'Name', index: 3, text: 'Name' },
   { name: 'Artists', index: 4, text: 'Artists' },
 ];
 const itemStyle = {
   opacity: 0.8,
   shadowBlur: 10,
   shadowOffsetX: 0,
   shadowOffsetY: 0,
   shadowColor: 'rgba(0,0,0,0.3)'
 };
var option = {
   color: ['#d95850', '#eb8146', '#ffb248'],
   legend: {
     top: 5,
     data: ['2023', '2022', 'Previous'],
     textStyle: {
       fontSize: 16
     }
   },
   grid: {
     left: '20%',
     right: 150,
     top: '18%',
     bottom: '10%'
   },
   tooltip: {
     backgroundColor: 'rgba(255,255,255,0.7)',
     formatter: function (param) {
       var value = param.value;
       // prettier-ignore
       return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                 + 'Stream : ' + value[1]
                 + '</div>'
                 + schema[0].text + ' : ' + value[0] + '<br>'
                 + schema[2].text + ' : ' + value[2] + '<br>'
                 + schema[3].text + ' : ' + value[3] + '<br>'
                 + schema[4].text + ' : ' + value[4] + '<br>'
     }
   },
   xAxis: {
     type: 'value',
     name: 'Sporify Charts',
     nameGap: 16,
     nameTextStyle: {
       fontSize: 16
     },
     splitLine: {
       show: true
     }
   },
   yAxis: {
     type: 'value',
     name: 'Stream',
     nameLocation: 'end',
     nameGap: 20,
     nameTextStyle: {
       fontSize: 16
     },
     splitLine: {
       show: true
     }
   },
   visualMap: [
     {
       left: 'right',
       top: '10%',
       dimension: 2,
       min: 1930,
       max: 2023,
       itemWidth: 30,
       itemHeight: 120,
       calculable: true,
       precision: 0.1,
       text: ['Year'],
       textGap: 30,
       inRange: {
        //  symbolSize: [1930, 2023]
       },
       outOfRange: {
        //  symbolSize: [1930, 2023],
         color: ['rgba(255,255,255,0.4)']
       },
       controller: {
         inRange: {
           color: ['#c23531']
         },
         outOfRange: {
           color: ['#999']
         }
       }
     },
     {
       left: 'right',
       bottom: '5%',
       dimension: 1,
       min: 0,
       max: 4000000000,
       itemHeight: 120,
       calculable: true,
       text: ['Stream'],
       textGap: 30,
       inRange: {
         colorLightness: [0.9, 0.5]
       },
       outOfRange: {
         color: ['rgba(255,255,255,0.4)']
       },
       controller: {
         inRange: {
           color: ['#c23531']
         },
         outOfRange: {
           color: ['#999']
         }
       }
     }
   ],



   series: [
     {
       name: '2023',
       type: 'effectScatter',
       symbolSize: 30,
       itemStyle: itemStyle,
       data: data2023
     },
     {
       name: '2022',
       type: 'effectScatter',
       symbolSize: 20,
       itemStyle: itemStyle,
       data: data2022
     },
     {
       name: 'Previous',
       type: 'effectScatter',
       symbolSize: 15,
       itemStyle: itemStyle,
       data: dataprevious
     }
   ]
 };

 myChart.setOption(option);
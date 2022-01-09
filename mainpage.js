var RedLink;
var WhiteLink;
var MainLink;
var ContentText;
var SingersParagraph;
var i = 0;
var BoxRed = new Array(21);
BoxRed[0] = '<img src = "LiSA.jpg" width = 100% height = 100% alt = "LiSA" />';
BoxRed[1] = '<img src = "NiziU.jpg" width = 100% height = 100% alt = "NiziU" />';
BoxRed[2] = '<img src = "櫻坂46.jpg" width = 100% height = 100% alt = "櫻坂46" />';
BoxRed[3] = '<img src = "Awesome City Club.jpg" width = 100% height = 100% alt = "Awesome City Club" />';
BoxRed[4] = '<img src = "日向坂46.jpg" width = 100% height = 100% alt = "日向坂46" />';
BoxRed[5] = '<img src = "天童よしみ.jpg" width = 100% height = 100% alt = "天童よしみ" />';
BoxRed[6] = '<img src = "上白石萌音.jpg" width = 100% height = 100% alt = "上白石萌音" />';
BoxRed[7] = '<img src = "milet.jpg" width = 100% height = 100% alt = "milet" />';
BoxRed[8] = '<img src = "水森香織.jpg" width = 100% height = 100% alt = "水森香織" />';
BoxRed[9] = '<img src = "AI.jpg" width = 100% height = 100% alt = "AI" />';
BoxRed[10] = '<img src = "BiSH.jpg" width = 100% height = 100% alt = "BiSH" />';
BoxRed[11] = '<img src = "Perfume.jpg" width = 100% height = 100% alt = "Perfume" />';
BoxRed[12] = '<img src = "millennium parade×Belle.jpg" width = 100% height = 100% alt = "millennium parade×Belle" />';
BoxRed[13] = '<img src = "乃木坂46.jpg" width = 100% height = 100% alt = "乃木坂46" />';
BoxRed[14] = '<img src = "坂本冬美.jpg" width = 100% height = 100% alt = "坂本冬美" />';
BoxRed[15] = '<img src = "YOASOBI.jpg" width = 100% height = 100% alt = "YOASOBI" />';
BoxRed[16] = '<img src = "あいみょん.jpg" width = 100% height = 100% alt = "あいみょん" />';
BoxRed[17] = '<img src = "東京事変.jpg" width = 100% height = 100% alt = "東京事変" />';
BoxRed[18] = '<img src = "薬師丸ひろ子.jpg" width = 100% height = 100% alt = "薬師丸ひろ子" />';
BoxRed[19] = '<img src = "石川さゆり.jpg" width = 100% height = 100% alt = "石川さゆり" />';
BoxRed[20] = '<img src = "MISIA.jpg" width = 100% height = 100% alt = "MISIA" />';
var RedBox = new Array(21);

var BoxWhite = new Array(21);
BoxWhite[0] = '<img src = "郷ひろみ.jpg" width = 100% height = 100% alt = "郷ひろみ" />';
BoxWhite[1] = '<img src = "DISH.jpg" width = 100% height = 100% alt = "DISH//" />';
BoxWhite[2] = '<img src = "山内惠介.jpg" width = 100% height = 100% alt = "山内惠介" />';
BoxWhite[3] = '<img src = "GENERATIONS.jpg" width = 100% height = 100% alt = "GENERATIONS" />';
BoxWhite[4] = '<img src = "純烈.jpg" width = 100% height = 100% alt = "純烈" />';
BoxWhite[5] = '<img src = "SixTONES.jpg" width = 100% height = 100% alt = "SixTONES" />';
BoxWhite[6] = '<img src = "KAT-TUN.jpg" width = 100% height = 100% alt = "KAT-TUN" />';
BoxWhite[7] = '<img src = "King & Prince.jpg" width = 100% height = 100% alt = "King & Prince" />';
BoxWhite[8] = '<img src = "まふまふ.jpg" width = 100% height = 100% alt = "まふまふ" />';
BoxWhite[9] = '<img src = "Snow Man.jpg" width = 100% height = 100% alt = "Snow Man" />';
BoxWhite[10] = '<img src = "関ジャニ∞.jpg" width = 100% height = 100% alt = "関ジャニ∞" />';
BoxWhite[11] = '<img src = "平井大.jpg" width = 100% height = 100% alt = "平井大" />';
BoxWhite[12] = '<img src = "宮本浩次.jpg" width = 100% height = 100% alt = "宮本浩次" />';
BoxWhite[13] = '<img src = "藤井風.jpeg" width = 100% height = 100% alt = "藤井風" />';
BoxWhite[14] = '<img src = "鈴木雅之.jpg" width = 100% height = 100% alt = "鈴木雅之" />';
BoxWhite[15] = '<img src = "ゆず.jpg" width = 100% height = 100% alt = "ゆず" />';
BoxWhite[16] = '<img src = "星野源.jpg" width = 100% height = 100% alt = "星野源" />';
BoxWhite[17] = '<img src = "BUMP OF CHICKEN.jpg" width = 100% height = 100% alt = "BUMP OF CHICKEN" />';
BoxWhite[18] = '<img src = "氷川きよし.jpg" width = 100% height = 100% alt = "氷川きよし" />';
BoxWhite[19] = '<img src = "布袋寅泰.jpg" width = 100% height = 100% alt = "布袋寅泰" />';
BoxWhite[20] = '<img src = "福山雅治.jpg" width = 100% height = 100% alt = "福山雅治" />';
var WhiteBox = new Array(21);

function start()
{
    RedLink = document.getElementById( "RedTeam" );
    WhiteLink = document.getElementById( "WhiteTeam" );
    MainLink = document.getElementById( "MainPage" );
    SingersParagraph = document.getElementById( "Singers" );
    ContentText = document.getElementById ( "content" );
    RedLink.addEventListener( "click" , Red , false);
    WhiteLink.addEventListener( "click" , White , false);
    MainLink.addEventListener( "click" , Home , false);
}

function Red(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += "red";
    SingersParagraph.innerHTML = "";
    SingersParagraph.innerHTML += '<div id = BoxRed' + 0 + ' class = box style = "margin-left: 25%;">'+BoxRed[0]+'</div>';
    for(i = 1;i < 7;i++){
        SingersParagraph.innerHTML += '<div id = BoxRed' + i + ' class = box style = "style = "display: inline;">'+BoxRed[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxRed'+7+' class = box style = "margin-left: 25%;">'+BoxRed[7]+'</div>';
    for(i = 8;i < 14;i++){
        SingersParagraph.innerHTML += '<div id = BoxRed'+i+' class = box style = "style = "display: inline;">'+BoxRed[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxRed'+14+' class = box style = "margin-left: 25%;">'+BoxRed[14]+'</div>';
    for(i = 15;i < 21;i++){
        SingersParagraph.innerHTML += '<div id = BoxRed'+i+' class = box style = "style = "display: inline;">'+BoxRed[i]+'</div>';
    }
    RedBox[0] = document.getElementById( "BoxRed0" );
    RedBox[0].addEventListener( "click" , LiSA , false);
}

function LiSA(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += "明け星";
}

function White(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += "white";
    SingersParagraph.innerHTML = "";
    SingersParagraph.innerHTML += '<div id = BoxWhite'+0+' class = box style = "margin-left: 25%;">'+BoxWhite[0]+'</div>';
    for(i = 1;i < 7;i++){
        SingersParagraph.innerHTML += '<div id = BoxWhite'+i+' class = box style = "style = "display: inline;">'+BoxWhite[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxWhite'+7+' class = box style = "margin-left: 25%;">'+BoxWhite[7]+'</div>';
    for(i = 8;i < 14;i++){
        SingersParagraph.innerHTML += '<div id = BoxWhite'+i+' class = box style = "style = "display: inline;">'+BoxWhite[i]+'</div>';
    }
    SingersParagraph.innerHTML += '<br><br><br><br><br><br>'
    SingersParagraph.innerHTML += '<div id = BoxWhite'+14+' class = box style = "margin-left: 25%;">'+BoxWhite[14]+'</div>';
    for(i = 15;i < 21;i++){
        SingersParagraph.innerHTML += '<div id = BoxWhite'+i+' class = box style = "style = "display: inline;">'+BoxWhite[i]+'</div>';
    }
}

function Home(){
    ContentText.innerHTML = " ";
    ContentText.innerHTML += 'MainPage';
    SingersParagraph.innerHTML = ' ';
    SingersParagraph.innerHTML += 'singers';
}
window.addEventListener( "load", start, false );
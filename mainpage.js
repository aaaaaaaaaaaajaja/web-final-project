var RedLink;
var WhiteLink;
var MainLink;
var ContentText;
var SingersParagraph;
var i = 0;
var BoxRed = new Array(21);
BoxRed[0] = '<img src = "LiSA.jpg" width = 100% height = 100% alt = "LiSA" />';
BoxRed[1] = '<img src = "NiziU.jpg" width = 100% height = 100% alt = "NiziU" />';
BoxRed[2] = '櫻坂46';
BoxRed[3] = 'Awesome City Club';
BoxRed[4] = '日向坂46';
BoxRed[5] = '天童よしみ';
BoxRed[6] = '上白石萌音';
BoxRed[7] = 'milet';
BoxRed[8] = '水森香織';
BoxRed[9] = 'AI';
BoxRed[10] = 'BiSH';
BoxRed[11] = 'Perfume';
BoxRed[12] = 'millennium parade×Belle';
BoxRed[13] = '乃木坂46';
BoxRed[14] = '坂本冬美';
BoxRed[15] = 'YOASOBI';
BoxRed[16] = 'あいみょん';
BoxRed[17] = '東京事変';
BoxRed[18] = '薬師丸ひろ子';
BoxRed[19] = '石川さゆり';
BoxRed[20] = 'MISIA';
var RedBox = new Array(21);

var BoxWhite = new Array(21);
BoxWhite[0] = '<img src = "郷ひろみ.jpg" width = 100% height = 100% alt = "郷ひろみ" />';
BoxWhite[1] = 'DISH//';
BoxWhite[2] = '山内惠介';
BoxWhite[3] = 'GENERATIONS';
BoxWhite[4] = '純烈';
BoxWhite[5] = 'SixTONES';
BoxWhite[6] = 'KAT-TUN';
BoxWhite[7] = 'King & Prince';
BoxWhite[8] = 'まふまふ';
BoxWhite[9] = 'Snow Man';
BoxWhite[10] = '関ジャニ∞';
BoxWhite[11] = '平井大';
BoxWhite[12] = '宮本浩次';
BoxWhite[13] = '藤井風';
BoxWhite[14] = '鈴木雅之';
BoxWhite[15] = 'ゆず';
BoxWhite[16] = '星野源';
BoxWhite[17] = 'BUMP OF CHICKEN';
BoxWhite[18] = '氷川きよし';
BoxWhite[19] = '布袋寅泰';
BoxWhite[20] = '福山雅治';
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
    SingersParagraph.innerHTML += 'Home';
}

window.addEventListener( "load", start, false );
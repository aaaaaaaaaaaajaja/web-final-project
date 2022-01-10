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
BoxRed[11] = '<img src = "perfume.jpg" width = 100% height = 100% alt = "Perfume" />';
BoxRed[12] = '<img src = "millennium parade.jpg" width = 100% height = 100% alt = "millennium parade×Belle" />';
BoxRed[13] = '<img src = "乃木坂46.jpg" width = 100% height = 100% alt = "乃木坂46" />';
BoxRed[14] = '<img src = "坂本冬美.jpg" width = 100% height = 100% alt = "坂本冬美" />';
BoxRed[15] = '<img src = "YOASOBI.jpg" width = 100% height = 100% alt = "YOASOBI" />';
BoxRed[16] = '<img src = "あいみょん.jpg" width = 100% height = 100% alt = "あいみょん" />';
BoxRed[17] = '<img src = "東京事変.jpg" width = 100% height = 100% alt = "東京事変" />';
BoxRed[18] = '<img src = "薬師丸ひろ子.jpg" width = 100% height = 100% alt = "薬師丸ひろ子" />';
BoxRed[19] = '<img src = "石川さゆり.jpg" width = 100% height = 100% alt = "石川さゆり" />';
BoxRed[20] = '<img src = "MISIA.jpg" width = 100% height = 100% alt = "MISIA" />';

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

function start()
{
    document.getElementById( "RedTeam" ).addEventListener( "click" , Red , false);;
    document.getElementById( "WhiteTeam" ).addEventListener( "click" , White , false);
    document.getElementById( "MainPage" ).addEventListener( "click" , Home , false);
    SingersParagraph = document.getElementById( "Singers" );
    ContentText = document.getElementById ( "content" );

    $("#MainPage").click(function(){
        $("#Singers").hide();
    });
    $("#RedTeam").click(function(){
        $("#Singers").show();
    });
    $("#WhiteTeam").click(function(){
        $("#Singers").show();
    });
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
    document.getElementById( "BoxRed0" ).addEventListener( "click" , LiSA , false);
    document.getElementById( "BoxRed1" ).addEventListener( "click" , NiziU , false);
    document.getElementById( "BoxRed2" ).addEventListener( "click" , 櫻坂46 , false);
    document.getElementById( "BoxRed3" ).addEventListener( "click" , AwesomeCityClub , false);
    document.getElementById( "BoxRed4" ).addEventListener( "click" , 日向坂46 , false);
    document.getElementById( "BoxRed5" ).addEventListener( "click" , 天童よしみ , false);
    document.getElementById( "BoxRed6" ).addEventListener( "click" , 上白石萌音 , false);
    document.getElementById( "BoxRed7" ).addEventListener( "click" , milet , false);
    document.getElementById( "BoxRed8" ).addEventListener( "click" , 水森かおり , false);
    document.getElementById( "BoxRed9" ).addEventListener( "click" , AI , false);
    document.getElementById( "BoxRed10" ).addEventListener( "click" , BiSH , false);
    document.getElementById( "BoxRed11" ).addEventListener( "click" , Perfume , false);
    document.getElementById( "BoxRed12" ).addEventListener( "click" , millenniumparade , false);
    document.getElementById( "BoxRed13" ).addEventListener( "click" , 乃木坂46 , false);
    document.getElementById( "BoxRed14" ).addEventListener( "click" , 坂本冬美 , false);
    document.getElementById( "BoxRed15" ).addEventListener( "click" , YOASOBI , false);
    document.getElementById( "BoxRed16" ).addEventListener( "click" , あいみょん , false);
    document.getElementById( "BoxRed17" ).addEventListener( "click" , 東京事變 , false);
    document.getElementById( "BoxRed18" ).addEventListener( "click" , 薬師丸ひろ子 , false);
    document.getElementById( "BoxRed19" ).addEventListener( "click" , 石川小百合 , false);
    document.getElementById( "BoxRed20" ).addEventListener( "click" , MISIA , false);
}

function LiSA(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += "明け星";
}

function NiziU(){
    ContentText.innerHTML = "";
    ContentText.innerHTML += "Take a picture";
}

function 櫻坂46() { 
    ContentText.innerHTML = "";
    ContentText.innerHTML += "流れ弾";
}

function AwesomeCityClub() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "勿忘";
}

function 日向坂46() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "君しか勝たん";
}

function 天童よしみ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "あんたの花道〜ブラバンSP〜";
}

function 上白石萌音() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "夜明けをくちずさめたら";
}

function milet() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "Fly High";
}

function 水森かおり() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "いい日旅立ち";
}

function AI() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "アルデバラン";
}

function BiSH() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "プロミスザスター";
}

function Perfume() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "ポリゴンウェイヴ";
}

function millenniumparade() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "U";
}

function 乃木坂46() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "きっかけ";
}

function 坂本冬美() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "夜桜お七";
}

function YOASOBI() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "群青";
}

function あいみょん() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "愛を知るまでは";
}

function 東京事變() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "緑酒";
}

function 薬師丸ひろ子() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += 'Woman "Wの悲劇"より';
}

function 石川小百合() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "津輕海峽·冬景色";
}

function MISIA() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "明日へ";
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

    document.getElementById( "BoxWhite0" ).addEventListener( "click" , 郷ひろみ , false);
    document.getElementById( "BoxWhite1" ).addEventListener( "click" , DISH , false);
    document.getElementById( "BoxWhite2" ).addEventListener( "click" , 山内惠介 , false);
    document.getElementById( "BoxWhite3" ).addEventListener( "click" , GENERATIONS , false);
    document.getElementById( "BoxWhite4" ).addEventListener( "click" , 純烈 , false);
    document.getElementById( "BoxWhite5" ).addEventListener( "click" , SixTONES , false);
    document.getElementById( "BoxWhite6" ).addEventListener( "click" , KATTUN , false);
    document.getElementById( "BoxWhite7" ).addEventListener( "click" , KingPrince , false);
    document.getElementById( "BoxWhite8" ).addEventListener( "click" , まふまふ , false);
    document.getElementById( "BoxWhite9" ).addEventListener( "click" , SnowMan , false);
    document.getElementById( "BoxWhite10" ).addEventListener( "click" , 関ジャニ , false);
    document.getElementById( "BoxWhite11" ).addEventListener( "click" , 平井大 , false);
    document.getElementById( "BoxWhite12" ).addEventListener( "click" , 宮本浩次 , false);
    document.getElementById( "BoxWhite13" ).addEventListener( "click" , 藤井風 , false);
    document.getElementById( "BoxWhite14" ).addEventListener( "click" , 鈴木雅之 , false);
    document.getElementById( "BoxWhite15" ).addEventListener( "click" , ゆず , false);
    document.getElementById( "BoxWhite16" ).addEventListener( "click" , 星野源 , false);
    document.getElementById( "BoxWhite17" ).addEventListener( "click" , BUMPOFCHICKEN , false);
    document.getElementById( "BoxWhite18" ).addEventListener( "click" , 氷川きよし , false);
    document.getElementById( "BoxWhite19" ).addEventListener( "click" , 布袋寅泰 , false);
    document.getElementById( "BBoxWhite20" ).addEventListener( "click" , 福山雅治 , false);
}

function 郷ひろみ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "2億4千万の瞳-エキゾチック・ジャパン-";
}

function DISH() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "猫";
}

function 山内惠介() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "有楽町で逢いましょう";
}

function GENERATIONS() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "Make Me Better";
}

function 純烈() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "君がそばにいるから ";
}

function SixTONES() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "マスカラ ";
}

function KATTUN() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "Real Face #2 ";
}

function KingPrince() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "恋降る月夜に君想ふ ";
}

function まふまふ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "命に嫌われている。 ";
}

function SnowMan() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "D.D. ";
}

function 関ジャニ() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "Re:LIVE";
}

function 平井大() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "Stand by me, Stand by you.";
}

function 宮本浩次() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "夜明けのうた ";
}

function 藤井風() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "きらり、燃えよ";
}

function 鈴木雅之() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "め組のひと";
}

function ゆず() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "虹";
}

function 星野源() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "不思議";
}

function BUMPOFCHICKEN() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "天体観測、なないろ";
}

function 氷川きよし() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "歌は我が命";
}

function 布袋寅泰() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "さらば青春の光";
}

function 福山雅治() {
    ContentText.innerHTML = "";
    ContentText.innerHTML += "道標";
}

function Home(){
    ContentText.innerHTML = " ";
    ContentText.innerHTML += 'MainPage';

}
window.addEventListener( "load", start, false );

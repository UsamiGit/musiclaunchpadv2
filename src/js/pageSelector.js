const fs = require("fs");
const data = fs.readFileSync(".\\web_content\\data.json");
const playlists = JSON.parse(data);

//alert(playlists.playlists[1].title);
var curPage = 1
initImg();
console.log(curPage);

//try {
//
//    const data = fs.readFileSync('M:\\Personal Files\\Documents\\Programming\\MusicLaunchpadV2\\web_content\\data.json', 'utf8');
//
//  const playlists = JSON.parse(data);
//
//    var i = 1;
//
//    for (list in playlists["playlists"]) {
//        console.log(JSON.stringify(playlists["playlists"][list]));
//        console.log("0" + String(i));
//        i++;
//  }
///} catch (err) {
//    console.log(`bad boy: ${err}`)
//}

function pageSelectorRight() {
    switch (curPage) {
        case 1:
            curPage += 1;
            break;
        case 2:
            curPage += 1;
            break;
        case 3:
            curPage += 1;
            break;
        case 4:
            curPage = 1;
            break;
    }
    pageSelector();
    console.log(curPage);
}

function pageSelectorLeft() {
    switch (curPage) {
        case 1:
            curPage = 4;
            break;
        case 2:
            curPage -= 1;
            break;
        case 3:
            curPage -= 1;
            break;
        case 4:
            curPage -= 1;
            break;
    }
    pageSelector();
    console.log(curPage);
}

function pageSelector() {
    initImg();
    switch (curPage) {
        case 1:
            console.log("patat: " + curPage);
            document.getElementById("page01").className = "dotActive";
            document.getElementById("page02").className = "dot";
            document.getElementById("page03").className = "dot";
            document.getElementById("page04").className = "dot";
            break;
        case 2:
            console.log("patat: " + curPage);
            document.getElementById("page01").className = "dot";
            document.getElementById("page02").className = "dotActive";
            document.getElementById("page03").className = "dot";
            document.getElementById("page04").className = "dot";
            break;
        case 3:
            console.log("patat: " + curPage);
            document.getElementById("page01").className = "dot";
            document.getElementById("page02").className = "dot";
            document.getElementById("page03").className = "dotActive";
            document.getElementById("page04").className = "dot";
            break;
        case 4:
            console.log("patat: " + curPage);
            document.getElementById("page01").className = "dot";
            document.getElementById("page02").className = "dot";
            document.getElementById("page03").className = "dot";
            document.getElementById("page04").className = "dotActive";
            break;
    }
}

function initImg() {

    i = 0;

    while (i < 9) {
        var marq = "marq" + (i + 1);
        document.getElementById(marq).textContent = playlists.playlists[i].title;
        document.getElementById(i + 1).src = playlists.playlists[i].cover;
        i++;
    }
}

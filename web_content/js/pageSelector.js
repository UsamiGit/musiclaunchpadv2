const fs = require("fs");

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
    switch (curPage) {
        case 1:
            document.getElementById("01").src = "./covers/NieR_Replicant_Orchestral_Arrangement.webp";
            document.getElementById("marq01").textContent = "NieR Replicant Orchestral Arrangement";

            document.getElementById("02").src = "./covers/NieR_Automata_Orchestral_Arrangement.webp";
            document.getElementById("marq02").textContent = "NieR Automata Orchestral Arrangement";

            document.getElementById("03").src = "./covers/The_Best_Of_Japanese_City_Pop_Volume_1.webp";
            document.getElementById("marq03").textContent = "Best of Japanese City Pop Volume 1";

            document.getElementById("04").src = "./covers/The_Best_Of_Japanese_City_Pop_Volume_2.webp";
            document.getElementById("marq04").textContent = "Best of Japanese City Pop Volume 2";

            document.getElementById("05").src = "./covers/The_Best_Of_Japanese_City_Pop_Volume_3.webp";
            document.getElementById("marq05").textContent = "Best of Japanese City Pop Volume 3";

            document.getElementById("06").src = "./covers/The_Best_Of_Japanese_City_Pop_Volume_4.webp";
            document.getElementById("marq06").textContent = "Best of Japanese City Pop Volume 4";

            document.getElementById("07").src = "./covers/The_Best_Of_Japanese_City_Pop_Volume_5.webp";
            document.getElementById("marq07").textContent = "Best of Japanese City Pop Volume 5";

            document.getElementById("08").src = "./covers/The_Best_Of_Japanese_City_Pop_Volume_6.webp";
            document.getElementById("marq08").textContent = "Best of Japanese City Pop Volume 6";

            document.getElementById("09").src = "./covers/Frank_Sinatra.webp";
            document.getElementById("marq09").textContent = "My Way Best of Frank Sinatra";

            document.getElementById("10").src = "./covers/Witcher_3_Soundtrack.webp";
            document.getElementById("marq10").textContent = "Witcher 3 Original Sountrack";

            document.getElementById("11").src = "./covers/Yosi Horikawa Spaces.webp";
            document.getElementById("marq11").textContent = "Yosi Horikawa - Spaces";

            document.getElementById("12").src = "./covers/Yosi Horikawa Vapor.webp";
            document.getElementById("marq12").textContent = "Yosi Horikawa - Vapor";

            break;
        case 2:
            document.getElementById("01").src = "./covers/Moe-Shop-Lovesick.webp";
            document.getElementById("marq01").textContent = "Moe Shop - Lovesick (w/ Maisou)";

            document.getElementById("02").src = "./covers/Moe-Shop-WONDER-POP.webp";
            document.getElementById("marq02").textContent = "Moe Shop - WONDER POP";

            document.getElementById("03").src = "./covers/retarded-for-7-years.webp";
            document.getElementById("marq03").textContent = "Orchestr/a/ - I have been pretended retarded for 7 years";

            document.getElementById("04").src = "./covers/NieR Replicant OST.webp";
            document.getElementById("marq04").textContent = "NieR Replicant ver 1.22 Original OST";

            document.getElementById("05").src = "./covers/NieR Replicant OST - Vinyl.webp";
            document.getElementById("marq05").textContent = "NieR Replicant ver 1.22 Vinyl OST";

            document.getElementById("06").src = "";
            document.getElementById("marq06").textContent = "undefined";

            document.getElementById("07").src = "";
            document.getElementById("marq07").textContent = "undefined";

            document.getElementById("08").src = "";
            document.getElementById("marq08").textContent = "undefined";

            document.getElementById("09").src = "";
            document.getElementById("marq09").textContent = "undefined";

            document.getElementById("10").src = "";
            document.getElementById("marq10").textContent = "undefined";

            document.getElementById("11").src = "";
            document.getElementById("marq11").textContent = "undefined";

            document.getElementById("12").src = "";
            document.getElementById("marq12").textContent = "undefined";

            break;
        case 3:
            document.getElementById("01").src = "";
            document.getElementById("marq01").textContent = "undefined";

            document.getElementById("02").src = "";
            document.getElementById("marq02").textContent = "undefined";

            document.getElementById("03").src = "";
            document.getElementById("marq03").textContent = "undefined";

            document.getElementById("04").src = "";
            document.getElementById("marq04").textContent = "undefined";

            document.getElementById("05").src = "";
            document.getElementById("marq05").textContent = "undefined";

            document.getElementById("06").src = "";
            document.getElementById("marq06").textContent = "undefined";

            document.getElementById("07").src = "";
            document.getElementById("marq07").textContent = "undefined";

            document.getElementById("08").src = "";
            document.getElementById("marq08").textContent = "undefined";

            document.getElementById("09").src = "";
            document.getElementById("marq09").textContent = "undefined";

            document.getElementById("10").src = "";
            document.getElementById("marq10").textContent = "undefined";

            document.getElementById("11").src = "";
            document.getElementById("marq11").textContent = "undefined";

            document.getElementById("12").src = "";
            document.getElementById("marq12").textContent = "undefined";

            break;
        case 4:
            document.getElementById("01").src = "";
            document.getElementById("marq01").textContent = "undefined";

            document.getElementById("02").src = "";
            document.getElementById("marq02").textContent = "undefined";

            document.getElementById("03").src = "";
            document.getElementById("marq03").textContent = "undefined";

            document.getElementById("04").src = "";
            document.getElementById("marq04").textContent = "undefined";

            document.getElementById("05").src = "";
            document.getElementById("marq05").textContent = "undefined";

            document.getElementById("06").src = "";
            document.getElementById("marq06").textContent = "undefined";

            document.getElementById("07").src = "";
            document.getElementById("marq07").textContent = "undefined";

            document.getElementById("08").src = "";
            document.getElementById("marq08").textContent = "undefined";

            document.getElementById("09").src = "";
            document.getElementById("marq09").textContent = "undefined";

            document.getElementById("10").src = "";
            document.getElementById("marq10").textContent = "undefined";

            document.getElementById("11").src = "";
            document.getElementById("marq11").textContent = "undefined";

            document.getElementById("12").src = "";
            document.getElementById("marq12").textContent = "undefined";

            break;
    }
}

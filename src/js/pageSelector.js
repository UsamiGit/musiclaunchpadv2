const fs = require("fs");
const data = fs.readFileSync(".\\src\\data.json");
const playlists = JSON.parse(data);

//alert(playlists.playlists[1].title);
var curPage = 1;
InitImage();
console.log(curPage);

//try {
//
//    const data = fs.readFileSync('M:\\Personal Files\\Documents\\Programming\\MusicLaunchpadV2\\src\\data.json', 'utf8');
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
};

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
    };
    pageSelector();;
    console.log(curPage);
};

function pageSelector() {
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
    };
};

function InitImage() {
    const catalog = document.getElementById('catalog');
    const fragment = document.createDocumentFragment();

    playlists.playlists.forEach(list => {
        const node = document.createElement('div');
        node.innerHTML = `
            <div class="item">
                <div class="padnum">${list.id}</div>
                <img id="${list.id}" class="cover" src="${list.cover}">
                <marquee id="marq${list.id}" behavior="scroll" direction="left" scrollamount="5" class="scrolltext">${list.title}</marquee>
            </div>
        `;

        if (node.childNodes[0]) {
            fragment.append(node);
        };
    });

    catalog.appendChild(fragment);
};
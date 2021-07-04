const { spawn } = require('child_process');
console.log(curPage);

function fadeOut() {
    document.getElementById("body").className = "shrink";
    setTimeout(function () { window.close() }, 1000)
}

window.addEventListener('keydown', (event) => {
    console.log(event);
    switch (curPage) {
        case 1:
            switch (event.key) {
                case "1":
                    fadeOut();
                    if (event.ctrlKey) {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Yosi Horikawa\\Spaces\\Yosi Horikawa - Spaces.aimppl4'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    } else {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\NieR Orchestral Arrangement Disc\\Replicant\\NieR Orchestral Arrangement Special Box Edition.aimppl4'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    }
                case "2":
                    fadeOut();
                    if (event.ctrlKey) {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Yosi Horikawa\\Vapor\\Yosi Horikawa - Vapor.aimppl4'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    } else {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\NieR Orchestral Arrangement Disc\\Automata\\NieR Orchestral Arrangement Special Box Edition.aimppl4'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    }
                case "3":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Best of City Pop\\Volume 1\\The Best of City Pop, Vol. 1.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "4":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Best of City Pop\\Volume 2\\The Best of City Pop, Vol. 2.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "5":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Best of City Pop\\Volume 3\\The best of city pop vol 3.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "6":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Best of City Pop\\Volume 4\\BEST CITY POP VOL. 4.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "7":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Best of City Pop\\Volume 5\\The best of city pop vol 5.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "8":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Best of City Pop\\Volume 6\\The best of city pop vol 6.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "9":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Frank Sinatra - My Way The Best Of Frank Sinatra (1997) [FLAC]\\Frank Sinatra - My Way The Best Of Frank Sinatra.m3u'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "0":
                    fadeOut();
                    var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\The Witcher 3 Wild Hunt - Official Soundtrack (FLAC)\\The Witcher 3_ Wild Hunt - Official Soundtrack.aimppl4'], {
                        detached: true,
                        stdio: 'ignore'
                    });
                    subprocess.unref();
                    break;
                case "Escape":
                    fadeOut();
                    break;
                case "ArrowRight":
                    pageSelectorRight()
                    console.log("key_input: " + curPage);
                    break;
                case "ArrowLeft":
                    pageSelectorLeft()
                    console.log("key_input: " + curPage);
                    break;
            }
            break;
        case 2:
            switch (event.key) {
                case "1":
                    fadeOut();
                    if (event.ctrlKey) {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Moe Shop - Lovesick (w- maisou).flac'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    } else {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Moe Shop - Lovesick (w- maisou).flac'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    }
                case "2":
                    fadeOut();
                    if (event.ctrlKey) {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Moe Shop - WONDER POP.flac'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    } else {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Moe Shop - WONDER POP.flac'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    }
                case "3":
                    fadeOut();
                    if (event.ctrlKey) {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Season 7 Radio.wav'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    } else {
                        var subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\Season 7 Radio.wav'], {
                            detached: true,
                            stdio: 'ignore'
                        });
                        subprocess.unref();
                        break;
                    }
                case "Escape":
                    fadeOut();
                    break;
                case "ArrowRight":
                    pageSelectorRight()
                    console.log("key_input: " + curPage);
                    break;
                case "ArrowLeft":
                    pageSelectorLeft()
                    console.log("key_input: " + curPage);
                    break;
            }
            break;
        case 3:
            switch (event.key) {
                case "Escape":
                    fadeOut();
                    break;
                case "ArrowRight":
                    pageSelectorRight()
                    console.log("key_input: " + curPage);
                    break;
                case "ArrowLeft":
                    pageSelectorLeft()
                    console.log("key_input: " + curPage);
                    break;
            }
            break;
        case 4:
            switch (event.key) {
                case "Escape":
                    fadeOut();
                    break;
                case "ArrowRight":
                    pageSelectorRight()
                    console.log("key_input: " + curPage);
                    break;
                case "ArrowLeft":
                    pageSelectorLeft()
                    console.log("key_input: " + curPage);
                    break;
            }
            break;
    }
})

//const { spawn, execFile } = require('child_process');

//const subprocess = spawn('C:\\Program Files (x86)\\AIMP\\AIMP.exe', ['A:\\Music\\NieR Orchestral Arrangement Disc\\Replicant\\NieR Orchestral Arrangement Special Box Edition.aimppl4'], {
//    detached: true,
//    stdio: 'ignore'
//});
//
//subprocess.unref();
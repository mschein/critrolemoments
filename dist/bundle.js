!function(e){function i(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,i),d.l=!0,d.exports}var t={};return i.m=e,i.c=t,i.i=function(e){return e},i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=10)}([function(e,i,t){var o=t(7);"string"==typeof o&&(o=[[e.i,o,""]]);t(9)(o,{});o.locals&&(e.exports=o.locals)},function(e,i,t){"use strict";function o(e){var i=e.split(":").reverse(),t=parseInt(i[0],10),o=parseInt(i[1]||0,10),d=parseInt(i[2]||0,10);if(isNaN(t)||isNaN(o)||isNaN(d))throw new Error("Invalid timestamp: "+e);return{h:d,m:o,s:t}}function d(e,i,t){for(var o=e.toString();o.length<t;)o=""+i+o;return o}function s(e){var i=o(e);return d(i.h,"0",2)+":"+d(i.m,"0",2)+":"+d(i.s,"0",2)}Object.defineProperty(i,"__esModule",{value:!0}),i.parseTimestamp=o,i.leftPad=d,i.padTimestamp=s},function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function d(e,i){if(e.episode===i.episode)return 0;var t=parseFloat(e.episode),o=parseFloat(i.episode);return!isNaN(t)&&isNaN(o)?1:isNaN(t)&&!isNaN(o)?-1:isNaN(t)||isNaN(o)?e.episode>i.episode?1:-1:t>o?1:-1}function s(e){var i=document.createElement("div");i.classList.add(l.default.episode);var t=document.createElement("h3"),o="Episode "+e.episode+": "+e.title;t.innerHTML=o,i.appendChild(t);var d=(0,p.momentsElement)(e);i.appendChild(d);var s=void 0,r=void 0;return s=function(){d.classList.add(l.default.hidden),t.onclick=function(){return r()}},r=function(){d.classList.remove(l.default.hidden),t.onclick=function(){return s()}},t.onclick=function(){return s()},i.expand=function(){return r()},i.collapse=function(){return s()},i.search=function(e){o.toLowerCase().includes(e.toLowerCase())?(d.search(""),i.classList.remove(l.default.searchHidden)):d.search(e)>0?i.classList.remove(l.default.searchHidden):i.classList.add(l.default.searchHidden)},i}function r(){var e=document.createElement("div");e.classList.add(l.default.episodes);var i=[],t=document.createElement("div");t.classList.add(l.default.episodesControls),e.appendChild(t);var o=document.createElement("input");o.classList.add(l.default.search),o.setAttribute("type","text"),o.setAttribute("placeholder","Search..."),o.oninput=function(e){return i.forEach(function(i){return i.search(e.target.value)})},t.appendChild(o);var r=document.createElement("span"),a=document.createElement("span");return r.classList.add(l.default.episodesControl),a.classList.add(l.default.episodesControl),r.innerHTML="[+] Expand all",a.innerHTML="[-] Collapse all",r.onclick=function(){return i.forEach(function(e){return e.expand()})},a.onclick=function(){return i.forEach(function(e){return e.collapse()})},t.appendChild(r),t.appendChild(a),Object.values(n.default).filter(function(e){return"Critical Role"===e.category}).sort(d).forEach(function(t){return i.push(e.appendChild(s(t)))}),e}Object.defineProperty(i,"__esModule",{value:!0}),i.episodeElement=s,i.episodesElement=r;var a=t(3),n=o(a),c=t(0),l=o(c),p=t(5)},function(e,i){e.exports={"i-p9lWIhcLQ":{id:"i-p9lWIhcLQ",videoId:"i-p9lWIhcLQ",category:"Critical Role",episode:"1",title:"Arrival at Kraghammer"},JTie0S_5gjE:{id:"JTie0S_5gjE",videoId:"JTie0S_5gjE",category:"Critical Role",episode:"2",title:"Into the Greyspine Mines"},"kpkCcb--r90":{id:"kpkCcb--r90",videoId:"kpkCcb--r90",category:"Critical Role",episode:"3",title:"Strange Bedfellows"},kGxiZNbjwGI:{id:"kGxiZNbjwGI",videoId:"kGxiZNbjwGI",category:"Critical Role",episode:"4",title:"Attack on the Duergar Warcamp"},u6QpXDL7E8Y:{id:"u6QpXDL7E8Y",videoId:"u6QpXDL7E8Y",category:"Critical Role",episode:"5",title:"The Trick about Falling"},cemCmD27Rnc:{id:"cemCmD27Rnc",videoId:"cemCmD27Rnc",category:"Critical Role",episode:"6",title:"Breaching the Emberhold"},XGs3bOX4XFQ:{id:"XGs3bOX4XFQ",videoId:"XGs3bOX4XFQ",category:"Critical Role",episode:"7",title:"The Throne Room"},A14MzQxxdwM:{id:"A14MzQxxdwM",videoId:"A14MzQxxdwM",category:"Critical Role",episode:"8",title:"Glass and Bone"},IsLIiKFSJLQ:{id:"IsLIiKFSJLQ",videoId:"IsLIiKFSJLQ",category:"Critical Role",episode:"9",title:"Yug'voril Uncovered"},"AvnaMU7Dr-E":{id:"AvnaMU7Dr-E",videoId:"AvnaMU7Dr-E",category:"Critical Role",episode:"10",title:"K'Varn Revealed"},xoYyHYsl5po:{id:"xoYyHYsl5po",videoId:"xoYyHYsl5po",category:"Critical Role",episode:"11",title:"The Temple Showdown"},P8EcS0WYbuc:{id:"P8EcS0WYbuc",videoId:"P8EcS0WYbuc",category:"Critical Role",episode:"12",title:"Dungeons & Dragons Campaign Tips"},"315mZGX-mjs":{id:"315mZGX-mjs",videoId:"315mZGX-mjs",category:"Critical Role",episode:"13",title:"Escape from the Underdark"},Z4tjssfei5E:{id:"Z4tjssfei5E",videoId:"Z4tjssfei5E",category:"Critical Role",episode:"14",title:"Shopping and Shipping"},_dIBh0dGhzI:{id:"_dIBh0dGhzI",videoId:"_dIBh0dGhzI",category:"Critical Role",episode:"15",title:"Skyward"},elarLmuDtzU:{id:"elarLmuDtzU",videoId:"elarLmuDtzU",category:"Critical Role",episode:"16",title:"Enter Vasselheim"},QDdT5UqGaDw:{id:"QDdT5UqGaDw",videoId:"QDdT5UqGaDw",category:"Critical Role",episode:"17",title:"Hubris"},"60sUkTh6xBc":{id:"60sUkTh6xBc",videoId:"60sUkTh6xBc",category:"Critical Role",episode:"18",title:"Trial of the Take, pt. 1"},IW6GgFQg3kk:{id:"IW6GgFQg3kk",videoId:"IW6GgFQg3kk",category:"Critical Role",episode:"19",title:"Trial of the Take, pt. 2"},GFU_qqwSs0U:{id:"GFU_qqwSs0U",videoId:"GFU_qqwSs0U",category:"Critical Role",episode:"20",title:"Trial of the Take, pt. 3"},zGaISHs2s7Q:{id:"zGaISHs2s7Q",videoId:"zGaISHs2s7Q",category:"Critical Role",episode:"21",title:"Trial of the Take, pt. 4"},"1GY3HTZE5R0":{id:"1GY3HTZE5R0",videoId:"1GY3HTZE5R0",category:"Critical Role",episode:"22",title:"AraMente to Pyrah"},FM6L4tuyXq0:{id:"FM6L4tuyXq0",videoId:"FM6L4tuyXq0",category:"Critical Role",episode:"23",title:"The Rematch"},kre27f30IVs:{id:"kre27f30IVs",videoId:"kre27f30IVs",category:"Critical Role",episode:"24",title:"The Feast"},"yrrB_q-V8G0":{id:"yrrB_q-V8G0",videoId:"yrrB_q-V8G0",category:"Critical Role",episode:"25",title:"Crimson Diplomacy"},_2CCQnD4AQ8:{id:"_2CCQnD4AQ8",videoId:"_2CCQnD4AQ8",category:"Critical Role",episode:"26",title:"Consequences and Cows"},"2mB-aM2bIBk":{id:"2mB-aM2bIBk",videoId:"2mB-aM2bIBk",category:"Critical Role",episode:"27",title:"The Path to Whitestone"},yE27NwtXjPY:{id:"yE27NwtXjPY",videoId:"yE27NwtXjPY",category:"Critical Role",episode:"28",title:"The Sun Tree"},"gq4av949-3Y":{id:"gq4av949-3Y",videoId:"gq4av949-3Y",category:"Critical Role",episode:"29",title:"Whispers"},MtS1LGdqxuI:{id:"MtS1LGdqxuI",videoId:"MtS1LGdqxuI",category:"Critical Role",episode:"30",title:"Stoke the Flames"},CVSgD1iB1G0:{id:"CVSgD1iB1G0",videoId:"CVSgD1iB1G0",category:"Critical Role",episode:"31.1",title:"Gunpowder Plot, pt. 1"},"K-k2JpMSa_k":{id:"K-k2JpMSa_k",videoId:"K-k2JpMSa_k",category:"Critical Role",episode:"31.2",title:"Gunpowder Plot, pt. 2"},B5sUXSaTHKc:{id:"B5sUXSaTHKc",videoId:"B5sUXSaTHKc",category:"Critical Role",episode:"32",title:"Against the Tide of Bone"},EtdswJtQ_Ew:{id:"EtdswJtQ_Ew",videoId:"EtdswJtQ_Ew",category:"Critical Role",episode:"33.1",title:"Reunions, pt. 1"},iP1gylnxfLU:{id:"iP1gylnxfLU",videoId:"iP1gylnxfLU",category:"Critical Role",episode:"33.2",title:"Reunions, pt. 2"},"2AqLu-u-GcY":{id:"2AqLu-u-GcY",videoId:"2AqLu-u-GcY",category:"Critical Role",episode:"34",title:"Race to the Ziggurat"},p8p5qZcqIk0:{id:"p8p5qZcqIk0",videoId:"p8p5qZcqIk0",category:"Critical Role",episode:"35.1",title:"Denouement, pt. 1"},WFbmY79Qdfc:{id:"WFbmY79Qdfc",videoId:"WFbmY79Qdfc",category:"Critical Role",episode:"35.2",title:"Denouement, pt. 2"},"EikRMYRf5-Y":{id:"EikRMYRf5-Y",videoId:"EikRMYRf5-Y",category:"Critical Role",episode:"36",title:"Winter's Crest in Whitestone"},"1cbxJRfvBtI":{id:"1cbxJRfvBtI",videoId:"1cbxJRfvBtI",category:"Critical Role",episode:"37",title:"A Musician's Nostalgia"},wCj4kCq1Z9Y:{id:"wCj4kCq1Z9Y",videoId:"wCj4kCq1Z9Y",category:"Critical Role",episode:"38",title:"Echoes of the Past"},"9EToAf4nhDw":{id:"9EToAf4nhDw",videoId:"9EToAf4nhDw",category:"Critical Role",episode:"39",title:"Omens"},"0W_by9hT6VQ":{id:"0W_by9hT6VQ",videoId:"0W_by9hT6VQ",category:"Critical Role",episode:"40",title:"Desperate Measures"},"L8xSI6QoT-A":{id:"L8xSI6QoT-A",videoId:"L8xSI6QoT-A",category:"Critical Role",episode:"41",title:"In Ruins"},qWoloOxtvc0:{id:"qWoloOxtvc0",videoId:"qWoloOxtvc0",category:"Critical Role",episode:"42",title:"Dangerous Dealings"},zr2n1fLVasU:{id:"zr2n1fLVasU",videoId:"zr2n1fLVasU",category:"Critical Role",episode:"43",title:"Return to Vasselheim"},u8MRyyFDX3c:{id:"u8MRyyFDX3c",videoId:"u8MRyyFDX3c",category:"One Shot",episode:"TO THE POOP!",title:"TO THE POOP! - The Goblins"},KHsA0R_GovU:{id:"KHsA0R_GovU",videoId:"KHsA0R_GovU",category:"Critical Role",episode:"44",title:"The Sunken Tomb"},"0uazTyTrk-8":{id:"0uazTyTrk-8",videoId:"0uazTyTrk-8",category:"Critical Role",episode:"45",title:"Those Who Walk Away..."},uw1crQ1d9AU:{id:"uw1crQ1d9AU",videoId:"uw1crQ1d9AU",category:"Critical Role",episode:"46",title:"Cindergrove Revisited"},QqU5pqKoH2c:{id:"QqU5pqKoH2c",videoId:"QqU5pqKoH2c",category:"Critical Role",episode:"47",title:"The Family Business"},"1uMH-hFJz0Q":{id:"1uMH-hFJz0Q",videoId:"1uMH-hFJz0Q",category:"Critical Role",episode:"48",title:"Into the Frostweald"},PfvVssT83MU:{id:"PfvVssT83MU",videoId:"PfvVssT83MU",category:"Critical Role",episode:"49",title:"A Name Is Earned"},W4e4gTmoGi4:{id:"W4e4gTmoGi4",videoId:"W4e4gTmoGi4",category:"Critical Role",episode:"50",title:"Best Laid Plans..."},"9g3cnEacrEo":{id:"9g3cnEacrEo",videoId:"9g3cnEacrEo",category:"Critical Role",episode:"51",title:"Test of Pride"},"9QXZ4LfSi84":{id:"9QXZ4LfSi84",videoId:"9QXZ4LfSi84",category:"Critical Role",episode:"52",title:"The Kill Box"},"Nfcja-6hr24":{id:"Nfcja-6hr24",videoId:"Nfcja-6hr24",category:"Critical Role",episode:"53",title:"At Dawn, We Plan!"},"9QRg2YEkVLU":{id:"9QRg2YEkVLU",videoId:"9QRg2YEkVLU",category:"Critical Role",episode:"54",title:"In the Belly of the Beast"},A6ma5W_TSDE:{id:"A6ma5W_TSDE",videoId:"A6ma5W_TSDE",category:"Critical Role",episode:"55",title:"Umbrasyl"},"8xpnCiF4im0":{id:"8xpnCiF4im0",videoId:"8xpnCiF4im0",category:"Critical Role",episode:"56",title:"Hope"},HMBS__TC5R4:{id:"HMBS__TC5R4",videoId:"HMBS__TC5R4",category:"Critical Role",episode:"57",title:"Duskmeadow"},nRBzpiPccOs:{id:"nRBzpiPccOs",videoId:"nRBzpiPccOs",category:"Critical Role",episode:"58",title:"A Cycle of Vengeance"},l_jwMsIv1oc:{id:"l_jwMsIv1oc",videoId:"l_jwMsIv1oc",category:"Critical Role",episode:"59",title:"The Feywild"},Ok4ZW9cNupc:{id:"Ok4ZW9cNupc",videoId:"Ok4ZW9cNupc",category:"Critical Role",episode:"60",title:"Heredity and Hats"},"QKaubU-lk04":{id:"QKaubU-lk04",videoId:"QKaubU-lk04",category:"Critical Role",episode:"61",title:"Denizens of the Moonbrush"},QePayxU0kKo:{id:"QePayxU0kKo",videoId:"QePayxU0kKo",category:"Critical Role",episode:"62",title:"Uninviting Waters"},"1cUx2oLUGqI":{id:"1cUx2oLUGqI",videoId:"1cUx2oLUGqI",category:"Critical Role",episode:"63",title:"The Echo Tree"},yqJdHshftrs:{id:"yqJdHshftrs",videoId:"yqJdHshftrs",category:"Critical Role",episode:"64",title:"The Frigid Doom"},"6-Od2lnsiHs":{id:"6-Od2lnsiHs",videoId:"6-Od2lnsiHs",category:"Critical Role",episode:"65",title:"The Streets of Ank'Harel"},LgHm3Ct0Zh0:{id:"LgHm3Ct0Zh0",videoId:"LgHm3Ct0Zh0",category:"One Shot",episode:"The Return of Liam!",title:"The Return of Liam!"},jgmBV5NA2A8:{id:"jgmBV5NA2A8",videoId:"jgmBV5NA2A8",category:"Critical Role",episode:"66",title:"A Traveler's Gamble"},Z7ozVxDtJzM:{id:"Z7ozVxDtJzM",videoId:"Z7ozVxDtJzM",category:"Critical Role",episode:"67",title:"The Chase to Glintshore"},RCnwjLK_ZuQ:{id:"RCnwjLK_ZuQ",videoId:"RCnwjLK_ZuQ",category:"Critical Role",episode:"68",title:"Cloak and Dagger"},YLcRhm8UP8g:{id:"YLcRhm8UP8g",videoId:"YLcRhm8UP8g",category:"Critical Role",episode:"69",title:"Passed Through Fire"},"YxWU4r-cLIY":{id:"YxWU4r-cLIY",videoId:"YxWU4r-cLIY",category:"Critical Role",episode:"70",title:"Trust"},"-I_tnzBKSWk":{id:"-I_tnzBKSWk",videoId:"-I_tnzBKSWk",category:"Critical Role",episode:"71",title:"Vorugal"},qn8tLbXWAtc:{id:"qn8tLbXWAtc",videoId:"qn8tLbXWAtc",category:"Critical Role",episode:"72",title:"The Elephant in the Room"},UHUBmvRNrik:{id:"UHUBmvRNrik",videoId:"UHUBmvRNrik",category:"Critical Role",episode:"73",title:"The Coming Storm"},"2U21dJrY6ZI":{id:"2U21dJrY6ZI",videoId:"2U21dJrY6ZI",category:"Critical Role",episode:"74",title:"Path of Brass"},"Qz-twLRAE_A":{id:"Qz-twLRAE_A",videoId:"Qz-twLRAE_A",category:"Critical Role",episode:"75",title:"Where The Cards Fall"},L4Sb53wvbKI:{id:"L4Sb53wvbKI",videoId:"L4Sb53wvbKI",category:"Critical Role",episode:"76",title:"Brawl in the Arches"},"43gRUYn4x_M":{id:"43gRUYn4x_M",videoId:"43gRUYn4x_M",category:"Critical Role",episode:"77",title:"Clash at Daxio"},tEnHX2XiGaQ:{id:"tEnHX2XiGaQ",videoId:"tEnHX2XiGaQ",category:"Critical Role",episode:"78",title:"The Siege of Emon"},THyXWq5iS0k:{id:"THyXWq5iS0k",videoId:"THyXWq5iS0k",category:"Critical Role",episode:"79",title:"Thordak"},"5jc1pbOVUX0":{id:"5jc1pbOVUX0",videoId:"5jc1pbOVUX0",category:"Critical Role",episode:"80",title:"Raishan"},um3mkvNmDPY:{id:"um3mkvNmDPY",videoId:"um3mkvNmDPY",category:"Critical Role",episode:"81",title:"What Lies Beneath The Surface"},Mgjf7knzbx0:{id:"Mgjf7knzbx0",videoId:"Mgjf7knzbx0",category:"Critical Role",episode:"82",title:"Deadly Echoes"},"7Tdl6GhiSI8":{id:"7Tdl6GhiSI8",videoId:"7Tdl6GhiSI8",category:"One Shot",episode:"Liam's Quest!",title:"Liam's Quest!"}}},function(e,i){e.exports={"i-p9lWIhcLQ-1":{id:"i-p9lWIhcLQ-1",episodeId:"i-p9lWIhcLQ",timestamp:"01:12:34",description:"Scanlan snores during an argument"},"i-p9lWIhcLQ-2":{id:"i-p9lWIhcLQ-2",episodeId:"i-p9lWIhcLQ",timestamp:"00:46:18",description:"Sam doesn’t agree with Orion’s approach"},"JTie0S_5gjE-1":{id:"JTie0S_5gjE-1",episodeId:"JTie0S_5gjE",timestamp:"00:16:10",description:'"You can cast?"'},"JTie0S_5gjE-2":{id:"JTie0S_5gjE-2",episodeId:"JTie0S_5gjE",timestamp:"00:23:14",description:"Vax goes to steal some wine while Scanlan doesn't distract"},"JTie0S_5gjE-3":{id:"JTie0S_5gjE-3",episodeId:"JTie0S_5gjE",timestamp:"00:27:40",description:'"From Nostoc? Really?"'},"JTie0S_5gjE-4":{id:"JTie0S_5gjE-4",episodeId:"JTie0S_5gjE",timestamp:"00:28:44",description:"Goblin centipede"},"JTie0S_5gjE-5":{id:"JTie0S_5gjE-5",episodeId:"JTie0S_5gjE",timestamp:"00:33:45",description:'"To the other guy, Matt?"'},"JTie0S_5gjE-6":{id:"JTie0S_5gjE-6",episodeId:"JTie0S_5gjE",timestamp:"00:49:34",description:"Tiberius, silenced"},"JTie0S_5gjE-7":{id:"JTie0S_5gjE-7",episodeId:"JTie0S_5gjE",timestamp:"00:50:50",description:"Tiberius' pent-up monologue"},"JTie0S_5gjE-8":{id:"JTie0S_5gjE-8",episodeId:"JTie0S_5gjE",timestamp:"00:52:52",description:"Keyleth's Scottish accent"},"JTie0S_5gjE-9":{id:"JTie0S_5gjE-9",episodeId:"JTie0S_5gjE",timestamp:"00:59:03",description:"The House of Vulva"},"JTie0S_5gjE-10":{id:"JTie0S_5gjE-10",episodeId:"JTie0S_5gjE",timestamp:"01:00:16",description:"A simple explanation"},"JTie0S_5gjE-11":{id:"JTie0S_5gjE-11",episodeId:"JTie0S_5gjE",timestamp:"01:01:40",description:'"Oh here we go"'},"JTie0S_5gjE-12":{id:"JTie0S_5gjE-12",episodeId:"JTie0S_5gjE",timestamp:"01:03:16",description:"Dragon parts"},"JTie0S_5gjE-13":{id:"JTie0S_5gjE-13",episodeId:"JTie0S_5gjE",timestamp:"01:03:49",description:"Troll dick"},"JTie0S_5gjE-14":{id:"JTie0S_5gjE-14",episodeId:"JTie0S_5gjE",timestamp:"01:05:33",description:"Grog ruins Vex's haggling/subterfuge"},"kpkCcb--r90-1":{id:"kpkCcb--r90-1",episodeId:"kpkCcb--r90",timestamp:"02:12:20",description:"Vex and Keyleth say “fuck it”."},"kGxiZNbjwGI-1":{id:"kGxiZNbjwGI-1",episodeId:"kGxiZNbjwGI",timestamp:"01:42:40",description:"Laura gets to the episode a bit late, just in time for an elaborate and extremely well-thought-out plan to go into play."},"QDdT5UqGaDw-1":{id:"QDdT5UqGaDw-1",episodeId:"QDdT5UqGaDw",timestamp:"01:23:55",description:"Grog mopes after a rough fight."},"60sUkTh6xBc-1":{id:"60sUkTh6xBc-1",episodeId:"60sUkTh6xBc",timestamp:"01:51:40",description:"Matt gets a subtle revenge after Percy absolutely wrecks shop with multiple natural twenties… while wearing buttflap pajamas."},"IW6GgFQg3kk-1":{id:"IW6GgFQg3kk-1",episodeId:"IW6GgFQg3kk",timestamp:"03:22:57",description:"Mary Elizabeth McGlynn has a helluva moment as Zahra during a particularly nasty fight in her first-ever D&D game."},"1GY3HTZE5R0-1":{id:"1GY3HTZE5R0-1",episodeId:"1GY3HTZE5R0",timestamp:"00:40:03",description:"Vex is Not Pleased."},"FM6L4tuyXq0-1":{id:"FM6L4tuyXq0-1",episodeId:"FM6L4tuyXq0",timestamp:"02:08:27",description:"Matt invents Victor the blackpowder merchant on the spot."},"kre27f30IVs-1":{id:"kre27f30IVs-1",episodeId:"kre27f30IVs",timestamp:"00:28:47",description:"The party refuses to let Percy face the Briarwoods alone."},"kre27f30IVs-2":{id:"kre27f30IVs-2",episodeId:"kre27f30IVs",timestamp:"02:34:25",description:"Vax gets revenge on Grog for tripping him several months ago."},"yrrB_q-V8G0-1":{id:"yrrB_q-V8G0-1",episodeId:"yrrB_q-V8G0",timestamp:"00:14:05",description:"Vax alone."},"yrrB_q-V8G0-2":{id:"yrrB_q-V8G0-2",episodeId:"yrrB_q-V8G0",timestamp:"00:58:49",description:"Vex charges in with the most dramatic dice rolls possible."},"_2CCQnD4AQ8-1":{id:"_2CCQnD4AQ8-1",episodeId:"_2CCQnD4AQ8",timestamp:"02:34:38",description:"“Here’s my plan… we’re all cows.”"},"yE27NwtXjPY-1":{id:"yE27NwtXjPY-1",episodeId:"yE27NwtXjPY",timestamp:"02:39:12",description:"The show takes on a distinctly different and more disturbing tone. Welcome to Whitestone."},"CVSgD1iB1G0-1":{id:"CVSgD1iB1G0-1",episodeId:"CVSgD1iB1G0",timestamp:"00:14:29",description:"[Jurassic Park theme intensifies]"},"2AqLu-u-GcY-1":{id:"2AqLu-u-GcY-1",episodeId:"2AqLu-u-GcY",timestamp:"02:07:25",description:"The sixth barrel."},"2AqLu-u-GcY-2":{id:"2AqLu-u-GcY-2",episodeId:"2AqLu-u-GcY",timestamp:"04:14:00",description:"To quote an earlier post: the walls are people and magic is dead. Everything is fine."},"WFbmY79Qdfc-1":{id:"WFbmY79Qdfc-1",episodeId:"WFbmY79Qdfc",timestamp:"00:05:23",description:"Scanlan casts a spell on Percy."},"EikRMYRf5-Y-1":{id:"EikRMYRf5-Y-1",episodeId:"EikRMYRf5-Y",timestamp:"00:49:35",description:"Percy gives Grog a sentient sword. What could go wrong?"},"EikRMYRf5-Y-2":{id:"EikRMYRf5-Y-2",episodeId:"EikRMYRf5-Y",timestamp:"00:01:25",description:"Keyleth, Scanlan, and Percy take in a magic show during the festival. They’re… still a little frazzled."},"wCj4kCq1Z9Y-1":{id:"wCj4kCq1Z9Y-1",episodeId:"wCj4kCq1Z9Y",timestamp:"01:21:10",description:"Scanlan’s flirtatious relationship with Kaylie takes a dramatic turn."},"9EToAf4nhDw-1":{id:"9EToAf4nhDw-1",episodeId:"9EToAf4nhDw",timestamp:"03:23:50",description:"Everything changes."},"0W_by9hT6VQ-1":{id:"0W_by9hT6VQ-1",episodeId:"0W_by9hT6VQ",timestamp:"01:59:07",description:"The party starts to fracture under the strain."},"L8xSI6QoT-A-1":{id:"L8xSI6QoT-A-1",episodeId:"L8xSI6QoT-A",timestamp:"02:28:18",description:"Finding Gilmore."},"L8xSI6QoT-A-2":{id:"L8xSI6QoT-A-2",episodeId:"L8xSI6QoT-A",timestamp:"02:28:18",description:"Vex’s limerick for Scanlan."},"KHsA0R_GovU-1":{id:"KHsA0R_GovU-1",episodeId:"KHsA0R_GovU",timestamp:"00:31:58",description:"Matt is DMing a room full of twelve-year-olds."},"KHsA0R_GovU-2":{id:"KHsA0R_GovU-2",episodeId:"KHsA0R_GovU",timestamp:"04:23:30",description:"Half the party’s character arcs turn on a single roll of the dice…"},"0uazTyTrk-8-1":{id:"0uazTyTrk-8-1",episodeId:"0uazTyTrk-8",timestamp:"02:30:06",description:"“I like you people, okay?”"},"QqU5pqKoH2c-1":{id:"QqU5pqKoH2c-1",episodeId:"QqU5pqKoH2c",timestamp:"00:35:00",description:"Vex seeks help with a magical artifact."},"QqU5pqKoH2c-2":{id:"QqU5pqKoH2c-2",episodeId:"QqU5pqKoH2c",timestamp:"00:53:34",description:"Vax and Grog slip into nightmares."},"1uMH-hFJz0Q-1":{id:"1uMH-hFJz0Q-1",episodeId:"1uMH-hFJz0Q",timestamp:"01:40:00",description:"Vex does some flying target practice over breakfast. Things escalate."},"PfvVssT83MU-1":{id:"PfvVssT83MU-1",episodeId:"PfvVssT83MU",timestamp:"04:12:08",description:"Grog escapes the portal in the most heartbreaking possible way."},"9g3cnEacrEo-1":{id:"9g3cnEacrEo-1",episodeId:"9g3cnEacrEo",timestamp:"00:13:00",description:"Scanlan coaches Kaylie through a distraction."},"9QXZ4LfSi84-1":{id:"9QXZ4LfSi84-1",episodeId:"9QXZ4LfSi84",timestamp:"02:30:09",description:"Unbe-fucking-lievable sequence of dice rolls."},"Nfcja-6hr24-1":{id:"Nfcja-6hr24-1",episodeId:"Nfcja-6hr24",timestamp:"01:11:00",description:"Bickering twins being bickering twins."},"A6ma5W_TSDE-1":{id:"A6ma5W_TSDE-1",episodeId:"A6ma5W_TSDE",timestamp:"01:00:00",description:"“Left.” Chills every time."},"8xpnCiF4im0-1":{id:"8xpnCiF4im0-1",episodeId:"8xpnCiF4im0",timestamp:"01:06:39",description:"Grog gets his hands on a magical artifact. Experimentation ensues."},"8xpnCiF4im0-2":{id:"8xpnCiF4im0-2",episodeId:"8xpnCiF4im0",timestamp:"03:07:50",description:"Percy and Keyleth talk about cities and lifespans. Unbelievably good improv."},"HMBS__TC5R4-1":{id:"HMBS__TC5R4-1",episodeId:"HMBS__TC5R4",timestamp:"03:25:00",description:"Chatting with trees."},"HMBS__TC5R4-2":{id:"HMBS__TC5R4-2",episodeId:"HMBS__TC5R4",timestamp:"03:38:20",description:"Vax has an unexpected late-night visitor."},"nRBzpiPccOs-1":{id:"nRBzpiPccOs-1",episodeId:"nRBzpiPccOs",timestamp:"00:51:30",description:"Scanlan to the rescue. (”I don’t do these things!”)"},"l_jwMsIv1oc-1":{id:"l_jwMsIv1oc-1",episodeId:"l_jwMsIv1oc",timestamp:"02:26:50",description:"Percy has a couple of late-night conversations after a charm wears off."},"l_jwMsIv1oc-2":{id:"l_jwMsIv1oc-2",episodeId:"l_jwMsIv1oc",timestamp:"02:35:50",description:"Pike commissions a family portrait."},"Ok4ZW9cNupc-1":{id:"Ok4ZW9cNupc-1",episodeId:"Ok4ZW9cNupc",timestamp:"02:06:30",description:"Vox Machina is a close-knit group."},"ir5UUH1VeD4-1":{id:"ir5UUH1VeD4-1",episodeId:"ir5UUH1VeD4",timestamp:"02:53:00",description:"Saundor and Vex. Link is to the fixed audio, because the background music times up perfectly and it’s a little uncanny."},"yqJdHshftrs-1":{id:"yqJdHshftrs-1",episodeId:"yqJdHshftrs",timestamp:"03:42:40",description:"A belated discovery and farewell."},"6-Od2lnsiHs-1":{id:"6-Od2lnsiHs-1",episodeId:"6-Od2lnsiHs",timestamp:"01:35:09",description:"The perils of mist-walking in a desert environment."},"6-Od2lnsiHs-2":{id:"6-Od2lnsiHs-2",episodeId:"6-Od2lnsiHs",timestamp:"03:04:40",description:"Scanlan looks for someone to help him out with a drug deal."},"Z7ozVxDtJzM-1":{id:"Z7ozVxDtJzM-1",episodeId:"Z7ozVxDtJzM",timestamp:"02:51:50",description:"Keyleth, the airship, and the storm."},"RCnwjLK_ZuQ-1":{id:"RCnwjLK_ZuQ-1",episodeId:"RCnwjLK_ZuQ",timestamp:"01:32:52",description:"Scanlan and the Onyx Dog."},"YLcRhm8UP8g-1":{id:"YLcRhm8UP8g-1",episodeId:"YLcRhm8UP8g",timestamp:"01:58:20",description:"A letter for Keyleth."},"YLcRhm8UP8g-2":{id:"YLcRhm8UP8g-2",episodeId:"YLcRhm8UP8g",timestamp:"02:44:20",description:"An ominous meeting."},"-I_tnzBKSWk-1":{id:"-I_tnzBKSWk-1",episodeId:"-I_tnzBKSWk",timestamp:"02:24:57",description:"“I sing at it.”"},"qn8tLbXWAtc-1":{id:"qn8tLbXWAtc-1",episodeId:"qn8tLbXWAtc",timestamp:"02:57:20",description:"Vex and Percy talk about forgiveness."},"2U21dJrY6ZI-1":{id:"2U21dJrY6ZI-1",episodeId:"2U21dJrY6ZI",timestamp:"03:27:00",description:"Cenokir introduces himself. Things get a little weird."},"Qz-twLRAE_A-1":{id:"Qz-twLRAE_A-1",episodeId:"Qz-twLRAE_A",timestamp:"02:56:00",description:"Pike teaches Grog to read."},"L4Sb53wvbKI-1":{id:"L4Sb53wvbKI-1",episodeId:"L4Sb53wvbKI",timestamp:"02:38:15",description:"“I’m so amazing!”"},"tEnHX2XiGaQ-1":{id:"tEnHX2XiGaQ-1",episodeId:"tEnHX2XiGaQ",timestamp:"01:16:10",description:"Kashaw the strategist."},"um3mkvNmDPY-1":{id:"um3mkvNmDPY-1",episodeId:"um3mkvNmDPY",timestamp:"01:07:30",description:"Grog finds a famous (infamous) D&D magical item."}}},function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function d(e,i){var t=(0,m.parseTimestamp)(e.timestamp),o=(0,m.parseTimestamp)(i.timestamp),d=3600*t.h+60*t.m+t.s,s=3600*o.h+60*o.m+o.s;return d===s?0:d>s?1:-1}function s(e,i){var t=document.createElement("li");t.classList.add(l.default.moment);var o=document.createElement("span");o.classList.add(l.default.momentText),o.innerHTML='<span class="'+l.default.momentTimestamp+'">\n      ['+(0,m.padTimestamp)(i.timestamp)+"]\n    </span>"+i.description,t.appendChild(o);var d=void 0,s=void 0,r=void 0;return s=function(){var s=t.getBoundingClientRect().width;d=t.appendChild((0,p.ytElement)(e,i,s)),o.onclick=function(){return r()}},r=function(){d&&d.remove(),d=null,o.onclick=function(){return s()}},o.onclick=function(){return s()},t.search=function(e){return i.description.toLowerCase().includes(e.toLowerCase())?(t.classList.remove(l.default.searchHidden),1):(t.classList.add(l.default.searchHidden),r(),0)},t}function r(e){var i=document.createElement("ul");i.classList.add(l.default.moments);var t=[];return Object.values(n.default).filter(function(i){return i.episodeId===e.id}).sort(d).forEach(function(o){return t.push(i.appendChild(s(e,o)))}),i.search=function(e){var i=0;return t.forEach(function(t){return i+=t.search(e),null}),i},i}Object.defineProperty(i,"__esModule",{value:!0}),i.momentElement=s,i.momentsElement=r;var a=t(4),n=o(a),c=t(0),l=o(c),p=t(6),m=t(1)},function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function d(e,i,t){var o=document.createElement("iframe"),d=(0,a.parseTimestamp)(i.timestamp),s="https://www.youtube.com/embed/"+e.videoId+("?start="+(3600*d.h+60*d.m+d.s))+"&autoplay=1",n=15,c=t-2*n;return o.classList.add(r.default.ytPlayer),o.setAttribute("type","text/html"),o.setAttribute("src",s),o.setAttribute("width",c+"px"),o.setAttribute("height",c*(9/16)+"px"),o.setAttribute("frameborder",0),o.setAttribute("allowfullscreen",!0),o.setAttribute("style","padding: "+n+"px;"),o}Object.defineProperty(i,"__esModule",{value:!0}),i.ytElement=d;var s=t(0),r=o(s),a=t(1)},function(e,i,t){i=e.exports=t(8)(),i.push([e.i,"._2HTI_kYmR2dsu8bStQwzHI{display:flex;flex-direction:column}._2o5Kkjf6eLZD8AFF1EnOS_{display:flex;flex-direction:row;justify-content:flex-end}._2LXylaJL1CdrN6U9dKpSIb{margin-left:.5em;margin-right:.5em;cursor:pointer}.zworI8JyQZBdOxFFIgLUI{color:#4682b4}.zworI8JyQZBdOxFFIgLUI h3{cursor:pointer;display:inline-block;margin-top:.1em;margin-bottom:.1em}._3H3-5aB-PcNPMIkp-aGc4d{list-style:none;padding:0}._2mjjdgVWTeYM9L9UvG5Ue6{margin-top:.05em;margin-bottom:.05em}._3Ok9pln26bjwGI5DKp_24x{cursor:pointer;display:inline}._2aK18mYdW61-OpkHeCXMsT{font-family:Droid Sans Mono,monospace;font-size:.9em;margin:0 15px}._1QYxP-Fkh2BcKJjVq0b4xc,._3DPOwkUfcmR3WD25V5oOrb{display:none}._2OYzltUU_7VoW9UNsNyT3Z{cursor:pointer}",""]),i.locals={episodes:"_2HTI_kYmR2dsu8bStQwzHI",episodesControls:"_2o5Kkjf6eLZD8AFF1EnOS_",episodesControl:"_2LXylaJL1CdrN6U9dKpSIb",episode:"zworI8JyQZBdOxFFIgLUI",moments:"_3H3-5aB-PcNPMIkp-aGc4d",moment:"_2mjjdgVWTeYM9L9UvG5Ue6",momentText:"_3Ok9pln26bjwGI5DKp_24x",momentTimestamp:"_2aK18mYdW61-OpkHeCXMsT",hidden:"_1QYxP-Fkh2BcKJjVq0b4xc",searchHidden:"_3DPOwkUfcmR3WD25V5oOrb",clickable:"_2OYzltUU_7VoW9UNsNyT3Z"}},function(e,i){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],i=0;i<this.length;i++){var t=this[i];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(i,t){"string"==typeof i&&(i=[[null,i,""]]);for(var o={},d=0;d<this.length;d++){var s=this[d][0];"number"==typeof s&&(o[s]=!0)}for(d=0;d<i.length;d++){var r=i[d];"number"==typeof r[0]&&o[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),e.push(r))}},e}},function(e,i){function t(e,i){for(var t=0;t<e.length;t++){var o=e[t],d=m[o.id];if(d){d.refs++;for(var s=0;s<d.parts.length;s++)d.parts[s](o.parts[s]);for(;s<o.parts.length;s++)d.parts.push(n(o.parts[s],i))}else{for(var r=[],s=0;s<o.parts.length;s++)r.push(n(o.parts[s],i));m[o.id]={id:o.id,refs:1,parts:r}}}}function o(e){for(var i=[],t={},o=0;o<e.length;o++){var d=e[o],s=d[0],r=d[1],a=d[2],n=d[3],c={css:r,media:a,sourceMap:n};t[s]?t[s].parts.push(c):i.push(t[s]={id:s,parts:[c]})}return i}function d(e,i){var t=g(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(i,o.nextSibling):t.appendChild(i):t.insertBefore(i,t.firstChild),v.push(i);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(i)}}function s(e){e.parentNode.removeChild(e);var i=v.indexOf(e);i>=0&&v.splice(i,1)}function r(e){var i=document.createElement("style");return i.type="text/css",d(e,i),i}function a(e){var i=document.createElement("link");return i.rel="stylesheet",d(e,i),i}function n(e,i){var t,o,d;if(i.singleton){var n=I++;t=f||(f=r(i)),o=c.bind(null,t,n,!1),d=c.bind(null,t,n,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=a(i),o=p.bind(null,t),d=function(){s(t),t.href&&URL.revokeObjectURL(t.href)}):(t=r(i),o=l.bind(null,t),d=function(){s(t)});return o(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;o(e=i)}else d()}}function c(e,i,t,o){var d=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(i,d);else{var s=document.createTextNode(d),r=e.childNodes;r[i]&&e.removeChild(r[i]),r.length?e.insertBefore(s,r[i]):e.appendChild(s)}}function l(e,i){var t=i.css,o=i.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function p(e,i){var t=i.css,o=i.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var d=new Blob([t],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(d),s&&URL.revokeObjectURL(s)}var m={},u=function(e){var i;return function(){return"undefined"==typeof i&&(i=e.apply(this,arguments)),i}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=u(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,I=0,v=[];e.exports=function(e,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");i=i||{},"undefined"==typeof i.singleton&&(i.singleton=h()),"undefined"==typeof i.insertAt&&(i.insertAt="bottom");var d=o(e);return t(d,i),function(e){for(var s=[],r=0;r<d.length;r++){var a=d[r],n=m[a.id];n.refs--,s.push(n)}if(e){var c=o(e);t(c,i)}for(var r=0;r<s.length;r++){var n=s[r];if(0===n.refs){for(var l=0;l<n.parts.length;l++)n.parts[l]();delete m[n.id]}}}};var y=function(){var e=[];return function(i,t){return e[i]=t,e.filter(Boolean).join("\n")}}()},function(e,i,t){"use strict";function o(){var e=document.getElementById("root");e.innerHTML="",e.appendChild((0,d.episodesElement)())}var d=t(2);document.addEventListener("DOMContentLoaded",o)}]);
var Wg=Object.defineProperty;var Gg=(n,e,t)=>e in n?Wg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var A=(n,e,t)=>Gg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Kg={vault:{name:"The Banda–Chama Family Archive",description:"Letters, photographs, recipes and voices following one family from the railway years to the present day.",ownerId:"demo",memberIds:["samuel","beatrice","martha","joseph","agnes","edward","ruth","daniel","chungu","tapiwa","linda","miles","nandi","malia","theo"],coverImageUrl:null,createdAt:null,updatedAt:null},members:[{id:"samuel",fullName:"Samuel Banda",relationship:"Root ancestor · teacher",parentId:null,birthYear:1897,deathYear:1964,portraitUrl:null,notes:"A railway clerk turned village teacher who saved every letter he received in a blue tin trunk.",createdAt:null,updatedAt:null},{id:"beatrice",fullName:"Beatrice Phiri Banda",relationship:"Root ancestor · seamstress",parentId:null,birthYear:1901,deathYear:1982,portraitUrl:null,notes:"Samuel’s wife. Her embroidered tablecloth became the quiet centrepiece of family celebrations.",createdAt:null,updatedAt:null},{id:"martha",fullName:"Martha Banda Chama",relationship:"Daughter · gardener",parentId:"samuel",birthYear:1921,deathYear:2008,portraitUrl:null,notes:"Known for an open door, a formidable garden, and Sunday lunches that lasted until dusk.",createdAt:null,updatedAt:null},{id:"joseph",fullName:"Joseph Banda",relationship:"Son · surveyor",parentId:"samuel",birthYear:1924,deathYear:1999,portraitUrl:null,notes:"He carried the family archive across borders and recorded every journey in small field notebooks.",createdAt:null,updatedAt:null},{id:"agnes",fullName:"Agnes Banda Mwila",relationship:"Daughter · nurse",parentId:"samuel",birthYear:1928,deathYear:2011,portraitUrl:null,notes:"The family’s first nurse, remembered for writing practical advice in the margins of recipe books.",createdAt:null,updatedAt:null},{id:"edward",fullName:"Edward Chama",relationship:"Martha’s husband · mechanic",parentId:null,birthYear:1919,deathYear:1991,portraitUrl:null,notes:"A patient mechanic who taught every child how to listen for the rhythm of an engine.",createdAt:null,updatedAt:null},{id:"ruth",fullName:"Ruth Banda",relationship:"Joseph’s daughter · archivist",parentId:"joseph",birthYear:1953,deathYear:null,portraitUrl:null,notes:"The first person to label the old trunks and begin the archive’s catalogue.",createdAt:null,updatedAt:null},{id:"daniel",fullName:"Daniel Chama",relationship:"Martha’s son · radio producer",parentId:"martha",birthYear:1956,deathYear:2019,portraitUrl:null,notes:"Collected cassette interviews with relatives whenever he travelled home.",createdAt:null,updatedAt:null},{id:"chungu",fullName:"Chungu Chama",relationship:"Grandson · archive steward",parentId:"martha",birthYear:1978,deathYear:null,portraitUrl:null,notes:"Digitised the blue trunk after discovering Samuel’s first school letter tucked inside a geography book.",createdAt:null,updatedAt:null},{id:"tapiwa",fullName:"Tapiwa Banda",relationship:"Cousin · oral historian",parentId:"ruth",birthYear:1988,deathYear:null,portraitUrl:null,notes:"Travels with a small recorder and a list of questions left unanswered by the photographs.",createdAt:null,updatedAt:null},{id:"linda",fullName:"Linda Chama",relationship:"Daughter · filmmaker",parentId:"chungu",birthYear:2004,deathYear:null,portraitUrl:null,notes:"Makes short films that turn the archive’s fragments into stories for her generation.",createdAt:null,updatedAt:null},{id:"miles",fullName:"Miles Chama",relationship:"Son · mapmaker",parentId:"chungu",birthYear:2008,deathYear:null,portraitUrl:null,notes:"Draws maps of every family journey and marks the places where someone left a story behind.",createdAt:null,updatedAt:null},{id:"nandi",fullName:"Nandi Mwila",relationship:"Agnes’s granddaughter · chef",parentId:"agnes",birthYear:1992,deathYear:null,portraitUrl:null,notes:"Recreated Beatrice’s recipes from faded measurements and memory.",createdAt:null,updatedAt:null},{id:"malia",fullName:"Malia Banda",relationship:"Tapiwa’s daughter · student",parentId:"tapiwa",birthYear:2015,deathYear:null,portraitUrl:null,notes:"The youngest keeper of the family questions, always asking who is missing from the photographs.",createdAt:null,updatedAt:null},{id:"theo",fullName:"Theo Chama",relationship:"Linda’s son · newest branch",parentId:"linda",birthYear:2025,deathYear:null,portraitUrl:null,notes:"Born into an archive already waiting to introduce him to the people who came before.",createdAt:null,updatedAt:null}],memories:[{id:"railway-postcard",title:"A postcard from the railway",description:"Samuel’s first known note home: three hurried lines about the smell of rain on the platform and a promise to bring back a proper atlas.",type:"letter",assetUrl:"",thumbnailUrl:null,year:1912,dateLabel:"November 1912",location:"Livingstone, Zambia",familyMemberIds:["samuel"],tags:["railway","postcard","beginnings"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"school-letter",title:"Samuel’s first school letter",description:"Written from his first teaching post, Samuel describes the books he hopes every child in the village will one day be able to borrow.",type:"letter",assetUrl:"",thumbnailUrl:null,year:1920,dateLabel:"May 1920",location:"Mongu, Zambia",familyMemberIds:["samuel"],tags:["education","letter","books"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"wedding-portrait",title:"Samuel and Beatrice, beneath the jacaranda",description:"A formal portrait softened by Beatrice’s almost-smile and the petals caught in the corner of the frame.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1922,dateLabel:"September 1922",location:"Kabwe, Zambia",familyMemberIds:["samuel","beatrice"],tags:["wedding","portrait","jacaranda"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"blue-trunk-inventory",title:"The blue trunk inventory",description:"Beatrice’s careful list of what went into the trunk before the family moved: letters, an atlas, two school slates, and a hand-cranked radio.",type:"document",assetUrl:"",thumbnailUrl:null,year:1935,dateLabel:"February 1935",location:"Kabwe, Zambia",familyMemberIds:["beatrice","samuel","martha","joseph"],tags:["migration","inventory","archive"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"market-day",title:"Market day, copper light",description:"Martha and Agnes stand shoulder to shoulder at the market, each holding a basket and a secret they refused to tell the photographer.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1943,dateLabel:"July 1943",location:"Ndola, Zambia",familyMemberIds:["martha","agnes"],tags:["sisters","market","photograph"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"edwards-radio",title:"Edward’s radio repair book",description:"A grease-marked notebook with circuits, jokes, and a note in the back: ‘Martha sings when she thinks no one is listening.’",type:"document",assetUrl:"",thumbnailUrl:null,year:1948,dateLabel:"1948",location:"Lusaka, Zambia",familyMemberIds:["edward","martha"],tags:["radio","love","notebook"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"first-lunch",title:"The first Sunday table",description:"The table is crowded with enamel plates, cousins, and Beatrice’s embroidered cloth—an ordinary afternoon that became a family ritual.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1951,dateLabel:"August 1951",location:"Lusaka, Zambia",familyMemberIds:["beatrice","martha","joseph","agnes","edward"],tags:["Sunday lunch","food","family gathering"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"ruths-catalogue",title:"Ruth labels the trunks",description:"Ruth’s catalogue cards give the archive its first order, beginning with ‘Letters that make people laugh’ and ending with ‘Things we still need to ask.’",type:"document",assetUrl:"",thumbnailUrl:null,year:1961,dateLabel:"January 1961",location:"Harare, Zimbabwe",familyMemberIds:["ruth","joseph"],tags:["catalogue","archive","questions"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"passport",title:"Joseph’s passport, stamped in motion",description:"A stamped passport documenting a journey through Harare and Bulawayo, carrying news, photographs, and a new address for the family.",type:"document",assetUrl:"",thumbnailUrl:null,year:1967,dateLabel:"March 1967",location:"Harare, Zimbabwe",familyMemberIds:["joseph","ruth"],tags:["journey","passport","migration"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"fair-photograph",title:"The county fair photograph",description:"Arthur is absent from the frame, but Daniel’s caption identifies every face and says this was the day the children ‘learned to be loud.’",type:"photo",assetUrl:"",thumbnailUrl:null,year:1972,dateLabel:"October 1972",location:"Kabwe, Zambia",familyMemberIds:["daniel","martha","joseph","ruth"],tags:["fair","caption","children"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"garden-audio",title:"Martha’s garden, recorded at dusk",description:"On cassette, Martha names every plant in her garden, then pauses to explain that a family grows the same way: slowly, by being tended.",type:"audio",assetUrl:"",thumbnailUrl:null,year:1984,dateLabel:"October 1984",location:"Ndola, Zambia",familyMemberIds:["martha","daniel","chungu"],tags:["audio","garden","wisdom"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"recipe-card",title:"Beatrice’s impossible recipe",description:"Nandi deciphers a recipe card that says only ‘enough flour’ and ‘stir until the house smells right.’ The final line reads: ‘Make extra for neighbours.’",type:"letter",assetUrl:"",thumbnailUrl:null,year:1988,dateLabel:"Copied in 1988",location:"Kitwe, Zambia",familyMemberIds:["beatrice","nandi","agnes"],tags:["recipe","food","inheritance"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"voice-of-daniel",title:"Daniel asks the room to remember",description:"A living-room recording where Daniel interviews Joseph about the move, the missing suitcase, and the song everyone knew but nobody could finish.",type:"audio",assetUrl:"",thumbnailUrl:null,year:1993,dateLabel:"December 1993",location:"Lusaka, Zambia",familyMemberIds:["daniel","joseph","ruth","chungu"],tags:["oral history","cassette","migration"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"last-lunch",title:"Martha’s last long lunch",description:"No one knew it would be the last table with everyone present. The photograph holds four generations and three different versions of the same joke.",type:"photo",assetUrl:"",thumbnailUrl:null,year:2007,dateLabel:"December 2007",location:"Lusaka, Zambia",familyMemberIds:["martha","chungu","tapiwa","linda","nandi"],tags:["Sunday lunch","four generations","remembrance"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"blue-trunk-scan",title:"The blue trunk opens again",description:"Chungu photographs the blue trunk before scanning its contents. Beneath a school slate lies Samuel’s 1912 postcard, still sharp with rainwater stains.",type:"photo",assetUrl:"",thumbnailUrl:null,year:2014,dateLabel:"April 2014",location:"Lusaka, Zambia",familyMemberIds:["chungu","linda","miles"],tags:["digitisation","blue trunk","archive"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"malia-questions",title:"Malia’s list of questions",description:"At seven, Malia writes down the questions the photographs cannot answer: Who took this? Why were they laughing? Where did the blue trunk sleep?",type:"document",assetUrl:"",thumbnailUrl:null,year:2022,dateLabel:"November 2022",location:"Livingstone, Zambia",familyMemberIds:["malia","tapiwa"],tags:["questions","children","future"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"oral-history",title:"Tapiwa’s walking interview",description:"Tapiwa and Ruth walk the old road in Livingstone while comparing family stories to the places where they happened, recording the gaps as carefully as the answers.",type:"audio",assetUrl:"",thumbnailUrl:null,year:2023,dateLabel:"May 2023",location:"Livingstone, Zambia",familyMemberIds:["tapiwa","ruth","malia"],tags:["oral history","walking interview","place"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"lindas-film",title:"Linda’s film premiere",description:"Linda screens a six-minute film built from the archive’s letters, cassettes, and Sunday-table photographs. Theo sleeps through the applause.",type:"video",assetUrl:"",thumbnailUrl:null,year:2025,dateLabel:"February 2025",location:"Lusaka, Zambia",familyMemberIds:["linda","chungu","theo","miles"],tags:["film","premiere","next generation"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"atlas-drawing",title:"Miles maps the family routes",description:"Miles layers railway lines, garden paths, border crossings, and home addresses into one hand-drawn map titled ‘How we kept finding each other.’",type:"document",assetUrl:"",thumbnailUrl:null,year:2026,dateLabel:"January 2026",location:"Lusaka, Zambia",familyMemberIds:["miles","chungu","linda"],tags:["map","routes","future"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null}],stories:[{id:"roots",title:"The blue trunk and the promise of books",excerpt:"How a rain-stained postcard became the first page of a family archive.",body:"Samuel began saving letters because distance made details precious. More than a century later, the same small trunk teaches his descendants that an archive is not a room full of objects; it is a promise to keep asking what mattered.",memoryIds:["railway-postcard","school-letter","blue-trunk-inventory","blue-trunk-scan"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"table",title:"A table large enough for everyone",excerpt:"Beatrice’s cloth, Martha’s cooking, and the ritual that taught the family how to return.",body:"The Sunday table was never about the food alone. It was the place where news became story, grief was given room, and children learned the names of people they had not yet met. Every generation added a chair.",memoryIds:["first-lunch","garden-audio","recipe-card","last-lunch"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"routes",title:"Routes, stamps, and borrowed roads",excerpt:"A family in motion across Zambia and Zimbabwe, carrying its own evidence home.",body:"Joseph’s passport and Daniel’s tapes reveal a family moving for work, care, and opportunity without losing the habit of writing home. Their routes are the lines that later became Miles’s map.",memoryIds:["ruths-catalogue","passport","voice-of-daniel","oral-history","atlas-drawing"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"voices",title:"The people speaking between the photographs",excerpt:"Cassette tapes restore the humour, rhythm, and unfinished questions missing from the still images.",body:"A photograph can show who was in the room. The voices explain why someone stayed late, who sang badly, and which story changes every time it is told. The archive becomes intimate when it can answer back.",memoryIds:["garden-audio","voice-of-daniel","malia-questions","oral-history"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"future",title:"The next keepers",excerpt:"Linda, Miles, Malia, and Theo inherit not just memories, but a living invitation to add their own.",body:"The archive reaches forward as much as it reaches back. In a film premiere, a child’s questions, and a map drawn for someone too young to read it, the family makes room for the stories that have not happened yet.",memoryIds:["malia-questions","lindas-film","atlas-drawing"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null}]},wp="heritage-vault:archive:v2",Qg="archive:changed";function Gs(n){return`${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function hn(){return Date.now()}function Tt(n){return JSON.parse(JSON.stringify(n))}function Jh(){const n=Tt(Kg),e=hn();return{vault:n.vault,members:n.members.map(t=>({...t,createdAt:e,updatedAt:e})),memories:n.memories.map(t=>({...t,createdAt:e,updatedAt:e})),stories:n.stories.map(t=>({...t,createdAt:e,updatedAt:e})),activities:[],invitations:[]}}function Yg(){try{const n=localStorage.getItem(wp);if(!n)return null;const e=JSON.parse(n);return!e||!Array.isArray(e.members)?null:(e.activities||(e.activities=[]),e.invitations||(e.invitations=[]),e)}catch{return null}}function Il(n){try{localStorage.setItem(wp,JSON.stringify(n))}catch(e){console.warn("[archive-store] save failed",e)}}async function ln(n,e,t){try{const r=await fetch(`/api/${n}`,{method:e,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});r.ok||console.warn(`[archive-store] ClickHouse sync ${e} /api/${n} → ${r.status}`)}catch{}}class Xg{constructor(){A(this,"snapshot");A(this,"listeners",new Set);this.snapshot=Yg()??Jh(),Il(this.snapshot)}getSnapshot(){return Tt(this.snapshot)}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}resetToSeed(){return this.snapshot=Jh(),Il(this.snapshot),this.emit("all"),this.getSnapshot()}emit(e){Il(this.snapshot);const t=this.getSnapshot();if(typeof window<"u"){const r=new CustomEvent(Qg,{detail:{kind:e,snapshot:t}});window.dispatchEvent(r)}this.listeners.forEach(r=>r(t))}recordActivity(e,t,r){const s={id:Gs("activity"),actorId:"you",type:e,targetId:t,message:r,createdAt:hn()};this.snapshot.activities.unshift(s),this.snapshot.activities.length>50&&(this.snapshot.activities=this.snapshot.activities.slice(0,50))}listMemories(){return this.snapshot.memories.filter(e=>!e.archived).slice().sort((e,t)=>(t.year??0)-(e.year??0))}getMemory(e){return this.snapshot.memories.find(t=>t.id===e)??null}createMemory(e){const t=hn(),r={id:Gs("memory"),title:e.title||"Untitled memory",description:e.description||"",type:e.type||"document",assetUrl:e.assetUrl||"",thumbnailUrl:e.thumbnailUrl??null,year:e.year??null,dateLabel:e.dateLabel??null,location:e.location??null,familyMemberIds:e.familyMemberIds??[],tags:e.tags??[],archived:e.archived??!1,createdBy:e.createdBy??"you",createdAt:t,updatedAt:t};return this.snapshot.memories.push(r),this.recordActivity("memory_created",r.id,`Added “${r.title}” to the archive.`),ln("memories","POST",r),this.emit("memories"),Tt(r)}updateMemory(e,t){const r=this.snapshot.memories.findIndex(i=>i.id===e);if(r===-1)return null;const s={...this.snapshot.memories[r],...t,id:e,updatedAt:hn()};return this.snapshot.memories[r]=s,this.recordActivity("memory_updated",e,`Updated “${s.title}”.`),ln("memories","PUT",s),this.emit("memories"),Tt(s)}deleteMemory(e){const t=this.snapshot.memories.findIndex(s=>s.id===e);if(t===-1)return!1;const[r]=this.snapshot.memories.splice(t,1);return this.recordActivity("memory_updated",e,`Removed “${r.title}” from the archive.`),ln("memories","DELETE",{id:e}),this.emit("memories"),!0}listMembers(){return Tt(this.snapshot.members)}getMember(e){return this.snapshot.members.find(t=>t.id===e)??null}createMember(e){const t=hn(),r={id:Gs("member"),fullName:e.fullName||"Unnamed relative",relationship:e.relationship??null,parentId:e.parentId??null,birthYear:e.birthYear??null,deathYear:e.deathYear??null,portraitUrl:e.portraitUrl??null,notes:e.notes??"",createdAt:t,updatedAt:t};return this.snapshot.members.push(r),this.snapshot.vault.memberIds.push(r.id),this.recordActivity("member_added",r.id,`Added ${r.fullName} to the family map.`),ln("family-members","POST",r),this.emit("members"),Tt(r)}updateMember(e,t){const r=this.snapshot.members.findIndex(i=>i.id===e);if(r===-1)return null;const s={...this.snapshot.members[r],...t,id:e,updatedAt:hn()};return this.snapshot.members[r]=s,this.recordActivity("member_added",e,`Updated ${s.fullName}’s profile.`),ln("family-members","PUT",s),this.emit("members"),Tt(s)}deleteMember(e){const t=this.snapshot.members.findIndex(s=>s.id===e);if(t===-1)return!1;const[r]=this.snapshot.members.splice(t,1);return this.snapshot.members.forEach(s=>{s.parentId===e&&(s.parentId=null)}),this.snapshot.vault.memberIds=this.snapshot.vault.memberIds.filter(s=>s!==e),this.recordActivity("member_added",e,`Removed ${r.fullName} from the family map.`),ln("family-members","DELETE",{id:e}),this.emit("members"),!0}listStories(){return Tt(this.snapshot.stories)}getStory(e){return this.snapshot.stories.find(t=>t.id===e)??null}createStory(e){const t=hn(),r={id:Gs("story"),title:e.title||"Untitled chapter",excerpt:e.excerpt||"",body:e.body||"",memoryIds:e.memoryIds??[],status:e.status??"draft",createdBy:e.createdBy??"you",createdAt:t,updatedAt:t};return this.snapshot.stories.push(r),this.recordActivity("story_created",r.id,`Started a new chapter: “${r.title}”.`),ln("stories","POST",r),this.emit("stories"),Tt(r)}updateStory(e,t){const r=this.snapshot.stories.findIndex(i=>i.id===e);if(r===-1)return null;const s={...this.snapshot.stories[r],...t,id:e,updatedAt:hn()};return this.snapshot.stories[r]=s,this.recordActivity("story_created",e,`Updated “${s.title}”.`),ln("stories","PUT",s),this.emit("stories"),Tt(s)}deleteStory(e){const t=this.snapshot.stories.findIndex(s=>s.id===e);if(t===-1)return!1;const[r]=this.snapshot.stories.splice(t,1);return this.recordActivity("story_created",e,`Removed the chapter “${r.title}”.`),ln("stories","DELETE",{id:e}),this.emit("stories"),!0}listActivities(e=20){return this.snapshot.activities.slice(0,e)}listInvitations(){return Tt(this.snapshot.invitations)}createInvitation(e,t=""){const r={id:Gs("invite"),email:e,message:t,status:"pending",createdAt:hn()};return this.snapshot.invitations.unshift(r),this.recordActivity("vault_updated",r.id,`Invited ${e} to join the vault.`),this.emit("invitations"),Tt(r)}updateInvitation(e,t){const r=this.snapshot.invitations.findIndex(s=>s.id===e);return r===-1?null:(this.snapshot.invitations[r]={...this.snapshot.invitations[r],...t,id:e},this.emit("invitations"),Tt(this.snapshot.invitations[r]))}deleteInvitation(e){const t=this.snapshot.invitations.findIndex(r=>r.id===e);return t===-1?!1:(this.snapshot.invitations.splice(t,1),this.emit("invitations"),!0)}}const ce=new Xg;function Rc(n){return ce.subscribe(n)}const Jg=[{view:"vault",href:"#vault",icon:"inventory_2",label:"The Vault"},{view:"family-map",href:"#family-map",icon:"account_tree",label:"Family Map"},{view:"story-mode",href:"#story-mode",icon:"auto_stories",label:"Story Mode"},{view:"agent",href:"#agent",icon:"smart_toy",label:"Agent"}],Zg=n=>{const e=document.createElement("span");return e.textContent=n,e.innerHTML};function _i(n){const{activeView:e}=n;return`
    <aside class="hv-unified-sidebar" data-sidebar aria-label="HeritageAtlas navigation">
      <div class="hv-unified-sidebar__drag-handle" data-sidebar-toggle aria-label="Drag to collapse sidebar" role="button" tabindex="0">
        <span class="material-symbols-outlined hv-unified-sidebar__drag-icon">chevron_left</span>
      </div>
      <div class="hv-unified-sidebar__brand">
        <a href="#vault" data-dashboard-view="vault" aria-label="HeritageAtlas home">
          <img data-brand-logo class="brand-logo brand-logo--compact" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBAAAADgCAYAAAC6uJX6AAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR4nOydCZgU1bm/C0xu/slNbm7uzXpjYgLT59QMzNJ1eoZlNnYQugdQZwY3XEEjigs4gyvugoKACghC3PddjPsOsigC7opxSTRq3Pcd6v981d1DT08vVd3nVFV3/97n+Z5HmZmqU6dOnap665zvaBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKDAaG1t3amhpaGiaULTbo0TGmc1TGi4pGFC/WMNE+qfbmxpeKVxfMOHjS0N3zSObzDj0ZAYLRT1KaOeIpIcg3vE4HC6GBSNcdEYlCnGDuyKgali18QYYMWAxBiTFKMHfFM3uu7DAaPrXqkdXft03Zi6x2pH1/61dlTtrNDo0G4DRgwop7rz+vwBAAAAAAAAAADKaNitoU/ThIapjeMbr28a3/hB04RGs7ErGqKRIAzSy4N6B/KgpziozyYO7MiDBHGQXR4MsCcPuqLOrIvH6J5RO7r2s7pRdffVjqrtHDBqgNBma73RbAEAAAAAAAAAFDRDdxu0S9PEhs7G8Y1/J2EQj0ab8sDRqIMWCaMOwi6MOtg1N3GQJBHM2lGxGFn7z9DI0Jza4bXM6/MNAAAAAAAAAADYRkwVP2yaWD+5cWLD2qaJO6SBUnlQKFMWZMiDuDhIFSNrHwuNDu3b3Nz8AzRZAAAAAAAAAAC+pKK14j8scTChYaslDjLKAydTFnwgD8YqyHcgWx7skAimGBF6LTQidOTAgQN/7HW7AAAAAAAAAAAA4vRqmlB/YNOEhre6xIE0eVDM+Q7q5MqDkdEIWRGyQowUb4qRYj86R2iuAAAAAAAAAAA8o2H3hqqmCY1r7IkD5DvIO99BBnmQKA5SxGoxQlTiUgEAAAAAAAAA4Cpjxoz5UeOExnmNExu+c10eIN+BM3kwoiu+NUaE5tJUE1wuAAAAAAAAAACUM3S3obs0Tmhc100ceDJlAfkOHMgDyosQjeFioxgq+uJSAQAAAAAAAACgjIbxDROaJjZ+KF0etJRQvoMsUxbqbE5ZyEkejBBWGMONT4LDg+24VAAAAAAAAAAASKdxYuMp9sUB8h14mO8grTjoiuFdcRIuFQAAAAAAAAAAUmhtbd2pcWLjEk/kAfId5JrvwI48sCI4XFyozdZ643IBAAAAAAAAAJBXssSmCY03eJ/vIMWUhUi6KQuDHUxZ6D5tgaYo7DtlDyt6TlkY6GDKgsORB27Ig+E9w4hFcJi4DskVAQAAAAAAAADkxmytd+PExutLLd/BdSvPM69dMd+H+Q5CSuRBNAwzODR4C402weUCAAAAAAAAAMARjRMaFxVkvoNs4iBJHiQmSGyMNJgfbV5jfrxljfXfaUcd+CXfQQ5TFpLFgTEsIYYaS3GZAAAAAAAAAACwTePExlNLMd/BSSdNN82Xt1hx0onT1cmDUT6UB7EIDg2eiEsFAAAAAAAAAEBWGiY27FEq+Q4So3lCs/nquvu6BMIra+8zm8c3FV2+g0zywBIIw4ztwaHB3XCpAAAAAAAAAABIy9AJg/s2Tmj4uFTyHSTGkbP+Ym7burlLIGx7ebN51KzDijLfQQZ5EI2hxkdVjVV/xqUCAAAAAAAAACD1igsTGzeWSr6D5FUWbr5iaZc8iMdNVy4t3nwHqcRBVB7QNAYzOCT4OFZmAAAAAAAAAADQg8YJDfNsyYPxxZHvIHmJxn9teKCHQHjr8QcLY8qCDHkwNEEexKJmaM1cXCoAAAAAAAAAALpontjcv2lC47f+znfgZMqCM3lw4KHtPeRBPA44pN3f8mC4GnkQEwjfBYcFq3CpAAAAAAAAAAAgejVNbHw4lykLhZrvYIc8iK6ycPOli9IKhJsuWeSjfAfCNXnQJRGG1KymNoJLBQAAAAAAAABKnKYJ9QeWWr6DRHnQ2NJgfvrU2rQC4bOn15lNkfrizneQShxY8iAa1c3BfbxupwAAAAAAAAAAvE6cOKHxX6WW7yAuDyhB4oknHp5WHsTjhOOnFX2+g3TyIBZvIKEiAAAAAAAAAJQwzRMa/uJpvgPXpyx0lwcU61ddnVUgrLv9qvzlwUh/5zvIIA9oGoNZ3Vw9xev2CgAAAAAAAADAA8RU8cOmCQ2v+nbKQtjZqAO7+Q4S5UF40mhz20ubswqEbVs3mZFJY3yc78CQlO8gtTywornmlebm5h940VYBAAAAAAAAAHhIU0v9ZN/KA4VTFhJj6YJTs8qDeCyeP7sk8h30EAcJUd1cjVwIAAAAAAAAAFBqNI5vXFdq+Q66IrYk4+tr7rYtEP752L3W35RAvoOe8qCZ5EGNWdVUs8brdgsAAAAAAAAAwEWadmsKNE5o3F7c+Q4GZJQHU6ftbVsexGPKYXuVRL6DVPIgHlUNVczNtgoAAAAAAAAAwEMaxjecXsj5DnKdshCXBxS3XX6hY4Fw62UX+CPfwTC78iCYW76DNPIgGtWneNl2AQAAAAAAAAC4R6+GCfWvlVq+g0R5MKSlyfz8mfWOBcIXz643myONxZ/vIKU4iEVT9d+pDbnYXgEAAAAAAAAAeEH9xPpqL/Md0O8O2a3Z9XwHiXHqyUc5lgfxmH3idE/lwcAxA6M/c2nKQtLog2jUV/fzpPECAEAMJtgvWZDtoxtsNhf8Qt1g53PBT9RFYNzOA3f+MSoKAABAsVBWV/ZfumDL3Ayvjxn4iMbx9Ud5le9gtwMmmOcvm2+uvHyJec6iM8wxk0a5ku8gOTb+7bq0guCtDfebbz3+QNqfP3HHtZ7kOxgyvtk889xTzGUrLzDPu2CuOW7SWPflQVMsGqsP97odAwBKE93QhW7wO3XBt+mCm6mCC/YFCYWymrJfeV1eAAAAIF8qait+m+6epypw1kAXDeMbbvNiygL9LC4PVl62xFxx2RLz/Ivmm2PaRyufsrAj6szxe+1qbtu6Ka0gWHXlEnPVVUvT/nz71s3mhL3G2ht1MFLOqIOh44dY0oDkQTzmXzDX+h21+Q5SyIOmarOysfomXFIAAFdp1XbSBTtHF3y7gwegj8tFYCzOFAAAgEIGAgF4Rmtr604NLfUfebFE49Ddmi1xEJcHK9JJBIXyoG5MnXnx+adnnKJwyqlHmaeednTG31m+8HTXpiykkgcXxYLqwJUpCzFxUBWLysaqj6gtaUVEVVXVf1ZWVv6iEELTtN62D6xV28nr8toNIcRPlJ5kULA0Nzf/QDfYbTl9RTH497oRmOL1MQAAQKFD08Oc3ttp6L3X5S4GIBCAZzS0NFR4IQ/i+Q5o2kKiPOgmEdpGK8l3kCgP6HfeXHdfWjFAIxMmTB5ntuybeZTCWxseMOtGDVC+RGMmeXDGuad4Ig/i0b+5v64VEdzg17g9NCzXoJuI3eNigulel9f+ix5bqvYsg0KFC744v7bFv2chtqvXxwEAAIUMF/zRHPrfL/Va/X+9LnuhA4EAPKMpUr+bW/kOkpdopBg9aZQlC1JLhHnmmLZRkvMd1HXJA4rDpk/OOLJg68OrzCG7N1ux9ZE7Mv7uodP28Uwe0PSFIS3N7uQ7SCEPoqMQasZrRQQEAgQC8CeUFFGSpPo3H8x/5vXxAABAIVJeW94v1/6XCz7D6/IXOhAIwDPqI/XHubpEY0weJOY3oOkK6STCBcvOM8dMGi11yoIVo6Nx51UXZZQC16yY3yUQrll5XsbfveOKJUryHaSSBxclxIILzzGHTRiauzgYkkkcdJcHqcRBl0BoqO7QiggIBAgE4Et664I/JXGUy2yvDwgAAAoRbrALchcIbCuWAM8PCATgGQ3jGy51c8pCuiUabUsEifKguaXR/PLZDRmlwMxZh3QJhGOPOyTj73753AazOdIgNd+BcnmQx5SFrmikqDIrGytXakUEBAIEAvAfuqEPlDtNhr+Bh1gAAHBGRUXFTykpbX59sD4S9Z4XvbPlm+AG/5vMeybOF7BoaGlY7WzKgnx5EE2UOMiarkDTFtJKhPbReeU7SJQHFGeeOiOjEPjuxY3mmEkjuwTC6D1Hmt++sDHj35w++2hpUxYyyoMV/pIHVjRUPVJMlxUEAgQC8B9c8NOkCgTBTRZkVV4fFwAAFBK6oU/Nt+/lgmEFL8VwwW+BQADSaWgZ/Kxb+Q7Sy4MdiRJJIixKJREujUuEUbnlOxjdM7bcfWNGGbDp7hu65EE8Nt+T+W8233WD9/JA8hKNtuSBNQKh6qliukQhECAQgP/ggt8sWyBwwfeSUbZywTq4wefICN1gR8koEwAAqIAbfFPefa/BvgtUB37v1zNEiR5l9ekUXiwhDIEAlNDQUv+6m/kOMsmDeI6D0YkS4dLEWGxesGy+Obp9VE5TFhJj933D5vatmzPKgBWLz+whEFYuPjPj31DsvnckrykLyfLgIpvyIP98BzZHHSTJg8pY9G+ofLWYLlNdsIN1wZZlC27wFbJfaGIvNY/a2T+FkyWRonPm7G2XG3yz/ONiXzjY/95qzzIoNHSDr5F/vbGjJZXtFYnlKiohCwAoHmROJeOCn6L5lIpgRZnke825bh8DBAJQQkOk/gNPpiykkQfdJMLSed3kAcXFly42z0+UCDnIA4pLF5+dVQT85ajJPQTCYUfvl/XvVl5wpj/lgewpCwnyICYQ3ivFy3SX5l3+nyKBcKjXx8YFP1v6cRnsba+PCxQuXLB1Cq41KdnAIRAAAKUAF+xSiX3wm83NzT/QfAgEQs/z5fU5AT6hIVL/jaMpC5LyHWSSB/FkiTskwg55EA9KuEg/z0UeDBwz0Hzn8QczSoDPnl5nDmsd0kMg0L99+vTajH/77yceMmtHhRxPWUgrD1b4Xx5YUV/1tVaCQCBAIAD30A12m3ypJWekCwQCAKDYqa7e5b+jIwkl9sNGYKLmQyAQIBBAGrzMd5BJHsQTJY5uG2kuWnpuN3mQWiJkzneQGNOP2j/rKIJHb7m8hzyIx+pbr8j699OOmOyOPPAu30H3aIhGKV5oEAgQCMA9uMHnSh/xY+hCRtkgEAAAxY4u2DEKRibeq/kQCAQIBJAGafkO8pyykGmJxlFtI82FWSRCtlEH8agdXWvee+3FWQXAwnknphUIi+afmPXv77l6uW1xkCgPkqcsXLTi/JTywLV8B9nEQYI8gECQPqwaUxgASEIP6c1yrzP2lqxlHCEQAABFTi9usJekS1zBt+u1OtN8BgQCBAJIgx/yHWSSBwNsSARKuGhJhGzyYFStOXR8k/n1c09kFQD7HtKaViBMPrQt699/8/wT5tCWJu/kQbP78qCyoRIjECAQ7HxpQA4EkDM0V5YLtlXetcbOlHU6IBAAAMVMeSgwQoE8iPfF8zSfAYEAgQDS4Jd8B5nkQTy/wajWLBKhdVRGeUAx5/Rjs778v/fkI2nlQTze3fhw1u2cdeoM5/JgRYHIg4ae8gACASMQbA5VhEAAecEM1iZl9IHB3u8j+vxc1umAQAAAFDO6wW5UJRCoP9554M4/1nwEBAIEAkiDn/IdZJIHaSXCJTsitUSIioN4PHf/rVlf/O+6dnlWgXD3tcuzbufZ+26RKw98lu8gWR70xwgEuTdTTGEAIB29dMGvyPMa26YbelhmFUMgAACKFV3ov+OCfatuBAJFYLLXx5kIBAIEAkiDX6csZFqicWTriKhESJAHqSRCbZI8aN9vfNaXfoozz5iRVSCcdeZMW9tqm9zSQxzE5cH8HvLg/JTywK/5DuLyoH9ClOKFhiSKjr8yYAQCkHTdsQdzlwdsmuzTAIEAAChWdIPNVisPrJw06zQfAYEAgQDS4Et5kFIcdF+iceQeI8yFS9JLhFF7jOwmDyiuWDo36wv/9q2bzd33j2QVCLvtH7F+N9v2Lls8J7M8WCFBHniU7yBZHvSvh0DACAQIBOAeQogf6gZb6vAB9bNywSaoKA8EAgCgWHPP6AZ/Q7VAoCgPlQU1nwCBAIEA0pBdHjiZsuCOPIhPT0gnEZZfcqG5aGl3iTBwzAArt0G2F/5XV9+VVR7E47U1d2fd3gdPPmrWjaz1Th4onrKQKA8gEGSbeKzCAIAdyo1AIzfYw1nEwTe6YMt4kP+fqlqFQAAAFCO6EZjohjyIBlum+QQIBAgEkAY/5zuIi4MueZAiOWJ3iXChJQ/ikSgRjplxsK0pBzdcssi2QLjx0oW2tnnkkQc4lwdDCk8eQCBAINgSI5jCABQRqA78nof4gVyws3TBLuGCL+eCn8pDfHc+mP9MdcVDIAAAihEu2D1uCQQaJSYzuW0+QCBAIIA0+GLKwq72Rx2kkwgLlpzTTR4kS4QHb/yrrZf94044zLZAOP7Eaba2ef91K8whPeTB+SnlgX/zHWQWBxAIKm6iGIEAQCEBgQAAKDbKRFlfK2+MayMQuKkiR00uQCBAIIA0eC4PHExZyLRE44jdh6eVCMtWLDK/fWFj1hf971/aZI7da7RtgUC/+91LT2bd7ncvPmkuWbagx6iDnOSBj/IdQCBEQRJFh2IEIxBAkQKBAAAoNnTBznVVHkTjeVptx+tjh0CAQABpcGfKglp5EI+UEuGvF5pr777F1kiBZ+67xbY8iMez99vb9pq7blYvDzyYstA9+mMVBoxAgEAAJQsEAgCgCD+QvJdhuoGyZR3Lg4Emr48fAgECAaQhnTwY5MN8B92j+woLKSXCX6Px/pbHbL3kX7r0bMcC4bKL5tja9vubH0svDwol30F9ZnnQDwIBUxgwAgGUMBAIAIBiojzE9s18X2cLabSACoHADXa118cPgQCBANJQaPkOrFEHaeRBokRYsnyB+ehdN5rvbV5j6wWfYvqMAx0LhOkzD7K9/Q+fWmuuv+cWc9nyhZY8KPR8B4niwIrBGIGAEQiFPQKBlqoK1ASqueCtusGO4oIv4Aa/hgt+Czf4fVzwR7ngj0T/m92kC3YlN/gcJthfykVgbFld2c5eH4Pvlv4K6f254Htxg8/VBb9CN/ituuAPROuSrbLqUPDFXPDTdCMwRRf6KCaYTl++tAKjVARC/wH9f8NCrJYLvocu2DHRIc5sGRfsUl3w67nB/0bXiC7YE9a5puuF/t9gN9Dv6QY7w7q+Qnz3itpATUVFxU+1IqGiouI/dEMfyA2+v9WmBb9iR//B1kbrga4Bq92fqgt9T7pGtBKHlmSl5fuYwdpibWohF/xaqqtoW+Kr432vbrAbo/XHzqJcQSzIxqhcXaWU0Q32WIY+ansgGCiPni8FAkGwb/pU9fm1l8cPgeC5QOhNyZGZYPX0HKELNosb/DzrPkLPE4Jfrwt2Nxf8frrfxO813GD3Uv/Bo88Wp3LBp/Mgj1B7LSsr+5FW4FCd0AgdXQQm6wY72eovDX45F/yOrjoQbB31mcoKUYj5DtIFbWfaEZPN+69baeUdsPtiT/HV84+bI9qGOxYI9DdfPrfB0b62vbTZXH/71eaxM6eaoeGhgs130CUPBu8IrQRBDoTCFQjWw77QR8YeVtfrBv8q/wcf9i96YdANdpgu9N8pK7uo+GMgFOjjVvQL9f2DrYK1ajtxg4/mBl/BDfZ+nl+g3mFBVqX62CpqK36b7bCqq3f572zb4Qb/p8QH6BfyPa6dB+7843zaGD1olYvAAC74EbEX4efkXCMpXxb+YckHwWcERKCOHhy1AoHEITf4TGspUYN/mWu/oRtsJROsIavkdPG6Z3Xsz6rum9aLv8EuiImmr/NuRwZ/w5ILhj7V6xfPYoBkeub6Zg/R7+m1+v+q6hd0Qz9O5THSPTpjny74ULn9HL/Y7evReh6ReAxqzoSm0UpJXPAh5YJ1RK9j/oqiKTLb6P7KDX4ZPaeRVND8LleDgSZLhBjs3kxTitw8X5q3SzTKkQet+7aYly2ZY76/8RFHL/KJsW7V1Y7lQTzWr7o65/1+/NQa88aVi8z2fVv8N2XBoTyAQJDbyWEVBnXoIb1ZF+wq3WCfKnno6X6jWq0LfT+SFVKPQbDXFJc9OV7IUqRe1sgNRcNZVQZ9Mc9W39ZDjQ/K6iSYwYY5bFa9rS89NFrE4BvoC6B354S9Y71QR4/B82RqqSD5GPs6LjlDPXuChdiu6WSFy+fhO4lV1qs8FBgRFUXsc6VlN/j39IJLXy3pAVziMZQMusGWZqrj8iBr7/pdwa5Ucy7ZayplYuz69aSPc+t69KtAIEFNElEXfAk32DPWNetd3f6dRpzSKCjNH9Dz1FBajlo3+Cd+OF89KNQpC0PHN5lnnTbD3HL3jTm/vCfG4gWzcxYIixeeIqUMrzx6p7lozgnmkHENBZHvIFkeQCBIvlFgGUe5RL+M07Di5zy58Qv2li5YZ75fhf0oEOirCA2X8/Dmn9+5KWGBQO2RhnbSlzFd8H/78/ywl2gUhF+GnvIQH+xGe6chuEywXxa6QKBRE1zwQ+g8etN+aGQQO1q2xC1myurK/iuTYCfBl1if5UagUd05DIxTdZwQCM7PRz71TSP5olMR+HX5vhgr6y8EX6+HApM8GgXX25rWJvhTso5HWUl9Lw8SpyiMHmBNUfjbVUvNr557XMpLezwOnLZnzgLhwMP3klqWb154wnzkpkvNmTOmmMZQw39TFtLIAwgE6Z3YoZrHcMHPLoYpDJSfwDLcPrg56QZ/lYd4S7EIBD2o78YF/8jzes2rTZauQKA5pQVzngR7neZ8ejUigXI1RIfcyx5xkPGYX9ZrdVaoAkE3AhN1g73odduJHctLNL1KSmMociivT5Z2eVby36iS85QrR9VxQiA4Px/51Hcsb4HnfYFuq7/gm2nElOYSXPBKypMj+ziUFbgQ8h3svm/YXL7oNPOtDQ9IfVGPx0ebV5tD9xiSs0Cgv/1g06NKyvbuEw+bV110jrnH3mF/yIM04gACQcVNEwIhX8h2qxtamW+wq/JJHucHgcCD/AA3X6ZUBQRCgZ0vwe+gRI6ai5SJsr7cYM960z7Z+/F5uoUiEGjkRDTZofftpecx8RWyRoIVK1m+gG7j1fxPyX9DieqUnDODf18eLN9FxXFCIDg/H6UiEPRobKcpFkKIn8hrdanqhR0sJQ+M5POVEb/mOxjS0mjOPmm6ueGOa8ztWzcreTmPx/03rMxZHsTj/htXKi0jxXP33WLOPa3DbNy13hf5DiAQoiCJoj9HIFjDjCUktbOS+BjsIV2wRbTiAmWcj2ZVzy9BYHTb/DlacaAQBQI3+N4ez1mUFhAIOV8bn1tfTGiutMFOp1EaJD5jmbLnWok0rUzQ8nMpUD/i1nxVSmwo43rPKwz+SllN2a8KQSDQ3N3olK089x1tNw/EMoxT3ztPN9htMkY80ddFSkqnpsUUNpQHJZcRW5WVlb/IPYlotmBnqjhWCATn58IrgcAF+zDWHyzigp9CCXd1g03jgp8QWwnoEl2wp9V81GBPq1rphdq21LJGr8Et8VWPNFX4acrCwDEDzSmH7WXefMn55hfPrlf+Qh6PuWd35i0Qzpkzy7Xyfv384+Y911xsHnHE/lbCRa/yHXSLQf3NikH9sAqDxE4AIxByh5aHyzsrtPVyzObRQ3v6ZcfYvhIelN+jpewKSSDwIA95mWBPdkAgOOmXrKzYV1hDwVu1ney0VSvPguBDrCVRDfadtHNn8E9o7rXTa8fRdRbUB7mQbNVmsLv9LhBYkO2Tb98QbSPsTHohTb86CDtIF/zdvPYj2Ft+z8DuBdle8ihnSrq/jS3lqqIddsu5IAsIBOfnwlWBYPBPaNoYrQbkJH8HE2y8/HPLXqORaPkcf8/6YJ2Sro/3SdrT/ZByzmhu4Ad5EG4fbV4472TzjXX3uvYS/uGm1daoAZIHY/ca3UMIzDzlKPOOu28y//naS+ZXn7xvxT9efdFcddeN5ozZR/b4fdoGbYu2Sdt26zjeefxBc+WiM8xxu490Pd9BPEgcxEMrQTACwV8jEChZV94G2uBf2p0rS0sA5pvwhhvsA93QhdMbD32VyxxSv5q+sGOpJfay3BtzhroRfEGqY5M5+sGOQKCVO7LWt9xcEO9mP7+Zw87DjpMcCLSmdEVNWYWW5/KjlBxQXvtgHybmCJAJLSGqC/6x0jZOfU30y5rN/ch54Eyovyczt+mec93ToQt2TGzIbz7l+YyuNTv7s2RKnvkVrNU+Qnr/vBpKEWFNPckwlJqWW80kDi3hpupaiSa2kz50PFP7py+4kq/3DXn16w6ux0IXCNxgV+e7FHYguhTpannnj72YTmw6xVplIf/nmG00+o+eyzS3GTTWm3wHDeF687hZf3FlioL11f65x82Nd11vLjv/dHPq9H3S5jzY5/C9zKe2rDfNrz/PGFu2rDf3yZB4cc8pu5vzzjnOfOjmS83Pn3FnNAVNcTj1pCPNASPqXJuykCgPIBDk3iwxAsE59IAhY/gaZQl2tF+h/y7vr2EGe4ceiHM47Azl4i9IFwiCL7fxu29ywW7SBTvHGl5osDOiD2LsCac3TMpjkerYZI6AsCMQbNW3wV+RWN9PySiTLIFAa2bL/LJBqyrIGmpKyfGqqqr+U5OINRxb8L9LPJ/xsn5HIzGs5KNJQ2KtJI3WCg9W8trU/YnkIeL0dU9GffEQPzBfeUB/7zTBLM3Fz1fc0VS3PlV9fi2jHgqdbMliueAnZtuGzAzySW31Yc1lKoIVZXKPg53r9jEUpEAw9OOkrsAl+GKJdXBXvol86cNjNClwXtfDd7qhhzWvUJPvoC6tPJg8pdW85ZILlE9R2PbSZvOlh1eZV6+YZ87onGKObK9dJq0AACAASURBVB+edRrC9BOmmZ9+8E5WeRAP+t3pxx+WdbvDWodY0oLkBUmM717cqFiWPGHec/Vyc8rUPa3pDW7JAwgEyTdLJFF0RHmQDZfxUplrxmdd6Pvlfd4N/jjdWHLZvxsCgb7UpRUA0SkfVwVEoC7TzZWS39FQO7sJgyAQvBcIXPCbVax8wA1+rLT+0uDzJRatF/UDMvvzWN+yloc4t1MAStpFxyThpVy5QKCHWBkjgkis5LZ/Ni3/c8MfoWlpWmnTO5M0i05fyv5FWDfYYaraa74joJwCgdDzHCgXCAY7XZNPL5Lg0vrNID8gn8JY+Rvy77OyyjyluDFlYWzbSGuKwj8fUztF4a0N95urrlxinnLKkWZ4nzGOchjQyAMn8qBLIrz/trn3YZMc7WvMpJGW1CC5QZJD5QiMt9Y/YE1xGD1hmPR8BxAIUTCFwfspDNGXUvaOlBtDiA/OsRi9aXhn/mVgi/wqENK+VNEwYkMf6Khs0aGu/862XwgEbwUCzROnYc2Kdt+LC36/lPZp8O9pGSwZhbIShMq7buLX9e00d99xWaIrnWz3q0DoF+r7h9gUjLzLQlNGcikDvfjnOwJMZaK+QoEF2ZjM1xi7wc52+og+P6cEq0rarMHO11wEAqHnOVAqEAy+QdUc/qqqqv+UNUqQpp2mezbJSqu2k27wN/K8Dj6VPerOMarkQcO46BSF1bdcbn7/0iYlL8eUa4CmCNBUgbaDJuSVBHHTprWO5UE8aMpDPvuesF/Ykh4kP955/CFFIzI2mZvuvN485YTpZmiYkJLvAAJBuUC4OTrf1cOwVh/wvUDoRcnF5Dyc8Ffy+dIazQScdzm2OUkY5JpASJOUkoaV5nojjeYVyJxUDwLBW4FAyepU7p+EncS+5ep8y0PtTZaMTOjLn8vnYY8yjsvuh6UIhOjQ4EfllIU9nXM5ol+9l+Z/nti3uUqMYkA3+K0Z+4IgG253W7QCi6I2+7GbL04QCD3PgVqB4OxDhOP9G/pUif36CbmUoVwExkroq27SvEZ2voPJU1vNa1fMNz/askb6S/CXz22wlcfAaVDCxFzlQTyOOXm6lLIk50/49Om10uvxs6fWmbdfdqF58JRJeU9Z6BYDkURR1UNeMYVsgaCLwGRp5TPYGXmVxdCFnLKwp2VYeMkjEFLUF3+c5m3nV2fsokz7gEDwVCC8qSLzeTJc8PWS2uP3rI79Oa+yWInTJF8nNpMCpoP6gtjyZL4SCHKHqrNZ+dQR1bGU+hB8vYrpOn6HRpJknIZisBed1AsLsVoV7TValsAUzSUgEHrWvzqBwB7UFLPzwJ1/TCtfSWqL/85lyikX/ML8+21+nuY1+eY7aGppNI/qPNS89pLzzX+uu0/qiy6NXEjMYzCidZi0l/TE+NvdN+UtEFbdeYOSsiXnT/jmhSfkTnHY8IB582WLzWlHHWQaQ4XjKQuJ8gACQdHNsshCpkCgecJ5DwVLiPJQYISEudNShvOSGPGzQKAhfPTQmW8ZaaWATEO0IRC8Ewj05duVMkh8Ec31q1DCOvafSL5WVvtOlEoQCDRMXc60ATlfHi3Jku/SvfEI6rtpJQYX/LTM9cKOcb5N9qSSNivYk5pLQCD0rH9VAoELvoe8M5exDEtktUVaLtLp/rnBns2/3+ZzNa/JdcoCTVGYNesw86U195jbJM7hT8xjkGp5RRVBSzXmKxBoiUc3yjp60ohu+RO2bZUzPYTyMLy27n7z5OOPMI0hwYRRB/bkQXkstBJE1RSGYg2ZAsHK8C+vbNsrBlb8T75lkjXtgwu2NdNyWV4LBFrvXZMEN/jmdPuBQPBOIJSHyoKaC1TUBmokts0tuZZDF+wk+f0d319KHVVU/Aflo/CLQIitFCGrDN/Rl8F868ha5UVeGyqZUQjRHBLsX2nrw+Bf5nJvlDlcvEffJGmaXzYgEHrWvSKB8LVbSxGyINtHXltkVzrux7NM21SxXyU4lQd7HjDRvHzpXCv/gIwX1/effKQrj8HuB7S48hKeHF9+/H7eAoG24UXZx+87tit/AskXGefkky2PmdcvX2Dus/9utkYdROVBhRVaCQKB4I1AiHXEb0u8Ebwmo1y6YAvllUnf05cCweBrZD5g64LNS7cvCAS10NKn3OD39YjoHEtXXqLo6zEX7DNZ7TN5eUQHuVRek3ydfK/X6v/rxnXipkCgOejyRlpZZXhGRv3InHfPgzyilQj05TdjXQh2aS7bpeltlOxNyT1IsEvk10SKY8Ayjj3qPl9hnfJ+4+KQ/AqJ55RGYjq5T9IqPJLuLW9Q4m7NS5zmO4gKhDkQCEkC4YuP3i0ygXCe2bpX2JE8gEBQcZMsvpAlEGRnSs91+cY0WdMllSu/OYGqBAJl65ZRVzvKyQ5Oty8IhNKAvvpKu5ZDfHen+y8PBpoUXCvPS60jWi7RBwKBC36I3DLktnxjinIdIbHvvV0rEbKuhJLH9JJsOW5yjhxHRTgFAqFn3WuFTy85owC67je2luYlyo1Ao18+MOWNk3wHlCgxniyRfv/oYw7GFIaYQHj9lRcKfArDFmsKQ8fMQ8zqxmrHIw8gEBTcIIs05AkE9rDcsrFlMsqlC32kxHJtzycpnCKB8ILsL9P0gKoLtjFVpBvWyAX7Rl6b5H+TcxxyloiKxVNaCSF3xRd2jhdZ/FPEFTLriGRaxkR3LgmE6LUpswx8voz60Y3ARIn18l1FbcVvtSIn9kU0bQ4aml6Wz/ZpGpSC6yrnvAxOgUDoWe9aEaDLS6ToKF9V1qVSnfVRHzDBdM0rclmisW70jmiMNJrTjpliXnPJ+eYb6x8oyCSKd0hIonj7ndcXZBLFtx9/0Lzx0sXmIUccYBpDhKN8B8nyACMQVN0kiytkCISymrJfSX+QlpQwjpYBk1pnBjvZVwLB0I/TfAAEQnHBBb9FXhvlt3osf+LX7lF+HqmRi0AoD5bvkumFM7cy8Jl+WxLUrRdUr6Gh4xnPjeCH5LsP3eAbpF9b0bb7kuppVhAIPetdKwK4YFu9WL1LxhKOSfExjcb1JGdLPvIgVbTvN968bMkc86PNhbOM44zZR+YtEI4usGUcKcfBvvvv7miJxnSjDrpiAHIgSL05CnaWtSyglyHYJX4UCDzED5ReLsEPldGn9h/Q/zdSy2bwx/0kEJwM11MJBEJxwQ1+mbw+xtlX00Ao0Ef2dRLrU4bIrifdYDd4KRC44NP9mpA1tqKLxLKpX1bOSyhxZcZcFgb/REZiOxX3a4krJ2UEAqFnnWtFAJe7QsgVzkZbKrjXGHwTTZ+l/DSaW2QWB87kQe2o2q6oHzvYPGbGweb91620RhLIfgmmoESO8QSMbQdNyOulfdOTj+UsD7ZsWZ/XvifsF+7KY/DO4w8pqattL20y1956lXlcx19MMdTotkyjLHkAgeDPF9p8kJlpW6ZA0AW/XnonbAQmSqm0Vm0nyaMjttGICz8IBC7YPzSfAIFQXMiUldxg73uXt2RH0Autgnqa56VA0A1+p/y60kfKqBsraZ/c/u4b2qZWpNho90tk7IdeauhLqYprTDfYjZpCIBB61rlWBOjyVmyhZ/VHbO+3VmdKroMdfdbnusFuoxVQVNx/umEn30E2cVA3eoc4SBVjW0ea8886znz54TuUvBynWgIyvM8YZ1/9D203P37/Lcfy4NP33zb3PmySo32NmTSyWx4DWkJRVZ28tvpuc/G5J5ujWoZ0kwZWDJIgD2LiAAJBRUcAgZAOLtjr0uvb4KNl9as0N01yW9jLFyMQDHaD5hMgEIoLqQJBsG+d7JsLvkDFw5yKr0G60A/3VCBInTscDSZYvR/7Bat+QrxFK1KyTS2g6Xiy9kXtTMU1Rrkqclx1xRYQCD3rXCsCdJkCweCb7O63srLyFyquA08++uQ96iCLPLBiZK0ZsiJk7nvQHuY1F88zP3nqMaUyYdtLm7vlTxjZPjzri/304w+zhIATeUB/4zSPwXcvblR67J89vc68/dILzYOntJv96yt7igNr1EH/vPMdJIoDPRZaCaJqGUcIhNT0qerza0X1PVRWm5C9XjsX/EJ/jEDgp2o+AQLB39Ayq/SwZDe4wa6W2VZpbXtpWehzCYN9qqJe6YXWK4FACV1V9L0sxGpl1Y/sZQO5wedoRUh0kmLG9vuYzP1xwStVtJ1YWWdrioBA6Fnfmk+n4zi73/DNEtvfi07KygV7Wdm14Ob5kjVlwY48SIzBYweZszoPNR+9+TLrZV/lCzXF1889bit/wj7T9jQ3b16XVR5s2rQ248iDxDwGnz+zXvnx0RSFTXdeb55ywhFm7dBQSmmgYspCojzQB5T7smNRDQSCu1MYaKSAik6WEnDJahOyR0hwwdb6QSCUB1m75hMgELyhubn5B9FEoYHJJJS4wS/ngj/KBX+Orm36+u/mw1G6KKsr+y+7x0Tllt6fCLZVRf1TXgWvBIIe1HdTca4kf+l+X3L93KsVIVzw5Rn7+hDbV/Y+SUooud4N/gb1S5oCIBB61rfm8vN1uQgM0I3AFJpSywW/1mpHBntRF/xdmuKppE0JdV/5ueAXu1k+ZSfHC3nQFSOiQVMczj/nJPONtfcqf9FOzJ9w/40rzblnd5pj9xrdQwAcc/J0c9WdN1jLM3758ftW0H/Tv6VKmEjboG3RNmnbbh3HOxseNFcuOsMcM3F4RmkgTR4MSC8PIBBkd0qYwuDGGuQ7HkJ0IatfpezQkm9QX1BuBc+nMIT0/ppPgEBwjV4BEajTBTtJF3w1rb/u5sNPrkFLHtodKSF7VYFof8LXqDgZ1sO0RwKBCz5DxbmSmZhVF+xfkuvHUT6NQqCP6PNza650hmOmFzfZ+yXpqOyal5XDKAkIhJ51rSmERo6VB9lwbvC5lOiQpqgoazNCWl//hpNj1IW+p5vlU3ayZOc7iIuD2kziIEEeUAgrhBX7HLi7edNfF5lfPKv+q3086MU/35UTzpkzy7Xyfv384+Y9Vy83D54yyaxsqDT71WcXByryHSTLAwgEuRc9BEKaztdgZ6joZGmIpax+lRvsGdnly2W9X9kCwclXXdVAIKilrK5sZ1raVDf4q24+7LguEETFHxX1J/erOC+yl4l1NAJBsIUq6oqmRsiqHxXtla4FrYjggh+R+ZjZPGWrPkjOD7TjemP3qCgzBELPulZRz/RxIta/vKvqnqD7RCAoTSrq0vmyUJnvwJ442CEPumK4MAfvOtDs7DjE3LDqGqVJBinuv2Fl3gKBRh6oFgfP3XeLecoJ080Bw+uiuQ1IHNiQB6ryHXSTB3XR0EoQTGFwfQrDZWoeQOhlSZ8qI2hIm+zysSAb47FA2K5pWm/NJ0AgqIFeqGl4s+xkdH4VCLK/6O/o5/jfVJyf8prygHcjENhNSs6XoR8nre812Duyy8cEa9CKCJpulOF4t1MbU7VvVRKKyk0v+7LLC4HQs66l1m9toIYLfouSUWA+FQiELtiZbpVPU4UXUxayyYPEMIaL2BSHE80319+n5MX8o82r0+ZEsBP0tx9selRJ2f79xMPWFIVxu42wpEE07IkD1fkOkuUBBILcix4jEFJjLVHj9Q3Dg8ilPcgUCDTkVfMREAiSoeVHBTsm09DmYhQItISgouv1Zk0B/UJ9/+DdCAT+gNfn1YtgQbaPViToIb05c3vg96ncfyAYKFd3rti5sssLgdCznmXUK32F5wY/T/KS1wUjEPqIPj+XPd1K5flKiRR5MFKCPBieWh7sCMMMDQ+ZB05tN29aucj86rnHpb6oHzhtz5wFwoGH7yW1LN+88IQ1ReHwaZPN6sbqBHHgsjwY4EweQCDIveghEFJDSa08v2F4EJRAyFOBYLB3NB8BgSAPvVb/32K7ruwKBB7kEUXX67WaAmg4vYcjENZ6fV69CC74CVqRwA1+TcZjDfHdlZdB8EeUnCcFuRsgEHrWc751SiNcuMGe9fq61j0UCIQu9FFuJIHUVOFlvgN78sAwjWE9o2lcvXnyCUeY61ddLeWlffGC2TkLhMULT5E2RWHOKTPNxtGDkqSBQ3kwyBt5AIHg/Rdn2dBLq9+mMFiJ3Ly+YXgQNHXD4ykMf9d8BASCHALVgd8rW1bKYJ9ygz2sG+wG3WBLaUm8dKEL9rQnAkHwVr9cr74XCDKXPiug4IIv1oqA/gP6/yZjv2nw70mW6IJ1qgwu+B3qzldgssw6g0DoWcf51CcP8hAX7ENF5/9dGkFDkoyu2Uz3Gy5z5Z0cBUJCPhKl0zc0Vfgh30GmUQep5AFFMCEm7jnOvOi8U8y3NzyY88v7ulVX5ywQ8pEY72182Lxy6Vxzj73CaaRBgjjwWb6DxOCx0EoQ5EBwWSAYfIPKzta3YbDbPBYIL2g+AgIhf5hgv5S+UofgX5MsoJUbnCytpgt2iUdTGNRkxDbYSq3oRiBknDtfxMGu0ooAbvDjva9LtZHrksfpgEDoWce51mV5bXk/6cusCvYhF/w02jatGGS3LLpgT/hBIBDc4HvrBv9K1TWhqcJv+Q4cyYOh8QhaIYYJ89DD9jbvuGKJ+fXzTzh6kf/q+cfNEW3DHcsD+psvn9vgaF/fvrjRfPjGS8xjjj7IrGmuMfs3pBMH/s53kCwPIBBk3wgxAiFlZyv4o14/pHgR9CXXaf8OgeBuwjvd4K9IPOdPaWrppeBL4AM8yP8vl8J4JRBoyLaia/YKrfhGIGxS2cf5Neg60QqdVm0nLtjrXtelG0GJ+WRVGwRCz/rNpR5jKw88L/VcG2xlritD6T4SCFZ5gvogXfA3VVwPmir8mu/AqTxIjCEtzebii+abj9x5g/n2RvvJDafPONCxQJg+8yDb2/9wy1pz3d03m0svOs9sHNcYFQd+kQcD8pcHvFbHCASJFz0EQmpouSavH1A8ii1O+3cIBJvXWgkKBC74IZL7q4udjDjwzwiEwDhF1+t1WpEJBN1gjynu4/wZBl+jFTgK27n/wmAXyao3CISe9ZtLPVI/I/Mcc8Fn5HNedZ8JBKKiouKn0el8/GuZdaWpwumUBS/yHaSWB8G08mD++XPMi1ac3xXvb15j6wX/0qVnOxYIl100x95Uhc1rzCXLF3bFvPPnmI1jG/OXB4P8Iw8gEOTeBCEQ3F2FoTzI2nVDF36N2BA9R0Ag2LzWSkwg8MH8ZzKXu6OkaPnIAy8FQnmQDVfRn+gGv1VTtMxmsa3CYCWy9EEfmy5o5QCtwOGCrVLSzn0YXLDPcv0ynQwEQs/6ddz2Qpxzwb6Vd3758nzPq+5DgZDU5q6QJRI0VRTUlIUs8qA5hTygeOyum2y95D9z3y2OBcKz999ia9ur77yxm0BYsmyhOW9RKongJN+BE3EgP99BsjyAQJB9E8QUBjdeNLrqO8hDWpEBgWDz3JeYQKDlGuX1U+wbWlpQQpm8EQihsqCK/kQX/K586yRlPdXqzMMRCDeoqCsmmK6irkCU8mD5LkWxXJ6TMNg0GecfAqFn3TqtQ12wv8o7r/wNGStt6D4WCHH6VPX5tS7YLF2w1/Ipn6aKgpEHQ3OTBxRLlp1nfvvCxqwv+d+/tMkcu9do2/KAfve7l560lfPgwiXzusmDeHSXCIWV74DX7RAHEAjyb4AQCKmhhDkqHjjKg4EmrciAQLB5rZWYQJCbDI/9VUaZvBIIlJleRX9CX+s1BdD8bg9zIJynpq50Q0Vdgdh5E+wsRW3ct0F9nJOkeumAQOhZt07qr4/o83Mu2Od+mbpQSAIhgd7WaChaxcTga5yu2qCsVIWe7yCbPDjvwrnm0PFDzPuvW2FrpMBxJxxmWyAcf+I0W9u899qLzYaxDeY5C8/qJg+6S4SGgst3kCq0EgSrMLi9CkNgiooHDhZiu2pFBgSC3TZZOgKBC14p9boRrL6QBQI9nMkcXpvwULlBRr2kSbbl0RQGdrSKvrfcCDSqqCtgzav+j0zTlajt8xBvKQ8FRngRlDtFRZuS1a4gEHrWq5P6k7zKzbbKyspflKBA6JEHh4f4gdzgl9tJvKipIudRByO9n7JgyYNIdnlAKx1Mn36ArZf9Gy5ZZFsg3HjpQlvbnDZtsjXCoGHX9BLh3EVnWz8vpHwHEAhRIBBcFghCH6niYYOysWtFBgSC3TZZUgJhusQHpy/pBaXABQKdt1el9yeC/UNTADPYMO+mMAQmKul7DT5aRV0BTdNDgUmZr2F2g5f1xKv5n+jF0K/Lb0Ig9KxXR+dX8OVeJpIuRoGQTHlNeUA39KncYFfT83U+58sRvp2ykEUe1NiRBy1DzOrmGiuMoYb53sZHsr7sv7r6LtsC4bU1d2fd3vsbHzFrmmq6chwkS4TFCZFJIvgx30FisFhoJQgEgrsCITovTP7DRnmI7asVGRAItl9gSkYg0EO1H7PTeysQlCRm/VrGEGrVy046EQisjv1ZRd9LYkJ2PYFYezHYw5nqnpKIel1XusHvVNKuBP+anhfyKRsEQs96dXRuBX/Kj6tr6EUkEJKhpK+60A+nxKk0fUTZjqTLAxemLDiVB/G49MKzs77wb9+62dx9/0hWebDb/hHrd7Nt76/nn9VjhYWoRDizmzzIJBF8ke8gw6iDuDxgIQgEqQ92SKKYFm7wf8p+2OAGn6kVGRAIts99KQkEaQ9OXLCbikQgnC67P6GoGFjxP7LqR0UCTKcCgYQIN9gHxXivK0YqasoqMta9wV5UIbmcwgQbr+L6iwablU/ZIBB61qmD6uvFBftCYj9xqiYJvYgFQiJlZWU/UrbxQst3kKs8oNhtz3G2phycecaMrALhrDNn2trWxEljUy7RWL9rvXnOguwSwe9TFhLlAQRC8T1UccHP9tsIhFi5bpH+oCHRbvsFCAS7bbKUBAJ/T2IfdXFRCISgvpv0/oS+7uaw9KqNelrkoUCgL9r3yq8rNk92PQFLjJ2fsd4NdpQf6omWgLUzlzunMPirlOck17JBIPSsU9t1V1vxW7l9FT9Sk4ReIgJBKYWS74DEQc2Q7PJgSBp5EI1q89l7sy+7eNe1y7MKhLuvXZ51O0/fc3NKeRBPllg/JoNEWHi22TCm3v/yIJQYCufa+BhMYfBEIBwq+0GDC36/VmRAINh+MCklgfC1xGvmQonlusIrgUAjBZTMwzb0sKz6UTXdwrlA4DPl1xO7TXY9lTpVVVX/qQv+cfprl30hKyGdDOjrsvR2FYtyERiba7kgEHrWp6O5+T79qMYNvtkrgcAEa0iVUFTGcsiuUij5DrLKgwsyyYPqaDRVm2eefEzWF//3nnwkq0B4d+PDWbdz2olH9RQHSSstpJQIFy2w4tyFZ6WWCDlPWZCb7yBZHkAgyL3pYQRC5iy0Tpey8SrpWRZ60xq/XLAPMwUljsxl4xAINs99iQiE2Jc+mdfMpbLKxgW/wyuBIP2LVNeDJZstq3666slgL3kqEEKcK1pyz1WEED/kgr2Vre/lIT5YK0B0wQ7O0jZXaj6CXp50g38v/Rq0gt2ea7kgEHrWp3dLzsqbZsoFe90rgUDPfEUxEqsQpizIkgcUg0cPNL9+7omsL//7HtKaVh5MPrQt699//fzj5uBRA3uMOkgV3SRCTB6klQg+yneQKA4gEOTf9CAQMsMFe1JynW+jrzYudb22l9Tjgn1TUVHx01y2D4Fg+8GkJASC1qrtJLePkpcDgQu+3kuBwAU/ze9f1mUPCc5FIKiQGLrBv6IXes1F7CyHyQX7TNYqI26jC7Yx07GxEKvVfAa96Eu/BqPt6/vyYPkuPhEIrr8kyp7yaXe/LMiqpPZV8nIg9KLkgv4TCPwBrZDwtTwYIkEeNO2IqljcfdWyrAJg4bwT0wqERfNPzPr3d15xkS150CURRtebc0kiJAmEbhLBD1MWMsgDjECQe9ODQMiMbrDDZD9ouJ2R2s4xcIPfl/P2BX9BYv28oPkIEit+EwjcYM/4/aus5HrbLG2teonJtnISCAq+rNO8bk0i5UHW7geBUC5Yh+xylIvAAJl1JeMY6MVLK0ACIlCX+djYE5oP0UVgnIJrMBoGOyOXMvEg/z+p15vgC+TXnD8Fgl6rM8nn8Qop9RGS3NdLEgiUoNYPSU1t4+d8B7nLg+6jDqqS4tDD9skqAB695fK0AmH1rVdk/fuph+yVcspC6iUao8kSB48enFEikGTwU74DCIQoyIHgfg4Eoqyu7L90g30q9wbFztRchAt2T9b6CvIDct0+BILrIxDWyHvQZFud7j/6xYd1pg2DHZZqneg8Hpy+omkR+dYbE6xe8oOmY4FA6AbfILscNA9Yk4TkNdVzFghMsF/SuZdaFkM/TnMR3WCPZb8GeatWgOiC/TVjmxTsIM2PtGo70VRC2W081s7fzmU0SSyXhLxyCL7YaRl4iLdk6tdZiO3qyxEI1E9IPYdyhDUX/BC5fZe0EQhmeTDQpBUKoRGhb/yY7yCjPLg4d3lAQdt+e8MDGQXAZ0+vM4e1DukhD+jfPn16bca//ffjD5mVjZU25UH3/AbpJMKFFy0wz+mSCJKnLOSY7yAxAhTRda9LDggE5zdyv2Ykd/Mre5ko65stcRt9lSVRkus+IBBcFwjS1jOnOZpO909ZqjNvl+b5Zx7a7LicEuaIc4Ov8INAIFknuxz0gK9JE6b8Ez8IBILm0Euupyf8NXWMf0T3dq3AoMSIusG/zHRcQoifaD6FC36i/GswGjSCJ6cyGew7adeb4Mud75//LfM22Vl+FAj0NV2maOSCfavX6v/rtP5UT5eTKRBI/mmFghghPvDNlAUX5IEVjdXmioWnZx1F8JejJvcQCIcdvV/Wv1t+3qlZxUGmJRqTJcKFCdFDIng8ZcGSByIaZYK/p5UgEAjeCYQ+VX1+LXsUgltzQ3XBzlGd5R4Cwe0pDPwaiW3x3473n2UeP+Us4Aa7Wu7DEztfQkJUaStD5CMQYon15H4BNfgr9GVVyxNack92HeUjECpExR9lj0IIBAPlCdCtEQAAIABJREFUmgvogi/JXi98jlaA6IIdnfnY2ELNx9CUAZkv7El91UM5lclgH3g5DD/bCy99UfepQKD2+LTcc6hPdVp/iXDBh8pvVxIFgsE+9dPqKBkJjQy97gt5MESCPGiyJw+qGqvM8B4jze1bN2cUASsWn9lDIKxcfGZWgRDefVRmeRCbspApBo8abM4978xu8qCbRBhV7yt5YAmE6Hq7JQcEgncCgdAFO0nuDYFdpSnGWt4ow1eiWD19FwgF+uSzHwgElwWC4IslPpR873T9cmq7WY7zPG7wYyU/PH1Cyf3ySOr4gPQHuhwFgrLcKnkOGeeD+c+4wf/pJ4Fglcvgc+SWhy3TFEPTfKwvmZnL8rUu9N9phUcv3WAvZjiu7UwwXfM5XPCbVbR1Ov5cJBUX7GWJbfxup/vXBX8v0zZZkI3xq0CglXokn8MXck1s2kf0+bnkRMcKRiBYEuEirRAQw8UzfpmykEkeLE0rD+yPOiBxEI/Kxipz0503ZBQBm+6+oYdA2HzPjRn/5sm/XWcr30HGiCVKHGRJhDN6SoSlC8xzFkQlgptLNKaYstBdIChat9zvQCB4KxB2Hrjzj7nBnpV4M/heF7qhqaOXLtiDNsqyJN8dQSC4PgIhyxQCZ0FzSGUmceSCH0HJ6qQ/QAl+XQ7Jn3rT6AUFZclLIMSWunxKZlnoCyav5n/SckTBQ7gcgTCY/0wX/O/SyiLYt0pHIVhz7O0MX2bnaAUIJQHOcmwFkeWdG3y0qvZO0x5lTyFw2MaflJ3EMZsU8lIgkDyVfg4NdrLmECHET2SeR6UCgaa2BvVBmt8JjQit9rU8uFiNPKCYfcL0jDLguxc3mmMmjeySB6P3HGl++8LGjH9z0qzDHU9ZyLRE46BRg7pLhKU7giTCYEsiOMl3oOcvD5LEwQ6BwB7RShAIBG8FAhGoCVTLHAZNN3lV819pvqKN/X/o9OUxFRAI7goEGw/wztphkIfs7jtQHfh9tpwalJ3denEX/N8KHuqW2k2oaM3TFvx6JQ9zeQqEhKSO2yWX6Xk6Rw6L0kv+V355AoHQDX2g1CHnBl+jaklHO8KKG+ydfPLOeIlusBuKJClkbyVfimM5IJwu18wNPlfi9UaZ9m2jC32/zMfDPsw2Us3bKQz677Ldl3KI7TSly8l0Ky4774FagUCi61+0hKjmZ8SI0KVe5zvwQh5QDBhRZ37x7PqMQmDmrEO6BMKxxx2S8Xe/fHaDOWB4rTR50EMiJMiDHRLhTGu6gxdTFnYEi4YRWKmVIBAI3gsENUOP2ZUy5i4nwg1+vK19hwKTZOwPAsFdgUAPpjKXSXQy9J0bfGaW7X0cfzHjBp+v4kHKGgFhBCbSqKCUZazmf6KkgpLnFEsXCIQu2LkK6udtHuK72xmtwerYn2Um5VQlENQs62hNZejltrilFxMe5BGtAKEXtUxTM7hgb6kSMyrQBZulrt2zg71cXrJfqO8fZK3UZGepUS8Fgp1jyOM8PsgFH5JOXEeTpbJ50leMcUUgWNfsP/KdxqoUY3joOC/zHeQsD5rykwdWNFSZt1+2OKMUuGbF/C6BcM3K8zL+7m2XXJBTvoNM8iCeKHHQyEHm3PnJEuE8K7okgpfyQDCzLMg6tBIEAsEfAoFQ8LXu+oqKip/mWy56maHkSfbqh6+QUxsQCG4LhGid25qeYq9cgl9rO0N/1lEF7MqkHBzfK3yg+pILtlY3+K2UWJIb/D5aljLD32ynhzA/CQR6KOWCP6KifqwpVwY7WRf6SPrKVDGw4n8omSSNOKGXm2i9pf2q/57fBAJBCV/llotflk5EOYGytmf7Ml8oCQbzyQVECVa1AqL/gP6/kSljk87zRsdTdSS+hNoVw7SkX/btBSb7XiAEeUTNeYy3bfYhF/xRK0mw4Ndygz2c8X5iWPmn3vO7QIjFxzzED9T8iDHSmOjVlIWoPGjqIQ9IHFDMO3+O2RRukjrqIFEeUBw0ZVJGKbD14VVdAmHrI3dk/N0DDmrLOd9BJnkQj4EjB5lzuiTCed2C/n3AiAGu5TtIlgcBg5l9g7xFKyK44CdYD75ZQlUSMPp6bGf/FPQAave4yH7b3a7Djs5uZ/+N3f3TnHKHp60XF/xiyeXdmutXqbKysh9xg+9vNwEaF/x+uwmCaNpG1voT7HOJ9fC5wvPWDUoKZeO6kzks8r1s+7P7JUDmnE+6Vspry/tl2h+1Fztfqml6ReLfyb5O8jtOPkMX7BKp2zXYQ5nOp52HeEoOKTeBWt6xnV4Y/CgQolNjMifxzKFdPEfz4XMpDMkH3QhMoS/v9vbFVskecSYbXbBjMvT1H2Y+RrbRTt8tY+qcXbrkYro+XvIKS076h+S2QHleJF5zz2SbRmGN1soiVWk6RnmwfBcb98p35fYZWfbXcwRlL0soqzqXjvoU9q1u6OHoksbStvt1tjpJvP/m8lxNz4axvtBRYmWl1AyrqZAiDxxOWYhGjXnGObN7jDpwSx5Q0O+8sfbetFJg29ZN5oTJ48yWfXe1/jvd77257n5rezKmLGRaonHgyIExiXBej5h9xvGu5TtIlgdlBsuayKXQkLwkm9JwkgWdzpPX5bUdBluaw6kjiXCq/PKwp2mYOGXxztSJ05fPchEYG1um0fZcczLoTube0tC9IjtvO44txA/0/BiSInbes0IPhnJzDLB/0bD3HsM0rRUM9FG64Fuynw/+eKolUGm+t9f1qhvsDCqPdIGQJbjgZ9terlCBSM2xzMtjy176USDEJYL8qR+CPUlznmMyrVfm0QZ6OLraCHvfQR3c63RevBe4If2ofbl1PLJHHcmM5P42lhdF3j4M9liqZM3R0Q76VHtfyNmZ9OzndV2lKNes5OMqD5UF1Y0osVvn/HsWZPtYbU+uQMga8f3G9p37/YRygxjsdJpWU1ZT9qssl1gvEkyaKlpbW3cSw8WHXsiDAaPr3JUHDclRacWSeSdnHFlwyqlHmaeednTG31l8zsny5EGCOEi1RGM6iXDB0vPM6sYa16YsJMqDvsHAB74yYxKAQCjsF9HyENtX2RcMGqJtsGdiX35W0SgUbvBNXLDXc/kyTstWOR2uC4HgT4FA6AabJnv/9LWJEszRaAP6muMgj8A2HuKDU5WThdiuSqcyZCkXrVnfVWc+FQjWtVbN/5RthQvlYbDHaLqczwVC9Fwa+lQu2Bdqzhtt15K5iX3vZpovnFviS3ZVrsvCuQ0EgnvXW6p59brBblPQnv9BoyFi/fqTDpJBv0myoVAEglV/gh3jVZm4YF/w0I5R0gUrEFK1g+gqZKupP4yO3OFrrD4y1gcr7JI0zRhm3OpWvoO4PKCgn1vTF7LJgyZ18qB/Q6U5avxQc9tL6UcXrLpyibnqqqVpf75962Zz9Phh0vIdZJIH8WSJA0d0lwgkD+j/6XddkQfGDnlgCQSD3agVGRAIhf8lmxKRqZrHLOmm9g3dVHNJGAaB4F+BQDI1NnTUB22Mn5KlHR2iYMWBbNf1p8kZ4f0sEHYsWchu9+gcPkcjRqgchSAQrPNZqzOlmc/zboP8K0q8qxUQEAgeC4ToigLyV7Bx3B+wb/WQ3kxlKiSBYNWhwqV7M1zrb9Dyxd3PZdEIhKyhqcQYZhzpRr6DuDhIjDGtYyxpQPLg9HNmm02RJqVTFhLFQVfUV5obbr86rSB4a8P9VqT7+frbrpKe70BPJQ+SkiRSzoOTzzi+Sx4MjQxzLd9BXBwkCIRpWpEBgVD4AiFG7+i8YX8MQ94R7O58pv1AIPhaIGh9RJ+f6wbf4HE7W2JnZBiN1nFreCmNnkiVT8LvAiFGr9jw4o/dKyt7MDEhZKEIhB3TbKykkP4aqm6w28pEWV+twIBAcK+NpMvsbw3Fd2EVmbTXq2DflgdZe7w8hSYQon0oDcF3TVpfnypHGASCJILDglVuTFnoFgmrKtDP60bWKc93kE4eUBzf8ZeMUxQyxayZhyjJd5A86iDdKgtVDTXW76gZdZBdHlAEgoFyrciAQCgagZCQbM4aWv68h8dEN8276OU/3+OBQPC3QCBoWoqVnd7laQKU8JIJ9hcnI1toPi596VZWJoO9Q2VK92BeIALBggf5/9FqKZmWzZMQX9NKDcnD6wtKIHRLaMiOyrISh+qgteNvSzedpxCAQHCvvaTrp4ho4kL2sOtt2OCvUC6GxLIUoECwiOYqYW+rqyv2Ii0prKXbv4cjELjge1C/S2VQfA+xQlNML2OY8aoX8qBnqJ+ykCwPKGqHhszPnl7nWB588ex6MzREKJ+y4PUSjZnkQZnBXpa9ZrMfgEAoLoHQc3kk64XFreGIz+sGmy3zqxcEgv8FQpyKmrIKLtilquaFd8uTINhCJ0lVE6F14mlYt91VQ2zG33VDP46mAGTadyEJhMQXCV2wRTKznMemNV3JQ5ynzc4utS5cXbqwF2Ujjy1pK3U5ygzH9zStqKQ0mZhLQCD4QyDEiSXslL0iUKr4O61sRKs6JZehUAWC1Z4H85/R8qLZVxBxmnA1MIXuZRnPnfBOICRCeW1IalI+IFqCksRHhiV8cwpNNcFhwdNU5jvwlTyoTx03rVzoWCDccPECf8uDkPx8Bz2j7GTlDRQANfRmIVbLDX48JTKUMc0htkzlpujDHju4GB5cgRysefRBfTfdYBfFkm7mO22AEm5tobZGKzU4TcSZllZtJ0o4RdIjB8m2PfbStoALPrQY5XIy9LJBK69Evyrxp5y+UMTaASUDPJbmWWfaF61EoGIVDNeh6Q2GPpBGWegGvzWWBDHf4/malivUBVvGg/wAN1cUAKULLY0dXTKUXxtb9nV7/glz2WPc4HPKjUBjsfeh1gglEZjMBbtJN/gnjurKYN9ZS0Qa7HSaXqIVARU0Wjak92cGa6McRjQNI7baUk4fvJQXONgcLDOGGdtV5jvIKA5cnrLQM/qb+x6wu2OBsPd+E13Jd9BDHGSQB6rzHXSPwPZCnEsIQDoqKyt/YQ3nDvKI9TWWDLnB51hD0QVbFg9u8PnWXD5aXizE9mUGG0ZfB/2+ljjwD9YX/1qd0XKMtHQlF3y6LlgnF+wsWoouob3Ni84bpZ/xQ+nlviJYUeZWW6N2zQQbT+WjstHIoITrYA69BHKD768H9UGp5puWGpSzICACdbQeunXOqP+IDlldRnUX609O0IW+J/U1Qoif2N02JQPz4muhG8SWYRTUvnWhH05tPlZXixP7XroeYv3ykfRlj0Zj0XKbxbYSFChMKioqfkoj1qx2bOVMYcdYHykS+4HufefMcsEOotE5ND1KK216U24oSrJrfZU3+Nwd1z1fEq1DfrzVtxq6oLrWSoiysrIfUXJwJlgD5cKITstlnTTCNbl9RduY+ilqFsZQY60nUxZ8IA/6UQzub7766J225cHrq+/uuWyj4nwH0fB8ykI0ggGzrKZstSuNEwAAAChxYlMAJI5ACEzx+pgAAAAUMMGhwX1LId9BOnlAsfDsE2wLhAVnHe+/KQuuyINAVB5QVJft7XW7BQAAAEqBcsEmyBQIMhK6AgAAKGFaW1t3qhlmvJxtykIx5DtIJQ8oho5rNLe9tDmrPNj20iZzWLipBPMd7JAHfWsCf7eTaAYAAAAA+WNNFZEoEALVgd/jvAAAAMiL4LDgISUzZSFJHsTjsVuuyCoQ1tx8eQpxUOT5DoIJ8iA6feEgXG4AAACAO3DBT5U2+sBg7xR7gjYAAAAuUDam7EfBIcE3i14eDE4fM4+ZklUgzDj6oBLKdxDoIQ/61gT+kbw+NQAAAADUQUs8yhMI/BqcKwAAAFKobq7evxTyHaQLo9kwP9nyWFp58OlT60yjqcb7KQteyYNgwOxTU7YXLjcAAADFiC70/azs1kkRW5rSM7jBnpW4AsPBXh4LAACA4qJXcGjwoWLPd5AyBkVXVbh22fy0AuGai+aVXL6DRHnQt6bsUQx7BAAAUKzogj2RJungHV6ViQ/mP9MN/r2c1Rf4V1hyEwAAgFSqh1b3qx5a823RTFmwIQ8SV1Ro37slrUBo3StScvkOEkYefNdH8EpcbgAAAIqVtALBYO97JdB5iO8uMf/B1V4cAwAAgCKnprlmrufywIUpC8nyIB5vrLuvhzx4c/0D6vId+HjKQpdACJad5XW7BAAAALwQCBQsxGq9qH1u8MukCYQQH+zFMQAAAChyhBA/rB5Ss9a3UxYUygNrGsPKRT0EAv1bqeU72BFlG5A4EQAAQCkLBN1gK90uTx/R5+dcsC+kyAPBb3G7/AAAAEoIMUL8saa55oNEeVBtUx5U2ZQHlR7nO0gXUw7f39y2dXOXPKD/nnr4/qWV72BHfMiq2J+9bo8AAACAtwKBf9l/QP/fuHkWuOAnypEH7JtAMFDuZtkBAACUIFVNVZGaITXbizXfQcoY2M9ajeHlNfd0CYSXV99jBpuNksl3kBDb+1azCV63QwAAAMBzgRCVCLe6dSb6hfr+QTfYp3JyH/Bj3So3AACAEqemueakYs53kCwP4qsszDx6apdAmHH0lJLKd9CV96C6rNPr9gcAAAD4RiBQLgTB/qK6HGVlZT/SBV8tSR7cp2lab9VlBgAAALqoaqpZUND5DgY5kwckCqoaqswPNj1qfrR5tVndUF04+Q7yn7Jg9q0heRBYjEsAAABAKWFHIOiCb+eCT1dVhoqKip9yg/9NUuLEp6qrd/lvVWUFAAAA0tG7urnmWkejDnLMd2BPHFQ6mLJgTx5ExUH3JRqvWDzHvPzCs0sp34ElD/pWl12DrxUAAABKDZsCIZ5X4NKK2orfSt2/oQ/UBX9BUt6DrbrQfyezfAAAAIBtKAt/VXPVdcWW7yBx1EFyTGzb1Yq8xEHh5DvokgdYcQEAAEAp4kQgRHMisE91g52RZ4LC3uVBNpxWSaDRDZLkwdqymrJfSawaAAAAICd6VTdWz/P9lAUJ8qDU8h1Y0xZqyi7AyAMAAAClimOB0D3XwGbdYOfrgh0cEIG68mD5LpWVlb+gZyfaNh/Mf1YhKv4YqAlUl4cCI3SDHaULdpUu+LuSpivEy3HZzgN3/rHXdQkAAAB0UdlYfWJVU/X2Ysl3kEkc+FoeyJqyUBPY3qembBaaOAAAgFImH4Hgg3hXD+q7eV2HAAAAQEoqmypbqpqqP8htyoL/8h0U4hKNcvIdBD4uqynbA80cAABAqVOIAoEL9g0XfAET7Jde1x8AAACQkYp68ceqhqq1xZDvQMqUhTo9f3kgXM138ESgMtAHzRwAAADQNC74ci7YFwUiDj63ylvN/4RzBwAAoLCSKzZWza1srPwW+Q4KI99Bn+qyb/tUl50lhPih1+0HAAAA8NtzTbkRaNQNdrJusId0g3/lK3Fg8E2UPwHLMwIAAChoqhqqWGVj1X3Id+DvfAd9qsse6VPVp7/X7QUAAAAoBHZp3uX/6SG9WRfsaEpQqAu+hQv2rYvS4GNd8Lt0wY5hdezPXtcHAAAAIJNe/Rqq9q2sr/on8h24uESjYWPKQnXgH3+uLts7ng0aAAAAALmPUqioDdToIjBZN9hsbvAVumB3c8Gf44J9luOUBPq7F3SD38oNPpcH+QF6SCfh3xvnCQAAQFFDQ+Or6qsm96/v/1LRLtFYIPkO+gTLXu1TU3YkfUHxul0AAAAApQAt2UjLOFYEK8p0Qxc8xAfT0o3lgk3QhT6S/pv+TRe60S/U9w9YdhEAAADQNK25ufkH/Rv679O/vnJN/4bK7b6QBwNKIt/B9r41ZautEQet2k5ojAAAAAAAAAAACoaK+oo/VjZUdvYf3H9rTvJgUAnJg1zzHdQE/tG3JjCnb7BvmdfnGwAAAAAAAAAAyJvKhso+lQ2VU/sN7nd9v/r+72cfdWBPHpTblAd6KnmQdcpCue/yHfQJln3aN1h2X59gWWdfo69AfgMAAAAAAAAAAMVM7/6D+uvlg/pPqBhU2VkxuN/KfoP6r64Y1H9LxaB+r5QP6vdB+aB+3xROvgMnow7Sy4O+RuCbvsHAB32D7JW+BttSFgys7hsMrCgLlnX0rWYT/lTJORIrAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/pbG85sqM9fJ/DON/u9mc3N/8g47baIh1WOVrHV6b6+fF7T/xd1mNoG1edubyRGzvaIxd3TgoffWxrC3dWP5G/ZNn2QZpcenW0jRtNddzZFn6ssy2ytbMt8npHe+SZzrbInR3t4RM628f/KZcNR+shWz2FV9I5OXZSSyinfUwKT3fcntoiF2oKObq19cc5tPGuOK5tXP+sx53h7zvbw2fFf6+zPXJl+t+LXJltP8e2hptzOYYjxoz5keYS1D472yJnd7SH13S0RV7pbI/8o7Mt/FRnW/jezrbI/OPaIvV2ttPa2rpTPuft2Law4bTs1O472sJzOtoiD3W0RV6ga6+zLfJ89P/DZ3ZOagnmVifhuZnbSOSWjvbwFZ3t4ZOPbQ8Pp34zl/3YbYfpmN3a+tPc6nv8YKdlnbHPyP+07j9t4bs62sMvR9tJ5PnO9sjqjrbwsmPbw/tqittpPu3rmD3Dv8y0/WMntfxflv72cDvtnNpOrsd4bEvLz6gd03UYuxYvymU7He2R23O+DtvHNWoucXzruN/T/YvKG+1zIq93tEVe6mwPr7OOoS1yaueklnFHjh//37nu4+jWUf9D97nOtsgNHe2RLbF9vNLRHnm8sz3y1462lkmzW1v/w+l2Z7WFa1PV36y2lhHJv0vXW+rfDdfmdC7bIqem+t3O9sjdKfZzTNZ9tIVnO20nnW3h07Q8oPtKR1vknI728CM7+u7ws/T/nW2Rq6ivmdUaHkTXm53tzWoPj8q1zXe2h6/TFEH9RoY+5cbE3+1sDy9I1+/Y5bjWlorodqh9h1+16rU9spmeR6lvmjkpUiX9IAEA/ocecma1jRvb0RZ+oLM9Ysajoz2yNPYgfR49zHW0h6/vaI/8raMt/BbdjB3sotesSS0D6KbT0RbelrAPeqmIdOw9Zmf6pdn7Nf8/ejmim3Js/6fTg8fUqVN/aOcFsbOtpYluQInH0NkeeTj2In5HZ3vk69i/be9sD19DD8p2Cj+zdexvU9dPeGbnpMiwGftM/LUmieP2DOtWx7zjHNzY2TZu8rGTWlqsB5b28NOxf/+usy2yyOlDCnX0s9rD7Z3t4Y8SjuVtOs+0PUsgtIXfSdj/2ll7jevjZB8kfKz6ir4UJZ6Li9K3p8gGTSF0rmNleLKzPXxpZ1v4gtgxW22tK+gFl8pJL3Jt4Zvo+K1/bw032Hr4awsfYJ2beP21RV6Y1d7SmliHJMo6WyP7dLRFPkyo53ePbRu3tx1RQS8Ex7a1DKXz1b3skTtj9XtOrH6v7mwL39bRHn6Ofj47HP6J5gLRcx/5orM9/H1nW+TyztaWA+lFkIQCtbVYWc+1sy16iY4d3+bE89bRFrm2e9sKP0j9lbU/67yF19C/p3rwTsdxrWN+Re0xYburZ7VHptK119kWPjjp+r+FXiKc1MuM1sifOyeNmxi/hqPtI7wt1g7n0/mKvUTH2+Lf7bS7VO2Q6rxbX5WiHaZj9uzZvTtax9VRW05qX89H657KG17S0R65LNo/RR6lnx/bFp7gqD72GrtL7IWWtv2o9VDc1jJpVnuks6MtvCl+3jWF0PW2Y//hlVYfGD2+e5PuhdQvLou+hERuiZcvfu9KB9276Bx2toePTarLR6m+EuR4L6vOW8dNSbrHPEfnbWb7hL65HiMJ7qR++GunbTe6nfBnVB7rvLdFLrTqia7J7v3nY93aRnvkYes4Jo3bQ1MM1XVHe3heR3v4m/g9MlqGliPpHtrZHjme7jmdbeFvY+dgRi776WiLHBXt36L9Nr1407mk89TRFl7Y2R7+MnZt/5OeD5xsm/rozvZxQ6g/SGp/7ya3NZJvUZkcOT22vzn0/3b6eZKgs1ojeyY8E1lB96Dk3yUJS9clPTOQRCX5Qs+MWffRGv5jZ3tkfEyqJLb9+bG2Qy+kF1vPAVGB+D7dr5zUV+K+LEmwox3+O3avOIT6Qkv8tkc27CiHvQ8wne2R/el50ZJR7eHlCWV/OsWzzTLrvtQWXmX13e2RtzVFUL9h3UuiL/Jm7B74ET3bJb/MU98Rve9EnrR+f9K4iXY+ynWrg7bwtx1tka+sd4LWyH70b/QcF3+OpGtCyYECAAoD6tC7d4qpO1l6+HcoEBL2EVmcdGPcLfHnHe1jyzvbw59S55/L9jvaIgOTXixmJb6cx2/8sYez61XUT64cu+e4QOKL/azW8KEpH0gt69t1o7yDHvid7quzLfJGwjaeSPwZPYB0vxlHtpLcyWEf3R6C0r28kMF2SyDQA1bivx/bHgkntcduZv64SZHf2BUIcehGm/CCeFf63wu/lviC5/SYrBfbxPbY2nJgyv20h3d1SyBYD8Btkfdi197JKX9ObdyhQKAROYn/TmIg6UVrZuLPO1tbf+5EINDvW1+sdmxzMb3UZWzTbZHnZ+895r/sbL/7NsKrEtrbdz1e3ulFdUf/9Wmu/Ux3gZC+HaaDrvmkvvSaVL9HI1tIFjkVCPSyENv2wyn6sF4x6euKQCCZkfjv1A90e7Fqj4QTf05C3I5A6Nre3mN2TnrRviCLMIv/3qo8D5Gu/zX0Atptu5PC03LYzmf0gpI8Wiep/zw98efRkRWR71QLBOu6sV7yEl4g04wUio46ibxJQsHpfrp9oGiLvJ7qRcwawdT1nBH+nl64ne5n1qTImKQXVEvOpPqYsuOZZ9yQXM5p0sv95x2TIv3SPjPk8FwWk25d+0h3HyLplItAoGvXOt8JfR3156l+NyZNzFntuzL7L8+R93qUtS18SeIx0Uembn83KTxNpUDvtRB/AAASx0lEQVTo2k9b+ImEc/dG5t+N3JD8rJcNawRV/HkmxfMFPR9FJTgEAgAljd0X5OhXktwEAj1wW2Z+R2f/1qy9xv2i21DL9vAaO6MOnAqE2DEmfjHZbvcB0A2BQHWaUO51GYeH04NJvA4nhafLFAgEPfAlPcCMVyUQYl/IXBEIs1ojZU4EAj2YWl+sClgg0DG7JRA6JkVGdr10tbUMTfk79JXfoUBIHpmRTSBE9xP+zK5A6PbS3hZ5j77upSzPfs3/LzZiJn7trNAkCoTE85XQhmY73YebAoGgkQROBAKNnEr4EnxGym22h49xQyDQA3DySK5sAiEuBPwuEGi6Xmw7u8e/jMfa3cacXjaT+sFsAiF+r1EtEKxRBt0ESeaX9picOsXJPmLSaHvC9bBXut+lUWAJffv/b+9MQ62ryjh+rG9BQfUpyoigDxVR0JcGkCgQ6651XzXO3resLMTAQqTBc1+1MqKSaLCITBo1C8NyoIIyGgybB9Iyi0iywSYzzAaHXi/xX3vvc9deZ09rn73vPfee3w8O4nvP2ePae631X8/zf/5RjHFiBYQs9aL0DF48tICwsA8JoxXRmeMLCOaCPgJCEQGVv+f+0iTqZgK23ekS6ee2rZX21N4UKyDoXXgYBITtLAIjewe+ZONJNcdwMwICwJrTdYKsUN8ueXZ1LE7azMfzFaerNTiPCa+KFRBmqX1zaVKbmhNXQUBQ7l5wTRpzDOeh9XnH0TWnr6uA4MKgWyZoQwkIyiNW+O5kRNzELzVXKdUlRkBw55HaSxW9clAFBLUNTaRj20gfZlObeO3qkjq/kq45k3lu+FXhoLCLgKDBrtJF2vah9lcO5TWXNX1f7cE7xwe6hPPGCAhucl0+tytitr8fAoImkuoXum5bIfTeNbipalKhfkCC1GRELkiPHK+c9fDf2wSE3NfnqqMnn/zoVRYQ8vSYPzghNDVXliY9kXnLSg8K++ZOAoK8PxL7rMmoqQsuoqBop79q+41Ea61Gx+zHT5tSmkSdyFjVf4bjkM4RCFv2+eUwdbsTijFLCwhZCsQn2p71sQUEvUfVN8RsWymugfhRKUb6KG1C6WSdjj3deJ6EjVgBQREOSnmYHHABYZaJuMV5VkbsyFOiTlwAgDWhbYKsAUefTqoKl5/tdYoynIld6e0XgWDfWh4YmhesgoDgjJ3846pZva1LBYk1dmsVEFJzYjABedXQAoImd23nOTZdBIRYVkVAyCbG9atkYxAO6JzxYGpP7WMo1kQXAaEri9E2m+c0fl95tf6+p/b0IQUEeaoEg+IPrKqAoNzyPmZ0eWj7PJ3M5Qxvmdf2yc0fgzYBIXp7+yAgOJFD0TKJvajwJmlbzY6li4AwNkU6ifcu6Gzw3JVMgLF3edfuZ43fdyLgbpSg/FT6CAhvnL7oGbkYMRc4Z4n9px+CP4SAkJkM25ua0lzGEhB0//SJ3W6+7XeXn5fNEyZ7QJuAsFeMLSAczVM+vH7kOrXNvViMAIADRNsEOTOJMZ8cYl9ardrNlZ53jEsbsXSIQLi8NDCMWD0cU0Dw8oGzDqnFNEtGY8HA7YwhBQSpzV6n8WBs5YouAoIz5Ent5ZN95DALCJlZpv3dZA/RwNlPUfIG9TLI+qA8TlZNQNCqVXngvHFK876DiVjkBL81hSHYft/w77EFhDyKYCcmOic4vk+H7UQTpcywsOx5sdccBgFBYfxZG8ueuVxQ8A1y/7assLcKAsLCvUrMa4beR5Y2WLovX2r9TWLu8N4R/+4rIOj/dU7B/m8uJuJDCAieB9Pd3jv1fj8ycCwBQaakfauMFCadxWdIQ+sm1kZAOPnkR0uwWnhPJ+YORTeF3jEAsKaEE2TnkO+c8rOPjGqGEhDc/qb2ZcEAtXepqi4CQpZbvNtBqjxR1PGOKSCk9saYDikcNBWlMJcVEJz5nHNwl3nbfNu9SixWOEkvtqfDLiCk5u+15ZZKQsMAAkJifuRfX1f2c48FhN0ohNJz5k9kH1TK0rJ+DIMKCKGxa0vYvKv2Uj6v1tKbXQQErQLm1V7mwpLye/uu9gwtIEgYKj+/9mv6974CQiYim1uq2kl+bb67TPWBVRYQ8mtZUcYuu6aDCAiJuTr0llnow1rEsgMhIATRe7GpCV1QhF8wrmgt0Rd6C4TpczECQtVEvEi1GkpAyP7fnlryeUjs7UWazlACQl4lZ7efchPUfmO/osJQ8enrnRW93zUREIo24Y9Vgn73fkWB9C05DACHhL0WEFzpRS8sUINpDUiGFBCy8kDyPTCXBSGzt0TnLo+ZwuB7GnRQ0rOSjqWX+fm9BYTUHMtKCu6KBvk1uiMvdbXgRt9xH2svIKhmclH6LvyUVnsOkYBQTJjcSrJX0jL4fKVP9ZBRUhhKVQ/a05pcmbWyePfZvgJC/vt/BGVVs+oLiX1vU571QRcQ5vtw5T1rBac/yel7ctgiEFL7k+r3wq753jICQlaS1NwfhqGrJF/Qx3/hEAgIpWs2hmFjhafBla3H5ZdkVRva3Hz4MgKCjA3DCXNWXnY4AaGq31bVp8xMePUEBPWv3rZ3+o5VYlknAWFewSyx1wdl2P3Pgo8MAKwRbRNkmcIMKSBk6QQaOHuDx8TcvIyKvBiBYO+SQ3i+GvAD15klG69Q6bHYbY8sIPj15xfKijWWk6op+RgRgfAbV8M6tWcUNbTzz7XLnFOrB4JqJx/2CIR9TGHIanfvj4BQzud3Duk/XZwc9g9THziF4aJggGujPBNqzCK7CQjmmHv2MvPJP3vn84tlozSGFhDCSZNWJpdJYQj35a5BYr60MEjtWLFjSA56CoPSAfN79pEKkcKLkLL/W2bysyICwnnBu+WVQ++jojLKdW2/8UVB9atR+6sQEITSUfzSi/m9PGtIAcGVig4iIrcT86axUhh0LftHINgf9xVplmHdBISC7al5vBarFquDuMi9yvKfALAGtE2QpcIrxHaQfW2Z17rc+tSao6l9ddhZjeWBsNQxj2ui+L7SZLvFVEiTlvKxxA0ealMYApPJWGEiRkBwqzo9amQPyWEWELRyq8HlZEWQo3gQnu/M3VYgheGVpW1NN85s+f5Z5YFTXBnVuhSGvPSXPyi7tO857YWAkJ2LPbtrJYKu6D3hh/LPUvvDyR5z0AUEmfy56KfKNIkwbcSce5AFBKVhjH0MuSnivAxmW9nhvJLKTlfTxa4CgicM++f7nyEFBHH+dOOxijj1jl+GkPeN44GgiK5+5tyhj0rV9TrUAoIWxXbfFXfEpjQtwXEutSG1f5vvP4h2AoA1ImaCrDI426k90mc/s/TIc/KV7qIO83HbqfmGt+/7zptuPuUgCwjOdKmD0VLdZLCt6oHCCv0BROxqZZ2A4EzwSm7M5r9970XXMo7uu+mRJ8TUkR+Kwywg+CjiRkLd2O7J8jXRKmfHCceHVkFAyN9lO13d6bP0k2XK4dWbKAbVaZbKUd8LAaG0v62NU7qaauVlzr5Ru29jHuYqCHQsyzc0B1lAKJ6xumN2Ao3X3hXt0uecVkVAOPrSjUeWy7DaG9p+I5+T2MgWJ77sPgt3N71LM0PC/karTQLCvERtWWwcVEBw55CaFwSVJGrb7RBlHIXGGjGltc9Nzctj+29Fb6rvnBwGAcEbB26n5liTKWouNsT5fiX2Ddtb5nV1f/dFb0UCxR4/ABwSYibIzlcgsV+L3YdetFluvfminwMtsyzfo0CeAH1ypFdGQMgiLH7fdduZQ7a9rYtJk/Ki/TDGnp16bRUGZxilkpq7f79Zk4kxBQTVWm6aUIzFuggI5yX2uYr4GTtHVBN55f7W/V2DxyEGHEMKCEK54N5g/9am6xSUO2udrMQICCq96TvluxSs00563KoLCK4sY2L/2WZAWaCJkbbZJDhsJ+Y7+f2I7mfWWUBw0WmJvbMpFVDmnKV3c88yeqsgIIRGqJlRa3O1l+3UvGU7MV+N3McR/1z1Tq39bmLPXqaKUZuAkFe7+f6YAkL+9wv2UkBQCU6JqF23LWHcr/qjd3ObSK7xjErxxp7HKgoIs8RcWHr+prtVM3xy/4x/xUb9acyrUsxdhDKJOX3OAQDWTUBI7PWxOfIa0MxS8y1NMKpqh0vpjKnHvtICgnJ5I0Nv3apIrvg787lk4+k1x/EWb7JzuyYd0efSUsZRg4pla9FHCQiJ+bJKWU72mHUREFT2UxO8ychoIu9WN6fm8fWrWu54d7anR562KgJCXqFlN2c52dxqDZdO7L/7nENbGcftxLy4PPm33+wjpu6lgFC41Ov9GyMg1EVauWow+f0YorzvuggIzktCppwtvhwy3xsiXWZVBARFIZTzss33mgxIZXyq1dvI3Rw3S+w13r35atVzeeFpJz2ibO5n3hl9Pi0CgtA71pXHHVFA0PmV/JlGFhDklSNT25jtq0/xzXo1qW4UHFL7n9iy16sqIFyQHjneT62Zpfa7oQ+EM8BMzUc0towVsrIxr7lHbbrq77OpPT1/R9+7X9cAAPaZrCKCuaw0aEo2TtNA3Q3WE2NVV15h0LPUvD53Cf9U1+3rBaRygJlBVnVHJ5V0O7G/9gfoGqBEDJ6PC1cJZql5zxDGOm3Xp/i4kC5FHyiaosfqkctv1MQk28efdc2L8k96QauzL0zGNOnsY2DmzM/8/MbE3KIBmP+dPJXh59757qg8VleDSx1z2MlKoa5rT3mt4ahyeMviBhPTjTODAfvbljGvU+5oYER5Y3htC3PB3RBtN+j5rZzTu+7HTTSCSYDa+rwtbtmTZM7nXLqzih0/naX2j5O9ERB0PL+Tt0Bx7moPTvBI7O35+b5/mfsmI9RgcvuuZSoWiKNT8+yidnsWDbV5TiF0ZpMCe1YR+eNyP7fs82P34VaCEvtN77iPVVWDUQTSMu0yG1iWJoiV7bCJPNS9JGSU3neZ+ePp+XW5KsZIa1dAsPdqwK80Ev273i+qFDBLzNcLcTOm/N0QuCiZwKRW74k+xrtuexde+BCt8Af349NqC5Wpb+Xv3RBz3wo/Ib1bm6JosrQdPzzd3B1b7SLP8w/6W/vhvTKyC1E0i0R771h+LjGueIZ1XLkPy5f7VqDIn19fRLi6aPO6z4pKKOWlp+bi2LQxF81TTMxS88Km8Y/e87umo3ECQj6e0DjlkqZn7HXTEx9VvLdjBYRsTFeuOiPfo/l4aWtzU2OerN2ac12bTOx7J5Fk21E1m/nY8TNajS+eWdcvJ+ZVhbCj6ztZLmXmWv+c5Oe0X6UMc/PZB7yxxJ+2E/MxRY8ooiPzQ1HKUvyC3HzRLLG36n1fvLP0LGn8WwhYywr4AHBAyd2Z68qz1H86uo/nYVY74cDI/45U+vpjMPdURSws1BQPyxCWjtXeGTNBG+L6zFL70T77y/wT7Af8KIEivSMLz1QI9eY5fSa6C515eQL6Lf+7Em/CMnxudb1l1bX5XjZ+ljKNi8GV92w4xj55wS3t73Pe935Wfw3azbZkZBrk/Hb8jJ9LroHULDVXVLXdvP38Mjcp7FcaNLXXNt63xN62zPFrsKz0LB1n5fGrNFti397nXaLf1R27Br/+RCMrw+cZVOXRCnWREX3aYR35CmpQVrLjpybyJMSlapQGt+73980ntYm9U6JQ1SR7TBbK5JXukXkwNpLDTWpraqjn53nRfNLop6Utto9rYsL48+f9HqUGLn7PXFl3fl0noZmYHuTHl87L/HVsv5XaKMepPX2Wmm8HQm7x2ckNJi9uSkHoslCReSJkq7/aV9FXulSe1H6+z/a3k80TwvbiRLaG1KBdsau7gJALvOV73yAO5GUso0wUNYmtGPd1+RTeWFFIAJsl5h2lRajy8/BfpUMpdU6CQs8oorsa2vwDfaJNhuCNEmRdlYX54lNxznpGb4zxlfCRyFOUcK/qD1052hHKpgIAwJJodVLhwS6Hfcs+VaG9XFQ4CGjypxxJtd2j041nKupicoDQJFcGiTp+99+eAiQ0o1VCRUxoxVAr9fmkd0/qucPhRavqrn59euQ5Sgc8/7RTHjP0KrGiMBQWrtQd135fuvHE/RBOYPHdrYWOzLD7RU+WMLwO12g6nT5U0UXqb2VIOaQAK2FZz1PRn8dGtAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEyq+D/8g34pdRX7xgAAAABJRU5ErkJggg==" alt="HeritageAtlas" />
        </a>
      </div>
      <nav class="hv-unified-sidebar__nav" aria-label="Primary">
        ${Jg.map(t=>`
          <a class="hv-unified-sidebar__nav-link${t.view===e?" is-active":""}"
             href="${t.href}" data-dashboard-view="${t.view}"
             ${t.view===e?'aria-current="page"':""}>
            <span class="material-symbols-outlined">${t.icon}</span>
            <span>${Zg(t.label)}</span>
          </a>`).join("")}
      </nav>
      <div class="hv-unified-sidebar__divider"></div>
      <div class="hv-unified-sidebar__footer">
        <button class="hv-unified-sidebar__theme" type="button" data-theme-toggle>
          <span class="material-symbols-outlined" data-theme-icon>dark_mode</span>
          <span data-theme-label>Dark mode</span>
          <span class="material-symbols-outlined hv-unified-sidebar__theme-arrow">contrast</span>
        </button>
        <button class="hv-unified-sidebar__logout" type="button" data-logout>
          <span class="material-symbols-outlined">logout</span>
          <span>Log out</span>
          <span class="material-symbols-outlined hv-unified-sidebar__logout-arrow">arrow_forward</span>
        </button>
        <div class="hv-unified-sidebar__user">
          <div class="hv-unified-sidebar__avatar">AK</div>
          <div><p class="hv-unified-sidebar__user-name">Amara Kabwe</p><p class="hv-unified-sidebar__user-role">Vault keeper</p></div>
        </div>
      </div>
    </aside>`}function xc(){if(document.querySelector("#hv-unified-sidebar-css"))return;const n=document.createElement("style");n.id="hv-unified-sidebar-css",n.textContent=`
    .hv-unified-sidebar{position:sticky;top:0;flex:0 0 280px;width:280px;min-width:280px;max-width:280px;height:100vh;overflow-y:auto;overflow-x:hidden;background:linear-gradient(180deg,rgba(243,234,217,.92) 0%,rgba(251,245,236,.88) 100%);border-right:1px solid rgba(28,32,24,.08);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);display:flex;flex-direction:column;padding:20px 22px;z-index:10;transition:width .3s cubic-bezier(.22,1,.36,1),min-width .3s cubic-bezier(.22,1,.36,1),max-width .3s cubic-bezier(.22,1,.36,1),padding .3s cubic-bezier(.22,1,.36,1)}
    .hv-unified-sidebar::-webkit-scrollbar{width:6px}.hv-unified-sidebar::-webkit-scrollbar-track{background:transparent}.hv-unified-sidebar::-webkit-scrollbar-thumb{background:rgba(28,32,24,.14);border-radius:3px}
    .hv-unified-sidebar.is-collapsed{width:72px;min-width:72px;max-width:72px;padding:20px 12px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__nav-link span:last-child,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__divider,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme-arrow,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout-arrow,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__user>div:last-child{display:none}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__brand img{height:32px;width:32px;object-fit:cover;border-radius:8px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__nav-link{justify-content:center;padding:12px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout{justify-content:center;padding:12px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__user{justify-content:center;padding:8px}
    
    
    
    
    
    
    .hv-unified-sidebar__brand{display:flex;align-items:center;margin-bottom:24px;padding-bottom:18px;border-bottom:1px solid rgba(28,32,24,.06)}
    .hv-unified-sidebar__brand a{display:flex;align-items:center;text-decoration:none}
    .hv-unified-sidebar__brand img{height:38px;width:auto;max-width:220px}
    .hv-unified-sidebar__nav{display:flex;flex-direction:column;gap:4px;margin-bottom:20px}
    .hv-unified-sidebar__nav-link{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;font-size:.9rem;font-weight:500;color:var(--hv-ink-soft,#3a3f33);text-decoration:none;transition:all .25s cubic-bezier(.22,1,.36,1);white-space:nowrap;overflow:hidden}
    .hv-unified-sidebar__nav-link .material-symbols-outlined{font-size:20px;color:var(--hv-ink-mute,#6b7060);transition:color .25s ease;flex-shrink:0}
    .hv-unified-sidebar__nav-link:hover{background:rgba(28,32,24,.05);color:var(--hv-ink,#1d2018)}
    .hv-unified-sidebar__nav-link.is-active{background:linear-gradient(135deg,var(--hv-forest,#2c3a2e),var(--hv-forest-deep,#1c2820));color:var(--hv-cream,#fbf5ec);box-shadow:0 4px 14px rgba(28,40,32,.22)}
    .hv-unified-sidebar__nav-link.is-active .material-symbols-outlined{color:var(--hv-amber,#d4a44c)}
    .hv-unified-sidebar__divider{height:1px;background:linear-gradient(90deg,transparent,rgba(28,32,24,.12),transparent);margin:4px 0 16px}
    .hv-unified-sidebar__footer{margin-top:auto;padding-top:16px;border-top:1px solid rgba(28,32,24,.06);display:flex;flex-direction:column;gap:6px}
    .hv-unified-sidebar__theme,.hv-unified-sidebar__logout{display:flex;align-items:center;gap:12px;padding:10px 14px;border:none;border-radius:10px;background:transparent;font-size:.85rem;font-weight:500;color:var(--hv-ink-soft,#3a3f33);cursor:pointer;transition:background .2s ease;text-align:left;width:100%;white-space:nowrap;overflow:hidden}
    .hv-unified-sidebar__theme:hover,.hv-unified-sidebar__logout:hover{background:rgba(28,32,24,.05)}
    .hv-unified-sidebar__theme .material-symbols-outlined,.hv-unified-sidebar__logout .material-symbols-outlined{font-size:18px;color:var(--hv-ink-mute,#6b7060);flex-shrink:0}
    .hv-unified-sidebar__theme-arrow,.hv-unified-sidebar__logout-arrow{margin-left:auto;font-size:16px!important;opacity:.5}
    .hv-unified-sidebar__user{display:flex;align-items:center;gap:12px;padding:12px 14px;margin-top:8px;border-radius:12px;background:rgba(251,245,236,.6);white-space:nowrap;overflow:hidden}
    .hv-unified-sidebar__avatar{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--hv-forest,#2c3a2e),var(--hv-forest-deep,#1c2820));color:var(--hv-amber,#d4a44c);font-family:"Fraunces",serif;font-weight:500;font-size:.88rem;flex-shrink:0}
    .hv-unified-sidebar__user-name{font-size:.86rem;font-weight:600;color:var(--hv-ink,#1d2018);margin:0}
    .hv-unified-sidebar__user-role{font-size:.72rem;color:var(--hv-ink-mute,#6b7060);margin:0}
    @media(max-width:1024px){.hv-unified-sidebar{position:fixed;top:0;left:0;z-index:100;transform:translateX(-100%);transition:transform .3s cubic-bezier(.22,1,.36,1);box-shadow:0 0 60px rgba(28,32,24,.2)}.hv-unified-sidebar.is-open{transform:translateX(0)}.hv-unified-sidebar.is-collapsed{width:280px;min-width:280px;max-width:280px;padding:20px 22px}.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__nav-link span:last-child,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__divider,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__user>div:last-child{display:block}}
    .hv-fm-inline-form{position:relative;z-index:5;margin-bottom:24px;animation:hvFmFormIn .4s cubic-bezier(.22,1,.36,1) both}
    @keyframes hvFmFormIn{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}
    .hv-fm-inline-form__card{background:rgba(255,253,247,.95);backdrop-filter:blur(20px);border:1px solid rgba(28,32,24,.1);border-radius:20px;box-shadow:0 12px 36px rgba(28,32,24,.08);overflow:hidden}
    .hv-fm-inline-form__head{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid rgba(28,32,24,.06)}
    .hv-fm-inline-form__head h3{font-family:"Fraunces",serif;font-weight:500;font-size:1.2rem;color:var(--hv-ink,#1d2018);margin:0}
    .hv-fm-inline-form__close{width:36px;height:36px;border-radius:10px;border:none;background:transparent;color:var(--hv-ink-mute,#6b7060);cursor:pointer;display:grid;place-items:center;transition:background .2s ease}
    .hv-fm-inline-form__close:hover{background:rgba(28,32,24,.06)}
    .hv-fm-inline-form__body{padding:24px}
    .hv-fm-inline-form__row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:0}
    .hv-fm-inline-form__field{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
    .hv-fm-inline-form__field label{font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--hv-terracotta,#c0623a)}
    .hv-fm-inline-form__field input,.hv-fm-inline-form__field select,.hv-fm-inline-form__field textarea{padding:11px 14px;border:1px solid rgba(28,32,24,.14);border-radius:10px;background:rgba(251,245,236,.6);font-family:"Spectral",serif;font-size:.95rem;color:var(--hv-ink,#1d2018);transition:border-color .2s ease,box-shadow .2s ease}
    .hv-fm-inline-form__field input:focus,.hv-fm-inline-form__field select:focus,.hv-fm-inline-form__field textarea:focus{outline:none;border-color:var(--hv-forest,#2c3a2e);box-shadow:0 0 0 3px rgba(45,58,46,.08)}
    .hv-fm-inline-form__field textarea{resize:vertical;min-height:60px}
    .hv-fm-inline-form__actions{display:flex;justify-content:flex-end;gap:10px;margin-top:8px}
    .hv-fm-inline-form__cancel{padding:11px 20px;border-radius:999px;border:1px solid rgba(28,32,24,.14);background:transparent;color:var(--hv-ink-soft,#3a3f33);font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s ease}
    .hv-fm-inline-form__cancel:hover{background:rgba(28,32,24,.05)}
    .hv-fm-inline-form__submit{display:inline-flex;align-items:center;gap:8px;padding:11px 22px;border-radius:999px;border:none;background:linear-gradient(135deg,var(--hv-forest,#2c3a2e),var(--hv-forest-deep,#1c2820));color:var(--hv-cream,#fbf5ec);font-size:.85rem;font-weight:600;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}
    .hv-fm-inline-form__submit:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(28,40,32,.22)}
    .hv-fm-inline-form__submit .material-symbols-outlined{font-size:18px;color:var(--hv-amber,#d4a44c)}
    .hv-fm-inline-form__success{padding:48px 24px;text-align:center}
    .hv-fm-inline-form__success .material-symbols-outlined{font-size:48px;color:var(--hv-moss,#6f8266)}
    .hv-fm-inline-form__success h3{font-family:"Fraunces",serif;font-weight:500;font-size:1.4rem;color:var(--hv-ink,#1d2018);margin:16px 0 8px}
    .hv-fm-inline-form__success p{font-family:"Spectral",serif;font-style:italic;font-size:.95rem;color:var(--hv-ink-soft,#3a3f33);margin:0 0 24px}
    html.dark .hv-fm-inline-form__card{background:rgba(36,33,30,.95)!important;border-color:rgba(231,189,177,.12)!important}
    html.dark .hv-fm-inline-form__head h3{color:#f5eee8!important}
    html.dark .hv-fm-inline-form__field input,html.dark .hv-fm-inline-form__field select,html.dark .hv-fm-inline-form__field textarea{background:rgba(36,33,30,.6)!important;color:#f5eee8!important;border-color:rgba(231,189,177,.12)!important}
    html.dark .hv-fm-inline-form__field label{color:#d4a44c!important}
    html.dark .hv-fm-inline-form__success h3{color:#f5eee8!important}
    html.dark .hv-fm-inline-form__success p{color:#c9bdb4!important}
    
    .hv-unified-sidebar__drag-handle{position:absolute;top:50%;right:-14px;transform:translateY(-50%);width:28px;height:48px;border-radius:0 12px 12px 0;background:linear-gradient(135deg,var(--hv-forest,#2c3a2e),var(--hv-forest-deep,#1c2820));border:1px solid rgba(28,32,24,.08);border-left:none;cursor:grab;display:flex;align-items:center;justify-content:center;z-index:20;box-shadow:2px 0 8px rgba(28,32,24,.1);transition:width .2s ease,height .2s ease,box-shadow .2s ease;touch-action:none;user-select:none}
    .hv-unified-sidebar__drag-handle:hover{width:32px;height:52px;box-shadow:2px 0 12px rgba(28,32,24,.15)}
    .hv-unified-sidebar__drag-handle:active{cursor:grabbing;width:32px;height:52px}
    .hv-unified-sidebar__drag-icon{font-size:18px;color:var(--hv-amber,#d4a44c);transition:transform .3s ease}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__drag-icon{transform:rotate(180deg)}
    html.dark .hv-unified-sidebar__drag-handle{background:linear-gradient(135deg,#4a5b49,#344333)!important;border-color:rgba(231,189,177,.12)!important}
    @media(max-width:1024px){.hv-unified-sidebar__drag-handle{display:none}}
html.dark .hv-unified-sidebar{background:linear-gradient(180deg,#292622 0%,#211d19 100%);border-color:rgba(231,189,177,.12)}
    html.dark 
    html.dark .hv-unified-sidebar__nav-link{color:#c9bdb4}
    html.dark .hv-unified-sidebar__nav-link .material-symbols-outlined{color:#8a8f80}
    html.dark .hv-unified-sidebar__nav-link:hover{background:rgba(231,189,177,.06);color:#f5eee8}
    html.dark .hv-unified-sidebar__nav-link.is-active{background:linear-gradient(135deg,#4a5b49,#344333);color:#fffdf9}
    html.dark .hv-unified-sidebar__user{background:rgba(36,33,30,.6)}
    html.dark .hv-unified-sidebar__user-name{color:#f5eee8}
    html.dark .hv-unified-sidebar__theme,html.dark .hv-unified-sidebar__logout{color:#c9bdb4}
  `,document.head.appendChild(n)}function $a(n){const e=n.querySelector(".hv-unified-sidebar"),t=n.querySelector("[data-sidebar-toggle]");if(!(!e||!t)){t.addEventListener("click",r=>{r.stopPropagation(),e.classList.toggle("is-collapsed");try{localStorage.setItem("hv-sidebar-collapsed",e.classList.contains("is-collapsed")?"true":"false")}catch{}});try{localStorage.getItem("hv-sidebar-collapsed")==="true"&&e.classList.add("is-collapsed")}catch{}}}let Ks=null,e6=0;function t6(){Ks||(Ks=document.createElement("style"),Ks.id="hv-crud-modal-styles",Ks.textContent=`
.hv-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99998;
  background: rgba(15, 18, 14, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: hv-modal-fade 0.24s ease both;
  overflow-y: auto;
}
@keyframes hv-modal-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.hv-modal {
  width: min(560px, 100%);
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  background: #fffdfb;
  border: 1px solid rgba(28, 32, 24, 0.1);
  border-radius: 18px;
  box-shadow: 0 30px 80px rgba(15, 18, 14, 0.3),
              0 4px 12px rgba(15, 18, 14, 0.1);
  overflow: hidden;
  animation: hv-modal-pop 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes hv-modal-pop {
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
html.dark .hv-modal {
  background: #24211e;
  border-color: rgba(245, 238, 232, 0.12);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
}
.hv-modal__header {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(28, 32, 24, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
html.dark .hv-modal__header {
  border-bottom-color: rgba(245, 238, 232, 0.08);
}
.hv-modal__title-wrap { flex: 1; min-width: 0; }
.hv-modal__title {
  font-family: "Fraunces", "Spectral", serif;
  font-size: 1.32rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  margin: 0;
  color: #1c2018;
}
html.dark .hv-modal__title { color: #f5eee8; }
.hv-modal__subtitle {
  font-family: "Spectral", serif;
  font-size: 0.85rem;
  margin: 4px 0 0;
  color: #5a6055;
}
html.dark .hv-modal__subtitle { color: rgba(245, 238, 232, 0.65); }
.hv-modal__close {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: transparent;
  border: 1px solid rgba(28, 32, 24, 0.12);
  border-radius: 8px;
  cursor: pointer;
  color: #5a6055;
  transition: all 0.2s ease;
}
html.dark .hv-modal__close {
  border-color: rgba(245, 238, 232, 0.18);
  color: rgba(245, 238, 232, 0.7);
}
.hv-modal__close:hover {
  background: rgba(192, 98, 58, 0.1);
  color: #c0623a;
  border-color: rgba(192, 98, 58, 0.3);
}
.hv-modal__close .material-symbols-outlined { font-size: 18px; }
.hv-modal__body {
  flex: 1;
  overflow-y: auto;
  padding: 22px 28px 8px;
}
.hv-modal__field { margin-bottom: 18px; }
.hv-modal__label {
  display: block;
  font-family: "Spectral", serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 6px;
  color: #1c2018;
}
html.dark .hv-modal__label { color: #f5eee8; }
.hv-modal__label .req { color: #c0623a; margin-left: 2px; }
.hv-modal__input,
.hv-modal__textarea,
.hv-modal__select {
  width: 100%;
  padding: 10px 12px;
  font-family: "Spectral", serif;
  font-size: 0.92rem;
  background: transparent;
  border: 1px solid rgba(28, 32, 24, 0.16);
  border-radius: 10px;
  color: #1c2018;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-sizing: border-box;
}
html.dark .hv-modal__input,
html.dark .hv-modal__textarea,
html.dark .hv-modal__select {
  border-color: rgba(245, 238, 232, 0.2);
  color: #f5eee8;
}
.hv-modal__input:focus,
.hv-modal__textarea:focus,
.hv-modal__select:focus {
  outline: none;
  border-color: #c0623a;
  box-shadow: 0 0 0 3px rgba(192, 98, 58, 0.16);
  background: #fffdfb;
}
html.dark .hv-modal__input:focus,
html.dark .hv-modal__textarea:focus,
html.dark .hv-modal__select:focus {
  background: #2a2622;
}
.hv-modal__textarea {
  resize: vertical;
  min-height: 88px;
  line-height: 1.5;
}
.hv-modal__select {
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%235a6055' d='M6 8L0 0h12z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  cursor: pointer;
}
.hv-modal__help {
  font-family: "Spectral", serif;
  font-size: 0.74rem;
  color: #6a7065;
  margin: 5px 0 0;
}
html.dark .hv-modal__help { color: rgba(245, 238, 232, 0.5); }
.hv-modal__error {
  font-family: "Spectral", serif;
  font-size: 0.78rem;
  color: #8a1f1f;
  margin: 5px 0 0;
  padding: 8px 12px;
  background: rgba(138, 31, 31, 0.06);
  border: 1px solid rgba(138, 31, 31, 0.18);
  border-radius: 8px;
}
html.dark .hv-modal__error {
  color: #e7bdb1;
  background: rgba(231, 189, 177, 0.08);
  border-color: rgba(231, 189, 177, 0.2);
}
.hv-modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 10px;
  border: 1px solid rgba(28, 32, 24, 0.16);
  border-radius: 10px;
  min-height: 44px;
  align-items: center;
  cursor: text;
}
html.dark .hv-modal__tags {
  border-color: rgba(245, 238, 232, 0.2);
}
.hv-modal__tags:focus-within {
  border-color: #c0623a;
  box-shadow: 0 0 0 3px rgba(192, 98, 58, 0.16);
}
.hv-modal__tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: rgba(192, 98, 58, 0.12);
  color: #c0623a;
  border-radius: 6px;
  font-size: 0.78rem;
  font-family: "Spectral", serif;
  font-weight: 600;
}
html.dark .hv-modal__tag {
  background: rgba(231, 189, 177, 0.16);
  color: #e7bdb1;
}
.hv-modal__tag-close {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  opacity: 0.7;
}
.hv-modal__tag-close:hover { opacity: 1; }
.hv-modal__tag-close .material-symbols-outlined { font-size: 13px; }
.hv-modal__tag-input {
  flex: 1;
  min-width: 80px;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Spectral", serif;
  font-size: 0.86rem;
  color: #1c2018;
}
html.dark .hv-modal__tag-input { color: #f5eee8; }
.hv-modal__multiselect {
  display: grid;
  gap: 6px;
  max-height: 140px;
  overflow-y: auto;
  padding: 10px 12px;
  border: 1px solid rgba(28, 32, 24, 0.16);
  border-radius: 10px;
}
html.dark .hv-modal__multiselect {
  border-color: rgba(245, 238, 232, 0.2);
}
.hv-modal__check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Spectral", serif;
  font-size: 0.86rem;
  cursor: pointer;
  color: #1c2018;
}
html.dark .hv-modal__check { color: #f5eee8; }
.hv-modal__check input {
  accent-color: #c0623a;
}
.hv-modal__footer {
  padding: 16px 28px 22px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid rgba(28, 32, 24, 0.08);
}
html.dark .hv-modal__footer {
  border-top-color: rgba(245, 238, 232, 0.08);
}
.hv-modal__btn {
  padding: 10px 22px;
  border-radius: 999px;
  font-family: "Spectral", serif;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.22s ease;
  border: 1px solid transparent;
}
.hv-modal__btn--cancel {
  background: transparent;
  color: #5a6055;
  border-color: rgba(28, 32, 24, 0.18);
}
html.dark .hv-modal__btn--cancel {
  color: rgba(245, 238, 232, 0.7);
  border-color: rgba(245, 238, 232, 0.2);
}
.hv-modal__btn--cancel:hover {
  background: rgba(28, 32, 24, 0.06);
}
html.dark .hv-modal__btn--cancel:hover {
  background: rgba(245, 238, 232, 0.06);
}
.hv-modal__btn--submit {
  background: #1c2018;
  color: #f5eee8;
}
html.dark .hv-modal__btn--submit {
  background: #c0623a;
  color: #fffdfb;
}
.hv-modal__btn--submit:hover {
  background: #2c3a2e;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(28, 32, 24, 0.18);
}
html.dark .hv-modal__btn--submit:hover {
  background: #d97a4f;
  box-shadow: 0 6px 16px rgba(192, 98, 58, 0.3);
}
.hv-modal__btn--submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
@media (max-width: 480px) {
  .hv-modal__header,
  .hv-modal__body,
  .hv-modal__footer { padding-left: 18px; padding-right: 18px; }
  .hv-modal__footer { flex-direction: column-reverse; }
  .hv-modal__btn { width: 100%; }
}
`,document.head.appendChild(Ks))}function Ha(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function n6(n){const e=document.createElement("div");e.className="hv-modal__field",e.dataset.fieldName=n.name;const t=document.createElement("label");if(t.className="hv-modal__label",t.htmlFor=`hv-field-${n.name}`,t.innerHTML=`${Ha(n.label)}${n.required?'<span class="req">*</span>':""}`,e.appendChild(t),n.type==="textarea"){const r=document.createElement("textarea");r.className="hv-modal__textarea",r.id=`hv-field-${n.name}`,r.name=n.name,n.placeholder&&(r.placeholder=n.placeholder),typeof n.value=="string"&&(r.value=n.value),n.required&&(r.required=!0),e.appendChild(r)}else if(n.type==="select"){const r=document.createElement("select");r.className="hv-modal__select",r.id=`hv-field-${n.name}`,r.name=n.name,n.required&&(r.required=!0);const s=document.createElement("option");s.value="",s.textContent=n.placeholder??"Select…",s.disabled=!0,s.selected=!n.value,r.appendChild(s);for(const i of n.options??[]){const a=document.createElement("option");a.value=i.value,a.textContent=i.label,String(n.value??"")===i.value&&(a.selected=!0),r.appendChild(a)}e.appendChild(r)}else if(n.type==="multiselect"){const r=document.createElement("div");r.className="hv-modal__multiselect",r.dataset.fieldName=n.name,r.dataset.fieldType="multiselect";const s=Array.isArray(n.value)?n.value:[];for(const i of n.options??[]){const a=document.createElement("label");a.className="hv-modal__check";const o=document.createElement("input");o.type="checkbox",o.value=i.value,s.includes(i.value)&&(o.checked=!0),a.appendChild(o),a.appendChild(document.createTextNode(i.label)),r.appendChild(a)}e.appendChild(r)}else if(n.type==="tags"){const r=document.createElement("div");r.className="hv-modal__tags",r.dataset.fieldName=n.name,r.dataset.fieldType="tags",(Array.isArray(n.value)?n.value:[]).forEach(a=>Zh(r,a));const i=document.createElement("input");i.className="hv-modal__tag-input",i.type="text",i.placeholder=n.placeholder??"Type and press Enter…",i.addEventListener("keydown",a=>{if(a.key==="Enter"||a.key===","){a.preventDefault();const o=i.value.trim().replace(/,$/,"");o&&(Zh(r,o),i.value="")}else if(a.key==="Backspace"&&!i.value){const o=r.querySelectorAll(".hv-modal__tag");o.length>0&&o[o.length-1].remove()}}),r.appendChild(i),e.appendChild(r)}else{const r=document.createElement("input");r.className="hv-modal__input",r.id=`hv-field-${n.name}`,r.name=n.name,r.type=n.type==="number"?"number":n.type==="date"?"date":"text",n.placeholder&&(r.placeholder=n.placeholder),typeof n.value=="number"?r.value=String(n.value):typeof n.value=="string"&&(r.value=n.value),n.required&&(r.required=!0),typeof n.min=="number"&&(r.min=n.min),typeof n.max=="number"&&(r.max=n.max),typeof n.step=="number"&&(r.step=n.step),e.appendChild(r)}if(n.help){const r=document.createElement("p");r.className="hv-modal__help",r.textContent=n.help,e.appendChild(r)}return e}function Zh(n,e){var s;const t=document.createElement("span");t.className="hv-modal__tag",t.dataset.value=e,t.innerHTML=`${Ha(e)}<button type="button" class="hv-modal__tag-close" aria-label="Remove"><span class="material-symbols-outlined">close</span></button>`,(s=t.querySelector(".hv-modal__tag-close"))==null||s.addEventListener("click",()=>{t.remove()});const r=n.querySelector(".hv-modal__tag-input");r?n.insertBefore(t,r):n.appendChild(t)}function r6(n,e){var r;const t={};for(const s of e)if(s.type==="multiselect"){const i=n.querySelector(`[data-field-name="${s.name}"][data-field-type="multiselect"]`),a=Array.from((i==null?void 0:i.querySelectorAll("input:checked"))??[]).map(o=>o.value);t[s.name]=a}else if(s.type==="tags"){const i=n.querySelector(`[data-field-name="${s.name}"][data-field-type="tags"]`),a=Array.from((i==null?void 0:i.querySelectorAll(".hv-modal__tag"))??[]).map(o=>o.dataset.value||"");t[s.name]=a}else if(s.type==="number"){const i=n.querySelector(`#hv-field-${s.name}`),a=(r=i==null?void 0:i.value)==null?void 0:r.trim();t[s.name]=a?Number(a):null}else{const i=n.querySelector(`#hv-field-${s.name}`)||n.querySelector(`#hv-field-${s.name}`);t[s.name]=(i==null?void 0:i.value)??""}return t}function Ur(n){t6();const e=`hv-modal-${++e6}`;return new Promise(t=>{var S;const r=document.createElement("div");r.className="hv-modal-backdrop",r.id=e;const s=document.createElement("div");s.className="hv-modal",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby",`${e}-title`);const i=document.createElement("div");i.className="hv-modal__header",i.innerHTML=`
      <div class="hv-modal__title-wrap">
        <h3 class="hv-modal__title" id="${e}-title">${Ha(n.title)}</h3>
        ${n.subtitle?`<p class="hv-modal__subtitle">${Ha(n.subtitle)}</p>`:""}
      </div>
      <button type="button" class="hv-modal__close" aria-label="Close">
        <span class="material-symbols-outlined">close</span>
      </button>
    `,s.appendChild(i);const a=document.createElement("div");a.className="hv-modal__body";const o=document.createElement("form");o.id=`${e}-form`;for(const P of n.fields)o.appendChild(n6(P));const c=document.createElement("div");c.className="hv-modal__error",c.style.display="none",o.appendChild(c),a.appendChild(o),s.appendChild(a);const u=document.createElement("div");u.className="hv-modal__footer";const d=document.createElement("button");d.type="button",d.className="hv-modal__btn hv-modal__btn--cancel",d.textContent=n.cancelLabel??"Cancel";const p=document.createElement("button");p.type="submit",p.setAttribute("form",o.id),p.className="hv-modal__btn hv-modal__btn--submit",p.textContent=n.submitLabel??"Save",u.appendChild(d),u.appendChild(p),s.appendChild(u),r.appendChild(s),document.body.appendChild(r),document.body.style.overflow="hidden";function _(P){document.body.style.overflow="",r.classList.add("is-leaving"),window.setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},240),t(P)}r.addEventListener("click",P=>{P.target===r&&_(null)}),(S=i.querySelector(".hv-modal__close"))==null||S.addEventListener("click",()=>_(null)),d.addEventListener("click",()=>_(null));function w(P){P.key==="Escape"&&(document.removeEventListener("keydown",w),_(null))}document.addEventListener("keydown",w),o.addEventListener("submit",async P=>{P.preventDefault();const D=r6(s,n.fields),U=n.fields.find(q=>q.required&&!D[q.name]);if(U){c.textContent=`“${U.label}” is required.`,c.style.display="block";return}if(n.validate)try{p.disabled=!0,p.textContent="Checking…",await n.validate(D)}catch(q){c.textContent=q instanceof Error?q.message:String(q),c.style.display="block",p.disabled=!1,p.textContent=n.submitLabel??"Save";return}p.disabled=!1,p.textContent=n.submitLabel??"Save",_(D)}),window.setTimeout(()=>{const P=s.querySelector("input, textarea, select");P==null||P.focus()},100)})}const s6={success:"check_circle",error:"error",info:"info"},i6={success:{fg:"#2c3a2e",bg:"rgba(44, 58, 46, 0.08)",border:"rgba(44, 58, 46, 0.28)"},error:{fg:"#8a1f1f",bg:"rgba(138, 31, 31, 0.08)",border:"rgba(138, 31, 31, 0.3)"},info:{fg:"#c0623a",bg:"rgba(192, 98, 58, 0.08)",border:"rgba(192, 98, 58, 0.28)"}},a6={success:{fg:"#c4c8c0",bg:"rgba(196, 200, 192, 0.1)",border:"rgba(196, 200, 192, 0.3)"},error:{fg:"#e7bdb1",bg:"rgba(231, 189, 177, 0.1)",border:"rgba(231, 189, 177, 0.3)"},info:{fg:"#e7bdb1",bg:"rgba(231, 189, 177, 0.1)",border:"rgba(231, 189, 177, 0.3)"}};let cn=null,Qs=null,o6=0;function l6(){Qs||(Qs=document.createElement("style"),Qs.id="hv-toast-styles",Qs.textContent=`
.hv-toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: min(380px, calc(100vw - 40px));
  pointer-events: none;
}
.hv-toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-family: "Spectral", "Inter", system-ui, sans-serif;
  font-size: 0.86rem;
  line-height: 1.45;
  box-shadow: 0 12px 32px rgba(28, 32, 24, 0.12),
              0 2px 6px rgba(28, 32, 24, 0.06);
  pointer-events: auto;
  animation: hv-toast-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.hv-toast.is-leaving {
  opacity: 0;
  transform: translateX(20px);
}
@keyframes hv-toast-in {
  from { opacity: 0; transform: translateX(20px) translateY(-4px); }
  to   { opacity: 1; transform: translateX(0) translateY(0); }
}
.hv-toast__icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
}
.hv-toast__icon .material-symbols-outlined {
  font-size: 20px;
  font-variation-settings: "wght" 500;
}
.hv-toast__body {
  flex: 1;
  min-width: 0;
}
.hv-toast__title {
  font-family: "Fraunces", "Spectral", serif;
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.005em;
  margin: 0 0 2px;
}
.hv-toast__msg {
  margin: 0;
  opacity: 0.85;
  font-size: 0.82rem;
  word-break: break-word;
}
.hv-toast__action {
  flex-shrink: 0;
  background: transparent;
  border: none;
  font-family: "Fraunces", "Spectral", serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
}
.hv-toast__action:hover {
  background: rgba(28, 32, 24, 0.08);
}
html.dark .hv-toast__action:hover {
  background: rgba(245, 238, 232, 0.1);
}
.hv-toast__close {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  color: inherit;
}
.hv-toast__close:hover { opacity: 1; }
.hv-toast__close .material-symbols-outlined { font-size: 16px; }
@media (max-width: 480px) {
  .hv-toast-container {
    top: 12px;
    right: 12px;
    left: 12px;
    max-width: none;
  }
}
`,document.head.appendChild(Qs))}function c6(){return l6(),cn&&document.body.contains(cn)||(cn=document.createElement("div"),cn.className="hv-toast-container",cn.setAttribute("role","status"),cn.setAttribute("aria-live","polite"),document.body.appendChild(cn)),cn}function u6(){return document.documentElement.classList.contains("dark")}function Tl(n,e,t,r={}){var _,w;const s=c6(),i=(u6()?a6:i6)[n],a=++o6,o=document.createElement("div");o.className="hv-toast",o.dataset.toastId=String(a),o.style.color=i.fg,o.style.background=i.bg,o.style.borderColor=i.border,o.innerHTML=`
    <div class="hv-toast__icon">
      <span class="material-symbols-outlined">${s6[n]}</span>
    </div>
    <div class="hv-toast__body">
      <p class="hv-toast__title">${Sl(e)}</p>
      ${t?`<p class="hv-toast__msg">${Sl(t)}</p>`:""}
    </div>
    ${r.actionLabel&&r.onAction?`<button class="hv-toast__action" type="button">${Sl(r.actionLabel)}</button>`:""}
    <button class="hv-toast__close" type="button" aria-label="Dismiss">
      <span class="material-symbols-outlined">close</span>
    </button>
  `,s.appendChild(o);const c=n==="error"?6e3:4e3,u=r.duration??c;let d=window.setTimeout(()=>p(),u);function p(){d!==null&&(window.clearTimeout(d),d=null),o.classList.add("is-leaving"),window.setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o)},320)}o.addEventListener("mouseenter",()=>{d!==null&&(window.clearTimeout(d),d=null)}),o.addEventListener("mouseleave",()=>{d===null&&(d=window.setTimeout(()=>p(),1500))}),(_=o.querySelector(".hv-toast__close"))==null||_.addEventListener("click",p),r.actionLabel&&r.onAction&&((w=o.querySelector(".hv-toast__action"))==null||w.addEventListener("click",()=>{var S;try{(S=r.onAction)==null||S.call(r)}finally{p()}}))}function Sl(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const je={success(n,e,t){Tl("success",n,e,t)},error(n,e,t){Tl("error",n,e,t)},info(n,e,t){Tl("info",n,e,t)}},Qe=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML},h6={letter:"mail",photo:"photo_camera",audio:"graphic_eq",video:"videocam",document:"description"};function d6(n){const e=Date.now()-n,t=Math.floor(e/6e4);if(t<1)return"Just now";if(t<60)return`${t}m ago`;const r=Math.floor(t/60);if(r<24)return`${r}h ago`;const s=Math.floor(r/24);return s<7?`${s}d ago`:new Date(n).toLocaleDateString("en-US",{month:"short",day:"numeric"})}function p6(n){const e=n.activities;if(e.length>0)return e.slice(0,6).map(s=>({when:d6(s.createdAt),what:s.message}));const r=[...n.memories].filter(s=>s.year).sort((s,i)=>(i.year??0)-(s.year??0)).slice(0,3).map(s=>({when:"Earlier",what:`Memory preserved: "${s.title}"${s.location?` · ${s.location}`:""}`}));return r.push({when:"Earlier",what:`${n.stories.length} stories compiled from the archive.`}),r.push({when:"Earlier",what:`${n.members.length} family members connected across the constellation.`}),r}function f6(n){if(n.length<2)return"";const e=Math.max(...n,1),t=100,r=36,s=t/(n.length-1),i=n.map((a,o)=>`${o*s},${r-a/e*(r-4)-2}`).join(" ");return`
    <svg class="hv-vd-spark" viewBox="0 0 ${t} ${r}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${i}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />
    </svg>
  `}function m6(n){const e=new Map;return n.memories.forEach(t=>{t.year&&e.set(t.year,(e.get(t.year)??0)+1)}),[...e.entries()].sort((t,r)=>t[0]-r[0]).map(([,t])=>t)}const Ip=[{value:"photo",label:"Photograph"},{value:"letter",label:"Letter"},{value:"audio",label:"Audio recording"},{value:"video",label:"Video"},{value:"document",label:"Document"}];async function g6(){const e=ce.getSnapshot().members.map(s=>({value:s.id,label:s.fullName})),t=await Ur({title:"Add a new memory",subtitle:"Bring another piece of your family story into the light.",submitLabel:"Add memory",fields:[{name:"title",label:"Title",type:"text",required:!0,placeholder:"The blue trunk opens again"},{name:"type",label:"Type",type:"select",required:!0,options:Ip,value:"photo"},{name:"year",label:"Year",type:"number",placeholder:"2026",min:1800,max:2100},{name:"dateLabel",label:"Date label",type:"text",placeholder:"April 2026"},{name:"location",label:"Location",type:"text",placeholder:"Lusaka, Zambia"},{name:"description",label:"Description",type:"textarea",placeholder:"What makes this memory worth keeping?"},{name:"familyMemberIds",label:"Family members in this memory",type:"multiselect",options:e},{name:"tags",label:"Tags",type:"tags",placeholder:"Press Enter to add"}]});if(!t)return;const r=ce.createMemory({title:String(t.title??""),description:String(t.description??""),type:String(t.type??"document"),assetUrl:"",thumbnailUrl:null,year:typeof t.year=="number"?t.year:null,dateLabel:t.dateLabel?String(t.dateLabel):null,location:t.location?String(t.location):null,familyMemberIds:Array.isArray(t.familyMemberIds)?t.familyMemberIds.map(String):[],tags:Array.isArray(t.tags)?t.tags.map(String):[],archived:!1,createdBy:"you"});je.success("Memory added",`“${r.title}” is now in the vault.`)}async function y6(n){const e=ce.getMemory(n);if(!e){je.error("Memory not found","It may have been removed.");return}const r=ce.getSnapshot().members.map(a=>({value:a.id,label:a.fullName})),s=await Ur({title:"Edit memory",subtitle:`Updating “${e.title}”`,submitLabel:"Save changes",fields:[{name:"title",label:"Title",type:"text",required:!0,value:e.title},{name:"type",label:"Type",type:"select",required:!0,options:Ip,value:e.type},{name:"year",label:"Year",type:"number",value:e.year??void 0,min:1800,max:2100},{name:"dateLabel",label:"Date label",type:"text",value:e.dateLabel??""},{name:"location",label:"Location",type:"text",value:e.location??""},{name:"description",label:"Description",type:"textarea",value:e.description},{name:"familyMemberIds",label:"Family members",type:"multiselect",options:r,value:e.familyMemberIds},{name:"tags",label:"Tags",type:"tags",value:e.tags}]});if(!s)return;const i=ce.updateMemory(n,{title:String(s.title??e.title),description:String(s.description??e.description),type:String(s.type??e.type),year:typeof s.year=="number"?s.year:null,dateLabel:s.dateLabel?String(s.dateLabel):null,location:s.location?String(s.location):null,familyMemberIds:Array.isArray(s.familyMemberIds)?s.familyMemberIds.map(String):e.familyMemberIds,tags:Array.isArray(s.tags)?s.tags.map(String):e.tags});i&&je.success("Memory updated",`“${i.title}” has been saved.`)}function v6(n){const e=ce.getMemory(n);e&&(je.info("Memory removed",`“${e.title}” has been deleted from the vault.`,{duration:6e3,actionLabel:"Undo",onAction:()=>{ce.createMemory({title:e.title,description:e.description,type:e.type,assetUrl:e.assetUrl,thumbnailUrl:e.thumbnailUrl,year:e.year,dateLabel:e.dateLabel,location:e.location,familyMemberIds:e.familyMemberIds,tags:e.tags,archived:e.archived,createdBy:e.createdBy}),je.success("Memory restored",`“${e.title}” is back in the vault.`)}}),ce.deleteMemory(n))}function Tp(n){e1(n);const e=Rc(()=>{(n.offsetParent!==null||n.style.display!=="none")&&e1(n)});n._hvUnsubscribe=e}function e1(n){var _;const e=ce.getSnapshot(),t=e.memories,r=e.members,s=e.stories,i=t.map(w=>w.year).filter(w=>w!==null).sort((w,S)=>w-S),a=i.length?`${i[0]}–${i[i.length-1]}`:"—",o=[...t].sort((w,S)=>(S.year??0)-(w.year??0)).slice(0,4),c=p6(e),u=m6(e),p=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});xc(),n.innerHTML=`
    ${_i({activeView:"vault"})}
    <div class="hv-vd-backdrop" aria-hidden="true">
      <div class="hv-vd-aurora"></div>
    </div>
    <div class="hv-vd-grain" aria-hidden="true"></div>

    <section class="hv-vd-main">
    <header class="hv-vd-topbar">
      <div>
        <p class="hv-vd-topbar__date">${Qe(p)}</p>
        <h2 class="hv-vd-topbar__greeting">Good morning, <em>Amara.</em></h2>
      </div>
      <div class="hv-vd-topbar__actions">
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Add memory" data-vd-new-memory-btn title="Add memory">
          <span class="material-symbols-outlined" style="font-size:20px">add</span>
        </button>
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Notifications">
          <span class="material-symbols-outlined" style="font-size:20px">notifications</span>
        </button>
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Search" data-archive-search>
          <span class="material-symbols-outlined" style="font-size:20px">search</span>
        </button>
        <div class="hv-vd-avatar">AK</div>
      </div>
    </header>

    <section class="hv-vd-hero" data-vd-reveal>
      <div class="hv-vd-hero__inner">
        <div>
          <p class="hv-vd-hero__eyebrow">Your private archive</p>
          <h1 class="hv-vd-hero__title">The <em>Vault.</em></h1>
          <p class="hv-vd-hero__lede">
            A living collection of the people, places, and moments that make
            your family yours. ${t.length} memories, ${r.length} people,
            and ${s.length} stories — preserved across ${a}.
          </p>
        </div>
        <button class="hv-vd-hero__cta" type="button" data-vd-atlas>
          <span class="material-symbols-outlined">auto_awesome</span>
          Explore Atlas
        </button>
      </div>
    </section>

    <div class="hv-vd-bento" data-vd-stagger>
      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">photo_library</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> live</span>
        </div>
        <p class="hv-vd-metric__value">${t.length}</p>
        <p class="hv-vd-metric__label">Memories preserved</p>
        <p class="hv-vd-metric__sub">Across ${new Set(t.map(w=>w.location).filter(Boolean)).size} places</p>
        ${f6(u)}
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">groups</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_flat</span> stable</span>
        </div>
        <p class="hv-vd-metric__value">${r.length}</p>
        <p class="hv-vd-metric__label">Family members</p>
        <p class="hv-vd-metric__sub">${new Set(r.filter(w=>w.parentId).map(w=>w.parentId)).size+1} generations connected</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4 hv-vd-metric--inverted">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">auto_stories</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> live</span>
        </div>
        <p class="hv-vd-metric__value"><em>${s.length}</em></p>
        <p class="hv-vd-metric__label">Stories ready to read</p>
        <p class="hv-vd-metric__sub">Curated from ${t.length} source memories</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4" data-vd-users-card>
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">person_add</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> live</span>
        </div>
        <p class="hv-vd-metric__value" data-vd-users-count>—</p>
        <p class="hv-vd-metric__label">Users registered</p>
        <p class="hv-vd-metric__sub">Stored in ClickHouse · heritage_atlas_users</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span8 hv-vd-metric--accent">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">timeline</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> ${a}</span>
        </div>
        <p class="hv-vd-metric__value">${i.length} <em>years</em> of one family</p>
        <p class="hv-vd-metric__label">${i.length?`From ${i[0]} to ${i[i.length-1]} · ${i[i.length-1]-i[0]} years of memory`:"Add a memory to start the timeline"}</p>
        <p class="hv-vd-metric__sub">The archive reaches from Samuel's first postcard to Miles's hand-drawn atlas — every decade is preserved.</p>
      </article>
    </div>

    <div class="hv-vd-section-head" data-vd-reveal>
      <div class="hv-vd-section-head__left">
        <p class="hv-vd-section-head__eyebrow">The newest pieces</p>
        <h3 class="hv-vd-section-head__title">Recent <em>memories.</em></h3>
      </div>
      <a class="hv-vd-section-head__link" data-vd-view="story-mode" role="button" tabindex="0">
        View all
        <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
      </a>
    </div>

    <div class="hv-vd-gallery" data-vd-stagger>
      ${o.map(w=>{const S=w.thumbnailUrl||w.assetUrl||"https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM";return`
            <article class="hv-vd-memory" data-vd-memory data-memory-id="${Qe(w.id)}" role="button" tabindex="0">
              <div class="hv-vd-memory__media">
                <img class="hv-vd-memory__img" src="${Qe(S)}" alt="${Qe(w.title)}" loading="lazy" />
                <div class="hv-vd-memory__overlay"></div>
                <span class="hv-vd-memory__year">${Qe(w.year)}</span>
                <div class="hv-vd-memory__crud">
                  <button type="button" class="hv-vd-memory__crud-btn" data-vd-edit-memory="${Qe(w.id)}" aria-label="Edit memory" title="Edit">
                    <span class="material-symbols-outlined" style="font-size:16px">edit</span>
                  </button>
                  <button type="button" class="hv-vd-memory__crud-btn hv-vd-memory__crud-btn--danger" data-vd-delete-memory="${Qe(w.id)}" aria-label="Delete memory" title="Delete">
                    <span class="material-symbols-outlined" style="font-size:16px">delete</span>
                  </button>
                </div>
              </div>
              <div class="hv-vd-memory__body">
                <span class="hv-vd-memory__tag">
                  <span class="material-symbols-outlined" style="font-size:12px">${h6[w.type]??"description"}</span>
                  ${Qe(w.type)}
                </span>
                <h4 class="hv-vd-memory__title">${Qe(w.title)}</h4>
                <p class="hv-vd-memory__desc">${Qe(w.description)}</p>
                <div class="hv-vd-memory__footer">
                  <span><span class="material-symbols-outlined" style="vertical-align:middle">location_on</span> ${Qe(w.location??"Undated")}</span>
                  <span>${Qe(w.dateLabel??"")}</span>
                </div>
              </div>
            </article>
          `}).join("")}
      <article class="hv-vd-memory hv-vd-memory--add" data-vd-new-memory>
        <div>
          <div class="hv-vd-add__icon"><span class="material-symbols-outlined" style="font-size:28px">add_photo_alternate</span></div>
          <h4>Add a new memory</h4>
          <p>Bring another piece of your family story into the light.</p>
          <button type="button" data-vd-new-memory-btn>
            <span class="material-symbols-outlined" style="font-size:16px">upload</span>
            Upload memory
          </button>
        </div>
      </article>
    </div>

    <div class="hv-vd-bottom">
      <section class="hv-vd-stories" data-vd-reveal>
        <div class="hv-vd-stories__head">
          <h3 class="hv-vd-stories__title">Story <em>chapters.</em></h3>
          <a class="hv-vd-section-head__link" data-vd-view="story-mode" role="button" tabindex="0">
            Open Story Mode
            <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
          </a>
        </div>
        ${s.map((w,S)=>`
            <div class="hv-vd-story-item" data-vd-story data-story-id="${Qe(w.id)}" role="button" tabindex="0">
              <span class="hv-vd-story-item__num">${String(S+1).padStart(2,"0")}</span>
              <div class="hv-vd-story-item__body">
                <p class="hv-vd-story-item__title">${Qe(w.title)}</p>
                <p class="hv-vd-story-item__excerpt">${Qe(w.excerpt)}</p>
              </div>
              <span class="material-symbols-outlined hv-vd-story-item__arrow">arrow_forward</span>
            </div>
          `).join("")}
      </section>

      <section class="hv-vd-activity" data-vd-reveal>
        <h3 class="hv-vd-activity__title">Recent <em>activity.</em></h3>
        <ul class="hv-vd-activity__list">
          ${c.map(w=>`
              <li class="hv-vd-activity__item">
                <p class="hv-vd-activity__when">${Qe(w.when)}</p>
                <p class="hv-vd-activity__what">${Qe(w.what)}</p>
              </li>
            `).join("")}
        </ul>
      </section>
    </div>
  `,A6(n),(_=n.querySelector("[data-vd-atlas]"))==null||_.addEventListener("click",()=>{Ys("atlas")}),n.querySelectorAll("[data-vd-view]").forEach(w=>{w.addEventListener("click",()=>Ys(w.dataset.vdView??"story-mode")),w.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),Ys(w.dataset.vdView??"story-mode"))})}),n.querySelectorAll("[data-vd-memory]").forEach(w=>{const S=()=>document.dispatchEvent(new CustomEvent("heritage:memory-detail",{detail:{id:w.dataset.memoryId}}));w.addEventListener("click",P=>{const D=P.target;D.closest("[data-vd-edit-memory]")||D.closest("[data-vd-delete-memory]")||S()}),w.addEventListener("keydown",P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),S())})}),n.querySelectorAll("[data-vd-edit-memory]").forEach(w=>{w.addEventListener("click",S=>{S.stopPropagation();const P=w.dataset.vdEditMemory;P&&y6(P)})}),n.querySelectorAll("[data-vd-delete-memory]").forEach(w=>{w.addEventListener("click",S=>{S.stopPropagation();const P=w.dataset.vdDeleteMemory;P&&v6(P)})}),n.querySelectorAll("[data-vd-story]").forEach(w=>{w.addEventListener("click",()=>Ys("story-mode")),w.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),Ys("story-mode"))})}),n.querySelectorAll("[data-vd-new-memory], [data-vd-new-memory-btn]").forEach(w=>{w.addEventListener("click",S=>{S.stopPropagation(),g6()})}),$a(n),requestAnimationFrame(()=>{n.querySelectorAll("[data-vd-reveal]").forEach(w=>w.classList.add("is-revealed"))}),_6(n)}async function _6(n){try{const e=await fetch("/api/users");if(!e.ok)return;const r=(await e.json()).count??0,s=n.querySelector("[data-vd-users-count]");s&&(s.textContent=String(r),s.innerHTML=r>0?`${r}`:"<em>0</em>")}catch{}}function A6(n){const e=n.querySelectorAll("[data-vd-reveal], [data-vd-stagger]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(r=>r.classList.add("is-revealed"));return}const t=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-revealed"),t.unobserve(s.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.1});e.forEach(r=>t.observe(r))}function Ys(n){const e=document.querySelector(`[data-dashboard-view="${n}"]`);e&&e.click()}let Zl=!1;function Sp(){const n=document.getElementById("vault-screen");if(!n||Zl)return;const e=n.querySelector("[data-vault-dashboard-content]");e&&(Tp(e),Zl=!0)}const Cl=document.getElementById("vault-screen");Cl&&new MutationObserver(()=>{Cl.style.display==="flex"&&!Zl&&Sp()}).observe(Cl,{attributes:!0,attributeFilter:["style"]});window.location.hash==="#vault"&&document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".landing-page");n&&n.classList.add("is-hidden"),requestAnimationFrame(()=>Sp())});const b6={roots:{label:"Begin",icon:"mail",num:"01"},table:{label:"Gather",icon:"restaurant",num:"02"},routes:{label:"Travel",icon:"route",num:"03"},voices:{label:"Listen",icon:"graphic_eq",num:"04"},future:{label:"Continue",icon:"auto_stories",num:"05"}},E6={letter:"mail",photo:"photo_camera",audio:"graphic_eq",video:"videocam",document:"description"};function w6(){return ce.getSnapshot().stories.filter(e=>e.status==="published").map((e,t)=>{const r=b6[e.id]??{label:"Chapter",icon:"menu_book",num:String(t+1).padStart(2,"0")};return{id:e.id,num:r.num,label:r.label,title:e.title,excerpt:e.excerpt??"",body:e.body??"",icon:r.icon,memoryIds:e.memoryIds??[]}})}const wt=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};let Ee=0;const Rl=new Set;function Cp(n){t1(n);const e=Rc(()=>{(n.offsetParent!==null||n.style.display!=="none")&&t1(n)});n._hvUnsubscribe=e}function t1(n){var X,ae,fe;const e=w6(),t=ce.getSnapshot(),r=t.memories.map(F=>F.year).filter(F=>F!==null).sort((F,T)=>F-T),s=r.length?`${r[0]}–${r[r.length-1]}`:"—";if(!e.length){xc(),n.innerHTML=`
      <div class="hv-sm-backdrop" aria-hidden="true"><div class="hv-sm-aurora"></div></div>
      <div class="hv-sm-grain" aria-hidden="true"></div>
      ${_i({activeView:"story-mode"})}
      <main class="hv-sm-main">
        <section class="hv-sm-empty">
          <span class="material-symbols-outlined">auto_stories</span>
          <h2>No chapters yet</h2>
          <p>Start the first chapter of your family story.</p>
          <button type="button" class="hv-sm-empty__btn" data-sm-add>Write first chapter</button>
        </section>
      </main>
    `,$a(n),(X=n.querySelector("[data-sm-add]"))==null||X.addEventListener("click",()=>void n1());return}Ee>=e.length&&(Ee=0),n.innerHTML=`
    <div class="hv-sm-backdrop" aria-hidden="true">
      <div class="hv-sm-aurora"></div>
    </div>
    <div class="hv-sm-grain" aria-hidden="true"></div>

    ${_i({activeView:"story-mode"})}

    <main class="hv-sm-main">
      <section class="hv-sm-hero" data-sm-reveal>
        <div class="hv-sm-hero__inner">
          <div>
            <p class="hv-sm-hero__eyebrow">Guided family narrative</p>
            <h1 class="hv-sm-hero__title">Follow the <em>threads</em> that made this family.</h1>
            <p class="hv-sm-hero__lede">
              Story Mode turns evidence into a guided reading path. Begin with a chapter,
              inspect the source moments beside it, then ask the archive what should come next.
            </p>
          </div>
          <aside class="hv-sm-hero__stats">
            <div class="hv-sm-hero__stats-head">
              <span class="material-symbols-outlined">auto_awesome</span>
              Visual reading guide
            </div>
            <p class="hv-sm-hero__stats-title">${e.length} chapters · ${t.memories.length} source memories</p>
            <p class="hv-sm-hero__stats-meta">${s}${r.length?` · ${r[r.length-1]-r[0]} years of one family`:""}</p>
            <button type="button" class="hv-sm-hero__add" data-sm-add title="Add chapter">
              <span class="material-symbols-outlined">add</span>
              New chapter
            </button>
          </aside>
        </div>
      </section>

      <nav class="hv-sm-stepper" data-sm-reveal aria-label="Story chapters">
        <div class="hv-sm-stepper__track">
          ${e.map((F,T)=>`
              <button class="hv-sm-step${T===Ee?" is-active":""}${Rl.has(F.id)&&T!==Ee?" is-read":""}" data-sm-step="${T}" type="button">
                <span class="hv-sm-step__num">${F.num}</span>
                <span class="hv-sm-step__dot"><span class="material-symbols-outlined">${F.icon}</span></span>
                <span class="hv-sm-step__label">${F.label}</span>
                <span class="hv-sm-step__sub">${F.title}</span>
              </button>
            `).join("")}
        </div>
      </nav>

      <div class="hv-sm-body">
        <div class="hv-sm-content">
          <div class="hv-sm-chapter-bar" data-sm-reveal>
            <span class="hv-sm-chapter-bar__label" data-sm-chapter-label>Chapter ${e[Ee].num} · ${e[Ee].label}</span>
            <div class="hv-sm-chapter-bar__nav">
              <button class="hv-sm-chapter-bar__btn" data-sm-edit title="Edit this chapter" type="button">
                <span class="material-symbols-outlined">edit</span>
              </button>
              <button class="hv-sm-chapter-bar__btn hv-sm-chapter-bar__btn--danger" data-sm-delete title="Delete this chapter" type="button">
                <span class="material-symbols-outlined">delete</span>
              </button>
              <button class="hv-sm-chapter-bar__btn" data-sm-prev type="button" disabled>
                <span class="material-symbols-outlined">arrow_back</span> Prev
              </button>
              <button class="hv-sm-chapter-bar__btn" data-sm-next type="button">
                Next <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <article class="hv-sm-narrative is-entering" data-sm-narrative>
            <!-- chapter content injected here -->
          </article>
        </div>

        <aside class="hv-sm-rail" data-sm-rail>
          <div class="hv-sm-rail__head">
            <div class="hv-sm-rail__head-top">
              <span class="material-symbols-outlined">tune</span>
              <span class="hv-sm-rail__head-title">Evidence trail</span>
            </div>
            <p class="hv-sm-rail__head-desc">
              Each chapter is anchored in original archive material. Select a card to see why it matters.
            </p>
          </div>
          <div class="hv-sm-evidence" data-sm-evidence>
            <!-- evidence cards injected here -->
          </div>
        </aside>
      </div>

      <div class="hv-sm-query" data-sm-reveal>
        <form class="hv-sm-query__row" data-sm-query-form>
          <span class="hv-sm-query__icon"><span class="material-symbols-outlined">auto_awesome</span></span>
          <input
            type="text"
            class="hv-sm-query__input"
            data-sm-query-input
            placeholder="Ask about another family memory..."
            aria-label="Ask the Heritage Atlas agent about this story"
            autocomplete="off"
          />
          <button type="submit" class="hv-sm-query__send">
            <span class="material-symbols-outlined">explore</span>
            Explore
          </button>
        </form>
        <div class="hv-sm-query__hints">
          <button class="hv-sm-query__hint" type="button" data-sm-hint="What changed when the family moved?">What changed when the family moved?</button>
          <button class="hv-sm-query__hint" type="button" data-sm-hint="Show the stories behind the Sunday table.">Show the stories behind the Sunday table.</button>
          <button class="hv-sm-query__hint" type="button" data-sm-hint="Who are the next keepers of the archive?">Who are the next keepers of the archive?</button>
        </div>
      </div>
    </main>
  `;const i=n.querySelector("[data-sm-narrative]"),a=n.querySelector("[data-sm-evidence]"),o=n.querySelector("[data-sm-chapter-label]"),c=n.querySelector("[data-sm-prev]"),u=n.querySelector("[data-sm-next]");if(!i||!a||!o||!c||!u)return;function d(F){return ce.getSnapshot().memories.find(T=>T.id===F)}function p(F,T){const g=e[F];if(!g)return;Ee=F,Rl.add(g.id),o.textContent=`Chapter ${g.num} · ${g.label}`,n.querySelectorAll("[data-sm-step]").forEach(b=>{var C;const I=parseInt(b.dataset.smStep??"0",10);b.classList.toggle("is-active",I===F),b.classList.toggle("is-read",I<F||Rl.has(((C=e[I])==null?void 0:C.id)??"")&&I!==F)}),c.disabled=F===0,u.disabled=F===e.length-1;const v=i;T?(v.classList.add("is-transitioning"),setTimeout(()=>{v.classList.remove("is-transitioning"),v.classList.add("is-entering"),v.innerHTML=_(g),w(g),S(v),P(v),v.offsetWidth,v.classList.remove("is-entering"),v.scrollTop=0,window.scrollTo({top:n.offsetTop-24,behavior:"smooth"})},280)):(v.innerHTML=_(g),w(g),S(v),P(v))}function _(F){const T=F.memoryIds.map(d).filter(Boolean),g=T.find(C=>(C==null?void 0:C.type)==="photo")??T[0],v=F.excerpt,b=F.body.split(new RegExp("(?<=[.!?])\\s+")),I=[];if(b.length<=2)I.push(F.body);else{const C=b.slice(0,Math.ceil(b.length/3)).join(" "),E=b.slice(Math.ceil(b.length/3),Math.ceil(2*b.length/3)).join(" "),ge=b.slice(Math.ceil(2*b.length/3)).join(" ");I.push(C,E,ge)}return`
      <p class="hv-sm-narrative__eyebrow">Chapter ${F.num} · ${F.label}</p>
      <h2 class="hv-sm-narrative__title">${wt(F.title)}</h2>
      <p class="hv-sm-narrative__excerpt">${wt(F.excerpt)}</p>
      <div class="hv-sm-narrative__body">
        <p data-sm-reveal>${wt(I[0]??F.body)}</p>
        ${g?`
          <figure class="hv-sm-figure" data-sm-reveal>
            <img class="hv-sm-figure__img" data-sm-parallax-img
              src="${g.thumbnailUrl||g.assetUrl||"https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM"}"
              alt="${wt(g.title)}" />
            <div class="hv-sm-figure__overlay"></div>
            <figcaption class="hv-sm-figure__caption">
              <b>${wt(g.title)}</b>
              ${wt(g.dateLabel??g.location??"")}
            </figcaption>
          </figure>
        `:""}
        <div class="hv-sm-pullquote" data-sm-reveal>${wt(v)}</div>
        ${I.slice(1).map(C=>`<p data-sm-reveal>${wt(C)}</p>`).join("")}
      </div>
      <footer class="hv-sm-narrative__footer">
        <span class="hv-sm-narrative__source">
          <span class="material-symbols-outlined">verified</span>
          Compiled from ${F.memoryIds.length} source memories in the archive.
        </span>
        <button class="hv-sm-narrative__save" type="button" data-sm-save>
          <span class="material-symbols-outlined" style="font-size:18px">bookmark</span>
          Save story
        </button>
      </footer>
    `}function w(F){const T=F.memoryIds.map(d).filter(Boolean);a.innerHTML=T.map((g,v)=>`
        <button class="hv-sm-evidence-card" type="button" data-sm-evidence-card data-memory-id="${wt(g.id)}"
          style="animation-delay: ${v*60}ms">
          <div class="hv-sm-evidence-card__top">
            <span class="hv-sm-evidence-card__icon">
              <span class="material-symbols-outlined">${E6[g.type]??"description"}</span>
            </span>
            <span class="hv-sm-evidence-card__year">${wt(g.year!=null?String(g.year):"")}</span>
          </div>
          <h4 class="hv-sm-evidence-card__title">${wt(g.title)}</h4>
          <p class="hv-sm-evidence-card__meta">${wt(g.location??"Undated")} · ${wt(g.type)}</p>
        </button>
      `).join(""),a.querySelectorAll("[data-sm-evidence-card]").forEach(g=>{g.addEventListener("click",()=>{const v=g.dataset.memoryId??"",b=d(v);if(!b)return;const I=`Tell me more about "${b.title}"`;D(I)})})}function S(F){const T=F.querySelectorAll("[data-sm-reveal]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){T.forEach(v=>v.classList.add("is-revealed"));return}const g=new IntersectionObserver(v=>{v.forEach(b=>{b.isIntersecting&&(b.target.classList.add("is-revealed"),g.unobserve(b.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.1});T.forEach(v=>g.observe(v))}function P(F){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const T=F.querySelector("[data-sm-parallax-img]");if(!T)return;const g=T;let v=!1;function b(){const I=g.getBoundingClientRect(),C=window.innerHeight;if(I.bottom<0||I.top>C){v=!1;return}const ge=(I.top+I.height/2-C/2)/C*-24;g.style.transform=`translate3d(0, ${ge}px, 0) scale(1.08)`,v=!1}window.addEventListener("scroll",()=>{v||(requestAnimationFrame(b),v=!0)},{passive:!0}),b()}function D(F){const T=document.getElementById("agent-screen"),g=document.querySelector(".landing-page"),v=document.getElementById("login-screen"),b=document.getElementById("vault-screen"),I=document.getElementById("family-map-screen");T&&(g&&g.classList.add("is-hidden"),v&&(v.style.display="none"),b&&(b.style.display="none"),I&&(I.style.display="none"),n.style.display="none",T.style.display="flex",history.pushState({view:"agent"},"","#agent"),document.dispatchEvent(new Event("heritage:agent-route")),setTimeout(()=>{const C=T.querySelector("[data-agent-input]");C&&(C.value=F,C.dispatchEvent(new Event("input")));const E=T.querySelector("[data-agent-form]");E&&E.requestSubmit()},300))}n.querySelectorAll("[data-sm-step]").forEach(F=>{F.addEventListener("click",()=>{const T=parseInt(F.dataset.smStep??"0",10);T!==Ee&&p(T,!0)})}),c.addEventListener("click",()=>{Ee>0&&p(Ee-1,!0)}),u.addEventListener("click",()=>{Ee<e.length-1&&p(Ee+1,!0)});const U=n.querySelector("[data-sm-query-form]"),q=n.querySelector("[data-sm-query-input]");U==null||U.addEventListener("submit",F=>{F.preventDefault();const T=(q==null?void 0:q.value.trim())??"";T&&(D(T),q&&(q.value=""))}),n.querySelectorAll("[data-sm-hint]").forEach(F=>{F.addEventListener("click",()=>{const T=F.dataset.smHint??"";q&&(q.value=T),q==null||q.focus()})}),n.querySelectorAll("[data-sm-add]").forEach(F=>{F.addEventListener("click",()=>void n1())}),(ae=n.querySelector("[data-sm-edit]"))==null||ae.addEventListener("click",()=>{const F=e[Ee];F&&I6(F.id)}),(fe=n.querySelector("[data-sm-delete]"))==null||fe.addEventListener("click",()=>{const F=e[Ee];F&&T6(F.id)}),n.addEventListener("click",F=>{const T=F.target.closest("[data-sm-save]");if(!T)return;const g=e[Ee];if(!g)return;const v=T.querySelector(".material-symbols-outlined"),b=T.classList.toggle("is-saved");v&&(v.textContent=b?"check":"bookmark"),T.style.background=b?"var(--hv-moss, #6f8266)":"",ce.updateStory(g.id,{body:g.body}),b?je.success("Story saved",`“${g.title}” is bookmarked for later.`):je.info("Bookmark removed",`“${g.title}” is no longer saved.`)}),$a(n),p(Ee,!1),n.querySelectorAll("[data-sm-reveal]").forEach(F=>{F.classList.add("is-revealed")})}async function n1(){const e=ce.getSnapshot().memories.map(s=>({value:s.id,label:`${s.title}${s.year?` (${s.year})`:""}`})),t=await Ur({title:"Write a new chapter",subtitle:"Compose the next chapter of your family story.",submitLabel:"Publish chapter",fields:[{name:"title",label:"Chapter title",type:"text",required:!0,placeholder:"e.g. The garden in winter"},{name:"excerpt",label:"Pull quote / excerpt",type:"textarea",placeholder:"A single line that captures the chapter."},{name:"body",label:"Chapter body",type:"textarea",placeholder:"Write the chapter in long form. Split into paragraphs naturally."},{name:"memoryIds",label:"Anchor memories",type:"multiselect",options:e,help:"Select the source memories this chapter draws from."},{name:"status",label:"Status",type:"select",options:[{value:"published",label:"Published"},{value:"draft",label:"Draft (hidden from reading guide)"}],value:"published"}]});if(!t)return;const r=ce.createStory({title:String(t.title??"Untitled chapter"),excerpt:String(t.excerpt??""),body:String(t.body??""),memoryIds:Array.isArray(t.memoryIds)?t.memoryIds.map(String):[],status:t.status==="draft"?"draft":"published",createdBy:"you"});Ee=ce.getSnapshot().stories.filter(s=>s.status==="published").findIndex(s=>s.id===r.id),Ee<0&&(Ee=0),je.success("Chapter published",`“${r.title}” is now in the reading guide.`)}async function I6(n){const e=ce.getStory(n);if(!e){je.error("Chapter not found","It may have been removed.");return}const r=ce.getSnapshot().memories.map(a=>({value:a.id,label:`${a.title}${a.year?` (${a.year})`:""}`})),s=await Ur({title:"Edit chapter",subtitle:`Updating “${e.title}”`,submitLabel:"Save changes",fields:[{name:"title",label:"Chapter title",type:"text",required:!0,value:e.title},{name:"excerpt",label:"Pull quote / excerpt",type:"textarea",value:e.excerpt},{name:"body",label:"Chapter body",type:"textarea",value:e.body},{name:"memoryIds",label:"Anchor memories",type:"multiselect",options:r,value:e.memoryIds},{name:"status",label:"Status",type:"select",options:[{value:"published",label:"Published"},{value:"draft",label:"Draft (hidden from reading guide)"}],value:e.status}]});if(!s)return;const i=ce.updateStory(n,{title:String(s.title??e.title),excerpt:String(s.excerpt??e.excerpt),body:String(s.body??e.body),memoryIds:Array.isArray(s.memoryIds)?s.memoryIds.map(String):e.memoryIds,status:s.status==="draft"?"draft":"published"});i&&je.success("Chapter saved",`“${i.title}” has been updated.`)}function T6(n){const e=ce.getStory(n);e&&(je.info("Chapter removed",`“${e.title}” has been deleted from the reading guide.`,{duration:6e3,actionLabel:"Undo",onAction:()=>{const t=ce.createStory({title:e.title,excerpt:e.excerpt,body:e.body,memoryIds:e.memoryIds,status:e.status,createdBy:e.createdBy});Ee=ce.getSnapshot().stories.filter(r=>r.status==="published").findIndex(r=>r.id===t.id),Ee<0&&(Ee=0),je.success("Chapter restored",`“${e.title}” is back in the reading guide.`)}}),Ee>0&&(Ee-=1),ce.deleteStory(n))}let r1=!1;function Rp(){const n=document.getElementById("story-mode-screen");!n||r1||(Cp(n),r1=!0)}document.addEventListener("heritage:story-route",()=>{requestAnimationFrame(()=>Rp())});window.location.hash==="#story-mode"&&Rp();const S6="modulepreload",C6=function(n,e){return new URL(n,e).href},s1={},R6=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=C6(d,r),d in s1)return;s1[d]=!0;const p=d.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(!!r)for(let P=o.length-1;P>=0;P--){const D=o[P];if(D.href===d&&(!p||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${_}`))return;const S=document.createElement("link");if(S.rel=p?"stylesheet":S6,p||(S.as="script"),S.crossOrigin="",S.href=d,u&&S.setAttribute("nonce",u),document.head.appendChild(S),p)return new Promise((P,D)=>{S.addEventListener("load",P),S.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},x6=new Set(["the","a","an","of","to","in","on","at","by","for","with","about","show","tell","give","me","my","our","their","family","what","when","where","who","which","how","and","or","is","are","was","were","be","been","from","that","this","these","those","across","between","during","over","under","into"]),P6=new Set(["Samuel","Beatrice","Martha","Joseph","Agnes","Edward","Ruth","Daniel","Chungu","Tapiwa","Linda","Miles","Nandi","Malia","Theo"]);function k6(n){const e=n.toLowerCase(),t=(e.match(/[a-z]{3,}/g)??[]).filter(d=>!x6.has(d));let r="overview";/\b(timeline|chronolog|over time|by year|years|decades?)\b/.test(e)?r="timeline":/\b(map|where|place|location|geograph|countr|cit(y|ies))\b/.test(e)?r="geography":/\b(people|person|relative|member|family tree|constellation|connected)\b/.test(e)?r="people":/\b(evidence|source|proof|records?)\b/.test(e)?r="evidence":/\b(decade|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)\b/.test(e)?r="decades":/\b(type|kind|photo|letter|audio|video|document|format)\b/.test(e)?r="types":/\b(oldest|earliest|first|beginning)\b/.test(e)?r="oldest":/\b(newest|latest|last|recent)\b/.test(e)?r="newest":/\b(compare|versus|vs|against|difference)\b/.test(e)&&(r="compare_decades");const s=e.match(/\b(18|19|20|21)(\d0)s?\b/),i=s?parseInt(`${s[1]}${s[2]}`,10):void 0,a=n.match(/\b([A-Z][a-z]+)\b/),o=a&&P6.has(a[1])?a[1]:void 0,c=n.match(/\b(Livingstone|Lusaka|Mongu|Kabwe|Ndola|Kitwe|Harare|Bulawayo)\b/),u=c?c[1]:void 0;return{intent:r,terms:t,decade:i,person:o,place:u}}const i1={Livingstone:{lat:-17.85,lng:25.86},Lusaka:{lat:-15.39,lng:28.33},Mongu:{lat:-15.28,lng:23.13},Kabwe:{lat:-14.45,lng:28.45},Ndola:{lat:-12.96,lng:28.64},Kitwe:{lat:-12.82,lng:28.2},Harare:{lat:-17.83,lng:31.05},Bulawayo:{lat:-20.15,lng:28.58}};function xl(n){return Math.floor(n/10)*10}function N6(n,e){var i,a;const t=k6(e),r=n.memories,s=n.members;switch(t.intent){case"timeline":{const o=new Map;r.forEach(d=>{d.year&&o.set(d.year,(o.get(d.year)??0)+1)});const c=[...o.keys()].sort((d,p)=>d-p),u=c.reduce((d,p)=>(o.get(d)??0)>(o.get(p)??0)?d:p,c[0]??0);return{kind:"line",title:"Memories across time",caption:`Memory density by year${t.decade?` · ${t.decade}s`:""}.`,verdict:`${c.length} years with preserved memories, peaking in ${u}.`,prompt:e,sql:"SELECT event_year, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY event_year ORDER BY event_year",source:"ClickHouse · heritage_atlas_timeline_yearly",series:[{name:"Memories",color:"#2c3a2e",points:c.map(d=>({label:String(d),value:o.get(d)??0,drilldown:`What happened in ${d}?`}))}],followups:["Where did these memories happen?","Who appears most often in this period?","What kinds of memories are these?"]}}case"geography":{const o=new Map;r.forEach(u=>{u.location&&o.set(u.location,(o.get(u.location)??0)+1)});const c=[...o.entries()].sort((u,d)=>d[1]-u[1]).slice(0,12);return{kind:"map",title:"Where the archive lives",caption:"Memory density by location.",verdict:`${c.length} places appear in your archive, led by ${((i=c[0])==null?void 0:i[0])??"—"}.`,prompt:e,sql:"SELECT location, sum(fact_count) FROM heritage_atlas_locations GROUP BY location ORDER BY fact_count DESC LIMIT 12",source:"ClickHouse · heritage_atlas_locations",points:c.map(([u,d])=>{var p,_;return{place:u,count:d,lat:(p=i1[u])==null?void 0:p.lat,lng:(_=i1[u])==null?void 0:_.lng,drilldown:`Show me memories from ${u}`}}),followups:["Show me the timeline for these places","Which people are tied to these locations?","Compare locations by decade"]}}case"people":{const o=new Map;r.forEach(u=>{var d;(d=u.familyMemberIds)==null||d.forEach(p=>{o.set(p,(o.get(p)??0)+1)})});const c=s.filter(u=>u.parentId).map(u=>({from:u.parentId,to:u.id,label:"parent → child",weight:1}));return{kind:"network",title:"Your family constellation",caption:"People in the archive, connected by recorded relationships.",verdict:`${s.length} people, ${c.length} recorded parent-child edges.`,prompt:e,sql:"SELECT entity_id, title, count() FROM heritage_atlas_facts WHERE entity_type='person' GROUP BY entity_id, title",source:"ClickHouse · heritage_atlas_facts + heritage_atlas_edges",nodes:s.map(u=>({id:u.id,label:u.fullName,group:u.relationship??void 0,weight:o.get(u.id)??0,meta:u.notes??void 0})),edges:c,followups:["Show me the oldest person in the archive","Who is most connected?","Timeline for Samuel Banda"]}}case"evidence":{const o=r.filter(c=>{var u;return!t.person||((u=c.familyMemberIds)==null?void 0:u.some(d=>{const p=s.find(_=>_.id===d);return p==null?void 0:p.fullName.startsWith(t.person)}))}).filter(c=>!t.place||c.location===t.place).sort((c,u)=>(c.year??0)-(u.year??0)).slice(0,12);return{kind:"table",title:"Source evidence",caption:`Traceable records${t.person?` mentioning ${t.person}`:""}.`,verdict:`${o.length} records, each linkable back to its source.`,prompt:e,sql:"SELECT title, event_year, location, entity_type FROM heritage_atlas_facts ORDER BY event_year LIMIT 12",source:"ClickHouse · heritage_atlas_facts",headers:["Year","Title","Location","Kind"],rows:o.map(c=>({cells:[c.year?String(c.year):"—",c.title,c.location??"—",c.type],drilldown:`Tell me more about "${c.title}"`})),followups:["Show me the oldest evidence","Group this evidence by type","Map this evidence by location"]}}case"decades":{const o=new Map;r.forEach(d=>{d.year&&o.set(xl(d.year),(o.get(xl(d.year))??0)+1)});const c=[...o.keys()].sort((d,p)=>d-p),u=c.reduce((d,p)=>(o.get(d)??0)>(o.get(p)??0)?d:p,c[0]??0);return{kind:"bar",title:"Memories by decade",caption:"How the archive grew, in ten-year windows.",verdict:`${c.length} decades represented; the ${u}s is the densest.`,prompt:e,sql:"SELECT floor(event_year/10)*10 AS decade, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY decade ORDER BY decade",source:"ClickHouse · heritage_atlas_timeline_yearly",series:[{name:"Memories",color:"#c0623a",points:c.map(d=>({label:`${d}s`,value:o.get(d)??0,drilldown:`Show me memories from the ${d}s`}))}],followups:["What happened in the busiest decade?","Compare two decades side by side","Show me the timeline in detail"]}}case"types":{const o=new Map;r.forEach(u=>o.set(u.type,(o.get(u.type)??0)+1));const c=[...o.entries()].sort((u,d)=>d[1]-u[1]);return{kind:"donut",title:"What kinds of memories",caption:"The archive broken down by record type.",verdict:`${c.length} record types; ${((a=c[0])==null?void 0:a[0])??"—"} is the most common.`,prompt:e,sql:"SELECT entity_type, count() FROM heritage_atlas_facts GROUP BY entity_type ORDER BY count() DESC",source:"ClickHouse · heritage_atlas_facts",series:[{name:"Records",points:c.map(([u,d])=>({label:u,value:d}))}],followups:["Show me only the letters","Timeline of audio memories","Who appears in the most photographs?"]}}case"oldest":case"newest":{const o=r.filter(c=>c.year!==null).sort((c,u)=>t.intent==="oldest"?c.year-u.year:u.year-c.year).slice(0,6);return{kind:"timeline",title:t.intent==="oldest"?"The earliest memories":"The most recent memories",caption:`The ${t.intent==="oldest"?"oldest":"newest"} preserved records.`,verdict:o.length?`${t.intent==="oldest"?"Earliest":"Newest"}: ${o[0].year} · ${o[0].title}`:"No dated memories yet.",prompt:e,sql:`SELECT title, event_year, location FROM heritage_atlas_facts WHERE event_year IS NOT NULL ORDER BY event_year ${t.intent==="oldest"?"ASC":"DESC"} LIMIT 6`,source:"ClickHouse · heritage_atlas_facts",events:o.map(c=>({year:c.year,label:c.title,detail:c.description??void 0,category:c.type})),followups:["Show me the timeline for these years","Where did these memories happen?","Who is in these memories?"]}}case"compare_decades":{const o=new Map;r.forEach(p=>{if(!p.year)return;const _=xl(p.year);o.has(_)||o.set(_,new Map),o.get(_).set(p.type,(o.get(_).get(p.type)??0)+1)});const c=[...o.keys()].sort((p,_)=>p-_),u=c[0],d=c[c.length-1];return{kind:"compare",title:"Decade by decade",caption:`Comparing the ${u}s and the ${d}s, side by side.`,verdict:`${c.length} decades compared across ${r.length} records.`,prompt:e,sql:"SELECT floor(event_year/10)*10 AS decade, entity_type, count() FROM heritage_atlas_facts GROUP BY decade, entity_type",source:"ClickHouse · heritage_atlas_facts",compare:{leftLabel:`${u}s`,rightLabel:`${d}s`,left:[...o.get(u).entries()].map(([p,_])=>({label:p,value:_})),right:[...o.get(d).entries()].map(([p,_])=>({label:p,value:_}))},followups:["Show me the timeline for these decades","Which decade had the most letters?","Map the earliest decade"]}}case"overview":default:{const o=new Set(r.map(u=>u.year).filter(u=>u!==null)),c=new Set(r.map(u=>u.location).filter(Boolean));return{kind:"kpi",title:"Your archive at a glance",caption:"The shape of your family's preserved story.",verdict:`${r.length} memories across ${o.size} years and ${c.size} places.`,prompt:e,sql:"SELECT count(), uniq(event_year), uniq(location) FROM heritage_atlas_facts",source:"ClickHouse · heritage_atlas_facts",kpi:[{label:"Memories",value:String(r.length),icon:"inventory_2",trend:"up"},{label:"People",value:String(s.length),icon:"group",trend:"flat"},{label:"Years covered",value:String(o.size),icon:"calendar_month",trend:"up"},{label:"Places",value:String(c.size),icon:"location_on",trend:"flat"}],followups:["Show me the timeline","Where did these memories happen?","Who appears most often?","What kinds of memories are these?"]}}}}const pt={},a1="heritage-atlas-agent",D6=(pt==null?void 0:pt.VITE_TRIGGER_PROJECT_REF)??"",xp=(pt==null?void 0:pt.VITE_TRIGGER_TOKEN_ENDPOINT)??"/api/chat-access-token",L6=(pt==null?void 0:pt.VITE_TRIGGER_START_ENDPOINT)??"/api/chat-start",O6=(pt==null?void 0:pt.VITE_CLICKHOUSE_LIVE)==="true",V6=(pt==null?void 0:pt.VITE_AGENT_ENDPOINT)??"/api/agent-query",rs=!!(D6&&xp),ss=O6,o1=rs||ss;async function M6(){if(!rs)return null;try{const{TriggerChatTransport:n}=await R6(async()=>{const{TriggerChatTransport:e}=await import("./chat-BypzTZp5.js").then(t=>t.l);return{TriggerChatTransport:e}},[],import.meta.url);return new n({task:a1,accessToken:async({chatId:e})=>{const t=await fetch(xp,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:e})});if(!t.ok)throw new Error(`Token refresh failed: ${t.status}`);return(await t.json()).publicAccessToken},startSession:async({chatId:e})=>{const t=await fetch(L6,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:e,taskId:a1})});if(!t.ok)throw new Error(`Session start failed: ${t.status}`);return t.json()}})}catch(n){return console.warn("[agent] Failed to load TriggerChatTransport:",n),null}}async function U6(n,e,t,r){const s=await M6();if(!s)return null;r("interpreting");const i=`chat-${Date.now()}`;try{await s.start(i).catch(()=>null),r("querying");const a=await s.sendMessages({chatId:i,messages:[{id:`msg-${Date.now()}`,role:"user",parts:[{type:"text",text:e}]}],clientData:{vaultId:t||"demo-vault"}});let o=null,c="";const u=a.getReader();for(;;){const{done:d,value:p}=await u.read();if(d)break;if(p){if(p.type==="tool-output-available"&&p.output){const _=p.output,w=_.spec??_.output??_;w&&w.kind&&w.title&&(o=w,r("rendering"))}if(p.type==="text-delta"&&p.delta&&(c+=p.delta),p.type==="error")throw new Error(p.errorText||"Agent stream error")}}return o?(o.source="Trigger.dev chat.agent() · ClickHouse Cloud (live)",o.prompt=e,{spec:o,caption:c.trim()||o.verdict||""}):(console.warn("[agent] No VizSpec in Trigger.dev stream, falling back"),null)}catch(a){return console.warn("[agent] Trigger.dev turn failed, falling back to ClickHouse middleware:",a),null}}async function B6(n,e){if(!ss)return null;e("interpreting"),await new Promise(t=>setTimeout(t,200)),e("querying");try{const t=await fetch(V6,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})});if(!t.ok)throw new Error(`Agent endpoint ${t.status}`);e("rendering");const r=await t.json();return{spec:r,caption:r.verdict??""}}catch(t){return console.warn("[agent] Live ClickHouse turn failed:",t),null}}async function F6(n,e,t){t("interpreting"),await new Promise(s=>setTimeout(s,280)),t("querying"),await new Promise(s=>setTimeout(s,520)),t("rendering"),await new Promise(s=>setTimeout(s,240));const r=N6(n,e);return{spec:r,caption:r.verdict??""}}async function q6(n,e,t,r){if(rs){const s=await U6(n,e,t,r);if(s)return s}if(ss){const s=await B6(e,r);if(s)return s;throw new Error("The live ClickHouse archive could not be reached. No demonstration data was shown. Please try again.")}return F6(n,e,r)}const Lt=["#2c3a2e","#c0623a","#d4a44c","#6f8266","#b5c4a8","#d98865","#3a4a3c","#8a6456"],Q=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};function $6(n){return`
    <div class="hv-agent__kpi-grid">
      ${(n.kpi??[]).map(t=>{const r=t.trend==="up"?'<span class="material-symbols-outlined hv-agent__trend hv-agent__trend--up">trending_up</span>':t.trend==="down"?'<span class="material-symbols-outlined hv-agent__trend hv-agent__trend--down">trending_down</span>':"";return`
            <div class="hv-agent__kpi-card">
              <div class="hv-agent__kpi-top">
                <span class="material-symbols-outlined hv-agent__kpi-icon">${Q(t.icon??"stats")}</span>
                ${r}
              </div>
              <div class="hv-agent__kpi-value">${Q(t.value)}</div>
              <div class="hv-agent__kpi-label">${Q(t.label)}</div>
              ${t.sub?`<div class="hv-agent__kpi-sub">${Q(t.sub)}</div>`:""}
            </div>
          `}).join("")}
    </div>
  `}function H6(n){const e=n.series??[];if(!e.length)return Ot("No data");const t=e[0].points,r=Math.max(...t.map(P=>P.value),1),s=720,i=320,a=48,o=24,c=24,u=56,d=s-a-o,p=i-c-u,_=d/t.length*.62,w=d/t.length*.38,S=Array.from({length:5},(P,D)=>{const U=Math.round(r/4*D),q=c+p-U/r*p;return{v:U,y:q}});return`
    <svg class="hv-agent__chart" viewBox="0 0 ${s} ${i}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${Q(n.title)}">
      ${S.map(P=>`
          <line x1="${a}" y1="${P.y}" x2="${s-o}" y2="${P.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${a-8}" y="${P.y+4}" text-anchor="end" font-size="11" fill="#6b7060">${P.v}</text>
        `).join("")}
      ${t.map((P,D)=>{const U=a+D*(_+w)+w/2,q=P.value/r*p,X=c+p-q,ae=Lt[D%Lt.length];return`
            <g class="hv-agent__bar" data-drilldown="${Q(P.drilldown)}" data-label="${Q(P.label)}" data-value="${Q(P.value)}">
              <rect x="${U}" y="${X}" width="${_}" height="${q}" rx="6" ry="6" fill="${ae}" opacity="0.9">
                <animate attributeName="height" from="0" to="${q}" dur="0.6s" fill="freeze" begin="${D*.06}s" />
                <animate attributeName="y" from="${c+p}" to="${X}" dur="0.6s" fill="freeze" begin="${D*.06}s" />
              </rect>
              <text x="${U+_/2}" y="${c+p+22}" text-anchor="middle" font-size="11" fill="#3a3f33">${Q(P.label)}</text>
              <text x="${U+_/2}" y="${X-6}" text-anchor="middle" font-size="11" font-weight="600" fill="#1d2018">${Q(P.value)}</text>
            </g>
          `}).join("")}
      <line x1="${a}" y1="${c+p}" x2="${s-o}" y2="${c+p}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `}function j6(n){const e=n.series??[];if(!e.length)return Ot("No data");const t=e[0].points;if(t.length<2)return Ot("Need at least 2 points");const r=Math.max(...t.map(D=>D.value),1),s=720,i=320,a=48,o=24,c=24,u=56,d=s-a-o,p=i-c-u,_=d/(t.length-1),w=Array.from({length:5},(D,U)=>{const q=Math.round(r/4*U),X=c+p-q/r*p;return{v:q,y:X}}),S=t.map((D,U)=>{const q=a+U*_,X=c+p-D.value/r*p;return`${U===0?"M":"L"} ${q} ${X}`}).join(" "),P=`${S} L ${a+(t.length-1)*_} ${c+p} L ${a} ${c+p} Z`;return`
    <svg class="hv-agent__chart" viewBox="0 0 ${s} ${i}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${Q(n.title)}">
      <defs>
        <linearGradient id="hv-agent-line-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c3a2e" stop-opacity="0.28" />
          <stop offset="100%" stop-color="#2c3a2e" stop-opacity="0" />
        </linearGradient>
      </defs>
      ${w.map(D=>`
          <line x1="${a}" y1="${D.y}" x2="${s-o}" y2="${D.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${a-8}" y="${D.y+4}" text-anchor="end" font-size="11" fill="#6b7060">${D.v}</text>
        `).join("")}
      <path d="${P}" fill="url(#hv-agent-line-grad)" />
      <path d="${S}" fill="none" stroke="#2c3a2e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0 2000" to="2000 0" dur="1s" fill="freeze" />
      </path>
      ${t.map((D,U)=>{const q=a+U*_,X=c+p-D.value/r*p;return`
            <g class="hv-agent__point" data-drilldown="${Q(D.drilldown)}" data-label="${Q(D.label)}" data-value="${Q(D.value)}">
              <circle cx="${q}" cy="${X}" r="4" fill="#fbf5ec" stroke="#2c3a2e" stroke-width="2">
                <animate attributeName="r" from="0" to="4" dur="0.4s" fill="freeze" begin="${.8+U*.04}s" />
              </circle>
              ${U%Math.max(1,Math.floor(t.length/8))===0?`<text x="${q}" y="${c+p+22}" text-anchor="middle" font-size="11" fill="#3a3f33">${Q(D.label)}</text>`:""}
            </g>
          `}).join("")}
      <line x1="${a}" y1="${c+p}" x2="${s-o}" y2="${c+p}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `}function z6(n){const e=n.series??[];if(!e.length)return Ot("No data");const t=e[0].points,r=t.reduce((d,p)=>d+p.value,0);if(r===0)return Ot("No data");const s=180,i=180,a=130,o=78;let c=-Math.PI/2;const u=t.map((d,p)=>{const _=d.value/r*Math.PI*2,w=c,S=c+_;c=S;const P=s+a*Math.cos(w),D=i+a*Math.sin(w),U=s+a*Math.cos(S),q=i+a*Math.sin(S),X=s+o*Math.cos(S),ae=i+o*Math.sin(S),fe=s+o*Math.cos(w),F=i+o*Math.sin(w),T=_>Math.PI?1:0,g=`M ${P} ${D} A ${a} ${a} 0 ${T} 1 ${U} ${q} L ${X} ${ae} A ${o} ${o} 0 ${T} 0 ${fe} ${F} Z`,v=(w+S)/2,b=(a+o)/2,I=s+b*Math.cos(v),C=i+b*Math.sin(v),E=Math.round(d.value/r*100);return{path:g,color:Lt[p%Lt.length],label:d.label,value:d.value,pct:E,lx:I,ly:C}});return`
    <div class="hv-agent__donut-wrap">
      <svg class="hv-agent__chart hv-agent__donut" viewBox="0 0 360 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${Q(n.title)}">
        ${u.map((d,p)=>`
            <g class="hv-agent__slice" data-label="${Q(d.label)}" data-value="${Q(d.value)}" data-pct="${Q(d.pct)}">
              <path d="${d.path}" fill="${d.color}" opacity="0.92">
                <animate attributeName="opacity" from="0" to="0.92" dur="0.5s" fill="freeze" begin="${p*.08}s" />
              </path>
              ${d.pct>=8?`<text x="${d.lx}" y="${d.ly}" text-anchor="middle" font-size="13" font-weight="600" fill="#fbf5ec">${d.pct}%</text>`:""}
            </g>
          `).join("")}
        <text x="${s}" y="${i-6}" text-anchor="middle" font-size="14" fill="#6b7060" font-family="Spectral, serif">total</text>
        <text x="${s}" y="${i+18}" text-anchor="middle" font-size="28" font-weight="500" fill="#1d2018" font-family="Fraunces, serif">${r}</text>
      </svg>
      <ul class="hv-agent__legend">
        ${u.map(d=>`
            <li class="hv-agent__legend-item" data-label="${Q(d.label)}" data-value="${Q(d.value)}">
              <span class="hv-agent__legend-swatch" style="background:${d.color}"></span>
              <span class="hv-agent__legend-label">${Q(d.label)}</span>
              <span class="hv-agent__legend-value">${Q(d.value)} · ${d.pct}%</span>
            </li>
          `).join("")}
      </ul>
    </div>
  `}function W6(n){const e=n.events??[];if(!e.length)return Ot("No events");const t=e.map(a=>a.year),r=Math.min(...t),s=Math.max(...t),i=Math.max(1,s-r);return`
    <div class="hv-agent__timeline">
      <div class="hv-agent__timeline-axis">
        <span>${r}</span>
        <div class="hv-agent__timeline-line"></div>
        <span>${s}</span>
      </div>
      <div class="hv-agent__timeline-events">
        ${e.map((a,o)=>{const c=(a.year-r)/i*92+4,u=Lt[o%Lt.length];return`
              <button class="hv-agent__timeline-event" data-label="${Q(a.label)}" data-year="${Q(a.year)}" style="--left: ${c}%; --color: ${u}; --delay: ${o*80}ms">
                <span class="hv-agent__timeline-dot"></span>
                <span class="hv-agent__timeline-card">
                  <b>${Q(a.year)}</b>
                  <span class="hv-agent__timeline-title">${Q(a.label)}</span>
                  ${a.detail?`<small>${Q(a.detail)}</small>`:""}
                </span>
              </button>
            `}).join("")}
      </div>
    </div>
  `}function G6(n){const e=n.nodes??[],t=n.edges??[];if(!e.length)return Ot("No people");const r=Math.max(...e.map(c=>c.weight??0),1),s=50,i=50,a=32;e.forEach((c,u)=>{const d=u/e.length*Math.PI*2-Math.PI/2,p=a-(c.weight??0)/r*10;c._x=s+p*Math.cos(d),c._y=i+p*Math.sin(d)});const o=new Map(e.map(c=>[c.id,c]));return`
    <div class="hv-agent__network">
      <svg class="hv-agent__network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${t.map(c=>{const u=o.get(c.from),d=o.get(c.to);if(!u||!d)return"";const p=u._x,_=u._y,w=d._x,S=d._y;return`<line x1="${p}" y1="${_}" x2="${w}" y2="${S}" stroke="rgba(28,32,24,0.18)" stroke-width="0.3" />`}).join("")}
      </svg>
      ${e.map((c,u)=>{const d=c,p=16+(c.weight??0)/r*16;return`
            <button class="hv-agent__node" data-label="${Q(c.label)}" data-meta="${Q(c.meta??c.group??"")}" style="--x: ${d._x}%; --y: ${d._y}%; --size: ${p}px; --delay: ${u*60}ms">
              <span class="hv-agent__node-dot"></span>
              <span class="hv-agent__node-label">${Q(c.label.split(" ")[0])}</span>
            </button>
          `}).join("")}
    </div>
  `}function K6(n){const e=n.points??[];if(!e.length)return Ot("No locations");const t=e.every(a=>a.lat!==void 0&&a.lng!==void 0),r=t?{minLat:-22,maxLat:-8,minLng:21,maxLng:34}:{minLat:0,maxLat:0,minLng:0,maxLng:0},s=Math.max(...e.map(a=>a.count),1),i=(a,o)=>{const c=(o-r.minLng)/(r.maxLng-r.minLng)*100,u=100-(a-r.minLat)/(r.maxLat-r.minLat)*100;return{x:c,y:u}};return`
    <div class="hv-agent__map">
      <svg class="hv-agent__map-bg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="hv-agent-map-grid" width="6.25" height="6.25" patternUnits="userSpaceOnUse">
            <path d="M 6.25 0 L 0 0 0 6.25" fill="none" stroke="rgba(28,32,24,0.08)" stroke-width="0.2" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hv-agent-map-grid)" />
        ${t?`<path d="M ${i(-8,22).x},${i(-8,22).y} L ${i(-8,34).x},${i(-8,34).y} L ${i(-22,34).x},${i(-22,34).y} L ${i(-22,22).x},${i(-22,22).y} Z" fill="rgba(111,130,102,0.10)" stroke="rgba(45,58,46,0.25)" stroke-width="0.3" />`:""}
      </svg>
      ${e.map((a,o)=>{const c=t?i(a.lat,a.lng):{x:a.x??50,y:a.y??50},u=18+a.count/s*28,d=Lt[o%Lt.length];return`
            <button class="hv-agent__map-place" data-drilldown="${Q(a.drilldown)}" data-label="${Q(a.place)}" data-count="${Q(a.count)}" style="--x: ${c.x}%; --y: ${c.y}%; --size: ${u}px; --color: ${d}; --delay: ${o*70}ms">
              <span class="hv-agent__map-pulse"></span>
              <span class="hv-agent__map-dot"></span>
              <span class="hv-agent__map-label">${Q(a.place)} <b>${Q(a.count)}</b></span>
            </button>
          `}).join("")}
      <div class="hv-agent__map-legend">
        <span>Density</span>
        <i style="width: 12px; height: 12px"></i>
        <i style="width: 18px; height: 18px"></i>
        <i style="width: 26px; height: 26px"></i>
      </div>
    </div>
  `}function Q6(n){const e=n.headers??[],t=n.rows??[];return t.length?`
    <div class="hv-agent__table-wrap">
      <table class="hv-agent__table">
        <thead>
          <tr>${e.map(r=>`<th>${Q(r)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${t.map((r,s)=>`
              <tr class="hv-agent__table-row" data-drilldown="${Q(r.drilldown)}" style="--delay: ${s*30}ms">
                ${r.cells.map((i,a)=>`<td${a===0?' class="hv-agent__table-key"':""}>${Q(i)}</td>`).join("")}
              </tr>
            `).join("")}
        </tbody>
      </table>
    </div>
  `:Ot("No records")}function Y6(n){const e=n.compare;if(!e)return Ot("No comparison");const t=Math.max(...e.left.map(s=>s.value),1),r=Math.max(...e.right.map(s=>s.value),1);return`
    <div class="hv-agent__compare">
      <div class="hv-agent__compare-col hv-agent__compare-col--left">
        <h4>${Q(e.leftLabel)}</h4>
        ${e.left.map((s,i)=>{const a=s.value/t*100;return`
              <div class="hv-agent__compare-row" data-label="${Q(s.label)}" data-value="${Q(s.value)}">
                <span class="hv-agent__compare-label">${Q(s.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${a}%; background: ${Lt[i%Lt.length]}; --delay: ${i*80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${Q(s.value)}</span>
              </div>
            `}).join("")}
      </div>
      <div class="hv-agent__compare-divider"></div>
      <div class="hv-agent__compare-col hv-agent__compare-col--right">
        <h4>${Q(e.rightLabel)}</h4>
        ${e.right.map((s,i)=>{const a=s.value/r*100;return`
              <div class="hv-agent__compare-row" data-label="${Q(s.label)}" data-value="${Q(s.value)}">
                <span class="hv-agent__compare-label">${Q(s.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${a}%; background: ${Lt[(i+4)%Lt.length]}; --delay: ${i*80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${Q(s.value)}</span>
              </div>
            `}).join("")}
      </div>
    </div>
  `}function X6(n){const e=n.heatmap??[];if(!e.length)return Ot("No data");const t=[...new Set(e.map(i=>i.row))],r=[...new Set(e.map(i=>i.col))],s=Math.max(...e.map(i=>i.value),1);return`
    <div class="hv-agent__heatmap">
      ${t.map(i=>`
          <div class="hv-agent__heatmap-row">
            <span class="hv-agent__heatmap-label">${Q(i)}</span>
            ${r.map(a=>{const o=e.find(d=>d.row===i&&d.col===a),c=(o==null?void 0:o.value)??0;return`<div class="hv-agent__heatmap-cell" style="background: rgba(192,98,58,${c/s}); --value: ${c}" data-row="${Q(i)}" data-col="${Q(a)}" data-value="${Q(c)}" title="${Q(i)} · ${Q(a)}: ${Q(c)}"></div>`}).join("")}
          </div>
        `).join("")}
    </div>
  `}function Ot(n){return`
    <div class="hv-agent__empty">
      <span class="material-symbols-outlined">query_stats</span>
      <p>${Q(n)}</p>
    </div>
  `}function J6(n){switch(n.kind){case"kpi":return $6(n);case"bar":return H6(n);case"line":return j6(n);case"donut":return z6(n);case"timeline":return W6(n);case"network":return G6(n);case"map":return K6(n);case"table":return Q6(n);case"compare":return Y6(n);case"heatmap":return X6(n);default:return Ot(`Unknown viz kind: ${n.kind}`)}}const Z6=new Set(["vault","family-map","story-mode","atlas","agent"]),l1="heritageatlas-sidebar-collapsed";function e0(n){const e=document.documentElement.dataset.authUserName,t=document.documentElement.dataset.authUserInitials;e&&(n.querySelectorAll("[data-auth-user-name]").forEach(r=>{r.textContent=e}),n.querySelectorAll("[data-auth-user-initials]").forEach(r=>{r.textContent=t||"AK"}),n.querySelectorAll(":scope > div:last-child p.font-semibold").forEach(r=>{r.textContent=e}))}function t0(n){var s;const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=[];let r;for(;r=e.nextNode();){const i=r.parentElement;!i||!((s=r.textContent)!=null&&s.trim())||i.closest(".material-symbols-outlined, .sidebar-copy")||t.push(r)}t.forEach(i=>{const a=document.createElement("span");a.className="sidebar-copy",a.textContent=i.textContent,i.replaceWith(a)})}function n0(n={}){const e=[...document.querySelectorAll("[data-sidebar]")],t=n.onNavigate,r=s=>{e.forEach(i=>{i.classList.toggle("is-collapsed",s);const a=i.querySelector("[data-sidebar-collapse]");a==null||a.setAttribute("aria-expanded",String(!s));const o=a==null?void 0:a.querySelector(".material-symbols-outlined");o&&(o.textContent=s?"menu":"menu_open")}),localStorage.setItem(l1,s?"true":"false")};e.forEach(s=>{if(s.dataset.sidebarInitialized==="true")return;s.dataset.sidebarInitialized="true",s.setAttribute("aria-label","Heritage Atlas navigation"),e0(s),t0(s);const i=document.createElement("button");i.type="button",i.className="sidebar-collapse-toggle",i.dataset.sidebarCollapse="",i.setAttribute("aria-label","Collapse sidebar"),i.innerHTML='<span class="material-symbols-outlined">menu_open</span><span class="sidebar-copy">Collapse sidebar</span>';const a=s.firstElementChild;s.insertBefore(i,(a==null?void 0:a.nextSibling)??null);const o=document.createElement("img");o.className="sidebar-collapse-mark",o.src="/heritageatlas-mark.svg",o.alt="Heritage Atlas",a==null||a.append(o),i.addEventListener("click",()=>r(!s.classList.contains("is-collapsed"))),s.querySelectorAll("[data-dashboard-view]").forEach(c=>{const u=c.dataset.dashboardView;!u||!Z6.has(u)||!t||c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),t(u)})})}),r(localStorage.getItem(l1)==="true")}const r0=["Show me the timeline of memories","Where did my family live?","Who appears most often in the archive?","What kinds of memories are preserved?","Compare the 1920s and the 2020s","What are the oldest memories?","Show me the family constellation","Give me an overview of the archive"],s0={queued:"Queued",interpreting:"Interpreting your question",querying:"Querying ClickHouse",rendering:"Rendering visualization",done:"Done",error:"Something went wrong"};class Pp{constructor(e){A(this,"mount");A(this,"dataset");A(this,"messages",[]);A(this,"isStreaming",!1);this.mount=e.mount,this.dataset=e.dataset,e.vaultId,e.onFollowup}init(){this.renderShell(),this.renderSuggestedPrompts();const e=sessionStorage.getItem("heritage-atlas-pending-prompt");e&&(sessionStorage.removeItem("heritage-atlas-pending-prompt"),this.send(e))}async send(e){if(this.isStreaming||!e.trim())return;this.isStreaming=!0;const t={id:`u-${Date.now()}`,role:"user",prompt:e,at:new Date().toISOString()};this.messages.push(t),this.rememberPrompt(e),this.renderMessages();const r={id:`a-${Date.now()}`,role:"agent",prompt:e,at:new Date().toISOString(),phase:"queued"};this.messages.push(r),this.renderMessages();const s=Date.now();try{const i=await q6(this.dataset,e,"demo-vault",a=>{const o=this.messages.find(c=>c.id===r.id);o&&(o.phase=a,this.renderMessages())});i.spec.elapsedMs=Date.now()-s,i.spec.source||(i.spec.source=rs?"Trigger.dev chat.agent() · ClickHouse":ss?"ClickHouse Cloud · live (Vite middleware)":"Mock runtime · (configure Trigger.dev + ClickHouse for production)"),r.spec=i.spec,r.phase="done",this.renderMessages()}catch(i){r.phase="error",r.text=i instanceof Error?i.message:String(i),this.renderMessages()}finally{this.isStreaming=!1}}renderShell(){this.mount.innerHTML=`
      ${_i({activeView:"agent"})}

      <div class="hv-agent">
        <header class="hv-agent__header">
          <div class="hv-agent__header-left">
            <span class="material-symbols-outlined hv-agent__header-icon">auto_awesome</span>
            <div>
              <h2>Heritage Atlas Agent</h2>
              <p>Ask anything about your archive — the answer is a chart, map, or diagram.</p>
            </div>
          </div>
          <div class="hv-agent__header-right">
            <span class="hv-agent__powered${o1?" hv-agent__powered--live":" hv-agent__powered--fallback"}" title="${rs?"Live: Trigger.dev chat.agent() worker querying ClickHouse Cloud":ss?"Live: Vite middleware querying ClickHouse Cloud directly. Trigger.dev secret key pending — once set, the chat.agent() worker takes over.":"Fallback mode: set VITE_TRIGGER_PROJECT_REF + VITE_TRIGGER_PUBLIC_TOKEN or VITE_CLICKHOUSE_LIVE=true in .env"}">
              <span class="material-symbols-outlined" style="font-size:14px">${o1?"bolt":"cloud_off"}</span>
              ${rs?"Trigger.dev + ClickHouse · live":ss?"ClickHouse · live":"Mock runtime · configure Trigger.dev + ClickHouse"}
            </span>
          </div>
        </header>

        <div class="hv-agent__scroll" data-agent-scroll>
          <div class="hv-agent__messages" data-agent-messages></div>
          <div class="hv-agent__suggestions" data-agent-suggestions></div>
        </div>

        <form class="hv-agent__input-row" data-agent-form>
          <div class="hv-agent__input-wrap">
            <span class="material-symbols-outlined hv-agent__input-icon">search</span>
            <input
              type="text"
              class="hv-agent__input"
              data-agent-input
              placeholder="Ask: where did my family live? what are the oldest memories?"
              autocomplete="off"
              aria-label="Ask the Heritage Atlas agent"
            />
            <button type="submit" class="hv-agent__send" data-agent-send aria-label="Send">
              <span class="material-symbols-outlined">arrow_upward</span>
            </button>
          </div>
          <p class="hv-agent__hint">
            The agent returns charts, maps, and diagrams — never paragraphs.
            Click any chart element to drill down.
          </p>
        </form>
      </div>
    `,n0();const e=this.mount.querySelector("[data-agent-form]"),t=this.mount.querySelector("[data-agent-input]");e==null||e.addEventListener("submit",r=>{r.preventDefault();const s=(t==null?void 0:t.value.trim())??"";s&&(this.send(s),t&&(t.value=""))})}renderSuggestedPrompts(){const e=this.mount.querySelector("[data-agent-suggestions]");if(!e)return;const t=JSON.parse(localStorage.getItem("heritage-atlas-recent-prompts")??"[]");e.innerHTML=`
      <p class="hv-agent__suggestions-label">Try asking</p>
      <div class="hv-agent__chips">
        ${r0.map(r=>`
          <button class="hv-agent__chip" data-prompt="${this.esc(r)}">${this.esc(r)}</button>
        `).join("")}
      </div>
      ${t.length?`<div class="hv-agent__recent"><p class="hv-agent__suggestions-label">Recently asked</p><div class="hv-agent__chips">${t.map(r=>`<button class="hv-agent__chip" data-recent-prompt="${this.esc(r)}">${this.esc(r)}</button>`).join("")}</div></div>`:""}
    `,e.querySelectorAll("[data-prompt]").forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.prompt??"",i=this.mount.querySelector("[data-agent-input]");i&&(i.value=s),this.send(s),i&&(i.value="")})}),e.querySelectorAll("[data-recent-prompt]").forEach(r=>{r.addEventListener("click",()=>this.send(r.dataset.recentPrompt??""))})}renderMessages(){const e=this.mount.querySelector("[data-agent-messages]");if(!e)return;if(this.messages.length===0){e.innerHTML="",this.showSuggestions();return}this.hideSuggestions(),e.innerHTML=this.messages.map(r=>this.renderMessage(r)).join(""),this.messages.forEach(r=>{r.role==="agent"&&r.phase==="done"&&r.spec&&this.bindInteractions(r.id)}),e.querySelectorAll("[data-agent-retry]").forEach(r=>{r.addEventListener("click",()=>this.send(r.dataset.agentRetry??""))}),e.querySelectorAll("[data-agent-suggest]").forEach(r=>{r.addEventListener("click",()=>{const s=this.mount.querySelector("[data-agent-input]");s&&(s.value="Show me the timeline of memories",s.focus())})});const t=this.mount.querySelector("[data-agent-scroll]");t&&(t.scrollTop=t.scrollHeight)}renderMessage(e){return e.role==="user"?`
        <div class="hv-agent__msg hv-agent__msg--user">
          <div class="hv-agent__msg-bubble hv-agent__msg-bubble--user">
            ${this.esc(e.prompt??"")}
          </div>
        </div>
      `:e.role==="agent"?this.renderAgentMessage(e):`
      <div class="hv-agent__msg hv-agent__msg--system">
        <div class="hv-agent__msg-bubble hv-agent__msg-bubble--system">${this.esc(e.text??"")}</div>
      </div>
    `}renderAgentMessage(e){if(e.phase&&e.phase!=="done"&&e.phase!=="error")return`
        <div class="hv-agent__msg hv-agent__msg--agent">
          <div class="hv-agent__msg-avatar">
            <span class="material-symbols-outlined">auto_awesome</span>
          </div>
          <div class="hv-agent__msg-body">
            <div class="hv-agent__phase">
              <span class="hv-agent__phase-spinner"></span>
              <span class="hv-agent__phase-label">${s0[e.phase]}</span>
            </div>
            <div class="hv-agent__skeleton" aria-label="Preparing a visual answer"><i></i><i></i><i></i></div>
          </div>
        </div>
      `;if(e.phase==="error")return`
        <div class="hv-agent__msg hv-agent__msg--agent">
          <div class="hv-agent__msg-avatar"><span class="material-symbols-outlined">error</span></div>
          <div class="hv-agent__msg-body">
            <div class="hv-agent__error"><b>We could not complete that visual answer.</b><span>${this.esc(e.text??"The live archive did not respond.")}</span><div><button type="button" data-agent-retry="${this.esc(e.prompt??"")}">Retry</button><button type="button" data-agent-suggest>Try a different question</button></div></div>
          </div>
        </div>
      `;const t=e.spec;return`
      <div class="hv-agent__msg hv-agent__msg--agent" data-msg-id="${e.id}">
        <div class="hv-agent__msg-avatar"><span class="material-symbols-outlined">auto_awesome</span></div>
        <div class="hv-agent__msg-body">
          <div class="hv-agent__viz-card" data-viz-card>
            <header class="hv-agent__viz-header">
              <div>
                <h3>${this.esc(t.title)}</h3>
                <p>${this.esc(t.caption)}</p>
              </div>
              <span class="hv-agent__viz-kind" data-kind="${t.kind}">${t.kind}</span>
            </header>
            ${t.verdict?`<p class="hv-agent__viz-verdict">${this.esc(t.verdict)}</p>`:""}
            <div class="hv-agent__viz-body" data-viz-body>
              ${J6(t)}
            </div>
            <footer class="hv-agent__viz-footer">
              ${t.source?`<span class="hv-agent__viz-source"><span class="material-symbols-outlined" style="font-size:13px">database</span>${this.esc(t.source)}</span>`:""}
              ${t.elapsedMs!==void 0?`<span class="hv-agent__viz-elapsed"><span class="material-symbols-outlined" style="font-size:13px">schedule</span>${t.elapsedMs} ms</span>`:""}
              ${t.sql?`<details class="hv-agent__viz-sql"><summary><span class="material-symbols-outlined" style="font-size:13px">code</span>SQL</summary><pre><code>${this.esc(t.sql)}</code></pre></details>`:""}
            </footer>
            ${t.followups&&t.followups.length?`
                <div class="hv-agent__followups">
                  <p>Follow up</p>
                  <div class="hv-agent__chips hv-agent__chips--inline">
                    ${t.followups.map(r=>`<button class="hv-agent__chip" data-followup="${this.esc(r)}">${this.esc(r)}</button>`).join("")}
                  </div>
                </div>
              `:""}
          </div>
        </div>
      </div>
    `}bindInteractions(e){const t=this.mount.querySelector(`[data-msg-id="${e}"]`);t&&(t.querySelectorAll("[data-drilldown]").forEach(r=>{const s=r.getAttribute("data-drilldown");if(!s)return;r.setAttribute("role","button"),r.setAttribute("tabindex","0");const i=()=>{if(this.isStreaming)return;const a=this.mount.querySelector("[data-agent-input]");a&&(a.value=s),this.send(s),a&&(a.value="")};r.addEventListener("click",i),r.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i())})}),t.querySelectorAll("[data-followup]").forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.followup??"",i=this.mount.querySelector("[data-agent-input]");i&&(i.value=s),this.send(s),i&&(i.value="")})}),t.querySelectorAll(".hv-agent__legend-item").forEach(r=>{r.addEventListener("mouseenter",()=>{const s=r.dataset.label;t.querySelectorAll(".hv-agent__slice").forEach(i=>{i.style.opacity=i.dataset.label===s?"1":"0.25"})}),r.addEventListener("mouseleave",()=>{t.querySelectorAll(".hv-agent__slice").forEach(s=>{s.style.opacity=""})})}))}showSuggestions(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.style.display="")}rememberPrompt(e){const t="heritage-atlas-recent-prompts",r=JSON.parse(localStorage.getItem(t)??"[]");localStorage.setItem(t,JSON.stringify([e,...r.filter(s=>s!==e)].slice(0,5)))}hideSuggestions(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.style.display="none")}esc(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}}let ma=null;function kp(){const n=document.getElementById("agent-screen");return n?(ma||(ma=new Pp({mount:n,dataset:ce.getSnapshot(),vaultId:"demo-vault"}),ma.init()),ma):null}document.addEventListener("heritage:agent-route",()=>{kp()});window.location.hash==="#agent"&&kp();const qe=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};function Np(n){ja(n);const e=Rc(()=>{(n.offsetParent!==null||n.style.display!=="none")&&ja(n)});n._hvUnsubscribe=e}let _n=null;function ja(n){const e=ce.getSnapshot(),t=e.members,r=t.filter(u=>u.parentId).map(u=>({from:u.parentId,to:u.id})),s=new Map;t.forEach(u=>{u.parentId&&s.set(u.id,u.parentId)});const i=u=>{let d=0,p=u;for(;s.has(p)&&(p=s.get(p),d++,!(d>20)););return d},a=new Map;t.forEach(u=>{const d=i(u.id);a.has(d)||a.set(d,[]),a.get(d).push(u)});const o=[...a.keys()].sort((u,d)=>u-d),c=new Map;e.memories.forEach(u=>{var d;(d=u.familyMemberIds)==null||d.forEach(p=>{c.set(p,(c.get(p)??0)+1)})}),xc(),n.innerHTML=`
    <div class="hv-fm-backdrop" aria-hidden="true">
      <div class="hv-fm-aurora"></div>
    </div>
    <div class="hv-fm-grain" aria-hidden="true"></div>

    ${_i({activeView:"family-map"})}

    <main class="hv-fm-main">
      <header class="hv-fm-topbar">
        <div>
          <p class="hv-fm-topbar__eyebrow">Your lineage, connected</p>
          <h2 class="hv-fm-topbar__title">Family <em>Map.</em></h2>
        </div>
        <div class="hv-fm-topbar__actions">
          <button class="hv-fm-topbar__btn" type="button" data-fm-add-relative>
            <span class="material-symbols-outlined">person_add</span>
            Add relative
          </button>
          <button class="hv-fm-topbar__btn hv-fm-topbar__btn--primary" type="button" data-fm-invite-family>
            <span class="material-symbols-outlined">group_add</span>
            Invite family
          </button>
        </div>
      </header>

      ${e.invitations.length>0?`
        <div class="hv-fm-invites" data-fm-invites>
          <button type="button" class="hv-fm-invites__toggle" data-fm-invites-toggle>
            <span class="material-symbols-outlined">mail</span>
            <span>${e.invitations.length} pending ${e.invitations.length===1?"invitation":"invitations"}</span>
            <span class="material-symbols-outlined hv-fm-invites__chevron">expand_more</span>
          </button>
          <div class="hv-fm-invites__list is-hidden" data-fm-invites-list>
            ${e.invitations.map(u=>`
              <div class="hv-fm-invite-item">
                <div class="hv-fm-invite-item__body">
                  <p class="hv-fm-invite-item__email">${qe(u.email)}</p>
                  <p class="hv-fm-invite-item__status">${qe(u.status)} · ${new Date(u.createdAt).toLocaleDateString()}</p>
                  ${u.message?`<p class="hv-fm-invite-item__msg">${qe(u.message)}</p>`:""}
                </div>
                <button type="button" class="hv-fm-invite-item__cancel" data-fm-cancel-invite="${qe(u.id)}" aria-label="Cancel invitation">
                  <span class="material-symbols-outlined">close</span>
                </button>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}

      <section class="hv-fm-canvas" data-fm-canvas>
        <svg class="hv-fm-edges" data-fm-edges viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          ${r.map(u=>{const d=i(u.from),p=i(u.to),_=a.get(d)??[],w=a.get(p)??[],S=_.findIndex(fe=>fe.id===u.from),P=w.findIndex(fe=>fe.id===u.to),D=(S+1)/(_.length+1)*100,U=(d+.5)/o.length*100,q=(P+1)/(w.length+1)*100,X=(p+.5)/o.length*100,ae=(U+X)/2;return`<path d="M ${D} ${U} C ${D} ${ae}, ${q} ${ae}, ${q} ${X}" fill="none" stroke="rgba(45,58,46,0.2)" stroke-width="0.3" stroke-dasharray="0.8 0.8" />`}).join("")}
        </svg>

        <div class="hv-fm-generations">
          ${o.map((u,d)=>{const p=a.get(u)??[];return`
              <div class="hv-fm-generation" style="--gen-delay: ${d*100}ms">
                <p class="hv-fm-generation__label">Generation ${u+1}</p>
                <div class="hv-fm-generation__row">
                  ${p.map((_,w)=>{const S=c.get(_.id)??0,P=u===0,D=_.id===_n,U=_.birthYear??"?",q=_.deathYear??"present";return`
                      <button class="hv-fm-node${P?" hv-fm-node--root":""}${D?" is-selected":""}" data-fm-node data-member-id="${qe(_.id)}" style="--node-delay: ${d*100+w*40}ms">
                        <span class="hv-fm-node__dot">
                          <span class="material-symbols-outlined">person</span>
                        </span>
                        <span class="hv-fm-node__body">
                          <span class="hv-fm-node__name">${qe(_.fullName)}</span>
                          <span class="hv-fm-node__meta">${qe(_.relationship??"Family")}</span>
                          <span class="hv-fm-node__years">${U}–${q}</span>
                          ${S>0?`<span class="hv-fm-node__count">${S} ${S===1?"memory":"memories"}</span>`:""}
                        </span>
                      </button>
                    `}).join("")}
                </div>
              </div>
            `}).join("")}
        </div>

        <aside class="hv-fm-inspector" data-fm-inspector>
          ${_n?i0(_n,e):`
              <div class="hv-fm-inspector__empty">
                <span class="material-symbols-outlined">touch_app</span>
                <p>Select a person to inspect their connections and memories.</p>
              </div>
            `}
        </aside>
      </section>
    </main>
  `,$a(n),a0(n)}function i0(n,e){const t=e.members.find(c=>c.id===n);if(!t)return"";const r=new Map;e.memories.forEach(c=>{var u;(u=c.familyMemberIds)==null||u.forEach(d=>{r.set(d,(r.get(d)??0)+1)})});const s=r.get(n)??0,i=e.members.find(c=>c.id===t.parentId),a=e.members.filter(c=>c.parentId===n),o=e.memories.filter(c=>{var u;return(u=c.familyMemberIds)==null?void 0:u.includes(n)});return`
    <div class="hv-fm-inspector__card">
      <div class="hv-fm-inspector__top">
        <span class="hv-fm-inspector__avatar">
          <span class="material-symbols-outlined">person</span>
        </span>
        <div>
          <h3 class="hv-fm-inspector__name">${qe(t.fullName)}</h3>
          <p class="hv-fm-inspector__role">${qe(t.relationship??"Family member")}</p>
        </div>
      </div>
      ${t.notes?`<p class="hv-fm-inspector__notes">${qe(t.notes)}</p>`:""}
      <div class="hv-fm-inspector__meta">
        <div><b>${t.birthYear??"?"}</b><small>Born</small></div>
        <div><b>${t.deathYear??"—"}</b><small>Died</small></div>
        <div><b>${s}</b><small>Memories</small></div>
      </div>
      ${i?`
        <div class="hv-fm-inspector__section">
          <p class="hv-fm-inspector__section-label">Parent</p>
          <button class="hv-fm-inspector__link" data-fm-node data-member-id="${qe(i.id)}">
            <span class="material-symbols-outlined">arrow_upward</span>
            ${qe(i.fullName)}
          </button>
        </div>
      `:""}
      ${a.length?`
        <div class="hv-fm-inspector__section">
          <p class="hv-fm-inspector__section-label">Children (${a.length})</p>
          ${a.map(c=>`
            <button class="hv-fm-inspector__link" data-fm-node data-member-id="${qe(c.id)}">
              <span class="material-symbols-outlined">arrow_downward</span>
              ${qe(c.fullName)}
            </button>
          `).join("")}
        </div>
      `:""}
      ${o.length?`
        <div class="hv-fm-inspector__section">
          <p class="hv-fm-inspector__section-label">Memories (${o.length})</p>
          ${o.slice(0,5).map(c=>`
            <div class="hv-fm-inspector__memory">
              <span class="material-symbols-outlined">${c.type==="photo"?"photo_camera":c.type==="audio"?"graphic_eq":c.type==="video"?"videocam":"description"}</span>
              <div>
                <b>${qe(c.title)}</b>
                <small>${qe(c.year??"")} · ${qe(c.location??"")}</small>
              </div>
            </div>
          `).join("")}
        </div>
      `:""}
      <div class="hv-fm-inspector__crud">
        <button type="button" class="hv-fm-inspector__btn" data-fm-edit-member="${qe(t.id)}">
          <span class="material-symbols-outlined">edit</span>
          Edit profile
        </button>
        <button type="button" class="hv-fm-inspector__btn hv-fm-inspector__btn--danger" data-fm-delete-member="${qe(t.id)}">
          <span class="material-symbols-outlined">delete</span>
          Remove
        </button>
      </div>
    </div>
  `}function a0(n){var e,t,r;(e=n.querySelector("[data-fm-add-relative]"))==null||e.addEventListener("click",()=>{o0()}),(t=n.querySelector("[data-fm-invite-family]"))==null||t.addEventListener("click",()=>{u0()}),(r=n.querySelector("[data-fm-invites-toggle]"))==null||r.addEventListener("click",()=>{const s=n.querySelector("[data-fm-invites-list]"),i=n.querySelector(".hv-fm-invites__chevron");s==null||s.classList.toggle("is-hidden"),i&&(i.textContent=s!=null&&s.classList.contains("is-hidden")?"expand_more":"expand_less")}),n.querySelectorAll("[data-fm-cancel-invite]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.fmCancelInvite;if(!i)return;const a=ce.getSnapshot().invitations.find(o=>o.id===i);a&&(ce.deleteInvitation(i),je.info("Invitation cancelled",`The invitation to ${a.email} has been removed.`))})}),n.querySelectorAll("[data-fm-node]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.memberId??"";i&&(_n=i,ja(n))})}),n.querySelectorAll(".hv-fm-inspector__link[data-fm-node]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.memberId;i&&(_n=i,ja(n))})}),n.querySelectorAll("[data-fm-edit-member]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.fmEditMember;i&&l0(i)})}),n.querySelectorAll("[data-fm-delete-member]").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.fmDeleteMember;i&&c0(i)})})}async function o0(){const e=ce.getSnapshot().members.map(s=>({value:s.id,label:s.fullName})),t=await Ur({title:"Add a relative",subtitle:"Bring another person into the family constellation.",submitLabel:"Add to family map",fields:[{name:"fullName",label:"Full name",type:"text",required:!0,placeholder:"e.g. Samuel Banda"},{name:"relationship",label:"Relationship",type:"text",placeholder:"e.g. Grandfather · teacher"},{name:"birthYear",label:"Birth year",type:"number",placeholder:"1897",min:1700,max:2100},{name:"deathYear",label:"Death year (leave blank if living)",type:"number",placeholder:"1964",min:1700,max:2100},{name:"parentId",label:"Parent (optional)",type:"select",options:e,placeholder:"— Select parent —"},{name:"notes",label:"Notes",type:"textarea",placeholder:"A brief note about this person…"}]});if(!t)return;const r=ce.createMember({fullName:String(t.fullName??""),relationship:t.relationship?String(t.relationship):null,parentId:t.parentId?String(t.parentId):null,birthYear:typeof t.birthYear=="number"?t.birthYear:null,deathYear:typeof t.deathYear=="number"?t.deathYear:null,portraitUrl:null,notes:t.notes?String(t.notes):""});_n=r.id,je.success("Relative added",`${r.fullName} is now on the family map.`)}async function l0(n){const e=ce.getMember(n);if(!e){je.error("Person not found","They may have been removed.");return}const r=ce.getSnapshot().members.filter(a=>a.id!==n).map(a=>({value:a.id,label:a.fullName})),s=await Ur({title:"Edit profile",subtitle:`Updating ${e.fullName}`,submitLabel:"Save changes",fields:[{name:"fullName",label:"Full name",type:"text",required:!0,value:e.fullName},{name:"relationship",label:"Relationship",type:"text",value:e.relationship??""},{name:"birthYear",label:"Birth year",type:"number",value:e.birthYear??void 0,min:1700,max:2100},{name:"deathYear",label:"Death year (leave blank if living)",type:"number",value:e.deathYear??void 0,min:1700,max:2100},{name:"parentId",label:"Parent (optional)",type:"select",options:r,value:e.parentId??"",placeholder:"— No parent —"},{name:"notes",label:"Notes",type:"textarea",value:e.notes}]});if(!s)return;const i=ce.updateMember(n,{fullName:String(s.fullName??e.fullName),relationship:s.relationship?String(s.relationship):null,parentId:s.parentId?String(s.parentId):null,birthYear:typeof s.birthYear=="number"?s.birthYear:null,deathYear:typeof s.deathYear=="number"?s.deathYear:null,notes:s.notes?String(s.notes):""});i&&je.success("Profile saved",`${i.fullName}’s profile has been updated.`)}function c0(n){const e=ce.getMember(n);e&&(je.info("Person removed",`${e.fullName} has been removed from the family map.`,{duration:6e3,actionLabel:"Undo",onAction:()=>{_n=ce.createMember({fullName:e.fullName,relationship:e.relationship,parentId:e.parentId,birthYear:e.birthYear,deathYear:e.deathYear,portraitUrl:e.portraitUrl,notes:e.notes}).id,je.success("Person restored",`${e.fullName} is back on the family map.`)}}),_n===n&&(_n=null),ce.deleteMember(n))}async function u0(){const n=await Ur({title:"Invite family",subtitle:"Send a secure invitation to join your vault.",submitLabel:"Send invitation",fields:[{name:"email",label:"Email address",type:"text",required:!0,placeholder:"relative@family.com"},{name:"message",label:"Personal message (optional)",type:"textarea",placeholder:"Join me on HeritageAtlas to explore our family archive…"}],validate:r=>{const s=String(r.email??"").trim();if(!s||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s))throw new Error("Please enter a valid email address.")}});if(!n)return;const e=String(n.email).trim(),t=n.message?String(n.message):"";ce.createInvitation(e,t),je.success("Invitation sent",`${e} will receive an invitation to join your vault.`)}let c1=!1;function Dp(){const n=document.getElementById("family-map-screen");!n||c1||(Np(n),c1=!0)}document.addEventListener("heritage:family-route",()=>{requestAnimationFrame(()=>Dp())});window.location.hash==="#family-map"&&document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".landing-page"),e=document.getElementById("family-map-screen");n&&e&&(n.classList.add("is-hidden"),e.style.display="flex",requestAnimationFrame(()=>Dp()))});const u1={};function Lp(n){if(!u1[n])try{if(n==="vault"){const e=document.getElementById("vault-screen");e&&Tp(e)}else if(n==="family-map"){const e=document.getElementById("family-map-screen");e&&Np(e)}else if(n==="story-mode"){const e=document.getElementById("story-mode-screen");e&&Cp(e)}else if(n==="agent"){const e=document.getElementById("agent-screen");e&&new Pp({mount:e,dataset:ce.getSnapshot(),vaultId:"demo-vault"}).init()}u1[n]=!0}catch(e){console.warn("[init] "+n+":",e)}}function bo(n){const e=["vault-screen","family-map-screen","story-mode-screen","agent-screen","atlas-screen","login-screen"],t=document.querySelector(".landing-page");if(e.forEach(a=>{const o=document.getElementById(a);o&&(o.style.display="none")}),!n||n==="landing"){t&&t.classList.remove("is-hidden");return}t&&t.classList.add("is-hidden");const r={vault:"vault-screen","family-map":"family-map-screen","story-mode":"story-mode-screen",agent:"agent-screen",atlas:"atlas-screen",login:"login-screen"},s={vault:"flex","family-map":"flex","story-mode":"flex",agent:"flex",atlas:"block",login:"flex"},i=r[n];if(i){const a=document.getElementById(i);a&&(a.style.display=s[n]||"block")}requestAnimationFrame(()=>Lp(n)),history.pushState({view:n},"","#"+n)}document.addEventListener("heritage:show-vault",()=>{const n=document.getElementById("vault-screen");n&&(n.style.display="flex",requestAnimationFrame(()=>Lp("vault")))});document.addEventListener("click",n=>{const e=n.target.closest("[data-dashboard-view]");e&&(n.preventDefault(),n.stopPropagation(),bo(e.dataset.dashboardView||""))});window.addEventListener("popstate",()=>{bo(window.location.hash.replace("#","")||"landing")});if(window.location.hash){const n=window.location.hash.replace("#","");["vault","family-map","story-mode","agent","atlas"].includes(n)&&setTimeout(()=>bo(n),200)}window.navigateToView=bo;document.addEventListener("click",n=>{if(n.target.closest("[data-theme-toggle]")){n.preventDefault(),n.stopPropagation();const r=document.documentElement.classList.contains("dark");document.documentElement.classList.toggle("dark",!r);try{localStorage.setItem("heritagevault-theme",r?"light":"dark")}catch{}document.querySelectorAll("[data-theme-label]").forEach(s=>s.textContent=r?"Dark mode":"Light mode"),document.querySelectorAll("[data-theme-icon]").forEach(s=>s.textContent=r?"dark_mode":"light_mode");return}if(n.target.closest("[data-logout]")){if(n.preventDefault(),n.stopPropagation(),!window.confirm("Log out of HeritageVault?"))return;const r=document.querySelector(".landing-page"),s=document.getElementById("login-screen");["vault-screen","family-map-screen","story-mode-screen","agent-screen","atlas-screen"].forEach(i=>{const a=document.getElementById(i);a&&(a.style.display="none")}),s&&(s.style.display="flex"),r&&r.classList.remove("is-hidden"),window.scrollTo({top:0,behavior:"smooth"}),history.pushState({view:"landing"},"","#")}});try{localStorage.getItem("heritagevault-theme")==="dark"&&(document.documentElement.classList.add("dark"),document.querySelectorAll("[data-theme-label]").forEach(e=>e.textContent="Light mode"),document.querySelectorAll("[data-theme-icon]").forEach(e=>e.textContent="light_mode"))}catch{}const h0=()=>{};var h1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},d0=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],o=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,o=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|o>>4;let _=(o&15)<<2|u>>6,w=u&63;c||(w=64,a||(_=64)),r.push(t[d],t[p],t[_],t[w])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Op(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):d0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],o=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||o==null||u==null||p==null)throw new p0;const _=i<<2|o>>4;if(r.push(_),u!==64){const w=o<<4&240|u>>2;if(r.push(w),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class p0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const f0=function(n){const e=Op(n);return Vp.encodeByteArray(e,!0)},za=function(n){return f0(n).replace(/\./g,"")},Mp=function(n){try{return Vp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=()=>m0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof h1>"u")return;const n=h1.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},v0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mp(n[1]);return e&&JSON.parse(e)},Eo=()=>{try{return h0()||g0()||y0()||v0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Up=n=>{var e,t;return(t=(e=Eo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Bp=n=>{const e=Up(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fp=()=>{var n;return(n=Eo())==null?void 0:n.config},qp=n=>{var e;return(e=Eo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[za(JSON.stringify(t)),za(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function A0(){var e;const n=(e=Eo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function E0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function w0(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function I0(){return!A0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kc(){try{return typeof indexedDB=="object"}catch{return!1}}function Nc(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function jp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="FirebaseError";class Ut extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=T0,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?S0(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new Ut(s,o,r)}}function S0(n,e){return n.replace(C0,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const C0=/\{\$([^}]+)}/g;function R0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(d1(i)&&d1(a)){if(!nr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function d1(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ti(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ni(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function x0(n,e){const t=new P0(n,e);return t.subscribe.bind(t)}class P0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");k0(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Pl),s.error===void 0&&(s.error=Pl),s.complete===void 0&&(s.complete=Pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function k0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Pl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=1e3,D0=2,L0=14400*1e3,O0=.5;function p1(n,e=N0,t=D0){const r=e*Math.pow(t,n),s=Math.round(O0*r*(Math.random()-.5)*2);return Math.min(L0,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dc(n){return(await fetch(n,{credentials:"include"})).ok}class Vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new $p;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U0(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M0(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M0(n){return n===Ar?void 0:n}function U0(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new V0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const F0={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},q0=he.INFO,$0={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},H0=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=$0[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wo{constructor(e){this.name=e,this._logLevel=q0,this._logHandler=H0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?F0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const j0=(n,e)=>e.some(t=>n instanceof t);let f1,m1;function z0(){return f1||(f1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function W0(){return m1||(m1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zp=new WeakMap,ec=new WeakMap,Wp=new WeakMap,kl=new WeakMap,Lc=new WeakMap;function G0(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Kn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&zp.set(t,n)}).catch(()=>{}),Lc.set(e,n),e}function K0(n){if(ec.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ec.set(n,e)}let tc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ec.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Kn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Q0(n){tc=n(tc)}function Y0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Nl(this),e,...t);return Wp.set(r,e.sort?e.sort():[e]),Kn(r)}:W0().includes(n)?function(...e){return n.apply(Nl(this),e),Kn(zp.get(this))}:function(...e){return Kn(n.apply(Nl(this),e))}}function X0(n){return typeof n=="function"?Y0(n):(n instanceof IDBTransaction&&K0(n),j0(n,z0())?new Proxy(n,tc):n)}function Kn(n){if(n instanceof IDBRequest)return G0(n);if(kl.has(n))return kl.get(n);const e=X0(n);return e!==n&&(kl.set(n,e),Lc.set(e,n)),e}const Nl=n=>Lc.get(n);function Gp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),o=Kn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Kn(a.result),c.oldVersion,c.newVersion,Kn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const J0=["get","getKey","getAll","getAllKeys","count"],Z0=["put","add","delete","clear"],Dl=new Map;function g1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Dl.get(e))return Dl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Z0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||J0.includes(t)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),s&&c.done]))[0]};return Dl.set(e,i),i}Q0(n=>({...n,get:(e,t,r)=>g1(e,t)||n.get(e,t,r),has:(e,t)=>!!g1(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(t7(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function t7(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nc="@firebase/app",y1="0.15.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new wo("@firebase/app"),n7="@firebase/app-compat",r7="@firebase/analytics-compat",s7="@firebase/analytics",i7="@firebase/app-check-compat",a7="@firebase/app-check",o7="@firebase/auth",l7="@firebase/auth-compat",c7="@firebase/database",u7="@firebase/data-connect",h7="@firebase/database-compat",d7="@firebase/functions",p7="@firebase/functions-compat",f7="@firebase/installations",m7="@firebase/installations-compat",g7="@firebase/messaging",y7="@firebase/messaging-compat",v7="@firebase/performance",_7="@firebase/performance-compat",A7="@firebase/remote-config",b7="@firebase/remote-config-compat",E7="@firebase/storage",w7="@firebase/storage-compat",I7="@firebase/firestore",T7="@firebase/ai",S7="@firebase/firestore-compat",C7="firebase",R7="12.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="[DEFAULT]",x7={[nc]:"fire-core",[n7]:"fire-core-compat",[s7]:"fire-analytics",[r7]:"fire-analytics-compat",[a7]:"fire-app-check",[i7]:"fire-app-check-compat",[o7]:"fire-auth",[l7]:"fire-auth-compat",[c7]:"fire-rtdb",[u7]:"fire-data-connect",[h7]:"fire-rtdb-compat",[d7]:"fire-fn",[p7]:"fire-fn-compat",[f7]:"fire-iid",[m7]:"fire-iid-compat",[g7]:"fire-fcm",[y7]:"fire-fcm-compat",[v7]:"fire-perf",[_7]:"fire-perf-compat",[A7]:"fire-rc",[b7]:"fire-rc-compat",[E7]:"fire-gcs",[w7]:"fire-gcs-compat",[I7]:"fire-fst",[S7]:"fire-fst-compat",[T7]:"fire-vertex","fire-js":"fire-js",[C7]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map,P7=new Map,sc=new Map;function v1(n,e){try{n.container.addComponent(e)}catch(t){In.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ht(n){const e=n.name;if(sc.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;sc.set(e,n);for(const t of Wa.values())v1(t,n);for(const t of P7.values())v1(t,n);return!0}function pr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ct(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k7={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new Br("app","Firebase",k7);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N7{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=R7;function Kp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:rc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(t||(t=Fp()),!t)throw Qn.create("no-options");const i=Wa.get(s);if(i){if(nr(t,i.options)&&nr(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const a=new B0(s);for(const c of sc.values())a.addComponent(c);const o=new N7(t,r,a);return Wa.set(s,o),o}function Io(n=rc){const e=Wa.get(n);if(!e&&n===rc&&Fp())return Kp();if(!e)throw Qn.create("no-app",{appName:n});return e}function yt(n,e,t){let r=x7[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(a.join(" "));return}Ht(new Vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D7="firebase-heartbeat-database",L7=1,Ai="firebase-heartbeat-store";let Ll=null;function Qp(){return Ll||(Ll=Gp(D7,L7,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ai)}catch(t){console.warn(t)}}}}).catch(n=>{throw Qn.create("idb-open",{originalErrorMessage:n.message})})),Ll}async function O7(n){try{const t=(await Qp()).transaction(Ai),r=await t.objectStore(Ai).get(Yp(n));return await t.done,r}catch(e){if(e instanceof Ut)In.warn(e.message);else{const t=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(t.message)}}}async function _1(n,e){try{const r=(await Qp()).transaction(Ai,"readwrite");await r.objectStore(Ai).put(e,Yp(n)),await r.done}catch(t){if(t instanceof Ut)In.warn(t.message);else{const r=Qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});In.warn(r.message)}}}function Yp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V7=1024,M7=30;class U7{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F7(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=A1();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>M7){const a=q7(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=A1(),{heartbeatsToSend:r,unsentEntries:s}=B7(this._heartbeatsCache.heartbeats),i=za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return In.warn(t),""}}}function A1(){return new Date().toISOString().substring(0,10)}function B7(n,e=V7){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),b1(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),b1(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class F7{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kc()?Nc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await O7(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return _1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function b1(n){return za(JSON.stringify({version:2,heartbeats:n})).length}function q7(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $7(n){Ht(new Vt("platform-logger",e=>new e7(e),"PRIVATE")),Ht(new Vt("heartbeat",e=>new U7(e),"PRIVATE")),yt(nc,y1,n),yt(nc,y1,"esm2020"),yt("fire-js","")}$7("");const Xp="@firebase/installations",Oc="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=1e4,Zp=`w:${Oc}`,ef="FIS_v2",H7="https://firebaseinstallations.googleapis.com/v1",j7=3600*1e3,z7="installations",W7="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G7={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pr=new Br(z7,W7,G7);function tf(n){return n instanceof Ut&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf({projectId:n}){return`${H7}/projects/${n}/installations`}function rf(n){return{token:n.token,requestStatus:2,expiresIn:Q7(n.expiresIn),creationTime:Date.now()}}async function sf(n,e){const r=(await e.json()).error;return Pr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function af({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function K7(n,{refreshToken:e}){const t=af(n);return t.append("Authorization",Y7(e)),t}async function of(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Q7(n){return Number(n.replace("s","000"))}function Y7(n){return`${ef} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X7({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=nf(n),s=af(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:t,authVersion:ef,appId:n.appId,sdkVersion:Zp},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await of(()=>fetch(r,o));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:rf(u.authToken)}}else throw await sf("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J7(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z7=/^[cdef][\w-]{21}$/,ic="";function e4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=t4(n);return Z7.test(t)?t:ic}catch{return ic}}function t4(n){return J7(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map;function uf(n,e){const t=To(n);hf(t,e),n4(t,e)}function hf(n,e){const t=cf.get(n);if(t)for(const r of t)r(e)}function n4(n,e){const t=r4();t&&t.postMessage({key:n,fid:e}),s4()}let Er=null;function r4(){return!Er&&"BroadcastChannel"in self&&(Er=new BroadcastChannel("[Firebase] FID Change"),Er.onmessage=n=>{hf(n.data.key,n.data.fid)}),Er}function s4(){cf.size===0&&Er&&(Er.close(),Er=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i4="firebase-installations-database",a4=1,kr="firebase-installations-store";let Ol=null;function Vc(){return Ol||(Ol=Gp(i4,a4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(kr)}}})),Ol}async function Ga(n,e){const t=To(n),s=(await Vc()).transaction(kr,"readwrite"),i=s.objectStore(kr),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&uf(n,e.fid),e}async function df(n){const e=To(n),r=(await Vc()).transaction(kr,"readwrite");await r.objectStore(kr).delete(e),await r.done}async function So(n,e){const t=To(n),s=(await Vc()).transaction(kr,"readwrite"),i=s.objectStore(kr),a=await i.get(t),o=e(a);return o===void 0?await i.delete(t):await i.put(o,t),await s.done,o&&(!a||a.fid!==o.fid)&&uf(n,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(n){let e;const t=await So(n.appConfig,r=>{const s=o4(r),i=l4(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ic?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function o4(n){const e=n||{fid:e4(),registrationStatus:0};return pf(e)}function l4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Pr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=c4(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:u4(n)}:{installationEntry:e}}async function c4(n,e){try{const t=await X7(n,e);return Ga(n.appConfig,t)}catch(t){throw tf(t)&&t.customData.serverCode===409?await df(n.appConfig):await Ga(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function u4(n){let e=await E1(n.appConfig);for(;e.registrationStatus===1;)await lf(100),e=await E1(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Mc(n);return r||t}return e}function E1(n){return So(n,e=>{if(!e)throw Pr.create("installation-not-found");return pf(e)})}function pf(n){return h4(n)?{fid:n.fid,registrationStatus:0}:n}function h4(n){return n.registrationStatus===1&&n.registrationTime+Jp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4({appConfig:n,heartbeatServiceProvider:e},t){const r=p4(n,t),s=K7(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:Zp,appId:n.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await of(()=>fetch(r,o));if(c.ok){const u=await c.json();return rf(u)}else throw await sf("Generate Auth Token",c)}function p4(n,{fid:e}){return`${nf(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(n,e=!1){let t;const r=await So(n.appConfig,i=>{if(!ff(i))throw Pr.create("not-registered");const a=i.authToken;if(!e&&g4(a))return i;if(a.requestStatus===1)return t=f4(n,e),i;{if(!navigator.onLine)throw Pr.create("app-offline");const o=v4(i);return t=m4(n,o),o}});return t?await t:r.authToken}async function f4(n,e){let t=await w1(n.appConfig);for(;t.authToken.requestStatus===1;)await lf(100),t=await w1(n.appConfig);const r=t.authToken;return r.requestStatus===0?Uc(n,e):r}function w1(n){return So(n,e=>{if(!ff(e))throw Pr.create("not-registered");const t=e.authToken;return _4(t)?{...e,authToken:{requestStatus:0}}:e})}async function m4(n,e){try{const t=await d4(n,e),r={...e,authToken:t};return await Ga(n.appConfig,r),t}catch(t){if(tf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await df(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ga(n.appConfig,r)}throw t}}function ff(n){return n!==void 0&&n.registrationStatus===2}function g4(n){return n.requestStatus===2&&!y4(n)}function y4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+j7}function v4(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function _4(n){return n.requestStatus===1&&n.requestTime+Jp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A4(n){const e=n,{installationEntry:t,registrationPromise:r}=await Mc(e);return r?r.catch(console.error):Uc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b4(n,e=!1){const t=n;return await E4(t),(await Uc(t,e)).token}async function E4(n){const{registrationPromise:e}=await Mc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w4(n){if(!n||!n.options)throw Vl("App Configuration");if(!n.name)throw Vl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Vl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Vl(n){return Pr.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="installations",I4="installations-internal",T4=n=>{const e=n.getProvider("app").getImmediate(),t=w4(e),r=pr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},S4=n=>{const e=n.getProvider("app").getImmediate(),t=pr(e,mf).getImmediate();return{getId:()=>A4(t),getToken:s=>b4(t,s)}};function C4(){Ht(new Vt(mf,T4,"PUBLIC")),Ht(new Vt(I4,S4,"PRIVATE"))}C4();yt(Xp,Oc);yt(Xp,Oc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="analytics",R4="firebase_id",x4="origin",P4=60*1e3,k4="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new wo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N4={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Br("analytics","Analytics",N4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(n){if(!n.startsWith(Bc)){const e=kt.create("invalid-gtag-resource",{gtagURL:n});return ft.warn(e.message),""}return n}function gf(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function L4(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function O4(n,e){const t=L4("firebase-js-sdk-policy",{createScriptURL:D4}),r=document.createElement("script"),s=`${Bc}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function V4(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function M4(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await gf(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(o){ft.error(o)}n("config",s,i)}async function U4(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await gf(t);for(const c of a){const u=o.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){ft.error(i)}}function B4(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[o,c]=a;await U4(n,e,t,o,c)}else if(i==="config"){const[o,c]=a;await M4(n,e,t,r,o,c)}else if(i==="consent"){const[o,c]=a;n("consent",o,c)}else if(i==="get"){const[o,c,u]=a;n("get",o,c,u)}else if(i==="set"){const[o]=a;n("set",o)}else n(i,...a)}catch(o){ft.error(o)}}return s}function F4(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=B4(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function q4(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=30,H4=1e3;class j4{constructor(e={},t=H4){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yf=new j4;function z4(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function W4(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:z4(t)},s=k4.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();(a=c.error)!=null&&a.message&&(o=c.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function G4(n,e=yf,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw kt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw kt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Y4;return setTimeout(async()=>{o.abort()},P4),vf({appId:r,apiKey:s,measurementId:i},a,o,e)}async function vf(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=yf){var o;const{appId:i,measurementId:a}=n;try{await K4(r,e)}catch(c){if(a)return ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await W4(n);return s.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!Q4(u)){if(s.deleteThrottleMetadata(i),a)return ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw c}const d=Number((o=u==null?void 0:u.customData)==null?void 0:o.httpStatus)===503?p1(t,s.intervalMillis,$4):p1(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(i,p),ft.debug(`Calling attemptFetch again in ${d} millis`),vf(n,p,r,s)}}function K4(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(kt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Q4(n){if(!(n instanceof Ut)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Y4{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function X4(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}async function J4(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z4(){if(kc())try{await Nc()}catch(n){return ft.warn(kt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ft.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function e3(n,e,t,r,s,i,a){const o=G4(n);o.then(_=>{t[_.measurementId]=_.appId,n.options.measurementId&&_.measurementId!==n.options.measurementId&&ft.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>ft.error(_)),e.push(o);const c=Z4().then(_=>{if(_)return r.getId()}),[u,d]=await Promise.all([o,c]);q4(i)||O4(i,u.measurementId),s("js",new Date);const p=(a==null?void 0:a.config)??{};return p[x4]="firebase",p.update=!0,d!=null&&(p[R4]=d),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e){this.app=e}_delete(){return delete is[this.app.options.appId],Promise.resolve()}}let is={},I1=[];const T1={};let Ml="dataLayer",n3="gtag",S1,Fc,C1=!1;function r3(){const n=[];if(Pc()&&n.push("This is a browser extension environment."),jp()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=kt.create("invalid-analytics-context",{errorInfo:e});ft.warn(t.message)}}function s3(n,e,t){r3();const r=n.options.appId;if(!r)throw kt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(is[r]!=null)throw kt.create("already-exists",{id:r});if(!C1){V4(Ml);const{wrappedGtag:i,gtagCore:a}=F4(is,I1,T1,Ml,n3);Fc=i,S1=a,C1=!0}return is[r]=e3(n,I1,T1,e,S1,Ml,t),new t3(n)}function i3(n=Io()){n=Ce(n);const e=pr(n,Ka);return e.isInitialized()?e.getImmediate():a3(n)}function a3(n,e={}){const t=pr(n,Ka);if(t.isInitialized()){const s=t.getImmediate();if(nr(e,t.getOptions()))return s;throw kt.create("already-initialized")}return t.initialize({options:e})}async function o3(){if(Pc()||!jp()||!kc())return!1;try{return await Nc()}catch{return!1}}function l3(n,e,t){n=Ce(n),J4(Fc,is[n.app.options.appId],e,t).catch(r=>ft.error(r))}function c3(n,e,t,r){n=Ce(n),X4(Fc,is[n.app.options.appId],e,t,r).catch(s=>ft.error(s))}const R1="@firebase/analytics",x1="0.10.22";function u3(){Ht(new Vt(Ka,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return s3(r,s,t)},"PUBLIC")),Ht(new Vt("analytics-internal",n,"PRIVATE")),yt(R1,x1),yt(R1,x1,"esm2020");function n(e){try{const t=e.getProvider(Ka).getImmediate();return{logEvent:(r,s,i)=>c3(t,r,s,i),setUserProperties:(r,s)=>l3(t,r,s)}}catch(t){throw kt.create("interop-component-reg-failed",{reason:t})}}}u3();function _f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const h3=_f,Af=new Br("auth","Firebase",_f());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new wo("@firebase/auth");function d3(n,...e){Qa.logLevel<=he.WARN&&Qa.warn(`Auth (${qr}): ${n}`,...e)}function Ca(n,...e){Qa.logLevel<=he.ERROR&&Qa.error(`Auth (${qr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,...e){throw qc(n,...e)}function Zt(n,...e){return qc(n,...e)}function bf(n,e,t){const r={...h3(),[e]:t};return new Br("auth","Firebase",r).create(e,{appName:n.name})}function An(n){return bf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Af.create(n,...e)}function ee(n,e,...t){if(!n)throw qc(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ca(e),new Error(e)}function Tn(n,e){n||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function p3(){return P1()==="http:"||P1()==="https:"}function P1(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p3()||Pc()||"connection"in navigator)?navigator.onLine:!0}function m3(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tn(t>e,"Short delay should be less than long delay!"),this.isMobile=_0()||E0()}get(){return f3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(n,e){Tn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v3=new $i(3e4,6e4);function Rn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function xn(n,e,t,r,s={}){return wf(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const o=qi({...a,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return b0()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(u.credentials="include"),Ef.fetch()(await If(n,n.config.apiHost,t,o),u)})}async function wf(n,e,t){n._canInitEmulator=!1;const r={...g3,...e};try{const s=new A3(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ga(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ga(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ga(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw ga(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bf(n,d,u);jt(n,d)}}catch(s){if(s instanceof Ut)throw s;jt(n,"network-request-failed",{message:String(s)})}}async function Hi(n,e,t,r,s={}){const i=await xn(n,e,t,r,s);return"mfaPendingCredential"in i&&jt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function If(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?$c(n.config,s):`${n.config.apiScheme}://${s}`;return y3.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function _3(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A3{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),v3.get())})}}function ga(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Zt(n,e,r);return s.customData._tokenResponse=t,s}function k1(n){return n!==void 0&&n.enterprise!==void 0}class b3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _3(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function E3(n,e){return xn(n,"GET","/v2/recaptchaConfig",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w3(n,e){return xn(n,"POST","/v1/accounts:delete",e)}async function Ya(n,e){return xn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function I3(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),s=Hc(r);ee(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(Ul(s.auth_time)),issuedAtTime:oi(Ul(s.iat)),expirationTime:oi(Ul(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ul(n){return Number(n)*1e3}function Hc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mp(t);return s?JSON.parse(s):(Ca("Failed to decode base64 JWT payload"),null)}catch(s){return Ca("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function N1(n){const e=Hc(n);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ut&&T3(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function T3({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(n){var p;const e=n.auth,t=await n.getIdToken(),r=await bi(n,Ya(e,{idToken:t}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Tf(s.providerUserInfo):[],a=R3(n.providerData,i),o=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=o?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function C3(n){const e=Ce(n);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R3(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Tf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x3(n,e){const t=await wf(n,{},async()=>{const r=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await If(n,s,"/v1/token",`key=${i}`),o=await n._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:r};return n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(c.credentials="include"),Ef.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function P3(n,e){return xn(n,"POST","/v2/accounts:revokeToken",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=N1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await x3(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new as;return r&&(ee(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new as,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n,e){ee(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new S3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await bi(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return I3(this,e)}reload(){return C3(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await bi(this,w3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:_,isAnonymous:w,providerData:S,stsTokenManager:P}=t;ee(p&&P,e,"internal-error");const D=as.fromJSON(this.name,P);ee(typeof p=="string",e,"internal-error"),Un(r,e.name),Un(s,e.name),ee(typeof _=="boolean",e,"internal-error"),ee(typeof w=="boolean",e,"internal-error"),Un(i,e.name),Un(a,e.name),Un(o,e.name),Un(c,e.name),Un(u,e.name),Un(d,e.name);const U=new Ft({uid:p,auth:e,email:s,emailVerified:_,displayName:r,isAnonymous:w,photoURL:a,phoneNumber:i,tenantId:o,stsTokenManager:D,createdAt:u,lastLoginAt:d});return S&&Array.isArray(S)&&(U.providerData=S.map(q=>({...q}))),c&&(U._redirectEventId=c),U}static async _fromIdTokenResponse(e,t,r=!1){const s=new as;s.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xa(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Tf(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),o=new as;o.updateFromIdToken(r);const c=new Ft({uid:s.localId,auth:e,stsTokenManager:o,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new Map;function gn(n){Tn(n instanceof Function,"Expected a class definition");let e=D1.get(n);return e?(Tn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,D1.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sf.type="NONE";const L1=Sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n,e,t){return`firebase:${n}:${e}:${t}`}class os{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ra(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ra("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ya(this.auth,{idToken:e}).catch(()=>{});return t?Ft._fromGetAccountInfoResponse(this.auth,t,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new os(gn(L1),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||gn(L1);const a=Ra(r,e.config.apiKey,e.name);let o=null;for(const u of t)try{const d=await u._get(a);if(d){let p;if(typeof d=="string"){const _=await Ya(e,{idToken:d}).catch(()=>{});if(!_)break;p=await Ft._fromGetAccountInfoResponse(e,_,d)}else p=Ft._fromJSON(e,d);u!==i&&(o=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,r):(i=c[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Cf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nf(e))return"Blackberry";if(Df(e))return"Webos";if(Rf(e))return"Safari";if((e.includes("chrome/")||xf(e))&&!e.includes("edge/"))return"Chrome";if(kf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cf(n=st()){return/firefox\//i.test(n)}function Rf(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xf(n=st()){return/crios\//i.test(n)}function Pf(n=st()){return/iemobile/i.test(n)}function kf(n=st()){return/android/i.test(n)}function Nf(n=st()){return/blackberry/i.test(n)}function Df(n=st()){return/webos/i.test(n)}function jc(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function k3(n=st()){var e;return jc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function N3(){return w0()&&document.documentMode===10}function Lf(n=st()){return jc(n)||kf(n)||Df(n)||Nf(n)||/windows phone/i.test(n)||Pf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n,e=[]){let t;switch(n){case"Browser":t=O1(st());break;case"Worker":t=`${O1(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,o)=>{try{const c=e(i);a(c)}catch(c){o(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L3(n,e={}){return xn(n,"GET","/v2/passwordPolicy",Rn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3=6;class V3{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??O3,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V1(this),this.idTokenSubscription=new V1(this),this.beforeStateQueue=new D3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Af,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ya(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,o=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(An(this));const t=e?Ce(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await L3(this),t=new V3(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await P3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gn(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&d3(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fr(n){return Ce(n)}class V1{constructor(e){this.auth=e,this.observer=null,this.addObserver=x0(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function U3(n){Co=n}function Vf(n){return Co.loadJS(n)}function B3(){return Co.recaptchaEnterpriseScript}function F3(){return Co.gapiScript}function q3(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $3{constructor(){this.enterprise=new H3}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class H3{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const j3="recaptcha-enterprise",Mf="NO_RECAPTCHA",M1="onFirebaseAuthREInstanceReady";class Fn{constructor(e){this.type=j3,this.auth=fr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,o)=>{E3(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new b3(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function s(i,a,o){const c=window.grecaptcha;k1(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(Mf)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $3().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(async o=>{if(!t&&k1(window.grecaptcha)&&Fn.scriptInjectionDeferred)await Fn.scriptInjectionDeferred.promise,s(o,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=B3();c.length!==0&&(c+=o+`&onload=${M1}`),Fn.scriptInjectionDeferred=new $p,window[M1]=()=>{var u;(u=Fn.scriptInjectionDeferred)==null||u.resolve()},Vf(c).then(()=>{var u;return(u=Fn.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{s(o,i,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}Fn.scriptInjectionDeferred=null;async function U1(n,e,t,r=!1,s=!1){const i=new Fn(n);let a;if(s)a=Mf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,u=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ja(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await U1(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await U1(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(n,e){const t=pr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(nr(i,e??{}))return s;jt(s,"already-initialized")}return t.initialize({options:e})}function W3(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(gn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function G3(n,e,t){const r=fr(n);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uf(e),{host:a,port:o}=K3(e),c=o===null?"":`:${o}`,u={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(nr(u,r.config.emulator)&&nr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Fr(a)?Dc(`${i}//${a}${c}`):Q3()}function Uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function K3(n){const e=Uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:B1(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:B1(a)}}}function B1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Q3(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function Y3(n,e){return xn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X3(n,e){return Hi(n,"POST","/v1/accounts:signInWithPassword",Rn(n,e))}async function J3(n,e){return xn(n,"POST","/v1/accounts:sendOobCode",Rn(n,e))}async function Z3(n,e){return J3(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e8(n,e){return Hi(n,"POST","/v1/accounts:signInWithEmailLink",Rn(n,e))}async function t8(n,e){return Hi(n,"POST","/v1/accounts:signInWithEmailLink",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends zc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,t,"signInWithPassword",X3);case"emailLink":return e8(e,{email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,r,"signUpPassword",Y3);case"emailLink":return t8(e,{idToken:t,email:this._email,oobCode:this._password});default:jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(n,e){return Hi(n,"POST","/v1/accounts:signInWithIdp",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n8="http://localhost";class Nr extends zc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Nr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ls(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ls(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ls(e,t)}buildRequest(){const e={requestUri:n8,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r8(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s8(n){const e=ti(ni(n)).link,t=e?ti(ni(e)).deep_link_id:null,r=ti(ni(n)).deep_link_id;return(r?ti(ni(r)).link:null)||r||t||e||n}class Wc{constructor(e){const t=ti(ni(e)),r=t.apiKey??null,s=t.oobCode??null,i=r8(t.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=s8(e);try{return new Wc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,t){return Ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wc.parseLink(t);return ee(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends ji{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return $n.credential(t,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ji{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ji{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return jn.credential(t,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i8(n,e){return Hi(n,"POST","/v1/accounts:signUp",Rn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),a=F1(r);return new Dr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=F1(r);return new Dr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function F1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Ut{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Za(e,t,r,s)}}function Ff(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(n,i,e,r):i})}async function a8(n,e,t=!1){const r=await bi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o8(n,e,t=!1){const{auth:r}=n;if(Ct(r.app))return Promise.reject(An(r));const s="reauthenticate";try{const i=await bi(n,Ff(r,s,e,n),t);ee(i.idToken,r,"internal-error");const a=Hc(i.idToken);ee(a,r,"internal-error");const{sub:o}=a;return ee(n.uid===o,r,"user-mismatch"),Dr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e,t=!1){if(Ct(n.app))return Promise.reject(An(n));const r="signIn",s=await Ff(n,r,e),i=await Dr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function l8(n,e){return qf(fr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(n){const e=fr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function c8(n,e,t){const r=fr(n);await Ja(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Z3)}async function u8(n,e,t){if(Ct(n.app))return Promise.reject(An(n));const r=fr(n),a=await Ja(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i8).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&$f(n),c}),o=await Dr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function h8(n,e,t){return Ct(n.app)?Promise.reject(An(n)):l8(Ce(n),As.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$f(n),r})}function d8(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function p8(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function f8(n,e,t,r){return Ce(n).onAuthStateChanged(e,t,r)}function m8(n){return Ce(n).signOut()}const eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g8=1e3,y8=10;class jf extends Hf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);N3()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y8):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},g8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jf.type="LOCAL";const v8=jf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Hf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zf.type="SESSION";const Wf=zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _8(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ro(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const o=Array.from(a).map(async u=>u(t.origin,i)),c=await _8(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A8{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,c)=>{const u=Gc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===u)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function b8(n){en().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function E8(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function w8(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function I8(){return Gf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf="firebaseLocalStorageDb",T8=1,to="firebaseLocalStorage",Qf="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xo(n,e){return n.transaction([to],e?"readwrite":"readonly").objectStore(to)}function S8(){const n=indexedDB.deleteDatabase(Kf);return new zi(n).toPromise()}function Yf(){const n=indexedDB.open(Kf,T8);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(to,{keyPath:Qf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(to)?e(r):(r.close(),await S8(),e(await Yf()))})})}async function q1(n,e,t){const r=xo(n,!0).put({[Qf]:e,value:t});return new zi(r).toPromise()}async function C8(n,e){const t=xo(n,!1).get(e),r=await new zi(t).toPromise();return r===void 0?null:r.value}function $1(n,e){const t=xo(n,!0).delete(e);return new zi(t).toPromise()}const R8=800,x8=3;class Xf{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Yf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>x8)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Gf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(I8()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await E8(),!this.activeServiceWorker)return;this.sender=new A8(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||w8()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await q1(e,eo,"1"),await $1(e,eo)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>q1(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>C8(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xo(s,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R8)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const P8=Xf;new $i(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k8(n,e){return e?gn(e):(ee(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends zc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ls(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function N8(n){return qf(n.auth,new Kc(n),n.bypassAuthState)}function D8(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),o8(t,new Kc(n),n.bypassAuthState)}async function L8(n){const{auth:e,user:t}=n;return ee(t,e,"internal-error"),a8(t,new Kc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N8;case"linkViaPopup":case"linkViaRedirect":return L8;case"reauthViaPopup":case"reauthViaRedirect":return D8;default:jt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O8=new $i(2e3,1e4);class ns extends Jf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O8.get())};e()}}ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V8="pendingRedirect",xa=new Map;class M8 extends Jf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xa.get(this.auth._key());if(!e){try{const r=await U8(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xa.set(this.auth._key(),e)}return this.bypassAuthState||xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U8(n,e){const t=q8(e),r=F8(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function B8(n,e){xa.set(n._key(),e)}function F8(n){return gn(n._redirectPersistence)}function q8(n){return Ra(V8,n.config.apiKey,n.name)}async function $8(n,e,t=!1){if(Ct(n.app))return Promise.reject(An(n));const r=fr(n),s=k8(r,e),a=await new M8(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H8=600*1e3;class j8{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z8(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Zf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=H8&&this.cachedEventUids.clear(),this.cachedEventUids.has(H1(e))}saveEventToCache(e){this.cachedEventUids.add(H1(e)),this.lastProcessedEventTime=Date.now()}}function H1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Zf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z8(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W8(n,e={}){return xn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,K8=/^https?/;async function Q8(n){if(n.config.emulator)return;const{authorizedDomains:e}=await W8(n);for(const t of e)try{if(Y8(t))return}catch{}jt(n,"unauthorized-domain")}function Y8(n){const e=ac(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!K8.test(t))return!1;if(G8.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X8=new $i(3e4,6e4);function j1(){const n=en().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function J8(n){return new Promise((e,t)=>{var s,i,a;function r(){j1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{j1(),t(Zt(n,"network-request-failed"))},timeout:X8.get()})}if((i=(s=en().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=en().gapi)!=null&&a.load)r();else{const o=q3("iframefcb");return en()[o]=()=>{gapi.load?r():t(Zt(n,"network-request-failed"))},Vf(`${F3()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function Z8(n){return Pa=Pa||J8(n),Pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e9=new $i(5e3,15e3),t9="__/auth/iframe",n9="emulator/auth/iframe",r9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function i9(n){const e=n.config;ee(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$c(e,n9):`https://${n.config.authDomain}/${t9}`,r={apiKey:e.apiKey,appName:n.name,v:qr},s=s9.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${qi(r).slice(1)}`}async function a9(n){const e=await Z8(n),t=en().gapi;return ee(t,n,"internal-error"),e.open({where:document.body,url:i9(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r9,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Zt(n,"network-request-failed"),o=en().setTimeout(()=>{i(a)},e9.get());function c(){en().clearTimeout(o),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l9=500,c9=600,u9="_blank",h9="http://localhost";class z1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function d9(n,e,t,r=l9,s=c9){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...o9,width:r.toString(),height:s.toString(),top:i,left:a},u=st().toLowerCase();t&&(o=xf(u)?u9:t),Cf(u)&&(e=e||h9,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[w,S])=>`${_}${w}=${S},`,"");if(k3(u)&&o!=="_self")return p9(e||"",o),new z1(null);const p=window.open(e||"",o,d);ee(p,n,"popup-blocked");try{p.focus()}catch{}return new z1(p)}function p9(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f9="__/auth/handler",m9="emulator/auth/handler",g9=encodeURIComponent("fac");async function W1(n,e,t,r,s,i){ee(n.config.authDomain,n,"auth-domain-config-required"),ee(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qr,eventId:s};if(e instanceof Bf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",R0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ji){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await n._getAppCheckToken(),u=c?`#${g9}=${encodeURIComponent(c)}`:"";return`${y9(n)}?${qi(o).slice(1)}${u}`}function y9({config:n}){return n.emulator?$c(n,m9):`https://${n.authDomain}/${f9}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="webStorageSupport";class v9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wf,this._completeRedirectFn=$8,this._overrideRedirectResult=B8}async _openPopup(e,t,r,s){var a;Tn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await W1(e,t,r,ac(),s);return d9(e,i,Gc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await W1(e,t,r,ac(),s);return b8(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await a9(e),r=new j8(e);return t.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bl,{type:Bl},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Bl];i!==void 0&&t(!!i),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Q8(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lf()||Rf()||jc()}}const _9=v9;var G1="@firebase/auth",K1="1.13.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b9(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function E9(n){Ht(new Vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;ee(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Of(n)},u=new M3(r,s,i,c);return W3(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new Vt("auth-internal",e=>{const t=fr(e.getProvider("auth").getImmediate());return(r=>new A9(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(G1,K1,b9(n)),yt(G1,K1,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w9=300,I9=qp("authIdTokenMaxAge")||w9;let Q1=null;const T9=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>I9)return;const s=t==null?void 0:t.token;Q1!==s&&(Q1=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function S9(n=Io()){const e=pr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=z3(n,{popupRedirectResolver:_9,persistence:[P8,v8,Wf]}),r=qp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=T9(i.toString());p8(t,a,()=>a(t.currentUser)),d8(t,o=>a(o))}}const s=Up("auth");return s&&G3(t,`http://${s}`),t}function C9(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}U3({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Zt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",C9().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});E9("Browser");var R9="firebase",x9="12.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(R9,x9,"app");var Y1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn,em;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function v(){}v.prototype=g.prototype,T.F=g.prototype,T.prototype=new v,T.prototype.constructor=T,T.D=function(b,I,C){for(var E=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)E[ge-2]=arguments[ge];return g.prototype[I].apply(b,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,v){v||(v=0);const b=Array(16);if(typeof g=="string")for(var I=0;I<16;++I)b[I]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(I=0;I<16;++I)b[I]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=T.g[0],v=T.g[1],I=T.g[2];let C=T.g[3],E;E=g+(C^v&(I^C))+b[0]+3614090360&4294967295,g=v+(E<<7&4294967295|E>>>25),E=C+(I^g&(v^I))+b[1]+3905402710&4294967295,C=g+(E<<12&4294967295|E>>>20),E=I+(v^C&(g^v))+b[2]+606105819&4294967295,I=C+(E<<17&4294967295|E>>>15),E=v+(g^I&(C^g))+b[3]+3250441966&4294967295,v=I+(E<<22&4294967295|E>>>10),E=g+(C^v&(I^C))+b[4]+4118548399&4294967295,g=v+(E<<7&4294967295|E>>>25),E=C+(I^g&(v^I))+b[5]+1200080426&4294967295,C=g+(E<<12&4294967295|E>>>20),E=I+(v^C&(g^v))+b[6]+2821735955&4294967295,I=C+(E<<17&4294967295|E>>>15),E=v+(g^I&(C^g))+b[7]+4249261313&4294967295,v=I+(E<<22&4294967295|E>>>10),E=g+(C^v&(I^C))+b[8]+1770035416&4294967295,g=v+(E<<7&4294967295|E>>>25),E=C+(I^g&(v^I))+b[9]+2336552879&4294967295,C=g+(E<<12&4294967295|E>>>20),E=I+(v^C&(g^v))+b[10]+4294925233&4294967295,I=C+(E<<17&4294967295|E>>>15),E=v+(g^I&(C^g))+b[11]+2304563134&4294967295,v=I+(E<<22&4294967295|E>>>10),E=g+(C^v&(I^C))+b[12]+1804603682&4294967295,g=v+(E<<7&4294967295|E>>>25),E=C+(I^g&(v^I))+b[13]+4254626195&4294967295,C=g+(E<<12&4294967295|E>>>20),E=I+(v^C&(g^v))+b[14]+2792965006&4294967295,I=C+(E<<17&4294967295|E>>>15),E=v+(g^I&(C^g))+b[15]+1236535329&4294967295,v=I+(E<<22&4294967295|E>>>10),E=g+(I^C&(v^I))+b[1]+4129170786&4294967295,g=v+(E<<5&4294967295|E>>>27),E=C+(v^I&(g^v))+b[6]+3225465664&4294967295,C=g+(E<<9&4294967295|E>>>23),E=I+(g^v&(C^g))+b[11]+643717713&4294967295,I=C+(E<<14&4294967295|E>>>18),E=v+(C^g&(I^C))+b[0]+3921069994&4294967295,v=I+(E<<20&4294967295|E>>>12),E=g+(I^C&(v^I))+b[5]+3593408605&4294967295,g=v+(E<<5&4294967295|E>>>27),E=C+(v^I&(g^v))+b[10]+38016083&4294967295,C=g+(E<<9&4294967295|E>>>23),E=I+(g^v&(C^g))+b[15]+3634488961&4294967295,I=C+(E<<14&4294967295|E>>>18),E=v+(C^g&(I^C))+b[4]+3889429448&4294967295,v=I+(E<<20&4294967295|E>>>12),E=g+(I^C&(v^I))+b[9]+568446438&4294967295,g=v+(E<<5&4294967295|E>>>27),E=C+(v^I&(g^v))+b[14]+3275163606&4294967295,C=g+(E<<9&4294967295|E>>>23),E=I+(g^v&(C^g))+b[3]+4107603335&4294967295,I=C+(E<<14&4294967295|E>>>18),E=v+(C^g&(I^C))+b[8]+1163531501&4294967295,v=I+(E<<20&4294967295|E>>>12),E=g+(I^C&(v^I))+b[13]+2850285829&4294967295,g=v+(E<<5&4294967295|E>>>27),E=C+(v^I&(g^v))+b[2]+4243563512&4294967295,C=g+(E<<9&4294967295|E>>>23),E=I+(g^v&(C^g))+b[7]+1735328473&4294967295,I=C+(E<<14&4294967295|E>>>18),E=v+(C^g&(I^C))+b[12]+2368359562&4294967295,v=I+(E<<20&4294967295|E>>>12),E=g+(v^I^C)+b[5]+4294588738&4294967295,g=v+(E<<4&4294967295|E>>>28),E=C+(g^v^I)+b[8]+2272392833&4294967295,C=g+(E<<11&4294967295|E>>>21),E=I+(C^g^v)+b[11]+1839030562&4294967295,I=C+(E<<16&4294967295|E>>>16),E=v+(I^C^g)+b[14]+4259657740&4294967295,v=I+(E<<23&4294967295|E>>>9),E=g+(v^I^C)+b[1]+2763975236&4294967295,g=v+(E<<4&4294967295|E>>>28),E=C+(g^v^I)+b[4]+1272893353&4294967295,C=g+(E<<11&4294967295|E>>>21),E=I+(C^g^v)+b[7]+4139469664&4294967295,I=C+(E<<16&4294967295|E>>>16),E=v+(I^C^g)+b[10]+3200236656&4294967295,v=I+(E<<23&4294967295|E>>>9),E=g+(v^I^C)+b[13]+681279174&4294967295,g=v+(E<<4&4294967295|E>>>28),E=C+(g^v^I)+b[0]+3936430074&4294967295,C=g+(E<<11&4294967295|E>>>21),E=I+(C^g^v)+b[3]+3572445317&4294967295,I=C+(E<<16&4294967295|E>>>16),E=v+(I^C^g)+b[6]+76029189&4294967295,v=I+(E<<23&4294967295|E>>>9),E=g+(v^I^C)+b[9]+3654602809&4294967295,g=v+(E<<4&4294967295|E>>>28),E=C+(g^v^I)+b[12]+3873151461&4294967295,C=g+(E<<11&4294967295|E>>>21),E=I+(C^g^v)+b[15]+530742520&4294967295,I=C+(E<<16&4294967295|E>>>16),E=v+(I^C^g)+b[2]+3299628645&4294967295,v=I+(E<<23&4294967295|E>>>9),E=g+(I^(v|~C))+b[0]+4096336452&4294967295,g=v+(E<<6&4294967295|E>>>26),E=C+(v^(g|~I))+b[7]+1126891415&4294967295,C=g+(E<<10&4294967295|E>>>22),E=I+(g^(C|~v))+b[14]+2878612391&4294967295,I=C+(E<<15&4294967295|E>>>17),E=v+(C^(I|~g))+b[5]+4237533241&4294967295,v=I+(E<<21&4294967295|E>>>11),E=g+(I^(v|~C))+b[12]+1700485571&4294967295,g=v+(E<<6&4294967295|E>>>26),E=C+(v^(g|~I))+b[3]+2399980690&4294967295,C=g+(E<<10&4294967295|E>>>22),E=I+(g^(C|~v))+b[10]+4293915773&4294967295,I=C+(E<<15&4294967295|E>>>17),E=v+(C^(I|~g))+b[1]+2240044497&4294967295,v=I+(E<<21&4294967295|E>>>11),E=g+(I^(v|~C))+b[8]+1873313359&4294967295,g=v+(E<<6&4294967295|E>>>26),E=C+(v^(g|~I))+b[15]+4264355552&4294967295,C=g+(E<<10&4294967295|E>>>22),E=I+(g^(C|~v))+b[6]+2734768916&4294967295,I=C+(E<<15&4294967295|E>>>17),E=v+(C^(I|~g))+b[13]+1309151649&4294967295,v=I+(E<<21&4294967295|E>>>11),E=g+(I^(v|~C))+b[4]+4149444226&4294967295,g=v+(E<<6&4294967295|E>>>26),E=C+(v^(g|~I))+b[11]+3174756917&4294967295,C=g+(E<<10&4294967295|E>>>22),E=I+(g^(C|~v))+b[2]+718787259&4294967295,I=C+(E<<15&4294967295|E>>>17),E=v+(C^(I|~g))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(I+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.v=function(T,g){g===void 0&&(g=T.length);const v=g-this.blockSize,b=this.C;let I=this.h,C=0;for(;C<g;){if(I==0)for(;C<=v;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<g;)if(b[I++]=T.charCodeAt(C++),I==this.blockSize){s(this,b),I=0;break}}else for(;C<g;)if(b[I++]=T[C++],I==this.blockSize){s(this,b),I=0;break}}this.h=I,this.o+=g},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;g=this.o*8;for(var v=T.length-8;v<T.length;++v)T[v]=g&255,g/=256;for(this.v(T),T=Array(16),g=0,v=0;v<4;++v)for(let b=0;b<32;b+=8)T[g++]=this.g[v]>>>b&255;return T};function i(T,g){var v=o;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=g(T)}function a(T,g){this.h=g;const v=[];let b=!0;for(let I=T.length-1;I>=0;I--){const C=T[I]|0;b&&C==g||(v[I]=C,b=!1)}this.g=v}var o={};function c(T){return-128<=T&&T<128?i(T,function(g){return new a([g|0],g<0?-1:0)}):new a([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(T<0)return D(u(-T));const g=[];let v=1;for(let b=0;T>=v;b++)g[b]=T/v|0,v*=4294967296;return new a(g,0)}function d(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return D(d(T.substring(1),g));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=u(Math.pow(g,8));let b=p;for(let C=0;C<T.length;C+=8){var I=Math.min(8,T.length-C);const E=parseInt(T.substring(C,C+I),g);I<8?(I=u(Math.pow(g,I)),b=b.j(I).add(u(E))):(b=b.j(v),b=b.add(u(E)))}return b}var p=c(0),_=c(1),w=c(16777216);n=a.prototype,n.m=function(){if(P(this))return-D(this).m();let T=0,g=1;for(let v=0;v<this.g.length;v++){const b=this.i(v);T+=(b>=0?b:4294967296+b)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(P(this))return"-"+D(this).toString(T);const g=u(Math.pow(T,6));var v=this;let b="";for(;;){const I=ae(v,g).g;v=U(v,I.j(g));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(T);if(v=I,S(v))return C+b;for(;C.length<6;)C="0"+C;b=C+b}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(let g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=U(this,T),P(T)?-1:S(T)?0:1};function D(T){const g=T.g.length,v=[];for(let b=0;b<g;b++)v[b]=~T.g[b];return new a(v,~T.h).add(_)}n.abs=function(){return P(this)?D(this):this},n.add=function(T){const g=Math.max(this.g.length,T.g.length),v=[];let b=0;for(let I=0;I<=g;I++){let C=b+(this.i(I)&65535)+(T.i(I)&65535),E=(C>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);b=E>>>16,C&=65535,E&=65535,v[I]=E<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function U(T,g){return T.add(D(g))}n.j=function(T){if(S(this)||S(T))return p;if(P(this))return P(T)?D(this).j(D(T)):D(D(this).j(T));if(P(T))return D(this.j(D(T)));if(this.l(w)<0&&T.l(w)<0)return u(this.m()*T.m());const g=this.g.length+T.g.length,v=[];for(var b=0;b<2*g;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(let I=0;I<T.g.length;I++){const C=this.i(b)>>>16,E=this.i(b)&65535,ge=T.i(I)>>>16,Ke=T.i(I)&65535;v[2*b+2*I]+=E*Ke,q(v,2*b+2*I),v[2*b+2*I+1]+=C*Ke,q(v,2*b+2*I+1),v[2*b+2*I+1]+=E*ge,q(v,2*b+2*I+1),v[2*b+2*I+2]+=C*ge,q(v,2*b+2*I+2)}for(T=0;T<g;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=g;T<2*g;T++)v[T]=0;return new a(v,0)};function q(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function X(T,g){this.g=T,this.h=g}function ae(T,g){if(S(g))throw Error("division by zero");if(S(T))return new X(p,p);if(P(T))return g=ae(D(T),g),new X(D(g.g),D(g.h));if(P(g))return g=ae(T,D(g)),new X(D(g.g),g.h);if(T.g.length>30){if(P(T)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var v=_,b=g;b.l(T)<=0;)v=fe(v),b=fe(b);var I=F(v,1),C=F(b,1);for(b=F(b,2),v=F(v,2);!S(b);){var E=C.add(b);E.l(T)<=0&&(I=I.add(v),C=E),b=F(b,1),v=F(v,1)}return g=U(T,I.j(g)),new X(I,g)}for(I=p;T.l(g)>=0;){for(v=Math.max(1,Math.floor(T.m()/g.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),C=u(v),E=C.j(g);P(E)||E.l(T)>0;)v-=b,C=u(v),E=C.j(g);S(C)&&(C=_),I=I.add(C),T=U(T,E)}return new X(I,T)}n.B=function(T){return ae(this,T).h},n.and=function(T){const g=Math.max(this.g.length,T.g.length),v=[];for(let b=0;b<g;b++)v[b]=this.i(b)&T.i(b);return new a(v,this.h&T.h)},n.or=function(T){const g=Math.max(this.g.length,T.g.length),v=[];for(let b=0;b<g;b++)v[b]=this.i(b)|T.i(b);return new a(v,this.h|T.h)},n.xor=function(T){const g=Math.max(this.g.length,T.g.length),v=[];for(let b=0;b<g;b++)v[b]=this.i(b)^T.i(b);return new a(v,this.h^T.h)};function fe(T){const g=T.g.length+1,v=[];for(let b=0;b<g;b++)v[b]=T.i(b)<<1|T.i(b-1)>>>31;return new a(v,T.h)}function F(T,g){const v=g>>5;g%=32;const b=T.g.length-v,I=[];for(let C=0;C<b;C++)I[C]=g>0?T.i(C+v)>>>g|T.i(C+v+1)<<32-g:T.i(C+v);return new a(I,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,em=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,Yn=a}).apply(typeof Y1<"u"?Y1:typeof self<"u"?self:typeof window<"u"?window:{});var ya=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tm,ri,nm,ka,lc,rm,sm,im;(function(){var n,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ya=="object"&&ya];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(l,h){if(h)e:{var f=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var x=l[y];if(!(x in f))break e;f=f[x]}l=l[l.length-1],y=f[l],h=h(y),h!=y&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(h){var f=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&f.push([y,h[y]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function o(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function c(l,h,f){return l.call.apply(l.bind,arguments)}function u(l,h,f){return u=c,u.apply(null,arguments)}function d(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function p(l,h){function f(){}f.prototype=h.prototype,l.Z=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Ob=function(y,x,N){for(var $=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)$[oe-2]=arguments[oe];return h.prototype[x].apply(y,$)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function w(l){const h=l.length;if(h>0){const f=Array(h);for(let y=0;y<h;y++)f[y]=l[y];return f}return[]}function S(l,h){for(let y=1;y<arguments.length;y++){const x=arguments[y];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=l.length||0;const N=x.length||0;l.length=f+N;for(let $=0;$<N;$++)l[f+$]=x[$]}else l.push(x)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(l){a.setTimeout(()=>{throw l},0)}function U(){var l=T;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class q{constructor(){this.h=this.g=null}add(h,f){const y=X.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var X=new P(()=>new ae,l=>l.reset());class ae{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,F=!1,T=new q,g=()=>{const l=Promise.resolve(void 0);fe=()=>{l.then(v)}};function v(){for(var l;l=U();){try{l.h.call(l.g)}catch(f){D(f)}var h=X;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}F=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l})();function E(l){return/^[\s\xa0]*$/.test(l)}function ge(l,h){I.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}p(ge,I),ge.prototype.init=function(l,h){const f=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),kn=0;function ta(l,h,f,y,x){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=x,this.key=++kn,this.da=this.fa=!1}function Gr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Kr(l,h,f){for(const y in l)h.call(f,l[y],y,l)}function gg(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function Xu(l){const h={};for(const f in l)h[f]=l[f];return h}const Ju="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zu(l,h){let f,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(f in y)l[f]=y[f];for(let N=0;N<Ju.length;N++)f=Ju[N],Object.prototype.hasOwnProperty.call(y,f)&&(l[f]=y[f])}}function na(l){this.src=l,this.g={},this.h=0}na.prototype.add=function(l,h,f,y,x){const N=l.toString();l=this.g[N],l||(l=this.g[N]=[],this.h++);const $=tl(l,h,y,x);return $>-1?(h=l[$],f||(h.fa=!1)):(h=new ta(h,this.src,N,!!y,x),h.fa=f,l.push(h)),h};function el(l,h){const f=h.type;if(f in l.g){var y=l.g[f],x=Array.prototype.indexOf.call(y,h,void 0),N;(N=x>=0)&&Array.prototype.splice.call(y,x,1),N&&(Gr(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function tl(l,h,f,y){for(let x=0;x<l.length;++x){const N=l[x];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==y)return x}return-1}var nl="closure_lm_"+(Math.random()*1e6|0),rl={};function eh(l,h,f,y,x){if(Array.isArray(h)){for(let N=0;N<h.length;N++)eh(l,h[N],f,y,x);return null}return f=rh(f),l&&l[Ke]?l.J(h,f,o(y)?!!y.capture:!1,x):yg(l,h,f,!1,y,x)}function yg(l,h,f,y,x,N){if(!h)throw Error("Invalid event type");const $=o(x)?!!x.capture:!!x;let oe=il(l);if(oe||(l[nl]=oe=new na(l)),f=oe.add(h,f,y,$,N),f.proxy)return f;if(y=vg(),f.proxy=y,y.src=l,y.listener=f,l.addEventListener)C||(x=$),x===void 0&&(x=!1),l.addEventListener(h.toString(),y,x);else if(l.attachEvent)l.attachEvent(nh(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function vg(){function l(f){return h.call(l.src,l.listener,f)}const h=_g;return l}function th(l,h,f,y,x){if(Array.isArray(h))for(var N=0;N<h.length;N++)th(l,h[N],f,y,x);else y=o(y)?!!y.capture:!!y,f=rh(f),l&&l[Ke]?(l=l.i,N=String(h).toString(),N in l.g&&(h=l.g[N],f=tl(h,f,y,x),f>-1&&(Gr(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete l.g[N],l.h--)))):l&&(l=il(l))&&(h=l.g[h.toString()],l=-1,h&&(l=tl(h,f,y,x)),(f=l>-1?h[l]:null)&&sl(f))}function sl(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Ke])el(h.i,l);else{var f=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(f,y,l.capture):h.detachEvent?h.detachEvent(nh(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=il(h))?(el(f,l),f.h==0&&(f.src=null,h[nl]=null)):Gr(l)}}}function nh(l){return l in rl?rl[l]:rl[l]="on"+l}function _g(l,h){if(l.da)l=!0;else{h=new ge(h,this);const f=l.listener,y=l.ha||l.src;l.fa&&sl(l),l=f.call(y,h)}return l}function il(l){return l=l[nl],l instanceof na?l:null}var al="__closure_events_fn_"+(Math.random()*1e9>>>0);function rh(l){return typeof l=="function"?l:(l[al]||(l[al]=function(h){return l.handleEvent(h)}),l[al])}function Je(){b.call(this),this.i=new na(this),this.M=this,this.G=null}p(Je,b),Je.prototype[Ke]=!0,Je.prototype.removeEventListener=function(l,h,f,y){th(this,l,h,f,y)};function at(l,h){var f,y=l.G;if(y)for(f=[];y;y=y.G)f.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new I(h,l);else if(h instanceof I)h.target=h.target||l;else{var x=h;h=new I(y,l),Zu(h,x)}x=!0;let N,$;if(f)for($=f.length-1;$>=0;$--)N=h.g=f[$],x=ra(N,y,!0,h)&&x;if(N=h.g=l,x=ra(N,y,!0,h)&&x,x=ra(N,y,!1,h)&&x,f)for($=0;$<f.length;$++)N=h.g=f[$],x=ra(N,y,!1,h)&&x}Je.prototype.N=function(){if(Je.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const f=l.g[h];for(let y=0;y<f.length;y++)Gr(f[y]);delete l.g[h],l.h--}}this.G=null},Je.prototype.J=function(l,h,f,y){return this.i.add(String(l),h,!1,f,y)},Je.prototype.K=function(l,h,f,y){return this.i.add(String(l),h,!0,f,y)};function ra(l,h,f,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let N=0;N<h.length;++N){const $=h[N];if($&&!$.da&&$.capture==f){const oe=$.listener,Fe=$.ha||$.src;$.fa&&el(l.i,$),x=oe.call(Fe,y)!==!1&&x}}return x&&!y.defaultPrevented}function Ag(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(l,h||0)}function sh(l){l.g=Ag(()=>{l.g=null,l.i&&(l.i=!1,sh(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class bg extends b{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:sh(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ks(l){b.call(this),this.h=l,this.g={}}p(ks,b);var ih=[];function ah(l){Kr(l.g,function(h,f){this.g.hasOwnProperty(f)&&sl(h)},l),l.g={}}ks.prototype.N=function(){ks.Z.N.call(this),ah(this)},ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ol=a.JSON.stringify,Eg=a.JSON.parse,wg=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function oh(){}function lh(){}var Ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ll(){I.call(this,"d")}p(ll,I);function cl(){I.call(this,"c")}p(cl,I);var mr={},ch=null;function sa(){return ch=ch||new Je}mr.Ia="serverreachability";function uh(l){I.call(this,mr.Ia,l)}p(uh,I);function Ds(l){const h=sa();at(h,new uh(h))}mr.STAT_EVENT="statevent";function hh(l,h){I.call(this,mr.STAT_EVENT,l),this.stat=h}p(hh,I);function ot(l){const h=sa();at(h,new hh(h,l))}mr.Ja="timingevent";function dh(l,h){I.call(this,mr.Ja,l),this.size=h}p(dh,I);function Ls(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Os(){this.g=!0}Os.prototype.ua=function(){this.g=!1};function Ig(l,h,f,y,x,N){l.info(function(){if(l.g)if(N){var $="",oe=N.split("&");for(let _e=0;_e<oe.length;_e++){var Fe=oe[_e].split("=");if(Fe.length>1){const ze=Fe[0];Fe=Fe[1];const Kt=ze.split("_");$=Kt.length>=2&&Kt[1]=="type"?$+(ze+"="+Fe+"&"):$+(ze+"=redacted&")}}}else $=null;else $=N;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+h+`
`+f+`
`+$})}function Tg(l,h,f,y,x,N,$){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+h+`
`+f+`
`+N+" "+$})}function Qr(l,h,f,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+Cg(l,f)+(y?" "+y:"")})}function Sg(l,h){l.info(function(){return"TIMEOUT: "+h})}Os.prototype.info=function(){};function Cg(l,h){if(!l.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(l=0;l<N.length;l++)if(Array.isArray(N[l])){var f=N[l];if(!(f.length<2)){var y=f[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let $=1;$<y.length;$++)y[$]=""}}}}return ol(N)}catch{return h}}var ia={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ph={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},fh;function ul(){}p(ul,oh),ul.prototype.g=function(){return new XMLHttpRequest},fh=new ul;function Vs(l){return encodeURIComponent(String(l))}function Rg(l){var h=1;l=l.split(":");const f=[];for(;h>0&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function Nn(l,h,f,y){this.j=l,this.i=h,this.l=f,this.S=y||1,this.V=new ks(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new mh}function mh(){this.i=null,this.g="",this.h=!1}var gh={},hl={};function dl(l,h,f){l.M=1,l.A=oa(Gt(h)),l.u=f,l.R=!0,yh(l,null)}function yh(l,h){l.F=Date.now(),aa(l),l.B=Gt(l.A);var f=l.B,y=l.S;Array.isArray(y)||(y=[String(y)]),Ph(f.i,"t",y),l.C=0,f=l.j.L,l.h=new mh,l.g=Kh(l.j,f?h:null,!l.u),l.P>0&&(l.O=new bg(u(l.Y,l,l.g),l.P)),h=l.V,f=l.g,y=l.ba;var x="readystatechange";Array.isArray(x)||(x&&(ih[0]=x.toString()),x=ih);for(let N=0;N<x.length;N++){const $=eh(f,x[N],y||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=l.J?Xu(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),Ds(),Ig(l.i,l.v,l.B,l.l,l.S,l.u)}Nn.prototype.ba=function(l){l=l.target;const h=this.O;h&&On(l)==3?h.j():this.Y(l)},Nn.prototype.Y=function(l){try{if(l==this.g)e:{const oe=On(this.g),Fe=this.g.ya(),_e=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||Mh(this.g)))){this.K||oe!=4||Fe==7||(Fe==8||_e<=0?Ds(3):Ds(2)),pl(this);var h=this.g.ca();this.X=h;var f=xg(this);if(this.o=h==200,Tg(this.i,this.v,this.B,this.l,this.S,oe,h),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(y)){var N=y;break t}}N=null}if(l=N)Qr(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fl(this,l);else{this.o=!1,this.m=3,ot(12),gr(this),Ms(this);break e}}if(this.R){l=!0;let ze;for(;!this.K&&this.C<f.length;)if(ze=Pg(this,f),ze==hl){oe==4&&(this.m=4,ot(14),l=!1),Qr(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==gh){this.m=4,ot(15),Qr(this.i,this.l,f,"[Invalid Chunk]"),l=!1;break}else Qr(this.i,this.l,ze,null),fl(this,ze);if(vh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||f.length!=0||this.h.h||(this.m=1,ot(16),l=!1),this.o=this.o&&l,!l)Qr(this.i,this.l,f,"[Invalid Chunked Response]"),gr(this),Ms(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),El($),$.P=!0,ot(11))}}else Qr(this.i,this.l,f,null),fl(this,f);oe==4&&gr(this),this.o&&!this.K&&(oe==4?jh(this.j,this):(this.o=!1,aa(this)))}else jg(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),gr(this),Ms(this)}}}catch{}finally{}};function xg(l){if(!vh(l))return l.g.la();const h=Mh(l.g);if(h==="")return"";let f="";const y=h.length,x=On(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return gr(l),Ms(l),"";l.h.i=new a.TextDecoder}for(let N=0;N<y;N++)l.h.h=!0,f+=l.h.i.decode(h[N],{stream:!(x&&N==y-1)});return h.length=0,l.h.g+=f,l.C=0,l.h.g}function vh(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function Pg(l,h){var f=l.C,y=h.indexOf(`
`,f);return y==-1?hl:(f=Number(h.substring(f,y)),isNaN(f)?gh:(y+=1,y+f>h.length?hl:(h=h.slice(y,y+f),l.C=y+f,h)))}Nn.prototype.cancel=function(){this.K=!0,gr(this)};function aa(l){l.T=Date.now()+l.H,_h(l,l.H)}function _h(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ls(u(l.aa,l),h)}function pl(l){l.D&&(a.clearTimeout(l.D),l.D=null)}Nn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(Sg(this.i,this.B),this.M!=2&&(Ds(),ot(17)),gr(this),this.m=2,Ms(this)):_h(this,this.T-l)};function Ms(l){l.j.I==0||l.K||jh(l.j,l)}function gr(l){pl(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,ah(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function fl(l,h){try{var f=l.j;if(f.I!=0&&(f.g==l||ml(f.h,l))){if(!l.L&&ml(f.h,l)&&f.I==3){try{var y=f.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<l.F)da(f),ua(f);else break e;bl(f),ot(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ls(u(f.Va,f),6e3));Eh(f.h)<=1&&f.ta&&(f.ta=void 0)}else vr(f,11)}else if((l.L||f.g==l)&&da(f),!E(h))for(x=f.Ba.g.parse(h),h=0;h<x.length;h++){let _e=x[h];const ze=_e[0];if(!(ze<=f.K))if(f.K=ze,_e=_e[1],f.I==2)if(_e[0]=="c"){f.M=_e[1],f.ba=_e[2];const Kt=_e[3];Kt!=null&&(f.ka=Kt,f.j.info("VER="+f.ka));const _r=_e[4];_r!=null&&(f.za=_r,f.j.info("SVER="+f.za));const Vn=_e[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(y=1.5*Vn,f.O=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Mn=l.g;if(Mn){const fa=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fa){var N=y.h;N.g||fa.indexOf("spdy")==-1&&fa.indexOf("quic")==-1&&fa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(gl(N,N.h),N.h=null))}if(y.G){const wl=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;wl&&(y.wa=wl,Ae(y.J,y.G,wl))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-l.F,f.j.info("Handshake RTT: "+f.T+"ms")),y=f;var $=l;if(y.na=Gh(y,y.L?y.ba:null,y.W),$.L){wh(y.h,$);var oe=$,Fe=y.O;Fe&&(oe.H=Fe),oe.D&&(pl(oe),aa(oe)),y.g=$}else $h(y);f.i.length>0&&ha(f)}else _e[0]!="stop"&&_e[0]!="close"||vr(f,7);else f.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?vr(f,7):Al(f):_e[0]!="noop"&&f.l&&f.l.qa(_e),f.A=0)}}Ds(4)}catch{}}var kg=class{constructor(l,h){this.g=l,this.map=h}};function Ah(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function bh(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Eh(l){return l.h?1:l.g?l.g.size:0}function ml(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function gl(l,h){l.g?l.g.add(h):l.h=h}function wh(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Ah.prototype.cancel=function(){if(this.i=Ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ih(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.G);return h}return w(l.i)}var Th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ng(l,h){if(l){l=l.split("&");for(let f=0;f<l.length;f++){const y=l[f].indexOf("=");let x,N=null;y>=0?(x=l[f].substring(0,y),N=l[f].substring(y+1)):x=l[f],h(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Dn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof Dn?(this.l=l.l,Us(this,l.j),this.o=l.o,this.g=l.g,Bs(this,l.u),this.h=l.h,yl(this,kh(l.i)),this.m=l.m):l&&(h=String(l).match(Th))?(this.l=!1,Us(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Bs(this,h[4]),this.h=Fs(h[5]||"",!0),yl(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.l=!1,this.i=new $s(null,this.l))}Dn.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(qs(h,Sh,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(qs(h,Sh,!0),"@"),l.push(Vs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&l.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(qs(f,f.charAt(0)=="/"?Og:Lg,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",qs(f,Mg)),l.join("")},Dn.prototype.resolve=function(l){const h=Gt(this);let f=!!l.j;f?Us(h,l.j):f=!!l.o,f?h.o=l.o:f=!!l.g,f?h.g=l.g:f=l.u!=null;var y=l.h;if(f)Bs(h,l.u);else if(f=!!l.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=h.h.lastIndexOf("/");x!=-1&&(y=h.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const N=[];for(let $=0;$<x.length;){const oe=x[$++];oe=="."?y&&$==x.length&&N.push(""):oe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),y&&$==x.length&&N.push("")):(N.push(oe),y=!0)}y=N.join("/")}else y=x}return f?h.h=y:f=l.i.toString()!=="",f?yl(h,kh(l.i)):f=!!l.m,f&&(h.m=l.m),h};function Gt(l){return new Dn(l)}function Us(l,h,f){l.j=f?Fs(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Bs(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function yl(l,h,f){h instanceof $s?(l.i=h,Ug(l.i,l.l)):(f||(h=qs(h,Vg)),l.i=new $s(h,l.l))}function Ae(l,h,f){l.i.set(h,f)}function oa(l){return Ae(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Fs(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function qs(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,Dg),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function Dg(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Sh=/[#\/\?@]/g,Lg=/[#\?:]/g,Og=/[#\?]/g,Vg=/[#\?@]/g,Mg=/#/g;function $s(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function yr(l){l.g||(l.g=new Map,l.h=0,l.i&&Ng(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=$s.prototype,n.add=function(l,h){yr(this),this.i=null,l=Yr(this,l);let f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function Ch(l,h){yr(l),h=Yr(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Rh(l,h){return yr(l),h=Yr(l,h),l.g.has(h)}n.forEach=function(l,h){yr(this),this.g.forEach(function(f,y){f.forEach(function(x){l.call(h,x,y,this)},this)},this)};function xh(l,h){yr(l);let f=[];if(typeof h=="string")Rh(l,h)&&(f=f.concat(l.g.get(Yr(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)f=f.concat(l[h]);return f}n.set=function(l,h){return yr(this),this.i=null,l=Yr(this,l),Rh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=xh(this,l),l.length>0?String(l[0]):h):h};function Ph(l,h,f){Ch(l,h),f.length>0&&(l.i=null,l.g.set(Yr(l,h),w(f)),l.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var f=h[y];const x=Vs(f);f=xh(this,f);for(let N=0;N<f.length;N++){let $=x;f[N]!==""&&($+="="+Vs(f[N])),l.push($)}}return this.i=l.join("&")};function kh(l){const h=new $s;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function Yr(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function Ug(l,h){h&&!l.j&&(yr(l),l.i=null,l.g.forEach(function(f,y){const x=y.toLowerCase();y!=x&&(Ch(this,y),Ph(this,x,f))},l)),l.j=h}function Bg(l,h){const f=new Os;if(a.Image){const y=new Image;y.onload=d(Ln,f,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Ln,f,"TestLoadImage: error",!1,h,y),y.onabort=d(Ln,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Ln,f,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function Fg(l,h){const f=new Os,y=new AbortController,x=setTimeout(()=>{y.abort(),Ln(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(N=>{clearTimeout(x),N.ok?Ln(f,"TestPingServer: ok",!0,h):Ln(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Ln(f,"TestPingServer: error",!1,h)})}function Ln(l,h,f,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(f)}catch{}}function qg(){this.g=new wg}function vl(l){this.i=l.Sb||null,this.h=l.ab||!1}p(vl,oh),vl.prototype.g=function(){return new la(this.i,this.h)};function la(l,h){Je.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(la,Je),n=la.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,js(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hs(this)),this.readyState=0},n.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,js(this)),this.g&&(this.readyState=3,js(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Nh(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Nh(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}n.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Hs(this):js(this),this.readyState==3&&Nh(this)}},n.Oa=function(l){this.g&&(this.response=this.responseText=l,Hs(this))},n.Na=function(l){this.g&&(this.response=l,Hs(this))},n.ga=function(){this.g&&Hs(this)};function Hs(l){l.readyState=4,l.l=null,l.j=null,l.B=null,js(l)}n.setRequestHeader=function(l,h){this.A.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function js(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(la.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Dh(l){let h="";return Kr(l,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function _l(l,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Dh(f),typeof l=="string"?f!=null&&Vs(f):Ae(l,h,f))}function Re(l){Je.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,Je);var $g=/^https?$/i,Hg=["POST","PUT"];n=Re.prototype,n.Fa=function(l){this.H=l},n.ea=function(l,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():fh.g(),this.g.onreadystatechange=_(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(N){Lh(this,N);return}if(l=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)f.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const N of y.keys())f.set(N,y.get(N));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(Array.prototype.indexOf.call(Hg,h,void 0)>=0)||y||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of f)this.g.setRequestHeader(N,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(N){Lh(this,N)}};function Lh(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,Oh(l),ca(l)}function Oh(l){l.A||(l.A=!0,at(l,"complete"),at(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,at(this,"complete"),at(this,"abort"),ca(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ca(this,!0)),Re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Vh(this):this.Xa())},n.Xa=function(){Vh(this)};function Vh(l){if(l.h&&typeof i<"u"){if(l.v&&On(l)==4)setTimeout(l.Ca.bind(l),0);else if(at(l,"readystatechange"),On(l)==4){l.h=!1;try{const N=l.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=N===0){let $=String(l.D).match(Th)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),y=!$g.test($?$.toLowerCase():"")}f=y}if(f)at(l,"complete"),at(l,"success");else{l.o=6;try{var x=On(l)>2?l.g.statusText:""}catch{x=""}l.l=x+" ["+l.ca()+"]",Oh(l)}}finally{ca(l)}}}}function ca(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const f=l.g;l.g=null,h||at(l,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function On(l){return l.g?l.g.readyState:0}n.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Eg(h)}};function Mh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function jg(l){const h={};l=(l.g&&On(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var f=Rg(l[y]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[x]||[];h[x]=N,N.push(f)}gg(h,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function Uh(l){this.za=0,this.i=[],this.j=new Os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,l),this.Za=zs("retryDelaySeedMs",1e4,l),this.Ta=zs("forwardChannelMaxRetries",2,l),this.va=zs("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new Ah(l&&l.concurrentRequestLimit),this.Ba=new qg,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Uh.prototype,n.ka=8,n.I=1,n.connect=function(l,h,f,y){ot(0),this.W=l,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.J=Gh(this,null,this.W),ha(this)};function Al(l){if(Bh(l),l.I==3){var h=l.V++,f=Gt(l.J);if(Ae(f,"SID",l.M),Ae(f,"RID",h),Ae(f,"TYPE","terminate"),Ws(l,f),h=new Nn(l,l.j,h),h.M=2,h.A=oa(Gt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=Kh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),aa(h)}Wh(l)}function ua(l){l.g&&(El(l),l.g.cancel(),l.g=null)}function Bh(l){ua(l),l.v&&(a.clearTimeout(l.v),l.v=null),da(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&a.clearTimeout(l.m),l.m=null)}function ha(l){if(!bh(l.h)&&!l.m){l.m=!0;var h=l.Ea;fe||g(),F||(fe(),F=!0),T.add(h,l),l.D=0}}function zg(l,h){return Eh(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ls(u(l.Ea,l,h),zh(l,l.D)),l.D++,!0)}n.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const x=new Nn(this,this.j,l);let N=this.o;if(this.U&&(N?(N=Xu(N),Zu(N,this.U)):N=this.U),this.u!==null||this.R||(x.J=N,N=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=qh(this,x,h),f=Gt(this.J),Ae(f,"RID",l),Ae(f,"CVER",22),this.G&&Ae(f,"X-HTTP-Session-Id",this.G),Ws(this,f),N&&(this.R?h="headers="+Vs(Dh(N))+"&"+h:this.u&&_l(f,this.u,N)),gl(this.h,x),this.Ra&&Ae(f,"TYPE","init"),this.S?(Ae(f,"$req",h),Ae(f,"SID","null"),x.U=!0,dl(x,f,null)):dl(x,f,h),this.I=2}}else this.I==3&&(l?Fh(this,l):this.i.length==0||bh(this.h)||Fh(this))};function Fh(l,h){var f;h?f=h.l:f=l.V++;const y=Gt(l.J);Ae(y,"SID",l.M),Ae(y,"RID",f),Ae(y,"AID",l.K),Ws(l,y),l.u&&l.o&&_l(y,l.u,l.o),f=new Nn(l,l.j,f,l.D+1),l.u===null&&(f.J=l.o),h&&(l.i=h.G.concat(l.i)),h=qh(l,f,1e3),f.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),gl(l.h,f),dl(f,y,h)}function Ws(l,h){l.H&&Kr(l.H,function(f,y){Ae(h,y,f)}),l.l&&Kr({},function(f,y){Ae(h,y,f)})}function qh(l,h,f){f=Math.min(l.i.length,f);const y=l.l?u(l.l.Ka,l.l,l):null;e:{var x=l.i;let oe=-1;for(;;){const Fe=["count="+f];oe==-1?f>0?(oe=x[0].g,Fe.push("ofs="+oe)):oe=0:Fe.push("ofs="+oe);let _e=!0;for(let ze=0;ze<f;ze++){var N=x[ze].g;const Kt=x[ze].map;if(N-=oe,N<0)oe=Math.max(0,x[ze].g-100),_e=!1;else try{N="req"+N+"_"||"";try{var $=Kt instanceof Map?Kt:Object.entries(Kt);for(const[_r,Vn]of $){let Mn=Vn;o(Vn)&&(Mn=ol(Vn)),Fe.push(N+_r+"="+encodeURIComponent(Mn))}}catch(_r){throw Fe.push(N+"type="+encodeURIComponent("_badmap")),_r}}catch{y&&y(Kt)}}if(_e){$=Fe.join("&");break e}}$=void 0}return l=l.i.splice(0,f),h.G=l,$}function $h(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;fe||g(),F||(fe(),F=!0),T.add(h,l),l.A=0}}function bl(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ls(u(l.Da,l),zh(l,l.A)),l.A++,!0)}n.Da=function(){if(this.v=null,Hh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ls(u(this.Wa,this),l)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),ua(this),Hh(this))};function El(l){l.B!=null&&(a.clearTimeout(l.B),l.B=null)}function Hh(l){l.g=new Nn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=Gt(l.na);Ae(h,"RID","rpc"),Ae(h,"SID",l.M),Ae(h,"AID",l.K),Ae(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&Ae(h,"TO",l.ia),Ae(h,"TYPE","xmlhttp"),Ws(l,h),l.u&&l.o&&_l(h,l.u,l.o),l.O&&(l.g.H=l.O);var f=l.g;l=l.ba,f.M=1,f.A=oa(Gt(h)),f.u=null,f.R=!0,yh(f,l)}n.Va=function(){this.C!=null&&(this.C=null,ua(this),bl(this),ot(19))};function da(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function jh(l,h){var f=null;if(l.g==h){da(l),El(l),l.g=null;var y=2}else if(ml(l.h,h))f=h.G,wh(l.h,h),y=1;else return;if(l.I!=0){if(h.o)if(y==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var x=l.D;y=sa(),at(y,new dh(y,f)),ha(l)}else $h(l);else if(x=h.m,x==3||x==0&&h.X>0||!(y==1&&zg(l,h)||y==2&&bl(l)))switch(f&&f.length>0&&(h=l.h,h.i=h.i.concat(f)),x){case 1:vr(l,5);break;case 4:vr(l,10);break;case 3:vr(l,6);break;default:vr(l,2)}}}function zh(l,h){let f=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(f*=2),f*h}function vr(l,h){if(l.j.info("Error code "+h),h==2){var f=u(l.bb,l),y=l.Ua;const x=!y;y=new Dn(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Us(y,"https"),oa(y),x?Bg(y.toString(),f):Fg(y.toString(),f)}else ot(2);l.I=0,l.l&&l.l.pa(h),Wh(l),Bh(l)}n.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Wh(l){if(l.I=0,l.ja=[],l.l){const h=Ih(l.h);(h.length!=0||l.i.length!=0)&&(S(l.ja,h),S(l.ja,l.i),l.h.i.length=0,w(l.i),l.i.length=0),l.l.oa()}}function Gh(l,h,f){var y=f instanceof Dn?Gt(f):new Dn(f);if(y.g!="")h&&(y.g=h+"."+y.g),Bs(y,y.u);else{var x=a.location;y=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const N=new Dn(null);y&&Us(N,y),h&&(N.g=h),x&&Bs(N,x),f&&(N.h=f),y=N}return f=l.G,h=l.wa,f&&h&&Ae(y,f,h),Ae(y,"VER",l.ka),Ws(l,y),y}function Kh(l,h,f){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Re(new vl({ab:f})):new Re(l.ma),h.Fa(l.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qh(){}n=Qh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function pa(){}pa.prototype.g=function(l,h){return new Et(l,h)};function Et(l,h){Je.call(this),this.g=new Uh(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!E(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Xr(this)}p(Et,Je),Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){Al(this.g)},Et.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.v&&(f={},f.__data__=ol(l),l=f);h.i.push(new kg(h.Ya++,l)),h.I==3&&ha(h)},Et.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,Et.Z.N.call(this)};function Yh(l){ll.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}p(Yh,ll);function Xh(){cl.call(this),this.status=1}p(Xh,cl);function Xr(l){this.g=l}p(Xr,Qh),Xr.prototype.ra=function(){at(this.g,"a")},Xr.prototype.qa=function(l){at(this.g,new Yh(l))},Xr.prototype.pa=function(l){at(this.g,new Xh)},Xr.prototype.oa=function(){at(this.g,"b")},pa.prototype.createWebChannel=pa.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,im=function(){return new pa},sm=function(){return sa()},rm=mr,lc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ia.NO_ERROR=0,ia.TIMEOUT=8,ia.HTTP_ERROR=6,ka=ia,ph.COMPLETE="complete",nm=ph,lh.EventType=Ns,Ns.OPEN="a",Ns.CLOSE="b",Ns.ERROR="c",Ns.MESSAGE="d",Je.prototype.listen=Je.prototype.J,ri=lh,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,tm=Re}).apply(typeof ya<"u"?ya:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Te=class Te{};A(Te,"FOLD_CASE",1),A(Te,"LITERAL",2),A(Te,"CLASS_NL",4),A(Te,"DOT_NL",8),A(Te,"ONE_LINE",16),A(Te,"NON_GREEDY",32),A(Te,"PERL_X",64),A(Te,"UNICODE_GROUPS",128),A(Te,"WAS_DOLLAR",256),A(Te,"MATCH_NL",Te.CLASS_NL|Te.DOT_NL),A(Te,"PERL",Te.CLASS_NL|Te.ONE_LINE|Te.PERL_X|Te.UNICODE_GROUPS),A(Te,"POSIX",0),A(Te,"UNANCHORED",0),A(Te,"ANCHOR_START",1),A(Te,"ANCHOR_BOTH",2);let z=Te;class k{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}A(k,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const m=class m{};A(m,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),A(m,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),A(m,"Cc",[[0,31,1],[127,159,1]]),A(m,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),A(m,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),A(m,"Cs",[[55296,57343,1]]),A(m,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),A(m,"foldL",[[837,837,1]]),A(m,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),A(m,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),A(m,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),A(m,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),A(m,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),A(m,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),A(m,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),A(m,"Upper",m.Lu),A(m,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),A(m,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),A(m,"foldM",[[921,953,32],[8126,8126,1]]),A(m,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),A(m,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),A(m,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),A(m,"foldMn",[[921,953,32],[8126,8126,1]]),A(m,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),A(m,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),A(m,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),A(m,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),A(m,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),A(m,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),A(m,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),A(m,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),A(m,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),A(m,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),A(m,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),A(m,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),A(m,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),A(m,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),A(m,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),A(m,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),A(m,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),A(m,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),A(m,"Zl",[[8232,8232,1]]),A(m,"Zp",[[8233,8233,1]]),A(m,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),A(m,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),A(m,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),A(m,"Anatolian_Hieroglyphs",[[82944,83526,1]]),A(m,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),A(m,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),A(m,"Avestan",[[68352,68405,1],[68409,68415,1]]),A(m,"Balinese",[[6912,6988,1],[6992,7038,1]]),A(m,"Bamum",[[42656,42743,1],[92160,92728,1]]),A(m,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),A(m,"Batak",[[7104,7155,1],[7164,7167,1]]),A(m,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),A(m,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),A(m,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),A(m,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),A(m,"Braille",[[10240,10495,1]]),A(m,"Buginese",[[6656,6683,1],[6686,6687,1]]),A(m,"Buhid",[[5952,5971,1]]),A(m,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),A(m,"Carian",[[66208,66256,1]]),A(m,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),A(m,"Chakma",[[69888,69940,1],[69942,69959,1]]),A(m,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),A(m,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),A(m,"Chorasmian",[[69552,69579,1]]),A(m,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),A(m,"foldCommon",[[924,956,32]]),A(m,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),A(m,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),A(m,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),A(m,"Cypro_Minoan",[[77712,77810,1]]),A(m,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),A(m,"Deseret",[[66560,66639,1]]),A(m,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),A(m,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),A(m,"Dogra",[[71680,71739,1]]),A(m,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),A(m,"Egyptian_Hieroglyphs",[[77824,78933,1]]),A(m,"Elbasan",[[66816,66855,1]]),A(m,"Elymaic",[[69600,69622,1]]),A(m,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),A(m,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),A(m,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),A(m,"Gothic",[[66352,66378,1]]),A(m,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),A(m,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),A(m,"foldGreek",[[181,837,656]]),A(m,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),A(m,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),A(m,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),A(m,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),A(m,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),A(m,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),A(m,"Hanunoo",[[5920,5940,1]]),A(m,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),A(m,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),A(m,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),A(m,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),A(m,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),A(m,"foldInherited",[[921,953,32],[8126,8126,1]]),A(m,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),A(m,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),A(m,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),A(m,"Kaithi",[[69760,69826,1],[69837,69837,1]]),A(m,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),A(m,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),A(m,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),A(m,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),A(m,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),A(m,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),A(m,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),A(m,"Khojki",[[70144,70161,1],[70163,70209,1]]),A(m,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),A(m,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),A(m,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),A(m,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),A(m,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),A(m,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),A(m,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),A(m,"Lisu",[[42192,42239,1],[73648,73648,1]]),A(m,"Lycian",[[66176,66204,1]]),A(m,"Lydian",[[67872,67897,1],[67903,67903,1]]),A(m,"Mahajani",[[69968,70006,1]]),A(m,"Makasar",[[73440,73464,1]]),A(m,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),A(m,"Mandaic",[[2112,2139,1],[2142,2142,1]]),A(m,"Manichaean",[[68288,68326,1],[68331,68342,1]]),A(m,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),A(m,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),A(m,"Medefaidrin",[[93760,93850,1]]),A(m,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),A(m,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),A(m,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),A(m,"Meroitic_Hieroglyphs",[[67968,67999,1]]),A(m,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),A(m,"Modi",[[71168,71236,1],[71248,71257,1]]),A(m,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),A(m,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),A(m,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),A(m,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),A(m,"Nabataean",[[67712,67742,1],[67751,67759,1]]),A(m,"Nag_Mundari",[[124112,124153,1]]),A(m,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),A(m,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),A(m,"Newa",[[70656,70747,1],[70749,70753,1]]),A(m,"Nko",[[1984,2042,1],[2045,2047,1]]),A(m,"Nushu",[[94177,110960,16783],[110961,111355,1]]),A(m,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),A(m,"Ogham",[[5760,5788,1]]),A(m,"Ol_Chiki",[[7248,7295,1]]),A(m,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),A(m,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),A(m,"Old_North_Arabian",[[68224,68255,1]]),A(m,"Old_Permic",[[66384,66426,1]]),A(m,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),A(m,"Old_Sogdian",[[69376,69415,1]]),A(m,"Old_South_Arabian",[[68192,68223,1]]),A(m,"Old_Turkic",[[68608,68680,1]]),A(m,"Old_Uyghur",[[69488,69513,1]]),A(m,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),A(m,"Osage",[[66736,66771,1],[66776,66811,1]]),A(m,"Osmanya",[[66688,66717,1],[66720,66729,1]]),A(m,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),A(m,"Palmyrene",[[67680,67711,1]]),A(m,"Pau_Cin_Hau",[[72384,72440,1]]),A(m,"Phags_Pa",[[43072,43127,1]]),A(m,"Phoenician",[[67840,67867,1],[67871,67871,1]]),A(m,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),A(m,"Rejang",[[43312,43347,1],[43359,43359,1]]),A(m,"Runic",[[5792,5866,1],[5870,5880,1]]),A(m,"Samaritan",[[2048,2093,1],[2096,2110,1]]),A(m,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),A(m,"Sharada",[[70016,70111,1]]),A(m,"Shavian",[[66640,66687,1]]),A(m,"Siddham",[[71040,71093,1],[71096,71133,1]]),A(m,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),A(m,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),A(m,"Sogdian",[[69424,69465,1]]),A(m,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),A(m,"Soyombo",[[72272,72354,1]]),A(m,"Sundanese",[[7040,7103,1],[7360,7367,1]]),A(m,"Syloti_Nagri",[[43008,43052,1]]),A(m,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),A(m,"Tagalog",[[5888,5909,1],[5919,5919,1]]),A(m,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),A(m,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),A(m,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),A(m,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),A(m,"Takri",[[71296,71353,1],[71360,71369,1]]),A(m,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),A(m,"Tangsa",[[92784,92862,1],[92864,92873,1]]),A(m,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),A(m,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),A(m,"Thaana",[[1920,1969,1]]),A(m,"Thai",[[3585,3642,1],[3648,3675,1]]),A(m,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),A(m,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),A(m,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),A(m,"Toto",[[123536,123566,1]]),A(m,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),A(m,"Vai",[[42240,42539,1]]),A(m,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),A(m,"Wancho",[[123584,123641,1],[123647,123647,1]]),A(m,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),A(m,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),A(m,"Yi",[[40960,42124,1],[42128,42182,1]]),A(m,"Zanabazar_Square",[[72192,72263,1]]),A(m,"CATEGORIES",new Map([["C",m.C],["Cc",m.Cc],["Cf",m.Cf],["Co",m.Co],["Cs",m.Cs],["L",m.L],["Ll",m.Ll],["Lm",m.Lm],["Lo",m.Lo],["Lt",m.Lt],["Lu",m.Lu],["M",m.M],["Mc",m.Mc],["Me",m.Me],["Mn",m.Mn],["N",m.N],["Nd",m.Nd],["Nl",m.Nl],["No",m.No],["P",m.P],["Pc",m.Pc],["Pd",m.Pd],["Pe",m.Pe],["Pf",m.Pf],["Pi",m.Pi],["Po",m.Po],["Ps",m.Ps],["S",m.S],["Sc",m.Sc],["Sk",m.Sk],["Sm",m.Sm],["So",m.So],["Z",m.Z],["Zl",m.Zl],["Zp",m.Zp],["Zs",m.Zs]])),A(m,"SCRIPTS",new Map([["Adlam",m.Adlam],["Ahom",m.Ahom],["Anatolian_Hieroglyphs",m.Anatolian_Hieroglyphs],["Arabic",m.Arabic],["Armenian",m.Armenian],["Avestan",m.Avestan],["Balinese",m.Balinese],["Bamum",m.Bamum],["Bassa_Vah",m.Bassa_Vah],["Batak",m.Batak],["Bengali",m.Bengali],["Bhaiksuki",m.Bhaiksuki],["Bopomofo",m.Bopomofo],["Brahmi",m.Brahmi],["Braille",m.Braille],["Buginese",m.Buginese],["Buhid",m.Buhid],["Canadian_Aboriginal",m.Canadian_Aboriginal],["Carian",m.Carian],["Caucasian_Albanian",m.Caucasian_Albanian],["Chakma",m.Chakma],["Cham",m.Cham],["Cherokee",m.Cherokee],["Chorasmian",m.Chorasmian],["Common",m.Common],["Coptic",m.Coptic],["Cuneiform",m.Cuneiform],["Cypriot",m.Cypriot],["Cypro_Minoan",m.Cypro_Minoan],["Cyrillic",m.Cyrillic],["Deseret",m.Deseret],["Devanagari",m.Devanagari],["Dives_Akuru",m.Dives_Akuru],["Dogra",m.Dogra],["Duployan",m.Duployan],["Egyptian_Hieroglyphs",m.Egyptian_Hieroglyphs],["Elbasan",m.Elbasan],["Elymaic",m.Elymaic],["Ethiopic",m.Ethiopic],["Georgian",m.Georgian],["Glagolitic",m.Glagolitic],["Gothic",m.Gothic],["Grantha",m.Grantha],["Greek",m.Greek],["Gujarati",m.Gujarati],["Gunjala_Gondi",m.Gunjala_Gondi],["Gurmukhi",m.Gurmukhi],["Han",m.Han],["Hangul",m.Hangul],["Hanifi_Rohingya",m.Hanifi_Rohingya],["Hanunoo",m.Hanunoo],["Hatran",m.Hatran],["Hebrew",m.Hebrew],["Hiragana",m.Hiragana],["Imperial_Aramaic",m.Imperial_Aramaic],["Inherited",m.Inherited],["Inscriptional_Pahlavi",m.Inscriptional_Pahlavi],["Inscriptional_Parthian",m.Inscriptional_Parthian],["Javanese",m.Javanese],["Kaithi",m.Kaithi],["Kannada",m.Kannada],["Katakana",m.Katakana],["Kawi",m.Kawi],["Kayah_Li",m.Kayah_Li],["Kharoshthi",m.Kharoshthi],["Khitan_Small_Script",m.Khitan_Small_Script],["Khmer",m.Khmer],["Khojki",m.Khojki],["Khudawadi",m.Khudawadi],["Lao",m.Lao],["Latin",m.Latin],["Lepcha",m.Lepcha],["Limbu",m.Limbu],["Linear_A",m.Linear_A],["Linear_B",m.Linear_B],["Lisu",m.Lisu],["Lycian",m.Lycian],["Lydian",m.Lydian],["Mahajani",m.Mahajani],["Makasar",m.Makasar],["Malayalam",m.Malayalam],["Mandaic",m.Mandaic],["Manichaean",m.Manichaean],["Marchen",m.Marchen],["Masaram_Gondi",m.Masaram_Gondi],["Medefaidrin",m.Medefaidrin],["Meetei_Mayek",m.Meetei_Mayek],["Mende_Kikakui",m.Mende_Kikakui],["Meroitic_Cursive",m.Meroitic_Cursive],["Meroitic_Hieroglyphs",m.Meroitic_Hieroglyphs],["Miao",m.Miao],["Modi",m.Modi],["Mongolian",m.Mongolian],["Mro",m.Mro],["Multani",m.Multani],["Myanmar",m.Myanmar],["Nabataean",m.Nabataean],["Nag_Mundari",m.Nag_Mundari],["Nandinagari",m.Nandinagari],["New_Tai_Lue",m.New_Tai_Lue],["Newa",m.Newa],["Nko",m.Nko],["Nushu",m.Nushu],["Nyiakeng_Puachue_Hmong",m.Nyiakeng_Puachue_Hmong],["Ogham",m.Ogham],["Ol_Chiki",m.Ol_Chiki],["Old_Hungarian",m.Old_Hungarian],["Old_Italic",m.Old_Italic],["Old_North_Arabian",m.Old_North_Arabian],["Old_Permic",m.Old_Permic],["Old_Persian",m.Old_Persian],["Old_Sogdian",m.Old_Sogdian],["Old_South_Arabian",m.Old_South_Arabian],["Old_Turkic",m.Old_Turkic],["Old_Uyghur",m.Old_Uyghur],["Oriya",m.Oriya],["Osage",m.Osage],["Osmanya",m.Osmanya],["Pahawh_Hmong",m.Pahawh_Hmong],["Palmyrene",m.Palmyrene],["Pau_Cin_Hau",m.Pau_Cin_Hau],["Phags_Pa",m.Phags_Pa],["Phoenician",m.Phoenician],["Psalter_Pahlavi",m.Psalter_Pahlavi],["Rejang",m.Rejang],["Runic",m.Runic],["Samaritan",m.Samaritan],["Saurashtra",m.Saurashtra],["Sharada",m.Sharada],["Shavian",m.Shavian],["Siddham",m.Siddham],["SignWriting",m.SignWriting],["Sinhala",m.Sinhala],["Sogdian",m.Sogdian],["Sora_Sompeng",m.Sora_Sompeng],["Soyombo",m.Soyombo],["Sundanese",m.Sundanese],["Syloti_Nagri",m.Syloti_Nagri],["Syriac",m.Syriac],["Tagalog",m.Tagalog],["Tagbanwa",m.Tagbanwa],["Tai_Le",m.Tai_Le],["Tai_Tham",m.Tai_Tham],["Tai_Viet",m.Tai_Viet],["Takri",m.Takri],["Tamil",m.Tamil],["Tangsa",m.Tangsa],["Tangut",m.Tangut],["Telugu",m.Telugu],["Thaana",m.Thaana],["Thai",m.Thai],["Tibetan",m.Tibetan],["Tifinagh",m.Tifinagh],["Tirhuta",m.Tirhuta],["Toto",m.Toto],["Ugaritic",m.Ugaritic],["Vai",m.Vai],["Vithkuqi",m.Vithkuqi],["Wancho",m.Wancho],["Warang_Citi",m.Warang_Citi],["Yezidi",m.Yezidi],["Yi",m.Yi],["Zanabazar_Square",m.Zanabazar_Square]])),A(m,"FOLD_CATEGORIES",new Map([["L",m.foldL],["Ll",m.foldLl],["Lt",m.foldLt],["Lu",m.foldLu],["M",m.foldM],["Mn",m.foldMn]])),A(m,"FOLD_SCRIPT",new Map([["Common",m.foldCommon],["Greek",m.foldGreek],["Inherited",m.foldInherited]]));let et=m;class te{static is32(e,t){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),a=e[i];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?s=i:r=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(et.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(et.L,e)||this.is(et.M,e)||this.is(et.N,e)||this.is(et.P,e)||this.is(et.S,e)}static simpleFold(e){if(et.CASE_ORBIT.has(e))return et.CASE_ORBIT.get(e);const t=k.toLowerCase(e);return t!==e?t:k.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return k.CODES.get("A")<=e&&e<=k.CODES.get("Z")&&(e|=32),k.CODES.get("A")<=t&&t<=k.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}A(te,"MAX_RUNE",1114111),A(te,"MAX_ASCII",127),A(te,"MAX_LATIN1",255),A(te,"MAX_BMP",65535),A(te,"MIN_FOLD",65),A(te,"MAX_FOLD",125251);class se{static emptyInts(){return[]}static isalnum(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")||k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")}static unhex(e){return k.CODES.get("0")<=e&&e<=k.CODES.get("9")?e-k.CODES.get("0"):k.CODES.get("a")<=e&&e<=k.CODES.get("f")?e-k.CODES.get("a")+10:k.CODES.get("A")<=e&&e<=k.CODES.get("F")?e-k.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(te.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case k.CODES.get('"'):t+='\\"';break;case k.CODES.get("\\"):t+="\\\\";break;case k.CODES.get("	"):t+="\\t";break;case k.CODES.get(`
`):t+="\\n";break;case k.CODES.get("\r"):t+="\\r";break;case k.CODES.get("\b"):t+="\\b";break;case k.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return k.CODES.get("a")<=e&&e<=k.CODES.get("z")||k.CODES.get("A")<=e&&e<=k.CODES.get("Z")||k.CODES.get("0")<=e&&e<=k.CODES.get("9")||e===k.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===k.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===k.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>te.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[r++],o=e[r++],c=e[r++],u=((i&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{let a=e[r++],o=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")}}}A(se,"METACHARACTERS","\\.+*?()|[]{}^$"),A(se,"EMPTY_BEGIN_LINE",1),A(se,"EMPTY_END_LINE",2),A(se,"EMPTY_BEGIN_TEXT",4),A(se,"EMPTY_END_TEXT",8),A(se,"EMPTY_WORD_BOUNDARY",16),A(se,"EMPTY_NO_WORD_BOUNDARY",32),A(se,"EMPTY_ALL",-1);const am=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)},vi=class vi{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===vi.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===vi.Encoding.UTF_16}};A(vi,"Encoding",am(["UTF_16","UTF_8"]));let rr=vi;class X1 extends rr{constructor(e=null){super(),this.bytes=e}getEncoding(){return rr.Encoding.UTF_8}asCharSequence(){return se.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class P9 extends rr{constructor(e=null){super(),this.charSequence=e}getEncoding(){return rr.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class no{static utf16(e){return new P9(e)}static utf8(e){return Array.isArray(e)?new X1(e):new X1(se.stringToUtf8ByteArray(e))}}class Po extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Ne extends Po{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class k9 extends Po{constructor(e){super(e),this.name="RE2JSCompileException"}}class un extends Po{constructor(e){super(e),this.name="RE2JSGroupException"}}class N9 extends Po{constructor(e){super(e),this.name="RE2JSFlagsException"}}class D9{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===k.CODES["\\"]||r===k.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof rr?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(no.utf8(t)):this.resetMatcherInput(no.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new un(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new un(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new un(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new un(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new un("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new un("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,z.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,z.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new un(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,z.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?se.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===k.CODES.get("\\")){r<i&&(t+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===k.CODES.get("$")){let a=e.codePointAt(i+1);if(k.CODES.get("0")<=a&&a<=k.CODES.get("9")){let o=a-k.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<k.CODES.get("0")||a>k.CODES.get("9")||o*10+a-k.CODES.get("0")>this.patternGroupCount));i++)o=o*10+a-k.CODES.get("0");if(o>this.patternGroupCount)throw new un(`n > number of groups: ${o}`);const c=this.group(o);c!==null&&(t+=c),r=i,i--;continue}else if(a===k.CODES.get("{")){r<i&&(t+=e.substring(r,i)),i++;let o=i+1;for(;o<e.length&&e.codePointAt(o)!==k.CODES.get("}")&&e.codePointAt(o)!==k.CODES.get(" ");)o++;if(o===e.length||e.codePointAt(o)!==k.CODES.get("}"))throw new un("named capture group is missing trailing '}'");const c=e.substring(i+1,o);t+=this.group(c),r=o+1}}}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalPerl(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===k.CODES.get("$")){let a=e.codePointAt(i+1);if(k.CODES.get("$")===a){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(k.CODES.get("&")===a){r<i&&(t+=e.substring(r,i));const o=this.group(0);o!==null?t+=o:t+="$&",i++,r=i+1;continue}else if(k.CODES.get("1")<=a&&a<=k.CODES.get("9")){let o=a-k.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<k.CODES.get("0")||a>k.CODES.get("9")||o*10+a-k.CODES.get("0")>this.patternGroupCount));i++)o=o*10+a-k.CODES.get("0");if(o>this.patternGroupCount){t+=`$${o}`,r=i,i--;continue}const c=this.group(o);c!==null&&(t+=c),r=i,i--;continue}else if(a===k.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let o=i+1;for(;o<e.length&&e.codePointAt(o)!==k.CODES.get(">")&&e.codePointAt(o)!==k.CODES.get(" ");)o++;if(o===e.length||e.codePointAt(o)!==k.CODES.get(">")){t+=e.substring(i-1,o+1),r=o+1;continue}const c=e.substring(i+1,o);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?t+=this.group(c):t+=`$<${c}>`,r=o+1}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}}class zn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class L9 extends zn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return zn.EOF();let t=this.bytes[e++]&255;return(t&128)===0?t<<3|1:(t&224)===192?(t=t&31,e>=this.end?zn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?zn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?zn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4))}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),t=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return se.emptyOpContext(t,r)}indexOf(e,t,r=0){let s=t.length;if(s===0)return-1;let i=e.length;for(let a=r;a<=i-s;a++)for(let o=0;o<s&&e[a+o]===t[o];o++)if(o===s-1)return a;return-1}}class O9 extends zn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|se.charCount(t)}else return zn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return se.emptyOpContext(t,r)}}class De{static fromUTF8(e,t=0,r=e.length){return new L9(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new O9(e,t,r)}}const Z=class Z{static isPseudoOp(e){return e>=Z.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===k.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new Z(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=Z.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=Z.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case Z.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case Z.Op.EMPTY_MATCH:e+="(?:)";break;case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:case Z.Op.REPEAT:{const t=this.subs[0];switch(t.op>Z.Op.CAPTURE||t.op===Z.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case Z.Op.STAR:e+="*";break;case Z.Op.PLUS:e+="+";break;case Z.Op.QUEST:e+="?";break;case Z.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&z.NON_GREEDY)!==0&&(e+="?");break}case Z.Op.CONCAT:{for(let t of this.subs)t.op===Z.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case Z.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case Z.Op.LITERAL:(this.flags&z.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=se.escapeRune(t);(this.flags&z.FOLD_CASE)!==0&&(e+=")");break;case Z.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case Z.Op.ANY_CHAR:e+="(?s:.)";break;case Z.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==Z.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case Z.Op.BEGIN_TEXT:e+="\\A";break;case Z.Op.END_TEXT:(this.flags&z.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case Z.Op.BEGIN_LINE:e+="^";break;case Z.Op.END_LINE:e+="$";break;case Z.Op.WORD_BOUNDARY:e+="\\b";break;case Z.Op.NO_WORD_BOUNDARY:e+="\\B";break;case Z.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===te.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=Z.quoteIfHyphen(r),e+=se.escapeRune(r),r!==s&&(e+="-",e+=Z.quoteIfHyphen(s),e+=se.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=Z.quoteIfHyphen(r),e+=se.escapeRune(r),r!==s&&(e+="-",e+=Z.quoteIfHyphen(s),e+=se.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===Z.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof Z)||this.op!==e.op)return!1;switch(this.op){case Z.Op.END_TEXT:{if((this.flags&z.WAS_DOLLAR)!==(e.flags&z.WAS_DOLLAR))return!1;break}case Z.Op.LITERAL:case Z.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case Z.Op.ALTERNATE:case Z.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case Z.Op.STAR:case Z.Op.PLUS:case Z.Op.QUEST:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case Z.Op.REPEAT:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case Z.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};A(Z,"Op",am(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let O=Z;const ve=class ve{static isRuneOp(e){return ve.RUNE<=e&&e<=ve.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=se.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return(this.arg&z.FOLD_CASE)!==0?te.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const s=t+((r-t)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;t=s+1}else r=s}return!1}toString(){switch(this.op){case ve.ALT:return`alt -> ${this.out}, ${this.arg}`;case ve.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case ve.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case ve.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case ve.MATCH:return"match";case ve.FAIL:return"fail";case ve.NOP:return`nop -> ${this.out}`;case ve.RUNE:return this.runes===null?"rune <null>":["rune ",ve.escapeRunes(this.runes),(this.arg&z.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case ve.RUNE1:return`rune1 ${ve.escapeRunes(this.runes)} -> ${this.out}`;case ve.RUNE_ANY:return`any -> ${this.out}`;case ve.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};A(ve,"ALT",1),A(ve,"ALT_MATCH",2),A(ve,"CAPTURE",3),A(ve,"EMPTY_WIDTH",4),A(ve,"FAIL",5),A(ve,"MATCH",6),A(ve,"NOP",7),A(ve,"RUNE",8),A(ve,"RUNE1",9),A(ve,"RUNE_ANY",10),A(ve,"RUNE_ANY_NOT_NL",11);let ie=ve;class V9{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new ie(e))}skipNop(e){let t=this.inst[e];for(;t.op===ie.NOP||t.op===ie.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!ie.isRuneOp(t.op)||t.runes.length!==1)return[t.op===ie.MATCH,e];for(;ie.isRuneOp(t.op)&&t.runes.length===1&&(t.arg&z.FOLD_CASE)===0;)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===ie.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case ie.EMPTY_WIDTH:e|=r.arg;break;case ie.FAIL:return-1;case ie.CAPTURE:case ie.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return(e&1)===0?t.out:t.arg}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];(e&1)===0?(e=r.out,r.out=t):(e=r.arg,r.arg=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return(r&1)===0?s.out=t:s.arg=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class va{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class li{static ANY_RUNE_NOT_NL(){return[0,k.CODES.get(`
`)-1,k.CODES.get(`
`)+1,te.MAX_RUNE]}static ANY_RUNE(){return[0,te.MAX_RUNE]}static compileRegexp(e){const t=new li,r=t.compile(e);return t.prog.patch(r.out,t.newInst(ie.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new V9,this.newInst(ie.FAIL)}newInst(e){return this.prog.addInst(e),new va(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(ie.NOP);return e.out=e.i<<1,e}fail(){return new va}cap(e){const t=this.newInst(ie.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new va(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(ie.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(ie.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(ie.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new va(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(ie.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(ie.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=z.FOLD_CASE,(e.length!==1||te.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=r.i<<1,(t&z.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?s.op=ie.RUNE1:e.length===2&&e[0]===0&&e[1]===te.MAX_RUNE?s.op=ie.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===k.CODES.get(`
`)-1&&e[2]===k.CODES.get(`
`)+1&&e[3]===te.MAX_RUNE&&(s.op=ie.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case O.Op.NO_MATCH:return this.fail();case O.Op.EMPTY_MATCH:return this.nop();case O.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case O.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case O.Op.ANY_CHAR_NOT_NL:return this.rune(li.ANY_RUNE_NOT_NL(),0);case O.Op.ANY_CHAR:return this.rune(li.ANY_RUNE(),0);case O.Op.BEGIN_LINE:return this.empty(se.EMPTY_BEGIN_LINE);case O.Op.END_LINE:return this.empty(se.EMPTY_END_LINE);case O.Op.BEGIN_TEXT:return this.empty(se.EMPTY_BEGIN_TEXT);case O.Op.END_TEXT:return this.empty(se.EMPTY_END_TEXT);case O.Op.WORD_BOUNDARY:return this.empty(se.EMPTY_WORD_BOUNDARY);case O.Op.NO_WORD_BOUNDARY:return this.empty(se.EMPTY_NO_WORD_BOUNDARY);case O.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case O.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case O.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case O.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case O.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}}case O.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}}default:throw new k9("regexp: unhandled case in compile")}}}class Bt{static simplify(e){if(e===null)return null;switch(e.op){case O.Op.CAPTURE:case O.Op.CONCAT:case O.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=Bt.simplify(s);t===e&&i!==s&&(t=O.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=i)}return t}case O.Op.STAR:case O.Op.PLUS:case O.Op.QUEST:{const t=Bt.simplify(e.subs[0]);return Bt.simplify1(e.op,e.flags,t,e)}case O.Op.REPEAT:{if(e.min===0&&e.max===0)return new O(O.Op.EMPTY_MATCH);const t=Bt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Bt.simplify1(O.Op.STAR,e.flags,t,null);if(e.min===1)return Bt.simplify1(O.Op.PLUS,e.flags,t,null);const s=new O(O.Op.CONCAT),i=[];for(let a=0;a<e.min-1;a++)i.push(t);return i.push(Bt.simplify1(O.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=Bt.simplify1(O.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const a=new O(O.Op.CONCAT);a.subs=[t,s],s=Bt.simplify1(O.Op.QUEST,e.flags,a,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new O(O.Op.CONCAT);return s.subs=r.slice(0),s}return new O(O.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){return r.op===O.Op.EMPTY_MATCH||e===r.op&&(t&z.NON_GREEDY)===(r.flags&z.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&z.NON_GREEDY)===(t&z.NON_GREEDY)&&r===s.subs[0]||(s=new O(e),s.flags=t,s.subs=[r]),s)}}class pe{constructor(e,t){this.sign=e,this.cls=t}}const J1=[48,57],Z1=[9,10,12,13,32,32],ed=[48,57,65,90,95,95,97,122],td=new Map([["\\d",new pe(1,J1)],["\\D",new pe(-1,J1)],["\\s",new pe(1,Z1)],["\\S",new pe(-1,Z1)],["\\w",new pe(1,ed)],["\\W",new pe(-1,ed)]]),nd=[48,57,65,90,97,122],rd=[65,90,97,122],sd=[0,127],id=[9,9,32,32],ad=[0,31,127,127],od=[48,57],ld=[33,126],cd=[97,122],ud=[32,126],hd=[33,47,58,64,91,96,123,126],dd=[9,13,32,32],pd=[65,90],fd=[48,57,65,90,95,95,97,122],md=[48,57,65,70,97,102],gd=new Map([["[:alnum:]",new pe(1,nd)],["[:^alnum:]",new pe(-1,nd)],["[:alpha:]",new pe(1,rd)],["[:^alpha:]",new pe(-1,rd)],["[:ascii:]",new pe(1,sd)],["[:^ascii:]",new pe(-1,sd)],["[:blank:]",new pe(1,id)],["[:^blank:]",new pe(-1,id)],["[:cntrl:]",new pe(1,ad)],["[:^cntrl:]",new pe(-1,ad)],["[:digit:]",new pe(1,od)],["[:^digit:]",new pe(-1,od)],["[:graph:]",new pe(1,ld)],["[:^graph:]",new pe(-1,ld)],["[:lower:]",new pe(1,cd)],["[:^lower:]",new pe(-1,cd)],["[:print:]",new pe(1,ud)],["[:^print:]",new pe(-1,ud)],["[:punct:]",new pe(1,hd)],["[:^punct:]",new pe(-1,hd)],["[:space:]",new pe(1,dd)],["[:^space:]",new pe(-1,dd)],["[:upper:]",new pe(1,pd)],["[:^upper:]",new pe(-1,pd)],["[:word:]",new pe(1,fd)],["[:^word:]",new pe(-1,fd)],["[:xdigit:]",new pe(1,md)],["[:^xdigit:]",new pe(-1,md)]]);class tt{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],a=e[s+1];i===a?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],a=e[s+1];let o=t,c=r;for(;o<=c;){for(;o<r&&tt.cmp(e,o,i,a)<0;)o+=2;for(;c>t&&tt.cmp(e,c,i,a)>0;)c-=2;if(o<=c){if(o!==c){let u=e[o];e[o]=e[c],e[c]=u,u=e[o+1],e[o+1]=e[c+1],e[c+1]=u}o+=2,c-=2}}t<c&&tt.qsortIntPair(e,t,c),o<r&&tt.qsortIntPair(e,o,r)}constructor(e=se.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;tt.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&z.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=te.MIN_FOLD&&t>=te.MAX_FOLD)return this.appendRange(e,t);if(t<te.MIN_FOLD||e>te.MAX_FOLD)return this.appendRange(e,t);e<te.MIN_FOLD&&(this.appendRange(e,te.MIN_FOLD-1),e=te.MIN_FOLD),t>te.MAX_FOLD&&(this.appendRange(te.MAX_FOLD+1,t),t=te.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=te.simpleFold(r);s!==r;s=te.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=te.MAX_RUNE&&this.appendRange(t,te.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],s=t[1],i=t[2];if(i===1){this.appendRange(r,s);continue}for(let a=r;a<=s;a+=i)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let r of e){const s=r[0],i=r[1],a=r[2];if(a===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let o=s;o<=i;o+=a)t<=o-1&&this.appendRange(t,o-1),t=o+1}return t<=te.MAX_RUNE&&this.appendRange(t,te.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=te.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=te.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new tt().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return tt.charClassToString(this.r,this.len)}}class ci{static of(e,t){return new ci(e,t)}constructor(e,t){this.first=e,this.second=t}}class M9{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=se.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const G=class G{static ANY_TABLE(){return[[0,te.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?ci.of(G.ANY_TABLE(),G.ANY_TABLE()):et.CATEGORIES.has(e)?ci.of(et.CATEGORIES.get(e),et.FOLD_CATEGORIES.get(e)):et.SCRIPTS.has(e)?ci.of(et.SCRIPTS.get(e),et.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<te.MIN_FOLD||e>te.MAX_FOLD)return e;let t=e;const r=e;for(e=te.simpleFold(e);e!==r;e=te.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===O.Op.EMPTY_MATCH)return null;if(e.op===O.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===O.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new O(O.Op.LITERAL);return r.flags=t,r.runes=se.stringToRunes(e),r}static parse(e,t){return new G(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=G.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=G.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new Ne(G.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&te.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==k.CODES.get("_")&&!se.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=k.CODES.get("0")&&e.peek()<=k.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===k.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===O.Op.LITERAL&&e.runes.length===1||e.op===O.Op.CHAR_CLASS||e.op===O.Op.ANY_CHAR_NOT_NL||e.op===O.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case O.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case O.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case O.Op.ANY_CHAR_NOT_NL:return t!==k.CODES.get(`
`);case O.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case O.Op.ANY_CHAR:break;case O.Op.ANY_CHAR_NOT_NL:G.matchRune(t,k.CODES.get(`
`))&&(e.op=O.Op.ANY_CHAR);break;case O.Op.CHAR_CLASS:t.op===O.Op.LITERAL?e.runes=new tt(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new tt(e.runes).appendClass(t.runes).toArray();break;case O.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=O.Op.CHAR_CLASS,e.runes=new tt().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ne(G.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case k.CODES.get("1"):case k.CODES.get("2"):case k.CODES.get("3"):case k.CODES.get("4"):case k.CODES.get("5"):case k.CODES.get("6"):case k.CODES.get("7"):if(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"))break;case k.CODES.get("0"):{let s=r-k.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<k.CODES.get("0")||e.peek()>k.CODES.get("7"));i++)s=s*8+e.peek()-k.CODES.get("0"),e.skip(1);return s}case k.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===k.CODES.get("{")){let a=0,o=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===k.CODES.get("}"))break;const c=se.unhex(r);if(c<0||(o=o*16+c,o>te.MAX_RUNE))break e;a++}if(a===0)break e;return o}const s=se.unhex(r);if(!e.more())break;r=e.pop();const i=se.unhex(r);if(s<0||i<0)break;return s*16+i}case k.CODES.get("a"):return k.CODES.get("\x07");case k.CODES.get("f"):return k.CODES.get("\f");case k.CODES.get("n"):return k.CODES.get(`
`);case k.CODES.get("r"):return k.CODES.get("\r");case k.CODES.get("t"):return k.CODES.get("	");case k.CODES.get("v"):return k.CODES.get("\v");default:if(!se.isalnum(r))return r;break}throw new Ne(G.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ne(G.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?G.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new O(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!O.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===O.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=O.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===O.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&te.simpleFold(e.runes[0])===e.runes[2]&&te.simpleFold(e.runes[2])===e.runes[0]||e.op===O.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&te.simpleFold(e.runes[0])===e.runes[1]&&te.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|z.FOLD_CASE))return null;e.op=O.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|z.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==O.Op.LITERAL||i.op!==O.Op.LITERAL||(s.flags&z.FOLD_CASE)!==(i.flags&z.FOLD_CASE)?!1:(i.runes=G.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(O.Op.LITERAL);return r.flags=t,(t&z.FOLD_CASE)!==0&&(e=G.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,a){let o=this.flags;if((o&z.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),o^=z.NON_GREEDY),a!==-1))throw new Ne(G.ERR_INVALID_REPEAT_OP,i.from(a));const c=this.stack.length;if(c===0)throw new Ne(G.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const u=this.stack[c-1];if(O.isPseudoOp(u.op))throw new Ne(G.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const d=this.newRegexp(e);d.min=t,d.max=r,d.flags=o,d.subs=[u],this.stack[c-1]=d}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(O.Op.EMPTY_MATCH)):this.push(this.collapse(e,O.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(O.Op.NO_MATCH)):this.push(this.collapse(e,O.Op.ALTERNATE))}cleanAlt(e){e.op===O.Op.CHAR_CLASS&&(e.runes=new tt(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===te.MAX_RUNE?(e.runes=null,e.op=O.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===k.CODES.get(`
`)-1&&e.runes[2]===k.CODES.get(`
`)+1&&e.runes[3]===te.MAX_RUNE&&(e.runes=null,e.op=O.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let o of e)r+=o.op===t?o.subs.length:1;let s=new Array(r).fill(null),i=0;for(let o of e)o.op===t?(s.splice(i,o.subs.length,...o.subs),i+=o.subs.length,this.reuse(o)):s[i++]=o;let a=this.newRegexp(t);if(a.subs=s,t===O.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const o=a;a=a.subs[0],this.reuse(o)}return a}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,a=0,o=0,c=0;for(let d=0;d<=r;d++){let p=null,_=0,w=0;if(d<r){let S=e[t+d];if(S.op===O.Op.CONCAT&&S.subs.length>0&&(S=S.subs[0]),S.op===O.Op.LITERAL&&(p=S.runes,_=S.runes.length,w=S.flags&z.FOLD_CASE),w===o){let P=0;for(;P<a&&P<_&&i[P]===p[P];)P++;if(P>0){a=P;continue}}}if(d!==c)if(d===c+1)e[s++]=e[t+c];else{const S=this.newRegexp(O.Op.LITERAL);S.flags=o,S.runes=i.slice(0,a);for(let U=c;U<d;U++)e[t+U]=this.removeLeadingString(e[t+U],a);const P=this.collapse(e.slice(t+c,t+d),O.Op.ALTERNATE),D=this.newRegexp(O.Op.CONCAT);D.subs=[S,P],e[s++]=D}c=d,i=p,a=_,o=w}r=s,t=0,c=0,s=0;let u=null;for(let d=0;d<=r;d++){let p=null;if(!(d<r&&(p=G.leadingRegexp(e[t+d]),u!==null&&u.equals(p)&&(G.isCharClass(u)||u.op===O.Op.REPEAT&&u.min===u.max&&G.isCharClass(u.subs[0]))))){if(d!==c)if(d===c+1)e[s++]=e[t+c];else{const _=u;for(let P=c;P<d;P++){const D=P!==c;e[t+P]=this.removeLeadingRegexp(e[t+P],D)}const w=this.collapse(e.slice(t+c,t+d),O.Op.ALTERNATE),S=this.newRegexp(O.Op.CONCAT);S.subs=[_,w],e[s++]=S}c=d,u=p}}r=s,t=0,c=0,s=0;for(let d=0;d<=r;d++)if(!(d<r&&G.isCharClass(e[t+d]))){if(d!==c)if(d===c+1)e[s++]=e[t+c];else{let p=c;for(let w=c+1;w<d;w++){const S=e[t+p],P=e[t+w];(S.op<P.op||S.op===P.op&&(S.runes!==null?S.runes.length:0)<(P.runes!==null?P.runes.length:0))&&(p=w)}const _=e[t+c];e[t+c]=e[t+p],e[t+p]=_;for(let w=c+1;w<d;w++)G.mergeCharClass(e[t+c],e[t+w]),this.reuse(e[t+w]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}d<r&&(e[s++]=e[t+d]),c=d+1}r=s,t=0,c=0,s=0;for(let d=0;d<r;++d)d+1<r&&e[t+d].op===O.Op.EMPTY_MATCH&&e[t+d+1].op===O.Op.EMPTY_MATCH||(e[s++]=e[t+d]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===O.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===O.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=O.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===O.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=O.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===O.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=O.Op.EMPTY_MATCH,e.subs=O.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(O.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&z.LITERAL)!==0)return G.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new M9(this.wholeRegexp);for(;s.more();){let a=-1;e:switch(s.peek()){case k.CODES.get("("):if((this.flags&z.PERL_X)!==0&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(O.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case k.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case k.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case k.CODES.get("^"):(this.flags&z.ONE_LINE)!==0?this.op(O.Op.BEGIN_TEXT):this.op(O.Op.BEGIN_LINE),s.skip(1);break;case k.CODES.get("$"):(this.flags&z.ONE_LINE)!==0?this.op(O.Op.END_TEXT).flags|=z.WAS_DOLLAR:this.op(O.Op.END_LINE),s.skip(1);break;case k.CODES.get("."):(this.flags&z.DOT_NL)!==0?this.op(O.Op.ANY_CHAR):this.op(O.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case k.CODES.get("["):this.parseClass(s);break;case k.CODES.get("*"):case k.CODES.get("+"):case k.CODES.get("?"):{a=s.pos();let o=null;switch(s.pop()){case k.CODES.get("*"):o=O.Op.STAR;break;case k.CODES.get("+"):o=O.Op.PLUS;break;case k.CODES.get("?"):o=O.Op.QUEST;break}this.repeat(o,t,r,a,s,e);break}case k.CODES.get("{"):{a=s.pos();const o=G.parseRepeat(s);if(o<0){s.rewindTo(a),this.literal(s.pop());break}t=o>>16,r=(o&te.MAX_BMP)<<16>>16,this.repeat(O.Op.REPEAT,t,r,a,s,e);break}case k.CODES.get("\\"):{const o=s.pos();if(s.skip(1),(this.flags&z.PERL_X)!==0&&s.more())switch(s.pop()){case k.CODES.get("A"):this.op(O.Op.BEGIN_TEXT);break e;case k.CODES.get("b"):this.op(O.Op.WORD_BOUNDARY);break e;case k.CODES.get("B"):this.op(O.Op.NO_WORD_BOUNDARY);break e;case k.CODES.get("C"):throw new Ne(G.ERR_INVALID_ESCAPE,"\\C");case k.CODES.get("Q"):{let p=s.rest();const _=p.indexOf("\\E");_>=0&&(p=p.substring(0,_)),s.skipString(p),s.skipString("\\E");let w=0;for(;w<p.length;){const S=p.codePointAt(w);this.literal(S),w+=se.charCount(S)}break e}case k.CODES.get("z"):this.op(O.Op.END_TEXT);break e;default:s.rewindTo(o);break}const c=this.newRegexp(O.Op.CHAR_CLASS);if(c.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const d=new tt;if(this.parseUnicodeClass(s,d)){c.runes=d.toArray(),this.push(c);break e}}const u=new tt;if(this.parsePerlClassEscape(s,u)){c.runes=u.toArray(),this.push(c);break e}s.rewindTo(o),this.reuse(c),this.literal(G.parseEscape(s));break}default:this.literal(s.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ne(G.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const o=r.charAt(2)==="P"?4:3,c=r.indexOf(">");if(c<0)throw new Ne(G.ERR_INVALID_NAMED_CAPTURE,r);const u=r.substring(o,c);if(e.skipString(u),e.skip(o+1),!G.isValidCaptureName(u))throw new Ne(G.ERR_INVALID_NAMED_CAPTURE,r.substring(0,c+1));const d=this.op(O.Op.LEFT_PAREN);if(d.cap=++this.numCap,this.namedGroups[u])throw new Ne(G.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,d.name=u;return}e.skip(2);let s=this.flags,i=1,a=!1;e:for(;e.more();){const o=e.pop();switch(o){case k.CODES.get("i"):s|=z.FOLD_CASE,a=!0;break;case k.CODES.get("m"):s&=-17,a=!0;break;case k.CODES.get("s"):s|=z.DOT_NL,a=!0;break;case k.CODES.get("U"):s|=z.NON_GREEDY,a=!0;break;case k.CODES.get("-"):if(i<0)break e;i=-1,s=~s,a=!1;break;case k.CODES.get(":"):case k.CODES.get(")"):if(i<0){if(!a)break e;s=~s}o===k.CODES.get(":")&&this.op(O.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Ne(G.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(O.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===O.Op.VERTICAL_BAR&&G.isCharClass(this.stack[e-1])&&G.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return G.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===O.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ne(G.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==O.Op.LEFT_PAREN)throw new Ne(G.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=O.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if((this.flags&z.PERL_X)===0||!e.more()||e.pop()!==k.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=td.has(s)?td.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&z.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const a=gd.has(i)?gd.get(i):null;if(a===null)throw new Ne(G.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(a,(this.flags&z.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if((this.flags&z.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===k.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new Ne(G.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let a;if(i!==k.CODES.get("{"))a=se.runeToString(i);else{const d=e.rest(),p=d.indexOf("}");if(p<0)throw e.rewindTo(r),new Ne(G.ERR_INVALID_CHAR_RANGE,e.rest());a=d.substring(0,p),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===k.CODES.get("^")&&(s=0-s,a=a.substring(1));const o=G.unicodeTable(a);if(o===null)throw new Ne(G.ERR_INVALID_CHAR_RANGE,e.from(r));const c=o.first,u=o.second;if((this.flags&z.FOLD_CASE)===0||u===null)t.appendTableWithSign(c,s);else{const d=new tt().appendTable(c).appendTable(u).cleanClass().toArray();t.appendClassWithSign(d,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(O.Op.CHAR_CLASS);r.flags=this.flags;const s=new tt;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&z.CLASS_NL)===0&&s.appendRange(k.CODES.get(`
`),k.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==k.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&(this.flags&z.PERL_X)===0&&!a){const d=e.rest();if(d==="-"||!d.startsWith("-]"))throw e.rewindTo(t),new Ne(G.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const o=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(o)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(o);const c=G.parseClassChar(e,t);let u=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=G.parseClassChar(e,t),u<c)throw new Ne(G.ERR_INVALID_CHAR_RANGE,e.from(o))}(this.flags&z.FOLD_CASE)===0?s.appendRange(c,u):s.appendFoldedRange(c,u)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};A(G,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),A(G,"ERR_INVALID_CHAR_RANGE","invalid character class range"),A(G,"ERR_INVALID_ESCAPE","invalid escape sequence"),A(G,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),A(G,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),A(G,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),A(G,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),A(G,"ERR_MISSING_BRACKET","missing closing ]"),A(G,"ERR_MISSING_PAREN","missing closing )"),A(G,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),A(G,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),A(G,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let cc=G;class U9{constructor(){this.inst=null,this.cap=[]}}class yd{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class cs{static fromRE2(e){const t=new cs;return t.prog=e.prog,t.re2=e,t.q0=new yd(t.prog.numInst()),t.q1=new yd(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new cs;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?se.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new U9,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=t;i<e.size;i++){const a=e.denseThreads[i];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const s=this.re2.cond;if(s===se.EMPTY_ALL||(r===z.ANCHOR_START||r===z.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,a=this.q1,o=e.step(t),c=o>>3,u=o&7,d=-1,p=0;o!==zn.EOF()&&(o=e.step(t+u),d=o>>3,p=o&7);let _;for(t===0?_=se.emptyOpContext(-1,c):_=e.context(t);;){if(i.isEmpty()){if((s&se.EMPTY_BEGIN_TEXT)!==0&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&d!==this.re2.prefixRune&&e.canCheckPrefix()){const P=e.index(this.re2,t);if(P<0)break;t+=P,o=e.step(t),c=o>>3,u=o&7,o=e.step(t+u),d=o>>3,p=o&7}}!this.matched&&(t===0||r===z.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,_,null));const w=t+u;if(_=e.context(w),this.step(i,a,t,w,c,_,r,t===e.endPos()),u===0||this.ncap===0&&this.matched)break;t+=u,c=d,u=p,c!==-1&&(o=e.step(t+u),d=o>>3,p=o&7);const S=i;i=a,a=S}return this.freeQueue(a),this.matched}step(e,t,r,s,i,a,o,c){const u=this.re2.longest;for(let d=0;d<e.size;d++){let p=e.denseThreads[d];if(p===null)continue;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<p.cap[0]){this.freeThread(p);continue}const _=p.inst;let w=!1;switch(_.op){case ie.MATCH:if(o===z.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!u||!this.matched||this.matchcap[1]<r)&&(p.cap[1]=r,this.matchcap=p.cap.slice(0,this.ncap)),u||this.freeQueue(e,d+1),this.matched=!0;break;case ie.RUNE:w=_.matchRune(i);break;case ie.RUNE1:w=i===_.runes[0];break;case ie.RUNE_ANY:w=!0;break;case ie.RUNE_ANY_NOT_NL:w=i!==k.CODES.get(`
`);break;default:throw new Error("bad inst")}w&&(p=this.add(t,_.out,s,p.cap,a,p)),p!==null&&(this.freeThread(p),e.denseThreads[d]=null)}e.clear()}add(e,t,r,s,i,a){if(t===0||e.contains(t))return a;const o=e.add(t),c=this.prog.inst[t];switch(c.op){case ie.FAIL:break;case ie.ALT:case ie.ALT_MATCH:a=this.add(e,c.out,r,s,i,a),a=this.add(e,c.arg,r,s,i,a);break;case ie.EMPTY_WIDTH:(c.arg&~i)===0&&(a=this.add(e,c.out,r,s,i,a));break;case ie.NOP:a=this.add(e,c.out,r,s,i,a);break;case ie.CAPTURE:if(c.arg<this.ncap){const u=s[c.arg];s[c.arg]=r,this.add(e,c.out,r,s,i,null),s[c.arg]=u}else a=this.add(e,c.out,r,s,i,a);break;case ie.MATCH:case ie.RUNE:case ie.RUNE1:case ie.RUNE_ANY:case ie.RUNE_ANY_NOT_NL:a===null?a=this.alloc(c):a.inst=c,this.ncap>0&&a.cap!==s&&(a.cap=s.slice(0,this.ncap)),e.denseThreads[o]=a,a=null;break;default:throw new Error("unhandled")}return a}}class B9{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Bn{static initTest(e){const t=Bn.compile(e),r=new Bn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Bn.compileImpl(e,z.PERL,!1)}static compilePOSIX(e){return Bn.compileImpl(e,z.POSIX,!0)}static compileImpl(e,t,r){let s=cc.parse(e,t);const i=s.maxCap();s=Bt.simplify(s);const a=li.compileRegexp(s),o=new Bn(e,a,i,r),[c,u]=a.prefix();return o.prefixComplete=c,o.prefix=u,o.prefixUTF8=se.stringToUtf8ByteArray(o.prefix),o.prefix.length>0&&(o.prefixRune=o.prefix.codePointAt(0)),o.namedGroups=s.namedGroups,o}static match(e,t){return Bn.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new B9}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=cs.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,s){let i=this.get(),a=!1;i?i.next!==null&&(i=cs.fromMachine(i),a=!0):(i=cs.fromRE2(this),a=!0),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i,a),o}match(e){return this.doExecute(De.fromUTF16(e),0,z.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof rr||(e=no.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const a=e.isUTF16Encoding()?De.fromUTF16(e.asCharSequence(),0,r):De.fromUTF8(e.asBytes(),0,r),o=this.doExecute(a,t,s,2*i);return o===null?[!1,null]:[!0,o]}matchUTF8(e){return this.doExecute(De.fromUTF8(e),0,z.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,a="";const o=De.fromUTF16(e);let c=0;for(;i<=e.length;){const u=this.doExecute(o,i,z.UNANCHORED,2);if(u===null||u.length===0)break;a+=e.substring(s,u[0]),(u[1]>s||u[0]===0)&&(a+=t(e.substring(u[0],u[1])),c++),s=u[1];const d=o.step(i)&7;if(i+d>u[1]?i+=d:i+1>u[1]?i++:i=u[1],c>=r)break}return a+=e.substring(s),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let a=0,o=0,c=-1;for(;o<t&&a<=i;){const u=this.doExecute(e,a,z.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let d=!0;if(u[1]===a){u[0]===c&&(d=!1);const p=e.step(a);p<0?a=i+1:a+=p&7}else a=u[1];c=u[1],d&&(s.push(r(this.pad(u))),o++)}return s}findUTF8(e){const t=this.doExecute(De.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(De.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(De.fromUTF16(e),0,z.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(De.fromUTF16(e),0,z.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(De.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(De.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(De.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(De.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(De.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(De.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(De.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(De.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(De.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.slice(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(De.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(De.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.substring(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(De.fromUTF16(e),t);return r.length===0?null:r}}const ct=class ct{static quote(e){return se.quoteMeta(e)}static compile(e,t=0){let r=e;if((t&ct.CASE_INSENSITIVE)!==0&&(r=`(?i)${r}`),(t&ct.DOTALL)!==0&&(r=`(?s)${r}`),(t&ct.MULTILINE)!==0&&(r=`(?m)${r}`),(t&-32)!==0)throw new N9("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=z.PERL;(t&ct.DISABLE_UNICODE_GROUPS)!==0&&(s&=-129);const i=new ct(e,t);return i.re2Input=Bn.compileImpl(r,s,(t&ct.LONGEST_MATCH)!==0),i}static matches(e,t){return ct.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new ct(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=no.utf8(e)),new D9(this,e)}split(e,t=0){const r=this.matcher(e),s=[];let i=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(t>0&&s.length===t-1)break;if(a===r.start()){if(t===0){i+=1,a=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.start())),a=r.end()}if(t===0&&a!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.inputLength()))}return(t!==0||s.length===0)&&s.push(r.substring(a,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};A(ct,"CASE_INSENSITIVE",1),A(ct,"DOTALL",2),A(ct,"MULTILINE",4),A(ct,"DISABLE_UNICODE_GROUPS",8),A(ct,"LONGEST_MATCH",16);let wi=ct;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs="12.15.0";function F9(n){bs=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new wo("@firebase/firestore");function Jr(){return Lr.logLevel}function j(n,...e){if(Lr.logLevel<=he.DEBUG){const t=e.map(Qc);Lr.debug(`Firestore (${bs}): ${n}`,...t)}}function Sn(n,...e){if(Lr.logLevel<=he.ERROR){const t=e.map(Qc);Lr.error(`Firestore (${bs}): ${n}`,...t)}}function zt(n,...e){if(Lr.logLevel<=he.WARN){const t=e.map(Qc);Lr.warn(`Firestore (${bs}): ${n}`,...t)}}function Qc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,om(n,r,t)}function om(n,e,t){let r=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Sn(r),new Error(r)}function W(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||om(e,s,r)}function re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(nt.UNAUTHENTICATED)))}shutdown(){}}class $9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class H9{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new bn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new bn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},o=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>o(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?o(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new bn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new lm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new nt(e)}}class j9{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class z9{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new j9(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable((()=>t(nt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class vd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W9{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new vd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new vd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G9(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=G9(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function uc(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Fl(s)===Fl(i)?ue(s,i):Fl(s)?1:-1}return ue(n.length,e.length)}const K9=55296,Q9=57343;function Fl(n){const e=n.charCodeAt(0);return e>=K9&&e<=Q9}function ps(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="__name__";class Qt{constructor(e,t,r){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Y(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Qt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=Qt.isNumericId(e),s=Qt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Qt.extractNumericId(e).compare(Qt.extractNumericId(t)):uc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Yn.fromString(e.substring(4,e.length-2))}}class ye extends Qt{construct(e,t,r){return new ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ye(t)}static emptyPath(){return new ye([])}}const Y9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Qt{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return Y9.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yt}static keyField(){return new $e([Yt])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ye.fromString(e))}static fromName(e){return new K(ye.fromString(e).popFirst(5))}static empty(){return new K(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n,e,t){if(!t)throw new H(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function X9(n,e,t,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function _d(n){if(!K.isDocumentKey(n))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ad(n){if(K.isDocumentKey(n))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ko(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Y(12329,{type:typeof n})}function $t(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ko(n);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function Gi(n,e){if(!Wi(n))throw new H(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new H(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=-62135596800,Ed=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ed);return new be(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<bd)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ed}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gi(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Ve("string",be._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new be(0,0))}static max(){return new ne(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=-1;function J9(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new be(t+1,0):new be(t,r));return new sr(s,K.empty(),e)}function Z9(n){return new sr(n.readTime,n.key,Ii)}class sr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new sr(ne.min(),K.empty(),Ii)}static max(){return new sr(ne.max(),K.empty(),Ii)}}function ey(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ny{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==ty)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,r)=>{t(e)}))}static reject(e){return new M(((t,r)=>{r(e)}))}static waitFor(e){return new M(((t,r)=>{let s=0,i=0,a=!1;e.forEach((o=>{++s,o.next((()=>{++i,a&&i===s&&t()}),(c=>r(c)))})),a=!0,i===s&&t()}))}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next((s=>s?M.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new M(((r,s)=>{const i=e.length,a=new Array(i);let o=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next((d=>{a[u]=d,++o,o===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new M(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function ry(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ws(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}No.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=-1;function Do(n){return n==null}function Ti(n){return n===0&&1/n==-1/0}function sy(n){return typeof n=="number"&&Number.isInteger(n)&&!Ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function iy(n){return typeof n=="string"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="";function ay(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wd(e)),e=oy(n.get(t),e);return wd(e)}function oy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case um:t+="";break;default:t+=i}}return t}function wd(n){return n+um+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t){this.comparator=e,this.root=t||Ye.EMPTY}insert(e,t){return new Ie(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ye.RED,this.left=s??Ye.EMPTY,this.right=i??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(e){return new Id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Me(this.comparator);return t.data=e,t}}class Id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new qt([])}unionWith(e){let t=new Me($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ly(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function hm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dm("Invalid base64 string: "+i):i}})(e);return new Ue(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const cy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(n){if(W(!!n,39018),typeof n=="string"){let e=0;const t=cy.exec(n);if(W(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ar(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="server_timestamp",fm="__type__",mm="__previous_value__",gm="__local_write_time__";function Lo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[fm])==null?void 0:r.stringValue)===pm}function Ki(n){const e=n.mapValue.fields[mm];return Lo(e)?Ki(e):e}function fs(n){const e=ir(n.mapValue.fields[gm].timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r,s,i,a,o,c,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=p}}const so="(default)";class Si{constructor(e,t){this.projectId=e,this.database=t||so}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database===so}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}function hy(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="__type__",dy="__max__",Aa={mapValue:{}},vm="__vector__",Ci="value",ms={nullValue:"NULL_VALUE"},_t={booleanValue:!0},Ge={booleanValue:!1};function Be(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lo(n)?4:py(n)?9007199254740991:io(n)?10:11:Y(28295,{value:n})}function Mt(n,e,t){if(n===e)return!0;const r=Be(n);if(r!==Be(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fs(n).isEqual(fs(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=ir(i.timestampValue),c=ir(a.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return ar(i.bytesValue).isEqual(ar(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return Se(i.geoPointValue.latitude)===Se(a.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a,o){if("integerValue"in i&&"integerValue"in a)return Se(i.integerValue)===Se(a.integerValue);let c,u;if("doubleValue"in i&&"doubleValue"in a)c=Se(i.doubleValue),u=Se(a.doubleValue);else{if(!(o!=null&&o.Ee))return!1;c=Se(i.integerValue??i.doubleValue),u=Se(a.integerValue??a.doubleValue)}return c===u?!!(o!=null&&o.he)||Ti(c)===Ti(u):!!(o===void 0||o.Te)&&isNaN(c)&&isNaN(u)})(n,e,t);case 9:return ps(n.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>Mt(s,i,t)));case 10:case 11:return(function(i,a,o){const c=i.mapValue.fields||{},u=a.mapValue.fields||{};if(ro(c)!==ro(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!Mt(c[d],u[d],o)))return!1;return!0})(n,e,t);default:return Y(52216,{left:n})}}function Ri(n,e){return(n.values||[]).find((t=>Mt(t,e)))!==void 0}function At(n,e){if(n===e)return 0;const t=Be(n),r=Be(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const o=Se(i.integerValue||i.doubleValue),c=Se(a.integerValue||a.doubleValue);return o<c?-1:o>c?1:o===c?0:isNaN(o)?isNaN(c)?0:-1:1})(n,e);case 3:return Td(n.timestampValue,e.timestampValue);case 4:return Td(fs(n),fs(e));case 5:return uc(n.stringValue,e.stringValue);case 6:return(function(i,a){const o=ar(i),c=ar(a);return o.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const o=i.split("/"),c=a.split("/");for(let u=0;u<o.length&&u<c.length;u++){const d=ue(o[u],c[u]);if(d!==0)return d}return ue(o.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const o=ue(Se(i.latitude),Se(a.latitude));return o!==0?o:ue(Se(i.longitude),Se(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Sd(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var _,w,S,P;const o=i.fields||{},c=a.fields||{},u=(_=o[Ci])==null?void 0:_.arrayValue,d=(w=c[Ci])==null?void 0:w.arrayValue,p=ue(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:Sd(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Aa.mapValue&&a===Aa.mapValue)return 0;if(i===Aa.mapValue)return 1;if(a===Aa.mapValue)return-1;const o=i.fields||{},c=Object.keys(o),u=a.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=uc(c[p],d[p]);if(_!==0)return _;const w=At(o[c[p]],u[d[p]]);if(w!==0)return w}return ue(c.length,d.length)})(n.mapValue,e.mapValue);default:throw Y(23264,{Pe:t})}}function Td(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=ir(n),r=ir(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Sd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=At(t[s],r[s]);if(i!==void 0&&i!==0)return i}return ue(t.length,r.length)}function gs(n){return hc(n)}function hc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=ir(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ar(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=hc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${hc(t.fields[a])}`;return s+"}"})(n.mapValue):Y(61005,{value:n})}function Na(n){switch(Be(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ki(n);return e?16+Na(e):16;case 5:return 2*n.stringValue.length;case 6:return ar(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Na(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return $r(r.fields,((i,a)=>{s+=i.length+Na(a)})),s})(n.mapValue);default:throw Y(13486,{value:n})}}function Cd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xt(n){return!!n&&"integerValue"in n}function wr(n){return!!n&&"doubleValue"in n}function or(n){return Xt(n)||wr(n)}function ys(n){return!!n&&"arrayValue"in n}function xt(n){return!!n&&"nullValue"in n}function bt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Tr(n){return!!n&&"mapValue"in n}function io(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ym])==null?void 0:r.stringValue)===vm}function dc(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ci])==null?void 0:t.arrayValue}function ui(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return $r(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ui(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ui(n.arrayValue.values[t]);return e}return{...n}}function py(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Tr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(t)}setAll(e){let t=$e.emptyPath(),r={},s=[];e.forEach(((a,o)=>{if(!t.isImmediateParentOf(o)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=ui(a):s.push(o.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Tr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){$r(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Rt(ui(this.value))}}function _m(n){const e=[];return $r(n.fields,((t,r)=>{const s=new $e([t]);if(Tr(r)){const i=_m(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ti(e)?"-0":e}}function Jc(n){return{integerValue:""+n}}function Zc(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||sy(e)?Jc(e):Oo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function fy(n,e,t){return n instanceof xi?(function(s,i){const a={fields:{[fm]:{stringValue:pm},[gm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lo(i)&&(i=Ki(i)),i&&(a.fields[mm]=i),{mapValue:a}})(t,e):n instanceof Pi?bm(n,e):n instanceof ki?Em(n,e):n instanceof Ni?(function(s,i){const a=Am(s,i),o=lo(a)+lo(s.Re);return Xt(a)&&Xt(s.Re)?Jc(o):Oo(s.serializer,o)})(n,e):n instanceof ao?(function(s,i){return Rd(s,i,Math.min)})(n,e):n instanceof oo?(function(s,i){return Rd(s,i,Math.max)})(n,e):void 0}function my(n,e,t){return n instanceof Pi?bm(n,e):n instanceof ki?Em(n,e):t}function Am(n,e){return n instanceof Ni?or(e)?e:{integerValue:0}:null}class xi extends Vo{}class Pi extends Vo{constructor(e){super(),this.elements=e}}function bm(n,e){const t=wm(e);for(const r of n.elements)t.some((s=>Mt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ki extends Vo{constructor(e){super(),this.elements=e}}function Em(n,e){let t=wm(e);for(const r of n.elements)t=t.filter((s=>!Mt(s,r)));return{arrayValue:{values:t}}}class eu extends Vo{constructor(e,t){super(),this.serializer=e,this.Re=t}}class Ni extends eu{}class ao extends eu{}class oo extends eu{}function Rd(n,e,t){if(!or(e))return n.Re;const r=t(lo(e),lo(n.Re));return Xt(e)&&Xt(n.Re)?Jc(r):Oo(n.serializer,r)}function lo(n){return Se(n.integerValue||n.doubleValue)}function wm(n){return ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.field=e,this.transform=t}}function yy(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Pi&&s instanceof Pi||r instanceof ki&&s instanceof ki?ps(r.elements,s.elements,Mt):r instanceof Ni&&s instanceof Ni||r instanceof ao&&s instanceof ao||r instanceof oo&&s instanceof oo?Mt(r.Re,s.Re):r instanceof xi&&s instanceof xi})(n.transform,e.transform)}class vy{constructor(e,t){this.version=e,this.transformResults=t}}class tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Mo{}function Im(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sm(n.key,tn.none()):new Qi(n.key,n.data,tn.none());{const t=n.data,r=Rt.empty();let s=new Me($e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Hr(n.key,r,new qt(s.toArray()),tn.none())}}function _y(n,e,t){n instanceof Qi?(function(s,i,a){const o=s.value.clone(),c=Pd(s.fieldTransforms,i,a.transformResults);o.setAll(c),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()})(n,e,t):n instanceof Hr?(function(s,i,a){if(!Da(s.precondition,i))return void i.convertToUnknownDocument(a.version);const o=Pd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Tm(s)),c.setAll(o),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function hi(n,e,t,r){return n instanceof Qi?(function(i,a,o,c){if(!Da(i.precondition,a))return o;const u=i.value.clone(),d=kd(i.fieldTransforms,c,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof Hr?(function(i,a,o,c){if(!Da(i.precondition,a))return o;const u=kd(i.fieldTransforms,c,a),d=a.data;return d.setAll(Tm(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,o){return Da(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o})(n,e,t)}function Ay(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Am(r.transform,s||null);i!=null&&(t===null&&(t=Rt.empty()),t.set(r.field,i))}return t||null}function xd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,((i,a)=>yy(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qi extends Mo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Hr extends Mo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Pd(n,e,t){const r=new Map;W(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,o=e.data.field(i.field);r.set(i.field,my(a,o,t[s]))}return r}function kd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,fy(i,a,e))}return r}class Sm extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class by extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t){this.position=e,this.inclusive=t}}function Nd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(a.referenceValue),t.key):r=At(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{}class Oe extends Cm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wy(e,t,r):t==="array-contains"?new Sy(e,r):t==="in"?new Cy(e,r):t==="not-in"?new Ry(e,r):t==="array-contains-any"?new xy(e,r):new Oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Iy(e,r):new Ty(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(At(t,this.value)):t!==null&&Be(this.value)===Be(t)&&this.matchesComparison(At(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Cm{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Wt(e,t)}matches(e){return Rm(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function Rm(n){return n.op==="and"}function xm(n){return Ey(n)&&Rm(n)}function Ey(n){for(const e of n.filters)if(e instanceof Wt)return!1;return!0}function pc(n){if(n instanceof Oe)return n.field.canonicalString()+n.op.toString()+gs(n.value);if(xm(n))return n.filters.map((e=>pc(e))).join(",");{const e=n.filters.map((t=>pc(t))).join(",");return`${n.op}(${e})`}}function Pm(n,e){return n instanceof Oe?(function(r,s){return s instanceof Oe&&r.op===s.op&&r.field.isEqual(s.field)&&Mt(r.value,s.value)})(n,e):n instanceof Wt?(function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,o)=>i&&Pm(a,s.filters[o])),!0):!1})(n,e):void Y(19439)}function km(n){return n instanceof Oe?(function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`})(n):n instanceof Wt?(function(t){return t.op.toString()+" {"+t.getFilters().map(km).join(" ,")+"}"})(n):"Filter"}class wy extends Oe{constructor(e,t,r){super(e,t,r),this.key=K.fromName(r.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class Iy extends Oe{constructor(e,t){super(e,"in",t),this.keys=Nm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ty extends Oe{constructor(e,t){super(e,"not-in",t),this.keys=Nm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Nm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>K.fromName(r.referenceValue)))}class Sy extends Oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ys(t)&&Ri(t.arrayValue,this.value)}}class Cy extends Oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ri(this.value.arrayValue,t)}}class Ry extends Oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ri(this.value.arrayValue,t)}}class xy extends Oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ys(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ri(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t="asc"){this.field=e,this.dir=t}}function Py(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,r,s,i,a,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new rt(e,0,ne.min(),ne.min(),ne.min(),Rt.empty(),0)}static newFoundDocument(e,t,r,s){return new rt(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new rt(e,2,t,ne.min(),ne.min(),Rt.empty(),0)}static newUnknownDocument(e,t){return new rt(e,3,t,ne.min(),ne.min(),Rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.de=null}}function Ld(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ky(n,e,t,r,s,i,a)}function Dm(n){const e=re(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>pc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Do(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>gs(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>gs(r))).join(",")),e.de=t}return e.de}function Lm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Py(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Dd(n.startAt,e.startAt)&&Dd(n.endAt,e.endAt)}function br(n){return!!n.isCorePipeline}function Om(n){return!!n.path&&K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function Ny(n,e,t,r,s,i,a,o){return new Is(n,e,t,r,s,i,a,o)}function Uo(n){return new Is(n)}function Od(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Dy(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Vm(n){return n.collectionGroup!==null}function di(n){const e=re(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new Me($e.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(o=o.add(u.field))}))})),o})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new Di(i,r))})),t.has($e.keyField().canonicalString())||e.fe.push(new Di($e.keyField(),r))}return e.fe}function nn(n){const e=re(n);return e.me||(e.me=Ly(e,di(n))),e.me}function Ly(n,e){if(n.limitType==="F")return Ld(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Di(s.field,i)}));const t=n.endAt?new co(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new co(n.startAt.position,n.startAt.inclusive):null;return Ld(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function fc(n,e){const t=n.filters.concat([e]);return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Oy(n,e){const t=n.explicitOrderBy.concat([e]);return new Is(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function uo(n,e,t){return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vy(n,e){return Lm(nn(n),nn(e))&&n.limitType===e.limitType}function pi(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>km(s))).join(", ")}]`),Do(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>gs(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>gs(s))).join(",")),`Target(${r})`})(nn(n))}; limitType=${n.limitType})`}function Bo(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,o,c){const u=Nd(a,o,c);return a.inclusive?u<=0:u<0})(r.startAt,di(r),s)||r.endAt&&!(function(a,o,c){const u=Nd(a,o,c);return a.inclusive?u>=0:u>0})(r.endAt,di(r),s))})(n,e)}function tu(n){return(e,t)=>{let r=!1;for(const s of di(n)){const i=My(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function My(n,e,t){const r=n.field.isKeyField()?K.comparator(e.key,t.key):(function(i,a,o){const c=a.data.field(i),u=o.data.field(i);return c!==null&&u!==null?At(c,u):Y(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,de;function By(n){switch(n){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:n})}}function Mm(n){if(n===void 0)return Sn("GRPC error has no .code"),V.UNKNOWN;switch(n){case Le.OK:return V.OK;case Le.CANCELLED:return V.CANCELLED;case Le.UNKNOWN:return V.UNKNOWN;case Le.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Le.INTERNAL:return V.INTERNAL;case Le.UNAVAILABLE:return V.UNAVAILABLE;case Le.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Le.NOT_FOUND:return V.NOT_FOUND;case Le.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Le.ABORTED:return V.ABORTED;case Le.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Le.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:n})}}(de=Le||(Le={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$r(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return hm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Ie(K.comparator);function gt(){return Fy}const Um=new Ie(K.comparator);function Zr(...n){let e=Um;for(const t of n)e=e.insert(t.key,t);return e}function Bm(n){let e=Um;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Wn(){return fi()}function Fm(){return fi()}function fi(){return new jr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const qy=new Ie(K.comparator),$y=new Me(K.comparator);function le(...n){let e=$y;for(const t of n)e=e.add(t);return e}const Hy=new Me(ue);function jy(){return Hy}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new Yn([4294967295,4294967295],0);function Vd(n){const e=zy().encode(n),t=new em;return t.update(e),new Uint8Array(t.digest())}function Md(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yn([t,r],0),new Yn([s,i],0)]}class nu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(r<0)throw new si(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Yn.fromNumber(this.ge)}we(e,t,r){let s=e.add(t.multiply(Yn.fromNumber(r)));return s.compare(Wy)===1&&(s=new Yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Vd(e),[r,s]=Md(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new nu(i,s,t);return r.forEach((o=>a.insert(o))),a}insert(e){if(this.ge===0)return;const t=Vd(e),[r,s]=Md(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.ve(a)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yi(ne.min(),s,new Ie(ue),gt(),gt(),le())}}class Xi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xi(r,t,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class qm{constructor(e,t){this.targetId=e,this.xe=t}}class $m{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ud{constructor(e){this.targetId=e,this.Ce=0,this.Fe=Bd(),this.Oe=Ue.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=le(),t=le(),r=le();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:Y(38017,{changeType:i})}})),new Xi(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=Bd()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,W(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Xs="WatchChangeAggregator";class Gy{constructor(e){this.ze=e,this.je=new Map,this.He=gt(),this.Je=ba(),this.Ye=gt(),this.Ze=ba(),this.Xe=new Ie(ue)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,(t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:Y(56790,{state:e.state})}else j(Xs,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach(((r,s)=>{this.it(s)&&t(s)}))}_t(e){var t;return br(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:Om(e)}ot(e){const t=e.targetId,r=e.xe.count,s=this.ut(t);if(s){const i=s.target;if(this._t(i))if(r===0){const a=new K(br(i)?ye.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(t,a,rt.newNoDocument(a,ne.min()))}else W(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.ct(t);if(a!==r){const o=this.lt(e),c=o?this.Et(o,e,a):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,u)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,o;try{a=ar(r).toUint8Array()}catch(c){if(c instanceof dm)return zt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{o=new nu(a,s,i)}catch(c){return zt(c instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return o.ge===0?null:o}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.ze.Tt(),o=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.nt(t,i,null),s++)})),s}Rt(e){const t=new Map;this.je.forEach(((i,a)=>{const o=this.ut(a);if(o){if(i.current&&this._t(o.target)){const c=br(o.target)?ye.fromString(o.target.getPipelineDocuments()[0]):o.target.path,u=new K(c);this.It(u).has(a)||this.At(a,u)||this.nt(a,u,rt.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=le();this.Ze.forEach(((i,a)=>{let o=!0;a.forEachWhile((c=>{const u=this.ut(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)})),o&&(r=r.add(i))})),this.He.forEach(((i,a)=>a.setReadTime(e))),this.Ye.forEach(((i,a)=>a.setReadTime(e)));const s=new Yi(e,t,this.Xe,this.He,this.Ye,r);return this.He=gt(),this.Je=ba(),this.Ye=gt(),this.Ze=ba(),this.Xe=new Ie(ue),s}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void j(Xs,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.At(e,t.key)?2:0;r.$e(t.key,s),br(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const s=this.je.get(e);s&&this.it(e)?(this.At(e,t)?s.$e(t,1):s.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(br(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):j(Xs,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(j(Xs,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Ud(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Me(ue),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Me(ue),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||j(Xs,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new Ud(e)),this.ze.getRemoteKeysForTarget(e).forEach((t=>{this.nt(e,t,null)}))}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ba(){return new Ie(K.comparator)}function Bd(){return new Ie(K.comparator)}const Ky={asc:"ASCENDING",desc:"DESCENDING"},Qy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yy={and:"AND",or:"OR"};class Xy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mc(n,e){return n.useProto3Json||Do(e)?e:{value:e}}function ho(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ru(n){const e=ir(n);return new be(e.seconds,e.nanos)}function Hm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Oa(n,e){return ho(n,e.toTimestamp())}function rn(n){return W(!!n,49232),ne.fromTimestamp(ru(n))}function su(n,e){return gc(n,e).canonicalString()}function gc(n,e){const t=(function(s){return new ye(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function jm(n){const e=ye.fromString(n);return W(Qm(e),10190,{key:e.toString()}),e}function po(n,e){return su(n.databaseId,e.path)}function ql(n,e){const t=jm(e);if(t.get(1)!==n.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Wm(t))}function zm(n,e){return su(n.databaseId,e)}function Jy(n){const e=jm(n);return e.length===4?ye.emptyPath():Wm(e)}function yc(n){return new ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wm(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fd(n,e,t){return{name:po(n,e),fields:t.value.mapValue.fields}}function Zy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Y(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(W(d===void 0||typeof d=="string",58123),Ue.fromBase64String(d||"")):(W(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ue.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&(function(u){const d=u.code===void 0?V.UNKNOWN:Mm(u.code);return new H(d,u.message||"")})(a);t=new $m(r,s,i,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ql(n,r.document.name),i=rn(r.document.updateTime),a=r.document.createTime?rn(r.document.createTime):ne.min(),o=new Rt({mapValue:{fields:r.document.fields}}),c=rt.newFoundDocument(s,i,a,o),u=r.targetIds||[],d=r.removedTargetIds||[];t=new La(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ql(n,r.document),i=r.readTime?rn(r.readTime):ne.min(),a=rt.newNoDocument(s,i),o=r.removedTargetIds||[];t=new La([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ql(n,r.document),i=r.removedTargetIds||[];t=new La([],i,s,null)}else{if(!("filter"in e))return Y(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Uy(s,i),o=r.targetId;t=new qm(o,a)}}return t}function ev(n,e){let t;if(e instanceof Qi)t={update:Fd(n,e.key,e.value)};else if(e instanceof Sm)t={delete:po(n,e.key)};else if(e instanceof Hr)t={update:Fd(n,e.key,e.data),updateMask:uv(e.fieldMask)};else{if(!(e instanceof by))return Y(16599,{gt:e.type});t={verify:po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const o=a.transform;if(o instanceof xi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Pi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ki)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ni)return{fieldPath:a.field.canonicalString(),increment:o.Re};if(o instanceof ao)return{fieldPath:a.field.canonicalString(),minimum:o.Re};if(o instanceof oo)return{fieldPath:a.field.canonicalString(),maximum:o.Re};throw Y(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Oa(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)})(n,e.precondition)),t}function tv(n,e){return n&&n.length>0?(W(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?rn(s.updateTime):rn(i);return a.isEqual(ne.min())&&(a=rn(i)),new vy(a,s.transformResults||[])})(t,e)))):[]}function nv(n,e){return{documents:[zm(n,e.path)]}}function rv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=zm(n,s);const i=(function(u){if(u.length!==0)return Km(Wt.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(u){if(u.length!==0)return u.map((d=>(function(_){return{field:es(_.field),direction:ov(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=mc(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{yt:t,parent:s}}function sv(n){let e=Jy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){W(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const _=Gm(p);return _ instanceof Wt&&xm(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((_=>(function(S){return new Di(ts(S.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(_)))})(t.orderBy));let o=null;t.limit&&(o=(function(p){let _;return _=typeof p=="object"?p.value:p,Do(_)?null:_})(t.limit));let c=null;t.startAt&&(c=(function(p){const _=!!p.before,w=p.values||[];return new co(w,_)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const _=!p.before,w=p.values||[];return new co(w,_)})(t.endAt)),Ny(e,s,a,i,o,"F",c,u)}function iv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function av(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function Gm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ts(t.unaryFilter.field);return Oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(t.unaryFilter.field);return Oe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(t.unaryFilter.field);return Oe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ts(t.unaryFilter.field);return Oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Oe.create(ts(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Wt.create(t.compositeFilter.filters.map((r=>Gm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(n):Y(30097,{filter:n})}function ov(n){return Ky[n]}function lv(n){return Qy[n]}function cv(n){return Yy[n]}function es(n){return{fieldPath:n.canonicalString()}}function ts(n){return $e.fromServerFormat(n.fieldPath)}function Km(n){return n instanceof Oe?(function(t){if(t.op==="=="){if(bt(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NAN"}};if(xt(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bt(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NOT_NAN"}};if(xt(t.value))return{unaryFilter:{field:es(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(t.field),op:lv(t.op),value:t.value}}})(n):n instanceof Wt?(function(t){const r=t.getFilters().map((s=>Km(s)));return r.length===1?r[0]:{compositeFilter:{op:cv(t.op),filters:r}}})(n):Y(54877,{filter:n})}function uv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Qm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ym(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Li(n,e){const t={fields:{}};return e.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)})),{mapValue:t}}function Xm(n){return{stringValue:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n){return new Xy(n,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(Ue.fromBase64String(e))}catch(t){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dt(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gi(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Ve("string",Dt._jsonSchemaVersion),bytes:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function hv(){return new iu(Yt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(Gi(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}function Jm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:Ve("string",sn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};class dv{bt(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="ConnectivityMonitor";class $d{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){j(qd,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){j(qd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea=null;function vc(){return Ea===null?Ea=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ea++,"0x"+Ea.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="RestConnection",pv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class fv{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===so?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(e,t,r,s,i){const a=vc(),o=this.Ut(e,t.toUriEncodedString());j($l,`Sending RPC '${e}' ${a}:`,o,r);const c={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(c,s,i);const{host:u}=new URL(o),d=Fr(u);return this.qt(e,o,c,r,d).then((p=>(j($l,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw zt($l,`RPC '${e}' ${a} failed with error: `,p,"url: ",o,"request:",r),p}))}$t(e,t,r,s,i,a){return this.Bt(e,t,r,s,i)}kt(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Ut(e,t){const r=pv[e];let s=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",Js=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class us extends fv{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!us.sn){const e=sm();Js(e,rm.STAT_EVENT,(t=>{t.stat===lc.PROXY?j(Ze,"STAT_EVENT: detected buffering proxy"):t.stat===lc.NOPROXY&&j(Ze,"STAT_EVENT: detected no buffering proxy")})),us.sn=!0}}qt(e,t,r,s,i){const a=vc();return new Promise(((o,c)=>{const u=new tm;u.setWithCredentials(!0),u.listenOnce(nm.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case ka.NO_ERROR:const p=u.getResponseJson();j(Ze,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),o(p);break;case ka.TIMEOUT:j(Ze,`RPC '${e}' ${a} timed out`),c(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const _=u.getStatus();if(j(Ze,`RPC '${e}' ${a} failed with status:`,_,"response text:",u.getResponseText()),_>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const P=(function(U){const q=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(q)>=0?q:V.UNKNOWN})(S.status);c(new H(P,S.message))}else c(new H(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new H(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{_n:e,streamId:a,an:u.getLastErrorCode(),un:u.getLastError()})}}finally{j(Ze,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);j(Ze,`RPC '${e}' ${a} sending request:`,s),u.send(t,"POST",d,r,15)}))}cn(e,t,r){const s=vc(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(o.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(o.useFetchStreams=!0),this.kt(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const u=i.join("");j(Ze,`Creating RPC '${e}' stream ${s}: ${u}`,o);const d=a.createWebChannel(u,o);this.En(d);let p=!1,_=!1;const w=new mv({Kt:S=>{_?j(Ze,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(j(Ze,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),j(Ze,`RPC '${e}' stream ${s} sending:`,S),d.send(S))},Wt:()=>d.close()});return Js(d,ri.EventType.OPEN,(()=>{_||(j(Ze,`RPC '${e}' stream ${s} transport opened.`),w.Zt())})),Js(d,ri.EventType.CLOSE,(()=>{_||(_=!0,j(Ze,`RPC '${e}' stream ${s} transport closed`),w.en(),this.hn(d))})),Js(d,ri.EventType.ERROR,(S=>{_||(_=!0,zt(Ze,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),w.en(new H(V.UNAVAILABLE,"The operation could not be completed")))})),Js(d,ri.EventType.MESSAGE,(S=>{var P;if(!_){const D=S.data[0];W(!!D,16349);const U=D,q=(U==null?void 0:U.error)||((P=U[0])==null?void 0:P.error);if(q){j(Ze,`RPC '${e}' stream ${s} received error:`,q);const X=q.status;let ae=(function(T){const g=Le[T];if(g!==void 0)return Mm(g)})(X),fe=q.message;X==="NOT_FOUND"&&fe.includes("database")&&fe.includes("does not exist")&&fe.includes(this.databaseId.database)&&zt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ae===void 0&&(ae=V.INTERNAL,fe="Unknown error status: "+X+" with message "+q.message),_=!0,w.en(new H(ae,fe)),d.close()}else j(Ze,`RPC '${e}' stream ${s} received:`,D),w.tn(D)}})),us.rn(),setTimeout((()=>{w.Xt()}),0),w}terminate(){this.nn.forEach((e=>e.close())),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter((t=>t===e))}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return im()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n){return new us(n)}us.sn=!1;class Zm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,t-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,(()=>(this.dn=Date.now(),e()))),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="PersistentStream";class e2{constructor(e,t,r,s,i,a,o,c){this.Tn=e,this.yn=r,this.wn=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=c,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Zm(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,(()=>this.Ln())))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Sn(t.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.bn===t&&this.Kn(r,s)}),(r=>{e((()=>{const s=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(s)}))}))}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt((()=>{r((()=>this.listener.Qt()))})),this.stream.zt((()=>{r((()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,(()=>(this.Fn()&&(this.state=3),Promise.resolve()))),this.listener.zt())))})),this.stream.Ht((s=>{r((()=>this.Wn(s)))})),this.stream.onMessage((s=>{r((()=>++this.Dn==1?this.Gn(s):this.onNext(s)))}))}On(){this.state=5,this.xn.mn((async()=>{this.state=0,this.start()}))}Wn(e){return j(Hd,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget((()=>this.bn===e?t():(j(Hd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class yv extends e2{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=Zy(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ne.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?rn(a.readTime):ne.min()})(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=yc(this.serializer),t.addTarget=(function(i,a){let o;const c=a.target;if(o=br(c)?{pipelineQuery:av(i,c)}:Om(c)?{documents:nv(i,c)}:{query:rv(i,c).yt},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=Hm(i,a.resumeToken);const u=mc(i,a.expectedCount);u!==null&&(o.expectedCount=u)}else if(a.snapshotVersion.compareTo(ne.min())>0){o.readTime=ho(i,a.snapshotVersion.toTimestamp());const u=mc(i,a.expectedCount);u!==null&&(o.expectedCount=u)}return o})(this.serializer,e);const r=iv(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=yc(this.serializer),t.removeTarget=e,this.Bn(t)}}class vv extends e2{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=tv(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=yc(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>ev(this.serializer,r)))};this.Bn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{}class Av extends _v{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Bt(e,gc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(V.UNKNOWN,i.toString())}))}$t(e,t,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.$t(e,gc(t,r),s,a,o,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new H(V.UNKNOWN,a.toString())}))}terminate(){this.tr=!0,this.connection.terminate()}}function bv(n,e,t,r){return new Av(n,e,t,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="ComponentProvider",jd=new Map;function wv(n,e,t,r,s){return new uy(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Jm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},t2=41943040;class mt{static withCacheSize(e){return new mt(e,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}mt.DEFAULT_COLLECTION_PERCENTILE=10,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mt.DEFAULT=new mt(t2,mt.DEFAULT_COLLECTION_PERCENTILE,mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mt.DISABLED=new mt(-1,0,0);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="LruGarbageCollector",Iv=1048576;function Gd([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class Tv{constructor(e){this.rr=e,this.buffer=new Me(Gd),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Sv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){j(Wd,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ws(t)?j(Wd,"Ignoring IndexedDB error during garbage collection: ",t):await Es(t)}await this.ur(3e5)}))}}class Cv{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(No.ce);const r=new Tv(t);return this.cr.forEachTarget(e,(s=>r._r(s.sequenceNumber))).next((()=>this.cr.Er(e,(s=>r._r(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(zd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zd):this.hr(e,t)))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,s,i,a,o,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,o=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Jr()<=he.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(o-a)+`ms
	Removed ${i} targets in `+(c-o)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Rv(n,e){return new Cv(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="firestore.googleapis.com",Kd=!0;class Qd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=n2,this.ssl=Kd}else this.host=e.host,this.ssl=e.ssl??Kd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=t2;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iv)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}X9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jm(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new q9;switch(r.type){case"firstParty":return new z9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=jd.get(t);r&&(j(Ev,"Removing Datastore"),jd.delete(t),r.terminate())})(this),Promise.resolve()}}function xv(n,e,t,r={}){var u;n=$t(n,qo);const s=Fr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${e}:${t}`;s&&Dc(`https://${o}`),i.host!==n2&&i.host!==o&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:o,ssl:s,emulatorOptions:r};if(!nr(c,a)&&(n._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=nt.MOCK_USER;else{d=Hp(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new nt(_)}n._authCredentials=new $9(new lm(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pn(this.firestore,e,this._query)}}class xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Gi(t,xe._jsonSchema))return new xe(e,r||null,new K(ye.fromString(t.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Ve("string",xe._jsonSchemaVersion),referencePath:Ve("string")};class Xn extends Pn{constructor(e,t,r){super(e,t,Uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new K(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function Jn(n,e,...t){if(n=Ce(n),cm("collection","path",e),n instanceof qo){const r=ye.fromString(e,...t);return Ad(r),new Xn(n,null,r)}{if(!(n instanceof xe||n instanceof Xn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return Ad(r),new Xn(n.firestore,null,r)}}function Zn(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=Yc.newId()),cm("doc","path",e),n instanceof qo){const r=ye.fromString(e,...t);return _d(r),new xe(n,null,new K(r))}{if(!(n instanceof xe||n instanceof Xn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return _d(r),new xe(n.firestore,n instanceof Xn?n.converter:null,new K(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gi(e,vt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new vt(e.vectorValues);throw new H(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vt._jsonSchemaVersion="firestore/vectorValue/1.0",vt._jsonSchema={type:Ve("string",vt._jsonSchemaVersion),vectorValues:Ve("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=/^__.*__$/;class kv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Hr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qi(e,this.data,t,this.fieldTransforms)}}function r2(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:n})}}class ou{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ou({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return fo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(r2(this.dataSource)&&Pv.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Nv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Fo(e)}createContext(e,t,r,s=!1){return new ou({dataSource:e,methodName:t,targetDoc:r,path:$e.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lu(n){const e=n._freezeSettings(),t=Fo(n._databaseId);return new Nv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function s2(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);o2("Data must be an object, but it was:",a,r);const o=i2(r,a);let c,u;if(i.merge)c=new qt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=Ts(e,p,t);if(!a.contains(_))throw new H(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Vv(d,_)||d.push(_)}c=new qt(d),u=a.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=a.fieldTransforms;return new kv(new Rt(o),c,u)}class cu extends au{_toFieldTransform(e){return new gy(e.path,new xi)}isEqual(e){return e instanceof cu}}function Dv(n,e,t,r=!1){return vs(t,n.createContext(r?4:3,e))}function vs(n,e,t){if(a2(n=Ce(n)))return o2("Unsupported field value:",e,n),i2(n,e);if(n instanceof au)return(function(s,i){if(!r2(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const a=[];let o=0;for(const c of s){let u=vs(c,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),a.push(u),o++}return{arrayValue:{values:a}}})(n,e)}return(function(s,i,a){if((s=Ce(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Zc(i.serializer,s,a);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=be.fromDate(s);return{timestampValue:ho(i.serializer,o)}}if(s instanceof be){const o=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ho(i.serializer,o)}}if(s instanceof sn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Dt)return{bytesValue:Hm(i.serializer,s._byteString)};if(s instanceof xe){const o=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(o))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:su(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof vt)return(function(c,u){const d=c instanceof vt?c.toArray():c;return{mapValue:{fields:{[ym]:{stringValue:vm},[Ci]:{arrayValue:{values:d.map((_=>{if(typeof _!="number")throw u.createError("VectorValues must only contain numeric values.");return Oo(u.serializer,_)}))}}}}}})(s,i);if(Ym(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${ko(s)}`)})(n,e,t)}function i2(n,e){const t={};return hm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$r(n,((r,s)=>{const i=vs(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function a2(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof sn||n instanceof Dt||n instanceof xe||n instanceof au||n instanceof vt||Ym(n))}function o2(n,e,t){if(!a2(t)||!Wi(t)){const r=ko(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Ts(n,e,t){if((e=Ce(e))instanceof iu)return e._internalPath;if(typeof e=="string")return Ov(n,e);throw fo("Field path arguments must be of type string or ",n,!1,void 0,t)}const Lv=new RegExp("[~\\*/\\[\\]]");function Ov(n,e,t){if(e.search(Lv)>=0)throw fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new iu(...e.split("."))._internalPath}catch{throw fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new H(V.INVALID_ARGUMENT,o+n+c)}function Vv(n,e){return n.some((t=>t.isEqual(e)))}function l2(n){return typeof n._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=Rt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let o;i.nestedOptions&&Wi(a)?o={mapValue:{fields:new it(i.nestedOptions).getOptionsProto(t,a)}}:a&&(o=vs(a,t)??void 0),o&&r.set($e.fromServerFormat(i.serverName),o)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(ly(r,((a,o)=>[$e.fromServerFormat(o),a!==void 0?vs(a,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Wi(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function fn(){return new cu("serverTimestamp")}function Uv(n){return new vt(n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(n){let e;return n instanceof zr?n:(e=Wi(n)?Hv(n):n instanceof Array?jv(n):c2(n,void 0),e)}function Hl(n){if(n instanceof zr)return n;if(n instanceof vt)return Oi(n);if(Array.isArray(n))return Oi(Uv(n));throw new Error("Unsupported value: "+typeof n)}function uu(n){return iy(n)?Va(n):B(n)}class zr{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,B(e)],"add")}asBoolean(){if(this instanceof lr)return this;if(this instanceof Cs)return new h2(this);if(this instanceof Ss)return new $v(this);if(this instanceof L)return new u2(this);throw new H("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,B(e)],"subtract")}multiply(e){return new L("multiply",[this,B(e)],"multiply")}divide(e){return new L("divide",[this,B(e)],"divide")}mod(e){return new L("mod",[this,B(e)],"mod")}equal(e){return new L("equal",[this,B(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,B(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,B(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,B(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,B(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,B(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map((s=>B(s)));return new L("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,B(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ii(e.map(B),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ii(e.map(B),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ii(e.map(B),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ii(e.map(B),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,B(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,B(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,B(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,B(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,B(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,B(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,B(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,B(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(B(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(B(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(B(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,Oi(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(B);return new L("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,B(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,B(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,B(e),B(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,B(e),B(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(B);return new L("concat",[this,...r],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,B(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,B(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new L("array_transform",[this,B(e),B(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,B(e)];return t!==void 0&&r.push(B(t)),new L("array_slice",r,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,B(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,B(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,B(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,B(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,B(e),B("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,B(e),B("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,B(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,Oi(e)],"mapGet")}mapSet(e,t,...r){const s=[this,B(e),B(t),...r.map(B)];return new L("map_set",s,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,B(e)],"get_field")}count(){return St._create("count",[this],"count")}sum(){return St._create("sum",[this],"sum")}average(){return St._create("average",[this],"average")}minimum(){return St._create("minimum",[this],"minimum")}maximum(){return St._create("maximum",[this],"maximum")}first(){return St._create("first",[this],"first")}last(){return St._create("last",[this],"last")}arrayAgg(){return St._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return St._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return St._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new L("maximum",[this,...r.map(B)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new L("minimum",[this,...r.map(B)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,Hl(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,Hl(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,Hl(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,B(e),B(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,B(e),B(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,uu(e),B(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,B(e)];return t&&r.push(B(t)),new L("timestamp_extract",r,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const r=B(e);return new L("substring",t===void 0?[this,r]:[this,r,B(t)],"substring")}arrayGet(e){return new L("array_get",[this,B(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,B(e)],"ifError");return e instanceof lr?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,B(e)],"mapRemove")}mapMerge(e,...t){const r=B(e),s=t.map(B);return new L("map_merge",[this,r,...s],"mapMerge")}pow(e){return new L("pow",[this,B(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,B(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,B(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,B(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,B(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,B(e),...t.map(B)],"coalesce")}join(e){return new L("join",[this,B(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,B(e)])}timestampTruncate(e,t){const r=[this,B(e)];return t&&r.push(B(t)),new L("timestamp_trunc",r)}ascending(){return zv(this)}descending(){return Wv(this)}as(e){return new Fv(this,e,"as")}}class St{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new St(e,t);return s._methodName=r,s}as(e){return new Bv(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class Bv{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Fv{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ii extends zr{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map((t=>t._toProto(e)))}}}_readUserData(e){this.Rr.forEach((t=>t._readUserData(e)))}}class Ss extends zr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,B(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Va(n){return qv(n,"field")}function qv(n,e){return new Ss(typeof n=="string"?Yt===n?hv()._internalPath:Ts("field",n):n._internalPath,e)}class Cs extends zr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Cs(e,void 0);return t._protoValue=e,t}_toProto(e){return W(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,Mv(this._protoValue)||(this._protoValue=vs(this.value,e))}}function Oi(n,e){return c2(n,"constant")}function c2(n,e){const t=new Cs(n,e);return typeof n=="boolean"?new h2(t):t}class L extends zr{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new it({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class lr extends zr{get _methodName(){return this._expr._methodName}countIf(){return St._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=B(e),r=new L("if_error",[this,t],"ifError");return t instanceof lr?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class u2 extends lr{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class h2 extends lr{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class $v extends lr{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Hv(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(Oi(r)),t.push(B(s))}return new L("map",t,"map")}function jv(n){return(function(t,r){return new L("array",t.map((s=>B(s))),r)})(n,"array")}function zv(n){return new d2(uu(n),"ascending","ascending")}function Wv(n){return new d2(uu(n),"descending","descending")}class d2{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Xm(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class p2 extends Nt{get _name(){return"add_fields"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.fields)]}}_readUserData(e){super._readUserData(e),cr(this.fields,e)}}class f2 extends Nt{get _name(){return"aggregate"}get _optionsUtil(){return new it({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Li(e,this.accumulators),Li(e,this.groups)]}}_readUserData(e){super._readUserData(e),cr(this.groups,e),cr(this.accumulators,e)}}class m2 extends Nt{get _name(){return"distinct"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.groups)]}}_readUserData(e){super._readUserData(e),cr(this.groups,e)}}class $o extends Nt{get _name(){return"collection"}get _optionsUtil(){return new it({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class Ho extends Nt{get _name(){return"collection_group"}get _optionsUtil(){return new it({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class hu extends Nt{get _name(){return"database"}get _optionsUtil(){return new it({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class du extends Nt{get _name(){return"documents"}get _optionsUtil(){return new it({})}constructor(e,t){if(super(t),!e||e.length===0)throw new H(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new H(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class jo extends Nt{get _name(){return"where"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),cr(this.condition,e)}}class Or extends Nt{get _name(){return"limit"}get _optionsUtil(){return new it({})}constructor(e,t){W(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Zc(e,this.limit)]}}}class Yd extends Nt{get _name(){return"offset"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Zc(e,this.offset)]}}}class Gv extends Nt{get _name(){return"select"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Li(e,this.selections)]}}_readUserData(e){super._readUserData(e),cr(this.selections,e)}}class yn extends Nt{get _name(){return"sort"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),cr(this.orderings,e)}}class pu extends Nt{get _name(){return"replace_with"}get _optionsUtil(){return new it({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Xm(pu.pr)]}}_readUserData(e){super._readUserData(e),cr(this.map,e)}}pu.pr="full_replace";function cr(n,e){return l2(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}// Copyright 2024 Google LLC* @license
class ht{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return zo(this)}getPipelineCollectionGroup(){return fu(this)}getPipelineCollectionId(){return Kv(this)}getPipelineDocuments(){return _c(this)}getPipelineFlavor(){return(function(t){let r="exact";return t.stages.forEach(((s,i)=>{s._name!==m2.name&&s._name!==f2.name||(r="keyless"),s._name===Gv.name&&r==="exact"&&(r="augmented"),s._name===p2.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return er(this)}}function er(n){const e=n.stages[0];return e instanceof $o||e instanceof Ho||e instanceof hu||e instanceof du?e._name:"unknown"}function zo(n){if(er(n)==="collection")return n.stages[0].Vr}function fu(n){if(er(n)==="collection_group")return n.stages[0].collectionId}function Kv(n){switch(er(n)){case"collection":return ye.fromString(zo(n)).lastSegment();case"collection_group":return fu(n);default:return}}function _c(n){if(er(n)==="documents")return n.stages[0].dr}class mi{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}wr(e,t){const r=this.userDataReader.createContext(3,e);return l2(t)?t._readUserData(r):Array.isArray(t)?t.forEach((s=>s._readUserData(r))):t.forEach((s=>s._readUserData(r))),t}where(e){const t=this.stages.map((r=>r));return this.wr("where",e),t.push(new jo(e,{})),new mi(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((r=>r));return t.push(new Or(e,{})),new mi(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map((s=>s));return"orderings"in e?r.push(new yn(this.wr("sort",e.orderings),{})):r.push(new yn(this.wr("sort",[e,...t]),{})),new mi(this._db,this.userDataReader,this._userDataWriter,r)}br(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class R{constructor(e,t){this.type=e,this.value=t}static vr(){return new R("ERROR",void 0)}static Sr(){return new R("UNSET",void 0)}static Dr(){return new R("NULL",ms)}static newValue(e){return xt(e)?new R("NULL",ms):(function(r){return!!r&&"booleanValue"in r})(e)?new R("BOOLEAN",e):Xt(e)?new R("INT",e):wr(e)?new R("DOUBLE",e):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(e)?new R("TIMESTAMP",e):(function(r){return!!r&&"stringValue"in r})(e)?new R("STRING",e):(function(r){return!!r&&"bytesValue"in r})(e)?new R("BYTES",e):e.referenceValue?new R("REFERENCE",e):e.geoPointValue?new R("GEO_POINT",e):ys(e)?new R("ARRAY",e):io(e)?new R("VECTOR",e):Tr(e)?new R("MAP",e):new R("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function gi(n){if(!n.Cr())return n.value}function g2(n){return n instanceof lr?n._expr:n}function J(n){if((n=g2(n))instanceof Ss)return new Qv(n);if(n instanceof Cs)return new Yv(n);if(n instanceof ii)return new Xv(n);if(n instanceof L){if(n.name==="add")return new e5(n);if(n.name==="subtract")return new t5(n);if(n.name==="multiply")return new n5(n);if(n.name==="divide")return new r5(n);if(n.name==="mod")return new s5(n);if(n.name==="and")return new i5(n);if(n.name==="equal")return new y5(n);if(n.name==="not_equal")return new v5(n);if(n.name==="less_than")return new _5(n);if(n.name==="less_than_or_equal")return new A5(n);if(n.name==="greater_than")return new b5(n);if(n.name==="greater_than_or_equal")return new E5(n);if(n.name==="array_concat")return new w5(n);if(n.name==="array_reverse")return new I5(n);if(n.name==="array_contains")return new T5(n);if(n.name==="array_contains_all")return new S5(n);if(n.name==="array_contains_any")return new C5(n);if(n.name==="array_length")return new R5(n);if(n.name==="array_element")return new x5(n);if(n.name==="equal_any")return new y2(n);if(n.name==="not_equal_any")return new o5(n);if(n.name==="is_nan")return new l5(n);if(n.name==="is_not_nan")return new c5(n);if(n.name==="is_null")return new u5(n);if(n.name==="is_not_null")return new h5(n);if(n.name==="is_error")return new d5(n);if(n.name==="exists")return new p5(n);if(n.name==="not")return new Wo(n);if(n.name==="or")return new a5(n);if(n.name==="xor")return new mu(n);if(n.name==="conditional")return new f5(n);if(n.name==="maximum")return new m5(n);if(n.name==="minimum")return new g5(n);if(n.name==="reverse")return new P5(n);if(n.name==="replace_first")return new k5(n);if(n.name==="replace_all")return new N5(n);if(n.name==="char_length")return new D5(n);if(n.name==="byte_length")return new L5(n);if(n.name==="like")return new O5(n);if(n.name==="regex_contains")return new V5(n);if(n.name==="regex_match")return new M5(n);if(n.name==="string_contains")return new U5(n);if(n.name==="starts_with")return new B5(n);if(n.name==="ends_with")return new F5(n);if(n.name==="to_lower")return new q5(n);if(n.name==="to_upper")return new $5(n);if(n.name==="trim")return new H5(n);if(n.name==="string_concat")return new j5(n);if(n.name==="map_get")return new z5(n);if(n.name==="cosine_distance")return new W5(n);if(n.name==="dot_product")return new G5(n);if(n.name==="euclidean_distance")return new K5(n);if(n.name==="vector_length")return new Q5(n);if(n.name==="unix_micros_to_timestamp")return new e_(n);if(n.name==="timestamp_to_unix_micros")return new r_(n);if(n.name==="unix_millis_to_timestamp")return new t_(n);if(n.name==="timestamp_to_unix_millis")return new s_(n);if(n.name==="unix_seconds_to_timestamp")return new n_(n);if(n.name==="timestamp_to_unix_seconds")return new i_(n);if(n.name==="timestamp_add")return new a_(n);if(n.name==="timestamp_subtract")return new o_(n)}throw new Error(`Unknown Expr : ${n}`)}class Qv{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Yt)return R.newValue({referenceValue:po(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return R.newValue({timestampValue:Oa(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return R.newValue({timestampValue:Oa(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Lo(r)?R.newValue((function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Oa(i.serializer,ne.fromTimestamp(fs(a)))};if(i.serverTimestampBehavior==="previous"){const o=Ki(a);if(o)return o}return{nullValue:"NULL_VALUE"}})(e,r)):R.newValue(r):R.Sr()}}class Yv{constructor(e){this.expr=e}evaluate(e,t){return R.newValue(this.expr._getValue())}}class Xv{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map((s=>J(s).evaluate(e,t)));return r.some((s=>s.Cr()))?R.vr():R.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function Xe(n){return wr(n)?Number(n.doubleValue):Number(n.integerValue)}function an(n){return BigInt(n.integerValue)}const Jv=BigInt("0x7fffffffffffffff"),Zv=-BigInt("0x8000000000000000");class Ji{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length>=2,24778);const r=J(this.expr.params[0]).evaluate(e,t),s=J(this.expr.params[1]).evaluate(e,t);let i=this.Or(r,s);for(const a of this.expr.params.slice(2)){const o=J(a).evaluate(e,t);i=this.Or(i,o)}return i}Or(e,t){if(e.Cr()||t.Cr())return R.vr();if(e.Fr()||t.Fr())return R.Dr();const r=e.value,s=t.value;if(!wr(r)&&!Xt(r)||!wr(s)&&!Xt(s))return R.vr();if(wr(r)||wr(s)){const i=this.Mr(r,s);return i?R.newValue(i):R.vr()}if(Xt(r)&&Xt(s)){const i=this.Nr(r,s);return i===void 0?R.vr():typeof i=="number"?R.newValue({doubleValue:i}):i<Zv||i>Jv?R.vr():R.newValue({integerValue:`${i}`})}return R.vr()}}function Cn(n,e){return Be(n)!==Be(e)?"TYPE_MISMATCH":bt(n)||bt(e)?"NOT_EQ":xt(n)&&xt(e)?"EQ":xt(n)||xt(e)?"NULL":ys(n)&&ys(e)?(function(r,s){var a,o,c;if(((a=r.values)==null?void 0:a.length)!==((o=s.values)==null?void 0:o.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((c=r.values)==null?void 0:c.length)??0);u++){const d=r.values[u],p=s.values[u];switch(Cn(d,p)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Y(44609,{Lr:d,Br:p})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):io(n)&&io(e)||Tr(n)&&Tr(e)?(function(r,s){const i=r.fields||{},a=s.fields||{};if(ro(i)!==ro(a))return"NOT_EQ";let o=!1;for(const c in i)if(i.hasOwnProperty(c)){if(a[c]===void 0)return"NOT_EQ";switch(Cn(i[c],a[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":o=!0}}return o?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(r,s){return Mt(r,s,{Te:!1,Ee:!0,he:!0})})(n,e)?"EQ":"NOT_EQ"}class e5 extends Ji{Nr(e,t){return an(e)+an(t)}Mr(e,t){return{doubleValue:Xe(e)+Xe(t)}}}class t5 extends Ji{constructor(e){super(e),this.expr=e}Nr(e,t){return an(e)-an(t)}Mr(e,t){return{doubleValue:Xe(e)-Xe(t)}}}class n5 extends Ji{constructor(e){super(e),this.expr=e}Nr(e,t){return an(e)*an(t)}Mr(e,t){return{doubleValue:Xe(e)*Xe(t)}}}class r5 extends Ji{constructor(e){super(e),this.expr=e}Nr(e,t){const r=an(t);if(r!==BigInt(0))return an(e)/r}Mr(e,t){const r=Xe(t);return r===0?{doubleValue:Ti(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Xe(e)/r}}}class s5 extends Ji{constructor(e){super(e),this.expr=e}Nr(e,t){const r=an(t);if(r!==BigInt(0))return an(e)%r}Mr(e,t){const r=Xe(t);if(r!==0)return{doubleValue:Xe(e)%r}}}class i5{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=J(a).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!((i=o.value)!=null&&i.booleanValue))return R.newValue(Ge);break;case"NULL":s=!0;break;default:r=!0}}return r?R.vr():s?R.Dr():R.newValue(_t)}}class Wo{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===1,9634);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return R.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return R.Dr();default:return R.vr()}}}class a5{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=J(a).evaluate(e,t);switch(o.type){case"BOOLEAN":if((i=o.value)!=null&&i.booleanValue)return R.newValue(_t);break;case"NULL":s=!0;break;default:r=!0}}return r?R.vr():s?R.Dr():R.newValue(Ge)}}class mu{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=J(a).evaluate(e,t);switch(o.type){case"BOOLEAN":r=mu.xor(r,!!((i=o.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return R.vr()}}return s?R.Dr():R.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class y2{constructor(e){this.expr=e}evaluate(e,t){var a,o;W(this.expr.params.length===2,55094);let r=!1;const s=J(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return R.vr()}const i=J(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return R.vr()}if(r)return R.Dr();for(const c of((o=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:o.values)??[])switch(xt(s.value)&&xt(c)?"EQ":Cn(s.value,c)){case"EQ":return R.newValue(_t);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Y(44608,{value:s.value,candidate:c})}return r?R.Dr():R.newValue(Ge)}}class o5{constructor(e){this.expr=e}evaluate(e,t){return new Wo(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class l5{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,23322);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return R.newValue(Ge);case"DOUBLE":return R.newValue({booleanValue:isNaN(Xe(r.value))});case"NULL":return R.Dr();default:return R.vr()}}}class c5{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,50406),new Wo(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class u5{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,23123),J(this.expr.params[0]).evaluate(e,t).type){case"NULL":return R.newValue(_t);case"UNSET":case"ERROR":return R.vr();default:return R.newValue(Ge)}}}class h5{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,23167),new Wo(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class d5{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===1,5228),J(this.expr.params[0]).evaluate(e,t).type==="ERROR"?R.newValue(_t):R.newValue(Ge)}}class p5{constructor(e){this.expr=e}evaluate(e,t){switch(W(this.expr.params.length===1,6877),J(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return R.vr();case"UNSET":return R.newValue(Ge);default:return R.newValue(_t)}}}class f5{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===3,11706);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?J(this.expr.params[1]).evaluate(e,t):J(this.expr.params[2]).evaluate(e,t);case"NULL":return J(this.expr.params[2]).evaluate(e,t);default:return R.vr()}}}class m5{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>J(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||At(i.value,s.value)>0?i:s}return s===void 0?R.Dr():s}}class g5{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>J(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||At(i.value,s.value)<0?i:s}return s===void 0?R.Dr():s}}class Rs{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return R.vr()}const s=J(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return R.vr()}return this.Ur(r,s)}}class y5 extends Rs{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return R.newValue(_t);if(e.Fr()||t.Fr()||bt(e.value)||bt(t.value)||Be(e.value)!==Be(t.value))return R.newValue(Ge);switch(Cn(e.value,t.value)){case"EQ":return R.newValue(_t);case"NOT_EQ":return R.newValue(Ge);case"NULL":return R.Dr();default:Y(44615,{left:e,right:t})}}}class v5 extends Rs{constructor(e){super(e),this.expr=e}Ur(e,t){switch(Cn(e.value,t.value)){case"EQ":return R.newValue(Ge);case"NOT_EQ":case"TYPE_MISMATCH":return R.newValue(_t);case"NULL":return R.Dr();default:Y(44614,{left:e,right:t})}}}class _5 extends Rs{constructor(e){super(e),this.expr=e}Ur(e,t){return Be(e.value)!==Be(t.value)||bt(e.value)||bt(t.value)?R.newValue(Ge):R.newValue({booleanValue:At(e.value,t.value)<0})}}class A5 extends Rs{constructor(e){super(e),this.expr=e}Ur(e,t){return Be(e.value)!==Be(t.value)||bt(e.value)||bt(t.value)?R.newValue(Ge):Cn(e.value,t.value)==="EQ"?R.newValue(_t):R.newValue({booleanValue:At(e.value,t.value)<0})}}class b5 extends Rs{constructor(e){super(e),this.expr=e}Ur(e,t){return Be(e.value)!==Be(t.value)||bt(e.value)||bt(t.value)?R.newValue(Ge):R.newValue({booleanValue:At(e.value,t.value)>0})}}class E5 extends Rs{constructor(e){super(e),this.expr=e}Ur(e,t){return Be(e.value)!==Be(t.value)||bt(e.value)||bt(t.value)?R.newValue(Ge):Cn(e.value,t.value)==="EQ"?R.newValue(_t):R.newValue({booleanValue:At(e.value,t.value)>0})}}class w5{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class I5{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===1,216);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return R.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return R.newValue({arrayValue:{values:[...i].reverse()}})}default:return R.vr()}}}class T5{constructor(e){this.expr=e}evaluate(e,t){return W(this.expr.params.length===2,52884),new y2(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class S5{constructor(e){this.expr=e}evaluate(e,t){var c,u,d,p;W(this.expr.params.length===2,1392);let r=!1;const s=J(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return R.vr()}const i=J(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return R.vr()}if(r)return R.Dr();const a=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],o=((p=(d=s.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const _ of a){let w=!1;r=!1;for(const S of o){switch(xt(_)&&xt(S)?"EQ":Cn(_,S)){case"EQ":w=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Y(44613,{value:S,search:_})}if(w)break}if(!w)return R.newValue(Ge)}return R.newValue(_t)}}class C5{constructor(e){this.expr=e}evaluate(e,t){var c,u,d,p;W(this.expr.params.length===2,2680);let r=!1;const s=J(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return R.vr()}const i=J(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return R.vr()}if(r)return R.Dr();const a=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],o=((p=(d=s.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const _ of o)for(const w of a)switch(xt(_)&&xt(w)?"EQ":Cn(_,w)){case"EQ":return R.newValue(_t);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:Y(44608,{value:_,search:w})}return r?R.Dr():R.newValue(Ge)}}class R5{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;W(this.expr.params.length===1,38605);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return R.Dr();case"ARRAY":return R.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return R.vr()}}}class x5{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class P5{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,1508);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return R.Dr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const o=Ue.fromBase64String(a).toUint8Array();return o.reverse(),R.newValue({bytesValue:Ue.fromUint8Array(o).toBase64()})}return R.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,o=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),c=Array.from(o,(u=>u.segment)).reverse();return R.newValue({stringValue:c.join("")})}default:return R.vr()}}}class k5{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class N5{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class D5{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,19400);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return R.Dr();case"STRING":{const s=(function(a){let o=0;for(let c=0;c<a.length;c++){const u=a.codePointAt(c);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const d=a.codePointAt(c+1);d!==void 0&&d>=56320&&d<=57343?(o+=1,c++):o+=1}else o+=1;else o+=1;else{if(!(u<=1114111))return;o+=1,c++}}return o})(r.value.stringValue);return s===void 0?R.vr():R.newValue({integerValue:s})}default:return R.vr()}}}class L5{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,8486);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?R.newValue({integerValue:Ue.fromBase64String(a).toUint8Array().length}):R.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=(function(c){let u=0;for(let d=0;d<c.length;d++){const p=c.codePointAt(d);if(p===void 0)return;if(p>=55296&&p<=57343){if(!(p<=56319))return;{const _=c.codePointAt(d+1);if(_===void 0||!(_>=56320&&_<=57343))return;u+=4,d++}}else if(p<=127)u+=1;else if(p<=2047)u+=2;else if(p<=65535)u+=3;else{if(!(p<=1114111))return;u+=4,d++}}return u})((i=r.value)==null?void 0:i.stringValue);return a===void 0?R.vr():R.newValue({integerValue:a})}case"NULL":return R.Dr();default:return R.vr()}}}class xs{constructor(e){this.expr=e}evaluate(e,t){var a,o;W(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=J(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return R.vr()}const i=J(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return R.vr()}return r?R.Dr():this.kr((a=s.value)==null?void 0:a.stringValue,(o=i.value)==null?void 0:o.stringValue)}}class O5 extends xs{kr(e,t){try{const r=(function(a){let o="";for(let c=0;c<a.length;c++){const u=a.charAt(c);switch(u){case"_":o+=".";break;case"%":o+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":o+="\\"+u;break;default:o+=u}}return"^"+o+"$"})(t),s=wi.compile(r);return R.newValue({booleanValue:s.matches(e)})}catch(r){return zt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),R.vr()}}}class V5 extends xs{kr(e,t){try{const r=wi.compile(t);return R.newValue({booleanValue:r.matcher(e).find()})}catch{return zt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),R.vr()}}}class M5 extends xs{kr(e,t){try{return R.newValue({booleanValue:wi.compile(t).matches(e)})}catch{return zt(`Invalid regex pattern found in regex_match: ${t}, returning error`),R.vr()}}}class U5 extends xs{kr(e,t){return R.newValue({booleanValue:e.includes(t)})}}class B5 extends xs{kr(e,t){return R.newValue({booleanValue:e.startsWith(t)})}}class F5 extends xs{kr(e,t){return R.newValue({booleanValue:e.endsWith(t)})}}class q5{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,29079);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return R.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return R.Dr();default:return R.vr()}}}class $5{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,60487);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return R.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return R.Dr();default:return R.vr()}}}class H5{constructor(e){this.expr=e}evaluate(e,t){var s,i;W(this.expr.params.length===1,28544);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return R.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return R.Dr();default:return R.vr()}}}class j5{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((a=>J(a).evaluate(e,t)));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return R.vr()}return i?R.Dr():R.newValue({stringValue:s})}}class z5{constructor(e){this.expr=e}evaluate(e,t){var a,o,c,u;W(this.expr.params.length===2,4483);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return R.Sr();case"MAP":break;default:return R.vr()}const s=J(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return R.vr();const i=(u=(o=(a=r.value)==null?void 0:a.mapValue)==null?void 0:o.fields)==null?void 0:u[(c=s.value)==null?void 0:c.stringValue];return i===void 0?R.Sr():R.newValue(i)}}class gu{constructor(e){this.expr=e}evaluate(e,t){var u,d;W(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=J(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return R.vr()}const i=J(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return R.vr()}if(r)return R.Dr();const a=dc(s.value),o=dc(i.value);if(a===void 0||o===void 0||((u=a.values)==null?void 0:u.length)!==((d=o.values)==null?void 0:d.length))return R.vr();const c=this.qr(a,o);return c===void 0||isNaN(c)?R.vr():R.newValue({doubleValue:c})}}class W5 extends gu{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,o=0;for(let u=0;u<r.length;u++){if(!or(r[u])||!or(s[u]))return;const d=Xe(r[u]),p=Xe(s[u]);i+=d*p,a+=d*d,o+=p*p}const c=Math.sqrt(a)*Math.sqrt(o);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class G5 extends gu{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!or(r[a])||!or(s[a]))return;i+=Xe(r[a])*Xe(s[a])}return i}}class K5 extends gu{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!or(r[a])||!or(s[a]))return;const o=Xe(r[a]),c=Xe(s[a]);i+=Math.pow(o-c,2)}return Math.sqrt(i)}}class Q5{constructor(e){this.expr=e}evaluate(e,t){var s;W(this.expr.params.length===1,39044);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=dc(r.value);return R.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return R.Dr();default:return R.vr()}}}const Vi=BigInt(-62135596800),Mi=BigInt(253402300799),mo=BigInt(1e3),tr=BigInt(1e6),Y5=Vi*mo,X5=Mi*mo+BigInt(999),J5=Vi*tr,Z5=Mi*tr+BigInt(999999);function yu(n){return n>=J5&&n<=Z5}function v2(n){return n>=Vi&&n<=Mi}function Ui(n,e){const t=BigInt(n);return!(t<Vi||t>Mi)&&!(e<0||e>=1e9)&&(t!==Vi||e===0)&&!(t===Mi&&e>999999999)}function _2(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function vu(n){return BigInt(n.seconds)*tr+BigInt(Math.trunc(n.nanoseconds/1e3))}class _u{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return R.Dr();default:return R.vr()}}}class e_ extends _u{toTimestamp(e){if(!yu(e))return R.vr();let t=Number(e/tr),r=Number(e%tr*BigInt(1e3));const s=_2(t,r);return t=s.seconds,r=s.nanos,Ui(t,r)?R.newValue({timestampValue:{seconds:t,nanos:r}}):R.vr()}}class t_ extends _u{toTimestamp(e){if(!(function(a){return a>=Y5&&a<=X5})(e))return R.vr();let t=Number(e/mo),r=Number(e%mo*BigInt(1e6));const s=_2(t,r);return t=s.seconds,r=s.nanos,Ui(t,r)?R.newValue({timestampValue:{seconds:t,nanos:r}}):R.vr()}}class n_ extends _u{toTimestamp(e){if(!v2(e))return R.vr();const t=Number(e);return R.newValue({timestampValue:{seconds:t,nanos:0}})}}class Au{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=J(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return R.Dr();default:return R.vr()}const s=ru(r.value.timestampValue);return Ui(s.seconds,s.nanoseconds)?this.$r(s):R.vr()}}class r_ extends Au{$r(e){const t=vu(e);return yu(t)?R.newValue({integerValue:`${t.toString()}`}):R.vr()}}class s_ extends Au{$r(e){const t=vu(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?R.newValue({integerValue:r.toString()}):R.newValue({integerValue:(r-BigInt(1)).toString()})}}class i_ extends Au{$r(e){const t=BigInt(e.seconds);return v2(t)?R.newValue({integerValue:t.toString()}):R.vr()}}class A2{constructor(e){this.expr=e}evaluate(e,t){W(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=J(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return R.vr()}const i=J(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=(function(q){switch(q){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),a===void 0)return R.vr();break;case"NULL":r=!0;break;default:return R.vr()}const o=J(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":r=!0;break;default:return R.vr()}if(r)return R.Dr();const c=BigInt(o.value.integerValue);let u;try{switch(a){case"microsecond":u=c;break;case"millisecond":u=c*BigInt(1e3);break;case"second":u=c*BigInt(1e6);break;case"minute":u=c*BigInt(6e7);break;case"hour":u=c*BigInt(36e8);break;case"day":u=c*BigInt(864e8);break;default:return R.vr()}if(a!=="microsecond"&&c!==BigInt(0)&&u/c!==BigInt(this.Kr(a)))return R.vr()}catch(U){return zt(`Error during timestamp arithmetic: ${U}`),R.vr()}const d=ru(s.value.timestampValue);if(!Ui(d.seconds,d.nanoseconds))return R.vr();const p=vu(d),_=this.Wr(p,u);if(!yu(_))return R.vr();const w=Number(_/tr),S=_%tr,P=Number((S<0?S+tr:S)*BigInt(1e3)),D=S<0?w-1:w;return Ui(D,P)?R.newValue({timestampValue:{seconds:D,nanos:P}}):R.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class a_ extends A2{Wr(e,t){return e+t}}class o_ extends A2{Wr(e,t){return e-t}}function Bi(n){if((n=g2(n))instanceof Ss)return`fld(${n.fieldName})`;if(n instanceof Cs)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof xe?`ref(${t.path})`:t instanceof vt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof L)return`fn(${n.name},[${n.params.map(Bi).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Bi).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function l_(n){if(n instanceof p2)return`${n._name}(${wa(n.fields)})`;if(n instanceof f2){let e=`${n._name}(${wa(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${wa(n.groups)})`),e}if(n instanceof m2)return`${n._name}(${wa(n.groups)})`;if(n instanceof $o)return`${n._name}(${n.Vr})`;if(n instanceof Ho)return`${n._name}(${n.collectionId})`;if(n instanceof hu)return`${n._name}()`;if(n instanceof du)return`${n._name}(${n.dr.sort()})`;if(n instanceof jo)return`${n._name}(${Bi(n.condition)})`;if(n instanceof Or)return`${n._name}(${n.limit})`;if(n instanceof yn)return`${n._name}(${(function(t){return t.map((r=>`${Bi(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function wa(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Bi(t)}`)).join(",")}`}function En(n){return n.stages.map((e=>l_(e))).join("|")}function b2(n,e){return En(n)===En(e)}function He(n){return n instanceof ht}function Xd(n){return He(n)?En(n):pi(n)}function E2(n){return He(n)?En(n):(function(t){return`${Dm(nn(t))}|lt:${t.limitType}`})(n)}function Go(n,e){return n instanceof ht&&e instanceof ht?b2(n,e):!(n instanceof ht&&!(e instanceof ht)||!(n instanceof ht)&&e instanceof ht)&&Vy(n,e)}function w2(n){return br(n)?En(n):Dm(n)}function I2(n,e){return n instanceof ht&&e instanceof ht?b2(n,e):!(n instanceof ht&&!(e instanceof ht)||!(n instanceof ht)&&e instanceof ht)&&Lm(n,e)}function c_(n,e){const t=(function(s){let i=!1;const a=[];for(const o of s)if(o instanceof yn)if(i=!0,o.orderings.some((c=>c.expr instanceof Ss&&c.expr.fieldName===Yt)))a.push(o);else{const c=o.orderings.map((u=>u));c.push(Va(Yt).ascending()),a.push(new yn(c,{}))}else o instanceof Or&&(i||(a.push(new yn([Va(Yt).ascending()],{})),i=!0)),a.push(o);return i||a.push(new yn([Va(Yt).ascending()],{})),a})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(r)))}return new ht(n.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_y(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Fm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(s.key)?null:o;const c=Im(a,o);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ne.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),le())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,((t,r)=>xd(t,r)))&&ps(this.baseMutations,e.baseMutations,((t,r)=>xd(t,r)))}}class bu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){W(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let s=(function(){return qy})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new bu(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,r,s,i=ne.min(),a=ne.min(),o=Ue.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=c}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.zr=e}}function p_(n){const e=sv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.Hi=new m_}addToCollectionParentIndex(e,t){return this.Hi.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(sr.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class m_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Me(ye.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new ur(0)}static Cs(){return new ur(-1)}}// Copyright 2024 Google LLC* @license
function T2(n,e){var r;let t=e;for(const s of n.stages)t=y_({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Ko(n,e){return T2(n,[e]).length>0}function g_(n,e){return He(n)?Ko(n,e):Bo(n,e)}function y_(n,e,t){if(e instanceof $o)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&`/${o.key.getCollectionPath().canonicalString()}`===i.Vr))})(0,e,t);if(e instanceof jo)return(function(s,i,a){return a.filter((o=>{const c=gi(J(i.condition).evaluate(s,o));return c!==void 0&&Mt(c,_t)}))})(n,e,t);if(e instanceof Ho)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&o.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof hu)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()))})(0,0,t);if(e instanceof du)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&i.mr.has(o.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Or)return(function(s,i,a){return a.slice(0,i.limit)})(0,e,t);if(e instanceof yn)return(function(s,i,a){const o=i.orderings.map((c=>({ks:J(c.expr),direction:c.direction})));return[...a].sort(((c,u)=>{for(const{ks:d,direction:p}of o){const _=gi(d.evaluate(s,c)),w=gi(d.evaluate(s,u)),S=At(_??ms,w??ms);if(S!==0)return p==="ascending"?S:-S}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Ac(n){const e=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof yn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,r)=>{for(const s of e){const i=gi(J(s.expr).evaluate({serializer:n.serializer},t)),a=gi(J(s.expr).evaluate({serializer:n.serializer},r)),o=At(i||ms,a||ms);if(o!==0)return s.direction==="ascending"?o:-o}return 0}}function jl(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Or)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.changes=new jr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&hi(r.mutation,s,qt.empty(),be.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,le()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=le()){const s=Wn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Zr();return i.forEach(((o,c)=>{a=a.insert(o,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Wn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,le())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,o)=>{t.set(a,o)}))}))}computeViews(e,t,r,s){let i=gt();const a=fi(),o=(function(){return fi()})();return t.forEach(((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Hr)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),hi(d.mutation,u,d.mutation.getFieldMask(),be.now())):a.set(u.key,qt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,d)=>a.set(u,d))),t.forEach(((u,d)=>o.set(u,new __(d,a.get(u)??null)))),o)))}recalculateAndSaveOverlays(e,t){const r=fi();let s=new Ie(((a,o)=>a-o)),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const o of a)o.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||qt.empty();d=o.applyToLocalView(u,d),r.set(c,d);const p=(s.get(o.batchId)||le()).add(c);s=s.insert(o.batchId,p)}))})).next((()=>{const a=[],o=s.getReverseIterator();for(;o.hasNext();){const c=o.getNext(),u=c.key,d=c.value,p=Fm();d.forEach((_=>{if(!i.has(_)){const w=Im(t.get(_),r.get(_));w!==null&&p.set(_,w),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return He(t)?this.getDocumentsMatchingPipeline(e,t,r,s):Dy(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Vm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(Wn());let o=Ii,c=i;return a.next((u=>M.forEach(u,((d,p)=>(o<p.largestBatchId&&(o=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{c=c.insert(d,_)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,le()))).next((d=>({batchId:o,changes:Bm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((r=>{let s=Zr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Zr();return this.indexManager.getCollectionParents(e,i).next((o=>M.forEach(o,(c=>{const u=(function(p,_){return new Is(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>this.retrieveMatchingLocalDocuments(i,a,(o=>Bo(t,o)))))}getDocumentsMatchingPipeline(e,t,r,s){if(er(t)==="collection_group"){const i=fu(t);let a=Zr();return this.indexManager.getCollectionParents(e,i).next((o=>M.forEach(o,(c=>{const u=(function(p,_){const w=p.stages.map((S=>S instanceof Ho?new $o(_.canonicalString(),{}):S));return new ht(p.serializer,w)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,u,r,s).next((d=>{d.forEach(((p,_)=>{a=a.insert(p,_)}))}))})).next((()=>a))))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next((a=>{switch(i=a,er(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let o=le();for(const c of _c(t))o=o.add(K.fromPath(c));return this.remoteDocumentCache.getEntries(e,o);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new H("invalid-argument",`Invalid pipeline source to execute offline: ${En(t)}`)}})).next((a=>this.retrieveMatchingLocalDocuments(i,a,(o=>Ko(t,o)))))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach(((i,a)=>{const o=a.getKey();t.get(o)===null&&(t=t.insert(o,rt.newInvalidDocument(o)))}));let s=Zr();return t.forEach(((i,a)=>{const o=e.get(i);o!==void 0&&hi(o.mutation,a,qt.empty(),be.now()),r(a)&&(s=s.insert(i,a))})),s}getOverlaysForPipeline(e,t,r){switch(er(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ye.fromString(zo(t)),r);case"collection_group":throw new H("invalid-argument",`Unexpected collection group pipeline: ${En(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,_c(t).map((s=>K.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new H("invalid-argument",`Failed to get overlays for pipeline: ${En(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return M.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,(function(s){return{name:s.name,query:p_(s.bundledQuery),readTime:rn(s.readTime)}})(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.overlays=new Ie(K.comparator),this.Ys=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wn();return M.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=Wn();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&r.set(s,i)})),M.resolve(r)}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.Hr(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ys.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=Wn(),i=t.length+1,a=new K(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const c=o.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ie(((u,d)=>u-d));const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Wn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const o=Wn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>o.set(u,d))),!(o.size()>=s)););return M.resolve(o)}Hr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new h_(t,r));let i=this.Ys.get(t);i===void 0&&(i=le(),this.Ys.set(t,i)),this.Ys.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Zs=new Me(We.Xs),this.e_=new Me(We.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new We(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.r_(new We(e,t))}i_(e,t){e.forEach((r=>this.removeReference(r,t)))}s_(e){const t=new K(new ye([])),r=new We(t,e),s=new We(t,e+1),i=[];return this.e_.forEachInRange([r,s],(a=>{this.r_(a),i.push(a.key)})),i}__(){this.Zs.forEach((e=>this.r_(e)))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new K(new ye([])),r=new We(t,e),s=new We(t,e+1);let i=le();return this.e_.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new We(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return K.comparator(e.key,t.key)||ue(e.a_,t.a_)}static t_(e,t){return ue(e.a_,t.a_)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Me(We.Xs)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new u_(i,t,r,s);this.mutationQueue.push(a);for(const o of s)this.u_=this.u_.add(new We(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.l_(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Xc:this.gs-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],(a=>{const o=this.c_(a.a_);i.push(o)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Me(ue);return t.forEach((s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,a],(o=>{r=r.add(o.a_)}))})),M.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const a=new We(new K(i),0);let o=new Me(ue);return this.u_.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(o=o.add(c.a_)),!0)}),a),M.resolve(this.E_(o))}E_(e){const t=[];return e.forEach((r=>{const s=this.c_(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){W(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return M.forEach(t.mutations,(s=>{const i=new We(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.u_=r}))}bs(e){}containsKey(e,t){const r=new We(t,0),s=this.u_.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.T_=e,this.docs=(function(){return new Ie(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))})),M.resolve(r)}getAllEntries(e){let t=gt();return this.docs.forEach(((r,s)=>{t=t.insert(r,s.document)})),M.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;He(t)?(i=ye.fromString(zo(t)),a=d=>Ko(t,d)):(i=t.path,a=d=>Bo(t,d));let o=gt();const c=new K(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!i.isPrefixOf(d.path))break;d.path.length>i.length+1||ey(Z9(p),r)<=0||(s.has(p.key)||a(p))&&(o=o.insert(p.key,p.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(e,t,r,s){Y(9500)}P_(e,t){return M.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new S_(this)}getSize(e){return M.resolve(this.size)}}class S_ extends v_{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.zs.addEntry(e,s)):this.zs.removeEntry(r)})),M.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.persistence=e,this.R_=new jr((t=>w2(t)),I2),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.I_=0,this.A_=new Eu,this.targetCount=0,this.V_=ur.xs()}forEachTarget(e,t){return this.R_.forEach(((r,s)=>t(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),M.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new ur(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Ms(t),M.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.R_.forEach(((a,o)=>{o.sequenceNumber<=t&&r.get(o.targetId)===null&&(this.R_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.A_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,t){this.d_={},this.overlays={},this.f_=new No(0),this.m_=!1,this.m_=!0,this.p_=new w_,this.referenceDelegate=e(this),this.g_=new C_(this),this.indexManager=new f_,this.remoteDocumentCache=(function(s){return new T_(s)})((r=>this.referenceDelegate.y_(r))),this.serializer=new d_(t),this.w_=new b_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new E_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new I_(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const s=new R_(this.f_.next());return this.referenceDelegate.b_(),r(s).next((i=>this.referenceDelegate.v_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}S_(e,t){return M.or(Object.values(this.d_).map((r=>()=>r.containsKey(e,t))))}}class R_ extends ny{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.D_=new Eu,this.x_=null}static C_(e){return new wu(e)}get F_(){if(this.x_)return this.x_;throw Y(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),M.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach((s=>this.F_.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.F_.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.F_,(r=>{const s=K.fromPath(r);return this.O_(e,s).next((i=>{i||t.removeEntry(s,ne.min())}))})).next((()=>(this.x_=null,t.apply(e))))}updateLimboDocument(e,t){return this.O_(e,t).next((r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())}))}y_(e){return 0}O_(e,t){return M.or([()=>M.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class go{constructor(e,t){this.persistence=e,this.M_=new jr((r=>ay(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Rv(this,t)}static C_(e,t){return new go(e,t)}b_(){}v_(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}Ls(e){let t=0;return this.Er(e,(r=>{t++})).next((()=>t))}Er(e,t){return M.forEach(this.M_,((r,s)=>this.Us(e,r,s).next((i=>i?M.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.P_(e,(a=>this.Us(e,a,t).next((o=>{o||(r++,i.removeEntry(a,ne.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Na(e.data.value)),t}Us(e,t,r){return M.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.M_.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=s}static vo(e,t){let r=le(),s=le();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Iu(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(n,e){return K.comparator(n.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=(function(){return I0()?8:ry(st())>0?6:4})()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Oo(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Mo(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new P_;return this.No(e,t,a).next((o=>{if(i.result=o,this.Do)return this.Lo(e,t,a,o.size)}))})).next((()=>i.result))}Lo(e,t,r,s){return He(t)?M.resolve():r.documentReadCount<this.xo?(Jr()<=he.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",pi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),M.resolve()):(Jr()<=he.DEBUG&&j("QueryEngine","Query:",pi(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(Jr()<=he.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",pi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(t))):M.resolve())}Oo(e,t){if(He(t))return M.resolve(null);let r=t;if(Od(r))return M.resolve(null);let s=nn(r);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=uo(r,null,"F"),s=nn(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const o=le(...a);return this.Fo.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.Bo(r,c);return this.Uo(r,d,o,u.readTime)?this.Oo(e,uo(r,null,"F")):this.ko(e,d,r,u)}))))})))))}Mo(e,t,r,s){return(He(t)?(function(a){for(const o of a.stages){if(o instanceof Or||o instanceof Yd)return!1;if(o instanceof jo){if(o.condition instanceof u2&&o.condition._expr.name==="exists"&&o.condition._expr.params[0]instanceof Ss&&o.condition._expr.params[0].fieldName===Yt)continue;return!1}}return!0})(t):Od(t))||s.isEqual(ne.min())?M.resolve(null):this.Fo.getDocuments(e,r).next((i=>{const a=this.Bo(t,i);return this.Uo(t,a,r,s)?M.resolve(null):(Jr()<=he.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xd(t)),this.ko(e,a,t,J9(s,Ii)).next((o=>o)))}))}Bo(e,t){let r,s;return He(e)?(r=new Me(x_),s=i=>Ko(e,i)):(r=new Me(tu(e)),s=i=>Bo(e,i)),t.forEach(((i,a)=>{s(a)&&(r=r.add(a))})),r}Uo(e,t,r,s){if(He(e))return(function(o){return o.stages.some((c=>c instanceof Or||c instanceof Yd))})(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(e,t,r){return Jr()<=he.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Xd(t)),this.Fo.getDocumentsMatchingQuery(e,t,sr.min(),r)}ko(e,t,r,s){return this.Fo.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu="LocalStore",N_=3e8;class D_{constructor(e,t,r,s){this.persistence=e,this.qo=t,this.serializer=s,this.$o=new Ie(ue),this.Ko=new jr((i=>w2(i)),I2),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A_(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$o)))}}function L_(n,e,t,r){return new D_(n,e,t,r)}async function C2(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Go(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],o=[];let c=le();for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next((u=>({zo:u,removedBatchIds:a,addedBatchIds:o})))}))}))}function O_(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Qo.newChangeBuffer({trackRemovals:!0});return(function(o,c,u,d){const p=u.batch,_=p.keys();let w=M.resolve();return _.forEach((S=>{w=w.next((()=>d.getEntry(c,S))).next((P=>{const D=u.docVersions.get(S);W(D!==null,48541),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))}))})),w.next((()=>o.mutationQueue.removeMutationBatch(c,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(o){let c=le();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(c=c.add(o.batch.mutations[u].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function R2(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.g_.getLastRemoteSnapshotVersion(t)))}function V_(n,e){const t=re(n),r=e.snapshotVersion;let s=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});s=t.$o;const o=[];e.targetChanges.forEach(((d,p)=>{const _=s.get(p);if(!_)return;o.push(t.g_.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.g_.addMatchingKeys(i,d.addedDocuments,p))));let w=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Ue.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),(function(P,D,U){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=N_?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(_,w,d)&&o.push(t.g_.updateTargetData(i,w))}));let c=gt(),u=le();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),o.push(M_(i,a,e.documentUpdates).next((d=>{c=d.jo,u=d.Ho}))),!r.isEqual(ne.min())){const d=t.g_.getLastRemoteSnapshotVersion(i).next((p=>t.g_.setTargetsMetadata(i,i.currentSequenceNumber,r)));o.push(d)}return M.waitFor(o).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(t.$o=s,i)))}function M_(n,e,t){let r=le(),s=le();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=gt();return t.forEach(((o,c)=>{const u=i.get(o);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(o)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(o,c.readTime),a=a.insert(o,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(o,c)):j(Tu,"Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",c.version)})),{jo:a,Ho:s}}))}function U_(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Xc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function B_(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.g_.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):t.g_.allocateTargetId(r).next((a=>(s=new vn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.$o.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r}))}async function bc(n,e,t){const r=re(n),s=r.$o.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ws(a))throw a;j(Tu,`Failed to update sequence numbers for target ${e}: ${a}`)}r.$o=r.$o.remove(e),r.Ko.delete(s.target)}function Jd(n,e,t){const r=re(n);let s=ne.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,u,d){const p=re(c),_=p.Ko.get(d);return _!==void 0?M.resolve(p.$o.get(_)):p.g_.getTargetData(u,d)})(r,a,He(e)?e:nn(e)).next((o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(a,o.targetId).next((c=>{i=c}))})).next((()=>r.qo.getDocumentsMatchingQuery(a,e,t?s:ne.min(),t?i:le()))).next((o=>(F_(r,o),{documents:o,Jo:i})))))}function F_(n,e){e.forEach(((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Wo.get(s)||ne.min();r.readTime.compareTo(i)>0&&n.Wo.set(s,r.readTime)}))}class Zd{constructor(){this.activeTargetIds=jy()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q_{constructor(){this.Ua=new Zd,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Zd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function zl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve()))))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Sn(t),this.Ka=!1):j("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="RemoteStore";class H_{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new ur(1e3),this.eu=new ur(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt((a=>{r.enqueueAndForget((async()=>{Wr(this)&&(j(on,"Restarting streams for network reachability change."),await(async function(c){const u=re(c);u.tu.add(4),await Zi(u),u.iu.set("Unknown"),u.tu.delete(4),await Qo(u)})(this))}))})),this.iu=new $_(r,s)}}async function Qo(n){if(Wr(n))for(const e of n.nu)await e(!0)}async function Zi(n){for(const e of n.nu)await e(!1)}function Ec(n,e){return n.Ya.get(e)||void 0}function x2(n,e){const t=re(n),r=Ec(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const s=(function(o,c){const u=Ec(o,c);u!==void 0&&o.Za.delete(u);const d=(function(_,w){return w%2!=0?_.eu.next():_.Xa.next()})(o,c);return o.Ya.set(c,d),o.Za.set(d,c),d})(t,e.targetId);j(on,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new vn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(s,i),xu(t)?Ru(t):Ps(t).Fn()&&Cu(t,i)}function Su(n,e){const t=re(n),r=Ps(t),s=Ec(t,e);j(on,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ja.delete(s),t.Ya.delete(e),t.Za.delete(s),r.Fn()&&P2(t,s),t.Ja.size===0&&(r.Fn()?r.Nn():Wr(t)&&t.iu.set("Unknown"))}function Cu(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void j(on,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Ps(n).jn(e)}function P2(n,e){n.su.We(e),Ps(n).Hn(e)}function Ru(n){n.su=new Gy({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):le()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),Ps(n).start(),n.iu.Wa()}function xu(n){return Wr(n)&&!Ps(n).Cn()&&n.Ja.size>0}function Wr(n){return re(n).tu.size===0}function k2(n){n.su=void 0}async function j_(n){n.iu.set("Online")}async function z_(n){n.Ja.forEach(((e,t)=>{Cu(n,e)}))}async function W_(n,e){k2(n),xu(n)?(n.iu.za(e),Ru(n)):n.iu.set("Unknown")}async function G_(n,e,t){if(n.iu.set("Online"),e instanceof $m&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const o of i.targetIds){if(s.Ja.has(o)){const c=s.Za.get(o);c!==void 0&&(await s.remoteSyncer.rejectListen(c,a),s.Ya.delete(c),s.Za.delete(o)),s.Ja.delete(o)}s.su.removeTarget(o)}})(n,e)}catch(r){j(on,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yo(n,r)}else if(e instanceof La?n.su.et(e):e instanceof qm?n.su.ot(e):n.su.rt(e),!t.isEqual(ne.min()))try{const r=await R2(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const o=i.su.Rt(a);o.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ja.get(d);p&&i.Ja.set(d,p.withResumeToken(u.resumeToken,a))}})),o.targetMismatches.forEach(((u,d)=>{const p=i.Ja.get(u);if(!p)return;i.Ja.set(u,p.withResumeToken(Ue.EMPTY_BYTE_STRING,p.snapshotVersion)),P2(i,u);const _=new vn(p.target,u,d,p.sequenceNumber);Cu(i,_)}));const c=(function(d,p){const _=new Map;p.targetChanges.forEach(((S,P)=>{const D=d.Za.get(P);D!==void 0&&_.set(D,S)}));let w=new Ie(ue);return p.targetMismatches.forEach(((S,P)=>{const D=d.Za.get(S);D!==void 0&&(w=w.insert(D,P))})),new Yi(p.snapshotVersion,_,w,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)})(i,o);return i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){j(on,"Failed to raise snapshot:",r),await yo(n,r)}}async function yo(n,e,t){if(!ws(e))throw e;n.tu.add(1),await Zi(n),n.iu.set("Offline"),t||(t=()=>R2(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(on,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await Qo(n)}))}function N2(n,e){return e().catch((t=>yo(n,t,e)))}async function Yo(n){const e=re(n),t=hr(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Xc;for(;K_(e);)try{const s=await U_(e.localStore,r);if(s===null){e.Ha.length===0&&t.Nn();break}r=s.batchId,Q_(e,s)}catch(s){await yo(e,s)}D2(e)&&L2(e)}function K_(n){return Wr(n)&&n.Ha.length<10}function Q_(n,e){n.Ha.push(e);const t=hr(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function D2(n){return Wr(n)&&!hr(n).Cn()&&n.Ha.length>0}function L2(n){hr(n).start()}async function Y_(n){hr(n).er()}async function X_(n){const e=hr(n);for(const t of n.Ha)e.Yn(t.mutations)}async function J_(n,e,t){const r=n.Ha.shift(),s=bu.from(r,e,t);await N2(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Yo(n)}async function Z_(n,e){e&&hr(n).Jn&&await(async function(r,s){if((function(a){return By(a)&&a!==V.ABORTED})(s.code)){const i=r.Ha.shift();hr(r).Mn(),await N2(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Yo(r)}})(n,e),D2(n)&&L2(n)}async function ep(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),j(on,"RemoteStore received new credentials");const r=Wr(t);t.tu.add(3),await Zi(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await Qo(t)}async function eA(n,e){const t=re(n);e?(t.tu.delete(2),await Qo(t)):e||(t.tu.add(2),await Zi(t),t.iu.set("Unknown"))}function Ps(n){return n._u||(n._u=(function(t,r,s){const i=re(t);return i.nr(),new yv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Qt:j_.bind(null,n),zt:z_.bind(null,n),Ht:W_.bind(null,n),zn:G_.bind(null,n)}),n.nu.push((async e=>{e?(n._u.Mn(),xu(n)?Ru(n):n.iu.set("Unknown")):(await n._u.stop(),k2(n))}))),n._u}function hr(n){return n.ou||(n.ou=(function(t,r,s){const i=re(t);return i.nr(),new vv(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:Y_.bind(null,n),Ht:Z_.bind(null,n),Zn:X_.bind(null,n),Xn:J_.bind(null,n)}),n.nu.push((async e=>{e?(n.ou.Mn(),await Yo(n)):(await n.ou.stop(),n.Ha.length>0&&(j(on,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))}))),n.ou}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,o=new Pu(e,t,a,s,i);return o.start(r),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(n,e){if(Sn("AsyncQueue",`${e}: ${n}`),ws(n))return new H(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{static emptySet(e){return new Sr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||K.comparator(t.key,r.key):(t,r)=>K.comparator(t.key,r.key),this.keyedMap=Zr(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.au=new Ie(K.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):Y(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal(((t,r)=>{e.push(r)})),e}}class _s{constructor(e,t,r,s,i,a,o,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((o=>{a.push({type:0,doc:o})})),new _s(e,t,Sr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some((e=>e.Tu()))}}class nA{constructor(){this.queries=np(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const s=re(t),i=s.queries;s.queries=np(),i.forEach(((a,o)=>{for(const c of o.Eu)c.onError(r)}))})(this,new H(V.ABORTED,"Firestore shutting down"))}}function np(){return new jr((n=>E2(n)),Go)}async function Nu(n,e){const t=re(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.hu()&&e.Tu()&&(r=2):(i=new tA,r=e.Tu()?0:1);try{switch(r){case 0:i.lu=await t.onListen(s,!0);break;case 1:i.lu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const o=ku(a,`Initialization of query '${He(e.query)?En(e.query):pi(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,i),i.Eu.push(e),e.Ru(t.onlineState),i.lu&&e.Iu(i.lu)&&Lu(t)}async function Du(n,e){const t=re(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Eu.indexOf(e);a>=0&&(i.Eu.splice(a,1),i.Eu.length===0?s=e.Tu()?0:1:!i.hu()&&e.Tu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function rA(n,e){const t=re(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const o of a.Eu)o.Iu(s)&&(r=!0);a.lu=s}}r&&Lu(t)}function sA(n,e,t){const r=re(n),s=r.queries.get(e);if(s)for(const i of s.Eu)i.onError(t);r.queries.delete(e)}function Lu(n){n.Pu.forEach((e=>{e.next()}))}var wc;(function(n){n.Default="default",n.Cache="cache"})(wc||(wc={}));class Ou{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==wc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e){this.key=e}}class V2{constructor(e){this.key=e}}class iA{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=le(),this.mutatedKeys=le(),this.Lu=He(e)?Ac(e):tu(e),this.Bu=new Sr(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new tp,s=t?t.Bu:this.Bu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const[c,u]=this.$u(this.query,s);e.inorderTraversal(((p,_)=>{const w=s.get(p),S=g_(this.query,_)?_:null,P=!!w&&this.mutatedKeys.has(w.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let U=!1;w&&S?w.data.isEqual(S.data)?P!==D&&(r.track({type:3,doc:S}),U=!0):this.Ku(w,S)||(r.track({type:2,doc:S}),U=!0,(c&&this.Lu(S,c)>0||u&&this.Lu(S,u)<0)&&(o=!0)):!w&&S?(r.track({type:0,doc:S}),U=!0):w&&!S&&(r.track({type:1,doc:w}),U=!0,(c||u)&&(o=!0)),U&&(S?(a=a.add(S),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}));const d=this.Wu(this.query);if(d)if(He(this.query)){const p=[];a.forEach((S=>p.push(S)));const _=T2(this.query,p);let w=new Sr(Ac(this.query));for(const S of _)w=w.add(S);a.forEach((S=>{w.has(S.key)||(i=i.delete(S.key),r.track({type:1,doc:S}))})),a=w}else{const p=this.Qu(this.query);for(;a.size>d;){const _=p==="F"?a.last():a.first();a=a.delete(_.key),i=i.delete(_.key),r.track({type:1,doc:_})}}return{Bu:a,qu:r,Uo:o,mutatedKeys:i}}Wu(e){var t;return He(e)?(t=jl(e))==null?void 0:t.limit:e.limit||void 0}Qu(e){if(He(e)){const t=jl(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){var r;if(He(e)){const s=(r=jl(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort(((d,p)=>(function(w,S){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{ft:D})}};return P(w)-P(S)})(d.type,p.type)||this.Lu(d.doc,p.doc))),this.Gu(r),s=s??!1;const o=t&&!s?this.zu():[],c=this.Nu.size===0&&this.current&&!s?1:0,u=c!==this.Mu;return this.Mu=c,a.length!==0||u?{snapshot:new _s(this.query,e.Bu,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:o}:{ju:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new tp,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach((t=>this.Ou=this.Ou.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ou=this.Ou.delete(t))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=le(),this.Bu.forEach((r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))}));const t=[];return e.forEach((r=>{this.Nu.has(r)||t.push(new V2(r))})),this.Nu.forEach((r=>{e.has(r)||t.push(new O2(r))})),t}Ju(e){this.Ou=e.Jo,this.Nu=le();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return _s.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const Vu="SyncEngine";class aA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oA{constructor(e){this.key=e,this.Zu=!1}}class lA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new jr((o=>E2(o)),Go),this.tc=new Map,this.nc=new Set,this.rc=new Ie(K.comparator),this.sc=new Map,this._c=new Eu,this.oc={},this.ac=new Map,this.uc=ur.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function cA(n,e,t=!0){const r=$2(n);let s;const i=r.ec.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Yu()):s=await M2(r,e,t,!0),s}async function uA(n,e){const t=$2(n);await M2(t,e,!0,!1)}async function M2(n,e,t,r){const s=await B_(n.localStore,He(e)?e:nn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let o;return r&&(o=await hA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&x2(n.remoteStore,s),o}async function hA(n,e,t,r,s){n.lc=(p,_,w)=>(async function(P,D,U,q){let X=D.view.ku(U);X.Uo&&(X=await Jd(P.localStore,D.query,!1).then((({documents:T})=>D.view.ku(T,X))));const ae=q&&q.targetChanges.get(D.targetId),fe=q&&q.targetMismatches.get(D.targetId)!=null,F=D.view.applyChanges(X,P.isPrimaryClient,ae,fe);return sp(P,D.targetId,F.ju),F.snapshot})(n,p,_,w);const i=await Jd(n.localStore,e,!0),a=new iA(e,i.Jo),o=a.ku(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(o,n.isPrimaryClient,c);sp(n,t,u.ju);const d=new aA(e,t,a);return n.ec.set(e,d),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),u.snapshot}async function dA(n,e,t){const r=re(n),s=r.ec.get(e),i=r.tc.get(s.targetId);if(i.length>1)return r.tc.set(s.targetId,i.filter((a=>!Go(a,e)))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Su(r.remoteStore,s.targetId),Ic(r,s.targetId)})).catch(Es)):(Ic(r,s.targetId),await bc(r.localStore,s.targetId,!0))}async function pA(n,e){const t=re(n),r=t.ec.get(e),s=t.tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Su(t.remoteStore,r.targetId))}async function fA(n,e,t){const r=bA(n);try{const s=await(function(a,o){const c=re(a),u=be.now(),d=o.reduce(((w,S)=>w.add(S.key)),le());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let S=gt(),P=le();return c.Qo.getEntries(w,d).next((D=>{S=D,S.forEach(((U,q)=>{q.isValidDocument()||(P=P.add(U))}))})).next((()=>c.localDocuments.getOverlayedDocuments(w,S))).next((D=>{p=D;const U=[];for(const q of o){const X=Ay(q,p.get(q.key).overlayedDocument);X!=null&&U.push(new Hr(q.key,X,_m(X.value.mapValue),tn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,U,o)})).next((D=>{_=D;const U=D.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(w,D.batchId,U)}))})).then((()=>({batchId:_.batchId,changes:Bm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,o,c){let u=a.oc[a.currentUser.toKey()];u||(u=new Ie(ue)),u=u.insert(o,c),a.oc[a.currentUser.toKey()]=u})(r,s.batchId,t),await ea(r,s.changes),await Yo(r.remoteStore)}catch(s){const i=ku(s,"Failed to persist write");t.reject(i)}}async function U2(n,e){const t=re(n);try{const r=await V_(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.sc.get(i);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Zu=!0:s.modifiedDocuments.size>0?W(a.Zu,14607):s.removedDocuments.size>0&&(W(a.Zu,42227),a.Zu=!1))})),await ea(t,r,e)}catch(r){await Es(r)}}function rp(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ec.forEach(((i,a)=>{const o=a.view.Ru(e);o.snapshot&&s.push(o.snapshot)})),(function(a,o){const c=re(a);c.onlineState=o;let u=!1;c.queries.forEach(((d,p)=>{for(const _ of p.Eu)_.Ru(o)&&(u=!0)})),u&&Lu(c)})(r.eventManager,e),s.length&&r.Xu.zn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mA(n,e,t){const r=re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.sc.get(e),i=s&&s.key;if(i){let a=new Ie(K.comparator);a=a.insert(i,rt.newNoDocument(i,ne.min()));const o=le().add(i),c=new Yi(ne.min(),new Map,new Ie(ue),a,gt(),o);await U2(r,c),r.rc=r.rc.remove(i),r.sc.delete(e),Mu(r)}else await bc(r.localStore,e,!1).then((()=>Ic(r,e,t))).catch(Es)}async function gA(n,e){const t=re(n),r=e.batch.batchId;try{const s=await O_(t.localStore,e);F2(t,r,null),B2(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ea(t,s)}catch(s){await Es(s)}}async function yA(n,e,t){const r=re(n);try{const s=await(function(a,o){const c=re(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,o).next((p=>(W(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,o))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);F2(r,e,t),B2(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ea(r,s)}catch(s){await Es(s)}}function B2(n,e){(n.ac.get(e)||[]).forEach((t=>{t.resolve()})),n.ac.delete(e)}function F2(n,e,t){const r=re(n);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function Ic(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach((r=>{n._c.containsKey(r)||q2(n,r)}))}function q2(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(Su(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),Mu(n))}function sp(n,e,t){for(const r of t)r instanceof O2?(n._c.addReference(r.key,e),vA(n,r)):r instanceof V2?(j(Vu,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||q2(n,r.key)):Y(19791,{hc:r})}function vA(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(j(Vu,"New document in limbo: "+t),n.nc.add(r),Mu(n))}function Mu(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new K(ye.fromString(e)),r=n.uc.next();n.sc.set(r,new oA(t)),n.rc=n.rc.insert(t,r),x2(n.remoteStore,new vn(nn(Uo(t.path)),r,"TargetPurposeLimboResolution",No.ce))}}async function ea(n,e,t){const r=re(n),s=[],i=[],a=[];r.ec.isEmpty()||(r.ec.forEach(((o,c)=>{a.push(r.lc(c,e,t).then((u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Iu.vo(c.targetId,u);i.push(p)}})))})),await Promise.all(a),r.Xu.zn(s),await(async function(c,u){const d=re(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(_=>M.forEach(_.wo,(w=>d.persistence.referenceDelegate.addReference(p,_.targetId,w))).next((()=>M.forEach(_.bo,(w=>d.persistence.referenceDelegate.removeReference(p,_.targetId,w)))))))))}catch(p){if(!ws(p))throw p;j(Tu,"Failed to update sequence numbers: "+p)}for(const p of u){const _=p.targetId;if(!p.fromCache){const w=d.$o.get(_),S=w.snapshotVersion,P=w.withLastLimboFreeSnapshotVersion(S);d.$o=d.$o.insert(_,P)}}})(r.localStore,i))}async function _A(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){j(Vu,"User change. New user:",e.toKey());const r=await C2(t.localStore,e);t.currentUser=e,(function(i,a){i.ac.forEach((o=>{o.forEach((c=>{c.reject(new H(V.CANCELLED,a))}))})),i.ac.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(t,r.zo)}}function AA(n,e){const t=re(n),r=t.sc.get(e);if(r&&r.Zu)return le().add(r.key);{let s=le();const i=t.tc.get(e);if(!i)return s;for(const a of i??[]){const o=t.ec.get(a);s=s.unionWith(o.view.Uu)}return s}}function $2(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=U2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mA.bind(null,e),e.Xu.zn=rA.bind(null,e.eventManager),e.Xu.Ec=sA.bind(null,e.eventManager),e}function bA(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yA.bind(null,e),e}class vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fo(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return L_(this.persistence,new k_,e.initialUser,this.serializer)}Ic(e){return new S2(wu.C_,this.serializer)}Rc(e){return new q_}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vo.provider={build:()=>new vo};class EA extends vo{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){W(this.persistence.referenceDelegate instanceof go,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Sv(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?mt.withCacheSize(this.cacheSizeBytes):mt.DEFAULT;return new S2((r=>go.C_(r,t)),this.serializer)}}class Tc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_A.bind(null,this.syncEngine),await eA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nA})()}createDatastore(e){const t=Fo(e.databaseInfo.databaseId),r=gv(e.databaseInfo);return bv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,o){return new H_(r,s,i,a,o)})(this.localStore,this.datastore,e.asyncQueue,(t=>rp(this.syncEngine,t,0)),(function(){return $d.C()?new $d:new dv})())}createSyncEngine(e,t){return(function(s,i,a,o,c,u,d){const p=new lA(s,i,a,o,c,u);return d&&(p.cc=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=re(s);j(on,"RemoteStore shutting down."),i.tu.add(5),await Zi(i),i.ru.shutdown(),i.iu.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Tc.provider={build:()=>new Tc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="FirestoreClient";class wA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=Yc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{j(dr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(j(dr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ku(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Wl(n,e){n.asyncQueue.verifyOperationInProgress(),j(dr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await C2(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function ip(n,e){n.asyncQueue.verifyOperationInProgress();const t=await IA(n);j(dr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>ep(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>ep(e.remoteStore,s))),n._onlineComponents=e}async function IA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(dr,"Using user provided OfflineComponentProvider");try{await Wl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;zt("Error using user provided cache. Falling back to memory cache: "+t),await Wl(n,new vo)}}else j(dr,"Using default OfflineComponentProvider"),await Wl(n,new EA(void 0));return n._offlineComponents}async function H2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(dr,"Using user provided OnlineComponentProvider"),await ip(n,n._uninitializedComponentsProvider._online)):(j(dr,"Using default OnlineComponentProvider"),await ip(n,new Tc))),n._onlineComponents}function TA(n){return H2(n).then((e=>e.syncEngine))}async function _o(n){const e=await H2(n),t=e.eventManager;return t.onListen=cA.bind(null,e.syncEngine),t.onUnlisten=dA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pA.bind(null,e.syncEngine),t}function SA(n,e,t,r){const s=new Uu(r),i=new Ou(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Nu(await _o(n),i))),()=>{s.gc(),n.asyncQueue.enqueueAndForget((async()=>Du(await _o(n),i)))}}function CA(n,e,t={}){const r=new bn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,o,c,u){const d=new Uu({next:_=>{d.gc(),a.enqueueAndForget((()=>Du(i,p)));const w=_.docs.has(o);!w&&_.fromCache?u.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&_.fromCache&&c&&c.source==="server"?u.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new Ou(Uo(o.path),d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Nu(i,p)})(await _o(n),n.asyncQueue,e,t,r))),r.promise}function RA(n,e,t={}){const r=new bn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,o,c,u){const d=new Uu({next:_=>{d.gc(),a.enqueueAndForget((()=>Du(i,p))),_.fromCache&&c.source==="server"?u.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(_)},error:_=>u.reject(_)}),p=new Ou(o instanceof mi?c_(o):o,d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return Nu(i,p)})(await _o(n),n.asyncQueue,e,t,r))),r.promise}function xA(n,e){const t=new bn;return n.asyncQueue.enqueueAndForget((async()=>fA(await TA(n),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="AsyncQueue";class op{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Zm(this,"async_queue_retry"),this.jc=()=>{const r=zl();r&&j(ap,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=zl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=zl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new bn;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!ws(e))throw e;j(ap,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Qc=!0,e().catch((r=>{throw this.Wc=r,this.Qc=!1,Sn("INTERNAL UNHANDLED ERROR: ",lp(r)),r})).then((r=>(this.Qc=!1,r))))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=Pu.createAndSchedule(this,e,t,r,(i=>this.Xc(i)));return this.Kc.push(s),s}Jc(){this.Wc&&Y(47125,{el:lp(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function lp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Vr extends qo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new op,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new op(e),this._firestoreClient=void 0,await e}}}function PA(n,e){const t=typeof n=="object"?n:Io(),r=typeof n=="string"?n:so,s=pr(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Bp("firestore");i&&xv(s,...i)}return s}function Xo(n){if(n._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kA(n),n._firestoreClient}function kA(n){var r,s,i,a;const e=n._freezeSettings(),t=wv(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new wA(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{convertValue(e,t="none"){switch(Be(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $r(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[Ci].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>Se(a.doubleValue)));return new vt(t)}convertGeoPoint(e){return new sn(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ki(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const t=ir(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ye.fromString(e);W(Qm(r),9688,{name:e});const s=new Si(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(t)||Sn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends NA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,t)}}const cp="@firebase/firestore",up="4.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ts("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DA extends j2{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fu{}class qu extends Fu{}function Ma(n,e,...t){let r=[];e instanceof Fu&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((c=>c instanceof $u)).length,o=i.filter((c=>c instanceof Jo)).length;if(a>1||a>0&&o>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Jo extends qu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Jo(e,t,r)}_apply(e){const t=this._parse(e);return W2(e._query,t),new Pn(e.firestore,e.converter,fc(e._query,t))}_parse(e){const t=lu(e.firestore);return(function(i,a,o,c,u,d,p){let _;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){mp(p,d);const S=[];for(const P of p)S.push(fp(c,i,P));_={arrayValue:{values:S}}}else _=fp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||mp(p,d),_=Dv(o,a,p,d==="in"||d==="not-in");return Oe.create(u,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function dp(n,e,t){const r=e,s=Ts("where",n);return Jo._create(s,r,t)}class $u extends Fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new $u(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Wt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const o=i.getFlattenedFilters();for(const c of o)W2(a,c),a=fc(a,c)})(e._query,t),new Pn(e.firestore,e.converter,fc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hu extends qu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Hu(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Di(i,a)})(e._query,this._field,this._direction);return new Pn(e.firestore,e.converter,Oy(e._query,t))}}function Ua(n,e="asc"){const t=e,r=Ts("orderBy",n);return Hu._create(r,t)}class ju extends qu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ju(e,t,r)}_apply(e){return new Pn(e.firestore,e.converter,uo(e._query,this._limit,this._limitType))}}function pp(n){return ju._create("limit",n,"F")}function fp(n,e,t){if(typeof(t=Ce(t))=="string"){if(t==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vm(e)&&t.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ye.fromString(t));if(!K.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cd(n,new K(r))}if(t instanceof xe)return Cd(n,t._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ko(t)}.`)}function mp(n,e){if(!Array.isArray(n)||n.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function W2(n,e){const t=(function(s,i){for(const a of s)for(const o of a.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function G2(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ai{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cr extends j2{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ts("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Cr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cr._jsonSchema={type:Ve("string",Cr._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class Ba extends Cr{data(e={}){return super.data(e)}}class Rr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ba(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((o=>{He(s._snapshot.query)?Ac(s._snapshot.query):tu(s.query._query);const c=new Ba(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ai(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((o=>i||o.type!==3)).map((o=>{const c=new Ba(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ai(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return o.type!==0&&(u=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),d=a.indexOf(o.doc.key)),{type:LA(o.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr._jsonSchemaVersion="firestore/querySnapshot/1.0",Rr._jsonSchema={type:Ve("string",Rr._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){n=$t(n,xe);const e=$t(n.firestore,Vr),t=Xo(e);return CA(t,n._key).then((r=>Q2(e,n,r)))}function Gl(n){n=$t(n,Pn);const e=$t(n.firestore,Vr),t=Xo(e),r=new Bu(e);return z2(n._query),RA(t,n._query).then((s=>new Rr(e,r,n,s)))}function OA(n,e,t){n=$t(n,xe);const r=$t(n.firestore,Vr),s=G2(n.converter,e,t),i=lu(r);return K2(r,[s2(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,tn.none())])}function Fa(n,e){const t=$t(n.firestore,Vr),r=Zn(n),s=G2(n.converter,e),i=lu(n.firestore);return K2(t,[s2(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then((()=>r))}function VA(n,...e){var u,d,p;n=Ce(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||hp(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(hp(e[r])){const _=e[r];e[r]=(u=_.next)==null?void 0:u.bind(_),e[r+1]=(d=_.error)==null?void 0:d.bind(_),e[r+2]=(p=_.complete)==null?void 0:p.bind(_)}let i,a,o;if(n instanceof xe)a=$t(n.firestore,Vr),o=Uo(n._key.path),i={next:_=>{e[r]&&e[r](Q2(a,n,_))},error:e[r+1],complete:e[r+2]};else{const _=$t(n,Pn);a=$t(_.firestore,Vr),o=_._query;const w=new Bu(a);i={next:S=>{e[r]&&e[r](new Rr(a,w,_,S))},error:e[r+1],complete:e[r+2]},z2(n._query)}const c=Xo(a);return SA(c,o,s,i)}function K2(n,e){const t=Xo(n);return xA(t,e)}function Q2(n,e,t){const r=t.docs.get(e._key),s=new Bu(n);return new Cr(n,s,e._key,r,new ai(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){F9(qr),Ht(new Vt("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),o=new Vr(new H9(r.getProvider("auth-internal")),new W9(a,r.getProvider("app-check-internal")),hy(a,s),a);return i={useFetchStreams:t,...i},o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),yt(cp,up,e),yt(cp,up,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2="firebasestorage.googleapis.com",X2="storageBucket",MA=120*1e3,UA=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends Ut{constructor(e,t,r=0){super(Kl(e),`Firebase Storage: ${t} (${Kl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function Kl(n){return"storage/"+n}function zu(){const n="An unknown error occurred, please check the error payload for server response.";return new ke(Pe.UNKNOWN,n)}function BA(n){return new ke(Pe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function FA(n){return new ke(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qA(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(Pe.UNAUTHENTICATED,n)}function $A(){return new ke(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HA(n){return new ke(Pe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function jA(){return new ke(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zA(){return new ke(Pe.CANCELED,"User canceled the upload/download.")}function WA(n){return new ke(Pe.INVALID_URL,"Invalid URL '"+n+"'.")}function GA(n){return new ke(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function KA(){return new ke(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+X2+"' property when initializing the app?")}function QA(){return new ke(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function YA(){return new ke(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XA(n){return new ke(Pe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sc(n){return new ke(Pe.INVALID_ARGUMENT,n)}function J2(){return new ke(Pe.APP_DELETED,"The Firebase app was deleted.")}function JA(n){return new ke(Pe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yi(n,e){return new ke(Pe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Zs(n){throw new ke(Pe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Pt.makeFromUrl(e,t)}catch{return new Pt(e,"")}if(r.path==="")return r;throw GA(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(ae){ae.path.charAt(ae.path.length-1)==="/"&&(ae.path_=ae.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function u(ae){ae.path_=decodeURIComponent(ae.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${d}/b/${s}/o${_}`,"i"),S={bucket:1,path:3},P=t===Y2?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${D}`,"i"),X=[{regex:o,indices:c,postModify:i},{regex:w,indices:S,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let ae=0;ae<X.length;ae++){const fe=X[ae],F=fe.regex.exec(e);if(F){const T=F[fe.indices.bucket];let g=F[fe.indices.path];g||(g=""),r=new Pt(T,g),fe.postModify(r);break}}if(r==null)throw WA(e);return r}}class ZA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n,e,t){let r=1,s=null,i=null,a=!1,o=0;function c(){return o===2}let u=!1;function d(...D){u||(u=!0,e.apply(null,D))}function p(D){s=setTimeout(()=>{s=null,n(w,c())},D)}function _(){i&&clearTimeout(i)}function w(D,...U){if(u){_();return}if(D){_(),d.call(null,D,...U);return}if(c()||a){_(),d.call(null,D,...U);return}r<64&&(r*=2);let X;o===1?(o=2,X=0):X=(r+Math.random())*1e3,p(X)}let S=!1;function P(D){S||(S=!0,_(),!u&&(s!==null?(D||(o=2),clearTimeout(s),p(0)):D||(o=1)))}return p(0),i=setTimeout(()=>{a=!0,P(!0)},t),P}function tb(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n){return n!==void 0}function rb(n){return typeof n=="object"&&!Array.isArray(n)}function Wu(n){return typeof n=="string"||n instanceof String}function gp(n){return Gu()&&n instanceof Blob}function Gu(){return typeof Blob<"u"}function yp(n,e,t,r){if(r<e)throw Sc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Sc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Z2(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var xr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(xr||(xr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t,r,s,i,a,o,c,u,d,p,_=!0,w=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=_,this.isUsingEmulator=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,P)=>{this.resolve_=S,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ia(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=o=>{const c=o.loaded,u=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const o=i.getErrorCode()===xr.NO_ERROR,c=i.getStatus();if(!o||sb(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===xr.ABORT;r(!1,new Ia(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ia(u,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,o=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(o,o.getResponse());nb(c)?i(c):i()}catch(c){a(c)}else if(o!==null){const c=zu();c.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,c)):a(c)}else if(s.canceled){const c=this.appDelete_?J2():zA();a(c)}else{const c=jA();a(c)}};this.canceled_?t(!1,new Ia(!1,null,!0)):this.backoffId_=eb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ia{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function ab(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ob(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function cb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ub(n,e,t,r,s,i,a=!0,o=!1){const c=Z2(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return lb(d,e),ab(d,t),ob(d,i),cb(d,r),new ib(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function db(...n){const e=hb();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Gu())return new Blob(n);throw new ke(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n){if(typeof atob>"u")throw XA("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ql{constructor(e,t){this.data=e,this.contentType=t||null}}function mb(n,e){switch(n){case Jt.RAW:return new Ql(eg(e));case Jt.BASE64:case Jt.BASE64URL:return new Ql(tg(n,e));case Jt.DATA_URL:return new Ql(yb(e),vb(e))}throw zu()}function eg(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function gb(n){let e;try{e=decodeURIComponent(n)}catch{throw yi(Jt.DATA_URL,"Malformed data URL.")}return eg(e)}function tg(n,e){switch(n){case Jt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw yi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Jt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw yi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=fb(e)}catch(s){throw s.message.includes("polyfill")?s:yi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class ng{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw yi(Jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=_b(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yb(n){const e=new ng(n);return e.base64?tg(Jt.BASE64,e.rest):gb(e.rest)}function vb(n){return new ng(n).contentType}function _b(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){let r=0,s="";gp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(gp(this.data_)){const r=this.data_,s=pb(r,e,t);return s===null?null:new Gn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Gn(r,!0)}}static getBlob(...e){if(Gu()){const t=e.map(r=>r instanceof Gn?r.data_:r);return new Gn(db.apply(null,t))}else{const t=e.map(a=>Wu(a)?mb(Jt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let o=0;o<a.length;o++)s[i++]=a[o]}),new Gn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){let e;try{e=JSON.parse(n)}catch{return null}return rb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bb(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function sg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n,e){return e}class lt{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Eb}}let Ta=null;function wb(n){return!Wu(n)||n.length<2?n:sg(n)}function ig(){if(Ta)return Ta;const n=[];n.push(new lt("bucket")),n.push(new lt("generation")),n.push(new lt("metageneration")),n.push(new lt("name","fullPath",!0));function e(i,a){return wb(a)}const t=new lt("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new lt("size");return s.xform=r,n.push(s),n.push(new lt("timeCreated")),n.push(new lt("updated")),n.push(new lt("md5Hash",null,!0)),n.push(new lt("cacheControl",null,!0)),n.push(new lt("contentDisposition",null,!0)),n.push(new lt("contentEncoding",null,!0)),n.push(new lt("contentLanguage",null,!0)),n.push(new lt("contentType",null,!0)),n.push(new lt("metadata","customMetadata",!0)),Ta=n,Ta}function Ib(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Pt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Tb(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return Ib(r,n),r}function ag(n,e,t){const r=rg(e);return r===null?null:Tb(n,r,t)}function Sb(n,e,t,r){const s=rg(e);if(s===null||!Wu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const d=n.bucket,p=n.fullPath,_="/b/"+a(d)+"/o/"+a(p),w=Ku(_,t,r),S=Z2({alt:"media",token:u});return w+S})[0]}function Cb(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class og{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(n){if(!n)throw zu()}function Rb(n,e){function t(r,s){const i=ag(n,s,e);return lg(i!==null),i}return t}function xb(n,e){function t(r,s){const i=ag(n,s,e);return lg(i!==null),Sb(i,s,n.host,n._protocol)}return t}function cg(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=$A():s=qA():t.getStatus()===402?s=FA(n.bucket):t.getStatus()===403?s=HA(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Pb(n){const e=cg(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=BA(n.path)),i.serverResponse=s.serverResponse,i}return t}function kb(n,e,t){const r=e.fullServerUrl(),s=Ku(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new og(s,i,xb(n,t),a);return o.errorHandler=Pb(e),o}function Nb(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Db(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Nb(null,e)),r}function Lb(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let X="";for(let ae=0;ae<2;ae++)X=X+Math.random().toString().slice(2);return X}const c=o();a["Content-Type"]="multipart/related; boundary="+c;const u=Db(e,r,s),d=Cb(u,t),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+c+"--",w=Gn.getBlob(p,r,_);if(w===null)throw QA();const S={name:u.fullPath},P=Ku(i,n.host,n._protocol),D="POST",U=n.maxUploadRetryTime,q=new og(P,D,Rb(n,t),U);return q.urlParams=S,q.headers=a,q.body=w.uploadData(),q.errorHandler=cg(e),q}class Ob{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Zs("cannot .send() more than once");if(Fr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Vb extends Ob{initXhr(){this.xhr_.responseType="text"}}function ug(){return new Vb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t){this._service=e,t instanceof Pt?this._location=t:this._location=Pt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Mr(e,t)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return sg(this._location.path)}get storage(){return this._service}get parent(){const e=Ab(this._location.path);if(e===null)return null;const t=new Pt(this._location.bucket,e);return new Mr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw JA(e)}}function Mb(n,e,t){n._throwIfRoot("uploadBytes");const r=Lb(n.storage,n._location,ig(),new Gn(e,!0),t);return n.storage.makeRequestWithTokens(r,ug).then(s=>({metadata:s,ref:n}))}function Ub(n){n._throwIfRoot("getDownloadURL");const e=kb(n.storage,n._location,ig());return n.storage.makeRequestWithTokens(e,ug).then(t=>{if(t===null)throw YA();return t})}function Bb(n,e){const t=bb(n._location.path,e),r=new Pt(n._location.bucket,t);return new Mr(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(n){return/^[A-Za-z]+:\/\//.test(n)}function qb(n,e){return new Mr(n,e)}function hg(n,e){if(n instanceof Qu){const t=n;if(t._bucket==null)throw KA();const r=new Mr(t,t._bucket);return e!=null?hg(r,e):r}else return e!==void 0?Bb(n,e):n}function $b(n,e){if(e&&Fb(e)){if(n instanceof Qu)return qb(n,e);throw Sc("To use ref(service, url), the first argument must be a Storage instance.")}else return hg(n,e)}function vp(n,e){const t=e==null?void 0:e[X2];return t==null?null:Pt.makeFromBucketSpec(t,n)}function Hb(n,e,t,r={}){n.host=`${e}:${t}`;const s=Fr(e);s&&Dc(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Hp(i,n.app.options.projectId))}class Qu{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=Y2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=MA,this._maxUploadRetryTime=UA,this._requests=new Set,s!=null?this._bucket=Pt.makeFromBucketSpec(s,this._host):this._bucket=vp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=vp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Mr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new ZA(J2());{const a=ub(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const _p="@firebase/storage",Ap="0.14.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="storage";function jb(n,e,t){return n=Ce(n),Mb(n,e,t)}function zb(n){return n=Ce(n),Ub(n)}function Wb(n,e){return n=Ce(n),$b(n,e)}function Gb(n=Io(),e){n=Ce(n);const r=pr(n,dg).getImmediate({identifier:e}),s=Bp("storage");return s&&Kb(r,...s),r}function Kb(n,e,t,r={}){Hb(n,e,t,r)}function Qb(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Qu(t,r,s,e,qr)}function Yb(){Ht(new Vt(dg,Qb,"PUBLIC").setMultipleInstances(!0)),yt(_p,Ap,""),yt(_p,Ap,"esm2020")}Yb();const Xb={apiKey:"AIzaSyBF4P62ICvi8NcXTV1hqYr6ktrzr_Pwg4g",authDomain:"heritagevault-12a72.firebaseapp.com",projectId:"heritagevault-12a72",storageBucket:"heritagevault-12a72.firebasestorage.app",messagingSenderId:"357035240092",appId:"1:357035240092:web:ab95eef42e90105ba15b59",measurementId:"G-RVDX527SFW"},Zo=Kp(Xb),ut=S9(Zo),dt=PA(Zo),Jb=Gb(Zo);o3().then(n=>(n&&i3(Zo),n));const Yl=n=>({id:n.id,...n.data()});async function Zb(n){if(!n.defaultVaultId)return null;const e=n.defaultVaultId,[t,r,s,i]=await Promise.all([hs(Zn(dt,`vaults/${e}`)),Gl(Ma(Jn(dt,`vaults/${e}/memories`),dp("archived","==",!1),Ua("createdAt","desc"),pp(12))),Gl(Ma(Jn(dt,`vaults/${e}/familyMembers`),Ua("fullName","asc"))),Gl(Ma(Jn(dt,`vaults/${e}/stories`),dp("status","==","published"),Ua("updatedAt","desc"),pp(12)))]);return t.exists()?{vaultId:e,vault:t.data(),memories:r.docs.map(a=>Yl(a)),familyMembers:s.docs.map(a=>Yl(a)),stories:i.docs.map(a=>Yl(a))}:null}const pg=n=>n.toLocaleLowerCase();function eE(n,e){if(!e.length)return!0;const t=pg([n.title,n.description,n.location??"",...n.tags??[]].join(" "));return e.some(r=>t.includes(r))}function tE(n,e){var d;const t=((d=pg(e).match(/[a-z]{3,}/g))==null?void 0:d.filter(p=>!["about","family","their","show","tell","with","from","that","this","what","where","when"].includes(p)))??[],r=n.memories.filter(p=>eE(p,t)),s=r.length?r:n.memories,i=[...new Set(s.map(p=>p.year).filter(p=>p!==null))].sort((p,_)=>p-_),a=new Map;s.forEach(p=>{var _;(_=p.location)!=null&&_.trim()&&a.set(p.location,(a.get(p.location)??0)+1)});const o=[...a.entries()].map(([p,_])=>({name:p,count:_})).sort((p,_)=>_.count-p.count),c=t.length?`matching “${t.join(" ")}”`:"across your archive",u=s.length?`${s.length} ${s.length===1?"memory":"memories"} ${c}, connected to ${n.members.length} family member${n.members.length===1?"":"s"}.`:"Your visual answer will appear here as soon as your vault contains memories or family members.";return{prompt:e,verdict:u,memories:s,members:n.members,years:i,locations:o,evidence:s.slice(0,6).map(p=>({title:p.title,detail:p.description||"A preserved family memory.",kind:p.type,year:p.year}))}}const we=n=>{const e=document.createElement("span");return e.textContent=n,e.innerHTML},bp=n=>n?String(n):"Undated";function Yu(n){const e=new Map;return n.members.forEach(t=>{const r=t.fullName.trim().toLocaleLowerCase();if(!r)return;const s=e.get(r);if(s){s.records+=1,!s.relationship&&t.relationship&&(s.relationship=t.relationship);return}e.set(r,{id:t.id,fullName:t.fullName,relationship:t.relationship||"Family member",records:1})}),[...e.values()].slice(0,8)}function nE(n){const e=Yu(n);if(!e.length)return'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">account_tree</span><p>Add a relative to begin your living constellation.</p><small>Each new connection becomes explorable here.</small></div>';const t=e.map((s,i)=>({x:15+i*31%72,y:i%2?66:28}));return`<div class="atlas-network atlas-network--constellation"><svg class="atlas-network__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${t.slice(1).map(s=>`<line x1="${t[0].x}" y1="${t[0].y}" x2="${s.x}" y2="${s.y}" />`).join("")}</svg>${e.map((s,i)=>{const a=t[i],o=s.records>1?` · ${s.records} linked records`:"";return`<button class="atlas-person" data-atlas-person="${we(s.id)}" data-atlas-label="${we(s.fullName)}" style="--x:${a.x}%;--y:${a.y}%;--atlas-delay:${i*70}ms"><span class="atlas-person__dot"></span><strong>${we(s.fullName)}</strong><small>${we(s.relationship)}${o}</small></button>`}).join("")}</div>`}function rE(n){if(!n.years.length)return'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">calendar_month</span><p>Add a year to a memory to unlock the living timeline.</p><small>Chronology turns your archive into a story.</small></div>';const e=new Map;n.memories.forEach(i=>{i.year&&e.set(i.year,(e.get(i.year)??0)+1)});const t=n.years[0],r=n.years.at(-1)??t,s=Math.max(1,r-t);return`<div class="atlas-timeline"><div class="atlas-timeline__range"><span>${t}</span><strong>${r===t?"A defining year":`${r-t} years of family history`}</strong><span>${r}</span></div><div class="atlas-timeline__rail"></div>${n.years.map(i=>`<button class="atlas-timeline__point" data-atlas-year="${i}" data-atlas-label="${i} · ${e.get(i)??0} memor${e.get(i)===1?"y":"ies"}" style="left:${(i-t)/s*90+5}%"><span style="--point-size:${22+Math.min(12,(e.get(i)??1)*4)}px"></span><b>${i}</b><small>${e.get(i)??0}</small></button>`).join("")}</div>`}function sE(n){return n.locations.length?`<div class="atlas-map" aria-label="Memory geography"><div class="atlas-map__legend"><span>Memory density</span><i></i><i></i><i></i></div>${n.locations.slice(0,7).map((e,t)=>{const r=15+t*29%68,s=18+t*37%56;return`<button class="atlas-map__place" data-atlas-location="${we(e.name)}" data-atlas-label="${we(e.name)} · ${e.count} memor${e.count===1?"y":"ies"}" style="left:${r}%;top:${s}%"><i style="--size:${24+Math.min(22,e.count*8)}px"></i><span>${we(e.name)} <b>${e.count}</b></span></button>`}).join("")}</div>`:'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">location_on</span><p>Places appear when memories include a location.</p><small>Add a city, home, or landmark to bring your map to life.</small></div>'}function iE(n){return n.evidence.length?`<div class="atlas-evidence">${n.evidence.map((e,t)=>`<button class="atlas-evidence__card" data-atlas-evidence="${t}" data-atlas-label="${we(e.title)} · ${bp(e.year)}"><span class="material-symbols-outlined">${e.kind==="photo"?"photo":e.kind==="audio"?"graphic_eq":"description"}</span><div><p>${we(e.title)}</p><small>${we(e.detail)}</small></div><b>${bp(e.year)}</b></button>`).join("")}</div>`:'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">verified</span><p>Evidence cards appear as memories are added.</p><small>Every visual answer stays traceable to its source.</small></div>'}function Xl(n,e){return e==="relationships"?`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Connected people</p><div class="atlas-expand-detail__grid">${Yu(n).map(r=>`<button type="button" data-atlas-person="${we(r.id)}" data-atlas-label="${we(r.fullName)} · ${we(r.relationship)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">person</span><span><b>${we(r.fullName)}</b><small>${we(r.relationship)}${r.records>1?` · ${r.records} records`:""}</small></span></button>`).join("")}</div></div>`:e==="places"?`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Places in this answer</p><div class="atlas-expand-detail__grid">${n.locations.map(t=>`<button type="button" data-atlas-location="${we(t.name)}" data-atlas-label="${we(t.name)} · ${t.count} memor${t.count===1?"y":"ies"}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">location_on</span><span><b>${we(t.name)}</b><small>${t.count} preserved memor${t.count===1?"y":"ies"}</small></span></button>`).join("")||'<p class="atlas-expand-detail__empty">Add locations to memories to build your family geography.</p>'}</div></div>`:`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Moments on the timeline</p><div class="atlas-expand-detail__grid">${n.memories.filter(t=>t.year).sort((t,r)=>(t.year??0)-(r.year??0)).map(t=>`<button type="button" data-atlas-year="${t.year}" data-atlas-label="${t.year} · ${we(t.title)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">event</span><span><b>${t.year} · ${we(t.title)}</b><small>${we(t.dateLabel||t.location||"Preserved family memory")}</small></span></button>`).join("")||'<p class="atlas-expand-detail__empty">Add years to memories to build a family timeline.</p>'}</div></div>`}function aE(n,e,t){const r=tE(e,t),s=r.years.length?`${r.years[0]}–${r.years.at(-1)}`:"Undated archive";n.innerHTML=`<section class="atlas-hero"><div><p class="atlas-eyebrow">HeritageAtlas · visual answer</p><h1>${we(t)}</h1><p>${we(r.verdict)}</p></div><div class="atlas-answer-mark"><span class="material-symbols-outlined">auto_awesome</span><small>Evidence-led</small></div></section><section class="atlas-insights" aria-label="Archive summary"><div><b>${r.memories.length}</b><span>memories in view</span></div><div><b>${Yu(r).length}</b><span>people connected</span></div><div><b>${r.locations.length}</b><span>places discovered</span></div><div><b>${s}</b><span>story horizon</span></div></section><section class="atlas-grid"><article class="atlas-panel atlas-panel--wide" data-atlas-panel="relationships"><header><div><span class="material-symbols-outlined">account_tree</span><p>Relationship constellation</p></div><button type="button" data-atlas-focus="relationships">Explore</button></header>${nE(r)}${Xl(r,"relationships")}</article><article class="atlas-panel" data-atlas-panel="places"><header><div><span class="material-symbols-outlined">map</span><p>Memory geography</p></div><button type="button" data-atlas-focus="places">Explore</button></header>${sE(r)}${Xl(r,"places")}</article><article class="atlas-panel atlas-panel--wide" data-atlas-panel="timeline"><header><div><span class="material-symbols-outlined">timeline</span><p>Living timeline</p></div><button type="button" data-atlas-focus="timeline">Explore</button></header>${rE(r)}${Xl(r,"timeline")}</article><article class="atlas-panel" data-atlas-panel="evidence"><header><div><span class="material-symbols-outlined">verified</span><p>Source evidence</p></div><span class="atlas-count">${r.evidence.length} records</span></header>${iE(r)}</article></section><aside class="atlas-inspector" aria-live="polite"><span class="material-symbols-outlined">touch_app</span><p>Select a person, year, place, or source to inspect the connection.</p></aside>`,n.querySelector(".atlas-hero .atlas-eyebrow").textContent="Heritage Atlas · visual answer";const i=n.querySelector(".atlas-inspector"),a=o=>{n.querySelectorAll(".is-selected").forEach(c=>c.classList.remove("is-selected")),o.classList.add("is-selected"),i&&(i.innerHTML=`<span class="material-symbols-outlined">auto_awesome</span><p><b>${we(o.dataset.atlasLabel??"Archive connection")}</b><br/>This signal is drawn from your private archive and can be explored alongside its related memories.</p>`)};n.querySelectorAll("[data-atlas-year], [data-atlas-location], [data-atlas-person], [data-atlas-evidence]").forEach(o=>o.addEventListener("click",()=>a(o))),n.querySelectorAll("[data-atlas-focus]").forEach(o=>o.addEventListener("click",()=>{const c=n.querySelector(`[data-atlas-panel="${o.dataset.atlasFocus}"]`),u=!(c!=null&&c.classList.contains("is-expanded"));n.querySelectorAll("[data-atlas-panel]").forEach(d=>d.classList.remove("is-expanded")),n.querySelectorAll("[data-atlas-focus]").forEach(d=>{d.textContent="Explore"}),c==null||c.classList.toggle("is-expanded",u),o.textContent=u?"Collapse":"Explore",c==null||c.scrollIntoView({behavior:"smooth",block:"center"}),c==null||c.classList.add("is-focused"),window.setTimeout(()=>c==null?void 0:c.classList.remove("is-focused"),1100)}))}function oE(n){var r,s,i;const e=document.createElement("main");e.id="atlas-screen",e.className="atlas-screen",e.innerHTML='<div class="atlas-app-shell"><aside data-sidebar class="atlas-sidebar vault-nav hidden flex-col p-6 lg:flex"><div class="mb-10"><img class="brand-logo" src="./heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">explore</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md" data-logout-label>Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="mt-6 border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div></aside><section class="atlas-main"><header class="atlas-topbar"><button type="button" class="atlas-brand" data-atlas-back><img src="./heritageatlas-mark.svg" alt=""/><span>HeritageAtlas</span></button><p>Ask your archive. Explore the answer.</p><button type="button" class="atlas-close" data-atlas-back aria-label="Return to Vault"><span class="material-symbols-outlined">close</span></button></header><div class="atlas-shell"><section class="atlas-intro"><div><p class="atlas-eyebrow">Beyond the wall of text</p><h2>Your family, made explorable.</h2><p>Every answer is a timeline, relationship constellation, map, and trail back to the original memories.</p></div><form class="atlas-query" data-atlas-query><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask HeritageAtlas" value="How did our family story unfold over time?" /><button type="submit">Explore answer <span class="material-symbols-outlined">arrow_forward</span></button></form><div class="atlas-suggestions"><button type="button">How did our family story unfold over time?</button><button type="button">Show the people connected to our memories</button><button type="button">Where do our memories take place?</button></div></section><div data-atlas-answer class="atlas-answer"><div class="atlas-loading">Preparing an evidence-led visual answer…</div></div></div></section></div>',(r=e.querySelector(".brand-logo"))==null||r.setAttribute("alt","Heritage Atlas"),(s=e.querySelector("[aria-label='HeritageAtlas navigation']"))==null||s.setAttribute("aria-label","Heritage Atlas navigation");const t=e.querySelector("[data-dashboard-view='atlas']");return t&&(t.lastChild.textContent="Heritage Atlas"),e.querySelector(".atlas-brand span").textContent="Heritage Atlas",(i=e.querySelector("[data-atlas-query] input"))==null||i.setAttribute("aria-label","Ask Heritage Atlas"),e.querySelectorAll("[data-atlas-back]").forEach(a=>a.addEventListener("click",n)),e}function lE(n,e){const t=n.querySelector("[data-atlas-answer]"),r=n.querySelector("[data-atlas-query]"),s=r==null?void 0:r.querySelector("input"),i=async a=>{if(!t)return;t.innerHTML='<div class="atlas-loading">Reading the memories, people, places, and dates in your archive…</div>';const o=await e();if(!o){t.innerHTML='<div class="atlas-empty atlas-empty--large"><span class="material-symbols-outlined">inventory_2</span><h3>Your Atlas is ready for its first memory.</h3><p>Add a few memories and relatives, then return here to explore your family story visually.</p></div>';return}aE(t,o,a)};r==null||r.addEventListener("submit",a=>{a.preventDefault(),i((s==null?void 0:s.value.trim())||"How did our family story unfold over time?")}),n.querySelectorAll(".atlas-suggestions button").forEach(a=>a.addEventListener("click",()=>{var o;s&&(s.value=((o=a.textContent)==null?void 0:o.trim())||""),i((s==null?void 0:s.value)||"")})),i((s==null?void 0:s.value)||"How did our family story unfold over time?")}const It=n=>{const e=document.querySelector(n);if(!e)throw new Error(`Missing required element: ${n}`);return e},me={landing:It(".landing-page"),login:It("#login-screen"),vault:It("#vault-screen"),familyMap:It("#family-map-screen"),storyMode:It("#story-mode-screen"),loginForm:It("#loginForm"),registerForm:It("#registerForm"),authHeading:It("#login-screen header h2"),authSubheading:It("#login-screen header p"),authSwitch:It(".auth-switch-wrapper"),emailDivider:It(".relative.mb-8.flex.items-center"),footerPrompt:It("#footerPrompt"),authError:It("#authError")};let dn="landing",fg="login",wn=[],Ir,ds=null;async function cE(){const n=ut.currentUser;if(!n)return null;const e=await hs(Zn(dt,"users",n.uid));if(!e.exists())return null;const t=await Zb(e.data());return t?{vault:t.vault,members:t.familyMembers,memories:t.memories,stories:t.stories}:null}function Ao(n){const e=document.createElement("span");return e.textContent=n,e.innerHTML}function uE(n){const e=n.birthYear??"",t=n.deathYear??"Present";return e?`${e}–${t}`:String(t)}function mg(n){const e=n.querySelector("[data-family-connectors]");if(!e)return;const t=n.getBoundingClientRect();e.replaceChildren(),wn.filter(r=>r.parentId).forEach(r=>{const s=n.querySelector(`[data-family-node-id="${r.parentId}"]`),i=n.querySelector(`[data-family-node-id="${r.id}"]`);if(!s||!i)return;const a=s.getBoundingClientRect(),o=i.getBoundingClientRect(),c=a.left+a.width/2-t.left,u=a.bottom-t.top,d=o.left+o.width/2-t.left,p=o.top-t.top,_=u+Math.max(30,(p-u)/2),w=document.createElementNS("http://www.w3.org/2000/svg","path");w.setAttribute("d",`M ${c} ${u} V ${_} H ${d} V ${p}`),w.setAttribute("class","family-connector"),e.append(w)})}function Fi(){var i,a;const n=document.querySelector("#family-map-screen .family-map-canvas"),e=n==null?void 0:n.querySelector("[data-family-map-content]");if(!n||!e)return;if(!wn.length){e.innerHTML='<div class="flex min-h-[520px] items-center justify-center"><div class="max-w-md rounded-2xl border border-dashed border-secondary/40 bg-surface-container-lowest/80 p-10 text-center shadow-sm"><span class="material-symbols-outlined mb-4 text-4xl text-secondary">account_tree</span><h3 class="font-display-lg text-2xl font-semibold text-primary">Your family map is ready</h3><p class="mt-3 leading-7 text-on-surface-variant">Add your first family member, then choose who they are connected to as your archive grows.</p><button data-open-relative class="mt-6 rounded-full bg-primary px-5 py-3 font-label-md text-label-md text-on-primary">Add your first relative</button></div></div>',(i=e.querySelector("[data-open-relative]"))==null||i.addEventListener("click",()=>document.dispatchEvent(new Event("heritage:add-relative")));return}const t=new Map(wn.map(o=>[o.id,o])),r=(o,c=new Set)=>!o.parentId||!t.has(o.parentId)||c.has(o.id)?0:(c.add(o.id),r(t.get(o.parentId),c)+1),s=new Map;wn.forEach(o=>{const c=r(o);s.set(c,[...s.get(c)??[],o])}),e.innerHTML=[...s.entries()].sort(([o],[c])=>o-c).map(([o,c])=>`<div class="family-generation grid gap-7 ${c.length>1?"sm:grid-cols-2 xl:grid-cols-3":"justify-items-center"}" data-generation="${o}">${c.map(u=>`<button type="button" data-family-node-id="${u.id}" class="map-node ${ds===u.id?"is-selected":""} relative z-10 w-full max-w-xs rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 text-center"><span class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined text-2xl">person</span></span><span class="block font-display-lg text-xl font-semibold text-primary">${Ao(u.fullName)}</span><span class="mt-1 block text-xs uppercase tracking-widest text-secondary">${Ao(u.relationship||"Family member")} · ${uE(u)}</span></button>`).join("")}</div>`).join("")+'<button data-open-relative type="button" class="relative z-10 mx-auto flex min-h-36 w-full max-w-xs items-center justify-center rounded-2xl border border-dashed border-secondary/40 bg-surface-container-low p-5 text-center text-secondary"><span><span class="material-symbols-outlined mb-1 text-2xl">add</span><span class="block font-label-md text-label-md">Add a connected relative</span></span></button>',e.querySelectorAll("[data-family-node-id]").forEach(o=>o.addEventListener("click",()=>{ds=o.dataset.familyNodeId??null,Fi()})),(a=e.querySelector("[data-open-relative]"))==null||a.addEventListener("click",()=>document.dispatchEvent(new Event("heritage:add-relative"))),requestAnimationFrame(()=>mg(n))}async function hE(n){var r;const t=(r=(await hs(Zn(dt,"users",n))).data())==null?void 0:r.defaultVaultId;if(Ir==null||Ir(),!t){wn=[],Fi();return}Ir=VA(Ma(Jn(dt,`vaults/${t}/familyMembers`),Ua("fullName","asc")),s=>{wn=s.docs.map(i=>({id:i.id,...i.data()})),ds&&!wn.some(i=>i.id===ds)&&(ds=null),Fi()})}function pn(n){dn=n,me.landing.classList.toggle("is-hidden",n!=="landing"),me.login.style.display=n==="login"?"flex":"none",me.vault.style.display=n==="vault"?"flex":"none",me.familyMap.style.display=n==="family-map"?"flex":"none",me.storyMode.style.display=n==="story-mode"?"block":"none";const e=document.getElementById("atlas-screen");e&&(e.style.display=n==="atlas"?"block":"none"),window.scrollTo({top:0,behavior:"smooth"}),history.pushState({view:n},"",n==="landing"?"#":`#${n}`)}function Cc(n){fg=n,qa();const e=n==="register";me.loginForm.classList.toggle("is-hidden",e),me.registerForm.classList.toggle("is-hidden",!e);const t=me.authSwitch.querySelector(".auth-switch-thumb");t&&t.setAttribute("data-active",n),me.authHeading.textContent=e?"Begin your legacy":"Enter the Vault",me.authSubheading.textContent=e?"Create a sanctuary for the stories that matter.":"Sign in to continue preserving what matters.",me.emailDivider.classList.toggle("is-hidden",e),me.footerPrompt.innerHTML=e?'Already have a vault? <a class="font-semibold text-primary hover:underline" href="#" data-login-link>Enter the Vault</a>':`Don't have a vault yet? <a class="font-semibold text-primary hover:underline" href="#" data-register-link>Create account</a>`,document.querySelectorAll(".auth-tab").forEach(r=>{const s=r.dataset.mode===n;r.setAttribute("aria-selected",String(s)),r.classList.toggle("active",s)})}function qa(){me.authError.textContent="",me.authError.classList.add("hidden")}function ei(n){me.authError.textContent=n,me.authError.classList.remove("hidden")}function Jl(n){const e=n instanceof Error&&"code"in n?String(n.code):"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")?"That email and password do not match an account.":e.includes("email-already-in-use")?"An account already exists for this email. Try signing in instead.":e.includes("weak-password")?"Choose a stronger password with at least 8 characters.":e.includes("invalid-email")?"Enter a valid email address.":"We could not complete that request. Please try again."}function Sa(n,e,t){const r=n.querySelector('button[type="submit"]');r&&(r.disabled=e,r.textContent=e?"Securing your vault…":t)}async function dE(n){const e=Zn(dt,"users",n.uid),t=await Fa(Jn(dt,"vaults"),{name:`${n.displayName||"My family"}’s Vault`,description:"A private home for the stories that matter.",ownerId:n.uid,memberIds:[n.uid],coverImageUrl:null,createdAt:fn(),updatedAt:fn()});await OA(e,{displayName:n.displayName||"Vault keeper",email:n.email||"",photoURL:null,defaultVaultId:t.id,createdAt:fn(),lastSeenAt:fn()},{merge:!0})}function pE(){var fe,F,T;const n=document.createElement("div");n.className="invite-backdrop",n.innerHTML='<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">add_photo_alternate</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a new memory</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Preserve a photo, document, recording, or the story behind it.</p></div><button type="button" data-close-memory aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Memory title</label><input name="title" required class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Sunday at grandmother’s table" /></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Type</label><select name="type" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Year</label><input name="year" type="number" min="1000" max="2100" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="1958" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Description</label><textarea name="description" required rows="3" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="What should your family remember about this?" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Attachment <span class="font-normal text-on-surface-variant">(optional)</span></label><input name="asset" type="file" class="block w-full text-sm text-on-surface-variant" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></div><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="flex justify-end gap-3"><button type="button" data-close-memory class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></form></div>',document.body.append(n);const e=()=>n.classList.add("is-open");document.querySelectorAll("[data-new-memory]").forEach(g=>g.addEventListener("click",e)),n.querySelectorAll("[data-close-memory]").forEach(g=>g.addEventListener("click",()=>n.classList.remove("is-open"))),n.addEventListener("click",g=>{g.target===n&&n.classList.remove("is-open")}),(fe=n.querySelector("form"))==null||fe.addEventListener("submit",async g=>{var ge;g.preventDefault();const v=g.currentTarget,b=n.querySelector("[data-memory-status]");if(!v.reportValidity())return;if(!ut.currentUser){b&&(b.textContent="Sign in to save memories to your private vault.",b.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const C=(ge=(await hs(Zn(dt,"users",ut.currentUser.uid))).data())==null?void 0:ge.defaultVaultId;if(!C){b&&(b.textContent="No vault is associated with this account yet.",b.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const E=v.querySelector('button[type="submit"]');E&&(E.disabled=!0,E.textContent="Saving memory…");try{const Ke=new FormData(v),kn=Ke.get("asset");let ta="";if(kn instanceof File&&kn.size>0){const Gr=`vaults/${C}/memories/${crypto.randomUUID()}-${kn.name.replace(/[^a-zA-Z0-9._-]/g,"-")}`,Kr=await jb(Wb(Jb,Gr),kn);ta=await zb(Kr.ref)}await Fa(Jn(dt,`vaults/${C}/memories`),{title:Ke.get("title"),description:Ke.get("description"),type:Ke.get("type"),assetUrl:ta,thumbnailUrl:null,year:Number(Ke.get("year"))||null,dateLabel:null,location:null,familyMemberIds:[],tags:[],archived:!1,createdBy:ut.currentUser.uid,createdAt:fn(),updatedAt:fn()}),v.reset(),n.classList.remove("is-open")}catch{b&&(b.textContent="We could not save this memory. Please try again.",b.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{E&&(E.disabled=!1,E.textContent="Save memory")}});const t=document.querySelector("#story-mode-screen aside");t&&(t.className="vault-nav vault-nav--heritage hidden flex-col p-6 lg:flex");const r=document.createElement("div");r.className="invite-backdrop",r.innerHTML='<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">account_tree</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a relative</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Create a person, then connect them to their parent or ancestor.</p></div><button type="button" data-close-relative aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Full name</label><input name="fullName" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Martha Banda" required /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Relationship</label><input name="relationship" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Daughter" required /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Connect to</label><select name="parentId" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="">No connection yet — start a new branch</option></select><p class="mt-2 text-xs text-on-surface-variant">Choose a parent or ancestor to draw a relationship line on the map.</p></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Birth year</label><input name="birthYear" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" type="number" min="1000" max="2100" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Death year</label><input name="deathYear" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" type="number" min="1000" max="2100" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Notes</label><textarea name="notes" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" rows="3" placeholder="What should your family remember?"></textarea></div><p data-relative-status class="hidden rounded-lg px-4 py-3 text-sm"></p><div class="flex justify-end gap-3"><button type="button" data-close-relative class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save relative</button></div></form></div>',document.body.append(r);const s=()=>{const g=r.querySelector('select[name="parentId"]');g&&(g.innerHTML='<option value="">No connection yet — start a new branch</option>'+wn.map(v=>`<option value="${v.id}">${Ao(v.fullName)} · ${Ao(v.relationship||"Family member")}</option>`).join(""),g.value=ds??""),r.classList.add("is-open")};document.addEventListener("heritage:add-relative",s),document.querySelectorAll("[data-add-relative]").forEach(g=>g.addEventListener("click",s)),r.querySelectorAll("[data-close-relative]").forEach(g=>g.addEventListener("click",()=>r.classList.remove("is-open"))),r.addEventListener("click",g=>{g.target===r&&r.classList.remove("is-open")}),(F=r.querySelector("form"))==null||F.addEventListener("submit",async g=>{var Ke;g.preventDefault();const v=g.currentTarget;if(!v.reportValidity())return;const b=r.querySelector("[data-relative-status]");if(!ut.currentUser){b&&(b.textContent="Sign in to save this relative to your private family archive.",b.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const C=(Ke=(await hs(Zn(dt,"users",ut.currentUser.uid))).data())==null?void 0:Ke.defaultVaultId,E=new FormData(v);if(!C){b&&(b.textContent="No vault is associated with this account yet.",b.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const ge=v.querySelector('button[type="submit"]');ge&&(ge.disabled=!0,ge.textContent="Saving relative…");try{await Fa(Jn(dt,`vaults/${C}/familyMembers`),{fullName:E.get("fullName"),relationship:E.get("relationship"),parentId:E.get("parentId")||null,birthYear:Number(E.get("birthYear"))||null,deathYear:Number(E.get("deathYear"))||null,portraitUrl:null,notes:E.get("notes")||"",createdAt:fn(),updatedAt:fn()}),v.reset(),r.classList.remove("is-open")}catch(kn){b&&(b.textContent=(kn instanceof Error,"We could not save this relative. Please try again."),b.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{ge&&(ge.disabled=!1,ge.textContent="Save relative")}});const i=document.getElementById("inviteModal"),a=document.getElementById("inviteForm"),o=document.getElementById("inviteStatus"),c=()=>i==null?void 0:i.classList.remove("is-open");document.querySelectorAll("[data-invite-family]").forEach(g=>g.addEventListener("click",()=>{var v;i==null||i.classList.add("is-open"),(v=document.getElementById("inviteEmail"))==null||v.focus()})),document.querySelectorAll("[data-close-invite]").forEach(g=>g.addEventListener("click",c)),i==null||i.addEventListener("click",g=>{g.target===i&&c()}),a==null||a.addEventListener("submit",async g=>{var C;if(g.preventDefault(),!a.reportValidity())return;if(!ut.currentUser){o&&(o.textContent="Sign in to send a secure invitation from your family vault.",o.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const v=a.querySelector('button[type="submit"]'),b=document.getElementById("inviteEmail").value.trim().toLowerCase(),I=document.getElementById("inviteMessage").value.trim();v==null||v.setAttribute("disabled","true"),o&&(o.textContent="Creating secure invitation…",o.className="rounded-lg bg-surface-container px-4 py-3 text-sm text-on-surface-variant");try{const ge=(C=(await hs(Zn(dt,"users",ut.currentUser.uid))).data())==null?void 0:C.defaultVaultId;if(!ge)throw new Error("No vault is associated with this account.");await Fa(Jn(dt,`vaults/${ge}/invitations`),{email:b,message:I,invitedBy:ut.currentUser.uid,status:"pending",createdAt:fn()}),o&&(o.textContent="Invitation created. Your email client will open so you can send it.",o.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant"),window.location.href=`mailto:${encodeURIComponent(b)}?subject=${encodeURIComponent("You’re invited to HeritageVault")}&body=${encodeURIComponent(I||"I’ve invited you to join my HeritageVault family archive.")}`,setTimeout(()=>{a.reset(),c()},500)}catch(E){o&&(o.textContent=E instanceof Error?E.message:"We could not create the invitation. Please try again.",o.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{v==null||v.removeAttribute("disabled")}});const u=document.getElementById("memoryDetailModal"),d=document.getElementById("memoryDetailImage"),p=document.getElementById("memoryDetailTitle"),_=document.getElementById("memoryDetailType"),w=document.getElementById("memoryDetailYear"),S=document.getElementById("memoryDetailDescription"),P=document.getElementById("memoryDetailDateLabel");function D(g){const v=g.dataset.memoryTitle||"Untitled memory",b=g.dataset.memoryDescription||"",I=g.dataset.memoryType||"",C=g.dataset.memoryYear||"",E=g.dataset.memoryImage||"";p&&(p.textContent=v),_&&(_.textContent=I,_.style.display=I?"":"none"),w&&(w.textContent=C,w.style.display=C?"":"none"),S&&(S.textContent=b),d&&(E?(d.style.backgroundImage=`url("${E}")`,d.style.display=""):d.style.display="none"),P&&(P.textContent=C?`Captured in ${C}`:"Date unknown"),u==null||u.classList.add("is-open")}document.querySelectorAll("[data-memory-detail]").forEach(g=>{g.addEventListener("click",()=>D(g)),g.addEventListener("keydown",v=>{(v.key==="Enter"||v.key===" ")&&(v.preventDefault(),D(g))})}),document.querySelectorAll("[data-close-memory-detail]").forEach(g=>{g.addEventListener("click",()=>u==null?void 0:u.classList.remove("is-open"))}),u==null||u.addEventListener("click",g=>{g.target===u&&u.classList.remove("is-open")});const U=document.querySelector('#story-mode-screen input[placeholder="Ask about another family memory..."]'),q=(T=U==null?void 0:U.closest("div"))==null?void 0:T.querySelector("button");q==null||q.addEventListener("click",()=>{var C,E;const g=U==null?void 0:U.value.trim();if(!g||!U)return;const v=document.querySelector("#story-mode-screen article.story-paper");if(!v)return;const b=document.createElement("div");b.className="mb-6 ml-auto max-w-xl rounded-2xl bg-primary px-5 py-4 text-on-primary shadow-sm",b.textContent=g,(C=v.parentElement)==null||C.insertBefore(b,v);const I=document.createElement("div");I.className="mb-8 flex gap-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low px-5 py-4 text-sm leading-6 text-on-surface-variant",I.innerHTML='<span class="material-symbols-outlined text-secondary">auto_awesome</span><span>Your question has been added to this archive inquiry. I’ll use the memories and documents in your vault to build the answer as they become available.</span>',(E=v.parentElement)==null||E.insertBefore(I,v),U.value=""}),U==null||U.addEventListener("keydown",g=>{g.key==="Enter"&&(g.preventDefault(),q==null||q.click())}),document.querySelectorAll("[data-logout]").forEach(g=>{g.addEventListener("click",async()=>{var b;window.confirm("Log out of HeritageVault?")&&(g.disabled=!0,(b=g.querySelector("[data-logout-label]"))==null||b.replaceChildren(document.createTextNode("Signing out…")),await m8(ut).catch(()=>{}),pn("landing"))})}),document.querySelectorAll("[data-forgot-password]").forEach(g=>g.addEventListener("click",async v=>{v.preventDefault();const b=document.getElementById("email"),I=b.value.trim();if(!I||!b.checkValidity()){ei("Enter your email address first, then choose Forgot password."),b.focus();return}g.textContent="Sending reset link…",qa();try{await c8(ut,I),ei("Password reset instructions have been sent. Check your inbox and spam folder."),me.authError.classList.remove("bg-error-container/60","text-on-error-container"),me.authError.classList.add("bg-primary-fixed","text-on-primary-fixed-variant")}catch(C){ei(Jl(C))}finally{g.textContent="Forgot password?"}}));const X=localStorage.getItem("heritagevault-theme"),ae=g=>{document.documentElement.classList.toggle("dark",g),localStorage.setItem("heritagevault-theme",g?"dark":"light"),document.querySelectorAll(".brand-logo").forEach(v=>{v.src=v.hasAttribute("data-logo-inverse")||g?"/heritagevault-logo-light.svg":"/heritagevault-logo.svg"}),document.querySelectorAll("[data-theme-label]").forEach(v=>{v.textContent=g?"Light mode":"Dark mode"}),document.querySelectorAll("[data-theme-icon]").forEach(v=>{v.textContent=g?"light_mode":"dark_mode"})};ae(X==="dark"),document.querySelectorAll("[data-theme-toggle]").forEach(g=>g.addEventListener("click",()=>ae(!document.documentElement.classList.contains("dark")))),document.querySelectorAll("[data-login-cta]").forEach(g=>{g.addEventListener("click",v=>{v.preventDefault(),pn("login")})}),document.querySelectorAll("[data-dashboard-view]").forEach(g=>{g.addEventListener("click",v=>{v.preventDefault();const b=g.dataset.dashboardView;(b==="vault"||b==="family-map"||b==="story-mode"||b==="atlas")&&pn(b)})}),document.querySelectorAll("[data-atlas-open]").forEach(g=>g.addEventListener("click",()=>pn("atlas"))),document.querySelectorAll(".auth-tab").forEach(g=>{g.addEventListener("click",()=>Cc(g.dataset.mode))}),me.footerPrompt.addEventListener("click",g=>{const v=g.target.closest("a");v&&(g.preventDefault(),Cc(v.hasAttribute("data-login-link")?"login":"register"))}),me.loginForm.addEventListener("submit",g=>{if(g.preventDefault(),!me.loginForm.reportValidity())return;qa(),Sa(me.loginForm,!0,"Enter the Vault");const v=document.getElementById("email").value,b=document.getElementById("password").value;h8(ut,v,b).then(()=>pn("vault")).catch(I=>{Sa(me.loginForm,!1,"Enter the Vault"),ei(Jl(I))})}),me.registerForm.addEventListener("submit",g=>{if(g.preventDefault(),!me.registerForm.reportValidity())return;qa(),Sa(me.registerForm,!0,"Create my vault");const v=document.getElementById("registerEmail").value,b=document.getElementById("registerPassword").value,I=document.getElementById("firstName").value,C=document.getElementById("lastName").value;u8(ut,v,b).then(async({user:E})=>{await dE({...E,displayName:`${I} ${C}`.trim()}),pn("vault")}).catch(E=>{Sa(me.registerForm,!1,"Create my vault"),ei(Jl(E))})}),window.addEventListener("popstate",()=>{const g=window.location.hash.replace("#","");pn(g==="login"||g==="vault"||g==="family-map"||g==="story-mode"||g==="atlas"?g:"landing")})}function fE(){const n=document.querySelectorAll(".aw-reveal, .aw-reveal-left, .aw-reveal-right, .aw-reveal-scale");if(!n.length)return;const e=new IntersectionObserver(t=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-visible"),e.unobserve(r.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});n.forEach(t=>e.observe(t))}function mE(){const n=document.querySelector(".hero-image");n&&window.addEventListener("scroll",()=>{const t=window.scrollY*.15;n.style.transform=`translate3d(0, ${t}px, 0) scale(1.05)`},{passive:!0})}function Ep(n){var u;const e=((u=n==null?void 0:n.displayName)==null?void 0:u.trim())||"Vault keeper",t=new Date().getHours(),r=t<12?"Good morning":t<18?"Good afternoon":"Good evening",s=e.charAt(0).toUpperCase(),i=e.indexOf(" "),a=i>-1?s+e.charAt(i+1).toUpperCase():s;document.querySelectorAll("[data-user-name]").forEach(d=>{d.textContent=e}),document.querySelectorAll("[data-user-initials]").forEach(d=>{d.textContent=a});const o=document.querySelector("[data-user-greeting]");o&&(o.textContent=`${r}, ${e}.`);const c=document.getElementById("currentDate");if(c){const d=new Date,p=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"],_=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];c.textContent=`${p[d.getDay()]}, ${_[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`}}function gE(){document.documentElement.dataset.tsRuntime="true";const n=oE(()=>pn("vault"));me.storyMode.before(n),lE(n,cE);const e=document.querySelector("#family-map-screen .family-map-canvas");e&&(e.innerHTML='<div class="absolute right-6 top-6 z-20 flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg"><button type="button" class="p-3 text-primary transition hover:bg-surface-container-low" aria-label="Zoom in"><span class="material-symbols-outlined">add</span></button><button type="button" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low" aria-label="Zoom out"><span class="material-symbols-outlined">remove</span></button><button type="button" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low" aria-label="Center map"><span class="material-symbols-outlined">center_focus_strong</span></button></div><svg data-family-connectors class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"></svg><div data-family-map-content></div>',window.addEventListener("resize",()=>mg(e)),Fi()),document.querySelectorAll("#family-map-screen .text-2xl").forEach(r=>{r.textContent="—"});const t=window.location.hash.replace("#","");dn=t==="login"||t==="vault"||t==="family-map"||t==="story-mode"||t==="atlas"?t:"landing",Cc(fg),pE(),me.landing.classList.toggle("is-hidden",dn!=="landing"),me.login.style.display=dn==="login"?"flex":"none",me.vault.style.display=dn==="vault"?"flex":"none",me.familyMap.style.display=dn==="family-map"?"flex":"none",me.storyMode.style.display=dn==="story-mode"?"block":"none",n.style.display=dn==="atlas"?"block":"none",fE(),mE(),Ep(ut.currentUser),f8(ut,r=>{Ep(r),r?(hE(r.uid),dn==="landing"&&pn("vault")):(Ir==null||Ir(),wn=[],Fi())})}gE();export{R6 as _};

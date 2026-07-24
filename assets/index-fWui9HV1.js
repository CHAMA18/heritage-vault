var Eg=Object.defineProperty;var bg=(n,e,t)=>e in n?Eg(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var v=(n,e,t)=>bg(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Le={vault:{name:"The Banda–Chama Family Archive",description:"Letters, photographs, recipes and voices following one family from the railway years to the present day.",ownerId:"demo",memberIds:["samuel","beatrice","martha","joseph","agnes","edward","ruth","daniel","chungu","tapiwa","linda","miles","nandi","malia","theo"],coverImageUrl:null,createdAt:null,updatedAt:null},members:[{id:"samuel",fullName:"Samuel Banda",relationship:"Root ancestor · teacher",parentId:null,birthYear:1897,deathYear:1964,portraitUrl:null,notes:"A railway clerk turned village teacher who saved every letter he received in a blue tin trunk.",createdAt:null,updatedAt:null},{id:"beatrice",fullName:"Beatrice Phiri Banda",relationship:"Root ancestor · seamstress",parentId:null,birthYear:1901,deathYear:1982,portraitUrl:null,notes:"Samuel’s wife. Her embroidered tablecloth became the quiet centrepiece of family celebrations.",createdAt:null,updatedAt:null},{id:"martha",fullName:"Martha Banda Chama",relationship:"Daughter · gardener",parentId:"samuel",birthYear:1921,deathYear:2008,portraitUrl:null,notes:"Known for an open door, a formidable garden, and Sunday lunches that lasted until dusk.",createdAt:null,updatedAt:null},{id:"joseph",fullName:"Joseph Banda",relationship:"Son · surveyor",parentId:"samuel",birthYear:1924,deathYear:1999,portraitUrl:null,notes:"He carried the family archive across borders and recorded every journey in small field notebooks.",createdAt:null,updatedAt:null},{id:"agnes",fullName:"Agnes Banda Mwila",relationship:"Daughter · nurse",parentId:"samuel",birthYear:1928,deathYear:2011,portraitUrl:null,notes:"The family’s first nurse, remembered for writing practical advice in the margins of recipe books.",createdAt:null,updatedAt:null},{id:"edward",fullName:"Edward Chama",relationship:"Martha’s husband · mechanic",parentId:null,birthYear:1919,deathYear:1991,portraitUrl:null,notes:"A patient mechanic who taught every child how to listen for the rhythm of an engine.",createdAt:null,updatedAt:null},{id:"ruth",fullName:"Ruth Banda",relationship:"Joseph’s daughter · archivist",parentId:"joseph",birthYear:1953,deathYear:null,portraitUrl:null,notes:"The first person to label the old trunks and begin the archive’s catalogue.",createdAt:null,updatedAt:null},{id:"daniel",fullName:"Daniel Chama",relationship:"Martha’s son · radio producer",parentId:"martha",birthYear:1956,deathYear:2019,portraitUrl:null,notes:"Collected cassette interviews with relatives whenever he travelled home.",createdAt:null,updatedAt:null},{id:"chungu",fullName:"Chungu Chama",relationship:"Grandson · archive steward",parentId:"martha",birthYear:1978,deathYear:null,portraitUrl:null,notes:"Digitised the blue trunk after discovering Samuel’s first school letter tucked inside a geography book.",createdAt:null,updatedAt:null},{id:"tapiwa",fullName:"Tapiwa Banda",relationship:"Cousin · oral historian",parentId:"ruth",birthYear:1988,deathYear:null,portraitUrl:null,notes:"Travels with a small recorder and a list of questions left unanswered by the photographs.",createdAt:null,updatedAt:null},{id:"linda",fullName:"Linda Chama",relationship:"Daughter · filmmaker",parentId:"chungu",birthYear:2004,deathYear:null,portraitUrl:null,notes:"Makes short films that turn the archive’s fragments into stories for her generation.",createdAt:null,updatedAt:null},{id:"miles",fullName:"Miles Chama",relationship:"Son · mapmaker",parentId:"chungu",birthYear:2008,deathYear:null,portraitUrl:null,notes:"Draws maps of every family journey and marks the places where someone left a story behind.",createdAt:null,updatedAt:null},{id:"nandi",fullName:"Nandi Mwila",relationship:"Agnes’s granddaughter · chef",parentId:"agnes",birthYear:1992,deathYear:null,portraitUrl:null,notes:"Recreated Beatrice’s recipes from faded measurements and memory.",createdAt:null,updatedAt:null},{id:"malia",fullName:"Malia Banda",relationship:"Tapiwa’s daughter · student",parentId:"tapiwa",birthYear:2015,deathYear:null,portraitUrl:null,notes:"The youngest keeper of the family questions, always asking who is missing from the photographs.",createdAt:null,updatedAt:null},{id:"theo",fullName:"Theo Chama",relationship:"Linda’s son · newest branch",parentId:"linda",birthYear:2025,deathYear:null,portraitUrl:null,notes:"Born into an archive already waiting to introduce him to the people who came before.",createdAt:null,updatedAt:null}],memories:[{id:"railway-postcard",title:"A postcard from the railway",description:"Samuel’s first known note home: three hurried lines about the smell of rain on the platform and a promise to bring back a proper atlas.",type:"letter",assetUrl:"",thumbnailUrl:null,year:1912,dateLabel:"November 1912",location:"Livingstone, Zambia",familyMemberIds:["samuel"],tags:["railway","postcard","beginnings"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"school-letter",title:"Samuel’s first school letter",description:"Written from his first teaching post, Samuel describes the books he hopes every child in the village will one day be able to borrow.",type:"letter",assetUrl:"",thumbnailUrl:null,year:1920,dateLabel:"May 1920",location:"Mongu, Zambia",familyMemberIds:["samuel"],tags:["education","letter","books"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"wedding-portrait",title:"Samuel and Beatrice, beneath the jacaranda",description:"A formal portrait softened by Beatrice’s almost-smile and the petals caught in the corner of the frame.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1922,dateLabel:"September 1922",location:"Kabwe, Zambia",familyMemberIds:["samuel","beatrice"],tags:["wedding","portrait","jacaranda"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"blue-trunk-inventory",title:"The blue trunk inventory",description:"Beatrice’s careful list of what went into the trunk before the family moved: letters, an atlas, two school slates, and a hand-cranked radio.",type:"document",assetUrl:"",thumbnailUrl:null,year:1935,dateLabel:"February 1935",location:"Kabwe, Zambia",familyMemberIds:["beatrice","samuel","martha","joseph"],tags:["migration","inventory","archive"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"market-day",title:"Market day, copper light",description:"Martha and Agnes stand shoulder to shoulder at the market, each holding a basket and a secret they refused to tell the photographer.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1943,dateLabel:"July 1943",location:"Ndola, Zambia",familyMemberIds:["martha","agnes"],tags:["sisters","market","photograph"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"edwards-radio",title:"Edward’s radio repair book",description:"A grease-marked notebook with circuits, jokes, and a note in the back: ‘Martha sings when she thinks no one is listening.’",type:"document",assetUrl:"",thumbnailUrl:null,year:1948,dateLabel:"1948",location:"Lusaka, Zambia",familyMemberIds:["edward","martha"],tags:["radio","love","notebook"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"first-lunch",title:"The first Sunday table",description:"The table is crowded with enamel plates, cousins, and Beatrice’s embroidered cloth—an ordinary afternoon that became a family ritual.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1951,dateLabel:"August 1951",location:"Lusaka, Zambia",familyMemberIds:["beatrice","martha","joseph","agnes","edward"],tags:["Sunday lunch","food","family gathering"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"ruths-catalogue",title:"Ruth labels the trunks",description:"Ruth’s catalogue cards give the archive its first order, beginning with ‘Letters that make people laugh’ and ending with ‘Things we still need to ask.’",type:"document",assetUrl:"",thumbnailUrl:null,year:1961,dateLabel:"January 1961",location:"Harare, Zimbabwe",familyMemberIds:["ruth","joseph"],tags:["catalogue","archive","questions"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"passport",title:"Joseph’s passport, stamped in motion",description:"A stamped passport documenting a journey through Harare and Bulawayo, carrying news, photographs, and a new address for the family.",type:"document",assetUrl:"",thumbnailUrl:null,year:1967,dateLabel:"March 1967",location:"Harare, Zimbabwe",familyMemberIds:["joseph","ruth"],tags:["journey","passport","migration"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"fair-photograph",title:"The county fair photograph",description:"Arthur is absent from the frame, but Daniel’s caption identifies every face and says this was the day the children ‘learned to be loud.’",type:"photo",assetUrl:"",thumbnailUrl:null,year:1972,dateLabel:"October 1972",location:"Kabwe, Zambia",familyMemberIds:["daniel","martha","joseph","ruth"],tags:["fair","caption","children"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"garden-audio",title:"Martha’s garden, recorded at dusk",description:"On cassette, Martha names every plant in her garden, then pauses to explain that a family grows the same way: slowly, by being tended.",type:"audio",assetUrl:"",thumbnailUrl:null,year:1984,dateLabel:"October 1984",location:"Ndola, Zambia",familyMemberIds:["martha","daniel","chungu"],tags:["audio","garden","wisdom"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"recipe-card",title:"Beatrice’s impossible recipe",description:"Nandi deciphers a recipe card that says only ‘enough flour’ and ‘stir until the house smells right.’ The final line reads: ‘Make extra for neighbours.’",type:"letter",assetUrl:"",thumbnailUrl:null,year:1988,dateLabel:"Copied in 1988",location:"Kitwe, Zambia",familyMemberIds:["beatrice","nandi","agnes"],tags:["recipe","food","inheritance"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"voice-of-daniel",title:"Daniel asks the room to remember",description:"A living-room recording where Daniel interviews Joseph about the move, the missing suitcase, and the song everyone knew but nobody could finish.",type:"audio",assetUrl:"",thumbnailUrl:null,year:1993,dateLabel:"December 1993",location:"Lusaka, Zambia",familyMemberIds:["daniel","joseph","ruth","chungu"],tags:["oral history","cassette","migration"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"last-lunch",title:"Martha’s last long lunch",description:"No one knew it would be the last table with everyone present. The photograph holds four generations and three different versions of the same joke.",type:"photo",assetUrl:"",thumbnailUrl:null,year:2007,dateLabel:"December 2007",location:"Lusaka, Zambia",familyMemberIds:["martha","chungu","tapiwa","linda","nandi"],tags:["Sunday lunch","four generations","remembrance"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"blue-trunk-scan",title:"The blue trunk opens again",description:"Chungu photographs the blue trunk before scanning its contents. Beneath a school slate lies Samuel’s 1912 postcard, still sharp with rainwater stains.",type:"photo",assetUrl:"",thumbnailUrl:null,year:2014,dateLabel:"April 2014",location:"Lusaka, Zambia",familyMemberIds:["chungu","linda","miles"],tags:["digitisation","blue trunk","archive"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"malia-questions",title:"Malia’s list of questions",description:"At seven, Malia writes down the questions the photographs cannot answer: Who took this? Why were they laughing? Where did the blue trunk sleep?",type:"document",assetUrl:"",thumbnailUrl:null,year:2022,dateLabel:"November 2022",location:"Livingstone, Zambia",familyMemberIds:["malia","tapiwa"],tags:["questions","children","future"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"oral-history",title:"Tapiwa’s walking interview",description:"Tapiwa and Ruth walk the old road in Livingstone while comparing family stories to the places where they happened, recording the gaps as carefully as the answers.",type:"audio",assetUrl:"",thumbnailUrl:null,year:2023,dateLabel:"May 2023",location:"Livingstone, Zambia",familyMemberIds:["tapiwa","ruth","malia"],tags:["oral history","walking interview","place"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"lindas-film",title:"Linda’s film premiere",description:"Linda screens a six-minute film built from the archive’s letters, cassettes, and Sunday-table photographs. Theo sleeps through the applause.",type:"video",assetUrl:"",thumbnailUrl:null,year:2025,dateLabel:"February 2025",location:"Lusaka, Zambia",familyMemberIds:["linda","chungu","theo","miles"],tags:["film","premiere","next generation"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"atlas-drawing",title:"Miles maps the family routes",description:"Miles layers railway lines, garden paths, border crossings, and home addresses into one hand-drawn map titled ‘How we kept finding each other.’",type:"document",assetUrl:"",thumbnailUrl:null,year:2026,dateLabel:"January 2026",location:"Lusaka, Zambia",familyMemberIds:["miles","chungu","linda"],tags:["map","routes","future"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null}],stories:[{id:"roots",title:"The blue trunk and the promise of books",excerpt:"How a rain-stained postcard became the first page of a family archive.",body:"Samuel began saving letters because distance made details precious. More than a century later, the same small trunk teaches his descendants that an archive is not a room full of objects; it is a promise to keep asking what mattered.",memoryIds:["railway-postcard","school-letter","blue-trunk-inventory","blue-trunk-scan"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"table",title:"A table large enough for everyone",excerpt:"Beatrice’s cloth, Martha’s cooking, and the ritual that taught the family how to return.",body:"The Sunday table was never about the food alone. It was the place where news became story, grief was given room, and children learned the names of people they had not yet met. Every generation added a chair.",memoryIds:["first-lunch","garden-audio","recipe-card","last-lunch"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"routes",title:"Routes, stamps, and borrowed roads",excerpt:"A family in motion across Zambia and Zimbabwe, carrying its own evidence home.",body:"Joseph’s passport and Daniel’s tapes reveal a family moving for work, care, and opportunity without losing the habit of writing home. Their routes are the lines that later became Miles’s map.",memoryIds:["ruths-catalogue","passport","voice-of-daniel","oral-history","atlas-drawing"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"voices",title:"The people speaking between the photographs",excerpt:"Cassette tapes restore the humour, rhythm, and unfinished questions missing from the still images.",body:"A photograph can show who was in the room. The voices explain why someone stayed late, who sang badly, and which story changes every time it is told. The archive becomes intimate when it can answer back.",memoryIds:["garden-audio","voice-of-daniel","malia-questions","oral-history"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"future",title:"The next keepers",excerpt:"Linda, Miles, Malia, and Theo inherit not just memories, but a living invitation to add their own.",body:"The archive reaches forward as much as it reaches back. In a film premiere, a child’s questions, and a map drawn for someone too young to read it, the family makes room for the stories that have not happened yet.",memoryIds:["malia-questions","lindas-film","atlas-drawing"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null}]},at=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML},Tg={letter:"mail",photo:"photo_camera",audio:"graphic_eq",video:"videocam",document:"description"};function Ag(){const e=[...Le.memories].filter(t=>t.year).sort((t,r)=>(r.year??0)-(t.year??0)).slice(0,3).map((t,r)=>({when:r===0?"Today":r===1?"Yesterday":"This week",what:`Memory preserved: "${t.title}"${t.location?` · ${t.location}`:""}`}));return e.push({when:"This week",what:`${Le.stories.length} stories compiled from the archive.`}),e.push({when:"Earlier",what:`${Le.members.length} family members connected across the constellation.`}),e}function Ig(n){if(n.length<2)return"";const e=Math.max(...n,1),t=100,r=36,s=t/(n.length-1),i=n.map((a,o)=>`${o*s},${r-a/e*(r-4)-2}`).join(" ");return`
    <svg class="hv-vd-spark" viewBox="0 0 ${t} ${r}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${i}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />
    </svg>
  `}function Sg(){const n=new Map;return Le.memories.forEach(e=>{e.year&&n.set(e.year,(n.get(e.year)??0)+1)}),[...n.entries()].sort((e,t)=>e[0]-t[0]).map(([,e])=>e)}function Rg(n){var y;const e=Le,t=e.memories,r=e.members,s=e.stories,i=t.map(b=>b.year).filter(b=>b!==null).sort((b,R)=>b-R),a=i.length?`${i[0]}–${i[i.length-1]}`:"—",o=[...t].sort((b,R)=>(R.year??0)-(b.year??0)).slice(0,2),c=Ag(),u=Sg(),p=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});n.innerHTML=`
    <div class="hv-vd-backdrop" aria-hidden="true">
      <div class="hv-vd-aurora"></div>
    </div>
    <div class="hv-vd-grain" aria-hidden="true"></div>

    <header class="hv-vd-topbar">
      <div>
        <p class="hv-vd-topbar__date">${at(p)}</p>
        <h2 class="hv-vd-topbar__greeting">Good morning, <em>Amara.</em></h2>
      </div>
      <div class="hv-vd-topbar__actions">
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
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> +3 this week</span>
        </div>
        <p class="hv-vd-metric__value">${t.length}</p>
        <p class="hv-vd-metric__label">Memories preserved</p>
        <p class="hv-vd-metric__sub">Across ${new Set(t.map(b=>b.location).filter(Boolean)).size} places</p>
        ${Ig(u)}
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">groups</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_flat</span> stable</span>
        </div>
        <p class="hv-vd-metric__value">${r.length}</p>
        <p class="hv-vd-metric__label">Family members</p>
        <p class="hv-vd-metric__sub">${new Set(r.filter(b=>b.parentId).map(b=>b.parentId)).size+1} generations connected</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4 hv-vd-metric--inverted">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">auto_stories</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> +1 new</span>
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
        <p class="hv-vd-metric__label">From ${i[0]} to ${i[i.length-1]} · ${i[i.length-1]-i[0]} years of memory</p>
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
      ${o.map(b=>{const R=b.thumbnailUrl||b.assetUrl||"https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM";return`
            <article class="hv-vd-memory" data-vd-memory data-memory-id="${at(b.id)}" role="button" tabindex="0">
              <div class="hv-vd-memory__media">
                <img class="hv-vd-memory__img" src="${at(R)}" alt="${at(b.title)}" loading="lazy" />
                <div class="hv-vd-memory__overlay"></div>
                <span class="hv-vd-memory__year">${at(b.year)}</span>
              </div>
              <div class="hv-vd-memory__body">
                <span class="hv-vd-memory__tag">
                  <span class="material-symbols-outlined" style="font-size:12px">${Tg[b.type]??"description"}</span>
                  ${at(b.type)}
                </span>
                <h4 class="hv-vd-memory__title">${at(b.title)}</h4>
                <p class="hv-vd-memory__desc">${at(b.description)}</p>
                <div class="hv-vd-memory__footer">
                  <span><span class="material-symbols-outlined" style="vertical-align:middle">location_on</span> ${at(b.location??"Undated")}</span>
                  <span>${at(b.dateLabel??"")}</span>
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
        ${s.map((b,R)=>`
            <div class="hv-vd-story-item" data-vd-story data-story-id="${at(b.id)}" role="button" tabindex="0">
              <span class="hv-vd-story-item__num">${String(R+1).padStart(2,"0")}</span>
              <div class="hv-vd-story-item__body">
                <p class="hv-vd-story-item__title">${at(b.title)}</p>
                <p class="hv-vd-story-item__excerpt">${at(b.excerpt)}</p>
              </div>
              <span class="material-symbols-outlined hv-vd-story-item__arrow">arrow_forward</span>
            </div>
          `).join("")}
      </section>

      <section class="hv-vd-activity" data-vd-reveal>
        <h3 class="hv-vd-activity__title">Recent <em>activity.</em></h3>
        <ul class="hv-vd-activity__list">
          ${c.map(b=>`
              <li class="hv-vd-activity__item">
                <p class="hv-vd-activity__when">${at(b.when)}</p>
                <p class="hv-vd-activity__what">${at(b.what)}</p>
              </li>
            `).join("")}
        </ul>
      </section>
    </div>
  `,xg(n),(y=n.querySelector("[data-vd-atlas]"))==null||y.addEventListener("click",()=>{ts("atlas")}),n.querySelectorAll("[data-vd-view]").forEach(b=>{b.addEventListener("click",()=>ts(b.dataset.vdView??"story-mode")),b.addEventListener("keydown",R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),ts(b.dataset.vdView??"story-mode"))})}),n.querySelectorAll("[data-vd-memory]").forEach(b=>{const R=()=>document.dispatchEvent(new CustomEvent("heritage:memory-detail",{detail:{id:b.dataset.memoryId}}));b.addEventListener("click",R),b.addEventListener("keydown",O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),R())})}),n.querySelectorAll("[data-vd-story]").forEach(b=>{b.addEventListener("click",()=>ts("story-mode")),b.addEventListener("keydown",R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),ts("story-mode"))})}),n.querySelectorAll("[data-vd-new-memory], [data-vd-new-memory-btn]").forEach(b=>{b.addEventListener("click",R=>{R.stopPropagation(),ts("family-map")})}),requestAnimationFrame(()=>{n.querySelectorAll("[data-vd-reveal]").forEach(b=>b.classList.add("is-revealed"))}),Cg(n)}async function Cg(n){try{const e=await fetch("/api/users");if(!e.ok)return;const r=(await e.json()).count??0,s=n.querySelector("[data-vd-users-count]");s&&(s.textContent=String(r),s.innerHTML=r>0?`${r}`:"<em>0</em>")}catch{}}function xg(n){const e=n.querySelectorAll("[data-vd-reveal], [data-vd-stagger]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(r=>r.classList.add("is-revealed"));return}const t=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-revealed"),t.unobserve(s.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.1});e.forEach(r=>t.observe(r))}function ts(n){const e=document.querySelector(`[data-dashboard-view="${n}"]`);e&&e.click()}let Bl=!1;function sp(){const n=document.getElementById("vault-screen");if(!n||Bl)return;const e=n.querySelector("[data-vault-dashboard-content]");e&&(Rg(e),Bl=!0)}const gl=document.getElementById("vault-screen");gl&&new MutationObserver(()=>{gl.style.display==="flex"&&!Bl&&sp()}).observe(gl,{attributes:!0,attributeFilter:["style"]});window.location.hash==="#vault"&&document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".landing-page");n&&n.classList.add("is-hidden"),requestAnimationFrame(()=>sp())});const kg=new Set(["vault","family-map","story-mode","atlas","agent"]),Uh="heritageatlas-sidebar-collapsed";function Pg(n){const e=document.documentElement.dataset.authUserName,t=document.documentElement.dataset.authUserInitials;e&&(n.querySelectorAll("[data-auth-user-name]").forEach(r=>{r.textContent=e}),n.querySelectorAll("[data-auth-user-initials]").forEach(r=>{r.textContent=t||"AK"}),n.querySelectorAll(":scope > div:last-child p.font-semibold").forEach(r=>{r.textContent=e}))}function Ng(n){var s;const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=[];let r;for(;r=e.nextNode();){const i=r.parentElement;!i||!((s=r.textContent)!=null&&s.trim())||i.closest(".material-symbols-outlined, .sidebar-copy")||t.push(r)}t.forEach(i=>{const a=document.createElement("span");a.className="sidebar-copy",a.textContent=i.textContent,i.replaceWith(a)})}function ip(n={}){const e=[...document.querySelectorAll("[data-sidebar]")],t=n.onNavigate,r=s=>{e.forEach(i=>{i.classList.toggle("is-collapsed",s);const a=i.querySelector("[data-sidebar-collapse]");a==null||a.setAttribute("aria-expanded",String(!s));const o=a==null?void 0:a.querySelector(".material-symbols-outlined");o&&(o.textContent=s?"menu":"menu_open")}),localStorage.setItem(Uh,s?"true":"false")};e.forEach(s=>{if(s.dataset.sidebarInitialized==="true")return;s.dataset.sidebarInitialized="true",s.setAttribute("aria-label","Heritage Atlas navigation"),Pg(s),Ng(s);const i=document.createElement("button");i.type="button",i.className="sidebar-collapse-toggle",i.dataset.sidebarCollapse="",i.setAttribute("aria-label","Collapse sidebar"),i.innerHTML='<span class="material-symbols-outlined">menu_open</span><span class="sidebar-copy">Collapse sidebar</span>';const a=s.firstElementChild;s.insertBefore(i,(a==null?void 0:a.nextSibling)??null);const o=document.createElement("img");o.className="sidebar-collapse-mark",o.src="/heritageatlas-mark.svg",o.alt="Heritage Atlas",a==null||a.append(o),i.addEventListener("click",()=>r(!s.classList.contains("is-collapsed"))),s.querySelectorAll("[data-dashboard-view]").forEach(c=>{const u=c.dataset.dashboardView;!u||!kg.has(u)||!t||c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),t(u)})})}),r(localStorage.getItem(Uh)==="true")}const Og={roots:{label:"Begin",icon:"mail",num:"01"},table:{label:"Gather",icon:"restaurant",num:"02"},routes:{label:"Travel",icon:"route",num:"03"},voices:{label:"Listen",icon:"graphic_eq",num:"04"},future:{label:"Continue",icon:"auto_stories",num:"05"}},Lg={letter:"mail",photo:"photo_camera",audio:"graphic_eq",video:"videocam",document:"description"};function Dg(){return Le.stories.filter(n=>n.status==="published").map(n=>{const e=Og[n.id]??{label:"Chapter",icon:"menu_book",num:"00"};return{id:n.id,num:e.num,label:e.label,title:n.title,excerpt:n.excerpt??"",body:n.body??"",icon:e.icon,memoryIds:n.memoryIds??[]}})}const It=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML},Fh=(()=>{const n=Le.memories.map(e=>e.year).filter(e=>e!==null).sort((e,t)=>e-t);return n.length?`${n[0]}–${n[n.length-1]}`:"—"})();function Vg(n){const e=Dg();if(!e.length)return;let t=0;const r=new Set;n.innerHTML=`
    <div class="hv-sm-backdrop" aria-hidden="true">
      <div class="hv-sm-aurora"></div>
    </div>
    <div class="hv-sm-grain" aria-hidden="true"></div>

    <aside data-sidebar class="vault-nav hidden flex-col p-6 lg:flex" aria-label="Heritage Atlas navigation">
      <div class="mb-10"><img data-brand-logo class="brand-logo" src="./heritageatlas-logo.svg" alt="Heritage Atlas" /></div>
      <nav class="flex-1 space-y-2" aria-label="Primary">
        <a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a>
        <a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a>
        <a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a>
        <a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">auto_awesome</span>Heritage Atlas</a>
        <a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a>
      </nav>
      <button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button>
      <button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button>
      <button class="theme-toggle mb-5 text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md" data-logout-label>Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button>
      <div class="mt-6 border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary" data-auth-user-name>Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div>
    </aside>

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
            <p class="hv-sm-hero__stats-title">${e.length} chapters · ${Le.memories.length} source memories</p>
            <p class="hv-sm-hero__stats-meta">${Fh} · ${new Date().getFullYear()-parseInt(Fh.split("–")[0])} years of one family</p>
          </aside>
        </div>
      </section>

      <nav class="hv-sm-stepper" data-sm-reveal aria-label="Story chapters">
        <div class="hv-sm-stepper__track">
          ${e.map(($,U)=>`
              <button class="hv-sm-step${U===0?" is-active":""}" data-sm-step="${U}" type="button">
                <span class="hv-sm-step__num">${$.num}</span>
                <span class="hv-sm-step__dot"><span class="material-symbols-outlined">${$.icon}</span></span>
                <span class="hv-sm-step__label">${$.label}</span>
                <span class="hv-sm-step__sub">${$.title}</span>
              </button>
            `).join("")}
        </div>
      </nav>

      <div class="hv-sm-body">
        <div class="hv-sm-content">
          <div class="hv-sm-chapter-bar" data-sm-reveal>
            <span class="hv-sm-chapter-bar__label" data-sm-chapter-label>Chapter 01 · Begin</span>
            <div class="hv-sm-chapter-bar__nav">
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
  `;const s=n.querySelector("[data-sm-narrative]"),i=n.querySelector("[data-sm-evidence]"),a=n.querySelector("[data-sm-chapter-label]"),o=n.querySelector("[data-sm-prev]"),c=n.querySelector("[data-sm-next]");if(!s||!i||!a||!o||!c)return;function u($){return Le.memories.find(U=>U.id===$)}function d($,U){const q=e[$];if(!q)return;t=$,r.add(q.id),a.textContent=`Chapter ${q.num} · ${q.label}`,n.querySelectorAll("[data-sm-step]").forEach(Z=>{var w;const S=parseInt(Z.dataset.smStep??"0",10);Z.classList.toggle("is-active",S===$),Z.classList.toggle("is-read",S<$||r.has(((w=e[S])==null?void 0:w.id)??"")&&S!==$)}),o.disabled=$===0,c.disabled=$===e.length-1;const W=s;U?(W.classList.add("is-transitioning"),setTimeout(()=>{W.classList.remove("is-transitioning"),W.classList.add("is-entering"),W.innerHTML=p(q),y(q),b(W),R(W),W.offsetWidth,W.classList.remove("is-entering"),W.scrollTop=0,window.scrollTo({top:n.offsetTop-24,behavior:"smooth"})},280)):(W.innerHTML=p(q),y(q),b(W),R(W))}function p($){const U=$.memoryIds.map(u).filter(Boolean),q=U.find(w=>(w==null?void 0:w.type)==="photo")??U[0],W=$.excerpt,Z=$.body.split(new RegExp("(?<=[.!?])\\s+")),S=[];if(Z.length<=2)S.push($.body);else{const w=Z.slice(0,Math.ceil(Z.length/3)).join(" "),A=Z.slice(Math.ceil(Z.length/3),Math.ceil(2*Z.length/3)).join(" "),_=Z.slice(Math.ceil(2*Z.length/3)).join(" ");S.push(w,A,_)}return`
      <p class="hv-sm-narrative__eyebrow">Chapter ${$.num} · ${$.label}</p>
      <h2 class="hv-sm-narrative__title">${It($.title)}</h2>
      <p class="hv-sm-narrative__excerpt">${It($.excerpt)}</p>
      <div class="hv-sm-narrative__body">
        <p data-sm-reveal>${It(S[0]??$.body)}</p>
        ${q?`
          <figure class="hv-sm-figure" data-sm-reveal>
            <img class="hv-sm-figure__img" data-sm-parallax-img
              src="${q.thumbnailUrl||q.assetUrl||"https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM"}"
              alt="${It(q.title)}" />
            <div class="hv-sm-figure__overlay"></div>
            <figcaption class="hv-sm-figure__caption">
              <b>${It(q.title)}</b>
              ${It(q.dateLabel??q.location??"")}
            </figcaption>
          </figure>
        `:""}
        <div class="hv-sm-pullquote" data-sm-reveal>${It(W)}</div>
        ${S.slice(1).map(w=>`<p data-sm-reveal>${It(w)}</p>`).join("")}
      </div>
      <footer class="hv-sm-narrative__footer">
        <span class="hv-sm-narrative__source">
          <span class="material-symbols-outlined">verified</span>
          Compiled from ${$.memoryIds.length} source memories in the Banda–Chama archive.
        </span>
        <button class="hv-sm-narrative__save" type="button" data-sm-save>
          <span class="material-symbols-outlined" style="font-size:18px">bookmark</span>
          Save story
        </button>
      </footer>
    `}function y($){const U=$.memoryIds.map(u).filter(Boolean);i.innerHTML=U.map((q,W)=>`
        <button class="hv-sm-evidence-card" type="button" data-sm-evidence-card data-memory-id="${It(q.id)}"
          style="animation-delay: ${W*60}ms">
          <div class="hv-sm-evidence-card__top">
            <span class="hv-sm-evidence-card__icon">
              <span class="material-symbols-outlined">${Lg[q.type]??"description"}</span>
            </span>
            <span class="hv-sm-evidence-card__year">${It(q.year!=null?String(q.year):"")}</span>
          </div>
          <h4 class="hv-sm-evidence-card__title">${It(q.title)}</h4>
          <p class="hv-sm-evidence-card__meta">${It(q.location??"Undated")} · ${It(q.type)}</p>
        </button>
      `).join(""),i.querySelectorAll("[data-sm-evidence-card]").forEach(q=>{q.addEventListener("click",()=>{const W=q.dataset.memoryId??"",Z=u(W);if(!Z)return;const S=`Tell me more about "${Z.title}"`;O(S)})})}function b($){const U=$.querySelectorAll("[data-sm-reveal]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){U.forEach(W=>W.classList.add("is-revealed"));return}const q=new IntersectionObserver(W=>{W.forEach(Z=>{Z.isIntersecting&&(Z.target.classList.add("is-revealed"),q.unobserve(Z.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.1});U.forEach(W=>q.observe(W))}function R($){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const U=$.querySelector("[data-sm-parallax-img]");if(!U)return;const q=U;let W=!1;function Z(){const S=q.getBoundingClientRect(),w=window.innerHeight;if(S.bottom<0||S.top>w){W=!1;return}const _=(S.top+S.height/2-w/2)/w*-24;q.style.transform=`translate3d(0, ${_}px, 0) scale(1.08)`,W=!1}window.addEventListener("scroll",()=>{W||(requestAnimationFrame(Z),W=!0)},{passive:!0}),Z()}function O($){const U=document.getElementById("agent-screen"),q=document.querySelector(".landing-page"),W=document.getElementById("login-screen"),Z=document.getElementById("vault-screen"),S=document.getElementById("family-map-screen");U&&(q&&q.classList.add("is-hidden"),W&&(W.style.display="none"),Z&&(Z.style.display="none"),S&&(S.style.display="none"),n.style.display="none",U.style.display="flex",history.pushState({view:"agent"},"","#agent"),document.dispatchEvent(new Event("heritage:agent-route")),setTimeout(()=>{const w=U.querySelector("[data-agent-input]");w&&(w.value=$,w.dispatchEvent(new Event("input")));const A=U.querySelector("[data-agent-form]");A&&A.requestSubmit()},300))}n.querySelectorAll("[data-sm-step]").forEach($=>{$.addEventListener("click",()=>{const U=parseInt($.dataset.smStep??"0",10);U!==t&&d(U,!0)})}),o.addEventListener("click",()=>{t>0&&d(t-1,!0)}),c.addEventListener("click",()=>{t<e.length-1&&d(t+1,!0)});const k=n.querySelector("[data-sm-query-form]"),F=n.querySelector("[data-sm-query-input]");k==null||k.addEventListener("submit",$=>{$.preventDefault();const U=(F==null?void 0:F.value.trim())??"";U&&(O(U),F&&(F.value=""))}),n.querySelectorAll("[data-sm-hint]").forEach($=>{$.addEventListener("click",()=>{const U=$.dataset.smHint??"";F&&(F.value=U),F==null||F.focus()})}),n.addEventListener("click",$=>{const U=$.target.closest("[data-sm-save]");if(!U)return;const q=U.querySelector(".material-symbols-outlined");q&&(q.textContent=q.textContent==="bookmark"?"check":"bookmark"),U.style.background="var(--hv-moss, #6f8266)",setTimeout(()=>{q&&(q.textContent="bookmark"),U.style.background=""},1800)}),d(0,!1),n.querySelectorAll("[data-sm-reveal]").forEach($=>{$.classList.add("is-revealed")})}let Bh=!1;function ap(){const n=document.getElementById("story-mode-screen");!n||Bh||(Vg(n),Bh=!0)}document.addEventListener("heritage:story-route",()=>{requestAnimationFrame(()=>ap())});window.location.hash==="#story-mode"&&ap();const Mg="modulepreload",$g=function(n,e){return new URL(n,e).href},qh={},Ug=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};const o=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=$g(d,r),d in qh)return;qh[d]=!0;const p=d.endsWith(".css"),y=p?'[rel="stylesheet"]':"";if(!!r)for(let O=o.length-1;O>=0;O--){const k=o[O];if(k.href===d&&(!p||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${y}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":Mg,p||(R.as="script"),R.crossOrigin="",R.href=d,u&&R.setAttribute("nonce",u),document.head.appendChild(R),p)return new Promise((O,k)=>{R.addEventListener("load",O),R.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},Fg=new Set(["the","a","an","of","to","in","on","at","by","for","with","about","show","tell","give","me","my","our","their","family","what","when","where","who","which","how","and","or","is","are","was","were","be","been","from","that","this","these","those","across","between","during","over","under","into"]),Bg=new Set(["Samuel","Beatrice","Martha","Joseph","Agnes","Edward","Ruth","Daniel","Chungu","Tapiwa","Linda","Miles","Nandi","Malia","Theo"]);function qg(n){const e=n.toLowerCase(),t=(e.match(/[a-z]{3,}/g)??[]).filter(d=>!Fg.has(d));let r="overview";/\b(timeline|chronolog|over time|by year|years|decades?)\b/.test(e)?r="timeline":/\b(map|where|place|location|geograph|countr|cit(y|ies))\b/.test(e)?r="geography":/\b(people|person|relative|member|family tree|constellation|connected)\b/.test(e)?r="people":/\b(evidence|source|proof|records?)\b/.test(e)?r="evidence":/\b(decade|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)\b/.test(e)?r="decades":/\b(type|kind|photo|letter|audio|video|document|format)\b/.test(e)?r="types":/\b(oldest|earliest|first|beginning)\b/.test(e)?r="oldest":/\b(newest|latest|last|recent)\b/.test(e)?r="newest":/\b(compare|versus|vs|against|difference)\b/.test(e)&&(r="compare_decades");const s=e.match(/\b(18|19|20|21)(\d0)s?\b/),i=s?parseInt(`${s[1]}${s[2]}`,10):void 0,a=n.match(/\b([A-Z][a-z]+)\b/),o=a&&Bg.has(a[1])?a[1]:void 0,c=n.match(/\b(Livingstone|Lusaka|Mongu|Kabwe|Ndola|Kitwe|Harare|Bulawayo)\b/),u=c?c[1]:void 0;return{intent:r,terms:t,decade:i,person:o,place:u}}const Hh={Livingstone:{lat:-17.85,lng:25.86},Lusaka:{lat:-15.39,lng:28.33},Mongu:{lat:-15.28,lng:23.13},Kabwe:{lat:-14.45,lng:28.45},Ndola:{lat:-12.96,lng:28.64},Kitwe:{lat:-12.82,lng:28.2},Harare:{lat:-17.83,lng:31.05},Bulawayo:{lat:-20.15,lng:28.58}};function yl(n){return Math.floor(n/10)*10}function Hg(n,e){var i,a;const t=qg(e),r=n.memories,s=n.members;switch(t.intent){case"timeline":{const o=new Map;r.forEach(d=>{d.year&&o.set(d.year,(o.get(d.year)??0)+1)});const c=[...o.keys()].sort((d,p)=>d-p),u=c.reduce((d,p)=>(o.get(d)??0)>(o.get(p)??0)?d:p,c[0]??0);return{kind:"line",title:"Memories across time",caption:`Memory density by year${t.decade?` · ${t.decade}s`:""}.`,verdict:`${c.length} years with preserved memories, peaking in ${u}.`,prompt:e,sql:"SELECT event_year, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY event_year ORDER BY event_year",source:"ClickHouse · heritage_atlas_timeline_yearly (mock)",series:[{name:"Memories",color:"#2c3a2e",points:c.map(d=>({label:String(d),value:o.get(d)??0,drilldown:`What happened in ${d}?`}))}],followups:["Where did these memories happen?","Who appears most often in this period?","What kinds of memories are these?"]}}case"geography":{const o=new Map;r.forEach(u=>{u.location&&o.set(u.location,(o.get(u.location)??0)+1)});const c=[...o.entries()].sort((u,d)=>d[1]-u[1]).slice(0,12);return{kind:"map",title:"Where the archive lives",caption:"Memory density by location.",verdict:`${c.length} places appear in your archive, led by ${((i=c[0])==null?void 0:i[0])??"—"}.`,prompt:e,sql:"SELECT location, sum(fact_count) FROM heritage_atlas_locations GROUP BY location ORDER BY fact_count DESC LIMIT 12",source:"ClickHouse · heritage_atlas_locations (mock)",points:c.map(([u,d])=>{var p,y;return{place:u,count:d,lat:(p=Hh[u])==null?void 0:p.lat,lng:(y=Hh[u])==null?void 0:y.lng,drilldown:`Show me memories from ${u}`}}),followups:["Show me the timeline for these places","Which people are tied to these locations?","Compare locations by decade"]}}case"people":{const o=new Map;r.forEach(u=>{var d;(d=u.familyMemberIds)==null||d.forEach(p=>{o.set(p,(o.get(p)??0)+1)})});const c=s.filter(u=>u.parentId).map(u=>({from:u.parentId,to:u.id,label:"parent → child",weight:1}));return{kind:"network",title:"Your family constellation",caption:"People in the archive, connected by recorded relationships.",verdict:`${s.length} people, ${c.length} recorded parent-child edges.`,prompt:e,sql:"SELECT entity_id, title, count() FROM heritage_atlas_facts WHERE entity_type='person' GROUP BY entity_id, title",source:"ClickHouse · heritage_atlas_facts + heritage_atlas_edges (mock)",nodes:s.map(u=>({id:u.id,label:u.fullName,group:u.relationship??void 0,weight:o.get(u.id)??0,meta:u.notes??void 0})),edges:c,followups:["Show me the oldest person in the archive","Who is most connected?","Timeline for Samuel Banda"]}}case"evidence":{const o=r.filter(c=>{var u;return!t.person||((u=c.familyMemberIds)==null?void 0:u.some(d=>{const p=s.find(y=>y.id===d);return p==null?void 0:p.fullName.startsWith(t.person)}))}).filter(c=>!t.place||c.location===t.place).sort((c,u)=>(c.year??0)-(u.year??0)).slice(0,12);return{kind:"table",title:"Source evidence",caption:`Traceable records${t.person?` mentioning ${t.person}`:""}.`,verdict:`${o.length} records, each linkable back to its source.`,prompt:e,sql:"SELECT title, event_year, location, entity_type FROM heritage_atlas_facts ORDER BY event_year LIMIT 12",source:"ClickHouse · heritage_atlas_facts (mock)",headers:["Year","Title","Location","Kind"],rows:o.map(c=>({cells:[c.year?String(c.year):"—",c.title,c.location??"—",c.type],drilldown:`Tell me more about "${c.title}"`})),followups:["Show me the oldest evidence","Group this evidence by type","Map this evidence by location"]}}case"decades":{const o=new Map;r.forEach(d=>{d.year&&o.set(yl(d.year),(o.get(yl(d.year))??0)+1)});const c=[...o.keys()].sort((d,p)=>d-p),u=c.reduce((d,p)=>(o.get(d)??0)>(o.get(p)??0)?d:p,c[0]??0);return{kind:"bar",title:"Memories by decade",caption:"How the archive grew, in ten-year windows.",verdict:`${c.length} decades represented; the ${u}s is the densest.`,prompt:e,sql:"SELECT floor(event_year/10)*10 AS decade, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY decade ORDER BY decade",source:"ClickHouse · heritage_atlas_timeline_yearly (mock)",series:[{name:"Memories",color:"#c0623a",points:c.map(d=>({label:`${d}s`,value:o.get(d)??0,drilldown:`Show me memories from the ${d}s`}))}],followups:["What happened in the busiest decade?","Compare two decades side by side","Show me the timeline in detail"]}}case"types":{const o=new Map;r.forEach(u=>o.set(u.type,(o.get(u.type)??0)+1));const c=[...o.entries()].sort((u,d)=>d[1]-u[1]);return{kind:"donut",title:"What kinds of memories",caption:"The archive broken down by record type.",verdict:`${c.length} record types; ${((a=c[0])==null?void 0:a[0])??"—"} is the most common.`,prompt:e,sql:"SELECT entity_type, count() FROM heritage_atlas_facts GROUP BY entity_type ORDER BY count() DESC",source:"ClickHouse · heritage_atlas_facts (mock)",series:[{name:"Records",points:c.map(([u,d])=>({label:u,value:d}))}],followups:["Show me only the letters","Timeline of audio memories","Who appears in the most photographs?"]}}case"oldest":case"newest":{const o=r.filter(c=>c.year!==null).sort((c,u)=>t.intent==="oldest"?c.year-u.year:u.year-c.year).slice(0,6);return{kind:"timeline",title:t.intent==="oldest"?"The earliest memories":"The most recent memories",caption:`The ${t.intent==="oldest"?"oldest":"newest"} preserved records.`,verdict:o.length?`${t.intent==="oldest"?"Earliest":"Newest"}: ${o[0].year} · ${o[0].title}`:"No dated memories yet.",prompt:e,sql:`SELECT title, event_year, location FROM heritage_atlas_facts WHERE event_year IS NOT NULL ORDER BY event_year ${t.intent==="oldest"?"ASC":"DESC"} LIMIT 6`,source:"ClickHouse · heritage_atlas_facts (mock)",events:o.map(c=>({year:c.year,label:c.title,detail:c.description??void 0,category:c.type})),followups:["Show me the timeline for these years","Where did these memories happen?","Who is in these memories?"]}}case"compare_decades":{const o=new Map;r.forEach(p=>{if(!p.year)return;const y=yl(p.year);o.has(y)||o.set(y,new Map),o.get(y).set(p.type,(o.get(y).get(p.type)??0)+1)});const c=[...o.keys()].sort((p,y)=>p-y),u=c[0],d=c[c.length-1];return{kind:"compare",title:"Decade by decade",caption:`Comparing the ${u}s and the ${d}s, side by side.`,verdict:`${c.length} decades compared across ${r.length} records.`,prompt:e,sql:"SELECT floor(event_year/10)*10 AS decade, entity_type, count() FROM heritage_atlas_facts GROUP BY decade, entity_type",source:"ClickHouse · heritage_atlas_facts (mock)",compare:{leftLabel:`${u}s`,rightLabel:`${d}s`,left:[...o.get(u).entries()].map(([p,y])=>({label:p,value:y})),right:[...o.get(d).entries()].map(([p,y])=>({label:p,value:y}))},followups:["Show me the timeline for these decades","Which decade had the most letters?","Map the earliest decade"]}}case"overview":default:{const o=new Set(r.map(u=>u.year).filter(u=>u!==null)),c=new Set(r.map(u=>u.location).filter(Boolean));return{kind:"kpi",title:"Your archive at a glance",caption:"The shape of your family's preserved story.",verdict:`${r.length} memories across ${o.size} years and ${c.size} places.`,prompt:e,sql:"SELECT count(), uniq(event_year), uniq(location) FROM heritage_atlas_facts",source:"ClickHouse · heritage_atlas_facts (mock)",kpi:[{label:"Memories",value:String(r.length),icon:"inventory_2",trend:"up"},{label:"People",value:String(s.length),icon:"group",trend:"flat"},{label:"Years covered",value:String(o.size),icon:"calendar_month",trend:"up"},{label:"Places",value:String(c.size),icon:"location_on",trend:"flat"}],followups:["Show me the timeline","Where did these memories happen?","Who appears most often?","What kinds of memories are these?"]}}}}const ht={},jh="heritage-atlas-agent",jg=(ht==null?void 0:ht.VITE_TRIGGER_PROJECT_REF)??"",op=(ht==null?void 0:ht.VITE_TRIGGER_TOKEN_ENDPOINT)??"/api/chat-access-token",Gg=(ht==null?void 0:ht.VITE_TRIGGER_START_ENDPOINT)??"/api/chat-start",zg=(ht==null?void 0:ht.VITE_CLICKHOUSE_LIVE)==="true",Wg=(ht==null?void 0:ht.VITE_AGENT_ENDPOINT)??"/api/agent-query",Bn=!!(jg&&op),qn=zg,Gh=Bn||qn;async function Kg(){if(!Bn)return null;try{const{TriggerChatTransport:n}=await Ug(async()=>{const{TriggerChatTransport:e}=await import("./chat-BnIA6ijt.js").then(t=>t.l);return{TriggerChatTransport:e}},[],import.meta.url);return new n({task:jh,accessToken:async({chatId:e})=>{const t=await fetch(op,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:e})});if(!t.ok)throw new Error(`Token refresh failed: ${t.status}`);return(await t.json()).publicAccessToken},startSession:async({chatId:e})=>{const t=await fetch(Gg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:e,taskId:jh})});if(!t.ok)throw new Error(`Session start failed: ${t.status}`);return t.json()}})}catch(n){return console.warn("[agent] Failed to load TriggerChatTransport:",n),null}}async function Yg(n,e,t,r){const s=await Kg();if(!s)return null;r("interpreting");const i=`chat-${Date.now()}`;try{await s.start(i).catch(()=>null),r("querying");const a=await s.sendMessages({chatId:i,messages:[{id:`msg-${Date.now()}`,role:"user",parts:[{type:"text",text:e}]}],clientData:{vaultId:t||"demo-vault"}});let o=null,c="";const u=a.getReader();for(;;){const{done:d,value:p}=await u.read();if(d)break;if(p){if(p.type==="tool-output-available"&&p.output){const y=p.output,b=y.spec??y.output??y;b&&b.kind&&b.title&&(o=b,r("rendering"))}if(p.type==="text-delta"&&p.delta&&(c+=p.delta),p.type==="error")throw new Error(p.errorText||"Agent stream error")}}return o?(o.source="Trigger.dev chat.agent() · ClickHouse Cloud (live)",o.prompt=e,{spec:o,caption:c.trim()||o.verdict||""}):(console.warn("[agent] No VizSpec in Trigger.dev stream, falling back"),null)}catch(a){return console.warn("[agent] Trigger.dev turn failed, falling back to ClickHouse middleware:",a),null}}async function Qg(n,e){if(!qn)return null;e("interpreting"),await new Promise(t=>setTimeout(t,200)),e("querying");try{const t=await fetch(Wg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})});if(!t.ok)throw new Error(`Agent endpoint ${t.status}`);e("rendering");const r=await t.json();return{spec:r,caption:r.verdict??""}}catch(t){return console.warn("[agent] Live ClickHouse turn failed:",t),null}}async function Xg(n,e,t){t("interpreting"),await new Promise(s=>setTimeout(s,280)),t("querying"),await new Promise(s=>setTimeout(s,520)),t("rendering"),await new Promise(s=>setTimeout(s,240));const r=Hg(n,e);return{spec:r,caption:r.verdict??""}}async function Jg(n,e,t,r){if(Bn){const s=await Yg(n,e,t,r);if(s)return s}if(qn){const s=await Qg(e,r);if(s)return s;throw new Error("The live ClickHouse archive could not be reached. No demonstration data was shown. Please try again.")}return Xg(n,e,r)}const Mt=["#2c3a2e","#c0623a","#d4a44c","#6f8266","#b5c4a8","#d98865","#3a4a3c","#8a6456"],X=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};function Zg(n){return`
    <div class="hv-agent__kpi-grid">
      ${(n.kpi??[]).map(t=>{const r=t.trend==="up"?'<span class="hv-agent__trend hv-agent__trend--up">trending_up</span>':t.trend==="down"?'<span class="hv-agent__trend hv-agent__trend--down">trending_down</span>':"";return`
            <div class="hv-agent__kpi-card">
              <div class="hv-agent__kpi-top">
                <span class="material-symbols-outlined hv-agent__kpi-icon">${X(t.icon??"stats")}</span>
                ${r}
              </div>
              <div class="hv-agent__kpi-value">${X(t.value)}</div>
              <div class="hv-agent__kpi-label">${X(t.label)}</div>
              ${t.sub?`<div class="hv-agent__kpi-sub">${X(t.sub)}</div>`:""}
            </div>
          `}).join("")}
    </div>
  `}function e6(n){const e=n.series??[];if(!e.length)return $t("No data");const t=e[0].points,r=Math.max(...t.map(O=>O.value),1),s=720,i=320,a=48,o=24,c=24,u=56,d=s-a-o,p=i-c-u,y=d/t.length*.62,b=d/t.length*.38,R=Array.from({length:5},(O,k)=>{const F=Math.round(r/4*k),$=c+p-F/r*p;return{v:F,y:$}});return`
    <svg class="hv-agent__chart" viewBox="0 0 ${s} ${i}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${X(n.title)}">
      ${R.map(O=>`
          <line x1="${a}" y1="${O.y}" x2="${s-o}" y2="${O.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${a-8}" y="${O.y+4}" text-anchor="end" font-size="11" fill="#6b7060">${O.v}</text>
        `).join("")}
      ${t.map((O,k)=>{const F=a+k*(y+b)+b/2,$=O.value/r*p,U=c+p-$,q=Mt[k%Mt.length];return`
            <g class="hv-agent__bar" data-drilldown="${X(O.drilldown)}" data-label="${X(O.label)}" data-value="${X(O.value)}">
              <rect x="${F}" y="${U}" width="${y}" height="${$}" rx="6" ry="6" fill="${q}" opacity="0.9">
                <animate attributeName="height" from="0" to="${$}" dur="0.6s" fill="freeze" begin="${k*.06}s" />
                <animate attributeName="y" from="${c+p}" to="${U}" dur="0.6s" fill="freeze" begin="${k*.06}s" />
              </rect>
              <text x="${F+y/2}" y="${c+p+22}" text-anchor="middle" font-size="11" fill="#3a3f33">${X(O.label)}</text>
              <text x="${F+y/2}" y="${U-6}" text-anchor="middle" font-size="11" font-weight="600" fill="#1d2018">${X(O.value)}</text>
            </g>
          `}).join("")}
      <line x1="${a}" y1="${c+p}" x2="${s-o}" y2="${c+p}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `}function t6(n){const e=n.series??[];if(!e.length)return $t("No data");const t=e[0].points;if(t.length<2)return $t("Need at least 2 points");const r=Math.max(...t.map(k=>k.value),1),s=720,i=320,a=48,o=24,c=24,u=56,d=s-a-o,p=i-c-u,y=d/(t.length-1),b=Array.from({length:5},(k,F)=>{const $=Math.round(r/4*F),U=c+p-$/r*p;return{v:$,y:U}}),R=t.map((k,F)=>{const $=a+F*y,U=c+p-k.value/r*p;return`${F===0?"M":"L"} ${$} ${U}`}).join(" "),O=`${R} L ${a+(t.length-1)*y} ${c+p} L ${a} ${c+p} Z`;return`
    <svg class="hv-agent__chart" viewBox="0 0 ${s} ${i}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${X(n.title)}">
      <defs>
        <linearGradient id="hv-agent-line-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c3a2e" stop-opacity="0.28" />
          <stop offset="100%" stop-color="#2c3a2e" stop-opacity="0" />
        </linearGradient>
      </defs>
      ${b.map(k=>`
          <line x1="${a}" y1="${k.y}" x2="${s-o}" y2="${k.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${a-8}" y="${k.y+4}" text-anchor="end" font-size="11" fill="#6b7060">${k.v}</text>
        `).join("")}
      <path d="${O}" fill="url(#hv-agent-line-grad)" />
      <path d="${R}" fill="none" stroke="#2c3a2e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0 2000" to="2000 0" dur="1s" fill="freeze" />
      </path>
      ${t.map((k,F)=>{const $=a+F*y,U=c+p-k.value/r*p;return`
            <g class="hv-agent__point" data-drilldown="${X(k.drilldown)}" data-label="${X(k.label)}" data-value="${X(k.value)}">
              <circle cx="${$}" cy="${U}" r="4" fill="#fbf5ec" stroke="#2c3a2e" stroke-width="2">
                <animate attributeName="r" from="0" to="4" dur="0.4s" fill="freeze" begin="${.8+F*.04}s" />
              </circle>
              ${F%Math.max(1,Math.floor(t.length/8))===0?`<text x="${$}" y="${c+p+22}" text-anchor="middle" font-size="11" fill="#3a3f33">${X(k.label)}</text>`:""}
            </g>
          `}).join("")}
      <line x1="${a}" y1="${c+p}" x2="${s-o}" y2="${c+p}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `}function n6(n){const e=n.series??[];if(!e.length)return $t("No data");const t=e[0].points,r=t.reduce((d,p)=>d+p.value,0);if(r===0)return $t("No data");const s=180,i=180,a=130,o=78;let c=-Math.PI/2;const u=t.map((d,p)=>{const y=d.value/r*Math.PI*2,b=c,R=c+y;c=R;const O=s+a*Math.cos(b),k=i+a*Math.sin(b),F=s+a*Math.cos(R),$=i+a*Math.sin(R),U=s+o*Math.cos(R),q=i+o*Math.sin(R),W=s+o*Math.cos(b),Z=i+o*Math.sin(b),S=y>Math.PI?1:0,w=`M ${O} ${k} A ${a} ${a} 0 ${S} 1 ${F} ${$} L ${U} ${q} A ${o} ${o} 0 ${S} 0 ${W} ${Z} Z`,A=(b+R)/2,_=(a+o)/2,E=s+_*Math.cos(A),I=i+_*Math.sin(A),T=Math.round(d.value/r*100);return{path:w,color:Mt[p%Mt.length],label:d.label,value:d.value,pct:T,lx:E,ly:I}});return`
    <div class="hv-agent__donut-wrap">
      <svg class="hv-agent__chart hv-agent__donut" viewBox="0 0 360 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${X(n.title)}">
        ${u.map((d,p)=>`
            <g class="hv-agent__slice" data-label="${X(d.label)}" data-value="${X(d.value)}" data-pct="${X(d.pct)}">
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
            <li class="hv-agent__legend-item" data-label="${X(d.label)}" data-value="${X(d.value)}">
              <span class="hv-agent__legend-swatch" style="background:${d.color}"></span>
              <span class="hv-agent__legend-label">${X(d.label)}</span>
              <span class="hv-agent__legend-value">${X(d.value)} · ${d.pct}%</span>
            </li>
          `).join("")}
      </ul>
    </div>
  `}function r6(n){const e=n.events??[];if(!e.length)return $t("No events");const t=e.map(a=>a.year),r=Math.min(...t),s=Math.max(...t),i=Math.max(1,s-r);return`
    <div class="hv-agent__timeline">
      <div class="hv-agent__timeline-axis">
        <span>${r}</span>
        <div class="hv-agent__timeline-line"></div>
        <span>${s}</span>
      </div>
      <div class="hv-agent__timeline-events">
        ${e.map((a,o)=>{const c=(a.year-r)/i*92+4,u=Mt[o%Mt.length];return`
              <button class="hv-agent__timeline-event" data-label="${X(a.label)}" data-year="${X(a.year)}" style="--left: ${c}%; --color: ${u}; --delay: ${o*80}ms">
                <span class="hv-agent__timeline-dot"></span>
                <span class="hv-agent__timeline-card">
                  <b>${X(a.year)}</b>
                  <span class="hv-agent__timeline-title">${X(a.label)}</span>
                  ${a.detail?`<small>${X(a.detail)}</small>`:""}
                </span>
              </button>
            `}).join("")}
      </div>
    </div>
  `}function s6(n){const e=n.nodes??[],t=n.edges??[];if(!e.length)return $t("No people");const r=Math.max(...e.map(c=>c.weight??0),1),s=50,i=50,a=32;e.forEach((c,u)=>{const d=u/e.length*Math.PI*2-Math.PI/2,p=a-(c.weight??0)/r*10;c._x=s+p*Math.cos(d),c._y=i+p*Math.sin(d)});const o=new Map(e.map(c=>[c.id,c]));return`
    <div class="hv-agent__network">
      <svg class="hv-agent__network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${t.map(c=>{const u=o.get(c.from),d=o.get(c.to);if(!u||!d)return"";const p=u._x,y=u._y,b=d._x,R=d._y;return`<line x1="${p}" y1="${y}" x2="${b}" y2="${R}" stroke="rgba(28,32,24,0.18)" stroke-width="0.3" />`}).join("")}
      </svg>
      ${e.map((c,u)=>{const d=c,p=16+(c.weight??0)/r*16;return`
            <button class="hv-agent__node" data-label="${X(c.label)}" data-meta="${X(c.meta??c.group??"")}" style="--x: ${d._x}%; --y: ${d._y}%; --size: ${p}px; --delay: ${u*60}ms">
              <span class="hv-agent__node-dot"></span>
              <span class="hv-agent__node-label">${X(c.label.split(" ")[0])}</span>
            </button>
          `}).join("")}
    </div>
  `}function i6(n){const e=n.points??[];if(!e.length)return $t("No locations");const t=e.every(a=>a.lat!==void 0&&a.lng!==void 0),r=t?{minLat:-22,maxLat:-8,minLng:21,maxLng:34}:{minLat:0,maxLat:0,minLng:0,maxLng:0},s=Math.max(...e.map(a=>a.count),1),i=(a,o)=>{const c=(o-r.minLng)/(r.maxLng-r.minLng)*100,u=100-(a-r.minLat)/(r.maxLat-r.minLat)*100;return{x:c,y:u}};return`
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
      ${e.map((a,o)=>{const c=t?i(a.lat,a.lng):{x:a.x??50,y:a.y??50},u=18+a.count/s*28,d=Mt[o%Mt.length];return`
            <button class="hv-agent__map-place" data-drilldown="${X(a.drilldown)}" data-label="${X(a.place)}" data-count="${X(a.count)}" style="--x: ${c.x}%; --y: ${c.y}%; --size: ${u}px; --color: ${d}; --delay: ${o*70}ms">
              <span class="hv-agent__map-pulse"></span>
              <span class="hv-agent__map-dot"></span>
              <span class="hv-agent__map-label">${X(a.place)} <b>${X(a.count)}</b></span>
            </button>
          `}).join("")}
      <div class="hv-agent__map-legend">
        <span>Density</span>
        <i style="width: 12px; height: 12px"></i>
        <i style="width: 18px; height: 18px"></i>
        <i style="width: 26px; height: 26px"></i>
      </div>
    </div>
  `}function a6(n){const e=n.headers??[],t=n.rows??[];return t.length?`
    <div class="hv-agent__table-wrap">
      <table class="hv-agent__table">
        <thead>
          <tr>${e.map(r=>`<th>${X(r)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${t.map((r,s)=>`
              <tr class="hv-agent__table-row" data-drilldown="${X(r.drilldown)}" style="--delay: ${s*30}ms">
                ${r.cells.map((i,a)=>`<td${a===0?' class="hv-agent__table-key"':""}>${X(i)}</td>`).join("")}
              </tr>
            `).join("")}
        </tbody>
      </table>
    </div>
  `:$t("No records")}function o6(n){const e=n.compare;if(!e)return $t("No comparison");const t=Math.max(...e.left.map(s=>s.value),1),r=Math.max(...e.right.map(s=>s.value),1);return`
    <div class="hv-agent__compare">
      <div class="hv-agent__compare-col hv-agent__compare-col--left">
        <h4>${X(e.leftLabel)}</h4>
        ${e.left.map((s,i)=>{const a=s.value/t*100;return`
              <div class="hv-agent__compare-row" data-label="${X(s.label)}" data-value="${X(s.value)}">
                <span class="hv-agent__compare-label">${X(s.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${a}%; background: ${Mt[i%Mt.length]}; --delay: ${i*80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${X(s.value)}</span>
              </div>
            `}).join("")}
      </div>
      <div class="hv-agent__compare-divider"></div>
      <div class="hv-agent__compare-col hv-agent__compare-col--right">
        <h4>${X(e.rightLabel)}</h4>
        ${e.right.map((s,i)=>{const a=s.value/r*100;return`
              <div class="hv-agent__compare-row" data-label="${X(s.label)}" data-value="${X(s.value)}">
                <span class="hv-agent__compare-label">${X(s.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${a}%; background: ${Mt[(i+4)%Mt.length]}; --delay: ${i*80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${X(s.value)}</span>
              </div>
            `}).join("")}
      </div>
    </div>
  `}function l6(n){const e=n.heatmap??[];if(!e.length)return $t("No data");const t=[...new Set(e.map(i=>i.row))],r=[...new Set(e.map(i=>i.col))],s=Math.max(...e.map(i=>i.value),1);return`
    <div class="hv-agent__heatmap">
      ${t.map(i=>`
          <div class="hv-agent__heatmap-row">
            <span class="hv-agent__heatmap-label">${X(i)}</span>
            ${r.map(a=>{const o=e.find(d=>d.row===i&&d.col===a),c=(o==null?void 0:o.value)??0;return`<div class="hv-agent__heatmap-cell" style="background: rgba(192,98,58,${c/s}); --value: ${c}" data-row="${X(i)}" data-col="${X(a)}" data-value="${X(c)}" title="${X(i)} · ${X(a)}: ${X(c)}"></div>`}).join("")}
          </div>
        `).join("")}
    </div>
  `}function $t(n){return`
    <div class="hv-agent__empty">
      <span class="material-symbols-outlined">query_stats</span>
      <p>${X(n)}</p>
    </div>
  `}function c6(n){switch(n.kind){case"kpi":return Zg(n);case"bar":return e6(n);case"line":return t6(n);case"donut":return n6(n);case"timeline":return r6(n);case"network":return s6(n);case"map":return i6(n);case"table":return a6(n);case"compare":return o6(n);case"heatmap":return l6(n);default:return $t(`Unknown viz kind: ${n.kind}`)}}const u6=["Show me the timeline of memories","Where did my family live?","Who appears most often in the archive?","What kinds of memories are preserved?","Compare the 1920s and the 2020s","What are the oldest memories?","Show me the family constellation","Give me an overview of the archive"],h6={queued:"Queued",interpreting:"Interpreting your question",querying:"Querying ClickHouse",rendering:"Rendering visualization",done:"Done",error:"Something went wrong"};class d6{constructor(e){v(this,"mount");v(this,"dataset");v(this,"messages",[]);v(this,"isStreaming",!1);this.mount=e.mount,this.dataset=e.dataset,e.vaultId,e.onFollowup}init(){this.renderShell(),this.renderSuggestedPrompts();const e=sessionStorage.getItem("heritage-atlas-pending-prompt");e&&(sessionStorage.removeItem("heritage-atlas-pending-prompt"),this.send(e))}async send(e){if(this.isStreaming||!e.trim())return;this.isStreaming=!0;const t={id:`u-${Date.now()}`,role:"user",prompt:e,at:new Date().toISOString()};this.messages.push(t),this.rememberPrompt(e),this.renderMessages();const r={id:`a-${Date.now()}`,role:"agent",prompt:e,at:new Date().toISOString(),phase:"queued"};this.messages.push(r),this.renderMessages();const s=Date.now();try{const i=await Jg(this.dataset,e,"demo-vault",a=>{const o=this.messages.find(c=>c.id===r.id);o&&(o.phase=a,this.renderMessages())});i.spec.elapsedMs=Date.now()-s,i.spec.source||(i.spec.source=Bn?"Trigger.dev chat.agent() · ClickHouse":qn?"ClickHouse Cloud · live (Vite middleware)":"Mock runtime · (configure Trigger.dev + ClickHouse for production)"),r.spec=i.spec,r.phase="done",this.renderMessages()}catch(i){r.phase="error",r.text=i instanceof Error?i.message:String(i),this.renderMessages()}finally{this.isStreaming=!1}}renderShell(){this.mount.innerHTML=`
      <aside class="hv-agent-sidebar" data-sidebar aria-label="Agent navigation">
        <div class="hv-agent-sidebar__brand">
          <a href="#vault" data-dashboard-view="vault" aria-label="Heritage Atlas home">
            <img data-brand-logo class="brand-logo" src="./heritageatlas-logo.svg" alt="Heritage Atlas" />
          </a>
        </div>
        <nav class="hv-agent-sidebar__nav" aria-label="Primary">
          <a class="hv-agent-sidebar__nav-link" href="#vault" data-dashboard-view="vault">
            <span class="material-symbols-outlined">inventory_2</span><span>The Vault</span>
          </a>
          <a class="hv-agent-sidebar__nav-link" href="#family-map" data-dashboard-view="family-map">
            <span class="material-symbols-outlined">account_tree</span><span>Family Map</span>
          </a>
          <a class="hv-agent-sidebar__nav-link" href="#story-mode" data-dashboard-view="story-mode">
            <span class="material-symbols-outlined">auto_stories</span><span>Story Mode</span>
          </a>
          <a class="hv-agent-sidebar__nav-link" href="#atlas" data-dashboard-view="atlas">
            <span class="material-symbols-outlined">explore</span><span>Heritage Atlas</span>
          </a>
          <a class="hv-agent-sidebar__nav-link is-active" href="#agent" data-dashboard-view="agent" aria-current="page">
            <span class="material-symbols-outlined">smart_toy</span><span>Agent</span>
          </a>
        </nav>
        <div class="hv-agent-sidebar__divider"></div>
        <div class="hv-agent-sidebar__info">
          <p class="hv-agent-sidebar__info-label">Data source</p>
          <p class="hv-agent-sidebar__info-value">${Bn?"Trigger.dev + ClickHouse":qn?"ClickHouse Cloud":"Mock runtime"}</p>
          <p class="hv-agent-sidebar__info-sub">${Bn?"chat.agent() orchestration · 10 ClickHouse-querying tools":qn?"Live queries · ~500ms round-trip":"Configure .env for live data"}</p>
        </div>
        <div class="hv-agent-sidebar__footer">
          <button class="hv-agent-sidebar__theme" type="button" data-theme-toggle>
            <span class="material-symbols-outlined" data-theme-icon>dark_mode</span>
            <span data-theme-label>Dark mode</span>
          </button>
          <button class="hv-agent-sidebar__logout" type="button" data-logout>
            <span class="material-symbols-outlined">logout</span>
            <span>Log out</span>
          </button>
          <div class="hv-agent-sidebar__user">
            <div class="hv-agent-sidebar__avatar" data-auth-user-initials>AK</div>
            <div>
              <p class="hv-agent-sidebar__user-name" data-auth-user-name>Amara Kabwe</p>
              <p class="hv-agent-sidebar__user-role">Vault keeper</p>
            </div>
          </div>
        </div>
      </aside>

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
            <span class="hv-agent__powered${Gh?" hv-agent__powered--live":" hv-agent__powered--fallback"}" title="${Bn?"Live: Trigger.dev chat.agent() worker querying ClickHouse Cloud":qn?"Live: Vite middleware querying ClickHouse Cloud directly. Trigger.dev secret key pending — once set, the chat.agent() worker takes over.":"Fallback mode: set VITE_TRIGGER_PROJECT_REF + VITE_TRIGGER_PUBLIC_TOKEN or VITE_CLICKHOUSE_LIVE=true in .env"}">
              <span class="material-symbols-outlined" style="font-size:14px">${Gh?"bolt":"cloud_off"}</span>
              ${Bn?"Trigger.dev + ClickHouse · live":qn?"ClickHouse · live":"Mock runtime · configure Trigger.dev + ClickHouse"}
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
    `,ip();const e=this.mount.querySelector("[data-agent-form]"),t=this.mount.querySelector("[data-agent-input]");e==null||e.addEventListener("submit",r=>{r.preventDefault();const s=(t==null?void 0:t.value.trim())??"";s&&(this.send(s),t&&(t.value=""))})}renderSuggestedPrompts(){const e=this.mount.querySelector("[data-agent-suggestions]");if(!e)return;const t=JSON.parse(localStorage.getItem("heritage-atlas-recent-prompts")??"[]");e.innerHTML=`
      <p class="hv-agent__suggestions-label">Try asking</p>
      <div class="hv-agent__chips">
        ${u6.map(r=>`
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
              <span class="hv-agent__phase-label">${h6[e.phase]}</span>
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
              ${c6(t)}
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
    `}bindInteractions(e){const t=this.mount.querySelector(`[data-msg-id="${e}"]`);t&&(t.querySelectorAll("[data-drilldown]").forEach(r=>{const s=r.getAttribute("data-drilldown");if(!s)return;r.setAttribute("role","button"),r.setAttribute("tabindex","0");const i=()=>{if(this.isStreaming)return;const a=this.mount.querySelector("[data-agent-input]");a&&(a.value=s),this.send(s),a&&(a.value="")};r.addEventListener("click",i),r.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i())})}),t.querySelectorAll("[data-followup]").forEach(r=>{r.addEventListener("click",()=>{const s=r.dataset.followup??"",i=this.mount.querySelector("[data-agent-input]");i&&(i.value=s),this.send(s),i&&(i.value="")})}),t.querySelectorAll(".hv-agent__legend-item").forEach(r=>{r.addEventListener("mouseenter",()=>{const s=r.dataset.label;t.querySelectorAll(".hv-agent__slice").forEach(i=>{i.style.opacity=i.dataset.label===s?"1":"0.25"})}),r.addEventListener("mouseleave",()=>{t.querySelectorAll(".hv-agent__slice").forEach(s=>{s.style.opacity=""})})}))}showSuggestions(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.style.display="")}rememberPrompt(e){const t="heritage-atlas-recent-prompts",r=JSON.parse(localStorage.getItem(t)??"[]");localStorage.setItem(t,JSON.stringify([e,...r.filter(s=>s!==e)].slice(0,5)))}hideSuggestions(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.style.display="none")}esc(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}}let ca=null;function lp(){const n=document.getElementById("agent-screen");return n?(ca||(ca=new d6({mount:n,dataset:Le,vaultId:"demo-vault"}),ca.init()),ca):null}document.addEventListener("heritage:agent-route",()=>{lp()});window.location.hash==="#agent"&&lp();const St=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};function p6(n){const e=Le.members,t=e.filter(u=>u.parentId).map(u=>({from:u.parentId,to:u.id})),r=new Map;e.forEach(u=>{u.parentId&&r.set(u.id,u.parentId)});const s=u=>{let d=0,p=u;for(;r.has(p)&&(p=r.get(p),d++,!(d>20)););return d},i=new Map;e.forEach(u=>{const d=s(u.id);i.has(d)||i.set(d,[]),i.get(d).push(u)});const a=[...i.keys()].sort((u,d)=>u-d),o=new Map;Le.memories.forEach(u=>{var d;(d=u.familyMemberIds)==null||d.forEach(p=>{o.set(p,(o.get(p)??0)+1)})}),n.innerHTML=`
    <div class="hv-fm-backdrop" aria-hidden="true">
      <div class="hv-fm-aurora"></div>
    </div>
    <div class="hv-fm-grain" aria-hidden="true"></div>

    <aside class="hv-fm-sidebar" data-sidebar aria-label="Family Map navigation">
      <div class="hv-fm-sidebar__brand">
        <a href="#vault" data-dashboard-view="vault" aria-label="HeritageAtlas home">
          <img data-brand-logo class="brand-logo" src="./heritageatlas-logo.svg" alt="HeritageAtlas" />
        </a>
        <div class="hv-fm-sidebar__brand-text">
          <span class="hv-fm-sidebar__brand-name">HeritageAtlas</span>
          <span class="hv-fm-sidebar__brand-tag">Explore the stories that connect us</span>
        </div>
      </div>
      <nav class="hv-fm-sidebar__nav" aria-label="Primary">
        <a class="hv-fm-sidebar__nav-link" href="#vault" data-dashboard-view="vault">
          <span class="material-symbols-outlined">inventory_2</span><span>The Vault</span>
        </a>
        <a class="hv-fm-sidebar__nav-link is-active" href="#family-map" data-dashboard-view="family-map" aria-current="page">
          <span class="material-symbols-outlined">account_tree</span><span>Family Map</span>
        </a>
        <a class="hv-fm-sidebar__nav-link" href="#story-mode" data-dashboard-view="story-mode">
          <span class="material-symbols-outlined">auto_stories</span><span>Story Mode</span>
        </a>
        <a class="hv-fm-sidebar__nav-link" href="#agent" data-dashboard-view="agent">
          <span class="material-symbols-outlined">smart_toy</span><span>Agent</span>
        </a>
      </nav>
      <div class="hv-fm-sidebar__divider"></div>
      <div class="hv-fm-sidebar__stats">
        <p class="hv-fm-sidebar__stats-label">Living archive</p>
        <p class="hv-fm-sidebar__stats-value">${e.length} <em>people</em></p>
        <p class="hv-fm-sidebar__stats-sub">${a.length} generations · ${t.length} connections</p>
      </div>
      <div class="hv-fm-sidebar__footer">
        <button class="hv-fm-sidebar__theme" type="button" data-theme-toggle>
          <span class="material-symbols-outlined" data-theme-icon>dark_mode</span>
          <span data-theme-label>Dark mode</span>
        </button>
        <button class="hv-fm-sidebar__logout" type="button" data-logout>
          <span class="material-symbols-outlined">logout</span>
          <span>Log out</span>
        </button>
        <div class="hv-fm-sidebar__user">
          <div class="hv-fm-sidebar__avatar">AK</div>
          <div>
            <p class="hv-fm-sidebar__user-name">Amara Kabwe</p>
            <p class="hv-fm-sidebar__user-role">Vault keeper</p>
          </div>
        </div>
      </div>
    </aside>

    <main class="hv-fm-main">
      <header class="hv-fm-topbar">
        <div>
          <p class="hv-fm-topbar__eyebrow">Your lineage, connected</p>
          <h2 class="hv-fm-topbar__title">Family <em>Map.</em></h2>
        </div>
        <div class="hv-fm-topbar__actions">
          <button class="hv-fm-topbar__btn" type="button" data-add-relative>
            <span class="material-symbols-outlined">person_add</span>
            Add relative
          </button>
          <button class="hv-fm-topbar__btn hv-fm-topbar__btn--primary" type="button" data-invite-family>
            <span class="material-symbols-outlined">group_add</span>
            Invite family
          </button>
        </div>
      </header>

      <section class="hv-fm-canvas" data-fm-canvas>
        <svg class="hv-fm-edges" data-fm-edges viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          ${t.map(u=>{const d=s(u.from),p=s(u.to),y=i.get(d)??[],b=i.get(p)??[],R=y.findIndex(W=>W.id===u.from),O=b.findIndex(W=>W.id===u.to),k=(R+1)/(y.length+1)*100,F=(d+.5)/a.length*100,$=(O+1)/(b.length+1)*100,U=(p+.5)/a.length*100,q=(F+U)/2;return`<path d="M ${k} ${F} C ${k} ${q}, ${$} ${q}, ${$} ${U}" fill="none" stroke="rgba(45,58,46,0.2)" stroke-width="0.3" stroke-dasharray="0.8 0.8" />`}).join("")}
        </svg>

        <div class="hv-fm-generations">
          ${a.map((u,d)=>{const p=i.get(u)??[];return`
              <div class="hv-fm-generation" style="--gen-delay: ${d*100}ms">
                <p class="hv-fm-generation__label">Generation ${u+1}</p>
                <div class="hv-fm-generation__row">
                  ${p.map((y,b)=>{const R=o.get(y.id)??0,O=u===0,k=y.birthYear??"?",F=y.deathYear??"present";return`
                      <button class="hv-fm-node${O?" hv-fm-node--root":""}" data-fm-node data-member-id="${St(y.id)}" style="--node-delay: ${d*100+b*40}ms">
                        <span class="hv-fm-node__dot">
                          <span class="material-symbols-outlined">person</span>
                        </span>
                        <span class="hv-fm-node__body">
                          <span class="hv-fm-node__name">${St(y.fullName)}</span>
                          <span class="hv-fm-node__meta">${St(y.relationship??"Family")}</span>
                          <span class="hv-fm-node__years">${k}–${F}</span>
                          ${R>0?`<span class="hv-fm-node__count">${R} ${R===1?"memory":"memories"}</span>`:""}
                        </span>
                      </button>
                    `}).join("")}
                </div>
              </div>
            `}).join("")}
        </div>

        <aside class="hv-fm-inspector" data-fm-inspector>
          <div class="hv-fm-inspector__empty">
            <span class="material-symbols-outlined">touch_app</span>
            <p>Select a person to inspect their connections and memories.</p>
          </div>
        </aside>
      </section>
    </main>
  `;const c=n.querySelector("[data-fm-inspector]");n.querySelectorAll("[data-fm-node]").forEach(u=>{u.addEventListener("click",()=>{const d=u.dataset.memberId??"",p=e.find(k=>k.id===d);if(!p||!c)return;n.querySelectorAll("[data-fm-node]").forEach(k=>k.classList.remove("is-selected")),u.classList.add("is-selected");const y=o.get(d)??0,b=e.find(k=>k.id===p.parentId),R=e.filter(k=>k.parentId===d),O=Le.memories.filter(k=>{var F;return(F=k.familyMemberIds)==null?void 0:F.includes(d)});c.innerHTML=`
        <div class="hv-fm-inspector__card">
          <div class="hv-fm-inspector__top">
            <span class="hv-fm-inspector__avatar">
              <span class="material-symbols-outlined">person</span>
            </span>
            <div>
              <h3 class="hv-fm-inspector__name">${St(p.fullName)}</h3>
              <p class="hv-fm-inspector__role">${St(p.relationship??"Family member")}</p>
            </div>
          </div>
          ${p.notes?`<p class="hv-fm-inspector__notes">${St(p.notes)}</p>`:""}
          <div class="hv-fm-inspector__meta">
            <div><b>${p.birthYear??"?"}</b><small>Born</small></div>
            <div><b>${p.deathYear??"—"}</b><small>Died</small></div>
            <div><b>${y}</b><small>Memories</small></div>
          </div>
          ${b?`
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Parent</p>
              <button class="hv-fm-inspector__link" data-fm-node data-member-id="${St(b.id)}">
                <span class="material-symbols-outlined">arrow_upward</span>
                ${St(b.fullName)}
              </button>
            </div>
          `:""}
          ${R.length?`
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Children (${R.length})</p>
              ${R.map(k=>`
                <button class="hv-fm-inspector__link" data-fm-node data-member-id="${St(k.id)}">
                  <span class="material-symbols-outlined">arrow_downward</span>
                  ${St(k.fullName)}
                </button>
              `).join("")}
            </div>
          `:""}
          ${O.length?`
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Memories (${O.length})</p>
              ${O.slice(0,5).map(k=>`
                <div class="hv-fm-inspector__memory">
                  <span class="material-symbols-outlined">${k.type==="photo"?"photo_camera":k.type==="audio"?"graphic_eq":k.type==="video"?"videocam":"description"}</span>
                  <div>
                    <b>${St(k.title)}</b>
                    <small>${St(k.year??"")} · ${St(k.location??"")}</small>
                  </div>
                </div>
              `).join("")}
            </div>
          `:""}
        </div>
      `,c.querySelectorAll("[data-fm-node]").forEach(k=>{k.addEventListener("click",()=>{const F=n.querySelector(`[data-fm-node][data-member-id="${k.dataset.memberId}"]`);F==null||F.click()})})})})}let zh=!1;function cp(){const n=document.getElementById("family-map-screen");!n||zh||(p6(n),zh=!0)}document.addEventListener("heritage:family-route",()=>{requestAnimationFrame(()=>cp())});window.location.hash==="#family-map"&&document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".landing-page"),e=document.getElementById("family-map-screen");n&&e&&(n.classList.add("is-hidden"),e.style.display="flex",requestAnimationFrame(()=>cp()))});const f6=()=>{};var Wh={};/**
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
 */const up=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},m6=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],o=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,o=a?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,d=i>>2,p=(i&3)<<4|o>>4;let y=(o&15)<<2|u>>6,b=u&63;c||(b=64,a||(y=64)),r.push(t[d],t[p],t[y],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(up(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):m6(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],o=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||o==null||u==null||p==null)throw new g6;const y=i<<2|o>>4;if(r.push(y),u!==64){const b=o<<4&240|u>>2;if(r.push(b),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class g6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y6=function(n){const e=up(n);return hp.encodeByteArray(e,!0)},Ma=function(n){return y6(n).replace(/\./g,"")},dp=function(n){try{return hp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const v6=()=>_6().__FIREBASE_DEFAULTS__,w6=()=>{if(typeof process>"u"||typeof Wh>"u")return;const n=Wh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},E6=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&dp(n[1]);return e&&JSON.parse(e)},po=()=>{try{return f6()||v6()||w6()||E6()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pp=n=>{var e,t;return(t=(e=po())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},fp=n=>{const e=pp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},mp=()=>{var n;return(n=po())==null?void 0:n.config},gp=n=>{var e;return(e=po())==null?void 0:e[`_${n}`]};/**
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
 */class yp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function _p(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Ma(JSON.stringify(t)),Ma(JSON.stringify(a)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function T6(){var e;const n=(e=po())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function A6(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function I6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function S6(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function R6(){return!T6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _c(){try{return typeof indexedDB=="object"}catch{return!1}}function vc(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function vp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const C6="FirebaseError";class Bt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=C6,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?x6(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new Bt(s,o,r)}}function x6(n,e){return n.replace(k6,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const k6=/\{\$([^}]+)}/g;function P6(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ar(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Kh(i)&&Kh(a)){if(!ar(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Kh(n){return n!==null&&typeof n=="object"}/**
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
 */function Di(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Js(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function N6(n,e){const t=new O6(n,e);return t.subscribe.bind(t)}class O6{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");L6(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=_l),s.error===void 0&&(s.error=_l),s.complete===void 0&&(s.complete=_l);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L6(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _l(){}/**
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
 */const D6=1e3,V6=2,M6=14400*1e3,$6=.5;function Yh(n,e=D6,t=V6){const r=e*Math.pow(t,n),s=Math.round($6*r*(Math.random()-.5)*2);return Math.min(M6,r+s)}/**
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
 */function Te(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Gr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wc(n){return(await fetch(n,{credentials:"include"})).ok}class Ut{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class U6{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new yp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(B6(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:F6(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F6(n){return n===Ir?void 0:n}function B6(n){return n.instantiationMode==="EAGER"}/**
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
 */class q6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new U6(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const H6={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},j6=pe.INFO,G6={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},z6=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=G6[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=j6,this._logHandler=z6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?H6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const W6=(n,e)=>e.some(t=>n instanceof t);let Qh,Xh;function K6(){return Qh||(Qh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Y6(){return Xh||(Xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wp=new WeakMap,ql=new WeakMap,Ep=new WeakMap,vl=new WeakMap,Ec=new WeakMap;function Q6(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Jn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&wp.set(t,n)}).catch(()=>{}),Ec.set(e,n),e}function X6(n){if(ql.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ql.set(n,e)}let Hl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ql.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ep.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Jn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function J6(n){Hl=n(Hl)}function Z6(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wl(this),e,...t);return Ep.set(r,e.sort?e.sort():[e]),Jn(r)}:Y6().includes(n)?function(...e){return n.apply(wl(this),e),Jn(wp.get(this))}:function(...e){return Jn(n.apply(wl(this),e))}}function e0(n){return typeof n=="function"?Z6(n):(n instanceof IDBTransaction&&X6(n),W6(n,K6())?new Proxy(n,Hl):n)}function Jn(n){if(n instanceof IDBRequest)return Q6(n);if(vl.has(n))return vl.get(n);const e=e0(n);return e!==n&&(vl.set(n,e),Ec.set(e,n)),e}const wl=n=>Ec.get(n);function bp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),o=Jn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Jn(a.result),c.oldVersion,c.newVersion,Jn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),o}const t0=["get","getKey","getAll","getAllKeys","count"],n0=["put","add","delete","clear"],El=new Map;function Jh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(El.get(e))return El.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=n0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||t0.includes(t)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[t](...o),s&&c.done]))[0]};return El.set(e,i),i}J6(n=>({...n,get:(e,t,r)=>Jh(e,t)||n.get(e,t,r),has:(e,t)=>!!Jh(e,t)||n.has(e,t)}));/**
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
 */class r0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(s0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function s0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jl="@firebase/app",Zh="0.15.1";/**
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
 */const Sn=new fo("@firebase/app"),i0="@firebase/app-compat",a0="@firebase/analytics-compat",o0="@firebase/analytics",l0="@firebase/app-check-compat",c0="@firebase/app-check",u0="@firebase/auth",h0="@firebase/auth-compat",d0="@firebase/database",p0="@firebase/data-connect",f0="@firebase/database-compat",m0="@firebase/functions",g0="@firebase/functions-compat",y0="@firebase/installations",_0="@firebase/installations-compat",v0="@firebase/messaging",w0="@firebase/messaging-compat",E0="@firebase/performance",b0="@firebase/performance-compat",T0="@firebase/remote-config",A0="@firebase/remote-config-compat",I0="@firebase/storage",S0="@firebase/storage-compat",R0="@firebase/firestore",C0="@firebase/ai",x0="@firebase/firestore-compat",k0="firebase",P0="12.16.0";/**
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
 */const Gl="[DEFAULT]",N0={[jl]:"fire-core",[i0]:"fire-core-compat",[o0]:"fire-analytics",[a0]:"fire-analytics-compat",[c0]:"fire-app-check",[l0]:"fire-app-check-compat",[u0]:"fire-auth",[h0]:"fire-auth-compat",[d0]:"fire-rtdb",[p0]:"fire-data-connect",[f0]:"fire-rtdb-compat",[m0]:"fire-fn",[g0]:"fire-fn-compat",[y0]:"fire-iid",[_0]:"fire-iid-compat",[v0]:"fire-fcm",[w0]:"fire-fcm-compat",[E0]:"fire-perf",[b0]:"fire-perf-compat",[T0]:"fire-rc",[A0]:"fire-rc-compat",[I0]:"fire-gcs",[S0]:"fire-gcs-compat",[R0]:"fire-fst",[x0]:"fire-fst-compat",[C0]:"fire-vertex","fire-js":"fire-js",[k0]:"fire-js-all"};/**
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
 */const $a=new Map,O0=new Map,zl=new Map;function e1(n,e){try{n.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(zl.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;zl.set(e,n);for(const t of $a.values())e1(t,n);for(const t of O0.values())e1(t,n);return!0}function yr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const L0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zn=new jr("app","Firebase",L0);/**
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
 */class D0{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=P0;function Tp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Gl,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(t||(t=mp()),!t)throw Zn.create("no-options");const i=$a.get(s);if(i){if(ar(t,i.options)&&ar(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const a=new q6(s);for(const c of zl.values())a.addComponent(c);const o=new D0(t,r,a);return $a.set(s,o),o}function mo(n=Gl){const e=$a.get(n);if(!e&&n===Gl&&mp())return Tp();if(!e)throw Zn.create("no-app",{appName:n});return e}function _t(n,e,t){let r=N0[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}Kt(new Ut(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const V0="firebase-heartbeat-database",M0=1,gi="firebase-heartbeat-store";let bl=null;function Ap(){return bl||(bl=bp(V0,M0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(gi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Zn.create("idb-open",{originalErrorMessage:n.message})})),bl}async function $0(n){try{const t=(await Ap()).transaction(gi),r=await t.objectStore(gi).get(Ip(n));return await t.done,r}catch(e){if(e instanceof Bt)Sn.warn(e.message);else{const t=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(t.message)}}}async function t1(n,e){try{const r=(await Ap()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,Ip(n)),await r.done}catch(t){if(t instanceof Bt)Sn.warn(t.message);else{const r=Zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(r.message)}}}function Ip(n){return`${n.name}!${n.options.appId}`}/**
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
 */const U0=1024,F0=30;class B0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new H0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=n1();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>F0){const a=j0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=n1(),{heartbeatsToSend:r,unsentEntries:s}=q0(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Sn.warn(t),""}}}function n1(){return new Date().toISOString().substring(0,10)}function q0(n,e=U0){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),r1(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),r1(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class H0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _c()?vc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return t1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return t1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function r1(n){return Ma(JSON.stringify({version:2,heartbeats:n})).length}function j0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function G0(n){Kt(new Ut("platform-logger",e=>new r0(e),"PRIVATE")),Kt(new Ut("heartbeat",e=>new B0(e),"PRIVATE")),_t(jl,Zh,n),_t(jl,Zh,"esm2020"),_t("fire-js","")}G0("");const Sp="@firebase/installations",bc="0.6.22";/**
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
 */const Rp=1e4,Cp=`w:${bc}`,xp="FIS_v2",z0="https://firebaseinstallations.googleapis.com/v1",W0=3600*1e3,K0="installations",Y0="Installations";/**
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
 */const Q0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dr=new jr(K0,Y0,Q0);function kp(n){return n instanceof Bt&&n.code.includes("request-failed")}/**
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
 */function Pp({projectId:n}){return`${z0}/projects/${n}/installations`}function Np(n){return{token:n.token,requestStatus:2,expiresIn:J0(n.expiresIn),creationTime:Date.now()}}async function Op(n,e){const r=(await e.json()).error;return Dr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Lp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function X0(n,{refreshToken:e}){const t=Lp(n);return t.append("Authorization",Z0(e)),t}async function Dp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function J0(n){return Number(n.replace("s","000"))}function Z0(n){return`${xp} ${n}`}/**
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
 */async function e7({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Pp(n),s=Lp(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={fid:t,authVersion:xp,appId:n.appId,sdkVersion:Cp},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Dp(()=>fetch(r,o));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Np(u.authToken)}}else throw await Op("Create Installation",c)}/**
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
 */function Vp(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function t7(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const n7=/^[cdef][\w-]{21}$/,Wl="";function r7(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=s7(n);return n7.test(t)?t:Wl}catch{return Wl}}function s7(n){return t7(n).substr(0,22)}/**
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
 */function go(n){return`${n.appName}!${n.appId}`}/**
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
 */const Mp=new Map;function $p(n,e){const t=go(n);Up(t,e),i7(t,e)}function Up(n,e){const t=Mp.get(n);if(t)for(const r of t)r(e)}function i7(n,e){const t=a7();t&&t.postMessage({key:n,fid:e}),o7()}let Rr=null;function a7(){return!Rr&&"BroadcastChannel"in self&&(Rr=new BroadcastChannel("[Firebase] FID Change"),Rr.onmessage=n=>{Up(n.data.key,n.data.fid)}),Rr}function o7(){Mp.size===0&&Rr&&(Rr.close(),Rr=null)}/**
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
 */const l7="firebase-installations-database",c7=1,Vr="firebase-installations-store";let Tl=null;function Tc(){return Tl||(Tl=bp(l7,c7,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vr)}}})),Tl}async function Ua(n,e){const t=go(n),s=(await Tc()).transaction(Vr,"readwrite"),i=s.objectStore(Vr),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&$p(n,e.fid),e}async function Fp(n){const e=go(n),r=(await Tc()).transaction(Vr,"readwrite");await r.objectStore(Vr).delete(e),await r.done}async function yo(n,e){const t=go(n),s=(await Tc()).transaction(Vr,"readwrite"),i=s.objectStore(Vr),a=await i.get(t),o=e(a);return o===void 0?await i.delete(t):await i.put(o,t),await s.done,o&&(!a||a.fid!==o.fid)&&$p(n,o.fid),o}/**
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
 */async function Ac(n){let e;const t=await yo(n.appConfig,r=>{const s=u7(r),i=h7(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Wl?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function u7(n){const e=n||{fid:r7(),registrationStatus:0};return Bp(e)}function h7(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Dr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=d7(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:p7(n)}:{installationEntry:e}}async function d7(n,e){try{const t=await e7(n,e);return Ua(n.appConfig,t)}catch(t){throw kp(t)&&t.customData.serverCode===409?await Fp(n.appConfig):await Ua(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function p7(n){let e=await s1(n.appConfig);for(;e.registrationStatus===1;)await Vp(100),e=await s1(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ac(n);return r||t}return e}function s1(n){return yo(n,e=>{if(!e)throw Dr.create("installation-not-found");return Bp(e)})}function Bp(n){return f7(n)?{fid:n.fid,registrationStatus:0}:n}function f7(n){return n.registrationStatus===1&&n.registrationTime+Rp<Date.now()}/**
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
 */async function m7({appConfig:n,heartbeatServiceProvider:e},t){const r=g7(n,t),s=X0(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const a={installation:{sdkVersion:Cp,appId:n.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await Dp(()=>fetch(r,o));if(c.ok){const u=await c.json();return Np(u)}else throw await Op("Generate Auth Token",c)}function g7(n,{fid:e}){return`${Pp(n)}/${e}/authTokens:generate`}/**
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
 */async function Ic(n,e=!1){let t;const r=await yo(n.appConfig,i=>{if(!qp(i))throw Dr.create("not-registered");const a=i.authToken;if(!e&&v7(a))return i;if(a.requestStatus===1)return t=y7(n,e),i;{if(!navigator.onLine)throw Dr.create("app-offline");const o=E7(i);return t=_7(n,o),o}});return t?await t:r.authToken}async function y7(n,e){let t=await i1(n.appConfig);for(;t.authToken.requestStatus===1;)await Vp(100),t=await i1(n.appConfig);const r=t.authToken;return r.requestStatus===0?Ic(n,e):r}function i1(n){return yo(n,e=>{if(!qp(e))throw Dr.create("not-registered");const t=e.authToken;return b7(t)?{...e,authToken:{requestStatus:0}}:e})}async function _7(n,e){try{const t=await m7(n,e),r={...e,authToken:t};return await Ua(n.appConfig,r),t}catch(t){if(kp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Fp(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ua(n.appConfig,r)}throw t}}function qp(n){return n!==void 0&&n.registrationStatus===2}function v7(n){return n.requestStatus===2&&!w7(n)}function w7(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+W0}function E7(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function b7(n){return n.requestStatus===1&&n.requestTime+Rp<Date.now()}/**
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
 */async function T7(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ac(e);return r?r.catch(console.error):Ic(e).catch(console.error),t.fid}/**
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
 */async function A7(n,e=!1){const t=n;return await I7(t),(await Ic(t,e)).token}async function I7(n){const{registrationPromise:e}=await Ac(n);e&&await e}/**
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
 */function S7(n){if(!n||!n.options)throw Al("App Configuration");if(!n.name)throw Al("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Al(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Al(n){return Dr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Hp="installations",R7="installations-internal",C7=n=>{const e=n.getProvider("app").getImmediate(),t=S7(e),r=yr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},x7=n=>{const e=n.getProvider("app").getImmediate(),t=yr(e,Hp).getImmediate();return{getId:()=>T7(t),getToken:s=>A7(t,s)}};function k7(){Kt(new Ut(Hp,C7,"PUBLIC")),Kt(new Ut(R7,x7,"PRIVATE"))}k7();_t(Sp,bc);_t(Sp,bc,"esm2020");/**
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
 */const Fa="analytics",P7="firebase_id",N7="origin",O7=60*1e3,L7="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sc="https://www.googletagmanager.com/gtag/js";/**
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
 */const dt=new fo("@firebase/analytics");/**
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
 */const D7={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ot=new jr("analytics","Analytics",D7);/**
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
 */function V7(n){if(!n.startsWith(Sc)){const e=Ot.create("invalid-gtag-resource",{gtagURL:n});return dt.warn(e.message),""}return n}function jp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function M7(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function $7(n,e){const t=M7("firebase-js-sdk-policy",{createScriptURL:V7}),r=document.createElement("script"),s=`${Sc}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function U7(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function F7(n,e,t,r,s,i){const a=r[s];try{if(a)await e[a];else{const c=(await jp(t)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(o){dt.error(o)}n("config",s,i)}async function B7(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const o=await jp(t);for(const c of a){const u=o.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){dt.error(i)}}function q7(n,e,t,r){async function s(i,...a){try{if(i==="event"){const[o,c]=a;await B7(n,e,t,o,c)}else if(i==="config"){const[o,c]=a;await F7(n,e,t,r,o,c)}else if(i==="consent"){const[o,c]=a;n("consent",o,c)}else if(i==="get"){const[o,c,u]=a;n("get",o,c,u)}else if(i==="set"){const[o]=a;n("set",o)}else n(i,...a)}catch(o){dt.error(o)}}return s}function H7(n,e,t,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=q7(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function j7(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Sc)&&t.src.includes(n))return t;return null}/**
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
 */const G7=30,z7=1e3;class W7{constructor(e={},t=z7){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Gp=new W7;function K7(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Y7(n){var a;const{appId:e,apiKey:t}=n,r={method:"GET",headers:K7(t)},s=L7.replace("{app-id}",e),i=await fetch(s,r);if(i.status!==200&&i.status!==304){let o="";try{const c=await i.json();(a=c.error)!=null&&a.message&&(o=c.error.message)}catch{}throw Ot.create("config-fetch-failed",{httpStatus:i.status,responseMessage:o})}return i.json()}async function Q7(n,e=Gp,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Ot.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ot.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Z7;return setTimeout(async()=>{o.abort()},O7),zp({appId:r,apiKey:s,measurementId:i},a,o,e)}async function zp(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Gp){var o;const{appId:i,measurementId:a}=n;try{await X7(r,e)}catch(c){if(a)return dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Y7(n);return s.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!J7(u)){if(s.deleteThrottleMetadata(i),a)return dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw c}const d=Number((o=u==null?void 0:u.customData)==null?void 0:o.httpStatus)===503?Yh(t,s.intervalMillis,G7):Yh(t,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(i,p),dt.debug(`Calling attemptFetch again in ${d} millis`),zp(n,p,r,s)}}function X7(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Ot.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function J7(n){if(!(n instanceof Bt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Z7{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function e4(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,a={...r,send_to:i};n("event",t,a)}}async function t4(n,e,t,r){if(r&&r.global){const s={};for(const i of Object.keys(t))s[`user_properties.${i}`]=t[i];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
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
 */async function n4(){if(_c())try{await vc()}catch(n){return dt.warn(Ot.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return dt.warn(Ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function r4(n,e,t,r,s,i,a){const o=Q7(n);o.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&dt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>dt.error(y)),e.push(o);const c=n4().then(y=>{if(y)return r.getId()}),[u,d]=await Promise.all([o,c]);j7(i)||$7(i,u.measurementId),s("js",new Date);const p=(a==null?void 0:a.config)??{};return p[N7]="firebase",p.update=!0,d!=null&&(p[P7]=d),s("config",u.measurementId,p),u.measurementId}/**
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
 */class s4{constructor(e){this.app=e}_delete(){return delete os[this.app.options.appId],Promise.resolve()}}let os={},a1=[];const o1={};let Il="dataLayer",i4="gtag",l1,Rc,c1=!1;function a4(){const n=[];if(yc()&&n.push("This is a browser extension environment."),vp()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Ot.create("invalid-analytics-context",{errorInfo:e});dt.warn(t.message)}}function o4(n,e,t){a4();const r=n.options.appId;if(!r)throw Ot.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ot.create("no-api-key");if(os[r]!=null)throw Ot.create("already-exists",{id:r});if(!c1){U7(Il);const{wrappedGtag:i,gtagCore:a}=H7(os,a1,o1,Il,i4);Rc=i,l1=a,c1=!0}return os[r]=r4(n,a1,o1,e,l1,Il,t),new s4(n)}function l4(n=mo()){n=Te(n);const e=yr(n,Fa);return e.isInitialized()?e.getImmediate():c4(n)}function c4(n,e={}){const t=yr(n,Fa);if(t.isInitialized()){const s=t.getImmediate();if(ar(e,t.getOptions()))return s;throw Ot.create("already-initialized")}return t.initialize({options:e})}async function u4(){if(yc()||!vp()||!_c())return!1;try{return await vc()}catch{return!1}}function h4(n,e,t){n=Te(n),t4(Rc,os[n.app.options.appId],e,t).catch(r=>dt.error(r))}function d4(n,e,t,r){n=Te(n),e4(Rc,os[n.app.options.appId],e,t,r).catch(s=>dt.error(s))}const u1="@firebase/analytics",h1="0.10.22";function p4(){Kt(new Ut(Fa,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return o4(r,s,t)},"PUBLIC")),Kt(new Ut("analytics-internal",n,"PRIVATE")),_t(u1,h1),_t(u1,h1,"esm2020");function n(e){try{const t=e.getProvider(Fa).getImmediate();return{logEvent:(r,s,i)=>d4(t,r,s,i),setUserProperties:(r,s)=>h4(t,r,s)}}catch(t){throw Ot.create("interop-component-reg-failed",{reason:t})}}}p4();function Wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f4=Wp,Kp=new jr("auth","Firebase",Wp());/**
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
 */const Ba=new fo("@firebase/auth");function m4(n,...e){Ba.logLevel<=pe.WARN&&Ba.warn(`Auth (${zr}): ${n}`,...e)}function ba(n,...e){Ba.logLevel<=pe.ERROR&&Ba.error(`Auth (${zr}): ${n}`,...e)}/**
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
 */function Yt(n,...e){throw Cc(n,...e)}function an(n,...e){return Cc(n,...e)}function Yp(n,e,t){const r={...f4(),[e]:t};return new jr("auth","Firebase",r).create(e,{appName:n.name})}function bn(n){return Yp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Kp.create(n,...e)}function ne(n,e,...t){if(!n)throw Cc(e,...t)}function yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ba(e),new Error(e)}function Rn(n,e){n||yn(e)}/**
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
 */function Kl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function g4(){return d1()==="http:"||d1()==="https:"}function d1(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function y4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g4()||yc()||"connection"in navigator)?navigator.onLine:!0}function _4(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rn(t>e,"Short delay should be less than long delay!"),this.isMobile=b6()||I6()}get(){return y4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xc(n,e){Rn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],E4=new Vi(3e4,6e4);function Pn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function fn(n,e,t,r,s={}){return Xp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const o=Di({...a,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return A6()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Gr(n.emulatorConfig.host)&&(u.credentials="include"),Qp.fetch()(await Jp(n,n.config.apiHost,t,o),u)})}async function Xp(n,e,t){n._canInitEmulator=!1;const r={...v4,...e};try{const s=new T4(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ua(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const o=i.ok?a.errorMessage:a.error.message,[c,u]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ua(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw ua(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yp(n,d,u);Yt(n,d)}}catch(s){if(s instanceof Bt)throw s;Yt(n,"network-request-failed",{message:String(s)})}}async function Mi(n,e,t,r,s={}){const i=await fn(n,e,t,r,s);return"mfaPendingCredential"in i&&Yt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?xc(n.config,s):`${n.config.apiScheme}://${s}`;return w4.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function b4(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class T4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),E4.get())})}}function ua(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=an(n,e,r);return s.customData._tokenResponse=t,s}function p1(n){return n!==void 0&&n.enterprise!==void 0}class A4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return b4(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function I4(n,e){return fn(n,"GET","/v2/recaptchaConfig",Pn(n,e))}/**
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
 */async function S4(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function qa(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R4(n,e=!1){const t=Te(n),r=await t.getIdToken(e),s=kc(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(Sl(s.auth_time)),issuedAtTime:si(Sl(s.iat)),expirationTime:si(Sl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sl(n){return Number(n)*1e3}function kc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const s=dp(t);return s?JSON.parse(s):(ba("Failed to decode base64 JWT payload"),null)}catch(s){return ba("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function f1(n){const e=kc(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ps(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Bt&&C4(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function C4({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class x4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ha(n){var p;const e=n.auth,t=await n.getIdToken(),r=await ps(n,qa(e,{idToken:t}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Zp(s.providerUserInfo):[],a=P4(n.providerData,i),o=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),u=o?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function k4(n){const e=Te(n);await Ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function P4(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function N4(n,e){const t=await Xp(n,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Jp(n,s,"/v1/token",`key=${i}`),o=await n._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:r};return n.emulatorConfig&&Gr(n.emulatorConfig.host)&&(c.credentials="include"),Qp.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function O4(n,e){return fn(n,"POST","/v2/accounts:revokeToken",Pn(n,e))}/**
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
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=f1(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await N4(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new ls;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function Un(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new x4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ps(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return R4(this,e)}reload(){return k4(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await ps(this,S4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,o=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:b,providerData:R,stsTokenManager:O}=t;ne(p&&O,e,"internal-error");const k=ls.fromJSON(this.name,O);ne(typeof p=="string",e,"internal-error"),Un(r,e.name),Un(s,e.name),ne(typeof y=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),Un(i,e.name),Un(a,e.name),Un(o,e.name),Un(c,e.name),Un(u,e.name),Un(d,e.name);const F=new jt({uid:p,auth:e,email:s,emailVerified:y,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:o,stsTokenManager:k,createdAt:u,lastLoginAt:d});return R&&Array.isArray(R)&&(F.providerData=R.map($=>({...$}))),c&&(F._redirectEventId=c),F}static async _fromIdTokenResponse(e,t,r=!1){const s=new ls;s.updateFromServerResponse(t);const i=new jt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ha(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),o=new ls;o.updateFromIdToken(r);const c=new jt({uid:s.localId,auth:e,stsTokenManager:o,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const m1=new Map;function _n(n){Rn(n instanceof Function,"Expected a class definition");let e=m1.get(n);return e?(Rn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,m1.set(n,e),e)}/**
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
 */class ef{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ef.type="NONE";const g1=ef;/**
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
 */function Ta(n,e,t){return`firebase:${n}:${e}:${t}`}class cs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ta("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qa(this.auth,{idToken:e}).catch(()=>{});return t?jt._fromGetAccountInfoResponse(this.auth,t,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new cs(_n(g1),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||_n(g1);const a=Ta(r,e.config.apiKey,e.name);let o=null;for(const u of t)try{const d=await u._get(a);if(d){let p;if(typeof d=="string"){const y=await qa(e,{idToken:d}).catch(()=>{});if(!y)break;p=await jt._fromGetAccountInfoResponse(e,y,d)}else p=jt._fromJSON(e,d);u!==i&&(o=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],o&&await i._set(a,o.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new cs(i,e,r))}}/**
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
 */function y1(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(of(e))return"Blackberry";if(lf(e))return"Webos";if(nf(e))return"Safari";if((e.includes("chrome/")||rf(e))&&!e.includes("edge/"))return"Chrome";if(af(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tf(n=nt()){return/firefox\//i.test(n)}function nf(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rf(n=nt()){return/crios\//i.test(n)}function sf(n=nt()){return/iemobile/i.test(n)}function af(n=nt()){return/android/i.test(n)}function of(n=nt()){return/blackberry/i.test(n)}function lf(n=nt()){return/webos/i.test(n)}function Pc(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function L4(n=nt()){var e;return Pc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function D4(){return S6()&&document.documentMode===10}function cf(n=nt()){return Pc(n)||af(n)||lf(n)||of(n)||/windows phone/i.test(n)||sf(n)}/**
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
 */function uf(n,e=[]){let t;switch(n){case"Browser":t=y1(nt());break;case"Worker":t=`${y1(nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zr}/${r}`}/**
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
 */class V4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,o)=>{try{const c=e(i);a(c)}catch(c){o(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function M4(n,e={}){return fn(n,"GET","/v2/passwordPolicy",Pn(n,e))}/**
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
 */const $4=6;class U4{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??$4,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class F4{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _1(this),this.idTokenSubscription=new _1(this),this.beforeStateQueue=new V4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qa(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,o=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ha(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(bn(this));const t=e?Te(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await M4(this),t=new U4(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await O4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(o,this,"internal-error"),o.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&m4(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _r(n){return Te(n)}class _1{constructor(e){this.auth=e,this.observer=null,this.addObserver=N6(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _o={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function B4(n){_o=n}function hf(n){return _o.loadJS(n)}function q4(){return _o.recaptchaEnterpriseScript}function H4(){return _o.gapiScript}function j4(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class G4{constructor(){this.enterprise=new z4}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class z4{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const W4="recaptcha-enterprise",df="NO_RECAPTCHA",v1="onFirebaseAuthREInstanceReady";class Hn{constructor(e){this.type=W4,this.auth=_r(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,o)=>{I4(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const u=new A4(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(c=>{o(c)})})}function s(i,a,o){const c=window.grecaptcha;p1(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(df)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new G4().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(async o=>{if(!t&&p1(window.grecaptcha)&&Hn.scriptInjectionDeferred)await Hn.scriptInjectionDeferred.promise,s(o,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=q4();c.length!==0&&(c+=o+`&onload=${v1}`),Hn.scriptInjectionDeferred=new yp,window[v1]=()=>{var u;(u=Hn.scriptInjectionDeferred)==null||u.resolve()},hf(c).then(()=>{var u;return(u=Hn.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{s(o,i,a)}).catch(u=>{a(u)})}}).catch(o=>{a(o)})})}}Hn.scriptInjectionDeferred=null;async function w1(n,e,t,r=!1,s=!1){const i=new Hn(n);let a;if(s)a=df;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,u=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return r?Object.assign(o,{captchaResp:a}):Object.assign(o,{captchaResponse:a}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ja(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await w1(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await w1(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(a)})}/**
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
 */function K4(n,e){const t=yr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ar(i,e??{}))return s;Yt(s,"already-initialized")}return t.initialize({options:e})}function Y4(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Q4(n,e,t){const r=_r(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=pf(e),{host:a,port:o}=X4(e),c=o===null?"":`:${o}`,u={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(ar(u,r.config.emulator)&&ar(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Gr(a)?wc(`${i}//${a}${c}`):J4()}function pf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function X4(n){const e=pf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:E1(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:E1(a)}}}function E1(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function J4(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Nc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function Z4(n,e){return fn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function e3(n,e){return Mi(n,"POST","/v1/accounts:signInWithPassword",Pn(n,e))}async function t3(n,e){return fn(n,"POST","/v1/accounts:sendOobCode",Pn(n,e))}async function n3(n,e){return t3(n,e)}/**
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
 */async function r3(n,e){return Mi(n,"POST","/v1/accounts:signInWithEmailLink",Pn(n,e))}async function s3(n,e){return Mi(n,"POST","/v1/accounts:signInWithEmailLink",Pn(n,e))}/**
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
 */class yi extends Nc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new yi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new yi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ja(e,t,"signInWithPassword",e3);case"emailLink":return r3(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ja(e,r,"signUpPassword",Z4);case"emailLink":return s3(e,{idToken:t,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function us(n,e){return Mi(n,"POST","/v1/accounts:signInWithIdp",Pn(n,e))}/**
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
 */const i3="http://localhost";class Mr extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return us(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,us(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,us(e,t)}buildRequest(){const e={requestUri:i3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Di(t)}return e}}/**
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
 */function a3(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function o3(n){const e=Js(Zs(n)).link,t=e?Js(Zs(e)).deep_link_id:null,r=Js(Zs(n)).deep_link_id;return(r?Js(Zs(r)).link:null)||r||t||e||n}class Oc{constructor(e){const t=Js(Zs(e)),r=t.apiKey??null,s=t.oobCode??null,i=a3(t.mode??null);ne(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=o3(e);try{return new Oc(t)}catch{return null}}}/**
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
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,t){return yi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Oc.parseLink(t);return ne(r,"argument-error"),yi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ff{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends ff{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jn extends $i{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Gn.credential(t,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class zn extends $i{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
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
 */class Wn extends $i{constructor(){super("twitter.com")}static credential(e,t){return Mr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Wn.credential(t,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
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
 */async function l3(n,e){return Mi(n,"POST","/v1/accounts:signUp",Pn(n,e))}/**
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
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),a=b1(r);return new $r({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=b1(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function b1(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ga extends Bt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ga(e,t,r,s)}}function mf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(n,i,e,r):i})}async function c3(n,e,t=!1){const r=await ps(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $r._forOperation(n,"link",r)}/**
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
 */async function u3(n,e,t=!1){const{auth:r}=n;if(xt(r.app))return Promise.reject(bn(r));const s="reauthenticate";try{const i=await ps(n,mf(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=kc(i.idToken);ne(a,r,"internal-error");const{sub:o}=a;return ne(n.uid===o,r,"user-mismatch"),$r._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function gf(n,e,t=!1){if(xt(n.app))return Promise.reject(bn(n));const r="signIn",s=await mf(n,r,e),i=await $r._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function h3(n,e){return gf(_r(n),e)}/**
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
 */async function yf(n){const e=_r(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function d3(n,e,t){const r=_r(n);await ja(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",n3)}async function p3(n,e,t){if(xt(n.app))return Promise.reject(bn(n));const r=_r(n),a=await ja(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l3).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&yf(n),c}),o=await $r._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(o.user),o}function f3(n,e,t){return xt(n.app)?Promise.reject(bn(n)):h3(Te(n),Es.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yf(n),r})}/**
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
 */async function m3(n,e){return fn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function g3(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Te(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await ps(r,m3(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const o=r.providerData.find(({providerId:c})=>c==="password");o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function y3(n,e,t,r){return Te(n).onIdTokenChanged(e,t,r)}function _3(n,e,t){return Te(n).beforeAuthStateChanged(e,t)}function v3(n,e,t,r){return Te(n).onAuthStateChanged(e,t,r)}function w3(n){return Te(n).signOut()}const za="__sak";/**
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
 */class _f{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(za,"1"),this.storage.removeItem(za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const E3=1e3,b3=10;class vf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);D4()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,b3):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},E3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vf.type="LOCAL";const T3=vf;/**
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
 */class wf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wf.type="SESSION";const Ef=wf;/**
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
 */function A3(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new vo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const o=Array.from(a).map(async u=>u(t.origin,i)),c=await A3(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
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
 */function Lc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class I3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((o,c)=>{const u=Lc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const y=p;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function on(){return window}function S3(n){on().location.href=n}/**
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
 */function bf(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function R3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C3(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function x3(){return bf()?self:null}/**
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
 */const Tf="firebaseLocalStorageDb",k3=1,Wa="firebaseLocalStorage",Af="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wo(n,e){return n.transaction([Wa],e?"readwrite":"readonly").objectStore(Wa)}function P3(){const n=indexedDB.deleteDatabase(Tf);return new Ui(n).toPromise()}function If(){const n=indexedDB.open(Tf,k3);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wa,{keyPath:Af})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wa)?e(r):(r.close(),await P3(),e(await If()))})})}async function T1(n,e,t){const r=wo(n,!0).put({[Af]:e,value:t});return new Ui(r).toPromise()}async function N3(n,e){const t=wo(n,!1).get(e),r=await new Ui(t).toPromise();return r===void 0?null:r.value}function A1(n,e){const t=wo(n,!0).delete(e);return new Ui(t).toPromise()}const O3=800,L3=3;class Sf{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=If(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>L3)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(x3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await R3(),!this.activeServiceWorker)return;this.sender=new I3(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await T1(e,za,"1"),await A1(e,za)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>T1(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>N3(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>A1(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wo(s,!1).getAll();return new Ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sf.type="LOCAL";const D3=Sf;new Vi(3e4,6e4);/**
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
 */function V3(n,e){return e?_n(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Dc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,t){return us(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function M3(n){return gf(n.auth,new Dc(n),n.bypassAuthState)}function $3(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),u3(t,new Dc(n),n.bypassAuthState)}async function U3(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),c3(t,new Dc(n),n.bypassAuthState)}/**
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
 */class Rf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M3;case"linkViaPopup":case"linkViaRedirect":return U3;case"reauthViaPopup":case"reauthViaRedirect":return $3;default:Yt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const F3=new Vi(2e3,1e4);class as extends Rf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=Lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,F3.get())};e()}}as.currentPopupAction=null;/**
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
 */const B3="pendingRedirect",Aa=new Map;class q3 extends Rf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Aa.get(this.auth._key());if(!e){try{const r=await H3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Aa.set(this.auth._key(),e)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H3(n,e){const t=z3(e),r=G3(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function j3(n,e){Aa.set(n._key(),e)}function G3(n){return _n(n._redirectPersistence)}function z3(n){return Ta(B3,n.config.apiKey,n.name)}async function W3(n,e,t=!1){if(xt(n.app))return Promise.reject(bn(n));const r=_r(n),s=V3(r,e),a=await new q3(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const K3=600*1e3;class Y3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Q3(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Cf(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(an(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K3&&this.cachedEventUids.clear(),this.cachedEventUids.has(I1(e))}saveEventToCache(e){this.cachedEventUids.add(I1(e)),this.lastProcessedEventTime=Date.now()}}function I1(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Q3(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cf(n);default:return!1}}/**
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
 */async function X3(n,e={}){return fn(n,"GET","/v1/projects",e)}/**
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
 */const J3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z3=/^https?/;async function e9(n){if(n.config.emulator)return;const{authorizedDomains:e}=await X3(n);for(const t of e)try{if(t9(t))return}catch{}Yt(n,"unauthorized-domain")}function t9(n){const e=Kl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Z3.test(t))return!1;if(J3.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const n9=new Vi(3e4,6e4);function S1(){const n=on().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function r9(n){return new Promise((e,t)=>{var s,i,a;function r(){S1(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S1(),t(an(n,"network-request-failed"))},timeout:n9.get()})}if((i=(s=on().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=on().gapi)!=null&&a.load)r();else{const o=j4("iframefcb");return on()[o]=()=>{gapi.load?r():t(an(n,"network-request-failed"))},hf(`${H4()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw Ia=null,e})}let Ia=null;function s9(n){return Ia=Ia||r9(n),Ia}/**
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
 */const i9=new Vi(5e3,15e3),a9="__/auth/iframe",o9="emulator/auth/iframe",l9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function u9(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xc(e,o9):`https://${n.config.authDomain}/${a9}`,r={apiKey:e.apiKey,appName:n.name,v:zr},s=c9.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Di(r).slice(1)}`}async function h9(n){const e=await s9(n),t=on().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:u9(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l9,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=an(n,"network-request-failed"),o=on().setTimeout(()=>{i(a)},i9.get());function c(){on().clearTimeout(o),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const d9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p9=500,f9=600,m9="_blank",g9="http://localhost";class R1{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function y9(n,e,t,r=p9,s=f9){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c={...d9,width:r.toString(),height:s.toString(),top:i,left:a},u=nt().toLowerCase();t&&(o=rf(u)?m9:t),tf(u)&&(e=e||g9,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[b,R])=>`${y}${b}=${R},`,"");if(L4(u)&&o!=="_self")return _9(e||"",o),new R1(null);const p=window.open(e||"",o,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new R1(p)}function _9(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const v9="__/auth/handler",w9="emulator/auth/handler",E9=encodeURIComponent("fac");async function C1(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:zr,eventId:s};if(e instanceof ff){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",P6(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof $i){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const c=await n._getAppCheckToken(),u=c?`#${E9}=${encodeURIComponent(c)}`:"";return`${b9(n)}?${Di(o).slice(1)}${u}`}function b9({config:n}){return n.emulator?xc(n,w9):`https://${n.authDomain}/${v9}`}/**
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
 */const Rl="webStorageSupport";class T9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ef,this._completeRedirectFn=W3,this._overrideRedirectResult=j3}async _openPopup(e,t,r,s){var a;Rn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await C1(e,t,r,Kl(),s);return y9(e,i,Lc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await C1(e,t,r,Kl(),s);return S3(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await h9(e),r=new Y3(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Rl,{type:Rl},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Rl];i!==void 0&&t(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e9(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||nf()||Pc()}}const A9=T9;var x1="@firebase/auth",k1="1.13.3";/**
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
 */class I9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S9(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R9(n){Kt(new Ut("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uf(n)},u=new F4(r,s,i,c);return Y4(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new Ut("auth-internal",e=>{const t=_r(e.getProvider("auth").getImmediate());return(r=>new I9(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(x1,k1,S9(n)),_t(x1,k1,"esm2020")}/**
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
 */const C9=300,x9=gp("authIdTokenMaxAge")||C9;let P1=null;const k9=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>x9)return;const s=t==null?void 0:t.token;P1!==s&&(P1=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function P9(n=mo()){const e=yr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=K4(n,{popupRedirectResolver:A9,persistence:[D3,T3,Ef]}),r=gp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=k9(i.toString());_3(t,a,()=>a(t.currentUser)),y3(t,o=>a(o))}}const s=pp("auth");return s&&Q4(t,`http://${s}`),t}function N9(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}B4({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",N9().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R9("Browser");var O9="firebase",L9="12.16.0";/**
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
 */_t(O9,L9,"app");var N1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var er,xf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function A(){}A.prototype=w.prototype,S.F=w.prototype,S.prototype=new A,S.prototype.constructor=S,S.D=function(_,E,I){for(var T=Array(arguments.length-2),de=2;de<arguments.length;de++)T[de-2]=arguments[de];return w.prototype[E].apply(_,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(S,w,A){A||(A=0);const _=Array(16);if(typeof w=="string")for(var E=0;E<16;++E)_[E]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(E=0;E<16;++E)_[E]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=S.g[0],A=S.g[1],E=S.g[2];let I=S.g[3],T;T=w+(I^A&(E^I))+_[0]+3614090360&4294967295,w=A+(T<<7&4294967295|T>>>25),T=I+(E^w&(A^E))+_[1]+3905402710&4294967295,I=w+(T<<12&4294967295|T>>>20),T=E+(A^I&(w^A))+_[2]+606105819&4294967295,E=I+(T<<17&4294967295|T>>>15),T=A+(w^E&(I^w))+_[3]+3250441966&4294967295,A=E+(T<<22&4294967295|T>>>10),T=w+(I^A&(E^I))+_[4]+4118548399&4294967295,w=A+(T<<7&4294967295|T>>>25),T=I+(E^w&(A^E))+_[5]+1200080426&4294967295,I=w+(T<<12&4294967295|T>>>20),T=E+(A^I&(w^A))+_[6]+2821735955&4294967295,E=I+(T<<17&4294967295|T>>>15),T=A+(w^E&(I^w))+_[7]+4249261313&4294967295,A=E+(T<<22&4294967295|T>>>10),T=w+(I^A&(E^I))+_[8]+1770035416&4294967295,w=A+(T<<7&4294967295|T>>>25),T=I+(E^w&(A^E))+_[9]+2336552879&4294967295,I=w+(T<<12&4294967295|T>>>20),T=E+(A^I&(w^A))+_[10]+4294925233&4294967295,E=I+(T<<17&4294967295|T>>>15),T=A+(w^E&(I^w))+_[11]+2304563134&4294967295,A=E+(T<<22&4294967295|T>>>10),T=w+(I^A&(E^I))+_[12]+1804603682&4294967295,w=A+(T<<7&4294967295|T>>>25),T=I+(E^w&(A^E))+_[13]+4254626195&4294967295,I=w+(T<<12&4294967295|T>>>20),T=E+(A^I&(w^A))+_[14]+2792965006&4294967295,E=I+(T<<17&4294967295|T>>>15),T=A+(w^E&(I^w))+_[15]+1236535329&4294967295,A=E+(T<<22&4294967295|T>>>10),T=w+(E^I&(A^E))+_[1]+4129170786&4294967295,w=A+(T<<5&4294967295|T>>>27),T=I+(A^E&(w^A))+_[6]+3225465664&4294967295,I=w+(T<<9&4294967295|T>>>23),T=E+(w^A&(I^w))+_[11]+643717713&4294967295,E=I+(T<<14&4294967295|T>>>18),T=A+(I^w&(E^I))+_[0]+3921069994&4294967295,A=E+(T<<20&4294967295|T>>>12),T=w+(E^I&(A^E))+_[5]+3593408605&4294967295,w=A+(T<<5&4294967295|T>>>27),T=I+(A^E&(w^A))+_[10]+38016083&4294967295,I=w+(T<<9&4294967295|T>>>23),T=E+(w^A&(I^w))+_[15]+3634488961&4294967295,E=I+(T<<14&4294967295|T>>>18),T=A+(I^w&(E^I))+_[4]+3889429448&4294967295,A=E+(T<<20&4294967295|T>>>12),T=w+(E^I&(A^E))+_[9]+568446438&4294967295,w=A+(T<<5&4294967295|T>>>27),T=I+(A^E&(w^A))+_[14]+3275163606&4294967295,I=w+(T<<9&4294967295|T>>>23),T=E+(w^A&(I^w))+_[3]+4107603335&4294967295,E=I+(T<<14&4294967295|T>>>18),T=A+(I^w&(E^I))+_[8]+1163531501&4294967295,A=E+(T<<20&4294967295|T>>>12),T=w+(E^I&(A^E))+_[13]+2850285829&4294967295,w=A+(T<<5&4294967295|T>>>27),T=I+(A^E&(w^A))+_[2]+4243563512&4294967295,I=w+(T<<9&4294967295|T>>>23),T=E+(w^A&(I^w))+_[7]+1735328473&4294967295,E=I+(T<<14&4294967295|T>>>18),T=A+(I^w&(E^I))+_[12]+2368359562&4294967295,A=E+(T<<20&4294967295|T>>>12),T=w+(A^E^I)+_[5]+4294588738&4294967295,w=A+(T<<4&4294967295|T>>>28),T=I+(w^A^E)+_[8]+2272392833&4294967295,I=w+(T<<11&4294967295|T>>>21),T=E+(I^w^A)+_[11]+1839030562&4294967295,E=I+(T<<16&4294967295|T>>>16),T=A+(E^I^w)+_[14]+4259657740&4294967295,A=E+(T<<23&4294967295|T>>>9),T=w+(A^E^I)+_[1]+2763975236&4294967295,w=A+(T<<4&4294967295|T>>>28),T=I+(w^A^E)+_[4]+1272893353&4294967295,I=w+(T<<11&4294967295|T>>>21),T=E+(I^w^A)+_[7]+4139469664&4294967295,E=I+(T<<16&4294967295|T>>>16),T=A+(E^I^w)+_[10]+3200236656&4294967295,A=E+(T<<23&4294967295|T>>>9),T=w+(A^E^I)+_[13]+681279174&4294967295,w=A+(T<<4&4294967295|T>>>28),T=I+(w^A^E)+_[0]+3936430074&4294967295,I=w+(T<<11&4294967295|T>>>21),T=E+(I^w^A)+_[3]+3572445317&4294967295,E=I+(T<<16&4294967295|T>>>16),T=A+(E^I^w)+_[6]+76029189&4294967295,A=E+(T<<23&4294967295|T>>>9),T=w+(A^E^I)+_[9]+3654602809&4294967295,w=A+(T<<4&4294967295|T>>>28),T=I+(w^A^E)+_[12]+3873151461&4294967295,I=w+(T<<11&4294967295|T>>>21),T=E+(I^w^A)+_[15]+530742520&4294967295,E=I+(T<<16&4294967295|T>>>16),T=A+(E^I^w)+_[2]+3299628645&4294967295,A=E+(T<<23&4294967295|T>>>9),T=w+(E^(A|~I))+_[0]+4096336452&4294967295,w=A+(T<<6&4294967295|T>>>26),T=I+(A^(w|~E))+_[7]+1126891415&4294967295,I=w+(T<<10&4294967295|T>>>22),T=E+(w^(I|~A))+_[14]+2878612391&4294967295,E=I+(T<<15&4294967295|T>>>17),T=A+(I^(E|~w))+_[5]+4237533241&4294967295,A=E+(T<<21&4294967295|T>>>11),T=w+(E^(A|~I))+_[12]+1700485571&4294967295,w=A+(T<<6&4294967295|T>>>26),T=I+(A^(w|~E))+_[3]+2399980690&4294967295,I=w+(T<<10&4294967295|T>>>22),T=E+(w^(I|~A))+_[10]+4293915773&4294967295,E=I+(T<<15&4294967295|T>>>17),T=A+(I^(E|~w))+_[1]+2240044497&4294967295,A=E+(T<<21&4294967295|T>>>11),T=w+(E^(A|~I))+_[8]+1873313359&4294967295,w=A+(T<<6&4294967295|T>>>26),T=I+(A^(w|~E))+_[15]+4264355552&4294967295,I=w+(T<<10&4294967295|T>>>22),T=E+(w^(I|~A))+_[6]+2734768916&4294967295,E=I+(T<<15&4294967295|T>>>17),T=A+(I^(E|~w))+_[13]+1309151649&4294967295,A=E+(T<<21&4294967295|T>>>11),T=w+(E^(A|~I))+_[4]+4149444226&4294967295,w=A+(T<<6&4294967295|T>>>26),T=I+(A^(w|~E))+_[11]+3174756917&4294967295,I=w+(T<<10&4294967295|T>>>22),T=E+(w^(I|~A))+_[2]+718787259&4294967295,E=I+(T<<15&4294967295|T>>>17),T=A+(I^(E|~w))+_[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(E+(T<<21&4294967295|T>>>11))&4294967295,S.g[2]=S.g[2]+E&4294967295,S.g[3]=S.g[3]+I&4294967295}r.prototype.v=function(S,w){w===void 0&&(w=S.length);const A=w-this.blockSize,_=this.C;let E=this.h,I=0;for(;I<w;){if(E==0)for(;I<=A;)s(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<w;)if(_[E++]=S.charCodeAt(I++),E==this.blockSize){s(this,_),E=0;break}}else for(;I<w;)if(_[E++]=S[I++],E==this.blockSize){s(this,_),E=0;break}}this.h=E,this.o+=w},r.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var A=S.length-8;A<S.length;++A)S[A]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,A=0;A<4;++A)for(let _=0;_<32;_+=8)S[w++]=this.g[A]>>>_&255;return S};function i(S,w){var A=o;return Object.prototype.hasOwnProperty.call(A,S)?A[S]:A[S]=w(S)}function a(S,w){this.h=w;const A=[];let _=!0;for(let E=S.length-1;E>=0;E--){const I=S[E]|0;_&&I==w||(A[E]=I,_=!1)}this.g=A}var o={};function c(S){return-128<=S&&S<128?i(S,function(w){return new a([w|0],w<0?-1:0)}):new a([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return k(u(-S));const w=[];let A=1;for(let _=0;S>=A;_++)w[_]=S/A|0,A*=4294967296;return new a(w,0)}function d(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return k(d(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const A=u(Math.pow(w,8));let _=p;for(let I=0;I<S.length;I+=8){var E=Math.min(8,S.length-I);const T=parseInt(S.substring(I,I+E),w);E<8?(E=u(Math.pow(w,E)),_=_.j(E).add(u(T))):(_=_.j(A),_=_.add(u(T)))}return _}var p=c(0),y=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(O(this))return-k(this).m();let S=0,w=1;for(let A=0;A<this.g.length;A++){const _=this.i(A);S+=(_>=0?_:4294967296+_)*w,w*=4294967296}return S},n.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(R(this))return"0";if(O(this))return"-"+k(this).toString(S);const w=u(Math.pow(S,6));var A=this;let _="";for(;;){const E=q(A,w).g;A=F(A,E.j(w));let I=((A.g.length>0?A.g[0]:A.h)>>>0).toString(S);if(A=E,R(A))return I+_;for(;I.length<6;)I="0"+I;_=I+_}},n.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function R(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function O(S){return S.h==-1}n.l=function(S){return S=F(this,S),O(S)?-1:R(S)?0:1};function k(S){const w=S.g.length,A=[];for(let _=0;_<w;_++)A[_]=~S.g[_];return new a(A,~S.h).add(y)}n.abs=function(){return O(this)?k(this):this},n.add=function(S){const w=Math.max(this.g.length,S.g.length),A=[];let _=0;for(let E=0;E<=w;E++){let I=_+(this.i(E)&65535)+(S.i(E)&65535),T=(I>>>16)+(this.i(E)>>>16)+(S.i(E)>>>16);_=T>>>16,I&=65535,T&=65535,A[E]=T<<16|I}return new a(A,A[A.length-1]&-2147483648?-1:0)};function F(S,w){return S.add(k(w))}n.j=function(S){if(R(this)||R(S))return p;if(O(this))return O(S)?k(this).j(k(S)):k(k(this).j(S));if(O(S))return k(this.j(k(S)));if(this.l(b)<0&&S.l(b)<0)return u(this.m()*S.m());const w=this.g.length+S.g.length,A=[];for(var _=0;_<2*w;_++)A[_]=0;for(_=0;_<this.g.length;_++)for(let E=0;E<S.g.length;E++){const I=this.i(_)>>>16,T=this.i(_)&65535,de=S.i(E)>>>16,ue=S.i(E)&65535;A[2*_+2*E]+=T*ue,$(A,2*_+2*E),A[2*_+2*E+1]+=I*ue,$(A,2*_+2*E+1),A[2*_+2*E+1]+=T*de,$(A,2*_+2*E+1),A[2*_+2*E+2]+=I*de,$(A,2*_+2*E+2)}for(S=0;S<w;S++)A[S]=A[2*S+1]<<16|A[2*S];for(S=w;S<2*w;S++)A[S]=0;return new a(A,0)};function $(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function U(S,w){this.g=S,this.h=w}function q(S,w){if(R(w))throw Error("division by zero");if(R(S))return new U(p,p);if(O(S))return w=q(k(S),w),new U(k(w.g),k(w.h));if(O(w))return w=q(S,k(w)),new U(k(w.g),w.h);if(S.g.length>30){if(O(S)||O(w))throw Error("slowDivide_ only works with positive integers.");for(var A=y,_=w;_.l(S)<=0;)A=W(A),_=W(_);var E=Z(A,1),I=Z(_,1);for(_=Z(_,2),A=Z(A,2);!R(_);){var T=I.add(_);T.l(S)<=0&&(E=E.add(A),I=T),_=Z(_,1),A=Z(A,1)}return w=F(S,E.j(w)),new U(E,w)}for(E=p;S.l(w)>=0;){for(A=Math.max(1,Math.floor(S.m()/w.m())),_=Math.ceil(Math.log(A)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),I=u(A),T=I.j(w);O(T)||T.l(S)>0;)A-=_,I=u(A),T=I.j(w);R(I)&&(I=y),E=E.add(I),S=F(S,T)}return new U(E,S)}n.B=function(S){return q(this,S).h},n.and=function(S){const w=Math.max(this.g.length,S.g.length),A=[];for(let _=0;_<w;_++)A[_]=this.i(_)&S.i(_);return new a(A,this.h&S.h)},n.or=function(S){const w=Math.max(this.g.length,S.g.length),A=[];for(let _=0;_<w;_++)A[_]=this.i(_)|S.i(_);return new a(A,this.h|S.h)},n.xor=function(S){const w=Math.max(this.g.length,S.g.length),A=[];for(let _=0;_<w;_++)A[_]=this.i(_)^S.i(_);return new a(A,this.h^S.h)};function W(S){const w=S.g.length+1,A=[];for(let _=0;_<w;_++)A[_]=S.i(_)<<1|S.i(_-1)>>>31;return new a(A,S.h)}function Z(S,w){const A=w>>5;w%=32;const _=S.g.length-A,E=[];for(let I=0;I<_;I++)E[I]=w>0?S.i(I+A)>>>w|S.i(I+A+1)<<32-w:S.i(I+A);return new a(E,S.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,xf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,er=a}).apply(typeof N1<"u"?N1:typeof self<"u"?self:typeof window<"u"?window:{});var ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kf,ei,Pf,Sa,Ql,Nf,Of,Lf;(function(){var n,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ha=="object"&&ha];for(var h=0;h<l.length;++h){var f=l[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(l,h){if(h)e:{var f=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var x=l[g];if(!(x in f))break e;f=f[x]}l=l[l.length-1],g=f[l],h=h(g),h!=g&&h!=null&&e(f,l,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(l){return l||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function o(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function c(l,h,f){return l.call.apply(l.bind,arguments)}function u(l,h,f){return u=c,u.apply(null,arguments)}function d(l,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function p(l,h){function f(){}f.prototype=h.prototype,l.Z=h.prototype,l.prototype=new f,l.prototype.constructor=l,l.Ob=function(g,x,N){for(var H=Array(arguments.length-2),le=2;le<arguments.length;le++)H[le-2]=arguments[le];return h.prototype[x].apply(g,H)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function b(l){const h=l.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=l[g];return f}return[]}function R(l,h){for(let g=1;g<arguments.length;g++){const x=arguments[g];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=l.length||0;const N=x.length||0;l.length=f+N;for(let H=0;H<N;H++)l[f+H]=x[H]}else l.push(x)}}class O{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(l){a.setTimeout(()=>{throw l},0)}function F(){var l=S;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,f){const g=U.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var U=new O(()=>new q,l=>l.reset());class q{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,Z=!1,S=new $,w=()=>{const l=Promise.resolve(void 0);W=()=>{l.then(A)}};function A(){for(var l;l=F();){try{l.h.call(l.g)}catch(f){k(f)}var h=U;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}Z=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return l})();function T(l){return/^[\s\xa0]*$/.test(l)}function de(l,h){E.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}p(de,E),de.prototype.init=function(l,h){const f=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(f=="mouseover"?h=l.fromElement:f=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&de.Z.h.call(this)},de.prototype.h=function(){de.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),Pe=0;function Tt(l,h,f,g,x){this.listener=l,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++Pe,this.da=this.fa=!1}function qt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function vr(l,h,f){for(const g in l)h.call(f,l[g],g,l)}function Go(l,h){for(const f in l)h.call(void 0,l[f],f,l)}function Yi(l){const h={};for(const f in l)h[f]=l[f];return h}const Uu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fu(l,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)l[f]=g[f];for(let N=0;N<Uu.length;N++)f=Uu[N],Object.prototype.hasOwnProperty.call(g,f)&&(l[f]=g[f])}}function Qi(l){this.src=l,this.g={},this.h=0}Qi.prototype.add=function(l,h,f,g,x){const N=l.toString();l=this.g[N],l||(l=this.g[N]=[],this.h++);const H=Wo(l,h,g,x);return H>-1?(h=l[H],f||(h.fa=!1)):(h=new Tt(h,this.src,N,!!g,x),h.fa=f,l.push(h)),h};function zo(l,h){const f=h.type;if(f in l.g){var g=l.g[f],x=Array.prototype.indexOf.call(g,h,void 0),N;(N=x>=0)&&Array.prototype.splice.call(g,x,1),N&&(qt(h),l.g[f].length==0&&(delete l.g[f],l.h--))}}function Wo(l,h,f,g){for(let x=0;x<l.length;++x){const N=l[x];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return x}return-1}var Ko="closure_lm_"+(Math.random()*1e6|0),Yo={};function Bu(l,h,f,g,x){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Bu(l,h[N],f,g,x);return null}return f=ju(f),l&&l[ue]?l.J(h,f,o(g)?!!g.capture:!1,x):z2(l,h,f,!1,g,x)}function z2(l,h,f,g,x,N){if(!h)throw Error("Invalid event type");const H=o(x)?!!x.capture:!!x;let le=Xo(l);if(le||(l[Ko]=le=new Qi(l)),f=le.add(h,f,g,H,N),f.proxy)return f;if(g=W2(),f.proxy=g,g.src=l,g.listener=f,l.addEventListener)I||(x=H),x===void 0&&(x=!1),l.addEventListener(h.toString(),g,x);else if(l.attachEvent)l.attachEvent(Hu(h.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W2(){function l(f){return h.call(l.src,l.listener,f)}const h=K2;return l}function qu(l,h,f,g,x){if(Array.isArray(h))for(var N=0;N<h.length;N++)qu(l,h[N],f,g,x);else g=o(g)?!!g.capture:!!g,f=ju(f),l&&l[ue]?(l=l.i,N=String(h).toString(),N in l.g&&(h=l.g[N],f=Wo(h,f,g,x),f>-1&&(qt(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete l.g[N],l.h--)))):l&&(l=Xo(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Wo(h,f,g,x)),(f=l>-1?h[l]:null)&&Qo(f))}function Qo(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[ue])zo(h.i,l);else{var f=l.type,g=l.proxy;h.removeEventListener?h.removeEventListener(f,g,l.capture):h.detachEvent?h.detachEvent(Hu(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Xo(h))?(zo(f,l),f.h==0&&(f.src=null,h[Ko]=null)):qt(l)}}}function Hu(l){return l in Yo?Yo[l]:Yo[l]="on"+l}function K2(l,h){if(l.da)l=!0;else{h=new de(h,this);const f=l.listener,g=l.ha||l.src;l.fa&&Qo(l),l=f.call(g,h)}return l}function Xo(l){return l=l[Ko],l instanceof Qi?l:null}var Jo="__closure_events_fn_"+(Math.random()*1e9>>>0);function ju(l){return typeof l=="function"?l:(l[Jo]||(l[Jo]=function(h){return l.handleEvent(h)}),l[Jo])}function Ye(){_.call(this),this.i=new Qi(this),this.M=this,this.G=null}p(Ye,_),Ye.prototype[ue]=!0,Ye.prototype.removeEventListener=function(l,h,f,g){qu(this,l,h,f,g)};function st(l,h){var f,g=l.G;if(g)for(f=[];g;g=g.G)f.push(g);if(l=l.M,g=h.type||h,typeof h=="string")h=new E(h,l);else if(h instanceof E)h.target=h.target||l;else{var x=h;h=new E(g,l),Fu(h,x)}x=!0;let N,H;if(f)for(H=f.length-1;H>=0;H--)N=h.g=f[H],x=Xi(N,g,!0,h)&&x;if(N=h.g=l,x=Xi(N,g,!0,h)&&x,x=Xi(N,g,!1,h)&&x,f)for(H=0;H<f.length;H++)N=h.g=f[H],x=Xi(N,g,!1,h)&&x}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const f=l.g[h];for(let g=0;g<f.length;g++)qt(f[g]);delete l.g[h],l.h--}}this.G=null},Ye.prototype.J=function(l,h,f,g){return this.i.add(String(l),h,!1,f,g)},Ye.prototype.K=function(l,h,f,g){return this.i.add(String(l),h,!0,f,g)};function Xi(l,h,f,g){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let N=0;N<h.length;++N){const H=h[N];if(H&&!H.da&&H.capture==f){const le=H.listener,Be=H.ha||H.src;H.fa&&zo(l.i,H),x=le.call(Be,g)!==!1&&x}}return x&&!g.defaultPrevented}function Y2(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=u(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(l,h||0)}function Gu(l){l.g=Y2(()=>{l.g=null,l.i&&(l.i=!1,Gu(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Q2 extends _{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Gu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(l){_.call(this),this.h=l,this.g={}}p(Ns,_);var zu=[];function Wu(l){vr(l.g,function(h,f){this.g.hasOwnProperty(f)&&Qo(h)},l),l.g={}}Ns.prototype.N=function(){Ns.Z.N.call(this),Wu(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zo=a.JSON.stringify,X2=a.JSON.parse,J2=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ku(){}function Yu(){}var Os={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function el(){E.call(this,"d")}p(el,E);function tl(){E.call(this,"c")}p(tl,E);var wr={},Qu=null;function Ji(){return Qu=Qu||new Ye}wr.Ia="serverreachability";function Xu(l){E.call(this,wr.Ia,l)}p(Xu,E);function Ls(l){const h=Ji();st(h,new Xu(h))}wr.STAT_EVENT="statevent";function Ju(l,h){E.call(this,wr.STAT_EVENT,l),this.stat=h}p(Ju,E);function it(l){const h=Ji();st(h,new Ju(h,l))}wr.Ja="timingevent";function Zu(l,h){E.call(this,wr.Ja,l),this.size=h}p(Zu,E);function Ds(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function Z2(l,h,f,g,x,N){l.info(function(){if(l.g)if(N){var H="",le=N.split("&");for(let ve=0;ve<le.length;ve++){var Be=le[ve].split("=");if(Be.length>1){const je=Be[0];Be=Be[1];const Zt=je.split("_");H=Zt.length>=2&&Zt[1]=="type"?H+(je+"="+Be+"&"):H+(je+"=redacted&")}}}else H=null;else H=N;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+H})}function eg(l,h,f,g,x,N,H){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+N+" "+H})}function Jr(l,h,f,g){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+ng(l,f)+(g?" "+g:"")})}function tg(l,h){l.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function ng(l,h){if(!l.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(l=0;l<N.length;l++)if(Array.isArray(N[l])){var f=N[l];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let H=1;H<g.length;H++)g[H]=""}}}}return Zo(N)}catch{return h}}var Zi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},th;function nl(){}p(nl,Ku),nl.prototype.g=function(){return new XMLHttpRequest},th=new nl;function Ms(l){return encodeURIComponent(String(l))}function rg(l){var h=1;l=l.split(":");const f=[];for(;h>0&&l.length;)f.push(l.shift()),h--;return l.length&&f.push(l.join(":")),f}function On(l,h,f,g){this.j=l,this.i=h,this.l=f,this.S=g||1,this.V=new Ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var rh={},rl={};function sl(l,h,f){l.M=1,l.A=ta(Jt(h)),l.u=f,l.R=!0,sh(l,null)}function sh(l,h){l.F=Date.now(),ea(l),l.B=Jt(l.A);var f=l.B,g=l.S;Array.isArray(g)||(g=[String(g)]),yh(f.i,"t",g),l.C=0,f=l.j.L,l.h=new nh,l.g=Dh(l.j,f?h:null,!l.u),l.P>0&&(l.O=new Q2(u(l.Y,l,l.g),l.P)),h=l.V,f=l.g,g=l.ba;var x="readystatechange";Array.isArray(x)||(x&&(zu[0]=x.toString()),x=zu);for(let N=0;N<x.length;N++){const H=Bu(f,x[N],g||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=l.J?Yi(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),Ls(),Z2(l.i,l.v,l.B,l.l,l.S,l.u)}On.prototype.ba=function(l){l=l.target;const h=this.O;h&&Vn(l)==3?h.j():this.Y(l)},On.prototype.Y=function(l){try{if(l==this.g)e:{const le=Vn(this.g),Be=this.g.ya(),ve=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||Ah(this.g)))){this.K||le!=4||Be==7||(Be==8||ve<=0?Ls(3):Ls(2)),il(this);var h=this.g.ca();this.X=h;var f=sg(this);if(this.o=h==200,eg(this.i,this.v,this.B,this.l,this.S,le,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(g)){var N=g;break t}}N=null}if(l=N)Jr(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,al(this,l);else{this.o=!1,this.m=3,it(12),Er(this),$s(this);break e}}if(this.R){l=!0;let je;for(;!this.K&&this.C<f.length;)if(je=ig(this,f),je==rl){le==4&&(this.m=4,it(14),l=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(je==rh){this.m=4,it(15),Jr(this.i,this.l,f,"[Invalid Chunk]"),l=!1;break}else Jr(this.i,this.l,je,null),al(this,je);if(ih(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||f.length!=0||this.h.h||(this.m=1,it(16),l=!1),this.o=this.o&&l,!l)Jr(this.i,this.l,f,"[Invalid Chunked Response]"),Er(this),$s(this);else if(f.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),fl(H),H.P=!0,it(11))}}else Jr(this.i,this.l,f,null),al(this,f);le==4&&Er(this),this.o&&!this.K&&(le==4?Ph(this.j,this):(this.o=!1,ea(this)))}else vg(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Er(this),$s(this)}}}catch{}finally{}};function sg(l){if(!ih(l))return l.g.la();const h=Ah(l.g);if(h==="")return"";let f="";const g=h.length,x=Vn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Er(l),$s(l),"";l.h.i=new a.TextDecoder}for(let N=0;N<g;N++)l.h.h=!0,f+=l.h.i.decode(h[N],{stream:!(x&&N==g-1)});return h.length=0,l.h.g+=f,l.C=0,l.h.g}function ih(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function ig(l,h){var f=l.C,g=h.indexOf(`
`,f);return g==-1?rl:(f=Number(h.substring(f,g)),isNaN(f)?rh:(g+=1,g+f>h.length?rl:(h=h.slice(g,g+f),l.C=g+f,h)))}On.prototype.cancel=function(){this.K=!0,Er(this)};function ea(l){l.T=Date.now()+l.H,ah(l,l.H)}function ah(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ds(u(l.aa,l),h)}function il(l){l.D&&(a.clearTimeout(l.D),l.D=null)}On.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(tg(this.i,this.B),this.M!=2&&(Ls(),it(17)),Er(this),this.m=2,$s(this)):ah(this,this.T-l)};function $s(l){l.j.I==0||l.K||Ph(l.j,l)}function Er(l){il(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,Wu(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function al(l,h){try{var f=l.j;if(f.I!=0&&(f.g==l||ol(f.h,l))){if(!l.L&&ol(f.h,l)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<l.F)aa(f),sa(f);else break e;pl(f),it(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Ds(u(f.Va,f),6e3));ch(f.h)<=1&&f.ta&&(f.ta=void 0)}else Tr(f,11)}else if((l.L||f.g==l)&&aa(f),!T(h))for(x=f.Ba.g.parse(h),h=0;h<x.length;h++){let ve=x[h];const je=ve[0];if(!(je<=f.K))if(f.K=je,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const Zt=ve[3];Zt!=null&&(f.ka=Zt,f.j.info("VER="+f.ka));const Ar=ve[4];Ar!=null&&(f.za=Ar,f.j.info("SVER="+f.za));const Mn=ve[5];Mn!=null&&typeof Mn=="number"&&Mn>0&&(g=1.5*Mn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const $n=l.g;if($n){const la=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(la){var N=g.h;N.g||la.indexOf("spdy")==-1&&la.indexOf("quic")==-1&&la.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ll(N,N.h),N.h=null))}if(g.G){const ml=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;ml&&(g.wa=ml,we(g.J,g.G,ml))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-l.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var H=l;if(g.na=Lh(g,g.L?g.ba:null,g.W),H.L){uh(g.h,H);var le=H,Be=g.O;Be&&(le.H=Be),le.D&&(il(le),ea(le)),g.g=H}else xh(g);f.i.length>0&&ia(f)}else ve[0]!="stop"&&ve[0]!="close"||Tr(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Tr(f,7):dl(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}Ls(4)}catch{}}var ag=class{constructor(l,h){this.g=l,this.map=h}};function oh(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lh(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function ch(l){return l.h?1:l.g?l.g.size:0}function ol(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function ll(l,h){l.g?l.g.add(h):l.h=h}function uh(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}oh.prototype.cancel=function(){if(this.i=hh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function hh(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const f of l.g.values())h=h.concat(f.G);return h}return b(l.i)}var dh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function og(l,h){if(l){l=l.split("&");for(let f=0;f<l.length;f++){const g=l[f].indexOf("=");let x,N=null;g>=0?(x=l[f].substring(0,g),N=l[f].substring(g+1)):x=l[f],h(x,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ln(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof Ln?(this.l=l.l,Us(this,l.j),this.o=l.o,this.g=l.g,Fs(this,l.u),this.h=l.h,cl(this,_h(l.i)),this.m=l.m):l&&(h=String(l).match(dh))?(this.l=!1,Us(this,h[1]||"",!0),this.o=Bs(h[2]||""),this.g=Bs(h[3]||"",!0),Fs(this,h[4]),this.h=Bs(h[5]||"",!0),cl(this,h[6]||"",!0),this.m=Bs(h[7]||"")):(this.l=!1,this.i=new Hs(null,this.l))}Ln.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(qs(h,ph,!0),":");var f=this.g;return(f||h=="file")&&(l.push("//"),(h=this.o)&&l.push(qs(h,ph,!0),"@"),l.push(Ms(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&l.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&l.push("/"),l.push(qs(f,f.charAt(0)=="/"?ug:cg,!0))),(f=this.i.toString())&&l.push("?",f),(f=this.m)&&l.push("#",qs(f,dg)),l.join("")},Ln.prototype.resolve=function(l){const h=Jt(this);let f=!!l.j;f?Us(h,l.j):f=!!l.o,f?h.o=l.o:f=!!l.g,f?h.g=l.g:f=l.u!=null;var g=l.h;if(f)Fs(h,l.u);else if(f=!!l.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=h.h.lastIndexOf("/");x!=-1&&(g=h.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const N=[];for(let H=0;H<x.length;){const le=x[H++];le=="."?g&&H==x.length&&N.push(""):le==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&H==x.length&&N.push("")):(N.push(le),g=!0)}g=N.join("/")}else g=x}return f?h.h=g:f=l.i.toString()!=="",f?cl(h,_h(l.i)):f=!!l.m,f&&(h.m=l.m),h};function Jt(l){return new Ln(l)}function Us(l,h,f){l.j=f?Bs(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Fs(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function cl(l,h,f){h instanceof Hs?(l.i=h,pg(l.i,l.l)):(f||(h=qs(h,hg)),l.i=new Hs(h,l.l))}function we(l,h,f){l.i.set(h,f)}function ta(l){return we(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Bs(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function qs(l,h,f){return typeof l=="string"?(l=encodeURI(l).replace(h,lg),f&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function lg(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ph=/[#\/\?@]/g,cg=/[#\?:]/g,ug=/[#\?]/g,hg=/[#\?@]/g,dg=/#/g;function Hs(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function br(l){l.g||(l.g=new Map,l.h=0,l.i&&og(l.i,function(h,f){l.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Hs.prototype,n.add=function(l,h){br(this),this.i=null,l=Zr(this,l);let f=this.g.get(l);return f||this.g.set(l,f=[]),f.push(h),this.h+=1,this};function fh(l,h){br(l),h=Zr(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function mh(l,h){return br(l),h=Zr(l,h),l.g.has(h)}n.forEach=function(l,h){br(this),this.g.forEach(function(f,g){f.forEach(function(x){l.call(h,x,g,this)},this)},this)};function gh(l,h){br(l);let f=[];if(typeof h=="string")mh(l,h)&&(f=f.concat(l.g.get(Zr(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)f=f.concat(l[h]);return f}n.set=function(l,h){return br(this),this.i=null,l=Zr(this,l),mh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},n.get=function(l,h){return l?(l=gh(this,l),l.length>0?String(l[0]):h):h};function yh(l,h,f){fh(l,h),f.length>0&&(l.i=null,l.g.set(Zr(l,h),b(f)),l.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const x=Ms(f);f=gh(this,f);for(let N=0;N<f.length;N++){let H=x;f[N]!==""&&(H+="="+Ms(f[N])),l.push(H)}}return this.i=l.join("&")};function _h(l){const h=new Hs;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function Zr(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function pg(l,h){h&&!l.j&&(br(l),l.i=null,l.g.forEach(function(f,g){const x=g.toLowerCase();g!=x&&(fh(this,g),yh(this,x,f))},l)),l.j=h}function fg(l,h){const f=new Vs;if(a.Image){const g=new Image;g.onload=d(Dn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Dn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Dn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Dn,f,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else h(!1)}function mg(l,h){const f=new Vs,g=new AbortController,x=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:g.signal}).then(N=>{clearTimeout(x),N.ok?Dn(f,"TestPingServer: ok",!0,h):Dn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Dn(f,"TestPingServer: error",!1,h)})}function Dn(l,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function gg(){this.g=new J2}function ul(l){this.i=l.Sb||null,this.h=l.ab||!1}p(ul,Ku),ul.prototype.g=function(){return new na(this.i,this.h)};function na(l,h){Ye.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(na,Ye),n=na.prototype,n.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,Gs(this)},n.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=0},n.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;vh(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function vh(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}n.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?js(this):Gs(this),this.readyState==3&&vh(this)}},n.Oa=function(l){this.g&&(this.response=this.responseText=l,js(this))},n.Na=function(l){this.g&&(this.response=l,js(this))},n.ga=function(){this.g&&js(this)};function js(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Gs(l)}n.setRequestHeader=function(l,h){this.A.append(l,h)},n.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,l.push(f[0]+": "+f[1]),f=h.next();return l.join(`\r
`)};function Gs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function wh(l){let h="";return vr(l,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function hl(l,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=wh(f),typeof l=="string"?f!=null&&Ms(f):we(l,h,f))}function Re(l){Ye.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,Ye);var yg=/^https?$/i,_g=["POST","PUT"];n=Re.prototype,n.Fa=function(l){this.H=l},n.ea=function(l,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():th.g(),this.g.onreadystatechange=y(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(N){Eh(this,N);return}if(l=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(Array.prototype.indexOf.call(_g,h,void 0)>=0)||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,H]of f)this.g.setRequestHeader(N,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(N){Eh(this,N)}};function Eh(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,bh(l),ra(l)}function bh(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}n.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),ra(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ra(this,!0)),Re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Th(this):this.Xa())},n.Xa=function(){Th(this)};function Th(l){if(l.h&&typeof i<"u"){if(l.v&&Vn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),Vn(l)==4){l.h=!1;try{const N=l.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=N===0){let H=String(l.D).match(dh)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),g=!yg.test(H?H.toLowerCase():"")}f=g}if(f)st(l,"complete"),st(l,"success");else{l.o=6;try{var x=Vn(l)>2?l.g.statusText:""}catch{x=""}l.l=x+" ["+l.ca()+"]",bh(l)}}finally{ra(l)}}}}function ra(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const f=l.g;l.g=null,h||st(l,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Vn(l){return l.g?l.g.readyState:0}n.ca=function(){try{return Vn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),X2(h)}};function Ah(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function vg(l){const h={};l=(l.g&&Vn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(T(l[g]))continue;var f=rg(l[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[x]||[];h[x]=N,N.push(f)}Go(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zs(l,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[l]||h}function Ih(l){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zs("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zs("baseRetryDelayMs",5e3,l),this.Za=zs("retryDelaySeedMs",1e4,l),this.Ta=zs("forwardChannelMaxRetries",2,l),this.va=zs("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new oh(l&&l.concurrentRequestLimit),this.Ba=new gg,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ih.prototype,n.ka=8,n.I=1,n.connect=function(l,h,f,g){it(0),this.W=l,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Lh(this,null,this.W),ia(this)};function dl(l){if(Sh(l),l.I==3){var h=l.V++,f=Jt(l.J);if(we(f,"SID",l.M),we(f,"RID",h),we(f,"TYPE","terminate"),Ws(l,f),h=new On(l,l.j,h),h.M=2,h.A=ta(Jt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=Dh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ea(h)}Oh(l)}function sa(l){l.g&&(fl(l),l.g.cancel(),l.g=null)}function Sh(l){sa(l),l.v&&(a.clearTimeout(l.v),l.v=null),aa(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&a.clearTimeout(l.m),l.m=null)}function ia(l){if(!lh(l.h)&&!l.m){l.m=!0;var h=l.Ea;W||w(),Z||(W(),Z=!0),S.add(h,l),l.D=0}}function wg(l,h){return ch(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ds(u(l.Ea,l,h),Nh(l,l.D)),l.D++,!0)}n.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const x=new On(this,this.j,l);let N=this.o;if(this.U&&(N?(N=Yi(N),Fu(N,this.U)):N=this.U),this.u!==null||this.R||(x.J=N,N=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ch(this,x,h),f=Jt(this.J),we(f,"RID",l),we(f,"CVER",22),this.G&&we(f,"X-HTTP-Session-Id",this.G),Ws(this,f),N&&(this.R?h="headers="+Ms(wh(N))+"&"+h:this.u&&hl(f,this.u,N)),ll(this.h,x),this.Ra&&we(f,"TYPE","init"),this.S?(we(f,"$req",h),we(f,"SID","null"),x.U=!0,sl(x,f,null)):sl(x,f,h),this.I=2}}else this.I==3&&(l?Rh(this,l):this.i.length==0||lh(this.h)||Rh(this))};function Rh(l,h){var f;h?f=h.l:f=l.V++;const g=Jt(l.J);we(g,"SID",l.M),we(g,"RID",f),we(g,"AID",l.K),Ws(l,g),l.u&&l.o&&hl(g,l.u,l.o),f=new On(l,l.j,f,l.D+1),l.u===null&&(f.J=l.o),h&&(l.i=h.G.concat(l.i)),h=Ch(l,f,1e3),f.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ll(l.h,f),sl(f,g,h)}function Ws(l,h){l.H&&vr(l.H,function(f,g){we(h,g,f)}),l.l&&vr({},function(f,g){we(h,g,f)})}function Ch(l,h,f){f=Math.min(l.i.length,f);const g=l.l?u(l.l.Ka,l.l,l):null;e:{var x=l.i;let le=-1;for(;;){const Be=["count="+f];le==-1?f>0?(le=x[0].g,Be.push("ofs="+le)):le=0:Be.push("ofs="+le);let ve=!0;for(let je=0;je<f;je++){var N=x[je].g;const Zt=x[je].map;if(N-=le,N<0)le=Math.max(0,x[je].g-100),ve=!1;else try{N="req"+N+"_"||"";try{var H=Zt instanceof Map?Zt:Object.entries(Zt);for(const[Ar,Mn]of H){let $n=Mn;o(Mn)&&($n=Zo(Mn)),Be.push(N+Ar+"="+encodeURIComponent($n))}}catch(Ar){throw Be.push(N+"type="+encodeURIComponent("_badmap")),Ar}}catch{g&&g(Zt)}}if(ve){H=Be.join("&");break e}}H=void 0}return l=l.i.splice(0,f),h.G=l,H}function xh(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;W||w(),Z||(W(),Z=!0),S.add(h,l),l.A=0}}function pl(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ds(u(l.Da,l),Nh(l,l.A)),l.A++,!0)}n.Da=function(){if(this.v=null,kh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ds(u(this.Wa,this),l)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),sa(this),kh(this))};function fl(l){l.B!=null&&(a.clearTimeout(l.B),l.B=null)}function kh(l){l.g=new On(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=Jt(l.na);we(h,"RID","rpc"),we(h,"SID",l.M),we(h,"AID",l.K),we(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&we(h,"TO",l.ia),we(h,"TYPE","xmlhttp"),Ws(l,h),l.u&&l.o&&hl(h,l.u,l.o),l.O&&(l.g.H=l.O);var f=l.g;l=l.ba,f.M=1,f.A=ta(Jt(h)),f.u=null,f.R=!0,sh(f,l)}n.Va=function(){this.C!=null&&(this.C=null,sa(this),pl(this),it(19))};function aa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ph(l,h){var f=null;if(l.g==h){aa(l),fl(l),l.g=null;var g=2}else if(ol(l.h,h))f=h.G,uh(l.h,h),g=1;else return;if(l.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var x=l.D;g=Ji(),st(g,new Zu(g,f)),ia(l)}else xh(l);else if(x=h.m,x==3||x==0&&h.X>0||!(g==1&&wg(l,h)||g==2&&pl(l)))switch(f&&f.length>0&&(h=l.h,h.i=h.i.concat(f)),x){case 1:Tr(l,5);break;case 4:Tr(l,10);break;case 3:Tr(l,6);break;default:Tr(l,2)}}}function Nh(l,h){let f=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(f*=2),f*h}function Tr(l,h){if(l.j.info("Error code "+h),h==2){var f=u(l.bb,l),g=l.Ua;const x=!g;g=new Ln(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Us(g,"https"),ta(g),x?fg(g.toString(),f):mg(g.toString(),f)}else it(2);l.I=0,l.l&&l.l.pa(h),Oh(l),Sh(l)}n.bb=function(l){l?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Oh(l){if(l.I=0,l.ja=[],l.l){const h=hh(l.h);(h.length!=0||l.i.length!=0)&&(R(l.ja,h),R(l.ja,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.oa()}}function Lh(l,h,f){var g=f instanceof Ln?Jt(f):new Ln(f);if(g.g!="")h&&(g.g=h+"."+g.g),Fs(g,g.u);else{var x=a.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const N=new Ln(null);g&&Us(N,g),h&&(N.g=h),x&&Fs(N,x),f&&(N.h=f),g=N}return f=l.G,h=l.wa,f&&h&&we(g,f,h),we(g,"VER",l.ka),Ws(l,g),g}function Dh(l,h,f){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Re(new ul({ab:f})):new Re(l.ma),h.Fa(l.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vh(){}n=Vh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function oa(){}oa.prototype.g=function(l,h){return new At(l,h)};function At(l,h){Ye.call(this),this.g=new Ih(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!T(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new es(this)}p(At,Ye),At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){dl(this.g)},At.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var f={};f.__data__=l,l=f}else this.v&&(f={},f.__data__=Zo(l),l=f);h.i.push(new ag(h.Ya++,l)),h.I==3&&ia(h)},At.prototype.N=function(){this.g.l=null,delete this.j,dl(this.g),delete this.g,At.Z.N.call(this)};function Mh(l){el.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const f in h){l=f;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}p(Mh,el);function $h(){tl.call(this),this.status=1}p($h,tl);function es(l){this.g=l}p(es,Vh),es.prototype.ra=function(){st(this.g,"a")},es.prototype.qa=function(l){st(this.g,new Mh(l))},es.prototype.pa=function(l){st(this.g,new $h)},es.prototype.oa=function(){st(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Lf=function(){return new oa},Of=function(){return Ji()},Nf=wr,Ql={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Zi.NO_ERROR=0,Zi.TIMEOUT=8,Zi.HTTP_ERROR=6,Sa=Zi,eh.COMPLETE="complete",Pf=eh,Yu.EventType=Os,Os.OPEN="a",Os.CLOSE="b",Os.ERROR="c",Os.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,ei=Yu,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,kf=Re}).apply(typeof ha<"u"?ha:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Ie=class Ie{};v(Ie,"FOLD_CASE",1),v(Ie,"LITERAL",2),v(Ie,"CLASS_NL",4),v(Ie,"DOT_NL",8),v(Ie,"ONE_LINE",16),v(Ie,"NON_GREEDY",32),v(Ie,"PERL_X",64),v(Ie,"UNICODE_GROUPS",128),v(Ie,"WAS_DOLLAR",256),v(Ie,"MATCH_NL",Ie.CLASS_NL|Ie.DOT_NL),v(Ie,"PERL",Ie.CLASS_NL|Ie.ONE_LINE|Ie.PERL_X|Ie.UNICODE_GROUPS),v(Ie,"POSIX",0),v(Ie,"UNANCHORED",0),v(Ie,"ANCHOR_START",1),v(Ie,"ANCHOR_BOTH",2);let z=Ie;class P{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const r=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return r.length>1||r.codePointAt(0)!==e?e:t.codePointAt(0)}}v(P,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const m=class m{};v(m,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),v(m,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),v(m,"Cc",[[0,31,1],[127,159,1]]),v(m,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),v(m,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),v(m,"Cs",[[55296,57343,1]]),v(m,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),v(m,"foldL",[[837,837,1]]),v(m,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),v(m,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),v(m,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),v(m,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),v(m,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),v(m,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),v(m,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),v(m,"Upper",m.Lu),v(m,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),v(m,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),v(m,"foldM",[[921,953,32],[8126,8126,1]]),v(m,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),v(m,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),v(m,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),v(m,"foldMn",[[921,953,32],[8126,8126,1]]),v(m,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),v(m,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),v(m,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),v(m,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),v(m,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),v(m,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),v(m,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),v(m,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),v(m,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),v(m,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),v(m,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),v(m,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),v(m,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),v(m,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),v(m,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),v(m,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),v(m,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),v(m,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),v(m,"Zl",[[8232,8232,1]]),v(m,"Zp",[[8233,8233,1]]),v(m,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),v(m,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),v(m,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),v(m,"Anatolian_Hieroglyphs",[[82944,83526,1]]),v(m,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),v(m,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),v(m,"Avestan",[[68352,68405,1],[68409,68415,1]]),v(m,"Balinese",[[6912,6988,1],[6992,7038,1]]),v(m,"Bamum",[[42656,42743,1],[92160,92728,1]]),v(m,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),v(m,"Batak",[[7104,7155,1],[7164,7167,1]]),v(m,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),v(m,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),v(m,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),v(m,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),v(m,"Braille",[[10240,10495,1]]),v(m,"Buginese",[[6656,6683,1],[6686,6687,1]]),v(m,"Buhid",[[5952,5971,1]]),v(m,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),v(m,"Carian",[[66208,66256,1]]),v(m,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),v(m,"Chakma",[[69888,69940,1],[69942,69959,1]]),v(m,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),v(m,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),v(m,"Chorasmian",[[69552,69579,1]]),v(m,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),v(m,"foldCommon",[[924,956,32]]),v(m,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),v(m,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),v(m,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),v(m,"Cypro_Minoan",[[77712,77810,1]]),v(m,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),v(m,"Deseret",[[66560,66639,1]]),v(m,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),v(m,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),v(m,"Dogra",[[71680,71739,1]]),v(m,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),v(m,"Egyptian_Hieroglyphs",[[77824,78933,1]]),v(m,"Elbasan",[[66816,66855,1]]),v(m,"Elymaic",[[69600,69622,1]]),v(m,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),v(m,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),v(m,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),v(m,"Gothic",[[66352,66378,1]]),v(m,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),v(m,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),v(m,"foldGreek",[[181,837,656]]),v(m,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),v(m,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),v(m,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),v(m,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),v(m,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),v(m,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),v(m,"Hanunoo",[[5920,5940,1]]),v(m,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),v(m,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),v(m,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),v(m,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),v(m,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),v(m,"foldInherited",[[921,953,32],[8126,8126,1]]),v(m,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),v(m,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),v(m,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),v(m,"Kaithi",[[69760,69826,1],[69837,69837,1]]),v(m,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),v(m,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),v(m,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),v(m,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),v(m,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),v(m,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),v(m,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),v(m,"Khojki",[[70144,70161,1],[70163,70209,1]]),v(m,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),v(m,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),v(m,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),v(m,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),v(m,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),v(m,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),v(m,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),v(m,"Lisu",[[42192,42239,1],[73648,73648,1]]),v(m,"Lycian",[[66176,66204,1]]),v(m,"Lydian",[[67872,67897,1],[67903,67903,1]]),v(m,"Mahajani",[[69968,70006,1]]),v(m,"Makasar",[[73440,73464,1]]),v(m,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),v(m,"Mandaic",[[2112,2139,1],[2142,2142,1]]),v(m,"Manichaean",[[68288,68326,1],[68331,68342,1]]),v(m,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),v(m,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),v(m,"Medefaidrin",[[93760,93850,1]]),v(m,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),v(m,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),v(m,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),v(m,"Meroitic_Hieroglyphs",[[67968,67999,1]]),v(m,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),v(m,"Modi",[[71168,71236,1],[71248,71257,1]]),v(m,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),v(m,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),v(m,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),v(m,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),v(m,"Nabataean",[[67712,67742,1],[67751,67759,1]]),v(m,"Nag_Mundari",[[124112,124153,1]]),v(m,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),v(m,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),v(m,"Newa",[[70656,70747,1],[70749,70753,1]]),v(m,"Nko",[[1984,2042,1],[2045,2047,1]]),v(m,"Nushu",[[94177,110960,16783],[110961,111355,1]]),v(m,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),v(m,"Ogham",[[5760,5788,1]]),v(m,"Ol_Chiki",[[7248,7295,1]]),v(m,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),v(m,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),v(m,"Old_North_Arabian",[[68224,68255,1]]),v(m,"Old_Permic",[[66384,66426,1]]),v(m,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),v(m,"Old_Sogdian",[[69376,69415,1]]),v(m,"Old_South_Arabian",[[68192,68223,1]]),v(m,"Old_Turkic",[[68608,68680,1]]),v(m,"Old_Uyghur",[[69488,69513,1]]),v(m,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),v(m,"Osage",[[66736,66771,1],[66776,66811,1]]),v(m,"Osmanya",[[66688,66717,1],[66720,66729,1]]),v(m,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),v(m,"Palmyrene",[[67680,67711,1]]),v(m,"Pau_Cin_Hau",[[72384,72440,1]]),v(m,"Phags_Pa",[[43072,43127,1]]),v(m,"Phoenician",[[67840,67867,1],[67871,67871,1]]),v(m,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),v(m,"Rejang",[[43312,43347,1],[43359,43359,1]]),v(m,"Runic",[[5792,5866,1],[5870,5880,1]]),v(m,"Samaritan",[[2048,2093,1],[2096,2110,1]]),v(m,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),v(m,"Sharada",[[70016,70111,1]]),v(m,"Shavian",[[66640,66687,1]]),v(m,"Siddham",[[71040,71093,1],[71096,71133,1]]),v(m,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),v(m,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),v(m,"Sogdian",[[69424,69465,1]]),v(m,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),v(m,"Soyombo",[[72272,72354,1]]),v(m,"Sundanese",[[7040,7103,1],[7360,7367,1]]),v(m,"Syloti_Nagri",[[43008,43052,1]]),v(m,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),v(m,"Tagalog",[[5888,5909,1],[5919,5919,1]]),v(m,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),v(m,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),v(m,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),v(m,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),v(m,"Takri",[[71296,71353,1],[71360,71369,1]]),v(m,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),v(m,"Tangsa",[[92784,92862,1],[92864,92873,1]]),v(m,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),v(m,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),v(m,"Thaana",[[1920,1969,1]]),v(m,"Thai",[[3585,3642,1],[3648,3675,1]]),v(m,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),v(m,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),v(m,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),v(m,"Toto",[[123536,123566,1]]),v(m,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),v(m,"Vai",[[42240,42539,1]]),v(m,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),v(m,"Wancho",[[123584,123641,1],[123647,123647,1]]),v(m,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),v(m,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),v(m,"Yi",[[40960,42124,1],[42128,42182,1]]),v(m,"Zanabazar_Square",[[72192,72263,1]]),v(m,"CATEGORIES",new Map([["C",m.C],["Cc",m.Cc],["Cf",m.Cf],["Co",m.Co],["Cs",m.Cs],["L",m.L],["Ll",m.Ll],["Lm",m.Lm],["Lo",m.Lo],["Lt",m.Lt],["Lu",m.Lu],["M",m.M],["Mc",m.Mc],["Me",m.Me],["Mn",m.Mn],["N",m.N],["Nd",m.Nd],["Nl",m.Nl],["No",m.No],["P",m.P],["Pc",m.Pc],["Pd",m.Pd],["Pe",m.Pe],["Pf",m.Pf],["Pi",m.Pi],["Po",m.Po],["Ps",m.Ps],["S",m.S],["Sc",m.Sc],["Sk",m.Sk],["Sm",m.Sm],["So",m.So],["Z",m.Z],["Zl",m.Zl],["Zp",m.Zp],["Zs",m.Zs]])),v(m,"SCRIPTS",new Map([["Adlam",m.Adlam],["Ahom",m.Ahom],["Anatolian_Hieroglyphs",m.Anatolian_Hieroglyphs],["Arabic",m.Arabic],["Armenian",m.Armenian],["Avestan",m.Avestan],["Balinese",m.Balinese],["Bamum",m.Bamum],["Bassa_Vah",m.Bassa_Vah],["Batak",m.Batak],["Bengali",m.Bengali],["Bhaiksuki",m.Bhaiksuki],["Bopomofo",m.Bopomofo],["Brahmi",m.Brahmi],["Braille",m.Braille],["Buginese",m.Buginese],["Buhid",m.Buhid],["Canadian_Aboriginal",m.Canadian_Aboriginal],["Carian",m.Carian],["Caucasian_Albanian",m.Caucasian_Albanian],["Chakma",m.Chakma],["Cham",m.Cham],["Cherokee",m.Cherokee],["Chorasmian",m.Chorasmian],["Common",m.Common],["Coptic",m.Coptic],["Cuneiform",m.Cuneiform],["Cypriot",m.Cypriot],["Cypro_Minoan",m.Cypro_Minoan],["Cyrillic",m.Cyrillic],["Deseret",m.Deseret],["Devanagari",m.Devanagari],["Dives_Akuru",m.Dives_Akuru],["Dogra",m.Dogra],["Duployan",m.Duployan],["Egyptian_Hieroglyphs",m.Egyptian_Hieroglyphs],["Elbasan",m.Elbasan],["Elymaic",m.Elymaic],["Ethiopic",m.Ethiopic],["Georgian",m.Georgian],["Glagolitic",m.Glagolitic],["Gothic",m.Gothic],["Grantha",m.Grantha],["Greek",m.Greek],["Gujarati",m.Gujarati],["Gunjala_Gondi",m.Gunjala_Gondi],["Gurmukhi",m.Gurmukhi],["Han",m.Han],["Hangul",m.Hangul],["Hanifi_Rohingya",m.Hanifi_Rohingya],["Hanunoo",m.Hanunoo],["Hatran",m.Hatran],["Hebrew",m.Hebrew],["Hiragana",m.Hiragana],["Imperial_Aramaic",m.Imperial_Aramaic],["Inherited",m.Inherited],["Inscriptional_Pahlavi",m.Inscriptional_Pahlavi],["Inscriptional_Parthian",m.Inscriptional_Parthian],["Javanese",m.Javanese],["Kaithi",m.Kaithi],["Kannada",m.Kannada],["Katakana",m.Katakana],["Kawi",m.Kawi],["Kayah_Li",m.Kayah_Li],["Kharoshthi",m.Kharoshthi],["Khitan_Small_Script",m.Khitan_Small_Script],["Khmer",m.Khmer],["Khojki",m.Khojki],["Khudawadi",m.Khudawadi],["Lao",m.Lao],["Latin",m.Latin],["Lepcha",m.Lepcha],["Limbu",m.Limbu],["Linear_A",m.Linear_A],["Linear_B",m.Linear_B],["Lisu",m.Lisu],["Lycian",m.Lycian],["Lydian",m.Lydian],["Mahajani",m.Mahajani],["Makasar",m.Makasar],["Malayalam",m.Malayalam],["Mandaic",m.Mandaic],["Manichaean",m.Manichaean],["Marchen",m.Marchen],["Masaram_Gondi",m.Masaram_Gondi],["Medefaidrin",m.Medefaidrin],["Meetei_Mayek",m.Meetei_Mayek],["Mende_Kikakui",m.Mende_Kikakui],["Meroitic_Cursive",m.Meroitic_Cursive],["Meroitic_Hieroglyphs",m.Meroitic_Hieroglyphs],["Miao",m.Miao],["Modi",m.Modi],["Mongolian",m.Mongolian],["Mro",m.Mro],["Multani",m.Multani],["Myanmar",m.Myanmar],["Nabataean",m.Nabataean],["Nag_Mundari",m.Nag_Mundari],["Nandinagari",m.Nandinagari],["New_Tai_Lue",m.New_Tai_Lue],["Newa",m.Newa],["Nko",m.Nko],["Nushu",m.Nushu],["Nyiakeng_Puachue_Hmong",m.Nyiakeng_Puachue_Hmong],["Ogham",m.Ogham],["Ol_Chiki",m.Ol_Chiki],["Old_Hungarian",m.Old_Hungarian],["Old_Italic",m.Old_Italic],["Old_North_Arabian",m.Old_North_Arabian],["Old_Permic",m.Old_Permic],["Old_Persian",m.Old_Persian],["Old_Sogdian",m.Old_Sogdian],["Old_South_Arabian",m.Old_South_Arabian],["Old_Turkic",m.Old_Turkic],["Old_Uyghur",m.Old_Uyghur],["Oriya",m.Oriya],["Osage",m.Osage],["Osmanya",m.Osmanya],["Pahawh_Hmong",m.Pahawh_Hmong],["Palmyrene",m.Palmyrene],["Pau_Cin_Hau",m.Pau_Cin_Hau],["Phags_Pa",m.Phags_Pa],["Phoenician",m.Phoenician],["Psalter_Pahlavi",m.Psalter_Pahlavi],["Rejang",m.Rejang],["Runic",m.Runic],["Samaritan",m.Samaritan],["Saurashtra",m.Saurashtra],["Sharada",m.Sharada],["Shavian",m.Shavian],["Siddham",m.Siddham],["SignWriting",m.SignWriting],["Sinhala",m.Sinhala],["Sogdian",m.Sogdian],["Sora_Sompeng",m.Sora_Sompeng],["Soyombo",m.Soyombo],["Sundanese",m.Sundanese],["Syloti_Nagri",m.Syloti_Nagri],["Syriac",m.Syriac],["Tagalog",m.Tagalog],["Tagbanwa",m.Tagbanwa],["Tai_Le",m.Tai_Le],["Tai_Tham",m.Tai_Tham],["Tai_Viet",m.Tai_Viet],["Takri",m.Takri],["Tamil",m.Tamil],["Tangsa",m.Tangsa],["Tangut",m.Tangut],["Telugu",m.Telugu],["Thaana",m.Thaana],["Thai",m.Thai],["Tibetan",m.Tibetan],["Tifinagh",m.Tifinagh],["Tirhuta",m.Tirhuta],["Toto",m.Toto],["Ugaritic",m.Ugaritic],["Vai",m.Vai],["Vithkuqi",m.Vithkuqi],["Wancho",m.Wancho],["Warang_Citi",m.Warang_Citi],["Yezidi",m.Yezidi],["Yi",m.Yi],["Zanabazar_Square",m.Zanabazar_Square]])),v(m,"FOLD_CATEGORIES",new Map([["L",m.foldL],["Ll",m.foldLl],["Lt",m.foldLt],["Lu",m.foldLu],["M",m.foldM],["Mn",m.foldMn]])),v(m,"FOLD_SCRIPT",new Map([["Common",m.foldCommon],["Greek",m.foldGreek],["Inherited",m.foldInherited]]));let Xe=m;class re{static is32(e,t){let r=0,s=e.length;for(;r<s;){let i=r+Math.floor((s-r)/2),a=e[i];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?s=i:r=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let r of e)if(!(t>r[1]))return t<r[0]?!1:(t-r[0])%r[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(Xe.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(Xe.L,e)||this.is(Xe.M,e)||this.is(Xe.N,e)||this.is(Xe.P,e)||this.is(Xe.S,e)}static simpleFold(e){if(Xe.CASE_ORBIT.has(e))return Xe.CASE_ORBIT.get(e);const t=P.toLowerCase(e);return t!==e?t:P.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return P.CODES.get("A")<=e&&e<=P.CODES.get("Z")&&(e|=32),P.CODES.get("A")<=t&&t<=P.CODES.get("Z")&&(t|=32),e===t;for(let r=this.simpleFold(e);r!==e;r=this.simpleFold(r))if(r===t)return!0;return!1}}v(re,"MAX_RUNE",1114111),v(re,"MAX_ASCII",127),v(re,"MAX_LATIN1",255),v(re,"MAX_BMP",65535),v(re,"MIN_FOLD",65),v(re,"MAX_FOLD",125251);class ae{static emptyInts(){return[]}static isalnum(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")||P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")}static unhex(e){return P.CODES.get("0")<=e&&e<=P.CODES.get("9")?e-P.CODES.get("0"):P.CODES.get("a")<=e&&e<=P.CODES.get("f")?e-P.CODES.get("a")+10:P.CODES.get("A")<=e&&e<=P.CODES.get("F")?e-P.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(re.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case P.CODES.get('"'):t+='\\"';break;case P.CODES.get("\\"):t+="\\\\";break;case P.CODES.get("	"):t+="\\t";break;case P.CODES.get(`
`):t+="\\n";break;case P.CODES.get("\r"):t+="\\r";break;case P.CODES.get("\b"):t+="\\b";break;case P.CODES.get("\f"):t+="\\f";break;default:{let r=e.toString(16);e<256?(t+="\\x",r.length===1&&(t+="0"),t+=r):t+=`\\x{${r}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return P.CODES.get("a")<=e&&e<=P.CODES.get("z")||P.CODES.get("A")<=e&&e<=P.CODES.get("Z")||P.CODES.get("0")<=e&&e<=P.CODES.get("9")||e===P.CODES.get("_")}static emptyOpContext(e,t){let r=0;return e<0&&(r|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===P.CODES.get(`
`)&&(r|=this.EMPTY_BEGIN_LINE),t<0&&(r|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===P.CODES.get(`
`)&&(r|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?r|=this.EMPTY_WORD_BOUNDARY:r|=this.EMPTY_NO_WORD_BOUNDARY,r}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>re.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],r=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],r=0,s=0;for(;r<e.length;){let i=e[r++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[r++],o=e[r++],c=e[r++],u=((i&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;t[s++]=String.fromCharCode(55296+(u>>10)),t[s++]=String.fromCharCode(56320+(u&1023))}else{let a=e[r++],o=e[r++];t[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")}}}v(ae,"METACHARACTERS","\\.+*?()|[]{}^$"),v(ae,"EMPTY_BEGIN_LINE",1),v(ae,"EMPTY_END_LINE",2),v(ae,"EMPTY_BEGIN_TEXT",4),v(ae,"EMPTY_END_TEXT",8),v(ae,"EMPTY_WORD_BOUNDARY",16),v(ae,"EMPTY_NO_WORD_BOUNDARY",32),v(ae,"EMPTY_ALL",-1);const Df=(n=[],e=0)=>{const t={};for(let r=0;r<n.length;r++){const s=n[r],i=e+r;t[s]=i,t[i]=s}return Object.freeze(t)},mi=class mi{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===mi.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===mi.Encoding.UTF_16}};v(mi,"Encoding",Df(["UTF_16","UTF_8"]));let or=mi;class O1 extends or{constructor(e=null){super(),this.bytes=e}getEncoding(){return or.Encoding.UTF_8}asCharSequence(){return ae.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class D9 extends or{constructor(e=null){super(),this.charSequence=e}getEncoding(){return or.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class Ka{static utf16(e){return new D9(e)}static utf8(e){return Array.isArray(e)?new O1(e):new O1(ae.stringToUtf8ByteArray(e))}}class Eo extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Ne extends Eo{constructor(e,t=null){let r=`error parsing regexp: ${e}`;t&&(r+=`: \`${t}\``),super(r),this.name="RE2JSSyntaxException",this.message=r,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class V9 extends Eo{constructor(e){super(e),this.name="RE2JSCompileException"}}class mn extends Eo{constructor(e){super(e),this.name="RE2JSGroupException"}}class M9 extends Eo{constructor(e){super(e),this.name="RE2JSFlagsException"}}class $9{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const r=t.codePointAt(0);return r===P.CODES["\\"]||r===P.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const r=this.patternInput.re2();this.patternGroupCount=r.numberOfCapturingGroups(),this.groups=[],this.namedGroups=r.namedGroups,t instanceof or?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(Ka.utf8(t)):this.resetMatcherInput(Ka.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new mn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new mn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new mn(`group '${e}' not found`);e=s}const t=this.start(e),r=this.end(e);return t<0&&r<0?null:this.substring(t,r)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new mn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new mn("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const r=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!r[0])throw new mn("inconsistency in matching group data");this.groups=r[1],this.hasGroups=!0}matches(){return this.genMatch(0,z.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,z.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new mn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,z.UNANCHORED)}genMatch(e,t){const r=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return r[0]?(this.groups=r[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?ae.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let r="";const s=this.start(),i=this.end();return this.appendPos<s&&(r+=this.substring(this.appendPos,s)),this.appendPos=i,r+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),r}appendReplacementInternal(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++){if(e.codePointAt(i)===P.CODES.get("\\")){r<i&&(t+=e.substring(r,i)),i++,r=i;continue}if(e.codePointAt(i)===P.CODES.get("$")){let a=e.codePointAt(i+1);if(P.CODES.get("0")<=a&&a<=P.CODES.get("9")){let o=a-P.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<P.CODES.get("0")||a>P.CODES.get("9")||o*10+a-P.CODES.get("0")>this.patternGroupCount));i++)o=o*10+a-P.CODES.get("0");if(o>this.patternGroupCount)throw new mn(`n > number of groups: ${o}`);const c=this.group(o);c!==null&&(t+=c),r=i,i--;continue}else if(a===P.CODES.get("{")){r<i&&(t+=e.substring(r,i)),i++;let o=i+1;for(;o<e.length&&e.codePointAt(o)!==P.CODES.get("}")&&e.codePointAt(o)!==P.CODES.get(" ");)o++;if(o===e.length||e.codePointAt(o)!==P.CODES.get("}"))throw new mn("named capture group is missing trailing '}'");const c=e.substring(i+1,o);t+=this.group(c),r=o+1}}}return r<s&&(t+=e.substring(r,s)),t}appendReplacementInternalPerl(e){let t="",r=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===P.CODES.get("$")){let a=e.codePointAt(i+1);if(P.CODES.get("$")===a){r<i&&(t+=e.substring(r,i)),t+="$",i++,r=i+1;continue}else if(P.CODES.get("&")===a){r<i&&(t+=e.substring(r,i));const o=this.group(0);o!==null?t+=o:t+="$&",i++,r=i+1;continue}else if(P.CODES.get("1")<=a&&a<=P.CODES.get("9")){let o=a-P.CODES.get("0");for(r<i&&(t+=e.substring(r,i)),i+=2;i<s&&(a=e.codePointAt(i),!(a<P.CODES.get("0")||a>P.CODES.get("9")||o*10+a-P.CODES.get("0")>this.patternGroupCount));i++)o=o*10+a-P.CODES.get("0");if(o>this.patternGroupCount){t+=`$${o}`,r=i,i--;continue}const c=this.group(o);c!==null&&(t+=c),r=i,i--;continue}else if(a===P.CODES.get("<")){r<i&&(t+=e.substring(r,i)),i++;let o=i+1;for(;o<e.length&&e.codePointAt(o)!==P.CODES.get(">")&&e.codePointAt(o)!==P.CODES.get(" ");)o++;if(o===e.length||e.codePointAt(o)!==P.CODES.get(">")){t+=e.substring(i-1,o+1),r=o+1;continue}const c=e.substring(i+1,o);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?t+=this.group(c):t+=`$<${c}>`,r=o+1}}return r<s&&(t+=e.substring(r,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,r=!1){let s="";for(this.reset();this.find()&&(s+=this.appendReplacement(e,r),!!t););return s+=this.appendTail(),s}}class Kn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class U9 extends Kn{constructor(e,t=0,r=e.length){super(),this.bytes=e,this.start=t,this.end=r}step(e){if(e+=this.start,e>=this.end)return Kn.EOF();let t=this.bytes[e++]&255;return(t&128)===0?t<<3|1:(t&224)===192?(t=t&31,e>=this.end?Kn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?Kn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?Kn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4))}index(e,t){t+=this.start;const r=this.indexOf(this.bytes,e.prefixUTF8,t);return r<0?r:r-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let s=e-1;if(t=this.bytes[s--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);s>=i&&(this.bytes[s]&192)===128;)s--;s<this.start&&(s=this.start),t=this.step(s)>>3}}const r=e<this.end?this.step(e)>>3:-1;return ae.emptyOpContext(t,r)}indexOf(e,t,r=0){let s=t.length;if(s===0)return-1;let i=e.length;for(let a=r;a<=i-s;a++)for(let o=0;o<s&&e[a+o]===t[o];o++)if(o===s-1)return a;return-1}}class F9 extends Kn{constructor(e,t=0,r=e.length){super(),this.charSequence=e,this.start=t,this.end=r}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|ae.charCount(t)}else return Kn.EOF()}index(e,t){t+=this.start;const r=this.charSequence.indexOf(e.prefix,t);return r<0?r:r-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,r=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return ae.emptyOpContext(t,r)}}class Oe{static fromUTF8(e,t=0,r=e.length){return new U9(e,t,r)}static fromUTF16(e,t=0,r=e.length){return new F9(e,t,r)}}const te=class te{static isPseudoOp(e){return e>=te.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===P.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new te(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=te.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=te.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case te.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case te.Op.EMPTY_MATCH:e+="(?:)";break;case te.Op.STAR:case te.Op.PLUS:case te.Op.QUEST:case te.Op.REPEAT:{const t=this.subs[0];switch(t.op>te.Op.CAPTURE||t.op===te.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case te.Op.STAR:e+="*";break;case te.Op.PLUS:e+="+";break;case te.Op.QUEST:e+="?";break;case te.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&z.NON_GREEDY)!==0&&(e+="?");break}case te.Op.CONCAT:{for(let t of this.subs)t.op===te.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case te.Op.ALTERNATE:{let t="";for(let r of this.subs)e+=t,t="|",e+=r.appendTo();break}case te.Op.LITERAL:(this.flags&z.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=ae.escapeRune(t);(this.flags&z.FOLD_CASE)!==0&&(e+=")");break;case te.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case te.Op.ANY_CHAR:e+="(?s:.)";break;case te.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==te.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case te.Op.BEGIN_TEXT:e+="\\A";break;case te.Op.END_TEXT:(this.flags&z.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case te.Op.BEGIN_LINE:e+="^";break;case te.Op.END_LINE:e+="$";break;case te.Op.WORD_BOUNDARY:e+="\\b";break;case te.Op.NO_WORD_BOUNDARY:e+="\\B";break;case te.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===re.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const r=this.runes[t]+1,s=this.runes[t+1]-1;e+=te.quoteIfHyphen(r),e+=ae.escapeRune(r),r!==s&&(e+="-",e+=te.quoteIfHyphen(s),e+=ae.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const r=this.runes[t],s=this.runes[t+1];e+=te.quoteIfHyphen(r),e+=ae.escapeRune(r),r!==s&&(e+="-",e+=te.quoteIfHyphen(s),e+=ae.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===te.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const r=t.maxCap();e<r&&(e=r)}return e}equals(e){if(!(e!==null&&e instanceof te)||this.op!==e.op)return!1;switch(this.op){case te.Op.END_TEXT:{if((this.flags&z.WAS_DOLLAR)!==(e.flags&z.WAS_DOLLAR))return!1;break}case te.Op.LITERAL:case te.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case te.Op.ALTERNATE:case te.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case te.Op.STAR:case te.Op.PLUS:case te.Op.QUEST:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case te.Op.REPEAT:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case te.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};v(te,"Op",Df(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let D=te;const _e=class _e{static isRuneOp(e){return _e.RUNE<=e&&e<=_e.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let r of e)t+=ae.escapeRune(r);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const s=this.runes[0];return(this.arg&z.FOLD_CASE)!==0?re.equalsIgnoreCase(s,e):e===s}for(let s=0;s<this.runes.length&&s<=8;s+=2){if(e<this.runes[s])return!1;if(e<=this.runes[s+1])return!0}let t=0,r=this.runes.length/2|0;for(;t<r;){const s=t+((r-t)/2|0);if(this.runes[2*s]<=e){if(e<=this.runes[2*s+1])return!0;t=s+1}else r=s}return!1}toString(){switch(this.op){case _e.ALT:return`alt -> ${this.out}, ${this.arg}`;case _e.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case _e.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case _e.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case _e.MATCH:return"match";case _e.FAIL:return"fail";case _e.NOP:return`nop -> ${this.out}`;case _e.RUNE:return this.runes===null?"rune <null>":["rune ",_e.escapeRunes(this.runes),(this.arg&z.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case _e.RUNE1:return`rune1 ${_e.escapeRunes(this.runes)} -> ${this.out}`;case _e.RUNE_ANY:return`any -> ${this.out}`;case _e.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};v(_e,"ALT",1),v(_e,"ALT_MATCH",2),v(_e,"CAPTURE",3),v(_e,"EMPTY_WIDTH",4),v(_e,"FAIL",5),v(_e,"MATCH",6),v(_e,"NOP",7),v(_e,"RUNE",8),v(_e,"RUNE1",9),v(_e,"RUNE_ANY",10),v(_e,"RUNE_ANY_NOT_NL",11);let oe=_e;class B9{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new oe(e))}skipNop(e){let t=this.inst[e];for(;t.op===oe.NOP||t.op===oe.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!oe.isRuneOp(t.op)||t.runes.length!==1)return[t.op===oe.MATCH,e];for(;oe.isRuneOp(t.op)&&t.runes.length===1&&(t.arg&z.FOLD_CASE)===0;)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===oe.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const r=this.inst[t];switch(r.op){case oe.EMPTY_WIDTH:e|=r.arg;break;case oe.FAIL:return-1;case oe.CAPTURE:case oe.NOP:break;default:break e}t=r.out}return e}next(e){const t=this.inst[e>>1];return(e&1)===0?t.out:t.arg}patch(e,t){for(;e!==0;){const r=this.inst[e>>1];(e&1)===0?(e=r.out,r.out=t):(e=r.arg,r.arg=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let r=e;for(;;){const i=this.next(r);if(i===0)break;r=i}const s=this.inst[r>>1];return(r&1)===0?s.out=t:s.arg=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const r=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-r),e+=this.inst[t],e+=`
`}return e}}class da{constructor(e=0,t=0,r=!1){this.i=e,this.out=t,this.nullable=r}}class ii{static ANY_RUNE_NOT_NL(){return[0,P.CODES.get(`
`)-1,P.CODES.get(`
`)+1,re.MAX_RUNE]}static ANY_RUNE(){return[0,re.MAX_RUNE]}static compileRegexp(e){const t=new ii,r=t.compile(e);return t.prog.patch(r.out,t.newInst(oe.MATCH).i),t.prog.start=r.i,t.prog}constructor(){this.prog=new B9,this.newInst(oe.FAIL)}newInst(e){return this.prog.addInst(e),new da(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(oe.NOP);return e.out=e.i<<1,e}fail(){return new da}cap(e){const t=this.newInst(oe.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new da(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const r=this.newInst(oe.ALT),s=this.prog.getInst(r.i);return s.out=e.i,s.arg=t.i,r.out=this.prog.append(e.out,t.out),r.nullable=e.nullable||t.nullable,r}loop(e,t){const r=this.newInst(oe.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),this.prog.patch(e.out,r.i),r}quest(e,t){const r=this.newInst(oe.ALT),s=this.prog.getInst(r.i);return t?(s.arg=e.i,r.out=r.i<<1):(s.out=e.i,r.out=r.i<<1|1),r.out=this.prog.append(r.out,e.out),r}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new da(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(oe.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const r=this.newInst(oe.RUNE);r.nullable=!1;const s=this.prog.getInst(r.i);return s.runes=e,t&=z.FOLD_CASE,(e.length!==1||re.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,r.out=r.i<<1,(t&z.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?s.op=oe.RUNE1:e.length===2&&e[0]===0&&e[1]===re.MAX_RUNE?s.op=oe.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===P.CODES.get(`
`)-1&&e[2]===P.CODES.get(`
`)+1&&e[3]===re.MAX_RUNE&&(s.op=oe.RUNE_ANY_NOT_NL),r}compile(e){switch(e.op){case D.Op.NO_MATCH:return this.fail();case D.Op.EMPTY_MATCH:return this.nop();case D.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let r of e.runes){const s=this.rune([r],e.flags);t=t===null?s:this.cat(t,s)}return t}case D.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case D.Op.ANY_CHAR_NOT_NL:return this.rune(ii.ANY_RUNE_NOT_NL(),0);case D.Op.ANY_CHAR:return this.rune(ii.ANY_RUNE(),0);case D.Op.BEGIN_LINE:return this.empty(ae.EMPTY_BEGIN_LINE);case D.Op.END_LINE:return this.empty(ae.EMPTY_END_LINE);case D.Op.BEGIN_TEXT:return this.empty(ae.EMPTY_BEGIN_TEXT);case D.Op.END_TEXT:return this.empty(ae.EMPTY_END_TEXT);case D.Op.WORD_BOUNDARY:return this.empty(ae.EMPTY_WORD_BOUNDARY);case D.Op.NO_WORD_BOUNDARY:return this.empty(ae.EMPTY_NO_WORD_BOUNDARY);case D.Op.CAPTURE:{const t=this.cap(e.cap<<1),r=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,r),s)}case D.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case D.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case D.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case D.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.cat(t,s)}return t}}case D.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let r of e.subs){const s=this.compile(r);t=t===null?s:this.alt(t,s)}return t}}default:throw new V9("regexp: unhandled case in compile")}}}class Ht{static simplify(e){if(e===null)return null;switch(e.op){case D.Op.CAPTURE:case D.Op.CONCAT:case D.Op.ALTERNATE:{let t=e;for(let r=0;r<e.subs.length;r++){const s=e.subs[r],i=Ht.simplify(s);t===e&&i!==s&&(t=D.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[r]=i)}return t}case D.Op.STAR:case D.Op.PLUS:case D.Op.QUEST:{const t=Ht.simplify(e.subs[0]);return Ht.simplify1(e.op,e.flags,t,e)}case D.Op.REPEAT:{if(e.min===0&&e.max===0)return new D(D.Op.EMPTY_MATCH);const t=Ht.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Ht.simplify1(D.Op.STAR,e.flags,t,null);if(e.min===1)return Ht.simplify1(D.Op.PLUS,e.flags,t,null);const s=new D(D.Op.CONCAT),i=[];for(let a=0;a<e.min-1;a++)i.push(t);return i.push(Ht.simplify1(D.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),s}if(e.min===1&&e.max===1)return t;let r=null;if(e.min>0){r=[];for(let s=0;s<e.min;s++)r.push(t)}if(e.max>e.min){let s=Ht.simplify1(D.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const a=new D(D.Op.CONCAT);a.subs=[t,s],s=Ht.simplify1(D.Op.QUEST,e.flags,a,null)}if(r===null)return s;r.push(s)}if(r!==null){const s=new D(D.Op.CONCAT);return s.subs=r.slice(0),s}return new D(D.Op.NO_MATCH)}}return e}static simplify1(e,t,r,s){return r.op===D.Op.EMPTY_MATCH||e===r.op&&(t&z.NON_GREEDY)===(r.flags&z.NON_GREEDY)?r:(s!==null&&s.op===e&&(s.flags&z.NON_GREEDY)===(t&z.NON_GREEDY)&&r===s.subs[0]||(s=new D(e),s.flags=t,s.subs=[r]),s)}}class ge{constructor(e,t){this.sign=e,this.cls=t}}const L1=[48,57],D1=[9,10,12,13,32,32],V1=[48,57,65,90,95,95,97,122],M1=new Map([["\\d",new ge(1,L1)],["\\D",new ge(-1,L1)],["\\s",new ge(1,D1)],["\\S",new ge(-1,D1)],["\\w",new ge(1,V1)],["\\W",new ge(-1,V1)]]),$1=[48,57,65,90,97,122],U1=[65,90,97,122],F1=[0,127],B1=[9,9,32,32],q1=[0,31,127,127],H1=[48,57],j1=[33,126],G1=[97,122],z1=[32,126],W1=[33,47,58,64,91,96,123,126],K1=[9,13,32,32],Y1=[65,90],Q1=[48,57,65,90,95,95,97,122],X1=[48,57,65,70,97,102],J1=new Map([["[:alnum:]",new ge(1,$1)],["[:^alnum:]",new ge(-1,$1)],["[:alpha:]",new ge(1,U1)],["[:^alpha:]",new ge(-1,U1)],["[:ascii:]",new ge(1,F1)],["[:^ascii:]",new ge(-1,F1)],["[:blank:]",new ge(1,B1)],["[:^blank:]",new ge(-1,B1)],["[:cntrl:]",new ge(1,q1)],["[:^cntrl:]",new ge(-1,q1)],["[:digit:]",new ge(1,H1)],["[:^digit:]",new ge(-1,H1)],["[:graph:]",new ge(1,j1)],["[:^graph:]",new ge(-1,j1)],["[:lower:]",new ge(1,G1)],["[:^lower:]",new ge(-1,G1)],["[:print:]",new ge(1,z1)],["[:^print:]",new ge(-1,z1)],["[:punct:]",new ge(1,W1)],["[:^punct:]",new ge(-1,W1)],["[:space:]",new ge(1,K1)],["[:^space:]",new ge(-1,K1)],["[:upper:]",new ge(1,Y1)],["[:^upper:]",new ge(-1,Y1)],["[:word:]",new ge(1,Q1)],["[:^word:]",new ge(-1,Q1)],["[:xdigit:]",new ge(1,X1)],["[:^xdigit:]",new ge(-1,X1)]]);class Je{static charClassToString(e,t){let r="[";for(let s=0;s<t;s+=2){s>0&&(r+=" ");const i=e[s],a=e[s+1];i===a?r+=`0x${i.toString(16)}`:r+=`0x${i.toString(16)}-0x${a.toString(16)}`}return r+="]",r}static cmp(e,t,r,s){const i=e[t]-r;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,r){const s=((t+r)/2|0)&-2,i=e[s],a=e[s+1];let o=t,c=r;for(;o<=c;){for(;o<r&&Je.cmp(e,o,i,a)<0;)o+=2;for(;c>t&&Je.cmp(e,c,i,a)>0;)c-=2;if(o<=c){if(o!==c){let u=e[o];e[o]=e[c],e[c]=u,u=e[o+1],e[o+1]=e[c+1],e[c+1]=u}o+=2,c-=2}}t<c&&Je.qsortIntPair(e,t,c),o<r&&Je.qsortIntPair(e,o,r)}constructor(e=ae.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Je.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const r=this.r[t],s=this.r[t+1];if(r<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=r,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&z.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let r=2;r<=4;r+=2)if(this.len>=r){const s=this.r[this.len-r],i=this.r[this.len-r+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-r]=e),t>i&&(this.r[this.len-r+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=re.MIN_FOLD&&t>=re.MAX_FOLD)return this.appendRange(e,t);if(t<re.MIN_FOLD||e>re.MAX_FOLD)return this.appendRange(e,t);e<re.MIN_FOLD&&(this.appendRange(e,re.MIN_FOLD-1),e=re.MIN_FOLD),t>re.MAX_FOLD&&(this.appendRange(re.MAX_FOLD+1,t),t=re.MAX_FOLD);for(let r=e;r<=t;r++){this.appendRange(r,r);for(let s=re.simpleFold(r);s!==r;s=re.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let r=0;r<e.length;r+=2){const s=e[r],i=e[r+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=re.MAX_RUNE&&this.appendRange(t,re.MAX_RUNE),this}appendTable(e){for(let t of e){const r=t[0],s=t[1],i=t[2];if(i===1){this.appendRange(r,s);continue}for(let a=r;a<=s;a+=i)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let r of e){const s=r[0],i=r[1],a=r[2];if(a===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let o=s;o<=i;o+=a)t<=o-1&&this.appendRange(t,o-1),t=o+1}return t<=re.MAX_RUNE&&this.appendRange(t,re.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let r=0;r<this.len;r+=2){const s=this.r[r],i=this.r[r+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=re.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=re.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let r=e.cls;return t&&(r=new Je().appendFoldedClass(r).cleanClass().toArray()),this.appendClassWithSign(r,e.sign)}toString(){return Je.charClassToString(this.r,this.len)}}class ai{static of(e,t){return new ai(e,t)}constructor(e,t){this.first=e,this.second=t}}class q9{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=ae.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const Y=class Y{static ANY_TABLE(){return[[0,re.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?ai.of(Y.ANY_TABLE(),Y.ANY_TABLE()):Xe.CATEGORIES.has(e)?ai.of(Xe.CATEGORIES.get(e),Xe.FOLD_CATEGORIES.get(e)):Xe.SCRIPTS.has(e)?ai.of(Xe.SCRIPTS.get(e),Xe.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<re.MIN_FOLD||e>re.MAX_FOLD)return e;let t=e;const r=e;for(e=re.simpleFold(e);e!==r;e=re.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===D.Op.EMPTY_MATCH)return null;if(e.op===D.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===D.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const r=new D(D.Op.LITERAL);return r.flags=t,r.runes=ae.stringToRunes(e),r}static parse(e,t){return new Y(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const r=Y.parseInt(e);if(r===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=r;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=Y.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),r<0||r>1e3||s===-2||s>1e3||s>=0&&r>s)throw new Ne(Y.ERR_INVALID_REPEAT_SIZE,e.from(t));return r<<16|s&re.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const r=e.codePointAt(t);if(r!==P.CODES.get("_")&&!ae.isalnum(r))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=P.CODES.get("0")&&e.peek()<=P.CODES.get("9");)e.skip(1);const r=e.from(t);return r.length===0||r.length>1&&r.codePointAt(0)===P.CODES.get("0")?-1:r.length>8?-2:parseFloat(r,10)}static isCharClass(e){return e.op===D.Op.LITERAL&&e.runes.length===1||e.op===D.Op.CHAR_CLASS||e.op===D.Op.ANY_CHAR_NOT_NL||e.op===D.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case D.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case D.Op.CHAR_CLASS:for(let r=0;r<e.runes.length;r+=2)if(e.runes[r]<=t&&t<=e.runes[r+1])return!0;return!1;case D.Op.ANY_CHAR_NOT_NL:return t!==P.CODES.get(`
`);case D.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case D.Op.ANY_CHAR:break;case D.Op.ANY_CHAR_NOT_NL:Y.matchRune(t,P.CODES.get(`
`))&&(e.op=D.Op.ANY_CHAR);break;case D.Op.CHAR_CLASS:t.op===D.Op.LITERAL?e.runes=new Je(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Je(e.runes).appendClass(t.runes).toArray();break;case D.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=D.Op.CHAR_CLASS,e.runes=new Je().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ne(Y.ERR_TRAILING_BACKSLASH);let r=e.pop();e:switch(r){case P.CODES.get("1"):case P.CODES.get("2"):case P.CODES.get("3"):case P.CODES.get("4"):case P.CODES.get("5"):case P.CODES.get("6"):case P.CODES.get("7"):if(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"))break;case P.CODES.get("0"):{let s=r-P.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<P.CODES.get("0")||e.peek()>P.CODES.get("7"));i++)s=s*8+e.peek()-P.CODES.get("0"),e.skip(1);return s}case P.CODES.get("x"):{if(!e.more())break;if(r=e.pop(),r===P.CODES.get("{")){let a=0,o=0;for(;;){if(!e.more())break e;if(r=e.pop(),r===P.CODES.get("}"))break;const c=ae.unhex(r);if(c<0||(o=o*16+c,o>re.MAX_RUNE))break e;a++}if(a===0)break e;return o}const s=ae.unhex(r);if(!e.more())break;r=e.pop();const i=ae.unhex(r);if(s<0||i<0)break;return s*16+i}case P.CODES.get("a"):return P.CODES.get("\x07");case P.CODES.get("f"):return P.CODES.get("\f");case P.CODES.get("n"):return P.CODES.get(`
`);case P.CODES.get("r"):return P.CODES.get("\r");case P.CODES.get("t"):return P.CODES.get("	");case P.CODES.get("v"):return P.CODES.get("\v");default:if(!ae.isalnum(r))return r;break}throw new Ne(Y.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ne(Y.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?Y.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new D(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!D.isPseudoOp(this.stack[t-1].op);)t--;const r=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),r}push(e){if(e.op===D.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=D.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===D.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&re.simpleFold(e.runes[0])===e.runes[2]&&re.simpleFold(e.runes[2])===e.runes[0]||e.op===D.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&re.simpleFold(e.runes[0])===e.runes[1]&&re.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|z.FOLD_CASE))return null;e.op=D.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|z.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const r=this.stack.length;if(r<2)return!1;const s=this.stack[r-1],i=this.stack[r-2];return s.op!==D.Op.LITERAL||i.op!==D.Op.LITERAL||(s.flags&z.FOLD_CASE)!==(i.flags&z.FOLD_CASE)?!1:(i.runes=Y.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const r=this.newRegexp(D.Op.LITERAL);return r.flags=t,(t&z.FOLD_CASE)!==0&&(e=Y.minFoldRune(e)),r.runes=[e],r}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,r,s,i,a){let o=this.flags;if((o&z.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),o^=z.NON_GREEDY),a!==-1))throw new Ne(Y.ERR_INVALID_REPEAT_OP,i.from(a));const c=this.stack.length;if(c===0)throw new Ne(Y.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const u=this.stack[c-1];if(D.isPseudoOp(u.op))throw new Ne(Y.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const d=this.newRegexp(e);d.min=t,d.max=r,d.flags=o,d.subs=[u],this.stack[c-1]=d}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(D.Op.EMPTY_MATCH)):this.push(this.collapse(e,D.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(D.Op.NO_MATCH)):this.push(this.collapse(e,D.Op.ALTERNATE))}cleanAlt(e){e.op===D.Op.CHAR_CLASS&&(e.runes=new Je(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===re.MAX_RUNE?(e.runes=null,e.op=D.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===P.CODES.get(`
`)-1&&e.runes[2]===P.CODES.get(`
`)+1&&e.runes[3]===re.MAX_RUNE&&(e.runes=null,e.op=D.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let r=0;for(let o of e)r+=o.op===t?o.subs.length:1;let s=new Array(r).fill(null),i=0;for(let o of e)o.op===t?(s.splice(i,o.subs.length,...o.subs),i+=o.subs.length,this.reuse(o)):s[i++]=o;let a=this.newRegexp(t);if(a.subs=s,t===D.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const o=a;a=a.subs[0],this.reuse(o)}return a}factor(e){if(e.length<2)return e;let t=0,r=e.length,s=0,i=null,a=0,o=0,c=0;for(let d=0;d<=r;d++){let p=null,y=0,b=0;if(d<r){let R=e[t+d];if(R.op===D.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===D.Op.LITERAL&&(p=R.runes,y=R.runes.length,b=R.flags&z.FOLD_CASE),b===o){let O=0;for(;O<a&&O<y&&i[O]===p[O];)O++;if(O>0){a=O;continue}}}if(d!==c)if(d===c+1)e[s++]=e[t+c];else{const R=this.newRegexp(D.Op.LITERAL);R.flags=o,R.runes=i.slice(0,a);for(let F=c;F<d;F++)e[t+F]=this.removeLeadingString(e[t+F],a);const O=this.collapse(e.slice(t+c,t+d),D.Op.ALTERNATE),k=this.newRegexp(D.Op.CONCAT);k.subs=[R,O],e[s++]=k}c=d,i=p,a=y,o=b}r=s,t=0,c=0,s=0;let u=null;for(let d=0;d<=r;d++){let p=null;if(!(d<r&&(p=Y.leadingRegexp(e[t+d]),u!==null&&u.equals(p)&&(Y.isCharClass(u)||u.op===D.Op.REPEAT&&u.min===u.max&&Y.isCharClass(u.subs[0]))))){if(d!==c)if(d===c+1)e[s++]=e[t+c];else{const y=u;for(let O=c;O<d;O++){const k=O!==c;e[t+O]=this.removeLeadingRegexp(e[t+O],k)}const b=this.collapse(e.slice(t+c,t+d),D.Op.ALTERNATE),R=this.newRegexp(D.Op.CONCAT);R.subs=[y,b],e[s++]=R}c=d,u=p}}r=s,t=0,c=0,s=0;for(let d=0;d<=r;d++)if(!(d<r&&Y.isCharClass(e[t+d]))){if(d!==c)if(d===c+1)e[s++]=e[t+c];else{let p=c;for(let b=c+1;b<d;b++){const R=e[t+p],O=e[t+b];(R.op<O.op||R.op===O.op&&(R.runes!==null?R.runes.length:0)<(O.runes!==null?O.runes.length:0))&&(p=b)}const y=e[t+c];e[t+c]=e[t+p],e[t+p]=y;for(let b=c+1;b<d;b++)Y.mergeCharClass(e[t+c],e[t+b]),this.reuse(e[t+b]);this.cleanAlt(e[t+c]),e[s++]=e[t+c]}d<r&&(e[s++]=e[t+d]),c=d+1}r=s,t=0,c=0,s=0;for(let d=0;d<r;++d)d+1<r&&e[t+d].op===D.Op.EMPTY_MATCH&&e[t+d+1].op===D.Op.EMPTY_MATCH||(e[s++]=e[t+d]);return r=s,t=0,e.slice(t,r)}removeLeadingString(e,t){if(e.op===D.Op.CONCAT&&e.subs.length>0){const r=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=r,r.op===D.Op.EMPTY_MATCH)switch(this.reuse(r),e.subs.length){case 0:case 1:e.op=D.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===D.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=D.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===D.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=D.Op.EMPTY_MATCH,e.subs=D.emptySubs();break}case 1:{const r=e;e=e.subs[0],this.reuse(r);break}}return e}return t&&this.reuse(e),this.newRegexp(D.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&z.LITERAL)!==0)return Y.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,r=-1;const s=new q9(this.wholeRegexp);for(;s.more();){let a=-1;e:switch(s.peek()){case P.CODES.get("("):if((this.flags&z.PERL_X)!==0&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(D.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case P.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case P.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case P.CODES.get("^"):(this.flags&z.ONE_LINE)!==0?this.op(D.Op.BEGIN_TEXT):this.op(D.Op.BEGIN_LINE),s.skip(1);break;case P.CODES.get("$"):(this.flags&z.ONE_LINE)!==0?this.op(D.Op.END_TEXT).flags|=z.WAS_DOLLAR:this.op(D.Op.END_LINE),s.skip(1);break;case P.CODES.get("."):(this.flags&z.DOT_NL)!==0?this.op(D.Op.ANY_CHAR):this.op(D.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case P.CODES.get("["):this.parseClass(s);break;case P.CODES.get("*"):case P.CODES.get("+"):case P.CODES.get("?"):{a=s.pos();let o=null;switch(s.pop()){case P.CODES.get("*"):o=D.Op.STAR;break;case P.CODES.get("+"):o=D.Op.PLUS;break;case P.CODES.get("?"):o=D.Op.QUEST;break}this.repeat(o,t,r,a,s,e);break}case P.CODES.get("{"):{a=s.pos();const o=Y.parseRepeat(s);if(o<0){s.rewindTo(a),this.literal(s.pop());break}t=o>>16,r=(o&re.MAX_BMP)<<16>>16,this.repeat(D.Op.REPEAT,t,r,a,s,e);break}case P.CODES.get("\\"):{const o=s.pos();if(s.skip(1),(this.flags&z.PERL_X)!==0&&s.more())switch(s.pop()){case P.CODES.get("A"):this.op(D.Op.BEGIN_TEXT);break e;case P.CODES.get("b"):this.op(D.Op.WORD_BOUNDARY);break e;case P.CODES.get("B"):this.op(D.Op.NO_WORD_BOUNDARY);break e;case P.CODES.get("C"):throw new Ne(Y.ERR_INVALID_ESCAPE,"\\C");case P.CODES.get("Q"):{let p=s.rest();const y=p.indexOf("\\E");y>=0&&(p=p.substring(0,y)),s.skipString(p),s.skipString("\\E");let b=0;for(;b<p.length;){const R=p.codePointAt(b);this.literal(R),b+=ae.charCount(R)}break e}case P.CODES.get("z"):this.op(D.Op.END_TEXT);break e;default:s.rewindTo(o);break}const c=this.newRegexp(D.Op.CHAR_CLASS);if(c.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const d=new Je;if(this.parseUnicodeClass(s,d)){c.runes=d.toArray(),this.push(c);break e}}const u=new Je;if(this.parsePerlClassEscape(s,u)){c.runes=u.toArray(),this.push(c);break e}s.rewindTo(o),this.reuse(c),this.literal(Y.parseEscape(s));break}default:this.literal(s.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ne(Y.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),r=e.rest();if(r.startsWith("(?P<")||r.startsWith("(?<")){const o=r.charAt(2)==="P"?4:3,c=r.indexOf(">");if(c<0)throw new Ne(Y.ERR_INVALID_NAMED_CAPTURE,r);const u=r.substring(o,c);if(e.skipString(u),e.skip(o+1),!Y.isValidCaptureName(u))throw new Ne(Y.ERR_INVALID_NAMED_CAPTURE,r.substring(0,c+1));const d=this.op(D.Op.LEFT_PAREN);if(d.cap=++this.numCap,this.namedGroups[u])throw new Ne(Y.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,d.name=u;return}e.skip(2);let s=this.flags,i=1,a=!1;e:for(;e.more();){const o=e.pop();switch(o){case P.CODES.get("i"):s|=z.FOLD_CASE,a=!0;break;case P.CODES.get("m"):s&=-17,a=!0;break;case P.CODES.get("s"):s|=z.DOT_NL,a=!0;break;case P.CODES.get("U"):s|=z.NON_GREEDY,a=!0;break;case P.CODES.get("-"):if(i<0)break e;i=-1,s=~s,a=!1;break;case P.CODES.get(":"):case P.CODES.get(")"):if(i<0){if(!a)break e;s=~s}o===P.CODES.get(":")&&this.op(D.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Ne(Y.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(D.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===D.Op.VERTICAL_BAR&&Y.isCharClass(this.stack[e-1])&&Y.isCharClass(this.stack[e-3])){let t=this.stack[e-1],r=this.stack[e-3];if(t.op>r.op){const s=r;r=t,t=s,this.stack[e-3]=r}return Y.mergeCharClass(r,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],r=this.stack[e-2];if(r.op===D.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=r,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ne(Y.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),r=this.pop();if(r.op!==D.Op.LEFT_PAREN)throw new Ne(Y.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=r.flags,r.cap===0?this.push(t):(r.op=D.Op.CAPTURE,r.subs=[t],this.push(r))}parsePerlClassEscape(e,t){const r=e.pos();if((this.flags&z.PERL_X)===0||!e.more()||e.pop()!==P.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(r),i=M1.has(s)?M1.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&z.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const r=e.rest(),s=r.indexOf(":]");if(s<0)return!1;const i=r.substring(0,s+2);e.skipString(i);const a=J1.has(i)?J1.get(i):null;if(a===null)throw new Ne(Y.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(a,(this.flags&z.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const r=e.pos();if((this.flags&z.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===P.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(r),new Ne(Y.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let a;if(i!==P.CODES.get("{"))a=ae.runeToString(i);else{const d=e.rest(),p=d.indexOf("}");if(p<0)throw e.rewindTo(r),new Ne(Y.ERR_INVALID_CHAR_RANGE,e.rest());a=d.substring(0,p),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===P.CODES.get("^")&&(s=0-s,a=a.substring(1));const o=Y.unicodeTable(a);if(o===null)throw new Ne(Y.ERR_INVALID_CHAR_RANGE,e.from(r));const c=o.first,u=o.second;if((this.flags&z.FOLD_CASE)===0||u===null)t.appendTableWithSign(c,s);else{const d=new Je().appendTable(c).appendTable(u).cleanClass().toArray();t.appendClassWithSign(d,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const r=this.newRegexp(D.Op.CHAR_CLASS);r.flags=this.flags;const s=new Je;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&z.CLASS_NL)===0&&s.appendRange(P.CODES.get(`
`),P.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==P.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&(this.flags&z.PERL_X)===0&&!a){const d=e.rest();if(d==="-"||!d.startsWith("-]"))throw e.rewindTo(t),new Ne(Y.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const o=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(o)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(o);const c=Y.parseClassChar(e,t);let u=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=Y.parseClassChar(e,t),u<c)throw new Ne(Y.ERR_INVALID_CHAR_RANGE,e.from(o))}(this.flags&z.FOLD_CASE)===0?s.appendRange(c,u):s.appendFoldedRange(c,u)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),r.runes=s.toArray(),this.push(r)}};v(Y,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),v(Y,"ERR_INVALID_CHAR_RANGE","invalid character class range"),v(Y,"ERR_INVALID_ESCAPE","invalid escape sequence"),v(Y,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),v(Y,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),v(Y,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),v(Y,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),v(Y,"ERR_MISSING_BRACKET","missing closing ]"),v(Y,"ERR_MISSING_PAREN","missing closing )"),v(Y,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),v(Y,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),v(Y,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let Xl=Y;class H9{constructor(){this.inst=null,this.cap=[]}}class Z1{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class hs{static fromRE2(e){const t=new hs;return t.prog=e.prog,t.re2=e,t.q0=new Z1(t.prog.numInst()),t.q1=new Z1(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new hs;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const r=this.pool[t];r.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?ae.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new H9,t.inst=e,t}freeQueue(e,t=0){const r=e.size-t,s=this.poolSize+r;this.pool.length<s&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,s)));for(let i=t;i<e.size;i++){const a=e.denseThreads[i];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,r){const s=this.re2.cond;if(s===ae.EMPTY_ALL||(r===z.ANCHOR_START||r===z.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,a=this.q1,o=e.step(t),c=o>>3,u=o&7,d=-1,p=0;o!==Kn.EOF()&&(o=e.step(t+u),d=o>>3,p=o&7);let y;for(t===0?y=ae.emptyOpContext(-1,c):y=e.context(t);;){if(i.isEmpty()){if((s&ae.EMPTY_BEGIN_TEXT)!==0&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&d!==this.re2.prefixRune&&e.canCheckPrefix()){const O=e.index(this.re2,t);if(O<0)break;t+=O,o=e.step(t),c=o>>3,u=o&7,o=e.step(t+u),d=o>>3,p=o&7}}!this.matched&&(t===0||r===z.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,y,null));const b=t+u;if(y=e.context(b),this.step(i,a,t,b,c,y,r,t===e.endPos()),u===0||this.ncap===0&&this.matched)break;t+=u,c=d,u=p,c!==-1&&(o=e.step(t+u),d=o>>3,p=o&7);const R=i;i=a,a=R}return this.freeQueue(a),this.matched}step(e,t,r,s,i,a,o,c){const u=this.re2.longest;for(let d=0;d<e.size;d++){let p=e.denseThreads[d];if(p===null)continue;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<p.cap[0]){this.freeThread(p);continue}const y=p.inst;let b=!1;switch(y.op){case oe.MATCH:if(o===z.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!u||!this.matched||this.matchcap[1]<r)&&(p.cap[1]=r,this.matchcap=p.cap.slice(0,this.ncap)),u||this.freeQueue(e,d+1),this.matched=!0;break;case oe.RUNE:b=y.matchRune(i);break;case oe.RUNE1:b=i===y.runes[0];break;case oe.RUNE_ANY:b=!0;break;case oe.RUNE_ANY_NOT_NL:b=i!==P.CODES.get(`
`);break;default:throw new Error("bad inst")}b&&(p=this.add(t,y.out,s,p.cap,a,p)),p!==null&&(this.freeThread(p),e.denseThreads[d]=null)}e.clear()}add(e,t,r,s,i,a){if(t===0||e.contains(t))return a;const o=e.add(t),c=this.prog.inst[t];switch(c.op){case oe.FAIL:break;case oe.ALT:case oe.ALT_MATCH:a=this.add(e,c.out,r,s,i,a),a=this.add(e,c.arg,r,s,i,a);break;case oe.EMPTY_WIDTH:(c.arg&~i)===0&&(a=this.add(e,c.out,r,s,i,a));break;case oe.NOP:a=this.add(e,c.out,r,s,i,a);break;case oe.CAPTURE:if(c.arg<this.ncap){const u=s[c.arg];s[c.arg]=r,this.add(e,c.out,r,s,i,null),s[c.arg]=u}else a=this.add(e,c.out,r,s,i,a);break;case oe.MATCH:case oe.RUNE:case oe.RUNE1:case oe.RUNE_ANY:case oe.RUNE_ANY_NOT_NL:a===null?a=this.alloc(c):a.inst=c,this.ncap>0&&a.cap!==s&&(a.cap=s.slice(0,this.ncap)),e.denseThreads[o]=a,a=null;break;default:throw new Error("unhandled")}return a}}class j9{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class Fn{static initTest(e){const t=Fn.compile(e),r=new Fn(t.expr,t.prog,t.numSubexp,t.longest);return r.cond=t.cond,r.prefix=t.prefix,r.prefixUTF8=t.prefixUTF8,r.prefixComplete=t.prefixComplete,r.prefixRune=t.prefixRune,r}static compile(e){return Fn.compileImpl(e,z.PERL,!1)}static compilePOSIX(e){return Fn.compileImpl(e,z.POSIX,!0)}static compileImpl(e,t,r){let s=Xl.parse(e,t);const i=s.maxCap();s=Ht.simplify(s);const a=ii.compileRegexp(s),o=new Fn(e,a,i,r),[c,u]=a.prefix();return o.prefixComplete=c,o.prefix=u,o.prefixUTF8=ae.stringToUtf8ByteArray(o.prefix),o.prefix.length>0&&(o.prefixRune=o.prefix.codePointAt(0)),o.namedGroups=s.namedGroups,o}static match(e,t){return Fn.compile(e).match(t)}constructor(e,t,r=0,s=0){this.expr=e,this.prog=t,this.numSubexp=r,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new j9}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let r=this.pooled.get();do r=this.pooled.get(),!t&&r&&(e=hs.fromMachine(e),t=!0),e.next!==r&&(e.next=r);while(!this.pooled.compareAndSet(r,e))}toString(){return this.expr}doExecute(e,t,r,s){let i=this.get(),a=!1;i?i.next!==null&&(i=hs.fromMachine(i),a=!0):(i=hs.fromRE2(this),a=!0),i.init(s);const o=i.match(e,t,r)?i.submatches():null;return this.put(i,a),o}match(e){return this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,0)!==null}matchWithGroup(e,t,r,s,i){return e instanceof or||(e=Ka.utf16(e)),this.matchMachineInput(e,t,r,s,i)}matchMachineInput(e,t,r,s,i){if(t>r)return[!1,null];const a=e.isUTF16Encoding()?Oe.fromUTF16(e.asCharSequence(),0,r):Oe.fromUTF8(e.asBytes(),0,r),o=this.doExecute(a,t,s,2*i);return o===null?[!1,null]:[!0,o]}matchUTF8(e){return this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,r){let s=0,i=0,a="";const o=Oe.fromUTF16(e);let c=0;for(;i<=e.length;){const u=this.doExecute(o,i,z.UNANCHORED,2);if(u===null||u.length===0)break;a+=e.substring(s,u[0]),(u[1]>s||u[0]===0)&&(a+=t(e.substring(u[0],u[1])),c++),s=u[1];const d=o.step(i)&7;if(i+d>u[1]?i+=d:i+1>u[1]?i++:i=u[1],c>=r)break}return a+=e.substring(s),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let r=new Array(t).fill(-1);for(let s=0;s<e.length;s++)r[s]=e[s];e=r}return e}allMatches(e,t,r=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let a=0,o=0,c=-1;for(;o<t&&a<=i;){const u=this.doExecute(e,a,z.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let d=!0;if(u[1]===a){u[0]===c&&(d=!1);const p=e.step(a);p<0?a=i+1:a+=p&7}else a=u[1];c=u[1],d&&(s.push(r(this.pad(u))),o++)}return s}findUTF8(e){const t=this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.slice(t[2*s],t[2*s+1]));return r}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const r=new Array(1+this.numSubexp).fill(null);for(let s=0;s<r.length;s++)2*s<t.length&&t[2*s]>=0&&(r[s]=e.substring(t[2*s],t[2*s+1]));return r}findSubmatchIndex(e){return this.pad(this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const r=this.allMatches(Oe.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return r.length===0?null:r}findAllUTF8Index(e,t){const r=this.allMatches(Oe.fromUTF8(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAll(e,t){const r=this.allMatches(Oe.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return r.length===0?null:r}findAllIndex(e,t){const r=this.allMatches(Oe.fromUTF16(e),t,s=>s.slice(0,2));return r.length===0?null:r}findAllUTF8Submatch(e,t){const r=this.allMatches(Oe.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.slice(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllUTF8SubmatchIndex(e,t){const r=this.allMatches(Oe.fromUTF8(e),t);return r.length===0?null:r}findAllSubmatch(e,t){const r=this.allMatches(Oe.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let a=0;a<i.length;a++)s[2*a]>=0&&(i[a]=e.substring(s[2*a],s[2*a+1]));return i});return r.length===0?null:r}findAllSubmatchIndex(e,t){const r=this.allMatches(Oe.fromUTF16(e),t);return r.length===0?null:r}}const lt=class lt{static quote(e){return ae.quoteMeta(e)}static compile(e,t=0){let r=e;if((t&lt.CASE_INSENSITIVE)!==0&&(r=`(?i)${r}`),(t&lt.DOTALL)!==0&&(r=`(?s)${r}`),(t&lt.MULTILINE)!==0&&(r=`(?m)${r}`),(t&-32)!==0)throw new M9("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let s=z.PERL;(t&lt.DISABLE_UNICODE_GROUPS)!==0&&(s&=-129);const i=new lt(e,t);return i.re2Input=Fn.compileImpl(r,s,(t&lt.LONGEST_MATCH)!==0),i}static matches(e,t){return lt.compile(e).matcher(t).matches()}static initTest(e,t,r){if(e==null)throw new Error("pattern is null");if(r==null)throw new Error("re2 is null");const s=new lt(e,t);return s.re2Input=r,s}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=Ka.utf8(e)),new $9(this,e)}split(e,t=0){const r=this.matcher(e),s=[];let i=0,a=0;for(;r.find();){if(a===0&&r.end()===0){a=r.end();continue}if(t>0&&s.length===t-1)break;if(a===r.start()){if(t===0){i+=1,a=r.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.start())),a=r.end()}if(t===0&&a!==r.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(r.substring(a,r.inputLength()))}return(t!==0||s.length===0)&&s.push(r.substring(a,r.inputLength())),s}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};v(lt,"CASE_INSENSITIVE",1),v(lt,"DOTALL",2),v(lt,"MULTILINE",4),v(lt,"DISABLE_UNICODE_GROUPS",8),v(lt,"LONGEST_MATCH",16);let _i=lt;/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let bs="12.15.0";function G9(n){bs=n}/**
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
 */const Ur=new fo("@firebase/firestore");function ns(){return Ur.logLevel}function G(n,...e){if(Ur.logLevel<=pe.DEBUG){const t=e.map(Vc);Ur.debug(`Firestore (${bs}): ${n}`,...t)}}function Cn(n,...e){if(Ur.logLevel<=pe.ERROR){const t=e.map(Vc);Ur.error(`Firestore (${bs}): ${n}`,...t)}}function Qt(n,...e){if(Ur.logLevel<=pe.WARN){const t=e.map(Vc);Ur.warn(`Firestore (${bs}): ${n}`,...t)}}function Vc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Vf(n,r,t)}function Vf(n,e,t){let r=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Cn(r),new Error(r)}function K(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Vf(e,s,r)}function ie(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Mf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class z9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ze.UNAUTHENTICATED)))}shutdown(){}}class W9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class K9{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tn,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},o=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>o(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?o(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tn)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Mf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class Y9{constructor(e,t,r){this.T=e,this.P=t,this.R=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class Q9{constructor(e,t,r){this.T=e,this.P=t,this.R=r}getToken(){return Promise.resolve(new Y9(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable((()=>t(Ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ed{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class X9{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ed(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ed(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function J9(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Mc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=J9(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function he(n,e){return n<e?-1:n>e?1:0}function Jl(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Cl(s)===Cl(i)?he(s,i):Cl(s)?1:-1}return he(n.length,e.length)}const Z9=55296,e8=57343;function Cl(n){const e=n.charCodeAt(0);return e>=Z9&&e<=e8}function fs(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const tn="__name__";class en{constructor(e,t,r){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&J(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=en.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return he(e.length,t.length)}static compareSegments(e,t){const r=en.isNumericId(e),s=en.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(e).compare(en.extractNumericId(t)):Jl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return er.fromString(e.substring(4,e.length-2))}}class ye extends en{construct(e,t,r){return new ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ye(t)}static emptyPath(){return new ye([])}}const t8=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends en{construct(e,t,r){return new qe(e,t,r)}static isValidIdentifier(e){return t8.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tn}static keyField(){return new qe([tn])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const o=e[s];if(o==="\\"){if(s+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else o==="`"?(a=!a,s++):o!=="."||a?(r+=o,s++):(i(),s++)}if(i(),a)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(t)}static emptyPath(){return new qe([])}}/**
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
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ye.fromString(e))}static fromName(e){return new Q(ye.fromString(e).popFirst(5))}static empty(){return new Q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ye(e.slice()))}}/**
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
 */function $f(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function n8(n,e,t,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function td(n){if(!Q.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nd(n){if(Q.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function zt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bo(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Bi(n,e){if(!Fi(n))throw new j(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const rd=-62135596800,sd=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*sd);return new Ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<rd)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sd}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Bi(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-rd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Me("string",Ee._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ee(0,0))}static max(){return new se(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vi=-1;function r8(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ee(t+1,0):new Ee(t,r));return new lr(s,Q.empty(),e)}function s8(n){return new lr(n.readTime,n.key,vi)}class lr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new lr(se.min(),Q.empty(),vi)}static max(){return new lr(se.max(),Q.empty(),vi)}}function i8(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:he(n.largestBatchId,e.largestBatchId))}/**
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
 */const a8="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class o8{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ts(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==a8)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,r)=>{t(e)}))}static reject(e){return new M(((t,r)=>{r(e)}))}static waitFor(e){return new M(((t,r)=>{let s=0,i=0,a=!1;e.forEach((o=>{++s,o.next((()=>{++i,a&&i===s&&t()}),(c=>r(c)))})),a=!0,i===s&&t()}))}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next((s=>s?M.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new M(((r,s)=>{const i=e.length,a=new Array(i);let o=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next((d=>{a[u]=d,++o,o===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new M(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function l8(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function As(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class To{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}To.ce=-1;/**
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
 */const $c=-1;function Ao(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function c8(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function u8(n){return typeof n=="string"}/**
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
 */const Uf="";function h8(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=id(e)),e=d8(n.get(t),e);return id(e)}function d8(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Uf:t+="";break;default:t+=i}}return t}function id(n){return n+Uf+""}/**
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
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new We(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class $e{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ad(this.data.getIterator())}getIteratorFrom(e){return new ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $e(this.comparator);return t.data=e,t}}class ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Gt([])}unionWith(e){let t=new $e(qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Gt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */function Ya(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function p8(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function Ff(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Bf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bf("Invalid base64 string: "+i):i}})(e);return new Ue(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ue(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const f8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=f8.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ur(n){return typeof n=="string"?Ue.fromBase64String(n):Ue.fromUint8Array(n)}/**
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
 */const qf="server_timestamp",Hf="__type__",jf="__previous_value__",Gf="__local_write_time__";function Io(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hf])==null?void 0:r.stringValue)===qf}function qi(n){const e=n.mapValue.fields[jf];return Io(e)?qi(e):e}function ms(n){const e=cr(n.mapValue.fields[Gf].timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class m8{constructor(e,t,r,s,i,a,o,c,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=p}}const Qa="(default)";class Ei{constructor(e,t){this.projectId=e,this.database=t||Qa}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database===Qa}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}function g8(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(n.options.projectId,e)}/**
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
 */const zf="__type__",y8="__max__",fa={mapValue:{}},Wf="__vector__",bi="value",gs={nullValue:"NULL_VALUE"},wt={booleanValue:!0},ze={booleanValue:!1};function Fe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Io(n)?4:_8(n)?9007199254740991:Xa(n)?10:11:J(28295,{value:n})}function Ft(n,e,t){if(n===e)return!0;const r=Fe(n);if(r!==Fe(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ms(n).isEqual(ms(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const o=cr(i.timestampValue),c=cr(a.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return ur(i.bytesValue).isEqual(ur(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return Se(i.geoPointValue.latitude)===Se(a.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a,o){if("integerValue"in i&&"integerValue"in a)return Se(i.integerValue)===Se(a.integerValue);let c,u;if("doubleValue"in i&&"doubleValue"in a)c=Se(i.doubleValue),u=Se(a.doubleValue);else{if(!(o!=null&&o.Ee))return!1;c=Se(i.integerValue??i.doubleValue),u=Se(a.integerValue??a.doubleValue)}return c===u?!!(o!=null&&o.he)||wi(c)===wi(u):!!(o===void 0||o.Te)&&isNaN(c)&&isNaN(u)})(n,e,t);case 9:return fs(n.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>Ft(s,i,t)));case 10:case 11:return(function(i,a,o){const c=i.mapValue.fields||{},u=a.mapValue.fields||{};if(Ya(c)!==Ya(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!Ft(c[d],u[d],o)))return!1;return!0})(n,e,t);default:return J(52216,{left:n})}}function Ti(n,e){return(n.values||[]).find((t=>Ft(t,e)))!==void 0}function Et(n,e){if(n===e)return 0;const t=Fe(n),r=Fe(e);if(t!==r)return he(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const o=Se(i.integerValue||i.doubleValue),c=Se(a.integerValue||a.doubleValue);return o<c?-1:o>c?1:o===c?0:isNaN(o)?isNaN(c)?0:-1:1})(n,e);case 3:return od(n.timestampValue,e.timestampValue);case 4:return od(ms(n),ms(e));case 5:return Jl(n.stringValue,e.stringValue);case 6:return(function(i,a){const o=ur(i),c=ur(a);return o.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const o=i.split("/"),c=a.split("/");for(let u=0;u<o.length&&u<c.length;u++){const d=he(o[u],c[u]);if(d!==0)return d}return he(o.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const o=he(Se(i.latitude),Se(a.latitude));return o!==0?o:he(Se(i.longitude),Se(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ld(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var y,b,R,O;const o=i.fields||{},c=a.fields||{},u=(y=o[bi])==null?void 0:y.arrayValue,d=(b=c[bi])==null?void 0:b.arrayValue,p=he(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((O=d==null?void 0:d.values)==null?void 0:O.length)||0);return p!==0?p:ld(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===fa.mapValue&&a===fa.mapValue)return 0;if(i===fa.mapValue)return 1;if(a===fa.mapValue)return-1;const o=i.fields||{},c=Object.keys(o),u=a.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Jl(c[p],d[p]);if(y!==0)return y;const b=Et(o[c[p]],u[d[p]]);if(b!==0)return b}return he(c.length,d.length)})(n.mapValue,e.mapValue);default:throw J(23264,{Pe:t})}}function od(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return he(n,e);const t=cr(n),r=cr(e),s=he(t.seconds,r.seconds);return s!==0?s:he(t.nanos,r.nanos)}function ld(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Et(t[s],r[s]);if(i!==void 0&&i!==0)return i}return he(t.length,r.length)}function ys(n){return Zl(n)}function Zl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=cr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ur(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Zl(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Zl(t.fields[a])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function Ra(n){switch(Fe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qi(n);return e?16+Ra(e):16;case 5:return 2*n.stringValue.length;case 6:return ur(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ra(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Wr(r.fields,((i,a)=>{s+=i.length+Ra(a)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function cd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function nn(n){return!!n&&"integerValue"in n}function Cr(n){return!!n&&"doubleValue"in n}function hr(n){return nn(n)||Cr(n)}function _s(n){return!!n&&"arrayValue"in n}function Pt(n){return!!n&&"nullValue"in n}function bt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function xr(n){return!!n&&"mapValue"in n}function Xa(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[zf])==null?void 0:r.stringValue)===Wf}function ec(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[bi])==null?void 0:t.arrayValue}function oi(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Wr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=oi(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=oi(n.arrayValue.values[t]);return e}return{...n}}function _8(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===y8}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!xr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(t)}setAll(e){let t=qe.emptyPath(),r={},s=[];e.forEach(((a,o)=>{if(!t.isImmediateParentOf(o)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=o.popLast()}a?r[o.lastSegment()]=oi(a):s.push(o.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());xr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];xr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Wr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new kt(oi(this.value))}}function Kf(n){const e=[];return Wr(n.fields,((t,r)=>{const s=new qe([t]);if(xr(r)){const i=Kf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Gt(e)}/**
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
 */function So(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(e)?"-0":e}}function Uc(n){return{integerValue:""+n}}function Fc(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||c8(e)?Uc(e):So(n,e)}/**
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
 */class Ro{constructor(){this._=void 0}}function v8(n,e,t){return n instanceof Ai?(function(s,i){const a={fields:{[Hf]:{stringValue:qf},[Gf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Io(i)&&(i=qi(i)),i&&(a.fields[jf]=i),{mapValue:a}})(t,e):n instanceof Ii?Qf(n,e):n instanceof Si?Xf(n,e):n instanceof Ri?(function(s,i){const a=Yf(s,i),o=eo(a)+eo(s.Re);return nn(a)&&nn(s.Re)?Uc(o):So(s.serializer,o)})(n,e):n instanceof Ja?(function(s,i){return ud(s,i,Math.min)})(n,e):n instanceof Za?(function(s,i){return ud(s,i,Math.max)})(n,e):void 0}function w8(n,e,t){return n instanceof Ii?Qf(n,e):n instanceof Si?Xf(n,e):t}function Yf(n,e){return n instanceof Ri?hr(e)?e:{integerValue:0}:null}class Ai extends Ro{}class Ii extends Ro{constructor(e){super(),this.elements=e}}function Qf(n,e){const t=Jf(e);for(const r of n.elements)t.some((s=>Ft(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Si extends Ro{constructor(e){super(),this.elements=e}}function Xf(n,e){let t=Jf(e);for(const r of n.elements)t=t.filter((s=>!Ft(s,r)));return{arrayValue:{values:t}}}class Bc extends Ro{constructor(e,t){super(),this.serializer=e,this.Re=t}}class Ri extends Bc{}class Ja extends Bc{}class Za extends Bc{}function ud(n,e,t){if(!hr(e))return n.Re;const r=t(eo(e),eo(n.Re));return nn(e)&&nn(n.Re)?Uc(r):So(n.serializer,r)}function eo(n){return Se(n.integerValue||n.doubleValue)}function Jf(n){return _s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class E8{constructor(e,t){this.field=e,this.transform=t}}function b8(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Ii&&s instanceof Ii||r instanceof Si&&s instanceof Si?fs(r.elements,s.elements,Ft):r instanceof Ri&&s instanceof Ri||r instanceof Ja&&s instanceof Ja||r instanceof Za&&s instanceof Za?Ft(r.Re,s.Re):r instanceof Ai&&s instanceof Ai})(n.transform,e.transform)}class T8{constructor(e,t){this.version=e,this.transformResults=t}}class ln{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ca(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Co{}function Zf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tm(n.key,ln.none()):new Hi(n.key,n.data,ln.none());{const t=n.data,r=kt.empty();let s=new $e(qe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Kr(n.key,r,new Gt(s.toArray()),ln.none())}}function A8(n,e,t){n instanceof Hi?(function(s,i,a){const o=s.value.clone(),c=dd(s.fieldTransforms,i,a.transformResults);o.setAll(c),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()})(n,e,t):n instanceof Kr?(function(s,i,a){if(!Ca(s.precondition,i))return void i.convertToUnknownDocument(a.version);const o=dd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(em(s)),c.setAll(o),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function li(n,e,t,r){return n instanceof Hi?(function(i,a,o,c){if(!Ca(i.precondition,a))return o;const u=i.value.clone(),d=pd(i.fieldTransforms,c,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null})(n,e,t,r):n instanceof Kr?(function(i,a,o,c){if(!Ca(i.precondition,a))return o;const u=pd(i.fieldTransforms,c,a),d=a.data;return d.setAll(em(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(i,a,o){return Ca(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o})(n,e,t)}function I8(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Yf(r.transform,s||null);i!=null&&(t===null&&(t=kt.empty()),t.set(r.field,i))}return t||null}function hd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fs(r,s,((i,a)=>b8(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hi extends Co{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kr extends Co{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function em(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function dd(n,e,t){const r=new Map;K(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,o=e.data.field(i.field);r.set(i.field,w8(a,o,t[s]))}return r}function pd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,v8(i,a,e))}return r}class tm extends Co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class S8 extends Co{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class to{constructor(e,t){this.position=e,this.inclusive=t}}function fd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),t.key):r=Et(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class nm{}class Ve extends nm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new C8(e,t,r):t==="array-contains"?new P8(e,r):t==="in"?new N8(e,r):t==="not-in"?new O8(e,r):t==="array-contains-any"?new L8(e,r):new Ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new x8(e,r):new k8(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Et(t,this.value)):t!==null&&Fe(this.value)===Fe(t)&&this.matchesComparison(Et(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends nm{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Xt(e,t)}matches(e){return rm(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function rm(n){return n.op==="and"}function sm(n){return R8(n)&&rm(n)}function R8(n){for(const e of n.filters)if(e instanceof Xt)return!1;return!0}function tc(n){if(n instanceof Ve)return n.field.canonicalString()+n.op.toString()+ys(n.value);if(sm(n))return n.filters.map((e=>tc(e))).join(",");{const e=n.filters.map((t=>tc(t))).join(",");return`${n.op}(${e})`}}function im(n,e){return n instanceof Ve?(function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&Ft(r.value,s.value)})(n,e):n instanceof Xt?(function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,o)=>i&&im(a,s.filters[o])),!0):!1})(n,e):void J(19439)}function am(n){return n instanceof Ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${ys(t.value)}`})(n):n instanceof Xt?(function(t){return t.op.toString()+" {"+t.getFilters().map(am).join(" ,")+"}"})(n):"Filter"}class C8 extends Ve{constructor(e,t,r){super(e,t,r),this.key=Q.fromName(r.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class x8 extends Ve{constructor(e,t){super(e,"in",t),this.keys=om("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class k8 extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=om("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function om(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>Q.fromName(r.referenceValue)))}class P8 extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _s(t)&&Ti(t.arrayValue,this.value)}}class N8 extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ti(this.value.arrayValue,t)}}class O8 extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ti(this.value.arrayValue,t)}}class L8 extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_s(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Ti(this.value.arrayValue,r)))}}/**
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
 */class Ci{constructor(e,t="asc"){this.field=e,this.dir=t}}function D8(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class et{constructor(e,t,r,s,i,a,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=o}static newInvalidDocument(e){return new et(e,0,se.min(),se.min(),se.min(),kt.empty(),0)}static newFoundDocument(e,t,r,s){return new et(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new et(e,2,t,se.min(),se.min(),kt.empty(),0)}static newUnknownDocument(e,t){return new et(e,3,t,se.min(),se.min(),kt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class V8{constructor(e,t=null,r=[],s=[],i=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=o,this.de=null}}function gd(n,e=null,t=[],r=[],s=null,i=null,a=null){return new V8(n,e,t,r,s,i,a)}function lm(n){const e=ie(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>tc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ao(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ys(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ys(r))).join(",")),e.de=t}return e.de}function cm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!D8(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!im(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!md(n.startAt,e.startAt)&&md(n.endAt,e.endAt)}function Sr(n){return!!n.isCorePipeline}function um(n){return!!n.path&&Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Is{constructor(e,t=null,r=[],s=[],i=null,a="F",o=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=o,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function M8(n,e,t,r,s,i,a,o){return new Is(n,e,t,r,s,i,a,o)}function xo(n){return new Is(n)}function yd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $8(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function hm(n){return n.collectionGroup!==null}function ci(n){const e=ie(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new $e(qe.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(o=o.add(u.field))}))})),o})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new Ci(i,r))})),t.has(qe.keyField().canonicalString())||e.fe.push(new Ci(qe.keyField(),r))}return e.fe}function cn(n){const e=ie(n);return e.me||(e.me=U8(e,ci(n))),e.me}function U8(n,e){if(n.limitType==="F")return gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ci(s.field,i)}));const t=n.endAt?new to(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new to(n.startAt.position,n.startAt.inclusive):null;return gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function nc(n,e){const t=n.filters.concat([e]);return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function F8(n,e){const t=n.explicitOrderBy.concat([e]);return new Is(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function no(n,e,t){return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function B8(n,e){return cm(cn(n),cn(e))&&n.limitType===e.limitType}function ui(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>am(s))).join(", ")}]`),Ao(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ys(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ys(s))).join(",")),`Target(${r})`})(cn(n))}; limitType=${n.limitType})`}function ko(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,o,c){const u=fd(a,o,c);return a.inclusive?u<=0:u<0})(r.startAt,ci(r),s)||r.endAt&&!(function(a,o,c){const u=fd(a,o,c);return a.inclusive?u>=0:u>0})(r.endAt,ci(r),s))})(n,e)}function qc(n){return(e,t)=>{let r=!1;for(const s of ci(n)){const i=q8(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function q8(n,e,t){const r=n.field.isKeyField()?Q.comparator(e.key,t.key):(function(i,a,o){const c=a.data.field(i),u=o.data.field(i);return c!==null&&u!==null?Et(c,u):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:n.dir})}}/**
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
 */class H8{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var De,me;function j8(n){switch(n){case V.OK:return J(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return J(15467,{code:n})}}function dm(n){if(n===void 0)return Cn("GRPC error has no .code"),V.UNKNOWN;switch(n){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(me=De||(De={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Yr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ff(this.inner)}size(){return this.innerSize}}/**
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
 */const G8=new Ae(Q.comparator);function gt(){return G8}const pm=new Ae(Q.comparator);function rs(...n){let e=pm;for(const t of n)e=e.insert(t.key,t);return e}function fm(n){let e=pm;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Yn(){return hi()}function mm(){return hi()}function hi(){return new Yr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const z8=new Ae(Q.comparator),W8=new $e(Q.comparator);function ce(...n){let e=W8;for(const t of n)e=e.add(t);return e}const K8=new $e(he);function Y8(){return K8}/**
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
 */function Q8(){return new TextEncoder}/**
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
 */const X8=new er([4294967295,4294967295],0);function _d(n){const e=Q8().encode(n),t=new xf;return t.update(e),new Uint8Array(t.digest())}function vd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new er([t,r],0),new er([s,i],0)]}class Hc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ti(`Invalid padding: ${t}`);if(r<0)throw new ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ti(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ti(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=er.fromNumber(this.ge)}we(e,t,r){let s=e.add(t.multiply(er.fromNumber(r)));return s.compare(X8)===1&&(s=new er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=_d(e),[r,s]=vd(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.be(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Hc(i,s,t);return r.forEach((o=>a.insert(o))),a}insert(e){if(this.ge===0)return;const t=_d(e),[r,s]=vd(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.ve(a)}}ve(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ji{constructor(e,t,r,s,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Gi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ji(se.min(),s,new Ae(he),gt(),gt(),ce())}}class Gi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Gi(r,t,ce(),ce(),ce())}}/**
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
 */class xa{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class gm{constructor(e,t){this.targetId=e,this.xe=t}}class ym{constructor(e,t,r=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class wd{constructor(e){this.targetId=e,this.Ce=0,this.Fe=Ed(),this.Oe=Ue.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=ce(),t=ce(),r=ce();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:J(38017,{changeType:i})}})),new Gi(this.Oe,this.Me,e,t,r)}qe(){this.Ne=!1,this.Fe=Ed()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,K(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Ks="WatchChangeAggregator";class J8{constructor(e){this.ze=e,this.je=new Map,this.He=gt(),this.Je=ma(),this.Ye=gt(),this.Ze=ma(),this.Xe=new Ae(he)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,(t=>{const r=this.je.get(t);if(r)switch(e.state){case 0:this.it(t)&&r.Ue(e.resumeToken);break;case 1:r.Qe(),r.Le||r.qe(),r.Ue(e.resumeToken);break;case 2:r.Qe(),r.Le||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.Ue(e.resumeToken));break;default:J(56790,{state:e.state})}else G(Ks,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach(((r,s)=>{this.it(s)&&t(s)}))}_t(e){var t;return Sr(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:um(e)}ot(e){const t=e.targetId,r=e.xe.count,s=this.ut(t);if(s){const i=s.target;if(this._t(i))if(r===0){const a=new Q(Sr(i)?ye.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(t,a,et.newNoDocument(a,se.min()))}else K(r===1,20013,"Single document existence filter with count: "+r);else{const a=this.ct(t);if(a!==r){const o=this.lt(e),c=o?this.Et(o,e,a):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,u)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,o;try{a=ur(r).toUint8Array()}catch(c){if(c instanceof Bf)return Qt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{o=new Hc(a,s,i)}catch(c){return Qt(c instanceof ti?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return o.ge===0?null:o}Et(e,t,r){return t.xe.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.ze.Tt(),o=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(o)||(this.nt(t,i,null),s++)})),s}Rt(e){const t=new Map;this.je.forEach(((i,a)=>{const o=this.ut(a);if(o){if(i.current&&this._t(o.target)){const c=Sr(o.target)?ye.fromString(o.target.getPipelineDocuments()[0]):o.target.path,u=new Q(c);this.It(u).has(a)||this.At(a,u)||this.nt(a,u,et.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let r=ce();this.Ze.forEach(((i,a)=>{let o=!0;a.forEachWhile((c=>{const u=this.ut(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)})),o&&(r=r.add(i))})),this.He.forEach(((i,a)=>a.setReadTime(e))),this.Ye.forEach(((i,a)=>a.setReadTime(e)));const s=new ji(e,t,this.Xe,this.He,this.Ye,r);return this.He=gt(),this.Je=ma(),this.Ye=gt(),this.Ze=ma(),this.Xe=new Ae(he),s}tt(e,t){const r=this.je.get(e);if(!r||!this.it(e))return void G(Ks,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.At(e,t.key)?2:0;r.$e(t.key,s),Sr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,r){const s=this.je.get(e);s&&this.it(e)?(this.At(e,t)?s.$e(t,1):s.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),r&&(Sr(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,r):this.He=this.He.insert(t,r))):G(Ks,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const r=t.ke();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}We(e){let t=this.je.get(e);t||(G(Ks,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new wd(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new $e(he),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new $e(he),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||G(Ks,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new wd(e)),this.ze.getRemoteKeysForTarget(e).forEach((t=>{this.nt(e,t,null)}))}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ma(){return new Ae(Q.comparator)}function Ed(){return new Ae(Q.comparator)}const Z8={asc:"ASCENDING",desc:"DESCENDING"},ey={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ty={and:"AND",or:"OR"};class ny{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function rc(n,e){return n.useProto3Json||Ao(e)?e:{value:e}}function ro(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jc(n){const e=cr(n);return new Ee(e.seconds,e.nanos)}function _m(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ka(n,e){return ro(n,e.toTimestamp())}function un(n){return K(!!n,49232),se.fromTimestamp(jc(n))}function Gc(n,e){return sc(n,e).canonicalString()}function sc(n,e){const t=(function(s){return new ye(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function vm(n){const e=ye.fromString(n);return K(Am(e),10190,{key:e.toString()}),e}function so(n,e){return Gc(n.databaseId,e.path)}function xl(n,e){const t=vm(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(Em(t))}function wm(n,e){return Gc(n.databaseId,e)}function ry(n){const e=vm(n);return e.length===4?ye.emptyPath():Em(e)}function ic(n){return new ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Em(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bd(n,e,t){return{name:so(n,e),fields:t.value.mapValue.fields}}function sy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(K(d===void 0||typeof d=="string",58123),Ue.fromBase64String(d||"")):(K(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ue.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&(function(u){const d=u.code===void 0?V.UNKNOWN:dm(u.code);return new j(d,u.message||"")})(a);t=new ym(r,s,i,o||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xl(n,r.document.name),i=un(r.document.updateTime),a=r.document.createTime?un(r.document.createTime):se.min(),o=new kt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(s,i,a,o),u=r.targetIds||[],d=r.removedTargetIds||[];t=new xa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xl(n,r.document),i=r.readTime?un(r.readTime):se.min(),a=et.newNoDocument(s,i),o=r.removedTargetIds||[];t=new xa([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xl(n,r.document),i=r.removedTargetIds||[];t=new xa([],i,s,null)}else{if(!("filter"in e))return J(11601,{ft:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new H8(s,i),o=r.targetId;t=new gm(o,a)}}return t}function iy(n,e){let t;if(e instanceof Hi)t={update:bd(n,e.key,e.value)};else if(e instanceof tm)t={delete:so(n,e.key)};else if(e instanceof Kr)t={update:bd(n,e.key,e.data),updateMask:my(e.fieldMask)};else{if(!(e instanceof S8))return J(16599,{gt:e.type});t={verify:so(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const o=a.transform;if(o instanceof Ai)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ii)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Si)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ri)return{fieldPath:a.field.canonicalString(),increment:o.Re};if(o instanceof Ja)return{fieldPath:a.field.canonicalString(),minimum:o.Re};if(o instanceof Za)return{fieldPath:a.field.canonicalString(),maximum:o.Re};throw J(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ka(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)})(n,e.precondition)),t}function ay(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?un(s.updateTime):un(i);return a.isEqual(se.min())&&(a=un(i)),new T8(a,s.transformResults||[])})(t,e)))):[]}function oy(n,e){return{documents:[wm(n,e.path)]}}function ly(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=wm(n,s);const i=(function(u){if(u.length!==0)return Tm(Xt.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(u){if(u.length!==0)return u.map((d=>(function(y){return{field:ss(y.field),direction:dy(y.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const o=rc(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{yt:t,parent:s}}function cy(n){let e=ry(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const y=bm(p);return y instanceof Xt&&sm(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((y=>(function(R){return new Ci(is(R.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(y)))})(t.orderBy));let o=null;t.limit&&(o=(function(p){let y;return y=typeof p=="object"?p.value:p,Ao(y)?null:y})(t.limit));let c=null;t.startAt&&(c=(function(p){const y=!!p.before,b=p.values||[];return new to(b,y)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const y=!p.before,b=p.values||[];return new to(b,y)})(t.endAt)),M8(e,s,a,i,o,"F",c,u)}function uy(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hy(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function bm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=is(t.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(t.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=is(t.unaryFilter.field);return Ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ve.create(is(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Xt.create(t.compositeFilter.filters.map((r=>bm(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function dy(n){return Z8[n]}function py(n){return ey[n]}function fy(n){return ty[n]}function ss(n){return{fieldPath:n.canonicalString()}}function is(n){return qe.fromServerFormat(n.fieldPath)}function Tm(n){return n instanceof Ve?(function(t){if(t.op==="=="){if(bt(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NAN"}};if(Pt(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bt(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NOT_NAN"}};if(Pt(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(t.field),op:py(t.op),value:t.value}}})(n):n instanceof Xt?(function(t){const r=t.getFilters().map((s=>Tm(s)));return r.length===1?r[0]:{compositeFilter:{op:fy(t.op),filters:r}}})(n):J(54877,{filter:n})}function my(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Am(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Im(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function xi(n,e){const t={fields:{}};return e.forEach(((r,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=r._toProto(n)})),{mapValue:t}}function Sm(n){return{stringValue:n}}/**
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
 */function Po(n){return new ny(n,!0)}/**
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
 */class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(Ue.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vt(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Bi(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Me("string",Vt._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class zc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function gy(){return new zc(tn)}/**
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
 */class Wc{constructor(e){this._methodName=e}}/**
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
 */class hn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Bi(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}function Rm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Me("string",hn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};class yy{bt(e){}shutdown(){}}/**
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
 */const Td="ConnectivityMonitor";class Ad{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){G(Td,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){G(Td,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ga=null;function ac(){return ga===null?ga=(function(){return 268435456+Math.round(2147483648*Math.random())})():ga++,"0x"+ga.toString(16)}/**
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
 */const kl="RestConnection",_y={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vy{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${r}/databases/${s}`,this.Lt=this.databaseId.database===Qa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Bt(e,t,r,s,i){const a=ac(),o=this.Ut(e,t.toUriEncodedString());G(kl,`Sending RPC '${e}' ${a}:`,o,r);const c={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(c,s,i);const{host:u}=new URL(o),d=Gr(u);return this.qt(e,o,c,r,d).then((p=>(G(kl,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Qt(kl,`RPC '${e}' ${a} failed with error: `,p,"url: ",o,"request:",r),p}))}$t(e,t,r,s,i,a){return this.Bt(e,t,r,s,i)}kt(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Ut(e,t){const r=_y[e];let s=`${this.Mt}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class wy{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const Qe="WebChannelConnection",Ys=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ds extends vy{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!ds.sn){const e=Of();Ys(e,Nf.STAT_EVENT,(t=>{t.stat===Ql.PROXY?G(Qe,"STAT_EVENT: detected buffering proxy"):t.stat===Ql.NOPROXY&&G(Qe,"STAT_EVENT: detected no buffering proxy")})),ds.sn=!0}}qt(e,t,r,s,i){const a=ac();return new Promise(((o,c)=>{const u=new kf;u.setWithCredentials(!0),u.listenOnce(Pf.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Sa.NO_ERROR:const p=u.getResponseJson();G(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),o(p);break;case Sa.TIMEOUT:G(Qe,`RPC '${e}' ${a} timed out`),c(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const y=u.getStatus();if(G(Qe,`RPC '${e}' ${a} failed with status:`,y,"response text:",u.getResponseText()),y>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const R=b==null?void 0:b.error;if(R&&R.status&&R.message){const O=(function(F){const $=F.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf($)>=0?$:V.UNKNOWN})(R.status);c(new j(O,R.message))}else c(new j(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new j(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{_n:e,streamId:a,an:u.getLastErrorCode(),un:u.getLastError()})}}finally{G(Qe,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);G(Qe,`RPC '${e}' ${a} sending request:`,s),u.send(t,"POST",d,r,15)}))}cn(e,t,r){const s=ac(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(o.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(o.useFetchStreams=!0),this.kt(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;const u=i.join("");G(Qe,`Creating RPC '${e}' stream ${s}: ${u}`,o);const d=a.createWebChannel(u,o);this.En(d);let p=!1,y=!1;const b=new wy({Kt:R=>{y?G(Qe,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(p||(G(Qe,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),G(Qe,`RPC '${e}' stream ${s} sending:`,R),d.send(R))},Wt:()=>d.close()});return Ys(d,ei.EventType.OPEN,(()=>{y||(G(Qe,`RPC '${e}' stream ${s} transport opened.`),b.Zt())})),Ys(d,ei.EventType.CLOSE,(()=>{y||(y=!0,G(Qe,`RPC '${e}' stream ${s} transport closed`),b.en(),this.hn(d))})),Ys(d,ei.EventType.ERROR,(R=>{y||(y=!0,Qt(Qe,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),b.en(new j(V.UNAVAILABLE,"The operation could not be completed")))})),Ys(d,ei.EventType.MESSAGE,(R=>{var O;if(!y){const k=R.data[0];K(!!k,16349);const F=k,$=(F==null?void 0:F.error)||((O=F[0])==null?void 0:O.error);if($){G(Qe,`RPC '${e}' stream ${s} received error:`,$);const U=$.status;let q=(function(S){const w=De[S];if(w!==void 0)return dm(w)})(U),W=$.message;U==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&Qt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),q===void 0&&(q=V.INTERNAL,W="Unknown error status: "+U+" with message "+$.message),y=!0,b.en(new j(q,W)),d.close()}else G(Qe,`RPC '${e}' stream ${s} received:`,k),b.tn(k)}})),ds.rn(),setTimeout((()=>{b.Xt()}),0),b}terminate(){this.nn.forEach((e=>e.close())),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter((t=>t===e))}kt(e,t,r){super.kt(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lf()}}/**
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
 */function Ey(n){return new ds(n)}ds.sn=!1;class Cm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=r,this.Rn=s,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),r=Math.max(0,Date.now()-this.dn),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,s,(()=>(this.dn=Date.now(),e()))),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const Id="PersistentStream";class xm{constructor(e,t,r,s,i,a,o,c){this.Tn=e,this.yn=r,this.wn=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=c,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Cm(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,(()=>this.Ln())))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Cn(t.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.bn===t&&this.Kn(r,s)}),(r=>{e((()=>{const s=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Wn(s)}))}))}Kn(e,t){const r=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt((()=>{r((()=>this.listener.Qt()))})),this.stream.zt((()=>{r((()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,(()=>(this.Fn()&&(this.state=3),Promise.resolve()))),this.listener.zt())))})),this.stream.Ht((s=>{r((()=>this.Wn(s)))})),this.stream.onMessage((s=>{r((()=>++this.Dn==1?this.Gn(s):this.onNext(s)))}))}On(){this.state=5,this.xn.mn((async()=>{this.state=0,this.start()}))}Wn(e){return G(Id,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget((()=>this.bn===e?t():(G(Id,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class by extends xm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=sy(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?un(a.readTime):se.min()})(e);return this.listener.zn(t,r)}jn(e){const t={};t.database=ic(this.serializer),t.addTarget=(function(i,a){let o;const c=a.target;if(o=Sr(c)?{pipelineQuery:hy(i,c)}:um(c)?{documents:oy(i,c)}:{query:ly(i,c).yt},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=_m(i,a.resumeToken);const u=rc(i,a.expectedCount);u!==null&&(o.expectedCount=u)}else if(a.snapshotVersion.compareTo(se.min())>0){o.readTime=ro(i,a.snapshotVersion.toTimestamp());const u=rc(i,a.expectedCount);u!==null&&(o.expectedCount=u)}return o})(this.serializer,e);const r=uy(this.serializer,e);r&&(t.labels=r),this.Bn(t)}Hn(e){const t={};t.database=ic(this.serializer),t.removeTarget=e,this.Bn(t)}}class Ty extends xm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=ay(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.Xn(r,t)}er(){const e={};e.database=ic(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>iy(this.serializer,r)))};this.Bn(t)}}/**
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
 */class Ay{}class Iy extends Ay{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.tr=!1}nr(){if(this.tr)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,r,s){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Bt(e,sc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(V.UNKNOWN,i.toString())}))}$t(e,t,r,s,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,o])=>this.connection.$t(e,sc(t,r),s,a,o,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(V.UNKNOWN,a.toString())}))}terminate(){this.tr=!0,this.connection.terminate()}}function Sy(n,e,t,r){return new Iy(n,e,t,r)}/**
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
 */const Ry="ComponentProvider",Sd=new Map;function Cy(n,e,t,r,s){return new m8(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Rm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Rd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},km=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(km,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
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
 */const Cd="LruGarbageCollector",xy=1048576;function xd([n,e],[t,r]){const s=he(n,t);return s===0?he(e,r):s}class ky{constructor(e){this.rr=e,this.buffer=new $e(xd),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Py{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){G(Cd,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){As(t)?G(Cd,"Ignoring IndexedDB error during garbage collection: ",t):await Ts(t)}await this.ur(3e5)}))}}class Ny{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(To.ce);const r=new ky(t);return this.cr.forEachTarget(e,(s=>r._r(s.sequenceNumber))).next((()=>this.cr.Er(e,(s=>r._r(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.cr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Rd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rd):this.hr(e,t)))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let r,s,i,a,o,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,o=Date.now(),this.removeTargets(e,r,t)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),ns()<=pe.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(o-a)+`ms
	Removed ${i} targets in `+(c-o)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Oy(n,e){return new Ny(n,e)}/**
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
 */const Pm="firestore.googleapis.com",kd=!0;class Pd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pm,this.ssl=kd}else this.host=e.host,this.ssl=e.ssl??kd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=km;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xy)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n8("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Rm(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class No{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new z9;switch(r.type){case"firstParty":return new Q9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Sd.get(t);r&&(G(Ry,"Removing Datastore"),Sd.delete(t),r.terminate())})(this),Promise.resolve()}}function Ly(n,e,t,r={}){var u;n=zt(n,No);const s=Gr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},o=`${e}:${t}`;s&&wc(`https://${o}`),i.host!==Pm&&i.host!==o&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:o,ssl:s,emulatorOptions:r};if(!ar(c,a)&&(n._setSettings(c),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Ze.MOCK_USER;else{d=_p(r.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(y)}n._authCredentials=new W9(new Mf(d,p))}}/**
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
 */class Nn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nn(this.firestore,e,this._query)}}class Ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}toJSON(){return{type:Ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Bi(t,Ce._jsonSchema))return new Ce(e,r||null,new Q(ye.fromString(t.referencePath)))}}Ce._jsonSchemaVersion="firestore/documentReference/1.0",Ce._jsonSchema={type:Me("string",Ce._jsonSchemaVersion),referencePath:Me("string")};class tr extends Nn{constructor(e,t,r){super(e,t,xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new Q(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function nr(n,e,...t){if(n=Te(n),$f("collection","path",e),n instanceof No){const r=ye.fromString(e,...t);return nd(r),new tr(n,null,r)}{if(!(n instanceof Ce||n instanceof tr))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return nd(r),new tr(n.firestore,null,r)}}function An(n,e,...t){if(n=Te(n),arguments.length===1&&(e=Mc.newId()),$f("doc","path",e),n instanceof No){const r=ye.fromString(e,...t);return td(r),new Ce(n,null,new Q(r))}{if(!(n instanceof Ce||n instanceof tr))throw new j(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return td(r),new Ce(n.firestore,n instanceof tr?n.converter:null,new Q(r))}}/**
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
 */class vt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:vt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Bi(e,vt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new vt(e.vectorValues);throw new j(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}vt._jsonSchemaVersion="firestore/vectorValue/1.0",vt._jsonSchema={type:Me("string",vt._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const Dy=/^__.*__$/;class Vy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Kr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hi(e,this.data,t,this.fieldTransforms)}}function Nm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:n})}}class Kc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Kc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return io(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Nm(this.dataSource)&&Dy.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class My{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Po(e)}createContext(e,t,r,s=!1){return new Kc({dataSource:e,methodName:t,targetDoc:r,path:qe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yc(n){const e=n._freezeSettings(),t=Po(n._databaseId);return new My(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Om(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);Vm("Data must be an object, but it was:",a,r);const o=Lm(r,a);let c,u;if(i.merge)c=new Gt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=Ss(e,p,t);if(!a.contains(y))throw new j(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);By(d,y)||d.push(y)}c=new Gt(d),u=a.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=a.fieldTransforms;return new Vy(new kt(o),c,u)}class Qc extends Wc{_toFieldTransform(e){return new E8(e.path,new Ai)}isEqual(e){return e instanceof Qc}}function $y(n,e,t,r=!1){return vs(t,n.createContext(r?4:3,e))}function vs(n,e,t){if(Dm(n=Te(n)))return Vm("Unsupported field value:",e,n),Lm(n,e);if(n instanceof Wc)return(function(s,i){if(!Nm(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const a=s._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const a=[];let o=0;for(const c of s){let u=vs(c,i.childContextForArray(o));u==null&&(u={nullValue:"NULL_VALUE"}),a.push(u),o++}return{arrayValue:{values:a}}})(n,e)}return(function(s,i,a){if((s=Te(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Fc(i.serializer,s,a);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const o=Ee.fromDate(s);return{timestampValue:ro(i.serializer,o)}}if(s instanceof Ee){const o=new Ee(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ro(i.serializer,o)}}if(s instanceof hn)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Vt)return{bytesValue:_m(i.serializer,s._byteString)};if(s instanceof Ce){const o=i.databaseId,c=s.firestore._databaseId;if(!c.isEqual(o))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Gc(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof vt)return(function(c,u){const d=c instanceof vt?c.toArray():c;return{mapValue:{fields:{[zf]:{stringValue:Wf},[bi]:{arrayValue:{values:d.map((y=>{if(typeof y!="number")throw u.createError("VectorValues must only contain numeric values.");return So(u.serializer,y)}))}}}}}})(s,i);if(Im(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${bo(s)}`)})(n,e,t)}function Lm(n,e){const t={};return Ff(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(n,((r,s)=>{const i=vs(s,e.childContextForField(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Dm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof hn||n instanceof Vt||n instanceof Ce||n instanceof Wc||n instanceof vt||Im(n))}function Vm(n,e,t){if(!Dm(t)||!Fi(t)){const r=bo(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Ss(n,e,t){if((e=Te(e))instanceof zc)return e._internalPath;if(typeof e=="string")return Fy(n,e);throw io("Field path arguments must be of type string or ",n,!1,void 0,t)}const Uy=new RegExp("[~\\*/\\[\\]]");function Fy(n,e,t){if(e.search(Uy)>=0)throw io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new zc(...e.split("."))._internalPath}catch{throw io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function io(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new j(V.INVALID_ARGUMENT,o+n+c)}function By(n,e){return n.some((t=>t.isEqual(e)))}function Mm(n){return typeof n._readUserData=="function"}/**
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
 */class rt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const r=kt.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const a=e[s];let o;i.nestedOptions&&Fi(a)?o={mapValue:{fields:new rt(i.nestedOptions).getOptionsProto(t,a)}}:a&&(o=vs(a,t)??void 0),o&&r.set(qe.fromServerFormat(i.serverName),o)}}return r}getOptionsProto(e,t,r){const s=this._getKnownOptions(t,e);if(r){const i=new Map(p8(r,((a,o)=>[qe.fromServerFormat(o),a!==void 0?vs(a,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
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
 */function qy(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Fi(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function gn(){return new Qc("serverTimestamp")}function Hy(n){return new vt(n)}/**
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
 */function B(n){let e;return n instanceof Qr?n:(e=Fi(n)?Ky(n):n instanceof Array?Yy(n):$m(n,void 0),e)}function Pl(n){if(n instanceof Qr)return n;if(n instanceof vt)return ki(n);if(Array.isArray(n))return ki(Hy(n));throw new Error("Unsupported value: "+typeof n)}function Xc(n){return u8(n)?Pa(n):B(n)}class Qr{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,B(e)],"add")}asBoolean(){if(this instanceof dr)return this;if(this instanceof Cs)return new Fm(this);if(this instanceof Rs)return new Wy(this);if(this instanceof L)return new Um(this);throw new j("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,B(e)],"subtract")}multiply(e){return new L("multiply",[this,B(e)],"multiply")}divide(e){return new L("divide",[this,B(e)],"divide")}mod(e){return new L("mod",[this,B(e)],"mod")}equal(e){return new L("equal",[this,B(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,B(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,B(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,B(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,B(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,B(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const r=[e,...t].map((s=>B(s)));return new L("array_concat",[this,...r],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,B(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new ni(e.map(B),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new ni(e.map(B),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new ni(e.map(B),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new ni(e.map(B),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,B(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,B(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,B(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,B(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,B(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,B(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,B(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,B(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(B(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(B(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(B(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,ki(e)],"isType").asBoolean()}stringConcat(e,...t){const r=[e,...t].map(B);return new L("string_concat",[this,...r],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,B(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,B(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,B(e),B(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,B(e),B(t)],"stringReplaceOne")}concat(e,...t){const r=[e,...t].map(B);return new L("concat",[this,...r],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,B(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,B(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,r){return new L("array_transform",[this,B(e),B(t),r],"arrayTransformWithIndex")}arraySlice(e,t){const r=[this,B(e)];return t!==void 0&&r.push(B(t)),new L("array_slice",r,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,B(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,B(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,B(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,B(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,B(e),B("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,B(e),B("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,B(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,ki(e)],"mapGet")}mapSet(e,t,...r){const s=[this,B(e),B(t),...r.map(B)];return new L("map_set",s,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,B(e)],"get_field")}count(){return Rt._create("count",[this],"count")}sum(){return Rt._create("sum",[this],"sum")}average(){return Rt._create("average",[this],"average")}minimum(){return Rt._create("minimum",[this],"minimum")}maximum(){return Rt._create("maximum",[this],"maximum")}first(){return Rt._create("first",[this],"first")}last(){return Rt._create("last",[this],"last")}arrayAgg(){return Rt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Rt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Rt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const r=[e,...t];return new L("maximum",[this,...r.map(B)],"logicalMaximum")}logicalMinimum(e,...t){const r=[e,...t];return new L("minimum",[this,...r.map(B)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,Pl(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,Pl(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,Pl(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,B(e),B(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,B(e),B(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,Xc(e),B(t)],"timestampDiff")}timestampExtract(e,t){const r=[this,B(e)];return t&&r.push(B(t)),new L("timestamp_extract",r,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const r=B(e);return new L("substring",t===void 0?[this,r]:[this,r,B(t)],"substring")}arrayGet(e){return new L("array_get",[this,B(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,B(e)],"ifError");return e instanceof dr?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,B(e)],"mapRemove")}mapMerge(e,...t){const r=B(e),s=t.map(B);return new L("map_merge",[this,r,...s],"mapMerge")}pow(e){return new L("pow",[this,B(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,B(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,B(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,B(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,B(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,B(e),...t.map(B)],"coalesce")}join(e){return new L("join",[this,B(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,B(e)])}timestampTruncate(e,t){const r=[this,B(e)];return t&&r.push(B(t)),new L("timestamp_trunc",r)}ascending(){return Qy(this)}descending(){return Xy(this)}as(e){return new Gy(this,e,"as")}}class Rt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,r){const s=new Rt(e,t);return s._methodName=r,s}as(e){return new jy(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class jy{constructor(e,t,r){this.aggregate=e,this.alias=t,this._methodName=r}_readUserData(e){this.aggregate._readUserData(e)}}class Gy{constructor(e,t,r){this.expr=e,this.alias=t,this._methodName=r,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class ni extends Qr{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map((t=>t._toProto(e)))}}}_readUserData(e){this.Rr.forEach((t=>t._readUserData(e)))}}class Rs extends Qr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,B(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Pa(n){return zy(n,"field")}function zy(n,e){return new Rs(typeof n=="string"?tn===n?gy()._internalPath:Ss("field",n):n._internalPath,e)}class Cs extends Qr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Cs(e,void 0);return t._protoValue=e,t}_toProto(e){return K(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,qy(this._protoValue)||(this._protoValue=vs(this.value,e))}}function ki(n,e){return $m(n,"constant")}function $m(n,e){const t=new Cs(n,e);return typeof n=="boolean"?new Fm(t):t}class L extends Qr{constructor(e,t,r,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,r!==void 0&&(this._methodName=r),s!==void 0&&(this._options=s)}get _optionsUtil(){return new rt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((r=>r._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class dr extends Qr{get _methodName(){return this._expr._methodName}countIf(){return Rt._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=B(e),r=new L("if_error",[this,t],"ifError");return t instanceof dr?r.asBoolean():r}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Um extends dr{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Fm extends dr{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Wy extends dr{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Ky(n,e){const t=[];for(const r in n)if(Object.prototype.hasOwnProperty.call(n,r)){const s=n[r];t.push(ki(r)),t.push(B(s))}return new L("map",t,"map")}function Yy(n){return(function(t,r){return new L("array",t.map((s=>B(s))),r)})(n,"array")}function Qy(n){return new Bm(Xc(n),"ascending","ascending")}function Xy(n){return new Bm(Xc(n),"descending","descending")}class Bm{constructor(e,t,r){this.expr=e,this.direction=t,this._methodName=r,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Sm(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class Lt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class qm extends Lt{get _name(){return"add_fields"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.fields)]}}_readUserData(e){super._readUserData(e),pr(this.fields,e)}}class Hm extends Lt{get _name(){return"aggregate"}get _optionsUtil(){return new rt({})}constructor(e,t,r){super(r),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[xi(e,this.accumulators),xi(e,this.groups)]}}_readUserData(e){super._readUserData(e),pr(this.groups,e),pr(this.accumulators,e)}}class jm extends Lt{get _name(){return"distinct"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.groups)]}}_readUserData(e){super._readUserData(e),pr(this.groups,e)}}class Oo extends Lt{get _name(){return"collection"}get _optionsUtil(){return new rt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class Lo extends Lt{get _name(){return"collection_group"}get _optionsUtil(){return new rt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Jc extends Lt{get _name(){return"database"}get _optionsUtil(){return new rt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Zc extends Lt{get _name(){return"documents"}get _optionsUtil(){return new rt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new j(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const r=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(r);if(s.size!==r.length)throw new j(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=r,this.mr=s}_toProto(e){return{...super._toProto(e),args:this.dr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class Do extends Lt{get _name(){return"where"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),pr(this.condition,e)}}class Fr extends Lt{get _name(){return"limit"}get _optionsUtil(){return new rt({})}constructor(e,t){K(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[Fc(e,this.limit)]}}}class Nd extends Lt{get _name(){return"offset"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[Fc(e,this.offset)]}}}class Jy extends Lt{get _name(){return"select"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.selections)]}}_readUserData(e){super._readUserData(e),pr(this.selections,e)}}class vn extends Lt{get _name(){return"sort"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),pr(this.orderings,e)}}class eu extends Lt{get _name(){return"replace_with"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Sm(eu.pr)]}}_readUserData(e){super._readUserData(e),pr(this.map,e)}}eu.pr="full_replace";function pr(n,e){return Mm(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}// Copyright 2024 Google LLC* @license
class ut{constructor(e,t,r){this.serializer=e,this.stages=t,this.listenOptions=r,this.isCorePipeline=!0}getPipelineCollection(){return Vo(this)}getPipelineCollectionGroup(){return tu(this)}getPipelineCollectionId(){return Zy(this)}getPipelineDocuments(){return oc(this)}getPipelineFlavor(){return(function(t){let r="exact";return t.stages.forEach(((s,i)=>{s._name!==jm.name&&s._name!==Hm.name||(r="keyless"),s._name===Jy.name&&r==="exact"&&(r="augmented"),s._name===qm.name&&i<t.stages.length-1&&r==="exact"&&(r="augmented")})),r})(this)}getPipelineSourceType(){return rr(this)}}function rr(n){const e=n.stages[0];return e instanceof Oo||e instanceof Lo||e instanceof Jc||e instanceof Zc?e._name:"unknown"}function Vo(n){if(rr(n)==="collection")return n.stages[0].Vr}function tu(n){if(rr(n)==="collection_group")return n.stages[0].collectionId}function Zy(n){switch(rr(n)){case"collection":return ye.fromString(Vo(n)).lastSegment();case"collection_group":return tu(n);default:return}}function oc(n){if(rr(n)==="documents")return n.stages[0].dr}class di{constructor(e,t,r,s){this._db=e,this.userDataReader=t,this._userDataWriter=r,this.stages=s}wr(e,t){const r=this.userDataReader.createContext(3,e);return Mm(t)?t._readUserData(r):Array.isArray(t)?t.forEach((s=>s._readUserData(r))):t.forEach((s=>s._readUserData(r))),t}where(e){const t=this.stages.map((r=>r));return this.wr("where",e),t.push(new Do(e,{})),new di(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((r=>r));return t.push(new Fr(e,{})),new di(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const r=this.stages.map((s=>s));return"orderings"in e?r.push(new vn(this.wr("sort",e.orderings),{})):r.push(new vn(this.wr("sort",[e,...t]),{})),new di(this._db,this.userDataReader,this._userDataWriter,r)}br(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class C{constructor(e,t){this.type=e,this.value=t}static vr(){return new C("ERROR",void 0)}static Sr(){return new C("UNSET",void 0)}static Dr(){return new C("NULL",gs)}static newValue(e){return Pt(e)?new C("NULL",gs):(function(r){return!!r&&"booleanValue"in r})(e)?new C("BOOLEAN",e):nn(e)?new C("INT",e):Cr(e)?new C("DOUBLE",e):(function(r){return!!r&&"timestampValue"in r&&!!r.timestampValue})(e)?new C("TIMESTAMP",e):(function(r){return!!r&&"stringValue"in r})(e)?new C("STRING",e):(function(r){return!!r&&"bytesValue"in r})(e)?new C("BYTES",e):e.referenceValue?new C("REFERENCE",e):e.geoPointValue?new C("GEO_POINT",e):_s(e)?new C("ARRAY",e):Xa(e)?new C("VECTOR",e):xr(e)?new C("MAP",e):new C("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function pi(n){if(!n.Cr())return n.value}function Gm(n){return n instanceof dr?n._expr:n}function ee(n){if((n=Gm(n))instanceof Rs)return new e_(n);if(n instanceof Cs)return new t_(n);if(n instanceof ni)return new n_(n);if(n instanceof L){if(n.name==="add")return new i_(n);if(n.name==="subtract")return new a_(n);if(n.name==="multiply")return new o_(n);if(n.name==="divide")return new l_(n);if(n.name==="mod")return new c_(n);if(n.name==="and")return new u_(n);if(n.name==="equal")return new b_(n);if(n.name==="not_equal")return new T_(n);if(n.name==="less_than")return new A_(n);if(n.name==="less_than_or_equal")return new I_(n);if(n.name==="greater_than")return new S_(n);if(n.name==="greater_than_or_equal")return new R_(n);if(n.name==="array_concat")return new C_(n);if(n.name==="array_reverse")return new x_(n);if(n.name==="array_contains")return new k_(n);if(n.name==="array_contains_all")return new P_(n);if(n.name==="array_contains_any")return new N_(n);if(n.name==="array_length")return new O_(n);if(n.name==="array_element")return new L_(n);if(n.name==="equal_any")return new zm(n);if(n.name==="not_equal_any")return new d_(n);if(n.name==="is_nan")return new p_(n);if(n.name==="is_not_nan")return new f_(n);if(n.name==="is_null")return new m_(n);if(n.name==="is_not_null")return new g_(n);if(n.name==="is_error")return new y_(n);if(n.name==="exists")return new __(n);if(n.name==="not")return new Mo(n);if(n.name==="or")return new h_(n);if(n.name==="xor")return new nu(n);if(n.name==="conditional")return new v_(n);if(n.name==="maximum")return new w_(n);if(n.name==="minimum")return new E_(n);if(n.name==="reverse")return new D_(n);if(n.name==="replace_first")return new V_(n);if(n.name==="replace_all")return new M_(n);if(n.name==="char_length")return new $_(n);if(n.name==="byte_length")return new U_(n);if(n.name==="like")return new F_(n);if(n.name==="regex_contains")return new B_(n);if(n.name==="regex_match")return new q_(n);if(n.name==="string_contains")return new H_(n);if(n.name==="starts_with")return new j_(n);if(n.name==="ends_with")return new G_(n);if(n.name==="to_lower")return new z_(n);if(n.name==="to_upper")return new W_(n);if(n.name==="trim")return new K_(n);if(n.name==="string_concat")return new Y_(n);if(n.name==="map_get")return new Q_(n);if(n.name==="cosine_distance")return new X_(n);if(n.name==="dot_product")return new J_(n);if(n.name==="euclidean_distance")return new Z_(n);if(n.name==="vector_length")return new e5(n);if(n.name==="unix_micros_to_timestamp")return new i5(n);if(n.name==="timestamp_to_unix_micros")return new l5(n);if(n.name==="unix_millis_to_timestamp")return new a5(n);if(n.name==="timestamp_to_unix_millis")return new c5(n);if(n.name==="unix_seconds_to_timestamp")return new o5(n);if(n.name==="timestamp_to_unix_seconds")return new u5(n);if(n.name==="timestamp_add")return new h5(n);if(n.name==="timestamp_subtract")return new d5(n)}throw new Error(`Unknown Expr : ${n}`)}class e_{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===tn)return C.newValue({referenceValue:so(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return C.newValue({timestampValue:ka(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return C.newValue({timestampValue:ka(e.serializer,t.createTime)});const r=t.data.field(this.expr._fieldPath);return r?Io(r)?C.newValue((function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:ka(i.serializer,se.fromTimestamp(ms(a)))};if(i.serverTimestampBehavior==="previous"){const o=qi(a);if(o)return o}return{nullValue:"NULL_VALUE"}})(e,r)):C.newValue(r):C.Sr()}}class t_{constructor(e){this.expr=e}evaluate(e,t){return C.newValue(this.expr._getValue())}}class n_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.Rr.map((s=>ee(s).evaluate(e,t)));return r.some((s=>s.Cr()))?C.vr():C.newValue({arrayValue:{values:r.map((s=>s.value))}})}}function Ke(n){return Cr(n)?Number(n.doubleValue):Number(n.integerValue)}function dn(n){return BigInt(n.integerValue)}const r_=BigInt("0x7fffffffffffffff"),s_=-BigInt("0x8000000000000000");class zi{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length>=2,24778);const r=ee(this.expr.params[0]).evaluate(e,t),s=ee(this.expr.params[1]).evaluate(e,t);let i=this.Or(r,s);for(const a of this.expr.params.slice(2)){const o=ee(a).evaluate(e,t);i=this.Or(i,o)}return i}Or(e,t){if(e.Cr()||t.Cr())return C.vr();if(e.Fr()||t.Fr())return C.Dr();const r=e.value,s=t.value;if(!Cr(r)&&!nn(r)||!Cr(s)&&!nn(s))return C.vr();if(Cr(r)||Cr(s)){const i=this.Mr(r,s);return i?C.newValue(i):C.vr()}if(nn(r)&&nn(s)){const i=this.Nr(r,s);return i===void 0?C.vr():typeof i=="number"?C.newValue({doubleValue:i}):i<s_||i>r_?C.vr():C.newValue({integerValue:`${i}`})}return C.vr()}}function xn(n,e){return Fe(n)!==Fe(e)?"TYPE_MISMATCH":bt(n)||bt(e)?"NOT_EQ":Pt(n)&&Pt(e)?"EQ":Pt(n)||Pt(e)?"NULL":_s(n)&&_s(e)?(function(r,s){var a,o,c;if(((a=r.values)==null?void 0:a.length)!==((o=s.values)==null?void 0:o.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((c=r.values)==null?void 0:c.length)??0);u++){const d=r.values[u],p=s.values[u];switch(xn(d,p)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:J(44609,{Lr:d,Br:p})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):Xa(n)&&Xa(e)||xr(n)&&xr(e)?(function(r,s){const i=r.fields||{},a=s.fields||{};if(Ya(i)!==Ya(a))return"NOT_EQ";let o=!1;for(const c in i)if(i.hasOwnProperty(c)){if(a[c]===void 0)return"NOT_EQ";switch(xn(i[c],a[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":o=!0}}return o?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(r,s){return Ft(r,s,{Te:!1,Ee:!0,he:!0})})(n,e)?"EQ":"NOT_EQ"}class i_ extends zi{Nr(e,t){return dn(e)+dn(t)}Mr(e,t){return{doubleValue:Ke(e)+Ke(t)}}}class a_ extends zi{constructor(e){super(e),this.expr=e}Nr(e,t){return dn(e)-dn(t)}Mr(e,t){return{doubleValue:Ke(e)-Ke(t)}}}class o_ extends zi{constructor(e){super(e),this.expr=e}Nr(e,t){return dn(e)*dn(t)}Mr(e,t){return{doubleValue:Ke(e)*Ke(t)}}}class l_ extends zi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=dn(t);if(r!==BigInt(0))return dn(e)/r}Mr(e,t){const r=Ke(t);return r===0?{doubleValue:wi(r)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ke(e)/r}}}class c_ extends zi{constructor(e){super(e),this.expr=e}Nr(e,t){const r=dn(t);if(r!==BigInt(0))return dn(e)%r}Mr(e,t){const r=Ke(t);if(r!==0)return{doubleValue:Ke(e)%r}}}class u_{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=ee(a).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!((i=o.value)!=null&&i.booleanValue))return C.newValue(ze);break;case"NULL":s=!0;break;default:r=!0}}return r?C.vr():s?C.Dr():C.newValue(wt)}}class Mo{constructor(e){this.expr=e}evaluate(e,t){var s;K(this.expr.params.length===1,9634);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return C.newValue({booleanValue:!((s=r.value)!=null&&s.booleanValue)});case"NULL":return C.Dr();default:return C.vr()}}}class h_{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=ee(a).evaluate(e,t);switch(o.type){case"BOOLEAN":if((i=o.value)!=null&&i.booleanValue)return C.newValue(wt);break;case"NULL":s=!0;break;default:r=!0}}return r?C.vr():s?C.Dr():C.newValue(ze)}}class nu{constructor(e){this.expr=e}evaluate(e,t){var i;let r=!1,s=!1;for(const a of this.expr.params){const o=ee(a).evaluate(e,t);switch(o.type){case"BOOLEAN":r=nu.xor(r,!!((i=o.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return C.vr()}}return s?C.Dr():C.newValue({booleanValue:r})}static xor(e,t){return(e||t)&&!(e&&t)}}class zm{constructor(e){this.expr=e}evaluate(e,t){var a,o;K(this.expr.params.length===2,55094);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":r=!0;break;case"ERROR":case"UNSET":return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return C.vr()}if(r)return C.Dr();for(const c of((o=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:o.values)??[])switch(Pt(s.value)&&Pt(c)?"EQ":xn(s.value,c)){case"EQ":return C.newValue(wt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:J(44608,{value:s.value,candidate:c})}return r?C.Dr():C.newValue(ze)}}class d_{constructor(e){this.expr=e}evaluate(e,t){return new Mo(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class p_{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,23322);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return C.newValue(ze);case"DOUBLE":return C.newValue({booleanValue:isNaN(Ke(r.value))});case"NULL":return C.Dr();default:return C.vr()}}}class f_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===1,50406),new Mo(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class m_{constructor(e){this.expr=e}evaluate(e,t){switch(K(this.expr.params.length===1,23123),ee(this.expr.params[0]).evaluate(e,t).type){case"NULL":return C.newValue(wt);case"UNSET":case"ERROR":return C.vr();default:return C.newValue(ze)}}}class g_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===1,23167),new Mo(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class y_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===1,5228),ee(this.expr.params[0]).evaluate(e,t).type==="ERROR"?C.newValue(wt):C.newValue(ze)}}class __{constructor(e){this.expr=e}evaluate(e,t){switch(K(this.expr.params.length===1,6877),ee(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return C.vr();case"UNSET":return C.newValue(ze);default:return C.newValue(wt)}}}class v_{constructor(e){this.expr=e}evaluate(e,t){var s;K(this.expr.params.length===3,11706);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BOOLEAN":return(s=r.value)!=null&&s.booleanValue?ee(this.expr.params[1]).evaluate(e,t):ee(this.expr.params[2]).evaluate(e,t);case"NULL":return ee(this.expr.params[2]).evaluate(e,t);default:return C.vr()}}}class w_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>ee(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Et(i.value,s.value)>0?i:s}return s===void 0?C.Dr():s}}class E_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((i=>ee(i).evaluate(e,t)));let s;for(const i of r)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||Et(i.value,s.value)<0?i:s}return s===void 0?C.Dr():s}}class xs{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return C.vr()}const s=ee(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return C.vr()}return this.Ur(r,s)}}class b_ extends xs{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return C.newValue(wt);if(e.Fr()||t.Fr()||bt(e.value)||bt(t.value)||Fe(e.value)!==Fe(t.value))return C.newValue(ze);switch(xn(e.value,t.value)){case"EQ":return C.newValue(wt);case"NOT_EQ":return C.newValue(ze);case"NULL":return C.Dr();default:J(44615,{left:e,right:t})}}}class T_ extends xs{constructor(e){super(e),this.expr=e}Ur(e,t){switch(xn(e.value,t.value)){case"EQ":return C.newValue(ze);case"NOT_EQ":case"TYPE_MISMATCH":return C.newValue(wt);case"NULL":return C.Dr();default:J(44614,{left:e,right:t})}}}class A_ extends xs{constructor(e){super(e),this.expr=e}Ur(e,t){return Fe(e.value)!==Fe(t.value)||bt(e.value)||bt(t.value)?C.newValue(ze):C.newValue({booleanValue:Et(e.value,t.value)<0})}}class I_ extends xs{constructor(e){super(e),this.expr=e}Ur(e,t){return Fe(e.value)!==Fe(t.value)||bt(e.value)||bt(t.value)?C.newValue(ze):xn(e.value,t.value)==="EQ"?C.newValue(wt):C.newValue({booleanValue:Et(e.value,t.value)<0})}}class S_ extends xs{constructor(e){super(e),this.expr=e}Ur(e,t){return Fe(e.value)!==Fe(t.value)||bt(e.value)||bt(t.value)?C.newValue(ze):C.newValue({booleanValue:Et(e.value,t.value)>0})}}class R_ extends xs{constructor(e){super(e),this.expr=e}Ur(e,t){return Fe(e.value)!==Fe(t.value)||bt(e.value)||bt(t.value)?C.newValue(ze):xn(e.value,t.value)==="EQ"?C.newValue(wt):C.newValue({booleanValue:Et(e.value,t.value)>0})}}class C_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class x_{constructor(e){this.expr=e}evaluate(e,t){var s;K(this.expr.params.length===1,216);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return C.Dr();case"ARRAY":{const i=((s=r.value.arrayValue)==null?void 0:s.values)??[];return C.newValue({arrayValue:{values:[...i].reverse()}})}default:return C.vr()}}}class k_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===2,52884),new zm(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class P_{constructor(e){this.expr=e}evaluate(e,t){var c,u,d,p;K(this.expr.params.length===2,1392);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return C.vr()}if(r)return C.Dr();const a=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],o=((p=(d=s.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const y of a){let b=!1;r=!1;for(const R of o){switch(Pt(y)&&Pt(R)?"EQ":xn(y,R)){case"EQ":b=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:J(44613,{value:R,search:y})}if(b)break}if(!b)return C.newValue(ze)}return C.newValue(wt)}}class N_{constructor(e){this.expr=e}evaluate(e,t){var c,u,d,p;K(this.expr.params.length===2,2680);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":r=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":r=!0;break;default:return C.vr()}if(r)return C.Dr();const a=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],o=((p=(d=s.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const y of o)for(const b of a)switch(Pt(y)&&Pt(b)?"EQ":xn(y,b)){case"EQ":return C.newValue(wt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":r=!0;break;default:J(44608,{value:y,search:b})}return r?C.Dr():C.newValue(ze)}}class O_{constructor(e){this.expr=e}evaluate(e,t){var s,i,a;K(this.expr.params.length===1,38605);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return C.Dr();case"ARRAY":return C.newValue({integerValue:`${((a=(i=(s=r.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return C.vr()}}}class L_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class D_{constructor(e){this.expr=e}evaluate(e,t){var s,i;K(this.expr.params.length===1,1508);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return C.Dr();case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;if(typeof a=="string"){const o=Ue.fromBase64String(a).toUint8Array();return o.reverse(),C.newValue({bytesValue:Ue.fromUint8Array(o).toBase64()})}return C.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=r.value)==null?void 0:i.stringValue,o=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),c=Array.from(o,(u=>u.segment)).reverse();return C.newValue({stringValue:c.join("")})}default:return C.vr()}}}class V_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class M_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class $_{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,19400);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":return C.Dr();case"STRING":{const s=(function(a){let o=0;for(let c=0;c<a.length;c++){const u=a.codePointAt(c);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const d=a.codePointAt(c+1);d!==void 0&&d>=56320&&d<=57343?(o+=1,c++):o+=1}else o+=1;else o+=1;else{if(!(u<=1114111))return;o+=1,c++}}return o})(r.value.stringValue);return s===void 0?C.vr():C.newValue({integerValue:s})}default:return C.vr()}}}class U_{constructor(e){this.expr=e}evaluate(e,t){var s,i;K(this.expr.params.length===1,8486);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"BYTES":{const a=(s=r.value)==null?void 0:s.bytesValue;return typeof a=="string"?C.newValue({integerValue:Ue.fromBase64String(a).toUint8Array().length}):C.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=(function(c){let u=0;for(let d=0;d<c.length;d++){const p=c.codePointAt(d);if(p===void 0)return;if(p>=55296&&p<=57343){if(!(p<=56319))return;{const y=c.codePointAt(d+1);if(y===void 0||!(y>=56320&&y<=57343))return;u+=4,d++}}else if(p<=127)u+=1;else if(p<=2047)u+=2;else if(p<=65535)u+=3;else{if(!(p<=1114111))return;u+=4,d++}}return u})((i=r.value)==null?void 0:i.stringValue);return a===void 0?C.vr():C.newValue({integerValue:a})}case"NULL":return C.Dr();default:return C.vr()}}}class ks{constructor(e){this.expr=e}evaluate(e,t){var a,o;K(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":r=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":r=!0;break;default:return C.vr()}return r?C.Dr():this.kr((a=s.value)==null?void 0:a.stringValue,(o=i.value)==null?void 0:o.stringValue)}}class F_ extends ks{kr(e,t){try{const r=(function(a){let o="";for(let c=0;c<a.length;c++){const u=a.charAt(c);switch(u){case"_":o+=".";break;case"%":o+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":o+="\\"+u;break;default:o+=u}}return"^"+o+"$"})(t),s=_i.compile(r);return C.newValue({booleanValue:s.matches(e)})}catch(r){return Qt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${r}`),C.vr()}}}class B_ extends ks{kr(e,t){try{const r=_i.compile(t);return C.newValue({booleanValue:r.matcher(e).find()})}catch{return Qt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),C.vr()}}}class q_ extends ks{kr(e,t){try{return C.newValue({booleanValue:_i.compile(t).matches(e)})}catch{return Qt(`Invalid regex pattern found in regex_match: ${t}, returning error`),C.vr()}}}class H_ extends ks{kr(e,t){return C.newValue({booleanValue:e.includes(t)})}}class j_ extends ks{kr(e,t){return C.newValue({booleanValue:e.startsWith(t)})}}class G_ extends ks{kr(e,t){return C.newValue({booleanValue:e.endsWith(t)})}}class z_{constructor(e){this.expr=e}evaluate(e,t){var s,i;K(this.expr.params.length===1,29079);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return C.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return C.Dr();default:return C.vr()}}}class W_{constructor(e){this.expr=e}evaluate(e,t){var s,i;K(this.expr.params.length===1,60487);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return C.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return C.Dr();default:return C.vr()}}}class K_{constructor(e){this.expr=e}evaluate(e,t){var s,i;K(this.expr.params.length===1,28544);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":return C.newValue({stringValue:(i=(s=r.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return C.Dr();default:return C.vr()}}}class Y_{constructor(e){this.expr=e}evaluate(e,t){const r=this.expr.params.map((a=>ee(a).evaluate(e,t)));let s="",i=!1;for(const a of r)switch(a.type){case"STRING":s+=a.value.stringValue;break;case"NULL":i=!0;break;default:return C.vr()}return i?C.Dr():C.newValue({stringValue:s})}}class Q_{constructor(e){this.expr=e}evaluate(e,t){var a,o,c,u;K(this.expr.params.length===2,4483);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"UNSET":return C.Sr();case"MAP":break;default:return C.vr()}const s=ee(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return C.vr();const i=(u=(o=(a=r.value)==null?void 0:a.mapValue)==null?void 0:o.fields)==null?void 0:u[(c=s.value)==null?void 0:c.stringValue];return i===void 0?C.Sr():C.newValue(i)}}class ru{constructor(e){this.expr=e}evaluate(e,t){var u,d;K(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":r=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":r=!0;break;default:return C.vr()}if(r)return C.Dr();const a=ec(s.value),o=ec(i.value);if(a===void 0||o===void 0||((u=a.values)==null?void 0:u.length)!==((d=o.values)==null?void 0:d.length))return C.vr();const c=this.qr(a,o);return c===void 0||isNaN(c)?C.vr():C.newValue({doubleValue:c})}}class X_ extends ru{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return;let i=0,a=0,o=0;for(let u=0;u<r.length;u++){if(!hr(r[u])||!hr(s[u]))return;const d=Ke(r[u]),p=Ke(s[u]);i+=d*p,a+=d*d,o+=p*p}const c=Math.sqrt(a)*Math.sqrt(o);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class J_ extends ru{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!hr(r[a])||!hr(s[a]))return;i+=Ke(r[a])*Ke(s[a])}return i}}class Z_ extends ru{qr(e,t){const r=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(r.length===0)return 0;let i=0;for(let a=0;a<r.length;a++){if(!hr(r[a])||!hr(s[a]))return;const o=Ke(r[a]),c=Ke(s[a]);i+=Math.pow(o-c,2)}return Math.sqrt(i)}}class e5{constructor(e){this.expr=e}evaluate(e,t){var s;K(this.expr.params.length===1,39044);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":{const i=ec(r.value);return C.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return C.Dr();default:return C.vr()}}}const Pi=BigInt(-62135596800),Ni=BigInt(253402300799),ao=BigInt(1e3),sr=BigInt(1e6),t5=Pi*ao,n5=Ni*ao+BigInt(999),r5=Pi*sr,s5=Ni*sr+BigInt(999999);function su(n){return n>=r5&&n<=s5}function Wm(n){return n>=Pi&&n<=Ni}function Oi(n,e){const t=BigInt(n);return!(t<Pi||t>Ni)&&!(e<0||e>=1e9)&&(t!==Pi||e===0)&&!(t===Ni&&e>999999999)}function Km(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function iu(n){return BigInt(n.seconds)*sr+BigInt(Math.trunc(n.nanoseconds/1e3))}class au{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"INT":return this.toTimestamp(BigInt(r.value.integerValue));case"NULL":return C.Dr();default:return C.vr()}}}class i5 extends au{toTimestamp(e){if(!su(e))return C.vr();let t=Number(e/sr),r=Number(e%sr*BigInt(1e3));const s=Km(t,r);return t=s.seconds,r=s.nanos,Oi(t,r)?C.newValue({timestampValue:{seconds:t,nanos:r}}):C.vr()}}class a5 extends au{toTimestamp(e){if(!(function(a){return a>=t5&&a<=n5})(e))return C.vr();let t=Number(e/ao),r=Number(e%ao*BigInt(1e6));const s=Km(t,r);return t=s.seconds,r=s.nanos,Oi(t,r)?C.newValue({timestampValue:{seconds:t,nanos:r}}):C.vr()}}class o5 extends au{toTimestamp(e){if(!Wm(e))return C.vr();const t=Number(e);return C.newValue({timestampValue:{seconds:t,nanos:0}})}}class ou{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":return C.Dr();default:return C.vr()}const s=jc(r.value.timestampValue);return Oi(s.seconds,s.nanoseconds)?this.$r(s):C.vr()}}class l5 extends ou{$r(e){const t=iu(e);return su(t)?C.newValue({integerValue:`${t.toString()}`}):C.vr()}}class c5 extends ou{$r(e){const t=iu(e),r=t/BigInt(1e3),s=t%BigInt(1e3);return r>BigInt(0)||s===BigInt(0)?C.newValue({integerValue:r.toString()}):C.newValue({integerValue:(r-BigInt(1)).toString()})}}class u5 extends ou{$r(e){const t=BigInt(e.seconds);return Wm(t)?C.newValue({integerValue:t.toString()}):C.vr()}}class Ym{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let r=!1;const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":r=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=(function($){switch($){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),a===void 0)return C.vr();break;case"NULL":r=!0;break;default:return C.vr()}const o=ee(this.expr.params[2]).evaluate(e,t);switch(o.type){case"INT":break;case"NULL":r=!0;break;default:return C.vr()}if(r)return C.Dr();const c=BigInt(o.value.integerValue);let u;try{switch(a){case"microsecond":u=c;break;case"millisecond":u=c*BigInt(1e3);break;case"second":u=c*BigInt(1e6);break;case"minute":u=c*BigInt(6e7);break;case"hour":u=c*BigInt(36e8);break;case"day":u=c*BigInt(864e8);break;default:return C.vr()}if(a!=="microsecond"&&c!==BigInt(0)&&u/c!==BigInt(this.Kr(a)))return C.vr()}catch(F){return Qt(`Error during timestamp arithmetic: ${F}`),C.vr()}const d=jc(s.value.timestampValue);if(!Oi(d.seconds,d.nanoseconds))return C.vr();const p=iu(d),y=this.Wr(p,u);if(!su(y))return C.vr();const b=Number(y/sr),R=y%sr,O=Number((R<0?R+sr:R)*BigInt(1e3)),k=R<0?b-1:b;return Oi(k,O)?C.newValue({timestampValue:{seconds:k,nanos:O}}):C.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class h5 extends Ym{Wr(e,t){return e+t}}class d5 extends Ym{Wr(e,t){return e-t}}function Li(n){if((n=Gm(n))instanceof Rs)return`fld(${n.fieldName})`;if(n instanceof Cs)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ce?`ref(${t.path})`:t instanceof vt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof L)return`fn(${n.name},[${n.params.map(Li).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(Li).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function p5(n){if(n instanceof qm)return`${n._name}(${ya(n.fields)})`;if(n instanceof Hm){let e=`${n._name}(${ya(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${ya(n.groups)})`),e}if(n instanceof jm)return`${n._name}(${ya(n.groups)})`;if(n instanceof Oo)return`${n._name}(${n.Vr})`;if(n instanceof Lo)return`${n._name}(${n.collectionId})`;if(n instanceof Jc)return`${n._name}()`;if(n instanceof Zc)return`${n._name}(${n.dr.sort()})`;if(n instanceof Do)return`${n._name}(${Li(n.condition)})`;if(n instanceof Fr)return`${n._name}(${n.limit})`;if(n instanceof vn)return`${n._name}(${(function(t){return t.map((r=>`${Li(r.expr)}${r.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function ya(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${Li(t)}`)).join(",")}`}function In(n){return n.stages.map((e=>p5(e))).join("|")}function Qm(n,e){return In(n)===In(e)}function He(n){return n instanceof ut}function Od(n){return He(n)?In(n):ui(n)}function Xm(n){return He(n)?In(n):(function(t){return`${lm(cn(t))}|lt:${t.limitType}`})(n)}function $o(n,e){return n instanceof ut&&e instanceof ut?Qm(n,e):!(n instanceof ut&&!(e instanceof ut)||!(n instanceof ut)&&e instanceof ut)&&B8(n,e)}function Jm(n){return Sr(n)?In(n):lm(n)}function Zm(n,e){return n instanceof ut&&e instanceof ut?Qm(n,e):!(n instanceof ut&&!(e instanceof ut)||!(n instanceof ut)&&e instanceof ut)&&cm(n,e)}function f5(n,e){const t=(function(s){let i=!1;const a=[];for(const o of s)if(o instanceof vn)if(i=!0,o.orderings.some((c=>c.expr instanceof Rs&&c.expr.fieldName===tn)))a.push(o);else{const c=o.orderings.map((u=>u));c.push(Pa(tn).ascending()),a.push(new vn(c,{}))}else o instanceof Fr&&(i||(a.push(new vn([Pa(tn).ascending()],{})),i=!0)),a.push(o);return i||a.push(new vn([Pa(tn).ascending()],{})),a})(n.stages);if(n.userDataReader){const r=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(r)))}return new ut(n.userDataReader.serializer,t,e)}/**
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
 */class m5{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&A8(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=li(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=li(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=mm();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let o=this.applyToLocalView(a,i.mutatedFields);o=t.has(s.key)?null:o;const c=Zf(a,o);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ce())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,((t,r)=>hd(t,r)))&&fs(this.baseMutations,e.baseMutations,((t,r)=>hd(t,r)))}}class lu{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length,58842,{Qr:e.mutations.length,Gr:r.length});let s=(function(){return z8})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new lu(e,t,r,s)}}/**
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
 */class g5{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wn{constructor(e,t,r,s,i=se.min(),a=se.min(),o=Ue.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=c}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class y5{constructor(e){this.zr=e}}function _5(n){const e=cy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?no(e,e.limit,"L"):e}/**
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
 */class v5{constructor(){this.Hi=new w5}addToCollectionParentIndex(e,t){return this.Hi.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(lr.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class w5{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new $e(ye.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(ye.comparator)).toArray()}}/**
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
 */class fr{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new fr(0)}static Cs(){return new fr(-1)}}// Copyright 2024 Google LLC* @license
function e2(n,e){var r;let t=e;for(const s of n.stages)t=b5({serializer:n.serializer,serverTimestampBehavior:(r=n.listenOptions)==null?void 0:r.serverTimestampBehavior},s,t);return t}function Uo(n,e){return e2(n,[e]).length>0}function E5(n,e){return He(n)?Uo(n,e):ko(n,e)}function b5(n,e,t){if(e instanceof Oo)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&`/${o.key.getCollectionPath().canonicalString()}`===i.Vr))})(0,e,t);if(e instanceof Do)return(function(s,i,a){return a.filter((o=>{const c=pi(ee(i.condition).evaluate(s,o));return c!==void 0&&Ft(c,wt)}))})(n,e,t);if(e instanceof Lo)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&o.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof Jc)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()))})(0,0,t);if(e instanceof Zc)return(function(s,i,a){return a.filter((o=>o.isFoundDocument()&&i.mr.has(o.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Fr)return(function(s,i,a){return a.slice(0,i.limit)})(0,e,t);if(e instanceof vn)return(function(s,i,a){const o=i.orderings.map((c=>({ks:ee(c.expr),direction:c.direction})));return[...a].sort(((c,u)=>{for(const{ks:d,direction:p}of o){const y=pi(d.evaluate(s,c)),b=pi(d.evaluate(s,u)),R=Et(y??gs,b??gs);if(R!==0)return p==="ascending"?R:-R}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function lc(n){const e=(function(r){for(let s=r.stages.length-1;s>=0;s--){const i=r.stages[s];if(i instanceof vn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,r)=>{for(const s of e){const i=pi(ee(s.expr).evaluate({serializer:n.serializer},t)),a=pi(ee(s.expr).evaluate({serializer:n.serializer},r)),o=Et(i||gs,a||gs);if(o!==0)return s.direction==="ascending"?o:-o}return 0}}function Nl(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof Fr)return{limit:t.limit}}}/**
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
 */class T5{constructor(){this.changes=new Yr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class A5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class I5{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&li(r.mutation,s,Gt.empty(),Ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ce()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ce()){const s=Yn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=rs();return i.forEach(((o,c)=>{a=a.insert(o,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Yn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ce())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,o)=>{t.set(a,o)}))}))}computeViews(e,t,r,s){let i=gt();const a=hi(),o=(function(){return hi()})();return t.forEach(((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Kr)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),li(d.mutation,u,d.mutation.getFieldMask(),Ee.now())):a.set(u.key,Gt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,d)=>a.set(u,d))),t.forEach(((u,d)=>o.set(u,new A5(d,a.get(u)??null)))),o)))}recalculateAndSaveOverlays(e,t){const r=hi();let s=new Ae(((a,o)=>a-o)),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const o of a)o.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let d=r.get(c)||Gt.empty();d=o.applyToLocalView(u,d),r.set(c,d);const p=(s.get(o.batchId)||ce()).add(c);s=s.insert(o.batchId,p)}))})).next((()=>{const a=[],o=s.getReverseIterator();for(;o.hasNext();){const c=o.getNext(),u=c.key,d=c.value,p=mm();d.forEach((y=>{if(!i.has(y)){const b=Zf(t.get(y),r.get(y));b!==null&&p.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return He(t)?this.getDocumentsMatchingPipeline(e,t,r,s):$8(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(Yn());let o=vi,c=i;return a.next((u=>M.forEach(u,((d,p)=>(o<p.largestBatchId&&(o=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{c=c.insert(d,y)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ce()))).next((d=>({batchId:o,changes:fm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next((r=>{let s=rs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=rs();return this.indexManager.getCollectionParents(e,i).next((o=>M.forEach(o,(c=>{const u=(function(p,y){return new Is(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>this.retrieveMatchingLocalDocuments(i,a,(o=>ko(t,o)))))}getDocumentsMatchingPipeline(e,t,r,s){if(rr(t)==="collection_group"){const i=tu(t);let a=rs();return this.indexManager.getCollectionParents(e,i).next((o=>M.forEach(o,(c=>{const u=(function(p,y){const b=p.stages.map((R=>R instanceof Lo?new Oo(y.canonicalString(),{}):R));return new ut(p.serializer,b)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,u,r,s).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}{let i;return this.getOverlaysForPipeline(e,t,r.largestBatchId).next((a=>{switch(i=a,rr(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s);case"documents":let o=ce();for(const c of oc(t))o=o.add(Q.fromPath(c));return this.remoteDocumentCache.getEntries(e,o);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new j("invalid-argument",`Invalid pipeline source to execute offline: ${In(t)}`)}})).next((a=>this.retrieveMatchingLocalDocuments(i,a,(o=>Uo(t,o)))))}}retrieveMatchingLocalDocuments(e,t,r){e.forEach(((i,a)=>{const o=a.getKey();t.get(o)===null&&(t=t.insert(o,et.newInvalidDocument(o)))}));let s=rs();return t.forEach(((i,a)=>{const o=e.get(i);o!==void 0&&li(o.mutation,a,Gt.empty(),Ee.now()),r(a)&&(s=s.insert(i,a))})),s}getOverlaysForPipeline(e,t,r){switch(rr(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ye.fromString(Vo(t)),r);case"collection_group":throw new j("invalid-argument",`Unexpected collection group pipeline: ${In(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,oc(t).map((s=>Q.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,r);default:throw new j("invalid-argument",`Failed to get overlays for pipeline: ${In(t)}`)}}}/**
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
 */class S5{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return M.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,(function(s){return{name:s.name,query:_5(s.bundledQuery),readTime:un(s.readTime)}})(t)),M.resolve()}}/**
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
 */class R5{constructor(){this.overlays=new Ae(Q.comparator),this.Ys=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yn();return M.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}getAllOverlays(e,t){const r=Yn();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&r.set(s,i)})),M.resolve(r)}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.Hr(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ys.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ys.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=Yn(),i=t.length+1,a=new Q(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const c=o.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ae(((u,d)=>u-d));const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Yn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const o=Yn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>o.set(u,d))),!(o.size()>=s)););return M.resolve(o)}Hr(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ys.get(s.largestBatchId).delete(r.key);this.Ys.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new g5(t,r));let i=this.Ys.get(t);i===void 0&&(i=ce(),this.Ys.set(t,i)),this.Ys.set(t,i.add(r.key))}}/**
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
 */class C5{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
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
 */class cu{constructor(){this.Zs=new $e(Ge.Xs),this.e_=new $e(Ge.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const r=new Ge(e,t);this.Zs=this.Zs.add(r),this.e_=this.e_.add(r)}n_(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.r_(new Ge(e,t))}i_(e,t){e.forEach((r=>this.removeReference(r,t)))}s_(e){const t=new Q(new ye([])),r=new Ge(t,e),s=new Ge(t,e+1),i=[];return this.e_.forEachInRange([r,s],(a=>{this.r_(a),i.push(a.key)})),i}__(){this.Zs.forEach((e=>this.r_(e)))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Q(new ye([])),r=new Ge(t,e),s=new Ge(t,e+1);let i=ce();return this.e_.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ge(e,0),r=this.Zs.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Q.comparator(e.key,t.key)||he(e.a_,t.a_)}static t_(e,t){return he(e.a_,t.a_)||Q.comparator(e.key,t.key)}}/**
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
 */class x5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new $e(Ge.Xs)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new m5(i,t,r,s);this.mutationQueue.push(a);for(const o of s)this.u_=this.u_.add(new Ge(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.l_(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?$c:this.gs-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ge(t,0),s=new Ge(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([r,s],(a=>{const o=this.c_(a.a_);i.push(o)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new $e(he);return t.forEach((s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,a],(o=>{r=r.add(o.a_)}))})),M.resolve(this.E_(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new Q(i),0);let o=new $e(he);return this.u_.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(o=o.add(c.a_)),!0)}),a),M.resolve(this.E_(o))}E_(e){const t=[];return e.forEach((r=>{const s=this.c_(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){K(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.u_;return M.forEach(t.mutations,(s=>{const i=new Ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.u_=r}))}bs(e){}containsKey(e,t){const r=new Ge(t,0),s=this.u_.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class k5{constructor(e){this.T_=e,this.docs=(function(){return new Ae(Q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.T_(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():et.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():et.newInvalidDocument(s))})),M.resolve(r)}getAllEntries(e){let t=gt();return this.docs.forEach(((r,s)=>{t=t.insert(r,s.document)})),M.resolve(t)}getDocumentsMatchingQuery(e,t,r,s){let i,a;He(t)?(i=ye.fromString(Vo(t)),a=d=>Uo(t,d)):(i=t.path,a=d=>ko(t,d));let o=gt();const c=new Q(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!i.isPrefixOf(d.path))break;d.path.length>i.length+1||i8(s8(p),r)<=0||(s.has(p.key)||a(p))&&(o=o.insert(p.key,p.mutableCopy()))}return M.resolve(o)}getAllFromCollectionGroup(e,t,r,s){J(9500)}P_(e,t){return M.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new P5(this)}getSize(e){return M.resolve(this.size)}}class P5 extends T5{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.zs.addEntry(e,s)):this.zs.removeEntry(r)})),M.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class N5{constructor(e){this.persistence=e,this.R_=new Yr((t=>Jm(t)),Zm),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.I_=0,this.A_=new cu,this.targetCount=0,this.V_=fr.xs()}forEachTarget(e,t){return this.R_.forEach(((r,s)=>t(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.I_&&(this.I_=t),M.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new fr(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Ms(t),M.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.R_.forEach(((a,o)=>{o.sequenceNumber<=t&&r.get(o.targetId)===null&&(this.R_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.R_.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.A_.n_(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.A_.i_(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.A_.o_(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.A_.containsKey(t))}}/**
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
 */class t2{constructor(e,t){this.d_={},this.overlays={},this.f_=new To(0),this.m_=!1,this.m_=!0,this.p_=new C5,this.referenceDelegate=e(this),this.g_=new N5(this),this.indexManager=new v5,this.remoteDocumentCache=(function(s){return new k5(s)})((r=>this.referenceDelegate.y_(r))),this.serializer=new y5(t),this.w_=new S5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new R5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.d_[e.toKey()];return r||(r=new x5(t,this.referenceDelegate),this.d_[e.toKey()]=r),r}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const s=new O5(this.f_.next());return this.referenceDelegate.b_(),r(s).next((i=>this.referenceDelegate.v_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}S_(e,t){return M.or(Object.values(this.d_).map((r=>()=>r.containsKey(e,t))))}}class O5 extends o8{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.D_=new cu,this.x_=null}static C_(e){return new uu(e)}get F_(){if(this.x_)return this.x_;throw J(60996)}addReference(e,t,r){return this.D_.addReference(r,t),this.F_.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.D_.removeReference(r,t),this.F_.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),M.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach((s=>this.F_.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.F_.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.F_,(r=>{const s=Q.fromPath(r);return this.O_(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.x_=null,t.apply(e))))}updateLimboDocument(e,t){return this.O_(e,t).next((r=>{r?this.F_.delete(t.toString()):this.F_.add(t.toString())}))}y_(e){return 0}O_(e,t){return M.or([()=>M.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class oo{constructor(e,t){this.persistence=e,this.M_=new Yr((r=>h8(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Oy(this,t)}static C_(e,t){return new oo(e,t)}b_(){}v_(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}Ls(e){let t=0;return this.Er(e,(r=>{t++})).next((()=>t))}Er(e,t){return M.forEach(this.M_,((r,s)=>this.Us(e,r,s).next((i=>i?M.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.P_(e,(a=>this.Us(e,a,t).next((o=>{o||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.M_.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ra(e.data.value)),t}Us(e,t,r){return M.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.M_.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hu{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.wo=r,this.bo=s}static vo(e,t){let r=ce(),s=ce();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hu(e,t.fromCache,r,s)}}/**
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
 */function L5(n,e){return Q.comparator(n.key,e.key)}/**
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
 */class D5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class V5{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=(function(){return R6()?8:l8(nt())>0?6:4})()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Oo(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Mo(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new D5;return this.No(e,t,a).next((o=>{if(i.result=o,this.Do)return this.Lo(e,t,a,o.size)}))})).next((()=>i.result))}Lo(e,t,r,s){return He(t)?M.resolve():r.documentReadCount<this.xo?(ns()<=pe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",ui(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),M.resolve()):(ns()<=pe.DEBUG&&G("QueryEngine","Query:",ui(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Co*s?(ns()<=pe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",ui(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(t))):M.resolve())}Oo(e,t){if(He(t))return M.resolve(null);let r=t;if(yd(r))return M.resolve(null);let s=cn(r);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(r.limit!==null&&i===1&&(r=no(r,null,"F"),s=cn(r)),this.indexManager.getDocumentsMatchingTarget(e,s).next((a=>{const o=ce(...a);return this.Fo.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.Bo(r,c);return this.Uo(r,d,o,u.readTime)?this.Oo(e,no(r,null,"F")):this.ko(e,d,r,u)}))))})))))}Mo(e,t,r,s){return(He(t)?(function(a){for(const o of a.stages){if(o instanceof Fr||o instanceof Nd)return!1;if(o instanceof Do){if(o.condition instanceof Um&&o.condition._expr.name==="exists"&&o.condition._expr.params[0]instanceof Rs&&o.condition._expr.params[0].fieldName===tn)continue;return!1}}return!0})(t):yd(t))||s.isEqual(se.min())?M.resolve(null):this.Fo.getDocuments(e,r).next((i=>{const a=this.Bo(t,i);return this.Uo(t,a,r,s)?M.resolve(null):(ns()<=pe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Od(t)),this.ko(e,a,t,r8(s,vi)).next((o=>o)))}))}Bo(e,t){let r,s;return He(e)?(r=new $e(L5),s=i=>Uo(e,i)):(r=new $e(qc(e)),s=i=>ko(e,i)),t.forEach(((i,a)=>{s(a)&&(r=r.add(a))})),r}Uo(e,t,r,s){if(He(e))return(function(o){return o.stages.some((c=>c instanceof Fr||c instanceof Nd))})(e);if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}No(e,t,r){return ns()<=pe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Od(t)),this.Fo.getDocumentsMatchingQuery(e,t,lr.min(),r)}ko(e,t,r,s){return this.Fo.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const du="LocalStore",M5=3e8;class $5{constructor(e,t,r,s){this.persistence=e,this.qo=t,this.serializer=s,this.$o=new Ae(he),this.Ko=new Yr((i=>Jm(i)),Zm),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(r)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new I5(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$o)))}}function U5(n,e,t,r){return new $5(n,e,t,r)}async function n2(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Go(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],o=[];let c=ce();for(const u of s){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next((u=>({zo:u,removedBatchIds:a,addedBatchIds:o})))}))}))}function F5(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Qo.newChangeBuffer({trackRemovals:!0});return(function(o,c,u,d){const p=u.batch,y=p.keys();let b=M.resolve();return y.forEach((R=>{b=b.next((()=>d.getEntry(c,R))).next((O=>{const k=u.docVersions.get(R);K(k!==null,48541),O.version.compareTo(k)<0&&(p.applyToRemoteDocument(O,u),O.isValidDocument()&&(O.setReadTime(u.commitVersion),d.addEntry(O)))}))})),b.next((()=>o.mutationQueue.removeMutationBatch(c,p)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(o){let c=ce();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(c=c.add(o.batch.mutations[u].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function r2(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.g_.getLastRemoteSnapshotVersion(t)))}function B5(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});s=t.$o;const o=[];e.targetChanges.forEach(((d,p)=>{const y=s.get(p);if(!y)return;o.push(t.g_.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.g_.addMatchingKeys(i,d.addedDocuments,p))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(Ue.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),(function(O,k,F){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=M5?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(y,b,d)&&o.push(t.g_.updateTargetData(i,b))}));let c=gt(),u=ce();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),o.push(q5(i,a,e.documentUpdates).next((d=>{c=d.jo,u=d.Ho}))),!r.isEqual(se.min())){const d=t.g_.getLastRemoteSnapshotVersion(i).next((p=>t.g_.setTargetsMetadata(i,i.currentSequenceNumber,r)));o.push(d)}return M.waitFor(o).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(t.$o=s,i)))}function q5(n,e,t){let r=ce(),s=ce();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=gt();return t.forEach(((o,c)=>{const u=i.get(o);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(o)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(o,c.readTime),a=a.insert(o,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(o,c)):G(du,"Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",c.version)})),{jo:a,Ho:s}}))}function H5(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=$c),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function j5(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.g_.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):t.g_.allocateTargetId(r).next((a=>(s=new wn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.g_.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.$o.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.$o=t.$o.insert(r.targetId,r),t.Ko.set(e,r.targetId)),r}))}async function cc(n,e,t){const r=ie(n),s=r.$o.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!As(a))throw a;G(du,`Failed to update sequence numbers for target ${e}: ${a}`)}r.$o=r.$o.remove(e),r.Ko.delete(s.target)}function Ld(n,e,t){const r=ie(n);let s=se.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,u,d){const p=ie(c),y=p.Ko.get(d);return y!==void 0?M.resolve(p.$o.get(y)):p.g_.getTargetData(u,d)})(r,a,He(e)?e:cn(e)).next((o=>{if(o)return s=o.lastLimboFreeSnapshotVersion,r.g_.getMatchingKeysForTargetId(a,o.targetId).next((c=>{i=c}))})).next((()=>r.qo.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:ce()))).next((o=>(G5(r,o),{documents:o,Jo:i})))))}function G5(n,e){e.forEach(((t,r)=>{const s=r.key.getCollectionGroup(),i=n.Wo.get(s)||se.min();r.readTime.compareTo(i)>0&&n.Wo.set(s,r.readTime)}))}class Dd{constructor(){this.activeTargetIds=Y8()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class z5{constructor(){this.Ua=new Dd,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,r){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Dd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Ol(){return typeof document<"u"?document:null}/**
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
 */class W5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve()))))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Cn(t),this.Ka=!1):G("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const pn="RemoteStore";class K5{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new fr(1e3),this.eu=new fr(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt((a=>{r.enqueueAndForget((async()=>{Xr(this)&&(G(pn,"Restarting streams for network reachability change."),await(async function(c){const u=ie(c);u.tu.add(4),await Wi(u),u.iu.set("Unknown"),u.tu.delete(4),await Fo(u)})(this))}))})),this.iu=new W5(r,s)}}async function Fo(n){if(Xr(n))for(const e of n.nu)await e(!0)}async function Wi(n){for(const e of n.nu)await e(!1)}function uc(n,e){return n.Ya.get(e)||void 0}function s2(n,e){const t=ie(n),r=uc(t,e.targetId);if(r!==void 0&&t.Ja.has(r))return;const s=(function(o,c){const u=uc(o,c);u!==void 0&&o.Za.delete(u);const d=(function(y,b){return b%2!=0?y.eu.next():y.Xa.next()})(o,c);return o.Ya.set(c,d),o.Za.set(d,c),d})(t,e.targetId);G(pn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new wn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(s,i),gu(t)?mu(t):Ps(t).Fn()&&fu(t,i)}function pu(n,e){const t=ie(n),r=Ps(t),s=uc(t,e);G(pn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.Ja.delete(s),t.Ya.delete(e),t.Za.delete(s),r.Fn()&&i2(t,s),t.Ja.size===0&&(r.Fn()?r.Nn():Xr(t)&&t.iu.set("Unknown"))}function fu(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void G(pn,"SDK target ID not found for remote ID: "+e.targetId);const r=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(r)}Ps(n).jn(e)}function i2(n,e){n.su.We(e),Ps(n).Hn(e)}function mu(n){n.su=new J8({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ce()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),Ps(n).start(),n.iu.Wa()}function gu(n){return Xr(n)&&!Ps(n).Cn()&&n.Ja.size>0}function Xr(n){return ie(n).tu.size===0}function a2(n){n.su=void 0}async function Y5(n){n.iu.set("Online")}async function Q5(n){n.Ja.forEach(((e,t)=>{fu(n,e)}))}async function X5(n,e){a2(n),gu(n)?(n.iu.za(e),mu(n)):n.iu.set("Unknown")}async function J5(n,e,t){if(n.iu.set("Online"),e instanceof ym&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const o of i.targetIds){if(s.Ja.has(o)){const c=s.Za.get(o);c!==void 0&&(await s.remoteSyncer.rejectListen(c,a),s.Ya.delete(c),s.Za.delete(o)),s.Ja.delete(o)}s.su.removeTarget(o)}})(n,e)}catch(r){G(pn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lo(n,r)}else if(e instanceof xa?n.su.et(e):e instanceof gm?n.su.ot(e):n.su.rt(e),!t.isEqual(se.min()))try{const r=await r2(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const o=i.su.Rt(a);o.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ja.get(d);p&&i.Ja.set(d,p.withResumeToken(u.resumeToken,a))}})),o.targetMismatches.forEach(((u,d)=>{const p=i.Ja.get(u);if(!p)return;i.Ja.set(u,p.withResumeToken(Ue.EMPTY_BYTE_STRING,p.snapshotVersion)),i2(i,u);const y=new wn(p.target,u,d,p.sequenceNumber);fu(i,y)}));const c=(function(d,p){const y=new Map;p.targetChanges.forEach(((R,O)=>{const k=d.Za.get(O);k!==void 0&&y.set(k,R)}));let b=new Ae(he);return p.targetMismatches.forEach(((R,O)=>{const k=d.Za.get(R);k!==void 0&&(b=b.insert(k,O))})),new ji(p.snapshotVersion,y,b,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)})(i,o);return i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){G(pn,"Failed to raise snapshot:",r),await lo(n,r)}}async function lo(n,e,t){if(!As(e))throw e;n.tu.add(1),await Wi(n),n.iu.set("Offline"),t||(t=()=>r2(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{G(pn,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await Fo(n)}))}function o2(n,e){return e().catch((t=>lo(n,t,e)))}async function Bo(n){const e=ie(n),t=mr(e);let r=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:$c;for(;Z5(e);)try{const s=await H5(e.localStore,r);if(s===null){e.Ha.length===0&&t.Nn();break}r=s.batchId,ev(e,s)}catch(s){await lo(e,s)}l2(e)&&c2(e)}function Z5(n){return Xr(n)&&n.Ha.length<10}function ev(n,e){n.Ha.push(e);const t=mr(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function l2(n){return Xr(n)&&!mr(n).Cn()&&n.Ha.length>0}function c2(n){mr(n).start()}async function tv(n){mr(n).er()}async function nv(n){const e=mr(n);for(const t of n.Ha)e.Yn(t.mutations)}async function rv(n,e,t){const r=n.Ha.shift(),s=lu.from(r,e,t);await o2(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Bo(n)}async function sv(n,e){e&&mr(n).Jn&&await(async function(r,s){if((function(a){return j8(a)&&a!==V.ABORTED})(s.code)){const i=r.Ha.shift();mr(r).Mn(),await o2(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Bo(r)}})(n,e),l2(n)&&c2(n)}async function Vd(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),G(pn,"RemoteStore received new credentials");const r=Xr(t);t.tu.add(3),await Wi(t),r&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await Fo(t)}async function iv(n,e){const t=ie(n);e?(t.tu.delete(2),await Fo(t)):e||(t.tu.add(2),await Wi(t),t.iu.set("Unknown"))}function Ps(n){return n._u||(n._u=(function(t,r,s){const i=ie(t);return i.nr(),new by(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Qt:Y5.bind(null,n),zt:Q5.bind(null,n),Ht:X5.bind(null,n),zn:J5.bind(null,n)}),n.nu.push((async e=>{e?(n._u.Mn(),gu(n)?mu(n):n.iu.set("Unknown")):(await n._u.stop(),a2(n))}))),n._u}function mr(n){return n.ou||(n.ou=(function(t,r,s){const i=ie(t);return i.nr(),new Ty(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:tv.bind(null,n),Ht:sv.bind(null,n),Zn:nv.bind(null,n),Xn:rv.bind(null,n)}),n.nu.push((async e=>{e?(n.ou.Mn(),await Bo(n)):(await n.ou.stop(),n.Ha.length>0&&(G(pn,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))}))),n.ou}/**
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
 */class yu{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,o=new yu(e,t,a,s,i);return o.start(r),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(n,e){if(Cn("AsyncQueue",`${e}: ${n}`),As(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class kr{static emptySet(e){return new kr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Q.comparator(t.key,r.key):(t,r)=>Q.comparator(t.key,r.key),this.keyedMap=rs(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Md{constructor(){this.au=new Ae(Q.comparator)}track(e){const t=e.doc.key,r=this.au.get(t);r?e.type!==0&&r.type===3?this.au=this.au.insert(t,e):e.type===3&&r.type!==1?this.au=this.au.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.au=this.au.remove(t):e.type===1&&r.type===2?this.au=this.au.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):J(63341,{ft:e,uu:r}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ws{constructor(e,t,r,s,i,a,o,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((o=>{a.push({type:0,doc:o})})),new ws(e,t,kr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class av{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some((e=>e.Tu()))}}class ov{constructor(){this.queries=$d(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=$d(),i.forEach(((a,o)=>{for(const c of o.Eu)c.onError(r)}))})(this,new j(V.ABORTED,"Firestore shutting down"))}}function $d(){return new Yr((n=>Xm(n)),$o)}async function vu(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.hu()&&e.Tu()&&(r=2):(i=new av,r=e.Tu()?0:1);try{switch(r){case 0:i.lu=await t.onListen(s,!0);break;case 1:i.lu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const o=_u(a,`Initialization of query '${He(e.query)?In(e.query):ui(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,i),i.Eu.push(e),e.Ru(t.onlineState),i.lu&&e.Iu(i.lu)&&Eu(t)}async function wu(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Eu.indexOf(e);a>=0&&(i.Eu.splice(a,1),i.Eu.length===0?s=e.Tu()?0:1:!i.hu()&&e.Tu()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function lv(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const o of a.Eu)o.Iu(s)&&(r=!0);a.lu=s}}r&&Eu(t)}function cv(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.Eu)i.onError(t);r.queries.delete(e)}function Eu(n){n.Pu.forEach((e=>{e.next()}))}var hc;(function(n){n.Default="default",n.Cache="cache"})(hc||(hc={}));class bu{constructor(e,t,r){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=r||{}}Iu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const r=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==hc.Cache}}/**
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
 */class u2{constructor(e){this.key=e}}class h2{constructor(e){this.key=e}}class uv{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=ce(),this.mutatedKeys=ce(),this.Lu=He(e)?lc(e):qc(e),this.Bu=new kr(this.Lu)}get Uu(){return this.Ou}ku(e,t){const r=t?t.qu:new Md,s=t?t.Bu:this.Bu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,o=!1;const[c,u]=this.$u(this.query,s);e.inorderTraversal(((p,y)=>{const b=s.get(p),R=E5(this.query,y)?y:null,O=!!b&&this.mutatedKeys.has(b.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;b&&R?b.data.isEqual(R.data)?O!==k&&(r.track({type:3,doc:R}),F=!0):this.Ku(b,R)||(r.track({type:2,doc:R}),F=!0,(c&&this.Lu(R,c)>0||u&&this.Lu(R,u)<0)&&(o=!0)):!b&&R?(r.track({type:0,doc:R}),F=!0):b&&!R&&(r.track({type:1,doc:b}),F=!0,(c||u)&&(o=!0)),F&&(R?(a=a.add(R),i=k?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}));const d=this.Wu(this.query);if(d)if(He(this.query)){const p=[];a.forEach((R=>p.push(R)));const y=e2(this.query,p);let b=new kr(lc(this.query));for(const R of y)b=b.add(R);a.forEach((R=>{b.has(R.key)||(i=i.delete(R.key),r.track({type:1,doc:R}))})),a=b}else{const p=this.Qu(this.query);for(;a.size>d;){const y=p==="F"?a.last():a.first();a=a.delete(y.key),i=i.delete(y.key),r.track({type:1,doc:y})}}return{Bu:a,qu:r,Uo:o,mutatedKeys:i}}Wu(e){var t;return He(e)?(t=Nl(e))==null?void 0:t.limit:e.limit||void 0}Qu(e){if(He(e)){const t=Nl(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){var r;if(He(e)){const s=(r=Nl(e))==null?void 0:r.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort(((d,p)=>(function(b,R){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{ft:k})}};return O(b)-O(R)})(d.type,p.type)||this.Lu(d.doc,p.doc))),this.Gu(r),s=s??!1;const o=t&&!s?this.zu():[],c=this.Nu.size===0&&this.current&&!s?1:0,u=c!==this.Mu;return this.Mu=c,a.length!==0||u?{snapshot:new ws(this.query,e.Bu,i,a,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ju:o}:{ju:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new Md,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach((t=>this.Ou=this.Ou.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ou=this.Ou.delete(t))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=ce(),this.Bu.forEach((r=>{this.Hu(r.key)&&(this.Nu=this.Nu.add(r.key))}));const t=[];return e.forEach((r=>{this.Nu.has(r)||t.push(new h2(r))})),this.Nu.forEach((r=>{e.has(r)||t.push(new u2(r))})),t}Ju(e){this.Ou=e.Jo,this.Nu=ce();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return ws.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const Tu="SyncEngine";class hv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dv{constructor(e){this.key=e,this.Zu=!1}}class pv{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new Yr((o=>Xm(o)),$o),this.tc=new Map,this.nc=new Set,this.rc=new Ae(Q.comparator),this.sc=new Map,this._c=new cu,this.oc={},this.ac=new Map,this.uc=fr.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function fv(n,e,t=!0){const r=y2(n);let s;const i=r.ec.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Yu()):s=await d2(r,e,t,!0),s}async function mv(n,e){const t=y2(n);await d2(t,e,!0,!1)}async function d2(n,e,t,r){const s=await j5(n.localStore,He(e)?e:cn(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let o;return r&&(o=await gv(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&s2(n.remoteStore,s),o}async function gv(n,e,t,r,s){n.lc=(p,y,b)=>(async function(O,k,F,$){let U=k.view.ku(F);U.Uo&&(U=await Ld(O.localStore,k.query,!1).then((({documents:S})=>k.view.ku(S,U))));const q=$&&$.targetChanges.get(k.targetId),W=$&&$.targetMismatches.get(k.targetId)!=null,Z=k.view.applyChanges(U,O.isPrimaryClient,q,W);return Fd(O,k.targetId,Z.ju),Z.snapshot})(n,p,y,b);const i=await Ld(n.localStore,e,!0),a=new uv(e,i.Jo),o=a.ku(i.documents),c=Gi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=a.applyChanges(o,n.isPrimaryClient,c);Fd(n,t,u.ju);const d=new hv(e,t,a);return n.ec.set(e,d),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),u.snapshot}async function yv(n,e,t){const r=ie(n),s=r.ec.get(e),i=r.tc.get(s.targetId);if(i.length>1)return r.tc.set(s.targetId,i.filter((a=>!$o(a,e)))),void r.ec.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await cc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&pu(r.remoteStore,s.targetId),dc(r,s.targetId)})).catch(Ts)):(dc(r,s.targetId),await cc(r.localStore,s.targetId,!0))}async function _v(n,e){const t=ie(n),r=t.ec.get(e),s=t.tc.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),pu(t.remoteStore,r.targetId))}async function vv(n,e,t){const r=Sv(n);try{const s=await(function(a,o){const c=ie(a),u=Ee.now(),d=o.reduce(((b,R)=>b.add(R.key)),ce());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let R=gt(),O=ce();return c.Qo.getEntries(b,d).next((k=>{R=k,R.forEach(((F,$)=>{$.isValidDocument()||(O=O.add(F))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,R))).next((k=>{p=k;const F=[];for(const $ of o){const U=I8($,p.get($.key).overlayedDocument);U!=null&&F.push(new Kr($.key,U,Kf(U.value.mapValue),ln.exists(!0)))}return c.mutationQueue.addMutationBatch(b,u,F,o)})).next((k=>{y=k;const F=k.applyToLocalDocumentSet(p,O);return c.documentOverlayCache.saveOverlays(b,k.batchId,F)}))})).then((()=>({batchId:y.batchId,changes:fm(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,o,c){let u=a.oc[a.currentUser.toKey()];u||(u=new Ae(he)),u=u.insert(o,c),a.oc[a.currentUser.toKey()]=u})(r,s.batchId,t),await Ki(r,s.changes),await Bo(r.remoteStore)}catch(s){const i=_u(s,"Failed to persist write");t.reject(i)}}async function p2(n,e){const t=ie(n);try{const r=await B5(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.sc.get(i);a&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.Zu=!0:s.modifiedDocuments.size>0?K(a.Zu,14607):s.removedDocuments.size>0&&(K(a.Zu,42227),a.Zu=!1))})),await Ki(t,r,e)}catch(r){await Ts(r)}}function Ud(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ec.forEach(((i,a)=>{const o=a.view.Ru(e);o.snapshot&&s.push(o.snapshot)})),(function(a,o){const c=ie(a);c.onlineState=o;let u=!1;c.queries.forEach(((d,p)=>{for(const y of p.Eu)y.Ru(o)&&(u=!0)})),u&&Eu(c)})(r.eventManager,e),s.length&&r.Xu.zn(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wv(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.sc.get(e),i=s&&s.key;if(i){let a=new Ae(Q.comparator);a=a.insert(i,et.newNoDocument(i,se.min()));const o=ce().add(i),c=new ji(se.min(),new Map,new Ae(he),a,gt(),o);await p2(r,c),r.rc=r.rc.remove(i),r.sc.delete(e),Au(r)}else await cc(r.localStore,e,!1).then((()=>dc(r,e,t))).catch(Ts)}async function Ev(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await F5(t.localStore,e);m2(t,r,null),f2(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ki(t,s)}catch(s){await Ts(s)}}async function bv(n,e,t){const r=ie(n);try{const s=await(function(a,o){const c=ie(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,o).next((p=>(K(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,o))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);m2(r,e,t),f2(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ki(r,s)}catch(s){await Ts(s)}}function f2(n,e){(n.ac.get(e)||[]).forEach((t=>{t.resolve()})),n.ac.delete(e)}function m2(n,e,t){const r=ie(n);let s=r.oc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function dc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.tc.get(e))n.ec.delete(r),t&&n.Xu.Ec(r,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach((r=>{n._c.containsKey(r)||g2(n,r)}))}function g2(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(pu(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),Au(n))}function Fd(n,e,t){for(const r of t)r instanceof u2?(n._c.addReference(r.key,e),Tv(n,r)):r instanceof h2?(G(Tu,"Document no longer in limbo: "+r.key),n._c.removeReference(r.key,e),n._c.containsKey(r.key)||g2(n,r.key)):J(19791,{hc:r})}function Tv(n,e){const t=e.key,r=t.path.canonicalString();n.rc.get(t)||n.nc.has(r)||(G(Tu,"New document in limbo: "+t),n.nc.add(r),Au(n))}function Au(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Q(ye.fromString(e)),r=n.uc.next();n.sc.set(r,new dv(t)),n.rc=n.rc.insert(t,r),s2(n.remoteStore,new wn(cn(xo(t.path)),r,"TargetPurposeLimboResolution",To.ce))}}async function Ki(n,e,t){const r=ie(n),s=[],i=[],a=[];r.ec.isEmpty()||(r.ec.forEach(((o,c)=>{a.push(r.lc(c,e,t).then((u=>{var d;if((u||t)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=hu.vo(c.targetId,u);i.push(p)}})))})),await Promise.all(a),r.Xu.zn(s),await(async function(c,u){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(y=>M.forEach(y.wo,(b=>d.persistence.referenceDelegate.addReference(p,y.targetId,b))).next((()=>M.forEach(y.bo,(b=>d.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))))))}catch(p){if(!As(p))throw p;G(du,"Failed to update sequence numbers: "+p)}for(const p of u){const y=p.targetId;if(!p.fromCache){const b=d.$o.get(y),R=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(R);d.$o=d.$o.insert(y,O)}}})(r.localStore,i))}async function Av(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){G(Tu,"User change. New user:",e.toKey());const r=await n2(t.localStore,e);t.currentUser=e,(function(i,a){i.ac.forEach((o=>{o.forEach((c=>{c.reject(new j(V.CANCELLED,a))}))})),i.ac.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ki(t,r.zo)}}function Iv(n,e){const t=ie(n),r=t.sc.get(e);if(r&&r.Zu)return ce().add(r.key);{let s=ce();const i=t.tc.get(e);if(!i)return s;for(const a of i??[]){const o=t.ec.get(a);s=s.unionWith(o.view.Uu)}return s}}function y2(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=p2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Iv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wv.bind(null,e),e.Xu.zn=lv.bind(null,e.eventManager),e.Xu.Ec=cv.bind(null,e.eventManager),e}function Sv(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ev.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bv.bind(null,e),e}class co{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Po(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return U5(this.persistence,new V5,e.initialUser,this.serializer)}Ic(e){return new t2(uu.C_,this.serializer)}Rc(e){return new z5}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}co.provider={build:()=>new co};class Rv extends co{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){K(this.persistence.referenceDelegate instanceof oo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Py(r,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new t2((r=>oo.C_(r,t)),this.serializer)}}class pc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Av.bind(null,this.syncEngine),await iv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new ov})()}createDatastore(e){const t=Po(e.databaseInfo.databaseId),r=Ey(e.databaseInfo);return Sy(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,o){return new K5(r,s,i,a,o)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ud(this.syncEngine,t,0)),(function(){return Ad.C()?new Ad:new yy})())}createSyncEngine(e,t){return(function(s,i,a,o,c,u,d){const p=new pv(s,i,a,o,c,u);return d&&(p.cc=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);G(pn,"RemoteStore shutting down."),i.tu.add(5),await Wi(i),i.ru.shutdown(),i.iu.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}pc.provider={build:()=>new pc};/**
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
 */class Iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):Cn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const gr="FirestoreClient";class Cv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Mc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{G(gr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(gr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_u(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ll(n,e){n.asyncQueue.verifyOperationInProgress(),G(gr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await n2(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Bd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xv(n);G(gr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Vd(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Vd(e.remoteStore,s))),n._onlineComponents=e}async function xv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(gr,"Using user provided OfflineComponentProvider");try{await Ll(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Qt("Error using user provided cache. Falling back to memory cache: "+t),await Ll(n,new co)}}else G(gr,"Using default OfflineComponentProvider"),await Ll(n,new Rv(void 0));return n._offlineComponents}async function _2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(gr,"Using user provided OnlineComponentProvider"),await Bd(n,n._uninitializedComponentsProvider._online)):(G(gr,"Using default OnlineComponentProvider"),await Bd(n,new pc))),n._onlineComponents}function kv(n){return _2(n).then((e=>e.syncEngine))}async function uo(n){const e=await _2(n),t=e.eventManager;return t.onListen=fv.bind(null,e.syncEngine),t.onUnlisten=yv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=mv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_v.bind(null,e.syncEngine),t}function Pv(n,e,t,r){const s=new Iu(r),i=new bu(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>vu(await uo(n),i))),()=>{s.gc(),n.asyncQueue.enqueueAndForget((async()=>wu(await uo(n),i)))}}function Nv(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,o,c,u){const d=new Iu({next:y=>{d.gc(),a.enqueueAndForget((()=>wu(i,p)));const b=y.docs.has(o);!b&&y.fromCache?u.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&c&&c.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new bu(xo(o.path),d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return vu(i,p)})(await uo(n),n.asyncQueue,e,t,r))),r.promise}function Ov(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,o,c,u){const d=new Iu({next:y=>{d.gc(),a.enqueueAndForget((()=>wu(i,p))),y.fromCache&&c.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new bu(o instanceof di?f5(o):o,d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return vu(i,p)})(await uo(n),n.asyncQueue,e,t,r))),r.promise}function Lv(n,e){const t=new Tn;return n.asyncQueue.enqueueAndForget((async()=>vv(await kv(n),e,t))),t.promise}/**
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
 */const qd="AsyncQueue";class Hd{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Cm(this,"async_queue_retry"),this.jc=()=>{const r=Ol();r&&G(qd,"Visibility state changed to "+r.visibilityState),this.xn.gn()},this.Hc=e;const t=Ol();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Ol();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new Tn;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!As(e))throw e;G(qd,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Qc=!0,e().catch((r=>{throw this.Wc=r,this.Qc=!1,Cn("INTERNAL UNHANDLED ERROR: ",jd(r)),r})).then((r=>(this.Qc=!1,r))))));return this.Hc=t,t}enqueueAfterDelay(e,t,r){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=yu.createAndSchedule(this,e,t,r,(i=>this.Xc(i)));return this.Kc.push(s),s}Jc(){this.Wc&&J(47125,{el:jd(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function jd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Br extends No{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Hd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hd(e),this._firestoreClient=void 0,await e}}}function Dv(n,e){const t=typeof n=="object"?n:mo(),r=typeof n=="string"?n:Qa,s=yr(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fp("firestore");i&&Ly(s,...i)}return s}function qo(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vv(n),n._firestoreClient}function Vv(n){var r,s,i,a;const e=n._freezeSettings(),t=Cy(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Cv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Mv{convertValue(e,t="none"){switch(Fe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[bi].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>Se(a.doubleValue)));return new vt(t)}convertGeoPoint(e){return new hn(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=qi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ms(e));default:return null}}convertTimestamp(e){const t=cr(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ye.fromString(e);K(Am(r),9688,{name:e});const s=new Ei(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(t)||Cn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Su extends Mv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}const Gd="@firebase/firestore",zd="4.16.0";/**
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
 */function Wd(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class v2{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $v(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ss("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $v extends v2{data(){return super.data()}}/**
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
 */function w2(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ru{}class Cu extends Ru{}function Na(n,e,...t){let r=[];e instanceof Ru&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((c=>c instanceof xu)).length,o=i.filter((c=>c instanceof Ho)).length;if(a>1||a>0&&o>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ho extends Cu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ho(e,t,r)}_apply(e){const t=this._parse(e);return E2(e._query,t),new Nn(e.firestore,e.converter,nc(e._query,t))}_parse(e){const t=Yc(e.firestore);return(function(i,a,o,c,u,d,p){let y;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Xd(p,d);const R=[];for(const O of p)R.push(Qd(c,i,O));y={arrayValue:{values:R}}}else y=Qd(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Xd(p,d),y=$y(o,a,p,d==="in"||d==="not-in");return Ve.create(u,d,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Kd(n,e,t){const r=e,s=Ss("where",n);return Ho._create(s,r,t)}class xu extends Ru{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Xt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const o=i.getFlattenedFilters();for(const c of o)E2(a,c),a=nc(a,c)})(e._query,t),new Nn(e.firestore,e.converter,nc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ku extends Cu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ku(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ci(i,a)})(e._query,this._field,this._direction);return new Nn(e.firestore,e.converter,F8(e._query,t))}}function Oa(n,e="asc"){const t=e,r=Ss("orderBy",n);return ku._create(r,t)}class Pu extends Cu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Pu(e,t,r)}_apply(e){return new Nn(e.firestore,e.converter,no(e._query,this._limit,this._limitType))}}function Yd(n){return Pu._create("limit",n,"F")}function Qd(n,e,t){if(typeof(t=Te(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hm(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ye.fromString(t));if(!Q.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cd(n,new Q(r))}if(t instanceof Ce)return cd(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bo(t)}.`)}function Xd(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function E2(n,e){const t=(function(s,i){for(const a of s)for(const o of a.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function b2(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ri{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends v2{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ss("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pr._jsonSchema={type:Me("string",Pr._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class La extends Pr{data(e={}){return super.data(e)}}class Nr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new La(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((o=>{He(s._snapshot.query)?lc(s._snapshot.query):qc(s.query._query);const c=new La(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ri(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((o=>i||o.type!==3)).map((o=>{const c=new La(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ri(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return o.type!==0&&(u=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),d=a.indexOf(o.doc.key)),{type:Uv(o.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Nr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Uv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */Nr._jsonSchemaVersion="firestore/querySnapshot/1.0",Nr._jsonSchema={type:Me("string",Nr._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};/**
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
 */function Or(n){n=zt(n,Ce);const e=zt(n.firestore,Br),t=qo(e);return Nv(t,n._key).then((r=>A2(e,n,r)))}function Dl(n){n=zt(n,Nn);const e=zt(n.firestore,Br),t=qo(e),r=new Su(e);return w2(n._query),Ov(t,n._query).then((s=>new Nr(e,r,n,s)))}function Fv(n,e,t){n=zt(n,Ce);const r=zt(n.firestore,Br),s=b2(n.converter,e,t),i=Yc(r);return T2(r,[Om(i,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ln.none())])}function Da(n,e){const t=zt(n.firestore,Br),r=An(n),s=b2(n.converter,e),i=Yc(n.firestore);return T2(t,[Om(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then((()=>r))}function Bv(n,...e){var u,d,p;n=Te(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Wd(e[r])||(t=e[r++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Wd(e[r])){const y=e[r];e[r]=(u=y.next)==null?void 0:u.bind(y),e[r+1]=(d=y.error)==null?void 0:d.bind(y),e[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let i,a,o;if(n instanceof Ce)a=zt(n.firestore,Br),o=xo(n._key.path),i={next:y=>{e[r]&&e[r](A2(a,n,y))},error:e[r+1],complete:e[r+2]};else{const y=zt(n,Nn);a=zt(y.firestore,Br),o=y._query;const b=new Su(a);i={next:R=>{e[r]&&e[r](new Nr(a,b,y,R))},error:e[r+1],complete:e[r+2]},w2(n._query)}const c=qo(a);return Pv(c,o,s,i)}function T2(n,e){const t=qo(n);return Lv(t,e)}function A2(n,e,t){const r=t.docs.get(e._key),s=new Su(n);return new Pr(n,s,e._key,r,new ri(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){G9(zr),Kt(new Ut("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),o=new Br(new K9(r.getProvider("auth-internal")),new X9(a,r.getProvider("app-check-internal")),g8(a,s),a);return i={useFetchStreams:t,...i},o._setSettings(i),o}),"PUBLIC").setMultipleInstances(!0)),_t(Gd,zd,e),_t(Gd,zd,"esm2020")})();/**
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
 */const I2="firebasestorage.googleapis.com",S2="storageBucket",qv=120*1e3,Hv=600*1e3;/**
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
 */class ke extends Bt{constructor(e,t,r=0){super(Vl(e),`Firebase Storage: ${t} (${Vl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xe||(xe={}));function Vl(n){return"storage/"+n}function Nu(){const n="An unknown error occurred, please check the error payload for server response.";return new ke(xe.UNKNOWN,n)}function jv(n){return new ke(xe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Gv(n){return new ke(xe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ke(xe.UNAUTHENTICATED,n)}function Wv(){return new ke(xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Kv(n){return new ke(xe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Yv(){return new ke(xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qv(){return new ke(xe.CANCELED,"User canceled the upload/download.")}function Xv(n){return new ke(xe.INVALID_URL,"Invalid URL '"+n+"'.")}function Jv(n){return new ke(xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Zv(){return new ke(xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+S2+"' property when initializing the app?")}function ew(){return new ke(xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tw(){return new ke(xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nw(n){return new ke(xe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fc(n){return new ke(xe.INVALID_ARGUMENT,n)}function R2(){return new ke(xe.APP_DELETED,"The Firebase app was deleted.")}function rw(n){return new ke(xe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fi(n,e){return new ke(xe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Qs(n){throw new ke(xe.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Nt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Nt.makeFromUrl(e,t)}catch{return new Nt(e,"")}if(r.path==="")return r;throw Jv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+s+a,"i"),c={bucket:1,path:3};function u(q){q.path_=decodeURIComponent(q.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${d}/b/${s}/o${y}`,"i"),R={bucket:1,path:3},O=t===I2?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",F=new RegExp(`^https?://${O}/${s}/${k}`,"i"),U=[{regex:o,indices:c,postModify:i},{regex:b,indices:R,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let q=0;q<U.length;q++){const W=U[q],Z=W.regex.exec(e);if(Z){const S=Z[W.indices.bucket];let w=Z[W.indices.path];w||(w=""),r=new Nt(S,w),W.postModify(r);break}}if(r==null)throw Xv(e);return r}}class sw{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function iw(n,e,t){let r=1,s=null,i=null,a=!1,o=0;function c(){return o===2}let u=!1;function d(...k){u||(u=!0,e.apply(null,k))}function p(k){s=setTimeout(()=>{s=null,n(b,c())},k)}function y(){i&&clearTimeout(i)}function b(k,...F){if(u){y();return}if(k){y(),d.call(null,k,...F);return}if(c()||a){y(),d.call(null,k,...F);return}r<64&&(r*=2);let U;o===1?(o=2,U=0):U=(r+Math.random())*1e3,p(U)}let R=!1;function O(k){R||(R=!0,y(),!u&&(s!==null?(k||(o=2),clearTimeout(s),p(0)):k||(o=1)))}return p(0),i=setTimeout(()=>{a=!0,O(!0)},t),O}function aw(n){n(!1)}/**
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
 */function ow(n){return n!==void 0}function lw(n){return typeof n=="object"&&!Array.isArray(n)}function Ou(n){return typeof n=="string"||n instanceof String}function Jd(n){return Lu()&&n instanceof Blob}function Lu(){return typeof Blob<"u"}function Zd(n,e,t,r){if(r<e)throw fc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw fc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Du(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function C2(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Lr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lr||(Lr={}));/**
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
 */function cw(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class uw{constructor(e,t,r,s,i,a,o,c,u,d,p,y=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=y,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,O)=>{this.resolve_=R,this.reject_=O,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _a(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=o=>{const c=o.loaded,u=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const o=i.getErrorCode()===Lr.NO_ERROR,c=i.getStatus();if(!o||cw(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Lr.ABORT;r(!1,new _a(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new _a(u,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,o=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(o,o.getResponse());ow(c)?i(c):i()}catch(c){a(c)}else if(o!==null){const c=Nu();c.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,c)):a(c)}else if(s.canceled){const c=this.appDelete_?R2():Qv();a(c)}else{const c=Yv();a(c)}};this.canceled_?t(!1,new _a(!1,null,!0)):this.backoffId_=iw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _a{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function hw(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function dw(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pw(n,e){e&&(n["X-Firebase-GMPID"]=e)}function fw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function mw(n,e,t,r,s,i,a=!0,o=!1){const c=C2(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return pw(d,e),hw(d,t),dw(d,i),fw(d,r),new uw(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,o)}/**
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
 */function gw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yw(...n){const e=gw();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Lu())return new Blob(n);throw new ke(xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _w(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function vw(n){if(typeof atob>"u")throw nw("base-64");return atob(n)}/**
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
 */const rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ml{constructor(e,t){this.data=e,this.contentType=t||null}}function ww(n,e){switch(n){case rn.RAW:return new Ml(x2(e));case rn.BASE64:case rn.BASE64URL:return new Ml(k2(n,e));case rn.DATA_URL:return new Ml(bw(e),Tw(e))}throw Nu()}function x2(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Ew(n){let e;try{e=decodeURIComponent(n)}catch{throw fi(rn.DATA_URL,"Malformed data URL.")}return x2(e)}function k2(n,e){switch(n){case rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw fi(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw fi(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=vw(e)}catch(s){throw s.message.includes("polyfill")?s:fi(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class P2{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw fi(rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=Aw(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function bw(n){const e=new P2(n);return e.base64?k2(rn.BASE64,e.rest):Ew(e.rest)}function Tw(n){return new P2(n).contentType}function Aw(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Qn{constructor(e,t){let r=0,s="";Jd(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Jd(this.data_)){const r=this.data_,s=_w(r,e,t);return s===null?null:new Qn(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Qn(r,!0)}}static getBlob(...e){if(Lu()){const t=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(yw.apply(null,t))}else{const t=e.map(a=>Ou(a)?ww(rn.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let o=0;o<a.length;o++)s[i++]=a[o]}),new Qn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function N2(n){let e;try{e=JSON.parse(n)}catch{return null}return lw(e)?e:null}/**
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
 */function Iw(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Sw(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function O2(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Rw(n,e){return e}class ot{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||Rw}}let va=null;function Cw(n){return!Ou(n)||n.length<2?n:O2(n)}function L2(){if(va)return va;const n=[];n.push(new ot("bucket")),n.push(new ot("generation")),n.push(new ot("metageneration")),n.push(new ot("name","fullPath",!0));function e(i,a){return Cw(a)}const t=new ot("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new ot("size");return s.xform=r,n.push(s),n.push(new ot("timeCreated")),n.push(new ot("updated")),n.push(new ot("md5Hash",null,!0)),n.push(new ot("cacheControl",null,!0)),n.push(new ot("contentDisposition",null,!0)),n.push(new ot("contentEncoding",null,!0)),n.push(new ot("contentLanguage",null,!0)),n.push(new ot("contentType",null,!0)),n.push(new ot("metadata","customMetadata",!0)),va=n,va}function xw(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Nt(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function kw(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return xw(r,n),r}function D2(n,e,t){const r=N2(e);return r===null?null:kw(n,r,t)}function Pw(n,e,t,r){const s=N2(e);if(s===null||!Ou(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const d=n.bucket,p=n.fullPath,y="/b/"+a(d)+"/o/"+a(p),b=Du(y,t,r),R=C2({alt:"media",token:u});return b+R})[0]}function Nw(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class V2{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function M2(n){if(!n)throw Nu()}function Ow(n,e){function t(r,s){const i=D2(n,s,e);return M2(i!==null),i}return t}function Lw(n,e){function t(r,s){const i=D2(n,s,e);return M2(i!==null),Pw(i,s,n.host,n._protocol)}return t}function $2(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Wv():s=zv():t.getStatus()===402?s=Gv(n.bucket):t.getStatus()===403?s=Kv(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Dw(n){const e=$2(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=jv(n.path)),i.serverResponse=s.serverResponse,i}return t}function Vw(n,e,t){const r=e.fullServerUrl(),s=Du(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,o=new V2(s,i,Lw(n,t),a);return o.errorHandler=Dw(e),o}function Mw(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function $w(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=Mw(null,e)),r}function Uw(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let U="";for(let q=0;q<2;q++)U=U+Math.random().toString().slice(2);return U}const c=o();a["Content-Type"]="multipart/related; boundary="+c;const u=$w(e,r,s),d=Nw(u,t),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+c+"--",b=Qn.getBlob(p,r,y);if(b===null)throw ew();const R={name:u.fullPath},O=Du(i,n.host,n._protocol),k="POST",F=n.maxUploadRetryTime,$=new V2(O,k,Ow(n,t),F);return $.urlParams=R,$.headers=a,$.body=b.uploadData(),$.errorHandler=$2(e),$}class Fw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Qs("cannot .send() more than once");if(Gr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Bw extends Fw{initXhr(){this.xhr_.responseType="text"}}function U2(){return new Bw}/**
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
 */class qr{constructor(e,t){this._service=e,t instanceof Nt?this._location=t:this._location=Nt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new qr(e,t)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return O2(this._location.path)}get storage(){return this._service}get parent(){const e=Iw(this._location.path);if(e===null)return null;const t=new Nt(this._location.bucket,e);return new qr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw rw(e)}}function qw(n,e,t){n._throwIfRoot("uploadBytes");const r=Uw(n.storage,n._location,L2(),new Qn(e,!0),t);return n.storage.makeRequestWithTokens(r,U2).then(s=>({metadata:s,ref:n}))}function Hw(n){n._throwIfRoot("getDownloadURL");const e=Vw(n.storage,n._location,L2());return n.storage.makeRequestWithTokens(e,U2).then(t=>{if(t===null)throw tw();return t})}function jw(n,e){const t=Sw(n._location.path,e),r=new Nt(n._location.bucket,t);return new qr(n.storage,r)}/**
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
 */function Gw(n){return/^[A-Za-z]+:\/\//.test(n)}function zw(n,e){return new qr(n,e)}function F2(n,e){if(n instanceof Vu){const t=n;if(t._bucket==null)throw Zv();const r=new qr(t,t._bucket);return e!=null?F2(r,e):r}else return e!==void 0?jw(n,e):n}function Ww(n,e){if(e&&Gw(e)){if(n instanceof Vu)return zw(n,e);throw fc("To use ref(service, url), the first argument must be a Storage instance.")}else return F2(n,e)}function ep(n,e){const t=e==null?void 0:e[S2];return t==null?null:Nt.makeFromBucketSpec(t,n)}function Kw(n,e,t,r={}){n.host=`${e}:${t}`;const s=Gr(e);s&&wc(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:_p(i,n.app.options.projectId))}class Vu{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=I2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qv,this._maxUploadRetryTime=Hv,this._requests=new Set,s!=null?this._bucket=Nt.makeFromBucketSpec(s,this._host):this._bucket=ep(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=ep(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qr(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new sw(R2());{const a=mw(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const tp="@firebase/storage",np="0.14.3";/**
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
 */const B2="storage";function Yw(n,e,t){return n=Te(n),qw(n,e,t)}function Qw(n){return n=Te(n),Hw(n)}function Xw(n,e){return n=Te(n),Ww(n,e)}function Jw(n=mo(),e){n=Te(n);const r=yr(n,B2).getImmediate({identifier:e}),s=fp("storage");return s&&Zw(r,...s),r}function Zw(n,e,t,r={}){Kw(n,e,t,r)}function eE(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Vu(t,r,s,e,zr)}function tE(){Kt(new Ut(B2,eE,"PUBLIC").setMultipleInstances(!0)),_t(tp,np,""),_t(tp,np,"esm2020")}tE();const nE={apiKey:"AIzaSyBF4P62ICvi8NcXTV1hqYr6ktrzr_Pwg4g",authDomain:"heritagevault-12a72.firebaseapp.com",projectId:"heritagevault-12a72",storageBucket:"heritagevault-12a72.firebasestorage.app",messagingSenderId:"357035240092",appId:"1:357035240092:web:ab95eef42e90105ba15b59",measurementId:"G-RVDX527SFW"},jo=Tp(nE),ct=P9(jo),tt=Dv(jo),rE=Jw(jo);u4().then(n=>(n&&l4(jo),n));const $l=n=>({id:n.id,...n.data()});async function sE(n){if(!n.defaultVaultId)return null;const e=n.defaultVaultId,[t,r,s,i]=await Promise.all([Or(An(tt,`vaults/${e}`)),Dl(Na(nr(tt,`vaults/${e}/memories`),Kd("archived","==",!1),Oa("createdAt","desc"),Yd(12))),Dl(Na(nr(tt,`vaults/${e}/familyMembers`),Oa("fullName","asc"))),Dl(Na(nr(tt,`vaults/${e}/stories`),Kd("status","==","published"),Oa("updatedAt","desc"),Yd(12)))]);return t.exists()?{vaultId:e,vault:t.data(),memories:r.docs.map(a=>$l(a)),familyMembers:s.docs.map(a=>$l(a)),stories:i.docs.map(a=>$l(a))}:null}const q2=n=>n.toLocaleLowerCase();function iE(n,e){if(!e.length)return!0;const t=q2([n.title,n.description,n.location??"",...n.tags??[]].join(" "));return e.some(r=>t.includes(r))}function aE(n,e){var d;const t=((d=q2(e).match(/[a-z]{3,}/g))==null?void 0:d.filter(p=>!["about","family","their","show","tell","with","from","that","this","what","where","when"].includes(p)))??[],r=n.memories.filter(p=>iE(p,t)),s=r.length?r:n.memories,i=[...new Set(s.map(p=>p.year).filter(p=>p!==null))].sort((p,y)=>p-y),a=new Map;s.forEach(p=>{var y;(y=p.location)!=null&&y.trim()&&a.set(p.location,(a.get(p.location)??0)+1)});const o=[...a.entries()].map(([p,y])=>({name:p,count:y})).sort((p,y)=>y.count-p.count),c=t.length?`matching “${t.join(" ")}”`:"across your archive",u=s.length?`${s.length} ${s.length===1?"memory":"memories"} ${c}, connected to ${n.members.length} family member${n.members.length===1?"":"s"}.`:"Your visual answer will appear here as soon as your vault contains memories or family members.";return{prompt:e,verdict:u,memories:s,members:n.members,years:i,locations:o,evidence:s.slice(0,6).map(p=>({title:p.title,detail:p.description||"A preserved family memory.",kind:p.type,year:p.year}))}}const be=n=>{const e=document.createElement("span");return e.textContent=n,e.innerHTML},rp=n=>n?String(n):"Undated";function Mu(n){const e=new Map;return n.members.forEach(t=>{const r=t.fullName.trim().toLocaleLowerCase();if(!r)return;const s=e.get(r);if(s){s.records+=1,!s.relationship&&t.relationship&&(s.relationship=t.relationship);return}e.set(r,{id:t.id,fullName:t.fullName,relationship:t.relationship||"Family member",records:1})}),[...e.values()].slice(0,8)}function oE(n){const e=Mu(n);if(!e.length)return'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">account_tree</span><p>Add a relative to begin your living constellation.</p><small>Each new connection becomes explorable here.</small></div>';const t=e.map((s,i)=>({x:15+i*31%72,y:i%2?66:28}));return`<div class="atlas-network atlas-network--constellation"><svg class="atlas-network__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${t.slice(1).map(s=>`<line x1="${t[0].x}" y1="${t[0].y}" x2="${s.x}" y2="${s.y}" />`).join("")}</svg>${e.map((s,i)=>{const a=t[i],o=s.records>1?` · ${s.records} linked records`:"";return`<button class="atlas-person" data-atlas-person="${be(s.id)}" data-atlas-label="${be(s.fullName)}" style="--x:${a.x}%;--y:${a.y}%;--atlas-delay:${i*70}ms"><span class="atlas-person__dot"></span><strong>${be(s.fullName)}</strong><small>${be(s.relationship)}${o}</small></button>`}).join("")}</div>`}function lE(n){if(!n.years.length)return'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">calendar_month</span><p>Add a year to a memory to unlock the living timeline.</p><small>Chronology turns your archive into a story.</small></div>';const e=new Map;n.memories.forEach(i=>{i.year&&e.set(i.year,(e.get(i.year)??0)+1)});const t=n.years[0],r=n.years.at(-1)??t,s=Math.max(1,r-t);return`<div class="atlas-timeline"><div class="atlas-timeline__range"><span>${t}</span><strong>${r===t?"A defining year":`${r-t} years of family history`}</strong><span>${r}</span></div><div class="atlas-timeline__rail"></div>${n.years.map(i=>`<button class="atlas-timeline__point" data-atlas-year="${i}" data-atlas-label="${i} · ${e.get(i)??0} memor${e.get(i)===1?"y":"ies"}" style="left:${(i-t)/s*90+5}%"><span style="--point-size:${22+Math.min(12,(e.get(i)??1)*4)}px"></span><b>${i}</b><small>${e.get(i)??0}</small></button>`).join("")}</div>`}function cE(n){return n.locations.length?`<div class="atlas-map" aria-label="Memory geography"><div class="atlas-map__legend"><span>Memory density</span><i></i><i></i><i></i></div>${n.locations.slice(0,7).map((e,t)=>{const r=15+t*29%68,s=18+t*37%56;return`<button class="atlas-map__place" data-atlas-location="${be(e.name)}" data-atlas-label="${be(e.name)} · ${e.count} memor${e.count===1?"y":"ies"}" style="left:${r}%;top:${s}%"><i style="--size:${24+Math.min(22,e.count*8)}px"></i><span>${be(e.name)} <b>${e.count}</b></span></button>`}).join("")}</div>`:'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">location_on</span><p>Places appear when memories include a location.</p><small>Add a city, home, or landmark to bring your map to life.</small></div>'}function uE(n){return n.evidence.length?`<div class="atlas-evidence">${n.evidence.map((e,t)=>`<button class="atlas-evidence__card" data-atlas-evidence="${t}" data-atlas-label="${be(e.title)} · ${rp(e.year)}"><span class="material-symbols-outlined">${e.kind==="photo"?"photo":e.kind==="audio"?"graphic_eq":"description"}</span><div><p>${be(e.title)}</p><small>${be(e.detail)}</small></div><b>${rp(e.year)}</b></button>`).join("")}</div>`:'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">verified</span><p>Evidence cards appear as memories are added.</p><small>Every visual answer stays traceable to its source.</small></div>'}function Ul(n,e){return e==="relationships"?`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Connected people</p><div class="atlas-expand-detail__grid">${Mu(n).map(r=>`<button type="button" data-atlas-person="${be(r.id)}" data-atlas-label="${be(r.fullName)} · ${be(r.relationship)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">person</span><span><b>${be(r.fullName)}</b><small>${be(r.relationship)}${r.records>1?` · ${r.records} records`:""}</small></span></button>`).join("")}</div></div>`:e==="places"?`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Places in this answer</p><div class="atlas-expand-detail__grid">${n.locations.map(t=>`<button type="button" data-atlas-location="${be(t.name)}" data-atlas-label="${be(t.name)} · ${t.count} memor${t.count===1?"y":"ies"}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">location_on</span><span><b>${be(t.name)}</b><small>${t.count} preserved memor${t.count===1?"y":"ies"}</small></span></button>`).join("")||'<p class="atlas-expand-detail__empty">Add locations to memories to build your family geography.</p>'}</div></div>`:`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Moments on the timeline</p><div class="atlas-expand-detail__grid">${n.memories.filter(t=>t.year).sort((t,r)=>(t.year??0)-(r.year??0)).map(t=>`<button type="button" data-atlas-year="${t.year}" data-atlas-label="${t.year} · ${be(t.title)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">event</span><span><b>${t.year} · ${be(t.title)}</b><small>${be(t.dateLabel||t.location||"Preserved family memory")}</small></span></button>`).join("")||'<p class="atlas-expand-detail__empty">Add years to memories to build a family timeline.</p>'}</div></div>`}function hE(n,e,t){const r=aE(e,t),s=r.years.length?`${r.years[0]}–${r.years.at(-1)}`:"Undated archive";n.innerHTML=`<section class="atlas-hero"><div><p class="atlas-eyebrow">HeritageAtlas · visual answer</p><h1>${be(t)}</h1><p>${be(r.verdict)}</p></div><div class="atlas-answer-mark"><span class="material-symbols-outlined">auto_awesome</span><small>Evidence-led</small></div></section><section class="atlas-insights" aria-label="Archive summary"><div><b>${r.memories.length}</b><span>memories in view</span></div><div><b>${Mu(r).length}</b><span>people connected</span></div><div><b>${r.locations.length}</b><span>places discovered</span></div><div><b>${s}</b><span>story horizon</span></div></section><section class="atlas-grid"><article class="atlas-panel atlas-panel--wide" data-atlas-panel="relationships"><header><div><span class="material-symbols-outlined">account_tree</span><p>Relationship constellation</p></div><button type="button" data-atlas-focus="relationships">Explore</button></header>${oE(r)}${Ul(r,"relationships")}</article><article class="atlas-panel" data-atlas-panel="places"><header><div><span class="material-symbols-outlined">map</span><p>Memory geography</p></div><button type="button" data-atlas-focus="places">Explore</button></header>${cE(r)}${Ul(r,"places")}</article><article class="atlas-panel atlas-panel--wide" data-atlas-panel="timeline"><header><div><span class="material-symbols-outlined">timeline</span><p>Living timeline</p></div><button type="button" data-atlas-focus="timeline">Explore</button></header>${lE(r)}${Ul(r,"timeline")}</article><article class="atlas-panel" data-atlas-panel="evidence"><header><div><span class="material-symbols-outlined">verified</span><p>Source evidence</p></div><span class="atlas-count">${r.evidence.length} records</span></header>${uE(r)}</article></section><aside class="atlas-inspector" aria-live="polite"><span class="material-symbols-outlined">touch_app</span><p>Select a person, year, place, or source to inspect the connection.</p></aside>`,n.querySelector(".atlas-hero .atlas-eyebrow").textContent="Heritage Atlas · visual answer";const i=n.querySelector(".atlas-inspector"),a=o=>{n.querySelectorAll(".is-selected").forEach(c=>c.classList.remove("is-selected")),o.classList.add("is-selected"),i&&(i.innerHTML=`<span class="material-symbols-outlined">auto_awesome</span><p><b>${be(o.dataset.atlasLabel??"Archive connection")}</b><br/>This signal is drawn from your private archive and can be explored alongside its related memories.</p>`)};n.querySelectorAll("[data-atlas-year], [data-atlas-location], [data-atlas-person], [data-atlas-evidence]").forEach(o=>o.addEventListener("click",()=>a(o))),n.querySelectorAll("[data-atlas-focus]").forEach(o=>o.addEventListener("click",()=>{const c=n.querySelector(`[data-atlas-panel="${o.dataset.atlasFocus}"]`),u=!(c!=null&&c.classList.contains("is-expanded"));n.querySelectorAll("[data-atlas-panel]").forEach(d=>d.classList.remove("is-expanded")),n.querySelectorAll("[data-atlas-focus]").forEach(d=>{d.textContent="Explore"}),c==null||c.classList.toggle("is-expanded",u),o.textContent=u?"Collapse":"Explore",c==null||c.scrollIntoView({behavior:"smooth",block:"center"}),c==null||c.classList.add("is-focused"),window.setTimeout(()=>c==null?void 0:c.classList.remove("is-focused"),1100)}))}function dE(n){var r,s,i;const e=document.createElement("main");e.id="atlas-screen",e.className="atlas-screen",e.innerHTML='<div class="atlas-app-shell"><aside data-sidebar class="atlas-sidebar vault-nav hidden flex-col p-6 lg:flex"><div class="mb-10"><img class="brand-logo" src="./heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">explore</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md" data-logout-label>Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="mt-6 border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div></aside><section class="atlas-main"><header class="atlas-topbar"><button type="button" class="atlas-brand" data-atlas-back><img src="./heritageatlas-mark.svg" alt=""/><span>HeritageAtlas</span></button><p>Ask your archive. Explore the answer.</p><button type="button" class="atlas-close" data-atlas-back aria-label="Return to Vault"><span class="material-symbols-outlined">close</span></button></header><div class="atlas-shell"><section class="atlas-intro"><div><p class="atlas-eyebrow">Beyond the wall of text</p><h2>Your family, made explorable.</h2><p>Every answer is a timeline, relationship constellation, map, and trail back to the original memories.</p></div><form class="atlas-query" data-atlas-query><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask HeritageAtlas" value="How did our family story unfold over time?" /><button type="submit">Explore answer <span class="material-symbols-outlined">arrow_forward</span></button></form><div class="atlas-suggestions"><button type="button">How did our family story unfold over time?</button><button type="button">Show the people connected to our memories</button><button type="button">Where do our memories take place?</button></div></section><div data-atlas-answer class="atlas-answer"><div class="atlas-loading">Preparing an evidence-led visual answer…</div></div></div></section></div>',(r=e.querySelector(".brand-logo"))==null||r.setAttribute("alt","Heritage Atlas"),(s=e.querySelector("[aria-label='HeritageAtlas navigation']"))==null||s.setAttribute("aria-label","Heritage Atlas navigation");const t=e.querySelector("[data-dashboard-view='atlas']");return t&&(t.lastChild.textContent="Heritage Atlas"),e.querySelector(".atlas-brand span").textContent="Heritage Atlas",(i=e.querySelector("[data-atlas-query] input"))==null||i.setAttribute("aria-label","Ask Heritage Atlas"),e.querySelectorAll("[data-atlas-back]").forEach(a=>a.addEventListener("click",n)),e}function pE(n,e){const t=n.querySelector("[data-atlas-answer]"),r=n.querySelector("[data-atlas-query]"),s=r==null?void 0:r.querySelector("input"),i=async a=>{if(!t)return;t.innerHTML='<div class="atlas-loading">Reading the memories, people, places, and dates in your archive…</div>';const o=await e();if(!o){t.innerHTML='<div class="atlas-empty atlas-empty--large"><span class="material-symbols-outlined">inventory_2</span><h3>Your Atlas is ready for its first memory.</h3><p>Add a few memories and relatives, then return here to explore your family story visually.</p></div>';return}hE(t,o,a)};r==null||r.addEventListener("submit",a=>{a.preventDefault(),i((s==null?void 0:s.value.trim())||"How did our family story unfold over time?")}),n.querySelectorAll(".atlas-suggestions button").forEach(a=>a.addEventListener("click",()=>{var o;s&&(s.value=((o=a.textContent)==null?void 0:o.trim())||""),i((s==null?void 0:s.value)||"")})),i((s==null?void 0:s.value)||"How did our family story unfold over time?")}const mt=n=>{const e=document.createElement("span");return e.textContent=String(n??""),e.innerHTML},kn=(n,e={})=>{const t="heritage-atlas-analytics",r=JSON.parse(localStorage.getItem(t)??"[]");r.push({name:n,at:new Date().toISOString(),...e}),localStorage.setItem(t,JSON.stringify(r.slice(-100)))};function fE(){if(document.getElementById("ha-demo-polish"))return;const n=document.createElement("style");n.id="ha-demo-polish",n.textContent=`
    .ha-live-badge{display:inline-flex;align-items:center;gap:.5rem;margin-top:1rem;padding:.52rem .82rem;border:1px solid rgba(73,115,77,.3);border-radius:999px;background:rgba(255,255,255,.66);color:#2c3a2e;font:700 .75rem/1 Satoshi,system-ui;letter-spacing:.03em;text-decoration:none;box-shadow:0 8px 24px rgba(28,40,32,.08)}
    .ha-live-badge i{width:.5rem;height:.5rem;border-radius:999px;background:#40a35a;box-shadow:0 0 0 0 rgba(64,163,90,.45);animation:haPulse 1.8s infinite}.ha-live-badge:hover{transform:translateY(-2px)}@keyframes haPulse{70%{box-shadow:0 0 0 8px rgba(64,163,90,0)}100%{box-shadow:0 0 0 0 rgba(64,163,90,0)}}
    .ha-powered-footer{position:fixed;right:1.15rem;bottom:1.05rem;z-index:70;display:flex;align-items:center;gap:.45rem;padding:.48rem .72rem;border:1px solid rgba(119,87,77,.16);border-radius:999px;background:rgba(255,253,251,.9);backdrop-filter:blur(12px);color:#6a5a51;font:600 .69rem/1.2 Satoshi,system-ui;box-shadow:0 8px 22px rgba(38,31,26,.12)}html.dark .ha-powered-footer{background:rgba(35,31,27,.9);color:#e9ddd5}.ha-powered-footer b{color:#2c3a2e}html.dark .ha-powered-footer b{color:#e9ddd5}.ha-powered-footer button{border:0;border-left:1px solid rgba(119,87,77,.18);background:transparent;color:inherit;cursor:pointer}
    .ha-overlay{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:1.25rem;background:rgba(24,25,22,.55);backdrop-filter:blur(10px)}.ha-dialog{width:min(100%,46rem);max-height:min(88vh,52rem);overflow:auto;border:1px solid rgba(119,87,77,.2);border-radius:1.5rem;background:#fffdfa;color:#283327;box-shadow:0 28px 80px rgba(16,18,14,.35)}.ha-dialog__hero{min-height:14rem;padding:2rem;display:flex;align-items:flex-end;background:linear-gradient(135deg,#233327,#728a70);color:#fff}.ha-dialog__body{padding:clamp(1.5rem,4vw,2.5rem)}.ha-dialog__close{float:right;border:0;background:transparent;color:inherit;font-size:1.75rem;cursor:pointer}.ha-dialog__meta,.ha-dialog__tags{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0}.ha-pill{padding:.35rem .58rem;border-radius:999px;background:#f5e7df;color:#805d4e;font:700 .74rem/1 Satoshi,system-ui}.ha-dialog__people{display:flex;flex-wrap:wrap;gap:.55rem}.ha-dialog__person{padding:.45rem .65rem;border:1px solid #e8ddd6;border-radius:.7rem;font:600 .8rem Satoshi,system-ui}.ha-dialog__ask{margin-top:1.5rem;border:0;border-radius:.8rem;background:#283327;color:#fff;padding:.85rem 1.05rem;font:700 .9rem Satoshi,system-ui;cursor:pointer}
    .ha-search{width:min(100%,52rem);padding:1.2rem}.ha-search input{width:100%;padding:1rem 1.1rem;border:1px solid #d8ccc4;border-radius:.85rem;background:#fff;color:#283327;font:500 1rem Satoshi,system-ui}.ha-search__meta{margin:.75rem 0;color:#786c64;font:600 .78rem Satoshi,system-ui}.ha-search__results{display:grid;gap:.55rem;max-height:55vh;overflow:auto}.ha-search__result{width:100%;padding:1rem;border:1px solid #eee3dc;border-radius:.9rem;background:#fff;text-align:left;color:#283327;cursor:pointer}.ha-search__result:hover{border-color:#a47c6b;background:#fdf7f2}.ha-search__result b,.ha-search__result small{display:block}.ha-search__result small{margin-top:.3rem;color:#716963}.ha-search__empty{padding:1.4rem 0;color:#716963;text-align:center}
    .ha-tour{position:fixed;inset:0;z-index:210;pointer-events:none}.ha-tour__spot{position:fixed;border:2px solid #d4a44c;border-radius:1rem;box-shadow:0 0 0 9999px rgba(20,22,18,.55);transition:all .35s ease}.ha-tour__card{position:fixed;right:1.25rem;bottom:4.5rem;width:min(22rem,calc(100vw - 2.5rem));padding:1.25rem;border-radius:1rem;background:#fffdfa;color:#283327;box-shadow:0 18px 48px rgba(0,0,0,.28);pointer-events:auto}.ha-tour__card p{margin:.4rem 0 1rem;color:#625b55;line-height:1.5}.ha-tour__actions{display:flex;justify-content:space-between;align-items:center;gap:.75rem}.ha-tour button{border:0;border-radius:.65rem;padding:.65rem .85rem;background:#283327;color:#fff;font:700 .8rem Satoshi,system-ui;cursor:pointer}.ha-tour button:first-child{background:transparent;color:#79594c}
    .ha-shortcuts{width:min(100%,34rem);padding:1.4rem}.ha-shortcuts kbd{display:inline-block;min-width:1.6rem;padding:.2rem .35rem;border:1px solid #d7cbc3;border-bottom-width:2px;border-radius:.35rem;background:#fff;font:700 .75rem Satoshi,system-ui;text-align:center}.ha-shortcuts li{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;border-bottom:1px solid #f0e6df;color:#514c47}.ha-share{border:1px solid rgba(119,87,77,.22);border-radius:.7rem;background:#fff;color:#77574d;padding:.55rem .7rem;font:700 .76rem Satoshi,system-ui;cursor:pointer}
    .hv-agent__skeleton{display:grid;gap:.55rem;margin-top:.8rem}.hv-agent__skeleton i{display:block;height:.75rem;border-radius:999px;background:linear-gradient(90deg,#eee7df,#fbf6f1,#eee7df);background-size:200% 100%;animation:haShimmer 1.3s infinite}.hv-agent__skeleton i:nth-child(2){width:82%}.hv-agent__skeleton i:nth-child(3){width:61%}@keyframes haShimmer{to{background-position:-200% 0}}.hv-agent__error{display:grid;gap:.55rem;padding:1rem;border:1px solid rgba(186,26,26,.24);border-radius:.85rem;background:#fff5f3;color:#78251e}.hv-agent__error span{font-size:.88rem}.hv-agent__error div{display:flex;gap:.5rem}.hv-agent__error button{border:0;border-radius:.55rem;background:#7d3329;color:#fff;padding:.48rem .65rem;font:700 .75rem Satoshi,system-ui;cursor:pointer}.hv-agent__error button+button{background:#f1ded8;color:#7d3329}.hv-agent__recent{margin-top:1rem}
    @media(max-width:640px){.ha-powered-footer{display:none}.ha-live-badge{font-size:.68rem}}
  `,document.head.append(n)}function yt(){var n;(n=document.querySelector(".ha-overlay"))==null||n.remove()}function H2(n,e){var s,i,a;yt();const t=(n.familyMemberIds??n.related_entity_ids??[]).map(o=>{var c;return((c=Le.members.find(u=>u.id===o))==null?void 0:c.fullName)??o}),r=document.createElement("div");r.className="ha-overlay",r.innerHTML=`<article class="ha-dialog" role="dialog" aria-modal="true" aria-label="${mt(n.title)}"><div class="ha-dialog__hero"><button class="ha-dialog__close" aria-label="Close">×</button><div><span class="ha-pill">${mt(n.type??n.entity_type??"memory")}</span><h2 style="font:600 clamp(2rem,6vw,3.8rem)/.98 Satoshi,system-ui;margin:.8rem 0 0">${mt(n.title)}</h2></div></div><div class="ha-dialog__body"><div class="ha-dialog__meta"><span class="ha-pill">${mt(n.year??n.event_year??"Undated")}</span><span class="ha-pill">${mt(n.location??"Place not yet recorded")}</span></div><p style="font-size:1.05rem;line-height:1.7">${mt(n.description??"This preserved artifact is waiting for a fuller description.")}</p><div class="ha-dialog__tags">${(n.tags??[]).map(o=>`<span class="ha-pill">#${mt(o)}</span>`).join("")}</div>${t.length?`<div class="ha-dialog__people">${t.map(o=>`<span class="ha-dialog__person">${mt(o)}</span>`).join("")}</div>`:""}<button class="ha-dialog__ask" data-ask-memory>Ask the agent about this <span aria-hidden="true">→</span></button></div></article>`,r.addEventListener("click",o=>{o.target===r&&yt()}),(s=r.querySelector(".ha-dialog__close"))==null||s.addEventListener("click",yt),(i=r.querySelector("[data-ask-memory]"))==null||i.addEventListener("click",()=>{const o=`Tell me the story behind ${n.title}${n.location?` in ${n.location}`:""}.`;sessionStorage.setItem("heritage-atlas-pending-prompt",o),kn("memory_agent_handoff",{title:n.title}),yt(),e("agent"),setTimeout(()=>{const c=document.querySelector("[data-agent-input]");c&&(c.value=o,c.focus())},300)}),document.body.append(r),(a=r.querySelector(".ha-dialog__close"))==null||a.focus(),kn("memory_detail_opened",{title:n.title})}function mE(n){const e=()=>{var a;yt();const t=document.createElement("div");t.className="ha-overlay",t.innerHTML='<section class="ha-dialog ha-search" role="dialog" aria-modal="true" aria-label="Search archive"><button class="ha-dialog__close" aria-label="Close">×</button><h2 style="margin:0 0 .8rem;font:700 1.55rem Satoshi,system-ui">Search the live archive</h2><input autofocus placeholder="Search titles, places, or descriptions…" aria-label="Search archive"/><p class="ha-search__meta">ClickHouse Cloud · heritage_atlas_facts</p><div class="ha-search__results"><p class="ha-search__empty">Start typing to search the preserved archive.</p></div></section>';const r=t.querySelector("input"),s=t.querySelector(".ha-search__results");let i=0;r.addEventListener("input",()=>{window.clearTimeout(i);const o=r.value.trim();if(o.length<2){s.innerHTML='<p class="ha-search__empty">Enter at least two letters.</p>';return}i=window.setTimeout(async()=>{s.innerHTML='<p class="ha-search__empty">Searching ClickHouse Cloud…</p>';try{const d=(await(await fetch(`/api/search?q=${encodeURIComponent(o)}`)).json()).results??[];s.innerHTML=d.length?d.map(p=>`<button type="button" class="ha-search__result" data-search-result="${mt(p.fact_id)}"><b>${mt(p.title)}</b><small>${mt(p.event_year??"Undated")} · ${mt(p.location??"Location pending")} · ${mt(p.entity_type??"memory")}</small></button>`).join(""):'<p class="ha-search__empty">No preserved memories match that search.</p>',d.forEach(p=>{var y;return(y=s.querySelector(`[data-search-result="${CSS.escape(p.fact_id)}"]`))==null?void 0:y.addEventListener("click",()=>H2(p,n))}),kn("archive_search",{term:o,results:d.length})}catch{s.innerHTML='<p class="ha-search__empty">Search could not reach the live archive. Please retry.</p>'}},220)}),t.addEventListener("click",o=>{o.target===t&&yt()}),(a=t.querySelector(".ha-dialog__close"))==null||a.addEventListener("click",yt),document.body.append(t),r.focus()};document.addEventListener("click",t=>{t.target.closest("[aria-label='Search'], [data-archive-search]")&&(t.preventDefault(),e())})}function gE(n){const e=document.querySelector(".landing-page .hv-hero__cta-row");if(!e||e.querySelector(".ha-live-badge"))return;const t=document.createElement("a");t.href="#agent",t.className="ha-live-badge",t.innerHTML="<i></i> Live demo — Trigger.dev + ClickHouse",t.addEventListener("click",r=>{r.preventDefault(),kn("live_demo_opened"),n("agent")}),e.append(t)}function yE(){var e;if(document.querySelector(".ha-powered-footer"))return;const n=document.createElement("div");n.className="ha-powered-footer",n.innerHTML='<b>Powered by</b> Trigger.dev chat.agent() · ClickHouse Cloud · Claude Sonnet <button type="button" data-ha-settings aria-label="Open settings">⚙</button>',(e=n.querySelector("[data-ha-settings]"))==null||e.addEventListener("click",_E),document.body.append(n)}function _E(){var r;yt();const n=JSON.parse(localStorage.getItem("heritage-atlas-preferences")??"{}"),e=document.createElement("div");e.className="ha-overlay",e.innerHTML=`<section class="ha-dialog ha-search" role="dialog" aria-modal="true" aria-label="Archive settings"><button class="ha-dialog__close" aria-label="Close">×</button><h2 style="margin:0 0 1rem;font:700 1.55rem Satoshi,system-ui">Archive settings</h2><form style="display:grid;gap:1rem"><label>Theme<select name="theme" style="display:block;width:100%;margin-top:.4rem;padding:.7rem;border:1px solid #ddd0c8;border-radius:.65rem"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select></label><label>Name displayed in your archive<input name="displayName" value="${mt(n.displayName??document.documentElement.dataset.authUserName??"")}" style="display:block;width:100%;margin-top:.4rem;padding:.7rem;border:1px solid #ddd0c8;border-radius:.65rem" /></label><label style="display:flex;gap:.6rem;align-items:center"><input name="notifications" type="checkbox" ${n.notifications?"checked":""}/> Receive archive activity reminders</label><button style="border:0;border-radius:.7rem;padding:.75rem;background:#283327;color:#fff;font-weight:700;cursor:pointer">Save preferences</button></form><p class="ha-search__meta">Preferences are kept on this device until account-level preferences are enabled.</p></section>`;const t=e.querySelector("form");t.elements.namedItem("theme").value=n.theme??"system",t.addEventListener("submit",s=>{s.preventDefault();const i=new FormData(t),a={theme:String(i.get("theme")),displayName:String(i.get("displayName")??"").trim(),notifications:i.get("notifications")==="on"};localStorage.setItem("heritage-atlas-preferences",JSON.stringify(a));const o=a.theme==="dark"||a.theme==="system"&&matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",o),a.displayName&&document.querySelectorAll("[data-auth-user-name]").forEach(c=>{c.textContent=a.displayName}),kn("settings_saved",{theme:a.theme,notifications:a.notifications}),yt()}),e.addEventListener("click",s=>{s.target===e&&yt()}),(r=e.querySelector(".ha-dialog__close"))==null||r.addEventListener("click",yt),document.body.append(e)}function vE(){var e;yt();const n=document.createElement("div");n.className="ha-overlay",n.innerHTML='<section class="ha-dialog ha-shortcuts" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts"><button class="ha-dialog__close" aria-label="Close">×</button><h2 style="margin:0 0 1rem;font:700 1.5rem Satoshi,system-ui">Keyboard shortcuts</h2><ul style="margin:0;padding:0;list-style:none"><li><span>Focus Agent input</span><kbd>/</kbd></li><li><span>Go to Vault</span><span><kbd>g</kbd> <kbd>v</kbd></span></li><li><span>Go to Family Map</span><span><kbd>g</kbd> <kbd>f</kbd></span></li><li><span>Go to Story Mode</span><span><kbd>g</kbd> <kbd>s</kbd></span></li><li><span>Go to Agent</span><span><kbd>g</kbd> <kbd>a</kbd></span></li><li><span>Show shortcuts</span><kbd>?</kbd></li></ul></section>',n.addEventListener("click",t=>{t.target===n&&yt()}),(e=n.querySelector("button"))==null||e.addEventListener("click",yt),document.body.append(n)}function wE(n){let e=0;document.addEventListener("keydown",t=>{const r=t.target;if(!(r!=null&&r.matches("input, textarea, select")&&t.key!=="Escape")){if(t.key==="?"){t.preventDefault(),vE();return}if(t.key==="/"){t.preventDefault(),n("agent"),setTimeout(()=>{var s;return(s=document.querySelector("[data-agent-input]"))==null?void 0:s.focus()},280);return}if(t.key.toLowerCase()==="g"){e=Date.now();return}if(Date.now()-e<900){const s={v:"vault",f:"family-map",s:"story-mode",a:"agent"}[t.key.toLowerCase()];e=0,s&&(t.preventDefault(),kn("shortcut_navigation",{view:s}),n(s))}}})}function EE(n){var i,a;if(localStorage.getItem("heritage-atlas-tour-complete"))return;const e=[{selector:"#vault-screen",title:"Your Vault",text:"Your archive at a glance: memories, people, and chapters, all grounded in live data."},{selector:"[data-dashboard-view='agent']",title:"Ask visually",text:"Agent turns your questions into charts, maps, and relationship diagrams."},{selector:"[data-dashboard-view='story-mode']",title:"Follow the narrative",text:"Story Mode guides each chapter with evidence and a readable path."},{selector:"[data-dashboard-view='family-map']",title:"See the constellation",text:"Family Map reveals who connects the archive across generations."}];let t=0;const r=document.createElement("div");r.className="ha-tour",r.innerHTML='<div class="ha-tour__spot"></div><section class="ha-tour__card"><small data-tour-progress></small><h2 data-tour-title></h2><p data-tour-text></p><div class="ha-tour__actions"><button data-tour-skip>Skip tour</button><button data-tour-next>Next</button></div></section>';const s=()=>{const o=e[t],c=document.querySelector(o.selector),u=r.querySelector(".ha-tour__spot");if(c){const d=c.getBoundingClientRect();Object.assign(u.style,{top:`${Math.max(8,d.top)}px`,left:`${Math.max(8,d.left)}px`,width:`${Math.max(40,d.width)}px`,height:`${Math.max(40,d.height)}px`})}r.querySelector("[data-tour-progress]").textContent=`${t+1} of ${e.length}`,r.querySelector("[data-tour-title]").textContent=o.title,r.querySelector("[data-tour-text]").textContent=o.text,r.querySelector("[data-tour-next]").textContent=t===e.length-1?"Finish":"Next"};(i=r.querySelector("[data-tour-skip]"))==null||i.addEventListener("click",()=>{localStorage.setItem("heritage-atlas-tour-complete","1"),r.remove()}),(a=r.querySelector("[data-tour-next]"))==null||a.addEventListener("click",()=>{if(t+=1,t>=e.length){localStorage.setItem("heritage-atlas-tour-complete","1"),kn("onboarding_completed"),r.remove();return}s()}),document.body.append(r),s()}function bE(n){fE(),yE(),gE(n),mE(n),wE(n),document.addEventListener("heritage:memory-detail",(e=>{var s,i;const t=(s=e.detail)==null?void 0:s.id,r=Le.memories.find(a=>a.id===t)??((i=e.detail)==null?void 0:i.memory);r&&H2(r,n)})),document.addEventListener("heritage:view",(e=>{var t;kn("page_view",{view:(t=e.detail)==null?void 0:t.view})})),document.addEventListener("heritage:story-route",()=>{const e=document.querySelector("#story-mode-screen header");if(!e||e.querySelector(".ha-share"))return;const t=document.createElement("button");t.className="ha-share",t.textContent="Share story",t.addEventListener("click",async()=>{var s;const r=`${location.origin}${location.pathname}#story-mode?chapter=roots`;await((s=navigator.clipboard)==null?void 0:s.writeText(r)),t.textContent="Link copied",setTimeout(()=>{t.textContent="Share story"},1600),kn("story_shared")}),e.append(t)}),setTimeout(()=>EE(),700)}const pt=n=>{const e=document.querySelector(n);if(!e)throw new Error(`Missing required element: ${n}`);return e},fe={landing:pt(".landing-page"),login:pt("#login-screen"),vault:pt("#vault-screen"),familyMap:pt("#family-map-screen"),storyMode:pt("#story-mode-screen"),agent:pt("#agent-screen"),loginForm:pt("#loginForm"),registerForm:pt("#registerForm"),authHeading:pt("#login-screen header h2"),authSubheading:pt("#login-screen header p"),authSwitch:pt(".auth-switch"),emailDivider:pt(".relative.mb-8.flex.items-center"),footerPrompt:pt("#footerPrompt"),authError:pt("#authError")};let Dt="landing",j2="login",Wt=[],sn,ir=null,Xn=!1,En=1;function G2(n=document){n.querySelectorAll("img[alt='HeritageAtlas']").forEach(e=>{e.alt="Heritage Atlas"}),n.querySelectorAll("[aria-label='HeritageAtlas navigation']").forEach(e=>{e.setAttribute("aria-label","Heritage Atlas navigation")}),n.querySelectorAll("[data-dashboard-view='atlas'], .relative-page__brand").forEach(e=>{Array.from(e.childNodes).forEach(t=>{var r;t.nodeType===Node.TEXT_NODE&&((r=t.textContent)!=null&&r.includes("HeritageAtlas"))&&(t.textContent=t.textContent.replaceAll("HeritageAtlas","Heritage Atlas"))})})}async function TE(){if(Xn)return Le;const n=ct.currentUser;if(!n)return null;const e=await Or(An(tt,"users",n.uid));if(!e.exists())return null;const t=await sE(e.data());return t?{vault:t.vault,members:t.familyMembers,memories:t.memories,stories:t.stories}:null}function AE(){var a,o;const n=Le.memories.map(c=>c.year).filter(c=>c!==null).sort((c,u)=>c-u),e={memories:String(Le.memories.length),familyMembers:String(Le.members.length),timeline:n.length?`${n[0]}–${n.at(-1)}`:"—",stories:String(Le.stories.length)};document.querySelectorAll("[data-stat]").forEach(c=>{const u=c.dataset.stat;u&&e[u]&&(c.textContent=e[u])}),document.querySelectorAll("[data-demo-banner]").forEach(c=>c.remove());const t=document.querySelector("#vault-screen .vault-main");t&&(t.insertAdjacentHTML("afterbegin",'<div data-demo-banner class="mb-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-secondary/30 bg-secondary-container/50 px-5 py-3 text-sm text-on-surface"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary">auto_awesome</span><b>Demo Mode</b> · Exploring the read-only Banda–Chama family archive.</span><button type="button" data-exit-demo class="font-semibold text-secondary underline underline-offset-4">Exit demo</button></div>'),(a=t.querySelector("[data-exit-demo]"))==null||a.addEventListener("click",RE));const r=document.querySelector("#story-mode-screen h1"),s=(o=r==null?void 0:r.parentElement)==null?void 0:o.querySelector("p"),i=document.querySelector("#story-mode-screen article h2");r&&(r.textContent="“How did the Banda–Chama story unfold?”"),s&&(s.textContent="A visual inquiry grounded in the seeded demonstration archive"),i&&(i.textContent="The Banda–Chama Family Story")}function IE(){var s;const n=document.querySelector("#story-mode-screen > .flex > section");if(!n)return;n.innerHTML='<div class="story-experience"><div class="story-experience__inner"><section class="story-hero"><div><p class="story-kicker">Guided family narrative</p><h1>Follow the threads that made this family.</h1><p>Story Mode turns evidence into a guided reading path. Begin with a chapter, inspect the source moments beside it, then ask the archive what should come next.</p></div><div class="story-hero__status"><span class="material-symbols-outlined">auto_awesome</span><div><b>Visual reading guide</b><small>4 chapters · 19 source memories · 114 years</small></div></div></section><nav class="story-path" aria-label="Story reading path"><button class="story-path__step is-active" type="button" data-story-chapter="roots"><i class="material-symbols-outlined">mail</i><b>01 · Begin</b><small>The letter that started the archive</small></button><button class="story-path__step" type="button" data-story-chapter="table"><i class="material-symbols-outlined">table_restaurant</i><b>02 · Gather</b><small>A ritual with room for everyone</small></button><button class="story-path__step" type="button" data-story-chapter="routes"><i class="material-symbols-outlined">route</i><b>03 · Travel</b><small>Routes, stamps, and borrowed roads</small></button><button class="story-path__step" type="button" data-story-chapter="future"><i class="material-symbols-outlined">auto_stories</i><b>04 · Continue</b><small>The next generation takes the pen</small></button></nav><section class="story-layout"><article class="story-paper story-paper--guided"><header class="story-paper__header"><div><p class="story-kicker" data-story-kicker>Chapter 01 · Begin</p><h2 data-story-title>The blue trunk and the promise of books</h2></div><button type="button" data-story-next><span class="material-symbols-outlined">arrow_forward</span>Next chapter</button></header><div class="story-chapter-summary" data-story-summary>Start here: a rain-stained postcard explains why Samuel began preserving the small details that distance could erase.</div><div class="story-paper__body" data-story-body><p>In 1912, Samuel Banda wrote home from a railway platform in Livingstone. His postcard had room for only three hurried lines, yet he made space for rain on the tracks, the sound of a whistle, and a promise to bring home a proper atlas. It was the first record in what would become the Banda–Chama archive.</p><p>Years later, when Samuel took his first teaching post in Mongu, he wrote again—this time about books, and the hope that every child might have one to borrow. Beatrice kept both letters in a blue trunk alongside an atlas, two school slates, and a hand-cranked radio. The trunk was not meant to be a museum. It was simply how they kept one another close.</p><div class="story-journey"><div><b>1912</b><span>A postcard begins the thread</span></div><div><b>1920</b><span>A teacher writes home about books</span></div><div><b>1935</b><span>The blue trunk is inventoried</span></div></div></div></article><aside class="story-storyline"><section class="story-sidecard"><h3><span class="material-symbols-outlined">verified</span>Evidence trail</h3><p>Each chapter is anchored in original archive material. Select a card to see why it matters.</p><div class="story-evidence"><button type="button" data-story-evidence="postcard"><span class="material-symbols-outlined">mail</span><span><b>Postcard from the railway</b><small>Livingstone · 1912</small></span></button><button type="button" data-story-evidence="letter"><span class="material-symbols-outlined">history_edu</span><span><b>Samuel’s first school letter</b><small>Mongu · 1920</small></span></button><button type="button" data-story-evidence="trunk"><span class="material-symbols-outlined">inventory_2</span><span><b>The blue trunk inventory</b><small>Kabwe · 1935</small></span></button></div><div class="story-inspector" data-story-inspector>Select a source to reveal how it moves the family story forward.</div></section><section class="story-sidecard"><h3><span class="material-symbols-outlined">explore</span>How to explore</h3><p>Move chapter by chapter, choose a source, or ask a question below. HeritageAtlas turns each question into an evidence-led path.</p></section></aside></section></div></div><footer class="story-composer"><div class="story-composer__inner"><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask about another family memory" placeholder="Ask about another family memory..."/><button type="button"><span class="material-symbols-outlined">send</span><span>Explore</span></button></div><p class="story-composer__hint">Try: “What changed when the family moved?” · “Show the stories behind the Sunday table.”</p></footer>';const e=[{id:"roots",kicker:"Chapter 01 · Begin",title:"The blue trunk and the promise of books",summary:"Start here: a rain-stained postcard explains why Samuel began preserving the small details that distance could erase.",body:'<p>In 1912, Samuel Banda wrote home from a railway platform in Livingstone. His postcard had room for only three hurried lines, yet he made space for rain on the tracks, the sound of a whistle, and a promise to bring home a proper atlas. It was the first record in what would become the Banda–Chama archive.</p><p>Years later, when Samuel took his first teaching post in Mongu, he wrote again—this time about books, and the hope that every child might have one to borrow. Beatrice kept both letters in a blue trunk alongside an atlas, two school slates, and a hand-cranked radio. The trunk was not meant to be a museum. It was simply how they kept one another close.</p><div class="story-journey"><div><b>1912</b><span>A postcard begins the thread</span></div><div><b>1920</b><span>A teacher writes home about books</span></div><div><b>1935</b><span>The blue trunk is inventoried</span></div></div>'},{id:"table",kicker:"Chapter 02 · Gather",title:"A table large enough for everyone",summary:"Follow the ritual that turned recipes, laughter, and listening into a family language.",body:'<p>At Martha’s Sunday table, no conversation was too small to keep. The enamel plates and Beatrice’s embroidered cloth made a stage for arrivals, apologies, job news, and stories that grew funnier with every retelling.</p><p>Martha’s garden fed the table, but it also supplied its wisdom. In a cassette recorded at dusk, she named each plant and then said a family grows the same way: slowly, by being tended. Decades later, Nandi found Beatrice’s recipe card—‘stir until the house smells right’—and understood that the instructions were really an invitation to make extra for neighbours.</p><div class="story-journey"><div><b>1951</b><span>The first Sunday table</span></div><div><b>1984</b><span>Martha records the garden</span></div><div><b>2007</b><span>Four generations gather</span></div></div>'},{id:"routes",kicker:"Chapter 03 · Travel",title:"Routes, stamps, and borrowed roads",summary:"Trace the movement of people, photographs, and stories between the homes that shaped the family.",body:'<p>Joseph’s passport is full of stamps, but the more revealing marks are the addresses written in the margins: Harare, Bulawayo, Lusaka, then home again. Each border crossing carried practical news and a few photographs for the people who could not travel.</p><p>Daniel later placed a cassette recorder on the living-room table and asked Joseph to explain the move, the missing suitcase, and the song nobody could finish. The recording reveals that migration was not a single departure. It was a repeated act of remembering where to return.</p><div class="story-journey"><div><b>1961</b><span>Ruth catalogues the trunks</span></div><div><b>1967</b><span>Joseph’s passport opens routes</span></div><div><b>2023</b><span>Tapiwa walks the old road</span></div></div>'},{id:"future",kicker:"Chapter 04 · Continue",title:"The next keepers",summary:"The archive becomes alive when the youngest generation adds questions, maps, and new ways to remember.",body:'<p>Malia’s list begins where the photographs stop: Who took this? Why were they laughing? Where did the blue trunk sleep? Her questions make visible the work an archive still has to do.</p><p>Linda’s short film brings letters, cassettes, and lunch-table photographs into the same room. Miles responds with a hand-drawn map of railway lines, garden paths, and addresses, calling it ‘How we kept finding each other.’ Theo will inherit not a finished history, but a living invitation to add his own.</p><div class="story-journey"><div><b>2022</b><span>Questions enter the archive</span></div><div><b>2025</b><span>Linda premieres the family film</span></div><div><b>2026</b><span>Miles maps the routes home</span></div></div>'}],t=i=>{const a=e.find(o=>o.id===i)??e[0];n.querySelector("[data-story-kicker]").textContent=a.kicker,n.querySelector("[data-story-title]").textContent=a.title,n.querySelector("[data-story-summary]").textContent=a.summary,n.querySelector("[data-story-body]").innerHTML=a.body,n.querySelectorAll("[data-story-chapter]").forEach(o=>o.classList.toggle("is-active",o.dataset.storyChapter===a.id))};n.querySelectorAll("[data-story-chapter]").forEach(i=>i.addEventListener("click",()=>t(i.dataset.storyChapter??"roots"))),(s=n.querySelector("[data-story-next]"))==null||s.addEventListener("click",()=>{const i=e.findIndex(a=>{var o;return(o=n.querySelector(`[data-story-chapter="${a.id}"]`))==null?void 0:o.classList.contains("is-active")});t(e[(i+1)%e.length].id)});const r={postcard:"This is the archive’s earliest dated record. It gives the story a starting place, a journey, and Samuel’s own voice.",letter:"The letter turns an aspiration—books for children—into a recurring family value carried through later generations.",trunk:"The inventory proves that preservation was already a family practice long before the archive became digital."};n.querySelectorAll("[data-story-evidence]").forEach(i=>i.addEventListener("click",()=>{n.querySelectorAll("[data-story-evidence]").forEach(o=>o.classList.remove("is-selected")),i.classList.add("is-selected");const a=n.querySelector("[data-story-inspector]");a&&(a.textContent=r[i.dataset.storyEvidence??""]??"This source is part of the family’s evidence trail.")}))}function SE(){Xn=!0,sn==null||sn(),Wt=Le.members,ir="martha",Hr(),AE(),Ct("vault")}function RE(){var n;Xn=!1,Wt=[],ir=null,(n=document.querySelector("[data-demo-banner]"))==null||n.remove(),Hr(),Ct(ct.currentUser?"vault":"landing")}function ho(n){const e=document.createElement("span");return e.textContent=n,e.innerHTML}function CE(n){const e=n.birthYear??"",t=n.deathYear??"Present";return e?`${e}–${t}`:String(t)}function $u(n){const e=n.querySelector("[data-family-connectors]"),t=n.querySelector("[data-family-map-stage]");if(!e||!t)return;const r=t.getBoundingClientRect();e.replaceChildren(),Wt.filter(s=>s.parentId).forEach(s=>{const i=n.querySelector(`[data-family-node-id="${s.parentId}"]`),a=n.querySelector(`[data-family-node-id="${s.id}"]`);if(!i||!a)return;const o=i.getBoundingClientRect(),c=a.getBoundingClientRect(),u=(o.left+o.width/2-r.left)/En,d=(o.bottom-r.top)/En,p=(c.left+c.width/2-r.left)/En,y=(c.top-r.top)/En,b=d+Math.max(30,(y-d)/2),R=document.createElementNS("http://www.w3.org/2000/svg","path");R.setAttribute("d",`M ${u} ${d} V ${b} H ${p} V ${y}`),R.setAttribute("class","family-connector"),e.append(R)})}function xE(n,e){En=Math.min(1.35,Math.max(.7,Number(e.toFixed(2))));const t=n.querySelector("[data-family-map-stage]");t&&(t.style.transform=`scale(${En})`);const r=n.querySelector("[data-map-zoom-status]");r&&(r.textContent=`Map zoom ${Math.round(En*100)}%`),requestAnimationFrame(()=>$u(n))}function Hr(){var i,a;const n=document.querySelector("#family-map-screen .family-map-canvas"),e=n==null?void 0:n.querySelector("[data-family-map-content]");if(!n||!e)return;if(!Wt.length){e.innerHTML='<div class="flex min-h-[520px] items-center justify-center"><div class="max-w-md rounded-2xl border border-dashed border-secondary/40 bg-surface-container-lowest/80 p-10 text-center shadow-sm"><span class="material-symbols-outlined mb-4 text-4xl text-secondary">account_tree</span><h3 class="font-display-lg text-2xl font-semibold text-primary">Your family map is ready</h3><p class="mt-3 leading-7 text-on-surface-variant">Add your first family member, then choose who they are connected to as your archive grows.</p><button data-open-relative class="mt-6 rounded-full bg-primary px-5 py-3 font-label-md text-label-md text-on-primary">Add your first relative</button></div></div>',(i=e.querySelector("[data-open-relative]"))==null||i.addEventListener("click",()=>document.dispatchEvent(new Event("heritage:add-relative")));return}const t=new Map(Wt.map(o=>[o.id,o])),r=(o,c=new Set)=>!o.parentId||!t.has(o.parentId)||c.has(o.id)?0:(c.add(o.id),r(t.get(o.parentId),c)+1),s=new Map;Wt.forEach(o=>{const c=r(o);s.set(c,[...s.get(c)??[],o])}),e.innerHTML=[...s.entries()].sort(([o],[c])=>o-c).map(([o,c])=>`<div class="family-generation grid gap-7 ${c.length>1?"sm:grid-cols-2 xl:grid-cols-3":"justify-items-center"}" data-generation="${o}">${c.map(u=>`<button type="button" data-family-node-id="${u.id}" class="map-node ${ir===u.id?"is-selected":""} relative z-10 w-full max-w-xs rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 text-center"><span class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined text-2xl">person</span></span><span class="block font-display-lg text-xl font-semibold text-primary">${ho(u.fullName)}</span><span class="mt-1 block text-xs uppercase tracking-widest text-secondary">${ho(u.relationship||"Family member")} · ${CE(u)}</span></button>`).join("")}</div>`).join("")+'<button data-open-relative type="button" class="relative z-10 mx-auto flex min-h-36 w-full max-w-xs items-center justify-center rounded-2xl border border-dashed border-secondary/40 bg-surface-container-low p-5 text-center text-secondary"><span><span class="material-symbols-outlined mb-1 text-2xl">add</span><span class="block font-label-md text-label-md">Add a connected relative</span></span></button>',e.querySelectorAll("[data-family-node-id]").forEach(o=>o.addEventListener("click",()=>{ir=o.dataset.familyNodeId??null,Hr()})),(a=e.querySelector("[data-open-relative]"))==null||a.addEventListener("click",()=>document.dispatchEvent(new Event("heritage:add-relative"))),requestAnimationFrame(()=>$u(n))}async function kE(n){var r;const t=(r=(await Or(An(tt,"users",n))).data())==null?void 0:r.defaultVaultId;if(sn==null||sn(),!t){Wt=[],Hr();return}sn=Bv(Na(nr(tt,`vaults/${t}/familyMembers`),Oa("fullName","asc")),s=>{Wt=s.docs.map(i=>({id:i.id,...i.data()})),ir&&!Wt.some(i=>i.id===ir)&&(ir=null),Hr()})}function Ct(n){Dt=n,fe.landing.classList.toggle("is-hidden",n!=="landing"),fe.login.style.display=n==="login"?"flex":"none",fe.vault.style.display=n==="vault"?"flex":"none",fe.familyMap.style.display=n==="family-map"?"flex":"none",fe.storyMode.style.display=n==="story-mode"?"flex":"none",fe.agent.style.display=n==="agent"?"flex":"none";const e=document.getElementById("atlas-screen");e&&(e.style.display=n==="atlas"?"flex":"none"),n==="family-map"&&document.dispatchEvent(new Event("heritage:family-route")),n==="story-mode"&&document.dispatchEvent(new Event("heritage:story-route")),n==="agent"&&document.dispatchEvent(new Event("heritage:agent-route")),document.dispatchEvent(new CustomEvent("heritage:view",{detail:{view:n}})),window.scrollTo({top:0,behavior:"smooth"}),history.pushState({view:n},"",n==="landing"?"#":`#${n}`)}function mc(n){j2=n,Va();const e=n==="register";fe.loginForm.classList.toggle("is-hidden",e),fe.registerForm.classList.toggle("is-hidden",!e),fe.authSwitch.classList.toggle("register-active",e),fe.authHeading.textContent=e?"Begin your legacy":"Enter the Vault",fe.authSubheading.textContent=e?"Create a sanctuary for the stories that matter.":"Sign in to continue preserving what matters.",fe.emailDivider.classList.toggle("is-hidden",e),fe.footerPrompt.innerHTML=e?'Already have a vault? <a class="font-semibold text-primary hover:underline" href="#" data-login-link>Enter the Vault</a>':`Don't have a vault yet? <a class="font-semibold text-primary hover:underline" href="#" data-register-link>Create account</a>`,document.querySelectorAll(".auth-tab").forEach(t=>{const r=t.dataset.mode===n;t.setAttribute("aria-selected",String(r)),t.classList.toggle("text-primary",r),t.classList.toggle("text-on-surface-variant",!r)})}function Va(){fe.authError.textContent="",fe.authError.classList.add("hidden")}function Xs(n){fe.authError.textContent=n,fe.authError.classList.remove("hidden")}function Fl(n){const e=n instanceof Error&&"code"in n?String(n.code):"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")?"That email and password do not match an account.":e.includes("email-already-in-use")?"An account already exists for this email. Try signing in instead.":e.includes("weak-password")?"Choose a stronger password with at least 8 characters.":e.includes("invalid-email")?"Enter a valid email address.":"We could not complete that request. Please try again."}function wa(n,e,t){const r=n.querySelector('button[type="submit"]');r&&(r.disabled=e,r.textContent=e?"Securing your vault…":t)}function Ea(n){return(n.trim().split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("")||"AK").toUpperCase()}function gc(n,e){var i;const t=((i=e==null?void 0:e.split("@")[0])==null?void 0:i.replace(/[._-]+/g," ").replace(/\b\w/g,a=>a.toUpperCase()))||"Vault keeper",r=(n==null?void 0:n.trim())||t,s=r.split(/\s+/)[0]||"there";document.documentElement.dataset.authUserName=r,document.documentElement.dataset.authUserInitials=Ea(r),document.querySelectorAll("[data-auth-user-name]").forEach(a=>{a.textContent=r}),document.querySelectorAll("[data-sidebar] > div:last-child p.font-semibold").forEach(a=>{a.textContent=r}),document.querySelectorAll("[data-auth-user-initials]").forEach(a=>{a.textContent=Ea(r)}),document.querySelectorAll("#vault-screen > section > header .bg-primary.font-label-md, #story-mode-screen header .bg-primary.text-xs").forEach(a=>{a.textContent=Ea(r)}),document.querySelectorAll("[data-auth-greeting]").forEach(a=>{a.textContent=`Good morning, ${s}.`}),document.querySelectorAll("#vault-screen > section > header h2").forEach(a=>{a.textContent=`Good morning, ${s}.`}),document.dispatchEvent(new CustomEvent("heritage:identity",{detail:{name:r,initials:Ea(r)}}))}function PE(){const n=document.querySelector("[data-archive-canvas]");!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches||n.querySelectorAll("[data-archive-tile]").forEach(e=>{let t=0,r=0,s=0,i=0;e.addEventListener("pointerdown",a=>{if(a.button!==0)return;const o=n.getBoundingClientRect(),c=e.getBoundingClientRect();t=a.clientX,r=a.clientY,s=c.left-o.left,i=c.top-o.top,e.style.left=`${s}px`,e.style.top=`${i}px`,e.style.right="auto",e.style.bottom="auto",e.style.transform="rotate(0deg)",e.style.zIndex="5",e.setPointerCapture(a.pointerId)}),e.addEventListener("pointermove",a=>{if(!e.hasPointerCapture(a.pointerId))return;const o=Math.max(0,n.clientWidth-e.offsetWidth),c=Math.max(0,n.clientHeight-e.offsetHeight);e.style.left=`${Math.min(o,Math.max(0,s+a.clientX-t))}px`,e.style.top=`${Math.min(c,Math.max(0,i+a.clientY-r))}px`}),e.addEventListener("pointerup",a=>{e.hasPointerCapture(a.pointerId)&&e.releasePointerCapture(a.pointerId),e.style.zIndex="2"})})}async function NE(n){const e=An(tt,"users",n.uid),t=await Da(nr(tt,"vaults"),{name:`${n.displayName||"My family"}’s Vault`,description:"A private home for the stories that matter.",ownerId:n.uid,memberIds:[n.uid],coverImageUrl:null,createdAt:gn(),updatedAt:gn()});await Fv(e,{displayName:n.displayName||"Vault keeper",email:n.email||"",photoURL:null,defaultVaultId:t.id,createdAt:gn(),lastSeenAt:gn()},{merge:!0})}function OE(){var S,w,A;PE(),document.querySelectorAll("[data-demo-mode]").forEach(_=>{_.addEventListener("click",SE)});const n=document.createElement("div");n.className="memory-page",n.innerHTML='<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">add_photo_alternate</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a new memory</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Preserve a photo, document, recording, or the story behind it.</p></div><button type="button" data-close-memory aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Memory title</label><input name="title" required class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Sunday at grandmother’s table" /></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Type</label><select name="type" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Year</label><input name="year" type="number" min="1000" max="2100" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="1958" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Description</label><textarea name="description" required rows="3" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="What should your family remember about this?" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Attachment <span class="font-normal text-on-surface-variant">(optional)</span></label><input name="asset" type="file" class="block w-full text-sm text-on-surface-variant" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></div><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="flex justify-end gap-3"><button type="button" data-close-memory class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></form></div>',n.innerHTML=`
    <header class="memory-page__topbar">
      <div class="memory-page__brand"><img src="./heritageatlas-mark.svg" alt="" /><span>Heritage Atlas</span></div>
      <button type="button" class="memory-page__close" data-close-memory aria-label="Close memory editor"><span class="material-symbols-outlined">close</span></button>
    </header>
    <main class="memory-page__content">
      <div class="memory-page__heading"><div><p class="atlas-eyebrow">Preserve a moment</p><h2>Add a new memory</h2><p>Capture the context behind a photograph, document, recording, or family story. It will become part of your searchable, explorable archive.</p></div></div>
      <form class="memory-page__form">
        <div class="memory-page__field memory-page__field--wide"><label for="memory-title">Memory title</label><input id="memory-title" name="title" required placeholder="e.g. Sunday at grandmother’s table" /></div>
        <div class="memory-page__field"><label for="memory-type">Type</label><select id="memory-type" name="type"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div>
        <div class="memory-page__field"><label for="memory-year">Year</label><input id="memory-year" name="year" type="number" min="1000" max="2100" placeholder="1958" /></div>
        <div class="memory-page__field"><label for="memory-location">Location</label><input id="memory-location" name="location" placeholder="e.g. Lusaka, Zambia" /></div>
        <div class="memory-page__field"><label for="memory-date">Date label</label><input id="memory-date" name="dateLabel" placeholder="e.g. August 1958" /></div>
        <div class="memory-page__field memory-page__field--wide"><label for="memory-description">Description</label><textarea id="memory-description" name="description" required placeholder="Tell the story that should travel with this memory."></textarea></div>
        <div class="memory-page__field memory-page__field--wide"><label for="memory-asset">Attachment</label><label class="memory-page__dropzone" for="memory-asset"><span class="material-symbols-outlined">cloud_upload</span><span>Choose a photo, recording, document, or video</span><input id="memory-asset" name="asset" type="file" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></label></div>
        <div class="memory-page__footer"><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="memory-page__actions"><button type="button" data-close-memory class="border border-secondary text-secondary">Cancel</button><button type="submit" class="bg-primary text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></div>
      </form>
    </main>`,document.body.append(n);const e=()=>{if(n.classList.add("is-open"),Xn){const _=n.querySelector("[data-memory-status]");_&&(_.textContent="Demo Mode is read-only. Create an account to preserve a new memory.",_.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant")}};document.querySelectorAll("[data-new-memory]").forEach(_=>_.addEventListener("click",e)),n.querySelectorAll("[data-close-memory]").forEach(_=>_.addEventListener("click",()=>n.classList.remove("is-open"))),n.addEventListener("click",_=>{_.target===n&&n.classList.remove("is-open")}),(S=n.querySelector("form"))==null||S.addEventListener("submit",async _=>{var Pe;_.preventDefault();const E=_.currentTarget,I=n.querySelector("[data-memory-status]");if(!E.reportValidity()||Xn)return;if(!ct.currentUser){I&&(I.textContent="Sign in to save memories to your private vault.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const de=(Pe=(await Or(An(tt,"users",ct.currentUser.uid))).data())==null?void 0:Pe.defaultVaultId;if(!de){I&&(I.textContent="No vault is associated with this account yet.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const ue=E.querySelector('button[type="submit"]');ue&&(ue.disabled=!0,ue.textContent="Saving memory…");try{const Tt=new FormData(E),qt=Tt.get("asset");let vr="";if(qt instanceof File&&qt.size>0){const Go=`vaults/${de}/memories/${crypto.randomUUID()}-${qt.name.replace(/[^a-zA-Z0-9._-]/g,"-")}`,Yi=await Yw(Xw(rE,Go),qt);vr=await Qw(Yi.ref)}await Da(nr(tt,`vaults/${de}/memories`),{title:Tt.get("title"),description:Tt.get("description"),type:Tt.get("type"),assetUrl:vr,thumbnailUrl:null,year:Number(Tt.get("year"))||null,dateLabel:String(Tt.get("dateLabel")||"").trim()||null,location:String(Tt.get("location")||"").trim()||null,familyMemberIds:[],tags:[],archived:!1,createdBy:ct.currentUser.uid,createdAt:gn(),updatedAt:gn()}),E.reset(),n.classList.remove("is-open")}catch{I&&(I.textContent="We could not save this memory. Please try again.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{ue&&(ue.disabled=!1,ue.textContent="Save memory")}});const t=document.querySelector("#story-mode-screen aside");t&&(t.setAttribute("data-sidebar",""),t.className="vault-nav hidden flex-col p-6 lg:flex",t.innerHTML='<div class="mb-10"><img class="brand-logo" src="./heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">auto_awesome</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle mb-5 text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md">Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div>'),IE();const r=document.createElement("div");r.className="relative-page",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby","relativePageTitle"),r.innerHTML='<header class="relative-page__topbar"><a href="#family-map" class="relative-page__brand" aria-label="Return to family map"><img src="./heritageatlas-mark.svg" alt="" />HeritageAtlas</a><button type="button" data-close-relative class="relative-page__close" aria-label="Return to family map"><span class="material-symbols-outlined">close</span><span>Close editor</span></button></header><main class="relative-page__content"><section class="relative-page__heading"><span class="material-symbols-outlined">account_tree</span><div><h2 id="relativePageTitle">Add a relative</h2><p>Create a person, then connect them to their parent or ancestor. Your relationship line will appear on the Family Map as soon as it is saved.</p></div></section><div class="relative-page__guide"><span><span class="material-symbols-outlined text-base">person_add</span>Describe the person</span><span><span class="material-symbols-outlined text-base">account_tree</span>Connect their branch</span><span><span class="material-symbols-outlined text-base">map</span>See the map update</span></div><form class="relative-page__form"><div class="relative-page__field relative-page__field--wide"><label>Full name</label><input name="fullName" placeholder="e.g. Martha Banda" required /></div><div class="relative-page__field"><label>Relationship</label><input name="relationship" placeholder="e.g. Daughter, grandfather, cousin" required /></div><div class="relative-page__field"><label>Connect to</label><select name="parentId"><option value="">No connection yet — start a new branch</option></select><small>Choose a parent or ancestor to draw a relationship line on the map.</small></div><div class="relative-page__field"><label>Birth year</label><input name="birthYear" type="number" min="1000" max="2100" placeholder="e.g. 1921" /></div><div class="relative-page__field"><label>Death year <span class="normal-case font-normal">(optional)</span></label><input name="deathYear" type="number" min="1000" max="2100" placeholder="e.g. 2008" /></div><div class="relative-page__field relative-page__field--wide"><label>Notes</label><textarea name="notes" placeholder="What should your family remember about this person?"></textarea></div><div class="relative-page__footer"><p data-relative-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="relative-page__actions"><button type="button" data-close-relative class="border border-secondary text-secondary">Cancel</button><button type="submit" class="bg-primary text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save relative</button></div></div></form></main>',G2(r),document.body.append(r);const s=()=>{var E;const _=r.querySelector('select[name="parentId"]');if(_&&(_.innerHTML='<option value="">No connection yet — start a new branch</option>'+Wt.map(I=>`<option value="${I.id}">${ho(I.fullName)} · ${ho(I.relationship||"Family member")}</option>`).join(""),_.value=ir??""),r.classList.add("is-open"),document.body.style.overflow="hidden",r.scrollTo({top:0}),(E=r.querySelector("[data-close-relative]"))==null||E.focus(),Xn){const I=r.querySelector("[data-relative-status]");I&&(I.textContent="Demo Mode is read-only. Create an account to add relatives to your own archive.",I.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant")}};document.addEventListener("heritage:add-relative",s),document.querySelectorAll("[data-add-relative]").forEach(_=>_.addEventListener("click",s));const i=()=>{r.classList.remove("is-open"),document.body.style.overflow=""};r.querySelectorAll("[data-close-relative]").forEach(_=>_.addEventListener("click",i)),(w=r.querySelector("form"))==null||w.addEventListener("submit",async _=>{var Tt;_.preventDefault();const E=_.currentTarget;if(!E.reportValidity()||Xn)return;const I=r.querySelector("[data-relative-status]");if(!ct.currentUser){I&&(I.textContent="Sign in to save this relative to your private family archive.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const de=(Tt=(await Or(An(tt,"users",ct.currentUser.uid))).data())==null?void 0:Tt.defaultVaultId,ue=new FormData(E);if(!de){I&&(I.textContent="No vault is associated with this account yet.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const Pe=E.querySelector('button[type="submit"]');Pe&&(Pe.disabled=!0,Pe.textContent="Saving relative…");try{await Da(nr(tt,`vaults/${de}/familyMembers`),{fullName:ue.get("fullName"),relationship:ue.get("relationship"),parentId:ue.get("parentId")||null,birthYear:Number(ue.get("birthYear"))||null,deathYear:Number(ue.get("deathYear"))||null,portraitUrl:null,notes:ue.get("notes")||"",createdAt:gn(),updatedAt:gn()}),E.reset(),i()}catch(qt){I&&(I.textContent=(qt instanceof Error,"We could not save this relative. Please try again."),I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{Pe&&(Pe.disabled=!1,Pe.textContent="Save relative")}});const a=document.getElementById("inviteModal"),o=document.getElementById("inviteForm"),c=document.getElementById("inviteStatus"),u=()=>a==null?void 0:a.classList.remove("is-open");document.querySelectorAll("[data-invite-family]").forEach(_=>_.addEventListener("click",()=>{var E;a==null||a.classList.add("is-open"),(E=document.getElementById("inviteEmail"))==null||E.focus()})),document.querySelectorAll("[data-close-invite]").forEach(_=>_.addEventListener("click",u)),a==null||a.addEventListener("click",_=>{_.target===a&&u()}),o==null||o.addEventListener("submit",async _=>{var de;if(_.preventDefault(),!o.reportValidity())return;if(!ct.currentUser){c&&(c.textContent="Sign in to send a secure invitation from your family vault.",c.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const E=o.querySelector('button[type="submit"]'),I=document.getElementById("inviteEmail").value.trim().toLowerCase(),T=document.getElementById("inviteMessage").value.trim();E==null||E.setAttribute("disabled","true"),c&&(c.textContent="Creating secure invitation…",c.className="rounded-lg bg-surface-container px-4 py-3 text-sm text-on-surface-variant");try{const Pe=(de=(await Or(An(tt,"users",ct.currentUser.uid))).data())==null?void 0:de.defaultVaultId;if(!Pe)throw new Error("No vault is associated with this account.");await Da(nr(tt,`vaults/${Pe}/invitations`),{email:I,message:T,invitedBy:ct.currentUser.uid,status:"pending",createdAt:gn()}),c&&(c.textContent="Invitation created. Your email client will open so you can send it.",c.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant"),window.location.href=`mailto:${encodeURIComponent(I)}?subject=${encodeURIComponent("You’re invited to HeritageVault")}&body=${encodeURIComponent(T||"I’ve invited you to join my HeritageVault family archive.")}`,setTimeout(()=>{o.reset(),u()},500)}catch(ue){c&&(c.textContent=ue instanceof Error?ue.message:"We could not create the invitation. Please try again.",c.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{E==null||E.removeAttribute("disabled")}});const d=document.getElementById("memoryDetailModal"),p=document.getElementById("memoryDetailImage"),y=document.getElementById("memoryDetailTitle"),b=document.getElementById("memoryDetailType"),R=document.getElementById("memoryDetailYear"),O=document.getElementById("memoryDetailDescription"),k=document.getElementById("memoryDetailDateLabel");function F(_){var Pe;const E=_.dataset.memoryTitle||"Untitled memory",I=_.dataset.memoryDescription||"",T=_.dataset.memoryType||"",de=_.dataset.memoryYear||"",ue=_.dataset.memoryImage||"";y&&(y.textContent=E),b&&(b.textContent=T,b.style.display=T?"":"none"),R&&(R.textContent=de,R.style.display=de?"":"none"),O&&(O.textContent=I),p&&(ue?(p.style.backgroundImage=`url("${ue}")`,p.style.display="",p.classList.remove("is-empty"),p.setAttribute("aria-label",`${E} memory image`)):(p.style.backgroundImage="",p.classList.add("is-empty"),p.setAttribute("aria-label","Memory image unavailable"))),k&&(k.textContent=de?`Captured in ${de}`:"Date unknown"),d==null||d.classList.add("is-open"),document.body.style.overflow="hidden",d==null||d.scrollTo({top:0}),(Pe=d==null?void 0:d.querySelector("[data-close-memory-detail]"))==null||Pe.focus()}function $(){d==null||d.classList.remove("is-open"),document.body.style.overflow=""}document.querySelectorAll("[data-memory-detail]").forEach(_=>{_.addEventListener("click",()=>F(_)),_.addEventListener("keydown",E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),F(_))})}),document.querySelectorAll("[data-close-memory-detail]").forEach(_=>{_.addEventListener("click",$)}),document.addEventListener("keydown",_=>{_.key==="Escape"&&(d!=null&&d.classList.contains("is-open"))&&$()}),ip({onNavigate:_=>Ct(_)});const U=document.querySelector('#story-mode-screen input[placeholder="Ask about another family memory..."]'),q=(A=U==null?void 0:U.closest("div"))==null?void 0:A.querySelector("button");q==null||q.addEventListener("click",()=>{var de,ue;const _=U==null?void 0:U.value.trim();if(!_||!U)return;const E=document.querySelector("#story-mode-screen article.story-paper");if(!E)return;const I=document.createElement("div");I.className="mb-6 ml-auto max-w-xl rounded-2xl bg-primary px-5 py-4 text-on-primary shadow-sm",I.textContent=_,(de=E.parentElement)==null||de.insertBefore(I,E);const T=document.createElement("div");T.className="mb-8 flex gap-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low px-5 py-4 text-sm leading-6 text-on-surface-variant",T.innerHTML='<span class="material-symbols-outlined text-secondary">auto_awesome</span><span>Your question has been added to this archive inquiry. I’ll use the memories and documents in your vault to build the answer as they become available.</span>',(ue=E.parentElement)==null||ue.insertBefore(T,E),U.value=""}),U==null||U.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),q==null||q.click())}),document.querySelectorAll("[data-logout]").forEach(_=>{_.addEventListener("click",async()=>{var I;window.confirm("Log out of HeritageVault?")&&(_.disabled=!0,(I=_.querySelector("[data-logout-label]"))==null||I.replaceChildren(document.createTextNode("Signing out…")),await w3(ct).catch(()=>{}),Ct("landing"))})}),document.querySelectorAll("[data-forgot-password]").forEach(_=>_.addEventListener("click",async E=>{E.preventDefault();const I=document.getElementById("email"),T=I.value.trim();if(!T||!I.checkValidity()){Xs("Enter your email address first, then choose Forgot password."),I.focus();return}_.textContent="Sending reset link…",Va();try{await d3(ct,T),Xs("Password reset instructions have been sent. Check your inbox and spam folder."),fe.authError.classList.remove("bg-error-container/60","text-on-error-container"),fe.authError.classList.add("bg-primary-fixed","text-on-primary-fixed-variant")}catch(de){Xs(Fl(de))}finally{_.textContent="Forgot password?"}}));const W=localStorage.getItem("heritageatlas-theme")??localStorage.getItem("heritagevault-theme"),Z=_=>{document.documentElement.classList.toggle("dark",_),document.documentElement.style.colorScheme=_?"dark":"light",localStorage.setItem("heritageatlas-theme",_?"dark":"light"),document.querySelectorAll(".brand-logo").forEach(E=>{E.src=E.hasAttribute("data-logo-inverse")||_?"/heritageatlas-logo-light.svg":"/heritageatlas-logo.svg"}),document.querySelectorAll("[data-theme-label]").forEach(E=>{E.textContent=_?"Light mode":"Dark mode"}),document.querySelectorAll("[data-theme-icon]").forEach(E=>{E.textContent=_?"light_mode":"dark_mode"})};Z(W==="dark"),document.querySelectorAll("[data-theme-toggle]").forEach(_=>_.addEventListener("click",()=>Z(!document.documentElement.classList.contains("dark")))),document.querySelectorAll("[data-login-cta]").forEach(_=>{_.addEventListener("click",E=>{E.preventDefault(),Ct("login")})}),document.addEventListener("click",_=>{const E=_.target instanceof Element?_.target.closest("[data-dashboard-view]"):null;if(!E)return;const I=E.dataset.dashboardView;I!=="vault"&&I!=="family-map"&&I!=="story-mode"&&I!=="atlas"&&I!=="agent"||(_.preventDefault(),Ct(I))}),document.querySelectorAll("[data-atlas-open]").forEach(_=>_.addEventListener("click",()=>Ct("atlas"))),document.querySelectorAll(".auth-tab").forEach(_=>{_.addEventListener("click",()=>mc(_.dataset.mode))}),fe.footerPrompt.addEventListener("click",_=>{const E=_.target.closest("a");E&&(_.preventDefault(),mc(E.hasAttribute("data-login-link")?"login":"register"))}),fe.loginForm.addEventListener("submit",_=>{if(_.preventDefault(),!fe.loginForm.reportValidity())return;Va(),wa(fe.loginForm,!0,"Enter the Vault");const E=document.getElementById("email").value,I=document.getElementById("password").value;f3(ct,E,I).then(()=>Ct("vault")).catch(T=>{wa(fe.loginForm,!1,"Enter the Vault"),Xs(Fl(T))})}),fe.registerForm.addEventListener("submit",_=>{if(_.preventDefault(),!fe.registerForm.reportValidity())return;Va(),wa(fe.registerForm,!0,"Create my vault");const E=document.getElementById("registerEmail").value,I=document.getElementById("registerPassword").value,T=document.getElementById("firstName").value,de=document.getElementById("lastName").value;p3(ct,E,I).then(async({user:ue})=>{const Pe=`${T} ${de}`.trim();await g3(ue,{displayName:Pe}),await NE({...ue,displayName:Pe}),gc(Pe,ue.email),Ct("vault")}).catch(ue=>{wa(fe.registerForm,!1,"Create my vault"),Xs(Fl(ue))})}),window.addEventListener("popstate",()=>{const _=window.location.hash.replace("#","").split("?")[0];Ct(_==="login"||_==="vault"||_==="family-map"||_==="story-mode"||_==="atlas"||_==="agent"?_:"landing")})}function LE(){document.documentElement.dataset.tsRuntime="true",G2();const n=dE(()=>Ct("vault"));fe.storyMode.before(n),pE(n,TE);const e=document.querySelector("#family-map-screen .family-map-canvas");e&&(e.innerHTML='<div class="absolute right-6 top-6 z-20 flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg" role="group" aria-label="Family Map controls"><button type="button" data-map-control="in" class="p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Zoom in"><span class="material-symbols-outlined">add</span></button><button type="button" data-map-control="out" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Zoom out"><span class="material-symbols-outlined">remove</span></button><button type="button" data-map-control="fit" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Fit family tree to view"><span class="material-symbols-outlined">center_focus_strong</span></button></div><span class="sr-only" aria-live="polite" data-map-zoom-status>Map zoom 100%</span><div data-family-map-stage><svg data-family-connectors class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"></svg><div data-family-map-content></div></div>',e.querySelectorAll("[data-map-control]").forEach(r=>r.addEventListener("click",()=>{const s=r.dataset.mapControl;xE(e,s==="in"?En+.1:s==="out"?En-.1:1)})),window.addEventListener("resize",()=>$u(e)),Hr()),document.querySelectorAll("#family-map-screen .text-2xl").forEach(r=>{r.textContent="—"});const t=window.location.hash.replace("#","").split("?")[0];Dt=t==="login"||t==="vault"||t==="family-map"||t==="story-mode"||t==="atlas"||t==="agent"?t:"landing",mc(j2),OE(),bE(Ct),fe.landing.classList.toggle("is-hidden",Dt!=="landing"),fe.login.style.display=Dt==="login"?"flex":"none",fe.vault.style.display=Dt==="vault"?"flex":"none",fe.familyMap.style.display=Dt==="family-map"?"flex":"none",fe.storyMode.style.display=Dt==="story-mode"?"flex":"none",fe.agent.style.display=Dt==="agent"?"flex":"none",n.style.display=Dt==="atlas"?"flex":"none",Dt==="story-mode"&&document.dispatchEvent(new Event("heritage:story-route")),Dt==="agent"&&document.dispatchEvent(new Event("heritage:agent-route")),v3(ct,async r=>{var s;if(!Xn)if(r){try{const a=(s=(await Or(An(tt,"users",r.uid))).data())==null?void 0:s.displayName,o=(a==null?void 0:a.trim().toLocaleLowerCase())==="amara kabwe";gc(r.displayName||(o?null:a),r.email)}catch{gc(r.displayName,r.email)}kE(r.uid),Dt==="landing"&&Ct("vault")}else sn==null||sn(),Wt=[],Hr()})}LE();export{Ug as _};

var y6=Object.defineProperty;var _6=(n,e,t)=>e in n?y6(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var v=(n,e,t)=>_6(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const He={vault:{name:"The Banda–Chama Family Archive",description:"Letters, photographs, recipes and voices following one family from the railway years to the present day.",ownerId:"demo",memberIds:["samuel","beatrice","martha","joseph","agnes","edward","ruth","daniel","chungu","tapiwa","linda","miles","nandi","malia","theo"],coverImageUrl:null,createdAt:null,updatedAt:null},members:[{id:"samuel",fullName:"Samuel Banda",relationship:"Root ancestor · teacher",parentId:null,birthYear:1897,deathYear:1964,portraitUrl:null,notes:"A railway clerk turned village teacher who saved every letter he received in a blue tin trunk.",createdAt:null,updatedAt:null},{id:"beatrice",fullName:"Beatrice Phiri Banda",relationship:"Root ancestor · seamstress",parentId:null,birthYear:1901,deathYear:1982,portraitUrl:null,notes:"Samuel’s wife. Her embroidered tablecloth became the quiet centrepiece of family celebrations.",createdAt:null,updatedAt:null},{id:"martha",fullName:"Martha Banda Chama",relationship:"Daughter · gardener",parentId:"samuel",birthYear:1921,deathYear:2008,portraitUrl:null,notes:"Known for an open door, a formidable garden, and Sunday lunches that lasted until dusk.",createdAt:null,updatedAt:null},{id:"joseph",fullName:"Joseph Banda",relationship:"Son · surveyor",parentId:"samuel",birthYear:1924,deathYear:1999,portraitUrl:null,notes:"He carried the family archive across borders and recorded every journey in small field notebooks.",createdAt:null,updatedAt:null},{id:"agnes",fullName:"Agnes Banda Mwila",relationship:"Daughter · nurse",parentId:"samuel",birthYear:1928,deathYear:2011,portraitUrl:null,notes:"The family’s first nurse, remembered for writing practical advice in the margins of recipe books.",createdAt:null,updatedAt:null},{id:"edward",fullName:"Edward Chama",relationship:"Martha’s husband · mechanic",parentId:null,birthYear:1919,deathYear:1991,portraitUrl:null,notes:"A patient mechanic who taught every child how to listen for the rhythm of an engine.",createdAt:null,updatedAt:null},{id:"ruth",fullName:"Ruth Banda",relationship:"Joseph’s daughter · archivist",parentId:"joseph",birthYear:1953,deathYear:null,portraitUrl:null,notes:"The first person to label the old trunks and begin the archive’s catalogue.",createdAt:null,updatedAt:null},{id:"daniel",fullName:"Daniel Chama",relationship:"Martha’s son · radio producer",parentId:"martha",birthYear:1956,deathYear:2019,portraitUrl:null,notes:"Collected cassette interviews with relatives whenever he travelled home.",createdAt:null,updatedAt:null},{id:"chungu",fullName:"Chungu Chama",relationship:"Grandson · archive steward",parentId:"martha",birthYear:1978,deathYear:null,portraitUrl:null,notes:"Digitised the blue trunk after discovering Samuel’s first school letter tucked inside a geography book.",createdAt:null,updatedAt:null},{id:"tapiwa",fullName:"Tapiwa Banda",relationship:"Cousin · oral historian",parentId:"ruth",birthYear:1988,deathYear:null,portraitUrl:null,notes:"Travels with a small recorder and a list of questions left unanswered by the photographs.",createdAt:null,updatedAt:null},{id:"linda",fullName:"Linda Chama",relationship:"Daughter · filmmaker",parentId:"chungu",birthYear:2004,deathYear:null,portraitUrl:null,notes:"Makes short films that turn the archive’s fragments into stories for her generation.",createdAt:null,updatedAt:null},{id:"miles",fullName:"Miles Chama",relationship:"Son · mapmaker",parentId:"chungu",birthYear:2008,deathYear:null,portraitUrl:null,notes:"Draws maps of every family journey and marks the places where someone left a story behind.",createdAt:null,updatedAt:null},{id:"nandi",fullName:"Nandi Mwila",relationship:"Agnes’s granddaughter · chef",parentId:"agnes",birthYear:1992,deathYear:null,portraitUrl:null,notes:"Recreated Beatrice’s recipes from faded measurements and memory.",createdAt:null,updatedAt:null},{id:"malia",fullName:"Malia Banda",relationship:"Tapiwa’s daughter · student",parentId:"tapiwa",birthYear:2015,deathYear:null,portraitUrl:null,notes:"The youngest keeper of the family questions, always asking who is missing from the photographs.",createdAt:null,updatedAt:null},{id:"theo",fullName:"Theo Chama",relationship:"Linda’s son · newest branch",parentId:"linda",birthYear:2025,deathYear:null,portraitUrl:null,notes:"Born into an archive already waiting to introduce him to the people who came before.",createdAt:null,updatedAt:null}],memories:[{id:"railway-postcard",title:"A postcard from the railway",description:"Samuel’s first known note home: three hurried lines about the smell of rain on the platform and a promise to bring back a proper atlas.",type:"letter",assetUrl:"",thumbnailUrl:null,year:1912,dateLabel:"November 1912",location:"Livingstone, Zambia",familyMemberIds:["samuel"],tags:["railway","postcard","beginnings"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"school-letter",title:"Samuel’s first school letter",description:"Written from his first teaching post, Samuel describes the books he hopes every child in the village will one day be able to borrow.",type:"letter",assetUrl:"",thumbnailUrl:null,year:1920,dateLabel:"May 1920",location:"Mongu, Zambia",familyMemberIds:["samuel"],tags:["education","letter","books"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"wedding-portrait",title:"Samuel and Beatrice, beneath the jacaranda",description:"A formal portrait softened by Beatrice’s almost-smile and the petals caught in the corner of the frame.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1922,dateLabel:"September 1922",location:"Kabwe, Zambia",familyMemberIds:["samuel","beatrice"],tags:["wedding","portrait","jacaranda"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"blue-trunk-inventory",title:"The blue trunk inventory",description:"Beatrice’s careful list of what went into the trunk before the family moved: letters, an atlas, two school slates, and a hand-cranked radio.",type:"document",assetUrl:"",thumbnailUrl:null,year:1935,dateLabel:"February 1935",location:"Kabwe, Zambia",familyMemberIds:["beatrice","samuel","martha","joseph"],tags:["migration","inventory","archive"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"market-day",title:"Market day, copper light",description:"Martha and Agnes stand shoulder to shoulder at the market, each holding a basket and a secret they refused to tell the photographer.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1943,dateLabel:"July 1943",location:"Ndola, Zambia",familyMemberIds:["martha","agnes"],tags:["sisters","market","photograph"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"edwards-radio",title:"Edward’s radio repair book",description:"A grease-marked notebook with circuits, jokes, and a note in the back: ‘Martha sings when she thinks no one is listening.’",type:"document",assetUrl:"",thumbnailUrl:null,year:1948,dateLabel:"1948",location:"Lusaka, Zambia",familyMemberIds:["edward","martha"],tags:["radio","love","notebook"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"first-lunch",title:"The first Sunday table",description:"The table is crowded with enamel plates, cousins, and Beatrice’s embroidered cloth—an ordinary afternoon that became a family ritual.",type:"photo",assetUrl:"",thumbnailUrl:null,year:1951,dateLabel:"August 1951",location:"Lusaka, Zambia",familyMemberIds:["beatrice","martha","joseph","agnes","edward"],tags:["Sunday lunch","food","family gathering"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"ruths-catalogue",title:"Ruth labels the trunks",description:"Ruth’s catalogue cards give the archive its first order, beginning with ‘Letters that make people laugh’ and ending with ‘Things we still need to ask.’",type:"document",assetUrl:"",thumbnailUrl:null,year:1961,dateLabel:"January 1961",location:"Harare, Zimbabwe",familyMemberIds:["ruth","joseph"],tags:["catalogue","archive","questions"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"passport",title:"Joseph’s passport, stamped in motion",description:"A stamped passport documenting a journey through Harare and Bulawayo, carrying news, photographs, and a new address for the family.",type:"document",assetUrl:"",thumbnailUrl:null,year:1967,dateLabel:"March 1967",location:"Harare, Zimbabwe",familyMemberIds:["joseph","ruth"],tags:["journey","passport","migration"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"fair-photograph",title:"The county fair photograph",description:"Arthur is absent from the frame, but Daniel’s caption identifies every face and says this was the day the children ‘learned to be loud.’",type:"photo",assetUrl:"",thumbnailUrl:null,year:1972,dateLabel:"October 1972",location:"Kabwe, Zambia",familyMemberIds:["daniel","martha","joseph","ruth"],tags:["fair","caption","children"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"garden-audio",title:"Martha’s garden, recorded at dusk",description:"On cassette, Martha names every plant in her garden, then pauses to explain that a family grows the same way: slowly, by being tended.",type:"audio",assetUrl:"",thumbnailUrl:null,year:1984,dateLabel:"October 1984",location:"Ndola, Zambia",familyMemberIds:["martha","daniel","chungu"],tags:["audio","garden","wisdom"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"recipe-card",title:"Beatrice’s impossible recipe",description:"Nandi deciphers a recipe card that says only ‘enough flour’ and ‘stir until the house smells right.’ The final line reads: ‘Make extra for neighbours.’",type:"letter",assetUrl:"",thumbnailUrl:null,year:1988,dateLabel:"Copied in 1988",location:"Kitwe, Zambia",familyMemberIds:["beatrice","nandi","agnes"],tags:["recipe","food","inheritance"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"voice-of-daniel",title:"Daniel asks the room to remember",description:"A living-room recording where Daniel interviews Joseph about the move, the missing suitcase, and the song everyone knew but nobody could finish.",type:"audio",assetUrl:"",thumbnailUrl:null,year:1993,dateLabel:"December 1993",location:"Lusaka, Zambia",familyMemberIds:["daniel","joseph","ruth","chungu"],tags:["oral history","cassette","migration"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"last-lunch",title:"Martha’s last long lunch",description:"No one knew it would be the last table with everyone present. The photograph holds four generations and three different versions of the same joke.",type:"photo",assetUrl:"",thumbnailUrl:null,year:2007,dateLabel:"December 2007",location:"Lusaka, Zambia",familyMemberIds:["martha","chungu","tapiwa","linda","nandi"],tags:["Sunday lunch","four generations","remembrance"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"blue-trunk-scan",title:"The blue trunk opens again",description:"Chungu photographs the blue trunk before scanning its contents. Beneath a school slate lies Samuel’s 1912 postcard, still sharp with rainwater stains.",type:"photo",assetUrl:"",thumbnailUrl:null,year:2014,dateLabel:"April 2014",location:"Lusaka, Zambia",familyMemberIds:["chungu","linda","miles"],tags:["digitisation","blue trunk","archive"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"malia-questions",title:"Malia’s list of questions",description:"At seven, Malia writes down the questions the photographs cannot answer: Who took this? Why were they laughing? Where did the blue trunk sleep?",type:"document",assetUrl:"",thumbnailUrl:null,year:2022,dateLabel:"November 2022",location:"Livingstone, Zambia",familyMemberIds:["malia","tapiwa"],tags:["questions","children","future"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"oral-history",title:"Tapiwa’s walking interview",description:"Tapiwa and Ruth walk the old road in Livingstone while comparing family stories to the places where they happened, recording the gaps as carefully as the answers.",type:"audio",assetUrl:"",thumbnailUrl:null,year:2023,dateLabel:"May 2023",location:"Livingstone, Zambia",familyMemberIds:["tapiwa","ruth","malia"],tags:["oral history","walking interview","place"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"lindas-film",title:"Linda’s film premiere",description:"Linda screens a six-minute film built from the archive’s letters, cassettes, and Sunday-table photographs. Theo sleeps through the applause.",type:"video",assetUrl:"",thumbnailUrl:null,year:2025,dateLabel:"February 2025",location:"Lusaka, Zambia",familyMemberIds:["linda","chungu","theo","miles"],tags:["film","premiere","next generation"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null},{id:"atlas-drawing",title:"Miles maps the family routes",description:"Miles layers railway lines, garden paths, border crossings, and home addresses into one hand-drawn map titled ‘How we kept finding each other.’",type:"document",assetUrl:"",thumbnailUrl:null,year:2026,dateLabel:"January 2026",location:"Lusaka, Zambia",familyMemberIds:["miles","chungu","linda"],tags:["map","routes","future"],archived:!1,createdBy:"demo",createdAt:null,updatedAt:null}],stories:[{id:"roots",title:"The blue trunk and the promise of books",excerpt:"How a rain-stained postcard became the first page of a family archive.",body:"Samuel began saving letters because distance made details precious. More than a century later, the same small trunk teaches his descendants that an archive is not a room full of objects; it is a promise to keep asking what mattered.",memoryIds:["railway-postcard","school-letter","blue-trunk-inventory","blue-trunk-scan"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"table",title:"A table large enough for everyone",excerpt:"Beatrice’s cloth, Martha’s cooking, and the ritual that taught the family how to return.",body:"The Sunday table was never about the food alone. It was the place where news became story, grief was given room, and children learned the names of people they had not yet met. Every generation added a chair.",memoryIds:["first-lunch","garden-audio","recipe-card","last-lunch"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"routes",title:"Routes, stamps, and borrowed roads",excerpt:"A family in motion across Zambia and Zimbabwe, carrying its own evidence home.",body:"Joseph’s passport and Daniel’s tapes reveal a family moving for work, care, and opportunity without losing the habit of writing home. Their routes are the lines that later became Miles’s map.",memoryIds:["ruths-catalogue","passport","voice-of-daniel","oral-history","atlas-drawing"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"voices",title:"The people speaking between the photographs",excerpt:"Cassette tapes restore the humour, rhythm, and unfinished questions missing from the still images.",body:"A photograph can show who was in the room. The voices explain why someone stayed late, who sang badly, and which story changes every time it is told. The archive becomes intimate when it can answer back.",memoryIds:["garden-audio","voice-of-daniel","malia-questions","oral-history"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null},{id:"future",title:"The next keepers",excerpt:"Linda, Miles, Malia, and Theo inherit not just memories, but a living invitation to add their own.",body:"The archive reaches forward as much as it reaches back. In a film premiere, a child’s questions, and a map drawn for someone too young to read it, the family makes room for the stories that have not happened yet.",memoryIds:["malia-questions","lindas-film","atlas-drawing"],status:"published",createdBy:"demo",createdAt:null,updatedAt:null}]},at=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML},v6={letter:"mail",photo:"photo_camera",audio:"graphic_eq",video:"videocam",document:"description"};function w6(){const e=[...He.memories].filter(t=>t.year).sort((t,s)=>(s.year??0)-(t.year??0)).slice(0,3).map((t,s)=>({when:s===0?"Today":s===1?"Yesterday":"This week",what:`Memory preserved: "${t.title}"${t.location?` · ${t.location}`:""}`}));return e.push({when:"This week",what:`${He.stories.length} stories compiled from the archive.`}),e.push({when:"Earlier",what:`${He.members.length} family members connected across the constellation.`}),e}function E6(n){if(n.length<2)return"";const e=Math.max(...n,1),t=100,s=36,r=t/(n.length-1),i=n.map((a,l)=>`${l*r},${s-a/e*(s-4)-2}`).join(" ");return`
    <svg class="hv-vd-spark" viewBox="0 0 ${t} ${s}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${i}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />
    </svg>
  `}function b6(){const n=new Map;return He.memories.forEach(e=>{e.year&&n.set(e.year,(n.get(e.year)??0)+1)}),[...n.entries()].sort((e,t)=>e[0]-t[0]).map(([,e])=>e)}function A6(n){var y;const e=He,t=e.memories,s=e.members,r=e.stories,i=t.map(b=>b.year).filter(b=>b!==null).sort((b,R)=>b-R),a=i.length?`${i[0]}–${i[i.length-1]}`:"—",l=[...t].sort((b,R)=>(R.year??0)-(b.year??0)).slice(0,2),c=w6(),u=b6(),p=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});n.innerHTML=`
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
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Search">
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
            your family yours. ${t.length} memories, ${s.length} people,
            and ${r.length} stories — preserved across ${a}.
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
        ${E6(u)}
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">groups</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_flat</span> stable</span>
        </div>
        <p class="hv-vd-metric__value">${s.length}</p>
        <p class="hv-vd-metric__label">Family members</p>
        <p class="hv-vd-metric__sub">${new Set(s.filter(b=>b.parentId).map(b=>b.parentId)).size+1} generations connected</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4 hv-vd-metric--inverted">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">auto_stories</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> +1 new</span>
        </div>
        <p class="hv-vd-metric__value"><em>${r.length}</em></p>
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
      ${l.map(b=>{const R=b.thumbnailUrl||b.assetUrl||"https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM";return`
            <article class="hv-vd-memory" data-vd-memory data-memory-id="${at(b.id)}" role="button" tabindex="0">
              <div class="hv-vd-memory__media">
                <img class="hv-vd-memory__img" src="${at(R)}" alt="${at(b.title)}" loading="lazy" />
                <div class="hv-vd-memory__overlay"></div>
                <span class="hv-vd-memory__year">${at(b.year)}</span>
              </div>
              <div class="hv-vd-memory__body">
                <span class="hv-vd-memory__tag">
                  <span class="material-symbols-outlined" style="font-size:12px">${v6[b.type]??"description"}</span>
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
        ${r.map((b,R)=>`
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
  `,I6(n),(y=n.querySelector("[data-vd-atlas]"))==null||y.addEventListener("click",()=>{Vn("atlas")}),n.querySelectorAll("[data-vd-view]").forEach(b=>{b.addEventListener("click",()=>Vn(b.dataset.vdView??"story-mode")),b.addEventListener("keydown",R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),Vn(b.dataset.vdView??"story-mode"))})}),n.querySelectorAll("[data-vd-memory]").forEach(b=>{b.addEventListener("click",()=>Vn("story-mode")),b.addEventListener("keydown",R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),Vn("story-mode"))})}),n.querySelectorAll("[data-vd-story]").forEach(b=>{b.addEventListener("click",()=>Vn("story-mode")),b.addEventListener("keydown",R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),Vn("story-mode"))})}),n.querySelectorAll("[data-vd-new-memory], [data-vd-new-memory-btn]").forEach(b=>{b.addEventListener("click",R=>{R.stopPropagation(),Vn("family-map")})}),requestAnimationFrame(()=>{n.querySelectorAll("[data-vd-reveal]").forEach(b=>b.classList.add("is-revealed"))}),T6(n)}async function T6(n){try{const e=await fetch("/api/users");if(!e.ok)return;const s=(await e.json()).count??0,r=n.querySelector("[data-vd-users-count]");r&&(r.textContent=String(s),r.innerHTML=s>0?`${s}`:"<em>0</em>")}catch{}}function I6(n){const e=n.querySelectorAll("[data-vd-reveal], [data-vd-stagger]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(s=>s.classList.add("is-revealed"));return}const t=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(r.target.classList.add("is-revealed"),t.unobserve(r.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.1});e.forEach(s=>t.observe(s))}function Vn(n){const e=document.querySelector(`[data-dashboard-view="${n}"]`);e&&e.click()}let $l=!1;function fc(){const n=document.getElementById("vault-screen");if(!n||$l)return;const e=n.querySelector("[data-vault-dashboard-content]");e&&(A6(e),$l=!0)}document.addEventListener("click",n=>{if(!n.target.closest('[data-dashboard-view="vault"]'))return;n.preventDefault();const t=document.querySelector(".landing-page"),s=document.getElementById("login-screen"),r=document.getElementById("vault-screen"),i=document.getElementById("family-map-screen"),a=document.getElementById("story-mode-screen"),l=document.getElementById("agent-screen");r&&(t&&t.classList.add("is-hidden"),s&&(s.style.display="none"),i&&(i.style.display="none"),a&&(a.style.display="none"),l&&(l.style.display="none"),r.style.display="flex",window.scrollTo({top:0,behavior:"smooth"}),history.pushState({view:"vault"},"","#vault"),requestAnimationFrame(()=>fc()))});const pl=document.getElementById("vault-screen");pl&&new MutationObserver(()=>{pl.style.display==="flex"&&!$l&&fc()}).observe(pl,{attributes:!0,attributeFilter:["style"]});window.location.hash==="#vault"&&document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".landing-page");n&&n.classList.add("is-hidden"),requestAnimationFrame(()=>fc())});const S6=new Set(["vault","family-map","story-mode","atlas","agent"]),M1="heritageatlas-sidebar-collapsed";function R6(n){const e=document.documentElement.dataset.authUserName,t=document.documentElement.dataset.authUserInitials;e&&(n.querySelectorAll("[data-auth-user-name]").forEach(s=>{s.textContent=e}),n.querySelectorAll("[data-auth-user-initials]").forEach(s=>{s.textContent=t||"AK"}),n.querySelectorAll(":scope > div:last-child p.font-semibold").forEach(s=>{s.textContent=e}))}function C6(n){var r;const e=document.createTreeWalker(n,NodeFilter.SHOW_TEXT),t=[];let s;for(;s=e.nextNode();){const i=s.parentElement;!i||!((r=s.textContent)!=null&&r.trim())||i.closest(".material-symbols-outlined, .sidebar-copy")||t.push(s)}t.forEach(i=>{const a=document.createElement("span");a.className="sidebar-copy",a.textContent=i.textContent,i.replaceWith(a)})}function np(n={}){const e=[...document.querySelectorAll("[data-sidebar]")],t=n.onNavigate,s=r=>{e.forEach(i=>{i.classList.toggle("is-collapsed",r);const a=i.querySelector("[data-sidebar-collapse]");a==null||a.setAttribute("aria-expanded",String(!r));const l=a==null?void 0:a.querySelector(".material-symbols-outlined");l&&(l.textContent=r?"menu":"menu_open")}),localStorage.setItem(M1,r?"true":"false")};e.forEach(r=>{if(r.dataset.sidebarInitialized==="true")return;r.dataset.sidebarInitialized="true",r.setAttribute("aria-label","Heritage Atlas navigation"),R6(r),C6(r);const i=document.createElement("button");i.type="button",i.className="sidebar-collapse-toggle",i.dataset.sidebarCollapse="",i.setAttribute("aria-label","Collapse sidebar"),i.innerHTML='<span class="material-symbols-outlined">menu_open</span><span class="sidebar-copy">Collapse sidebar</span>';const a=r.firstElementChild;r.insertBefore(i,(a==null?void 0:a.nextSibling)??null);const l=document.createElement("img");l.className="sidebar-collapse-mark",l.src="/heritageatlas-mark.svg",l.alt="Heritage Atlas",a==null||a.append(l),i.addEventListener("click",()=>s(!r.classList.contains("is-collapsed"))),r.querySelectorAll("[data-dashboard-view]").forEach(c=>{const u=c.dataset.dashboardView;!u||!S6.has(u)||!t||c.addEventListener("click",d=>{d.preventDefault(),d.stopPropagation(),t(u)})})}),s(localStorage.getItem(M1)==="true")}const P6={roots:{label:"Begin",icon:"mail",num:"01"},table:{label:"Gather",icon:"restaurant",num:"02"},routes:{label:"Travel",icon:"route",num:"03"},voices:{label:"Listen",icon:"graphic_eq",num:"04"},future:{label:"Continue",icon:"auto_stories",num:"05"}},x6={letter:"mail",photo:"photo_camera",audio:"graphic_eq",video:"videocam",document:"description"};function k6(){return He.stories.filter(n=>n.status==="published").map(n=>{const e=P6[n.id]??{label:"Chapter",icon:"menu_book",num:"00"};return{id:n.id,num:e.num,label:e.label,title:n.title,excerpt:n.excerpt??"",body:n.body??"",icon:e.icon,memoryIds:n.memoryIds??[]}})}const At=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML},$1=(()=>{const n=He.memories.map(e=>e.year).filter(e=>e!==null).sort((e,t)=>e-t);return n.length?`${n[0]}–${n[n.length-1]}`:"—"})();function N6(n){const e=k6();if(!e.length)return;let t=0;const s=new Set;n.innerHTML=`
    <div class="hv-sm-backdrop" aria-hidden="true">
      <div class="hv-sm-aurora"></div>
    </div>
    <div class="hv-sm-grain" aria-hidden="true"></div>

    <aside data-sidebar class="vault-nav hidden flex-col p-6 lg:flex" aria-label="Heritage Atlas navigation">
      <div class="mb-10"><img data-brand-logo class="brand-logo" src="/heritageatlas-logo.svg" alt="Heritage Atlas" /></div>
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
            <p class="hv-sm-hero__stats-title">${e.length} chapters · ${He.memories.length} source memories</p>
            <p class="hv-sm-hero__stats-meta">${$1} · ${new Date().getFullYear()-parseInt($1.split("–")[0])} years of one family</p>
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
  `;const r=n.querySelector("[data-sm-narrative]"),i=n.querySelector("[data-sm-evidence]"),a=n.querySelector("[data-sm-chapter-label]"),l=n.querySelector("[data-sm-prev]"),c=n.querySelector("[data-sm-next]");if(!r||!i||!a||!l||!c)return;function u($){return He.memories.find(U=>U.id===$)}function d($,U){const q=e[$];if(!q)return;t=$,s.add(q.id),a.textContent=`Chapter ${q.num} · ${q.label}`,n.querySelectorAll("[data-sm-step]").forEach(Z=>{var w;const S=parseInt(Z.dataset.smStep??"0",10);Z.classList.toggle("is-active",S===$),Z.classList.toggle("is-read",S<$||s.has(((w=e[S])==null?void 0:w.id)??"")&&S!==$)}),l.disabled=$===0,c.disabled=$===e.length-1;const W=r;U?(W.classList.add("is-transitioning"),setTimeout(()=>{W.classList.remove("is-transitioning"),W.classList.add("is-entering"),W.innerHTML=p(q),y(q),b(W),R(W),W.offsetWidth,W.classList.remove("is-entering"),W.scrollTop=0,window.scrollTo({top:n.offsetTop-24,behavior:"smooth"})},280)):(W.innerHTML=p(q),y(q),b(W),R(W))}function p($){const U=$.memoryIds.map(u).filter(Boolean),q=U.find(w=>(w==null?void 0:w.type)==="photo")??U[0],W=$.excerpt,Z=$.body.split(new RegExp("(?<=[.!?])\\s+")),S=[];if(Z.length<=2)S.push($.body);else{const w=Z.slice(0,Math.ceil(Z.length/3)).join(" "),T=Z.slice(Math.ceil(Z.length/3),Math.ceil(2*Z.length/3)).join(" "),_=Z.slice(Math.ceil(2*Z.length/3)).join(" ");S.push(w,T,_)}return`
      <p class="hv-sm-narrative__eyebrow">Chapter ${$.num} · ${$.label}</p>
      <h2 class="hv-sm-narrative__title">${At($.title)}</h2>
      <p class="hv-sm-narrative__excerpt">${At($.excerpt)}</p>
      <div class="hv-sm-narrative__body">
        <p data-sm-reveal>${At(S[0]??$.body)}</p>
        ${q?`
          <figure class="hv-sm-figure" data-sm-reveal>
            <img class="hv-sm-figure__img" data-sm-parallax-img
              src="${q.thumbnailUrl||q.assetUrl||"https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM"}"
              alt="${At(q.title)}" />
            <div class="hv-sm-figure__overlay"></div>
            <figcaption class="hv-sm-figure__caption">
              <b>${At(q.title)}</b>
              ${At(q.dateLabel??q.location??"")}
            </figcaption>
          </figure>
        `:""}
        <div class="hv-sm-pullquote" data-sm-reveal>${At(W)}</div>
        ${S.slice(1).map(w=>`<p data-sm-reveal>${At(w)}</p>`).join("")}
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
        <button class="hv-sm-evidence-card" type="button" data-sm-evidence-card data-memory-id="${At(q.id)}"
          style="animation-delay: ${W*60}ms">
          <div class="hv-sm-evidence-card__top">
            <span class="hv-sm-evidence-card__icon">
              <span class="material-symbols-outlined">${x6[q.type]??"description"}</span>
            </span>
            <span class="hv-sm-evidence-card__year">${At(q.year!=null?String(q.year):"")}</span>
          </div>
          <h4 class="hv-sm-evidence-card__title">${At(q.title)}</h4>
          <p class="hv-sm-evidence-card__meta">${At(q.location??"Undated")} · ${At(q.type)}</p>
        </button>
      `).join(""),i.querySelectorAll("[data-sm-evidence-card]").forEach(q=>{q.addEventListener("click",()=>{const W=q.dataset.memoryId??"",Z=u(W);if(!Z)return;const S=`Tell me more about "${Z.title}"`;L(S)})})}function b($){const U=$.querySelectorAll("[data-sm-reveal]");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){U.forEach(W=>W.classList.add("is-revealed"));return}const q=new IntersectionObserver(W=>{W.forEach(Z=>{Z.isIntersecting&&(Z.target.classList.add("is-revealed"),q.unobserve(Z.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.1});U.forEach(W=>q.observe(W))}function R($){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const U=$.querySelector("[data-sm-parallax-img]");if(!U)return;const q=U;let W=!1;function Z(){const S=q.getBoundingClientRect(),w=window.innerHeight;if(S.bottom<0||S.top>w){W=!1;return}const _=(S.top+S.height/2-w/2)/w*-24;q.style.transform=`translate3d(0, ${_}px, 0) scale(1.08)`,W=!1}window.addEventListener("scroll",()=>{W||(requestAnimationFrame(Z),W=!0)},{passive:!0}),Z()}function L($){const U=document.getElementById("agent-screen"),q=document.querySelector(".landing-page"),W=document.getElementById("login-screen"),Z=document.getElementById("vault-screen"),S=document.getElementById("family-map-screen");U&&(q&&q.classList.add("is-hidden"),W&&(W.style.display="none"),Z&&(Z.style.display="none"),S&&(S.style.display="none"),n.style.display="none",U.style.display="flex",history.pushState({view:"agent"},"","#agent"),document.dispatchEvent(new Event("heritage:agent-route")),setTimeout(()=>{const w=U.querySelector("[data-agent-input]");w&&(w.value=$,w.dispatchEvent(new Event("input")));const T=U.querySelector("[data-agent-form]");T&&T.requestSubmit()},300))}n.querySelectorAll("[data-sm-step]").forEach($=>{$.addEventListener("click",()=>{const U=parseInt($.dataset.smStep??"0",10);U!==t&&d(U,!0)})}),l.addEventListener("click",()=>{t>0&&d(t-1,!0)}),c.addEventListener("click",()=>{t<e.length-1&&d(t+1,!0)});const k=n.querySelector("[data-sm-query-form]"),F=n.querySelector("[data-sm-query-input]");k==null||k.addEventListener("submit",$=>{$.preventDefault();const U=(F==null?void 0:F.value.trim())??"";U&&(L(U),F&&(F.value=""))}),n.querySelectorAll("[data-sm-hint]").forEach($=>{$.addEventListener("click",()=>{const U=$.dataset.smHint??"";F&&(F.value=U),F==null||F.focus()})}),n.addEventListener("click",$=>{const U=$.target.closest("[data-sm-save]");if(!U)return;const q=U.querySelector(".material-symbols-outlined");q&&(q.textContent=q.textContent==="bookmark"?"check":"bookmark"),U.style.background="var(--hv-moss, #6f8266)",setTimeout(()=>{q&&(q.textContent="bookmark"),U.style.background=""},1800)}),d(0,!1),n.querySelectorAll("[data-sm-reveal]").forEach($=>{$.classList.add("is-revealed")})}let U1=!1;function sp(){const n=document.getElementById("story-mode-screen");!n||U1||(N6(n),U1=!0)}document.addEventListener("heritage:story-route",()=>{requestAnimationFrame(()=>sp())});window.location.hash==="#story-mode"&&sp();const O6="modulepreload",D6=function(n){return"/"+n},F1={},L6=function(e,t,s){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=a(t.map(u=>{if(u=D6(u),u in F1)return;F1[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":O6,d||(y.as="script"),y.crossOrigin="",y.href=u,c&&y.setAttribute("nonce",c),document.head.appendChild(y),d)return new Promise((b,R)=>{y.addEventListener("load",b),y.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return r.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},V6=new Set(["the","a","an","of","to","in","on","at","by","for","with","about","show","tell","give","me","my","our","their","family","what","when","where","who","which","how","and","or","is","are","was","were","be","been","from","that","this","these","those","across","between","during","over","under","into"]),M6=new Set(["Samuel","Beatrice","Martha","Joseph","Agnes","Edward","Ruth","Daniel","Chungu","Tapiwa","Linda","Miles","Nandi","Malia","Theo"]);function $6(n){const e=n.toLowerCase(),t=(e.match(/[a-z]{3,}/g)??[]).filter(d=>!V6.has(d));let s="overview";/\b(timeline|chronolog|over time|by year|years|decades?)\b/.test(e)?s="timeline":/\b(map|where|place|location|geograph|countr|cit(y|ies))\b/.test(e)?s="geography":/\b(people|person|relative|member|family tree|constellation|connected)\b/.test(e)?s="people":/\b(evidence|source|proof|records?)\b/.test(e)?s="evidence":/\b(decade|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)\b/.test(e)?s="decades":/\b(type|kind|photo|letter|audio|video|document|format)\b/.test(e)?s="types":/\b(oldest|earliest|first|beginning)\b/.test(e)?s="oldest":/\b(newest|latest|last|recent)\b/.test(e)?s="newest":/\b(compare|versus|vs|against|difference)\b/.test(e)&&(s="compare_decades");const r=e.match(/\b(18|19|20|21)(\d0)s?\b/),i=r?parseInt(`${r[1]}${r[2]}`,10):void 0,a=n.match(/\b([A-Z][a-z]+)\b/),l=a&&M6.has(a[1])?a[1]:void 0,c=n.match(/\b(Livingstone|Lusaka|Mongu|Kabwe|Ndola|Kitwe|Harare|Bulawayo)\b/),u=c?c[1]:void 0;return{intent:s,terms:t,decade:i,person:l,place:u}}const B1={Livingstone:{lat:-17.85,lng:25.86},Lusaka:{lat:-15.39,lng:28.33},Mongu:{lat:-15.28,lng:23.13},Kabwe:{lat:-14.45,lng:28.45},Ndola:{lat:-12.96,lng:28.64},Kitwe:{lat:-12.82,lng:28.2},Harare:{lat:-17.83,lng:31.05},Bulawayo:{lat:-20.15,lng:28.58}};function fl(n){return Math.floor(n/10)*10}function U6(n,e){var i,a;const t=$6(e),s=n.memories,r=n.members;switch(t.intent){case"timeline":{const l=new Map;s.forEach(d=>{d.year&&l.set(d.year,(l.get(d.year)??0)+1)});const c=[...l.keys()].sort((d,p)=>d-p),u=c.reduce((d,p)=>(l.get(d)??0)>(l.get(p)??0)?d:p,c[0]??0);return{kind:"line",title:"Memories across time",caption:`Memory density by year${t.decade?` · ${t.decade}s`:""}.`,verdict:`${c.length} years with preserved memories, peaking in ${u}.`,prompt:e,sql:"SELECT event_year, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY event_year ORDER BY event_year",source:"ClickHouse · heritage_atlas_timeline_yearly (mock)",series:[{name:"Memories",color:"#2c3a2e",points:c.map(d=>({label:String(d),value:l.get(d)??0,drilldown:`What happened in ${d}?`}))}],followups:["Where did these memories happen?","Who appears most often in this period?","What kinds of memories are these?"]}}case"geography":{const l=new Map;s.forEach(u=>{u.location&&l.set(u.location,(l.get(u.location)??0)+1)});const c=[...l.entries()].sort((u,d)=>d[1]-u[1]).slice(0,12);return{kind:"map",title:"Where the archive lives",caption:"Memory density by location.",verdict:`${c.length} places appear in your archive, led by ${((i=c[0])==null?void 0:i[0])??"—"}.`,prompt:e,sql:"SELECT location, sum(fact_count) FROM heritage_atlas_locations GROUP BY location ORDER BY fact_count DESC LIMIT 12",source:"ClickHouse · heritage_atlas_locations (mock)",points:c.map(([u,d])=>{var p,y;return{place:u,count:d,lat:(p=B1[u])==null?void 0:p.lat,lng:(y=B1[u])==null?void 0:y.lng,drilldown:`Show me memories from ${u}`}}),followups:["Show me the timeline for these places","Which people are tied to these locations?","Compare locations by decade"]}}case"people":{const l=new Map;s.forEach(u=>{var d;(d=u.familyMemberIds)==null||d.forEach(p=>{l.set(p,(l.get(p)??0)+1)})});const c=r.filter(u=>u.parentId).map(u=>({from:u.parentId,to:u.id,label:"parent → child",weight:1}));return{kind:"network",title:"Your family constellation",caption:"People in the archive, connected by recorded relationships.",verdict:`${r.length} people, ${c.length} recorded parent-child edges.`,prompt:e,sql:"SELECT entity_id, title, count() FROM heritage_atlas_facts WHERE entity_type='person' GROUP BY entity_id, title",source:"ClickHouse · heritage_atlas_facts + heritage_atlas_edges (mock)",nodes:r.map(u=>({id:u.id,label:u.fullName,group:u.relationship??void 0,weight:l.get(u.id)??0,meta:u.notes??void 0})),edges:c,followups:["Show me the oldest person in the archive","Who is most connected?","Timeline for Samuel Banda"]}}case"evidence":{const l=s.filter(c=>{var u;return!t.person||((u=c.familyMemberIds)==null?void 0:u.some(d=>{const p=r.find(y=>y.id===d);return p==null?void 0:p.fullName.startsWith(t.person)}))}).filter(c=>!t.place||c.location===t.place).sort((c,u)=>(c.year??0)-(u.year??0)).slice(0,12);return{kind:"table",title:"Source evidence",caption:`Traceable records${t.person?` mentioning ${t.person}`:""}.`,verdict:`${l.length} records, each linkable back to its source.`,prompt:e,sql:"SELECT title, event_year, location, entity_type FROM heritage_atlas_facts ORDER BY event_year LIMIT 12",source:"ClickHouse · heritage_atlas_facts (mock)",headers:["Year","Title","Location","Kind"],rows:l.map(c=>({cells:[c.year?String(c.year):"—",c.title,c.location??"—",c.type],drilldown:`Tell me more about "${c.title}"`})),followups:["Show me the oldest evidence","Group this evidence by type","Map this evidence by location"]}}case"decades":{const l=new Map;s.forEach(d=>{d.year&&l.set(fl(d.year),(l.get(fl(d.year))??0)+1)});const c=[...l.keys()].sort((d,p)=>d-p),u=c.reduce((d,p)=>(l.get(d)??0)>(l.get(p)??0)?d:p,c[0]??0);return{kind:"bar",title:"Memories by decade",caption:"How the archive grew, in ten-year windows.",verdict:`${c.length} decades represented; the ${u}s is the densest.`,prompt:e,sql:"SELECT floor(event_year/10)*10 AS decade, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY decade ORDER BY decade",source:"ClickHouse · heritage_atlas_timeline_yearly (mock)",series:[{name:"Memories",color:"#c0623a",points:c.map(d=>({label:`${d}s`,value:l.get(d)??0,drilldown:`Show me memories from the ${d}s`}))}],followups:["What happened in the busiest decade?","Compare two decades side by side","Show me the timeline in detail"]}}case"types":{const l=new Map;s.forEach(u=>l.set(u.type,(l.get(u.type)??0)+1));const c=[...l.entries()].sort((u,d)=>d[1]-u[1]);return{kind:"donut",title:"What kinds of memories",caption:"The archive broken down by record type.",verdict:`${c.length} record types; ${((a=c[0])==null?void 0:a[0])??"—"} is the most common.`,prompt:e,sql:"SELECT entity_type, count() FROM heritage_atlas_facts GROUP BY entity_type ORDER BY count() DESC",source:"ClickHouse · heritage_atlas_facts (mock)",series:[{name:"Records",points:c.map(([u,d])=>({label:u,value:d}))}],followups:["Show me only the letters","Timeline of audio memories","Who appears in the most photographs?"]}}case"oldest":case"newest":{const l=s.filter(c=>c.year!==null).sort((c,u)=>t.intent==="oldest"?c.year-u.year:u.year-c.year).slice(0,6);return{kind:"timeline",title:t.intent==="oldest"?"The earliest memories":"The most recent memories",caption:`The ${t.intent==="oldest"?"oldest":"newest"} preserved records.`,verdict:l.length?`${t.intent==="oldest"?"Earliest":"Newest"}: ${l[0].year} · ${l[0].title}`:"No dated memories yet.",prompt:e,sql:`SELECT title, event_year, location FROM heritage_atlas_facts WHERE event_year IS NOT NULL ORDER BY event_year ${t.intent==="oldest"?"ASC":"DESC"} LIMIT 6`,source:"ClickHouse · heritage_atlas_facts (mock)",events:l.map(c=>({year:c.year,label:c.title,detail:c.description??void 0,category:c.type})),followups:["Show me the timeline for these years","Where did these memories happen?","Who is in these memories?"]}}case"compare_decades":{const l=new Map;s.forEach(p=>{if(!p.year)return;const y=fl(p.year);l.has(y)||l.set(y,new Map),l.get(y).set(p.type,(l.get(y).get(p.type)??0)+1)});const c=[...l.keys()].sort((p,y)=>p-y),u=c[0],d=c[c.length-1];return{kind:"compare",title:"Decade by decade",caption:`Comparing the ${u}s and the ${d}s, side by side.`,verdict:`${c.length} decades compared across ${s.length} records.`,prompt:e,sql:"SELECT floor(event_year/10)*10 AS decade, entity_type, count() FROM heritage_atlas_facts GROUP BY decade, entity_type",source:"ClickHouse · heritage_atlas_facts (mock)",compare:{leftLabel:`${u}s`,rightLabel:`${d}s`,left:[...l.get(u).entries()].map(([p,y])=>({label:p,value:y})),right:[...l.get(d).entries()].map(([p,y])=>({label:p,value:y}))},followups:["Show me the timeline for these decades","Which decade had the most letters?","Map the earliest decade"]}}case"overview":default:{const l=new Set(s.map(u=>u.year).filter(u=>u!==null)),c=new Set(s.map(u=>u.location).filter(Boolean));return{kind:"kpi",title:"Your archive at a glance",caption:"The shape of your family's preserved story.",verdict:`${s.length} memories across ${l.size} years and ${c.size} places.`,prompt:e,sql:"SELECT count(), uniq(event_year), uniq(location) FROM heritage_atlas_facts",source:"ClickHouse · heritage_atlas_facts (mock)",kpi:[{label:"Memories",value:String(s.length),icon:"inventory_2",trend:"up"},{label:"People",value:String(r.length),icon:"group",trend:"flat"},{label:"Years covered",value:String(l.size),icon:"calendar_month",trend:"up"},{label:"Places",value:String(c.size),icon:"location_on",trend:"flat"}],followups:["Show me the timeline","Where did these memories happen?","Who appears most often?","What kinds of memories are these?"]}}}}const ht={},q1="heritage-atlas-agent",F6=(ht==null?void 0:ht.VITE_TRIGGER_PROJECT_REF)??"",rp=(ht==null?void 0:ht.VITE_TRIGGER_TOKEN_ENDPOINT)??"/api/chat-access-token",B6=(ht==null?void 0:ht.VITE_TRIGGER_START_ENDPOINT)??"/api/chat-start",q6=(ht==null?void 0:ht.VITE_CLICKHOUSE_LIVE)==="true",H6=(ht==null?void 0:ht.VITE_AGENT_ENDPOINT)??"/api/agent-query",Un=!!(F6&&rp),Fn=q6,H1=Un||Fn;async function j6(){if(!Un)return null;try{const{TriggerChatTransport:n}=await L6(async()=>{const{TriggerChatTransport:e}=await import("./chat-ChQ4jXD6.js").then(t=>t.l);return{TriggerChatTransport:e}},[]);return new n({task:q1,accessToken:async({chatId:e})=>{const t=await fetch(rp,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:e})});if(!t.ok)throw new Error(`Token refresh failed: ${t.status}`);return(await t.json()).publicAccessToken},startSession:async({chatId:e})=>{const t=await fetch(B6,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatId:e,taskId:q1})});if(!t.ok)throw new Error(`Session start failed: ${t.status}`);return t.json()}})}catch(n){return console.warn("[agent] Failed to load TriggerChatTransport:",n),null}}async function G6(n,e,t,s){const r=await j6();if(!r)return null;s("interpreting");const i=`chat-${Date.now()}`;try{await r.start(i).catch(()=>null),s("querying");const a=await r.sendMessages({chatId:i,messages:[{id:`msg-${Date.now()}`,role:"user",parts:[{type:"text",text:e}]}],clientData:{vaultId:t||"demo-vault"}});let l=null,c="";const u=a.getReader();for(;;){const{done:d,value:p}=await u.read();if(d)break;if(p){if(p.type==="tool-output-available"&&p.output){const y=p.output,b=y.spec??y.output??y;b&&b.kind&&b.title&&(l=b,s("rendering"))}if(p.type==="text-delta"&&p.delta&&(c+=p.delta),p.type==="error")throw new Error(p.errorText||"Agent stream error")}}return l?(l.source="Trigger.dev chat.agent() · ClickHouse Cloud (live)",l.prompt=e,{spec:l,caption:c.trim()||l.verdict||""}):(console.warn("[agent] No VizSpec in Trigger.dev stream, falling back"),null)}catch(a){return console.warn("[agent] Trigger.dev turn failed, falling back to ClickHouse middleware:",a),null}}async function z6(n,e){if(!Fn)return null;e("interpreting"),await new Promise(t=>setTimeout(t,200)),e("querying");try{const t=await fetch(H6,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:n})});if(!t.ok)throw new Error(`Agent endpoint ${t.status}`);e("rendering");const s=await t.json();return{spec:s,caption:s.verdict??""}}catch(t){return console.warn("[agent] Live ClickHouse turn failed:",t),null}}async function W6(n,e,t){t("interpreting"),await new Promise(r=>setTimeout(r,280)),t("querying"),await new Promise(r=>setTimeout(r,520)),t("rendering"),await new Promise(r=>setTimeout(r,240));const s=U6(n,e);return{spec:s,caption:s.verdict??""}}async function K6(n,e,t,s){if(Un){const r=await G6(n,e,t,s);if(r)return r}if(Fn){const r=await z6(e,s);if(r)return r;throw new Error("The live ClickHouse archive could not be reached. No demonstration data was shown. Please try again.")}return W6(n,e,s)}const Lt=["#2c3a2e","#c0623a","#d4a44c","#6f8266","#b5c4a8","#d98865","#3a4a3c","#8a6456"],X=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};function Y6(n){return`
    <div class="hv-agent__kpi-grid">
      ${(n.kpi??[]).map(t=>{const s=t.trend==="up"?'<span class="hv-agent__trend hv-agent__trend--up">trending_up</span>':t.trend==="down"?'<span class="hv-agent__trend hv-agent__trend--down">trending_down</span>':"";return`
            <div class="hv-agent__kpi-card">
              <div class="hv-agent__kpi-top">
                <span class="material-symbols-outlined hv-agent__kpi-icon">${X(t.icon??"stats")}</span>
                ${s}
              </div>
              <div class="hv-agent__kpi-value">${X(t.value)}</div>
              <div class="hv-agent__kpi-label">${X(t.label)}</div>
              ${t.sub?`<div class="hv-agent__kpi-sub">${X(t.sub)}</div>`:""}
            </div>
          `}).join("")}
    </div>
  `}function Q6(n){const e=n.series??[];if(!e.length)return Vt("No data");const t=e[0].points,s=Math.max(...t.map(L=>L.value),1),r=720,i=320,a=48,l=24,c=24,u=56,d=r-a-l,p=i-c-u,y=d/t.length*.62,b=d/t.length*.38,R=Array.from({length:5},(L,k)=>{const F=Math.round(s/4*k),$=c+p-F/s*p;return{v:F,y:$}});return`
    <svg class="hv-agent__chart" viewBox="0 0 ${r} ${i}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${X(n.title)}">
      ${R.map(L=>`
          <line x1="${a}" y1="${L.y}" x2="${r-l}" y2="${L.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${a-8}" y="${L.y+4}" text-anchor="end" font-size="11" fill="#6b7060">${L.v}</text>
        `).join("")}
      ${t.map((L,k)=>{const F=a+k*(y+b)+b/2,$=L.value/s*p,U=c+p-$,q=Lt[k%Lt.length];return`
            <g class="hv-agent__bar" data-drilldown="${X(L.drilldown)}" data-label="${X(L.label)}" data-value="${X(L.value)}">
              <rect x="${F}" y="${U}" width="${y}" height="${$}" rx="6" ry="6" fill="${q}" opacity="0.9">
                <animate attributeName="height" from="0" to="${$}" dur="0.6s" fill="freeze" begin="${k*.06}s" />
                <animate attributeName="y" from="${c+p}" to="${U}" dur="0.6s" fill="freeze" begin="${k*.06}s" />
              </rect>
              <text x="${F+y/2}" y="${c+p+22}" text-anchor="middle" font-size="11" fill="#3a3f33">${X(L.label)}</text>
              <text x="${F+y/2}" y="${U-6}" text-anchor="middle" font-size="11" font-weight="600" fill="#1d2018">${X(L.value)}</text>
            </g>
          `}).join("")}
      <line x1="${a}" y1="${c+p}" x2="${r-l}" y2="${c+p}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `}function X6(n){const e=n.series??[];if(!e.length)return Vt("No data");const t=e[0].points;if(t.length<2)return Vt("Need at least 2 points");const s=Math.max(...t.map(k=>k.value),1),r=720,i=320,a=48,l=24,c=24,u=56,d=r-a-l,p=i-c-u,y=d/(t.length-1),b=Array.from({length:5},(k,F)=>{const $=Math.round(s/4*F),U=c+p-$/s*p;return{v:$,y:U}}),R=t.map((k,F)=>{const $=a+F*y,U=c+p-k.value/s*p;return`${F===0?"M":"L"} ${$} ${U}`}).join(" "),L=`${R} L ${a+(t.length-1)*y} ${c+p} L ${a} ${c+p} Z`;return`
    <svg class="hv-agent__chart" viewBox="0 0 ${r} ${i}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${X(n.title)}">
      <defs>
        <linearGradient id="hv-agent-line-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c3a2e" stop-opacity="0.28" />
          <stop offset="100%" stop-color="#2c3a2e" stop-opacity="0" />
        </linearGradient>
      </defs>
      ${b.map(k=>`
          <line x1="${a}" y1="${k.y}" x2="${r-l}" y2="${k.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${a-8}" y="${k.y+4}" text-anchor="end" font-size="11" fill="#6b7060">${k.v}</text>
        `).join("")}
      <path d="${L}" fill="url(#hv-agent-line-grad)" />
      <path d="${R}" fill="none" stroke="#2c3a2e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0 2000" to="2000 0" dur="1s" fill="freeze" />
      </path>
      ${t.map((k,F)=>{const $=a+F*y,U=c+p-k.value/s*p;return`
            <g class="hv-agent__point" data-drilldown="${X(k.drilldown)}" data-label="${X(k.label)}" data-value="${X(k.value)}">
              <circle cx="${$}" cy="${U}" r="4" fill="#fbf5ec" stroke="#2c3a2e" stroke-width="2">
                <animate attributeName="r" from="0" to="4" dur="0.4s" fill="freeze" begin="${.8+F*.04}s" />
              </circle>
              ${F%Math.max(1,Math.floor(t.length/8))===0?`<text x="${$}" y="${c+p+22}" text-anchor="middle" font-size="11" fill="#3a3f33">${X(k.label)}</text>`:""}
            </g>
          `}).join("")}
      <line x1="${a}" y1="${c+p}" x2="${r-l}" y2="${c+p}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `}function J6(n){const e=n.series??[];if(!e.length)return Vt("No data");const t=e[0].points,s=t.reduce((d,p)=>d+p.value,0);if(s===0)return Vt("No data");const r=180,i=180,a=130,l=78;let c=-Math.PI/2;const u=t.map((d,p)=>{const y=d.value/s*Math.PI*2,b=c,R=c+y;c=R;const L=r+a*Math.cos(b),k=i+a*Math.sin(b),F=r+a*Math.cos(R),$=i+a*Math.sin(R),U=r+l*Math.cos(R),q=i+l*Math.sin(R),W=r+l*Math.cos(b),Z=i+l*Math.sin(b),S=y>Math.PI?1:0,w=`M ${L} ${k} A ${a} ${a} 0 ${S} 1 ${F} ${$} L ${U} ${q} A ${l} ${l} 0 ${S} 0 ${W} ${Z} Z`,T=(b+R)/2,_=(a+l)/2,E=r+_*Math.cos(T),I=i+_*Math.sin(T),A=Math.round(d.value/s*100);return{path:w,color:Lt[p%Lt.length],label:d.label,value:d.value,pct:A,lx:E,ly:I}});return`
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
        <text x="${r}" y="${i-6}" text-anchor="middle" font-size="14" fill="#6b7060" font-family="Spectral, serif">total</text>
        <text x="${r}" y="${i+18}" text-anchor="middle" font-size="28" font-weight="500" fill="#1d2018" font-family="Fraunces, serif">${s}</text>
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
  `}function Z6(n){const e=n.events??[];if(!e.length)return Vt("No events");const t=e.map(a=>a.year),s=Math.min(...t),r=Math.max(...t),i=Math.max(1,r-s);return`
    <div class="hv-agent__timeline">
      <div class="hv-agent__timeline-axis">
        <span>${s}</span>
        <div class="hv-agent__timeline-line"></div>
        <span>${r}</span>
      </div>
      <div class="hv-agent__timeline-events">
        ${e.map((a,l)=>{const c=(a.year-s)/i*92+4,u=Lt[l%Lt.length];return`
              <button class="hv-agent__timeline-event" data-label="${X(a.label)}" data-year="${X(a.year)}" style="--left: ${c}%; --color: ${u}; --delay: ${l*80}ms">
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
  `}function eg(n){const e=n.nodes??[],t=n.edges??[];if(!e.length)return Vt("No people");const s=Math.max(...e.map(c=>c.weight??0),1),r=50,i=50,a=32;e.forEach((c,u)=>{const d=u/e.length*Math.PI*2-Math.PI/2,p=a-(c.weight??0)/s*10;c._x=r+p*Math.cos(d),c._y=i+p*Math.sin(d)});const l=new Map(e.map(c=>[c.id,c]));return`
    <div class="hv-agent__network">
      <svg class="hv-agent__network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${t.map(c=>{const u=l.get(c.from),d=l.get(c.to);if(!u||!d)return"";const p=u._x,y=u._y,b=d._x,R=d._y;return`<line x1="${p}" y1="${y}" x2="${b}" y2="${R}" stroke="rgba(28,32,24,0.18)" stroke-width="0.3" />`}).join("")}
      </svg>
      ${e.map((c,u)=>{const d=c,p=16+(c.weight??0)/s*16;return`
            <button class="hv-agent__node" data-label="${X(c.label)}" data-meta="${X(c.meta??c.group??"")}" style="--x: ${d._x}%; --y: ${d._y}%; --size: ${p}px; --delay: ${u*60}ms">
              <span class="hv-agent__node-dot"></span>
              <span class="hv-agent__node-label">${X(c.label.split(" ")[0])}</span>
            </button>
          `}).join("")}
    </div>
  `}function tg(n){const e=n.points??[];if(!e.length)return Vt("No locations");const t=e.every(a=>a.lat!==void 0&&a.lng!==void 0),s=t?{minLat:-22,maxLat:-8,minLng:21,maxLng:34}:{minLat:0,maxLat:0,minLng:0,maxLng:0},r=Math.max(...e.map(a=>a.count),1),i=(a,l)=>{const c=(l-s.minLng)/(s.maxLng-s.minLng)*100,u=100-(a-s.minLat)/(s.maxLat-s.minLat)*100;return{x:c,y:u}};return`
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
      ${e.map((a,l)=>{const c=t?i(a.lat,a.lng):{x:a.x??50,y:a.y??50},u=18+a.count/r*28,d=Lt[l%Lt.length];return`
            <button class="hv-agent__map-place" data-drilldown="${X(a.drilldown)}" data-label="${X(a.place)}" data-count="${X(a.count)}" style="--x: ${c.x}%; --y: ${c.y}%; --size: ${u}px; --color: ${d}; --delay: ${l*70}ms">
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
  `}function ng(n){const e=n.headers??[],t=n.rows??[];return t.length?`
    <div class="hv-agent__table-wrap">
      <table class="hv-agent__table">
        <thead>
          <tr>${e.map(s=>`<th>${X(s)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${t.map((s,r)=>`
              <tr class="hv-agent__table-row" data-drilldown="${X(s.drilldown)}" style="--delay: ${r*30}ms">
                ${s.cells.map((i,a)=>`<td${a===0?' class="hv-agent__table-key"':""}>${X(i)}</td>`).join("")}
              </tr>
            `).join("")}
        </tbody>
      </table>
    </div>
  `:Vt("No records")}function sg(n){const e=n.compare;if(!e)return Vt("No comparison");const t=Math.max(...e.left.map(r=>r.value),1),s=Math.max(...e.right.map(r=>r.value),1);return`
    <div class="hv-agent__compare">
      <div class="hv-agent__compare-col hv-agent__compare-col--left">
        <h4>${X(e.leftLabel)}</h4>
        ${e.left.map((r,i)=>{const a=r.value/t*100;return`
              <div class="hv-agent__compare-row" data-label="${X(r.label)}" data-value="${X(r.value)}">
                <span class="hv-agent__compare-label">${X(r.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${a}%; background: ${Lt[i%Lt.length]}; --delay: ${i*80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${X(r.value)}</span>
              </div>
            `}).join("")}
      </div>
      <div class="hv-agent__compare-divider"></div>
      <div class="hv-agent__compare-col hv-agent__compare-col--right">
        <h4>${X(e.rightLabel)}</h4>
        ${e.right.map((r,i)=>{const a=r.value/s*100;return`
              <div class="hv-agent__compare-row" data-label="${X(r.label)}" data-value="${X(r.value)}">
                <span class="hv-agent__compare-label">${X(r.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${a}%; background: ${Lt[(i+4)%Lt.length]}; --delay: ${i*80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${X(r.value)}</span>
              </div>
            `}).join("")}
      </div>
    </div>
  `}function rg(n){const e=n.heatmap??[];if(!e.length)return Vt("No data");const t=[...new Set(e.map(i=>i.row))],s=[...new Set(e.map(i=>i.col))],r=Math.max(...e.map(i=>i.value),1);return`
    <div class="hv-agent__heatmap">
      ${t.map(i=>`
          <div class="hv-agent__heatmap-row">
            <span class="hv-agent__heatmap-label">${X(i)}</span>
            ${s.map(a=>{const l=e.find(d=>d.row===i&&d.col===a),c=(l==null?void 0:l.value)??0;return`<div class="hv-agent__heatmap-cell" style="background: rgba(192,98,58,${c/r}); --value: ${c}" data-row="${X(i)}" data-col="${X(a)}" data-value="${X(c)}" title="${X(i)} · ${X(a)}: ${X(c)}"></div>`}).join("")}
          </div>
        `).join("")}
    </div>
  `}function Vt(n){return`
    <div class="hv-agent__empty">
      <span class="material-symbols-outlined">query_stats</span>
      <p>${X(n)}</p>
    </div>
  `}function ig(n){switch(n.kind){case"kpi":return Y6(n);case"bar":return Q6(n);case"line":return X6(n);case"donut":return J6(n);case"timeline":return Z6(n);case"network":return eg(n);case"map":return tg(n);case"table":return ng(n);case"compare":return sg(n);case"heatmap":return rg(n);default:return Vt(`Unknown viz kind: ${n.kind}`)}}const ag=["Show me the timeline of memories","Where did my family live?","Who appears most often in the archive?","What kinds of memories are preserved?","Compare the 1920s and the 2020s","What are the oldest memories?","Show me the family constellation","Give me an overview of the archive"],og={queued:"Queued",interpreting:"Interpreting your question",querying:"Querying ClickHouse",rendering:"Rendering visualization",done:"Done",error:"Something went wrong"};class lg{constructor(e){v(this,"mount");v(this,"dataset");v(this,"messages",[]);v(this,"isStreaming",!1);this.mount=e.mount,this.dataset=e.dataset,e.vaultId,e.onFollowup}init(){this.renderShell(),this.renderSuggestedPrompts()}async send(e){if(this.isStreaming||!e.trim())return;this.isStreaming=!0;const t={id:`u-${Date.now()}`,role:"user",prompt:e,at:new Date().toISOString()};this.messages.push(t),this.renderMessages();const s={id:`a-${Date.now()}`,role:"agent",prompt:e,at:new Date().toISOString(),phase:"queued"};this.messages.push(s),this.renderMessages();const r=Date.now();try{const i=await K6(this.dataset,e,"demo-vault",a=>{const l=this.messages.find(c=>c.id===s.id);l&&(l.phase=a,this.renderMessages())});i.spec.elapsedMs=Date.now()-r,i.spec.source||(i.spec.source=Un?"Trigger.dev chat.agent() · ClickHouse":Fn?"ClickHouse Cloud · live (Vite middleware)":"Mock runtime · (configure Trigger.dev + ClickHouse for production)"),s.spec=i.spec,s.phase="done",this.renderMessages()}catch(i){s.phase="error",s.text=i instanceof Error?i.message:String(i),this.renderMessages()}finally{this.isStreaming=!1}}renderShell(){this.mount.innerHTML=`
      <aside class="hv-agent-sidebar" data-sidebar aria-label="Agent navigation">
        <div class="hv-agent-sidebar__brand">
          <a href="#vault" data-dashboard-view="vault" aria-label="Heritage Atlas home">
            <img data-brand-logo class="brand-logo" src="/heritageatlas-logo.svg" alt="Heritage Atlas" />
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
          <p class="hv-agent-sidebar__info-value">${Un?"Trigger.dev + ClickHouse":Fn?"ClickHouse Cloud":"Mock runtime"}</p>
          <p class="hv-agent-sidebar__info-sub">${Un?"chat.agent() orchestration · 10 ClickHouse-querying tools":Fn?"Live queries · ~500ms round-trip":"Configure .env for live data"}</p>
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
            <span class="hv-agent__powered${H1?" hv-agent__powered--live":" hv-agent__powered--fallback"}" title="${Un?"Live: Trigger.dev chat.agent() worker querying ClickHouse Cloud":Fn?"Live: Vite middleware querying ClickHouse Cloud directly. Trigger.dev secret key pending — once set, the chat.agent() worker takes over.":"Fallback mode: set VITE_TRIGGER_PROJECT_REF + VITE_TRIGGER_PUBLIC_TOKEN or VITE_CLICKHOUSE_LIVE=true in .env"}">
              <span class="material-symbols-outlined" style="font-size:14px">${H1?"bolt":"cloud_off"}</span>
              ${Un?"Trigger.dev + ClickHouse · live":Fn?"ClickHouse · live":"Mock runtime · configure Trigger.dev + ClickHouse"}
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
    `,np();const e=this.mount.querySelector("[data-agent-form]"),t=this.mount.querySelector("[data-agent-input]");e==null||e.addEventListener("submit",s=>{s.preventDefault();const r=(t==null?void 0:t.value.trim())??"";r&&(this.send(r),t&&(t.value=""))})}renderSuggestedPrompts(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.innerHTML=`
      <p class="hv-agent__suggestions-label">Try asking</p>
      <div class="hv-agent__chips">
        ${ag.map(t=>`
          <button class="hv-agent__chip" data-prompt="${this.esc(t)}">${this.esc(t)}</button>
        `).join("")}
      </div>
    `,e.querySelectorAll("[data-prompt]").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.prompt??"",r=this.mount.querySelector("[data-agent-input]");r&&(r.value=s),this.send(s),r&&(r.value="")})}))}renderMessages(){const e=this.mount.querySelector("[data-agent-messages]");if(!e)return;if(this.messages.length===0){e.innerHTML="",this.showSuggestions();return}this.hideSuggestions(),e.innerHTML=this.messages.map(s=>this.renderMessage(s)).join(""),this.messages.forEach(s=>{s.role==="agent"&&s.phase==="done"&&s.spec&&this.bindInteractions(s.id)});const t=this.mount.querySelector("[data-agent-scroll]");t&&(t.scrollTop=t.scrollHeight)}renderMessage(e){return e.role==="user"?`
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
              <span class="hv-agent__phase-label">${og[e.phase]}</span>
            </div>
          </div>
        </div>
      `;if(e.phase==="error")return`
        <div class="hv-agent__msg hv-agent__msg--agent">
          <div class="hv-agent__msg-avatar"><span class="material-symbols-outlined">error</span></div>
          <div class="hv-agent__msg-body">
            <div class="hv-agent__error">${this.esc(e.text??"Unknown error")}</div>
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
              ${ig(t)}
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
                    ${t.followups.map(s=>`<button class="hv-agent__chip" data-followup="${this.esc(s)}">${this.esc(s)}</button>`).join("")}
                  </div>
                </div>
              `:""}
          </div>
        </div>
      </div>
    `}bindInteractions(e){const t=this.mount.querySelector(`[data-msg-id="${e}"]`);t&&(t.querySelectorAll("[data-drilldown]").forEach(s=>{const r=s.getAttribute("data-drilldown");if(!r)return;s.setAttribute("role","button"),s.setAttribute("tabindex","0");const i=()=>{if(this.isStreaming)return;const a=this.mount.querySelector("[data-agent-input]");a&&(a.value=r),this.send(r),a&&(a.value="")};s.addEventListener("click",i),s.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i())})}),t.querySelectorAll("[data-followup]").forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.followup??"",i=this.mount.querySelector("[data-agent-input]");i&&(i.value=r),this.send(r),i&&(i.value="")})}),t.querySelectorAll(".hv-agent__legend-item").forEach(s=>{s.addEventListener("mouseenter",()=>{const r=s.dataset.label;t.querySelectorAll(".hv-agent__slice").forEach(i=>{i.style.opacity=i.dataset.label===r?"1":"0.25"})}),s.addEventListener("mouseleave",()=>{t.querySelectorAll(".hv-agent__slice").forEach(r=>{r.style.opacity=""})})}))}showSuggestions(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.style.display="")}hideSuggestions(){const e=this.mount.querySelector("[data-agent-suggestions]");e&&(e.style.display="none")}esc(e){const t=document.createElement("span");return t.textContent=e,t.innerHTML}}let aa=null;function ip(){const n=document.getElementById("agent-screen");return n?(aa||(aa=new lg({mount:n,dataset:He,vaultId:"demo-vault"}),aa.init()),aa):null}document.addEventListener("heritage:agent-route",()=>{ip()});window.location.hash==="#agent"&&ip();const Tt=n=>{if(n==null)return"";const e=document.createElement("span");return e.textContent=String(n),e.innerHTML};function cg(n){const e=He.members,t=e.filter(u=>u.parentId).map(u=>({from:u.parentId,to:u.id})),s=new Map;e.forEach(u=>{u.parentId&&s.set(u.id,u.parentId)});const r=u=>{let d=0,p=u;for(;s.has(p)&&(p=s.get(p),d++,!(d>20)););return d},i=new Map;e.forEach(u=>{const d=r(u.id);i.has(d)||i.set(d,[]),i.get(d).push(u)});const a=[...i.keys()].sort((u,d)=>u-d),l=new Map;He.memories.forEach(u=>{var d;(d=u.familyMemberIds)==null||d.forEach(p=>{l.set(p,(l.get(p)??0)+1)})}),n.innerHTML=`
    <div class="hv-fm-backdrop" aria-hidden="true">
      <div class="hv-fm-aurora"></div>
    </div>
    <div class="hv-fm-grain" aria-hidden="true"></div>

    <aside class="hv-fm-sidebar" data-sidebar aria-label="Family Map navigation">
      <div class="hv-fm-sidebar__brand">
        <a href="#vault" data-dashboard-view="vault" aria-label="HeritageAtlas home">
          <img data-brand-logo class="brand-logo" src="/heritageatlas-logo.svg" alt="HeritageAtlas" />
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
          ${t.map(u=>{const d=r(u.from),p=r(u.to),y=i.get(d)??[],b=i.get(p)??[],R=y.findIndex(W=>W.id===u.from),L=b.findIndex(W=>W.id===u.to),k=(R+1)/(y.length+1)*100,F=(d+.5)/a.length*100,$=(L+1)/(b.length+1)*100,U=(p+.5)/a.length*100,q=(F+U)/2;return`<path d="M ${k} ${F} C ${k} ${q}, ${$} ${q}, ${$} ${U}" fill="none" stroke="rgba(45,58,46,0.2)" stroke-width="0.3" stroke-dasharray="0.8 0.8" />`}).join("")}
        </svg>

        <div class="hv-fm-generations">
          ${a.map((u,d)=>{const p=i.get(u)??[];return`
              <div class="hv-fm-generation" style="--gen-delay: ${d*100}ms">
                <p class="hv-fm-generation__label">Generation ${u+1}</p>
                <div class="hv-fm-generation__row">
                  ${p.map((y,b)=>{const R=l.get(y.id)??0,L=u===0,k=y.birthYear??"?",F=y.deathYear??"present";return`
                      <button class="hv-fm-node${L?" hv-fm-node--root":""}" data-fm-node data-member-id="${Tt(y.id)}" style="--node-delay: ${d*100+b*40}ms">
                        <span class="hv-fm-node__dot">
                          <span class="material-symbols-outlined">person</span>
                        </span>
                        <span class="hv-fm-node__body">
                          <span class="hv-fm-node__name">${Tt(y.fullName)}</span>
                          <span class="hv-fm-node__meta">${Tt(y.relationship??"Family")}</span>
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
  `;const c=n.querySelector("[data-fm-inspector]");n.querySelectorAll("[data-fm-node]").forEach(u=>{u.addEventListener("click",()=>{const d=u.dataset.memberId??"",p=e.find(k=>k.id===d);if(!p||!c)return;n.querySelectorAll("[data-fm-node]").forEach(k=>k.classList.remove("is-selected")),u.classList.add("is-selected");const y=l.get(d)??0,b=e.find(k=>k.id===p.parentId),R=e.filter(k=>k.parentId===d),L=He.memories.filter(k=>{var F;return(F=k.familyMemberIds)==null?void 0:F.includes(d)});c.innerHTML=`
        <div class="hv-fm-inspector__card">
          <div class="hv-fm-inspector__top">
            <span class="hv-fm-inspector__avatar">
              <span class="material-symbols-outlined">person</span>
            </span>
            <div>
              <h3 class="hv-fm-inspector__name">${Tt(p.fullName)}</h3>
              <p class="hv-fm-inspector__role">${Tt(p.relationship??"Family member")}</p>
            </div>
          </div>
          ${p.notes?`<p class="hv-fm-inspector__notes">${Tt(p.notes)}</p>`:""}
          <div class="hv-fm-inspector__meta">
            <div><b>${p.birthYear??"?"}</b><small>Born</small></div>
            <div><b>${p.deathYear??"—"}</b><small>Died</small></div>
            <div><b>${y}</b><small>Memories</small></div>
          </div>
          ${b?`
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Parent</p>
              <button class="hv-fm-inspector__link" data-fm-node data-member-id="${Tt(b.id)}">
                <span class="material-symbols-outlined">arrow_upward</span>
                ${Tt(b.fullName)}
              </button>
            </div>
          `:""}
          ${R.length?`
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Children (${R.length})</p>
              ${R.map(k=>`
                <button class="hv-fm-inspector__link" data-fm-node data-member-id="${Tt(k.id)}">
                  <span class="material-symbols-outlined">arrow_downward</span>
                  ${Tt(k.fullName)}
                </button>
              `).join("")}
            </div>
          `:""}
          ${L.length?`
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Memories (${L.length})</p>
              ${L.slice(0,5).map(k=>`
                <div class="hv-fm-inspector__memory">
                  <span class="material-symbols-outlined">${k.type==="photo"?"photo_camera":k.type==="audio"?"graphic_eq":k.type==="video"?"videocam":"description"}</span>
                  <div>
                    <b>${Tt(k.title)}</b>
                    <small>${Tt(k.year??"")} · ${Tt(k.location??"")}</small>
                  </div>
                </div>
              `).join("")}
            </div>
          `:""}
        </div>
      `,c.querySelectorAll("[data-fm-node]").forEach(k=>{k.addEventListener("click",()=>{const F=n.querySelector(`[data-fm-node][data-member-id="${k.dataset.memberId}"]`);F==null||F.click()})})})})}let j1=!1;function ap(){const n=document.getElementById("family-map-screen");!n||j1||(cg(n),j1=!0)}document.addEventListener("click",n=>{if(!n.target.closest('[data-dashboard-view="family-map"]'))return;n.preventDefault();const t=document.querySelector(".landing-page"),s=document.getElementById("login-screen"),r=document.getElementById("vault-screen"),i=document.getElementById("story-mode-screen"),a=document.getElementById("agent-screen"),l=document.getElementById("family-map-screen");l&&(t&&t.classList.add("is-hidden"),s&&(s.style.display="none"),r&&(r.style.display="none"),i&&(i.style.display="none"),a&&(a.style.display="none"),l.style.display="flex",window.scrollTo({top:0,behavior:"smooth"}),history.pushState({view:"family-map"},"","#family-map"),requestAnimationFrame(()=>ap()))});window.location.hash==="#family-map"&&document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".landing-page"),e=document.getElementById("family-map-screen");n&&e&&(n.classList.add("is-hidden"),e.style.display="flex",requestAnimationFrame(()=>ap()))});const ug=()=>{};var G1={};/**
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
 */const op=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},hg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],l=n[t++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,l=a?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let y=(l&15)<<2|u>>6,b=u&63;c||(b=64,a||(y=64)),s.push(t[d],t[p],t[y],t[b])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(op(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new dg;const y=i<<2|l>>4;if(s.push(y),u!==64){const b=l<<4&240|u>>2;if(s.push(b),p!==64){const R=u<<6&192|p;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pg=function(n){const e=op(n);return lp.encodeByteArray(e,!0)},Da=function(n){return pg(n).replace(/\./g,"")},cp=function(n){try{return lp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mg=()=>fg().__FIREBASE_DEFAULTS__,gg=()=>{if(typeof process>"u"||typeof G1>"u")return;const n=G1.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cp(n[1]);return e&&JSON.parse(e)},co=()=>{try{return ug()||mg()||gg()||yg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},up=n=>{var e,t;return(t=(e=co())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},hp=n=>{const e=up(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dp=()=>{var n;return(n=co())==null?void 0:n.config},pp=n=>{var e;return(e=co())==null?void 0:e[`_${n}`]};/**
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
 */class fp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function mp(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Da(JSON.stringify(t)),Da(JSON.stringify(a)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function vg(){var e;const n=(e=co())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Eg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bg(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ag(){return!vg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gc(){try{return typeof indexedDB=="object"}catch{return!1}}function yc(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}function gp(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tg="FirebaseError";class Ut extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Tg,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Ig(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new Ut(r,l,s)}}function Ig(n,e){return n.replace(Sg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Sg=/\{\$([^}]+)}/g;function Rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(z1(i)&&z1(a)){if(!rs(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function z1(n){return n!==null&&typeof n=="object"}/**
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
 */function Ni(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Yr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Qr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Cg(n,e){const t=new Pg(n,e);return t.subscribe.bind(t)}class Pg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");xg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=ml),r.error===void 0&&(r.error=ml),r.complete===void 0&&(r.complete=ml);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ml(){}/**
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
 */const kg=1e3,Ng=2,Og=14400*1e3,Dg=.5;function W1(n,e=kg,t=Ng){const s=e*Math.pow(t,n),r=Math.round(Dg*s*(Math.random()-.5)*2);return Math.min(Og,s+r)}/**
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
 */function Ae(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Hs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _c(n){return(await fetch(n,{credentials:"include"})).ok}class Mt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const As="[DEFAULT]";/**
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
 */class Lg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fp;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mg(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Vg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vg(n){return n===As?void 0:n}function Mg(n){return n.instantiationMode==="EAGER"}/**
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
 */class $g{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const Ug={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Fg=pe.INFO,Bg={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},qg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Bg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uo{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=qg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Hg=(n,e)=>e.some(t=>n instanceof t);let K1,Y1;function jg(){return K1||(K1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gg(){return Y1||(Y1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yp=new WeakMap,Ul=new WeakMap,_p=new WeakMap,gl=new WeakMap,vc=new WeakMap;function zg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Qn(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&yp.set(t,n)}).catch(()=>{}),vc.set(e,n),e}function Wg(n){if(Ul.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ul.set(n,e)}let Fl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ul.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_p.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Kg(n){Fl=n(Fl)}function Yg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(yl(this),e,...t);return _p.set(s,e.sort?e.sort():[e]),Qn(s)}:Gg().includes(n)?function(...e){return n.apply(yl(this),e),Qn(yp.get(this))}:function(...e){return Qn(n.apply(yl(this),e))}}function Qg(n){return typeof n=="function"?Yg(n):(n instanceof IDBTransaction&&Wg(n),Hg(n,jg())?new Proxy(n,Fl):n)}function Qn(n){if(n instanceof IDBRequest)return zg(n);if(gl.has(n))return gl.get(n);const e=Qg(n);return e!==n&&(gl.set(n,e),vc.set(e,n)),e}const yl=n=>vc.get(n);function vp(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),l=Qn(a);return s&&a.addEventListener("upgradeneeded",c=>{s(Qn(a.result),c.oldVersion,c.newVersion,Qn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Xg=["get","getKey","getAll","getAllKeys","count"],Jg=["put","add","delete","clear"],_l=new Map;function Q1(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_l.get(e))return _l.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=Jg.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xg.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return _l.set(e,i),i}Kg(n=>({...n,get:(e,t,s)=>Q1(e,t)||n.get(e,t,s),has:(e,t)=>!!Q1(e,t)||n.has(e,t)}));/**
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
 */class Zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(e0(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function e0(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bl="@firebase/app",X1="0.15.1";/**
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
 */const Tn=new uo("@firebase/app"),t0="@firebase/app-compat",n0="@firebase/analytics-compat",s0="@firebase/analytics",r0="@firebase/app-check-compat",i0="@firebase/app-check",a0="@firebase/auth",o0="@firebase/auth-compat",l0="@firebase/database",c0="@firebase/data-connect",u0="@firebase/database-compat",h0="@firebase/functions",d0="@firebase/functions-compat",p0="@firebase/installations",f0="@firebase/installations-compat",m0="@firebase/messaging",g0="@firebase/messaging-compat",y0="@firebase/performance",_0="@firebase/performance-compat",v0="@firebase/remote-config",w0="@firebase/remote-config-compat",E0="@firebase/storage",b0="@firebase/storage-compat",A0="@firebase/firestore",T0="@firebase/ai",I0="@firebase/firestore-compat",S0="firebase",R0="12.16.0";/**
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
 */const ql="[DEFAULT]",C0={[Bl]:"fire-core",[t0]:"fire-core-compat",[s0]:"fire-analytics",[n0]:"fire-analytics-compat",[i0]:"fire-app-check",[r0]:"fire-app-check-compat",[a0]:"fire-auth",[o0]:"fire-auth-compat",[l0]:"fire-rtdb",[c0]:"fire-data-connect",[u0]:"fire-rtdb-compat",[h0]:"fire-fn",[d0]:"fire-fn-compat",[p0]:"fire-iid",[f0]:"fire-iid-compat",[m0]:"fire-fcm",[g0]:"fire-fcm-compat",[y0]:"fire-perf",[_0]:"fire-perf-compat",[v0]:"fire-rc",[w0]:"fire-rc-compat",[E0]:"fire-gcs",[b0]:"fire-gcs-compat",[A0]:"fire-fst",[I0]:"fire-fst-compat",[T0]:"fire-vertex","fire-js":"fire-js",[S0]:"fire-js-all"};/**
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
 */const La=new Map,P0=new Map,Hl=new Map;function J1(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zt(n){const e=n.name;if(Hl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;Hl.set(e,n);for(const t of La.values())J1(t,n);for(const t of P0.values())J1(t,n);return!0}function ms(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function St(n){return n==null?!1:n.settings!==void 0}/**
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
 */const x0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new qs("app","Firebase",x0);/**
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
 */class k0{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const js=R0;function wp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ql,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw Xn.create("bad-app-name",{appName:String(r)});if(t||(t=dp()),!t)throw Xn.create("no-options");const i=La.get(r);if(i){if(rs(t,i.options)&&rs(s,i.config))return i;throw Xn.create("duplicate-app",{appName:r})}const a=new $g(r);for(const c of Hl.values())a.addComponent(c);const l=new k0(t,s,a);return La.set(r,l),l}function ho(n=ql){const e=La.get(n);if(!e&&n===ql&&dp())return wp();if(!e)throw Xn.create("no-app",{appName:n});return e}function gt(n,e,t){let s=C0[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}zt(new Mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const N0="firebase-heartbeat-database",O0=1,pi="firebase-heartbeat-store";let vl=null;function Ep(){return vl||(vl=vp(N0,O0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(pi)}catch(t){console.warn(t)}}}}).catch(n=>{throw Xn.create("idb-open",{originalErrorMessage:n.message})})),vl}async function D0(n){try{const t=(await Ep()).transaction(pi),s=await t.objectStore(pi).get(bp(n));return await t.done,s}catch(e){if(e instanceof Ut)Tn.warn(e.message);else{const t=Xn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(t.message)}}}async function Z1(n,e){try{const s=(await Ep()).transaction(pi,"readwrite");await s.objectStore(pi).put(e,bp(n)),await s.done}catch(t){if(t instanceof Ut)Tn.warn(t.message);else{const s=Xn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(s.message)}}}function bp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const L0=1024,V0=30;class M0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new U0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=eh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>V0){const a=F0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=eh(),{heartbeatsToSend:s,unsentEntries:r}=$0(this._heartbeatsCache.heartbeats),i=Da(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Tn.warn(t),""}}}function eh(){return new Date().toISOString().substring(0,10)}function $0(n,e=L0){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),th(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),th(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class U0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gc()?yc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await D0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Z1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Z1(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function th(n){return Da(JSON.stringify({version:2,heartbeats:n})).length}function F0(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function B0(n){zt(new Mt("platform-logger",e=>new Zg(e),"PRIVATE")),zt(new Mt("heartbeat",e=>new M0(e),"PRIVATE")),gt(Bl,X1,n),gt(Bl,X1,"esm2020"),gt("fire-js","")}B0("");const Ap="@firebase/installations",wc="0.6.22";/**
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
 */const Tp=1e4,Ip=`w:${wc}`,Sp="FIS_v2",q0="https://firebaseinstallations.googleapis.com/v1",H0=3600*1e3,j0="installations",G0="Installations";/**
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
 */const z0={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Os=new qs(j0,G0,z0);function Rp(n){return n instanceof Ut&&n.code.includes("request-failed")}/**
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
 */function Cp({projectId:n}){return`${q0}/projects/${n}/installations`}function Pp(n){return{token:n.token,requestStatus:2,expiresIn:K0(n.expiresIn),creationTime:Date.now()}}async function xp(n,e){const s=(await e.json()).error;return Os.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function kp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function W0(n,{refreshToken:e}){const t=kp(n);return t.append("Authorization",Y0(e)),t}async function Np(n){const e=await n();return e.status>=500&&e.status<600?n():e}function K0(n){return Number(n.replace("s","000"))}function Y0(n){return`${Sp} ${n}`}/**
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
 */async function Q0({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=Cp(n),r=kp(n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const a={fid:t,authVersion:Sp,appId:n.appId,sdkVersion:Ip},l={method:"POST",headers:r,body:JSON.stringify(a)},c=await Np(()=>fetch(s,l));if(c.ok){const u=await c.json();return{fid:u.fid||t,registrationStatus:2,refreshToken:u.refreshToken,authToken:Pp(u.authToken)}}else throw await xp("Create Installation",c)}/**
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
 */function Op(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function X0(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const J0=/^[cdef][\w-]{21}$/,jl="";function Z0(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=e7(n);return J0.test(t)?t:jl}catch{return jl}}function e7(n){return X0(n).substr(0,22)}/**
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
 */function po(n){return`${n.appName}!${n.appId}`}/**
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
 */const Dp=new Map;function Lp(n,e){const t=po(n);Vp(t,e),t7(t,e)}function Vp(n,e){const t=Dp.get(n);if(t)for(const s of t)s(e)}function t7(n,e){const t=n7();t&&t.postMessage({key:n,fid:e}),s7()}let Is=null;function n7(){return!Is&&"BroadcastChannel"in self&&(Is=new BroadcastChannel("[Firebase] FID Change"),Is.onmessage=n=>{Vp(n.data.key,n.data.fid)}),Is}function s7(){Dp.size===0&&Is&&(Is.close(),Is=null)}/**
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
 */const r7="firebase-installations-database",i7=1,Ds="firebase-installations-store";let wl=null;function Ec(){return wl||(wl=vp(r7,i7,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ds)}}})),wl}async function Va(n,e){const t=po(n),r=(await Ec()).transaction(Ds,"readwrite"),i=r.objectStore(Ds),a=await i.get(t);return await i.put(e,t),await r.done,(!a||a.fid!==e.fid)&&Lp(n,e.fid),e}async function Mp(n){const e=po(n),s=(await Ec()).transaction(Ds,"readwrite");await s.objectStore(Ds).delete(e),await s.done}async function fo(n,e){const t=po(n),r=(await Ec()).transaction(Ds,"readwrite"),i=r.objectStore(Ds),a=await i.get(t),l=e(a);return l===void 0?await i.delete(t):await i.put(l,t),await r.done,l&&(!a||a.fid!==l.fid)&&Lp(n,l.fid),l}/**
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
 */async function bc(n){let e;const t=await fo(n.appConfig,s=>{const r=a7(s),i=o7(n,r);return e=i.registrationPromise,i.installationEntry});return t.fid===jl?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function a7(n){const e=n||{fid:Z0(),registrationStatus:0};return $p(e)}function o7(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Os.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=l7(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:c7(n)}:{installationEntry:e}}async function l7(n,e){try{const t=await Q0(n,e);return Va(n.appConfig,t)}catch(t){throw Rp(t)&&t.customData.serverCode===409?await Mp(n.appConfig):await Va(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function c7(n){let e=await nh(n.appConfig);for(;e.registrationStatus===1;)await Op(100),e=await nh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await bc(n);return s||t}return e}function nh(n){return fo(n,e=>{if(!e)throw Os.create("installation-not-found");return $p(e)})}function $p(n){return u7(n)?{fid:n.fid,registrationStatus:0}:n}function u7(n){return n.registrationStatus===1&&n.registrationTime+Tp<Date.now()}/**
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
 */async function h7({appConfig:n,heartbeatServiceProvider:e},t){const s=d7(n,t),r=W0(n,t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const a={installation:{sdkVersion:Ip,appId:n.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},c=await Np(()=>fetch(s,l));if(c.ok){const u=await c.json();return Pp(u)}else throw await xp("Generate Auth Token",c)}function d7(n,{fid:e}){return`${Cp(n)}/${e}/authTokens:generate`}/**
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
 */async function Ac(n,e=!1){let t;const s=await fo(n.appConfig,i=>{if(!Up(i))throw Os.create("not-registered");const a=i.authToken;if(!e&&m7(a))return i;if(a.requestStatus===1)return t=p7(n,e),i;{if(!navigator.onLine)throw Os.create("app-offline");const l=y7(i);return t=f7(n,l),l}});return t?await t:s.authToken}async function p7(n,e){let t=await sh(n.appConfig);for(;t.authToken.requestStatus===1;)await Op(100),t=await sh(n.appConfig);const s=t.authToken;return s.requestStatus===0?Ac(n,e):s}function sh(n){return fo(n,e=>{if(!Up(e))throw Os.create("not-registered");const t=e.authToken;return _7(t)?{...e,authToken:{requestStatus:0}}:e})}async function f7(n,e){try{const t=await h7(n,e),s={...e,authToken:t};return await Va(n.appConfig,s),t}catch(t){if(Rp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Mp(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Va(n.appConfig,s)}throw t}}function Up(n){return n!==void 0&&n.registrationStatus===2}function m7(n){return n.requestStatus===2&&!g7(n)}function g7(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+H0}function y7(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function _7(n){return n.requestStatus===1&&n.requestTime+Tp<Date.now()}/**
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
 */async function v7(n){const e=n,{installationEntry:t,registrationPromise:s}=await bc(e);return s?s.catch(console.error):Ac(e).catch(console.error),t.fid}/**
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
 */async function w7(n,e=!1){const t=n;return await E7(t),(await Ac(t,e)).token}async function E7(n){const{registrationPromise:e}=await bc(n);e&&await e}/**
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
 */function b7(n){if(!n||!n.options)throw El("App Configuration");if(!n.name)throw El("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw El(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function El(n){return Os.create("missing-app-config-values",{valueName:n})}/**
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
 */const Fp="installations",A7="installations-internal",T7=n=>{const e=n.getProvider("app").getImmediate(),t=b7(e),s=ms(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},I7=n=>{const e=n.getProvider("app").getImmediate(),t=ms(e,Fp).getImmediate();return{getId:()=>v7(t),getToken:r=>w7(t,r)}};function S7(){zt(new Mt(Fp,T7,"PUBLIC")),zt(new Mt(A7,I7,"PRIVATE"))}S7();gt(Ap,wc);gt(Ap,wc,"esm2020");/**
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
 */const Ma="analytics",R7="firebase_id",C7="origin",P7=60*1e3,x7="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tc="https://www.googletagmanager.com/gtag/js";/**
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
 */const dt=new uo("@firebase/analytics");/**
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
 */const k7={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},xt=new qs("analytics","Analytics",k7);/**
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
 */function N7(n){if(!n.startsWith(Tc)){const e=xt.create("invalid-gtag-resource",{gtagURL:n});return dt.warn(e.message),""}return n}function Bp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function O7(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function D7(n,e){const t=O7("firebase-js-sdk-policy",{createScriptURL:N7}),s=document.createElement("script"),r=`${Tc}?l=${n}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function L7(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function V7(n,e,t,s,r,i){const a=s[r];try{if(a)await e[a];else{const c=(await Bp(t)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(l){dt.error(l)}n("config",r,i)}async function M7(n,e,t,s,r){try{let i=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await Bp(t);for(const c of a){const u=l.find(p=>p.measurementId===c),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",s,r||{})}catch(i){dt.error(i)}}function $7(n,e,t,s){async function r(i,...a){try{if(i==="event"){const[l,c]=a;await M7(n,e,t,l,c)}else if(i==="config"){const[l,c]=a;await V7(n,e,t,s,l,c)}else if(i==="consent"){const[l,c]=a;n("consent",l,c)}else if(i==="get"){const[l,c,u]=a;n("get",l,c,u)}else if(i==="set"){const[l]=a;n("set",l)}else n(i,...a)}catch(l){dt.error(l)}}return r}function U7(n,e,t,s,r){let i=function(...a){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=$7(i,n,e,t),{gtagCore:i,wrappedGtag:window[r]}}function F7(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tc)&&t.src.includes(n))return t;return null}/**
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
 */const B7=30,q7=1e3;class H7{constructor(e={},t=q7){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const qp=new H7;function j7(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function G7(n){var a;const{appId:e,apiKey:t}=n,s={method:"GET",headers:j7(t)},r=x7.replace("{app-id}",e),i=await fetch(r,s);if(i.status!==200&&i.status!==304){let l="";try{const c=await i.json();(a=c.error)!=null&&a.message&&(l=c.error.message)}catch{}throw xt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:l})}return i.json()}async function z7(n,e=qp,t){const{appId:s,apiKey:r,measurementId:i}=n.options;if(!s)throw xt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw xt.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Y7;return setTimeout(async()=>{l.abort()},P7),Hp({appId:s,apiKey:r,measurementId:i},a,l,e)}async function Hp(n,{throttleEndTimeMillis:e,backoffCount:t},s,r=qp){var l;const{appId:i,measurementId:a}=n;try{await W7(s,e)}catch(c){if(a)return dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await G7(n);return r.deleteThrottleMetadata(i),c}catch(c){const u=c;if(!K7(u)){if(r.deleteThrottleMetadata(i),a)return dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:i,measurementId:a};throw c}const d=Number((l=u==null?void 0:u.customData)==null?void 0:l.httpStatus)===503?W1(t,r.intervalMillis,B7):W1(t,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return r.setThrottleMetadata(i,p),dt.debug(`Calling attemptFetch again in ${d} millis`),Hp(n,p,s,r)}}function W7(n,e){return new Promise((t,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(i),s(xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function K7(n){if(!(n instanceof Ut)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Y7{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Q7(n,e,t,s,r){if(r&&r.global){n("event",t,s);return}else{const i=await e,a={...s,send_to:i};n("event",t,a)}}async function X7(n,e,t,s){if(s&&s.global){const r={};for(const i of Object.keys(t))r[`user_properties.${i}`]=t[i];return n("set",r),Promise.resolve()}else{const r=await e;n("config",r,{update:!0,user_properties:t})}}/**
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
 */async function J7(){if(gc())try{await yc()}catch(n){return dt.warn(xt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return dt.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Z7(n,e,t,s,r,i,a){const l=z7(n);l.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&dt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>dt.error(y)),e.push(l);const c=J7().then(y=>{if(y)return s.getId()}),[u,d]=await Promise.all([l,c]);F7(i)||D7(i,u.measurementId),r("js",new Date);const p=(a==null?void 0:a.config)??{};return p[C7]="firebase",p.update=!0,d!=null&&(p[R7]=d),r("config",u.measurementId,p),u.measurementId}/**
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
 */class e4{constructor(e){this.app=e}_delete(){return delete rr[this.app.options.appId],Promise.resolve()}}let rr={},rh=[];const ih={};let bl="dataLayer",t4="gtag",ah,Ic,oh=!1;function n4(){const n=[];if(mc()&&n.push("This is a browser extension environment."),gp()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,r)=>`(${r+1}) ${s}`).join(" "),t=xt.create("invalid-analytics-context",{errorInfo:e});dt.warn(t.message)}}function s4(n,e,t){n4();const s=n.options.appId;if(!s)throw xt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xt.create("no-api-key");if(rr[s]!=null)throw xt.create("already-exists",{id:s});if(!oh){L7(bl);const{wrappedGtag:i,gtagCore:a}=U7(rr,rh,ih,bl,t4);Ic=i,ah=a,oh=!0}return rr[s]=Z7(n,rh,ih,e,ah,bl,t),new e4(n)}function r4(n=ho()){n=Ae(n);const e=ms(n,Ma);return e.isInitialized()?e.getImmediate():i4(n)}function i4(n,e={}){const t=ms(n,Ma);if(t.isInitialized()){const r=t.getImmediate();if(rs(e,t.getOptions()))return r;throw xt.create("already-initialized")}return t.initialize({options:e})}async function a4(){if(mc()||!gp()||!gc())return!1;try{return await yc()}catch{return!1}}function o4(n,e,t){n=Ae(n),X7(Ic,rr[n.app.options.appId],e,t).catch(s=>dt.error(s))}function l4(n,e,t,s){n=Ae(n),Q7(Ic,rr[n.app.options.appId],e,t,s).catch(r=>dt.error(r))}const lh="@firebase/analytics",ch="0.10.22";function c4(){zt(new Mt(Ma,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return s4(s,r,t)},"PUBLIC")),zt(new Mt("analytics-internal",n,"PRIVATE")),gt(lh,ch),gt(lh,ch,"esm2020");function n(e){try{const t=e.getProvider(Ma).getImmediate();return{logEvent:(s,r,i)=>l4(t,s,r,i),setUserProperties:(s,r)=>o4(t,s,r)}}catch(t){throw xt.create("interop-component-reg-failed",{reason:t})}}}c4();function jp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u4=jp,Gp=new qs("auth","Firebase",jp());/**
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
 */const $a=new uo("@firebase/auth");function h4(n,...e){$a.logLevel<=pe.WARN&&$a.warn(`Auth (${js}): ${n}`,...e)}function va(n,...e){$a.logLevel<=pe.ERROR&&$a.error(`Auth (${js}): ${n}`,...e)}/**
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
 */function Wt(n,...e){throw Sc(n,...e)}function sn(n,...e){return Sc(n,...e)}function zp(n,e,t){const s={...u4(),[e]:t};return new qs("auth","Firebase",s).create(e,{appName:n.name})}function wn(n){return zp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sc(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Gp.create(n,...e)}function ne(n,e,...t){if(!n)throw Sc(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw va(e),new Error(e)}function In(n,e){n||mn(e)}/**
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
 */function Gl(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function d4(){return uh()==="http:"||uh()==="https:"}function uh(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function p4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d4()||mc()||"connection"in navigator)?navigator.onLine:!0}function f4(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Oi{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=_g()||Eg()}get(){return p4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rc(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Wp{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const m4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const g4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],y4=new Oi(3e4,6e4);function Cn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function dn(n,e,t,s,r={}){return Kp(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const l=Ni({...a,key:n.config.apiKey}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...i};return wg()||(u.referrerPolicy="strict-origin-when-cross-origin"),n.emulatorConfig&&Hs(n.emulatorConfig.host)&&(u.credentials="include"),Wp.fetch()(await Yp(n,n.config.apiHost,t,l),u)})}async function Kp(n,e,t){n._canInitEmulator=!1;const s={...m4,...e};try{const r=new v4(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw oa(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oa(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw oa(n,"user-disabled",a);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zp(n,d,u);Wt(n,d)}}catch(r){if(r instanceof Ut)throw r;Wt(n,"network-request-failed",{message:String(r)})}}async function Di(n,e,t,s,r={}){const i=await dn(n,e,t,s,r);return"mfaPendingCredential"in i&&Wt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Yp(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?Rc(n.config,r):`${n.config.apiScheme}://${r}`;return g4.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function _4(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class v4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(sn(this.auth,"network-request-failed")),y4.get())})}}function oa(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=sn(n,e,s);return r.customData._tokenResponse=t,r}function hh(n){return n!==void 0&&n.enterprise!==void 0}class w4{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _4(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function E4(n,e){return dn(n,"GET","/v2/recaptchaConfig",Cn(n,e))}/**
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
 */async function b4(n,e){return dn(n,"POST","/v1/accounts:delete",e)}async function Ua(n,e){return dn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function ti(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A4(n,e=!1){const t=Ae(n),s=await t.getIdToken(e),r=Cc(s);ne(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:ti(Al(r.auth_time)),issuedAtTime:ti(Al(r.iat)),expirationTime:ti(Al(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(n){return Number(n)*1e3}function Cc(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return va("JWT malformed, contained fewer than 3 sections"),null;try{const r=cp(t);return r?JSON.parse(r):(va("Failed to decode base64 JWT payload"),null)}catch(r){return va("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function dh(n){const e=Cc(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ut&&T4(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function T4({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class I4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fa(n){var p;const e=n.auth,t=await n.getIdToken(),s=await ur(n,Ua(e,{idToken:t}));ne(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?Qp(r.providerUserInfo):[],a=R4(n.providerData,i),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function S4(n){const e=Ae(n);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R4(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Qp(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function C4(n,e){const t=await Kp(n,{},async()=>{const s=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await Yp(n,r,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return n.emulatorConfig&&Hs(n.emulatorConfig.host)&&(c.credentials="include"),Wp.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function P4(n,e){return dn(n,"POST","/v2/accounts:revokeToken",Cn(n,e))}/**
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
 */class ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=dh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await C4(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new ir;return s&&(ne(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(ne(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ir,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Mn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new I4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return A4(this,e)}reload(){return S4(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Fa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await ur(this,b4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:b,providerData:R,stsTokenManager:L}=t;ne(p&&L,e,"internal-error");const k=ir.fromJSON(this.name,L);ne(typeof p=="string",e,"internal-error"),Mn(s,e.name),Mn(r,e.name),ne(typeof y=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),Mn(i,e.name),Mn(a,e.name),Mn(l,e.name),Mn(c,e.name),Mn(u,e.name),Mn(d,e.name);const F=new qt({uid:p,auth:e,email:r,emailVerified:y,displayName:s,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:u,lastLoginAt:d});return R&&Array.isArray(R)&&(F.providerData=R.map($=>({...$}))),c&&(F._redirectEventId=c),F}static async _fromIdTokenResponse(e,t,s=!1){const r=new ir;r.updateFromServerResponse(t);const i=new qt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fa(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];ne(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Qp(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new ir;l.updateFromIdToken(s);const c=new qt({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new zl(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const ph=new Map;function gn(n){In(n instanceof Function,"Expected a class definition");let e=ph.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ph.set(n,e),e)}/**
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
 */class Xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xp.type="NONE";const fh=Xp;/**
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
 */function wa(n,e,t){return`firebase:${n}:${e}:${t}`}class ar{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=wa(this.userKey,r.apiKey,i),this.fullPersistenceKey=wa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ua(this.auth,{idToken:e}).catch(()=>{});return t?qt._fromGetAccountInfoResponse(this.auth,t,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ar(gn(fh),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||gn(fh);const a=wa(s,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(a);if(d){let p;if(typeof d=="string"){const y=await Ua(e,{idToken:d}).catch(()=>{});if(!y)break;p=await qt._fromGetAccountInfoResponse(e,y,d)}else p=qt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ar(i,e,s):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new ar(i,e,s))}}/**
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
 */function mh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(rf(e))return"Webos";if(Zp(e))return"Safari";if((e.includes("chrome/")||ef(e))&&!e.includes("edge/"))return"Chrome";if(nf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jp(n=nt()){return/firefox\//i.test(n)}function Zp(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ef(n=nt()){return/crios\//i.test(n)}function tf(n=nt()){return/iemobile/i.test(n)}function nf(n=nt()){return/android/i.test(n)}function sf(n=nt()){return/blackberry/i.test(n)}function rf(n=nt()){return/webos/i.test(n)}function Pc(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function x4(n=nt()){var e;return Pc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function k4(){return bg()&&document.documentMode===10}function af(n=nt()){return Pc(n)||nf(n)||rf(n)||sf(n)||/windows phone/i.test(n)||tf(n)}/**
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
 */function of(n,e=[]){let t;switch(n){case"Browser":t=mh(nt());break;case"Worker":t=`${mh(nt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${js}/${s}`}/**
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
 */class N4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function O4(n,e={}){return dn(n,"GET","/v2/passwordPolicy",Cn(n,e))}/**
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
 */const D4=6;class L4{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??D4,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class V4{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gh(this),this.idTokenSubscription=new gh(this),this.beforeStateQueue=new N4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ar.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ua(this,{idToken:e}),s=await qt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(St(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(St(this.app))return Promise.reject(wn(this));const t=e?Ae(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return St(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await O4(this),t=new L4(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await P4(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await ar.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,r);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(St(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&h4(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function gs(n){return Ae(n)}class gh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Cg(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function M4(n){mo=n}function lf(n){return mo.loadJS(n)}function $4(){return mo.recaptchaEnterpriseScript}function U4(){return mo.gapiScript}function F4(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class B4{constructor(){this.enterprise=new q4}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class q4{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const H4="recaptcha-enterprise",cf="NO_RECAPTCHA",yh="onFirebaseAuthREInstanceReady";class Bn{constructor(e){this.type=H4,this.auth=gs(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{E4(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new w4(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,a(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,a,l){const c=window.grecaptcha;hh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{a(u)}).catch(()=>{a(cf)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new B4().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(async l=>{if(!t&&hh(window.grecaptcha)&&Bn.scriptInjectionDeferred)await Bn.scriptInjectionDeferred.promise,r(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$4();c.length!==0&&(c+=l+`&onload=${yh}`),Bn.scriptInjectionDeferred=new fp,window[yh]=()=>{var u;(u=Bn.scriptInjectionDeferred)==null||u.resolve()},lf(c).then(()=>{var u;return(u=Bn.scriptInjectionDeferred)==null?void 0:u.promise}).then(()=>{r(l,i,a)}).catch(u=>{a(u)})}}).catch(l=>{a(l)})})}}Bn.scriptInjectionDeferred=null;async function _h(n,e,t,s=!1,r=!1){const i=new Bn(n);let a;if(r)a=cf;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ba(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await _h(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await _h(n,e,t,t==="getOobCode");return s(n,l)}else return Promise.reject(a)})}/**
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
 */function j4(n,e){const t=ms(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(rs(i,e??{}))return r;Wt(r,"already-initialized")}return t.initialize({options:e})}function G4(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(gn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function z4(n,e,t){const s=gs(n);ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=uf(e),{host:a,port:l}=W4(e),c=l===null?"":`:${l}`,u={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ne(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ne(rs(u,s.config.emulator)&&rs(d,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=d,s.settings.appVerificationDisabledForTesting=!0,Hs(a)?_c(`${i}//${a}${c}`):K4()}function uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function W4(n){const e=uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:vh(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:vh(a)}}}function vh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function K4(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class xc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function Y4(n,e){return dn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Q4(n,e){return Di(n,"POST","/v1/accounts:signInWithPassword",Cn(n,e))}async function X4(n,e){return dn(n,"POST","/v1/accounts:sendOobCode",Cn(n,e))}async function J4(n,e){return X4(n,e)}/**
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
 */async function Z4(n,e){return Di(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}async function e3(n,e){return Di(n,"POST","/v1/accounts:signInWithEmailLink",Cn(n,e))}/**
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
 */class fi extends xc{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new fi(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new fi(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ba(e,t,"signInWithPassword",Q4);case"emailLink":return Z4(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ba(e,s,"signUpPassword",Y4);case"emailLink":return e3(e,{idToken:t,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function or(n,e){return Di(n,"POST","/v1/accounts:signInWithIdp",Cn(n,e))}/**
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
 */const t3="http://localhost";class Ls extends xc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const a=new Ls(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return or(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,or(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,or(e,t)}buildRequest(){const e={requestUri:t3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ni(t)}return e}}/**
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
 */function n3(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s3(n){const e=Yr(Qr(n)).link,t=e?Yr(Qr(e)).deep_link_id:null,s=Yr(Qr(n)).deep_link_id;return(s?Yr(Qr(s)).link:null)||s||t||e||n}class kc{constructor(e){const t=Yr(Qr(e)),s=t.apiKey??null,r=t.oobCode??null,i=n3(t.mode??null);ne(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=s3(e);try{return new kc(t)}catch{return null}}}/**
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
 */class _r{constructor(){this.providerId=_r.PROVIDER_ID}static credential(e,t){return fi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kc.parseLink(t);return ne(s,"argument-error"),fi._fromEmailAndCode(e,s.code,s.tenantId)}}_r.PROVIDER_ID="password";_r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class hf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Li extends hf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class qn extends Li{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends Li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ls._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Hn.credential(t,s)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class jn extends Li{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
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
 */class Gn extends Li{constructor(){super("twitter.com")}static credential(e,t){return Ls._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Gn.credential(t,s)}catch{return null}}}Gn.TWITTER_SIGN_IN_METHOD="twitter.com";Gn.PROVIDER_ID="twitter.com";/**
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
 */async function r3(n,e){return Di(n,"POST","/v1/accounts:signUp",Cn(n,e))}/**
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
 */class Vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await qt._fromIdTokenResponse(e,s,r),a=wh(s);return new Vs({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=wh(s);return new Vs({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function wh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qa extends Ut{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new qa(e,t,s,r)}}function df(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(n,i,e,s):i})}async function i3(n,e,t=!1){const s=await ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Vs._forOperation(n,"link",s)}/**
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
 */async function a3(n,e,t=!1){const{auth:s}=n;if(St(s.app))return Promise.reject(wn(s));const r="reauthenticate";try{const i=await ur(n,df(s,r,e,n),t);ne(i.idToken,s,"internal-error");const a=Cc(i.idToken);ne(a,s,"internal-error");const{sub:l}=a;return ne(n.uid===l,s,"user-mismatch"),Vs._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(s,"user-mismatch"),i}}/**
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
 */async function pf(n,e,t=!1){if(St(n.app))return Promise.reject(wn(n));const s="signIn",r=await df(n,s,e),i=await Vs._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function o3(n,e){return pf(gs(n),e)}/**
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
 */async function ff(n){const e=gs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l3(n,e,t){const s=gs(n);await Ba(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",J4)}async function c3(n,e,t){if(St(n.app))return Promise.reject(wn(n));const s=gs(n),a=await Ba(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r3).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ff(n),c}),l=await Vs._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function u3(n,e,t){return St(n.app)?Promise.reject(wn(n)):o3(Ae(n),_r.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ff(n),s})}/**
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
 */async function h3(n,e){return dn(n,"POST","/v1/accounts:update",e)}/**
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
 */async function d3(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Ae(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await ur(s,h3(s.auth,i));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function p3(n,e,t,s){return Ae(n).onIdTokenChanged(e,t,s)}function f3(n,e,t){return Ae(n).beforeAuthStateChanged(e,t)}function m3(n,e,t,s){return Ae(n).onAuthStateChanged(e,t,s)}function g3(n){return Ae(n).signOut()}const Ha="__sak";/**
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
 */class mf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const y3=1e3,_3=10;class gf extends mf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=af(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);k4()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,_3):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},y3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gf.type="LOCAL";const v3=gf;/**
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
 */class yf extends mf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yf.type="SESSION";const _f=yf;/**
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
 */function w3(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new go(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(a).map(async u=>u(t.origin,i)),c=await w3(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
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
 */function Nc(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class E3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const u=Nc("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(p){const y=p;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(y.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rn(){return window}function b3(n){rn().location.href=n}/**
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
 */function vf(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function A3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T3(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function I3(){return vf()?self:null}/**
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
 */const wf="firebaseLocalStorageDb",S3=1,ja="firebaseLocalStorage",Ef="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yo(n,e){return n.transaction([ja],e?"readwrite":"readonly").objectStore(ja)}function R3(){const n=indexedDB.deleteDatabase(wf);return new Vi(n).toPromise()}function bf(){const n=indexedDB.open(wf,S3);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ja,{keyPath:Ef})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ja)?e(s):(s.close(),await R3(),e(await bf()))})})}async function Eh(n,e,t){const s=yo(n,!0).put({[Ef]:e,value:t});return new Vi(s).toPromise()}async function C3(n,e){const t=yo(n,!1).get(e),s=await new Vi(t).toPromise();return s===void 0?null:s.value}function bh(n,e){const t=yo(n,!0).delete(e);return new Vi(t).toPromise()}const P3=800,x3=3;class Af{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=bf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>x3)throw s;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance(I3()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await A3(),!this.activeServiceWorker)return;this.sender=new E3(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Eh(e,Ha,"1"),await bh(e,Ha)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eh(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>C3(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=yo(r,!1).getAll();return new Vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Af.type="LOCAL";const k3=Af;new Oi(3e4,6e4);/**
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
 */function N3(n,e){return e?gn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Oc extends xc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function O3(n){return pf(n.auth,new Oc(n),n.bypassAuthState)}function D3(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),a3(t,new Oc(n),n.bypassAuthState)}async function L3(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),i3(t,new Oc(n),n.bypassAuthState)}/**
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
 */class Tf{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O3;case"linkViaPopup":case"linkViaRedirect":return L3;case"reauthViaPopup":case"reauthViaRedirect":return D3;default:Wt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const V3=new Oi(2e3,1e4);class sr extends Tf{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V3.get())};e()}}sr.currentPopupAction=null;/**
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
 */const M3="pendingRedirect",Ea=new Map;class $3 extends Tf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ea.get(this.auth._key());if(!e){try{const s=await U3(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ea.set(this.auth._key(),e)}return this.bypassAuthState||Ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U3(n,e){const t=q3(e),s=B3(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function F3(n,e){Ea.set(n._key(),e)}function B3(n){return gn(n._redirectPersistence)}function q3(n){return wa(M3,n.config.apiKey,n.name)}async function H3(n,e,t=!1){if(St(n.app))return Promise.reject(wn(n));const s=gs(n),r=N3(s,e),a=await new $3(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
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
 */const j3=600*1e3;class G3{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z3(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!If(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(sn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=j3&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ah(e))}saveEventToCache(e){this.cachedEventUids.add(Ah(e)),this.lastProcessedEventTime=Date.now()}}function Ah(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function If({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z3(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return If(n);default:return!1}}/**
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
 */async function W3(n,e={}){return dn(n,"GET","/v1/projects",e)}/**
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
 */const K3=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y3=/^https?/;async function Q3(n){if(n.config.emulator)return;const{authorizedDomains:e}=await W3(n);for(const t of e)try{if(X3(t))return}catch{}Wt(n,"unauthorized-domain")}function X3(n){const e=Gl(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!Y3.test(t))return!1;if(K3.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const J3=new Oi(3e4,6e4);function Th(){const n=rn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Z3(n){return new Promise((e,t)=>{var r,i,a;function s(){Th(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Th(),t(sn(n,"network-request-failed"))},timeout:J3.get()})}if((i=(r=rn().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=rn().gapi)!=null&&a.load)s();else{const l=F4("iframefcb");return rn()[l]=()=>{gapi.load?s():t(sn(n,"network-request-failed"))},lf(`${U4()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ba=null,e})}let ba=null;function e9(n){return ba=ba||Z3(n),ba}/**
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
 */const t9=new Oi(5e3,15e3),n9="__/auth/iframe",s9="emulator/auth/iframe",r9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a9(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rc(e,s9):`https://${n.config.authDomain}/${n9}`,s={apiKey:e.apiKey,appName:n.name,v:js},r=i9.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${Ni(s).slice(1)}`}async function o9(n){const e=await e9(n),t=rn().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:a9(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:r9,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=sn(n,"network-request-failed"),l=rn().setTimeout(()=>{i(a)},t9.get());function c(){rn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const l9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c9=500,u9=600,h9="_blank",d9="http://localhost";class Ih{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p9(n,e,t,s=c9,r=u9){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...l9,width:s.toString(),height:r.toString(),top:i,left:a},u=nt().toLowerCase();t&&(l=ef(u)?h9:t),Jp(u)&&(e=e||d9,c.scrollbars="yes");const d=Object.entries(c).reduce((y,[b,R])=>`${y}${b}=${R},`,"");if(x4(u)&&l!=="_self")return f9(e||"",l),new Ih(null);const p=window.open(e||"",l,d);ne(p,n,"popup-blocked");try{p.focus()}catch{}return new Ih(p)}function f9(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const m9="__/auth/handler",g9="emulator/auth/handler",y9=encodeURIComponent("fac");async function Sh(n,e,t,s,r,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:js,eventId:r};if(e instanceof hf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Rg(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof Li){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${y9}=${encodeURIComponent(c)}`:"";return`${_9(n)}?${Ni(l).slice(1)}${u}`}function _9({config:n}){return n.emulator?Rc(n,g9):`https://${n.authDomain}/${m9}`}/**
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
 */const Tl="webStorageSupport";class v9{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_f,this._completeRedirectFn=H3,this._overrideRedirectResult=F3}async _openPopup(e,t,s,r){var a;In((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Sh(e,t,s,Gl(),r);return p9(e,i,Nc())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Sh(e,t,s,Gl(),r);return b3(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(In(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await o9(e),s=new G3(e);return t.register("authEvent",r=>(ne(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Tl,{type:Tl},r=>{var a;const i=(a=r==null?void 0:r[0])==null?void 0:a[Tl];i!==void 0&&t(!!i),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Q3(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return af()||Zp()||Pc()}}const w9=v9;var Rh="@firebase/auth",Ch="1.13.3";/**
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
 */class E9{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b9(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function A9(n){zt(new Mt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:of(n)},u=new V4(s,r,i,c);return G4(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),zt(new Mt("auth-internal",e=>{const t=gs(e.getProvider("auth").getImmediate());return(s=>new E9(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Rh,Ch,b9(n)),gt(Rh,Ch,"esm2020")}/**
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
 */const T9=300,I9=pp("authIdTokenMaxAge")||T9;let Ph=null;const S9=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>I9)return;const r=t==null?void 0:t.token;Ph!==r&&(Ph=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function R9(n=ho()){const e=ms(n,"auth");if(e.isInitialized())return e.getImmediate();const t=j4(n,{popupRedirectResolver:w9,persistence:[k3,v3,_f]}),s=pp("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=S9(i.toString());f3(t,a,()=>a(t.currentUser)),p3(t,l=>a(l))}}const r=up("auth");return r&&z4(t,`http://${r}`),t}function C9(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}M4({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=sn("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",C9().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});A9("Browser");var P9="firebase",x9="12.16.0";/**
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
 */gt(P9,x9,"app");var xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,Sf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,w){function T(){}T.prototype=w.prototype,S.F=w.prototype,S.prototype=new T,S.prototype.constructor=S,S.D=function(_,E,I){for(var A=Array(arguments.length-2),de=2;de<arguments.length;de++)A[de-2]=arguments[de];return w.prototype[E].apply(_,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,w,T){T||(T=0);const _=Array(16);if(typeof w=="string")for(var E=0;E<16;++E)_[E]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(E=0;E<16;++E)_[E]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=S.g[0],T=S.g[1],E=S.g[2];let I=S.g[3],A;A=w+(I^T&(E^I))+_[0]+3614090360&4294967295,w=T+(A<<7&4294967295|A>>>25),A=I+(E^w&(T^E))+_[1]+3905402710&4294967295,I=w+(A<<12&4294967295|A>>>20),A=E+(T^I&(w^T))+_[2]+606105819&4294967295,E=I+(A<<17&4294967295|A>>>15),A=T+(w^E&(I^w))+_[3]+3250441966&4294967295,T=E+(A<<22&4294967295|A>>>10),A=w+(I^T&(E^I))+_[4]+4118548399&4294967295,w=T+(A<<7&4294967295|A>>>25),A=I+(E^w&(T^E))+_[5]+1200080426&4294967295,I=w+(A<<12&4294967295|A>>>20),A=E+(T^I&(w^T))+_[6]+2821735955&4294967295,E=I+(A<<17&4294967295|A>>>15),A=T+(w^E&(I^w))+_[7]+4249261313&4294967295,T=E+(A<<22&4294967295|A>>>10),A=w+(I^T&(E^I))+_[8]+1770035416&4294967295,w=T+(A<<7&4294967295|A>>>25),A=I+(E^w&(T^E))+_[9]+2336552879&4294967295,I=w+(A<<12&4294967295|A>>>20),A=E+(T^I&(w^T))+_[10]+4294925233&4294967295,E=I+(A<<17&4294967295|A>>>15),A=T+(w^E&(I^w))+_[11]+2304563134&4294967295,T=E+(A<<22&4294967295|A>>>10),A=w+(I^T&(E^I))+_[12]+1804603682&4294967295,w=T+(A<<7&4294967295|A>>>25),A=I+(E^w&(T^E))+_[13]+4254626195&4294967295,I=w+(A<<12&4294967295|A>>>20),A=E+(T^I&(w^T))+_[14]+2792965006&4294967295,E=I+(A<<17&4294967295|A>>>15),A=T+(w^E&(I^w))+_[15]+1236535329&4294967295,T=E+(A<<22&4294967295|A>>>10),A=w+(E^I&(T^E))+_[1]+4129170786&4294967295,w=T+(A<<5&4294967295|A>>>27),A=I+(T^E&(w^T))+_[6]+3225465664&4294967295,I=w+(A<<9&4294967295|A>>>23),A=E+(w^T&(I^w))+_[11]+643717713&4294967295,E=I+(A<<14&4294967295|A>>>18),A=T+(I^w&(E^I))+_[0]+3921069994&4294967295,T=E+(A<<20&4294967295|A>>>12),A=w+(E^I&(T^E))+_[5]+3593408605&4294967295,w=T+(A<<5&4294967295|A>>>27),A=I+(T^E&(w^T))+_[10]+38016083&4294967295,I=w+(A<<9&4294967295|A>>>23),A=E+(w^T&(I^w))+_[15]+3634488961&4294967295,E=I+(A<<14&4294967295|A>>>18),A=T+(I^w&(E^I))+_[4]+3889429448&4294967295,T=E+(A<<20&4294967295|A>>>12),A=w+(E^I&(T^E))+_[9]+568446438&4294967295,w=T+(A<<5&4294967295|A>>>27),A=I+(T^E&(w^T))+_[14]+3275163606&4294967295,I=w+(A<<9&4294967295|A>>>23),A=E+(w^T&(I^w))+_[3]+4107603335&4294967295,E=I+(A<<14&4294967295|A>>>18),A=T+(I^w&(E^I))+_[8]+1163531501&4294967295,T=E+(A<<20&4294967295|A>>>12),A=w+(E^I&(T^E))+_[13]+2850285829&4294967295,w=T+(A<<5&4294967295|A>>>27),A=I+(T^E&(w^T))+_[2]+4243563512&4294967295,I=w+(A<<9&4294967295|A>>>23),A=E+(w^T&(I^w))+_[7]+1735328473&4294967295,E=I+(A<<14&4294967295|A>>>18),A=T+(I^w&(E^I))+_[12]+2368359562&4294967295,T=E+(A<<20&4294967295|A>>>12),A=w+(T^E^I)+_[5]+4294588738&4294967295,w=T+(A<<4&4294967295|A>>>28),A=I+(w^T^E)+_[8]+2272392833&4294967295,I=w+(A<<11&4294967295|A>>>21),A=E+(I^w^T)+_[11]+1839030562&4294967295,E=I+(A<<16&4294967295|A>>>16),A=T+(E^I^w)+_[14]+4259657740&4294967295,T=E+(A<<23&4294967295|A>>>9),A=w+(T^E^I)+_[1]+2763975236&4294967295,w=T+(A<<4&4294967295|A>>>28),A=I+(w^T^E)+_[4]+1272893353&4294967295,I=w+(A<<11&4294967295|A>>>21),A=E+(I^w^T)+_[7]+4139469664&4294967295,E=I+(A<<16&4294967295|A>>>16),A=T+(E^I^w)+_[10]+3200236656&4294967295,T=E+(A<<23&4294967295|A>>>9),A=w+(T^E^I)+_[13]+681279174&4294967295,w=T+(A<<4&4294967295|A>>>28),A=I+(w^T^E)+_[0]+3936430074&4294967295,I=w+(A<<11&4294967295|A>>>21),A=E+(I^w^T)+_[3]+3572445317&4294967295,E=I+(A<<16&4294967295|A>>>16),A=T+(E^I^w)+_[6]+76029189&4294967295,T=E+(A<<23&4294967295|A>>>9),A=w+(T^E^I)+_[9]+3654602809&4294967295,w=T+(A<<4&4294967295|A>>>28),A=I+(w^T^E)+_[12]+3873151461&4294967295,I=w+(A<<11&4294967295|A>>>21),A=E+(I^w^T)+_[15]+530742520&4294967295,E=I+(A<<16&4294967295|A>>>16),A=T+(E^I^w)+_[2]+3299628645&4294967295,T=E+(A<<23&4294967295|A>>>9),A=w+(E^(T|~I))+_[0]+4096336452&4294967295,w=T+(A<<6&4294967295|A>>>26),A=I+(T^(w|~E))+_[7]+1126891415&4294967295,I=w+(A<<10&4294967295|A>>>22),A=E+(w^(I|~T))+_[14]+2878612391&4294967295,E=I+(A<<15&4294967295|A>>>17),A=T+(I^(E|~w))+_[5]+4237533241&4294967295,T=E+(A<<21&4294967295|A>>>11),A=w+(E^(T|~I))+_[12]+1700485571&4294967295,w=T+(A<<6&4294967295|A>>>26),A=I+(T^(w|~E))+_[3]+2399980690&4294967295,I=w+(A<<10&4294967295|A>>>22),A=E+(w^(I|~T))+_[10]+4293915773&4294967295,E=I+(A<<15&4294967295|A>>>17),A=T+(I^(E|~w))+_[1]+2240044497&4294967295,T=E+(A<<21&4294967295|A>>>11),A=w+(E^(T|~I))+_[8]+1873313359&4294967295,w=T+(A<<6&4294967295|A>>>26),A=I+(T^(w|~E))+_[15]+4264355552&4294967295,I=w+(A<<10&4294967295|A>>>22),A=E+(w^(I|~T))+_[6]+2734768916&4294967295,E=I+(A<<15&4294967295|A>>>17),A=T+(I^(E|~w))+_[13]+1309151649&4294967295,T=E+(A<<21&4294967295|A>>>11),A=w+(E^(T|~I))+_[4]+4149444226&4294967295,w=T+(A<<6&4294967295|A>>>26),A=I+(T^(w|~E))+_[11]+3174756917&4294967295,I=w+(A<<10&4294967295|A>>>22),A=E+(w^(I|~T))+_[2]+718787259&4294967295,E=I+(A<<15&4294967295|A>>>17),A=T+(I^(E|~w))+_[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(E+(A<<21&4294967295|A>>>11))&4294967295,S.g[2]=S.g[2]+E&4294967295,S.g[3]=S.g[3]+I&4294967295}s.prototype.v=function(S,w){w===void 0&&(w=S.length);const T=w-this.blockSize,_=this.C;let E=this.h,I=0;for(;I<w;){if(E==0)for(;I<=T;)r(this,S,I),I+=this.blockSize;if(typeof S=="string"){for(;I<w;)if(_[E++]=S.charCodeAt(I++),E==this.blockSize){r(this,_),E=0;break}}else for(;I<w;)if(_[E++]=S[I++],E==this.blockSize){r(this,_),E=0;break}}this.h=E,this.o+=w},s.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var T=S.length-8;T<S.length;++T)S[T]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,T=0;T<4;++T)for(let _=0;_<32;_+=8)S[w++]=this.g[T]>>>_&255;return S};function i(S,w){var T=l;return Object.prototype.hasOwnProperty.call(T,S)?T[S]:T[S]=w(S)}function a(S,w){this.h=w;const T=[];let _=!0;for(let E=S.length-1;E>=0;E--){const I=S[E]|0;_&&I==w||(T[E]=I,_=!1)}this.g=T}var l={};function c(S){return-128<=S&&S<128?i(S,function(w){return new a([w|0],w<0?-1:0)}):new a([S|0],S<0?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return k(u(-S));const w=[];let T=1;for(let _=0;S>=T;_++)w[_]=S/T|0,T*=4294967296;return new a(w,0)}function d(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return k(d(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(w,8));let _=p;for(let I=0;I<S.length;I+=8){var E=Math.min(8,S.length-I);const A=parseInt(S.substring(I,I+E),w);E<8?(E=u(Math.pow(w,E)),_=_.j(E).add(u(A))):(_=_.j(T),_=_.add(u(A)))}return _}var p=c(0),y=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(L(this))return-k(this).m();let S=0,w=1;for(let T=0;T<this.g.length;T++){const _=this.i(T);S+=(_>=0?_:4294967296+_)*w,w*=4294967296}return S},n.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(R(this))return"0";if(L(this))return"-"+k(this).toString(S);const w=u(Math.pow(S,6));var T=this;let _="";for(;;){const E=q(T,w).g;T=F(T,E.j(w));let I=((T.g.length>0?T.g[0]:T.h)>>>0).toString(S);if(T=E,R(T))return I+_;for(;I.length<6;)I="0"+I;_=I+_}},n.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function R(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function L(S){return S.h==-1}n.l=function(S){return S=F(this,S),L(S)?-1:R(S)?0:1};function k(S){const w=S.g.length,T=[];for(let _=0;_<w;_++)T[_]=~S.g[_];return new a(T,~S.h).add(y)}n.abs=function(){return L(this)?k(this):this},n.add=function(S){const w=Math.max(this.g.length,S.g.length),T=[];let _=0;for(let E=0;E<=w;E++){let I=_+(this.i(E)&65535)+(S.i(E)&65535),A=(I>>>16)+(this.i(E)>>>16)+(S.i(E)>>>16);_=A>>>16,I&=65535,A&=65535,T[E]=A<<16|I}return new a(T,T[T.length-1]&-2147483648?-1:0)};function F(S,w){return S.add(k(w))}n.j=function(S){if(R(this)||R(S))return p;if(L(this))return L(S)?k(this).j(k(S)):k(k(this).j(S));if(L(S))return k(this.j(k(S)));if(this.l(b)<0&&S.l(b)<0)return u(this.m()*S.m());const w=this.g.length+S.g.length,T=[];for(var _=0;_<2*w;_++)T[_]=0;for(_=0;_<this.g.length;_++)for(let E=0;E<S.g.length;E++){const I=this.i(_)>>>16,A=this.i(_)&65535,de=S.i(E)>>>16,ue=S.i(E)&65535;T[2*_+2*E]+=A*ue,$(T,2*_+2*E),T[2*_+2*E+1]+=I*ue,$(T,2*_+2*E+1),T[2*_+2*E+1]+=A*de,$(T,2*_+2*E+1),T[2*_+2*E+2]+=I*de,$(T,2*_+2*E+2)}for(S=0;S<w;S++)T[S]=T[2*S+1]<<16|T[2*S];for(S=w;S<2*w;S++)T[S]=0;return new a(T,0)};function $(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function U(S,w){this.g=S,this.h=w}function q(S,w){if(R(w))throw Error("division by zero");if(R(S))return new U(p,p);if(L(S))return w=q(k(S),w),new U(k(w.g),k(w.h));if(L(w))return w=q(S,k(w)),new U(k(w.g),w.h);if(S.g.length>30){if(L(S)||L(w))throw Error("slowDivide_ only works with positive integers.");for(var T=y,_=w;_.l(S)<=0;)T=W(T),_=W(_);var E=Z(T,1),I=Z(_,1);for(_=Z(_,2),T=Z(T,2);!R(_);){var A=I.add(_);A.l(S)<=0&&(E=E.add(T),I=A),_=Z(_,1),T=Z(T,1)}return w=F(S,E.j(w)),new U(E,w)}for(E=p;S.l(w)>=0;){for(T=Math.max(1,Math.floor(S.m()/w.m())),_=Math.ceil(Math.log(T)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),I=u(T),A=I.j(w);L(A)||A.l(S)>0;)T-=_,I=u(T),A=I.j(w);R(I)&&(I=y),E=E.add(I),S=F(S,A)}return new U(E,S)}n.B=function(S){return q(this,S).h},n.and=function(S){const w=Math.max(this.g.length,S.g.length),T=[];for(let _=0;_<w;_++)T[_]=this.i(_)&S.i(_);return new a(T,this.h&S.h)},n.or=function(S){const w=Math.max(this.g.length,S.g.length),T=[];for(let _=0;_<w;_++)T[_]=this.i(_)|S.i(_);return new a(T,this.h|S.h)},n.xor=function(S){const w=Math.max(this.g.length,S.g.length),T=[];for(let _=0;_<w;_++)T[_]=this.i(_)^S.i(_);return new a(T,this.h^S.h)};function W(S){const w=S.g.length+1,T=[];for(let _=0;_<w;_++)T[_]=S.i(_)<<1|S.i(_-1)>>>31;return new a(T,S.h)}function Z(S,w){const T=w>>5;w%=32;const _=S.g.length-T,E=[];for(let I=0;I<_;I++)E[I]=w>0?S.i(I+T)>>>w|S.i(I+T+1)<<32-w:S.i(I+T);return new a(E,S.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Sf=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=d,Jn=a}).apply(typeof xh<"u"?xh:typeof self<"u"?self:typeof window<"u"?window:{});var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rf,Xr,Cf,Aa,Wl,Pf,xf,kf;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof la=="object"&&la];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function r(o,h){if(h)e:{var f=s;o=o.split(".");for(var g=0;g<o.length-1;g++){var P=o[g];if(!(P in f))break e;f=f[P]}o=o[o.length-1],g=f[o],h=h(g),h!=g&&h!=null&&e(f,o,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function c(o,h,f){return o.call.apply(o.bind,arguments)}function u(o,h,f){return u=c,u.apply(null,arguments)}function d(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,h){function f(){}f.prototype=h.prototype,o.Z=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(g,P,N){for(var H=Array(arguments.length-2),le=2;le<arguments.length;le++)H[le-2]=arguments[le];return h.prototype[P].apply(g,H)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const h=o.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=o[g];return f}return[]}function R(o,h){for(let g=1;g<arguments.length;g++){const P=arguments[g];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=o.length||0;const N=P.length||0;o.length=f+N;for(let H=0;H<N;H++)o[f+H]=P[H]}else o.push(P)}}class L{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(o){a.setTimeout(()=>{throw o},0)}function F(){var o=S;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class ${constructor(){this.h=this.g=null}add(h,f){const g=U.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var U=new L(()=>new q,o=>o.reset());class q{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let W,Z=!1,S=new $,w=()=>{const o=Promise.resolve(void 0);W=()=>{o.then(T)}};function T(){for(var o;o=F();){try{o.h.call(o.g)}catch(f){k(f)}var h=U;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}Z=!1}function _(){this.u=this.u,this.C=this.C}_.prototype.u=!1,_.prototype.dispose=function(){this.u||(this.u=!0,this.N())},_.prototype[Symbol.dispose]=function(){this.dispose()},_.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return o})();function A(o){return/^[\s\xa0]*$/.test(o)}function de(o,h){E.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}p(de,E),de.prototype.init=function(o,h){const f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&de.Z.h.call(this)},de.prototype.h=function(){de.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ue="closure_listenable_"+(Math.random()*1e6|0),ke=0;function Et(o,h,f,g,P){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++ke,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ys(o,h,f){for(const g in o)h.call(f,o[g],g,o)}function qo(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function zi(o){const h={};for(const f in o)h[f]=o[f];return h}const Mu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $u(o,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)o[f]=g[f];for(let N=0;N<Mu.length;N++)f=Mu[N],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function Wi(o){this.src=o,this.g={},this.h=0}Wi.prototype.add=function(o,h,f,g,P){const N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);const H=jo(o,h,g,P);return H>-1?(h=o[H],f||(h.fa=!1)):(h=new Et(h,this.src,N,!!g,P),h.fa=f,o.push(h)),h};function Ho(o,h){const f=h.type;if(f in o.g){var g=o.g[f],P=Array.prototype.indexOf.call(g,h,void 0),N;(N=P>=0)&&Array.prototype.splice.call(g,P,1),N&&(Ft(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function jo(o,h,f,g){for(let P=0;P<o.length;++P){const N=o[P];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return P}return-1}var Go="closure_lm_"+(Math.random()*1e6|0),zo={};function Uu(o,h,f,g,P){if(Array.isArray(h)){for(let N=0;N<h.length;N++)Uu(o,h[N],f,g,P);return null}return f=qu(f),o&&o[ue]?o.J(h,f,l(g)?!!g.capture:!1,P):q2(o,h,f,!1,g,P)}function q2(o,h,f,g,P,N){if(!h)throw Error("Invalid event type");const H=l(P)?!!P.capture:!!P;let le=Ko(o);if(le||(o[Go]=le=new Wi(o)),f=le.add(h,f,g,H,N),f.proxy)return f;if(g=H2(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)I||(P=H),P===void 0&&(P=!1),o.addEventListener(h.toString(),g,P);else if(o.attachEvent)o.attachEvent(Bu(h.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H2(){function o(f){return h.call(o.src,o.listener,f)}const h=j2;return o}function Fu(o,h,f,g,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)Fu(o,h[N],f,g,P);else g=l(g)?!!g.capture:!!g,f=qu(f),o&&o[ue]?(o=o.i,N=String(h).toString(),N in o.g&&(h=o.g[N],f=jo(h,f,g,P),f>-1&&(Ft(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete o.g[N],o.h--)))):o&&(o=Ko(o))&&(h=o.g[h.toString()],o=-1,h&&(o=jo(h,f,g,P)),(f=o>-1?h[o]:null)&&Wo(f))}function Wo(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[ue])Ho(h.i,o);else{var f=o.type,g=o.proxy;h.removeEventListener?h.removeEventListener(f,g,o.capture):h.detachEvent?h.detachEvent(Bu(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Ko(h))?(Ho(f,o),f.h==0&&(f.src=null,h[Go]=null)):Ft(o)}}}function Bu(o){return o in zo?zo[o]:zo[o]="on"+o}function j2(o,h){if(o.da)o=!0;else{h=new de(h,this);const f=o.listener,g=o.ha||o.src;o.fa&&Wo(o),o=f.call(g,h)}return o}function Ko(o){return o=o[Go],o instanceof Wi?o:null}var Yo="__closure_events_fn_"+(Math.random()*1e9>>>0);function qu(o){return typeof o=="function"?o:(o[Yo]||(o[Yo]=function(h){return o.handleEvent(h)}),o[Yo])}function Ye(){_.call(this),this.i=new Wi(this),this.M=this,this.G=null}p(Ye,_),Ye.prototype[ue]=!0,Ye.prototype.removeEventListener=function(o,h,f,g){Fu(this,o,h,f,g)};function rt(o,h){var f,g=o.G;if(g)for(f=[];g;g=g.G)f.push(g);if(o=o.M,g=h.type||h,typeof h=="string")h=new E(h,o);else if(h instanceof E)h.target=h.target||o;else{var P=h;h=new E(g,o),$u(h,P)}P=!0;let N,H;if(f)for(H=f.length-1;H>=0;H--)N=h.g=f[H],P=Ki(N,g,!0,h)&&P;if(N=h.g=o,P=Ki(N,g,!0,h)&&P,P=Ki(N,g,!1,h)&&P,f)for(H=0;H<f.length;H++)N=h.g=f[H],P=Ki(N,g,!1,h)&&P}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const f=o.g[h];for(let g=0;g<f.length;g++)Ft(f[g]);delete o.g[h],o.h--}}this.G=null},Ye.prototype.J=function(o,h,f,g){return this.i.add(String(o),h,!1,f,g)},Ye.prototype.K=function(o,h,f,g){return this.i.add(String(o),h,!0,f,g)};function Ki(o,h,f,g){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let P=!0;for(let N=0;N<h.length;++N){const H=h[N];if(H&&!H.da&&H.capture==f){const le=H.listener,Fe=H.ha||H.src;H.fa&&Ho(o.i,H),P=le.call(Fe,g)!==!1&&P}}return P&&!g.defaultPrevented}function G2(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=u(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function Hu(o){o.g=G2(()=>{o.g=null,o.i&&(o.i=!1,Hu(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class z2 extends _{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(o){_.call(this),this.h=o,this.g={}}p(Pr,_);var ju=[];function Gu(o){ys(o.g,function(h,f){this.g.hasOwnProperty(f)&&Wo(h)},o),o.g={}}Pr.prototype.N=function(){Pr.Z.N.call(this),Gu(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=a.JSON.stringify,W2=a.JSON.parse,K2=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function zu(){}function Wu(){}var xr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Xo(){E.call(this,"d")}p(Xo,E);function Jo(){E.call(this,"c")}p(Jo,E);var _s={},Ku=null;function Yi(){return Ku=Ku||new Ye}_s.Ia="serverreachability";function Yu(o){E.call(this,_s.Ia,o)}p(Yu,E);function kr(o){const h=Yi();rt(h,new Yu(h))}_s.STAT_EVENT="statevent";function Qu(o,h){E.call(this,_s.STAT_EVENT,o),this.stat=h}p(Qu,E);function it(o){const h=Yi();rt(h,new Qu(h,o))}_s.Ja="timingevent";function Xu(o,h){E.call(this,_s.Ja,o),this.size=h}p(Xu,E);function Nr(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function Or(){this.g=!0}Or.prototype.ua=function(){this.g=!1};function Y2(o,h,f,g,P,N){o.info(function(){if(o.g)if(N){var H="",le=N.split("&");for(let ve=0;ve<le.length;ve++){var Fe=le[ve].split("=");if(Fe.length>1){const je=Fe[0];Fe=Fe[1];const Xt=je.split("_");H=Xt.length>=2&&Xt[1]=="type"?H+(je+"="+Fe+"&"):H+(je+"=redacted&")}}}else H=null;else H=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+H})}function Q2(o,h,f,g,P,N,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+N+" "+H})}function Qs(o,h,f,g){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+J2(o,f)+(g?" "+g:"")})}function X2(o,h){o.info(function(){return"TIMEOUT: "+h})}Or.prototype.info=function(){};function J2(o,h){if(!o.g)return h;if(!h)return null;try{const N=JSON.parse(h);if(N){for(o=0;o<N.length;o++)if(Array.isArray(N[o])){var f=N[o];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var P=g[0];if(P!="noop"&&P!="stop"&&P!="close")for(let H=1;H<g.length;H++)g[H]=""}}}}return Qo(N)}catch{return h}}var Qi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ju={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zu;function Zo(){}p(Zo,zu),Zo.prototype.g=function(){return new XMLHttpRequest},Zu=new Zo;function Dr(o){return encodeURIComponent(String(o))}function Z2(o){var h=1;o=o.split(":");const f=[];for(;h>0&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function xn(o,h,f,g){this.j=o,this.i=h,this.l=f,this.S=g||1,this.V=new Pr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new e1}function e1(){this.i=null,this.g="",this.h=!1}var t1={},el={};function tl(o,h,f){o.M=1,o.A=Ji(Qt(h)),o.u=f,o.R=!0,n1(o,null)}function n1(o,h){o.F=Date.now(),Xi(o),o.B=Qt(o.A);var f=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),m1(f.i,"t",g),o.C=0,f=o.j.L,o.h=new e1,o.g=O1(o.j,f?h:null,!o.u),o.P>0&&(o.O=new z2(u(o.Y,o,o.g),o.P)),h=o.V,f=o.g,g=o.ba;var P="readystatechange";Array.isArray(P)||(P&&(ju[0]=P.toString()),P=ju);for(let N=0;N<P.length;N++){const H=Uu(f,P[N],g||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=o.J?zi(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),kr(),Y2(o.i,o.v,o.B,o.l,o.S,o.u)}xn.prototype.ba=function(o){o=o.target;const h=this.O;h&&On(o)==3?h.j():this.Y(o)},xn.prototype.Y=function(o){try{if(o==this.g)e:{const le=On(this.g),Fe=this.g.ya(),ve=this.g.ca();if(!(le<3)&&(le!=3||this.g&&(this.h.h||this.g.la()||b1(this.g)))){this.K||le!=4||Fe==7||(Fe==8||ve<=0?kr(3):kr(2)),nl(this);var h=this.g.ca();this.X=h;var f=e6(this);if(this.o=h==200,Q2(this.i,this.v,this.B,this.l,this.S,le,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,P=this.g;if((g=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(g)){var N=g;break t}}N=null}if(o=N)Qs(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,sl(this,o);else{this.o=!1,this.m=3,it(12),vs(this),Lr(this);break e}}if(this.R){o=!0;let je;for(;!this.K&&this.C<f.length;)if(je=t6(this,f),je==el){le==4&&(this.m=4,it(14),o=!1),Qs(this.i,this.l,null,"[Incomplete Response]");break}else if(je==t1){this.m=4,it(15),Qs(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Qs(this.i,this.l,je,null),sl(this,je);if(s1(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),le!=4||f.length!=0||this.h.h||(this.m=1,it(16),o=!1),this.o=this.o&&o,!o)Qs(this.i,this.l,f,"[Invalid Chunked Response]"),vs(this),Lr(this);else if(f.length>0&&!this.W){this.W=!0;var H=this.j;H.g==this&&H.aa&&!H.P&&(H.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),hl(H),H.P=!0,it(11))}}else Qs(this.i,this.l,f,null),sl(this,f);le==4&&vs(this),this.o&&!this.K&&(le==4?P1(this.j,this):(this.o=!1,Xi(this)))}else m6(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),vs(this),Lr(this)}}}catch{}finally{}};function e6(o){if(!s1(o))return o.g.la();const h=b1(o.g);if(h==="")return"";let f="";const g=h.length,P=On(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return vs(o),Lr(o),"";o.h.i=new a.TextDecoder}for(let N=0;N<g;N++)o.h.h=!0,f+=o.h.i.decode(h[N],{stream:!(P&&N==g-1)});return h.length=0,o.h.g+=f,o.C=0,o.h.g}function s1(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function t6(o,h){var f=o.C,g=h.indexOf(`
`,f);return g==-1?el:(f=Number(h.substring(f,g)),isNaN(f)?t1:(g+=1,g+f>h.length?el:(h=h.slice(g,g+f),o.C=g+f,h)))}xn.prototype.cancel=function(){this.K=!0,vs(this)};function Xi(o){o.T=Date.now()+o.H,r1(o,o.H)}function r1(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Nr(u(o.aa,o),h)}function nl(o){o.D&&(a.clearTimeout(o.D),o.D=null)}xn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(X2(this.i,this.B),this.M!=2&&(kr(),it(17)),vs(this),this.m=2,Lr(this)):r1(this,this.T-o)};function Lr(o){o.j.I==0||o.K||P1(o.j,o)}function vs(o){nl(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,Gu(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function sl(o,h){try{var f=o.j;if(f.I!=0&&(f.g==o||rl(f.h,o))){if(!o.L&&rl(f.h,o)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)sa(f),ta(f);else break e;ul(f),it(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=Nr(u(f.Va,f),6e3));o1(f.h)<=1&&f.ta&&(f.ta=void 0)}else Es(f,11)}else if((o.L||f.g==o)&&sa(f),!A(h))for(P=f.Ba.g.parse(h),h=0;h<P.length;h++){let ve=P[h];const je=ve[0];if(!(je<=f.K))if(f.K=je,ve=ve[1],f.I==2)if(ve[0]=="c"){f.M=ve[1],f.ba=ve[2];const Xt=ve[3];Xt!=null&&(f.ka=Xt,f.j.info("VER="+f.ka));const bs=ve[4];bs!=null&&(f.za=bs,f.j.info("SVER="+f.za));const Dn=ve[5];Dn!=null&&typeof Dn=="number"&&Dn>0&&(g=1.5*Dn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ln=o.g;if(Ln){const ia=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var N=g.h;N.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(il(N,N.h),N.h=null))}if(g.G){const dl=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;dl&&(g.wa=dl,we(g.J,g.G,dl))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var H=o;if(g.na=N1(g,g.L?g.ba:null,g.W),H.L){l1(g.h,H);var le=H,Fe=g.O;Fe&&(le.H=Fe),le.D&&(nl(le),Xi(le)),g.g=H}else R1(g);f.i.length>0&&na(f)}else ve[0]!="stop"&&ve[0]!="close"||Es(f,7);else f.I==3&&(ve[0]=="stop"||ve[0]=="close"?ve[0]=="stop"?Es(f,7):cl(f):ve[0]!="noop"&&f.l&&f.l.qa(ve),f.A=0)}}kr(4)}catch{}}var n6=class{constructor(o,h){this.g=o,this.map=h}};function i1(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function a1(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function o1(o){return o.h?1:o.g?o.g.size:0}function rl(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function il(o,h){o.g?o.g.add(h):o.h=h}function l1(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}i1.prototype.cancel=function(){if(this.i=c1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function c1(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.G);return h}return b(o.i)}var u1=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function s6(o,h){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const g=o[f].indexOf("=");let P,N=null;g>=0?(P=o[f].substring(0,g),N=o[f].substring(g+1)):P=o[f],h(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof kn?(this.l=o.l,Vr(this,o.j),this.o=o.o,this.g=o.g,Mr(this,o.u),this.h=o.h,al(this,g1(o.i)),this.m=o.m):o&&(h=String(o).match(u1))?(this.l=!1,Vr(this,h[1]||"",!0),this.o=$r(h[2]||""),this.g=$r(h[3]||"",!0),Mr(this,h[4]),this.h=$r(h[5]||"",!0),al(this,h[6]||"",!0),this.m=$r(h[7]||"")):(this.l=!1,this.i=new Fr(null,this.l))}kn.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(Ur(h,h1,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Ur(h,h1,!0),"@"),o.push(Dr(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ur(f,f.charAt(0)=="/"?a6:i6,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ur(f,l6)),o.join("")},kn.prototype.resolve=function(o){const h=Qt(this);let f=!!o.j;f?Vr(h,o.j):f=!!o.o,f?h.o=o.o:f=!!o.g,f?h.g=o.g:f=o.u!=null;var g=o.h;if(f)Mr(h,o.u);else if(f=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var P=h.h.lastIndexOf("/");P!=-1&&(g=h.h.slice(0,P+1)+g)}if(P=g,P==".."||P==".")g="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){g=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let H=0;H<P.length;){const le=P[H++];le=="."?g&&H==P.length&&N.push(""):le==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),g&&H==P.length&&N.push("")):(N.push(le),g=!0)}g=N.join("/")}else g=P}return f?h.h=g:f=o.i.toString()!=="",f?al(h,g1(o.i)):f=!!o.m,f&&(h.m=o.m),h};function Qt(o){return new kn(o)}function Vr(o,h,f){o.j=f?$r(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Mr(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function al(o,h,f){h instanceof Fr?(o.i=h,c6(o.i,o.l)):(f||(h=Ur(h,o6)),o.i=new Fr(h,o.l))}function we(o,h,f){o.i.set(h,f)}function Ji(o){return we(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function $r(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ur(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,r6),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function r6(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var h1=/[#\/\?@]/g,i6=/[#\?:]/g,a6=/[#\?]/g,o6=/[#\?@]/g,l6=/#/g;function Fr(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function ws(o){o.g||(o.g=new Map,o.h=0,o.i&&s6(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}n=Fr.prototype,n.add=function(o,h){ws(this),this.i=null,o=Xs(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function d1(o,h){ws(o),h=Xs(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function p1(o,h){return ws(o),h=Xs(o,h),o.g.has(h)}n.forEach=function(o,h){ws(this),this.g.forEach(function(f,g){f.forEach(function(P){o.call(h,P,g,this)},this)},this)};function f1(o,h){ws(o);let f=[];if(typeof h=="string")p1(o,h)&&(f=f.concat(o.g.get(Xs(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)f=f.concat(o[h]);return f}n.set=function(o,h){return ws(this),this.i=null,o=Xs(this,o),p1(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},n.get=function(o,h){return o?(o=f1(this,o),o.length>0?String(o[0]):h):h};function m1(o,h,f){d1(o,h),f.length>0&&(o.i=null,o.g.set(Xs(o,h),b(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const P=Dr(f);f=f1(this,f);for(let N=0;N<f.length;N++){let H=P;f[N]!==""&&(H+="="+Dr(f[N])),o.push(H)}}return this.i=o.join("&")};function g1(o){const h=new Fr;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function Xs(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function c6(o,h){h&&!o.j&&(ws(o),o.i=null,o.g.forEach(function(f,g){const P=g.toLowerCase();g!=P&&(d1(this,g),m1(this,P,f))},o)),o.j=h}function u6(o,h){const f=new Or;if(a.Image){const g=new Image;g.onload=d(Nn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(Nn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(Nn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(Nn,f,"TestLoadImage: timeout",!1,h,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else h(!1)}function h6(o,h){const f=new Or,g=new AbortController,P=setTimeout(()=>{g.abort(),Nn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?Nn(f,"TestPingServer: ok",!0,h):Nn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Nn(f,"TestPingServer: error",!1,h)})}function Nn(o,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function d6(){this.g=new K2}function ol(o){this.i=o.Sb||null,this.h=o.ab||!1}p(ol,zu),ol.prototype.g=function(){return new Zi(this.i,this.h)};function Zi(o,h){Ye.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Zi,Ye),n=Zi.prototype,n.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,qr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Br(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qr(this)),this.g&&(this.readyState=3,qr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;y1(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function y1(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Br(this):qr(this),this.readyState==3&&y1(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Br(this))},n.Na=function(o){this.g&&(this.response=o,Br(this))},n.ga=function(){this.g&&Br(this)};function Br(o){o.readyState=4,o.l=null,o.j=null,o.B=null,qr(o)}n.setRequestHeader=function(o,h){this.A.append(o,h)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function qr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function _1(o){let h="";return ys(o,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function ll(o,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=_1(f),typeof o=="string"?f!=null&&Dr(f):we(o,h,f))}function Re(o){Ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Re,Ye);var p6=/^https?$/i,f6=["POST","PUT"];n=Re.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zu.g(),this.g.onreadystatechange=y(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(N){v1(this,N);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),P=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(f6,h,void 0)>=0)||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,H]of f)this.g.setRequestHeader(N,H);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(N){v1(this,N)}};function v1(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,w1(o),ea(o)}function w1(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),ea(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ea(this,!0)),Re.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?E1(this):this.Xa())},n.Xa=function(){E1(this)};function E1(o){if(o.h&&typeof i<"u"){if(o.v&&On(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),On(o)==4){o.h=!1;try{const N=o.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=N===0){let H=String(o.D).match(u1)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),g=!p6.test(H?H.toLowerCase():"")}f=g}if(f)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var P=On(o)>2?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.ca()+"]",w1(o)}}finally{ea(o)}}}}function ea(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,h||rt(o,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function On(o){return o.g?o.g.readyState:0}n.ca=function(){try{return On(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),W2(h)}};function b1(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function m6(o){const h={};o=(o.g&&On(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(A(o[g]))continue;var f=Z2(o[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[P]||[];h[P]=N,N.push(f)}qo(h,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Hr(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function A1(o){this.za=0,this.i=[],this.j=new Or,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Hr("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Hr("baseRetryDelayMs",5e3,o),this.Za=Hr("retryDelaySeedMs",1e4,o),this.Ta=Hr("forwardChannelMaxRetries",2,o),this.va=Hr("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new i1(o&&o.concurrentRequestLimit),this.Ba=new d6,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=A1.prototype,n.ka=8,n.I=1,n.connect=function(o,h,f,g){it(0),this.W=o,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=N1(this,null,this.W),na(this)};function cl(o){if(T1(o),o.I==3){var h=o.V++,f=Qt(o.J);if(we(f,"SID",o.M),we(f,"RID",h),we(f,"TYPE","terminate"),jr(o,f),h=new xn(o,o.j,h),h.M=2,h.A=Ji(Qt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=O1(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Xi(h)}k1(o)}function ta(o){o.g&&(hl(o),o.g.cancel(),o.g=null)}function T1(o){ta(o),o.v&&(a.clearTimeout(o.v),o.v=null),sa(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function na(o){if(!a1(o.h)&&!o.m){o.m=!0;var h=o.Ea;W||w(),Z||(W(),Z=!0),S.add(h,o),o.D=0}}function g6(o,h){return o1(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Nr(u(o.Ea,o,h),x1(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const P=new xn(this,this.j,o);let N=this.o;if(this.U&&(N?(N=zi(N),$u(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=S1(this,P,h),f=Qt(this.J),we(f,"RID",o),we(f,"CVER",22),this.G&&we(f,"X-HTTP-Session-Id",this.G),jr(this,f),N&&(this.R?h="headers="+Dr(_1(N))+"&"+h:this.u&&ll(f,this.u,N)),il(this.h,P),this.Ra&&we(f,"TYPE","init"),this.S?(we(f,"$req",h),we(f,"SID","null"),P.U=!0,tl(P,f,null)):tl(P,f,h),this.I=2}}else this.I==3&&(o?I1(this,o):this.i.length==0||a1(this.h)||I1(this))};function I1(o,h){var f;h?f=h.l:f=o.V++;const g=Qt(o.J);we(g,"SID",o.M),we(g,"RID",f),we(g,"AID",o.K),jr(o,g),o.u&&o.o&&ll(g,o.u,o.o),f=new xn(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),h&&(o.i=h.G.concat(o.i)),h=S1(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),il(o.h,f),tl(f,g,h)}function jr(o,h){o.H&&ys(o.H,function(f,g){we(h,g,f)}),o.l&&ys({},function(f,g){we(h,g,f)})}function S1(o,h,f){f=Math.min(o.i.length,f);const g=o.l?u(o.l.Ka,o.l,o):null;e:{var P=o.i;let le=-1;for(;;){const Fe=["count="+f];le==-1?f>0?(le=P[0].g,Fe.push("ofs="+le)):le=0:Fe.push("ofs="+le);let ve=!0;for(let je=0;je<f;je++){var N=P[je].g;const Xt=P[je].map;if(N-=le,N<0)le=Math.max(0,P[je].g-100),ve=!1;else try{N="req"+N+"_"||"";try{var H=Xt instanceof Map?Xt:Object.entries(Xt);for(const[bs,Dn]of H){let Ln=Dn;l(Dn)&&(Ln=Qo(Dn)),Fe.push(N+bs+"="+encodeURIComponent(Ln))}}catch(bs){throw Fe.push(N+"type="+encodeURIComponent("_badmap")),bs}}catch{g&&g(Xt)}}if(ve){H=Fe.join("&");break e}}H=void 0}return o=o.i.splice(0,f),h.G=o,H}function R1(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;W||w(),Z||(W(),Z=!0),S.add(h,o),o.A=0}}function ul(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Nr(u(o.Da,o),x1(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,C1(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Nr(u(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),ta(this),C1(this))};function hl(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function C1(o){o.g=new xn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=Qt(o.na);we(h,"RID","rpc"),we(h,"SID",o.M),we(h,"AID",o.K),we(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&we(h,"TO",o.ia),we(h,"TYPE","xmlhttp"),jr(o,h),o.u&&o.o&&ll(h,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=Ji(Qt(h)),f.u=null,f.R=!0,n1(f,o)}n.Va=function(){this.C!=null&&(this.C=null,ta(this),ul(this),it(19))};function sa(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function P1(o,h){var f=null;if(o.g==h){sa(o),hl(o),o.g=null;var g=2}else if(rl(o.h,h))f=h.G,l1(o.h,h),g=1;else return;if(o.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var P=o.D;g=Yi(),rt(g,new Xu(g,f)),na(o)}else R1(o);else if(P=h.m,P==3||P==0&&h.X>0||!(g==1&&g6(o,h)||g==2&&ul(o)))switch(f&&f.length>0&&(h=o.h,h.i=h.i.concat(f)),P){case 1:Es(o,5);break;case 4:Es(o,10);break;case 3:Es(o,6);break;default:Es(o,2)}}}function x1(o,h){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*h}function Es(o,h){if(o.j.info("Error code "+h),h==2){var f=u(o.bb,o),g=o.Ua;const P=!g;g=new kn(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Vr(g,"https"),Ji(g),P?u6(g.toString(),f):h6(g.toString(),f)}else it(2);o.I=0,o.l&&o.l.pa(h),k1(o),T1(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function k1(o){if(o.I=0,o.ja=[],o.l){const h=c1(o.h);(h.length!=0||o.i.length!=0)&&(R(o.ja,h),R(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function N1(o,h,f){var g=f instanceof kn?Qt(f):new kn(f);if(g.g!="")h&&(g.g=h+"."+g.g),Mr(g,g.u);else{var P=a.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;const N=new kn(null);g&&Vr(N,g),h&&(N.g=h),P&&Mr(N,P),f&&(N.h=f),g=N}return f=o.G,h=o.wa,f&&h&&we(g,f,h),we(g,"VER",o.ka),jr(o,g),g}function O1(o,h,f){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new Re(new ol({ab:f})):new Re(o.ma),h.Fa(o.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function D1(){}n=D1.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ra(){}ra.prototype.g=function(o,h){return new bt(o,h)};function bt(o,h){Ye.call(this),this.g=new A1(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!A(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new Js(this)}p(bt,Ye),bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){cl(this.g)},bt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=Qo(o),o=f);h.i.push(new n6(h.Ya++,o)),h.I==3&&na(h)},bt.prototype.N=function(){this.g.l=null,delete this.j,cl(this.g),delete this.g,bt.Z.N.call(this)};function L1(o){Xo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const f in h){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}p(L1,Xo);function V1(){Jo.call(this),this.status=1}p(V1,Jo);function Js(o){this.g=o}p(Js,D1),Js.prototype.ra=function(){rt(this.g,"a")},Js.prototype.qa=function(o){rt(this.g,new L1(o))},Js.prototype.pa=function(o){rt(this.g,new V1)},Js.prototype.oa=function(){rt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,kf=function(){return new ra},xf=function(){return Yi()},Pf=_s,Wl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,Aa=Qi,Ju.COMPLETE="complete",Cf=Ju,Wu.EventType=xr,xr.OPEN="a",xr.CLOSE="b",xr.ERROR="c",xr.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,Xr=Wu,Re.prototype.listenOnce=Re.prototype.K,Re.prototype.getLastError=Re.prototype.Ha,Re.prototype.getLastErrorCode=Re.prototype.ya,Re.prototype.getStatus=Re.prototype.ca,Re.prototype.getResponseJson=Re.prototype.La,Re.prototype.getResponseText=Re.prototype.la,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Fa,Rf=Re}).apply(typeof la<"u"?la:typeof self<"u"?self:typeof window<"u"?window:{});/*!
 * re2js
 * RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
 *
 * @version v0.4.3
 * @author Alexey Vasiliev
 * @homepage https://github.com/le0pard/re2js#readme
 * @repository github:le0pard/re2js
 * @license MIT
 */const Ie=class Ie{};v(Ie,"FOLD_CASE",1),v(Ie,"LITERAL",2),v(Ie,"CLASS_NL",4),v(Ie,"DOT_NL",8),v(Ie,"ONE_LINE",16),v(Ie,"NON_GREEDY",32),v(Ie,"PERL_X",64),v(Ie,"UNICODE_GROUPS",128),v(Ie,"WAS_DOLLAR",256),v(Ie,"MATCH_NL",Ie.CLASS_NL|Ie.DOT_NL),v(Ie,"PERL",Ie.CLASS_NL|Ie.ONE_LINE|Ie.PERL_X|Ie.UNICODE_GROUPS),v(Ie,"POSIX",0),v(Ie,"UNANCHORED",0),v(Ie,"ANCHOR_START",1),v(Ie,"ANCHOR_BOTH",2);let z=Ie;class x{static toUpperCase(e){const t=String.fromCodePoint(e).toUpperCase();if(t.length>1)return e;const s=String.fromCodePoint(t.codePointAt(0)).toLowerCase();return s.length>1||s.codePointAt(0)!==e?e:t.codePointAt(0)}static toLowerCase(e){const t=String.fromCodePoint(e).toLowerCase();if(t.length>1)return e;const s=String.fromCodePoint(t.codePointAt(0)).toUpperCase();return s.length>1||s.codePointAt(0)!==e?e:t.codePointAt(0)}}v(x,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]));const m=class m{};v(m,"CASE_ORBIT",new Map([[75,107],[107,8490],[8490,75],[83,115],[115,383],[383,83],[181,924],[924,956],[956,181],[197,229],[229,8491],[8491,197],[452,453],[453,454],[454,452],[455,456],[456,457],[457,455],[458,459],[459,460],[460,458],[497,498],[498,499],[499,497],[837,921],[921,953],[953,8126],[8126,837],[914,946],[946,976],[976,914],[917,949],[949,1013],[1013,917],[920,952],[952,977],[977,1012],[1012,920],[922,954],[954,1008],[1008,922],[928,960],[960,982],[982,928],[929,961],[961,1009],[1009,929],[931,962],[962,963],[963,931],[934,966],[966,981],[981,934],[937,969],[969,8486],[8486,937],[1042,1074],[1074,7296],[7296,1042],[1044,1076],[1076,7297],[7297,1044],[1054,1086],[1086,7298],[7298,1054],[1057,1089],[1089,7299],[7299,1057],[1058,1090],[1090,7300],[7300,7301],[7301,1058],[1066,1098],[1098,7302],[7302,1066],[1122,1123],[1123,7303],[7303,1122],[7304,42570],[42570,42571],[42571,7304],[7776,7777],[7777,7835],[7835,7776],[223,7838],[7838,223],[8064,8072],[8072,8064],[8065,8073],[8073,8065],[8066,8074],[8074,8066],[8067,8075],[8075,8067],[8068,8076],[8076,8068],[8069,8077],[8077,8069],[8070,8078],[8078,8070],[8071,8079],[8079,8071],[8080,8088],[8088,8080],[8081,8089],[8089,8081],[8082,8090],[8090,8082],[8083,8091],[8091,8083],[8084,8092],[8092,8084],[8085,8093],[8093,8085],[8086,8094],[8094,8086],[8087,8095],[8095,8087],[8096,8104],[8104,8096],[8097,8105],[8105,8097],[8098,8106],[8106,8098],[8099,8107],[8107,8099],[8100,8108],[8108,8100],[8101,8109],[8109,8101],[8102,8110],[8110,8102],[8103,8111],[8111,8103],[8115,8124],[8124,8115],[8131,8140],[8140,8131],[912,8147],[8147,912],[944,8163],[8163,944],[8179,8188],[8188,8179],[64261,64262],[64262,64261],[66560,66600],[66600,66560],[66561,66601],[66601,66561],[66562,66602],[66602,66562],[66563,66603],[66603,66563],[66564,66604],[66604,66564],[66565,66605],[66605,66565],[66566,66606],[66606,66566],[66567,66607],[66607,66567],[66568,66608],[66608,66568],[66569,66609],[66609,66569],[66570,66610],[66610,66570],[66571,66611],[66611,66571],[66572,66612],[66612,66572],[66573,66613],[66613,66573],[66574,66614],[66614,66574],[66575,66615],[66615,66575],[66576,66616],[66616,66576],[66577,66617],[66617,66577],[66578,66618],[66618,66578],[66579,66619],[66619,66579],[66580,66620],[66620,66580],[66581,66621],[66621,66581],[66582,66622],[66622,66582],[66583,66623],[66623,66583],[66584,66624],[66624,66584],[66585,66625],[66625,66585],[66586,66626],[66626,66586],[66587,66627],[66627,66587],[66588,66628],[66628,66588],[66589,66629],[66629,66589],[66590,66630],[66630,66590],[66591,66631],[66631,66591],[66592,66632],[66632,66592],[66593,66633],[66633,66593],[66594,66634],[66634,66594],[66595,66635],[66635,66595],[66596,66636],[66636,66596],[66597,66637],[66637,66597],[66598,66638],[66638,66598],[66599,66639],[66639,66599],[66736,66776],[66776,66736],[66737,66777],[66777,66737],[66738,66778],[66778,66738],[66739,66779],[66779,66739],[66740,66780],[66780,66740],[66741,66781],[66781,66741],[66742,66782],[66782,66742],[66743,66783],[66783,66743],[66744,66784],[66784,66744],[66745,66785],[66785,66745],[66746,66786],[66786,66746],[66747,66787],[66787,66747],[66748,66788],[66788,66748],[66749,66789],[66789,66749],[66750,66790],[66790,66750],[66751,66791],[66791,66751],[66752,66792],[66792,66752],[66753,66793],[66793,66753],[66754,66794],[66794,66754],[66755,66795],[66795,66755],[66756,66796],[66796,66756],[66757,66797],[66797,66757],[66758,66798],[66798,66758],[66759,66799],[66799,66759],[66760,66800],[66800,66760],[66761,66801],[66801,66761],[66762,66802],[66802,66762],[66763,66803],[66803,66763],[66764,66804],[66804,66764],[66765,66805],[66805,66765],[66766,66806],[66806,66766],[66767,66807],[66807,66767],[66768,66808],[66808,66768],[66769,66809],[66809,66769],[66770,66810],[66810,66770],[66771,66811],[66811,66771],[66928,66967],[66967,66928],[66929,66968],[66968,66929],[66930,66969],[66969,66930],[66931,66970],[66970,66931],[66932,66971],[66971,66932],[66933,66972],[66972,66933],[66934,66973],[66973,66934],[66935,66974],[66974,66935],[66936,66975],[66975,66936],[66937,66976],[66976,66937],[66938,66977],[66977,66938],[66940,66979],[66979,66940],[66941,66980],[66980,66941],[66942,66981],[66981,66942],[66943,66982],[66982,66943],[66944,66983],[66983,66944],[66945,66984],[66984,66945],[66946,66985],[66985,66946],[66947,66986],[66986,66947],[66948,66987],[66987,66948],[66949,66988],[66988,66949],[66950,66989],[66989,66950],[66951,66990],[66990,66951],[66952,66991],[66991,66952],[66953,66992],[66992,66953],[66954,66993],[66993,66954],[66956,66995],[66995,66956],[66957,66996],[66996,66957],[66958,66997],[66997,66958],[66959,66998],[66998,66959],[66960,66999],[66999,66960],[66961,67e3],[67e3,66961],[66962,67001],[67001,66962],[66964,67003],[67003,66964],[66965,67004],[67004,66965],[68736,68800],[68800,68736],[68737,68801],[68801,68737],[68738,68802],[68802,68738],[68739,68803],[68803,68739],[68740,68804],[68804,68740],[68741,68805],[68805,68741],[68742,68806],[68806,68742],[68743,68807],[68807,68743],[68744,68808],[68808,68744],[68745,68809],[68809,68745],[68746,68810],[68810,68746],[68747,68811],[68811,68747],[68748,68812],[68812,68748],[68749,68813],[68813,68749],[68750,68814],[68814,68750],[68751,68815],[68815,68751],[68752,68816],[68816,68752],[68753,68817],[68817,68753],[68754,68818],[68818,68754],[68755,68819],[68819,68755],[68756,68820],[68820,68756],[68757,68821],[68821,68757],[68758,68822],[68822,68758],[68759,68823],[68823,68759],[68760,68824],[68824,68760],[68761,68825],[68825,68761],[68762,68826],[68826,68762],[68763,68827],[68827,68763],[68764,68828],[68828,68764],[68765,68829],[68829,68765],[68766,68830],[68830,68766],[68767,68831],[68831,68767],[68768,68832],[68832,68768],[68769,68833],[68833,68769],[68770,68834],[68834,68770],[68771,68835],[68835,68771],[68772,68836],[68836,68772],[68773,68837],[68837,68773],[68774,68838],[68838,68774],[68775,68839],[68839,68775],[68776,68840],[68840,68776],[68777,68841],[68841,68777],[68778,68842],[68842,68778],[68779,68843],[68843,68779],[68780,68844],[68844,68780],[68781,68845],[68845,68781],[68782,68846],[68846,68782],[68783,68847],[68847,68783],[68784,68848],[68848,68784],[68785,68849],[68849,68785],[68786,68850],[68850,68786],[71840,71872],[71872,71840],[71841,71873],[71873,71841],[71842,71874],[71874,71842],[71843,71875],[71875,71843],[71844,71876],[71876,71844],[71845,71877],[71877,71845],[71846,71878],[71878,71846],[71847,71879],[71879,71847],[71848,71880],[71880,71848],[71849,71881],[71881,71849],[71850,71882],[71882,71850],[71851,71883],[71883,71851],[71852,71884],[71884,71852],[71853,71885],[71885,71853],[71854,71886],[71886,71854],[71855,71887],[71887,71855],[71856,71888],[71888,71856],[71857,71889],[71889,71857],[71858,71890],[71890,71858],[71859,71891],[71891,71859],[71860,71892],[71892,71860],[71861,71893],[71893,71861],[71862,71894],[71894,71862],[71863,71895],[71895,71863],[71864,71896],[71896,71864],[71865,71897],[71897,71865],[71866,71898],[71898,71866],[71867,71899],[71899,71867],[71868,71900],[71900,71868],[71869,71901],[71901,71869],[71870,71902],[71902,71870],[71871,71903],[71903,71871],[93760,93792],[93792,93760],[93761,93793],[93793,93761],[93762,93794],[93794,93762],[93763,93795],[93795,93763],[93764,93796],[93796,93764],[93765,93797],[93797,93765],[93766,93798],[93798,93766],[93767,93799],[93799,93767],[93768,93800],[93800,93768],[93769,93801],[93801,93769],[93770,93802],[93802,93770],[93771,93803],[93803,93771],[93772,93804],[93804,93772],[93773,93805],[93805,93773],[93774,93806],[93806,93774],[93775,93807],[93807,93775],[93776,93808],[93808,93776],[93777,93809],[93809,93777],[93778,93810],[93810,93778],[93779,93811],[93811,93779],[93780,93812],[93812,93780],[93781,93813],[93813,93781],[93782,93814],[93814,93782],[93783,93815],[93815,93783],[93784,93816],[93816,93784],[93785,93817],[93817,93785],[93786,93818],[93818,93786],[93787,93819],[93819,93787],[93788,93820],[93820,93788],[93789,93821],[93821,93789],[93790,93822],[93822,93790],[93791,93823],[93823,93791],[125184,125218],[125218,125184],[125185,125219],[125219,125185],[125186,125220],[125220,125186],[125187,125221],[125221,125187],[125188,125222],[125222,125188],[125189,125223],[125223,125189],[125190,125224],[125224,125190],[125191,125225],[125225,125191],[125192,125226],[125226,125192],[125193,125227],[125227,125193],[125194,125228],[125228,125194],[125195,125229],[125229,125195],[125196,125230],[125230,125196],[125197,125231],[125231,125197],[125198,125232],[125232,125198],[125199,125233],[125233,125199],[125200,125234],[125234,125200],[125201,125235],[125235,125201],[125202,125236],[125236,125202],[125203,125237],[125237,125203],[125204,125238],[125238,125204],[125205,125239],[125239,125205],[125206,125240],[125240,125206],[125207,125241],[125241,125207],[125208,125242],[125242,125208],[125209,125243],[125243,125209],[125210,125244],[125244,125210],[125211,125245],[125245,125211],[125212,125246],[125246,125212],[125213,125247],[125247,125213],[125214,125248],[125248,125214],[125215,125249],[125249,125215],[125216,125250],[125250,125216],[125217,125251],[125251,125217]])),v(m,"C",[[0,31,1],[127,159,1],[173,888,715],[889,896,7],[897,899,1],[907,909,2],[930,1328,398],[1367,1368,1],[1419,1420,1],[1424,1480,56],[1481,1487,1],[1515,1518,1],[1525,1541,1],[1564,1757,193],[1806,1807,1],[1867,1868,1],[1970,1983,1],[2043,2044,1],[2094,2095,1],[2111,2140,29],[2141,2143,2],[2155,2159,1],[2191,2199,1],[2274,2436,162],[2445,2446,1],[2449,2450,1],[2473,2481,8],[2483,2485,1],[2490,2491,1],[2501,2502,1],[2505,2506,1],[2511,2518,1],[2520,2523,1],[2526,2532,6],[2533,2559,26],[2560,2564,4],[2571,2574,1],[2577,2578,1],[2601,2609,8],[2612,2618,3],[2619,2621,2],[2627,2630,1],[2633,2634,1],[2638,2640,1],[2642,2648,1],[2653,2655,2],[2656,2661,1],[2679,2688,1],[2692,2702,10],[2706,2729,23],[2737,2740,3],[2746,2747,1],[2758,2766,4],[2767,2769,2],[2770,2783,1],[2788,2789,1],[2802,2808,1],[2816,2820,4],[2829,2830,1],[2833,2834,1],[2857,2865,8],[2868,2874,6],[2875,2885,10],[2886,2889,3],[2890,2894,4],[2895,2900,1],[2904,2907,1],[2910,2916,6],[2917,2936,19],[2937,2945,1],[2948,2955,7],[2956,2957,1],[2961,2966,5],[2967,2968,1],[2971,2973,2],[2976,2978,1],[2981,2983,1],[2987,2989,1],[3002,3005,1],[3011,3013,1],[3017,3022,5],[3023,3025,2],[3026,3030,1],[3032,3045,1],[3067,3071,1],[3085,3089,4],[3113,3130,17],[3131,3141,10],[3145,3150,5],[3151,3156,1],[3159,3163,4],[3164,3166,2],[3167,3172,5],[3173,3184,11],[3185,3190,1],[3213,3217,4],[3241,3252,11],[3258,3259,1],[3269,3273,4],[3278,3284,1],[3287,3292,1],[3295,3300,5],[3301,3312,11],[3316,3327,1],[3341,3345,4],[3397,3401,4],[3408,3411,1],[3428,3429,1],[3456,3460,4],[3479,3481,1],[3506,3516,10],[3518,3519,1],[3527,3529,1],[3531,3534,1],[3541,3543,2],[3552,3557,1],[3568,3569,1],[3573,3584,1],[3643,3646,1],[3676,3712,1],[3715,3717,2],[3723,3748,25],[3750,3774,24],[3775,3781,6],[3783,3791,8],[3802,3803,1],[3808,3839,1],[3912,3949,37],[3950,3952,1],[3992,4029,37],[4045,4059,14],[4060,4095,1],[4294,4296,2],[4297,4300,1],[4302,4303,1],[4681,4686,5],[4687,4695,8],[4697,4702,5],[4703,4745,42],[4750,4751,1],[4785,4790,5],[4791,4799,8],[4801,4806,5],[4807,4823,16],[4881,4886,5],[4887,4955,68],[4956,4989,33],[4990,4991,1],[5018,5023,1],[5110,5111,1],[5118,5119,1],[5789,5791,1],[5881,5887,1],[5910,5918,1],[5943,5951,1],[5972,5983,1],[5997,6001,4],[6004,6015,1],[6110,6111,1],[6122,6127,1],[6138,6143,1],[6158,6170,12],[6171,6175,1],[6265,6271,1],[6315,6319,1],[6390,6399,1],[6431,6444,13],[6445,6447,1],[6460,6463,1],[6465,6467,1],[6510,6511,1],[6517,6527,1],[6572,6575,1],[6602,6607,1],[6619,6621,1],[6684,6685,1],[6751,6781,30],[6782,6794,12],[6795,6799,1],[6810,6815,1],[6830,6831,1],[6863,6911,1],[6989,6991,1],[7039,7156,117],[7157,7163,1],[7224,7226,1],[7242,7244,1],[7305,7311,1],[7355,7356,1],[7368,7375,1],[7419,7423,1],[7958,7959,1],[7966,7967,1],[8006,8007,1],[8014,8015,1],[8024,8030,2],[8062,8063,1],[8117,8133,16],[8148,8149,1],[8156,8176,20],[8177,8181,4],[8191,8203,12],[8204,8207,1],[8234,8238,1],[8288,8303,1],[8306,8307,1],[8335,8349,14],[8350,8351,1],[8385,8399,1],[8433,8447,1],[8588,8591,1],[9255,9279,1],[9291,9311,1],[11124,11125,1],[11158,11508,350],[11509,11512,1],[11558,11560,2],[11561,11564,1],[11566,11567,1],[11624,11630,1],[11633,11646,1],[11671,11679,1],[11687,11743,8],[11870,11903,1],[11930,12020,90],[12021,12031,1],[12246,12271,1],[12352,12439,87],[12440,12544,104],[12545,12548,1],[12592,12687,95],[12772,12782,1],[12831,42125,29294],[42126,42127,1],[42183,42191,1],[42540,42559,1],[42744,42751,1],[42955,42959,1],[42962,42964,2],[42970,42993,1],[43053,43055,1],[43066,43071,1],[43128,43135,1],[43206,43213,1],[43226,43231,1],[43348,43358,1],[43389,43391,1],[43470,43482,12],[43483,43485,1],[43519,43575,56],[43576,43583,1],[43598,43599,1],[43610,43611,1],[43715,43738,1],[43767,43776,1],[43783,43784,1],[43791,43792,1],[43799,43807,1],[43815,43823,8],[43884,43887,1],[44014,44015,1],[44026,44031,1],[55204,55215,1],[55239,55242,1],[55292,63743,1],[64110,64111,1],[64218,64255,1],[64263,64274,1],[64280,64284,1],[64311,64317,6],[64319,64325,3],[64451,64466,1],[64912,64913,1],[64968,64974,1],[64976,65007,1],[65050,65055,1],[65107,65127,20],[65132,65135,1],[65141,65277,136],[65278,65280,1],[65471,65473,1],[65480,65481,1],[65488,65489,1],[65496,65497,1],[65501,65503,1],[65511,65519,8],[65520,65531,1],[65534,65535,1],[65548,65575,27],[65595,65598,3],[65614,65615,1],[65630,65663,1],[65787,65791,1],[65795,65798,1],[65844,65846,1],[65935,65949,14],[65950,65951,1],[65953,65999,1],[66046,66175,1],[66205,66207,1],[66257,66271,1],[66300,66303,1],[66340,66348,1],[66379,66383,1],[66427,66431,1],[66462,66500,38],[66501,66503,1],[66518,66559,1],[66718,66719,1],[66730,66735,1],[66772,66775,1],[66812,66815,1],[66856,66863,1],[66916,66926,1],[66939,66955,16],[66963,66966,3],[66978,66994,16],[67002,67005,3],[67006,67071,1],[67383,67391,1],[67414,67423,1],[67432,67455,1],[67462,67505,43],[67515,67583,1],[67590,67591,1],[67593,67638,45],[67641,67643,1],[67645,67646,1],[67670,67743,73],[67744,67750,1],[67760,67807,1],[67827,67830,3],[67831,67834,1],[67868,67870,1],[67898,67902,1],[67904,67967,1],[68024,68027,1],[68048,68049,1],[68100,68103,3],[68104,68107,1],[68116,68120,4],[68150,68151,1],[68155,68158,1],[68169,68175,1],[68185,68191,1],[68256,68287,1],[68327,68330,1],[68343,68351,1],[68406,68408,1],[68438,68439,1],[68467,68471,1],[68498,68504,1],[68509,68520,1],[68528,68607,1],[68681,68735,1],[68787,68799,1],[68851,68857,1],[68904,68911,1],[68922,69215,1],[69247,69290,43],[69294,69295,1],[69298,69372,1],[69416,69423,1],[69466,69487,1],[69514,69551,1],[69580,69599,1],[69623,69631,1],[69710,69713,1],[69750,69758,1],[69821,69827,6],[69828,69839,1],[69865,69871,1],[69882,69887,1],[69941,69960,19],[69961,69967,1],[70007,70015,1],[70112,70133,21],[70134,70143,1],[70162,70210,48],[70211,70271,1],[70279,70281,2],[70286,70302,16],[70314,70319,1],[70379,70383,1],[70394,70399,1],[70404,70413,9],[70414,70417,3],[70418,70441,23],[70449,70452,3],[70458,70469,11],[70470,70473,3],[70474,70478,4],[70479,70481,2],[70482,70486,1],[70488,70492,1],[70500,70501,1],[70509,70511,1],[70517,70655,1],[70748,70754,6],[70755,70783,1],[70856,70863,1],[70874,71039,1],[71094,71095,1],[71134,71167,1],[71237,71247,1],[71258,71263,1],[71277,71295,1],[71354,71359,1],[71370,71423,1],[71451,71452,1],[71468,71471,1],[71495,71679,1],[71740,71839,1],[71923,71934,1],[71943,71944,1],[71946,71947,1],[71956,71959,3],[71990,71993,3],[71994,72007,13],[72008,72015,1],[72026,72095,1],[72104,72105,1],[72152,72153,1],[72165,72191,1],[72264,72271,1],[72355,72367,1],[72441,72447,1],[72458,72703,1],[72713,72759,46],[72774,72783,1],[72813,72815,1],[72848,72849,1],[72872,72887,15],[72888,72959,1],[72967,72970,3],[73015,73017,1],[73019,73022,3],[73032,73039,1],[73050,73055,1],[73062,73065,3],[73103,73106,3],[73113,73119,1],[73130,73439,1],[73465,73471,1],[73489,73531,42],[73532,73533,1],[73562,73647,1],[73649,73663,1],[73714,73726,1],[74650,74751,1],[74863,74869,6],[74870,74879,1],[75076,77711,1],[77811,77823,1],[78896,78911,1],[78934,82943,1],[83527,92159,1],[92729,92735,1],[92767,92778,11],[92779,92781,1],[92863,92874,11],[92875,92879,1],[92910,92911,1],[92918,92927,1],[92998,93007,1],[93018,93026,8],[93048,93052,1],[93072,93759,1],[93851,93951,1],[94027,94030,1],[94088,94094,1],[94112,94175,1],[94181,94191,1],[94194,94207,1],[100344,100351,1],[101590,101631,1],[101641,110575,1],[110580,110588,8],[110591,110883,292],[110884,110897,1],[110899,110927,1],[110931,110932,1],[110934,110947,1],[110952,110959,1],[111356,113663,1],[113771,113775,1],[113789,113791,1],[113801,113807,1],[113818,113819,1],[113824,118527,1],[118574,118575,1],[118599,118607,1],[118724,118783,1],[119030,119039,1],[119079,119080,1],[119155,119162,1],[119275,119295,1],[119366,119487,1],[119508,119519,1],[119540,119551,1],[119639,119647,1],[119673,119807,1],[119893,119965,72],[119968,119969,1],[119971,119972,1],[119975,119976,1],[119981,119994,13],[119996,120004,8],[120070,120075,5],[120076,120085,9],[120093,120122,29],[120127,120133,6],[120135,120137,1],[120145,120486,341],[120487,120780,293],[120781,121484,703],[121485,121498,1],[121504,121520,16],[121521,122623,1],[122655,122660,1],[122667,122879,1],[122887,122905,18],[122906,122914,8],[122917,122923,6],[122924,122927,1],[122990,123022,1],[123024,123135,1],[123181,123183,1],[123198,123199,1],[123210,123213,1],[123216,123535,1],[123567,123583,1],[123642,123646,1],[123648,124111,1],[124154,124895,1],[124903,124908,5],[124911,124927,16],[125125,125126,1],[125143,125183,1],[125260,125263,1],[125274,125277,1],[125280,126064,1],[126133,126208,1],[126270,126463,1],[126468,126496,28],[126499,126501,2],[126502,126504,2],[126515,126520,5],[126522,126524,2],[126525,126529,1],[126531,126534,1],[126536,126540,2],[126544,126547,3],[126549,126550,1],[126552,126560,2],[126563,126565,2],[126566,126571,5],[126579,126589,5],[126591,126602,11],[126620,126624,1],[126628,126634,6],[126652,126703,1],[126706,126975,1],[127020,127023,1],[127124,127135,1],[127151,127152,1],[127168,127184,16],[127222,127231,1],[127406,127461,1],[127491,127503,1],[127548,127551,1],[127561,127567,1],[127570,127583,1],[127590,127743,1],[128728,128731,1],[128749,128751,1],[128765,128767,1],[128887,128890,1],[128986,128991,1],[129004,129007,1],[129009,129023,1],[129036,129039,1],[129096,129103,1],[129114,129119,1],[129160,129167,1],[129198,129199,1],[129202,129279,1],[129620,129631,1],[129646,129647,1],[129661,129663,1],[129673,129679,1],[129726,129734,8],[129735,129741,1],[129756,129759,1],[129769,129775,1],[129785,129791,1],[129939,129995,56],[129996,130031,1],[130042,131071,1],[173792,173823,1],[177978,177983,1],[178206,178207,1],[183970,183983,1],[191457,191471,1],[192094,194559,1],[195102,196607,1],[201547,201551,1],[205744,917759,1],[918e3,1114111,1]]),v(m,"Cc",[[0,31,1],[127,159,1]]),v(m,"Cf",[[173,1536,1363],[1537,1541,1],[1564,1757,193],[1807,2192,385],[2193,2274,81],[6158,8203,2045],[8204,8207,1],[8234,8238,1],[8288,8292,1],[8294,8303,1],[65279,65529,250],[65530,65531,1],[69821,69837,16],[78896,78911,1],[113824,113827,1],[119155,119162,1],[917505,917536,31],[917537,917631,1]]),v(m,"Co",[[57344,63743,1],[983040,1048573,1],[1048576,1114109,1]]),v(m,"Cs",[[55296,57343,1]]),v(m,"L",[[65,90,1],[97,122,1],[170,181,11],[186,192,6],[193,214,1],[216,246,1],[248,705,1],[710,721,1],[736,740,1],[748,750,2],[880,884,1],[886,887,1],[890,893,1],[895,902,7],[904,906,1],[908,910,2],[911,929,1],[931,1013,1],[1015,1153,1],[1162,1327,1],[1329,1366,1],[1369,1376,7],[1377,1416,1],[1488,1514,1],[1519,1522,1],[1568,1610,1],[1646,1647,1],[1649,1747,1],[1749,1765,16],[1766,1774,8],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2036,2037,1],[2042,2048,6],[2049,2069,1],[2074,2084,10],[2088,2112,24],[2113,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2249,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2417,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3654,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3782,3804,22],[3805,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4256,18],[4257,4293,1],[4295,4301,6],[4304,4346,1],[4348,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5024,5109,1],[5112,5117,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6103,6108,5],[6176,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6823,6917,94],[6918,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7293,1],[7296,7304,1],[7312,7354,1],[7357,7359,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,7424,6],[7425,7615,1],[7680,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8124,1],[8126,8130,4],[8131,8132,1],[8134,8140,1],[8144,8147,1],[8150,8155,1],[8160,8172,1],[8178,8180,1],[8182,8188,1],[8305,8319,14],[8336,8348,1],[8450,8455,5],[8458,8467,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8495,8505,1],[8508,8511,1],[8517,8521,1],[8526,8579,53],[8580,11264,2684],[11265,11492,1],[11499,11502,1],[11506,11507,1],[11520,11557,1],[11559,11565,6],[11568,11623,1],[11631,11648,17],[11649,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[11823,12293,470],[12294,12337,43],[12338,12341,1],[12347,12348,1],[12353,12438,1],[12445,12447,1],[12449,12538,1],[12540,12543,1],[12549,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,42124,1],[42192,42237,1],[42240,42508,1],[42512,42527,1],[42538,42539,1],[42560,42606,1],[42623,42653,1],[42656,42725,1],[42775,42783,1],[42786,42888,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43471,43488,17],[43489,43492,1],[43494,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43741,1],[43744,43754,1],[43762,43764,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43824,43866,1],[43868,43881,1],[43888,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64256,64262,1],[64275,64279,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65313,65338,1],[65345,65370,1],[65382,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66560,66717,1],[66736,66771,1],[66776,66811,1],[66816,66855,1],[66864,66915,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68736,68786,1],[68800,68850,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71840,71903,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[92992,92995,1],[93027,93047,1],[93053,93071,1],[93760,93823,1],[93952,94026,1],[94032,94099,67],[94100,94111,1],[94176,94177,1],[94179,94208,29],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120512,1],[120514,120538,1],[120540,120570,1],[120572,120596,1],[120598,120628,1],[120630,120654,1],[120656,120686,1],[120688,120712,1],[120714,120744,1],[120746,120770,1],[120772,120779,1],[122624,122654,1],[122661,122666,1],[122928,122989,1],[123136,123180,1],[123191,123197,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124139,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[125184,125251,1],[125259,126464,1205],[126465,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),v(m,"foldL",[[837,837,1]]),v(m,"Ll",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,311,2],[312,328,2],[329,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[397,402,5],[405,409,4],[410,411,1],[414,417,3],[419,421,2],[424,426,2],[427,429,2],[432,436,4],[438,441,3],[442,445,3],[446,447,1],[454,460,3],[462,476,2],[477,495,2],[496,499,3],[501,505,4],[507,563,2],[564,569,1],[572,575,3],[576,578,2],[583,591,2],[592,659,1],[661,687,1],[881,883,2],[887,891,4],[892,893,1],[912,940,28],[941,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1020,1072,52],[1073,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1376,1416,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7424,7467,1],[7531,7543,1],[7545,7578,1],[7681,7829,2],[7830,7837,1],[7839,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8016,8023,1],[8032,8039,1],[8048,8061,1],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8112,8116,1],[8118,8119,1],[8126,8130,4],[8131,8132,1],[8134,8135,1],[8144,8147,1],[8150,8151,1],[8160,8167,1],[8178,8180,1],[8182,8183,1],[8458,8462,4],[8463,8467,4],[8495,8505,5],[8508,8509,1],[8518,8521,1],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11377,11379,2],[11380,11382,2],[11383,11387,1],[11393,11491,2],[11492,11500,8],[11502,11507,5],[11520,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42800,42801,1],[42803,42865,2],[42866,42872,1],[42874,42876,2],[42879,42887,2],[42892,42894,2],[42897,42899,2],[42900,42901,1],[42903,42921,2],[42927,42933,6],[42935,42947,2],[42952,42954,2],[42961,42969,2],[42998,43002,4],[43824,43866,1],[43872,43880,1],[43888,43967,1],[64256,64262,1],[64275,64279,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[119834,119859,1],[119886,119892,1],[119894,119911,1],[119938,119963,1],[119990,119993,1],[119995,119997,2],[119998,120003,1],[120005,120015,1],[120042,120067,1],[120094,120119,1],[120146,120171,1],[120198,120223,1],[120250,120275,1],[120302,120327,1],[120354,120379,1],[120406,120431,1],[120458,120485,1],[120514,120538,1],[120540,120545,1],[120572,120596,1],[120598,120603,1],[120630,120654,1],[120656,120661,1],[120688,120712,1],[120714,120719,1],[120746,120770,1],[120772,120777,1],[120779,122624,1845],[122625,122633,1],[122635,122654,1],[122661,122666,1],[125218,125251,1]]),v(m,"foldLl",[[65,90,1],[192,214,1],[216,222,1],[256,302,2],[306,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,453,1],[455,456,1],[458,459,1],[461,475,2],[478,494,2],[497,498,1],[500,502,2],[503,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[837,880,43],[882,886,4],[895,902,7],[904,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,984,9],[986,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8072,8079,1],[8088,8095,1],[8104,8111,1],[8120,8124,1],[8136,8140,1],[8152,8155,1],[8168,8172,1],[8184,8188,1],[8486,8490,4],[8491,8498,7],[8579,11264,2685],[11265,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[125184,125217,1]]),v(m,"Lm",[[688,705,1],[710,721,1],[736,740,1],[748,750,2],[884,890,6],[1369,1600,231],[1765,1766,1],[2036,2037,1],[2042,2074,32],[2084,2088,4],[2249,2417,168],[3654,3782,128],[4348,6103,1755],[6211,6823,612],[7288,7293,1],[7468,7530,1],[7544,7579,35],[7580,7615,1],[8305,8319,14],[8336,8348,1],[11388,11389,1],[11631,11823,192],[12293,12337,44],[12338,12341,1],[12347,12445,98],[12446,12540,94],[12541,12542,1],[40981,42232,1251],[42233,42237,1],[42508,42623,115],[42652,42653,1],[42775,42783,1],[42864,42888,24],[42994,42996,1],[43e3,43001,1],[43471,43494,23],[43632,43741,109],[43763,43764,1],[43868,43871,1],[43881,65392,21511],[65438,65439,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[92992,92995,1],[94099,94111,1],[94176,94177,1],[94179,110576,16397],[110577,110579,1],[110581,110587,1],[110589,110590,1],[122928,122989,1],[123191,123197,1],[124139,125259,1120]]),v(m,"Lo",[[170,186,16],[443,448,5],[449,451,1],[660,1488,828],[1489,1514,1],[1519,1522,1],[1568,1599,1],[1601,1610,1],[1646,1647,1],[1649,1747,1],[1749,1774,25],[1775,1786,11],[1787,1788,1],[1791,1808,17],[1810,1839,1],[1869,1957,1],[1969,1994,25],[1995,2026,1],[2048,2069,1],[2112,2136,1],[2144,2154,1],[2160,2183,1],[2185,2190,1],[2208,2248,1],[2308,2361,1],[2365,2384,19],[2392,2401,1],[2418,2432,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2493,2510,17],[2524,2525,1],[2527,2529,1],[2544,2545,1],[2556,2565,9],[2566,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2649,2652,1],[2654,2674,20],[2675,2676,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2749,2768,19],[2784,2785,1],[2809,2821,12],[2822,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2877,2908,31],[2909,2911,2],[2912,2913,1],[2929,2947,18],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3024,3077,53],[3078,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3133,3160,27],[3161,3162,1],[3165,3168,3],[3169,3200,31],[3205,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3261,3293,32],[3294,3296,2],[3297,3313,16],[3314,3332,18],[3333,3340,1],[3342,3344,1],[3346,3386,1],[3389,3406,17],[3412,3414,1],[3423,3425,1],[3450,3455,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3585,3632,1],[3634,3635,1],[3648,3653,1],[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3760,1],[3762,3763,1],[3773,3776,3],[3777,3780,1],[3804,3807,1],[3840,3904,64],[3905,3911,1],[3913,3948,1],[3976,3980,1],[4096,4138,1],[4159,4176,17],[4177,4181,1],[4186,4189,1],[4193,4197,4],[4198,4206,8],[4207,4208,1],[4213,4225,1],[4238,4352,114],[4353,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4992,5007,1],[5121,5740,1],[5743,5759,1],[5761,5786,1],[5792,5866,1],[5873,5880,1],[5888,5905,1],[5919,5937,1],[5952,5969,1],[5984,5996,1],[5998,6e3,1],[6016,6067,1],[6108,6176,68],[6177,6210,1],[6212,6264,1],[6272,6276,1],[6279,6312,1],[6314,6320,6],[6321,6389,1],[6400,6430,1],[6480,6509,1],[6512,6516,1],[6528,6571,1],[6576,6601,1],[6656,6678,1],[6688,6740,1],[6917,6963,1],[6981,6988,1],[7043,7072,1],[7086,7087,1],[7098,7141,1],[7168,7203,1],[7245,7247,1],[7258,7287,1],[7401,7404,1],[7406,7411,1],[7413,7414,1],[7418,8501,1083],[8502,8504,1],[11568,11623,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[12294,12348,54],[12353,12438,1],[12447,12449,2],[12450,12538,1],[12543,12549,6],[12550,12591,1],[12593,12686,1],[12704,12735,1],[12784,12799,1],[13312,19903,1],[19968,40980,1],[40982,42124,1],[42192,42231,1],[42240,42507,1],[42512,42527,1],[42538,42539,1],[42606,42656,50],[42657,42725,1],[42895,42999,104],[43003,43009,1],[43011,43013,1],[43015,43018,1],[43020,43042,1],[43072,43123,1],[43138,43187,1],[43250,43255,1],[43259,43261,2],[43262,43274,12],[43275,43301,1],[43312,43334,1],[43360,43388,1],[43396,43442,1],[43488,43492,1],[43495,43503,1],[43514,43518,1],[43520,43560,1],[43584,43586,1],[43588,43595,1],[43616,43631,1],[43633,43638,1],[43642,43646,4],[43647,43695,1],[43697,43701,4],[43702,43705,3],[43706,43709,1],[43712,43714,2],[43739,43740,1],[43744,43754,1],[43762,43777,15],[43778,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[43968,44002,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[63744,64109,1],[64112,64217,1],[64285,64287,2],[64288,64296,1],[64298,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64433,1],[64467,64829,1],[64848,64911,1],[64914,64967,1],[65008,65019,1],[65136,65140,1],[65142,65276,1],[65382,65391,1],[65393,65437,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1],[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1],[66176,66204,1],[66208,66256,1],[66304,66335,1],[66349,66368,1],[66370,66377,1],[66384,66421,1],[66432,66461,1],[66464,66499,1],[66504,66511,1],[66640,66717,1],[66816,66855,1],[66864,66915,1],[67072,67382,1],[67392,67413,1],[67424,67431,1],[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3],[67648,67669,1],[67680,67702,1],[67712,67742,1],[67808,67826,1],[67828,67829,1],[67840,67861,1],[67872,67897,1],[67968,68023,1],[68030,68031,1],[68096,68112,16],[68113,68115,1],[68117,68119,1],[68121,68149,1],[68192,68220,1],[68224,68252,1],[68288,68295,1],[68297,68324,1],[68352,68405,1],[68416,68437,1],[68448,68466,1],[68480,68497,1],[68608,68680,1],[68864,68899,1],[69248,69289,1],[69296,69297,1],[69376,69404,1],[69415,69424,9],[69425,69445,1],[69488,69505,1],[69552,69572,1],[69600,69622,1],[69635,69687,1],[69745,69746,1],[69749,69763,14],[69764,69807,1],[69840,69864,1],[69891,69926,1],[69956,69959,3],[69968,70002,1],[70006,70019,13],[70020,70066,1],[70081,70084,1],[70106,70108,2],[70144,70161,1],[70163,70187,1],[70207,70208,1],[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70312,1],[70320,70366,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70461,70480,19],[70493,70497,1],[70656,70708,1],[70727,70730,1],[70751,70753,1],[70784,70831,1],[70852,70853,1],[70855,71040,185],[71041,71086,1],[71128,71131,1],[71168,71215,1],[71236,71296,60],[71297,71338,1],[71352,71424,72],[71425,71450,1],[71488,71494,1],[71680,71723,1],[71935,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71983,1],[71999,72001,2],[72096,72103,1],[72106,72144,1],[72161,72163,2],[72192,72203,11],[72204,72242,1],[72250,72272,22],[72284,72329,1],[72349,72368,19],[72369,72440,1],[72704,72712,1],[72714,72750,1],[72768,72818,50],[72819,72847,1],[72960,72966,1],[72968,72969,1],[72971,73008,1],[73030,73056,26],[73057,73061,1],[73063,73064,1],[73066,73097,1],[73112,73440,328],[73441,73458,1],[73474,73476,2],[73477,73488,1],[73490,73523,1],[73648,73728,80],[73729,74649,1],[74880,75075,1],[77712,77808,1],[77824,78895,1],[78913,78918,1],[82944,83526,1],[92160,92728,1],[92736,92766,1],[92784,92862,1],[92880,92909,1],[92928,92975,1],[93027,93047,1],[93053,93071,1],[93952,94026,1],[94032,94208,176],[94209,100343,1],[100352,101589,1],[101632,101640,1],[110592,110882,1],[110898,110928,30],[110929,110930,1],[110933,110948,15],[110949,110951,1],[110960,111355,1],[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[122634,123136,502],[123137,123180,1],[123214,123536,322],[123537,123565,1],[123584,123627,1],[124112,124138,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1],[124928,125124,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),v(m,"Lt",[[453,459,3],[498,8072,7574],[8073,8079,1],[8088,8095,1],[8104,8111,1],[8124,8140,16],[8188,8188,1]]),v(m,"foldLt",[[452,454,2],[455,457,2],[458,460,2],[497,499,2],[8064,8071,1],[8080,8087,1],[8096,8103,1],[8115,8131,16],[8179,8179,1]]),v(m,"Lu",[[65,90,1],[192,214,1],[216,222,1],[256,310,2],[313,327,2],[330,376,2],[377,381,2],[385,386,1],[388,390,2],[391,393,2],[394,395,1],[398,401,1],[403,404,1],[406,408,1],[412,413,1],[415,416,1],[418,422,2],[423,425,2],[428,430,2],[431,433,2],[434,435,1],[437,439,2],[440,444,4],[452,461,3],[463,475,2],[478,494,2],[497,500,3],[502,504,1],[506,562,2],[570,571,1],[573,574,1],[577,579,2],[580,582,1],[584,590,2],[880,882,2],[886,895,9],[902,904,2],[905,906,1],[908,910,2],[911,913,2],[914,929,1],[931,939,1],[975,978,3],[979,980,1],[984,1006,2],[1012,1015,3],[1017,1018,1],[1021,1071,1],[1120,1152,2],[1162,1216,2],[1217,1229,2],[1232,1326,2],[1329,1366,1],[4256,4293,1],[4295,4301,6],[5024,5109,1],[7312,7354,1],[7357,7359,1],[7680,7828,2],[7838,7934,2],[7944,7951,1],[7960,7965,1],[7976,7983,1],[7992,7999,1],[8008,8013,1],[8025,8031,2],[8040,8047,1],[8120,8123,1],[8136,8139,1],[8152,8155,1],[8168,8172,1],[8184,8187,1],[8450,8455,5],[8459,8461,1],[8464,8466,1],[8469,8473,4],[8474,8477,1],[8484,8490,2],[8491,8493,1],[8496,8499,1],[8510,8511,1],[8517,8579,62],[11264,11311,1],[11360,11362,2],[11363,11364,1],[11367,11373,2],[11374,11376,1],[11378,11381,3],[11390,11392,1],[11394,11490,2],[11499,11501,2],[11506,42560,31054],[42562,42604,2],[42624,42650,2],[42786,42798,2],[42802,42862,2],[42873,42877,2],[42878,42886,2],[42891,42893,2],[42896,42898,2],[42902,42922,2],[42923,42926,1],[42928,42932,1],[42934,42948,2],[42949,42951,1],[42953,42960,7],[42966,42968,2],[42997,65313,22316],[65314,65338,1],[66560,66599,1],[66736,66771,1],[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[68736,68786,1],[71840,71871,1],[93760,93791,1],[119808,119833,1],[119860,119885,1],[119912,119937,1],[119964,119966,2],[119967,119973,3],[119974,119977,3],[119978,119980,1],[119982,119989,1],[120016,120041,1],[120068,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120120,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120172,120197,1],[120224,120249,1],[120276,120301,1],[120328,120353,1],[120380,120405,1],[120432,120457,1],[120488,120512,1],[120546,120570,1],[120604,120628,1],[120662,120686,1],[120720,120744,1],[120778,125184,4406],[125185,125217,1]]),v(m,"Upper",m.Lu),v(m,"foldLu",[[97,122,1],[181,223,42],[224,246,1],[248,255,1],[257,303,2],[307,311,2],[314,328,2],[331,375,2],[378,382,2],[383,384,1],[387,389,2],[392,396,4],[402,405,3],[409,410,1],[414,417,3],[419,421,2],[424,429,5],[432,436,4],[438,441,3],[445,447,2],[453,454,1],[456,457,1],[459,460,1],[462,476,2],[477,495,2],[498,499,1],[501,505,4],[507,543,2],[547,563,2],[572,575,3],[576,578,2],[583,591,2],[592,596,1],[598,599,1],[601,603,2],[604,608,4],[609,613,2],[614,616,2],[617,620,1],[623,625,2],[626,629,3],[637,640,3],[642,643,1],[647,652,1],[658,669,11],[670,837,167],[881,883,2],[887,891,4],[892,893,1],[940,943,1],[945,974,1],[976,977,1],[981,983,1],[985,1007,2],[1008,1011,1],[1013,1019,3],[1072,1119,1],[1121,1153,2],[1163,1215,2],[1218,1230,2],[1231,1327,2],[1377,1414,1],[4304,4346,1],[4349,4351,1],[5112,5117,1],[7296,7304,1],[7545,7549,4],[7566,7681,115],[7683,7829,2],[7835,7841,6],[7843,7935,2],[7936,7943,1],[7952,7957,1],[7968,7975,1],[7984,7991,1],[8e3,8005,1],[8017,8023,2],[8032,8039,1],[8048,8061,1],[8112,8113,1],[8126,8144,18],[8145,8160,15],[8161,8165,4],[8526,8580,54],[11312,11359,1],[11361,11365,4],[11366,11372,2],[11379,11382,3],[11393,11491,2],[11500,11502,2],[11507,11520,13],[11521,11557,1],[11559,11565,6],[42561,42605,2],[42625,42651,2],[42787,42799,2],[42803,42863,2],[42874,42876,2],[42879,42887,2],[42892,42897,5],[42899,42900,1],[42903,42921,2],[42933,42947,2],[42952,42954,2],[42961,42967,6],[42969,42998,29],[43859,43888,29],[43889,43967,1],[65345,65370,1],[66600,66639,1],[66776,66811,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1],[68800,68850,1],[71872,71903,1],[93792,93823,1],[125218,125251,1]]),v(m,"M",[[768,879,1],[1155,1161,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2307,1],[2362,2364,1],[2366,2383,1],[2385,2391,1],[2402,2403,1],[2433,2435,1],[2492,2494,2],[2495,2500,1],[2503,2504,1],[2507,2509,1],[2519,2530,11],[2531,2558,27],[2561,2563,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2672,31],[2673,2677,4],[2689,2691,1],[2748,2750,2],[2751,2757,1],[2759,2761,1],[2763,2765,1],[2786,2787,1],[2810,2815,1],[2817,2819,1],[2876,2878,2],[2879,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2914,2915,1],[2946,3006,60],[3007,3010,1],[3014,3016,1],[3018,3021,1],[3031,3072,41],[3073,3076,1],[3132,3134,2],[3135,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3203,1],[3260,3262,2],[3263,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3298,3299,1],[3315,3328,13],[3329,3331,1],[3387,3388,1],[3390,3396,1],[3398,3400,1],[3402,3405,1],[3415,3426,11],[3427,3457,30],[3458,3459,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3570,3571,1],[3633,3636,3],[3637,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3902,3903,1],[3953,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4139,101],[4140,4158,1],[4182,4185,1],[4190,4192,1],[4194,4196,1],[4199,4205,1],[4209,4212,1],[4226,4237,1],[4239,4250,11],[4251,4253,1],[4957,4959,1],[5906,5909,1],[5938,5940,1],[5970,5971,1],[6002,6003,1],[6068,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6443,1],[6448,6459,1],[6679,6683,1],[6741,6750,1],[6752,6780,1],[6783,6832,49],[6833,6862,1],[6912,6916,1],[6964,6980,1],[7019,7027,1],[7040,7042,1],[7073,7085,1],[7142,7155,1],[7204,7223,1],[7376,7378,1],[7380,7400,1],[7405,7412,7],[7415,7417,1],[7616,7679,1],[8400,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12335,1],[12441,12442,1],[42607,42610,1],[42612,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43043,24],[43044,43047,1],[43052,43136,84],[43137,43188,51],[43189,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43347,1],[43392,43395,1],[43443,43456,1],[43493,43561,68],[43562,43574,1],[43587,43596,9],[43597,43643,46],[43644,43645,1],[43696,43698,2],[43699,43700,1],[43703,43704,1],[43710,43711,1],[43713,43755,42],[43756,43759,1],[43765,43766,1],[44003,44010,1],[44012,44013,1],[64286,65024,738],[65025,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69632,69634,1],[69688,69702,1],[69744,69747,3],[69748,69759,11],[69760,69762,1],[69808,69818,1],[69826,69888,62],[69889,69890,1],[69927,69940,1],[69957,69958,1],[70003,70016,13],[70017,70018,1],[70067,70080,1],[70089,70092,1],[70094,70095,1],[70188,70199,1],[70206,70209,3],[70367,70378,1],[70400,70403,1],[70459,70460,1],[70462,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70502,3],[70503,70508,1],[70512,70516,1],[70709,70726,1],[70750,70832,82],[70833,70851,1],[71087,71093,1],[71096,71104,1],[71132,71133,1],[71216,71232,1],[71339,71351,1],[71453,71467,1],[71724,71738,1],[71984,71989,1],[71991,71992,1],[71995,71998,1],[72e3,72002,2],[72003,72145,142],[72146,72151,1],[72154,72160,1],[72164,72193,29],[72194,72202,1],[72243,72249,1],[72251,72254,1],[72263,72273,10],[72274,72283,1],[72330,72345,1],[72751,72758,1],[72760,72767,1],[72850,72871,1],[72873,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73098,67],[73099,73102,1],[73104,73105,1],[73107,73111,1],[73459,73462,1],[73472,73473,1],[73475,73524,49],[73525,73530,1],[73534,73538,1],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94033,2],[94034,94087,1],[94095,94098,1],[94180,94192,12],[94193,113821,19628],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119141,119145,1],[119149,119154,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),v(m,"foldM",[[921,953,32],[8126,8126,1]]),v(m,"Mc",[[2307,2363,56],[2366,2368,1],[2377,2380,1],[2382,2383,1],[2434,2435,1],[2494,2496,1],[2503,2504,1],[2507,2508,1],[2519,2563,44],[2622,2624,1],[2691,2750,59],[2751,2752,1],[2761,2763,2],[2764,2818,54],[2819,2878,59],[2880,2887,7],[2888,2891,3],[2892,2903,11],[3006,3007,1],[3009,3010,1],[3014,3016,1],[3018,3020,1],[3031,3073,42],[3074,3075,1],[3137,3140,1],[3202,3203,1],[3262,3264,2],[3265,3268,1],[3271,3272,1],[3274,3275,1],[3285,3286,1],[3315,3330,15],[3331,3390,59],[3391,3392,1],[3398,3400,1],[3402,3404,1],[3415,3458,43],[3459,3535,76],[3536,3537,1],[3544,3551,1],[3570,3571,1],[3902,3903,1],[3967,4139,172],[4140,4145,5],[4152,4155,3],[4156,4182,26],[4183,4194,11],[4195,4196,1],[4199,4205,1],[4227,4228,1],[4231,4236,1],[4239,4250,11],[4251,4252,1],[5909,5940,31],[6070,6078,8],[6079,6085,1],[6087,6088,1],[6435,6438,1],[6441,6443,1],[6448,6449,1],[6451,6456,1],[6681,6682,1],[6741,6743,2],[6753,6755,2],[6756,6765,9],[6766,6770,1],[6916,6965,49],[6971,6973,2],[6974,6977,1],[6979,6980,1],[7042,7073,31],[7078,7079,1],[7082,7143,61],[7146,7148,1],[7150,7154,4],[7155,7204,49],[7205,7211,1],[7220,7221,1],[7393,7415,22],[12334,12335,1],[43043,43044,1],[43047,43136,89],[43137,43188,51],[43189,43203,1],[43346,43347,1],[43395,43444,49],[43445,43450,5],[43451,43454,3],[43455,43456,1],[43567,43568,1],[43571,43572,1],[43597,43643,46],[43645,43755,110],[43758,43759,1],[43765,44003,238],[44004,44006,2],[44007,44009,2],[44010,44012,2],[69632,69634,2],[69762,69808,46],[69809,69810,1],[69815,69816,1],[69932,69957,25],[69958,70018,60],[70067,70069,1],[70079,70080,1],[70094,70188,94],[70189,70190,1],[70194,70195,1],[70197,70368,171],[70369,70370,1],[70402,70403,1],[70462,70463,1],[70465,70468,1],[70471,70472,1],[70475,70477,1],[70487,70498,11],[70499,70709,210],[70710,70711,1],[70720,70721,1],[70725,70832,107],[70833,70834,1],[70841,70843,2],[70844,70846,1],[70849,71087,238],[71088,71089,1],[71096,71099,1],[71102,71216,114],[71217,71218,1],[71227,71228,1],[71230,71340,110],[71342,71343,1],[71350,71456,106],[71457,71462,5],[71724,71726,1],[71736,71984,248],[71985,71989,1],[71991,71992,1],[71997,72e3,3],[72002,72145,143],[72146,72147,1],[72156,72159,1],[72164,72249,85],[72279,72280,1],[72343,72751,408],[72766,72873,107],[72881,72884,3],[73098,73102,1],[73107,73108,1],[73110,73461,351],[73462,73475,13],[73524,73525,1],[73534,73535,1],[73537,94033,20496],[94034,94087,1],[94192,94193,1],[119141,119142,1],[119149,119154,1]]),v(m,"Me",[[1160,1161,1],[6846,8413,1567],[8414,8416,1],[8418,8420,1],[42608,42610,1]]),v(m,"Mn",[[768,879,1],[1155,1159,1],[1425,1469,1],[1471,1473,2],[1474,1476,2],[1477,1479,2],[1552,1562,1],[1611,1631,1],[1648,1750,102],[1751,1756,1],[1759,1764,1],[1767,1768,1],[1770,1773,1],[1809,1840,31],[1841,1866,1],[1958,1968,1],[2027,2035,1],[2045,2070,25],[2071,2073,1],[2075,2083,1],[2085,2087,1],[2089,2093,1],[2137,2139,1],[2200,2207,1],[2250,2273,1],[2275,2306,1],[2362,2364,2],[2369,2376,1],[2381,2385,4],[2386,2391,1],[2402,2403,1],[2433,2492,59],[2497,2500,1],[2509,2530,21],[2531,2558,27],[2561,2562,1],[2620,2625,5],[2626,2631,5],[2632,2635,3],[2636,2637,1],[2641,2672,31],[2673,2677,4],[2689,2690,1],[2748,2753,5],[2754,2757,1],[2759,2760,1],[2765,2786,21],[2787,2810,23],[2811,2815,1],[2817,2876,59],[2879,2881,2],[2882,2884,1],[2893,2901,8],[2902,2914,12],[2915,2946,31],[3008,3021,13],[3072,3076,4],[3132,3134,2],[3135,3136,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3170,3171,1],[3201,3260,59],[3263,3270,7],[3276,3277,1],[3298,3299,1],[3328,3329,1],[3387,3388,1],[3393,3396,1],[3405,3426,21],[3427,3457,30],[3530,3538,8],[3539,3540,1],[3542,3633,91],[3636,3642,1],[3655,3662,1],[3761,3764,3],[3765,3772,1],[3784,3790,1],[3864,3865,1],[3893,3897,2],[3953,3966,1],[3968,3972,1],[3974,3975,1],[3981,3991,1],[3993,4028,1],[4038,4141,103],[4142,4144,1],[4146,4151,1],[4153,4154,1],[4157,4158,1],[4184,4185,1],[4190,4192,1],[4209,4212,1],[4226,4229,3],[4230,4237,7],[4253,4957,704],[4958,4959,1],[5906,5908,1],[5938,5939,1],[5970,5971,1],[6002,6003,1],[6068,6069,1],[6071,6077,1],[6086,6089,3],[6090,6099,1],[6109,6155,46],[6156,6157,1],[6159,6277,118],[6278,6313,35],[6432,6434,1],[6439,6440,1],[6450,6457,7],[6458,6459,1],[6679,6680,1],[6683,6742,59],[6744,6750,1],[6752,6754,2],[6757,6764,1],[6771,6780,1],[6783,6832,49],[6833,6845,1],[6847,6862,1],[6912,6915,1],[6964,6966,2],[6967,6970,1],[6972,6978,6],[7019,7027,1],[7040,7041,1],[7074,7077,1],[7080,7081,1],[7083,7085,1],[7142,7144,2],[7145,7149,4],[7151,7153,1],[7212,7219,1],[7222,7223,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8400,8412,1],[8417,8421,4],[8422,8432,1],[11503,11505,1],[11647,11744,97],[11745,11775,1],[12330,12333,1],[12441,12442,1],[42607,42612,5],[42613,42621,1],[42654,42655,1],[42736,42737,1],[43010,43014,4],[43019,43045,26],[43046,43052,6],[43204,43205,1],[43232,43249,1],[43263,43302,39],[43303,43309,1],[43335,43345,1],[43392,43394,1],[43443,43446,3],[43447,43449,1],[43452,43453,1],[43493,43561,68],[43562,43566,1],[43569,43570,1],[43573,43574,1],[43587,43596,9],[43644,43696,52],[43698,43700,1],[43703,43704,1],[43710,43711,1],[43713,43756,43],[43757,43766,9],[44005,44008,3],[44013,64286,20273],[65024,65039,1],[65056,65071,1],[66045,66272,227],[66422,66426,1],[68097,68099,1],[68101,68102,1],[68108,68111,1],[68152,68154,1],[68159,68325,166],[68326,68900,574],[68901,68903,1],[69291,69292,1],[69373,69375,1],[69446,69456,1],[69506,69509,1],[69633,69688,55],[69689,69702,1],[69744,69747,3],[69748,69759,11],[69760,69761,1],[69811,69814,1],[69817,69818,1],[69826,69888,62],[69889,69890,1],[69927,69931,1],[69933,69940,1],[70003,70016,13],[70017,70070,53],[70071,70078,1],[70089,70092,1],[70095,70191,96],[70192,70193,1],[70196,70198,2],[70199,70206,7],[70209,70367,158],[70371,70378,1],[70400,70401,1],[70459,70460,1],[70464,70502,38],[70503,70508,1],[70512,70516,1],[70712,70719,1],[70722,70724,1],[70726,70750,24],[70835,70840,1],[70842,70847,5],[70848,70850,2],[70851,71090,239],[71091,71093,1],[71100,71101,1],[71103,71104,1],[71132,71133,1],[71219,71226,1],[71229,71231,2],[71232,71339,107],[71341,71344,3],[71345,71349,1],[71351,71453,102],[71454,71455,1],[71458,71461,1],[71463,71467,1],[71727,71735,1],[71737,71738,1],[71995,71996,1],[71998,72003,5],[72148,72151,1],[72154,72155,1],[72160,72193,33],[72194,72202,1],[72243,72248,1],[72251,72254,1],[72263,72273,10],[72274,72278,1],[72281,72283,1],[72330,72342,1],[72344,72345,1],[72752,72758,1],[72760,72765,1],[72767,72850,83],[72851,72871,1],[72874,72880,1],[72882,72883,1],[72885,72886,1],[73009,73014,1],[73018,73020,2],[73021,73023,2],[73024,73029,1],[73031,73104,73],[73105,73109,4],[73111,73459,348],[73460,73472,12],[73473,73526,53],[73527,73530,1],[73536,73538,2],[78912,78919,7],[78920,78933,1],[92912,92916,1],[92976,92982,1],[94031,94095,64],[94096,94098,1],[94180,113821,19641],[113822,118528,4706],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[119362,119364,1],[121344,121398,1],[121403,121452,1],[121461,121476,15],[121499,121503,1],[121505,121519,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1],[123023,123184,161],[123185,123190,1],[123566,123628,62],[123629,123631,1],[124140,124143,1],[125136,125142,1],[125252,125258,1],[917760,917999,1]]),v(m,"foldMn",[[921,953,32],[8126,8126,1]]),v(m,"N",[[48,57,1],[178,179,1],[185,188,3],[189,190,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2548,2553,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[2930,2935,1],[3046,3058,1],[3174,3183,1],[3192,3198,1],[3302,3311,1],[3416,3422,1],[3430,3448,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3891,1],[4160,4169,1],[4240,4249,1],[4969,4988,1],[5870,5872,1],[6112,6121,1],[6128,6137,1],[6160,6169,1],[6470,6479,1],[6608,6618,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[8304,8308,4],[8309,8313,1],[8320,8329,1],[8528,8578,1],[8581,8585,1],[9312,9371,1],[9450,9471,1],[10102,10131,1],[11517,12295,778],[12321,12329,1],[12344,12346,1],[12690,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[42528,42537,1],[42726,42735,1],[43056,43061,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[65799,65843,1],[65856,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[66369,66378,9],[66513,66517,1],[66720,66729,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[68912,68921,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70113,70132,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71483,1],[71904,71922,1],[72016,72025,1],[72784,72812,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[73664,73684,1],[74752,74862,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125127,125135,1],[125264,125273,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1],[130032,130041,1]]),v(m,"Nd",[[48,57,1],[1632,1641,1],[1776,1785,1],[1984,1993,1],[2406,2415,1],[2534,2543,1],[2662,2671,1],[2790,2799,1],[2918,2927,1],[3046,3055,1],[3174,3183,1],[3302,3311,1],[3430,3439,1],[3558,3567,1],[3664,3673,1],[3792,3801,1],[3872,3881,1],[4160,4169,1],[4240,4249,1],[6112,6121,1],[6160,6169,1],[6470,6479,1],[6608,6617,1],[6784,6793,1],[6800,6809,1],[6992,7001,1],[7088,7097,1],[7232,7241,1],[7248,7257,1],[42528,42537,1],[43216,43225,1],[43264,43273,1],[43472,43481,1],[43504,43513,1],[43600,43609,1],[44016,44025,1],[65296,65305,1],[66720,66729,1],[68912,68921,1],[69734,69743,1],[69872,69881,1],[69942,69951,1],[70096,70105,1],[70384,70393,1],[70736,70745,1],[70864,70873,1],[71248,71257,1],[71360,71369,1],[71472,71481,1],[71904,71913,1],[72016,72025,1],[72784,72793,1],[73040,73049,1],[73120,73129,1],[73552,73561,1],[92768,92777,1],[92864,92873,1],[93008,93017,1],[120782,120831,1],[123200,123209,1],[123632,123641,1],[124144,124153,1],[125264,125273,1],[130032,130041,1]]),v(m,"Nl",[[5870,5872,1],[8544,8578,1],[8581,8584,1],[12295,12321,26],[12322,12329,1],[12344,12346,1],[42726,42735,1],[65856,65908,1],[66369,66378,9],[66513,66517,1],[74752,74862,1]]),v(m,"No",[[178,179,1],[185,188,3],[189,190,1],[2548,2553,1],[2930,2935,1],[3056,3058,1],[3192,3198,1],[3416,3422,1],[3440,3448,1],[3882,3891,1],[4969,4988,1],[6128,6137,1],[6618,8304,1686],[8308,8313,1],[8320,8329,1],[8528,8543,1],[8585,9312,727],[9313,9371,1],[9450,9471,1],[10102,10131,1],[11517,12690,1173],[12691,12693,1],[12832,12841,1],[12872,12879,1],[12881,12895,1],[12928,12937,1],[12977,12991,1],[43056,43061,1],[65799,65843,1],[65909,65912,1],[65930,65931,1],[66273,66299,1],[66336,66339,1],[67672,67679,1],[67705,67711,1],[67751,67759,1],[67835,67839,1],[67862,67867,1],[68028,68029,1],[68032,68047,1],[68050,68095,1],[68160,68168,1],[68221,68222,1],[68253,68255,1],[68331,68335,1],[68440,68447,1],[68472,68479,1],[68521,68527,1],[68858,68863,1],[69216,69246,1],[69405,69414,1],[69457,69460,1],[69573,69579,1],[69714,69733,1],[70113,70132,1],[71482,71483,1],[71914,71922,1],[72794,72812,1],[73664,73684,1],[93019,93025,1],[93824,93846,1],[119488,119507,1],[119520,119539,1],[119648,119672,1],[125127,125135,1],[126065,126123,1],[126125,126127,1],[126129,126132,1],[126209,126253,1],[126255,126269,1],[127232,127244,1]]),v(m,"P",[[33,35,1],[37,42,1],[44,47,1],[58,59,1],[63,64,1],[91,93,1],[95,123,28],[125,161,36],[167,171,4],[182,183,1],[187,191,4],[894,903,9],[1370,1375,1],[1417,1418,1],[1470,1472,2],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3898,38],[3899,3901,1],[3973,4048,75],[4049,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5120,5742,622],[5787,5788,1],[5867,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8208,829],[8209,8231,1],[8240,8259,1],[8261,8273,1],[8275,8286,1],[8317,8318,1],[8333,8334,1],[8968,8971,1],[9001,9002,1],[10088,10101,1],[10181,10182,1],[10214,10223,1],[10627,10648,1],[10712,10715,1],[10748,10749,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11822,1],[11824,11855,1],[11858,11869,1],[12289,12291,1],[12296,12305,1],[12308,12319,1],[12336,12349,13],[12448,12539,91],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,64830,20819],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65121,1],[65123,65128,5],[65130,65131,1],[65281,65283,1],[65285,65290,1],[65292,65295,1],[65306,65307,1],[65311,65312,1],[65339,65341,1],[65343,65371,28],[65373,65375,2],[65376,65381,1],[65792,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69293,69461,168],[69462,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),v(m,"Pc",[[95,8255,8160],[8256,8276,20],[65075,65076,1],[65101,65103,1],[65343,65343,1]]),v(m,"Pd",[[45,1418,1373],[1470,5120,3650],[6150,8208,2058],[8209,8213,1],[11799,11802,3],[11834,11835,1],[11840,11869,29],[12316,12336,20],[12448,65073,52625],[65074,65112,38],[65123,65293,170],[69293,69293,1]]),v(m,"Pe",[[41,93,52],[125,3899,3774],[3901,5788,1887],[8262,8318,56],[8334,8969,635],[8971,9002,31],[10089,10101,2],[10182,10215,33],[10217,10223,2],[10628,10648,2],[10713,10715,2],[10749,11811,1062],[11813,11817,2],[11862,11868,2],[12297,12305,2],[12309,12315,2],[12318,12319,1],[64830,65048,218],[65078,65092,2],[65096,65114,18],[65116,65118,2],[65289,65341,52],[65373,65379,3]]),v(m,"Pf",[[187,8217,8030],[8221,8250,29],[11779,11781,2],[11786,11789,3],[11805,11809,4]]),v(m,"Pi",[[171,8216,8045],[8219,8220,1],[8223,8249,26],[11778,11780,2],[11785,11788,3],[11804,11808,4]]),v(m,"Po",[[33,35,1],[37,39,1],[42,46,2],[47,58,11],[59,63,4],[64,92,28],[161,167,6],[182,183,1],[191,894,703],[903,1370,467],[1371,1375,1],[1417,1472,55],[1475,1478,3],[1523,1524,1],[1545,1546,1],[1548,1549,1],[1563,1565,2],[1566,1567,1],[1642,1645,1],[1748,1792,44],[1793,1805,1],[2039,2041,1],[2096,2110,1],[2142,2404,262],[2405,2416,11],[2557,2678,121],[2800,3191,391],[3204,3572,368],[3663,3674,11],[3675,3844,169],[3845,3858,1],[3860,3973,113],[4048,4052,1],[4057,4058,1],[4170,4175,1],[4347,4960,613],[4961,4968,1],[5742,5867,125],[5868,5869,1],[5941,5942,1],[6100,6102,1],[6104,6106,1],[6144,6149,1],[6151,6154,1],[6468,6469,1],[6686,6687,1],[6816,6822,1],[6824,6829,1],[7002,7008,1],[7037,7038,1],[7164,7167,1],[7227,7231,1],[7294,7295,1],[7360,7367,1],[7379,8214,835],[8215,8224,9],[8225,8231,1],[8240,8248,1],[8251,8254,1],[8257,8259,1],[8263,8273,1],[8275,8277,2],[8278,8286,1],[11513,11516,1],[11518,11519,1],[11632,11776,144],[11777,11782,5],[11783,11784,1],[11787,11790,3],[11791,11798,1],[11800,11801,1],[11803,11806,3],[11807,11818,11],[11819,11822,1],[11824,11833,1],[11836,11839,1],[11841,11843,2],[11844,11855,1],[11858,11860,1],[12289,12291,1],[12349,12539,190],[42238,42239,1],[42509,42511,1],[42611,42622,11],[42738,42743,1],[43124,43127,1],[43214,43215,1],[43256,43258,1],[43260,43310,50],[43311,43359,48],[43457,43469,1],[43486,43487,1],[43612,43615,1],[43742,43743,1],[43760,43761,1],[44011,65040,21029],[65041,65046,1],[65049,65072,23],[65093,65094,1],[65097,65100,1],[65104,65106,1],[65108,65111,1],[65119,65121,1],[65128,65130,2],[65131,65281,150],[65282,65283,1],[65285,65287,1],[65290,65294,2],[65295,65306,11],[65307,65311,4],[65312,65340,28],[65377,65380,3],[65381,65792,411],[65793,65794,1],[66463,66512,49],[66927,67671,744],[67871,67903,32],[68176,68184,1],[68223,68336,113],[68337,68342,1],[68409,68415,1],[68505,68508,1],[69461,69465,1],[69510,69513,1],[69703,69709,1],[69819,69820,1],[69822,69825,1],[69952,69955,1],[70004,70005,1],[70085,70088,1],[70093,70107,14],[70109,70111,1],[70200,70205,1],[70313,70731,418],[70732,70735,1],[70746,70747,1],[70749,70854,105],[71105,71127,1],[71233,71235,1],[71264,71276,1],[71353,71484,131],[71485,71486,1],[71739,72004,265],[72005,72006,1],[72162,72255,93],[72256,72262,1],[72346,72348,1],[72350,72354,1],[72448,72457,1],[72769,72773,1],[72816,72817,1],[73463,73464,1],[73539,73551,1],[73727,74864,1137],[74865,74868,1],[77809,77810,1],[92782,92783,1],[92917,92983,66],[92984,92987,1],[92996,93847,851],[93848,93850,1],[94178,113823,19645],[121479,121483,1],[125278,125279,1]]),v(m,"Ps",[[40,91,51],[123,3898,3775],[3900,5787,1887],[8218,8222,4],[8261,8317,56],[8333,8968,635],[8970,9001,31],[10088,10100,2],[10181,10214,33],[10216,10222,2],[10627,10647,2],[10712,10714,2],[10748,11810,1062],[11812,11816,2],[11842,11861,19],[11863,11867,2],[12296,12304,2],[12308,12314,2],[12317,64831,52514],[65047,65077,30],[65079,65091,2],[65095,65113,18],[65115,65117,2],[65288,65339,51],[65371,65375,4],[65378,65378,1]]),v(m,"S",[[36,43,7],[60,62,1],[94,96,2],[124,126,2],[162,166,1],[168,169,1],[172,174,2],[175,177,1],[180,184,4],[215,247,32],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,1014,113],[1154,1421,267],[1422,1423,1],[1542,1544,1],[1547,1550,3],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2046,2047,1],[2184,2546,362],[2547,2554,7],[2555,2801,246],[2928,3059,131],[3060,3066,1],[3199,3407,208],[3449,3647,198],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6107,366],[6464,6622,158],[6623,6655,1],[7009,7018,1],[7028,7036,1],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8352,8384,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8472,1],[8478,8483,1],[8485,8489,2],[8494,8506,12],[8507,8512,5],[8513,8516,1],[8522,8525,1],[8527,8586,59],[8587,8592,5],[8593,8967,1],[8972,9e3,1],[9003,9254,1],[9280,9290,1],[9372,9449,1],[9472,10087,1],[10132,10180,1],[10183,10213,1],[10224,10626,1],[10649,10711,1],[10716,10747,1],[10750,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12443,12444,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43048,43051,1],[43062,43065,1],[43639,43641,1],[43867,43882,15],[43883,64297,20414],[64434,64450,1],[64832,64847,1],[64975,65020,45],[65021,65023,1],[65122,65124,2],[65125,65126,1],[65129,65284,155],[65291,65308,17],[65309,65310,1],[65342,65344,2],[65372,65374,2],[65504,65510,1],[65512,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,123647,432],[126124,126128,4],[126254,126704,450],[126705,126976,271],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),v(m,"Sc",[[36,162,126],[163,165,1],[1423,1547,124],[2046,2047,1],[2546,2547,1],[2555,2801,246],[3065,3647,582],[6107,8352,2245],[8353,8384,1],[43064,65020,21956],[65129,65284,155],[65504,65505,1],[65509,65510,1],[73693,73696,1],[123647,126128,2481]]),v(m,"Sk",[[94,96,2],[168,175,7],[180,184,4],[706,709,1],[722,735,1],[741,747,1],[749,751,2],[752,767,1],[885,900,15],[901,2184,1283],[8125,8127,2],[8128,8129,1],[8141,8143,1],[8157,8159,1],[8173,8175,1],[8189,8190,1],[12443,12444,1],[42752,42774,1],[42784,42785,1],[42889,42890,1],[43867,43882,15],[43883,64434,20551],[64435,64450,1],[65342,65344,2],[65507,127995,62488],[127996,127999,1]]),v(m,"Sm",[[43,60,17],[61,62,1],[124,126,2],[172,177,5],[215,247,32],[1014,1542,528],[1543,1544,1],[8260,8274,14],[8314,8316,1],[8330,8332,1],[8472,8512,40],[8513,8516,1],[8523,8592,69],[8593,8596,1],[8602,8603,1],[8608,8614,3],[8622,8654,32],[8655,8658,3],[8660,8692,32],[8693,8959,1],[8992,8993,1],[9084,9115,31],[9116,9139,1],[9180,9185,1],[9655,9665,10],[9720,9727,1],[9839,10176,337],[10177,10180,1],[10183,10213,1],[10224,10239,1],[10496,10626,1],[10649,10711,1],[10716,10747,1],[10750,11007,1],[11056,11076,1],[11079,11084,1],[64297,65122,825],[65124,65126,1],[65291,65308,17],[65309,65310,1],[65372,65374,2],[65506,65513,7],[65514,65516,1],[120513,120539,26],[120571,120597,26],[120629,120655,26],[120687,120713,26],[120745,120771,26],[126704,126705,1]]),v(m,"So",[[166,169,3],[174,176,2],[1154,1421,267],[1422,1550,128],[1551,1758,207],[1769,1789,20],[1790,2038,248],[2554,2928,374],[3059,3064,1],[3066,3199,133],[3407,3449,42],[3841,3843,1],[3859,3861,2],[3862,3863,1],[3866,3871,1],[3892,3896,2],[4030,4037,1],[4039,4044,1],[4046,4047,1],[4053,4056,1],[4254,4255,1],[5008,5017,1],[5741,6464,723],[6622,6655,1],[7009,7018,1],[7028,7036,1],[8448,8449,1],[8451,8454,1],[8456,8457,1],[8468,8470,2],[8471,8478,7],[8479,8483,1],[8485,8489,2],[8494,8506,12],[8507,8522,15],[8524,8525,1],[8527,8586,59],[8587,8597,10],[8598,8601,1],[8604,8607,1],[8609,8610,1],[8612,8613,1],[8615,8621,1],[8623,8653,1],[8656,8657,1],[8659,8661,2],[8662,8691,1],[8960,8967,1],[8972,8991,1],[8994,9e3,1],[9003,9083,1],[9085,9114,1],[9140,9179,1],[9186,9254,1],[9280,9290,1],[9372,9449,1],[9472,9654,1],[9656,9664,1],[9666,9719,1],[9728,9838,1],[9840,10087,1],[10132,10175,1],[10240,10495,1],[11008,11055,1],[11077,11078,1],[11085,11123,1],[11126,11157,1],[11159,11263,1],[11493,11498,1],[11856,11857,1],[11904,11929,1],[11931,12019,1],[12032,12245,1],[12272,12287,1],[12292,12306,14],[12307,12320,13],[12342,12343,1],[12350,12351,1],[12688,12689,1],[12694,12703,1],[12736,12771,1],[12783,12800,17],[12801,12830,1],[12842,12871,1],[12880,12896,16],[12897,12927,1],[12938,12976,1],[12992,13311,1],[19904,19967,1],[42128,42182,1],[43048,43051,1],[43062,43063,1],[43065,43639,574],[43640,43641,1],[64832,64847,1],[64975,65021,46],[65022,65023,1],[65508,65512,4],[65517,65518,1],[65532,65533,1],[65847,65855,1],[65913,65929,1],[65932,65934,1],[65936,65948,1],[65952,66e3,48],[66001,66044,1],[67703,67704,1],[68296,71487,3191],[73685,73692,1],[73697,73713,1],[92988,92991,1],[92997,113820,20823],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119140,1],[119146,119148,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119296,119361,1],[119365,119552,187],[119553,119638,1],[120832,121343,1],[121399,121402,1],[121453,121460,1],[121462,121475,1],[121477,121478,1],[123215,126124,2909],[126254,126976,722],[126977,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127245,127405,1],[127462,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,127994,1],[128e3,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1]]),v(m,"Z",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8232,8233,1],[8239,8287,48],[12288,12288,1]]),v(m,"Zl",[[8232,8232,1]]),v(m,"Zp",[[8233,8233,1]]),v(m,"Zs",[[32,160,128],[5760,8192,2432],[8193,8202,1],[8239,8287,48],[12288,12288,1]]),v(m,"Adlam",[[125184,125259,1],[125264,125273,1],[125278,125279,1]]),v(m,"Ahom",[[71424,71450,1],[71453,71467,1],[71472,71494,1]]),v(m,"Anatolian_Hieroglyphs",[[82944,83526,1]]),v(m,"Arabic",[[1536,1540,1],[1542,1547,1],[1549,1562,1],[1564,1566,1],[1568,1599,1],[1601,1610,1],[1622,1647,1],[1649,1756,1],[1758,1791,1],[1872,1919,1],[2160,2190,1],[2192,2193,1],[2200,2273,1],[2275,2303,1],[64336,64450,1],[64467,64829,1],[64832,64911,1],[64914,64967,1],[64975,65008,33],[65009,65023,1],[65136,65140,1],[65142,65276,1],[69216,69246,1],[69373,69375,1],[126464,126467,1],[126469,126495,1],[126497,126498,1],[126500,126503,3],[126505,126514,1],[126516,126519,1],[126521,126523,2],[126530,126535,5],[126537,126541,2],[126542,126543,1],[126545,126546,1],[126548,126551,3],[126553,126561,2],[126562,126564,2],[126567,126570,1],[126572,126578,1],[126580,126583,1],[126585,126588,1],[126590,126592,2],[126593,126601,1],[126603,126619,1],[126625,126627,1],[126629,126633,1],[126635,126651,1],[126704,126705,1]]),v(m,"Armenian",[[1329,1366,1],[1369,1418,1],[1421,1423,1],[64275,64279,1]]),v(m,"Avestan",[[68352,68405,1],[68409,68415,1]]),v(m,"Balinese",[[6912,6988,1],[6992,7038,1]]),v(m,"Bamum",[[42656,42743,1],[92160,92728,1]]),v(m,"Bassa_Vah",[[92880,92909,1],[92912,92917,1]]),v(m,"Batak",[[7104,7155,1],[7164,7167,1]]),v(m,"Bengali",[[2432,2435,1],[2437,2444,1],[2447,2448,1],[2451,2472,1],[2474,2480,1],[2482,2486,4],[2487,2489,1],[2492,2500,1],[2503,2504,1],[2507,2510,1],[2519,2524,5],[2525,2527,2],[2528,2531,1],[2534,2558,1]]),v(m,"Bhaiksuki",[[72704,72712,1],[72714,72758,1],[72760,72773,1],[72784,72812,1]]),v(m,"Bopomofo",[[746,747,1],[12549,12591,1],[12704,12735,1]]),v(m,"Brahmi",[[69632,69709,1],[69714,69749,1],[69759,69759,1]]),v(m,"Braille",[[10240,10495,1]]),v(m,"Buginese",[[6656,6683,1],[6686,6687,1]]),v(m,"Buhid",[[5952,5971,1]]),v(m,"Canadian_Aboriginal",[[5120,5759,1],[6320,6389,1],[72368,72383,1]]),v(m,"Carian",[[66208,66256,1]]),v(m,"Caucasian_Albanian",[[66864,66915,1],[66927,66927,1]]),v(m,"Chakma",[[69888,69940,1],[69942,69959,1]]),v(m,"Cham",[[43520,43574,1],[43584,43597,1],[43600,43609,1],[43612,43615,1]]),v(m,"Cherokee",[[5024,5109,1],[5112,5117,1],[43888,43967,1]]),v(m,"Chorasmian",[[69552,69579,1]]),v(m,"Common",[[0,64,1],[91,96,1],[123,169,1],[171,185,1],[187,191,1],[215,247,32],[697,735,1],[741,745,1],[748,767,1],[884,894,10],[901,903,2],[1541,1548,7],[1563,1567,4],[1600,1757,157],[2274,2404,130],[2405,3647,1242],[4053,4056,1],[4347,5867,1520],[5868,5869,1],[5941,5942,1],[6146,6147,1],[6149,7379,1230],[7393,7401,8],[7402,7404,1],[7406,7411,1],[7413,7415,1],[7418,8192,774],[8193,8203,1],[8206,8292,1],[8294,8304,1],[8308,8318,1],[8320,8334,1],[8352,8384,1],[8448,8485,1],[8487,8489,1],[8492,8497,1],[8499,8525,1],[8527,8543,1],[8585,8587,1],[8592,9254,1],[9280,9290,1],[9312,10239,1],[10496,11123,1],[11126,11157,1],[11159,11263,1],[11776,11869,1],[12272,12292,1],[12294,12296,2],[12297,12320,1],[12336,12343,1],[12348,12351,1],[12443,12444,1],[12448,12539,91],[12540,12688,148],[12689,12703,1],[12736,12771,1],[12783,12832,49],[12833,12895,1],[12927,13007,1],[13055,13144,89],[13145,13311,1],[19904,19967,1],[42752,42785,1],[42888,42890,1],[43056,43065,1],[43310,43471,161],[43867,43882,15],[43883,64830,20947],[64831,65040,209],[65041,65049,1],[65072,65106,1],[65108,65126,1],[65128,65131,1],[65279,65281,2],[65282,65312,1],[65339,65344,1],[65371,65381,1],[65392,65438,46],[65439,65504,65],[65505,65510,1],[65512,65518,1],[65529,65533,1],[65792,65794,1],[65799,65843,1],[65847,65855,1],[65936,65948,1],[66e3,66044,1],[66273,66299,1],[113824,113827,1],[118608,118723,1],[118784,119029,1],[119040,119078,1],[119081,119142,1],[119146,119162,1],[119171,119172,1],[119180,119209,1],[119214,119274,1],[119488,119507,1],[119520,119539,1],[119552,119638,1],[119648,119672,1],[119808,119892,1],[119894,119964,1],[119966,119967,1],[119970,119973,3],[119974,119977,3],[119978,119980,1],[119982,119993,1],[119995,119997,2],[119998,120003,1],[120005,120069,1],[120071,120074,1],[120077,120084,1],[120086,120092,1],[120094,120121,1],[120123,120126,1],[120128,120132,1],[120134,120138,4],[120139,120144,1],[120146,120485,1],[120488,120779,1],[120782,120831,1],[126065,126132,1],[126209,126269,1],[126976,127019,1],[127024,127123,1],[127136,127150,1],[127153,127167,1],[127169,127183,1],[127185,127221,1],[127232,127405,1],[127462,127487,1],[127489,127490,1],[127504,127547,1],[127552,127560,1],[127568,127569,1],[127584,127589,1],[127744,128727,1],[128732,128748,1],[128752,128764,1],[128768,128886,1],[128891,128985,1],[128992,129003,1],[129008,129024,16],[129025,129035,1],[129040,129095,1],[129104,129113,1],[129120,129159,1],[129168,129197,1],[129200,129201,1],[129280,129619,1],[129632,129645,1],[129648,129660,1],[129664,129672,1],[129680,129725,1],[129727,129733,1],[129742,129755,1],[129760,129768,1],[129776,129784,1],[129792,129938,1],[129940,129994,1],[130032,130041,1],[917505,917536,31],[917537,917631,1]]),v(m,"foldCommon",[[924,956,32]]),v(m,"Coptic",[[994,1007,1],[11392,11507,1],[11513,11519,1]]),v(m,"Cuneiform",[[73728,74649,1],[74752,74862,1],[74864,74868,1],[74880,75075,1]]),v(m,"Cypriot",[[67584,67589,1],[67592,67594,2],[67595,67637,1],[67639,67640,1],[67644,67647,3]]),v(m,"Cypro_Minoan",[[77712,77810,1]]),v(m,"Cyrillic",[[1024,1156,1],[1159,1327,1],[7296,7304,1],[7467,7544,77],[11744,11775,1],[42560,42655,1],[65070,65071,1],[122928,122989,1],[123023,123023,1]]),v(m,"Deseret",[[66560,66639,1]]),v(m,"Devanagari",[[2304,2384,1],[2389,2403,1],[2406,2431,1],[43232,43263,1],[72448,72457,1]]),v(m,"Dives_Akuru",[[71936,71942,1],[71945,71948,3],[71949,71955,1],[71957,71958,1],[71960,71989,1],[71991,71992,1],[71995,72006,1],[72016,72025,1]]),v(m,"Dogra",[[71680,71739,1]]),v(m,"Duployan",[[113664,113770,1],[113776,113788,1],[113792,113800,1],[113808,113817,1],[113820,113823,1]]),v(m,"Egyptian_Hieroglyphs",[[77824,78933,1]]),v(m,"Elbasan",[[66816,66855,1]]),v(m,"Elymaic",[[69600,69622,1]]),v(m,"Ethiopic",[[4608,4680,1],[4682,4685,1],[4688,4694,1],[4696,4698,2],[4699,4701,1],[4704,4744,1],[4746,4749,1],[4752,4784,1],[4786,4789,1],[4792,4798,1],[4800,4802,2],[4803,4805,1],[4808,4822,1],[4824,4880,1],[4882,4885,1],[4888,4954,1],[4957,4988,1],[4992,5017,1],[11648,11670,1],[11680,11686,1],[11688,11694,1],[11696,11702,1],[11704,11710,1],[11712,11718,1],[11720,11726,1],[11728,11734,1],[11736,11742,1],[43777,43782,1],[43785,43790,1],[43793,43798,1],[43808,43814,1],[43816,43822,1],[124896,124902,1],[124904,124907,1],[124909,124910,1],[124912,124926,1]]),v(m,"Georgian",[[4256,4293,1],[4295,4301,6],[4304,4346,1],[4348,4351,1],[7312,7354,1],[7357,7359,1],[11520,11557,1],[11559,11565,6]]),v(m,"Glagolitic",[[11264,11359,1],[122880,122886,1],[122888,122904,1],[122907,122913,1],[122915,122916,1],[122918,122922,1]]),v(m,"Gothic",[[66352,66378,1]]),v(m,"Grantha",[[70400,70403,1],[70405,70412,1],[70415,70416,1],[70419,70440,1],[70442,70448,1],[70450,70451,1],[70453,70457,1],[70460,70468,1],[70471,70472,1],[70475,70477,1],[70480,70487,7],[70493,70499,1],[70502,70508,1],[70512,70516,1]]),v(m,"Greek",[[880,883,1],[885,887,1],[890,893,1],[895,900,5],[902,904,2],[905,906,1],[908,910,2],[911,929,1],[931,993,1],[1008,1023,1],[7462,7466,1],[7517,7521,1],[7526,7530,1],[7615,7936,321],[7937,7957,1],[7960,7965,1],[7968,8005,1],[8008,8013,1],[8016,8023,1],[8025,8031,2],[8032,8061,1],[8064,8116,1],[8118,8132,1],[8134,8147,1],[8150,8155,1],[8157,8175,1],[8178,8180,1],[8182,8190,1],[8486,43877,35391],[65856,65934,1],[65952,119296,53344],[119297,119365,1]]),v(m,"foldGreek",[[181,837,656]]),v(m,"Gujarati",[[2689,2691,1],[2693,2701,1],[2703,2705,1],[2707,2728,1],[2730,2736,1],[2738,2739,1],[2741,2745,1],[2748,2757,1],[2759,2761,1],[2763,2765,1],[2768,2784,16],[2785,2787,1],[2790,2801,1],[2809,2815,1]]),v(m,"Gunjala_Gondi",[[73056,73061,1],[73063,73064,1],[73066,73102,1],[73104,73105,1],[73107,73112,1],[73120,73129,1]]),v(m,"Gurmukhi",[[2561,2563,1],[2565,2570,1],[2575,2576,1],[2579,2600,1],[2602,2608,1],[2610,2611,1],[2613,2614,1],[2616,2617,1],[2620,2622,2],[2623,2626,1],[2631,2632,1],[2635,2637,1],[2641,2649,8],[2650,2652,1],[2654,2662,8],[2663,2678,1]]),v(m,"Han",[[11904,11929,1],[11931,12019,1],[12032,12245,1],[12293,12295,2],[12321,12329,1],[12344,12347,1],[13312,19903,1],[19968,40959,1],[63744,64109,1],[64112,64217,1],[94178,94179,1],[94192,94193,1],[131072,173791,1],[173824,177977,1],[177984,178205,1],[178208,183969,1],[183984,191456,1],[191472,192093,1],[194560,195101,1],[196608,201546,1],[201552,205743,1]]),v(m,"Hangul",[[4352,4607,1],[12334,12335,1],[12593,12686,1],[12800,12830,1],[12896,12926,1],[43360,43388,1],[44032,55203,1],[55216,55238,1],[55243,55291,1],[65440,65470,1],[65474,65479,1],[65482,65487,1],[65490,65495,1],[65498,65500,1]]),v(m,"Hanifi_Rohingya",[[68864,68903,1],[68912,68921,1]]),v(m,"Hanunoo",[[5920,5940,1]]),v(m,"Hatran",[[67808,67826,1],[67828,67829,1],[67835,67839,1]]),v(m,"Hebrew",[[1425,1479,1],[1488,1514,1],[1519,1524,1],[64285,64310,1],[64312,64316,1],[64318,64320,2],[64321,64323,2],[64324,64326,2],[64327,64335,1]]),v(m,"Hiragana",[[12353,12438,1],[12445,12447,1],[110593,110879,1],[110898,110928,30],[110929,110930,1],[127488,127488,1]]),v(m,"Imperial_Aramaic",[[67648,67669,1],[67671,67679,1]]),v(m,"Inherited",[[768,879,1],[1157,1158,1],[1611,1621,1],[1648,2385,737],[2386,2388,1],[6832,6862,1],[7376,7378,1],[7380,7392,1],[7394,7400,1],[7405,7412,7],[7416,7417,1],[7616,7679,1],[8204,8205,1],[8400,8432,1],[12330,12333,1],[12441,12442,1],[65024,65039,1],[65056,65069,1],[66045,66272,227],[70459,118528,48069],[118529,118573,1],[118576,118598,1],[119143,119145,1],[119163,119170,1],[119173,119179,1],[119210,119213,1],[917760,917999,1]]),v(m,"foldInherited",[[921,953,32],[8126,8126,1]]),v(m,"Inscriptional_Pahlavi",[[68448,68466,1],[68472,68479,1]]),v(m,"Inscriptional_Parthian",[[68416,68437,1],[68440,68447,1]]),v(m,"Javanese",[[43392,43469,1],[43472,43481,1],[43486,43487,1]]),v(m,"Kaithi",[[69760,69826,1],[69837,69837,1]]),v(m,"Kannada",[[3200,3212,1],[3214,3216,1],[3218,3240,1],[3242,3251,1],[3253,3257,1],[3260,3268,1],[3270,3272,1],[3274,3277,1],[3285,3286,1],[3293,3294,1],[3296,3299,1],[3302,3311,1],[3313,3315,1]]),v(m,"Katakana",[[12449,12538,1],[12541,12543,1],[12784,12799,1],[13008,13054,1],[13056,13143,1],[65382,65391,1],[65393,65437,1],[110576,110579,1],[110581,110587,1],[110589,110590,1],[110592,110880,288],[110881,110882,1],[110933,110948,15],[110949,110951,1]]),v(m,"Kawi",[[73472,73488,1],[73490,73530,1],[73534,73561,1]]),v(m,"Kayah_Li",[[43264,43309,1],[43311,43311,1]]),v(m,"Kharoshthi",[[68096,68099,1],[68101,68102,1],[68108,68115,1],[68117,68119,1],[68121,68149,1],[68152,68154,1],[68159,68168,1],[68176,68184,1]]),v(m,"Khitan_Small_Script",[[94180,101120,6940],[101121,101589,1]]),v(m,"Khmer",[[6016,6109,1],[6112,6121,1],[6128,6137,1],[6624,6655,1]]),v(m,"Khojki",[[70144,70161,1],[70163,70209,1]]),v(m,"Khudawadi",[[70320,70378,1],[70384,70393,1]]),v(m,"Lao",[[3713,3714,1],[3716,3718,2],[3719,3722,1],[3724,3747,1],[3749,3751,2],[3752,3773,1],[3776,3780,1],[3782,3784,2],[3785,3790,1],[3792,3801,1],[3804,3807,1]]),v(m,"Latin",[[65,90,1],[97,122,1],[170,186,16],[192,214,1],[216,246,1],[248,696,1],[736,740,1],[7424,7461,1],[7468,7516,1],[7522,7525,1],[7531,7543,1],[7545,7614,1],[7680,7935,1],[8305,8319,14],[8336,8348,1],[8490,8491,1],[8498,8526,28],[8544,8584,1],[11360,11391,1],[42786,42887,1],[42891,42954,1],[42960,42961,1],[42963,42965,2],[42966,42969,1],[42994,43007,1],[43824,43866,1],[43868,43876,1],[43878,43881,1],[64256,64262,1],[65313,65338,1],[65345,65370,1],[67456,67461,1],[67463,67504,1],[67506,67514,1],[122624,122654,1],[122661,122666,1]]),v(m,"Lepcha",[[7168,7223,1],[7227,7241,1],[7245,7247,1]]),v(m,"Limbu",[[6400,6430,1],[6432,6443,1],[6448,6459,1],[6464,6468,4],[6469,6479,1]]),v(m,"Linear_A",[[67072,67382,1],[67392,67413,1],[67424,67431,1]]),v(m,"Linear_B",[[65536,65547,1],[65549,65574,1],[65576,65594,1],[65596,65597,1],[65599,65613,1],[65616,65629,1],[65664,65786,1]]),v(m,"Lisu",[[42192,42239,1],[73648,73648,1]]),v(m,"Lycian",[[66176,66204,1]]),v(m,"Lydian",[[67872,67897,1],[67903,67903,1]]),v(m,"Mahajani",[[69968,70006,1]]),v(m,"Makasar",[[73440,73464,1]]),v(m,"Malayalam",[[3328,3340,1],[3342,3344,1],[3346,3396,1],[3398,3400,1],[3402,3407,1],[3412,3427,1],[3430,3455,1]]),v(m,"Mandaic",[[2112,2139,1],[2142,2142,1]]),v(m,"Manichaean",[[68288,68326,1],[68331,68342,1]]),v(m,"Marchen",[[72816,72847,1],[72850,72871,1],[72873,72886,1]]),v(m,"Masaram_Gondi",[[72960,72966,1],[72968,72969,1],[72971,73014,1],[73018,73020,2],[73021,73023,2],[73024,73031,1],[73040,73049,1]]),v(m,"Medefaidrin",[[93760,93850,1]]),v(m,"Meetei_Mayek",[[43744,43766,1],[43968,44013,1],[44016,44025,1]]),v(m,"Mende_Kikakui",[[124928,125124,1],[125127,125142,1]]),v(m,"Meroitic_Cursive",[[68e3,68023,1],[68028,68047,1],[68050,68095,1]]),v(m,"Meroitic_Hieroglyphs",[[67968,67999,1]]),v(m,"Miao",[[93952,94026,1],[94031,94087,1],[94095,94111,1]]),v(m,"Modi",[[71168,71236,1],[71248,71257,1]]),v(m,"Mongolian",[[6144,6145,1],[6148,6150,2],[6151,6169,1],[6176,6264,1],[6272,6314,1],[71264,71276,1]]),v(m,"Mro",[[92736,92766,1],[92768,92777,1],[92782,92783,1]]),v(m,"Multani",[[70272,70278,1],[70280,70282,2],[70283,70285,1],[70287,70301,1],[70303,70313,1]]),v(m,"Myanmar",[[4096,4255,1],[43488,43518,1],[43616,43647,1]]),v(m,"Nabataean",[[67712,67742,1],[67751,67759,1]]),v(m,"Nag_Mundari",[[124112,124153,1]]),v(m,"Nandinagari",[[72096,72103,1],[72106,72151,1],[72154,72164,1]]),v(m,"New_Tai_Lue",[[6528,6571,1],[6576,6601,1],[6608,6618,1],[6622,6623,1]]),v(m,"Newa",[[70656,70747,1],[70749,70753,1]]),v(m,"Nko",[[1984,2042,1],[2045,2047,1]]),v(m,"Nushu",[[94177,110960,16783],[110961,111355,1]]),v(m,"Nyiakeng_Puachue_Hmong",[[123136,123180,1],[123184,123197,1],[123200,123209,1],[123214,123215,1]]),v(m,"Ogham",[[5760,5788,1]]),v(m,"Ol_Chiki",[[7248,7295,1]]),v(m,"Old_Hungarian",[[68736,68786,1],[68800,68850,1],[68858,68863,1]]),v(m,"Old_Italic",[[66304,66339,1],[66349,66351,1]]),v(m,"Old_North_Arabian",[[68224,68255,1]]),v(m,"Old_Permic",[[66384,66426,1]]),v(m,"Old_Persian",[[66464,66499,1],[66504,66517,1]]),v(m,"Old_Sogdian",[[69376,69415,1]]),v(m,"Old_South_Arabian",[[68192,68223,1]]),v(m,"Old_Turkic",[[68608,68680,1]]),v(m,"Old_Uyghur",[[69488,69513,1]]),v(m,"Oriya",[[2817,2819,1],[2821,2828,1],[2831,2832,1],[2835,2856,1],[2858,2864,1],[2866,2867,1],[2869,2873,1],[2876,2884,1],[2887,2888,1],[2891,2893,1],[2901,2903,1],[2908,2909,1],[2911,2915,1],[2918,2935,1]]),v(m,"Osage",[[66736,66771,1],[66776,66811,1]]),v(m,"Osmanya",[[66688,66717,1],[66720,66729,1]]),v(m,"Pahawh_Hmong",[[92928,92997,1],[93008,93017,1],[93019,93025,1],[93027,93047,1],[93053,93071,1]]),v(m,"Palmyrene",[[67680,67711,1]]),v(m,"Pau_Cin_Hau",[[72384,72440,1]]),v(m,"Phags_Pa",[[43072,43127,1]]),v(m,"Phoenician",[[67840,67867,1],[67871,67871,1]]),v(m,"Psalter_Pahlavi",[[68480,68497,1],[68505,68508,1],[68521,68527,1]]),v(m,"Rejang",[[43312,43347,1],[43359,43359,1]]),v(m,"Runic",[[5792,5866,1],[5870,5880,1]]),v(m,"Samaritan",[[2048,2093,1],[2096,2110,1]]),v(m,"Saurashtra",[[43136,43205,1],[43214,43225,1]]),v(m,"Sharada",[[70016,70111,1]]),v(m,"Shavian",[[66640,66687,1]]),v(m,"Siddham",[[71040,71093,1],[71096,71133,1]]),v(m,"SignWriting",[[120832,121483,1],[121499,121503,1],[121505,121519,1]]),v(m,"Sinhala",[[3457,3459,1],[3461,3478,1],[3482,3505,1],[3507,3515,1],[3517,3520,3],[3521,3526,1],[3530,3535,5],[3536,3540,1],[3542,3544,2],[3545,3551,1],[3558,3567,1],[3570,3572,1],[70113,70132,1]]),v(m,"Sogdian",[[69424,69465,1]]),v(m,"Sora_Sompeng",[[69840,69864,1],[69872,69881,1]]),v(m,"Soyombo",[[72272,72354,1]]),v(m,"Sundanese",[[7040,7103,1],[7360,7367,1]]),v(m,"Syloti_Nagri",[[43008,43052,1]]),v(m,"Syriac",[[1792,1805,1],[1807,1866,1],[1869,1871,1],[2144,2154,1]]),v(m,"Tagalog",[[5888,5909,1],[5919,5919,1]]),v(m,"Tagbanwa",[[5984,5996,1],[5998,6e3,1],[6002,6003,1]]),v(m,"Tai_Le",[[6480,6509,1],[6512,6516,1]]),v(m,"Tai_Tham",[[6688,6750,1],[6752,6780,1],[6783,6793,1],[6800,6809,1],[6816,6829,1]]),v(m,"Tai_Viet",[[43648,43714,1],[43739,43743,1]]),v(m,"Takri",[[71296,71353,1],[71360,71369,1]]),v(m,"Tamil",[[2946,2947,1],[2949,2954,1],[2958,2960,1],[2962,2965,1],[2969,2970,1],[2972,2974,2],[2975,2979,4],[2980,2984,4],[2985,2986,1],[2990,3001,1],[3006,3010,1],[3014,3016,1],[3018,3021,1],[3024,3031,7],[3046,3066,1],[73664,73713,1],[73727,73727,1]]),v(m,"Tangsa",[[92784,92862,1],[92864,92873,1]]),v(m,"Tangut",[[94176,94208,32],[94209,100343,1],[100352,101119,1],[101632,101640,1]]),v(m,"Telugu",[[3072,3084,1],[3086,3088,1],[3090,3112,1],[3114,3129,1],[3132,3140,1],[3142,3144,1],[3146,3149,1],[3157,3158,1],[3160,3162,1],[3165,3168,3],[3169,3171,1],[3174,3183,1],[3191,3199,1]]),v(m,"Thaana",[[1920,1969,1]]),v(m,"Thai",[[3585,3642,1],[3648,3675,1]]),v(m,"Tibetan",[[3840,3911,1],[3913,3948,1],[3953,3991,1],[3993,4028,1],[4030,4044,1],[4046,4052,1],[4057,4058,1]]),v(m,"Tifinagh",[[11568,11623,1],[11631,11632,1],[11647,11647,1]]),v(m,"Tirhuta",[[70784,70855,1],[70864,70873,1]]),v(m,"Toto",[[123536,123566,1]]),v(m,"Ugaritic",[[66432,66461,1],[66463,66463,1]]),v(m,"Vai",[[42240,42539,1]]),v(m,"Vithkuqi",[[66928,66938,1],[66940,66954,1],[66956,66962,1],[66964,66965,1],[66967,66977,1],[66979,66993,1],[66995,67001,1],[67003,67004,1]]),v(m,"Wancho",[[123584,123641,1],[123647,123647,1]]),v(m,"Warang_Citi",[[71840,71922,1],[71935,71935,1]]),v(m,"Yezidi",[[69248,69289,1],[69291,69293,1],[69296,69297,1]]),v(m,"Yi",[[40960,42124,1],[42128,42182,1]]),v(m,"Zanabazar_Square",[[72192,72263,1]]),v(m,"CATEGORIES",new Map([["C",m.C],["Cc",m.Cc],["Cf",m.Cf],["Co",m.Co],["Cs",m.Cs],["L",m.L],["Ll",m.Ll],["Lm",m.Lm],["Lo",m.Lo],["Lt",m.Lt],["Lu",m.Lu],["M",m.M],["Mc",m.Mc],["Me",m.Me],["Mn",m.Mn],["N",m.N],["Nd",m.Nd],["Nl",m.Nl],["No",m.No],["P",m.P],["Pc",m.Pc],["Pd",m.Pd],["Pe",m.Pe],["Pf",m.Pf],["Pi",m.Pi],["Po",m.Po],["Ps",m.Ps],["S",m.S],["Sc",m.Sc],["Sk",m.Sk],["Sm",m.Sm],["So",m.So],["Z",m.Z],["Zl",m.Zl],["Zp",m.Zp],["Zs",m.Zs]])),v(m,"SCRIPTS",new Map([["Adlam",m.Adlam],["Ahom",m.Ahom],["Anatolian_Hieroglyphs",m.Anatolian_Hieroglyphs],["Arabic",m.Arabic],["Armenian",m.Armenian],["Avestan",m.Avestan],["Balinese",m.Balinese],["Bamum",m.Bamum],["Bassa_Vah",m.Bassa_Vah],["Batak",m.Batak],["Bengali",m.Bengali],["Bhaiksuki",m.Bhaiksuki],["Bopomofo",m.Bopomofo],["Brahmi",m.Brahmi],["Braille",m.Braille],["Buginese",m.Buginese],["Buhid",m.Buhid],["Canadian_Aboriginal",m.Canadian_Aboriginal],["Carian",m.Carian],["Caucasian_Albanian",m.Caucasian_Albanian],["Chakma",m.Chakma],["Cham",m.Cham],["Cherokee",m.Cherokee],["Chorasmian",m.Chorasmian],["Common",m.Common],["Coptic",m.Coptic],["Cuneiform",m.Cuneiform],["Cypriot",m.Cypriot],["Cypro_Minoan",m.Cypro_Minoan],["Cyrillic",m.Cyrillic],["Deseret",m.Deseret],["Devanagari",m.Devanagari],["Dives_Akuru",m.Dives_Akuru],["Dogra",m.Dogra],["Duployan",m.Duployan],["Egyptian_Hieroglyphs",m.Egyptian_Hieroglyphs],["Elbasan",m.Elbasan],["Elymaic",m.Elymaic],["Ethiopic",m.Ethiopic],["Georgian",m.Georgian],["Glagolitic",m.Glagolitic],["Gothic",m.Gothic],["Grantha",m.Grantha],["Greek",m.Greek],["Gujarati",m.Gujarati],["Gunjala_Gondi",m.Gunjala_Gondi],["Gurmukhi",m.Gurmukhi],["Han",m.Han],["Hangul",m.Hangul],["Hanifi_Rohingya",m.Hanifi_Rohingya],["Hanunoo",m.Hanunoo],["Hatran",m.Hatran],["Hebrew",m.Hebrew],["Hiragana",m.Hiragana],["Imperial_Aramaic",m.Imperial_Aramaic],["Inherited",m.Inherited],["Inscriptional_Pahlavi",m.Inscriptional_Pahlavi],["Inscriptional_Parthian",m.Inscriptional_Parthian],["Javanese",m.Javanese],["Kaithi",m.Kaithi],["Kannada",m.Kannada],["Katakana",m.Katakana],["Kawi",m.Kawi],["Kayah_Li",m.Kayah_Li],["Kharoshthi",m.Kharoshthi],["Khitan_Small_Script",m.Khitan_Small_Script],["Khmer",m.Khmer],["Khojki",m.Khojki],["Khudawadi",m.Khudawadi],["Lao",m.Lao],["Latin",m.Latin],["Lepcha",m.Lepcha],["Limbu",m.Limbu],["Linear_A",m.Linear_A],["Linear_B",m.Linear_B],["Lisu",m.Lisu],["Lycian",m.Lycian],["Lydian",m.Lydian],["Mahajani",m.Mahajani],["Makasar",m.Makasar],["Malayalam",m.Malayalam],["Mandaic",m.Mandaic],["Manichaean",m.Manichaean],["Marchen",m.Marchen],["Masaram_Gondi",m.Masaram_Gondi],["Medefaidrin",m.Medefaidrin],["Meetei_Mayek",m.Meetei_Mayek],["Mende_Kikakui",m.Mende_Kikakui],["Meroitic_Cursive",m.Meroitic_Cursive],["Meroitic_Hieroglyphs",m.Meroitic_Hieroglyphs],["Miao",m.Miao],["Modi",m.Modi],["Mongolian",m.Mongolian],["Mro",m.Mro],["Multani",m.Multani],["Myanmar",m.Myanmar],["Nabataean",m.Nabataean],["Nag_Mundari",m.Nag_Mundari],["Nandinagari",m.Nandinagari],["New_Tai_Lue",m.New_Tai_Lue],["Newa",m.Newa],["Nko",m.Nko],["Nushu",m.Nushu],["Nyiakeng_Puachue_Hmong",m.Nyiakeng_Puachue_Hmong],["Ogham",m.Ogham],["Ol_Chiki",m.Ol_Chiki],["Old_Hungarian",m.Old_Hungarian],["Old_Italic",m.Old_Italic],["Old_North_Arabian",m.Old_North_Arabian],["Old_Permic",m.Old_Permic],["Old_Persian",m.Old_Persian],["Old_Sogdian",m.Old_Sogdian],["Old_South_Arabian",m.Old_South_Arabian],["Old_Turkic",m.Old_Turkic],["Old_Uyghur",m.Old_Uyghur],["Oriya",m.Oriya],["Osage",m.Osage],["Osmanya",m.Osmanya],["Pahawh_Hmong",m.Pahawh_Hmong],["Palmyrene",m.Palmyrene],["Pau_Cin_Hau",m.Pau_Cin_Hau],["Phags_Pa",m.Phags_Pa],["Phoenician",m.Phoenician],["Psalter_Pahlavi",m.Psalter_Pahlavi],["Rejang",m.Rejang],["Runic",m.Runic],["Samaritan",m.Samaritan],["Saurashtra",m.Saurashtra],["Sharada",m.Sharada],["Shavian",m.Shavian],["Siddham",m.Siddham],["SignWriting",m.SignWriting],["Sinhala",m.Sinhala],["Sogdian",m.Sogdian],["Sora_Sompeng",m.Sora_Sompeng],["Soyombo",m.Soyombo],["Sundanese",m.Sundanese],["Syloti_Nagri",m.Syloti_Nagri],["Syriac",m.Syriac],["Tagalog",m.Tagalog],["Tagbanwa",m.Tagbanwa],["Tai_Le",m.Tai_Le],["Tai_Tham",m.Tai_Tham],["Tai_Viet",m.Tai_Viet],["Takri",m.Takri],["Tamil",m.Tamil],["Tangsa",m.Tangsa],["Tangut",m.Tangut],["Telugu",m.Telugu],["Thaana",m.Thaana],["Thai",m.Thai],["Tibetan",m.Tibetan],["Tifinagh",m.Tifinagh],["Tirhuta",m.Tirhuta],["Toto",m.Toto],["Ugaritic",m.Ugaritic],["Vai",m.Vai],["Vithkuqi",m.Vithkuqi],["Wancho",m.Wancho],["Warang_Citi",m.Warang_Citi],["Yezidi",m.Yezidi],["Yi",m.Yi],["Zanabazar_Square",m.Zanabazar_Square]])),v(m,"FOLD_CATEGORIES",new Map([["L",m.foldL],["Ll",m.foldLl],["Lt",m.foldLt],["Lu",m.foldLu],["M",m.foldM],["Mn",m.foldMn]])),v(m,"FOLD_SCRIPT",new Map([["Common",m.foldCommon],["Greek",m.foldGreek],["Inherited",m.foldInherited]]));let Xe=m;class se{static is32(e,t){let s=0,r=e.length;for(;s<r;){let i=s+Math.floor((r-s)/2),a=e[i];if(a[0]<=t&&t<=a[1])return(t-a[0])%a[2]===0;t<a[0]?r=i:s=i+1}return!1}static is(e,t){if(t<=this.MAX_LATIN1){for(let s of e)if(!(t>s[1]))return t<s[0]?!1:(t-s[0])%s[2]===0;return!1}return e.length>0&&t>=e[0][0]&&this.is32(e,t)}static isUpper(e){if(e<=this.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return this.is(Xe.Upper,e)}static isPrint(e){return e<=this.MAX_LATIN1?e>=32&&e<127||e>=161&&e!==173:this.is(Xe.L,e)||this.is(Xe.M,e)||this.is(Xe.N,e)||this.is(Xe.P,e)||this.is(Xe.S,e)}static simpleFold(e){if(Xe.CASE_ORBIT.has(e))return Xe.CASE_ORBIT.get(e);const t=x.toLowerCase(e);return t!==e?t:x.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e<0||t<0||e===t)return!0;if(e<=this.MAX_ASCII&&t<=this.MAX_ASCII)return x.CODES.get("A")<=e&&e<=x.CODES.get("Z")&&(e|=32),x.CODES.get("A")<=t&&t<=x.CODES.get("Z")&&(t|=32),e===t;for(let s=this.simpleFold(e);s!==e;s=this.simpleFold(s))if(s===t)return!0;return!1}}v(se,"MAX_RUNE",1114111),v(se,"MAX_ASCII",127),v(se,"MAX_LATIN1",255),v(se,"MAX_BMP",65535),v(se,"MIN_FOLD",65),v(se,"MAX_FOLD",125251);class ae{static emptyInts(){return[]}static isalnum(e){return x.CODES.get("0")<=e&&e<=x.CODES.get("9")||x.CODES.get("a")<=e&&e<=x.CODES.get("z")||x.CODES.get("A")<=e&&e<=x.CODES.get("Z")}static unhex(e){return x.CODES.get("0")<=e&&e<=x.CODES.get("9")?e-x.CODES.get("0"):x.CODES.get("a")<=e&&e<=x.CODES.get("f")?e-x.CODES.get("a")+10:x.CODES.get("A")<=e&&e<=x.CODES.get("F")?e-x.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(se.isPrint(e))this.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case x.CODES.get('"'):t+='\\"';break;case x.CODES.get("\\"):t+="\\\\";break;case x.CODES.get("	"):t+="\\t";break;case x.CODES.get(`
`):t+="\\n";break;case x.CODES.get("\r"):t+="\\r";break;case x.CODES.get("\b"):t+="\\b";break;case x.CODES.get("\f"):t+="\\f";break;default:{let s=e.toString(16);e<256?(t+="\\x",s.length===1&&(t+="0"),t+=s):t+=`\\x{${s}}`;break}}return t}static stringToRunes(e){return String(e).split("").map(t=>t.codePointAt(0))}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return x.CODES.get("a")<=e&&e<=x.CODES.get("z")||x.CODES.get("A")<=e&&e<=x.CODES.get("Z")||x.CODES.get("0")<=e&&e<=x.CODES.get("9")||e===x.CODES.get("_")}static emptyOpContext(e,t){let s=0;return e<0&&(s|=this.EMPTY_BEGIN_TEXT|this.EMPTY_BEGIN_LINE),e===x.CODES.get(`
`)&&(s|=this.EMPTY_BEGIN_LINE),t<0&&(s|=this.EMPTY_END_TEXT|this.EMPTY_END_LINE),t===x.CODES.get(`
`)&&(s|=this.EMPTY_END_LINE),this.isWordRune(e)!==this.isWordRune(t)?s|=this.EMPTY_WORD_BOUNDARY:s|=this.EMPTY_NO_WORD_BOUNDARY,s}static quoteMeta(e){return e.split("").map(t=>this.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>se.MAX_BMP?2:1}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return Array.from(new TextEncoder().encode(e));{let t=[],s=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[s++]=i:i<2048?(t[s++]=i>>6|192,t[s++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[s++]=i>>18|240,t[s++]=i>>12&63|128,t[s++]=i>>6&63|128,t[s++]=i&63|128):(t[s++]=i>>12|224,t[s++]=i>>6&63|128,t[s++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder)return new TextDecoder("utf-8").decode(new Uint8Array(e));{let t=[],s=0,r=0;for(;s<e.length;){let i=e[s++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[s++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[s++],l=e[s++],c=e[s++],u=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{let a=e[s++],l=e[s++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return t.join("")}}}v(ae,"METACHARACTERS","\\.+*?()|[]{}^$"),v(ae,"EMPTY_BEGIN_LINE",1),v(ae,"EMPTY_END_LINE",2),v(ae,"EMPTY_BEGIN_TEXT",4),v(ae,"EMPTY_END_TEXT",8),v(ae,"EMPTY_WORD_BOUNDARY",16),v(ae,"EMPTY_NO_WORD_BOUNDARY",32),v(ae,"EMPTY_ALL",-1);const Nf=(n=[],e=0)=>{const t={};for(let s=0;s<n.length;s++){const r=n[s],i=e+s;t[r]=i,t[i]=r}return Object.freeze(t)},di=class di{getEncoding(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===di.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===di.Encoding.UTF_16}};v(di,"Encoding",Nf(["UTF_16","UTF_8"]));let is=di;class kh extends is{constructor(e=null){super(),this.bytes=e}getEncoding(){return is.Encoding.UTF_8}asCharSequence(){return ae.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}}class k9 extends is{constructor(e=null){super(),this.charSequence=e}getEncoding(){return is.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return this.charSequence.toString().split("").map(e=>e.codePointAt(0))}length(){return this.charSequence.length}}class Ga{static utf16(e){return new k9(e)}static utf8(e){return Array.isArray(e)?new kh(e):new kh(ae.stringToUtf8ByteArray(e))}}class _o extends Error{constructor(e){super(e),this.name="RE2JSException"}}class Ne extends _o{constructor(e,t=null){let s=`error parsing regexp: ${e}`;t&&(s+=`: \`${t}\``),super(s),this.name="RE2JSSyntaxException",this.message=s,this.error=e,this.input=t}getDescription(){return this.error}getPattern(){return this.input}}class N9 extends _o{constructor(e){super(e),this.name="RE2JSCompileException"}}class pn extends _o{constructor(e){super(e),this.name="RE2JSGroupException"}}class O9 extends _o{constructor(e){super(e),this.name="RE2JSFlagsException"}}class D9{static quoteReplacement(e){return e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(t=>{const s=t.codePointAt(0);return s===x.CODES["\\"]||s===x.CODES.$?`\\${t}`:t}).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const s=this.patternInput.re2();this.patternGroupCount=s.numberOfCapturingGroups(),this.groups=[],this.namedGroups=s.namedGroups,t instanceof is?this.resetMatcherInput(t):Array.isArray(t)?this.resetMatcherInput(Ga.utf8(t)):this.resetMatcherInput(Ga.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new pn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new pn(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new pn(`group '${e}' not found`);e=r}const t=this.start(e),s=this.end(e);return t<0&&s<0?null:this.substring(t,s)}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new pn(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new pn("perhaps no match attempted");if(e===0||this.hasGroups)return;let t=this.groups[1]+1;t>this.matcherInputLength&&(t=this.matcherInputLength);const s=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!s[0])throw new pn("inconsistency in matching group data");this.groups=s[1],this.hasGroups=!0}matches(){return this.genMatch(0,z.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,z.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new pn(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}return e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1]&&e++),this.genMatch(e,z.UNANCHORED)}genMatch(e,t){const s=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return s[0]?(this.groups=s[1],this.hasMatch=!0,this.hasGroups=!1,this.anchorFlag=t,!0):!1}substring(e,t){return this.matcherInput.isUTF8Encoding()?ae.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let s="";const r=this.start(),i=this.end();return this.appendPos<r&&(s+=this.substring(this.appendPos,r)),this.appendPos=i,s+=t?this.appendReplacementInternalPerl(e):this.appendReplacementInternal(e),s}appendReplacementInternal(e){let t="",s=0;const r=e.length;for(let i=0;i<r-1;i++){if(e.codePointAt(i)===x.CODES.get("\\")){s<i&&(t+=e.substring(s,i)),i++,s=i;continue}if(e.codePointAt(i)===x.CODES.get("$")){let a=e.codePointAt(i+1);if(x.CODES.get("0")<=a&&a<=x.CODES.get("9")){let l=a-x.CODES.get("0");for(s<i&&(t+=e.substring(s,i)),i+=2;i<r&&(a=e.codePointAt(i),!(a<x.CODES.get("0")||a>x.CODES.get("9")||l*10+a-x.CODES.get("0")>this.patternGroupCount));i++)l=l*10+a-x.CODES.get("0");if(l>this.patternGroupCount)throw new pn(`n > number of groups: ${l}`);const c=this.group(l);c!==null&&(t+=c),s=i,i--;continue}else if(a===x.CODES.get("{")){s<i&&(t+=e.substring(s,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==x.CODES.get("}")&&e.codePointAt(l)!==x.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==x.CODES.get("}"))throw new pn("named capture group is missing trailing '}'");const c=e.substring(i+1,l);t+=this.group(c),s=l+1}}}return s<r&&(t+=e.substring(s,r)),t}appendReplacementInternalPerl(e){let t="",s=0;const r=e.length;for(let i=0;i<r-1;i++)if(e.codePointAt(i)===x.CODES.get("$")){let a=e.codePointAt(i+1);if(x.CODES.get("$")===a){s<i&&(t+=e.substring(s,i)),t+="$",i++,s=i+1;continue}else if(x.CODES.get("&")===a){s<i&&(t+=e.substring(s,i));const l=this.group(0);l!==null?t+=l:t+="$&",i++,s=i+1;continue}else if(x.CODES.get("1")<=a&&a<=x.CODES.get("9")){let l=a-x.CODES.get("0");for(s<i&&(t+=e.substring(s,i)),i+=2;i<r&&(a=e.codePointAt(i),!(a<x.CODES.get("0")||a>x.CODES.get("9")||l*10+a-x.CODES.get("0")>this.patternGroupCount));i++)l=l*10+a-x.CODES.get("0");if(l>this.patternGroupCount){t+=`$${l}`,s=i,i--;continue}const c=this.group(l);c!==null&&(t+=c),s=i,i--;continue}else if(a===x.CODES.get("<")){s<i&&(t+=e.substring(s,i)),i++;let l=i+1;for(;l<e.length&&e.codePointAt(l)!==x.CODES.get(">")&&e.codePointAt(l)!==x.CODES.get(" ");)l++;if(l===e.length||e.codePointAt(l)!==x.CODES.get(">")){t+=e.substring(i-1,l+1),s=l+1;continue}const c=e.substring(i+1,l);Object.prototype.hasOwnProperty.call(this.namedGroups,c)?t+=this.group(c):t+=`$<${c}>`,s=l+1}}return s<r&&(t+=e.substring(s,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,s=!1){let r="";for(this.reset();this.find()&&(r+=this.appendReplacement(e,s),!!t););return r+=this.appendTail(),r}}class zn{static EOF(){return-8}canCheckPrefix(){return!0}endPos(){return this.end}}class L9 extends zn{constructor(e,t=0,s=e.length){super(),this.bytes=e,this.start=t,this.end=s}step(e){if(e+=this.start,e>=this.end)return zn.EOF();let t=this.bytes[e++]&255;return(t&128)===0?t<<3|1:(t&224)===192?(t=t&31,e>=this.end?zn.EOF():(t=t<<6|this.bytes[e++]&63,t<<3|2)):(t&240)===224?(t=t&15,e+1>=this.end?zn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|3)):(t=t&7,e+2>=this.end?zn.EOF():(t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t=t<<6|this.bytes[e++]&63,t<<3|4))}index(e,t){t+=this.start;const s=this.indexOf(this.bytes,e.prefixUTF8,t);return s<0?s:s-t}context(e){e+=this.start;let t=-1;if(e>this.start&&e<=this.end){let r=e-1;if(t=this.bytes[r--],t>=128){let i=e-4;for(i<this.start&&(i=this.start);r>=i&&(this.bytes[r]&192)===128;)r--;r<this.start&&(r=this.start),t=this.step(r)>>3}}const s=e<this.end?this.step(e)>>3:-1;return ae.emptyOpContext(t,s)}indexOf(e,t,s=0){let r=t.length;if(r===0)return-1;let i=e.length;for(let a=s;a<=i-r;a++)for(let l=0;l<r&&e[a+l]===t[l];l++)if(l===r-1)return a;return-1}}class V9 extends zn{constructor(e,t=0,s=e.length){super(),this.charSequence=e,this.start=t,this.end=s}step(e){if(e+=this.start,e<this.end){const t=this.charSequence.codePointAt(e);return t<<3|ae.charCount(t)}else return zn.EOF()}index(e,t){t+=this.start;const s=this.charSequence.indexOf(e.prefix,t);return s<0?s:s-t}context(e){e+=this.start;const t=e>0&&e<=this.charSequence.length?this.charSequence.codePointAt(e-1):-1,s=e<this.charSequence.length?this.charSequence.codePointAt(e):-1;return ae.emptyOpContext(t,s)}}class Oe{static fromUTF8(e,t=0,s=e.length){return new L9(e,t,s)}static fromUTF16(e,t=0,s=e.length){return new V9(e,t,s)}}const te=class te{static isPseudoOp(e){return e>=te.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===x.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new te(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t}constructor(e){this.op=e,this.flags=0,this.subs=te.emptySubs(),this.runes=null,this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups={}}reinit(){this.flags=0,this.subs=te.emptySubs(),this.runes=null,this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups={}}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case te.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case te.Op.EMPTY_MATCH:e+="(?:)";break;case te.Op.STAR:case te.Op.PLUS:case te.Op.QUEST:case te.Op.REPEAT:{const t=this.subs[0];switch(t.op>te.Op.CAPTURE||t.op===te.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case te.Op.STAR:e+="*";break;case te.Op.PLUS:e+="+";break;case te.Op.QUEST:e+="?";break;case te.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&z.NON_GREEDY)!==0&&(e+="?");break}case te.Op.CONCAT:{for(let t of this.subs)t.op===te.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break}case te.Op.ALTERNATE:{let t="";for(let s of this.subs)e+=t,t="|",e+=s.appendTo();break}case te.Op.LITERAL:(this.flags&z.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=ae.escapeRune(t);(this.flags&z.FOLD_CASE)!==0&&(e+=")");break;case te.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case te.Op.ANY_CHAR:e+="(?s:.)";break;case te.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==te.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case te.Op.BEGIN_TEXT:e+="\\A";break;case te.Op.END_TEXT:(this.flags&z.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case te.Op.BEGIN_LINE:e+="^";break;case te.Op.END_LINE:e+="$";break;case te.Op.WORD_BOUNDARY:e+="\\b";break;case te.Op.NO_WORD_BOUNDARY:e+="\\B";break;case te.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===se.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const s=this.runes[t]+1,r=this.runes[t+1]-1;e+=te.quoteIfHyphen(s),e+=ae.escapeRune(s),s!==r&&(e+="-",e+=te.quoteIfHyphen(r),e+=ae.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const s=this.runes[t],r=this.runes[t+1];e+=te.quoteIfHyphen(s),e+=ae.escapeRune(s),s!==r&&(e+="-",e+=te.quoteIfHyphen(r),e+=ae.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===te.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const s=t.maxCap();e<s&&(e=s)}return e}equals(e){if(!(e!==null&&e instanceof te)||this.op!==e.op)return!1;switch(this.op){case te.Op.END_TEXT:{if((this.flags&z.WAS_DOLLAR)!==(e.flags&z.WAS_DOLLAR))return!1;break}case te.Op.LITERAL:case te.Op.CHAR_CLASS:{if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break}case te.Op.ALTERNATE:case te.Op.CONCAT:{if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break}case te.Op.STAR:case te.Op.PLUS:case te.Op.QUEST:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break}case te.Op.REPEAT:{if((this.flags&z.NON_GREEDY)!==(e.flags&z.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break}case te.Op.CAPTURE:{if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break}}return!0}};v(te,"Op",Nf(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","LEFT_PAREN","VERTICAL_BAR"]));let D=te;const _e=class _e{static isRuneOp(e){return _e.RUNE<=e&&e<=_e.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let s of e)t+=ae.escapeRune(s);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=null}matchRune(e){if(this.runes.length===1){const r=this.runes[0];return(this.arg&z.FOLD_CASE)!==0?se.equalsIgnoreCase(r,e):e===r}for(let r=0;r<this.runes.length&&r<=8;r+=2){if(e<this.runes[r])return!1;if(e<=this.runes[r+1])return!0}let t=0,s=this.runes.length/2|0;for(;t<s;){const r=t+((s-t)/2|0);if(this.runes[2*r]<=e){if(e<=this.runes[2*r+1])return!0;t=r+1}else s=r}return!1}toString(){switch(this.op){case _e.ALT:return`alt -> ${this.out}, ${this.arg}`;case _e.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case _e.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case _e.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case _e.MATCH:return"match";case _e.FAIL:return"fail";case _e.NOP:return`nop -> ${this.out}`;case _e.RUNE:return this.runes===null?"rune <null>":["rune ",_e.escapeRunes(this.runes),(this.arg&z.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case _e.RUNE1:return`rune1 ${_e.escapeRunes(this.runes)} -> ${this.out}`;case _e.RUNE_ANY:return`any -> ${this.out}`;case _e.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}};v(_e,"ALT",1),v(_e,"ALT_MATCH",2),v(_e,"CAPTURE",3),v(_e,"EMPTY_WIDTH",4),v(_e,"FAIL",5),v(_e,"MATCH",6),v(_e,"NOP",7),v(_e,"RUNE",8),v(_e,"RUNE1",9),v(_e,"RUNE_ANY",10),v(_e,"RUNE_ANY_NOT_NL",11);let oe=_e;class M9{constructor(){this.inst=[],this.start=0,this.numCap=2}getInst(e){return this.inst[e]}numInst(){return this.inst.length}addInst(e){this.inst.push(new oe(e))}skipNop(e){let t=this.inst[e];for(;t.op===oe.NOP||t.op===oe.CAPTURE;)t=this.inst[e],e=t.out;return t}prefix(){let e="",t=this.skipNop(this.start);if(!oe.isRuneOp(t.op)||t.runes.length!==1)return[t.op===oe.MATCH,e];for(;oe.isRuneOp(t.op)&&t.runes.length===1&&(t.arg&z.FOLD_CASE)===0;)e+=String.fromCodePoint(t.runes[0]),t=this.skipNop(t.out);return[t.op===oe.MATCH,e]}startCond(){let e=0,t=this.start;e:for(;;){const s=this.inst[t];switch(s.op){case oe.EMPTY_WIDTH:e|=s.arg;break;case oe.FAIL:return-1;case oe.CAPTURE:case oe.NOP:break;default:break e}t=s.out}return e}next(e){const t=this.inst[e>>1];return(e&1)===0?t.out:t.arg}patch(e,t){for(;e!==0;){const s=this.inst[e>>1];(e&1)===0?(e=s.out,s.out=t):(e=s.arg,s.arg=t)}}append(e,t){if(e===0)return t;if(t===0)return e;let s=e;for(;;){const i=this.next(s);if(i===0)break;s=i}const r=this.inst[s>>1];return(s&1)===0?r.out=t:r.arg=t,e}toString(){let e="";for(let t=0;t<this.inst.length;t++){const s=e.length;e+=t,t===this.start&&(e+="*"),e+="        ".substring(e.length-s),e+=this.inst[t],e+=`
`}return e}}class ca{constructor(e=0,t=0,s=!1){this.i=e,this.out=t,this.nullable=s}}class ni{static ANY_RUNE_NOT_NL(){return[0,x.CODES.get(`
`)-1,x.CODES.get(`
`)+1,se.MAX_RUNE]}static ANY_RUNE(){return[0,se.MAX_RUNE]}static compileRegexp(e){const t=new ni,s=t.compile(e);return t.prog.patch(s.out,t.newInst(oe.MATCH).i),t.prog.start=s.i,t.prog}constructor(){this.prog=new M9,this.newInst(oe.FAIL)}newInst(e){return this.prog.addInst(e),new ca(this.prog.numInst()-1,0,!0)}nop(){const e=this.newInst(oe.NOP);return e.out=e.i<<1,e}fail(){return new ca}cap(e){const t=this.newInst(oe.CAPTURE);return t.out=t.i<<1,this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new ca(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const s=this.newInst(oe.ALT),r=this.prog.getInst(s.i);return r.out=e.i,r.arg=t.i,s.out=this.prog.append(e.out,t.out),s.nullable=e.nullable||t.nullable,s}loop(e,t){const s=this.newInst(oe.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=s.i<<1):(r.out=e.i,s.out=s.i<<1|1),this.prog.patch(e.out,s.i),s}quest(e,t){const s=this.newInst(oe.ALT),r=this.prog.getInst(s.i);return t?(r.arg=e.i,s.out=s.i<<1):(r.out=e.i,s.out=s.i<<1|1),s.out=this.prog.append(s.out,e.out),s}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new ca(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(oe.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=t.i<<1,t}rune(e,t){const s=this.newInst(oe.RUNE);s.nullable=!1;const r=this.prog.getInst(s.i);return r.runes=e,t&=z.FOLD_CASE,(e.length!==1||se.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,s.out=s.i<<1,(t&z.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=oe.RUNE1:e.length===2&&e[0]===0&&e[1]===se.MAX_RUNE?r.op=oe.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===x.CODES.get(`
`)-1&&e[2]===x.CODES.get(`
`)+1&&e[3]===se.MAX_RUNE&&(r.op=oe.RUNE_ANY_NOT_NL),s}compile(e){switch(e.op){case D.Op.NO_MATCH:return this.fail();case D.Op.EMPTY_MATCH:return this.nop();case D.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let s of e.runes){const r=this.rune([s],e.flags);t=t===null?r:this.cat(t,r)}return t}case D.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case D.Op.ANY_CHAR_NOT_NL:return this.rune(ni.ANY_RUNE_NOT_NL(),0);case D.Op.ANY_CHAR:return this.rune(ni.ANY_RUNE(),0);case D.Op.BEGIN_LINE:return this.empty(ae.EMPTY_BEGIN_LINE);case D.Op.END_LINE:return this.empty(ae.EMPTY_END_LINE);case D.Op.BEGIN_TEXT:return this.empty(ae.EMPTY_BEGIN_TEXT);case D.Op.END_TEXT:return this.empty(ae.EMPTY_END_TEXT);case D.Op.WORD_BOUNDARY:return this.empty(ae.EMPTY_WORD_BOUNDARY);case D.Op.NO_WORD_BOUNDARY:return this.empty(ae.EMPTY_NO_WORD_BOUNDARY);case D.Op.CAPTURE:{const t=this.cap(e.cap<<1),s=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,s),r)}case D.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case D.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case D.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&z.NON_GREEDY)!==0);case D.Op.CONCAT:{if(e.subs.length===0)return this.nop();{let t=null;for(let s of e.subs){const r=this.compile(s);t=t===null?r:this.cat(t,r)}return t}}case D.Op.ALTERNATE:{if(e.subs.length===0)return this.nop();{let t=null;for(let s of e.subs){const r=this.compile(s);t=t===null?r:this.alt(t,r)}return t}}default:throw new N9("regexp: unhandled case in compile")}}}class Bt{static simplify(e){if(e===null)return null;switch(e.op){case D.Op.CAPTURE:case D.Op.CONCAT:case D.Op.ALTERNATE:{let t=e;for(let s=0;s<e.subs.length;s++){const r=e.subs[s],i=Bt.simplify(r);t===e&&i!==r&&(t=D.fromRegexp(e),t.runes=null,t.subs=e.subs.slice(0,e.subs.length)),t!==e&&(t.subs[s]=i)}return t}case D.Op.STAR:case D.Op.PLUS:case D.Op.QUEST:{const t=Bt.simplify(e.subs[0]);return Bt.simplify1(e.op,e.flags,t,e)}case D.Op.REPEAT:{if(e.min===0&&e.max===0)return new D(D.Op.EMPTY_MATCH);const t=Bt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Bt.simplify1(D.Op.STAR,e.flags,t,null);if(e.min===1)return Bt.simplify1(D.Op.PLUS,e.flags,t,null);const r=new D(D.Op.CONCAT),i=[];for(let a=0;a<e.min-1;a++)i.push(t);return i.push(Bt.simplify1(D.Op.PLUS,e.flags,t,null)),r.subs=i.slice(0),r}if(e.min===1&&e.max===1)return t;let s=null;if(e.min>0){s=[];for(let r=0;r<e.min;r++)s.push(t)}if(e.max>e.min){let r=Bt.simplify1(D.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const a=new D(D.Op.CONCAT);a.subs=[t,r],r=Bt.simplify1(D.Op.QUEST,e.flags,a,null)}if(s===null)return r;s.push(r)}if(s!==null){const r=new D(D.Op.CONCAT);return r.subs=s.slice(0),r}return new D(D.Op.NO_MATCH)}}return e}static simplify1(e,t,s,r){return s.op===D.Op.EMPTY_MATCH||e===s.op&&(t&z.NON_GREEDY)===(s.flags&z.NON_GREEDY)?s:(r!==null&&r.op===e&&(r.flags&z.NON_GREEDY)===(t&z.NON_GREEDY)&&s===r.subs[0]||(r=new D(e),r.flags=t,r.subs=[s]),r)}}class ge{constructor(e,t){this.sign=e,this.cls=t}}const Nh=[48,57],Oh=[9,10,12,13,32,32],Dh=[48,57,65,90,95,95,97,122],Lh=new Map([["\\d",new ge(1,Nh)],["\\D",new ge(-1,Nh)],["\\s",new ge(1,Oh)],["\\S",new ge(-1,Oh)],["\\w",new ge(1,Dh)],["\\W",new ge(-1,Dh)]]),Vh=[48,57,65,90,97,122],Mh=[65,90,97,122],$h=[0,127],Uh=[9,9,32,32],Fh=[0,31,127,127],Bh=[48,57],qh=[33,126],Hh=[97,122],jh=[32,126],Gh=[33,47,58,64,91,96,123,126],zh=[9,13,32,32],Wh=[65,90],Kh=[48,57,65,90,95,95,97,122],Yh=[48,57,65,70,97,102],Qh=new Map([["[:alnum:]",new ge(1,Vh)],["[:^alnum:]",new ge(-1,Vh)],["[:alpha:]",new ge(1,Mh)],["[:^alpha:]",new ge(-1,Mh)],["[:ascii:]",new ge(1,$h)],["[:^ascii:]",new ge(-1,$h)],["[:blank:]",new ge(1,Uh)],["[:^blank:]",new ge(-1,Uh)],["[:cntrl:]",new ge(1,Fh)],["[:^cntrl:]",new ge(-1,Fh)],["[:digit:]",new ge(1,Bh)],["[:^digit:]",new ge(-1,Bh)],["[:graph:]",new ge(1,qh)],["[:^graph:]",new ge(-1,qh)],["[:lower:]",new ge(1,Hh)],["[:^lower:]",new ge(-1,Hh)],["[:print:]",new ge(1,jh)],["[:^print:]",new ge(-1,jh)],["[:punct:]",new ge(1,Gh)],["[:^punct:]",new ge(-1,Gh)],["[:space:]",new ge(1,zh)],["[:^space:]",new ge(-1,zh)],["[:upper:]",new ge(1,Wh)],["[:^upper:]",new ge(-1,Wh)],["[:word:]",new ge(1,Kh)],["[:^word:]",new ge(-1,Kh)],["[:xdigit:]",new ge(1,Yh)],["[:^xdigit:]",new ge(-1,Yh)]]);class Je{static charClassToString(e,t){let s="[";for(let r=0;r<t;r+=2){r>0&&(s+=" ");const i=e[r],a=e[r+1];i===a?s+=`0x${i.toString(16)}`:s+=`0x${i.toString(16)}-0x${a.toString(16)}`}return s+="]",s}static cmp(e,t,s,r){const i=e[t]-s;return i!==0?i:r-e[t+1]}static qsortIntPair(e,t,s){const r=((t+s)/2|0)&-2,i=e[r],a=e[r+1];let l=t,c=s;for(;l<=c;){for(;l<s&&Je.cmp(e,l,i,a)<0;)l+=2;for(;c>t&&Je.cmp(e,c,i,a)>0;)c-=2;if(l<=c){if(l!==c){let u=e[l];e[l]=e[c],e[c]=u,u=e[l+1],e[l+1]=e[c+1],e[c+1]=u}l+=2,c-=2}}t<c&&Je.qsortIntPair(e,t,c),l<s&&Je.qsortIntPair(e,l,s)}constructor(e=ae.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;Je.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const s=this.r[t],r=this.r[t+1];if(s<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=s,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&z.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let s=2;s<=4;s+=2)if(this.len>=s){const r=this.r[this.len-s],i=this.r[this.len-s+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-s]=e),t>i&&(this.r[this.len-s+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=se.MIN_FOLD&&t>=se.MAX_FOLD)return this.appendRange(e,t);if(t<se.MIN_FOLD||e>se.MAX_FOLD)return this.appendRange(e,t);e<se.MIN_FOLD&&(this.appendRange(e,se.MIN_FOLD-1),e=se.MIN_FOLD),t>se.MAX_FOLD&&(this.appendRange(se.MAX_FOLD+1,t),t=se.MAX_FOLD);for(let s=e;s<=t;s++){this.appendRange(s,s);for(let r=se.simpleFold(s);r!==s;r=se.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let s=0;s<e.length;s+=2){const r=e[s],i=e[s+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=se.MAX_RUNE&&this.appendRange(t,se.MAX_RUNE),this}appendTable(e){for(let t of e){const s=t[0],r=t[1],i=t[2];if(i===1){this.appendRange(s,r);continue}for(let a=s;a<=r;a+=i)this.appendRange(a,a)}return this}appendNegatedTable(e){let t=0;for(let s of e){const r=s[0],i=s[1],a=s[2];if(a===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let l=r;l<=i;l+=a)t<=l-1&&this.appendRange(t,l-1),t=l+1}return t<=se.MAX_RUNE&&this.appendRange(t,se.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let s=0;s<this.len;s+=2){const r=this.r[s],i=this.r[s+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=se.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=se.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let s=e.cls;return t&&(s=new Je().appendFoldedClass(s).cleanClass().toArray()),this.appendClassWithSign(s,e.sign)}toString(){return Je.charClassToString(this.r,this.len)}}class si{static of(e,t){return new si(e,t)}constructor(e,t){this.first=e,this.second=t}}class $9{constructor(e){this.str=e,this.position=0}pos(){return this.position}rewindTo(e){this.position=e}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(e){this.position+=e}skipString(e){this.position+=e.length}pop(){const e=this.str.codePointAt(this.position);return this.position+=ae.charCount(e),e}lookingAt(e){return this.rest().startsWith(e)}rest(){return this.str.substring(this.position)}from(e){return this.str.substring(e,this.position)}toString(){return this.rest()}}const Y=class Y{static ANY_TABLE(){return[[0,se.MAX_RUNE,1]]}static unicodeTable(e){return e==="Any"?si.of(Y.ANY_TABLE(),Y.ANY_TABLE()):Xe.CATEGORIES.has(e)?si.of(Xe.CATEGORIES.get(e),Xe.FOLD_CATEGORIES.get(e)):Xe.SCRIPTS.has(e)?si.of(Xe.SCRIPTS.get(e),Xe.FOLD_SCRIPT.get(e)):null}static minFoldRune(e){if(e<se.MIN_FOLD||e>se.MAX_FOLD)return e;let t=e;const s=e;for(e=se.simpleFold(e);e!==s;e=se.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===D.Op.EMPTY_MATCH)return null;if(e.op===D.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===D.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const s=new D(D.Op.LITERAL);return s.flags=t,s.runes=ae.stringToRunes(e),s}static parse(e,t){return new Y(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const s=Y.parseInt(e);if(s===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=s;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=Y.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),s<0||s>1e3||r===-2||r>1e3||r>=0&&s>r)throw new Ne(Y.ERR_INVALID_REPEAT_SIZE,e.from(t));return s<<16|r&se.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const s=e.codePointAt(t);if(s!==x.CODES.get("_")&&!ae.isalnum(s))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=x.CODES.get("0")&&e.peek()<=x.CODES.get("9");)e.skip(1);const s=e.from(t);return s.length===0||s.length>1&&s.codePointAt(0)===x.CODES.get("0")?-1:s.length>8?-2:parseFloat(s,10)}static isCharClass(e){return e.op===D.Op.LITERAL&&e.runes.length===1||e.op===D.Op.CHAR_CLASS||e.op===D.Op.ANY_CHAR_NOT_NL||e.op===D.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case D.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case D.Op.CHAR_CLASS:for(let s=0;s<e.runes.length;s+=2)if(e.runes[s]<=t&&t<=e.runes[s+1])return!0;return!1;case D.Op.ANY_CHAR_NOT_NL:return t!==x.CODES.get(`
`);case D.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case D.Op.ANY_CHAR:break;case D.Op.ANY_CHAR_NOT_NL:Y.matchRune(t,x.CODES.get(`
`))&&(e.op=D.Op.ANY_CHAR);break;case D.Op.CHAR_CLASS:t.op===D.Op.LITERAL?e.runes=new Je(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Je(e.runes).appendClass(t.runes).toArray();break;case D.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=D.Op.CHAR_CLASS,e.runes=new Je().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ne(Y.ERR_TRAILING_BACKSLASH);let s=e.pop();e:switch(s){case x.CODES.get("1"):case x.CODES.get("2"):case x.CODES.get("3"):case x.CODES.get("4"):case x.CODES.get("5"):case x.CODES.get("6"):case x.CODES.get("7"):if(!e.more()||e.peek()<x.CODES.get("0")||e.peek()>x.CODES.get("7"))break;case x.CODES.get("0"):{let r=s-x.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<x.CODES.get("0")||e.peek()>x.CODES.get("7"));i++)r=r*8+e.peek()-x.CODES.get("0"),e.skip(1);return r}case x.CODES.get("x"):{if(!e.more())break;if(s=e.pop(),s===x.CODES.get("{")){let a=0,l=0;for(;;){if(!e.more())break e;if(s=e.pop(),s===x.CODES.get("}"))break;const c=ae.unhex(s);if(c<0||(l=l*16+c,l>se.MAX_RUNE))break e;a++}if(a===0)break e;return l}const r=ae.unhex(s);if(!e.more())break;s=e.pop();const i=ae.unhex(s);if(r<0||i<0)break;return r*16+i}case x.CODES.get("a"):return x.CODES.get("\x07");case x.CODES.get("f"):return x.CODES.get("\f");case x.CODES.get("n"):return x.CODES.get(`
`);case x.CODES.get("r"):return x.CODES.get("\r");case x.CODES.get("t"):return x.CODES.get("	");case x.CODES.get("v"):return x.CODES.get("\v");default:if(!ae.isalnum(s))return s;break}throw new Ne(Y.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ne(Y.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?Y.parseEscape(e):e.pop()}static concatRunes(e,t){return[...e,...t]}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups={},this.stack=[],this.free=null}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):t=new D(e),t}reuse(e){e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!D.isPseudoOp(this.stack[t-1].op);)t--;const s=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),s}push(e){if(e.op===D.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=D.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===D.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&se.simpleFold(e.runes[0])===e.runes[2]&&se.simpleFold(e.runes[2])===e.runes[0]||e.op===D.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&se.simpleFold(e.runes[0])===e.runes[1]&&se.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|z.FOLD_CASE))return null;e.op=D.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|z.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),e}maybeConcat(e,t){const s=this.stack.length;if(s<2)return!1;const r=this.stack[s-1],i=this.stack[s-2];return r.op!==D.Op.LITERAL||i.op!==D.Op.LITERAL||(r.flags&z.FOLD_CASE)!==(i.flags&z.FOLD_CASE)?!1:(i.runes=Y.concatRunes(i.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const s=this.newRegexp(D.Op.LITERAL);return s.flags=t,(t&z.FOLD_CASE)!==0&&(e=Y.minFoldRune(e)),s.runes=[e],s}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,s,r,i,a){let l=this.flags;if((l&z.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),l^=z.NON_GREEDY),a!==-1))throw new Ne(Y.ERR_INVALID_REPEAT_OP,i.from(a));const c=this.stack.length;if(c===0)throw new Ne(Y.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const u=this.stack[c-1];if(D.isPseudoOp(u.op))throw new Ne(Y.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const d=this.newRegexp(e);d.min=t,d.max=s,d.flags=l,d.subs=[u],this.stack[c-1]=d}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(D.Op.EMPTY_MATCH)):this.push(this.collapse(e,D.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(D.Op.NO_MATCH)):this.push(this.collapse(e,D.Op.ALTERNATE))}cleanAlt(e){e.op===D.Op.CHAR_CLASS&&(e.runes=new Je(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===se.MAX_RUNE?(e.runes=null,e.op=D.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===x.CODES.get(`
`)-1&&e.runes[2]===x.CODES.get(`
`)+1&&e.runes[3]===se.MAX_RUNE&&(e.runes=null,e.op=D.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let s=0;for(let l of e)s+=l.op===t?l.subs.length:1;let r=new Array(s).fill(null),i=0;for(let l of e)l.op===t?(r.splice(i,l.subs.length,...l.subs),i+=l.subs.length,this.reuse(l)):r[i++]=l;let a=this.newRegexp(t);if(a.subs=r,t===D.Op.ALTERNATE&&(a.subs=this.factor(a.subs),a.subs.length===1)){const l=a;a=a.subs[0],this.reuse(l)}return a}factor(e){if(e.length<2)return e;let t=0,s=e.length,r=0,i=null,a=0,l=0,c=0;for(let d=0;d<=s;d++){let p=null,y=0,b=0;if(d<s){let R=e[t+d];if(R.op===D.Op.CONCAT&&R.subs.length>0&&(R=R.subs[0]),R.op===D.Op.LITERAL&&(p=R.runes,y=R.runes.length,b=R.flags&z.FOLD_CASE),b===l){let L=0;for(;L<a&&L<y&&i[L]===p[L];)L++;if(L>0){a=L;continue}}}if(d!==c)if(d===c+1)e[r++]=e[t+c];else{const R=this.newRegexp(D.Op.LITERAL);R.flags=l,R.runes=i.slice(0,a);for(let F=c;F<d;F++)e[t+F]=this.removeLeadingString(e[t+F],a);const L=this.collapse(e.slice(t+c,t+d),D.Op.ALTERNATE),k=this.newRegexp(D.Op.CONCAT);k.subs=[R,L],e[r++]=k}c=d,i=p,a=y,l=b}s=r,t=0,c=0,r=0;let u=null;for(let d=0;d<=s;d++){let p=null;if(!(d<s&&(p=Y.leadingRegexp(e[t+d]),u!==null&&u.equals(p)&&(Y.isCharClass(u)||u.op===D.Op.REPEAT&&u.min===u.max&&Y.isCharClass(u.subs[0]))))){if(d!==c)if(d===c+1)e[r++]=e[t+c];else{const y=u;for(let L=c;L<d;L++){const k=L!==c;e[t+L]=this.removeLeadingRegexp(e[t+L],k)}const b=this.collapse(e.slice(t+c,t+d),D.Op.ALTERNATE),R=this.newRegexp(D.Op.CONCAT);R.subs=[y,b],e[r++]=R}c=d,u=p}}s=r,t=0,c=0,r=0;for(let d=0;d<=s;d++)if(!(d<s&&Y.isCharClass(e[t+d]))){if(d!==c)if(d===c+1)e[r++]=e[t+c];else{let p=c;for(let b=c+1;b<d;b++){const R=e[t+p],L=e[t+b];(R.op<L.op||R.op===L.op&&(R.runes!==null?R.runes.length:0)<(L.runes!==null?L.runes.length:0))&&(p=b)}const y=e[t+c];e[t+c]=e[t+p],e[t+p]=y;for(let b=c+1;b<d;b++)Y.mergeCharClass(e[t+c],e[t+b]),this.reuse(e[t+b]);this.cleanAlt(e[t+c]),e[r++]=e[t+c]}d<s&&(e[r++]=e[t+d]),c=d+1}s=r,t=0,c=0,r=0;for(let d=0;d<s;++d)d+1<s&&e[t+d].op===D.Op.EMPTY_MATCH&&e[t+d+1].op===D.Op.EMPTY_MATCH||(e[r++]=e[t+d]);return s=r,t=0,e.slice(t,s)}removeLeadingString(e,t){if(e.op===D.Op.CONCAT&&e.subs.length>0){const s=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=s,s.op===D.Op.EMPTY_MATCH)switch(this.reuse(s),e.subs.length){case 0:case 1:e.op=D.Op.EMPTY_MATCH,e.subs=null;break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===D.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=D.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===D.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:{e.op=D.Op.EMPTY_MATCH,e.subs=D.emptySubs();break}case 1:{const s=e;e=e.subs[0],this.reuse(s);break}}return e}return t&&this.reuse(e),this.newRegexp(D.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&z.LITERAL)!==0)return Y.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,s=-1;const r=new $9(this.wholeRegexp);for(;r.more();){let a=-1;e:switch(r.peek()){case x.CODES.get("("):if((this.flags&z.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(D.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case x.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case x.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case x.CODES.get("^"):(this.flags&z.ONE_LINE)!==0?this.op(D.Op.BEGIN_TEXT):this.op(D.Op.BEGIN_LINE),r.skip(1);break;case x.CODES.get("$"):(this.flags&z.ONE_LINE)!==0?this.op(D.Op.END_TEXT).flags|=z.WAS_DOLLAR:this.op(D.Op.END_LINE),r.skip(1);break;case x.CODES.get("."):(this.flags&z.DOT_NL)!==0?this.op(D.Op.ANY_CHAR):this.op(D.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case x.CODES.get("["):this.parseClass(r);break;case x.CODES.get("*"):case x.CODES.get("+"):case x.CODES.get("?"):{a=r.pos();let l=null;switch(r.pop()){case x.CODES.get("*"):l=D.Op.STAR;break;case x.CODES.get("+"):l=D.Op.PLUS;break;case x.CODES.get("?"):l=D.Op.QUEST;break}this.repeat(l,t,s,a,r,e);break}case x.CODES.get("{"):{a=r.pos();const l=Y.parseRepeat(r);if(l<0){r.rewindTo(a),this.literal(r.pop());break}t=l>>16,s=(l&se.MAX_BMP)<<16>>16,this.repeat(D.Op.REPEAT,t,s,a,r,e);break}case x.CODES.get("\\"):{const l=r.pos();if(r.skip(1),(this.flags&z.PERL_X)!==0&&r.more())switch(r.pop()){case x.CODES.get("A"):this.op(D.Op.BEGIN_TEXT);break e;case x.CODES.get("b"):this.op(D.Op.WORD_BOUNDARY);break e;case x.CODES.get("B"):this.op(D.Op.NO_WORD_BOUNDARY);break e;case x.CODES.get("C"):throw new Ne(Y.ERR_INVALID_ESCAPE,"\\C");case x.CODES.get("Q"):{let p=r.rest();const y=p.indexOf("\\E");y>=0&&(p=p.substring(0,y)),r.skipString(p),r.skipString("\\E");let b=0;for(;b<p.length;){const R=p.codePointAt(b);this.literal(R),b+=ae.charCount(R)}break e}case x.CODES.get("z"):this.op(D.Op.END_TEXT);break e;default:r.rewindTo(l);break}const c=this.newRegexp(D.Op.CHAR_CLASS);if(c.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const d=new Je;if(this.parseUnicodeClass(r,d)){c.runes=d.toArray(),this.push(c);break e}}const u=new Je;if(this.parsePerlClassEscape(r,u)){c.runes=u.toArray(),this.push(c);break e}r.rewindTo(l),this.reuse(c),this.literal(Y.parseEscape(r));break}default:this.literal(r.pop());break}e=a}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ne(Y.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),s=e.rest();if(s.startsWith("(?P<")||s.startsWith("(?<")){const l=s.charAt(2)==="P"?4:3,c=s.indexOf(">");if(c<0)throw new Ne(Y.ERR_INVALID_NAMED_CAPTURE,s);const u=s.substring(l,c);if(e.skipString(u),e.skip(l+1),!Y.isValidCaptureName(u))throw new Ne(Y.ERR_INVALID_NAMED_CAPTURE,s.substring(0,c+1));const d=this.op(D.Op.LEFT_PAREN);if(d.cap=++this.numCap,this.namedGroups[u])throw new Ne(Y.ERR_DUPLICATE_NAMED_CAPTURE,u);this.namedGroups[u]=this.numCap,d.name=u;return}e.skip(2);let r=this.flags,i=1,a=!1;e:for(;e.more();){const l=e.pop();switch(l){case x.CODES.get("i"):r|=z.FOLD_CASE,a=!0;break;case x.CODES.get("m"):r&=-17,a=!0;break;case x.CODES.get("s"):r|=z.DOT_NL,a=!0;break;case x.CODES.get("U"):r|=z.NON_GREEDY,a=!0;break;case x.CODES.get("-"):if(i<0)break e;i=-1,r=~r,a=!1;break;case x.CODES.get(":"):case x.CODES.get(")"):if(i<0){if(!a)break e;r=~r}l===x.CODES.get(":")&&this.op(D.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new Ne(Y.ERR_INVALID_PERL_OP,e.from(t))}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(D.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===D.Op.VERTICAL_BAR&&Y.isCharClass(this.stack[e-1])&&Y.isCharClass(this.stack[e-3])){let t=this.stack[e-1],s=this.stack[e-3];if(t.op>s.op){const r=s;s=t,t=r,this.stack[e-3]=s}return Y.mergeCharClass(s,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],s=this.stack[e-2];if(s.op===D.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=s,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ne(Y.ERR_INTERNAL_ERROR,"stack underflow");const t=this.pop(),s=this.pop();if(s.op!==D.Op.LEFT_PAREN)throw new Ne(Y.ERR_MISSING_PAREN,this.wholeRegexp);this.flags=s.flags,s.cap===0?this.push(t):(s.op=D.Op.CAPTURE,s.subs=[t],this.push(s))}parsePerlClassEscape(e,t){const s=e.pos();if((this.flags&z.PERL_X)===0||!e.more()||e.pop()!==x.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(s),i=Lh.has(r)?Lh.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&z.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const s=e.rest(),r=s.indexOf(":]");if(r<0)return!1;const i=s.substring(0,r+2);e.skipString(i);const a=Qh.has(i)?Qh.get(i):null;if(a===null)throw new Ne(Y.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(a,(this.flags&z.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const s=e.pos();if((this.flags&z.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===x.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(s),new Ne(Y.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let a;if(i!==x.CODES.get("{"))a=ae.runeToString(i);else{const d=e.rest(),p=d.indexOf("}");if(p<0)throw e.rewindTo(s),new Ne(Y.ERR_INVALID_CHAR_RANGE,e.rest());a=d.substring(0,p),e.skipString(a),e.skip(1)}a.length!==0&&a.codePointAt(0)===x.CODES.get("^")&&(r=0-r,a=a.substring(1));const l=Y.unicodeTable(a);if(l===null)throw new Ne(Y.ERR_INVALID_CHAR_RANGE,e.from(s));const c=l.first,u=l.second;if((this.flags&z.FOLD_CASE)===0||u===null)t.appendTableWithSign(c,r);else{const d=new Je().appendTable(c).appendTable(u).cleanClass().toArray();t.appendClassWithSign(d,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const s=this.newRegexp(D.Op.CHAR_CLASS);s.flags=this.flags;const r=new Je;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&z.CLASS_NL)===0&&r.appendRange(x.CODES.get(`
`),x.CODES.get(`
`)));let a=!0;for(;!e.more()||e.peek()!==x.CODES.get("]")||a;){if(e.more()&&e.lookingAt("-")&&(this.flags&z.PERL_X)===0&&!a){const d=e.rest();if(d==="-"||!d.startsWith("-]"))throw e.rewindTo(t),new Ne(Y.ERR_INVALID_CHAR_RANGE,e.rest())}a=!1;const l=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(l)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(l);const c=Y.parseClassChar(e,t);let u=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(u=Y.parseClassChar(e,t),u<c)throw new Ne(Y.ERR_INVALID_CHAR_RANGE,e.from(l))}(this.flags&z.FOLD_CASE)===0?r.appendRange(c,u):r.appendFoldedRange(c,u)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),s.runes=r.toArray(),this.push(s)}};v(Y,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),v(Y,"ERR_INVALID_CHAR_RANGE","invalid character class range"),v(Y,"ERR_INVALID_ESCAPE","invalid escape sequence"),v(Y,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),v(Y,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),v(Y,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),v(Y,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),v(Y,"ERR_MISSING_BRACKET","missing closing ]"),v(Y,"ERR_MISSING_PAREN","missing closing )"),v(Y,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),v(Y,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),v(Y,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name");let Kl=Y;class U9{constructor(){this.inst=null,this.cap=[]}}class Xh{constructor(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}contains(e){const t=this.sparse[e];return t<this.size&&this.densePcs[t]===e}isEmpty(){return this.size===0}add(e){const t=this.size++;return this.sparse[e]=t,this.denseThreads[t]=null,this.densePcs[t]=e,t}clear(){this.sparse=[],this.densePcs=[],this.denseThreads=[],this.size=0}toString(){let e="{";for(let t=0;t<this.size;t++)t!==0&&(e+=", "),e+=this.densePcs[t];return e+="}",e}}class lr{static fromRE2(e){const t=new lr;return t.prog=e.prog,t.re2=e,t.q0=new Xh(t.prog.numInst()),t.q1=new Xh(t.prog.numInst()),t.pool=[],t.poolSize=0,t.matched=!1,t.matchcap=Array(t.prog.numCap<2?2:t.prog.numCap).fill(0),t.ncap=0,t}static fromMachine(e){const t=new lr;return t.re2=e.re2,t.prog=e.prog,t.q0=e.q0,t.q1=e.q1,t.pool=e.pool,t.poolSize=e.poolSize,t.matched=e.matched,t.matchcap=e.matchcap,t.ncap=e.ncap,t}init(e){this.ncap=e,e>this.matchcap.length?this.initNewCap(e):this.resetCap(e)}resetCap(e){for(let t=0;t<this.poolSize;t++){const s=this.pool[t];s.cap=Array(e).fill(0)}}initNewCap(e){for(let t=0;t<this.poolSize;t++){const s=this.pool[t];s.cap=Array(e).fill(0)}this.matchcap=Array(e).fill(0)}submatches(){return this.ncap===0?ae.emptyInts():this.matchcap.slice(0,this.ncap)}alloc(e){let t;return this.poolSize>0?(this.poolSize--,t=this.pool[this.poolSize]):t=new U9,t.inst=e,t}freeQueue(e,t=0){const s=e.size-t,r=this.poolSize+s;this.pool.length<r&&(this.pool=this.pool.slice(0,Math.max(this.pool.length*2,r)));for(let i=t;i<e.size;i++){const a=e.denseThreads[i];a!==null&&(this.pool[this.poolSize]=a,this.poolSize++)}e.clear()}freeThread(e){this.pool.length<=this.poolSize&&(this.pool=this.pool.slice(0,this.pool.length*2)),this.pool[this.poolSize]=e,this.poolSize++}match(e,t,s){const r=this.re2.cond;if(r===ae.EMPTY_ALL||(s===z.ANCHOR_START||s===z.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap=Array(this.prog.numCap).fill(-1);let i=this.q0,a=this.q1,l=e.step(t),c=l>>3,u=l&7,d=-1,p=0;l!==zn.EOF()&&(l=e.step(t+u),d=l>>3,p=l&7);let y;for(t===0?y=ae.emptyOpContext(-1,c):y=e.context(t);;){if(i.isEmpty()){if((r&ae.EMPTY_BEGIN_TEXT)!==0&&t!==0||this.matched)break;if(this.re2.prefix.length!==0&&d!==this.re2.prefixRune&&e.canCheckPrefix()){const L=e.index(this.re2,t);if(L<0)break;t+=L,l=e.step(t),c=l>>3,u=l&7,l=e.step(t+u),d=l>>3,p=l&7}}!this.matched&&(t===0||s===z.UNANCHORED)&&(this.ncap>0&&(this.matchcap[0]=t),this.add(i,this.prog.start,t,this.matchcap,y,null));const b=t+u;if(y=e.context(b),this.step(i,a,t,b,c,y,s,t===e.endPos()),u===0||this.ncap===0&&this.matched)break;t+=u,c=d,u=p,c!==-1&&(l=e.step(t+u),d=l>>3,p=l&7);const R=i;i=a,a=R}return this.freeQueue(a),this.matched}step(e,t,s,r,i,a,l,c){const u=this.re2.longest;for(let d=0;d<e.size;d++){let p=e.denseThreads[d];if(p===null)continue;if(u&&this.matched&&this.ncap>0&&this.matchcap[0]<p.cap[0]){this.freeThread(p);continue}const y=p.inst;let b=!1;switch(y.op){case oe.MATCH:if(l===z.ANCHOR_BOTH&&!c)break;this.ncap>0&&(!u||!this.matched||this.matchcap[1]<s)&&(p.cap[1]=s,this.matchcap=p.cap.slice(0,this.ncap)),u||this.freeQueue(e,d+1),this.matched=!0;break;case oe.RUNE:b=y.matchRune(i);break;case oe.RUNE1:b=i===y.runes[0];break;case oe.RUNE_ANY:b=!0;break;case oe.RUNE_ANY_NOT_NL:b=i!==x.CODES.get(`
`);break;default:throw new Error("bad inst")}b&&(p=this.add(t,y.out,r,p.cap,a,p)),p!==null&&(this.freeThread(p),e.denseThreads[d]=null)}e.clear()}add(e,t,s,r,i,a){if(t===0||e.contains(t))return a;const l=e.add(t),c=this.prog.inst[t];switch(c.op){case oe.FAIL:break;case oe.ALT:case oe.ALT_MATCH:a=this.add(e,c.out,s,r,i,a),a=this.add(e,c.arg,s,r,i,a);break;case oe.EMPTY_WIDTH:(c.arg&~i)===0&&(a=this.add(e,c.out,s,r,i,a));break;case oe.NOP:a=this.add(e,c.out,s,r,i,a);break;case oe.CAPTURE:if(c.arg<this.ncap){const u=r[c.arg];r[c.arg]=s,this.add(e,c.out,s,r,i,null),r[c.arg]=u}else a=this.add(e,c.out,s,r,i,a);break;case oe.MATCH:case oe.RUNE:case oe.RUNE1:case oe.RUNE_ANY:case oe.RUNE_ANY_NOT_NL:a===null?a=this.alloc(c):a.inst=c,this.ncap>0&&a.cap!==r&&(a.cap=r.slice(0,this.ncap)),e.denseThreads[l]=a,a=null;break;default:throw new Error("unhandled")}return a}}class F9{constructor(e){this.value=e}get(){return this.value}set(e){this.value=e}compareAndSet(e,t){return this.value===e?(this.value=t,!0):!1}}class $n{static initTest(e){const t=$n.compile(e),s=new $n(t.expr,t.prog,t.numSubexp,t.longest);return s.cond=t.cond,s.prefix=t.prefix,s.prefixUTF8=t.prefixUTF8,s.prefixComplete=t.prefixComplete,s.prefixRune=t.prefixRune,s}static compile(e){return $n.compileImpl(e,z.PERL,!1)}static compilePOSIX(e){return $n.compileImpl(e,z.POSIX,!0)}static compileImpl(e,t,s){let r=Kl.parse(e,t);const i=r.maxCap();r=Bt.simplify(r);const a=ni.compileRegexp(r),l=new $n(e,a,i,s),[c,u]=a.prefix();return l.prefixComplete=c,l.prefix=u,l.prefixUTF8=ae.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=r.namedGroups,l}static match(e,t){return $n.compile(e).match(t)}constructor(e,t,s=0,r=0){this.expr=e,this.prog=t,this.numSubexp=s,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.pooled=new F9}numberOfCapturingGroups(){return this.numSubexp}get(){let e;do e=this.pooled.get();while(e&&!this.pooled.compareAndSet(e,e.next));return e}reset(){this.pooled.set(null)}put(e,t){let s=this.pooled.get();do s=this.pooled.get(),!t&&s&&(e=lr.fromMachine(e),t=!0),e.next!==s&&(e.next=s);while(!this.pooled.compareAndSet(s,e))}toString(){return this.expr}doExecute(e,t,s,r){let i=this.get(),a=!1;i?i.next!==null&&(i=lr.fromMachine(i),a=!0):(i=lr.fromRE2(this),a=!0),i.init(r);const l=i.match(e,t,s)?i.submatches():null;return this.put(i,a),l}match(e){return this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,0)!==null}matchWithGroup(e,t,s,r,i){return e instanceof is||(e=Ga.utf16(e)),this.matchMachineInput(e,t,s,r,i)}matchMachineInput(e,t,s,r,i){if(t>s)return[!1,null];const a=e.isUTF16Encoding()?Oe.fromUTF16(e.asCharSequence(),0,s):Oe.fromUTF8(e.asBytes(),0,s),l=this.doExecute(a,t,r,2*i);return l===null?[!1,null]:[!0,l]}matchUTF8(e){return this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,s){let r=0,i=0,a="";const l=Oe.fromUTF16(e);let c=0;for(;i<=e.length;){const u=this.doExecute(l,i,z.UNANCHORED,2);if(u===null||u.length===0)break;a+=e.substring(r,u[0]),(u[1]>r||u[0]===0)&&(a+=t(e.substring(u[0],u[1])),c++),r=u[1];const d=l.step(i)&7;if(i+d>u[1]?i+=d:i+1>u[1]?i++:i=u[1],c>=s)break}return a+=e.substring(r),a}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let s=new Array(t).fill(-1);for(let r=0;r<e.length;r++)s[r]=e[r];e=s}return e}allMatches(e,t,s=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let a=0,l=0,c=-1;for(;l<t&&a<=i;){const u=this.doExecute(e,a,z.UNANCHORED,this.prog.numCap);if(u===null||u.length===0)break;let d=!0;if(u[1]===a){u[0]===c&&(d=!1);const p=e.step(a);p<0?a=i+1:a+=p&7}else a=u[1];c=u[1],d&&(r.push(s(this.pad(u))),l++)}return r}findUTF8(e){const t=this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,2)}findUTF8Submatch(e){const t=this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.slice(t[2*r],t[2*r+1]));return s}findUTF8SubmatchIndex(e){return this.pad(this.doExecute(Oe.fromUTF8(e),0,z.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap);if(t===null)return null;const s=new Array(1+this.numSubexp).fill(null);for(let r=0;r<s.length;r++)2*r<t.length&&t[2*r]>=0&&(s[r]=e.substring(t[2*r],t[2*r+1]));return s}findSubmatchIndex(e){return this.pad(this.doExecute(Oe.fromUTF16(e),0,z.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const s=this.allMatches(Oe.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return s.length===0?null:s}findAllUTF8Index(e,t){const s=this.allMatches(Oe.fromUTF8(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAll(e,t){const s=this.allMatches(Oe.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return s.length===0?null:s}findAllIndex(e,t){const s=this.allMatches(Oe.fromUTF16(e),t,r=>r.slice(0,2));return s.length===0?null:s}findAllUTF8Submatch(e,t){const s=this.allMatches(Oe.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let a=0;a<i.length;a++)r[2*a]>=0&&(i[a]=e.slice(r[2*a],r[2*a+1]));return i});return s.length===0?null:s}findAllUTF8SubmatchIndex(e,t){const s=this.allMatches(Oe.fromUTF8(e),t);return s.length===0?null:s}findAllSubmatch(e,t){const s=this.allMatches(Oe.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let a=0;a<i.length;a++)r[2*a]>=0&&(i[a]=e.substring(r[2*a],r[2*a+1]));return i});return s.length===0?null:s}findAllSubmatchIndex(e,t){const s=this.allMatches(Oe.fromUTF16(e),t);return s.length===0?null:s}}const lt=class lt{static quote(e){return ae.quoteMeta(e)}static compile(e,t=0){let s=e;if((t&lt.CASE_INSENSITIVE)!==0&&(s=`(?i)${s}`),(t&lt.DOTALL)!==0&&(s=`(?s)${s}`),(t&lt.MULTILINE)!==0&&(s=`(?m)${s}`),(t&-32)!==0)throw new O9("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH");let r=z.PERL;(t&lt.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129);const i=new lt(e,t);return i.re2Input=$n.compileImpl(s,r,(t&lt.LONGEST_MATCH)!==0),i}static matches(e,t){return lt.compile(e).matcher(t).matches()}static initTest(e,t,s){if(e==null)throw new Error("pattern is null");if(s==null)throw new Error("re2 is null");const r=new lt(e,t);return r.re2Input=s,r}constructor(e,t){this.patternInput=e,this.flagsInput=t}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.matcher(e).matches()}matcher(e){return Array.isArray(e)&&(e=Ga.utf8(e)),new D9(this,e)}split(e,t=0){const s=this.matcher(e),r=[];let i=0,a=0;for(;s.find();){if(a===0&&s.end()===0){a=s.end();continue}if(t>0&&r.length===t-1)break;if(a===s.start()){if(t===0){i+=1,a=s.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(s.substring(a,s.start())),a=s.end()}if(t===0&&a!==s.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(s.substring(a,s.inputLength()))}return(t!==0||r.length===0)&&r.push(s.substring(a,s.inputLength())),r}toString(){return this.patternInput}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};v(lt,"CASE_INSENSITIVE",1),v(lt,"DOTALL",2),v(lt,"MULTILINE",4),v(lt,"DISABLE_UNICODE_GROUPS",8),v(lt,"LONGEST_MATCH",16);let mi=lt;/**
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
 */let vr="12.15.0";function B9(n){vr=n}/**
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
 */const Ms=new uo("@firebase/firestore");function Zs(){return Ms.logLevel}function G(n,...e){if(Ms.logLevel<=pe.DEBUG){const t=e.map(Dc);Ms.debug(`Firestore (${vr}): ${n}`,...t)}}function Sn(n,...e){if(Ms.logLevel<=pe.ERROR){const t=e.map(Dc);Ms.error(`Firestore (${vr}): ${n}`,...t)}}function Kt(n,...e){if(Ms.logLevel<=pe.WARN){const t=e.map(Dc);Ms.warn(`Firestore (${vr}): ${n}`,...t)}}function Dc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function J(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Of(n,s,t)}function Of(n,e,t){let s=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Sn(s),new Error(s)}function K(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Of(e,r,s)}function ie(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class En{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Df{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class q9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ze.UNAUTHENTICATED)))}shutdown(){}}class H9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class j9{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(K(typeof s.accessToken=="string",31837,{l:s}),new Df(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class G9{constructor(e,t,s){this.T=e,this.P=t,this.R=s,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.I=new Map}A(){return this.R?this.R():null}get headers(){this.I.set("X-Goog-AuthUser",this.T);const e=this.A();return e&&this.I.set("Authorization",e),this.P&&this.I.set("X-Goog-Iam-Authorization-Token",this.P),this.I}}class z9{constructor(e,t,s){this.T=e,this.P=t,this.R=s}getToken(){return Promise.resolve(new G9(this.T,this.P,this.R))}start(e,t){e.enqueueRetryable((()=>t(Ze.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class W9{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,St(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){K(this.o===void 0,3512);const s=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(K(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Jh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function K9(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Lc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=K9(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function he(n,e){return n<e?-1:n>e?1:0}function Yl(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Il(r)===Il(i)?he(r,i):Il(r)?1:-1}return he(n.length,e.length)}const Y9=55296,Q9=57343;function Il(n){const e=n.charCodeAt(0);return e>=Y9&&e<=Q9}function hr(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
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
 */const Zt="__name__";class Jt{constructor(e,t,s){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&J(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=Jt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return he(e.length,t.length)}static compareSegments(e,t){const s=Jt.isNumericId(e),r=Jt.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?Jt.extractNumericId(e).compare(Jt.extractNumericId(t)):Yl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jn.fromString(e.substring(4,e.length-2))}}class ye extends Jt{construct(e,t,s){return new ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new ye(t)}static emptyPath(){return new ye([])}}const X9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Jt{construct(e,t,s){return new Be(e,t,s)}static isValidIdentifier(e){return X9.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zt}static keyField(){return new Be([Zt])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(s+=l,r++):(i(),r++)}if(i(),a)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(t)}static emptyPath(){return new Be([])}}/**
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
 */function Lf(n,e,t){if(!t)throw new j(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function J9(n,e,t,s){if(e===!0&&s===!0)throw new j(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zh(n){if(!Q.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ed(n){if(Q.isDocumentKey(n))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mi(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function jt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vo(n);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function $i(n,e){if(!Mi(n))throw new j(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new j(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const td=-62135596800,nd=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*nd);return new Ee(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<td)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/nd}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($i(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-td;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:Ve("string",Ee._jsonSchemaVersion),seconds:Ve("number"),nanoseconds:Ve("number")};/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ee(0,0))}static max(){return new re(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const gi=-1;function Z9(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=re.fromTimestamp(s===1e9?new Ee(t+1,0):new Ee(t,s));return new as(r,Q.empty(),e)}function e8(n){return new as(n.readTime,n.key,gi)}class as{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new as(re.min(),Q.empty(),gi)}static max(){return new as(re.max(),Q.empty(),gi)}}function t8(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Q.comparator(n.documentKey,e.documentKey),t!==0?t:he(n.largestBatchId,e.largestBatchId))}/**
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
 */const n8="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class s8{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function wr(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==n8)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,s)=>{t(e)}))}static reject(e){return new M(((t,s)=>{s(e)}))}static waitFor(e){return new M(((t,s)=>{let r=0,i=0,a=!1;e.forEach((l=>{++r,l.next((()=>{++i,a&&i===r&&t()}),(c=>s(c)))})),a=!0,i===r&&t()}))}static or(e){let t=M.resolve(!1);for(const s of e)t=t.next((r=>r?M.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new M(((s,r)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next((d=>{a[u]=d,++l,l===i&&s(a)}),(d=>r(d)))}}))}static doWhile(e,t){return new M(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function r8(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Er(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wo.ce=-1;/**
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
 */const Vc=-1;function Eo(n){return n==null}function yi(n){return n===0&&1/n==-1/0}function i8(n){return typeof n=="number"&&Number.isInteger(n)&&!yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}function a8(n){return typeof n=="string"}/**
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
 */const Vf="";function o8(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=sd(e)),e=l8(n.get(t),e);return sd(e)}function l8(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Vf:t+="";break;default:t+=i}}return t}function sd(n){return n+Vf+""}/**
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
 */class Te{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new Te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ua(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ua(this.root,e,this.comparator,!1)}getReverseIterator(){return new ua(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ua(this.root,e,this.comparator,!0)}}class ua{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??We.RED,this.left=r??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new We(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return We.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rd(this.data.getIterator())}getIteratorFrom(e){return new rd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Me(this.comparator);return t.data=e,t}}class rd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ht{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Ht([])}unionWith(e){let t=new Me(Be.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hr(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */function za(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function c8(n,e){const t=[];for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.push(e(n[s],s,n));return t}function Mf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class $f extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new $f("Invalid base64 string: "+i):i}})(e);return new $e(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new $e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const u8=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(n){if(K(!!n,39018),typeof n=="string"){let e=0;const t=u8.exec(n);if(K(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(n.seconds),nanos:Se(n.nanos)}}function Se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ls(n){return typeof n=="string"?$e.fromBase64String(n):$e.fromUint8Array(n)}/**
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
 */const Uf="server_timestamp",Ff="__type__",Bf="__previous_value__",qf="__local_write_time__";function bo(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ff])==null?void 0:s.stringValue)===Uf}function Ui(n){const e=n.mapValue.fields[Bf];return bo(e)?Ui(e):e}function dr(n){const e=os(n.mapValue.fields[qf].timestampValue);return new Ee(e.seconds,e.nanos)}/**
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
 */class h8{constructor(e,t,s,r,i,a,l,c,u,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=p}}const Wa="(default)";class _i{constructor(e,t){this.projectId=e,this.database=t||Wa}static empty(){return new _i("","")}get isDefaultDatabase(){return this.database===Wa}isEqual(e){return e instanceof _i&&e.projectId===this.projectId&&e.database===this.database}}function d8(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _i(n.options.projectId,e)}/**
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
 */const Hf="__type__",p8="__max__",ha={mapValue:{}},jf="__vector__",vi="value",pr={nullValue:"NULL_VALUE"},_t={booleanValue:!0},ze={booleanValue:!1};function Ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bo(n)?4:f8(n)?9007199254740991:Ka(n)?10:11:J(28295,{value:n})}function $t(n,e,t){if(n===e)return!0;const s=Ue(n);if(s!==Ue(e))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dr(n).isEqual(dr(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=os(i.timestampValue),c=os(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return ls(i.bytesValue).isEqual(ls(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return Se(i.geoPointValue.latitude)===Se(a.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a,l){if("integerValue"in i&&"integerValue"in a)return Se(i.integerValue)===Se(a.integerValue);let c,u;if("doubleValue"in i&&"doubleValue"in a)c=Se(i.doubleValue),u=Se(a.doubleValue);else{if(!(l!=null&&l.Ee))return!1;c=Se(i.integerValue??i.doubleValue),u=Se(a.integerValue??a.doubleValue)}return c===u?!!(l!=null&&l.he)||yi(c)===yi(u):!!(l===void 0||l.Te)&&isNaN(c)&&isNaN(u)})(n,e,t);case 9:return hr(n.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>$t(r,i,t)));case 10:case 11:return(function(i,a,l){const c=i.mapValue.fields||{},u=a.mapValue.fields||{};if(za(c)!==za(u))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(u[d]===void 0||!$t(c[d],u[d],l)))return!1;return!0})(n,e,t);default:return J(52216,{left:n})}}function wi(n,e){return(n.values||[]).find((t=>$t(t,e)))!==void 0}function vt(n,e){if(n===e)return 0;const t=Ue(n),s=Ue(e);if(t!==s)return he(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return he(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Se(i.integerValue||i.doubleValue),c=Se(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return id(n.timestampValue,e.timestampValue);case 4:return id(dr(n),dr(e));case 5:return Yl(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=ls(i),c=ls(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=he(l[u],c[u]);if(d!==0)return d}return he(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=he(Se(i.latitude),Se(a.latitude));return l!==0?l:he(Se(i.longitude),Se(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ad(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var y,b,R,L;const l=i.fields||{},c=a.fields||{},u=(y=l[vi])==null?void 0:y.arrayValue,d=(b=c[vi])==null?void 0:b.arrayValue,p=he(((R=u==null?void 0:u.values)==null?void 0:R.length)||0,((L=d==null?void 0:d.values)==null?void 0:L.length)||0);return p!==0?p:ad(u,d)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ha.mapValue&&a===ha.mapValue)return 0;if(i===ha.mapValue)return 1;if(a===ha.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const y=Yl(c[p],d[p]);if(y!==0)return y;const b=vt(l[c[p]],u[d[p]]);if(b!==0)return b}return he(c.length,d.length)})(n.mapValue,e.mapValue);default:throw J(23264,{Pe:t})}}function id(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return he(n,e);const t=os(n),s=os(e),r=he(t.seconds,s.seconds);return r!==0?r:he(t.nanos,s.nanos)}function ad(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=vt(t[r],s[r]);if(i!==void 0&&i!==0)return i}return he(t.length,s.length)}function fr(n){return Ql(n)}function Ql(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=os(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ls(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Ql(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Ql(t.fields[a])}`;return r+"}"})(n.mapValue):J(61005,{value:n})}function Ta(n){switch(Ue(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ui(n);return e?16+Ta(e):16;case 5:return 2*n.stringValue.length;case 6:return ls(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Ta(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return Gs(s.fields,((i,a)=>{r+=i.length+Ta(a)})),r})(n.mapValue);default:throw J(13486,{value:n})}}function od(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function en(n){return!!n&&"integerValue"in n}function Ss(n){return!!n&&"doubleValue"in n}function cs(n){return en(n)||Ss(n)}function mr(n){return!!n&&"arrayValue"in n}function Ct(n){return!!n&&"nullValue"in n}function wt(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rs(n){return!!n&&"mapValue"in n}function Ka(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Hf])==null?void 0:s.stringValue)===jf}function Xl(n){var e,t;return(t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[vi])==null?void 0:t.arrayValue}function ri(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Gs(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ri(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ri(n.arrayValue.values[t]);return e}return{...n}}function f8(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===p8}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Rs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ri(t)}setAll(e){let t=Be.emptyPath(),s={},r=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=l.popLast()}a?s[l.lastSegment()]=ri(a):r.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Rs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Rs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Gs(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Rt(ri(this.value))}}function Gf(n){const e=[];return Gs(n.fields,((t,s)=>{const r=new Be([t]);if(Rs(s)){const i=Gf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new Ht(e)}/**
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
 */function Ao(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yi(e)?"-0":e}}function Mc(n){return{integerValue:""+n}}function $c(n,e,t){return Number.isInteger(e)&&(t!=null&&t.preferIntegers)||i8(e)?Mc(e):Ao(n,e)}/**
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
 */class To{constructor(){this._=void 0}}function m8(n,e,t){return n instanceof Ei?(function(r,i){const a={fields:{[Ff]:{stringValue:Uf},[qf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&bo(i)&&(i=Ui(i)),i&&(a.fields[Bf]=i),{mapValue:a}})(t,e):n instanceof bi?Wf(n,e):n instanceof Ai?Kf(n,e):n instanceof Ti?(function(r,i){const a=zf(r,i),l=Xa(a)+Xa(r.Re);return en(a)&&en(r.Re)?Mc(l):Ao(r.serializer,l)})(n,e):n instanceof Ya?(function(r,i){return ld(r,i,Math.min)})(n,e):n instanceof Qa?(function(r,i){return ld(r,i,Math.max)})(n,e):void 0}function g8(n,e,t){return n instanceof bi?Wf(n,e):n instanceof Ai?Kf(n,e):t}function zf(n,e){return n instanceof Ti?cs(e)?e:{integerValue:0}:null}class Ei extends To{}class bi extends To{constructor(e){super(),this.elements=e}}function Wf(n,e){const t=Yf(e);for(const s of n.elements)t.some((r=>$t(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Ai extends To{constructor(e){super(),this.elements=e}}function Kf(n,e){let t=Yf(e);for(const s of n.elements)t=t.filter((r=>!$t(r,s)));return{arrayValue:{values:t}}}class Uc extends To{constructor(e,t){super(),this.serializer=e,this.Re=t}}class Ti extends Uc{}class Ya extends Uc{}class Qa extends Uc{}function ld(n,e,t){if(!cs(e))return n.Re;const s=t(Xa(e),Xa(n.Re));return en(e)&&en(n.Re)?Mc(s):Ao(n.serializer,s)}function Xa(n){return Se(n.integerValue||n.doubleValue)}function Yf(n){return mr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class y8{constructor(e,t){this.field=e,this.transform=t}}function _8(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof bi&&r instanceof bi||s instanceof Ai&&r instanceof Ai?hr(s.elements,r.elements,$t):s instanceof Ti&&r instanceof Ti||s instanceof Ya&&r instanceof Ya||s instanceof Qa&&r instanceof Qa?$t(s.Re,r.Re):s instanceof Ei&&r instanceof Ei})(n.transform,e.transform)}class v8{constructor(e,t){this.version=e,this.transformResults=t}}class an{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ia(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Io{}function Qf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Jf(n.key,an.none()):new Fi(n.key,n.data,an.none());{const t=n.data,s=Rt.empty();let r=new Me(Be.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new zs(n.key,s,new Ht(r.toArray()),an.none())}}function w8(n,e,t){n instanceof Fi?(function(r,i,a){const l=r.value.clone(),c=ud(r.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof zs?(function(r,i,a){if(!Ia(r.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ud(r.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Xf(r)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function ii(n,e,t,s){return n instanceof Fi?(function(i,a,l,c){if(!Ia(i.precondition,a))return l;const u=i.value.clone(),d=hd(i.fieldTransforms,c,a);return u.setAll(d),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null})(n,e,t,s):n instanceof zs?(function(i,a,l,c){if(!Ia(i.precondition,a))return l;const u=hd(i.fieldTransforms,c,a),d=a.data;return d.setAll(Xf(i)),d.setAll(u),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(n,e,t,s):(function(i,a,l){return Ia(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function E8(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=zf(s.transform,r||null);i!=null&&(t===null&&(t=Rt.empty()),t.set(s.field,i))}return t||null}function cd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&hr(s,r,((i,a)=>_8(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fi extends Io{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zs extends Io{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function ud(n,e,t){const s=new Map;K(n.length===t.length,32656,{Ie:t.length,Ae:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,l=e.data.field(i.field);s.set(i.field,g8(a,l,t[r]))}return s}function hd(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,m8(i,a,e))}return s}class Jf extends Io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b8 extends Io{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ja{constructor(e,t){this.position=e,this.inclusive=t}}function dd(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=Q.comparator(Q.fromName(a.referenceValue),t.key):s=vt(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function pd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$t(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Zf{}class Le extends Zf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new T8(e,t,s):t==="array-contains"?new R8(e,s):t==="in"?new C8(e,s):t==="not-in"?new P8(e,s):t==="array-contains-any"?new x8(e,s):new Le(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new I8(e,s):new S8(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vt(t,this.value)):t!==null&&Ue(this.value)===Ue(t)&&this.matchesComparison(vt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Zf{constructor(e,t){super(),this.filters=e,this.op=t,this.Ve=null}static create(e,t){return new Yt(e,t)}matches(e){return em(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Ve!==null||(this.Ve=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Ve}getFilters(){return Object.assign([],this.filters)}}function em(n){return n.op==="and"}function tm(n){return A8(n)&&em(n)}function A8(n){for(const e of n.filters)if(e instanceof Yt)return!1;return!0}function Jl(n){if(n instanceof Le)return n.field.canonicalString()+n.op.toString()+fr(n.value);if(tm(n))return n.filters.map((e=>Jl(e))).join(",");{const e=n.filters.map((t=>Jl(t))).join(",");return`${n.op}(${e})`}}function nm(n,e){return n instanceof Le?(function(s,r){return r instanceof Le&&s.op===r.op&&s.field.isEqual(r.field)&&$t(s.value,r.value)})(n,e):n instanceof Yt?(function(s,r){return r instanceof Yt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,l)=>i&&nm(a,r.filters[l])),!0):!1})(n,e):void J(19439)}function sm(n){return n instanceof Le?(function(t){return`${t.field.canonicalString()} ${t.op} ${fr(t.value)}`})(n):n instanceof Yt?(function(t){return t.op.toString()+" {"+t.getFilters().map(sm).join(" ,")+"}"})(n):"Filter"}class T8 extends Le{constructor(e,t,s){super(e,t,s),this.key=Q.fromName(s.referenceValue)}matches(e){const t=Q.comparator(e.key,this.key);return this.matchesComparison(t)}}class I8 extends Le{constructor(e,t){super(e,"in",t),this.keys=rm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class S8 extends Le{constructor(e,t){super(e,"not-in",t),this.keys=rm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>Q.fromName(s.referenceValue)))}class R8 extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mr(t)&&wi(t.arrayValue,this.value)}}class C8 extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&wi(this.value.arrayValue,t)}}class P8 extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!wi(this.value.arrayValue,t)}}class x8 extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mr(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>wi(this.value.arrayValue,s)))}}/**
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
 */class Ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function k8(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class et{constructor(e,t,s,r,i,a,l){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new et(e,0,re.min(),re.min(),re.min(),Rt.empty(),0)}static newFoundDocument(e,t,s,r){return new et(e,1,t,re.min(),s,r,0)}static newNoDocument(e,t){return new et(e,2,t,re.min(),re.min(),Rt.empty(),0)}static newUnknownDocument(e,t){return new et(e,3,t,re.min(),re.min(),Rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class N8{constructor(e,t=null,s=[],r=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=l,this.de=null}}function fd(n,e=null,t=[],s=[],r=null,i=null,a=null){return new N8(n,e,t,s,r,i,a)}function im(n){const e=ie(n);if(e.de===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Jl(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),Eo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>fr(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>fr(s))).join(",")),e.de=t}return e.de}function am(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!k8(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pd(n.startAt,e.startAt)&&pd(n.endAt,e.endAt)}function Ts(n){return!!n.isCorePipeline}function om(n){return!!n.path&&Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class br{constructor(e,t=null,s=[],r=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.fe=null,this.me=null,this.pe=null,this.startAt,this.endAt}}function O8(n,e,t,s,r,i,a,l){return new br(n,e,t,s,r,i,a,l)}function So(n){return new br(n)}function md(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function D8(n){return Q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function lm(n){return n.collectionGroup!==null}function ai(n){const e=ie(n);if(e.fe===null){e.fe=[];const t=new Set;for(const i of e.explicitOrderBy)e.fe.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Me(Be.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.fe.push(new Ii(i,s))})),t.has(Be.keyField().canonicalString())||e.fe.push(new Ii(Be.keyField(),s))}return e.fe}function on(n){const e=ie(n);return e.me||(e.me=L8(e,ai(n))),e.me}function L8(n,e){if(n.limitType==="F")return fd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Ii(r.field,i)}));const t=n.endAt?new Ja(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ja(n.startAt.position,n.startAt.inclusive):null;return fd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Zl(n,e){const t=n.filters.concat([e]);return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function V8(n,e){const t=n.explicitOrderBy.concat([e]);return new br(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Za(n,e,t){return new br(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function M8(n,e){return am(on(n),on(e))&&n.limitType===e.limitType}function oi(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>sm(r))).join(", ")}]`),Eo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>fr(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>fr(r))).join(",")),`Target(${s})`})(on(n))}; limitType=${n.limitType})`}function Ro(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):Q.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of ai(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,l,c){const u=dd(a,l,c);return a.inclusive?u<=0:u<0})(s.startAt,ai(s),r)||s.endAt&&!(function(a,l,c){const u=dd(a,l,c);return a.inclusive?u>=0:u>0})(s.endAt,ai(s),r))})(n,e)}function Fc(n){return(e,t)=>{let s=!1;for(const r of ai(n)){const i=$8(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function $8(n,e,t){const s=n.field.isKeyField()?Q.comparator(e.key,t.key):(function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?vt(c,u):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return J(19790,{direction:n.dir})}}/**
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
 */class U8{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var De,me;function F8(n){switch(n){case V.OK:return J(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return J(15467,{code:n})}}function cm(n){if(n===void 0)return Sn("GRPC error has no .code"),V.UNKNOWN;switch(n){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(me=De||(De={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ws{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return Mf(this.inner)}size(){return this.innerSize}}/**
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
 */const B8=new Te(Q.comparator);function mt(){return B8}const um=new Te(Q.comparator);function er(...n){let e=um;for(const t of n)e=e.insert(t.key,t);return e}function hm(n){let e=um;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Wn(){return li()}function dm(){return li()}function li(){return new Ws((n=>n.toString()),((n,e)=>n.isEqual(e)))}const q8=new Te(Q.comparator),H8=new Me(Q.comparator);function ce(...n){let e=H8;for(const t of n)e=e.add(t);return e}const j8=new Me(he);function G8(){return j8}/**
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
 */function z8(){return new TextEncoder}/**
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
 */const W8=new Jn([4294967295,4294967295],0);function gd(n){const e=z8().encode(n),t=new Sf;return t.update(e),new Uint8Array(t.digest())}function yd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jn([t,s],0),new Jn([r,i],0)]}class Bc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Jr(`Invalid padding: ${t}`);if(s<0)throw new Jr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Jr(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Jr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.ye=Jn.fromNumber(this.ge)}we(e,t,s){let r=e.add(t.multiply(Jn.fromNumber(s)));return r.compare(W8)===1&&(r=new Jn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=gd(e),[s,r]=yd(t);for(let i=0;i<this.hashCount;i++){const a=this.we(s,r,i);if(!this.be(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Bc(i,r,t);return s.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=gd(e),[s,r]=yd(t);for(let i=0;i<this.hashCount;i++){const a=this.we(s,r,i);this.ve(a)}}ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Jr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bi{constructor(e,t,s,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,qi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Bi(re.min(),r,new Te(he),mt(),mt(),ce())}}class qi{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new qi(s,t,ce(),ce(),ce())}}/**
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
 */class Sa{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=r}}class pm{constructor(e,t){this.targetId=e,this.xe=t}}class fm{constructor(e,t,s=$e.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class _d{constructor(e){this.targetId=e,this.Ce=0,this.Fe=vd(),this.Oe=$e.EMPTY_BYTE_STRING,this.Me=!1,this.Ne=!0}get current(){return this.Me}get resumeToken(){return this.Oe}get Le(){return this.Ce!==0}get Be(){return this.Ne}Ue(e){e.approximateByteSize()>0&&(this.Ne=!0,this.Oe=e)}ke(){let e=ce(),t=ce(),s=ce();return this.Fe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:J(38017,{changeType:i})}})),new qi(this.Oe,this.Me,e,t,s)}qe(){this.Ne=!1,this.Fe=vd()}$e(e,t){this.Ne=!0,this.Fe=this.Fe.insert(e,t)}Ke(e){this.Ne=!0,this.Fe=this.Fe.remove(e)}We(){this.Ce+=1}Qe(){this.Ce-=1,K(this.Ce>=0,3241,{Ce:this.Ce,targetId:this.targetId})}Ge(){this.Ne=!0,this.Me=!0}}const Gr="WatchChangeAggregator";class K8{constructor(e){this.ze=e,this.je=new Map,this.He=mt(),this.Je=da(),this.Ye=mt(),this.Ze=da(),this.Xe=new Te(he)}et(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.tt(t,e.De):this.nt(t,e.key,e.De);for(const t of e.removedTargetIds)this.nt(t,e.key,e.De)}rt(e){this.forEachTarget(e,(t=>{const s=this.je.get(t);if(s)switch(e.state){case 0:this.it(t)&&s.Ue(e.resumeToken);break;case 1:s.Qe(),s.Le||s.qe(),s.Ue(e.resumeToken);break;case 2:s.Qe(),s.Le||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.Ue(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.Ue(e.resumeToken));break;default:J(56790,{state:e.state})}else G(Gr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach(((s,r)=>{this.it(r)&&t(r)}))}_t(e){var t;return Ts(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:om(e)}ot(e){const t=e.targetId,s=e.xe.count,r=this.ut(t);if(r){const i=r.target;if(this._t(i))if(s===0){const a=new Q(Ts(i)?ye.fromString(i.getPipelineDocuments()[0]):i.path);this.nt(t,a,et.newNoDocument(a,re.min()))}else K(s===1,20013,"Single document existence filter with count: "+s);else{const a=this.ct(t);if(a!==s){const l=this.lt(e),c=l?this.Et(l,e,a):1;if(c!==0){this.st(t);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Xe=this.Xe.insert(t,u)}}}}}lt(e){const t=e.xe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,l;try{a=ls(s).toUint8Array()}catch(c){if(c instanceof $f)return Kt("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Bc(a,r,i)}catch(c){return Kt(c instanceof Jr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}Et(e,t,s){return t.xe.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.ze.Tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.nt(t,i,null),r++)})),r}Rt(e){const t=new Map;this.je.forEach(((i,a)=>{const l=this.ut(a);if(l){if(i.current&&this._t(l.target)){const c=Ts(l.target)?ye.fromString(l.target.getPipelineDocuments()[0]):l.target.path,u=new Q(c);this.It(u).has(a)||this.At(a,u)||this.nt(a,u,et.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}}));let s=ce();this.Ze.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const u=this.ut(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(s=s.add(i))})),this.He.forEach(((i,a)=>a.setReadTime(e))),this.Ye.forEach(((i,a)=>a.setReadTime(e)));const r=new Bi(e,t,this.Xe,this.He,this.Ye,s);return this.He=mt(),this.Je=da(),this.Ye=mt(),this.Ze=da(),this.Xe=new Te(he),r}tt(e,t){const s=this.je.get(e);if(!s||!this.it(e))return void G(Gr,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.At(e,t.key)?2:0;s.$e(t.key,r),Ts(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t.key,t):this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.Ze=this.Ze.insert(t.key,this.Vt(t.key).add(e))}nt(e,t,s){const r=this.je.get(e);r&&this.it(e)?(this.At(e,t)?r.$e(t,1):r.Ke(t),this.Ze=this.Ze.insert(t,this.Vt(t).delete(e)),this.Ze=this.Ze.insert(t,this.Vt(t).add(e)),s&&(Ts(this.ut(e).target)&&this.ut(e).target.getPipelineFlavor()!=="exact"?this.Ye=this.Ye.insert(t,s):this.He=this.He.insert(t,s))):G(Gr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.je.delete(e)}ct(e){const t=this.je.get(e);if(!t)return 0;const s=t.ke();return this.ze.getRemoteKeysForTarget(e).size+s.addedDocuments.size-s.removedDocuments.size}We(e){let t=this.je.get(e);t||(G(Gr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new _d(e),this.je.set(e,t)),t.We()}Vt(e){let t=this.Ze.get(e);return t||(t=new Me(he),this.Ze=this.Ze.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Me(he),this.Je=this.Je.insert(e,t)),t}it(e){const t=this.ut(e)!==null;return t||G(Gr,"Detected inactive target",e),t}ut(e){const t=this.je.get(e);return t===void 0||t.Le?null:this.ze.dt(e)}st(e){this.je.set(e,new _d(e)),this.ze.getRemoteKeysForTarget(e).forEach((t=>{this.nt(e,t,null)}))}At(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function da(){return new Te(Q.comparator)}function vd(){return new Te(Q.comparator)}const Y8={asc:"ASCENDING",desc:"DESCENDING"},Q8={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},X8={and:"AND",or:"OR"};class J8{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ec(n,e){return n.useProto3Json||Eo(e)?e:{value:e}}function eo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qc(n){const e=os(n);return new Ee(e.seconds,e.nanos)}function mm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ra(n,e){return eo(n,e.toTimestamp())}function ln(n){return K(!!n,49232),re.fromTimestamp(qc(n))}function Hc(n,e){return tc(n,e).canonicalString()}function tc(n,e){const t=(function(r){return new ye(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function gm(n){const e=ye.fromString(n);return K(Em(e),10190,{key:e.toString()}),e}function to(n,e){return Hc(n.databaseId,e.path)}function Sl(n,e){const t=gm(e);if(t.get(1)!==n.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Q(_m(t))}function ym(n,e){return Hc(n.databaseId,e)}function Z8(n){const e=gm(n);return e.length===4?ye.emptyPath():_m(e)}function nc(n){return new ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _m(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wd(n,e,t){return{name:to(n,e),fields:t.value.mapValue.fields}}function ey(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(K(d===void 0||typeof d=="string",58123),$e.fromBase64String(d||"")):(K(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),$e.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(u){const d=u.code===void 0?V.UNKNOWN:cm(u.code);return new j(d,u.message||"")})(a);t=new fm(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Sl(n,s.document.name),i=ln(s.document.updateTime),a=s.document.createTime?ln(s.document.createTime):re.min(),l=new Rt({mapValue:{fields:s.document.fields}}),c=et.newFoundDocument(r,i,a,l),u=s.targetIds||[],d=s.removedTargetIds||[];t=new Sa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Sl(n,s.document),i=s.readTime?ln(s.readTime):re.min(),a=et.newNoDocument(r,i),l=s.removedTargetIds||[];t=new Sa([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Sl(n,s.document),i=s.removedTargetIds||[];t=new Sa([],i,r,null)}else{if(!("filter"in e))return J(11601,{ft:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new U8(r,i),l=s.targetId;t=new pm(l,a)}}return t}function ty(n,e){let t;if(e instanceof Fi)t={update:wd(n,e.key,e.value)};else if(e instanceof Jf)t={delete:to(n,e.key)};else if(e instanceof zs)t={update:wd(n,e.key,e.data),updateMask:hy(e.fieldMask)};else{if(!(e instanceof b8))return J(16599,{gt:e.type});t={verify:to(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const l=a.transform;if(l instanceof Ei)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof bi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ai)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ti)return{fieldPath:a.field.canonicalString(),increment:l.Re};if(l instanceof Ya)return{fieldPath:a.field.canonicalString(),minimum:l.Re};if(l instanceof Qa)return{fieldPath:a.field.canonicalString(),maximum:l.Re};throw J(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:Ra(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)})(n,e.precondition)),t}function ny(n,e){return n&&n.length>0?(K(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?ln(r.updateTime):ln(i);return a.isEqual(re.min())&&(a=ln(i)),new v8(a,r.transformResults||[])})(t,e)))):[]}function sy(n,e){return{documents:[ym(n,e.path)]}}function ry(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=ym(n,r);const i=(function(u){if(u.length!==0)return wm(Yt.create(u,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(u){if(u.length!==0)return u.map((d=>(function(y){return{field:tr(y.field),direction:ly(y.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ec(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{yt:t,parent:r}}function iy(n){let e=Z8(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){K(s===1,65062);const d=t.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(p){const y=vm(p);return y instanceof Yt&&tm(y)?y.getFilters():[y]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((y=>(function(R){return new Ii(nr(R.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(y)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let y;return y=typeof p=="object"?p.value:p,Eo(y)?null:y})(t.limit));let c=null;t.startAt&&(c=(function(p){const y=!!p.before,b=p.values||[];return new Ja(b,y)})(t.startAt));let u=null;return t.endAt&&(u=(function(p){const y=!p.before,b=p.values||[];return new Ja(b,y)})(t.endAt)),O8(e,r,a,i,l,"F",c,u)}function ay(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function oy(n,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(n)))}}}}function vm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=nr(t.unaryFilter.field);return Le.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=nr(t.unaryFilter.field);return Le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nr(t.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=nr(t.unaryFilter.field);return Le.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Le.create(nr(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Yt.create(t.compositeFilter.filters.map((s=>vm(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function ly(n){return Y8[n]}function cy(n){return Q8[n]}function uy(n){return X8[n]}function tr(n){return{fieldPath:n.canonicalString()}}function nr(n){return Be.fromServerFormat(n.fieldPath)}function wm(n){return n instanceof Le?(function(t){if(t.op==="=="){if(wt(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NAN"}};if(Ct(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(wt(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NAN"}};if(Ct(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(t.field),op:cy(t.op),value:t.value}}})(n):n instanceof Yt?(function(t){const s=t.getFilters().map((r=>wm(r)));return s.length===1?s[0]:{compositeFilter:{op:uy(t.op),filters:s}}})(n):J(54877,{filter:n})}function hy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Em(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function bm(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}function Si(n,e){const t={fields:{}};return e.forEach(((s,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=s._toProto(n)})),{mapValue:t}}function Am(n){return{stringValue:n}}/**
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
 */function Co(n){return new J8(n,!0)}/**
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
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt($e.fromBase64String(e))}catch(t){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dt($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($i(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Ve("string",Dt._jsonSchemaVersion),bytes:Ve("string")};/**
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
 */class jc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function dy(){return new jc(Zt)}/**
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
 */class Gc{constructor(e){this._methodName=e}}/**
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
 */class cn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cn._jsonSchemaVersion}}static fromJSON(e){if($i(e,cn._jsonSchema))return new cn(e.latitude,e.longitude)}}function Tm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */cn._jsonSchemaVersion="firestore/geoPoint/1.0",cn._jsonSchema={type:Ve("string",cn._jsonSchemaVersion),latitude:Ve("number"),longitude:Ve("number")};class py{bt(e){}shutdown(){}}/**
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
 */const Ed="ConnectivityMonitor";class bd{constructor(){this.vt=()=>this.St(),this.Dt=()=>this.xt(),this.Ct=[],this.Ft()}bt(e){this.Ct.push(e)}shutdown(){window.removeEventListener("online",this.vt),window.removeEventListener("offline",this.Dt)}Ft(){window.addEventListener("online",this.vt),window.addEventListener("offline",this.Dt)}St(){G(Ed,"Network connectivity changed: AVAILABLE");for(const e of this.Ct)e(0)}xt(){G(Ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.Ct)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pa=null;function sc(){return pa===null?pa=(function(){return 268435456+Math.round(2147483648*Math.random())})():pa++,"0x"+pa.toString(16)}/**
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
 */const Rl="RestConnection",fy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class my{get Ot(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Mt=t+"://"+e.host,this.Nt=`projects/${s}/databases/${r}`,this.Lt=this.databaseId.database===Wa?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Bt(e,t,s,r,i){const a=sc(),l=this.Ut(e,t.toUriEncodedString());G(Rl,`Sending RPC '${e}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.Nt,"x-goog-request-params":this.Lt};this.kt(c,r,i);const{host:u}=new URL(l),d=Hs(u);return this.qt(e,l,c,s,d).then((p=>(G(Rl,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Kt(Rl,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",s),p}))}$t(e,t,s,r,i,a){return this.Bt(e,t,s,r,i)}kt(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Ut(e,t){const s=fy[e];let r=`${this.Mt}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
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
 */class gy{constructor(e){this.Kt=e.Kt,this.Wt=e.Wt}Qt(e){this.Gt=e}zt(e){this.jt=e}Ht(e){this.Jt=e}onMessage(e){this.Yt=e}close(){this.Wt()}send(e){this.Kt(e)}Zt(){this.Gt()}Xt(){this.jt()}en(e){this.Jt(e)}tn(e){this.Yt(e)}}/**
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
 */const Qe="WebChannelConnection",zr=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(r){setTimeout((()=>{throw r}),0)}}))};class cr extends my{constructor(e){super(e),this.nn=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static rn(){if(!cr.sn){const e=xf();zr(e,Pf.STAT_EVENT,(t=>{t.stat===Wl.PROXY?G(Qe,"STAT_EVENT: detected buffering proxy"):t.stat===Wl.NOPROXY&&G(Qe,"STAT_EVENT: detected no buffering proxy")})),cr.sn=!0}}qt(e,t,s,r,i){const a=sc();return new Promise(((l,c)=>{const u=new Rf;u.setWithCredentials(!0),u.listenOnce(Cf.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Aa.NO_ERROR:const p=u.getResponseJson();G(Qe,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Aa.TIMEOUT:G(Qe,`RPC '${e}' ${a} timed out`),c(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case Aa.HTTP_ERROR:const y=u.getStatus();if(G(Qe,`RPC '${e}' ${a} failed with status:`,y,"response text:",u.getResponseText()),y>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const R=b==null?void 0:b.error;if(R&&R.status&&R.message){const L=(function(F){const $=F.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf($)>=0?$:V.UNKNOWN})(R.status);c(new j(L,R.message))}else c(new j(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new j(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{_n:e,streamId:a,an:u.getLastErrorCode(),un:u.getLastError()})}}finally{G(Qe,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(r);G(Qe,`RPC '${e}' ${a} sending request:`,r),u.send(t,"POST",d,s,15)}))}cn(e,t,s){const r=sc(),i=[this.Mt,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.kt(l.initMessageHeaders,t,s),l.encodeInitMessageHeaders=!0;const u=i.join("");G(Qe,`Creating RPC '${e}' stream ${r}: ${u}`,l);const d=a.createWebChannel(u,l);this.En(d);let p=!1,y=!1;const b=new gy({Kt:R=>{y?G(Qe,`Not sending because RPC '${e}' stream ${r} is closed:`,R):(p||(G(Qe,`Opening RPC '${e}' stream ${r} transport.`),d.open(),p=!0),G(Qe,`RPC '${e}' stream ${r} sending:`,R),d.send(R))},Wt:()=>d.close()});return zr(d,Xr.EventType.OPEN,(()=>{y||(G(Qe,`RPC '${e}' stream ${r} transport opened.`),b.Zt())})),zr(d,Xr.EventType.CLOSE,(()=>{y||(y=!0,G(Qe,`RPC '${e}' stream ${r} transport closed`),b.en(),this.hn(d))})),zr(d,Xr.EventType.ERROR,(R=>{y||(y=!0,Kt(Qe,`RPC '${e}' stream ${r} transport errored. Name:`,R.name,"Message:",R.message),b.en(new j(V.UNAVAILABLE,"The operation could not be completed")))})),zr(d,Xr.EventType.MESSAGE,(R=>{var L;if(!y){const k=R.data[0];K(!!k,16349);const F=k,$=(F==null?void 0:F.error)||((L=F[0])==null?void 0:L.error);if($){G(Qe,`RPC '${e}' stream ${r} received error:`,$);const U=$.status;let q=(function(S){const w=De[S];if(w!==void 0)return cm(w)})(U),W=$.message;U==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&Kt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),q===void 0&&(q=V.INTERNAL,W="Unknown error status: "+U+" with message "+$.message),y=!0,b.en(new j(q,W)),d.close()}else G(Qe,`RPC '${e}' stream ${r} received:`,k),b.tn(k)}})),cr.rn(),setTimeout((()=>{b.Xt()}),0),b}terminate(){this.nn.forEach((e=>e.close())),this.nn=[]}En(e){this.nn.push(e)}hn(e){this.nn=this.nn.filter((t=>t===e))}kt(e,t,s){super.kt(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return kf()}}/**
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
 */function yy(n){return new cr(n)}cr.sn=!1;class Im{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Tn=e,this.timerId=t,this.Pn=s,this.Rn=r,this.In=i,this.An=0,this.Vn=null,this.dn=Date.now(),this.reset()}reset(){this.An=0}fn(){this.An=this.In}mn(e){this.cancel();const t=Math.floor(this.An+this.pn()),s=Math.max(0,Date.now()-this.dn),r=Math.max(0,t-s);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.An} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Vn=this.Tn.enqueueAfterDelay(this.timerId,r,(()=>(this.dn=Date.now(),e()))),this.An*=this.Rn,this.An<this.Pn&&(this.An=this.Pn),this.An>this.In&&(this.An=this.In)}gn(){this.Vn!==null&&(this.Vn.skipDelay(),this.Vn=null)}cancel(){this.Vn!==null&&(this.Vn.cancel(),this.Vn=null)}pn(){return(Math.random()-.5)*this.An}}/**
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
 */const Ad="PersistentStream";class Sm{constructor(e,t,s,r,i,a,l,c){this.Tn=e,this.yn=s,this.wn=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.bn=0,this.vn=null,this.Sn=null,this.stream=null,this.Dn=0,this.xn=new Im(e,t)}Cn(){return this.state===1||this.state===5||this.Fn()}Fn(){return this.state===2||this.state===3}start(){this.Dn=0,this.state!==4?this.auth():this.On()}async stop(){this.Cn()&&await this.close(0)}Mn(){this.state=0,this.xn.reset()}Nn(){this.Fn()&&this.vn===null&&(this.vn=this.Tn.enqueueAfterDelay(this.yn,6e4,(()=>this.Ln())))}Bn(e){this.Un(),this.stream.send(e)}async Ln(){if(this.Fn())return this.close(0)}Un(){this.vn&&(this.vn.cancel(),this.vn=null)}kn(){this.Sn&&(this.Sn.cancel(),this.Sn=null)}async close(e,t){this.Un(),this.kn(),this.xn.cancel(),this.bn++,e!==4?this.xn.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Sn(t.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.xn.fn()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ht(t)}qn(){}auth(){this.state=1;const e=this.$n(this.bn),t=this.bn;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.bn===t&&this.Kn(s,r)}),(s=>{e((()=>{const r=new j(V.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Wn(r)}))}))}Kn(e,t){const s=this.$n(this.bn);this.stream=this.Qn(e,t),this.stream.Qt((()=>{s((()=>this.listener.Qt()))})),this.stream.zt((()=>{s((()=>(this.state=2,this.Sn=this.Tn.enqueueAfterDelay(this.wn,1e4,(()=>(this.Fn()&&(this.state=3),Promise.resolve()))),this.listener.zt())))})),this.stream.Ht((r=>{s((()=>this.Wn(r)))})),this.stream.onMessage((r=>{s((()=>++this.Dn==1?this.Gn(r):this.onNext(r)))}))}On(){this.state=5,this.xn.mn((async()=>{this.state=0,this.start()}))}Wn(e){return G(Ad,`close with error: ${e}`),this.stream=null,this.close(4,e)}$n(e){return t=>{this.Tn.enqueueAndForget((()=>this.bn===e?t():(G(Ad,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _y extends Sm{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}Qn(e,t){return this.connection.cn("Listen",e,t)}Gn(e){return this.onNext(e)}onNext(e){this.xn.reset();const t=ey(this.serializer,e),s=(function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?ln(a.readTime):re.min()})(e);return this.listener.zn(t,s)}jn(e){const t={};t.database=nc(this.serializer),t.addTarget=(function(i,a){let l;const c=a.target;if(l=Ts(c)?{pipelineQuery:oy(i,c)}:om(c)?{documents:sy(i,c)}:{query:ry(i,c).yt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=mm(i,a.resumeToken);const u=ec(i,a.expectedCount);u!==null&&(l.expectedCount=u)}else if(a.snapshotVersion.compareTo(re.min())>0){l.readTime=eo(i,a.snapshotVersion.toTimestamp());const u=ec(i,a.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const s=ay(this.serializer,e);s&&(t.labels=s),this.Bn(t)}Hn(e){const t={};t.database=nc(this.serializer),t.removeTarget=e,this.Bn(t)}}class vy extends Sm{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Jn(){return this.Dn>0}start(){this.lastStreamToken=void 0,super.start()}qn(){this.Jn&&this.Yn([])}Qn(e,t){return this.connection.cn("Write",e,t)}Gn(e){return K(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0,55816),this.listener.Zn()}onNext(e){K(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.xn.reset();const t=ny(e.writeResults,e.commitTime),s=ln(e.commitTime);return this.listener.Xn(s,t)}er(){const e={};e.database=nc(this.serializer),this.Bn(e)}Yn(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>ty(this.serializer,s)))};this.Bn(t)}}/**
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
 */class wy{}class Ey extends wy{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.tr=!1}nr(){if(this.tr)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Bt(e,t,s,r){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Bt(e,tc(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(V.UNKNOWN,i.toString())}))}$t(e,t,s,r,i){return this.nr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.$t(e,tc(t,s),r,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(V.UNKNOWN,a.toString())}))}terminate(){this.tr=!0,this.connection.terminate()}}function by(n,e,t,s){return new Ey(n,e,t,s)}/**
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
 */const Ay="ComponentProvider",Td=new Map;function Ty(n,e,t,s,r){return new h8(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Tm(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
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
 */const Id={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rm=41943040;class ft{static withCacheSize(e){return new ft(e,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}ft.DEFAULT_COLLECTION_PERCENTILE=10,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ft.DEFAULT=new ft(Rm,ft.DEFAULT_COLLECTION_PERCENTILE,ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ft.DISABLED=new ft(-1,0,0);/**
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
 */const Sd="LruGarbageCollector",Iy=1048576;function Rd([n,e],[t,s]){const r=he(n,t);return r===0?he(e,s):r}class Sy{constructor(e){this.rr=e,this.buffer=new Me(Rd),this.ir=0}sr(){return++this.ir}_r(e){const t=[e,this.sr()];if(this.buffer.size<this.rr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Rd(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ry{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.ur(6e4)}stop(){this.ar&&(this.ar.cancel(),this.ar=null)}get started(){return this.ar!==null}ur(e){G(Sd,`Garbage collection scheduled in ${e}ms`),this.ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Er(t)?G(Sd,"Ignoring IndexedDB error during garbage collection: ",t):await wr(t)}await this.ur(3e5)}))}}class Cy{constructor(e,t){this.cr=e,this.params=t}calculateTargetCount(e,t){return this.cr.lr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(wo.ce);const s=new Sy(t);return this.cr.forEachTarget(e,(r=>s._r(r.sequenceNumber))).next((()=>this.cr.Er(e,(r=>s._r(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.cr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.cr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Id)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Id):this.hr(e,t)))}getCacheSize(e){return this.cr.getCacheSize(e)}hr(e,t){let s,r,i,a,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,a=Date.now(),this.nthSequenceNumber(e,r)))).next((p=>(s=p,l=Date.now(),this.removeTargets(e,s,t)))).next((p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,s)))).next((p=>(u=Date.now(),Zs()<=pe.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p}))))}}function Py(n,e){return new Cy(n,e)}/**
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
 */const Cm="firestore.googleapis.com",Cd=!0;class Pd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cm,this.ssl=Cd}else this.host=e.host,this.ssl=e.ssl??Cd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iy)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J9("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tm(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Po{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new q9;switch(s.type){case"firstParty":return new z9(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Td.get(t);s&&(G(Ay,"Removing Datastore"),Td.delete(t),s.terminate())})(this),Promise.resolve()}}function xy(n,e,t,s={}){var u;n=jt(n,Po);const r=Hs(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&_c(`https://${l}`),i.host!==Cm&&i.host!==l&&Kt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:r,emulatorOptions:s};if(!rs(c,a)&&(n._setSettings(c),s.mockUserToken)){let d,p;if(typeof s.mockUserToken=="string")d=s.mockUserToken,p=Ze.MOCK_USER;else{d=mp(s.mockUserToken,(u=n._app)==null?void 0:u.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ze(y)}n._authCredentials=new H9(new Df(d,p))}}/**
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
 */class Pn{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Pn(this.firestore,e,this._query)}}class Ce{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}toJSON(){return{type:Ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if($i(t,Ce._jsonSchema))return new Ce(e,s||null,new Q(ye.fromString(t.referencePath)))}}Ce._jsonSchemaVersion="firestore/documentReference/1.0",Ce._jsonSchema={type:Ve("string",Ce._jsonSchemaVersion),referencePath:Ve("string")};class Zn extends Pn{constructor(e,t,s){super(e,t,So(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new Q(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function es(n,e,...t){if(n=Ae(n),Lf("collection","path",e),n instanceof Po){const s=ye.fromString(e,...t);return ed(s),new Zn(n,null,s)}{if(!(n instanceof Ce||n instanceof Zn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ye.fromString(e,...t));return ed(s),new Zn(n.firestore,null,s)}}function bn(n,e,...t){if(n=Ae(n),arguments.length===1&&(e=Lc.newId()),Lf("doc","path",e),n instanceof Po){const s=ye.fromString(e,...t);return Zh(s),new Ce(n,null,new Q(s))}{if(!(n instanceof Ce||n instanceof Zn))throw new j(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ye.fromString(e,...t));return Zh(s),new Ce(n.firestore,n instanceof Zn?n.converter:null,new Q(s))}}/**
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
 */class yt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($i(e,yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new yt(e.vectorValues);throw new j(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:Ve("string",yt._jsonSchemaVersion),vectorValues:Ve("object")};/**
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
 */const ky=/^__.*__$/;class Ny{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new zs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fi(e,this.data,t,this.fieldTransforms)}}function Pm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:n})}}class zc{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new zc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.contextWith({path:t,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return no(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Pm(this.dataSource)&&ky.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Oy{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Co(e)}createContext(e,t,s,r=!1){return new zc({dataSource:e,methodName:t,targetDoc:s,path:Be.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wc(n){const e=n._freezeSettings(),t=Co(n._databaseId);return new Oy(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xm(n,e,t,s,r,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,r);Om("Data must be an object, but it was:",a,s);const l=km(s,a);let c,u;if(i.merge)c=new Ht(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const y=Ar(e,p,t);if(!a.contains(y))throw new j(V.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);My(d,y)||d.push(y)}c=new Ht(d),u=a.fieldTransforms.filter((p=>c.covers(p.field)))}else c=null,u=a.fieldTransforms;return new Ny(new Rt(l),c,u)}class Kc extends Gc{_toFieldTransform(e){return new y8(e.path,new Ei)}isEqual(e){return e instanceof Kc}}function Dy(n,e,t,s=!1){return gr(t,n.createContext(s?4:3,e))}function gr(n,e,t){if(Nm(n=Ae(n)))return Om("Unsupported field value:",e,n),km(n,e);if(n instanceof Gc)return(function(r,i){if(!Pm(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const a=[];let l=0;for(const c of r){let u=gr(c,i.childContextForArray(l));u==null&&(u={nullValue:"NULL_VALUE"}),a.push(u),l++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i,a){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $c(i.serializer,r,a);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const l=Ee.fromDate(r);return{timestampValue:eo(i.serializer,l)}}if(r instanceof Ee){const l=new Ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eo(i.serializer,l)}}if(r instanceof cn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:mm(i.serializer,r._byteString)};if(r instanceof Ce){const l=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(l))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Hc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof yt)return(function(c,u){const d=c instanceof yt?c.toArray():c;return{mapValue:{fields:{[Hf]:{stringValue:jf},[vi]:{arrayValue:{values:d.map((y=>{if(typeof y!="number")throw u.createError("VectorValues must only contain numeric values.");return Ao(u.serializer,y)}))}}}}}})(r,i);if(bm(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${vo(r)}`)})(n,e,t)}function km(n,e){const t={};return Mf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(n,((s,r)=>{const i=gr(r,e.childContextForField(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function Nm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ee||n instanceof cn||n instanceof Dt||n instanceof Ce||n instanceof Gc||n instanceof yt||bm(n))}function Om(n,e,t){if(!Nm(t)||!Mi(t)){const s=vo(t);throw s==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+s)}}function Ar(n,e,t){if((e=Ae(e))instanceof jc)return e._internalPath;if(typeof e=="string")return Vy(n,e);throw no("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ly=new RegExp("[~\\*/\\[\\]]");function Vy(n,e,t){if(e.search(Ly)>=0)throw no(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jc(...e.split("."))._internalPath}catch{throw no(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function no(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${s}`),a&&(c+=` in document ${r}`),c+=")"),new j(V.INVALID_ARGUMENT,l+n+c)}function My(n,e){return n.some((t=>t.isEqual(e)))}function Dm(n){return typeof n._readUserData=="function"}/**
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
 */class st{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const s=Rt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const a=e[r];let l;i.nestedOptions&&Mi(a)?l={mapValue:{fields:new st(i.nestedOptions).getOptionsProto(t,a)}}:a&&(l=gr(a,t)??void 0),l&&s.set(Be.fromServerFormat(i.serverName),l)}}return s}getOptionsProto(e,t,s){const r=this._getKnownOptions(t,e);if(s){const i=new Map(c8(s,((a,l)=>[Be.fromServerFormat(l),a!==void 0?gr(a,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
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
 */function $y(n){return typeof n=="object"&&n!==null&&!!("nullValue"in n&&(n.nullValue===null||n.nullValue==="NULL_VALUE")||"booleanValue"in n&&(n.booleanValue===null||typeof n.booleanValue=="boolean")||"integerValue"in n&&(n.integerValue===null||typeof n.integerValue=="number"||typeof n.integerValue=="string")||"doubleValue"in n&&(n.doubleValue===null||typeof n.doubleValue=="number")||"timestampValue"in n&&(n.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(n.timestampValue))||"stringValue"in n&&(n.stringValue===null||typeof n.stringValue=="string")||"bytesValue"in n&&(n.bytesValue===null||n.bytesValue instanceof Uint8Array)||"referenceValue"in n&&(n.referenceValue===null||typeof n.referenceValue=="string")||"geoPointValue"in n&&(n.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(n.geoPointValue))||"arrayValue"in n&&(n.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(n.arrayValue))||"mapValue"in n&&(n.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Mi(t.fields))})(n.mapValue))||"fieldReferenceValue"in n&&(n.fieldReferenceValue===null||typeof n.fieldReferenceValue=="string")||"functionValue"in n&&(n.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(n.functionValue))||"pipelineValue"in n&&(n.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(n.pipelineValue)))}function fn(){return new Kc("serverTimestamp")}function Uy(n){return new yt(n)}/**
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
 */function B(n){let e;return n instanceof Ks?n:(e=Mi(n)?jy(n):n instanceof Array?Gy(n):Lm(n,void 0),e)}function Cl(n){if(n instanceof Ks)return n;if(n instanceof yt)return Ri(n);if(Array.isArray(n))return Ri(Uy(n));throw new Error("Unsupported value: "+typeof n)}function Yc(n){return a8(n)?Ca(n):B(n)}class Ks{constructor(){this._protoValueType="ProtoValue"}add(e){return new O("add",[this,B(e)],"add")}asBoolean(){if(this instanceof us)return this;if(this instanceof Ir)return new Mm(this);if(this instanceof Tr)return new Hy(this);if(this instanceof O)return new Vm(this);throw new j("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new O("subtract",[this,B(e)],"subtract")}multiply(e){return new O("multiply",[this,B(e)],"multiply")}divide(e){return new O("divide",[this,B(e)],"divide")}mod(e){return new O("mod",[this,B(e)],"mod")}equal(e){return new O("equal",[this,B(e)],"equal").asBoolean()}notEqual(e){return new O("not_equal",[this,B(e)],"notEqual").asBoolean()}lessThan(e){return new O("less_than",[this,B(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new O("less_than_or_equal",[this,B(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new O("greater_than",[this,B(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new O("greater_than_or_equal",[this,B(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const s=[e,...t].map((r=>B(r)));return new O("array_concat",[this,...s],"arrayConcat")}arrayContains(e){return new O("array_contains",[this,B(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Zr(e.map(B),"arrayContainsAll"):e;return new O("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Zr(e.map(B),"arrayContainsAny"):e;return new O("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new O("array_reverse",[this])}arrayLength(){return new O("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Zr(e.map(B),"equalAny"):e;return new O("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Zr(e.map(B),"notEqualAny"):e;return new O("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new O("exists",[this],"exists").asBoolean()}charLength(){return new O("char_length",[this],"charLength")}like(e){return new O("like",[this,B(e)],"like").asBoolean()}regexContains(e){return new O("regex_contains",[this,B(e)],"regexContains").asBoolean()}regexFind(e){return new O("regex_find",[this,B(e)],"regexFind")}regexFindAll(e){return new O("regex_find_all",[this,B(e)],"regexFindAll")}regexMatch(e){return new O("regex_match",[this,B(e)],"regexMatch").asBoolean()}stringContains(e){return new O("string_contains",[this,B(e)],"stringContains").asBoolean()}startsWith(e){return new O("starts_with",[this,B(e)],"startsWith").asBoolean()}endsWith(e){return new O("ends_with",[this,B(e)],"endsWith").asBoolean()}toLower(){return new O("to_lower",[this],"toLower")}toUpper(){return new O("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(B(e)),new O("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(B(e)),new O("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(B(e)),new O("rtrim",t,"rtrim")}type(){return new O("type",[this])}isType(e){return new O("is_type",[this,Ri(e)],"isType").asBoolean()}stringConcat(e,...t){const s=[e,...t].map(B);return new O("string_concat",[this,...s],"stringConcat")}stringIndexOf(e){return new O("string_index_of",[this,B(e)],"stringIndexOf")}stringRepeat(e){return new O("string_repeat",[this,B(e)],"stringRepeat")}stringReplaceAll(e,t){return new O("string_replace_all",[this,B(e),B(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new O("string_replace_one",[this,B(e),B(t)],"stringReplaceOne")}concat(e,...t){const s=[e,...t].map(B);return new O("concat",[this,...s],"concat")}reverse(){return new O("reverse",[this],"reverse")}arrayFilter(e,t){return new O("array_filter",[this,B(e),t],"arrayFilter")}arrayTransform(e,t){return new O("array_transform",[this,B(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,s){return new O("array_transform",[this,B(e),B(t),s],"arrayTransformWithIndex")}arraySlice(e,t){const s=[this,B(e)];return t!==void 0&&s.push(B(t)),new O("array_slice",s,"arraySlice")}arrayFirst(){return new O("array_first",[this],"arrayFirst")}arrayFirstN(e){return new O("array_first_n",[this,B(e)],"arrayFirstN")}arrayLast(){return new O("array_last",[this],"arrayLast")}arrayLastN(e){return new O("array_last_n",[this,B(e)],"arrayLastN")}arrayMaximum(){return new O("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new O("maximum_n",[this,B(e)],"arrayMaximumN")}arrayMinimum(){return new O("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new O("minimum_n",[this,B(e)],"arrayMinimumN")}arrayIndexOf(e){return new O("array_index_of",[this,B(e),B("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new O("array_index_of",[this,B(e),B("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new O("array_index_of_all",[this,B(e)],"arrayIndexOfAll")}byteLength(){return new O("byte_length",[this],"byteLength")}ceil(){return new O("ceil",[this])}floor(){return new O("floor",[this])}abs(){return new O("abs",[this])}exp(){return new O("exp",[this])}mapGet(e){return new O("map_get",[this,Ri(e)],"mapGet")}mapSet(e,t,...s){const r=[this,B(e),B(t),...s.map(B)];return new O("map_set",r,"mapSet")}mapKeys(){return new O("map_keys",[this],"mapKeys")}mapValues(){return new O("map_values",[this],"mapValues")}mapEntries(){return new O("map_entries",[this],"mapEntries")}getField(e){return new O("get_field",[this,B(e)],"get_field")}count(){return It._create("count",[this],"count")}sum(){return It._create("sum",[this],"sum")}average(){return It._create("average",[this],"average")}minimum(){return It._create("minimum",[this],"minimum")}maximum(){return It._create("maximum",[this],"maximum")}first(){return It._create("first",[this],"first")}last(){return It._create("last",[this],"last")}arrayAgg(){return It._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return It._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return It._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const s=[e,...t];return new O("maximum",[this,...s.map(B)],"logicalMaximum")}logicalMinimum(e,...t){const s=[e,...t];return new O("minimum",[this,...s.map(B)],"minimum")}vectorLength(){return new O("vector_length",[this],"vectorLength")}cosineDistance(e){return new O("cosine_distance",[this,Cl(e)],"cosineDistance")}dotProduct(e){return new O("dot_product",[this,Cl(e)],"dotProduct")}euclideanDistance(e){return new O("euclidean_distance",[this,Cl(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new O("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new O("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new O("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new O("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new O("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new O("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new O("timestamp_add",[this,B(e),B(t)],"timestampAdd")}timestampSubtract(e,t){return new O("timestamp_subtract",[this,B(e),B(t)],"timestampSubtract")}timestampDiff(e,t){return new O("timestamp_diff",[this,Yc(e),B(t)],"timestampDiff")}timestampExtract(e,t){const s=[this,B(e)];return t&&s.push(B(t)),new O("timestamp_extract",s,"timestampExtract")}documentId(){return new O("document_id",[this],"documentId")}parent(){return new O("parent",[this],"parent")}substring(e,t){const s=B(e);return new O("substring",t===void 0?[this,s]:[this,s,B(t)],"substring")}arrayGet(e){return new O("array_get",[this,B(e)],"arrayGet")}isError(){return new O("is_error",[this],"isError").asBoolean()}ifError(e){const t=new O("if_error",[this,B(e)],"ifError");return e instanceof us?t.asBoolean():t}isAbsent(){return new O("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new O("map_remove",[this,B(e)],"mapRemove")}mapMerge(e,...t){const s=B(e),r=t.map(B);return new O("map_merge",[this,s,...r],"mapMerge")}pow(e){return new O("pow",[this,B(e)])}trunc(e){return e===void 0?new O("trunc",[this]):new O("trunc",[this,B(e)],"trunc")}round(e){return e===void 0?new O("round",[this]):new O("round",[this,B(e)],"round")}collectionId(){return new O("collection_id",[this])}length(){return new O("length",[this])}ln(){return new O("ln",[this])}sqrt(){return new O("sqrt",[this])}stringReverse(){return new O("string_reverse",[this])}ifAbsent(e){return new O("if_absent",[this,B(e)],"ifAbsent")}ifNull(e){return new O("if_null",[this,B(e)],"ifNull")}coalesce(e,...t){return new O("coalesce",[this,B(e),...t.map(B)],"coalesce")}join(e){return new O("join",[this,B(e)],"join")}log10(){return new O("log10",[this])}arraySum(){return new O("sum",[this])}split(e){return new O("split",[this,B(e)])}timestampTruncate(e,t){const s=[this,B(e)];return t&&s.push(B(t)),new O("timestamp_trunc",s)}ascending(){return zy(this)}descending(){return Wy(this)}as(e){return new By(this,e,"as")}}class It{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,s){const r=new It(e,t);return r._methodName=s,r}as(e){return new Fy(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class Fy{constructor(e,t,s){this.aggregate=e,this.alias=t,this._methodName=s}_readUserData(e){this.aggregate._readUserData(e)}}class By{constructor(e,t,s){this.expr=e,this.alias=t,this._methodName=s,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Zr extends Ks{constructor(e,t){super(),this.Rr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.Rr.map((t=>t._toProto(e)))}}}_readUserData(e){this.Rr.forEach((t=>t._readUserData(e)))}}class Tr extends Ks{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new O("geo_distance",[this,B(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Ca(n){return qy(n,"field")}function qy(n,e){return new Tr(typeof n=="string"?Zt===n?dy()._internalPath:Ar("field",n):n._internalPath,e)}class Ir extends Ks{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Ir(e,void 0);return t._protoValue=e,t}_toProto(e){return K(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,$y(this._protoValue)||(this._protoValue=gr(this.value,e))}}function Ri(n,e){return Lm(n,"constant")}function Lm(n,e){const t=new Ir(n,e);return typeof n=="boolean"?new Mm(t):t}class O extends Ks{constructor(e,t,s,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,s!==void 0&&(this._methodName=s),r!==void 0&&(this._options=r)}get _optionsUtil(){return new st({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((s=>s._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class us extends Ks{get _methodName(){return this._expr._methodName}countIf(){return It._create("count_if",[this],"countIf")}not(){return new O("not",[this],"not").asBoolean()}conditional(e,t){return new O("conditional",[this,e,t],"conditional")}ifError(e){const t=B(e),s=new O("if_error",[this,t],"ifError");return t instanceof us?s.asBoolean():s}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class Vm extends us{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class Mm extends us{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Hy extends us{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function jy(n,e){const t=[];for(const s in n)if(Object.prototype.hasOwnProperty.call(n,s)){const r=n[s];t.push(Ri(s)),t.push(B(r))}return new O("map",t,"map")}function Gy(n){return(function(t,s){return new O("array",t.map((r=>B(r))),s)})(n,"array")}function zy(n){return new $m(Yc(n),"ascending","ascending")}function Wy(n){return new $m(Yc(n),"descending","descending")}class $m{constructor(e,t,s){this.expr=e,this.direction=t,this._methodName=s,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:Am(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
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
 */class kt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class Um extends kt{get _name(){return"add_fields"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Si(e,this.fields)]}}_readUserData(e){super._readUserData(e),hs(this.fields,e)}}class Fm extends kt{get _name(){return"aggregate"}get _optionsUtil(){return new st({})}constructor(e,t,s){super(s),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Si(e,this.accumulators),Si(e,this.groups)]}}_readUserData(e){super._readUserData(e),hs(this.groups,e),hs(this.accumulators,e)}}class Bm extends kt{get _name(){return"distinct"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Si(e,this.groups)]}}_readUserData(e){super._readUserData(e),hs(this.groups,e)}}class xo extends kt{get _name(){return"collection"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Vr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Vr}]}}_readUserData(e){super._readUserData(e)}}class ko extends kt{get _name(){return"collection_group"}get _optionsUtil(){return new st({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Qc extends kt{get _name(){return"database"}get _optionsUtil(){return new st({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class Xc extends kt{get _name(){return"documents"}get _optionsUtil(){return new st({})}constructor(e,t){if(super(t),!e||e.length===0)throw new j(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const s=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(s);if(r.size!==s.length)throw new j(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.dr=s,this.mr=r}_toProto(e){return{...super._toProto(e),args:this.dr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class No extends kt{get _name(){return"where"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),hs(this.condition,e)}}class $s extends kt{get _name(){return"limit"}get _optionsUtil(){return new st({})}constructor(e,t){K(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[$c(e,this.limit)]}}}class xd extends kt{get _name(){return"offset"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[$c(e,this.offset)]}}}class Ky extends kt{get _name(){return"select"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Si(e,this.selections)]}}_readUserData(e){super._readUserData(e),hs(this.selections,e)}}class yn extends kt{get _name(){return"sort"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),hs(this.orderings,e)}}class Jc extends kt{get _name(){return"replace_with"}get _optionsUtil(){return new st({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),Am(Jc.pr)]}}_readUserData(e){super._readUserData(e),hs(this.map,e)}}Jc.pr="full_replace";function hs(n,e){return Dm(n)?n._readUserData(e):Array.isArray(n)?n.forEach((t=>t._readUserData(e))):n instanceof Map?n.forEach((t=>t._readUserData(e))):Object.values(n).forEach((t=>t._readUserData(e))),n}// Copyright 2024 Google LLC* @license
class ut{constructor(e,t,s){this.serializer=e,this.stages=t,this.listenOptions=s,this.isCorePipeline=!0}getPipelineCollection(){return Oo(this)}getPipelineCollectionGroup(){return Zc(this)}getPipelineCollectionId(){return Yy(this)}getPipelineDocuments(){return rc(this)}getPipelineFlavor(){return(function(t){let s="exact";return t.stages.forEach(((r,i)=>{r._name!==Bm.name&&r._name!==Fm.name||(s="keyless"),r._name===Ky.name&&s==="exact"&&(s="augmented"),r._name===Um.name&&i<t.stages.length-1&&s==="exact"&&(s="augmented")})),s})(this)}getPipelineSourceType(){return ts(this)}}function ts(n){const e=n.stages[0];return e instanceof xo||e instanceof ko||e instanceof Qc||e instanceof Xc?e._name:"unknown"}function Oo(n){if(ts(n)==="collection")return n.stages[0].Vr}function Zc(n){if(ts(n)==="collection_group")return n.stages[0].collectionId}function Yy(n){switch(ts(n)){case"collection":return ye.fromString(Oo(n)).lastSegment();case"collection_group":return Zc(n);default:return}}function rc(n){if(ts(n)==="documents")return n.stages[0].dr}class ci{constructor(e,t,s,r){this._db=e,this.userDataReader=t,this._userDataWriter=s,this.stages=r}wr(e,t){const s=this.userDataReader.createContext(3,e);return Dm(t)?t._readUserData(s):Array.isArray(t)?t.forEach((r=>r._readUserData(s))):t.forEach((r=>r._readUserData(s))),t}where(e){const t=this.stages.map((s=>s));return this.wr("where",e),t.push(new No(e,{})),new ci(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((s=>s));return t.push(new $s(e,{})),new ci(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const s=this.stages.map((r=>r));return"orderings"in e?s.push(new yn(this.wr("sort",e.orderings),{})):s.push(new yn(this.wr("sort",[e,...t]),{})),new ci(this._db,this.userDataReader,this._userDataWriter,s)}br(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class C{constructor(e,t){this.type=e,this.value=t}static vr(){return new C("ERROR",void 0)}static Sr(){return new C("UNSET",void 0)}static Dr(){return new C("NULL",pr)}static newValue(e){return Ct(e)?new C("NULL",pr):(function(s){return!!s&&"booleanValue"in s})(e)?new C("BOOLEAN",e):en(e)?new C("INT",e):Ss(e)?new C("DOUBLE",e):(function(s){return!!s&&"timestampValue"in s&&!!s.timestampValue})(e)?new C("TIMESTAMP",e):(function(s){return!!s&&"stringValue"in s})(e)?new C("STRING",e):(function(s){return!!s&&"bytesValue"in s})(e)?new C("BYTES",e):e.referenceValue?new C("REFERENCE",e):e.geoPointValue?new C("GEO_POINT",e):mr(e)?new C("ARRAY",e):Ka(e)?new C("VECTOR",e):Rs(e)?new C("MAP",e):new C("ERROR",void 0)}Cr(){return this.type==="ERROR"||this.type==="UNSET"}Fr(){return this.type==="NULL"}}function ui(n){if(!n.Cr())return n.value}function qm(n){return n instanceof us?n._expr:n}function ee(n){if((n=qm(n))instanceof Tr)return new Qy(n);if(n instanceof Ir)return new Xy(n);if(n instanceof Zr)return new Jy(n);if(n instanceof O){if(n.name==="add")return new t_(n);if(n.name==="subtract")return new n_(n);if(n.name==="multiply")return new s_(n);if(n.name==="divide")return new r_(n);if(n.name==="mod")return new i_(n);if(n.name==="and")return new a_(n);if(n.name==="equal")return new __(n);if(n.name==="not_equal")return new v_(n);if(n.name==="less_than")return new w_(n);if(n.name==="less_than_or_equal")return new E_(n);if(n.name==="greater_than")return new b_(n);if(n.name==="greater_than_or_equal")return new A_(n);if(n.name==="array_concat")return new T_(n);if(n.name==="array_reverse")return new I_(n);if(n.name==="array_contains")return new S_(n);if(n.name==="array_contains_all")return new R_(n);if(n.name==="array_contains_any")return new C_(n);if(n.name==="array_length")return new P_(n);if(n.name==="array_element")return new x_(n);if(n.name==="equal_any")return new Hm(n);if(n.name==="not_equal_any")return new l_(n);if(n.name==="is_nan")return new c_(n);if(n.name==="is_not_nan")return new u_(n);if(n.name==="is_null")return new h_(n);if(n.name==="is_not_null")return new d_(n);if(n.name==="is_error")return new p_(n);if(n.name==="exists")return new f_(n);if(n.name==="not")return new Do(n);if(n.name==="or")return new o_(n);if(n.name==="xor")return new eu(n);if(n.name==="conditional")return new m_(n);if(n.name==="maximum")return new g_(n);if(n.name==="minimum")return new y_(n);if(n.name==="reverse")return new k_(n);if(n.name==="replace_first")return new N_(n);if(n.name==="replace_all")return new O_(n);if(n.name==="char_length")return new D_(n);if(n.name==="byte_length")return new L_(n);if(n.name==="like")return new V_(n);if(n.name==="regex_contains")return new M_(n);if(n.name==="regex_match")return new $_(n);if(n.name==="string_contains")return new U_(n);if(n.name==="starts_with")return new F_(n);if(n.name==="ends_with")return new B_(n);if(n.name==="to_lower")return new q_(n);if(n.name==="to_upper")return new H_(n);if(n.name==="trim")return new j_(n);if(n.name==="string_concat")return new G_(n);if(n.name==="map_get")return new z_(n);if(n.name==="cosine_distance")return new W_(n);if(n.name==="dot_product")return new K_(n);if(n.name==="euclidean_distance")return new Y_(n);if(n.name==="vector_length")return new Q_(n);if(n.name==="unix_micros_to_timestamp")return new t5(n);if(n.name==="timestamp_to_unix_micros")return new r5(n);if(n.name==="unix_millis_to_timestamp")return new n5(n);if(n.name==="timestamp_to_unix_millis")return new i5(n);if(n.name==="unix_seconds_to_timestamp")return new s5(n);if(n.name==="timestamp_to_unix_seconds")return new a5(n);if(n.name==="timestamp_add")return new o5(n);if(n.name==="timestamp_subtract")return new l5(n)}throw new Error(`Unknown Expr : ${n}`)}class Qy{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Zt)return C.newValue({referenceValue:to(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return C.newValue({timestampValue:Ra(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return C.newValue({timestampValue:Ra(e.serializer,t.createTime)});const s=t.data.field(this.expr._fieldPath);return s?bo(s)?C.newValue((function(i,a){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Ra(i.serializer,re.fromTimestamp(dr(a)))};if(i.serverTimestampBehavior==="previous"){const l=Ui(a);if(l)return l}return{nullValue:"NULL_VALUE"}})(e,s)):C.newValue(s):C.Sr()}}class Xy{constructor(e){this.expr=e}evaluate(e,t){return C.newValue(this.expr._getValue())}}class Jy{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.Rr.map((r=>ee(r).evaluate(e,t)));return s.some((r=>r.Cr()))?C.vr():C.newValue({arrayValue:{values:s.map((r=>r.value))}})}}function Ke(n){return Ss(n)?Number(n.doubleValue):Number(n.integerValue)}function un(n){return BigInt(n.integerValue)}const Zy=BigInt("0x7fffffffffffffff"),e_=-BigInt("0x8000000000000000");class Hi{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length>=2,24778);const s=ee(this.expr.params[0]).evaluate(e,t),r=ee(this.expr.params[1]).evaluate(e,t);let i=this.Or(s,r);for(const a of this.expr.params.slice(2)){const l=ee(a).evaluate(e,t);i=this.Or(i,l)}return i}Or(e,t){if(e.Cr()||t.Cr())return C.vr();if(e.Fr()||t.Fr())return C.Dr();const s=e.value,r=t.value;if(!Ss(s)&&!en(s)||!Ss(r)&&!en(r))return C.vr();if(Ss(s)||Ss(r)){const i=this.Mr(s,r);return i?C.newValue(i):C.vr()}if(en(s)&&en(r)){const i=this.Nr(s,r);return i===void 0?C.vr():typeof i=="number"?C.newValue({doubleValue:i}):i<e_||i>Zy?C.vr():C.newValue({integerValue:`${i}`})}return C.vr()}}function Rn(n,e){return Ue(n)!==Ue(e)?"TYPE_MISMATCH":wt(n)||wt(e)?"NOT_EQ":Ct(n)&&Ct(e)?"EQ":Ct(n)||Ct(e)?"NULL":mr(n)&&mr(e)?(function(s,r){var a,l,c;if(((a=s.values)==null?void 0:a.length)!==((l=r.values)==null?void 0:l.length))return"NOT_EQ";let i=!1;for(let u=0;u<(((c=s.values)==null?void 0:c.length)??0);u++){const d=s.values[u],p=r.values[u];switch(Rn(d,p)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:J(44609,{Lr:d,Br:p})}}return i?"NULL":"EQ"})(n.arrayValue,e.arrayValue):Ka(n)&&Ka(e)||Rs(n)&&Rs(e)?(function(s,r){const i=s.fields||{},a=r.fields||{};if(za(i)!==za(a))return"NOT_EQ";let l=!1;for(const c in i)if(i.hasOwnProperty(c)){if(a[c]===void 0)return"NOT_EQ";switch(Rn(i[c],a[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":l=!0}}return l?"NULL":"EQ"})(n.mapValue,e.mapValue):(function(s,r){return $t(s,r,{Te:!1,Ee:!0,he:!0})})(n,e)?"EQ":"NOT_EQ"}class t_ extends Hi{Nr(e,t){return un(e)+un(t)}Mr(e,t){return{doubleValue:Ke(e)+Ke(t)}}}class n_ extends Hi{constructor(e){super(e),this.expr=e}Nr(e,t){return un(e)-un(t)}Mr(e,t){return{doubleValue:Ke(e)-Ke(t)}}}class s_ extends Hi{constructor(e){super(e),this.expr=e}Nr(e,t){return un(e)*un(t)}Mr(e,t){return{doubleValue:Ke(e)*Ke(t)}}}class r_ extends Hi{constructor(e){super(e),this.expr=e}Nr(e,t){const s=un(t);if(s!==BigInt(0))return un(e)/s}Mr(e,t){const s=Ke(t);return s===0?{doubleValue:yi(s)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ke(e)/s}}}class i_ extends Hi{constructor(e){super(e),this.expr=e}Nr(e,t){const s=un(t);if(s!==BigInt(0))return un(e)%s}Mr(e,t){const s=Ke(t);if(s!==0)return{doubleValue:Ke(e)%s}}}class a_{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const a of this.expr.params){const l=ee(a).evaluate(e,t);switch(l.type){case"BOOLEAN":if(!((i=l.value)!=null&&i.booleanValue))return C.newValue(ze);break;case"NULL":r=!0;break;default:s=!0}}return s?C.vr():r?C.Dr():C.newValue(_t)}}class Do{constructor(e){this.expr=e}evaluate(e,t){var r;K(this.expr.params.length===1,9634);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return C.newValue({booleanValue:!((r=s.value)!=null&&r.booleanValue)});case"NULL":return C.Dr();default:return C.vr()}}}class o_{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const a of this.expr.params){const l=ee(a).evaluate(e,t);switch(l.type){case"BOOLEAN":if((i=l.value)!=null&&i.booleanValue)return C.newValue(_t);break;case"NULL":r=!0;break;default:s=!0}}return s?C.vr():r?C.Dr():C.newValue(ze)}}class eu{constructor(e){this.expr=e}evaluate(e,t){var i;let s=!1,r=!1;for(const a of this.expr.params){const l=ee(a).evaluate(e,t);switch(l.type){case"BOOLEAN":s=eu.xor(s,!!((i=l.value)!=null&&i.booleanValue));break;case"NULL":r=!0;break;default:return C.vr()}}return r?C.Dr():C.newValue({booleanValue:s})}static xor(e,t){return(e||t)&&!(e&&t)}}class Hm{constructor(e){this.expr=e}evaluate(e,t){var a,l;K(this.expr.params.length===2,55094);let s=!1;const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":s=!0;break;case"ERROR":case"UNSET":return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return C.vr()}if(s)return C.Dr();for(const c of((l=(a=i.value)==null?void 0:a.arrayValue)==null?void 0:l.values)??[])switch(Ct(r.value)&&Ct(c)?"EQ":Rn(r.value,c)){case"EQ":return C.newValue(_t);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:J(44608,{value:r.value,candidate:c})}return s?C.Dr():C.newValue(ze)}}class l_{constructor(e){this.expr=e}evaluate(e,t){return new Do(new O("not",[new O("equal_any",this.expr.params)])).evaluate(e,t)}}class c_{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,23322);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return C.newValue(ze);case"DOUBLE":return C.newValue({booleanValue:isNaN(Ke(s.value))});case"NULL":return C.Dr();default:return C.vr()}}}class u_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===1,50406),new Do(new O("not",[new O("is_nan",this.expr.params)])).evaluate(e,t)}}class h_{constructor(e){this.expr=e}evaluate(e,t){switch(K(this.expr.params.length===1,23123),ee(this.expr.params[0]).evaluate(e,t).type){case"NULL":return C.newValue(_t);case"UNSET":case"ERROR":return C.vr();default:return C.newValue(ze)}}}class d_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===1,23167),new Do(new O("not",[new O("is_null",this.expr.params)])).evaluate(e,t)}}class p_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===1,5228),ee(this.expr.params[0]).evaluate(e,t).type==="ERROR"?C.newValue(_t):C.newValue(ze)}}class f_{constructor(e){this.expr=e}evaluate(e,t){switch(K(this.expr.params.length===1,6877),ee(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return C.vr();case"UNSET":return C.newValue(ze);default:return C.newValue(_t)}}}class m_{constructor(e){this.expr=e}evaluate(e,t){var r;K(this.expr.params.length===3,11706);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BOOLEAN":return(r=s.value)!=null&&r.booleanValue?ee(this.expr.params[1]).evaluate(e,t):ee(this.expr.params[2]).evaluate(e,t);case"NULL":return ee(this.expr.params[2]).evaluate(e,t);default:return C.vr()}}}class g_{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>ee(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||vt(i.value,r.value)>0?i:r}return r===void 0?C.Dr():r}}class y_{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((i=>ee(i).evaluate(e,t)));let r;for(const i of s)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||vt(i.value,r.value)<0?i:r}return r===void 0?C.Dr():r}}class Sr{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return C.vr()}const r=ee(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return C.vr()}return this.Ur(s,r)}}class __ extends Sr{constructor(e){super(e),this.expr=e}Ur(e,t){if(e.Fr()&&t.Fr())return C.newValue(_t);if(e.Fr()||t.Fr()||wt(e.value)||wt(t.value)||Ue(e.value)!==Ue(t.value))return C.newValue(ze);switch(Rn(e.value,t.value)){case"EQ":return C.newValue(_t);case"NOT_EQ":return C.newValue(ze);case"NULL":return C.Dr();default:J(44615,{left:e,right:t})}}}class v_ extends Sr{constructor(e){super(e),this.expr=e}Ur(e,t){switch(Rn(e.value,t.value)){case"EQ":return C.newValue(ze);case"NOT_EQ":case"TYPE_MISMATCH":return C.newValue(_t);case"NULL":return C.Dr();default:J(44614,{left:e,right:t})}}}class w_ extends Sr{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||wt(e.value)||wt(t.value)?C.newValue(ze):C.newValue({booleanValue:vt(e.value,t.value)<0})}}class E_ extends Sr{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||wt(e.value)||wt(t.value)?C.newValue(ze):Rn(e.value,t.value)==="EQ"?C.newValue(_t):C.newValue({booleanValue:vt(e.value,t.value)<0})}}class b_ extends Sr{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||wt(e.value)||wt(t.value)?C.newValue(ze):C.newValue({booleanValue:vt(e.value,t.value)>0})}}class A_ extends Sr{constructor(e){super(e),this.expr=e}Ur(e,t){return Ue(e.value)!==Ue(t.value)||wt(e.value)||wt(t.value)?C.newValue(ze):Rn(e.value,t.value)==="EQ"?C.newValue(_t):C.newValue({booleanValue:vt(e.value,t.value)>0})}}class T_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class I_{constructor(e){this.expr=e}evaluate(e,t){var r;K(this.expr.params.length===1,216);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return C.Dr();case"ARRAY":{const i=((r=s.value.arrayValue)==null?void 0:r.values)??[];return C.newValue({arrayValue:{values:[...i].reverse()}})}default:return C.vr()}}}class S_{constructor(e){this.expr=e}evaluate(e,t){return K(this.expr.params.length===2,52884),new Hm(new O("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class R_{constructor(e){this.expr=e}evaluate(e,t){var c,u,d,p;K(this.expr.params.length===2,1392);let s=!1;const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return C.vr()}if(s)return C.Dr();const a=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],l=((p=(d=r.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const y of a){let b=!1;s=!1;for(const R of l){switch(Ct(y)&&Ct(R)?"EQ":Rn(y,R)){case"EQ":b=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:J(44613,{value:R,search:y})}if(b)break}if(!b)return C.newValue(ze)}return C.newValue(_t)}}class C_{constructor(e){this.expr=e}evaluate(e,t){var c,u,d,p;K(this.expr.params.length===2,2680);let s=!1;const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":s=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":s=!0;break;default:return C.vr()}if(s)return C.Dr();const a=((u=(c=i.value)==null?void 0:c.arrayValue)==null?void 0:u.values)??[],l=((p=(d=r.value)==null?void 0:d.arrayValue)==null?void 0:p.values)??[];for(const y of l)for(const b of a)switch(Ct(y)&&Ct(b)?"EQ":Rn(y,b)){case"EQ":return C.newValue(_t);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":s=!0;break;default:J(44608,{value:y,search:b})}return s?C.Dr():C.newValue(ze)}}class P_{constructor(e){this.expr=e}evaluate(e,t){var r,i,a;K(this.expr.params.length===1,38605);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return C.Dr();case"ARRAY":return C.newValue({integerValue:`${((a=(i=(r=s.value)==null?void 0:r.arrayValue)==null?void 0:i.values)==null?void 0:a.length)??0}`});default:return C.vr()}}}class x_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class k_{constructor(e){this.expr=e}evaluate(e,t){var r,i;K(this.expr.params.length===1,1508);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return C.Dr();case"BYTES":{const a=(r=s.value)==null?void 0:r.bytesValue;if(typeof a=="string"){const l=$e.fromBase64String(a).toUint8Array();return l.reverse(),C.newValue({bytesValue:$e.fromUint8Array(l).toBase64()})}return C.newValue({bytesValue:new Uint8Array(a).reverse()})}case"STRING":{const a=(i=s.value)==null?void 0:i.stringValue,l=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(a),c=Array.from(l,(u=>u.segment)).reverse();return C.newValue({stringValue:c.join("")})}default:return C.vr()}}}class N_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class O_{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class D_{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,19400);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":return C.Dr();case"STRING":{const r=(function(a){let l=0;for(let c=0;c<a.length;c++){const u=a.codePointAt(c);if(u===void 0)return;if(u<=65535)if(u>=55296&&u<=57343)if(u<=56319){const d=a.codePointAt(c+1);d!==void 0&&d>=56320&&d<=57343?(l+=1,c++):l+=1}else l+=1;else l+=1;else{if(!(u<=1114111))return;l+=1,c++}}return l})(s.value.stringValue);return r===void 0?C.vr():C.newValue({integerValue:r})}default:return C.vr()}}}class L_{constructor(e){this.expr=e}evaluate(e,t){var r,i;K(this.expr.params.length===1,8486);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"BYTES":{const a=(r=s.value)==null?void 0:r.bytesValue;return typeof a=="string"?C.newValue({integerValue:$e.fromBase64String(a).toUint8Array().length}):C.newValue({integerValue:new Uint8Array(a).length})}case"STRING":{const a=(function(c){let u=0;for(let d=0;d<c.length;d++){const p=c.codePointAt(d);if(p===void 0)return;if(p>=55296&&p<=57343){if(!(p<=56319))return;{const y=c.codePointAt(d+1);if(y===void 0||!(y>=56320&&y<=57343))return;u+=4,d++}}else if(p<=127)u+=1;else if(p<=2047)u+=2;else if(p<=65535)u+=3;else{if(!(p<=1114111))return;u+=4,d++}}return u})((i=s.value)==null?void 0:i.stringValue);return a===void 0?C.vr():C.newValue({integerValue:a})}case"NULL":return C.Dr();default:return C.vr()}}}class Rr{constructor(e){this.expr=e}evaluate(e,t){var a,l;K(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let s=!1;const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":s=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":s=!0;break;default:return C.vr()}return s?C.Dr():this.kr((a=r.value)==null?void 0:a.stringValue,(l=i.value)==null?void 0:l.stringValue)}}class V_ extends Rr{kr(e,t){try{const s=(function(a){let l="";for(let c=0;c<a.length;c++){const u=a.charAt(c);switch(u){case"_":l+=".";break;case"%":l+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":l+="\\"+u;break;default:l+=u}}return"^"+l+"$"})(t),r=mi.compile(s);return C.newValue({booleanValue:r.matches(e)})}catch(s){return Kt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${s}`),C.vr()}}}class M_ extends Rr{kr(e,t){try{const s=mi.compile(t);return C.newValue({booleanValue:s.matcher(e).find()})}catch{return Kt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),C.vr()}}}class $_ extends Rr{kr(e,t){try{return C.newValue({booleanValue:mi.compile(t).matches(e)})}catch{return Kt(`Invalid regex pattern found in regex_match: ${t}, returning error`),C.vr()}}}class U_ extends Rr{kr(e,t){return C.newValue({booleanValue:e.includes(t)})}}class F_ extends Rr{kr(e,t){return C.newValue({booleanValue:e.startsWith(t)})}}class B_ extends Rr{kr(e,t){return C.newValue({booleanValue:e.endsWith(t)})}}class q_{constructor(e){this.expr=e}evaluate(e,t){var r,i;K(this.expr.params.length===1,29079);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return C.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return C.Dr();default:return C.vr()}}}class H_{constructor(e){this.expr=e}evaluate(e,t){var r,i;K(this.expr.params.length===1,60487);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return C.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return C.Dr();default:return C.vr()}}}class j_{constructor(e){this.expr=e}evaluate(e,t){var r,i;K(this.expr.params.length===1,28544);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":return C.newValue({stringValue:(i=(r=s.value)==null?void 0:r.stringValue)==null?void 0:i.trim()});case"NULL":return C.Dr();default:return C.vr()}}}class G_{constructor(e){this.expr=e}evaluate(e,t){const s=this.expr.params.map((a=>ee(a).evaluate(e,t)));let r="",i=!1;for(const a of s)switch(a.type){case"STRING":r+=a.value.stringValue;break;case"NULL":i=!0;break;default:return C.vr()}return i?C.Dr():C.newValue({stringValue:r})}}class z_{constructor(e){this.expr=e}evaluate(e,t){var a,l,c,u;K(this.expr.params.length===2,4483);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"UNSET":return C.Sr();case"MAP":break;default:return C.vr()}const r=ee(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return C.vr();const i=(u=(l=(a=s.value)==null?void 0:a.mapValue)==null?void 0:l.fields)==null?void 0:u[(c=r.value)==null?void 0:c.stringValue];return i===void 0?C.Sr():C.newValue(i)}}class tu{constructor(e){this.expr=e}evaluate(e,t){var u,d;K(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let s=!1;const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":s=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":s=!0;break;default:return C.vr()}if(s)return C.Dr();const a=Xl(r.value),l=Xl(i.value);if(a===void 0||l===void 0||((u=a.values)==null?void 0:u.length)!==((d=l.values)==null?void 0:d.length))return C.vr();const c=this.qr(a,l);return c===void 0||isNaN(c)?C.vr():C.newValue({doubleValue:c})}}class W_ extends tu{qr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return;let i=0,a=0,l=0;for(let u=0;u<s.length;u++){if(!cs(s[u])||!cs(r[u]))return;const d=Ke(s[u]),p=Ke(r[u]);i+=d*p,a+=d*d,l+=p*p}const c=Math.sqrt(a)*Math.sqrt(l);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class K_ extends tu{qr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let i=0;for(let a=0;a<s.length;a++){if(!cs(s[a])||!cs(r[a]))return;i+=Ke(s[a])*Ke(r[a])}return i}}class Y_ extends tu{qr(e,t){const s=(e==null?void 0:e.values)??[],r=(t==null?void 0:t.values)??[];if(s.length===0)return 0;let i=0;for(let a=0;a<s.length;a++){if(!cs(s[a])||!cs(r[a]))return;const l=Ke(s[a]),c=Ke(r[a]);i+=Math.pow(l-c,2)}return Math.sqrt(i)}}class Q_{constructor(e){this.expr=e}evaluate(e,t){var r;K(this.expr.params.length===1,39044);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":{const i=Xl(s.value);return C.newValue({integerValue:((r=i==null?void 0:i.values)==null?void 0:r.length)??0})}case"NULL":return C.Dr();default:return C.vr()}}}const Ci=BigInt(-62135596800),Pi=BigInt(253402300799),so=BigInt(1e3),ns=BigInt(1e6),X_=Ci*so,J_=Pi*so+BigInt(999),Z_=Ci*ns,e5=Pi*ns+BigInt(999999);function nu(n){return n>=Z_&&n<=e5}function jm(n){return n>=Ci&&n<=Pi}function xi(n,e){const t=BigInt(n);return!(t<Ci||t>Pi)&&!(e<0||e>=1e9)&&(t!==Ci||e===0)&&!(t===Pi&&e>999999999)}function Gm(n,e){return e<0?{seconds:n-1,nanos:e+1e9}:{seconds:n,nanos:e}}function su(n){return BigInt(n.seconds)*ns+BigInt(Math.trunc(n.nanoseconds/1e3))}class ru{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"INT":return this.toTimestamp(BigInt(s.value.integerValue));case"NULL":return C.Dr();default:return C.vr()}}}class t5 extends ru{toTimestamp(e){if(!nu(e))return C.vr();let t=Number(e/ns),s=Number(e%ns*BigInt(1e3));const r=Gm(t,s);return t=r.seconds,s=r.nanos,xi(t,s)?C.newValue({timestampValue:{seconds:t,nanos:s}}):C.vr()}}class n5 extends ru{toTimestamp(e){if(!(function(a){return a>=X_&&a<=J_})(e))return C.vr();let t=Number(e/so),s=Number(e%so*BigInt(1e6));const r=Gm(t,s);return t=r.seconds,s=r.nanos,xi(t,s)?C.newValue({timestampValue:{seconds:t,nanos:s}}):C.vr()}}class s5 extends ru{toTimestamp(e){if(!jm(e))return C.vr();const t=Number(e);return C.newValue({timestampValue:{seconds:t,nanos:0}})}}class iu{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const s=ee(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":return C.Dr();default:return C.vr()}const r=qc(s.value.timestampValue);return xi(r.seconds,r.nanoseconds)?this.$r(r):C.vr()}}class r5 extends iu{$r(e){const t=su(e);return nu(t)?C.newValue({integerValue:`${t.toString()}`}):C.vr()}}class i5 extends iu{$r(e){const t=su(e),s=t/BigInt(1e3),r=t%BigInt(1e3);return s>BigInt(0)||r===BigInt(0)?C.newValue({integerValue:s.toString()}):C.newValue({integerValue:(s-BigInt(1)).toString()})}}class a5 extends iu{$r(e){const t=BigInt(e.seconds);return jm(t)?C.newValue({integerValue:t.toString()}):C.vr()}}class zm{constructor(e){this.expr=e}evaluate(e,t){K(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let s=!1;const r=ee(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":s=!0;break;default:return C.vr()}const i=ee(this.expr.params[1]).evaluate(e,t);let a;switch(i.type){case"STRING":if(a=(function($){switch($){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),a===void 0)return C.vr();break;case"NULL":s=!0;break;default:return C.vr()}const l=ee(this.expr.params[2]).evaluate(e,t);switch(l.type){case"INT":break;case"NULL":s=!0;break;default:return C.vr()}if(s)return C.Dr();const c=BigInt(l.value.integerValue);let u;try{switch(a){case"microsecond":u=c;break;case"millisecond":u=c*BigInt(1e3);break;case"second":u=c*BigInt(1e6);break;case"minute":u=c*BigInt(6e7);break;case"hour":u=c*BigInt(36e8);break;case"day":u=c*BigInt(864e8);break;default:return C.vr()}if(a!=="microsecond"&&c!==BigInt(0)&&u/c!==BigInt(this.Kr(a)))return C.vr()}catch(F){return Kt(`Error during timestamp arithmetic: ${F}`),C.vr()}const d=qc(r.value.timestampValue);if(!xi(d.seconds,d.nanoseconds))return C.vr();const p=su(d),y=this.Wr(p,u);if(!nu(y))return C.vr();const b=Number(y/ns),R=y%ns,L=Number((R<0?R+ns:R)*BigInt(1e3)),k=R<0?b-1:b;return xi(k,L)?C.newValue({timestampValue:{seconds:k,nanos:L}}):C.vr()}Kr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class o5 extends zm{Wr(e,t){return e+t}}class l5 extends zm{Wr(e,t){return e-t}}function ki(n){if((n=qm(n))instanceof Tr)return`fld(${n.fieldName})`;if(n instanceof Ir)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ce?`ref(${t.path})`:t instanceof yt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(n.value)})`;if(n instanceof O)return`fn(${n.name},[${n.params.map(ki).join(",")}])`;if(n.expressionType==="ListOfExpressions")return`list([${n.Rr.map(ki).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(n,null,2)}`)}function c5(n){if(n instanceof Um)return`${n._name}(${fa(n.fields)})`;if(n instanceof Fm){let e=`${n._name}(${fa(n.accumulators)})`;return n.groups.size>0&&(e+=`grouping(${fa(n.groups)})`),e}if(n instanceof Bm)return`${n._name}(${fa(n.groups)})`;if(n instanceof xo)return`${n._name}(${n.Vr})`;if(n instanceof ko)return`${n._name}(${n.collectionId})`;if(n instanceof Qc)return`${n._name}()`;if(n instanceof Xc)return`${n._name}(${n.dr.sort()})`;if(n instanceof No)return`${n._name}(${ki(n.condition)})`;if(n instanceof $s)return`${n._name}(${n.limit})`;if(n instanceof yn)return`${n._name}(${(function(t){return t.map((s=>`${ki(s.expr)}${s.direction}`)).join(",")})(n.orderings)})`;throw new Error(`Unrecognized stage ${n._name}`)}function fa(n){return`${Array.from(n.entries()).sort().map((([e,t])=>`${e}=${ki(t)}`)).join(",")}`}function An(n){return n.stages.map((e=>c5(e))).join("|")}function Wm(n,e){return An(n)===An(e)}function qe(n){return n instanceof ut}function kd(n){return qe(n)?An(n):oi(n)}function Km(n){return qe(n)?An(n):(function(t){return`${im(on(t))}|lt:${t.limitType}`})(n)}function Lo(n,e){return n instanceof ut&&e instanceof ut?Wm(n,e):!(n instanceof ut&&!(e instanceof ut)||!(n instanceof ut)&&e instanceof ut)&&M8(n,e)}function Ym(n){return Ts(n)?An(n):im(n)}function Qm(n,e){return n instanceof ut&&e instanceof ut?Wm(n,e):!(n instanceof ut&&!(e instanceof ut)||!(n instanceof ut)&&e instanceof ut)&&am(n,e)}function u5(n,e){const t=(function(r){let i=!1;const a=[];for(const l of r)if(l instanceof yn)if(i=!0,l.orderings.some((c=>c.expr instanceof Tr&&c.expr.fieldName===Zt)))a.push(l);else{const c=l.orderings.map((u=>u));c.push(Ca(Zt).ascending()),a.push(new yn(c,{}))}else l instanceof $s&&(i||(a.push(new yn([Ca(Zt).ascending()],{})),i=!0)),a.push(l);return i||a.push(new yn([Ca(Zt).ascending()],{})),a})(n.stages);if(n.userDataReader){const s=n.userDataReader.createContext(3,"toCorePipeline");t.forEach((r=>r._readUserData(s)))}return new ut(n.userDataReader.serializer,t,e)}/**
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
 */class h5{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&w8(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ii(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ii(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=dm();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(r.key)?null:l;const c=Qf(a,l);c!==null&&s.set(r.key,c),a.isValidDocument()||a.convertToNoDocument(re.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ce())}isEqual(e){return this.batchId===e.batchId&&hr(this.mutations,e.mutations,((t,s)=>cd(t,s)))&&hr(this.baseMutations,e.baseMutations,((t,s)=>cd(t,s)))}}class au{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){K(e.mutations.length===s.length,58842,{Qr:e.mutations.length,Gr:s.length});let r=(function(){return q8})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new au(e,t,s,r)}}/**
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
 */class d5{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _n{constructor(e,t,s,r,i=re.min(),a=re.min(),l=$e.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new _n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class p5{constructor(e){this.zr=e}}function f5(n){const e=iy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Za(e,e.limit,"L"):e}/**
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
 */class m5{constructor(){this.Hi=new g5}addToCollectionParentIndex(e,t){return this.Hi.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Hi.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(as.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(as.min())}updateCollectionGroup(e,t,s){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class g5{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Me(ye.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Me(ye.comparator)).toArray()}}/**
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
 */class ds{constructor(e){this.Ds=e}next(){return this.Ds+=2,this.Ds}static xs(){return new ds(0)}static Cs(){return new ds(-1)}}// Copyright 2024 Google LLC* @license
function Xm(n,e){var s;let t=e;for(const r of n.stages)t=_5({serializer:n.serializer,serverTimestampBehavior:(s=n.listenOptions)==null?void 0:s.serverTimestampBehavior},r,t);return t}function Vo(n,e){return Xm(n,[e]).length>0}function y5(n,e){return qe(n)?Vo(n,e):Ro(n,e)}function _5(n,e,t){if(e instanceof xo)return(function(r,i,a){return a.filter((l=>l.isFoundDocument()&&`/${l.key.getCollectionPath().canonicalString()}`===i.Vr))})(0,e,t);if(e instanceof No)return(function(r,i,a){return a.filter((l=>{const c=ui(ee(i.condition).evaluate(r,l));return c!==void 0&&$t(c,_t)}))})(n,e,t);if(e instanceof ko)return(function(r,i,a){return a.filter((l=>l.isFoundDocument()&&l.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof Qc)return(function(r,i,a){return a.filter((l=>l.isFoundDocument()))})(0,0,t);if(e instanceof Xc)return(function(r,i,a){return a.filter((l=>l.isFoundDocument()&&i.mr.has(l.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof $s)return(function(r,i,a){return a.slice(0,i.limit)})(0,e,t);if(e instanceof yn)return(function(r,i,a){const l=i.orderings.map((c=>({ks:ee(c.expr),direction:c.direction})));return[...a].sort(((c,u)=>{for(const{ks:d,direction:p}of l){const y=ui(d.evaluate(r,c)),b=ui(d.evaluate(r,u)),R=vt(y??pr,b??pr);if(R!==0)return p==="ascending"?R:-R}return 0}))})(n,e,t);throw new Error(`Unknown stage: ${e._name}`)}function ic(n){const e=(function(s){for(let r=s.stages.length-1;r>=0;r--){const i=s.stages[r];if(i instanceof yn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(n);return(t,s)=>{for(const r of e){const i=ui(ee(r.expr).evaluate({serializer:n.serializer},t)),a=ui(ee(r.expr).evaluate({serializer:n.serializer},s)),l=vt(i||pr,a||pr);if(l!==0)return r.direction==="ascending"?l:-l}return 0}}function Pl(n){for(let e=n.stages.length-1;e>=0;e--){const t=n.stages[e];if(t instanceof $s)return{limit:t.limit}}}/**
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
 */class v5{constructor(){this.changes=new Ws((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?M.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class w5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class E5{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&ii(s.mutation,r,Ht.empty(),Ee.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ce()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ce()){const r=Wn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=er();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=Wn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ce())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,s,r){let i=mt();const a=li(),l=(function(){return li()})();return t.forEach(((c,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof zs)?i=i.insert(u.key,u):d!==void 0?(a.set(u.key,d.mutation.getFieldMask()),ii(d.mutation,u,d.mutation.getFieldMask(),Ee.now())):a.set(u.key,Ht.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,d)=>a.set(u,d))),t.forEach(((u,d)=>l.set(u,new w5(d,a.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,t){const s=li();let r=new Te(((a,l)=>a-l)),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const u=t.get(c);if(u===null)return;let d=s.get(c)||Ht.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(r.get(l.batchId)||ce()).add(c);r=r.insert(l.batchId,p)}))})).next((()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=dm();d.forEach((y=>{if(!i.has(y)){const b=Qf(t.get(y),s.get(y));b!==null&&p.set(y,b),i=i.add(y)}})),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return qe(t)?this.getDocumentsMatchingPipeline(e,t,s,r):D8(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):M.resolve(Wn());let l=gi,c=i;return a.next((u=>M.forEach(u,((d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next((y=>{c=c.insert(d,y)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ce()))).next((d=>({batchId:l,changes:hm(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Q(t)).next((s=>{let r=er();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=er();return this.indexManager.getCollectionParents(e,i).next((l=>M.forEach(l,(c=>{const u=(function(p,y){return new br(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>this.retrieveMatchingLocalDocuments(i,a,(l=>Ro(t,l)))))}getDocumentsMatchingPipeline(e,t,s,r){if(ts(t)==="collection_group"){const i=Zc(t);let a=er();return this.indexManager.getCollectionParents(e,i).next((l=>M.forEach(l,(c=>{const u=(function(p,y){const b=p.stages.map((R=>R instanceof ko?new xo(y.canonicalString(),{}):R));return new ut(p.serializer,b)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,u,s,r).next((d=>{d.forEach(((p,y)=>{a=a.insert(p,y)}))}))})).next((()=>a))))}{let i;return this.getOverlaysForPipeline(e,t,s.largestBatchId).next((a=>{switch(i=a,ts(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r);case"documents":let l=ce();for(const c of rc(t))l=l.add(Q.fromPath(c));return this.remoteDocumentCache.getEntries(e,l);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new j("invalid-argument",`Invalid pipeline source to execute offline: ${An(t)}`)}})).next((a=>this.retrieveMatchingLocalDocuments(i,a,(l=>Vo(t,l)))))}}retrieveMatchingLocalDocuments(e,t,s){e.forEach(((i,a)=>{const l=a.getKey();t.get(l)===null&&(t=t.insert(l,et.newInvalidDocument(l)))}));let r=er();return t.forEach(((i,a)=>{const l=e.get(i);l!==void 0&&ii(l.mutation,a,Ht.empty(),Ee.now()),s(a)&&(r=r.insert(i,a))})),r}getOverlaysForPipeline(e,t,s){switch(ts(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ye.fromString(Oo(t)),s);case"collection_group":throw new j("invalid-argument",`Unexpected collection group pipeline: ${An(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,rc(t).map((r=>Q.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,s);default:throw new j("invalid-argument",`Failed to get overlays for pipeline: ${An(t)}`)}}}/**
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
 */class b5{constructor(e){this.serializer=e,this.Hs=new Map,this.Js=new Map}getBundleMetadata(e,t){return M.resolve(this.Hs.get(t))}saveBundleMetadata(e,t){return this.Hs.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:ln(r.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Js.get(t))}saveNamedQuery(e,t){return this.Js.set(t.name,(function(r){return{name:r.name,query:f5(r.bundledQuery),readTime:ln(r.readTime)}})(t)),M.resolve()}}/**
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
 */class A5{constructor(){this.overlays=new Te(Q.comparator),this.Ys=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Wn();return M.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}getAllOverlays(e,t){const s=Wn();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&s.set(r,i)})),M.resolve(s)}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.Hr(e,t,i)})),M.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Ys.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ys.delete(s)),M.resolve()}getOverlaysForCollection(e,t,s){const r=Wn(),i=t.length+1,a=new Q(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return M.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new Te(((u,d)=>u-d));const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=Wn(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Wn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,d)=>l.set(u,d))),!(l.size()>=r)););return M.resolve(l)}Hr(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.Ys.get(r.largestBatchId).delete(s.key);this.Ys.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new d5(t,s));let i=this.Ys.get(t);i===void 0&&(i=ce(),this.Ys.set(t,i)),this.Ys.set(t,i.add(s.key))}}/**
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
 */class T5{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
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
 */class ou{constructor(){this.Zs=new Me(Ge.Xs),this.e_=new Me(Ge.t_)}isEmpty(){return this.Zs.isEmpty()}addReference(e,t){const s=new Ge(e,t);this.Zs=this.Zs.add(s),this.e_=this.e_.add(s)}n_(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.r_(new Ge(e,t))}i_(e,t){e.forEach((s=>this.removeReference(s,t)))}s_(e){const t=new Q(new ye([])),s=new Ge(t,e),r=new Ge(t,e+1),i=[];return this.e_.forEachInRange([s,r],(a=>{this.r_(a),i.push(a.key)})),i}__(){this.Zs.forEach((e=>this.r_(e)))}r_(e){this.Zs=this.Zs.delete(e),this.e_=this.e_.delete(e)}o_(e){const t=new Q(new ye([])),s=new Ge(t,e),r=new Ge(t,e+1);let i=ce();return this.e_.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ge(e,0),s=this.Zs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Ge{constructor(e,t){this.key=e,this.a_=t}static Xs(e,t){return Q.comparator(e.key,t.key)||he(e.a_,t.a_)}static t_(e,t){return he(e.a_,t.a_)||Q.comparator(e.key,t.key)}}/**
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
 */class I5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.gs=1,this.u_=new Me(Ge.Xs)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.gs;this.gs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new h5(i,t,s,r);this.mutationQueue.push(a);for(const l of r)this.u_=this.u_.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.c_(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.l_(s),i=r<0?0:r;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Vc:this.gs-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Ge(t,0),r=new Ge(t,Number.POSITIVE_INFINITY),i=[];return this.u_.forEachInRange([s,r],(a=>{const l=this.c_(a.a_);i.push(l)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Me(he);return t.forEach((r=>{const i=new Ge(r,0),a=new Ge(r,Number.POSITIVE_INFINITY);this.u_.forEachInRange([i,a],(l=>{s=s.add(l.a_)}))})),M.resolve(this.E_(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;Q.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new Q(i),0);let l=new Me(he);return this.u_.forEachWhile((c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.a_)),!0)}),a),M.resolve(this.E_(l))}E_(e){const t=[];return e.forEach((s=>{const r=this.c_(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){K(this.h_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.u_;return M.forEach(t.mutations,(r=>{const i=new Ge(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.u_=s}))}bs(e){}containsKey(e,t){const s=new Ge(t,0),r=this.u_.firstAfterOrEqual(s);return M.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}h_(e,t){return this.l_(e)}l_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}c_(e){const t=this.l_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class S5{constructor(e){this.T_=e,this.docs=(function(){return new Te(Q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.T_(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return M.resolve(s?s.document.mutableCopy():et.newInvalidDocument(t))}getEntries(e,t){let s=mt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():et.newInvalidDocument(r))})),M.resolve(s)}getAllEntries(e){let t=mt();return this.docs.forEach(((s,r)=>{t=t.insert(s,r.document)})),M.resolve(t)}getDocumentsMatchingQuery(e,t,s,r){let i,a;qe(t)?(i=ye.fromString(Oo(t)),a=d=>Vo(t,d)):(i=t.path,a=d=>Ro(t,d));let l=mt();const c=new Q(i.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!i.isPrefixOf(d.path))break;d.path.length>i.length+1||t8(e8(p),s)<=0||(r.has(p.key)||a(p))&&(l=l.insert(p.key,p.mutableCopy()))}return M.resolve(l)}getAllFromCollectionGroup(e,t,s,r){J(9500)}P_(e,t){return M.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new R5(this)}getSize(e){return M.resolve(this.size)}}class R5 extends v5{constructor(e){super(),this.zs=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.zs.addEntry(e,r)):this.zs.removeEntry(s)})),M.waitFor(t)}getFromCache(e,t){return this.zs.getEntry(e,t)}getAllFromCache(e,t){return this.zs.getEntries(e,t)}}/**
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
 */class C5{constructor(e){this.persistence=e,this.R_=new Ws((t=>Ym(t)),Qm),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.I_=0,this.A_=new ou,this.targetCount=0,this.V_=ds.xs()}forEachTarget(e,t){return this.R_.forEach(((s,r)=>t(r))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.I_)}allocateTargetId(e){return this.highestTargetId=this.V_.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.I_&&(this.I_=t),M.resolve()}Ms(e){this.R_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.V_=new ds(t),this.highestTargetId=t),e.sequenceNumber>this.I_&&(this.I_=e.sequenceNumber)}addTargetData(e,t){return this.Ms(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Ms(t),M.resolve()}removeTargetData(e,t){return this.R_.delete(t.target),this.A_.s_(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.R_.forEach(((a,l)=>{l.sequenceNumber<=t&&s.get(l.targetId)===null&&(this.R_.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)})),M.waitFor(i).next((()=>r))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const s=this.R_.get(t)||null;return M.resolve(s)}addMatchingKeys(e,t,s){return this.A_.n_(t,s),M.resolve()}removeMatchingKeys(e,t,s){this.A_.i_(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.A_.s_(t),M.resolve()}getMatchingKeysForTargetId(e,t){const s=this.A_.o_(t);return M.resolve(s)}containsKey(e,t){return M.resolve(this.A_.containsKey(t))}}/**
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
 */class Jm{constructor(e,t){this.d_={},this.overlays={},this.f_=new wo(0),this.m_=!1,this.m_=!0,this.p_=new T5,this.referenceDelegate=e(this),this.g_=new C5(this),this.indexManager=new m5,this.remoteDocumentCache=(function(r){return new S5(r)})((s=>this.referenceDelegate.y_(s))),this.serializer=new p5(t),this.w_=new b5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.m_=!1,Promise.resolve()}get started(){return this.m_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new A5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.d_[e.toKey()];return s||(s=new I5(t,this.referenceDelegate),this.d_[e.toKey()]=s),s}getGlobalsCache(){return this.p_}getTargetCache(){return this.g_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.w_}runTransaction(e,t,s){G("MemoryPersistence","Starting transaction:",e);const r=new P5(this.f_.next());return this.referenceDelegate.b_(),s(r).next((i=>this.referenceDelegate.v_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}S_(e,t){return M.or(Object.values(this.d_).map((s=>()=>s.containsKey(e,t))))}}class P5 extends s8{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.D_=new ou,this.x_=null}static C_(e){return new lu(e)}get F_(){if(this.x_)return this.x_;throw J(60996)}addReference(e,t,s){return this.D_.addReference(s,t),this.F_.delete(s.toString()),M.resolve()}removeReference(e,t,s){return this.D_.removeReference(s,t),this.F_.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.F_.add(t.toString()),M.resolve()}removeTarget(e,t){this.D_.s_(t.targetId).forEach((r=>this.F_.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.F_.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}b_(){this.x_=new Set}v_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.F_,(s=>{const r=Q.fromPath(s);return this.O_(e,r).next((i=>{i||t.removeEntry(r,re.min())}))})).next((()=>(this.x_=null,t.apply(e))))}updateLimboDocument(e,t){return this.O_(e,t).next((s=>{s?this.F_.delete(t.toString()):this.F_.add(t.toString())}))}y_(e){return 0}O_(e,t){return M.or([()=>M.resolve(this.D_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.S_(e,t)])}}class ro{constructor(e,t){this.persistence=e,this.M_=new Ws((s=>o8(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=Py(this,t)}static C_(e,t){return new ro(e,t)}b_(){}v_(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}lr(e){const t=this.Ls(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}Ls(e){let t=0;return this.Er(e,(s=>{t++})).next((()=>t))}Er(e,t){return M.forEach(this.M_,((s,r)=>this.Us(e,s,r).next((i=>i?M.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.P_(e,(a=>this.Us(e,a,t).next((l=>{l||(s++,i.removeEntry(a,re.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.M_.set(s,e.currentSequenceNumber),M.resolve()}removeReference(e,t,s){return this.M_.set(s,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.M_.set(t,e.currentSequenceNumber),M.resolve()}y_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ta(e.data.value)),t}Us(e,t,s){return M.or([()=>this.persistence.S_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.M_.get(t);return M.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class cu{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.wo=s,this.bo=r}static vo(e,t){let s=ce(),r=ce();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new cu(e,t.fromCache,s,r)}}/**
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
 */function x5(n,e){return Q.comparator(n.key,e.key)}/**
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
 */class k5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class N5{constructor(){this.So=!1,this.Do=!1,this.xo=100,this.Co=(function(){return Ag()?8:r8(nt())>0?6:4})()}initialize(e,t){this.Fo=e,this.indexManager=t,this.So=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.Oo(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.Mo(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new k5;return this.No(e,t,a).next((l=>{if(i.result=l,this.Do)return this.Lo(e,t,a,l.size)}))})).next((()=>i.result))}Lo(e,t,s,r){return qe(t)?M.resolve():s.documentReadCount<this.xo?(Zs()<=pe.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",oi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.xo,"documents"),M.resolve()):(Zs()<=pe.DEBUG&&G("QueryEngine","Query:",oi(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Co*r?(Zs()<=pe.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",oi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(t))):M.resolve())}Oo(e,t){if(qe(t))return M.resolve(null);let s=t;if(md(s))return M.resolve(null);let r=on(s);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(s.limit!==null&&i===1&&(s=Za(s,null,"F"),r=on(s)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const l=ce(...a);return this.Fo.getDocuments(e,l).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.Bo(s,c);return this.Uo(s,d,l,u.readTime)?this.Oo(e,Za(s,null,"F")):this.ko(e,d,s,u)}))))})))))}Mo(e,t,s,r){return(qe(t)?(function(a){for(const l of a.stages){if(l instanceof $s||l instanceof xd)return!1;if(l instanceof No){if(l.condition instanceof Vm&&l.condition._expr.name==="exists"&&l.condition._expr.params[0]instanceof Tr&&l.condition._expr.params[0].fieldName===Zt)continue;return!1}}return!0})(t):md(t))||r.isEqual(re.min())?M.resolve(null):this.Fo.getDocuments(e,s).next((i=>{const a=this.Bo(t,i);return this.Uo(t,a,s,r)?M.resolve(null):(Zs()<=pe.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),kd(t)),this.ko(e,a,t,Z9(r,gi)).next((l=>l)))}))}Bo(e,t){let s,r;return qe(e)?(s=new Me(x5),r=i=>Vo(e,i)):(s=new Me(Fc(e)),r=i=>Ro(e,i)),t.forEach(((i,a)=>{r(a)&&(s=s.add(a))})),s}Uo(e,t,s,r){if(qe(e))return(function(l){return l.stages.some((c=>c instanceof $s||c instanceof xd))})(e);if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}No(e,t,s){return Zs()<=pe.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",kd(t)),this.Fo.getDocumentsMatchingQuery(e,t,as.min(),s)}ko(e,t,s,r){return this.Fo.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const uu="LocalStore",O5=3e8;class D5{constructor(e,t,s,r){this.persistence=e,this.qo=t,this.serializer=r,this.$o=new Te(he),this.Ko=new Ws((i=>Ym(i)),Qm),this.Wo=new Map,this.Qo=e.getRemoteDocumentCache(),this.g_=e.getTargetCache(),this.w_=e.getBundleCache(),this.Go(s)}Go(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E5(this.Qo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Qo.setIndexManager(this.indexManager),this.qo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$o)))}}function L5(n,e,t,s){return new D5(n,e,t,s)}async function Zm(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Go(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],l=[];let c=ce();for(const u of r){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(s,c).next((u=>({zo:u,removedBatchIds:a,addedBatchIds:l})))}))}))}function V5(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Qo.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,d){const p=u.batch,y=p.keys();let b=M.resolve();return y.forEach((R=>{b=b.next((()=>d.getEntry(c,R))).next((L=>{const k=u.docVersions.get(R);K(k!==null,48541),L.version.compareTo(k)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),d.addEntry(L)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,p)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(l){let c=ce();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function e2(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.g_.getLastRemoteSnapshotVersion(t)))}function M5(n,e){const t=ie(n),s=e.snapshotVersion;let r=t.$o;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Qo.newChangeBuffer({trackRemovals:!0});r=t.$o;const l=[];e.targetChanges.forEach(((d,p)=>{const y=r.get(p);if(!y)return;l.push(t.g_.removeMatchingKeys(i,d.removedDocuments,p).next((()=>t.g_.addMatchingKeys(i,d.addedDocuments,p))));let b=y.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken($e.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,s)),r=r.insert(p,b),(function(L,k,F){return L.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=O5?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0})(y,b,d)&&l.push(t.g_.updateTargetData(i,b))}));let c=mt(),u=ce();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push($5(i,a,e.documentUpdates).next((d=>{c=d.jo,u=d.Ho}))),!s.isEqual(re.min())){const d=t.g_.getLastRemoteSnapshotVersion(i).next((p=>t.g_.setTargetsMetadata(i,i.currentSequenceNumber,s)));l.push(d)}return M.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(t.$o=r,i)))}function $5(n,e,t){let s=ce(),r=ce();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=mt();return t.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):G(uu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{jo:a,Ho:r}}))}function U5(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Vc),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function F5(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.g_.getTargetData(s,e).next((i=>i?(r=i,M.resolve(r)):t.g_.allocateTargetId(s).next((a=>(r=new _n(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.g_.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.$o.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.$o=t.$o.insert(s.targetId,s),t.Ko.set(e,s.targetId)),s}))}async function ac(n,e,t){const s=ie(n),r=s.$o.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!Er(a))throw a;G(uu,`Failed to update sequence numbers for target ${e}: ${a}`)}s.$o=s.$o.remove(e),s.Ko.delete(r.target)}function Nd(n,e,t){const s=ie(n);let r=re.min(),i=ce();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,u,d){const p=ie(c),y=p.Ko.get(d);return y!==void 0?M.resolve(p.$o.get(y)):p.g_.getTargetData(u,d)})(s,a,qe(e)?e:on(e)).next((l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.g_.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>s.qo.getDocumentsMatchingQuery(a,e,t?r:re.min(),t?i:ce()))).next((l=>(B5(s,l),{documents:l,Jo:i})))))}function B5(n,e){e.forEach(((t,s)=>{const r=s.key.getCollectionGroup(),i=n.Wo.get(r)||re.min();s.readTime.compareTo(i)>0&&n.Wo.set(r,s.readTime)}))}class Od{constructor(){this.activeTargetIds=G8()}na(e){this.activeTargetIds=this.activeTargetIds.add(e)}ra(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ta(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class q5{constructor(){this.Ua=new Od,this.ka={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Ua.na(e),this.ka[e]||"not-current"}updateQueryState(e,t,s){this.ka[e]=t}removeLocalQueryTarget(e){this.Ua.ra(e)}isLocalQueryTarget(e){return this.Ua.activeTargetIds.has(e)}clearQueryState(e){delete this.ka[e]}getAllActiveQueryTargets(){return this.Ua.activeTargetIds}isActiveQueryTarget(e){return this.Ua.activeTargetIds.has(e)}start(){return this.Ua=new Od,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function xl(){return typeof document<"u"?document:null}/**
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
 */class H5{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.qa=0,this.$a=null,this.Ka=!0}Wa(){this.qa===0&&(this.Qa("Unknown"),this.$a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.$a=null,this.Ga("Backend didn't respond within 10 seconds."),this.Qa("Offline"),Promise.resolve()))))}za(e){this.state==="Online"?this.Qa("Unknown"):(this.qa++,this.qa>=1&&(this.ja(),this.Ga(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Qa("Offline")))}set(e){this.ja(),this.qa=0,e==="Online"&&(this.Ka=!1),this.Qa(e)}Qa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Ga(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Ka?(Sn(t),this.Ka=!1):G("OnlineStateTracker",t)}ja(){this.$a!==null&&(this.$a.cancel(),this.$a=null)}}/**
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
 */const hn="RemoteStore";class j5{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ha=[],this.Ja=new Map,this.Ya=new Map,this.Za=new Map,this.Xa=new ds(1e3),this.eu=new ds(1001),this.tu=new Set,this.nu=[],this.ru=i,this.ru.bt((a=>{s.enqueueAndForget((async()=>{Ys(this)&&(G(hn,"Restarting streams for network reachability change."),await(async function(c){const u=ie(c);u.tu.add(4),await ji(u),u.iu.set("Unknown"),u.tu.delete(4),await Mo(u)})(this))}))})),this.iu=new H5(s,r)}}async function Mo(n){if(Ys(n))for(const e of n.nu)await e(!0)}async function ji(n){for(const e of n.nu)await e(!1)}function oc(n,e){return n.Ya.get(e)||void 0}function t2(n,e){const t=ie(n),s=oc(t,e.targetId);if(s!==void 0&&t.Ja.has(s))return;const r=(function(l,c){const u=oc(l,c);u!==void 0&&l.Za.delete(u);const d=(function(y,b){return b%2!=0?y.eu.next():y.Xa.next()})(l,c);return l.Ya.set(c,d),l.Za.set(d,c),d})(t,e.targetId);G(hn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new _n(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.Ja.set(r,i),fu(t)?pu(t):Cr(t).Fn()&&du(t,i)}function hu(n,e){const t=ie(n),s=Cr(t),r=oc(t,e);G(hn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.Ja.delete(r),t.Ya.delete(e),t.Za.delete(r),s.Fn()&&n2(t,r),t.Ja.size===0&&(s.Fn()?s.Nn():Ys(t)&&t.iu.set("Unknown"))}function du(n,e){if(n.su.We(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.Za.get(e.targetId);if(t===void 0)return void G(hn,"SDK target ID not found for remote ID: "+e.targetId);const s=n.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(s)}Cr(n).jn(e)}function n2(n,e){n.su.We(e),Cr(n).Hn(e)}function pu(n){n.su=new K8({getRemoteKeysForTarget:e=>{const t=n.Za.get(e);return t!==void 0?n.remoteSyncer.getRemoteKeysForTarget(t):ce()},dt:e=>n.Ja.get(e)||null,Tt:()=>n.datastore.serializer.databaseId}),Cr(n).start(),n.iu.Wa()}function fu(n){return Ys(n)&&!Cr(n).Cn()&&n.Ja.size>0}function Ys(n){return ie(n).tu.size===0}function s2(n){n.su=void 0}async function G5(n){n.iu.set("Online")}async function z5(n){n.Ja.forEach(((e,t)=>{du(n,e)}))}async function W5(n,e){s2(n),fu(n)?(n.iu.za(e),pu(n)):n.iu.set("Unknown")}async function K5(n,e,t){if(n.iu.set("Online"),e instanceof fm&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const l of i.targetIds){if(r.Ja.has(l)){const c=r.Za.get(l);c!==void 0&&(await r.remoteSyncer.rejectListen(c,a),r.Ya.delete(c),r.Za.delete(l)),r.Ja.delete(l)}r.su.removeTarget(l)}})(n,e)}catch(s){G(hn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await io(n,s)}else if(e instanceof Sa?n.su.et(e):e instanceof pm?n.su.ot(e):n.su.rt(e),!t.isEqual(re.min()))try{const s=await e2(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const l=i.su.Rt(a);l.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ja.get(d);p&&i.Ja.set(d,p.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,d)=>{const p=i.Ja.get(u);if(!p)return;i.Ja.set(u,p.withResumeToken($e.EMPTY_BYTE_STRING,p.snapshotVersion)),n2(i,u);const y=new _n(p.target,u,d,p.sequenceNumber);du(i,y)}));const c=(function(d,p){const y=new Map;p.targetChanges.forEach(((R,L)=>{const k=d.Za.get(L);k!==void 0&&y.set(k,R)}));let b=new Te(he);return p.targetMismatches.forEach(((R,L)=>{const k=d.Za.get(R);k!==void 0&&(b=b.insert(k,L))})),new Bi(p.snapshotVersion,y,b,p.documentUpdates,p.augmentedDocumentUpdates,p.resolvedLimboDocuments)})(i,l);return i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){G(hn,"Failed to raise snapshot:",s),await io(n,s)}}async function io(n,e,t){if(!Er(e))throw e;n.tu.add(1),await ji(n),n.iu.set("Offline"),t||(t=()=>e2(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{G(hn,"Retrying IndexedDB access"),await t(),n.tu.delete(1),await Mo(n)}))}function r2(n,e){return e().catch((t=>io(n,t,e)))}async function $o(n){const e=ie(n),t=ps(e);let s=e.Ha.length>0?e.Ha[e.Ha.length-1].batchId:Vc;for(;Y5(e);)try{const r=await U5(e.localStore,s);if(r===null){e.Ha.length===0&&t.Nn();break}s=r.batchId,Q5(e,r)}catch(r){await io(e,r)}i2(e)&&a2(e)}function Y5(n){return Ys(n)&&n.Ha.length<10}function Q5(n,e){n.Ha.push(e);const t=ps(n);t.Fn()&&t.Jn&&t.Yn(e.mutations)}function i2(n){return Ys(n)&&!ps(n).Cn()&&n.Ha.length>0}function a2(n){ps(n).start()}async function X5(n){ps(n).er()}async function J5(n){const e=ps(n);for(const t of n.Ha)e.Yn(t.mutations)}async function Z5(n,e,t){const s=n.Ha.shift(),r=au.from(s,e,t);await r2(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await $o(n)}async function ev(n,e){e&&ps(n).Jn&&await(async function(s,r){if((function(a){return F8(a)&&a!==V.ABORTED})(r.code)){const i=s.Ha.shift();ps(s).Mn(),await r2(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await $o(s)}})(n,e),i2(n)&&a2(n)}async function Dd(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),G(hn,"RemoteStore received new credentials");const s=Ys(t);t.tu.add(3),await ji(t),s&&t.iu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.tu.delete(3),await Mo(t)}async function tv(n,e){const t=ie(n);e?(t.tu.delete(2),await Mo(t)):e||(t.tu.add(2),await ji(t),t.iu.set("Unknown"))}function Cr(n){return n._u||(n._u=(function(t,s,r){const i=ie(t);return i.nr(),new _y(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Qt:G5.bind(null,n),zt:z5.bind(null,n),Ht:W5.bind(null,n),zn:K5.bind(null,n)}),n.nu.push((async e=>{e?(n._u.Mn(),fu(n)?pu(n):n.iu.set("Unknown")):(await n._u.stop(),s2(n))}))),n._u}function ps(n){return n.ou||(n.ou=(function(t,s,r){const i=ie(t);return i.nr(),new vy(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Qt:()=>Promise.resolve(),zt:X5.bind(null,n),Ht:ev.bind(null,n),Zn:J5.bind(null,n),Xn:Z5.bind(null,n)}),n.nu.push((async e=>{e?(n.ou.Mn(),await $o(n)):(await n.ou.stop(),n.Ha.length>0&&(G(hn,`Stopping write stream with ${n.Ha.length} pending writes`),n.Ha=[]))}))),n.ou}/**
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
 */class mu{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,l=new mu(e,t,a,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gu(n,e){if(Sn("AsyncQueue",`${e}: ${n}`),Er(n))return new j(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Cs{static emptySet(e){return new Cs(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Q.comparator(t.key,s.key):(t,s)=>Q.comparator(t.key,s.key),this.keyedMap=er(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Cs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Ld{constructor(){this.au=new Te(Q.comparator)}track(e){const t=e.doc.key,s=this.au.get(t);s?e.type!==0&&s.type===3?this.au=this.au.insert(t,e):e.type===3&&s.type!==1?this.au=this.au.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.au=this.au.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.au=this.au.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.au=this.au.remove(t):e.type===1&&s.type===2?this.au=this.au.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.au=this.au.insert(t,{type:2,doc:e.doc}):J(63341,{ft:e,uu:s}):this.au=this.au.insert(t,e)}cu(){const e=[];return this.au.inorderTraversal(((t,s)=>{e.push(s)})),e}}class yr{constructor(e,t,s,r,i,a,l,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new yr(e,t,Cs.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class nv{constructor(){this.lu=void 0,this.Eu=[]}hu(){return this.Eu.some((e=>e.Tu()))}}class sv{constructor(){this.queries=Vd(),this.onlineState="Unknown",this.Pu=new Set}terminate(){(function(t,s){const r=ie(t),i=r.queries;r.queries=Vd(),i.forEach(((a,l)=>{for(const c of l.Eu)c.onError(s)}))})(this,new j(V.ABORTED,"Firestore shutting down"))}}function Vd(){return new Ws((n=>Km(n)),Lo)}async function yu(n,e){const t=ie(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.hu()&&e.Tu()&&(s=2):(i=new nv,s=e.Tu()?0:1);try{switch(s){case 0:i.lu=await t.onListen(r,!0);break;case 1:i.lu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const l=gu(a,`Initialization of query '${qe(e.query)?An(e.query):oi(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,i),i.Eu.push(e),e.Ru(t.onlineState),i.lu&&e.Iu(i.lu)&&vu(t)}async function _u(n,e){const t=ie(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.Eu.indexOf(e);a>=0&&(i.Eu.splice(a,1),i.Eu.length===0?r=e.Tu()?0:1:!i.hu()&&e.Tu()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function rv(n,e){const t=ie(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const l of a.Eu)l.Iu(r)&&(s=!0);a.lu=r}}s&&vu(t)}function iv(n,e,t){const s=ie(n),r=s.queries.get(e);if(r)for(const i of r.Eu)i.onError(t);s.queries.delete(e)}function vu(n){n.Pu.forEach((e=>{e.next()}))}var lc;(function(n){n.Default="default",n.Cache="cache"})(lc||(lc={}));class wu{constructor(e,t,s){this.query=e,this.Au=t,this.Vu=!1,this.du=null,this.onlineState="Unknown",this.options=s||{}}Iu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new yr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.fu(e)&&(this.Au.next(e),t=!0):this.mu(e,this.onlineState)&&(this.pu(e),t=!0),this.du=e,t}onError(e){this.Au.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.du&&!this.Vu&&this.mu(this.du,e)&&(this.pu(this.du),t=!0),t}mu(e,t){if(!e.fromCache||!this.Tu())return!0;const s=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}fu(e){if(e.docChanges.length>0)return!0;const t=this.du&&this.du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}pu(e){e=yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.Au.next(e)}Tu(){return this.options.source!==lc.Cache}}/**
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
 */class o2{constructor(e){this.key=e}}class l2{constructor(e){this.key=e}}class av{constructor(e,t){this.query=e,this.Ou=t,this.Mu=null,this.hasCachedResults=!1,this.current=!1,this.Nu=ce(),this.mutatedKeys=ce(),this.Lu=qe(e)?ic(e):Fc(e),this.Bu=new Cs(this.Lu)}get Uu(){return this.Ou}ku(e,t){const s=t?t.qu:new Ld,r=t?t.Bu:this.Bu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,l=!1;const[c,u]=this.$u(this.query,r);e.inorderTraversal(((p,y)=>{const b=r.get(p),R=y5(this.query,y)?y:null,L=!!b&&this.mutatedKeys.has(b.key),k=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;b&&R?b.data.isEqual(R.data)?L!==k&&(s.track({type:3,doc:R}),F=!0):this.Ku(b,R)||(s.track({type:2,doc:R}),F=!0,(c&&this.Lu(R,c)>0||u&&this.Lu(R,u)<0)&&(l=!0)):!b&&R?(s.track({type:0,doc:R}),F=!0):b&&!R&&(s.track({type:1,doc:b}),F=!0,(c||u)&&(l=!0)),F&&(R?(a=a.add(R),i=k?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}));const d=this.Wu(this.query);if(d)if(qe(this.query)){const p=[];a.forEach((R=>p.push(R)));const y=Xm(this.query,p);let b=new Cs(ic(this.query));for(const R of y)b=b.add(R);a.forEach((R=>{b.has(R.key)||(i=i.delete(R.key),s.track({type:1,doc:R}))})),a=b}else{const p=this.Qu(this.query);for(;a.size>d;){const y=p==="F"?a.last():a.first();a=a.delete(y.key),i=i.delete(y.key),s.track({type:1,doc:y})}}return{Bu:a,qu:s,Uo:l,mutatedKeys:i}}Wu(e){var t;return qe(e)?(t=Pl(e))==null?void 0:t.limit:e.limit||void 0}Qu(e){if(qe(e)){const t=Pl(e);return t&&t.limit<0?"L":"F"}return e.limitType}$u(e,t){var s;if(qe(e)){const r=(s=Pl(e))==null?void 0:s.limit;return[t.size===r?t.last():null,null]}return[e.limitType==="F"&&t.size===this.Wu(this.query)?t.last():null,e.limitType==="L"&&t.size===this.Wu(this.query)?t.first():null]}Ku(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.Bu;this.Bu=e.Bu,this.mutatedKeys=e.mutatedKeys;const a=e.qu.cu();a.sort(((d,p)=>(function(b,R){const L=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{ft:k})}};return L(b)-L(R)})(d.type,p.type)||this.Lu(d.doc,p.doc))),this.Gu(s),r=r??!1;const l=t&&!r?this.zu():[],c=this.Nu.size===0&&this.current&&!r?1:0,u=c!==this.Mu;return this.Mu=c,a.length!==0||u?{snapshot:new yr(this.query,e.Bu,i,a,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ju:l}:{ju:l}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Bu:this.Bu,qu:new Ld,mutatedKeys:this.mutatedKeys,Uo:!1},!1)):{ju:[]}}Hu(e){return!this.Ou.has(e)&&!!this.Bu.has(e)&&!this.Bu.get(e).hasLocalMutations}Gu(e){e&&(e.addedDocuments.forEach((t=>this.Ou=this.Ou.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ou=this.Ou.delete(t))),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Nu;this.Nu=ce(),this.Bu.forEach((s=>{this.Hu(s.key)&&(this.Nu=this.Nu.add(s.key))}));const t=[];return e.forEach((s=>{this.Nu.has(s)||t.push(new l2(s))})),this.Nu.forEach((s=>{e.has(s)||t.push(new o2(s))})),t}Ju(e){this.Ou=e.Jo,this.Nu=ce();const t=this.ku(e.documents);return this.applyChanges(t,!0)}Yu(){return yr.fromInitialDocuments(this.query,this.Bu,this.mutatedKeys,this.Mu===0,this.hasCachedResults)}}const Eu="SyncEngine";class ov{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class lv{constructor(e){this.key=e,this.Zu=!1}}class cv{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Xu={},this.ec=new Ws((l=>Km(l)),Lo),this.tc=new Map,this.nc=new Set,this.rc=new Te(Q.comparator),this.sc=new Map,this._c=new ou,this.oc={},this.ac=new Map,this.uc=ds.Cs(),this.onlineState="Unknown",this.cc=void 0}get isPrimaryClient(){return this.cc===!0}}async function uv(n,e,t=!0){const s=f2(n);let r;const i=s.ec.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Yu()):r=await c2(s,e,t,!0),r}async function hv(n,e){const t=f2(n);await c2(t,e,!0,!1)}async function c2(n,e,t,s){const r=await F5(n.localStore,qe(e)?e:on(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return s&&(l=await dv(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&t2(n.remoteStore,r),l}async function dv(n,e,t,s,r){n.lc=(p,y,b)=>(async function(L,k,F,$){let U=k.view.ku(F);U.Uo&&(U=await Nd(L.localStore,k.query,!1).then((({documents:S})=>k.view.ku(S,U))));const q=$&&$.targetChanges.get(k.targetId),W=$&&$.targetMismatches.get(k.targetId)!=null,Z=k.view.applyChanges(U,L.isPrimaryClient,q,W);return $d(L,k.targetId,Z.ju),Z.snapshot})(n,p,y,b);const i=await Nd(n.localStore,e,!0),a=new av(e,i.Jo),l=a.ku(i.documents),c=qi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=a.applyChanges(l,n.isPrimaryClient,c);$d(n,t,u.ju);const d=new ov(e,t,a);return n.ec.set(e,d),n.tc.has(t)?n.tc.get(t).push(e):n.tc.set(t,[e]),u.snapshot}async function pv(n,e,t){const s=ie(n),r=s.ec.get(e),i=s.tc.get(r.targetId);if(i.length>1)return s.tc.set(r.targetId,i.filter((a=>!Lo(a,e)))),void s.ec.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ac(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&hu(s.remoteStore,r.targetId),cc(s,r.targetId)})).catch(wr)):(cc(s,r.targetId),await ac(s.localStore,r.targetId,!0))}async function fv(n,e){const t=ie(n),s=t.ec.get(e),r=t.tc.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),hu(t.remoteStore,s.targetId))}async function mv(n,e,t){const s=bv(n);try{const r=await(function(a,l){const c=ie(a),u=Ee.now(),d=l.reduce(((b,R)=>b.add(R.key)),ce());let p,y;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let R=mt(),L=ce();return c.Qo.getEntries(b,d).next((k=>{R=k,R.forEach(((F,$)=>{$.isValidDocument()||(L=L.add(F))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,R))).next((k=>{p=k;const F=[];for(const $ of l){const U=E8($,p.get($.key).overlayedDocument);U!=null&&F.push(new zs($.key,U,Gf(U.value.mapValue),an.exists(!0)))}return c.mutationQueue.addMutationBatch(b,u,F,l)})).next((k=>{y=k;const F=k.applyToLocalDocumentSet(p,L);return c.documentOverlayCache.saveOverlays(b,k.batchId,F)}))})).then((()=>({batchId:y.batchId,changes:hm(p)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,l,c){let u=a.oc[a.currentUser.toKey()];u||(u=new Te(he)),u=u.insert(l,c),a.oc[a.currentUser.toKey()]=u})(s,r.batchId,t),await Gi(s,r.changes),await $o(s.remoteStore)}catch(r){const i=gu(r,"Failed to persist write");t.reject(i)}}async function u2(n,e){const t=ie(n);try{const s=await M5(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.sc.get(i);a&&(K(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Zu=!0:r.modifiedDocuments.size>0?K(a.Zu,14607):r.removedDocuments.size>0&&(K(a.Zu,42227),a.Zu=!1))})),await Gi(t,s,e)}catch(s){await wr(s)}}function Md(n,e,t){const s=ie(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.ec.forEach(((i,a)=>{const l=a.view.Ru(e);l.snapshot&&r.push(l.snapshot)})),(function(a,l){const c=ie(a);c.onlineState=l;let u=!1;c.queries.forEach(((d,p)=>{for(const y of p.Eu)y.Ru(l)&&(u=!0)})),u&&vu(c)})(s.eventManager,e),r.length&&s.Xu.zn(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function gv(n,e,t){const s=ie(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.sc.get(e),i=r&&r.key;if(i){let a=new Te(Q.comparator);a=a.insert(i,et.newNoDocument(i,re.min()));const l=ce().add(i),c=new Bi(re.min(),new Map,new Te(he),a,mt(),l);await u2(s,c),s.rc=s.rc.remove(i),s.sc.delete(e),bu(s)}else await ac(s.localStore,e,!1).then((()=>cc(s,e,t))).catch(wr)}async function yv(n,e){const t=ie(n),s=e.batch.batchId;try{const r=await V5(t.localStore,e);d2(t,s,null),h2(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Gi(t,r)}catch(r){await wr(r)}}async function _v(n,e,t){const s=ie(n);try{const r=await(function(a,l){const c=ie(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next((p=>(K(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>c.localDocuments.getDocuments(u,d)))}))})(s.localStore,e);d2(s,e,t),h2(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Gi(s,r)}catch(r){await wr(r)}}function h2(n,e){(n.ac.get(e)||[]).forEach((t=>{t.resolve()})),n.ac.delete(e)}function d2(n,e,t){const s=ie(n);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function cc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.tc.get(e))n.ec.delete(s),t&&n.Xu.Ec(s,t);n.tc.delete(e),n.isPrimaryClient&&n._c.s_(e).forEach((s=>{n._c.containsKey(s)||p2(n,s)}))}function p2(n,e){n.nc.delete(e.path.canonicalString());const t=n.rc.get(e);t!==null&&(hu(n.remoteStore,t),n.rc=n.rc.remove(e),n.sc.delete(t),bu(n))}function $d(n,e,t){for(const s of t)s instanceof o2?(n._c.addReference(s.key,e),vv(n,s)):s instanceof l2?(G(Eu,"Document no longer in limbo: "+s.key),n._c.removeReference(s.key,e),n._c.containsKey(s.key)||p2(n,s.key)):J(19791,{hc:s})}function vv(n,e){const t=e.key,s=t.path.canonicalString();n.rc.get(t)||n.nc.has(s)||(G(Eu,"New document in limbo: "+t),n.nc.add(s),bu(n))}function bu(n){for(;n.nc.size>0&&n.rc.size<n.maxConcurrentLimboResolutions;){const e=n.nc.values().next().value;n.nc.delete(e);const t=new Q(ye.fromString(e)),s=n.uc.next();n.sc.set(s,new lv(t)),n.rc=n.rc.insert(t,s),t2(n.remoteStore,new _n(on(So(t.path)),s,"TargetPurposeLimboResolution",wo.ce))}}async function Gi(n,e,t){const s=ie(n),r=[],i=[],a=[];s.ec.isEmpty()||(s.ec.forEach(((l,c)=>{a.push(s.lc(c,e,t).then((u=>{var d;if((u||t)&&s.isPrimaryClient){const p=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){r.push(u);const p=cu.vo(c.targetId,u);i.push(p)}})))})),await Promise.all(a),s.Xu.zn(r),await(async function(c,u){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(u,(y=>M.forEach(y.wo,(b=>d.persistence.referenceDelegate.addReference(p,y.targetId,b))).next((()=>M.forEach(y.bo,(b=>d.persistence.referenceDelegate.removeReference(p,y.targetId,b)))))))))}catch(p){if(!Er(p))throw p;G(uu,"Failed to update sequence numbers: "+p)}for(const p of u){const y=p.targetId;if(!p.fromCache){const b=d.$o.get(y),R=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(R);d.$o=d.$o.insert(y,L)}}})(s.localStore,i))}async function wv(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){G(Eu,"User change. New user:",e.toKey());const s=await Zm(t.localStore,e);t.currentUser=e,(function(i,a){i.ac.forEach((l=>{l.forEach((c=>{c.reject(new j(V.CANCELLED,a))}))})),i.ac.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Gi(t,s.zo)}}function Ev(n,e){const t=ie(n),s=t.sc.get(e);if(s&&s.Zu)return ce().add(s.key);{let r=ce();const i=t.tc.get(e);if(!i)return r;for(const a of i??[]){const l=t.ec.get(a);r=r.unionWith(l.view.Uu)}return r}}function f2(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=u2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ev.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gv.bind(null,e),e.Xu.zn=rv.bind(null,e.eventManager),e.Xu.Ec=iv.bind(null,e.eventManager),e}function bv(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_v.bind(null,e),e}class ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Co(e.databaseInfo.databaseId),this.sharedClientState=this.Rc(e),this.persistence=this.Ic(e),await this.persistence.start(),this.localStore=this.Ac(e),this.gcScheduler=this.Vc(e,this.localStore),this.indexBackfillerScheduler=this.dc(e,this.localStore)}Vc(e,t){return null}dc(e,t){return null}Ac(e){return L5(this.persistence,new N5,e.initialUser,this.serializer)}Ic(e){return new Jm(lu.C_,this.serializer)}Rc(e){return new q5}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ao.provider={build:()=>new ao};class Av extends ao{constructor(e){super(),this.cacheSizeBytes=e}Vc(e,t){K(this.persistence.referenceDelegate instanceof ro,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Ry(s,e.asyncQueue,t)}Ic(e){const t=this.cacheSizeBytes!==void 0?ft.withCacheSize(this.cacheSizeBytes):ft.DEFAULT;return new Jm((s=>ro.C_(s,t)),this.serializer)}}class uc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Md(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=wv.bind(null,this.syncEngine),await tv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new sv})()}createDatastore(e){const t=Co(e.databaseInfo.databaseId),s=yy(e.databaseInfo);return by(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,l){return new j5(s,r,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Md(this.syncEngine,t,0)),(function(){return bd.C()?new bd:new py})())}createSyncEngine(e,t){return(function(r,i,a,l,c,u,d){const p=new cv(r,i,a,l,c,u);return d&&(p.cc=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=ie(r);G(hn,"RemoteStore shutting down."),i.tu.add(5),await ji(i),i.ru.shutdown(),i.iu.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uc.provider={build:()=>new uc};/**
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
 */class Au{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.mc(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.mc(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}gc(){this.muted=!0}mc(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const fs="FirestoreClient";class Tv{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ze.UNAUTHENTICATED,this.clientId=Lc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{G(fs,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(G(fs,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=gu(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function kl(n,e){n.asyncQueue.verifyOperationInProgress(),G(fs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Zm(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ud(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Iv(n);G(fs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Dd(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>Dd(e.remoteStore,r))),n._onlineComponents=e}async function Iv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(fs,"Using user provided OfflineComponentProvider");try{await kl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Kt("Error using user provided cache. Falling back to memory cache: "+t),await kl(n,new ao)}}else G(fs,"Using default OfflineComponentProvider"),await kl(n,new Av(void 0));return n._offlineComponents}async function m2(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(fs,"Using user provided OnlineComponentProvider"),await Ud(n,n._uninitializedComponentsProvider._online)):(G(fs,"Using default OnlineComponentProvider"),await Ud(n,new uc))),n._onlineComponents}function Sv(n){return m2(n).then((e=>e.syncEngine))}async function oo(n){const e=await m2(n),t=e.eventManager;return t.onListen=uv.bind(null,e.syncEngine),t.onUnlisten=pv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fv.bind(null,e.syncEngine),t}function Rv(n,e,t,s){const r=new Au(s),i=new wu(e,r,t);return n.asyncQueue.enqueueAndForget((async()=>yu(await oo(n),i))),()=>{r.gc(),n.asyncQueue.enqueueAndForget((async()=>_u(await oo(n),i)))}}function Cv(n,e,t={}){const s=new En;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,u){const d=new Au({next:y=>{d.gc(),a.enqueueAndForget((()=>_u(i,p)));const b=y.docs.has(l);!b&&y.fromCache?u.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&y.fromCache&&c&&c.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new wu(So(l.path),d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return yu(i,p)})(await oo(n),n.asyncQueue,e,t,s))),s.promise}function Pv(n,e,t={}){const s=new En;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,l,c,u){const d=new Au({next:y=>{d.gc(),a.enqueueAndForget((()=>_u(i,p))),y.fromCache&&c.source==="server"?u.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(y)},error:y=>u.reject(y)}),p=new wu(l instanceof ci?u5(l):l,d,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return yu(i,p)})(await oo(n),n.asyncQueue,e,t,s))),s.promise}function xv(n,e){const t=new En;return n.asyncQueue.enqueueAndForget((async()=>mv(await Sv(n),e,t))),t.promise}/**
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
 */const Fd="AsyncQueue";class Bd{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Wc=null,this.Qc=!1,this.Gc=!1,this.zc=[],this.xn=new Im(this,"async_queue_retry"),this.jc=()=>{const s=xl();s&&G(Fd,"Visibility state changed to "+s.visibilityState),this.xn.gn()},this.Hc=e;const t=xl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=xl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new En;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.xn.reset()}catch(e){if(!Er(e))throw e;G(Fd,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.xn.mn((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Qc=!0,e().catch((s=>{throw this.Wc=s,this.Qc=!1,Sn("INTERNAL UNHANDLED ERROR: ",qd(s)),s})).then((s=>(this.Qc=!1,s))))));return this.Hc=t,t}enqueueAfterDelay(e,t,s){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const r=mu.createAndSchedule(this,e,t,s,(i=>this.Xc(i)));return this.Kc.push(r),r}Jc(){this.Wc&&J(47125,{el:qd(this.Wc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function qd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Us extends Po{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Bd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bd(e),this._firestoreClient=void 0,await e}}}function kv(n,e){const t=typeof n=="object"?n:ho(),s=typeof n=="string"?n:Wa,r=ms(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=hp("firestore");i&&xy(r,...i)}return r}function Uo(n){if(n._terminated)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Nv(n),n._firestoreClient}function Nv(n){var s,r,i,a;const e=n._freezeSettings(),t=Ty(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Tv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Ov{convertValue(e,t="none"){switch(Ue(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Gs(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[vi].arrayValue)==null?void 0:r.values)==null?void 0:i.map((a=>Se(a.doubleValue)));return new yt(t)}convertGeoPoint(e){return new cn(Se(e.latitude),Se(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ui(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(dr(e));default:return null}}convertTimestamp(e){const t=os(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ye.fromString(e);K(Em(s),9688,{name:e});const r=new _i(s.get(1),s.get(3)),i=new Q(s.popFirst(5));return r.isEqual(t)||Sn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Tu extends Ov{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}const Hd="@firebase/firestore",jd="4.16.0";/**
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
 */function Gd(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1})(n,["next","error","complete"])}/**
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
 */class g2{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Ar("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dv extends g2{data(){return super.data()}}/**
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
 */function y2(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iu{}class Su extends Iu{}function Pa(n,e,...t){let s=[];e instanceof Iu&&s.push(e),s=s.concat(t),(function(i){const a=i.filter((c=>c instanceof Ru)).length,l=i.filter((c=>c instanceof Fo)).length;if(a>1||a>0&&l>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const r of s)n=r._apply(n);return n}class Fo extends Su{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Fo(e,t,s)}_apply(e){const t=this._parse(e);return _2(e._query,t),new Pn(e.firestore,e.converter,Zl(e._query,t))}_parse(e){const t=Wc(e.firestore);return(function(i,a,l,c,u,d,p){let y;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Yd(p,d);const R=[];for(const L of p)R.push(Kd(c,i,L));y={arrayValue:{values:R}}}else y=Kd(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Yd(p,d),y=Dy(l,a,p,d==="in"||d==="not-in");return Le.create(u,d,y)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function zd(n,e,t){const s=e,r=Ar("where",n);return Fo._create(r,s,t)}class Ru extends Iu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ru(e,t)}_parse(e){const t=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return t.length===1?t[0]:Yt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,i){let a=r;const l=i.getFlattenedFilters();for(const c of l)_2(a,c),a=Zl(a,c)})(e._query,t),new Pn(e.firestore,e.converter,Zl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cu extends Su{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Cu(e,t)}_apply(e){const t=(function(r,i,a){if(r.startAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ii(i,a)})(e._query,this._field,this._direction);return new Pn(e.firestore,e.converter,V8(e._query,t))}}function xa(n,e="asc"){const t=e,s=Ar("orderBy",n);return Cu._create(s,t)}class Pu extends Su{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Pu(e,t,s)}_apply(e){return new Pn(e.firestore,e.converter,Za(e._query,this._limit,this._limitType))}}function Wd(n){return Pu._create("limit",n,"F")}function Kd(n,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lm(e)&&t.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ye.fromString(t));if(!Q.isDocumentKey(s))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return od(n,new Q(s))}if(t instanceof Ce)return od(n,t._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vo(t)}.`)}function Yd(n,e){if(!Array.isArray(n)||n.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _2(n,e){const t=(function(r,i){for(const a of r)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function v2(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class ei{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ps extends g2{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ar("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ps._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ps._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ps._jsonSchema={type:Ve("string",Ps._jsonSchemaVersion),bundleSource:Ve("string","DocumentSnapshot"),bundleName:Ve("string"),bundle:Ve("string")};class ka extends Ps{data(e={}){return super.data(e)}}class xs{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ei(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new ka(this._firestore,this._userDataWriter,s.key,s,new ei(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((l=>{qe(r._snapshot.query)?ic(r._snapshot.query):Fc(r.query._query);const c=new ka(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ei(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new ka(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ei(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Lv(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Lc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */xs._jsonSchemaVersion="firestore/querySnapshot/1.0",xs._jsonSchema={type:Ve("string",xs._jsonSchemaVersion),bundleSource:Ve("string","QuerySnapshot"),bundleName:Ve("string"),bundle:Ve("string")};/**
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
 */function ks(n){n=jt(n,Ce);const e=jt(n.firestore,Us),t=Uo(e);return Cv(t,n._key).then((s=>E2(e,n,s)))}function Nl(n){n=jt(n,Pn);const e=jt(n.firestore,Us),t=Uo(e),s=new Tu(e);return y2(n._query),Pv(t,n._query).then((r=>new xs(e,s,n,r)))}function Vv(n,e,t){n=jt(n,Ce);const s=jt(n.firestore,Us),r=v2(n.converter,e,t),i=Wc(s);return w2(s,[xm(i,"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,an.none())])}function Na(n,e){const t=jt(n.firestore,Us),s=bn(n),r=v2(n.converter,e),i=Wc(n.firestore);return w2(t,[xm(i,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,an.exists(!1))]).then((()=>s))}function Mv(n,...e){var u,d,p;n=Ae(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Gd(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Gd(e[s])){const y=e[s];e[s]=(u=y.next)==null?void 0:u.bind(y),e[s+1]=(d=y.error)==null?void 0:d.bind(y),e[s+2]=(p=y.complete)==null?void 0:p.bind(y)}let i,a,l;if(n instanceof Ce)a=jt(n.firestore,Us),l=So(n._key.path),i={next:y=>{e[s]&&e[s](E2(a,n,y))},error:e[s+1],complete:e[s+2]};else{const y=jt(n,Pn);a=jt(y.firestore,Us),l=y._query;const b=new Tu(a);i={next:R=>{e[s]&&e[s](new xs(a,b,y,R))},error:e[s+1],complete:e[s+2]},y2(n._query)}const c=Uo(a);return Rv(c,l,r,i)}function w2(n,e){const t=Uo(n);return xv(t,e)}function E2(n,e,t){const s=t.docs.get(e._key),r=new Tu(n);return new Ps(n,r,e._key,s,new ei(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){B9(js),zt(new Mt("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),l=new Us(new j9(s.getProvider("auth-internal")),new W9(a,s.getProvider("app-check-internal")),d8(a,r),a);return i={useFetchStreams:t,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),gt(Hd,jd,e),gt(Hd,jd,"esm2020")})();/**
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
 */const b2="firebasestorage.googleapis.com",A2="storageBucket",$v=120*1e3,Uv=600*1e3;/**
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
 */class xe extends Ut{constructor(e,t,s=0){super(Ol(e),`Firebase Storage: ${t} (${Ol(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ol(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pe||(Pe={}));function Ol(n){return"storage/"+n}function xu(){const n="An unknown error occurred, please check the error payload for server response.";return new xe(Pe.UNKNOWN,n)}function Fv(n){return new xe(Pe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Bv(n){return new xe(Pe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function qv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new xe(Pe.UNAUTHENTICATED,n)}function Hv(){return new xe(Pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jv(n){return new xe(Pe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Gv(){return new xe(Pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zv(){return new xe(Pe.CANCELED,"User canceled the upload/download.")}function Wv(n){return new xe(Pe.INVALID_URL,"Invalid URL '"+n+"'.")}function Kv(n){return new xe(Pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Yv(){return new xe(Pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+A2+"' property when initializing the app?")}function Qv(){return new xe(Pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Xv(){return new xe(Pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Jv(n){return new xe(Pe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function hc(n){return new xe(Pe.INVALID_ARGUMENT,n)}function T2(){return new xe(Pe.APP_DELETED,"The Firebase app was deleted.")}function Zv(n){return new xe(Pe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function hi(n,e){return new xe(Pe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Wr(n){throw new xe(Pe.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Pt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Pt.makeFromUrl(e,t)}catch{return new Pt(e,"")}if(s.path==="")return s;throw Kv(e)}static makeFromUrl(e,t){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(q){q.path.charAt(q.path.length-1)==="/"&&(q.path_=q.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),c={bucket:1,path:3};function u(q){q.path_=decodeURIComponent(q.path)}const d="v[A-Za-z0-9_]+",p=t.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${d}/b/${r}/o${y}`,"i"),R={bucket:1,path:3},L=t===b2?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",F=new RegExp(`^https?://${L}/${r}/${k}`,"i"),U=[{regex:l,indices:c,postModify:i},{regex:b,indices:R,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let q=0;q<U.length;q++){const W=U[q],Z=W.regex.exec(e);if(Z){const S=Z[W.indices.bucket];let w=Z[W.indices.path];w||(w=""),s=new Pt(S,w),W.postModify(s);break}}if(s==null)throw Wv(e);return s}}class ew{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tw(n,e,t){let s=1,r=null,i=null,a=!1,l=0;function c(){return l===2}let u=!1;function d(...k){u||(u=!0,e.apply(null,k))}function p(k){r=setTimeout(()=>{r=null,n(b,c())},k)}function y(){i&&clearTimeout(i)}function b(k,...F){if(u){y();return}if(k){y(),d.call(null,k,...F);return}if(c()||a){y(),d.call(null,k,...F);return}s<64&&(s*=2);let U;l===1?(l=2,U=0):U=(s+Math.random())*1e3,p(U)}let R=!1;function L(k){R||(R=!0,y(),!u&&(r!==null?(k||(l=2),clearTimeout(r),p(0)):k||(l=1)))}return p(0),i=setTimeout(()=>{a=!0,L(!0)},t),L}function nw(n){n(!1)}/**
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
 */function sw(n){return n!==void 0}function rw(n){return typeof n=="object"&&!Array.isArray(n)}function ku(n){return typeof n=="string"||n instanceof String}function Qd(n){return Nu()&&n instanceof Blob}function Nu(){return typeof Blob<"u"}function Xd(n,e,t,s){if(s<e)throw hc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw hc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ou(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function I2(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const r=e(s)+"="+e(n[s]);t=t+r+"&"}return t=t.slice(0,-1),t}var Ns;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ns||(Ns={}));/**
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
 */function iw(n,e){const t=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||r||i}/**
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
 */class aw{constructor(e,t,s,r,i,a,l,c,u,d,p,y=!0,b=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=y,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,L)=>{this.resolve_=R,this.reject_=L,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ma(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Ns.NO_ERROR,c=i.getStatus();if(!l||iw(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Ns.ABORT;s(!1,new ma(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ma(u,i))})},t=(s,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());sw(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=xu();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(r.canceled){const c=this.appDelete_?T2():zv();a(c)}else{const c=Gv();a(c)}};this.canceled_?t(!1,new ma(!1,null,!0)):this.backoffId_=tw(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nw(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ma{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function ow(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function lw(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function cw(n,e){e&&(n["X-Firebase-GMPID"]=e)}function uw(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function hw(n,e,t,s,r,i,a=!0,l=!1){const c=I2(n.urlParams),u=n.url+c,d=Object.assign({},n.headers);return cw(d,e),ow(d,t),lw(d,i),uw(d,s),new aw(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,a,l)}/**
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
 */function dw(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pw(...n){const e=dw();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Nu())return new Blob(n);throw new xe(Pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function fw(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function mw(n){if(typeof atob>"u")throw Jv("base-64");return atob(n)}/**
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
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dl{constructor(e,t){this.data=e,this.contentType=t||null}}function gw(n,e){switch(n){case tn.RAW:return new Dl(S2(e));case tn.BASE64:case tn.BASE64URL:return new Dl(R2(n,e));case tn.DATA_URL:return new Dl(_w(e),vw(e))}throw xu()}function S2(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=s,a=n.charCodeAt(++t);s=65536|(i&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function yw(n){let e;try{e=decodeURIComponent(n)}catch{throw hi(tn.DATA_URL,"Malformed data URL.")}return S2(e)}function R2(n,e){switch(n){case tn.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw hi(n,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw hi(n,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=mw(e)}catch(r){throw r.message.includes("polyfill")?r:hi(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}class C2{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw hi(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=ww(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function _w(n){const e=new C2(n);return e.base64?R2(tn.BASE64,e.rest):yw(e.rest)}function vw(n){return new C2(n).contentType}function ww(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Kn{constructor(e,t){let s=0,r="";Qd(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(Qd(this.data_)){const s=this.data_,r=fw(s,e,t);return r===null?null:new Kn(r)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Kn(s,!0)}}static getBlob(...e){if(Nu()){const t=e.map(s=>s instanceof Kn?s.data_:s);return new Kn(pw.apply(null,t))}else{const t=e.map(a=>ku(a)?gw(tn.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)r[i++]=a[l]}),new Kn(r,!0)}}uploadData(){return this.data_}}/**
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
 */function P2(n){let e;try{e=JSON.parse(n)}catch{return null}return rw(e)?e:null}/**
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
 */function Ew(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bw(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function x2(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function Aw(n,e){return e}class ot{constructor(e,t,s,r){this.server=e,this.local=t||e,this.writable=!!s,this.xform=r||Aw}}let ga=null;function Tw(n){return!ku(n)||n.length<2?n:x2(n)}function k2(){if(ga)return ga;const n=[];n.push(new ot("bucket")),n.push(new ot("generation")),n.push(new ot("metageneration")),n.push(new ot("name","fullPath",!0));function e(i,a){return Tw(a)}const t=new ot("name");t.xform=e,n.push(t);function s(i,a){return a!==void 0?Number(a):a}const r=new ot("size");return r.xform=s,n.push(r),n.push(new ot("timeCreated")),n.push(new ot("updated")),n.push(new ot("md5Hash",null,!0)),n.push(new ot("cacheControl",null,!0)),n.push(new ot("contentDisposition",null,!0)),n.push(new ot("contentEncoding",null,!0)),n.push(new ot("contentLanguage",null,!0)),n.push(new ot("contentType",null,!0)),n.push(new ot("metadata","customMetadata",!0)),ga=n,ga}function Iw(n,e){function t(){const s=n.bucket,r=n.fullPath,i=new Pt(s,r);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function Sw(n,e,t){const s={};s.type="file";const r=t.length;for(let i=0;i<r;i++){const a=t[i];s[a.local]=a.xform(s,e[a.server])}return Iw(s,n),s}function N2(n,e,t){const s=P2(e);return s===null?null:Sw(n,s,t)}function Rw(n,e,t,s){const r=P2(e);if(r===null||!ku(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const d=n.bucket,p=n.fullPath,y="/b/"+a(d)+"/o/"+a(p),b=Ou(y,t,s),R=I2({alt:"media",token:u});return b+R})[0]}function Cw(n,e){const t={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class O2{constructor(e,t,s,r){this.url=e,this.method=t,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function D2(n){if(!n)throw xu()}function Pw(n,e){function t(s,r){const i=N2(n,r,e);return D2(i!==null),i}return t}function xw(n,e){function t(s,r){const i=N2(n,r,e);return D2(i!==null),Rw(i,r,n.host,n._protocol)}return t}function L2(n){function e(t,s){let r;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?r=Hv():r=qv():t.getStatus()===402?r=Bv(n.bucket):t.getStatus()===403?r=jv(n.path):r=s,r.status=t.getStatus(),r.serverResponse=s.serverResponse,r}return e}function kw(n){const e=L2(n);function t(s,r){let i=e(s,r);return s.getStatus()===404&&(i=Fv(n.path)),i.serverResponse=r.serverResponse,i}return t}function Nw(n,e,t){const s=e.fullServerUrl(),r=Ou(s,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new O2(r,i,xw(n,t),a);return l.errorHandler=kw(e),l}function Ow(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Dw(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=Ow(null,e)),s}function Lw(n,e,t,s,r){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let U="";for(let q=0;q<2;q++)U=U+Math.random().toString().slice(2);return U}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const u=Dw(e,s,r),d=Cw(u,t),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,y=`\r
--`+c+"--",b=Kn.getBlob(p,s,y);if(b===null)throw Qv();const R={name:u.fullPath},L=Ou(i,n.host,n._protocol),k="POST",F=n.maxUploadRetryTime,$=new O2(L,k,Pw(n,t),F);return $.urlParams=R,$.headers=a,$.body=b.uploadData(),$.errorHandler=L2(e),$}class Vw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,r,i){if(this.sent_)throw Wr("cannot .send() more than once");if(Hs(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Mw extends Vw{initXhr(){this.xhr_.responseType="text"}}function V2(){return new Mw}/**
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
 */class Fs{constructor(e,t){this._service=e,t instanceof Pt?this._location=t:this._location=Pt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Fs(e,t)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x2(this._location.path)}get storage(){return this._service}get parent(){const e=Ew(this._location.path);if(e===null)return null;const t=new Pt(this._location.bucket,e);return new Fs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Zv(e)}}function $w(n,e,t){n._throwIfRoot("uploadBytes");const s=Lw(n.storage,n._location,k2(),new Kn(e,!0),t);return n.storage.makeRequestWithTokens(s,V2).then(r=>({metadata:r,ref:n}))}function Uw(n){n._throwIfRoot("getDownloadURL");const e=Nw(n.storage,n._location,k2());return n.storage.makeRequestWithTokens(e,V2).then(t=>{if(t===null)throw Xv();return t})}function Fw(n,e){const t=bw(n._location.path,e),s=new Pt(n._location.bucket,t);return new Fs(n.storage,s)}/**
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
 */function Bw(n){return/^[A-Za-z]+:\/\//.test(n)}function qw(n,e){return new Fs(n,e)}function M2(n,e){if(n instanceof Du){const t=n;if(t._bucket==null)throw Yv();const s=new Fs(t,t._bucket);return e!=null?M2(s,e):s}else return e!==void 0?Fw(n,e):n}function Hw(n,e){if(e&&Bw(e)){if(n instanceof Du)return qw(n,e);throw hc("To use ref(service, url), the first argument must be a Storage instance.")}else return M2(n,e)}function Jd(n,e){const t=e==null?void 0:e[A2];return t==null?null:Pt.makeFromBucketSpec(t,n)}function jw(n,e,t,s={}){n.host=`${e}:${t}`;const r=Hs(e);r&&_c(`https://${n.host}/b`),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:mp(i,n.app.options.projectId))}class Du{constructor(e,t,s,r,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=b2,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$v,this._maxUploadRetryTime=Uv,this._requests=new Set,r!=null?this._bucket=Pt.makeFromBucketSpec(r,this._host):this._bucket=Jd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=Jd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(St(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fs(this,e)}_makeRequest(e,t,s,r,i=!0){if(this._deleted)return new ew(T2());{const a=hw(e,this._appId,s,r,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,r).getPromise()}}const Zd="@firebase/storage",ep="0.14.3";/**
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
 */const $2="storage";function Gw(n,e,t){return n=Ae(n),$w(n,e,t)}function zw(n){return n=Ae(n),Uw(n)}function Ww(n,e){return n=Ae(n),Hw(n,e)}function Kw(n=ho(),e){n=Ae(n);const s=ms(n,$2).getImmediate({identifier:e}),r=hp("storage");return r&&Yw(s,...r),s}function Yw(n,e,t,s={}){jw(n,e,t,s)}function Qw(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Du(t,s,r,e,js)}function Xw(){zt(new Mt($2,Qw,"PUBLIC").setMultipleInstances(!0)),gt(Zd,ep,""),gt(Zd,ep,"esm2020")}Xw();const Jw={apiKey:"AIzaSyBF4P62ICvi8NcXTV1hqYr6ktrzr_Pwg4g",authDomain:"heritagevault-12a72.firebaseapp.com",projectId:"heritagevault-12a72",storageBucket:"heritagevault-12a72.firebasestorage.app",messagingSenderId:"357035240092",appId:"1:357035240092:web:ab95eef42e90105ba15b59",measurementId:"G-RVDX527SFW"},Bo=wp(Jw),ct=R9(Bo),tt=kv(Bo),Zw=Kw(Bo);a4().then(n=>(n&&r4(Bo),n));const Ll=n=>({id:n.id,...n.data()});async function eE(n){if(!n.defaultVaultId)return null;const e=n.defaultVaultId,[t,s,r,i]=await Promise.all([ks(bn(tt,`vaults/${e}`)),Nl(Pa(es(tt,`vaults/${e}/memories`),zd("archived","==",!1),xa("createdAt","desc"),Wd(12))),Nl(Pa(es(tt,`vaults/${e}/familyMembers`),xa("fullName","asc"))),Nl(Pa(es(tt,`vaults/${e}/stories`),zd("status","==","published"),xa("updatedAt","desc"),Wd(12)))]);return t.exists()?{vaultId:e,vault:t.data(),memories:s.docs.map(a=>Ll(a)),familyMembers:r.docs.map(a=>Ll(a)),stories:i.docs.map(a=>Ll(a))}:null}const U2=n=>n.toLocaleLowerCase();function tE(n,e){if(!e.length)return!0;const t=U2([n.title,n.description,n.location??"",...n.tags??[]].join(" "));return e.some(s=>t.includes(s))}function nE(n,e){var d;const t=((d=U2(e).match(/[a-z]{3,}/g))==null?void 0:d.filter(p=>!["about","family","their","show","tell","with","from","that","this","what","where","when"].includes(p)))??[],s=n.memories.filter(p=>tE(p,t)),r=s.length?s:n.memories,i=[...new Set(r.map(p=>p.year).filter(p=>p!==null))].sort((p,y)=>p-y),a=new Map;r.forEach(p=>{var y;(y=p.location)!=null&&y.trim()&&a.set(p.location,(a.get(p.location)??0)+1)});const l=[...a.entries()].map(([p,y])=>({name:p,count:y})).sort((p,y)=>y.count-p.count),c=t.length?`matching “${t.join(" ")}”`:"across your archive",u=r.length?`${r.length} ${r.length===1?"memory":"memories"} ${c}, connected to ${n.members.length} family member${n.members.length===1?"":"s"}.`:"Your visual answer will appear here as soon as your vault contains memories or family members.";return{prompt:e,verdict:u,memories:r,members:n.members,years:i,locations:l,evidence:r.slice(0,6).map(p=>({title:p.title,detail:p.description||"A preserved family memory.",kind:p.type,year:p.year}))}}const be=n=>{const e=document.createElement("span");return e.textContent=n,e.innerHTML},tp=n=>n?String(n):"Undated";function Lu(n){const e=new Map;return n.members.forEach(t=>{const s=t.fullName.trim().toLocaleLowerCase();if(!s)return;const r=e.get(s);if(r){r.records+=1,!r.relationship&&t.relationship&&(r.relationship=t.relationship);return}e.set(s,{id:t.id,fullName:t.fullName,relationship:t.relationship||"Family member",records:1})}),[...e.values()].slice(0,8)}function sE(n){const e=Lu(n);if(!e.length)return'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">account_tree</span><p>Add a relative to begin your living constellation.</p><small>Each new connection becomes explorable here.</small></div>';const t=e.map((r,i)=>({x:15+i*31%72,y:i%2?66:28}));return`<div class="atlas-network atlas-network--constellation"><svg class="atlas-network__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${t.slice(1).map(r=>`<line x1="${t[0].x}" y1="${t[0].y}" x2="${r.x}" y2="${r.y}" />`).join("")}</svg>${e.map((r,i)=>{const a=t[i],l=r.records>1?` · ${r.records} linked records`:"";return`<button class="atlas-person" data-atlas-person="${be(r.id)}" data-atlas-label="${be(r.fullName)}" style="--x:${a.x}%;--y:${a.y}%;--atlas-delay:${i*70}ms"><span class="atlas-person__dot"></span><strong>${be(r.fullName)}</strong><small>${be(r.relationship)}${l}</small></button>`}).join("")}</div>`}function rE(n){if(!n.years.length)return'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">calendar_month</span><p>Add a year to a memory to unlock the living timeline.</p><small>Chronology turns your archive into a story.</small></div>';const e=new Map;n.memories.forEach(i=>{i.year&&e.set(i.year,(e.get(i.year)??0)+1)});const t=n.years[0],s=n.years.at(-1)??t,r=Math.max(1,s-t);return`<div class="atlas-timeline"><div class="atlas-timeline__range"><span>${t}</span><strong>${s===t?"A defining year":`${s-t} years of family history`}</strong><span>${s}</span></div><div class="atlas-timeline__rail"></div>${n.years.map(i=>`<button class="atlas-timeline__point" data-atlas-year="${i}" data-atlas-label="${i} · ${e.get(i)??0} memor${e.get(i)===1?"y":"ies"}" style="left:${(i-t)/r*90+5}%"><span style="--point-size:${22+Math.min(12,(e.get(i)??1)*4)}px"></span><b>${i}</b><small>${e.get(i)??0}</small></button>`).join("")}</div>`}function iE(n){return n.locations.length?`<div class="atlas-map" aria-label="Memory geography"><div class="atlas-map__legend"><span>Memory density</span><i></i><i></i><i></i></div>${n.locations.slice(0,7).map((e,t)=>{const s=15+t*29%68,r=18+t*37%56;return`<button class="atlas-map__place" data-atlas-location="${be(e.name)}" data-atlas-label="${be(e.name)} · ${e.count} memor${e.count===1?"y":"ies"}" style="left:${s}%;top:${r}%"><i style="--size:${24+Math.min(22,e.count*8)}px"></i><span>${be(e.name)} <b>${e.count}</b></span></button>`}).join("")}</div>`:'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">location_on</span><p>Places appear when memories include a location.</p><small>Add a city, home, or landmark to bring your map to life.</small></div>'}function aE(n){return n.evidence.length?`<div class="atlas-evidence">${n.evidence.map((e,t)=>`<button class="atlas-evidence__card" data-atlas-evidence="${t}" data-atlas-label="${be(e.title)} · ${tp(e.year)}"><span class="material-symbols-outlined">${e.kind==="photo"?"photo":e.kind==="audio"?"graphic_eq":"description"}</span><div><p>${be(e.title)}</p><small>${be(e.detail)}</small></div><b>${tp(e.year)}</b></button>`).join("")}</div>`:'<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">verified</span><p>Evidence cards appear as memories are added.</p><small>Every visual answer stays traceable to its source.</small></div>'}function Vl(n,e){return e==="relationships"?`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Connected people</p><div class="atlas-expand-detail__grid">${Lu(n).map(s=>`<button type="button" data-atlas-person="${be(s.id)}" data-atlas-label="${be(s.fullName)} · ${be(s.relationship)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">person</span><span><b>${be(s.fullName)}</b><small>${be(s.relationship)}${s.records>1?` · ${s.records} records`:""}</small></span></button>`).join("")}</div></div>`:e==="places"?`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Places in this answer</p><div class="atlas-expand-detail__grid">${n.locations.map(t=>`<button type="button" data-atlas-location="${be(t.name)}" data-atlas-label="${be(t.name)} · ${t.count} memor${t.count===1?"y":"ies"}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">location_on</span><span><b>${be(t.name)}</b><small>${t.count} preserved memor${t.count===1?"y":"ies"}</small></span></button>`).join("")||'<p class="atlas-expand-detail__empty">Add locations to memories to build your family geography.</p>'}</div></div>`:`<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Moments on the timeline</p><div class="atlas-expand-detail__grid">${n.memories.filter(t=>t.year).sort((t,s)=>(t.year??0)-(s.year??0)).map(t=>`<button type="button" data-atlas-year="${t.year}" data-atlas-label="${t.year} · ${be(t.title)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">event</span><span><b>${t.year} · ${be(t.title)}</b><small>${be(t.dateLabel||t.location||"Preserved family memory")}</small></span></button>`).join("")||'<p class="atlas-expand-detail__empty">Add years to memories to build a family timeline.</p>'}</div></div>`}function oE(n,e,t){const s=nE(e,t),r=s.years.length?`${s.years[0]}–${s.years.at(-1)}`:"Undated archive";n.innerHTML=`<section class="atlas-hero"><div><p class="atlas-eyebrow">HeritageAtlas · visual answer</p><h1>${be(t)}</h1><p>${be(s.verdict)}</p></div><div class="atlas-answer-mark"><span class="material-symbols-outlined">auto_awesome</span><small>Evidence-led</small></div></section><section class="atlas-insights" aria-label="Archive summary"><div><b>${s.memories.length}</b><span>memories in view</span></div><div><b>${Lu(s).length}</b><span>people connected</span></div><div><b>${s.locations.length}</b><span>places discovered</span></div><div><b>${r}</b><span>story horizon</span></div></section><section class="atlas-grid"><article class="atlas-panel atlas-panel--wide" data-atlas-panel="relationships"><header><div><span class="material-symbols-outlined">account_tree</span><p>Relationship constellation</p></div><button type="button" data-atlas-focus="relationships">Explore</button></header>${sE(s)}${Vl(s,"relationships")}</article><article class="atlas-panel" data-atlas-panel="places"><header><div><span class="material-symbols-outlined">map</span><p>Memory geography</p></div><button type="button" data-atlas-focus="places">Explore</button></header>${iE(s)}${Vl(s,"places")}</article><article class="atlas-panel atlas-panel--wide" data-atlas-panel="timeline"><header><div><span class="material-symbols-outlined">timeline</span><p>Living timeline</p></div><button type="button" data-atlas-focus="timeline">Explore</button></header>${rE(s)}${Vl(s,"timeline")}</article><article class="atlas-panel" data-atlas-panel="evidence"><header><div><span class="material-symbols-outlined">verified</span><p>Source evidence</p></div><span class="atlas-count">${s.evidence.length} records</span></header>${aE(s)}</article></section><aside class="atlas-inspector" aria-live="polite"><span class="material-symbols-outlined">touch_app</span><p>Select a person, year, place, or source to inspect the connection.</p></aside>`,n.querySelector(".atlas-hero .atlas-eyebrow").textContent="Heritage Atlas · visual answer";const i=n.querySelector(".atlas-inspector"),a=l=>{n.querySelectorAll(".is-selected").forEach(c=>c.classList.remove("is-selected")),l.classList.add("is-selected"),i&&(i.innerHTML=`<span class="material-symbols-outlined">auto_awesome</span><p><b>${be(l.dataset.atlasLabel??"Archive connection")}</b><br/>This signal is drawn from your private archive and can be explored alongside its related memories.</p>`)};n.querySelectorAll("[data-atlas-year], [data-atlas-location], [data-atlas-person], [data-atlas-evidence]").forEach(l=>l.addEventListener("click",()=>a(l))),n.querySelectorAll("[data-atlas-focus]").forEach(l=>l.addEventListener("click",()=>{const c=n.querySelector(`[data-atlas-panel="${l.dataset.atlasFocus}"]`),u=!(c!=null&&c.classList.contains("is-expanded"));n.querySelectorAll("[data-atlas-panel]").forEach(d=>d.classList.remove("is-expanded")),n.querySelectorAll("[data-atlas-focus]").forEach(d=>{d.textContent="Explore"}),c==null||c.classList.toggle("is-expanded",u),l.textContent=u?"Collapse":"Explore",c==null||c.scrollIntoView({behavior:"smooth",block:"center"}),c==null||c.classList.add("is-focused"),window.setTimeout(()=>c==null?void 0:c.classList.remove("is-focused"),1100)}))}function lE(n){var s,r,i;const e=document.createElement("main");e.id="atlas-screen",e.className="atlas-screen",e.innerHTML='<div class="atlas-app-shell"><aside data-sidebar class="atlas-sidebar vault-nav hidden flex-col p-6 lg:flex"><div class="mb-10"><img class="brand-logo" src="/heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">explore</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md" data-logout-label>Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="mt-6 border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div></aside><section class="atlas-main"><header class="atlas-topbar"><button type="button" class="atlas-brand" data-atlas-back><img src="/heritageatlas-mark.svg" alt=""/><span>HeritageAtlas</span></button><p>Ask your archive. Explore the answer.</p><button type="button" class="atlas-close" data-atlas-back aria-label="Return to Vault"><span class="material-symbols-outlined">close</span></button></header><div class="atlas-shell"><section class="atlas-intro"><div><p class="atlas-eyebrow">Beyond the wall of text</p><h2>Your family, made explorable.</h2><p>Every answer is a timeline, relationship constellation, map, and trail back to the original memories.</p></div><form class="atlas-query" data-atlas-query><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask HeritageAtlas" value="How did our family story unfold over time?" /><button type="submit">Explore answer <span class="material-symbols-outlined">arrow_forward</span></button></form><div class="atlas-suggestions"><button type="button">How did our family story unfold over time?</button><button type="button">Show the people connected to our memories</button><button type="button">Where do our memories take place?</button></div></section><div data-atlas-answer class="atlas-answer"><div class="atlas-loading">Preparing an evidence-led visual answer…</div></div></div></section></div>',(s=e.querySelector(".brand-logo"))==null||s.setAttribute("alt","Heritage Atlas"),(r=e.querySelector("[aria-label='HeritageAtlas navigation']"))==null||r.setAttribute("aria-label","Heritage Atlas navigation");const t=e.querySelector("[data-dashboard-view='atlas']");return t&&(t.lastChild.textContent="Heritage Atlas"),e.querySelector(".atlas-brand span").textContent="Heritage Atlas",(i=e.querySelector("[data-atlas-query] input"))==null||i.setAttribute("aria-label","Ask Heritage Atlas"),e.querySelectorAll("[data-atlas-back]").forEach(a=>a.addEventListener("click",n)),e}function cE(n,e){const t=n.querySelector("[data-atlas-answer]"),s=n.querySelector("[data-atlas-query]"),r=s==null?void 0:s.querySelector("input"),i=async a=>{if(!t)return;t.innerHTML='<div class="atlas-loading">Reading the memories, people, places, and dates in your archive…</div>';const l=await e();if(!l){t.innerHTML='<div class="atlas-empty atlas-empty--large"><span class="material-symbols-outlined">inventory_2</span><h3>Your Atlas is ready for its first memory.</h3><p>Add a few memories and relatives, then return here to explore your family story visually.</p></div>';return}oE(t,l,a)};s==null||s.addEventListener("submit",a=>{a.preventDefault(),i((r==null?void 0:r.value.trim())||"How did our family story unfold over time?")}),n.querySelectorAll(".atlas-suggestions button").forEach(a=>a.addEventListener("click",()=>{var l;r&&(r.value=((l=a.textContent)==null?void 0:l.trim())||""),i((r==null?void 0:r.value)||"")})),i((r==null?void 0:r.value)||"How did our family story unfold over time?")}const pt=n=>{const e=document.querySelector(n);if(!e)throw new Error(`Missing required element: ${n}`);return e},fe={landing:pt(".landing-page"),login:pt("#login-screen"),vault:pt("#vault-screen"),familyMap:pt("#family-map-screen"),storyMode:pt("#story-mode-screen"),agent:pt("#agent-screen"),loginForm:pt("#loginForm"),registerForm:pt("#registerForm"),authHeading:pt("#login-screen header h2"),authSubheading:pt("#login-screen header p"),authSwitch:pt(".auth-switch"),emailDivider:pt(".relative.mb-8.flex.items-center"),footerPrompt:pt("#footerPrompt"),authError:pt("#authError")};let Nt="landing",F2="login",Gt=[],nn,ss=null,Yn=!1,vn=1;function B2(n=document){n.querySelectorAll("img[alt='HeritageAtlas']").forEach(e=>{e.alt="Heritage Atlas"}),n.querySelectorAll("[aria-label='HeritageAtlas navigation']").forEach(e=>{e.setAttribute("aria-label","Heritage Atlas navigation")}),n.querySelectorAll("[data-dashboard-view='atlas'], .relative-page__brand").forEach(e=>{Array.from(e.childNodes).forEach(t=>{var s;t.nodeType===Node.TEXT_NODE&&((s=t.textContent)!=null&&s.includes("HeritageAtlas"))&&(t.textContent=t.textContent.replaceAll("HeritageAtlas","Heritage Atlas"))})})}async function uE(){if(Yn)return He;const n=ct.currentUser;if(!n)return null;const e=await ks(bn(tt,"users",n.uid));if(!e.exists())return null;const t=await eE(e.data());return t?{vault:t.vault,members:t.familyMembers,memories:t.memories,stories:t.stories}:null}function hE(){var a,l;const n=He.memories.map(c=>c.year).filter(c=>c!==null).sort((c,u)=>c-u),e={memories:String(He.memories.length),familyMembers:String(He.members.length),timeline:n.length?`${n[0]}–${n.at(-1)}`:"—",stories:String(He.stories.length)};document.querySelectorAll("[data-stat]").forEach(c=>{const u=c.dataset.stat;u&&e[u]&&(c.textContent=e[u])}),document.querySelectorAll("[data-demo-banner]").forEach(c=>c.remove());const t=document.querySelector("#vault-screen .vault-main");t&&(t.insertAdjacentHTML("afterbegin",'<div data-demo-banner class="mb-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-secondary/30 bg-secondary-container/50 px-5 py-3 text-sm text-on-surface"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary">auto_awesome</span><b>Demo Mode</b> · Exploring the read-only Banda–Chama family archive.</span><button type="button" data-exit-demo class="font-semibold text-secondary underline underline-offset-4">Exit demo</button></div>'),(a=t.querySelector("[data-exit-demo]"))==null||a.addEventListener("click",fE));const s=document.querySelector("#story-mode-screen h1"),r=(l=s==null?void 0:s.parentElement)==null?void 0:l.querySelector("p"),i=document.querySelector("#story-mode-screen article h2");s&&(s.textContent="“How did the Banda–Chama story unfold?”"),r&&(r.textContent="A visual inquiry grounded in the seeded demonstration archive"),i&&(i.textContent="The Banda–Chama Family Story")}function dE(){var r;const n=document.querySelector("#story-mode-screen > .flex > section");if(!n)return;n.innerHTML='<div class="story-experience"><div class="story-experience__inner"><section class="story-hero"><div><p class="story-kicker">Guided family narrative</p><h1>Follow the threads that made this family.</h1><p>Story Mode turns evidence into a guided reading path. Begin with a chapter, inspect the source moments beside it, then ask the archive what should come next.</p></div><div class="story-hero__status"><span class="material-symbols-outlined">auto_awesome</span><div><b>Visual reading guide</b><small>4 chapters · 19 source memories · 114 years</small></div></div></section><nav class="story-path" aria-label="Story reading path"><button class="story-path__step is-active" type="button" data-story-chapter="roots"><i class="material-symbols-outlined">mail</i><b>01 · Begin</b><small>The letter that started the archive</small></button><button class="story-path__step" type="button" data-story-chapter="table"><i class="material-symbols-outlined">table_restaurant</i><b>02 · Gather</b><small>A ritual with room for everyone</small></button><button class="story-path__step" type="button" data-story-chapter="routes"><i class="material-symbols-outlined">route</i><b>03 · Travel</b><small>Routes, stamps, and borrowed roads</small></button><button class="story-path__step" type="button" data-story-chapter="future"><i class="material-symbols-outlined">auto_stories</i><b>04 · Continue</b><small>The next generation takes the pen</small></button></nav><section class="story-layout"><article class="story-paper story-paper--guided"><header class="story-paper__header"><div><p class="story-kicker" data-story-kicker>Chapter 01 · Begin</p><h2 data-story-title>The blue trunk and the promise of books</h2></div><button type="button" data-story-next><span class="material-symbols-outlined">arrow_forward</span>Next chapter</button></header><div class="story-chapter-summary" data-story-summary>Start here: a rain-stained postcard explains why Samuel began preserving the small details that distance could erase.</div><div class="story-paper__body" data-story-body><p>In 1912, Samuel Banda wrote home from a railway platform in Livingstone. His postcard had room for only three hurried lines, yet he made space for rain on the tracks, the sound of a whistle, and a promise to bring home a proper atlas. It was the first record in what would become the Banda–Chama archive.</p><p>Years later, when Samuel took his first teaching post in Mongu, he wrote again—this time about books, and the hope that every child might have one to borrow. Beatrice kept both letters in a blue trunk alongside an atlas, two school slates, and a hand-cranked radio. The trunk was not meant to be a museum. It was simply how they kept one another close.</p><div class="story-journey"><div><b>1912</b><span>A postcard begins the thread</span></div><div><b>1920</b><span>A teacher writes home about books</span></div><div><b>1935</b><span>The blue trunk is inventoried</span></div></div></div></article><aside class="story-storyline"><section class="story-sidecard"><h3><span class="material-symbols-outlined">verified</span>Evidence trail</h3><p>Each chapter is anchored in original archive material. Select a card to see why it matters.</p><div class="story-evidence"><button type="button" data-story-evidence="postcard"><span class="material-symbols-outlined">mail</span><span><b>Postcard from the railway</b><small>Livingstone · 1912</small></span></button><button type="button" data-story-evidence="letter"><span class="material-symbols-outlined">history_edu</span><span><b>Samuel’s first school letter</b><small>Mongu · 1920</small></span></button><button type="button" data-story-evidence="trunk"><span class="material-symbols-outlined">inventory_2</span><span><b>The blue trunk inventory</b><small>Kabwe · 1935</small></span></button></div><div class="story-inspector" data-story-inspector>Select a source to reveal how it moves the family story forward.</div></section><section class="story-sidecard"><h3><span class="material-symbols-outlined">explore</span>How to explore</h3><p>Move chapter by chapter, choose a source, or ask a question below. HeritageAtlas turns each question into an evidence-led path.</p></section></aside></section></div></div><footer class="story-composer"><div class="story-composer__inner"><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask about another family memory" placeholder="Ask about another family memory..."/><button type="button"><span class="material-symbols-outlined">send</span><span>Explore</span></button></div><p class="story-composer__hint">Try: “What changed when the family moved?” · “Show the stories behind the Sunday table.”</p></footer>';const e=[{id:"roots",kicker:"Chapter 01 · Begin",title:"The blue trunk and the promise of books",summary:"Start here: a rain-stained postcard explains why Samuel began preserving the small details that distance could erase.",body:'<p>In 1912, Samuel Banda wrote home from a railway platform in Livingstone. His postcard had room for only three hurried lines, yet he made space for rain on the tracks, the sound of a whistle, and a promise to bring home a proper atlas. It was the first record in what would become the Banda–Chama archive.</p><p>Years later, when Samuel took his first teaching post in Mongu, he wrote again—this time about books, and the hope that every child might have one to borrow. Beatrice kept both letters in a blue trunk alongside an atlas, two school slates, and a hand-cranked radio. The trunk was not meant to be a museum. It was simply how they kept one another close.</p><div class="story-journey"><div><b>1912</b><span>A postcard begins the thread</span></div><div><b>1920</b><span>A teacher writes home about books</span></div><div><b>1935</b><span>The blue trunk is inventoried</span></div></div>'},{id:"table",kicker:"Chapter 02 · Gather",title:"A table large enough for everyone",summary:"Follow the ritual that turned recipes, laughter, and listening into a family language.",body:'<p>At Martha’s Sunday table, no conversation was too small to keep. The enamel plates and Beatrice’s embroidered cloth made a stage for arrivals, apologies, job news, and stories that grew funnier with every retelling.</p><p>Martha’s garden fed the table, but it also supplied its wisdom. In a cassette recorded at dusk, she named each plant and then said a family grows the same way: slowly, by being tended. Decades later, Nandi found Beatrice’s recipe card—‘stir until the house smells right’—and understood that the instructions were really an invitation to make extra for neighbours.</p><div class="story-journey"><div><b>1951</b><span>The first Sunday table</span></div><div><b>1984</b><span>Martha records the garden</span></div><div><b>2007</b><span>Four generations gather</span></div></div>'},{id:"routes",kicker:"Chapter 03 · Travel",title:"Routes, stamps, and borrowed roads",summary:"Trace the movement of people, photographs, and stories between the homes that shaped the family.",body:'<p>Joseph’s passport is full of stamps, but the more revealing marks are the addresses written in the margins: Harare, Bulawayo, Lusaka, then home again. Each border crossing carried practical news and a few photographs for the people who could not travel.</p><p>Daniel later placed a cassette recorder on the living-room table and asked Joseph to explain the move, the missing suitcase, and the song nobody could finish. The recording reveals that migration was not a single departure. It was a repeated act of remembering where to return.</p><div class="story-journey"><div><b>1961</b><span>Ruth catalogues the trunks</span></div><div><b>1967</b><span>Joseph’s passport opens routes</span></div><div><b>2023</b><span>Tapiwa walks the old road</span></div></div>'},{id:"future",kicker:"Chapter 04 · Continue",title:"The next keepers",summary:"The archive becomes alive when the youngest generation adds questions, maps, and new ways to remember.",body:'<p>Malia’s list begins where the photographs stop: Who took this? Why were they laughing? Where did the blue trunk sleep? Her questions make visible the work an archive still has to do.</p><p>Linda’s short film brings letters, cassettes, and lunch-table photographs into the same room. Miles responds with a hand-drawn map of railway lines, garden paths, and addresses, calling it ‘How we kept finding each other.’ Theo will inherit not a finished history, but a living invitation to add his own.</p><div class="story-journey"><div><b>2022</b><span>Questions enter the archive</span></div><div><b>2025</b><span>Linda premieres the family film</span></div><div><b>2026</b><span>Miles maps the routes home</span></div></div>'}],t=i=>{const a=e.find(l=>l.id===i)??e[0];n.querySelector("[data-story-kicker]").textContent=a.kicker,n.querySelector("[data-story-title]").textContent=a.title,n.querySelector("[data-story-summary]").textContent=a.summary,n.querySelector("[data-story-body]").innerHTML=a.body,n.querySelectorAll("[data-story-chapter]").forEach(l=>l.classList.toggle("is-active",l.dataset.storyChapter===a.id))};n.querySelectorAll("[data-story-chapter]").forEach(i=>i.addEventListener("click",()=>t(i.dataset.storyChapter??"roots"))),(r=n.querySelector("[data-story-next]"))==null||r.addEventListener("click",()=>{const i=e.findIndex(a=>{var l;return(l=n.querySelector(`[data-story-chapter="${a.id}"]`))==null?void 0:l.classList.contains("is-active")});t(e[(i+1)%e.length].id)});const s={postcard:"This is the archive’s earliest dated record. It gives the story a starting place, a journey, and Samuel’s own voice.",letter:"The letter turns an aspiration—books for children—into a recurring family value carried through later generations.",trunk:"The inventory proves that preservation was already a family practice long before the archive became digital."};n.querySelectorAll("[data-story-evidence]").forEach(i=>i.addEventListener("click",()=>{n.querySelectorAll("[data-story-evidence]").forEach(l=>l.classList.remove("is-selected")),i.classList.add("is-selected");const a=n.querySelector("[data-story-inspector]");a&&(a.textContent=s[i.dataset.storyEvidence??""]??"This source is part of the family’s evidence trail.")}))}function pE(){Yn=!0,nn==null||nn(),Gt=He.members,ss="martha",Bs(),hE(),Ot("vault")}function fE(){var n;Yn=!1,Gt=[],ss=null,(n=document.querySelector("[data-demo-banner]"))==null||n.remove(),Bs(),Ot(ct.currentUser?"vault":"landing")}function lo(n){const e=document.createElement("span");return e.textContent=n,e.innerHTML}function mE(n){const e=n.birthYear??"",t=n.deathYear??"Present";return e?`${e}–${t}`:String(t)}function Vu(n){const e=n.querySelector("[data-family-connectors]"),t=n.querySelector("[data-family-map-stage]");if(!e||!t)return;const s=t.getBoundingClientRect();e.replaceChildren(),Gt.filter(r=>r.parentId).forEach(r=>{const i=n.querySelector(`[data-family-node-id="${r.parentId}"]`),a=n.querySelector(`[data-family-node-id="${r.id}"]`);if(!i||!a)return;const l=i.getBoundingClientRect(),c=a.getBoundingClientRect(),u=(l.left+l.width/2-s.left)/vn,d=(l.bottom-s.top)/vn,p=(c.left+c.width/2-s.left)/vn,y=(c.top-s.top)/vn,b=d+Math.max(30,(y-d)/2),R=document.createElementNS("http://www.w3.org/2000/svg","path");R.setAttribute("d",`M ${u} ${d} V ${b} H ${p} V ${y}`),R.setAttribute("class","family-connector"),e.append(R)})}function gE(n,e){vn=Math.min(1.35,Math.max(.7,Number(e.toFixed(2))));const t=n.querySelector("[data-family-map-stage]");t&&(t.style.transform=`scale(${vn})`);const s=n.querySelector("[data-map-zoom-status]");s&&(s.textContent=`Map zoom ${Math.round(vn*100)}%`),requestAnimationFrame(()=>Vu(n))}function Bs(){var i,a;const n=document.querySelector("#family-map-screen .family-map-canvas"),e=n==null?void 0:n.querySelector("[data-family-map-content]");if(!n||!e)return;if(!Gt.length){e.innerHTML='<div class="flex min-h-[520px] items-center justify-center"><div class="max-w-md rounded-2xl border border-dashed border-secondary/40 bg-surface-container-lowest/80 p-10 text-center shadow-sm"><span class="material-symbols-outlined mb-4 text-4xl text-secondary">account_tree</span><h3 class="font-display-lg text-2xl font-semibold text-primary">Your family map is ready</h3><p class="mt-3 leading-7 text-on-surface-variant">Add your first family member, then choose who they are connected to as your archive grows.</p><button data-open-relative class="mt-6 rounded-full bg-primary px-5 py-3 font-label-md text-label-md text-on-primary">Add your first relative</button></div></div>',(i=e.querySelector("[data-open-relative]"))==null||i.addEventListener("click",()=>document.dispatchEvent(new Event("heritage:add-relative")));return}const t=new Map(Gt.map(l=>[l.id,l])),s=(l,c=new Set)=>!l.parentId||!t.has(l.parentId)||c.has(l.id)?0:(c.add(l.id),s(t.get(l.parentId),c)+1),r=new Map;Gt.forEach(l=>{const c=s(l);r.set(c,[...r.get(c)??[],l])}),e.innerHTML=[...r.entries()].sort(([l],[c])=>l-c).map(([l,c])=>`<div class="family-generation grid gap-7 ${c.length>1?"sm:grid-cols-2 xl:grid-cols-3":"justify-items-center"}" data-generation="${l}">${c.map(u=>`<button type="button" data-family-node-id="${u.id}" class="map-node ${ss===u.id?"is-selected":""} relative z-10 w-full max-w-xs rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 text-center"><span class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined text-2xl">person</span></span><span class="block font-display-lg text-xl font-semibold text-primary">${lo(u.fullName)}</span><span class="mt-1 block text-xs uppercase tracking-widest text-secondary">${lo(u.relationship||"Family member")} · ${mE(u)}</span></button>`).join("")}</div>`).join("")+'<button data-open-relative type="button" class="relative z-10 mx-auto flex min-h-36 w-full max-w-xs items-center justify-center rounded-2xl border border-dashed border-secondary/40 bg-surface-container-low p-5 text-center text-secondary"><span><span class="material-symbols-outlined mb-1 text-2xl">add</span><span class="block font-label-md text-label-md">Add a connected relative</span></span></button>',e.querySelectorAll("[data-family-node-id]").forEach(l=>l.addEventListener("click",()=>{ss=l.dataset.familyNodeId??null,Bs()})),(a=e.querySelector("[data-open-relative]"))==null||a.addEventListener("click",()=>document.dispatchEvent(new Event("heritage:add-relative"))),requestAnimationFrame(()=>Vu(n))}async function yE(n){var s;const t=(s=(await ks(bn(tt,"users",n))).data())==null?void 0:s.defaultVaultId;if(nn==null||nn(),!t){Gt=[],Bs();return}nn=Mv(Pa(es(tt,`vaults/${t}/familyMembers`),xa("fullName","asc")),r=>{Gt=r.docs.map(i=>({id:i.id,...i.data()})),ss&&!Gt.some(i=>i.id===ss)&&(ss=null),Bs()})}function Ot(n){Nt=n,fe.landing.classList.toggle("is-hidden",n!=="landing"),fe.login.style.display=n==="login"?"flex":"none",fe.vault.style.display=n==="vault"?"flex":"none",fe.familyMap.style.display=n==="family-map"?"flex":"none",fe.storyMode.style.display=n==="story-mode"?"flex":"none",fe.agent.style.display=n==="agent"?"flex":"none";const e=document.getElementById("atlas-screen");e&&(e.style.display=n==="atlas"?"flex":"none"),n==="story-mode"&&document.dispatchEvent(new Event("heritage:story-route")),n==="agent"&&document.dispatchEvent(new Event("heritage:agent-route")),window.scrollTo({top:0,behavior:"smooth"}),history.pushState({view:n},"",n==="landing"?"#":`#${n}`)}function dc(n){F2=n,Oa();const e=n==="register";fe.loginForm.classList.toggle("is-hidden",e),fe.registerForm.classList.toggle("is-hidden",!e),fe.authSwitch.classList.toggle("register-active",e),fe.authHeading.textContent=e?"Begin your legacy":"Enter the Vault",fe.authSubheading.textContent=e?"Create a sanctuary for the stories that matter.":"Sign in to continue preserving what matters.",fe.emailDivider.classList.toggle("is-hidden",e),fe.footerPrompt.innerHTML=e?'Already have a vault? <a class="font-semibold text-primary hover:underline" href="#" data-login-link>Enter the Vault</a>':`Don't have a vault yet? <a class="font-semibold text-primary hover:underline" href="#" data-register-link>Create account</a>`,document.querySelectorAll(".auth-tab").forEach(t=>{const s=t.dataset.mode===n;t.setAttribute("aria-selected",String(s)),t.classList.toggle("text-primary",s),t.classList.toggle("text-on-surface-variant",!s)})}function Oa(){fe.authError.textContent="",fe.authError.classList.add("hidden")}function Kr(n){fe.authError.textContent=n,fe.authError.classList.remove("hidden")}function Ml(n){const e=n instanceof Error&&"code"in n?String(n.code):"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")?"That email and password do not match an account.":e.includes("email-already-in-use")?"An account already exists for this email. Try signing in instead.":e.includes("weak-password")?"Choose a stronger password with at least 8 characters.":e.includes("invalid-email")?"Enter a valid email address.":"We could not complete that request. Please try again."}function ya(n,e,t){const s=n.querySelector('button[type="submit"]');s&&(s.disabled=e,s.textContent=e?"Securing your vault…":t)}function _a(n){return(n.trim().split(/\s+/).filter(Boolean).slice(0,2).map(t=>t[0]).join("")||"AK").toUpperCase()}function pc(n,e){var i;const t=((i=e==null?void 0:e.split("@")[0])==null?void 0:i.replace(/[._-]+/g," ").replace(/\b\w/g,a=>a.toUpperCase()))||"Vault keeper",s=(n==null?void 0:n.trim())||t,r=s.split(/\s+/)[0]||"there";document.documentElement.dataset.authUserName=s,document.documentElement.dataset.authUserInitials=_a(s),document.querySelectorAll("[data-auth-user-name]").forEach(a=>{a.textContent=s}),document.querySelectorAll("[data-sidebar] > div:last-child p.font-semibold").forEach(a=>{a.textContent=s}),document.querySelectorAll("[data-auth-user-initials]").forEach(a=>{a.textContent=_a(s)}),document.querySelectorAll("#vault-screen > section > header .bg-primary.font-label-md, #story-mode-screen header .bg-primary.text-xs").forEach(a=>{a.textContent=_a(s)}),document.querySelectorAll("[data-auth-greeting]").forEach(a=>{a.textContent=`Good morning, ${r}.`}),document.querySelectorAll("#vault-screen > section > header h2").forEach(a=>{a.textContent=`Good morning, ${r}.`}),document.dispatchEvent(new CustomEvent("heritage:identity",{detail:{name:s,initials:_a(s)}}))}function _E(){const n=document.querySelector("[data-archive-canvas]");!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches||n.querySelectorAll("[data-archive-tile]").forEach(e=>{let t=0,s=0,r=0,i=0;e.addEventListener("pointerdown",a=>{if(a.button!==0)return;const l=n.getBoundingClientRect(),c=e.getBoundingClientRect();t=a.clientX,s=a.clientY,r=c.left-l.left,i=c.top-l.top,e.style.left=`${r}px`,e.style.top=`${i}px`,e.style.right="auto",e.style.bottom="auto",e.style.transform="rotate(0deg)",e.style.zIndex="5",e.setPointerCapture(a.pointerId)}),e.addEventListener("pointermove",a=>{if(!e.hasPointerCapture(a.pointerId))return;const l=Math.max(0,n.clientWidth-e.offsetWidth),c=Math.max(0,n.clientHeight-e.offsetHeight);e.style.left=`${Math.min(l,Math.max(0,r+a.clientX-t))}px`,e.style.top=`${Math.min(c,Math.max(0,i+a.clientY-s))}px`}),e.addEventListener("pointerup",a=>{e.hasPointerCapture(a.pointerId)&&e.releasePointerCapture(a.pointerId),e.style.zIndex="2"})})}async function vE(n){const e=bn(tt,"users",n.uid),t=await Na(es(tt,"vaults"),{name:`${n.displayName||"My family"}’s Vault`,description:"A private home for the stories that matter.",ownerId:n.uid,memberIds:[n.uid],coverImageUrl:null,createdAt:fn(),updatedAt:fn()});await Vv(e,{displayName:n.displayName||"Vault keeper",email:n.email||"",photoURL:null,defaultVaultId:t.id,createdAt:fn(),lastSeenAt:fn()},{merge:!0})}function wE(){var S,w,T;_E(),document.querySelectorAll("[data-demo-mode]").forEach(_=>{_.addEventListener("click",pE)});const n=document.createElement("div");n.className="memory-page",n.innerHTML='<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">add_photo_alternate</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a new memory</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Preserve a photo, document, recording, or the story behind it.</p></div><button type="button" data-close-memory aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Memory title</label><input name="title" required class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Sunday at grandmother’s table" /></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Type</label><select name="type" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Year</label><input name="year" type="number" min="1000" max="2100" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="1958" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Description</label><textarea name="description" required rows="3" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="What should your family remember about this?" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Attachment <span class="font-normal text-on-surface-variant">(optional)</span></label><input name="asset" type="file" class="block w-full text-sm text-on-surface-variant" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></div><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="flex justify-end gap-3"><button type="button" data-close-memory class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></form></div>',n.innerHTML=`
    <header class="memory-page__topbar">
      <div class="memory-page__brand"><img src="/heritageatlas-mark.svg" alt="" /><span>Heritage Atlas</span></div>
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
    </main>`,document.body.append(n);const e=()=>{if(n.classList.add("is-open"),Yn){const _=n.querySelector("[data-memory-status]");_&&(_.textContent="Demo Mode is read-only. Create an account to preserve a new memory.",_.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant")}};document.querySelectorAll("[data-new-memory]").forEach(_=>_.addEventListener("click",e)),n.querySelectorAll("[data-close-memory]").forEach(_=>_.addEventListener("click",()=>n.classList.remove("is-open"))),n.addEventListener("click",_=>{_.target===n&&n.classList.remove("is-open")}),(S=n.querySelector("form"))==null||S.addEventListener("submit",async _=>{var ke;_.preventDefault();const E=_.currentTarget,I=n.querySelector("[data-memory-status]");if(!E.reportValidity()||Yn)return;if(!ct.currentUser){I&&(I.textContent="Sign in to save memories to your private vault.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const de=(ke=(await ks(bn(tt,"users",ct.currentUser.uid))).data())==null?void 0:ke.defaultVaultId;if(!de){I&&(I.textContent="No vault is associated with this account yet.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const ue=E.querySelector('button[type="submit"]');ue&&(ue.disabled=!0,ue.textContent="Saving memory…");try{const Et=new FormData(E),Ft=Et.get("asset");let ys="";if(Ft instanceof File&&Ft.size>0){const qo=`vaults/${de}/memories/${crypto.randomUUID()}-${Ft.name.replace(/[^a-zA-Z0-9._-]/g,"-")}`,zi=await Gw(Ww(Zw,qo),Ft);ys=await zw(zi.ref)}await Na(es(tt,`vaults/${de}/memories`),{title:Et.get("title"),description:Et.get("description"),type:Et.get("type"),assetUrl:ys,thumbnailUrl:null,year:Number(Et.get("year"))||null,dateLabel:String(Et.get("dateLabel")||"").trim()||null,location:String(Et.get("location")||"").trim()||null,familyMemberIds:[],tags:[],archived:!1,createdBy:ct.currentUser.uid,createdAt:fn(),updatedAt:fn()}),E.reset(),n.classList.remove("is-open")}catch{I&&(I.textContent="We could not save this memory. Please try again.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{ue&&(ue.disabled=!1,ue.textContent="Save memory")}});const t=document.querySelector("#story-mode-screen aside");t&&(t.setAttribute("data-sidebar",""),t.className="vault-nav hidden flex-col p-6 lg:flex",t.innerHTML='<div class="mb-10"><img class="brand-logo" src="/heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">auto_awesome</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle mb-5 text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md">Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div>'),dE();const s=document.createElement("div");s.className="relative-page",s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-labelledby","relativePageTitle"),s.innerHTML='<header class="relative-page__topbar"><a href="#family-map" class="relative-page__brand" aria-label="Return to family map"><img src="/heritageatlas-mark.svg" alt="" />HeritageAtlas</a><button type="button" data-close-relative class="relative-page__close" aria-label="Return to family map"><span class="material-symbols-outlined">close</span><span>Close editor</span></button></header><main class="relative-page__content"><section class="relative-page__heading"><span class="material-symbols-outlined">account_tree</span><div><h2 id="relativePageTitle">Add a relative</h2><p>Create a person, then connect them to their parent or ancestor. Your relationship line will appear on the Family Map as soon as it is saved.</p></div></section><div class="relative-page__guide"><span><span class="material-symbols-outlined text-base">person_add</span>Describe the person</span><span><span class="material-symbols-outlined text-base">account_tree</span>Connect their branch</span><span><span class="material-symbols-outlined text-base">map</span>See the map update</span></div><form class="relative-page__form"><div class="relative-page__field relative-page__field--wide"><label>Full name</label><input name="fullName" placeholder="e.g. Martha Banda" required /></div><div class="relative-page__field"><label>Relationship</label><input name="relationship" placeholder="e.g. Daughter, grandfather, cousin" required /></div><div class="relative-page__field"><label>Connect to</label><select name="parentId"><option value="">No connection yet — start a new branch</option></select><small>Choose a parent or ancestor to draw a relationship line on the map.</small></div><div class="relative-page__field"><label>Birth year</label><input name="birthYear" type="number" min="1000" max="2100" placeholder="e.g. 1921" /></div><div class="relative-page__field"><label>Death year <span class="normal-case font-normal">(optional)</span></label><input name="deathYear" type="number" min="1000" max="2100" placeholder="e.g. 2008" /></div><div class="relative-page__field relative-page__field--wide"><label>Notes</label><textarea name="notes" placeholder="What should your family remember about this person?"></textarea></div><div class="relative-page__footer"><p data-relative-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="relative-page__actions"><button type="button" data-close-relative class="border border-secondary text-secondary">Cancel</button><button type="submit" class="bg-primary text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save relative</button></div></div></form></main>',B2(s),document.body.append(s);const r=()=>{var E;const _=s.querySelector('select[name="parentId"]');if(_&&(_.innerHTML='<option value="">No connection yet — start a new branch</option>'+Gt.map(I=>`<option value="${I.id}">${lo(I.fullName)} · ${lo(I.relationship||"Family member")}</option>`).join(""),_.value=ss??""),s.classList.add("is-open"),document.body.style.overflow="hidden",s.scrollTo({top:0}),(E=s.querySelector("[data-close-relative]"))==null||E.focus(),Yn){const I=s.querySelector("[data-relative-status]");I&&(I.textContent="Demo Mode is read-only. Create an account to add relatives to your own archive.",I.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant")}};document.addEventListener("heritage:add-relative",r),document.querySelectorAll("[data-add-relative]").forEach(_=>_.addEventListener("click",r));const i=()=>{s.classList.remove("is-open"),document.body.style.overflow=""};s.querySelectorAll("[data-close-relative]").forEach(_=>_.addEventListener("click",i)),(w=s.querySelector("form"))==null||w.addEventListener("submit",async _=>{var Et;_.preventDefault();const E=_.currentTarget;if(!E.reportValidity()||Yn)return;const I=s.querySelector("[data-relative-status]");if(!ct.currentUser){I&&(I.textContent="Sign in to save this relative to your private family archive.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const de=(Et=(await ks(bn(tt,"users",ct.currentUser.uid))).data())==null?void 0:Et.defaultVaultId,ue=new FormData(E);if(!de){I&&(I.textContent="No vault is associated with this account yet.",I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const ke=E.querySelector('button[type="submit"]');ke&&(ke.disabled=!0,ke.textContent="Saving relative…");try{await Na(es(tt,`vaults/${de}/familyMembers`),{fullName:ue.get("fullName"),relationship:ue.get("relationship"),parentId:ue.get("parentId")||null,birthYear:Number(ue.get("birthYear"))||null,deathYear:Number(ue.get("deathYear"))||null,portraitUrl:null,notes:ue.get("notes")||"",createdAt:fn(),updatedAt:fn()}),E.reset(),i()}catch(Ft){I&&(I.textContent=(Ft instanceof Error,"We could not save this relative. Please try again."),I.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{ke&&(ke.disabled=!1,ke.textContent="Save relative")}});const a=document.getElementById("inviteModal"),l=document.getElementById("inviteForm"),c=document.getElementById("inviteStatus"),u=()=>a==null?void 0:a.classList.remove("is-open");document.querySelectorAll("[data-invite-family]").forEach(_=>_.addEventListener("click",()=>{var E;a==null||a.classList.add("is-open"),(E=document.getElementById("inviteEmail"))==null||E.focus()})),document.querySelectorAll("[data-close-invite]").forEach(_=>_.addEventListener("click",u)),a==null||a.addEventListener("click",_=>{_.target===a&&u()}),l==null||l.addEventListener("submit",async _=>{var de;if(_.preventDefault(),!l.reportValidity())return;if(!ct.currentUser){c&&(c.textContent="Sign in to send a secure invitation from your family vault.",c.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container");return}const E=l.querySelector('button[type="submit"]'),I=document.getElementById("inviteEmail").value.trim().toLowerCase(),A=document.getElementById("inviteMessage").value.trim();E==null||E.setAttribute("disabled","true"),c&&(c.textContent="Creating secure invitation…",c.className="rounded-lg bg-surface-container px-4 py-3 text-sm text-on-surface-variant");try{const ke=(de=(await ks(bn(tt,"users",ct.currentUser.uid))).data())==null?void 0:de.defaultVaultId;if(!ke)throw new Error("No vault is associated with this account.");await Na(es(tt,`vaults/${ke}/invitations`),{email:I,message:A,invitedBy:ct.currentUser.uid,status:"pending",createdAt:fn()}),c&&(c.textContent="Invitation created. Your email client will open so you can send it.",c.className="rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant"),window.location.href=`mailto:${encodeURIComponent(I)}?subject=${encodeURIComponent("You’re invited to HeritageVault")}&body=${encodeURIComponent(A||"I’ve invited you to join my HeritageVault family archive.")}`,setTimeout(()=>{l.reset(),u()},500)}catch(ue){c&&(c.textContent=ue instanceof Error?ue.message:"We could not create the invitation. Please try again.",c.className="rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container")}finally{E==null||E.removeAttribute("disabled")}});const d=document.getElementById("memoryDetailModal"),p=document.getElementById("memoryDetailImage"),y=document.getElementById("memoryDetailTitle"),b=document.getElementById("memoryDetailType"),R=document.getElementById("memoryDetailYear"),L=document.getElementById("memoryDetailDescription"),k=document.getElementById("memoryDetailDateLabel");function F(_){var ke;const E=_.dataset.memoryTitle||"Untitled memory",I=_.dataset.memoryDescription||"",A=_.dataset.memoryType||"",de=_.dataset.memoryYear||"",ue=_.dataset.memoryImage||"";y&&(y.textContent=E),b&&(b.textContent=A,b.style.display=A?"":"none"),R&&(R.textContent=de,R.style.display=de?"":"none"),L&&(L.textContent=I),p&&(ue?(p.style.backgroundImage=`url("${ue}")`,p.style.display="",p.classList.remove("is-empty"),p.setAttribute("aria-label",`${E} memory image`)):(p.style.backgroundImage="",p.classList.add("is-empty"),p.setAttribute("aria-label","Memory image unavailable"))),k&&(k.textContent=de?`Captured in ${de}`:"Date unknown"),d==null||d.classList.add("is-open"),document.body.style.overflow="hidden",d==null||d.scrollTo({top:0}),(ke=d==null?void 0:d.querySelector("[data-close-memory-detail]"))==null||ke.focus()}function $(){d==null||d.classList.remove("is-open"),document.body.style.overflow=""}document.querySelectorAll("[data-memory-detail]").forEach(_=>{_.addEventListener("click",()=>F(_)),_.addEventListener("keydown",E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),F(_))})}),document.querySelectorAll("[data-close-memory-detail]").forEach(_=>{_.addEventListener("click",$)}),document.addEventListener("keydown",_=>{_.key==="Escape"&&(d!=null&&d.classList.contains("is-open"))&&$()}),np({onNavigate:_=>Ot(_)});const U=document.querySelector('#story-mode-screen input[placeholder="Ask about another family memory..."]'),q=(T=U==null?void 0:U.closest("div"))==null?void 0:T.querySelector("button");q==null||q.addEventListener("click",()=>{var de,ue;const _=U==null?void 0:U.value.trim();if(!_||!U)return;const E=document.querySelector("#story-mode-screen article.story-paper");if(!E)return;const I=document.createElement("div");I.className="mb-6 ml-auto max-w-xl rounded-2xl bg-primary px-5 py-4 text-on-primary shadow-sm",I.textContent=_,(de=E.parentElement)==null||de.insertBefore(I,E);const A=document.createElement("div");A.className="mb-8 flex gap-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low px-5 py-4 text-sm leading-6 text-on-surface-variant",A.innerHTML='<span class="material-symbols-outlined text-secondary">auto_awesome</span><span>Your question has been added to this archive inquiry. I’ll use the memories and documents in your vault to build the answer as they become available.</span>',(ue=E.parentElement)==null||ue.insertBefore(A,E),U.value=""}),U==null||U.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),q==null||q.click())}),document.querySelectorAll("[data-logout]").forEach(_=>{_.addEventListener("click",async()=>{var I;window.confirm("Log out of HeritageVault?")&&(_.disabled=!0,(I=_.querySelector("[data-logout-label]"))==null||I.replaceChildren(document.createTextNode("Signing out…")),await g3(ct).catch(()=>{}),Ot("landing"))})}),document.querySelectorAll("[data-forgot-password]").forEach(_=>_.addEventListener("click",async E=>{E.preventDefault();const I=document.getElementById("email"),A=I.value.trim();if(!A||!I.checkValidity()){Kr("Enter your email address first, then choose Forgot password."),I.focus();return}_.textContent="Sending reset link…",Oa();try{await l3(ct,A),Kr("Password reset instructions have been sent. Check your inbox and spam folder."),fe.authError.classList.remove("bg-error-container/60","text-on-error-container"),fe.authError.classList.add("bg-primary-fixed","text-on-primary-fixed-variant")}catch(de){Kr(Ml(de))}finally{_.textContent="Forgot password?"}}));const W=localStorage.getItem("heritageatlas-theme")??localStorage.getItem("heritagevault-theme"),Z=_=>{document.documentElement.classList.toggle("dark",_),document.documentElement.style.colorScheme=_?"dark":"light",localStorage.setItem("heritageatlas-theme",_?"dark":"light"),document.querySelectorAll(".brand-logo").forEach(E=>{E.src=E.hasAttribute("data-logo-inverse")||_?"/heritageatlas-logo-light.svg":"/heritageatlas-logo.svg"}),document.querySelectorAll("[data-theme-label]").forEach(E=>{E.textContent=_?"Light mode":"Dark mode"}),document.querySelectorAll("[data-theme-icon]").forEach(E=>{E.textContent=_?"light_mode":"dark_mode"})};Z(W==="dark"),document.querySelectorAll("[data-theme-toggle]").forEach(_=>_.addEventListener("click",()=>Z(!document.documentElement.classList.contains("dark")))),document.querySelectorAll("[data-login-cta]").forEach(_=>{_.addEventListener("click",E=>{E.preventDefault(),Ot("login")})}),document.querySelectorAll("[data-dashboard-view]").forEach(_=>{_.addEventListener("click",E=>{E.preventDefault();const I=_.dataset.dashboardView;(I==="vault"||I==="family-map"||I==="story-mode"||I==="atlas"||I==="agent")&&Ot(I)})}),document.querySelectorAll("[data-atlas-open]").forEach(_=>_.addEventListener("click",()=>Ot("atlas"))),document.querySelectorAll(".auth-tab").forEach(_=>{_.addEventListener("click",()=>dc(_.dataset.mode))}),fe.footerPrompt.addEventListener("click",_=>{const E=_.target.closest("a");E&&(_.preventDefault(),dc(E.hasAttribute("data-login-link")?"login":"register"))}),fe.loginForm.addEventListener("submit",_=>{if(_.preventDefault(),!fe.loginForm.reportValidity())return;Oa(),ya(fe.loginForm,!0,"Enter the Vault");const E=document.getElementById("email").value,I=document.getElementById("password").value;u3(ct,E,I).then(()=>Ot("vault")).catch(A=>{ya(fe.loginForm,!1,"Enter the Vault"),Kr(Ml(A))})}),fe.registerForm.addEventListener("submit",_=>{if(_.preventDefault(),!fe.registerForm.reportValidity())return;Oa(),ya(fe.registerForm,!0,"Create my vault");const E=document.getElementById("registerEmail").value,I=document.getElementById("registerPassword").value,A=document.getElementById("firstName").value,de=document.getElementById("lastName").value;c3(ct,E,I).then(async({user:ue})=>{const ke=`${A} ${de}`.trim();await d3(ue,{displayName:ke}),await vE({...ue,displayName:ke}),pc(ke,ue.email),Ot("vault")}).catch(ue=>{ya(fe.registerForm,!1,"Create my vault"),Kr(Ml(ue))})}),window.addEventListener("popstate",()=>{const _=window.location.hash.replace("#","");Ot(_==="login"||_==="vault"||_==="family-map"||_==="story-mode"||_==="atlas"||_==="agent"?_:"landing")})}function EE(){document.documentElement.dataset.tsRuntime="true",B2();const n=lE(()=>Ot("vault"));fe.storyMode.before(n),cE(n,uE);const e=document.querySelector("#family-map-screen .family-map-canvas");e&&(e.innerHTML='<div class="absolute right-6 top-6 z-20 flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg" role="group" aria-label="Family Map controls"><button type="button" data-map-control="in" class="p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Zoom in"><span class="material-symbols-outlined">add</span></button><button type="button" data-map-control="out" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Zoom out"><span class="material-symbols-outlined">remove</span></button><button type="button" data-map-control="fit" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Fit family tree to view"><span class="material-symbols-outlined">center_focus_strong</span></button></div><span class="sr-only" aria-live="polite" data-map-zoom-status>Map zoom 100%</span><div data-family-map-stage><svg data-family-connectors class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"></svg><div data-family-map-content></div></div>',e.querySelectorAll("[data-map-control]").forEach(s=>s.addEventListener("click",()=>{const r=s.dataset.mapControl;gE(e,r==="in"?vn+.1:r==="out"?vn-.1:1)})),window.addEventListener("resize",()=>Vu(e)),Bs()),document.querySelectorAll("#family-map-screen .text-2xl").forEach(s=>{s.textContent="—"});const t=window.location.hash.replace("#","");Nt=t==="login"||t==="vault"||t==="family-map"||t==="story-mode"||t==="atlas"||t==="agent"?t:"landing",dc(F2),wE(),fe.landing.classList.toggle("is-hidden",Nt!=="landing"),fe.login.style.display=Nt==="login"?"flex":"none",fe.vault.style.display=Nt==="vault"?"flex":"none",fe.familyMap.style.display=Nt==="family-map"?"flex":"none",fe.storyMode.style.display=Nt==="story-mode"?"flex":"none",fe.agent.style.display=Nt==="agent"?"flex":"none",n.style.display=Nt==="atlas"?"flex":"none",Nt==="story-mode"&&document.dispatchEvent(new Event("heritage:story-route")),Nt==="agent"&&document.dispatchEvent(new Event("heritage:agent-route")),m3(ct,async s=>{var r;if(!Yn)if(s){try{const a=(r=(await ks(bn(tt,"users",s.uid))).data())==null?void 0:r.displayName,l=(a==null?void 0:a.trim().toLocaleLowerCase())==="amara kabwe";pc(s.displayName||(l?null:a),s.email)}catch{pc(s.displayName,s.email)}yE(s.uid),Nt==="landing"&&Ot("vault")}else nn==null||nn(),Gt=[],Bs()})}EE();export{L6 as _};

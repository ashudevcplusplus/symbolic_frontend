SPEC:Synergize LP v2-min

// Σ: codebooks
ST:{idle,hover,focus,active,visible,popular,closed,open,playing,hidden,dragging}
TH:{dawn,dusk,eclipse,nebula,cosmic-dawn,hicon}
CX:{theme:TH,locale:{en},vp:{min:360,max:1440},motion:{reduced,prefers}}
A11Y:{focus_ring:"var(--shadow-focus-glow)",contrast_req:4.5}
PERF:{wc:"transform,box-shadow",b_vis:"hidden",gpu:"true"}
FX:{s_sm:"scale=1.01",s_md:"scale=1.03",shadow_z2:"var(--shadow-z2)",stagger_in:"anim='stagger-in'"}
E:{motion:"motion_reduced->FX.anim_off",empty:"empty->null"}

// τ: tokens
RADIUS:{xs:8,sm:12,md:16,lg:24,pill:9999}
SPACE:{xs:8,sm:12,md:16,lg:24,xl:32,xxl:48}
CONTAINER:{sm:640,lg:1024,xl:1280,xxl:1440}
ELEV:{z1:"var(--shadow-z1)",z2:"var(--shadow-z2)",z3:"var(--shadow-z3)"}
GLASS:{bg:"hsl(var(--surface-1)/.65)",blur:10,stroke:"hsl(var(--surface-3)/.6)"}
TYPE:{display:"clamp(2.25rem,2vw+1rem,4rem)",title:"clamp(1.25rem,1vw+1rem,1.75rem)",price:"clamp(1.75rem,1.2vw+1rem,2.5rem)"}
GRAD:{brand:"var(--grad-brand)",glass:"var(--grad-glass)",aurora:"var(--grad-aurora)"}

// Δ: globals
GRID:"12-col≥1024 | 8-col≥768 | 4-col<768"
GUTTERS:"SPACE.md→SPACE.lg"
SECTION_PAD:"clamp(56px,8vw,128px)"
SURFACES:"surface-0..3;text:{primary,secondary,muted};accent:{primary,mid}"
MOTION:"enter:FX.stagger_in | hover:FX.s_sm | focus:A11Y.focus_ring"

// DEF: tiny macros
SEC:{K:{DOM:"section"}}
CARD:{M:{p:24,bg:GLASS.bg,shadow:ELEV.z2}}
GRIDSEC:{...SEC,K:{DOM:"section",style:{display:"grid",gap:SPACE.md}}}

// π: page order
A:[AnnouncementBar,Header,Hero,SocialProofBar,Features,HowItWorks,LiveDemo,StatsKPI,VideoLightbox,ComparisonTable,Integrations,SecurityCompliance,Pricing,Testimonials,FAQ,CTA,Newsletter,BlogTeasers,Footer,CookieConsent,ProgressBackToTop,LocaleSwitcher,ThemeSwitcher,ChangelogTicker]

// ϟ: components
C:{
AnnouncementBar:{I:{message:string,href?:string},M:{py:8,r:RADIUS.pill,bg:"accent_tint"},K:{DOM:"div"},F:["hover:FX.s_sm"],E:["empty(message)->null"]},
Header:{I:{links:[],cta:{}},M:{py:16,r:RADIUS.sm,bg:GLASS.bg,shadow:ELEV.z1,blur:GLASS.blur},K:{DOM:"header"},O:{sticky:true}},
Hero:{I:{title,sub,cta1,cta2?,media?},M:{py:"12vw",bg:GRAD.aurora,font:TYPE.display},K:SEC.K,V:["InteractiveGlow()","Starfield()"]},
HeroIllustration:{I:{isIgnited:boolean},K:{DOM:"svg"},M:{pos:"absolute"},F:["ignited:opacity:1","motion_safe:animate"]},
InteractiveGlow:{I:{},K:{DOM:"div"},M:{pos:"fixed",bg:"radial-gradient"},F:["mousemove:translate","prefers_reduced_motion->null"]},
Starfield:{I:{},K:{DOM:"div"},M:{pos:"fixed",bg:"radial-gradient"},F:["scroll:parallax","prefers_reduced_motion->simplified"],V:["shooting_stars","asteroids"]},
SocialProofBar:{I:{logos:[],blurb?:string},M:{py:32,fg:"muted"},K:SEC.K,F:["visible:FX.stagger_in"],E:["empty(logos)->null"]},
Features:{I:{items:[{icon,title,desc}]},...GRIDSEC,F:["card:hover:FX.s_sm"],M:{card:{bg:GLASS.bg,shadow:ELEV.z2}}},
HowItWorks:{I:{tabs:[{id,label,content}]},K:SEC.K,F:["tab:active:FX.s_md"],O:{keyboard:"ArrowKeys"}},
LiveDemo:{I:{models:[],prompts:[]},...CARD,K:SEC.K,S:{idle,loading,done},V:["Slider()","Select()"]},
StatsKPI:{I:{stats:[{label,value}]},K:SEC.K,M:{font:TYPE.price},F:["visible:FX.stagger_in"],V:["value.gradient=GRAD.brand"]},
VideoLightbox:{I:{thumb,videoUrl},K:{DOM:"div"},M:{overlay:"#000/.6"},S:{closed,open},F:["play:open()","esc:close()"],E:["empty(videoUrl)->null"]},
ComparisonTable:{I:{cols:[],rows:[]},K:{DOM:"table"},M:{stroke:"surface-2"},F:["row:hover:bg=accent_tint"],O:{sticky_header:true}},
Integrations:{I:{logos:[{name,src,href}]},...GRIDSEC,M:{card:{bg:GLASS.bg}},F:["hover:FX.s_sm"]},
SecurityCompliance:{I:{badges:[],copy},...CARD,K:SEC.K,F:["badge:hover:FX.s_sm"]},
Pricing:{I:{tiers:[{name,price,features[]}]} ,K:SEC.K,M:{card:{r:RADIUS.md,shadow:ELEV.z2}},F:["hover:FX.s_sm"],A11Y:{aria_role:"radiogroup"}},
Testimonials:{I:{items:[{quote,author}]},...CARD,K:SEC.K,S:{playing,paused},F:["autoplay:playing","hover:paused"],O:{autoplay_ms:6000}},
FAQ:{I:{qa:[{q,a}]},K:SEC.K,M:{r:RADIUS.md},F:["item:toggle"],A11Y:{accordion:true}},
CTA:{I:{label,cta},K:{DOM:"aside",style:{position:"sticky",bottom:12}},M:{py:16,bg:GRAD.brand,fg:"white"}},
Newsletter:{I:{action},K:{DOM:"form"},M:{bg:GLASS.bg},S:{idle,submitted},F:["submit:submitted"]},
BlogTeasers:{I:{posts:[]},...GRIDSEC,F:["card:hover:FX.s_sm"],O:{cap:3}},
Footer:{I:{cols:[],legal:{}},K:{DOM:"footer"},M:{py:48,bg:"surface-1"},V:["social_links","locale","theme"]},
CookieConsent:{I:{policyHref},K:{DOM:"dialog"},M:{bg:GLASS.bg},S:{closed,open},F:["accept:closed"]},
ProgressBackToTop:{I:{},K:{DOM:"div"},S:{hidden,visible},F:["click:scrollTop"],O:{threshold:480}},
LocaleSwitcher:{I:{locales:["en"]},K:{DOM:"button"},F:["click:cycle()"]},
ThemeSwitcher:{I:{themes:TH},K:{DOM:"button"},F:["click:cycle()"]},
ChangelogTicker:{I:{entries:[]},K:SEC.K,M:{fg:"muted"},S:{playing,paused},V:["InlineMarquee.playing"]}
}

// ✔: quality
Q:{
perf:["React.memo on static","content-visibility:auto","will-change where animates"],
a11y:["trap focus in dialogs","skip link","AA>=4.5 all text"],
seo:["title<=60c","desc<=160c","OG/Twitter cards","Organization+Product JSON-LD","lazy media"]
}

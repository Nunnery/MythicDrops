/*! For license information please see 9033dad2.15c4a672.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var o=t(1),r=t(9),a=(t(0),t(168)),i=t(173),s=t(172),l=t(174),c={id:"socketing_yml",title:"socketing.yml"},m={id:"socketing_yml",title:"socketing.yml",description:"import Tabs from '@theme/Tabs';",source:"@site/../docs/socketing_yml.md",permalink:"/MythicDrops/docs/socketing_yml",sidebar:"docs",previous:{title:"socketGems.yml",permalink:"/MythicDrops/docs/socketGems_yml"},next:{title:"tier.yml",permalink:"/MythicDrops/docs/tier_yml"}},u=[{value:"Configuration",id:"configuration",children:[]}],f={rightToc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\nsocketing.yml with inline explanations of what each configuration option does."),Object(a.b)(i.a,{defaultValue:"5.3.0",values:[{label:"5.3.0 (MD 6.1.x)",value:"5.3.0"},{label:"5.1.0 (MD 6.0.x)",value:"5.1.0"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"5.3.0",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.3.0\noptions:\n  ## Should gems be prevented from being used in crafting? true is a recommended default.\n  prevent-crafting-with-gems: true\n  ## Should gems be prevented from adding prefixes/suffixes if an item already has one?\n  prevent-multiple-name-changes-from-sockets: false\n  ## When applying ON_HIT/ON_HIT_AND_WHEN_HIT gems, use the attacker\'s items in their hands?\n  use-attacker-item-in-hand: true\n  ## When applying ON_HIT/ON_HIT_AND_WHEN_HIT gems, use the attacker\'s equipped armor?\n  use-attacker-armor-equipped: false\n  ## When applying WHEN_HIT/ON_HIT_AND_WHEN_HIT gems, use the defender\'s items in their hands?\n  use-defender-item-in-hand: false\n  ## When applying WHEN_HIT/ON_HIT_AND_WHEN_HIT gems, use the defender\'s equipped armor?\n  use-defender-armor-equipped: true\n  ## Materials that can be used as socket gems.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  socket-gem-material-ids:\n    - DIAMOND\n    - EMERALD\n    - NETHER_STAR\n  ## Default color for socket gem names when applied to items.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html\n  default-socket-name-color-on-items: GOLD\n  ## Should socket gem names on items attempt to use the display color\n  ## from a tier before falling back to default-socket-name-color-on-items?\n  use-tier-color-for-socket-name: true\n  ## Sets the number of seconds between AURA gem refreshes. This is intentionally set\n  ## high as aura gems can be very computationally expensive due to distance checking.\n  aura-gem-refresh-in-seconds: 30\nitems:\n  socketed-item:\n    ## Text to display for an open socket.\n    ## %tiercolor% will use the display color of the tier of the item\n    ## if available and default-socket-name-color-on-items if not.\n    socket: "%tiercolor%(Socket)"\n    ## Text to add to an item with an open socket.\n    lore:\n      - "&7Find a &6Socket Gem&7 to fill a &F%tiercolor%(Socket)&7"\n  socket-gem:\n    ## Should socket gems glow?\n    glow: false\n    ## Display name of a socket gem.\n    name: "&6Socket Gem - %socketgem%"\n    ## Lore/description of a socket gem.\n    ## Available placeholders:\n    ## - %sockettypelore% - combination of all-of, any-of, none-of item group lore\n    ## - %socketfamilylore% - shows gem family and level\n    ## - %socketgemlore% - lore from the socket gem\'s configuration\n    lore:\n      - "%sockettypelore%"\n      - "%socketfamilylore%"\n      - ""\n      - "&7Right-click while holding this gem"\n      - "&7over another item in"\n      - "&7your inventory to socket it!"\n      - ""\n      - "%socketgemlore%"\n    ## Customize %socketfamilylore%\n    family-lore:\n      - "&7Family: &F%family% &7(&F%level%&7)"\n    ## Customize prefix of %sockettypelore%\n    socket-type-lore:\n      - "&7Type(s): &F%type%"\n    ## Customize second part of %sockettypelore%\n    any-of-socket-type-lore:\n      - "  &7Requires One Of: &F%type%"\n    ## Customize first part of %sockettypelore%\n    all-of-socket-type-lore:\n      - "  &7Requires All: &F%type%"\n    ## Customize third part of %sockettypelore%\n    none-of-socket-type-lore:\n      - "  &7Requires None: &F%type%"\n  socket-gem-combiner:\n    ## Name displayed in socket gem combiner GUI\n    name: "&4Socket Gem Combiner"\n    ## Item to show in non-clickable spots in socket gem combiner GUI\n    buffer:\n      name: "&aClick a &6Socket Gem &ato begin!"\n      material: "IRON_BARS"\n      lore: []\n    ## Item to show when socket gems are able to be combined in GUI\n    click-to-combine:\n      name: "&E&LClick to combine!"\n      material: "NETHER_STAR"\n      lore: []\n    ## Item to show when socket gems are not able to be combined in GUI\n    ineligible-to-combine:\n      name: "&C&LIneligible to combine!"\n      material: "BARRIER"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem family\n      same-family-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same family"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem level\n      same-level-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same level"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem family and level\n      same-family-and-level-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same family and level"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being able\n      ## to find a gem based on the gems available.\n      no-gem-found-lore:\n        - "&7Unable to find a gem for that"\n        - "&7combination of gems!"\ncombining:\n  ## Do gems being combined require the same gem family?\n  require-same-family: false\n  ## Do gems being combined require the same gem level?\n  require-same-level: false\n')),Object(a.b)("img",{alt:"Example of Gem Group Combinations",src:Object(l.a)("img/allofanyofnoneof.png")}),";"),Object(a.b)(s.a,{value:"5.1.0",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 5.1.0\noptions:\n  ## Should gems be prevented from being used in crafting? true is a recommended default.\n  prevent-crafting-with-gems: true\n  ## Should gems be prevented from adding prefixes/suffixes if an item already has one?\n  prevent-multiple-name-changes-from-sockets: false\n  ## When applying ON_HIT/ON_HIT_AND_WHEN_HIT gems, use the attacker\'s items in their hands?\n  use-attacker-item-in-hand: true\n  ## When applying ON_HIT/ON_HIT_AND_WHEN_HIT gems, use the attacker\'s equipped armor?\n  use-attacker-armor-equipped: false\n  ## When applying WHEN_HIT/ON_HIT_AND_WHEN_HIT gems, use the defender\'s items in their hands?\n  use-defender-item-in-hand: false\n  ## When applying WHEN_HIT/ON_HIT_AND_WHEN_HIT gems, use the defender\'s equipped armor?\n  use-defender-armor-equipped: true\n  ## Materials that can be used as socket gems.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html\n  socket-gem-material-ids:\n    - DIAMOND\n    - EMERALD\n    - NETHER_STAR\n  ## Default color for socket gem names when applied to items.\n  ## https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html\n  default-socket-name-color-on-items: GOLD\n  ## Should socket gem names on items attempt to use the display color\n  ## from a tier before falling back to default-socket-name-color-on-items?\n  use-tier-color-for-socket-name: true\nitems:\n  socketed-item:\n    ## Text to display for an open socket.\n    ## %tiercolor% will use the display color of the tier of the item\n    ## if available and default-socket-name-color-on-items if not.\n    socket: "%tiercolor%(Socket)"\n    ## Text to add to an item with an open socket.\n    lore:\n      - "&7Find a &6Socket Gem&7 to fill a &F%tiercolor%(Socket)&7"\n  socket-gem:\n    ## Display name of a socket gem.\n    name: "&6Socket Gem - %socketgem%"\n    ## Lore/description of a socket gem.\n    ## Available placeholders:\n    ## - %sockettypelore% - combination of all-of, any-of, none-of item group lore\n    ## - %socketfamilylore% - shows gem family and level\n    ## - %socketgemlore% - lore from the socket gem\'s configuration\n    lore:\n      - "%sockettypelore%"\n      - "%socketfamilylore%"\n      - ""\n      - "&7Right-click while holding this gem"\n      - "&7over another item in"\n      - "&7your inventory to socket it!"\n      - ""\n      - "%socketgemlore%"\n    ## Customize %socketfamilylore%\n    family-lore:\n      - "&7Family: &F%family% &7(&F%level%&7)"\n    ## Customize prefix of %sockettypelore%\n    socket-type-lore:\n      - "&7Type(s): &F%type%"\n    ## Customize second part of %sockettypelore%\n    any-of-socket-type-lore:\n      - "  &7Requires One Of: &F%type%"\n    ## Customize first part of %sockettypelore%\n    all-of-socket-type-lore:\n      - "  &7Requires All: &F%type%"\n    ## Customize third part of %sockettypelore%\n    none-of-socket-type-lore:\n      - "  &7Requires None: &F%type%"\n  socket-gem-combiner:\n    ## Name displayed in socket gem combiner GUI\n    name: "&4Socket Gem Combiner"\n    ## Item to show in non-clickable spots in socket gem combiner GUI\n    buffer:\n      name: "&aClick a &6Socket Gem &ato begin!"\n      material: "IRON_BARS"\n      lore: []\n    ## Item to show when socket gems are able to be combined in GUI\n    click-to-combine:\n      name: "&E&LClick to combine!"\n      material: "NETHER_STAR"\n      lore: []\n    ## Item to show when socket gems are not able to be combined in GUI\n    ineligible-to-combine:\n      name: "&C&LIneligible to combine!"\n      material: "BARRIER"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem family\n      same-family-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same family"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem level\n      same-level-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same level"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being in\n      ## same socket gem family and level\n      same-family-and-level-lore:\n        - "&7You need to have four &6Socket Gems"\n        - "&7from the same family and level"\n        - "&7in order to combine them!"\n      ## Message to show when unable to be combined due to not being able\n      ## to find a gem based on the gems available.\n      no-gem-found-lore:\n        - "&7Unable to find a gem for that"\n        - "&7combination of gems!"\ncombining:\n  ## Do gems being combined require the same gem family?\n  require-same-family: false\n  ## Do gems being combined require the same gem level?\n  require-same-level: false\n')),Object(a.b)("img",{alt:"Example of Gem Group Combinations",src:Object(l.a)("img/allofanyofnoneof.png")}),";")))}p.isMDXComponent=!0},168:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),m=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},u=function(e){var n=m(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(t),p=o,d=u["".concat(i,".").concat(p)]||u[p]||f[p]||a;return t?r.a.createElement(d,s({ref:n},c,{components:t})):r.a.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},169:function(e,n,t){var o;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(n,[]))||(e.exports=o)}()},170:function(e,n,t){"use strict";var o=t(0),r=t(52);n.a=function(){return Object(o.useContext)(r.a)}},171:function(e,n,t){"use strict";var o=t(0),r=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});n.a=r},172:function(e,n,t){"use strict";var o=t(0),r=t.n(o);n.a=function(e){return r.a.createElement("div",null,e.children)}},173:function(e,n,t){"use strict";t(24),t(19),t(20);var o=t(0),r=t.n(o),a=t(171);var i=function(){return Object(o.useContext)(a.a)},s=t(169),l=t.n(s),c=t(131),m=t.n(c),u=37,f=39;n.a=function(e){var n=e.block,t=e.children,a=e.defaultValue,s=e.values,c=e.groupId,p=i(),d=p.tabGroupChoices,b=p.setTabGroupChoices,g=Object(o.useState)(a),h=g[0],y=g[1];if(null!=c){var k=d[c];null!=k&&k!==h&&y(k)}var v=function(e){y(e),null!=c&&b(c,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":n})},s.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===n,className:l()("tab-item",m.a.tabItem,{"tab-item--active":h===n}),key:n,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,n,t){switch(t.keyCode){case f:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case u:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(O,e.target,e)},onFocus:function(){return v(n)},onClick:function(){return v(n)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(t).filter((function(e){return e.props.value===h}))[0]))}},174:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));t(175);var o=t(170);function r(e){var n=(Object(o.a)().siteConfig||{}).baseUrl,t=void 0===n?"/":n;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?t+e.slice(1):t+e}},175:function(e,n,t){"use strict";var o=t(12),r=t(25),a=t(176),i="".startsWith;o(o.P+o.F*t(177)("startsWith"),"String",{startsWith:function(e){var n=a(this,e,"startsWith"),t=r(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),o=String(e);return i?i.call(n,o,t):n.slice(t,t+o.length)===o}})},176:function(e,n,t){var o=t(75),r=t(26);e.exports=function(e,n,t){if(o(n))throw TypeError("String#"+t+" doesn't accept regex!");return String(r(e))}},177:function(e,n,t){var o=t(2)("match");e.exports=function(e){var n=/./;try{"/./"[e](n)}catch(t){try{return n[o]=!1,!"/./"[e](n)}catch(r){}}return!0}}}]);
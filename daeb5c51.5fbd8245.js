(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,t,n){"use strict";var o=n(0),a=n(102);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},102:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},103:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(101),s=n(99),r=n(55),l=n.n(r),m=37,c=39;t.a=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,h=e.values,d=e.groupId,u=e.className,p=Object(i.a)(),f=p.tabGroupChoices,b=p.setTabGroupChoices,w=Object(o.useState)(r),y=w[0],g=w[1],v=o.Children.toArray(e.children);if(null!=d){var k=f[d];null!=k&&k!==y&&h.some((function(e){return e.value===k}))&&g(k)}var T=function(e){g(e),null!=d&&b(d,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},h.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return T(t)},onClick:function(){T(t)}},n)}))),t?Object(o.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},104:function(e,t,n){"use strict";var o=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),i=(n(0),n(98)),s=n(103),r=n(104),l={id:"config_yml",title:"config.yml"},m={unversionedId:"config_yml",id:"config_yml",isDocsHomePage:!1,title:"config.yml",description:"Configuration",source:"@site/../docs/config_yml.mdx",slug:"/config_yml",permalink:"/MythicDrops/docs/config_yml",version:"current",sidebar:"docs",previous:{title:"WorldGuard Support",permalink:"/MythicDrops/docs/worldguard-support"},next:{title:"creatureSpawning.yml",permalink:"/MythicDrops/docs/creatureSpawning_yml"}},c=[{value:"Configuration",id:"configuration",children:[]}],h={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"MythicDrops has a lot of configuration options. Below is the contents of the\nconfig.yml with inline explanations of what each configuration option does."),Object(i.b)(s.a,{defaultValue:"7.8.0",values:[{label:"7.8.0 (MD 7.0.x)",value:"7.8.0"},{label:"7.7.0 (MD 6.3.x)",value:"7.7.0"},{label:"7.4.0 (MD 6.2.x)",value:"7.4.0"},{label:"7.3.0 (MD 6.1.x)",value:"7.3.0"},{label:"7.1.0 (MD 6.0.x)",value:"7.1.0"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"7.8.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 7.8.0\noptions:\n  ## Should monsters who receive drops be given\n  ## random names? Pulls from the resources/mobnames\n  ## folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-mobs-names: false\n  ## Should mobs that are given names get names that are\n  ## colored to match the color of the tiered item that they\n  ## received?\n  give-mobs-colored-names: false\n  ## Should all monsters be given random names? This includes\n  ## animals like cows and sheep. Pulls from the\n  ## resources/mobnames folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-all-mobs-names: false\n  ## Should mobs be given the equipment when they spawn or\n  ## should the items only be dropped on death? This defaults\n  ## to true so that players can identify mobs that will drop\n  ## sweet loot.\n  display-mob-equipment: true\n  ## Should mobs be able to pick up equipment that gets dropped\n  ## by a player? This defaults to false as if a player drops\n  ## a piece of loot with a low drop rate and a mob picks it\n  ## up, the mob might not drop the item when it dies. The laws\n  ## of item dropping chance still apply.\n  can-mobs-pick-up-equipment: false\n  blank-mob-spawn:\n    ## Should mobs have any pre-existing equipment removed when\n    ## they spawn? This defaults to false as Minecraft now\n    ## occasionally will spawn monsters with helmets, chestplates,\n    ## leggings, boots, or weapons.\n    enabled: false\n    ## When removing pre-existing equipment, should bows be\n    ## removed from skeletons?\n    skeletons-spawn-without-bow: false\n  ## Allow items to be repaired using an Anvil?\n  ## This defaults to false as items can be renamed using the Anvil.\n  allow-items-to-be-repaired-by-anvil: false\n  ## Should leather colors be randomized?\n  randomize-leather-colors: true\n  ## Default socket gem name color on items. For power users, mostly.\n  default-socket-name-color-on-items: GOLD\n  ## If a socket gem gets added to an item AND the item has a tier AND\n  ## this is set to true, then use the tier display color as the color\n  ## of the socket gem name on the item. Otherwise, use the color from\n  ## default-socket-name-color-on-items. For power users, mostly.\n  use-tier-color-for-socket-name: true\n  ## If mobs need to be killed by a player in order for their items to\n  ## drop. This is true by default as it helps nullify mob traps. If\n  ## you want mob traps to work, set this to false. This only works with\n  ## display-mob-equipment set to false.\n  require-player-kill-for-drops: true\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus enchantments with the same enchantment. This will lead to\n  ## scenarios where you may have low numbers of enchantments on items.\n  only-roll-bonus-enchantments-once: false\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus attributes with the same attribute. This will lead to\n  ## scenarios where you may have low numbers of attributes on items.\n  only-roll-bonus-attributes-once: false\n  ## Allow items to have their repair costs removed by a grindstone?\n  ## This only works for Minecraft 1.14+. Set this to false if you\n  ## don\'t want repair costs removed, as that will allow players to\n  ## modify their MD items.\n  allow-items-to-have-repair-cost-removed-by-grindstone: false\n  ## Allow diamond MD items to be upgrade to Netherite?\n  ## This only works for Minecraft 1.16+.\n  allow-netherite-upgrade: true\n  ## Disable checks for items using the legacy chat color and item similarity checks?\n  ## This primarily has impacts on dropping items, configuration, socketing, and anvils.\n  ## It is much more performant.\n  ## This only works for Minecraft 1.16+.\n  disable-legacy-item-checks: true\nmultiworld:\n  ## Include any worlds where you want to have MythicDrops\n  ## create drops here.\n  ## Example:\n  ##\n  ## enabled-worlds:\n  ## - world\n  ## - world2\n  ## - world3\n  enabled-worlds:\n    - world\n## All entries in this section have a maximum value of\n## 1.0 (100%) and a minimum value of 0.0 (0%).\ndrops:\n  ## This represents the drop strategy used to determine drops from the plugin.\n  ## Can include strategies from other plugins as well.\n  ##\n  ## Currently provided strategies by MythicDrops:\n  ## - single (one drop per mob at most)\n  ## - multiple (one drop per mob per type of drop at most)\n  strategy: single\n  ## This is who will receive a broadcast when an item is found.\n  ##\n  ## WORLD - Players in the same world.\n  ## SERVER - All players on the server.\n  ## PLAYER - Only the player finding the item.\n  broadcast-target: WORLD\n  ## This is the chance for a mob to get items at all.\n  item-chance: 1.0\n  ## This is the chance for a mob to spawn with a tiered item.\n  tiered-item-chance: 0.25\n  ## If a mob does not receive an item with a tier,\n  ## this is the chance for a mob to spawn with a\n  ## custom item.\n  custom-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## or a custom item, this is the chance for a mob\n  ## to spawn with a socket gem.\n  socket-gem-chance: 0.2\n  ## If a mob does not receive an item with a tier\n  ## a custom item, or a socket gem, this is the chance for a mob\n  ## to spawn with an unidentified item.\n  unidentified-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, or an unidentified item,\n  ## this is the chance for a mob to spawn with an identity tome.\n  identity-tome-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, an unidentified item,\n  ## or an identity tome, this is the chance for a mob to spawn\n  ## with a socket extender.\n  socket-extender-chance: 0.1\ncomponents:\n  ## Should creatures be able to spawn with items?\n  creature-spawning-enabled: true\n  ## Should MythicDrops enable its repairing feature\n  ## and disable the vanilla Minecraft repairing\n  ## feature (recommended)?\n  repairing-enabled: true\n  ## Should MythicDrops spawn items with empty sockets\n  ## and socket gems?\n  socketing-enabled: true\n  ## Should MythicDrops enable its identifying feature\n  ## and spawn unidentified items and identity tomes?\n  identifying-enabled: true\n  ## Should MythicDrops enable distance-from-spawn\n  ## based drops, i.e., drops that can only spawn within\n  ## certain distances from the spawn of a world?\n  distance-zones-enabled: false\ndisplay:\n  ## How should the name of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  item-display-name-format: "%generalprefix% %generalsuffix%"\n  ## How should the lore of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  tooltip-format:\n    - "&7Type: %mythicmaterial%"\n    - "&7Tier:%tiercolor% %tiername%"\n    - "%baselore%"\n    - "%bonuslore%"\n    - "%socketlore%"\n    - "%relationlore%"\n'))),Object(i.b)(r.a,{value:"7.7.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 7.7.0\noptions:\n  ## Should monsters who receive drops be given\n  ## random names? Pulls from the resources/mobnames\n  ## folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-mobs-names: false\n  ## Should mobs that are given names get names that are\n  ## colored to match the color of the tiered item that they\n  ## received?\n  give-mobs-colored-names: false\n  ## Should all monsters be given random names? This includes\n  ## animals like cows and sheep. Pulls from the\n  ## resources/mobnames folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-all-mobs-names: false\n  ## Should mobs be given the equipment when they spawn or\n  ## should the items only be dropped on death? This defaults\n  ## to true so that players can identify mobs that will drop\n  ## sweet loot.\n  display-mob-equipment: true\n  ## Should mobs be able to pick up equipment that gets dropped\n  ## by a player? This defaults to false as if a player drops\n  ## a piece of loot with a low drop rate and a mob picks it\n  ## up, the mob might not drop the item when it dies. The laws\n  ## of item dropping chance still apply.\n  can-mobs-pick-up-equipment: false\n  blank-mob-spawn:\n    ## Should mobs have any pre-existing equipment removed when\n    ## they spawn? This defaults to false as Minecraft now\n    ## occasionally will spawn monsters with helmets, chestplates,\n    ## leggings, boots, or weapons.\n    enabled: false\n    ## When removing pre-existing equipment, should bows be\n    ## removed from skeletons?\n    skeletons-spawn-without-bow: false\n  ## Allow items to be repaired using an Anvil?\n  ## This defaults to false as items can be renamed using the Anvil.\n  allow-items-to-be-repaired-by-anvil: false\n  ## Should leather colors be randomized?\n  randomize-leather-colors: true\n  ## Default socket gem name color on items. For power users, mostly.\n  default-socket-name-color-on-items: GOLD\n  ## If a socket gem gets added to an item AND the item has a tier AND\n  ## this is set to true, then use the tier display color as the color\n  ## of the socket gem name on the item. Otherwise, use the color from\n  ## default-socket-name-color-on-items. For power users, mostly.\n  use-tier-color-for-socket-name: true\n  ## If mobs need to be killed by a player in order for their items to\n  ## drop. This is true by default as it helps nullify mob traps. If\n  ## you want mob traps to work, set this to false. This only works with\n  ## display-mob-equipment set to false.\n  require-player-kill-for-drops: true\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus enchantments with the same enchantment. This will lead to\n  ## scenarios where you may have low numbers of enchantments on items.\n  only-roll-bonus-enchantments-once: false\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus attributes with the same attribute. This will lead to\n  ## scenarios where you may have low numbers of attributes on items.\n  only-roll-bonus-attributes-once: false\n  ## Allow items to have their repair costs removed by a grindstone?\n  ## This only works for Minecraft 1.14+. Set this to false if you\n  ## don\'t want repair costs removed, as that will allow players to\n  ## modify their MD items.\n  allow-items-to-have-repair-cost-removed-by-grindstone: false\n  ## Allow diamond MD items to be upgrade to Netherite?\n  ## This only works for Minecraft 1.16+.\n  allow-netherite-upgrade: true\n  ## Disable checks for items using the legacy chat color and item similarity checks?\n  ## This primarily has impacts on dropping items, configuration, socketing, and anvils.\n  ## It is much more performant.\n  ## This only works for Minecraft 1.16+.\n  disable-legacy-item-checks: true\nmultiworld:\n  ## Include any worlds where you want to have MythicDrops\n  ## create drops here.\n  ## Example:\n  ##\n  ## enabled-worlds:\n  ## - world\n  ## - world2\n  ## - world3\n  enabled-worlds:\n    - world\n## All entries in this section have a maximum value of\n## 1.0 (100%) and a minimum value of 0.0 (0%).\ndrops:\n  ## This represents the drop strategy used to determine drops from the plugin.\n  ## Can include strategies from other plugins as well.\n  ##\n  ## Currently provided strategies by MythicDrops:\n  ## - single (one drop per mob at most)\n  ## - multiple (one drop per mob per type of drop at most)\n  strategy: single\n  ## This is the chance for a mob to get items at all.\n  item-chance: 1.0\n  ## This is the chance for a mob to spawn with a tiered item.\n  tiered-item-chance: 0.25\n  ## If a mob does not receive an item with a tier,\n  ## this is the chance for a mob to spawn with a\n  ## custom item.\n  custom-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## or a custom item, this is the chance for a mob\n  ## to spawn with a socket gem.\n  socket-gem-chance: 0.2\n  ## If a mob does not receive an item with a tier\n  ## a custom item, or a socket gem, this is the chance for a mob\n  ## to spawn with an unidentified item.\n  unidentified-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, or an unidentified item,\n  ## this is the chance for a mob to spawn with an identity tome.\n  identity-tome-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, an unidentified item,\n  ## or an identity tome, this is the chance for a mob to spawn\n  ## with a socket extender.\n  socket-extender-chance: 0.1\ncomponents:\n  ## Should creatures be able to spawn with items?\n  creature-spawning-enabled: true\n  ## Should MythicDrops enable its repairing feature\n  ## and disable the vanilla Minecraft repairing\n  ## feature (recommended)?\n  repairing-enabled: true\n  ## Should MythicDrops spawn items with empty sockets\n  ## and socket gems?\n  socketing-enabled: true\n  ## Should MythicDrops enable its identifying feature\n  ## and spawn unidentified items and identity tomes?\n  identifying-enabled: true\n  ## Should MythicDrops enable distance-from-spawn\n  ## based drops, i.e., drops that can only spawn within\n  ## certain distances from the spawn of a world?\n  distance-zones-enabled: false\ndisplay:\n  ## How should the name of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  item-display-name-format: "%generalprefix% %generalsuffix%"\n  ## How should the lore of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  tooltip-format:\n    - "&7Type: %mythicmaterial%"\n    - "&7Tier:%tiercolor% %tiername%"\n    - "%baselore%"\n    - "%bonuslore%"\n    - "%socketlore%"\n    - "%relationlore%"\n'))),Object(i.b)(r.a,{value:"7.4.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 7.4.0\noptions:\n  ## Should monsters who receive drops be given\n  ## random names? Pulls from the resources/mobnames\n  ## folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-mobs-names: false\n  ## Should mobs that are given names get names that are\n  ## colored to match the color of the tiered item that they\n  ## received?\n  give-mobs-colored-names: false\n  ## Should all monsters be given random names? This includes\n  ## animals like cows and sheep. Pulls from the\n  ## resources/mobnames folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-all-mobs-names: false\n  ## Should mobs be given the equipment when they spawn or\n  ## should the items only be dropped on death? This defaults\n  ## to true so that players can identify mobs that will drop\n  ## sweet loot.\n  display-mob-equipment: true\n  ## Should mobs be able to pick up equipment that gets dropped\n  ## by a player? This defaults to false as if a player drops\n  ## a piece of loot with a low drop rate and a mob picks it\n  ## up, the mob might not drop the item when it dies. The laws\n  ## of item dropping chance still apply.\n  can-mobs-pick-up-equipment: false\n  blank-mob-spawn:\n    ## Should mobs have any pre-existing equipment removed when\n    ## they spawn? This defaults to false as Minecraft now\n    ## occasionally will spawn monsters with helmets, chestplates,\n    ## leggings, boots, or weapons.\n    enabled: false\n    ## When removing pre-existing equipment, should bows be\n    ## removed from skeletons?\n    skeletons-spawn-without-bow: false\n  ## Allow items to be repaired using an Anvil?\n  ## This defaults to false as items can be renamed using the Anvil.\n  allow-items-to-be-repaired-by-anvil: false\n  ## Should leather colors be randomized?\n  randomize-leather-colors: true\n  ## Default socket gem name color on items. For power users, mostly.\n  default-socket-name-color-on-items: GOLD\n  ## If a socket gem gets added to an item AND the item has a tier AND\n  ## this is set to true, then use the tier display color as the color\n  ## of the socket gem name on the item. Otherwise, use the color from\n  ## default-socket-name-color-on-items. For power users, mostly.\n  use-tier-color-for-socket-name: true\n  ## If mobs need to be killed by a player in order for their items to\n  ## drop. This is true by default as it helps nullify mob traps. If\n  ## you want mob traps to work, set this to false. This only works with\n  ## display-mob-equipment set to false.\n  require-player-kill-for-drops: true\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus enchantments with the same enchantment. This will lead to\n  ## scenarios where you may have low numbers of enchantments on items.\n  only-roll-bonus-enchantments-once: false\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus attributes with the same attribute. This will lead to\n  ## scenarios where you may have low numbers of attributes on items.\n  only-roll-bonus-attributes-once: false\n  ## Allow items to have their repair costs removed by a grindstone?\n  ## This only works for Minecraft 1.14+. Set this to false if you\n  ## don\'t want repair costs removed, as that will allow players to\n  ## modify their MD items.\n  allow-items-to-have-repair-cost-removed-by-grindstone: false\nmultiworld:\n  ## Include any worlds where you want to have MythicDrops\n  ## create drops here.\n  ## Example:\n  ##\n  ## enabled-worlds:\n  ## - world\n  ## - world2\n  ## - world3\n  enabled-worlds:\n    - world\n## All entries in this section have a maximum value of\n## 1.0 (100%) and a minimum value of 0.0 (0%).\ndrops:\n  ## This is the chance for a mob to get items at all.\n  item-chance: 1.0\n  ## This is the chance for a mob to spawn with a tiered item.\n  tiered-item-chance: 0.25\n  ## If a mob does not receive an item with a tier,\n  ## this is the chance for a mob to spawn with a\n  ## custom item.\n  custom-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## or a custom item, this is the chance for a mob\n  ## to spawn with a socket gem.\n  socket-gem-chance: 0.2\n  ## If a mob does not receive an item with a tier\n  ## a custom item, or a socket gem, this is the chance for a mob\n  ## to spawn with an unidentified item.\n  unidentified-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, or an unidentified item,\n  ## this is the chance for a mob to spawn with an identity tome.\n  identity-tome-chance: 0.1\ncomponents:\n  ## Should creatures be able to spawn with items?\n  creature-spawning-enabled: true\n  ## Should MythicDrops enable its repairing feature\n  ## and disable the vanilla Minecraft repairing\n  ## feature (recommended)?\n  repairing-enabled: true\n  ## Should MythicDrops spawn items with empty sockets\n  ## and socket gems?\n  socketing-enabled: true\n  ## Should MythicDrops enable its identifying feature\n  ## and spawn unidentified items and identity tomes?\n  identifying-enabled: true\n  ## Should MythicDrops enable distance-from-spawn\n  ## based drops, i.e., drops that can only spawn within\n  ## certain distances from the spawn of a world?\n  distance-zones-enabled: false\ndisplay:\n  ## How should the name of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  item-display-name-format: "%generalprefix% %generalsuffix%"\n  ## How should the lore of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  tooltip-format:\n    - "&7Type: %mythicmaterial%"\n    - "&7Tier:%tiercolor% %tiername%"\n    - "%baselore%"\n    - "%bonuslore%"\n    - "%socketlore%"\n    - "%relationlore%"\n'))),Object(i.b)(r.a,{value:"7.3.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 7.3.0\noptions:\n  ## Should monsters who receive drops be given\n  ## random names? Pulls from the resources/mobnames\n  ## folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-mobs-names: false\n  ## Should mobs that are given names get names that are\n  ## colored to match the color of the tiered item that they\n  ## received?\n  give-mobs-colored-names: false\n  ## Should all monsters be given random names? This includes\n  ## animals like cows and sheep. Pulls from the\n  ## resources/mobnames folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-all-mobs-names: false\n  ## Should mobs be given the equipment when they spawn or\n  ## should the items only be dropped on death? This defaults\n  ## to true so that players can identify mobs that will drop\n  ## sweet loot.\n  display-mob-equipment: true\n  ## Should mobs be able to pick up equipment that gets dropped\n  ## by a player? This defaults to false as if a player drops\n  ## a piece of loot with a low drop rate and a mob picks it\n  ## up, the mob might not drop the item when it dies. The laws\n  ## of item dropping chance still apply.\n  can-mobs-pick-up-equipment: false\n  blank-mob-spawn:\n    ## Should mobs have any pre-existing equipment removed when\n    ## they spawn? This defaults to false as Minecraft now\n    ## occasionally will spawn monsters with helmets, chestplates,\n    ## leggings, boots, or weapons.\n    enabled: false\n    ## When removing pre-existing equipment, should bows be\n    ## removed from skeletons?\n    skeletons-spawn-without-bow: false\n  ## Allow items to be repaired using an Anvil?\n  ## This defaults to false as items can be renamed using the Anvil.\n  allow-items-to-be-repaired-by-anvil: false\n  ## Should leather colors be randomized?\n  randomize-leather-colors: true\n  ## Default socket gem name color on items. For power users, mostly.\n  default-socket-name-color-on-items: GOLD\n  ## If a socket gem gets added to an item AND the item has a tier AND\n  ## this is set to true, then use the tier display color as the color\n  ## of the socket gem name on the item. Otherwise, use the color from\n  ## default-socket-name-color-on-items. For power users, mostly.\n  use-tier-color-for-socket-name: true\n  ## If mobs need to be killed by a player in order for their items to\n  ## drop. This is true by default as it helps nullify mob traps. If\n  ## you want mob traps to work, set this to false. This only works with\n  ## display-mob-equipment set to false.\n  require-player-kill-for-drops: true\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus enchantments with the same enchantment. This will lead to\n  ## scenarios where you may have low numbers of enchantments on items.\n  only-roll-bonus-enchantments-once: false\n  ## Set this to true if you do not want to be able to roll multiple\n  ## bonus attributes with the same attribute. This will lead to\n  ## scenarios where you may have low numbers of attributes on items.\n  only-roll-bonus-attributes-once: false\nmultiworld:\n  ## Include any worlds where you want to have MythicDrops\n  ## create drops here.\n  ## Example:\n  ##\n  ## enabled-worlds:\n  ## - world\n  ## - world2\n  ## - world3\n  enabled-worlds:\n    - world\n## All entries in this section have a maximum value of\n## 1.0 (100%) and a minimum value of 0.0 (0%).\ndrops:\n  ## This is the chance for a mob to get items at all.\n  item-chance: 1.0\n  ## This is the chance for a mob to spawn with a tiered item.\n  tiered-item-chance: 0.25\n  ## If a mob does not receive an item with a tier,\n  ## this is the chance for a mob to spawn with a\n  ## custom item.\n  custom-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## or a custom item, this is the chance for a mob\n  ## to spawn with a socket gem.\n  socket-gem-chance: 0.2\n  ## If a mob does not receive an item with a tier\n  ## a custom item, or a socket gem, this is the chance for a mob\n  ## to spawn with an unidentified item.\n  unidentified-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, or an unidentified item,\n  ## this is the chance for a mob to spawn with an identity tome.\n  identity-tome-chance: 0.1\ncomponents:\n  ## Should creatures be able to spawn with items?\n  creature-spawning-enabled: true\n  ## Should MythicDrops enable its repairing feature\n  ## and disable the vanilla Minecraft repairing\n  ## feature (recommended)?\n  repairing-enabled: true\n  ## Should MythicDrops spawn items with empty sockets\n  ## and socket gems?\n  socketing-enabled: true\n  ## Should MythicDrops enable its identifying feature\n  ## and spawn unidentified items and identity tomes?\n  identifying-enabled: true\n  ## Should MythicDrops enable distance-from-spawn\n  ## based drops, i.e., drops that can only spawn within\n  ## certain distances from the spawn of a world?\n  distance-zones-enabled: false\ndisplay:\n  ## How should the name of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  item-display-name-format: "%generalprefix% %generalsuffix%"\n  ## How should the lore of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  tooltip-format:\n    - "&7Type: %mythicmaterial%"\n    - "&7Tier:%tiercolor% %tiername%"\n    - "%baselore%"\n    - "%bonuslore%"\n    - "%socketlore%"\n    - "%relationlore%"\n'))),Object(i.b)(r.a,{value:"7.1.0",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'version: 7.1.0\noptions:\n  ## Should monsters who receive drops be given\n  ## random names? Pulls from the resources/mobnames\n  ## folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-mobs-names: false\n  ## Should mobs that are given names get names that are\n  ## colored to match the color of the tiered item that they\n  ## received?\n  give-mobs-colored-names: false\n  ## Should all monsters be given random names? This includes\n  ## animals like cows and sheep. Pulls from the\n  ## resources/mobnames folder. general.txt applies to all\n  ## monsters, while a creeper.txt will only apply to\n  ## creepers.\n  give-all-mobs-names: false\n  ## Should mobs be given the equipment when they spawn or\n  ## should the items only be dropped on death? This defaults\n  ## to true so that players can identify mobs that will drop\n  ## sweet loot.\n  display-mob-equipment: true\n  ## Should mobs be able to pick up equipment that gets dropped\n  ## by a player? This defaults to false as if a player drops\n  ## a piece of loot with a low drop rate and a mob picks it\n  ## up, the mob might not drop the item when it dies. The laws\n  ## of item dropping chance still apply.\n  can-mobs-pick-up-equipment: false\n  blank-mob-spawn:\n    ## Should mobs have any pre-existing equipment removed when\n    ## they spawn? This defaults to false as Minecraft now\n    ## occasionally will spawn monsters with helmets, chestplates,\n    ## leggings, boots, or weapons.\n    enabled: false\n    ## When removing pre-existing equipment, should bows be\n    ## removed from skeletons?\n    skeletons-spawn-without-bow: false\n  ## Allow items to be repaired using an Anvil?\n  ## This defaults to false as items can be renamed using the Anvil.\n  allow-items-to-be-repaired-by-anvil: false\n  ## Should leather colors be randomized?\n  randomize-leather-colors: true\n  ## Default socket gem name color on items. For power users, mostly.\n  default-socket-name-color-on-items: GOLD\n  ## If a socket gem gets added to an item AND the item has a tier AND\n  ## this is set to true, then use the tier display color as the color\n  ## of the socket gem name on the item. Otherwise, use the color from\n  ## default-socket-name-color-on-items. For power users, mostly.\n  use-tier-color-for-socket-name: true\n  ## If mobs need to be killed by a player in order for their items to\n  ## drop. This is true by default as it helps nullify mob traps. If\n  ## you want mob traps to work, set this to false.\n  require-player-kill-for-drops: true\nmultiworld:\n  ## Include any worlds where you want to have MythicDrops\n  ## create drops here.\n  ## Example:\n  ##\n  ## enabled-worlds:\n  ## - world\n  ## - world2\n  ## - world3\n  enabled-worlds:\n    - world\n## All entries in this section have a maximum value of\n## 1.0 (100%) and a minimum value of 0.0 (0%).\ndrops:\n  ## This is the chance for a mob to get items at all.\n  item-chance: 1.0\n  ## This is the chance for a mob to spawn with a tiered item.\n  tiered-item-chance: 0.25\n  ## If a mob does not receive an item with a tier,\n  ## this is the chance for a mob to spawn with a\n  ## custom item.\n  custom-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## or a custom item, this is the chance for a mob\n  ## to spawn with a socket gem.\n  socket-gem-chance: 0.2\n  ## If a mob does not receive an item with a tier\n  ## a custom item, or a socket gem, this is the chance for a mob\n  ## to spawn with an unidentified item.\n  unidentified-item-chance: 0.1\n  ## If a mob does not receive an item with a tier\n  ## a custom item, a socket gem, or an unidentified item,\n  ## this is the chance for a mob to spawn with an identity tome.\n  identity-tome-chance: 0.1\ncomponents:\n  ## Should creatures be able to spawn with items?\n  creature-spawning-enabled: true\n  ## Should MythicDrops enable its repairing feature\n  ## and disable the vanilla Minecraft repairing\n  ## feature (recommended)?\n  repairing-enabled: true\n  ## Should MythicDrops spawn items with empty sockets\n  ## and socket gems?\n  socketing-enabled: true\n  ## Should MythicDrops enable its identifying feature\n  ## and spawn unidentified items and identity tomes?\n  identifying-enabled: true\n  ## Should MythicDrops enable distance-from-spawn\n  ## based drops, i.e., drops that can only spawn within\n  ## certain distances from the spawn of a world?\n  distance-zones-enabled: false\ndisplay:\n  ## How should the name of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  item-display-name-format: "%generalprefix% %generalsuffix%"\n  ## How should the lore of generated items be formatted?\n  ## Uses variables contained in variables.txt.\n  tooltip-format:\n    - "&7Type: %mythicmaterial%"\n    - "&7Tier:%tiercolor% %tiername%"\n    - "%baselore%"\n    - "%bonuslore%"\n    - "%socketlore%"\n    - "%relationlore%"\n')))))}d.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return p}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),c=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,p=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return n?a.a.createElement(p,r(r({ref:t},m),{},{components:n})):a.a.createElement(p,r({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var m=2;m<i;m++)s[m]=n[m];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(b,i(i({ref:t},s),{},{components:n})):r.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(103)),c={title:"IDE support",sidebar_position:10},i={unversionedId:"ide",id:"ide",isDocsHomePage:!1,title:"IDE support",description:"IDE support for sources managed by the Scala CLI is experimental, and limited to",source:"@site/docs/ide.md",sourceDirName:".",slug:"/ide",permalink:"/scala-cli/docs/ide",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/ide.md",version:"current",sidebarPosition:10,frontMatter:{title:"IDE support",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"REPL",permalink:"/scala-cli/docs/repl"},next:{title:"Scala.JS",permalink:"/scala-cli/docs/scala-js"}},l=[{value:"VSCode",id:"vscode",children:[{value:"Setup",id:"setup",children:[]},{value:"Activating the Scala CLI support",id:"activating-the-scala-cli-support",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"IDE support for sources managed by the Scala CLI is experimental, and limited to\n",Object(o.b)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/editors/vscode"},"Metals from VSCode")," for now."),Object(o.b)("h2",{id:"vscode"},"VSCode"),Object(o.b)("h3",{id:"setup"},"Setup"),Object(o.b)("p",null,"Scala CLI support in Metals / VScode requires a custom version of the Metals VSCode extension.\nUse the following commands to install it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"$ curl -fLo metals-scala-cli.vsix https://github.com/alexarchambault/metals-vscode/raw/scala-cli/metals-1.10.7.vsix\n$ code --install-extension metals-scala-cli.vsix\n")),Object(o.b)("p",null,'Scala CLI support relies on a custom Metals server for now. To enable it in the current project,\nrun the command "Create New Integrated Terminal (in Active Workspace)", and type'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'$ mkdir -p .vscode\n$ cat > .vscode/settings.json << EOF\n{\n  "metals.serverVersion": "com.github.alexarchambault.tmp.metals:metals_2.12:0.10.4+193-06810ef8-SNAPSHOT",\n  "metals.serverProperties": [\n    "-Xmx512m",\n    "-Dmetals.scala-cli.launcher=$(which scala)"\n  ]\n}\nEOF\n')),Object(o.b)("p",null,'A window reload should be needed for this change to be taken into account. If Metals doesn\'t\nsuggest it, run the "Developer: Reload window" command from the command palette.'),Object(o.b)("h3",{id:"activating-the-scala-cli-support"},"Activating the Scala CLI support"),Object(o.b)("p",null,"Scala CLI support needs to be manually activated for specific files. Open an existing ",Object(o.b)("inlineCode",{parentName:"p"},".scala"),"\nor ",Object(o.b)("inlineCode",{parentName:"p"},".sc"),' file,\nor create a new one. Then, with that file opened and focused, run the command\n"Metals: Start Scala CLI server"'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"enjoy"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"go-to-source"),Object(o.b)("li",{parentName:"ul"},"accurate diagnostics"),Object(o.b)("li",{parentName:"ul"},"find usages"),Object(o.b)("li",{parentName:"ul"},"\u2026"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"automatic re-import when adding / removing dependencies"))))}p.isMDXComponent=!0}}]);
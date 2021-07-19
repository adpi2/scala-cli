(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{103:function(e,a,c){"use strict";c.d(a,"a",(function(){return b})),c.d(a,"b",(function(){return j}));var t=c(0),n=c.n(t);function l(e,a,c){return a in e?Object.defineProperty(e,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[a]=c,e}function i(e,a){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),c.push.apply(c,t)}return c}function r(e){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{};a%2?i(Object(c),!0).forEach((function(a){l(e,a,c[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(c,a))}))}return e}function o(e,a){if(null==e)return{};var c,t,n=function(e,a){if(null==e)return{};var c,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)c=l[t],a.indexOf(c)>=0||(n[c]=e[c]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)c=l[t],a.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var s=n.a.createContext({}),p=function(e){var a=n.a.useContext(s),c=a;return e&&(c="function"==typeof e?e(a):r(r({},a),e)),c},b=function(e){var a=p(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var c=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(c),m=t,j=b["".concat(i,".").concat(m)]||b[m]||d[m]||l;return c?n.a.createElement(j,r(r({ref:a},s),{},{components:c})):n.a.createElement(j,r({ref:a},s))}));function j(e,a){var c=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=c.length,i=new Array(l);i[0]=m;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r.mdxType="string"==typeof e?e:t,i[1]=r;for(var s=2;s<l;s++)i[s]=c[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,c)}m.displayName="MDXCreateElement"},90:function(e,a,c){"use strict";c.r(a),c.d(a,"frontMatter",(function(){return i})),c.d(a,"metadata",(function(){return r})),c.d(a,"toc",(function(){return o})),c.d(a,"default",(function(){return p}));var t=c(3),n=c(7),l=(c(0),c(103)),i={title:"Commands",sidebar_position:3},r={unversionedId:"reference/commands",id:"reference/commands",isDocsHomePage:!1,title:"Commands",description:"about",source:"@site/docs/reference/commands.md",sourceDirName:"reference",slug:"/reference/commands",permalink:"/scala-cli/docs/reference/commands",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/reference/commands.md",version:"current",sidebarPosition:3,frontMatter:{title:"Commands",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration file",permalink:"/scala-cli/docs/reference/configuration-file"},next:{title:"Dependency format",permalink:"/scala-cli/docs/reference/dependency"}},o=[{value:"<code>about</code>",id:"about",children:[]},{value:"<code>bsp</code>",id:"bsp",children:[]},{value:"<code>clean</code>",id:"clean",children:[]},{value:"<code>compile</code>",id:"compile",children:[]},{value:"<code>directories</code>",id:"directories",children:[]},{value:"<code>install completions</code>",id:"install-completions",children:[]},{value:"<code>console</code>",id:"console",children:[]},{value:"<code>package</code>",id:"package",children:[]},{value:"<code>run</code>",id:"run",children:[]},{value:"<code>test</code>",id:"test",children:[]},{value:"<code>browse</code>",id:"browse",children:[]},{value:"Hidden commands",id:"hidden-commands",children:[{value:"<code>add-path</code>",id:"add-path",children:[]}]}],s={toc:o};function p(e){var a=e.components,c=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(t.a)({},s,c,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"about"},Object(l.b)("inlineCode",{parentName:"h2"},"about")),Object(l.b)("p",null,"Print details about this application"),Object(l.b)("h2",{id:"bsp"},Object(l.b)("inlineCode",{parentName:"h2"},"bsp")),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(l.b)("h2",{id:"clean"},Object(l.b)("inlineCode",{parentName:"h2"},"clean")),Object(l.b)("p",null,"Clean-up workspace"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging"))),Object(l.b)("h2",{id:"compile"},Object(l.b)("inlineCode",{parentName:"h2"},"compile")),Object(l.b)("p",null,"Compile Scala code"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compile-options"},"compile")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(l.b)("h2",{id:"directories"},Object(l.b)("inlineCode",{parentName:"h2"},"directories")),Object(l.b)("h2",{id:"install-completions"},Object(l.b)("inlineCode",{parentName:"h2"},"install completions")),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#install-completions-options"},"install completions")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging"))),Object(l.b)("h2",{id:"console"},Object(l.b)("inlineCode",{parentName:"h2"},"console")),Object(l.b)("p",null,"Aliases:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"repl"))),Object(l.b)("p",null,"Fire-up a Scala REPL"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#java-options"},"java")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#repl-options"},"repl")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(l.b)("h2",{id:"package"},Object(l.b)("inlineCode",{parentName:"h2"},"package")),Object(l.b)("p",null,"Compile and package Scala code"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#package-options"},"package")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(l.b)("h2",{id:"run"},Object(l.b)("inlineCode",{parentName:"h2"},"run")),Object(l.b)("p",null,"Compile and run Scala code"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#benchmarking-options"},"benchmarking")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#java-options"},"java")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#run-options"},"run")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(l.b)("h2",{id:"test"},Object(l.b)("inlineCode",{parentName:"h2"},"test")),Object(l.b)("p",null,"Compile and test Scala code"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#java-options"},"java")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#test-options"},"test")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(l.b)("h2",{id:"browse"},Object(l.b)("inlineCode",{parentName:"h2"},"browse")),Object(l.b)("p",null,"Aliases:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"metabrowse"))),Object(l.b)("p",null,"Browse Scala code and its dependencies in the browser"),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#metabrowse-options"},"metabrowse")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(l.b)("h2",{id:"hidden-commands"},"Hidden commands"),Object(l.b)("h3",{id:"add-path"},Object(l.b)("inlineCode",{parentName:"h3"},"add-path")),Object(l.b)("p",null,"Accepts options:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#add-path-options"},"add path"))))}p.isMDXComponent=!0}}]);
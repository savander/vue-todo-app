(function(t){function e(e){for(var s,i,r=e[0],u=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],o[i]&&d.push(o[i][0]),o[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},o={app:0},a=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todo-app/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),o=n.n(s);o.a},"1da8":function(t,e,n){"use strict";var s=n("e361"),o=n.n(s);o.a},"464a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"Todo"},[n("strong",[t._v("("+t._s(t.getCompletedTasksAmount)+" tasks completed)")]),n("div",{staticClass:"Todo-list"},[n("transition-group",{attrs:{name:"fade",tag:"ul"}},t._l(t.getTasks,function(e,s){return n("TodoItem",{key:e.id,attrs:{task:e,isEven:t.isEven(s)},on:{toggleTask:t.toggleTaskCompletion,removeTask:t.removeTask}})}),1),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isTaskListEmpty,expression:"isTaskListEmpty"}]},[t._v("\n                Currently, there are no tasks to show.\n            ")])],1),n("form",{staticClass:"Todo-form",on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[n("label",{staticClass:"Todo-form-input",class:{hasValue:t.getTrimmedInput}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),n("span",[t._v("Enter new task...")])]),n("Button",{attrs:{type:"submit"}},[t._v("+")]),n("Button",{on:{click:function(e){e.preventDefault(),t.showCompletedTasks=!t.showCompletedTasks}}},[t._v("\n                Show Completed\n                "),n("font-awesome-icon",{attrs:{icon:t.showCompletedTasks?"check-square":"square"}})],1)],1)])])},a=[],i=(n("7514"),n("0a0d")),r=n.n(i),u=n("f499"),l=n.n(u),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"Todo-item",class:{isEven:t.isEven,isCompleted:t.isCompleted}},[n("div",{staticClass:"Todo-item-task",class:{isCompleted:t.isCompleted}},[t._v("\n        "+t._s(t.task.task)+"\n\n        "),n("span",{staticClass:"Todo-item-date"},[t._v("\n            "+t._s(t.getDateAsUTCString)+"\n        ")])]),n("div",{staticClass:"Todo-item-buttons"},[n("Button",{on:{click:function(e){return t.toggleTaskCompletion(t.task.id)}}},[n("font-awesome-icon",{attrs:{icon:t.isCompleted?"check-square":"square"}})],1),n("Button",{attrs:{danger:""},on:{click:function(e){return t.removeTask(t.task.id)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)])},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn",class:{danger:t.danger},on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)},m=[],f={name:"Button",props:{danger:{type:Boolean,default:!1}}},k=f,h=(n("e969"),n("2877")),v=Object(h["a"])(k,d,m,!1,null,"03c53e1f",null),g=v.exports,T={name:"TodoItem",components:{Button:g},props:{task:{type:Object},isEven:{type:Boolean,required:!0}},methods:{toggleTaskCompletion:function(t){this.$emit("toggleTask",t)},removeTask:function(t){this.$emit("removeTask",t)}},computed:{isCompleted:function(){return this.task.isCompleted},getDateAsUTCString:function(){return new Date(this.task.createdAt).toUTCString()}}},C=T,w=(n("1da8"),Object(h["a"])(C,c,p,!1,null,"e1c36d24",null)),b=w.exports,y={name:"app",components:{TodoItem:b,Button:g},data:function(){return{taskList:[],input:"",showCompletedTasks:!0}},mounted:function(){if(localStorage.getItem("taskList"))try{this.taskList=JSON.parse(localStorage.getItem("taskList"))}catch(t){localStorage.removeItem("taskList")}localStorage.getItem("showCompletedTasks")&&(this.showCompletedTasks="true"===localStorage.getItem("showCompletedTasks"))},watch:{taskList:{handler:function(t){var e=l()(t);localStorage.setItem("taskList",e)},deep:!0},showCompletedTasks:function(t){localStorage.setItem("showCompletedTasks",t)}},methods:{addTask:function(){var t=this.getTrimmedInput;t.length<3||(this.taskList.push({id:Math.round(r()()+Math.random()),createdAt:r()(),isCompleted:!1,task:t}),this.clearInput())},toggleTaskCompletion:function(t){var e=this.taskList.find(function(e){return e.id===t});e.isCompleted=!e.isCompleted},removeTask:function(t){this.taskList=this.taskList.filter(function(e){return e.id!==t})},clearInput:function(){this.input=""},isEven:function(t){return t%2===0}},computed:{getTasks:function(){return this.showCompletedTasks?this.taskList:this.taskList.filter(function(t){return!t.isCompleted})},getCompletedTasksAmount:function(){return this.taskList.filter(function(t){return t.isCompleted}).length},getTrimmedInput:function(){return this.input.trim()},isTaskListEmpty:function(){return 0===this.getTasks.length}}},_=y,L=(n("034f"),Object(h["a"])(_,o,a,!1,null,null,null)),S=L.exports,I=n("ecee"),O=n("c074"),E=n("ad3d");I["c"].add(O["a"],O["b"],O["c"]),s["a"].component("font-awesome-icon",E["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){},e361:function(t,e,n){},e969:function(t,e,n){"use strict";var s=n("464a"),o=n.n(s);o.a}});
//# sourceMappingURL=app.88da0bf3.js.map
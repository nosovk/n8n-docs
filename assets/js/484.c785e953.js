(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1266:function(t,n,e){"use strict";e.r(n);e(10);var o={data:function(){return{items:[]}},beforeMount:function(){var t=this;fetch("https://api.n8n.io/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n\t\t\t\t\tquery GetTriggerNodes{\n\t\t\t\t\t\tnodes(where: {displayName_contains:"Trigger", categories:{name_ncontains: "Core Nodes"}}, sort:"displayName"){\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\tdisplayName\n\t\t\t\t\t\t\ticonData\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t'})}).then((function(t){return t.json()})).then((function(n){t.$data.items=n.data.nodes})).catch((function(t){return console.log(t)}))}},a=e(26),i=Object(a.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"trigger-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#trigger-nodes"}},[this._v("#")]),this._v(" Trigger Nodes")]),this._v(" "),n("p",[this._v("This section contains information about all the trigger nodes in n8n. Each node documentation contains information on the available resources and operations along with an example workflow.")]),this._v(" "),n("NodeCard",{attrs:{items:this.items}})],1)}),[],!1,null,null,null);n.default=i.exports}}]);
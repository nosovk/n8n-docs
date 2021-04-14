(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{1370:function(e,t,i){"use strict";i.r(t);var n=i(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"mautic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mautic"}},[e._v("#")]),e._v(" Mautic")]),e._v(" "),i("p",[e._v("You can use these credentials to authenticate the following nodes with Mautic.")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mautic/"}},[e._v("Mautic")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/MauticTrigger/"}},[e._v("Mautic Trigger")])],1)]),e._v(" "),i("h2",{attrs:{id:"prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),i("p",[e._v("Create an account on a "),i("a",{attrs:{href:"https://www.mautic.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mautic"),i("OutboundLink")],1),e._v(" instance.")]),e._v(" "),i("h2",{attrs:{id:"using-oauth"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),i("ol",[i("li",[e._v("Open your Mautic dashboard.")]),e._v(" "),i("li",[e._v("Click on the gear icon on the top right and select "),i("em",[i("strong",[e._v("API Credentials")])]),e._v(".")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("+ New")])]),e._v(" button on the top right.")]),e._v(" "),i("li",[e._v("Select 'OAuth 2' from the "),i("em",[i("strong",[e._v("Authorization Protocol")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Enter the name of the credentials in the "),i("em",[i("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Copy the 'OAuth Callback URL' provided in the 'Mautic OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Paste it in the "),i("em",[i("strong",[e._v("Redirect URI")])]),e._v(" field on the Mautic credentials page.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Apply")])]),e._v(" button.")]),e._v(" "),i("li",[e._v("Enter the name for your credentials in the "),i("em",[i("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Mautic OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Copy the "),i("em",[i("strong",[e._v("Client ID")])]),e._v(" from the Mautic credentials page.")]),e._v(" "),i("li",[e._v("Paste it in the "),i("em",[i("strong",[e._v("Client ID")])]),e._v(" field in the 'Mautic OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Copy the "),i("em",[i("strong",[e._v("Client Secret")])]),e._v(" from the Mautic credentials page.")]),e._v(" "),i("li",[e._v("Paste it in the "),i("em",[i("strong",[e._v("Client Secret")])]),e._v(" field in the 'Mautic OAuth2 API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Enter the URL of your Mautic instance in the "),i("em",[i("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Click on the circle button in the OAuth section to connect a Mautic account to n8n.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Save")])]),e._v(" button to save your credentials.")])]),e._v(" "),i("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),i("div",{staticClass:"video-container"},[i("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/vEL0wJ2_91E",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),i("h2",{attrs:{id:"using-credentials"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#using-credentials"}},[e._v("#")]),e._v(" Using Credentials")]),e._v(" "),i("ol",[i("li",[e._v("Open your Mautic dashboard.")]),e._v(" "),i("li",[e._v("Click on the gear icon on the top right and select "),i("em",[i("strong",[e._v("Configuration")])]),e._v(".")]),e._v(" "),i("li",[e._v("Select 'API Settings' from the left sidebar.")]),e._v(" "),i("li",[e._v("Select 'Yes' under the "),i("em",[i("strong",[e._v("Enable HTTP basic auth?")])]),e._v(" section.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Apply")])]),e._v(" button.")]),e._v(" "),i("li",[e._v("Enter the name for your credentials in the "),i("em",[i("strong",[e._v("Credentials Name")])]),e._v(" field in the 'Mautic API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Enter the URL of your Mautic instance in the "),i("em",[i("strong",[e._v("URL")])]),e._v(" field in the 'Mautic API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Enter your Mautic username in the "),i("em",[i("strong",[e._v("Username")])]),e._v(" field in the 'Mautic API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Enter your Mautic password in the "),i("em",[i("strong",[e._v("Password")])]),e._v(" field in the 'Mautic API' credentials in n8n.")]),e._v(" "),i("li",[e._v("Click on the "),i("em",[i("strong",[e._v("Create")])]),e._v(" button to create your credentials.")])]),e._v(" "),i("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),i("div",{staticClass:"video-container"},[i("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/077wqv1rPLs",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);
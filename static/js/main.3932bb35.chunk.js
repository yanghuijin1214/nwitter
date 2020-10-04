(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=a(3),u=a(16),i=a(2),s=a(5),m=a.n(s),p=a(10),f=a(18);a(38),a(40),a(51);f.initializeApp({apiKey:"AIzaSyAmRTfgZ8GAE1P9rKOpHDieJePKsf3-N-o",authDomain:"nwitter-f3415.firebaseapp.com",databaseURL:"https://nwitter-f3415.firebaseio.com",projectId:"nwitter-f3415",storageBucket:"nwitter-f3415.appspot.com",messagingSenderId:"467859578166",appId:"1:467859578166:web:7f2488a9a7e9ae69682797"});var d=f,h=f.auth(),E=f.firestore(),b=f.storage(),g=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),i=u[0],s=u[1],f=Object(n.useState)(!0),d=Object(o.a)(f,2),E=d[0],b=d[1],g=Object(n.useState)(""),v=Object(o.a)(g,2),w=v[0],y=v[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)},j=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(i.length<6)){e.next=5;break}y("Password should be at least 6 characters"),e.next=22;break;case 5:if(e.prev=5,!E){e.next=14;break}return e.next=9,h.createUserWithEmailAndPassword(a,i);case 9:e.sent,s(""),c(""),e.next=17;break;case 14:return e.next=16,h.signInWithEmailAndPassword(a,i);case 16:e.sent;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),y(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:i,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"Create Account":"Log In"}),w&&r.a.createElement("span",{className:"authError"},w)),r.a.createElement("span",{onClick:function(){return b((function(e){return!e}))},className:"authSwitch"},E?"Log in":"Create Account"))},v=a(6),w=a(17),y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(n);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(v.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(g,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(v.a,{icon:w.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(v.a,{icon:w.a}))))},O=a(31),j=a(12),N=function(e){var t=e.nweetObj,a=(e.userObj,e.isOwner),c=Date.now(),l=new Date,u=(l.getFullYear(),l.getMonth(),l.getDate()),i=(l.getHours(),parseInt((c-t.createdAt)/6e4)),s=Object(n.useState)(!1),f=Object(o.a)(s,2),d=f[0],h=f[1],g=Object(n.useState)(t.text),w=Object(o.a)(g,2),y=w[0],O=w[1],N=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,E.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,b.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return h((function(e){return!e}))},k=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log(t,y),e.next=4,E.doc("nweets/".concat(t.id)).update({text:y});case 4:h(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},d?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:k,className:"container nweetEdit"},r.a.createElement("input",{value:y,placeholder:"Edit your nweet",onChange:function(e){var t=e.target.value;O(t)},required:!0,autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:x,className:"formBtn cancelBtn"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t.displayName,r.a.createElement("span",{className:"nweet_Me"},a&&" Me"),r.a.createElement("span",{className:"nweet_time"},u-t.Time.date>7?"".concat(t.Time.year," . ").concat(t.Time.month," . ").concat(t.Time.date," ."):u-t.Time.date!==0?"".concat(u-t.Time.date," days"):0!==parseInt(i/60)?"".concat(parseInt(i/60)," hrs"):r.a.createElement(r.a.Fragment,null,0===i?"just now":"".concat(i," mins")))),r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:t.attachmentUrl}),a&&r.a.createElement("div",{className:"nweet__actions"},r.a.createElement("span",{onClick:N},r.a.createElement(v.a,{icon:j.d})),r.a.createElement("span",{onClick:x},r.a.createElement(v.a,{icon:j.a})))))},x=a(53),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),f=s[0],d=s[1],h=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,o,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=12;break}return r=b.ref().child("".concat(t.uid,"/").concat(Object(x.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return o=new Date,console.log(o),i={text:l,createdAt:Date.now(),Time:{year:o.getFullYear(),month:o.getMonth()+1,date:o.getDate(),hour:o.getHours(),minutes:o.getMinutes()},creatorId:t.uid,displayName:t.displayName,attachmentUrl:n},e.next=17,E.collection("nweets").add(i);case 17:u(""),d("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:h,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(v.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},t&&(a.readAsDataURL(t),console.log(t))},style:{opacity:0}}),r.a.createElement("br",null),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,alt:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(v.a,{icon:j.c}))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){E.collection("nweets").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));u(t.reverse())}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(N,{key:e.id,userObj:t,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},S=function(e){var t=e.refreshUser,a=e.userObj,c=Object(n.useState)(a.displayName),l=Object(o.a)(c,2),u=l[0],s=l[1],f=Object(i.f)(),d=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===u){e.next=6;break}return e.next=4,a.updateProfile({displayName:u});case 4:t(),E.collection("nweets").where("creatorId","==",a.uid).get().then((function(e){e.forEach((function(e){return E.collection("nweets").doc(e.id).update({displayName:u}).then((function(){})).catch((function(e){console.error("Error updating document: ",e)}))}))})).catch((function(e){console.log("Error getting documents: ",e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:d,className:"profileForm"},r.a.createElement("input",{type:"text",placeholder:"Display name",value:u,autoFocus:!0,onChange:function(e){var t=e.target.value;s(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),f.push("/")}},"Log Out"))},C=function(e){var t=e.userObj,a=-1!==window.location.href.indexOf("/profile"),c=Object(n.useState)(a),l=Object(o.a)(c,2),i=l[0],s=l[1];return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",style:{marginRight:10},onClick:function(){return s(!1)}},r.a.createElement(v.a,{icon:w.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/profile",onClick:function(){return s(!0)},style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(v.a,{icon:j.e,color:i?"tomato":"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},F=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(u.a,null,a&&n&&r.a.createElement(C,{userObj:n}),r.a.createElement(i.c,null,a&&n?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(I,{userObj:n})),r.a.createElement(i.a,{exact:!0,path:"/profile"},r.a.createElement(S,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(y,null)))))};var A=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(n.useState)(null),p=Object(o.a)(m,2),f=p[0],d=p[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){e?(s(!0),d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(d(null),s(!1)),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(F,{refreshUser:function(){var e=h.currentUser;d({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:i,userObj:f}):"Initializing...",r.a.createElement("footer",{className:"footer"},"\xa9 ",(new Date).getFullYear()," Nwitter"))};a(49);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3932bb35.chunk.js.map
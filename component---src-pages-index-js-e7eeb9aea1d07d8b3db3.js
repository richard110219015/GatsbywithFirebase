(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(205),o=function(){return i.a.createElement(r.Fragment,null,i.a.createElement("h1",null,"Landing"),i.a.createElement("p",null,"The Landing Page is open to everyone, even though the user isn't signed in."))};t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(o,null),i.a.createElement("script",{dangerouslySetInnerHTML:{__html:"\n      <div id=\"fb-root\"></div>\n      <script>\n        window.fbAsyncInit = function() {\n          FB.init({\n            xfbml            : true,\n            version          : 'v4.0'\n          });\n        };\n      \n        (function(d, s, id) {\n        var js, fjs = d.getElementsByTagName(s)[0];\n        if (d.getElementById(id)) return;\n        js = d.createElement(s); js.id = id;\n        js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';\n        fjs.parentNode.insertBefore(js, fjs);\n        }(document, 'script', 'facebook-jssdk'));\n      <\/script>\n      <div class=\"fb-customerchat\"\n        attribution=install_email\n        page_id=\"722716767876424\"\n        theme_color=\"#6699cc\">\n      </div>\n    "}}))}},196:function(e,t,n){"use strict";n(23);var r,i=n(0),a=n.n(i),o=a.a.createContext(null),u=function(e){return function(t){return a.a.createElement(o.Consumer,null,function(n){return a.a.createElement(e,Object.assign({},t,{firebase:n}))})}},s=o,c={apiKey:"AIzaSyCi6P1abcy72QaTwfV7ZQHczpsJo6wOzvw",authDomain:"gatsbyfb-8e6d6.firebaseapp.com",databaseURL:"https://gatsbyfb-8e6d6.firebaseio.com",projectId:"gatsbyfb-8e6d6",storageBucket:"",messagingSenderId:"921327650405",appId:"1:921327650405:web:e247fd630bfd6e9a"},l=function(e){var t=this;this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:{}.GATSBY_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(r){r?t.user(r.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles={}),r=Object.assign({uid:r.uid,email:r.email,emailVerified:r.emailVerified,providerData:r.providerData},n),e(r)}):n()})},this.user=function(e){return t.db.ref("users/"+e)},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/"+e)},this.messages=function(){return t.db.ref("messages")},e.initializeApp(c),this.serverValue=e.database.ServerValue,this.emailAuthProvider=e.auth.EmailAuthProvider,this.auth=e.auth(),this.db=e.database(),this.googleProvider=new e.auth.GoogleAuthProvider,this.facebookProvider=new e.auth.FacebookAuthProvider,this.twitterProvider=new e.auth.TwitterAuthProvider};var f=function(e,t,n){return r||(r=new l(e,t,n)),r};n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u});t.b=f},197:function(e,t,n){"use strict";var r=n(0),i=n.n(r).a.createContext(null);t.a=i},198:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(197),o=n(196);t.a=function(e){var t=function(t){var n,r;function o(e){var n;return(n=t.call(this,e)||this)._initFirebase=!1,n.firebaseInit=function(){n.props.firebase&&!n._initFirebase&&(n._initFirebase=!0,n.listener=n.props.firebase.onAuthUserListener(function(e){localStorage.setItem("authUser",JSON.stringify(e)),n.setState({authUser:e})},function(){localStorage.removeItem("authUser"),n.setState({authUser:null})}))},n.state={authUser:null},n}r=t,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var u=o.prototype;return u.componentDidMount=function(){this.setState({authUser:JSON.parse(localStorage.getItem("authUser"))}),this.firebaseInit()},u.componentDidUpdate=function(){this.firebaseInit()},u.componentWillUnmount=function(){this.listener&&this.listener()},u.render=function(){return i.a.createElement(a.a.Provider,{value:this.state.authUser},i.a.createElement(e,this.props))},o}(i.a.Component);return Object(o.c)(t)}},199:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(66),o=n.n(a);n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return a.navigate});n(201),n(9).default.enqueue,i.a.createContext({})},200:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"f",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return c});var r="/",i="/signup",a="/signin",o="/home",u="/account",s="/pw-forget",c="/admin"},201:function(e,t,n){var r;e.exports=(r=n(204))&&r.default||r},202:function(e,t,n){"use strict";var r=n(197),i=(n(198),n(0)),a=n.n(i),o=n(199),u=n(196),s=n(200);var c=function(e){return function(t){var n=function(n){var i,u;function c(){for(var t,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=n.call.apply(n,[this].concat(i))||this)._initFirebase=!1,t.firebaseInit=function(){t.props.firebase&&!t._initFirebase&&(t._initFirebase=!0,t.listener=t.props.firebase.onAuthUserListener(function(t){e(t)||Object(o.b)(s.f)},function(){return Object(o.b)(s.f)}))},t}u=n,(i=c).prototype=Object.create(u.prototype),i.prototype.constructor=i,i.__proto__=u;var l=c.prototype;return l.componentDidMount=function(){this.firebaseInit()},l.componentDidUpdate=function(){this.firebaseInit()},l.componentWillUnmount=function(){this.listener&&this.listener()},l.render=function(){var n=this;return a.a.createElement(r.a.Consumer,null,function(r){return e(r)?a.a.createElement(t,n.props):null})},c}(a.a.Component);return Object(u.c)(n)}};n(132),n(133);var l=function(e){var t=function(t){var n,i;function o(e){var n;return(n=t.call(this,e)||this).onSendEmailVerification=function(){n.props.firebase.doSendEmailVerification().then(function(){return n.setState({isSent:!0})})},n.state={isSent:!1},n}return i=t,(n=o).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i,o.prototype.render=function(){var t=this;return a.a.createElement(r.a.Consumer,null,function(n){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(n)?a.a.createElement("div",null,t.state.isSent?a.a.createElement("p",null,"E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):a.a.createElement("p",null,"Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),a.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):a.a.createElement(e,t.props)})},o}(a.a.Component);return Object(u.c)(t)};n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l})},203:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="ADMIN"},204:function(e,t,n){"use strict";n.r(t);n(23);var r=n(0),i=n.n(r),a=n(94);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(a.a,Object.assign({location:t,pageResources:n},n.json)):null}},205:function(e,t,n){"use strict";n(38),n(29),n(30),n(13),n(91);var r=n(0),i=n.n(r),a=n(199),o=n(202),u=n(196),s=Object(u.c)(function(e){var t=e.firebase;return i.a.createElement("button",{type:"button",onClick:t?t.doSignOut:function(){}},"Sign Out")}),c=n(200),l=n(203),f=function(e){var t=e.authUser;return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(a.a,{to:c.d},"Landing")),i.a.createElement("li",null,i.a.createElement(a.a,{to:c.c},"Home")),i.a.createElement("li",null,i.a.createElement(a.a,{to:c.a},"Account")),!!t.roles[l.a]&&i.a.createElement("li",null,i.a.createElement(a.a,{to:c.b},"Admin")),i.a.createElement("li",null,i.a.createElement(s,null)))},d=function(){return i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(a.a,{to:c.d},"Landing")),i.a.createElement("li",null,i.a.createElement(a.a,{to:c.f},"Sign In")))},h=function(){return i.a.createElement(o.a.Consumer,null,function(e){return e?i.a.createElement(f,{authUser:e}):i.a.createElement(d,null)})},p=n(198);var m=function(e){var t,r;function a(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={firebase:null},t}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.componentDidMount=function(){var e=this,t=Promise.all([n.e(0),n.e(13)]).then(n.t.bind(null,246,7)),r=Promise.all([n.e(0),n.e(11)]).then(n.bind(null,247)),i=Promise.all([n.e(0),n.e(12)]).then(n.bind(null,248));Promise.all([t,r,i]).then(function(t){var n=Object(u.b)(t[0]);e.setState({firebase:n})})},o.render=function(){return i.a.createElement(u.a.Provider,{value:this.state.firebase},i.a.createElement(b,this.props))},a}(r.Component),b=Object(p.a)(function(e){var t=e.children;return i.a.createElement(r.Fragment,null,i.a.createElement(h,null),i.a.createElement("hr",null),t)});t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-e7eeb9aea1d07d8b3db3.js.map
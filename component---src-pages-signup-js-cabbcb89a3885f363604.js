(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{191:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(205),o=n(209),u=function(){return a.a.createElement(r.Fragment,null,a.a.createElement("h1",null,"SignUp"),a.a.createElement(o.b,null))};t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(u,null))}},196:function(e,t,n){"use strict";n(23);var r,a=n(0),i=n.n(a),o=i.a.createContext(null),u=function(e){return function(t){return i.a.createElement(o.Consumer,null,function(n){return i.a.createElement(e,Object.assign({},t,{firebase:n}))})}},s=o,c={apiKey:"AIzaSyCi6P1abcy72QaTwfV7ZQHczpsJo6wOzvw",authDomain:"gatsbyfb-8e6d6.firebaseapp.com",databaseURL:"https://gatsbyfb-8e6d6.firebaseio.com",projectId:"gatsbyfb-8e6d6",storageBucket:"",messagingSenderId:"921327650405",appId:"1:921327650405:web:e247fd630bfd6e9a"},l=function(e){var t=this;this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:{}.GATSBY_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(r){r?t.user(r.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles={}),r=Object.assign({uid:r.uid,email:r.email,emailVerified:r.emailVerified,providerData:r.providerData},n),e(r)}):n()})},this.user=function(e){return t.db.ref("users/"+e)},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/"+e)},this.messages=function(){return t.db.ref("messages")},e.initializeApp(c),this.serverValue=e.database.ServerValue,this.emailAuthProvider=e.auth.EmailAuthProvider,this.auth=e.auth(),this.db=e.database(),this.googleProvider=new e.auth.GoogleAuthProvider,this.facebookProvider=new e.auth.FacebookAuthProvider,this.twitterProvider=new e.auth.TwitterAuthProvider};var f=function(e,t,n){return r||(r=new l(e,t,n)),r};n.d(t,"a",function(){return s}),n.d(t,"c",function(){return u});t.b=f},197:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(null);t.a=a},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(197),o=n(196);t.a=function(e){var t=function(t){var n,r;function o(e){var n;return(n=t.call(this,e)||this)._initFirebase=!1,n.firebaseInit=function(){n.props.firebase&&!n._initFirebase&&(n._initFirebase=!0,n.listener=n.props.firebase.onAuthUserListener(function(e){localStorage.setItem("authUser",JSON.stringify(e)),n.setState({authUser:e})},function(){localStorage.removeItem("authUser"),n.setState({authUser:null})}))},n.state={authUser:null},n}r=t,(n=o).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var u=o.prototype;return u.componentDidMount=function(){this.setState({authUser:JSON.parse(localStorage.getItem("authUser"))}),this.firebaseInit()},u.componentDidUpdate=function(){this.firebaseInit()},u.componentWillUnmount=function(){this.listener&&this.listener()},u.render=function(){return a.a.createElement(i.a.Provider,{value:this.state.authUser},a.a.createElement(e,this.props))},o}(a.a.Component);return Object(o.c)(t)}},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(66),o=n.n(i);n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return i.navigate});n(201),n(9).default.enqueue,a.a.createContext({})},200:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"g",function(){return a}),n.d(t,"f",function(){return i}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return c});var r="/",a="/signup",i="/signin",o="/home",u="/account",s="/pw-forget",c="/admin"},201:function(e,t,n){var r;e.exports=(r=n(204))&&r.default||r},202:function(e,t,n){"use strict";var r=n(197),a=(n(198),n(0)),i=n.n(a),o=n(199),u=n(196),s=n(200);var c=function(e){return function(t){var n=function(n){var a,u;function c(){for(var t,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))||this)._initFirebase=!1,t.firebaseInit=function(){t.props.firebase&&!t._initFirebase&&(t._initFirebase=!0,t.listener=t.props.firebase.onAuthUserListener(function(t){e(t)||Object(o.b)(s.f)},function(){return Object(o.b)(s.f)}))},t}u=n,(a=c).prototype=Object.create(u.prototype),a.prototype.constructor=a,a.__proto__=u;var l=c.prototype;return l.componentDidMount=function(){this.firebaseInit()},l.componentDidUpdate=function(){this.firebaseInit()},l.componentWillUnmount=function(){this.listener&&this.listener()},l.render=function(){var n=this;return i.a.createElement(r.a.Consumer,null,function(r){return e(r)?i.a.createElement(t,n.props):null})},c}(i.a.Component);return Object(u.c)(n)}};n(132),n(133);var l=function(e){var t=function(t){var n,a;function o(e){var n;return(n=t.call(this,e)||this).onSendEmailVerification=function(){n.props.firebase.doSendEmailVerification().then(function(){return n.setState({isSent:!0})})},n.state={isSent:!1},n}return a=t,(n=o).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a,o.prototype.render=function(){var t=this;return i.a.createElement(r.a.Consumer,null,function(n){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(n)?i.a.createElement("div",null,t.state.isSent?i.a.createElement("p",null,"E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):i.a.createElement("p",null,"Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),i.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):i.a.createElement(e,t.props)})},o}(i.a.Component);return Object(u.c)(t)};n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return l})},203:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="ADMIN"},204:function(e,t,n){"use strict";n.r(t);n(23);var r=n(0),a=n.n(r),i=n(94);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},205:function(e,t,n){"use strict";n(38),n(29),n(30),n(13),n(91);var r=n(0),a=n.n(r),i=n(199),o=n(202),u=n(196),s=Object(u.c)(function(e){var t=e.firebase;return a.a.createElement("button",{type:"button",onClick:t?t.doSignOut:function(){}},"Sign Out")}),c=n(200),l=n(203),f=function(e){var t=e.authUser;return a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.a,{to:c.d},"Landing")),a.a.createElement("li",null,a.a.createElement(i.a,{to:c.c},"Home")),a.a.createElement("li",null,a.a.createElement(i.a,{to:c.a},"Account")),!!t.roles[l.a]&&a.a.createElement("li",null,a.a.createElement(i.a,{to:c.b},"Admin")),a.a.createElement("li",null,a.a.createElement(s,null)))},d=function(){return a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(i.a,{to:c.d},"Landing")),a.a.createElement("li",null,a.a.createElement(i.a,{to:c.f},"Sign In")))},p=function(){return a.a.createElement(o.a.Consumer,null,function(e){return e?a.a.createElement(f,{authUser:e}):a.a.createElement(d,null)})},h=n(198);var m=function(e){var t,r;function i(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={firebase:null},t}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=i.prototype;return o.componentDidMount=function(){var e=this,t=Promise.all([n.e(1),n.e(13)]).then(n.t.bind(null,246,7)),r=Promise.all([n.e(1),n.e(11)]).then(n.bind(null,247)),a=Promise.all([n.e(1),n.e(12)]).then(n.bind(null,248));Promise.all([t,r,a]).then(function(t){var n=Object(u.b)(t[0]);e.setState({firebase:n})})},o.render=function(){return a.a.createElement(u.a.Provider,{value:this.state.firebase},a.a.createElement(b,this.props))},i}(r.Component),b=Object(h.a)(function(e){var t=e.children;return a.a.createElement(r.Fragment,null,a.a.createElement(p,null),a.a.createElement("hr",null),t)});t.a=m},209:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(49),n(23);var r=n(0),a=n.n(r),i=n(199),o=n(196),u=n(200),s=n(203);var c={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},l="auth/email-already-in-use",f="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",d=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).onSubmit=function(e){var t=n.state,r=t.username,a=t.email,o=t.passwordOne,d=t.isAdmin,p={};d&&(p[s.a]=s.a),n.props.firebase.doCreateUserWithEmailAndPassword(a,o).then(function(e){return n.props.firebase.user(e.user.uid).set({username:r,email:a,roles:p})}).then(function(){return n.props.firebase.doSendEmailVerification()}).then(function(){n.setState(Object.assign({},c)),Object(i.b)(u.c)}).catch(function(e){e.code===l&&(e.message=f),n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){var t;n.setState(((t={})[e.target.name]=e.target.value,t))},n.onChangeCheckbox=function(e){var t;n.setState(((t={})[e.target.name]=e.target.checked,t))},n.state=Object.assign({},c),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.state,t=e.username,n=e.email,r=e.passwordOne,i=e.passwordTwo,o=e.isAdmin,u=e.error,s=r!==i||""===r||""===n||""===t;return a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),a.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),a.a.createElement("input",{name:"passwordOne",value:r,onChange:this.onChange,type:"password",placeholder:"Password"}),a.a.createElement("input",{name:"passwordTwo",value:i,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),a.a.createElement("label",null,"Admin:",a.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:o,onChange:this.onChangeCheckbox})),a.a.createElement("button",{disabled:s,type:"submit"},"Sign Up"),u&&a.a.createElement("p",null,u.message))},r}(r.Component),p=function(){return a.a.createElement("p",null,"Don't have an account? ",a.a.createElement(i.a,{to:u.g},"Sign Up"))};t.b=Object(o.c)(d)}}]);
//# sourceMappingURL=component---src-pages-signup-js-cabbcb89a3885f363604.js.map
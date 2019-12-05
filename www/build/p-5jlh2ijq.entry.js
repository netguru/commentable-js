import{h as t,r as e,H as n,g as s}from"./p-ca8d1616.js";const i=(()=>{let e=new Map,n={apiUrl:null,currentUser:{id:null,auth_token:null,email:null,name:null,picture_url:null},comments:[]};const s=(t,e)=>{Array.isArray(t)?[...t].forEach(t=>{e[t]=n[t]}):e[t]=Object.assign({},n)},i=(t,n)=>(e.has(t)||(e.set(t,n),s(n,t)),()=>{e.has(t)&&e.delete(t)});return{Provider:({state:t},i)=>(n=t,e.forEach(s),i),Consumer:(e,n)=>((e,n)=>t("context-consumer",{subscribe:e,renderer:n}))(i,n[0]),injectProps:(t,n)=>{const s=t.prototype,r=s.connectedCallback,a=s.disconnectedCallback;s.connectedCallback=function(){if(i(this,n),r)return r.call(this)},s.disconnectedCallback=function(){e.delete(this),a&&a.call(this)}}}})(),r={fetch:async(t,e)=>(await fetch(t,Object.assign(Object.assign({},e),{headers:{"Content-Type":"application/json"}}))).json(),auth(t,e){if(e)return this.fetch(`${t}/auth`,{method:"post",body:JSON.stringify({id_token:e})})},fetchComments(t,e,n){return this.fetch(`${t}/${(t=>`commentable/${t}/comments/list`)(e)}`,{method:"post",body:JSON.stringify(n)})},addComment(t,e,{authToken:n,message:s,repliesTo:i}){return this.fetch(`${t}/${(t=>`commentable/${t}/comments/add`)(e)}`,{method:"post",body:JSON.stringify({auth_token:n,body:s,replies_to:i})})},addReaction(t,e,{authToken:n,reactionType:s,commentId:i}){return this.fetch(`${t}/${(t=>`commentable/${t}/reactions/add`)(e)}`,{method:"post",body:JSON.stringify({auth_token:n,reaction_type:s,comment_id:i})})},deleteReaction(t,e,{authToken:n,reactionType:s,commentId:i}){return this.fetch(`${t}/${(t=>`commentable/${t}/reactions/delete`)(e)}`,{method:"post",body:JSON.stringify({auth_token:n,reaction_type:s,comment_id:i})})}},a=class{constructor(t){e(this,t),this.reactionsExpanded=!1,this.replyComposeVisible=!1}toggleReactionsPanel(){this.reactionsExpanded=!this.reactionsExpanded}isOwnReaction(t){return this.comment.user_reactions.includes(t)}mapReactions(e,n){return e.reactions.map(e=>{const s=this.comment.reactions&&this.comment.reactions[e.type];if(s)return t("ct-button",{small:!0,active:this.isOwnReaction(e.type),onClick:()=>this.toggleReaction(n.apiUrl,n.commentableId,{authToken:n.authToken,reactionType:e.type,commentId:this.comment.id})},e.code," ",s)})}addReaction(t){this.comment.reactions[t]=(this.comment.reactions[t]||0)+1,this.comment.user_reactions.push(t)}removeReaction(t){this.comment.reactions[t]-=1,this.comment.user_reactions=this.comment.user_reactions.filter(e=>e!==t)}async toggleReaction(t,e,{authToken:n,reactionType:s,commentId:i}){if(this.isOwnReaction(s)){try{await r.deleteReaction(t,e,{authToken:n,reactionType:s,commentId:i})}catch(a){}this.removeReaction(s)}else await r.addReaction(t,e,{authToken:n,reactionType:s,commentId:i}),this.addReaction(s),this.toggleReactionsPanel()}toggleReply(){this.replyComposeVisible=!this.replyComposeVisible}render(){return t(i.Consumer,null,({apiUrl:e,commentableId:s,config:i,currentUser:r})=>t(n,null,console.log(this.comment),t("div",{class:"ct-actions__emoji"},this.mapReactions(i,{apiUrl:e,commentableId:s,authToken:r.auth_token}),t("ct-button",{small:!0,onClick:()=>this.toggleReactionsPanel()},"+ Emoji")),this.reactionsExpanded&&t("div",{class:"reactions-panel"},i.reactions.map(n=>t("ct-button",{small:!0,onClick:()=>this.toggleReaction(e,s,{authToken:r.auth_token,reactionType:n.type,commentId:this.comment.id})},n.code))),t("div",{class:"ct-actions__controls"},t("a",{class:"action",onClick:()=>this.toggleReply()},"Reply"),t("span",{class:"separator"},"·"),t("a",{class:"action"},"Share")),this.replyComposeVisible&&t("div",{class:"ct-actions__reply-compose"},t("ct-compose",{comment:this.comment}))))}static get style(){return":host{display:block}.ct-actions__controls,:host{margin-top:1rem}.ct-actions__controls .action,.ct-actions__controls .separator{margin-right:.5rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ct-actions__controls .action{cursor:pointer}.ct-actions__emoji{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ct-actions__emoji ct-button,.reactions-panel ct-button{margin-right:.5rem}"}};function o(t,e){return t(e={exports:{}},e.exports),e.exports}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var c=o((function(t){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var e={}.hasOwnProperty;function n(){for(var t=[],s=0;s<arguments.length;s++){var i=arguments[s];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)&&i.length){var a=n.apply(null,i);a&&t.push(a)}else if("object"===r)for(var o in i)e.call(i,o)&&i[o]&&t.push(o)}}return t.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n}()}));const h=class{constructor(t){e(this,t),this.nested=!1}render(){return t("div",{class:c("ct-comment__avatar",{"ct-comment__avatar--nested":this.nested})},t("img",this.user?{src:this.user.picture_url,alt:`${this.user.name}'s Avatar`}:{src:s("./assets/fallback.jpg"),alt:"No avatar"}))}static get assetsDirs(){return["assets"]}static get style(){return":host{width:3.5rem;height:3.5rem}:host img{width:100%;height:100%;border-radius:50%}.ct-comment__avatar--nested{width:2.5rem;height:2.5rem}"}},u=class{constructor(t){e(this,t),this.small=!1,this.active=!1}render(){return t("div",{class:c("ct-button",{"ct-button--small":this.small,"ct-button--active":this.active})},t("slot",null))}static get style(){return".ct-button{display:-ms-inline-flexbox;display:inline-flex;padding:1rem 1.75rem;background-color:#0d2031;margin-top:1rem;color:#00d664;font-size:.875rem;cursor:pointer;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:.25rem}.ct-button--small{padding:.375rem .5rem;color:#ccc;min-height:1.5rem}.ct-button--active{background-color:#0e2f41;border:1px solid #133c54}"}};var l=o((function(t){t.exports=function(){var t="millisecond",e="second",n="minute",s="hour",i="day",r="week",a="month",o="quarter",c="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},d={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(s,2,"0")+":"+l(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),s=t.clone().add(n,a),i=e-s<0,r=t.clone().add(n+(i?-1:1),a);return Number(-(n+(e-s)/(i?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:r,d:i,h:s,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",v={};v[f]=m;var y=function(t){return t instanceof g},p=function(t,e,n){var s;if(!t)return f;if("string"==typeof t)v[t]&&(s=t),e&&(v[t]=e,s=t);else{var i=t.name;v[i]=t,s=i}return n||(f=s),s},_=function(t,e,n){if(y(t))return t.clone();var s=e?"string"==typeof e?{format:e,pl:n}:e:{};return s.date=t,new g(s)},b=d;b.l=p,b.i=y,b.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var g=function(){function l(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var d=l.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(h);if(s)return n?new Date(Date.UTC(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)):new Date(s[1],s[2]-1,s[3]||1,s[4]||0,s[5]||0,s[6]||0,s[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return b},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return _(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<_(t)},d.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",c)},d.month=function(t){return this.$g(t,"$M",a)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",s)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,u=!!b.u(o)||o,l=b.p(t),d=function(t,e){var n=b.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return u?n:n.endOf(i)},m=function(t,e){return b.w(h.toDate()[t].apply(h.toDate(),(u?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},f=this.$W,v=this.$M,y=this.$D,p="set"+(this.$u?"UTC":"");switch(l){case c:return u?d(1,0):d(31,11);case a:return u?d(1,v):d(0,v+1);case r:var _=this.$locale().weekStart||0,g=(f<_?f+7:f)-_;return d(u?y-g:y+(6-g),v);case i:case"date":return m(p+"Hours",0);case s:return m(p+"Minutes",1);case n:return m(p+"Seconds",2);case e:return m(p+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(r,o){var h,u=b.p(r),l="set"+(this.$u?"UTC":""),d=(h={},h[i]=l+"Date",h.date=l+"Date",h[a]=l+"Month",h[c]=l+"FullYear",h[s]=l+"Hours",h[n]=l+"Minutes",h[e]=l+"Seconds",h[t]=l+"Milliseconds",h)[u],m=u===i?this.$D+(o-this.$W):o;if(u===a||u===c){var f=this.clone().set("date",1);f.$d[d](m),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else d&&this.$d[d](m);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[b.p(t)]()},d.add=function(t,o){var h,u=this;t=Number(t);var l=b.p(o),d=function(e){var n=_(u);return b.w(n.date(n.date()+Math.round(e*t)),u)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===i)return d(1);if(l===r)return d(7);var m=(h={},h[n]=6e4,h[s]=36e5,h[e]=1e3,h)[l]||1,f=this.$d.getTime()+t*m;return b.w(f,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=b.z(this),i=this.$locale(),r=this.$H,a=this.$m,o=this.$M,c=i.weekdays,h=i.months,l=function(t,s,i,r){return t&&(t[s]||t(e,n))||i[s].substr(0,r)},d=function(t){return b.s(r%12||12,t,"0")},m=i.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:b.s(o+1,2,"0"),MMM:l(i.monthsShort,o,h,3),MMMM:h[o]||h(this,n),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,c,2),ddd:l(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:b.s(r,2,"0"),h:d(1),hh:d(2),a:m(r,a,!0),A:m(r,a,!1),m:String(a),mm:b.s(a,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:s};return n.replace(u,(function(t,e){return e||f[t]||s.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,u){var l,d=b.p(h),m=_(t),f=6e4*(m.utcOffset()-this.utcOffset()),v=this-m,y=b.m(this,m);return y=(l={},l[c]=y/12,l[a]=y,l[o]=y/3,l[r]=(v-f)/6048e5,l[i]=(v-f)/864e5,l[s]=v/36e5,l[n]=v/6e4,l[e]=v/1e3,l)[d]||v,u?y:b.a(y)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return v[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone();return n.$L=p(t,e,!0),n},d.clone=function(){return b.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},l}();return _.prototype=g.prototype,_.extend=function(t,e){return t(e,g,_),_},_.locale=p,_.isDayjs=y,_.unix=function(t){return _(1e3*t)},_.en=v[f],_.Ls=v,_}()})),d=o((function(t){t.exports=function(t,e,n){var s=e.prototype;n.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var i=function(t,e,s,i){for(var r,a,o=s.$locale().relativeTime,c=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=c.length,u=0;u<h;u+=1){var l=c[u];l.d&&(r=i?n(t).diff(s,l.d,!0):s.diff(t,l.d,!0));var d=Math.round(Math.abs(r));if(d<=l.r||!l.r){1===d&&u>0&&(l=c[u-1]),a=o[l.l].replace("%d",d);break}}return e?a:(r>0?o.future:o.past).replace("%s",a)};s.to=function(t,e){return i(t,e,this,!0)},s.from=function(t,e){return i(t,e,this)};var r=function(t){return t.$u?n.utc():n()};s.toNow=function(t){return this.to(r(this),t)},s.fromNow=function(t){return this.from(r(this),t)}}}));const m=t=>t||"#00d664";l.extend(d);const f=class{constructor(t){e(this,t),this.nested=!1,this.level=0,this.areRepliesVisible=!1,this.isDeleted=!(this.comment.user&&this.comment.user.name.length),this.hasReplies=this.comment.replies.length>0}toggleReplies(){this.areRepliesVisible=!this.areRepliesVisible}getUserName(){return this.isDeleted?"Comment deleted":this.comment.user&&this.comment.user.name}getDate(){return this.comment&&l(this.comment.created_at)}getCreatedFromNowDate(){return this.getDate().fromNow()}getFullDate(){return this.getDate().toString()}render(){return t(i.Consumer,null,({primaryColor:e})=>t(n,null,t("div",{class:"ct-comment"},t("div",{class:"ct-comment__dot-menu"}),t("ct-avatar",{user:this.comment.user,nested:this.nested}),t("div",{class:c("ct-comment__content",{"ct-comment__content--nested":this.nested})},t("div",{class:"content-meta"},t("div",{style:{color:m(e)},class:c("name",{"name--deleted":this.isDeleted})},this.getUserName()),t("div",{class:"separator"},"·"),t("div",{class:"date"},t("abbr",{title:this.getFullDate()},this.getCreatedFromNowDate()))),t("div",{class:"content-body"},this.comment.body),t("ct-actions",{comment:this.comment}),this.hasReplies&&!this.nested&&t("ct-button",{onClick:()=>this.toggleReplies()},this.areRepliesVisible?"Hide replies":"Show replies"))),t("div",{class:c("ct-replies",{"ct-replies--visible":this.nested||this.areRepliesVisible},{[`level-${this.level}`]:!0})},this.comment.replies.map(e=>t("ct-comment",{comment:e,nested:!0,level:this.level+1})))))}static get assetsDirs(){return["assets"]}static get style(){return":host{display:block}abbr{text-decoration:none}.level-0,.level-1{margin-left:2rem}.ct-comment{display:-ms-flexbox;display:flex;min-height:5.5rem;padding:1rem}.ct-comment__content{margin-left:1rem}.ct-comment__content--nested{margin-left:.25rem}.ct-comment__content .content-meta{display:-ms-flexbox;display:flex;font-size:.875rem}.ct-comment__content .content-meta .name{font-weight:700;color:#00d664;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ct-comment__content .content-meta .name.name--deleted{color:#fff!important}.ct-comment__content .content-meta .date,.ct-comment__content .content-meta .separator{margin-left:.5rem}.ct-comment__content .content-body{margin-top:.75rem;font-size:1rem}.ct-replies{position:relative;display:none}.ct-replies--visible{display:block}"}},v=class{constructor(t){e(this,t),this.currentUser={},this.comments=[],this.isLoading=!0,this.parsedConfig=JSON.parse(this.config)}setCurrentUser(t){this.currentUser=t}setComments(t){this.comments=t}async tokenWatchHandler(t){this.isLoading=!0;const e=await r.auth(this.apiUrl,t);this.setCurrentUser(e)}async currentUserWatchHandler(){const t={};this.currentUser&&(t.auth_token=this.currentUser.auth_token);const{comments:e}=await r.fetchComments(this.apiUrl,this.commentableId,t);this.setComments(e.reverse()),this.isLoading=!1}renderLoading(){return t("div",{class:"ct-loading"},t("div",{class:"la-ball-fall"},t("div",null),t("div",null),t("div",null)))}render(){return t(i.Provider,{state:{apiUrl:this.apiUrl,commentableId:this.commentableId,currentUser:this.currentUser,comments:this.comments,setComments:this.setComments,config:this.parsedConfig,primaryColor:this.primaryColor}},this.isLoading?this.renderLoading():t("div",{class:"ct-commentable"},t("ct-compose",{apiUrl:this.apiUrl,commentableId:this.commentableId}),this.comments.map(e=>t("ct-comment",{comment:e}))))}static get watchers(){return{googleIdToken:["tokenWatchHandler"],currentUser:["currentUserWatchHandler"]}}static get style(){return"\@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap\");:host{display:block;max-width:48rem;font-family:Open Sans,sans-serif;background-color:#0a1826;color:#f6f6f6}.ct-loading{margin:2rem 4rem}\n\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <\@DanielCardoso>\n * Licensed under MIT\n */.la-ball-fall,.la-ball-fall>div{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-fall{width:54px;height:18px}.la-ball-fall>div{width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:ball-fall 1s ease-in-out infinite;-moz-animation:ball-fall 1s ease-in-out infinite;-o-animation:ball-fall 1s ease-in-out infinite;animation:ball-fall 1s ease-in-out infinite}.la-ball-fall>div:first-child{-webkit-animation-delay:-.2s;-moz-animation-delay:-.2s;-o-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;-moz-animation-delay:-.1s;-o-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0ms;-moz-animation-delay:0ms;-o-animation-delay:0ms;animation-delay:0ms}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}\@-webkit-keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}to{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}\@-moz-keyframes ball-fall{0%{opacity:0;-moz-transform:translateY(-145%);transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}80%{opacity:1;-moz-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}to{opacity:0;-moz-transform:translateY(145%);transform:translateY(145%)}}\@-o-keyframes ball-fall{0%{opacity:0;-o-transform:translateY(-145%);transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}80%{opacity:1;-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}to{opacity:0;-o-transform:translateY(145%);transform:translateY(145%)}}\@keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);-moz-transform:translateY(-145%);-o-transform:translateY(-145%);transform:translateY(-145%)}10%{opacity:.5}20%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}80%{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}90%{opacity:.5}to{opacity:0;-webkit-transform:translateY(145%);-moz-transform:translateY(145%);-o-transform:translateY(145%);transform:translateY(145%)}}"}},y=class{constructor(t){e(this,t),this.isExpanded=!1,this.message=""}handleMessageChange(t){this.message=t.target.value}textareaOnFocus(){this.isExpanded=!0}addReply(t){this.comment.replies=[t,...this.comment.replies]}async addComment(t,e,n,s,i,a){if(this.message.length<1)return;const o=await r.addComment(t,e,{message:this.message,authToken:n.auth_token,repliesTo:a});this.comment?this.addReply(o):s([o,...i])}render(){return t(i.Consumer,null,({apiUrl:e,commentableId:n,currentUser:s,comments:i,setComments:r})=>t("div",{class:"ct-compose"},t("ct-avatar",{user:s}),t("div",{class:"ct-compose__textarea"},t("textarea",{class:"inner-textarea",onFocus:()=>this.textareaOnFocus(),placeholder:"Add a comment...",value:this.message,onInput:t=>this.handleMessageChange(t)}),this.isExpanded&&t("div",{class:"compose-controls"},t("p",null,"Please click the icon to send"),t("a",{class:"control-send",onClick:()=>this.addComment(e,n,s,r,i,this.comment.id)},"➡")))))}static get style(){return".ct-compose{display:-ms-flexbox;display:flex;margin:2rem 1rem}.ct-compose__textarea{display:block;margin-left:1rem;max-width:22rem;width:100%;background:#0d2031;border-radius:.25rem}.ct-compose__textarea .inner-textarea{display:block;width:100%;min-height:1rem;font-size:.875rem;padding:1rem;background-color:transparent;border:none;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;border-radius:.25rem;resize:none}.ct-compose__textarea .inner-textarea:focus{outline:none}.ct-compose__textarea .inner-textarea::-webkit-input-placeholder{color:#fff}.ct-compose__textarea .inner-textarea::-moz-placeholder{color:#fff}.ct-compose__textarea .inner-textarea:-ms-input-placeholder{color:#fff}.ct-compose__textarea .inner-textarea::-ms-input-placeholder{color:#fff}.ct-compose__textarea .inner-textarea::placeholder{color:#fff}.ct-compose__textarea .compose-controls{display:-ms-flexbox;display:flex;padding:0 1rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.compose-controls p{font-size:.875rem}.control-send{cursor:pointer}"}};export{a as ct_actions,h as ct_avatar,u as ct_button,f as ct_comment,v as ct_commentable,y as ct_compose};
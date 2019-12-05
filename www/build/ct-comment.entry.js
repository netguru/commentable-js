import { r as registerInstance, h, H as Host } from './core-7fdcb187.js';
import { T as Tunnel } from './index-d9664074.js';
import { c as createCommonjsModule, a as commonjsGlobal, b as cn } from './index-0ede7a69.js';

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,n){"object"=='object'&&"undefined"!='object'?module.exports=n():"function"==typeof undefined&&undefined.amd?undefined(n):t.dayjs=n();}(commonjsGlobal,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return !r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return (n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i;}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return "Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
});

var relativeTime = createCommonjsModule(function (module, exports) {
!function(r,t){"object"=='object'&&"undefined"!='object'?module.exports=t():"function"==typeof undefined&&undefined.amd?undefined(t):r.dayjs_plugin_relativeTime=t();}(commonjsGlobal,function(){"use strict";return function(r,t,e){var n=t.prototype;e.en.relativeTime={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};var o=function(r,t,n,o){for(var d,i,u=n.$locale().relativeTime,a=[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=a.length,s=0;s<f;s+=1){var l=a[s];l.d&&(d=o?e(r).diff(n,l.d,!0):n.diff(r,l.d,!0));var h=Math.round(Math.abs(d));if(h<=l.r||!l.r){1===h&&s>0&&(l=a[s-1]),i=u[l.l].replace("%d",h);break}}return t?i:(d>0?u.future:u.past).replace("%s",i)};n.to=function(r,t){return o(r,t,this,!0)},n.from=function(r,t){return o(r,t,this)};var d=function(r){return r.$u?e.utc():e()};n.toNow=function(r){return this.to(d(this),r)},n.fromNow=function(r){return this.from(d(this),r)};}});
});

const getPrimaryColor = (primaryColor) => {
    return primaryColor || '#00d664';
};

dayjs_min.extend(relativeTime);
const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.nested = false;
        this.level = 0;
        this.areRepliesVisible = false;
        this.isDeleted = !(this.comment.user && this.comment.user.name.length);
        this.hasReplies = this.comment.replies.length > 0;
    }
    toggleReplies() {
        this.areRepliesVisible = !this.areRepliesVisible;
    }
    getUserName() {
        if (this.isDeleted) {
            return 'Comment deleted';
        }
        return this.comment.user && this.comment.user.name;
    }
    getDate() {
        return this.comment && dayjs_min(this.comment.created_at);
    }
    getCreatedFromNowDate() {
        return this.getDate().fromNow();
    }
    getFullDate() {
        return this.getDate().toString();
    }
    render() {
        return h(Tunnel.Consumer, null, ({ primaryColor }) => (h(Host, null, h("div", { class: "ct-comment" }, h("div", { class: "ct-comment__dot-menu" }), h("ct-avatar", { user: this.comment.user, nested: this.nested }), h("div", { class: cn('ct-comment__content', {
                'ct-comment__content--nested': this.nested
            }) }, h("div", { class: "content-meta" }, h("div", { style: {
                color: getPrimaryColor(primaryColor)
            }, class: cn('name', {
                'name--deleted': this.isDeleted
            }) }, this.getUserName()), h("div", { class: "separator" }, "\u00B7"), h("div", { class: "date" }, h("abbr", { title: this.getFullDate() }, this.getCreatedFromNowDate()))), h("div", { class: "content-body" }, this.comment.body), h("ct-actions", { comment: this.comment }), (this.hasReplies && !this.nested) &&
            h("ct-button", { onClick: () => this.toggleReplies() }, this.areRepliesVisible ? 'Hide replies' : 'Show replies'))), h("div", { class: cn('ct-replies', { 'ct-replies--visible': this.nested || this.areRepliesVisible }, { [`level-${this.level}`]: true }) }, this.comment.replies.map((reply, _) => (h("ct-comment", { comment: reply, nested: true, level: this.level + 1 })))))));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ":host {\n  display: block;\n}\n\nabbr {\n  text-decoration: none;\n}\n\n.level-0,\n.level-1 {\n  margin-left: 2rem;\n}\n\n.ct-comment {\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 5.5rem;\n  padding: 1rem;\n}\n\n.ct-comment__content {\n  margin-left: 1rem;\n}\n\n.ct-comment__content--nested {\n  margin-left: 0.25rem;\n}\n\n.ct-comment__content .content-meta {\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.875rem;\n}\n\n.ct-comment__content .content-meta .name {\n  font-weight: bold;\n  color: #00d664;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ct-comment__content .content-meta .name.name--deleted {\n  color: #FFFFFF !important;\n}\n\n.ct-comment__content .content-meta .separator,\n.ct-comment__content .content-meta .date {\n  margin-left: 0.5rem;\n}\n\n.ct-comment__content .content-body {\n  margin-top: 0.75rem;\n  font-size: 1rem;\n}\n\n.ct-replies {\n  position: relative;\n  display: none;\n}\n\n.ct-replies--visible {\n  display: block;\n}\n\n/* TODO: Implement this stripe */\n/*.ct-replies:before {*/\n/*  content: \'\';*/\n/*  height: 100%;*/\n/*  width: 1px;*/\n/*  left: -1rem;*/\n/*  top: 0;*/\n/*  display: block;*/\n/*  position: absolute;*/\n/*  border-left: 1px red solid;*/\n/*}*/"; }
};

export { Comment as ct_comment };

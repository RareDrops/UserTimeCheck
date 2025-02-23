(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",u="day",a="week",o="month",c="quarter",f="year",h="date",l="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,u=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:a,d:u,D:h,h:s,m:i,s:r,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",M={};M[D]=m;var y="$isDayjsObject",S=function(t){return t instanceof x||!(!t||!t[y])},p=function t(e,n,r){var i;if(!e)return D;if("string"==typeof e){var s=e.toLowerCase();M[s]&&(i=s),n&&(M[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;M[a]=e,i=a}return!r&&i&&(D=i),i||!r&&D},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=g;w.l=p,w.i=S,w.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function m(t){this.$L=p(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[y]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===l)},v.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return O(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<O(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,l=w.p(t),d=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?r:r.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,g=this.$D,D="set"+(this.$u?"UTC":"");switch(l){case f:return c?d(1,0):d(31,11);case o:return c?d(1,v):d(0,v+1);case a:var M=this.$locale().weekStart||0,y=(m<M?m+7:m)-M;return d(c?g-y:g+(6-y),v);case u:case h:return $(D+"Hours",0);case s:return $(D+"Minutes",1);case i:return $(D+"Seconds",2);case r:return $(D+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=w.p(t),l="set"+(this.$u?"UTC":""),d=(a={},a[u]=l+"Date",a[h]=l+"Date",a[o]=l+"Month",a[f]=l+"FullYear",a[s]=l+"Hours",a[i]=l+"Minutes",a[r]=l+"Seconds",a[n]=l+"Milliseconds",a)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var m=this.clone().set(h,1);m.$d[d]($),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d]($);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var h,l=this;n=Number(n);var d=w.p(c),$=function(t){var e=O(l);return w.w(e.date(e.date()+Math.round(t*n)),l)};if(d===o)return this.set(o,this.$M+n);if(d===f)return this.set(f,this.$y+n);if(d===u)return $(1);if(d===a)return $(7);var m=(h={},h[i]=t,h[s]=e,h[r]=1e3,h)[d]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return w.s(s%12||12,t,"0")},m=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace($,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return w.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return m(s,u,!0);case"A":return m(s,u,!1);case"m":return String(u);case"mm":return w.s(u,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,h,l){var d,$=this,m=w.p(h),v=O(n),g=(v.utcOffset()-this.utcOffset())*t,D=this-v,M=function(){return w.m($,v)};switch(m){case f:d=M()/12;break;case o:d=M();break;case c:d=M()/3;break;case a:d=(D-g)/6048e5;break;case u:d=(D-g)/864e5;break;case s:d=D/e;break;case i:d=D/t;break;case r:d=D/1e3;break;default:d=D}return l?d:w.a(d)},v.daysInMonth=function(){return this.endOf(o).$D},v.$locale=function(){return M[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),Y=x.prototype;return O.prototype=Y,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",u],["$M",o],["$y",f],["$D",h]].forEach((function(t){Y[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,x,O),t.$i=!0),O},O.locale=p,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=M[D],O.Ls=M,O.p={},O}()},569:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,r,i){var s,u=function(t,n,r){void 0===r&&(r={});var i=new Date(t),s=function(t,n){void 0===n&&(n={});var r=n.timeZoneName||"short",i=t+"|"+r,s=e[i];return s||(s=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:r}),e[i]=s),s}(n,r);return s.formatToParts(i)},a=function(e,n){for(var r=u(e,n),s=[],a=0;a<r.length;a+=1){var o=r[a],c=o.type,f=o.value,h=t[c];h>=0&&(s[h]=parseInt(f,10))}var l=s[3],d=24===l?0:l,$=s[0]+"-"+s[1]+"-"+s[2]+" "+d+":"+s[4]+":"+s[5]+":000",m=+e;return(i.utc($).valueOf()-(m-=m%1e3))/6e4},o=r.prototype;o.tz=function(t,e){void 0===t&&(t=s);var n,r=this.utcOffset(),u=this.toDate(),a=u.toLocaleString("en-US",{timeZone:t}),o=Math.round((u-new Date(a))/1e3/60),c=15*-Math.round(u.getTimezoneOffset()/15)-o;if(Number(c)){if(n=i(a,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),e){var f=n.utcOffset();n=n.add(r-f,"minute")}}else n=this.utcOffset(0,e);return n.$x.$timezone=t,n},o.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),n=u(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var c=o.startOf;o.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,n){var r=n&&e,u=n||e||s,o=a(+i(),u);if("string"!=typeof t)return i(t).tz(u);var c=function(t,e,n){var r=t-60*e*1e3,i=a(r,n);if(e===i)return[r,e];var s=a(r-=60*(i-e)*1e3,n);return i===s?[r,i]:[t-60*Math.min(i,s)*1e3,Math.max(i,s)]}(i.utc(t,r).valueOf(),o,u),f=c[0],h=c[1],l=i(f).utcOffset(h);return l.$x.$timezone=u,l},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){s=t}}}()},826:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,s){var u=i.prototype;s.utc=function(t){return new i({date:t,utc:!0,args:arguments})},u.utc=function(e){var n=s(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},u.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var a=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var o=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else o.call(this)};var c=u.utcOffset;u.utcOffset=function(r,i){var s=this.$utils().u;if(s(r))return this.$u?0:s(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&(r=function(t){void 0===t&&(t="");var r=t.match(e);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],s=i[0],u=60*+i[1]+ +i[2];return 0===u?0:"+"===s?u:-u}(r),null===r))return this;var u=Math.abs(r)<=16?60*r:r,a=this;if(i)return a.$offset=u,a.$u=0===r,a;if(0!==r){var o=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(u+o,t)).$offset=u,a.$x.$localOffset=o}else a=this.utc();return a};var f=u.format;u.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return f.call(this,e)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var h=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():h.call(this)};var l=u.diff;u.diff=function(t,e,n){if(t&&this.$u===t.$u)return l.call(this,t,e,n);var r=this.local(),i=s(t).local();return l.call(r,i,e,n)}}}()}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}const r=n(353),i=n(826),s=n(569);r.extend(i),r.extend(s);const u="Pacific/Auckland";function a(){const t=r().tz(u);document.getElementById("user-timezone").textContent=u,document.getElementById("current-time").textContent=t.format("HH:mm:ss"),document.getElementById("current-date").textContent=t.format("dddd, D MMMM, YYYY")}setInterval(a,1e3),a()})();
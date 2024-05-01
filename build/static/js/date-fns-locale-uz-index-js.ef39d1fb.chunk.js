"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[54100,46228,99520,28656,6920,46952],{16624:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lessThanXSeconds:{one:"sekunddan kam",other:"{{count}} sekunddan kam"},xSeconds:{one:"1 sekund",other:"{{count}} sekund"},halfAMinute:"yarim minut",lessThanXMinutes:{one:"bir minutdan kam",other:"{{count}} minutdan kam"},xMinutes:{one:"1 minut",other:"{{count}} minut"},aboutXHours:{one:"tahminan 1 soat",other:"tahminan {{count}} soat"},xHours:{one:"1 soat",other:"{{count}} soat"},xDays:{one:"1 kun",other:"{{count}} kun"},aboutXWeeks:{one:"tahminan 1 hafta",other:"tahminan {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"tahminan 1 oy",other:"tahminan {{count}} oy"},xMonths:{one:"1 oy",other:"{{count}} oy"},aboutXYears:{one:"tahminan 1 yil",other:"tahminan {{count}} yil"},xYears:{one:"1 yil",other:"{{count}} yil"},overXYears:{one:"1 yildan ko'p",other:"{{count}} yildan ko'p"},almostXYears:{one:"deyarli 1 yil",other:"deyarli {{count}} yil"}},n=function(a,e,n){var i,r=t[a];return i="string"===typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?i+" dan keyin":i+" oldin":i};e.default=n,a.exports=e.default},74312:(a,e,t)=>{var n=t(22411).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(71808)),r={date:(0,i.default)({formats:{full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss zzzz",long:"h:mm:ss z",medium:"h:mm:ss",short:"h:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};e.default=r,a.exports=e.default},38680:(a,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={lastWeek:"'oldingi' eeee p 'da'",yesterday:"'kecha' p 'da'",today:"'bugun' p 'da'",tomorrow:"'ertaga' p 'da'",nextWeek:"eeee p 'da'",other:"P"},n=function(a,e,n,i){return t[a]};e.default=n,a.exports=e.default},36228:(a,e,t)=>{var n=t(22411).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(72788)),r={ordinalNumber:function(a,e){return String(a)},era:(0,i.default)({values:{narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},98704:(a,e,t)=>{var n=t(22411).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(61460)),r={ordinalNumber:(0,n(t(23219)).default)({matchPattern:/^(\d+)(chi)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(m\.a|m\.)/i,abbreviated:/^(m\.a\.?\s?m\.?)/i,wide:/^(miloddan avval|miloddan keyin)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](chi)? chorak/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[yfmasond]/i,abbreviated:/^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,wide:/^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ya/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^iyun/i,/^iyul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[ydschj]/i,short:/^(ya|du|se|cho|pa|ju|sha)/i,abbreviated:/^(yak|dush|sesh|chor|pay|jum|shan)/i,wide:/^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^y/i,/^d/i,/^s/i,/^ch/i,/^p/i,/^j/i,/^sh/i],any:[/^ya/i,/^d/i,/^se/i,/^ch/i,/^p/i,/^j/i,/^sh/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,any:/^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^y\.t/i,noon:/^pe/i,morning:/ertalab/i,afternoon:/tushdan keyin/i,evening:/kechqurun/i,night:/tun/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},97688:(a,e,t)=>{var n=t(22411).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(16624)),r=n(t(74312)),u=n(t(38680)),o=n(t(36228)),d=n(t(98704)),h={code:"uz",formatDistance:i.default,formatLong:r.default,formatRelative:u.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=h,a.exports=e.default}}]);
//# sourceMappingURL=date-fns-locale-uz-index-js.ef39d1fb.chunk.js.map
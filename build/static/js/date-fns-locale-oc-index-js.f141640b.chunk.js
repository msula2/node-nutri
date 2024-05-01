"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[49280,3080,25428,33232,1392,32576],{99224:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"mens d\u2019una segonda",other:"mens de {{count}} segondas"},xSeconds:{one:"1 segonda",other:"{{count}} segondas"},halfAMinute:"30 segondas",lessThanXMinutes:{one:"mens d\u2019una minuta",other:"mens de {{count}} minutas"},xMinutes:{one:"1 minuta",other:"{{count}} minutas"},aboutXHours:{one:"environ 1 ora",other:"environ {{count}} oras"},xHours:{one:"1 ora",other:"{{count}} oras"},xDays:{one:"1 jorn",other:"{{count}} jorns"},aboutXWeeks:{one:"environ 1 setmana",other:"environ {{count}} setmanas"},xWeeks:{one:"1 setmana",other:"{{count}} setmanas"},aboutXMonths:{one:"environ 1 mes",other:"environ {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"mai d\u2019un an",other:"mai de {{count}} ans"},almostXYears:{one:"gaireben un an",other:"gaireben {{count}} ans"}},n=function(e,a,n){var i,r=t[e];return i="string"===typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"d\u2019aqu\xed "+i:"fa "+i:i};a.default=n,e.exports=a.default},23168:(e,a,t)=>{var n=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(71808)),r={date:(0,i.default)({formats:{full:"EEEE d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'a' {{time}}",long:"{{date}} 'a' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},12404:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"eeee 'passat a' p",yesterday:"'i\xe8r a' p",today:"'u\xe8i a' p",tomorrow:"'deman a' p",nextWeek:"eeee 'a' p",other:"P"},n=function(e,a,n,i){return t[e]};a.default=n,e.exports=a.default},42944:(e,a,t)=>{var n=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(72788)),r={ordinalNumber:function(e,a){var t,n=Number(e),i=null===a||void 0===a?void 0:a.unit;switch(n){case 1:t="\xe8r";break;case 2:t="nd";break;default:t="en"}return"year"!==i&&"week"!==i&&"hour"!==i&&"minute"!==i&&"second"!==i||(t+="a"),n+t},era:(0,i.default)({values:{narrow:["ab. J.C.","apr. J.C."],abbreviated:["ab. J.C.","apr. J.C."],wide:["abans J\xe8sus-Crist","apr\xe8s J\xe8sus-Crist"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1\xe8r trim.","2nd trim.","3en trim.","4en trim."],wide:["1\xe8r trim\xe8stre","2nd trim\xe8stre","3en trim\xe8stre","4en trim\xe8stre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["GN","FB","M\xc7","AB","MA","JN","JL","AG","ST","OC","NV","DC"],abbreviated:["gen.","febr.","mar\xe7","abr.","mai","junh","jul.","ag.","set.","oct.","nov.","dec."],wide:["geni\xe8r","febri\xe8r","mar\xe7","abril","mai","junh","julhet","agost","setembre","oct\xf2bre","novembre","decembre"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],short:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],wide:["dimenge","diluns","dimars","dim\xe8cres","dij\xf2us","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"matin",afternoon:"apr\xe8p-mi\xe8gjorn",evening:"v\xe8spre",night:"nu\xe8ch"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"matin",afternoon:"apr\xe8p-mi\xe8gjorn",evening:"v\xe8spre",night:"nu\xe8ch"},wide:{am:"a.m.",pm:"p.m.",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"matin",afternoon:"apr\xe8p-mi\xe8gjorn",evening:"v\xe8spre",night:"nu\xe8ch"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"del matin",afternoon:"de l\u2019apr\xe8p-mi\xe8gjorn",evening:"del ser",night:"de la nu\xe8ch"},abbreviated:{am:"AM",pm:"PM",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"del matin",afternoon:"de l\u2019apr\xe8p-mi\xe8gjorn",evening:"del ser",night:"de la nu\xe8ch"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"del matin",afternoon:"de l\u2019apr\xe8p-mi\xe8gjorn",evening:"del ser",night:"de la nu\xe8ch"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},58256:(e,a,t)=>{var n=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(61460)),r={ordinalNumber:(0,n(t(23219)).default)({matchPattern:/^(\d+)(\xe8r|nd|en)?[a]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,abbreviated:/^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(abans J\xe8sus-Crist|apr\xe8s J\xe8sus-Crist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ab/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^T[1234]/i,abbreviated:/^[1234](\xe8r|nd|en)? trim\.?/i,wide:/^[1234](\xe8r|nd|en)? trim\xe8stre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(GN|FB|M\xc7|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,abbreviated:/^(gen|febr|mar\xe7|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,wide:/^(geni\xe8r|febri\xe8r|mar\xe7|abril|mai|junh|julhet|agost|setembre|oct\xf2bre|novembre|decembre)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^g/i,/^f/i,/^ma[r?]|M\xc7/i,/^ab/i,/^ma[i?]/i,/^ju[n?]|JN/i,/^ju[l?]|JL/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^d[glmcjvs]\.?/i,short:/^d[glmcjvs]\.?/i,abbreviated:/^d[glmcjvs]\.?/i,wide:/^(dimenge|diluns|dimars|dim\xe8cres|dij\xf2us|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],short:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],abbreviated:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],any:[/^dg|dime/i,/^dl|dil/i,/^dm|dima/i,/^dc|dim\xe8/i,/^dj|dij/i,/^dv|div/i,/^ds|dis/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l\u2019)(matin|apr\xe8p-mi\xe8gjorn|v\xe8spre|ser|nu\xe8ch))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/(^a)|ante meridiem/i,pm:/(^p)|post meridiem/i,midnight:/^mi\xe8j/i,noon:/^mi\xe8g/i,morning:/matin/i,afternoon:/apr\xe8p-mi\xe8gjorn/i,evening:/v\xe8spre|ser/i,night:/nu\xe8ch/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},28276:(e,a,t)=>{var n=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(99224)),r=n(t(23168)),d=n(t(12404)),o=n(t(42944)),s=n(t(58256)),m={code:"oc",formatDistance:i.default,formatLong:r.default,formatRelative:d.default,localize:o.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=m,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-oc-index-js.f141640b.chunk.js.map
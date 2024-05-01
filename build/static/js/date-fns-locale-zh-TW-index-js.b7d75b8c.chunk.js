"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[47792,48252,74299,16828,10580,77388],{21991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"\u5c11\u65bc 1 \u79d2",other:"\u5c11\u65bc {{count}} \u79d2"},xSeconds:{one:"1 \u79d2",other:"{{count}} \u79d2"},halfAMinute:"\u534a\u5206\u9418",lessThanXMinutes:{one:"\u5c11\u65bc 1 \u5206\u9418",other:"\u5c11\u65bc {{count}} \u5206\u9418"},xMinutes:{one:"1 \u5206\u9418",other:"{{count}} \u5206\u9418"},xHours:{one:"1 \u5c0f\u6642",other:"{{count}} \u5c0f\u6642"},aboutXHours:{one:"\u5927\u7d04 1 \u5c0f\u6642",other:"\u5927\u7d04 {{count}} \u5c0f\u6642"},xDays:{one:"1 \u5929",other:"{{count}} \u5929"},aboutXWeeks:{one:"\u5927\u7d04 1 \u500b\u661f\u671f",other:"\u5927\u7d04 {{count}} \u500b\u661f\u671f"},xWeeks:{one:"1 \u500b\u661f\u671f",other:"{{count}} \u500b\u661f\u671f"},aboutXMonths:{one:"\u5927\u7d04 1 \u500b\u6708",other:"\u5927\u7d04 {{count}} \u500b\u6708"},xMonths:{one:"1 \u500b\u6708",other:"{{count}} \u500b\u6708"},aboutXYears:{one:"\u5927\u7d04 1 \u5e74",other:"\u5927\u7d04 {{count}} \u5e74"},xYears:{one:"1 \u5e74",other:"{{count}} \u5e74"},overXYears:{one:"\u8d85\u904e 1 \u5e74",other:"\u8d85\u904e {{count}} \u5e74"},almostXYears:{one:"\u5c07\u8fd1 1 \u5e74",other:"\u5c07\u8fd1 {{count}} \u5e74"}},n=function(e,t,n){var i,r=a[e];return i="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?i+"\u5167":i+"\u524d":i};t.default=n,e.exports=t.default},74024:(e,t,a)=>{var n=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(71808)),r={date:(0,i.default)({formats:{full:"y'\u5e74'M'\u6708'd'\u65e5' EEEE",long:"y'\u5e74'M'\u6708'd'\u65e5'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},33261:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'\u4e0a\u500b'eeee p",yesterday:"'\u6628\u5929' p",today:"'\u4eca\u5929' p",tomorrow:"'\u660e\u5929' p",nextWeek:"'\u4e0b\u500b'eeee p",other:"P"},n=function(e,t,n,i){return a[e]};t.default=n,e.exports=t.default},13016:(e,t,a)=>{var n=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(72788)),r={ordinalNumber:function(e,t){var a=Number(e);switch(null===t||void 0===t?void 0:t.unit){case"date":return a+"\u65e5";case"hour":return a+"\u6642";case"minute":return a+"\u5206";case"second":return a+"\u79d2";default:return"\u7b2c "+a}},era:(0,i.default)({values:{narrow:["\u524d","\u516c\u5143"],abbreviated:["\u524d","\u516c\u5143"],wide:["\u516c\u5143\u524d","\u516c\u5143"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u7b2c\u4e00\u523b","\u7b2c\u4e8c\u523b","\u7b2c\u4e09\u523b","\u7b2c\u56db\u523b"],wide:["\u7b2c\u4e00\u523b\u9418","\u7b2c\u4e8c\u523b\u9418","\u7b2c\u4e09\u523b\u9418","\u7b2c\u56db\u523b\u9418"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u4e03","\u516b","\u4e5d","\u5341","\u5341\u4e00","\u5341\u4e8c"],abbreviated:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"],wide:["\u4e00\u6708","\u4e8c\u6708","\u4e09\u6708","\u56db\u6708","\u4e94\u6708","\u516d\u6708","\u4e03\u6708","\u516b\u6708","\u4e5d\u6708","\u5341\u6708","\u5341\u4e00\u6708","\u5341\u4e8c\u6708"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],short:["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],abbreviated:["\u9031\u65e5","\u9031\u4e00","\u9031\u4e8c","\u9031\u4e09","\u9031\u56db","\u9031\u4e94","\u9031\u516d"],wide:["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u4e0a",pm:"\u4e0b",midnight:"\u51cc\u6668",noon:"\u5348",morning:"\u65e9",afternoon:"\u4e0b\u5348",evening:"\u665a",night:"\u591c"},abbreviated:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"},wide:{am:"\u4e0a\u5348",pm:"\u4e0b\u5348",midnight:"\u51cc\u6668",noon:"\u4e2d\u5348",morning:"\u65e9\u6668",afternoon:"\u4e2d\u5348",evening:"\u665a\u4e0a",night:"\u591c\u9593"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},46008:(e,t,a)=>{var n=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(61460)),r={ordinalNumber:(0,n(a(23219)).default)({matchPattern:/^(\u7b2c\s*)?\d+(\u65e5|\u6642|\u5206|\u79d2)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(\u524d)/i,abbreviated:/^(\u524d)/i,wide:/^(\u516c\u5143\u524d|\u516c\u5143)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(\u524d)/i,/^(\u516c\u5143)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b/i,wide:/^\u7b2c[\u4e00\u4e8c\u4e09\u56db]\u523b\u9418/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00)/i,/(2|\u4e8c)/i,/(3|\u4e09)/i,/(4|\u56db)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])/i,abbreviated:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00]|\d|1[12])\u6708/i,wide:/^(\u4e00|\u4e8c|\u4e09|\u56db|\u4e94|\u516d|\u4e03|\u516b|\u4e5d|\u5341[\u4e8c\u4e00])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u4e00/i,/^\u4e8c/i,/^\u4e09/i,/^\u56db/i,/^\u4e94/i,/^\u516d/i,/^\u4e03/i,/^\u516b/i,/^\u4e5d/i,/^\u5341(?!(\u4e00|\u4e8c))/i,/^\u5341\u4e00/i,/^\u5341\u4e8c/i],any:[/^\u4e00|1/i,/^\u4e8c|2/i,/^\u4e09|3/i,/^\u56db|4/i,/^\u4e94|5/i,/^\u516d|6/i,/^\u4e03|7/i,/^\u516b|8/i,/^\u4e5d|9/i,/^\u5341(?!(\u4e00|\u4e8c))|10/i,/^\u5341\u4e00|11/i,/^\u5341\u4e8c|12/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,short:/^[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,abbreviated:/^\u9031[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i,wide:/^\u661f\u671f[\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u65e5]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/\u65e5/i,/\u4e00/i,/\u4e8c/i,/\u4e09/i,/\u56db/i,/\u4e94/i,/\u516d/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(\u4e0a\u5348?|\u4e0b\u5348?|\u5348\u591c|[\u4e2d\u6b63]\u5348|\u65e9\u4e0a?|\u4e0b\u5348|\u665a\u4e0a?|\u51cc\u6668)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u4e0a\u5348?/i,pm:/^\u4e0b\u5348?/i,midnight:/^\u5348\u591c/i,noon:/^[\u4e2d\u6b63]\u5348/i,morning:/^\u65e9\u4e0a/i,afternoon:/^\u4e0b\u5348/i,evening:/^\u665a\u4e0a?/i,night:/^\u51cc\u6668/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},44372:(e,t,a)=>{var n=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(21991)),r=n(a(74024)),o=n(a(33261)),d=n(a(13016)),u=n(a(46008)),l={code:"zh-TW",formatDistance:i.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-zh-TW-index-js.b7d75b8c.chunk.js.map
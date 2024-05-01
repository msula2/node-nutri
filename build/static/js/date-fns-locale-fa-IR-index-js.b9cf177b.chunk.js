"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[87672,34116,55344,77312,6380,95488],{7464:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"\u06a9\u0645\u062a\u0631 \u0627\u0632 \u06cc\u06a9 \u062b\u0627\u0646\u06cc\u0647",other:"\u06a9\u0645\u062a\u0631 \u0627\u0632 {{count}} \u062b\u0627\u0646\u06cc\u0647"},xSeconds:{one:"1 \u062b\u0627\u0646\u06cc\u0647",other:"{{count}} \u062b\u0627\u0646\u06cc\u0647"},halfAMinute:"\u0646\u06cc\u0645 \u062f\u0642\u06cc\u0642\u0647",lessThanXMinutes:{one:"\u06a9\u0645\u062a\u0631 \u0627\u0632 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",other:"\u06a9\u0645\u062a\u0631 \u0627\u0632 {{count}} \u062f\u0642\u06cc\u0642\u0647"},xMinutes:{one:"1 \u062f\u0642\u06cc\u0642\u0647",other:"{{count}} \u062f\u0642\u06cc\u0642\u0647"},aboutXHours:{one:"\u062d\u062f\u0648\u062f 1 \u0633\u0627\u0639\u062a",other:"\u062d\u062f\u0648\u062f {{count}} \u0633\u0627\u0639\u062a"},xHours:{one:"1 \u0633\u0627\u0639\u062a",other:"{{count}} \u0633\u0627\u0639\u062a"},xDays:{one:"1 \u0631\u0648\u0632",other:"{{count}} \u0631\u0648\u0632"},aboutXWeeks:{one:"\u062d\u062f\u0648\u062f 1 \u0647\u0641\u062a\u0647",other:"\u062d\u062f\u0648\u062f {{count}} \u0647\u0641\u062a\u0647"},xWeeks:{one:"1 \u0647\u0641\u062a\u0647",other:"{{count}} \u0647\u0641\u062a\u0647"},aboutXMonths:{one:"\u062d\u062f\u0648\u062f 1 \u0645\u0627\u0647",other:"\u062d\u062f\u0648\u062f {{count}} \u0645\u0627\u0647"},xMonths:{one:"1 \u0645\u0627\u0647",other:"{{count}} \u0645\u0627\u0647"},aboutXYears:{one:"\u062d\u062f\u0648\u062f 1 \u0633\u0627\u0644",other:"\u062d\u062f\u0648\u062f {{count}} \u0633\u0627\u0644"},xYears:{one:"1 \u0633\u0627\u0644",other:"{{count}} \u0633\u0627\u0644"},overXYears:{one:"\u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 1 \u0633\u0627\u0644",other:"\u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 {{count}} \u0633\u0627\u0644"},almostXYears:{one:"\u0646\u0632\u062f\u06cc\u06a9 1 \u0633\u0627\u0644",other:"\u0646\u0632\u062f\u06cc\u06a9 {{count}} \u0633\u0627\u0644"}},i=function(e,t,i){var n,r=a[e];return n="string"===typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!==i&&void 0!==i&&i.addSuffix?i.comparison&&i.comparison>0?"\u062f\u0631 "+n:n+" \u0642\u0628\u0644":n};t.default=i,e.exports=t.default},14724:(e,t,a)=>{var i=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(71808)),r={date:(0,n.default)({formats:{full:"EEEE do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"yyyy/MM/dd"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} '\u062f\u0631' {{time}}",long:"{{date}} '\u062f\u0631' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},28876:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"eeee '\u06af\u0630\u0634\u062a\u0647 \u062f\u0631' p",yesterday:"'\u062f\u06cc\u0631\u0648\u0632 \u062f\u0631' p",today:"'\u0627\u0645\u0631\u0648\u0632 \u062f\u0631' p",tomorrow:"'\u0641\u0631\u062f\u0627 \u062f\u0631' p",nextWeek:"eeee '\u062f\u0631' p",other:"P"},i=function(e,t,i,n){return a[e]};t.default=i,e.exports=t.default},89160:(e,t,a)=>{var i=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(72788)),r={ordinalNumber:function(e,t){return String(e)},era:(0,n.default)({values:{narrow:["\u0642","\u0628"],abbreviated:["\u0642.\u0645.","\u0628.\u0645."],wide:["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f","\u0628\u0639\u062f \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u0633\u200c\u06451","\u0633\u200c\u06452","\u0633\u200c\u06453","\u0633\u200c\u06454"],wide:["\u0633\u0647\u200c\u0645\u0627\u0647\u0647 1","\u0633\u0647\u200c\u0645\u0627\u0647\u0647 2","\u0633\u0647\u200c\u0645\u0627\u0647\u0647 3","\u0633\u0647\u200c\u0645\u0627\u0647\u0647 4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["\u0698","\u0641","\u0645","\u0622","\u0645","\u062c","\u062c","\u0622","\u0633","\u0627","\u0646","\u062f"],abbreviated:["\u0698\u0627\u0646\u0640","\u0641\u0648\u0631","\u0645\u0627\u0631\u0633","\u0622\u067e\u0631","\u0645\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0640","\u0622\u06af\u0648","\u0633\u067e\u062a\u0640","\u0627\u06a9\u062a\u0640","\u0646\u0648\u0627\u0645\u0640","\u062f\u0633\u0627\u0645\u0640"],wide:["\u0698\u0627\u0646\u0648\u06cc\u0647","\u0641\u0648\u0631\u06cc\u0647","\u0645\u0627\u0631\u0633","\u0622\u067e\u0631\u06cc\u0644","\u0645\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u06cc","\u0622\u06af\u0648\u0633\u062a","\u0633\u067e\u062a\u0627\u0645\u0628\u0631","\u0627\u06a9\u062a\u0628\u0631","\u0646\u0648\u0627\u0645\u0628\u0631","\u062f\u0633\u0627\u0645\u0628\u0631"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["\u06cc","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"],short:["1\u0634","2\u0634","3\u0634","4\u0634","5\u0634","\u062c","\u0634"],abbreviated:["\u06cc\u06a9\u0634\u0646\u0628\u0647","\u062f\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200c\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067e\u0646\u062c\u0634\u0646\u0628\u0647","\u062c\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],wide:["\u06cc\u06a9\u0634\u0646\u0628\u0647","\u062f\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200c\u0634\u0646\u0628\u0647","\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647","\u067e\u0646\u062c\u0634\u0646\u0628\u0647","\u062c\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"\u0642",pm:"\u0628",midnight:"\u0646",noon:"\u0638",morning:"\u0635",afternoon:"\u0628.\u0638.",evening:"\u0639",night:"\u0634"},abbreviated:{am:"\u0642.\u0638.",pm:"\u0628.\u0638.",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"},wide:{am:"\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631",pm:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0642",pm:"\u0628",midnight:"\u0646",noon:"\u0638",morning:"\u0635",afternoon:"\u0628.\u0638.",evening:"\u0639",night:"\u0634"},abbreviated:{am:"\u0642.\u0638.",pm:"\u0628.\u0638.",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"},wide:{am:"\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631",pm:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",midnight:"\u0646\u06cc\u0645\u0647\u200c\u0634\u0628",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u062d",afternoon:"\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631",evening:"\u0639\u0635\u0631",night:"\u0634\u0628"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},96356:(e,t,a)=>{var i=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(61460)),r={ordinalNumber:(0,i(a(23219)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\u0642|\u0628)/i,abbreviated:/^(\u0642\.?\s?\u0645\.?|\u0642\.?\s?\u062f\.?\s?\u0645\.?|\u0645\.?\s?|\u062f\.?\s?\u0645\.?)/i,wide:/^(\u0642\u0628\u0644 \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f|\u0642\u0628\u0644 \u0627\u0632 \u062f\u0648\u0631\u0627\u0646 \u0645\u0634\u062a\u0631\u06a9|\u0645\u06cc\u0644\u0627\u062f\u06cc|\u062f\u0648\u0631\u0627\u0646 \u0645\u0634\u062a\u0631\u06a9|\u0628\u0639\u062f \u0627\u0632 \u0645\u06cc\u0644\u0627\u062f)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0642\u0628\u0644/i,/^\u0628\u0639\u062f/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0633\u200c\u0645[1234]/i,wide:/^\u0633\u0647\u200c\u0645\u0627\u0647\u0647 [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[\u062c\u0698\u0641\u0645\u0622\u0627\u0645\u0627\u0633\u0646\u062f]/i,abbreviated:/^(\u062c\u0646\u0648|\u0698\u0627\u0646\u0640|\u0698\u0627\u0646\u0648\u06cc\u0647|\u0641\u0648\u0631\u06cc\u0647|\u0641\u0648\u0631|\u0645\u0627\u0631\u0633|\u0622\u0648\u0631\u06cc\u0644|\u0622\u067e\u0631|\u0645\u0647|\u0645\u06cc|\u0698\u0648\u0626\u0646|\u062c\u0648\u0646|\u062c\u0648\u0644|\u062c\u0648\u0644\u0640|\u0698\u0648\u0626\u06cc\u0647|\u0627\u0648\u062a|\u0622\u06af\u0648|\u0633\u067e\u062a\u0645\u0628\u0631|\u0633\u067e\u062a\u0627\u0645\u0628\u0631|\u0627\u06a9\u062a\u0628\u0631|\u0627\u06a9\u062a\u0648\u0628\u0631|\u0646\u0648\u0627\u0645\u0628\u0631|\u0646\u0648\u0627\u0645\u0640|\u062f\u0633\u0627\u0645\u0628\u0631|\u062f\u0633\u0627\u0645\u0640|\u062f\u0633\u0645)/i,wide:/^(\u0698\u0627\u0646\u0648\u06cc\u0647|\u062c\u0646\u0648\u0631\u06cc|\u0641\u0628\u0631\u0648\u0631\u06cc|\u0641\u0648\u0631\u06cc\u0647|\u0645\u0627\u0631\u0686|\u0645\u0627\u0631\u0633|\u0622\u067e\u0631\u06cc\u0644|\u0627\u067e\u0631\u06cc\u0644|\u0627\u06cc\u067e\u0631\u06cc\u0644|\u0622\u0648\u0631\u06cc\u0644|\u0645\u0647|\u0645\u06cc|\u0698\u0648\u0626\u0646|\u062c\u0648\u0646|\u062c\u0648\u0644\u0627\u06cc|\u0698\u0648\u0626\u06cc\u0647|\u0622\u06af\u0633\u062a|\u0627\u06af\u0633\u062a|\u0622\u06af\u0648\u0633\u062a|\u0627\u0648\u062a|\u0633\u067e\u062a\u0645\u0628\u0631|\u0633\u067e\u062a\u0627\u0645\u0628\u0631|\u0627\u06a9\u062a\u0628\u0631|\u0627\u06a9\u062a\u0648\u0628\u0631|\u0646\u0648\u0627\u0645\u0628\u0631|\u0646\u0648\u0645\u0628\u0631|\u062f\u0633\u0627\u0645\u0628\u0631|\u062f\u0633\u0645\u0628\u0631)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^(\u0698|\u062c)/i,/^\u0641/i,/^\u0645/i,/^(\u0622|\u0627)/i,/^\u0645/i,/^(\u0698|\u062c)/i,/^(\u062c|\u0698)/i,/^(\u0622|\u0627)/i,/^\u0633/i,/^\u0627/i,/^\u0646/i,/^\u062f/i],any:[/^\u0698\u0627/i,/^\u0641/i,/^\u0645\u0627/i,/^\u0622\u067e/i,/^(\u0645\u06cc|\u0645\u0647)/i,/^(\u0698\u0648\u0626\u0646|\u062c\u0648\u0646)/i,/^(\u0698\u0648\u0626\u06cc|\u062c\u0648\u0644)/i,/^(\u0627\u0648\u062a|\u0622\u06af)/i,/^\u0633/i,/^(\u0627\u0648\u06a9|\u0627\u06a9)/i,/^\u0646/i,/^\u062f/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[\u0634\u06cc\u062f\u0633\u0686\u067e\u062c]/i,short:/^(\u0634|\u062c|1\u0634|2\u0634|3\u0634|4\u0634|5\u0634)/i,abbreviated:/^(\u06cc\u06a9\u0634\u0646\u0628\u0647|\u062f\u0648\u0634\u0646\u0628\u0647|\u0633\u0647\u200c\u0634\u0646\u0628\u0647|\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647|\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647|\u062c\u0645\u0639\u0647|\u0634\u0646\u0628\u0647)/i,wide:/^(\u06cc\u06a9\u0634\u0646\u0628\u0647|\u062f\u0648\u0634\u0646\u0628\u0647|\u0633\u0647\u200c\u0634\u0646\u0628\u0647|\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647|\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647|\u062c\u0645\u0639\u0647|\u0634\u0646\u0628\u0647)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u06cc/i,/^\u062f\u0648/i,/^\u0633/i,/^\u0686/i,/^\u067e/i,/^\u062c/i,/^\u0634/i],any:[/^(\u06cc|1\u0634|\u06cc\u06a9\u0634\u0646\u0628\u0647)/i,/^(\u062f|2\u0634|\u062f\u0648\u0634\u0646\u0628\u0647)/i,/^(\u0633|3\u0634|\u0633\u0647\u200c\u0634\u0646\u0628\u0647)/i,/^(\u0686|4\u0634|\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647)/i,/^(\u067e|5\u0634|\u067e\u0646\u062c\u0634\u0646\u0628\u0647)/i,/^(\u062c|\u062c\u0645\u0639\u0647)/i,/^(\u0634|\u0634\u0646\u0628\u0647)/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(\u0628|\u0642|\u0646|\u0638|\u0635|\u0628.\u0638.|\u0639|\u0634)/i,abbreviated:/^(\u0642.\u0638.|\u0628.\u0638.|\u0646\u06cc\u0645\u0647\u200c\u0634\u0628|\u0638\u0647\u0631|\u0635\u0628\u062d|\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631|\u0639\u0635\u0631|\u0634\u0628)/i,wide:/^(\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631|\u0646\u06cc\u0645\u0647\u200c\u0634\u0628|\u0638\u0647\u0631|\u0635\u0628\u062d|\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631|\u0639\u0635\u0631|\u0634\u0628)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^(\u0642|\u0642.\u0638.|\u0642\u0628\u0644\u200c\u0627\u0632\u0638\u0647\u0631)/i,pm:/^(\u0628|\u0628.\u0638.|\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631)/i,midnight:/^(\u200c\u0646\u06cc\u0645\u0647\u200c\u0634\u0628|\u0646)/i,noon:/^(\u0638|\u0638\u0647\u0631)/i,morning:/(\u0635|\u0635\u0628\u062d)/i,afternoon:/(\u0628|\u0628.\u0638.|\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631)/i,evening:/(\u0639|\u0639\u0635\u0631)/i,night:/(\u0634|\u0634\u0628)/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},29332:(e,t,a)=>{var i=a(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(7464)),r=i(a(14724)),o=i(a(28876)),d=i(a(89160)),u=i(a(96356)),l={code:"fa-IR",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:6,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-fa-IR-index-js.b9cf177b.chunk.js.map
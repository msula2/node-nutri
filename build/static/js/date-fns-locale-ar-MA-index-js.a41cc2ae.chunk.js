"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[21400,32060,18176,80192,25208,38580],{59808:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0648\u0627\u0646\u064a",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062b\u0627\u0646\u064a\u0629"},xSeconds:{one:"\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u062b\u0627\u0646\u062a\u064a\u0646",threeToTen:"{{count}} \u062b\u0648\u0627\u0646\u064a",other:"{{count}} \u062b\u0627\u0646\u064a\u0629"},halfAMinute:"\u0646\u0635\u0641 \u062f\u0642\u064a\u0642\u0629",lessThanXMinutes:{one:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629",two:"\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u0627\u0626\u0642",other:"\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062f\u0642\u064a\u0642\u0629"},xMinutes:{one:"\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u062f\u0642\u064a\u0642\u062a\u064a\u0646",threeToTen:"{{count}} \u062f\u0642\u0627\u0626\u0642",other:"{{count}} \u062f\u0642\u064a\u0642\u0629"},aboutXHours:{one:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0633\u0627\u0639\u062a\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0633\u0627\u0639\u0629 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xHours:{one:"\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",two:"\u0633\u0627\u0639\u062a\u064a\u0646",threeToTen:"{{count}} \u0633\u0627\u0639\u0627\u062a",other:"{{count}} \u0633\u0627\u0639\u0629"},xDays:{one:"\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",two:"\u064a\u0648\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u064a\u0627\u0645",other:"{{count}} \u064a\u0648\u0645"},aboutXWeeks:{one:"\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0623\u0633\u0628\u0648\u0639 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xWeeks:{one:"\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f",two:"\u0623\u0633\u0628\u0648\u0639\u064a\u0646",threeToTen:"{{count}} \u0623\u0633\u0627\u0628\u064a\u0639",other:"{{count}} \u0623\u0633\u0628\u0648\u0639"},aboutXMonths:{one:"\u0634\u0647\u0631 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0634\u0647\u0631\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0634\u0647\u0631 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0634\u0647\u0631 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xMonths:{one:"\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",two:"\u0634\u0647\u0631\u064a\u0646",threeToTen:"{{count}} \u0623\u0634\u0647\u0631",other:"{{count}} \u0634\u0647\u0631"},aboutXYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"},xYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",two:"\u0639\u0627\u0645\u064a\u0646",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645",other:"{{count}} \u0639\u0627\u0645"},overXYears:{one:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0639\u0627\u0645",two:"\u0623\u0643\u062b\u0631 \u0645\u0646 \u0639\u0627\u0645\u064a\u0646",threeToTen:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0623\u0639\u0648\u0627\u0645",other:"\u0623\u0643\u062b\u0631 \u0645\u0646 {{count}} \u0639\u0627\u0645"},almostXYears:{one:"\u0639\u0627\u0645 \u0648\u0627\u062d\u062f \u062a\u0642\u0631\u064a\u0628\u0627\u064b",two:"\u0639\u0627\u0645\u064a\u0646 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",threeToTen:"{{count}} \u0623\u0639\u0648\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b",other:"{{count}} \u0639\u0627\u0645 \u062a\u0642\u0631\u064a\u0628\u0627\u064b"}},a=function(e,t,a){a=a||{};var o,i=n[e];return o="string"===typeof i?i:1===t?i.one:2===t?i.two:t<=10?i.threeToTen.replace("{{count}}",String(t)):i.other.replace("{{count}}",String(t)),a.addSuffix?a.comparison&&a.comparison>0?"\u0641\u064a \u062e\u0644\u0627\u0644 "+o:"\u0645\u0646\u0630 "+o:o};t.default=a,e.exports=t.default},4076:(e,t,n)=>{var a=n(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(71808)),i={date:(0,o.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} '\u0639\u0646\u062f' {{time}}",long:"{{date}} '\u0639\u0646\u062f' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},11544:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'\u0623\u062e\u0631' eeee '\u0639\u0646\u062f' p",yesterday:"'\u0623\u0645\u0633 \u0639\u0646\u062f' p",today:"'\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f' p",tomorrow:"'\u063a\u062f\u0627\u064b \u0639\u0646\u062f' p",nextWeek:"eeee '\u0639\u0646\u062f' p",other:"P"},a=function(e,t,a,o){return n[e]};t.default=a,e.exports=t.default},35876:(e,t,n)=>{var a=n(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(72788)),i={ordinalNumber:function(e){return String(e)},era:(0,o.default)({values:{narrow:["\u0642","\u0628"],abbreviated:["\u0642.\u0645.","\u0628.\u0645."],wide:["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f","\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u06311","\u06312","\u06313","\u06314"],wide:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:{narrow:["\u064a","\u0641","\u0645","\u0623","\u0645","\u064a","\u064a","\u063a","\u0634","\u0623","\u0646","\u062f"],abbreviated:["\u064a\u0646\u0627","\u0641\u0628\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a","\u064a\u0648\u0646\u0640","\u064a\u0648\u0644\u0640","\u063a\u0634\u062a","\u0634\u062a\u0646\u0640","\u0623\u0643\u062a\u0640","\u0646\u0648\u0646\u0640","\u062f\u062c\u0646\u0640"],wide:["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648\u0632","\u063a\u0634\u062a","\u0634\u062a\u0646\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0646\u0628\u0631","\u062f\u062c\u0646\u0628\u0631"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["\u062d","\u0646","\u062b","\u0631","\u062e","\u062c","\u0633"],short:["\u0623\u062d\u062f","\u0627\u062b\u0646\u064a\u0646","\u062b\u0644\u0627\u062b\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],abbreviated:["\u0623\u062d\u062f","\u0627\u062b\u0646\u0640","\u062b\u0644\u0627","\u0623\u0631\u0628\u0640","\u062e\u0645\u064a\u0640","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],wide:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0625\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0640\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0640\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},87356:(e,t,n)=>{var a=n(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(23219)),i=a(n(61460)),r={ordinalNumber:(0,o.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(\u0642|\u0628)/i,abbreviated:/^(\u0642\.?\s?\u0645\.?|\u0642\.?\s?\u0645\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0642\u0628\u0644/i,/^\u0628\u0639\u062f/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0631[1234]/i,wide:/^\u0627\u0644\u0631\u0628\u0639 [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return Number(e)+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[\u064a\u0641\u0645\u0623\u0645\u0633\u0646\u062f]/i,abbreviated:/^(\u064a\u0646|\u0641|\u0645\u0627\u0631|\u0623\u0628|\u0645\u0627\u064a|\u064a\u0648\u0646|\u064a\u0648\u0644|\u063a\u0634|\u0634\u062a|\u0623\u0643|\u0646|\u062f)/i,wide:/^(\u064a\u0646|\u0641|\u0645\u0627\u0631|\u0623\u0628|\u0645\u0627\u064a|\u064a\u0648\u0646|\u064a\u0648\u0644|\u063a\u0634|\u0634\u062a|\u0623\u0643|\u0646|\u062f)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u064a/i,/^\u0641/i,/^\u0645/i,/^\u0623/i,/^\u0645/i,/^\u064a/i,/^\u064a/i,/^\u063a/i,/^\u0634/i,/^\u0623/i,/^\u0646/i,/^\u062f/i],any:[/^\u064a\u0646/i,/^\u0641\u0628/i,/^\u0645\u0627\u0631/i,/^\u0623\u0628/i,/^\u0645\u0627\u064a/i,/^\u064a\u0648\u0646/i,/^\u064a\u0648\u0644/i,/^\u063a\u0634\u062a/i,/^\u0634/i,/^\u0623\u0643/i,/^\u0646/i,/^\u062f/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[\u062d\u0646\u062b\u0631\u062e\u062c\u0633]/i,short:/^(\u0623\u062d\u062f|\u0625\u062b\u0646\u064a\u0646|\u062b\u0644\u0627\u062b\u0627\u0621|\u0623\u0631\u0628\u0639\u0627\u0621|\u062e\u0645\u064a\u0633|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/i,abbreviated:/^(\u0623\u062d\u062f|\u0625\u062b\u0646|\u062b\u0644\u0627|\u0623\u0631\u0628|\u062e\u0645\u064a|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/i,wide:/^(\u0627\u0644\u0623\u062d\u062f|\u0627\u0644\u0625\u062b\u0646\u064a\u0646|\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621|\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621|\u0627\u0644\u062e\u0645\u064a\u0633|\u0627\u0644\u062c\u0645\u0639\u0629|\u0627\u0644\u0633\u0628\u062a)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u062d/i,/^\u0646/i,/^\u062b/i,/^\u0631/i,/^\u062e/i,/^\u062c/i,/^\u0633/i],wide:[/^\u0627\u0644\u0623\u062d\u062f/i,/^\u0627\u0644\u0625\u062b\u0646\u064a\u0646/i,/^\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621/i,/^\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621/i,/^\u0627\u0644\u062e\u0645\u064a\u0633/i,/^\u0627\u0644\u062c\u0645\u0639\u0629/i,/^\u0627\u0644\u0633\u0628\u062a/i],any:[/^\u0623\u062d/i,/^\u0625\u062b/i,/^\u062b/i,/^\u0623\u0631/i,/^\u062e/i,/^\u062c/i,/^\u0633/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},97912:(e,t,n)=>{var a=n(22411).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(59808)),i=a(n(4076)),r=a(n(11544)),d=a(n(35876)),u=a(n(87356)),l={code:"ar-MA",formatDistance:o.default,formatLong:i.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-ar-MA-index-js.a41cc2ae.chunk.js.map
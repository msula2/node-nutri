"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[79136],{5020:(i,a,t)=>{var e=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(t(23219)),r=e(t(61460)),d={ordinalNumber:(0,n.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0642|\u0628)/i,abbreviated:/^(\u0642\.?\s?\u0645\.?|\u0642\.?\s?\u0645\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f|\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0642\u0628\u0644/i,/^\u0628\u0639\u062f/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0631[1234]/i,wide:/^\u0627\u0644\u0631\u0628\u0639 [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return Number(i)+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[\u062c\u0641\u0645\u0623\u0633\u0646\u062f]/i,abbreviated:/^(\u062c\u0627\u0646|\u0641\u064a\u0641|\u0645\u0627\u0631|\u0623\u0641\u0631|\u0645\u0627\u064a|\u062c\u0648\u0627|\u062c\u0648\u064a|\u0623\u0648\u062a|\u0633\u0628\u062a|\u0623\u0643\u062a|\u0646\u0648\u0641|\u062f\u064a\u0633)/i,wide:/^(\u062c\u0627\u0646\u0641\u064a|\u0641\u064a\u0641\u0631\u064a|\u0645\u0627\u0631\u0633|\u0623\u0641\u0631\u064a\u0644|\u0645\u0627\u064a|\u062c\u0648\u0627\u0646|\u062c\u0648\u064a\u0644\u064a\u0629|\u0623\u0648\u062a|\u0633\u0628\u062a\u0645\u0628\u0631|\u0623\u0643\u062a\u0648\u0628\u0631|\u0646\u0648\u0641\u0645\u0628\u0631|\u062f\u064a\u0633\u0645\u0628\u0631)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u062c/i,/^\u0641/i,/^\u0645/i,/^\u0623/i,/^\u0645/i,/^\u062c/i,/^\u062c/i,/^\u0623/i,/^\u0633/i,/^\u0623/i,/^\u0646/i,/^\u062f/i],any:[/^\u062c\u0627\u0646/i,/^\u0641\u064a\u0641/i,/^\u0645\u0627\u0631/i,/^\u0623\u0641\u0631/i,/^\u0645\u0627\u064a/i,/^\u062c\u0648\u0627/i,/^\u062c\u0648\u064a/i,/^\u0623\u0648\u062a/i,/^\u0633\u0628\u062a/i,/^\u0623\u0643\u062a/i,/^\u0646\u0648\u0641/i,/^\u062f\u064a\u0633/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[\u062d\u0646\u062b\u0631\u062e\u062c\u0633]/i,short:/^(\u0623\u062d\u062f|\u0627\u062b\u0646\u064a\u0646|\u062b\u0644\u0627\u062b\u0627\u0621|\u0623\u0631\u0628\u0639\u0627\u0621|\u062e\u0645\u064a\u0633|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/i,abbreviated:/^(\u0623\u062d\u062f|\u0627\u062b\u0646|\u062b\u0644\u0627|\u0623\u0631\u0628|\u062e\u0645\u064a|\u062c\u0645\u0639\u0629|\u0633\u0628\u062a)/i,wide:/^(\u0627\u0644\u0623\u062d\u062f|\u0627\u0644\u0627\u062b\u0646\u064a\u0646|\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621|\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621|\u0627\u0644\u062e\u0645\u064a\u0633|\u0627\u0644\u062c\u0645\u0639\u0629|\u0627\u0644\u0633\u0628\u062a)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u062d/i,/^\u0646/i,/^\u062b/i,/^\u0631/i,/^\u062e/i,/^\u062c/i,/^\u0633/i],wide:[/^\u0627\u0644\u0623\u062d\u062f/i,/^\u0627\u0644\u0627\u062b\u0646\u064a\u0646/i,/^\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621/i,/^\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621/i,/^\u0627\u0644\u062e\u0645\u064a\u0633/i,/^\u0627\u0644\u062c\u0645\u0639\u0629/i,/^\u0627\u0644\u0633\u0628\u062a/i],any:[/^\u0623\u062d/i,/^\u0627\u062b/i,/^\u062b/i,/^\u0623\u0631/i,/^\u062e/i,/^\u062c/i,/^\u0633/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};a.default=d,i.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-ar-DZ-_lib-match-index-js.0ae8ff6f.chunk.js.map
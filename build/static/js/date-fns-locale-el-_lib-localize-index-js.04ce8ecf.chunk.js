"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[96371],{88056:(e,a,t)=>{var n=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=n(t(72788)),i={ordinalNumber:function(e,a){var t=Number(e),n=null===a||void 0===a?void 0:a.unit;return t+("year"===n||"month"===n?"\u03bf\u03c2":"week"===n||"dayOfYear"===n||"day"===n||"hour"===n||"date"===n?"\u03b7":"\u03bf")},era:(0,d.default)({values:{narrow:["\u03c0\u03a7","\u03bc\u03a7"],abbreviated:["\u03c0.\u03a7.","\u03bc.\u03a7."],wide:["\u03c0\u03c1\u03bf \u03a7\u03c1\u03b9\u03c3\u03c4\u03bf\u03cd","\u03bc\u03b5\u03c4\u03ac \u03a7\u03c1\u03b9\u03c3\u03c4\u03cc\u03bd"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u03a41","\u03a42","\u03a43","\u03a44"],wide:["1\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","2\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","3\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf","4\u03bf \u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,d.default)({values:{narrow:["\u0399","\u03a6","\u039c","\u0391","\u039c","\u0399","\u0399","\u0391","\u03a3","\u039f","\u039d","\u0394"],abbreviated:["\u0399\u03b1\u03bd","\u03a6\u03b5\u03b2","\u039c\u03ac\u03c1","\u0391\u03c0\u03c1","\u039c\u03ac\u03b9","\u0399\u03bf\u03cd\u03bd","\u0399\u03bf\u03cd\u03bb","\u0391\u03cd\u03b3","\u03a3\u03b5\u03c0","\u039f\u03ba\u03c4","\u039d\u03bf\u03ad","\u0394\u03b5\u03ba"],wide:["\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2","\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2","\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2","\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2","\u039c\u03ac\u03b9\u03bf\u03c2","\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2","\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2","\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2","\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2","\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2","\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2","\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2"]},defaultWidth:"wide",formattingValues:{narrow:["\u0399","\u03a6","\u039c","\u0391","\u039c","\u0399","\u0399","\u0391","\u03a3","\u039f","\u039d","\u0394"],abbreviated:["\u0399\u03b1\u03bd","\u03a6\u03b5\u03b2","\u039c\u03b1\u03c1","\u0391\u03c0\u03c1","\u039c\u03b1\u0390","\u0399\u03bf\u03c5\u03bd","\u0399\u03bf\u03c5\u03bb","\u0391\u03c5\u03b3","\u03a3\u03b5\u03c0","\u039f\u03ba\u03c4","\u039d\u03bf\u03b5","\u0394\u03b5\u03ba"],wide:["\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5","\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5","\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5","\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5","\u039c\u03b1\u0390\u03bf\u03c5","\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5","\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5","\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5","\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5","\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5","\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5","\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5"]},defaultFormattingWidth:"wide"}),day:(0,d.default)({values:{narrow:["\u039a","\u0394","T","\u03a4","\u03a0","\u03a0","\u03a3"],short:["\u039a\u03c5","\u0394\u03b5","\u03a4\u03c1","\u03a4\u03b5","\u03a0\u03ad","\u03a0\u03b1","\u03a3\u03ac"],abbreviated:["\u039a\u03c5\u03c1","\u0394\u03b5\u03c5","\u03a4\u03c1\u03af","\u03a4\u03b5\u03c4","\u03a0\u03ad\u03bc","\u03a0\u03b1\u03c1","\u03a3\u03ac\u03b2"],wide:["\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae","\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1","\u03a4\u03c1\u03af\u03c4\u03b7","\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7","\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7","\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae","\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"\u03c0\u03bc",pm:"\u03bc\u03bc",midnight:"\u03bc\u03b5\u03c3\u03ac\u03bd\u03c5\u03c7\u03c4\u03b1",noon:"\u03bc\u03b5\u03c3\u03b7\u03bc\u03ad\u03c1\u03b9",morning:"\u03c0\u03c1\u03c9\u03af",afternoon:"\u03b1\u03c0\u03cc\u03b3\u03b5\u03c5\u03bc\u03b1",evening:"\u03b2\u03c1\u03ac\u03b4\u03c5",night:"\u03bd\u03cd\u03c7\u03c4\u03b1"},abbreviated:{am:"\u03c0.\u03bc.",pm:"\u03bc.\u03bc.",midnight:"\u03bc\u03b5\u03c3\u03ac\u03bd\u03c5\u03c7\u03c4\u03b1",noon:"\u03bc\u03b5\u03c3\u03b7\u03bc\u03ad\u03c1\u03b9",morning:"\u03c0\u03c1\u03c9\u03af",afternoon:"\u03b1\u03c0\u03cc\u03b3\u03b5\u03c5\u03bc\u03b1",evening:"\u03b2\u03c1\u03ac\u03b4\u03c5",night:"\u03bd\u03cd\u03c7\u03c4\u03b1"},wide:{am:"\u03c0.\u03bc.",pm:"\u03bc.\u03bc.",midnight:"\u03bc\u03b5\u03c3\u03ac\u03bd\u03c5\u03c7\u03c4\u03b1",noon:"\u03bc\u03b5\u03c3\u03b7\u03bc\u03ad\u03c1\u03b9",morning:"\u03c0\u03c1\u03c9\u03af",afternoon:"\u03b1\u03c0\u03cc\u03b3\u03b5\u03c5\u03bc\u03b1",evening:"\u03b2\u03c1\u03ac\u03b4\u03c5",night:"\u03bd\u03cd\u03c7\u03c4\u03b1"}},defaultWidth:"wide"})};a.default=i,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-el-_lib-localize-index-js.04ce8ecf.chunk.js.map
"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[19448,65780,20612,89408,79140,87056],{1516:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={lessThanXSeconds:{one:{standalone:"manje od 1 sekunde",withPrepositionAgo:"manje od 1 sekunde",withPrepositionIn:"manje od 1 sekundu"},dual:"manje od {{count}} sekunde",other:"manje od {{count}} sekundi"},xSeconds:{one:{standalone:"1 sekunda",withPrepositionAgo:"1 sekunde",withPrepositionIn:"1 sekundu"},dual:"{{count}} sekunde",other:"{{count}} sekundi"},halfAMinute:"pola minute",lessThanXMinutes:{one:{standalone:"manje od 1 minute",withPrepositionAgo:"manje od 1 minute",withPrepositionIn:"manje od 1 minutu"},dual:"manje od {{count}} minute",other:"manje od {{count}} minuta"},xMinutes:{one:{standalone:"1 minuta",withPrepositionAgo:"1 minute",withPrepositionIn:"1 minutu"},dual:"{{count}} minute",other:"{{count}} minuta"},aboutXHours:{one:{standalone:"oko 1 sat",withPrepositionAgo:"oko 1 sat",withPrepositionIn:"oko 1 sat"},dual:"oko {{count}} sata",other:"oko {{count}} sati"},xHours:{one:{standalone:"1 sat",withPrepositionAgo:"1 sat",withPrepositionIn:"1 sat"},dual:"{{count}} sata",other:"{{count}} sati"},xDays:{one:{standalone:"1 dan",withPrepositionAgo:"1 dan",withPrepositionIn:"1 dan"},dual:"{{count}} dana",other:"{{count}} dana"},aboutXWeeks:{one:{standalone:"oko 1 tjedan",withPrepositionAgo:"oko 1 tjedan",withPrepositionIn:"oko 1 tjedan"},dual:"oko {{count}} tjedna",other:"oko {{count}} tjedana"},xWeeks:{one:{standalone:"1 tjedan",withPrepositionAgo:"1 tjedan",withPrepositionIn:"1 tjedan"},dual:"{{count}} tjedna",other:"{{count}} tjedana"},aboutXMonths:{one:{standalone:"oko 1 mjesec",withPrepositionAgo:"oko 1 mjesec",withPrepositionIn:"oko 1 mjesec"},dual:"oko {{count}} mjeseca",other:"oko {{count}} mjeseci"},xMonths:{one:{standalone:"1 mjesec",withPrepositionAgo:"1 mjesec",withPrepositionIn:"1 mjesec"},dual:"{{count}} mjeseca",other:"{{count}} mjeseci"},aboutXYears:{one:{standalone:"oko 1 godinu",withPrepositionAgo:"oko 1 godinu",withPrepositionIn:"oko 1 godinu"},dual:"oko {{count}} godine",other:"oko {{count}} godina"},xYears:{one:{standalone:"1 godina",withPrepositionAgo:"1 godine",withPrepositionIn:"1 godinu"},dual:"{{count}} godine",other:"{{count}} godina"},overXYears:{one:{standalone:"preko 1 godinu",withPrepositionAgo:"preko 1 godinu",withPrepositionIn:"preko 1 godinu"},dual:"preko {{count}} godine",other:"preko {{count}} godina"},almostXYears:{one:{standalone:"gotovo 1 godinu",withPrepositionAgo:"gotovo 1 godinu",withPrepositionIn:"gotovo 1 godinu"},dual:"gotovo {{count}} godine",other:"gotovo {{count}} godina"}},n=function(e,o,n){var a,i=t[e];return a="string"===typeof i?i:1===o?null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?i.one.withPrepositionIn:i.one.withPrepositionAgo:i.one.standalone:o%10>1&&o%10<5&&"1"!==String(o).substr(-2,1)?i.dual.replace("{{count}}",String(o)):i.other.replace("{{count}}",String(o)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"za "+a:"prije "+a:a};o.default=n,e.exports=o.default},79984:(e,o,t)=>{var n=t(22411).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(t(71808)),i={date:(0,a.default)({formats:{full:"EEEE, d. MMMM y.",long:"d. MMMM y.",medium:"d. MMM y.",short:"dd. MM. y."},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss (zzzz)",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} 'u' {{time}}",long:"{{date}} 'u' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};o.default=i,e.exports=o.default},44404:(e,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={lastWeek:function(e){switch(e.getUTCDay()){case 0:return"'pro\u0161lu nedjelju u' p";case 3:return"'pro\u0161lu srijedu u' p";case 6:return"'pro\u0161lu subotu u' p";default:return"'pro\u0161li' EEEE 'u' p"}},yesterday:"'ju\u010der u' p",today:"'danas u' p",tomorrow:"'sutra u' p",nextWeek:function(e){switch(e.getUTCDay()){case 0:return"'idu\u0107u nedjelju u' p";case 3:return"'idu\u0107u srijedu u' p";case 6:return"'idu\u0107u subotu u' p";default:return"'pro\u0161li' EEEE 'u' p"}},other:"P"},n=function(e,o,n,a){var i=t[e];return"function"===typeof i?i(o):i};o.default=n,e.exports=o.default},9220:(e,o,t)=>{var n=t(22411).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(t(72788)),i={ordinalNumber:function(e,o){return Number(e)+"."},era:(0,a.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Kr.","po. Kr."],wide:["Prije Krista","Poslije Krista"]},defaultWidth:"wide"}),quarter:(0,a.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,a.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["sije\u010dnja","velja\u010de","o\u017eujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"]},defaultFormattingWidth:"wide"}),day:(0,a.default)({values:{narrow:["N","P","U","S","\u010c","P","S"],short:["ned","pon","uto","sri","\u010det","pet","sub"],abbreviated:["ned","pon","uto","sri","\u010det","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"nave\u010der",night:"no\u0107u"},abbreviated:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"nave\u010der",night:"no\u0107u"},wide:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"nave\u010der",night:"no\u0107u"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"nave\u010der",night:"no\u0107u"},abbreviated:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"nave\u010der",night:"no\u0107u"},wide:{am:"AM",pm:"PM",midnight:"pono\u0107",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"nave\u010der",night:"no\u0107u"}},defaultFormattingWidth:"wide"})};o.default=i,e.exports=o.default},69064:(e,o,t)=>{var n=t(22411).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(t(61460)),i={ordinalNumber:(0,n(t(23219)).default)({matchPattern:/^(\d+)\./i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,a.default)({matchPatterns:{narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,wide:/^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^pr/i,/^(po|nova)/i]},defaultParseWidth:"any"}),quarter:(0,a.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,a.default)({matchPatterns:{narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(sij|velj|(o\u017eu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,wide:/^((sije\u010danj|sije\u010dnja|sijecanj|sijecnja)|(velja\u010da|velja\u010de|veljaca|veljace)|(o\u017eujak|o\u017eujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i,/5/i,/6/i,/7/i,/8/i,/9/i,/10/i,/11/i,/12/i],abbreviated:[/^sij/i,/^velj/i,/^(o\u017eu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i],wide:[/^sij/i,/^velj/i,/^(o\u017eu|ozu)/i,/^tra/i,/^svi/i,/^lip/i,/^srp/i,/^kol/i,/^ruj/i,/^lis/i,/^stu/i,/^pro/i]},defaultParseWidth:"wide"}),day:(0,a.default)({matchPatterns:{narrow:/^[npus\u010dc]/i,short:/^(ned|pon|uto|sri|(\u010det|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sri|(\u010det|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(\u010detvrtak|cetvrtak)|petak|subota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,a.default)({matchPatterns:{any:/^(am|pm|ponoc|pono\u0107|(po)?podne|navecer|nave\u010der|no\u0107u|poslije podne|ujutro)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(navece|nave\u010de)/i,night:/(nocu|no\u0107u)/i}},defaultParseWidth:"any"})};o.default=i,e.exports=o.default},50760:(e,o,t)=>{var n=t(22411).default;Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=n(t(1516)),i=n(t(79984)),r=n(t(44404)),u=n(t(9220)),d=n(t(69064)),s={code:"hr",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:u.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};o.default=s,e.exports=o.default}}]);
//# sourceMappingURL=date-fns-locale-hr-index-js.47bfd54c.chunk.js.map
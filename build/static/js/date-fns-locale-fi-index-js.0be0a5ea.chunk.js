"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[69048,19500,22828,82456,61176,83224],{39584:(e,a)=>{function t(e){return e.replace(/sekuntia?/,"sekunnin")}function i(e){return e.replace(/minuuttia?/,"minuutin")}function u(e){return e.replace(/tuntia?/,"tunnin")}function n(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function l(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:t},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:t},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:i},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:i},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:u},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:u},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(e){return e.replace(/p\xe4iv\xe4\xe4?/,"p\xe4iv\xe4n")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:n},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:n},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:l},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:l},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:o}},s=function(e,a,t){var i=r[e],u=1===a?i.one:i.other.replace("{{count}}",String(a));return null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?i.futureTense(u)+" kuluttua":u+" sitten":u};a.default=s,e.exports=a.default},33440:(e,a,t)=>{var i=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=i(t(71808)),n={date:(0,u.default)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};a.default=n,e.exports=a.default},32760:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'t\xe4n\xe4\xe4n klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"},i=function(e,a,i,u){return t[e]};a.default=i,e.exports=a.default},28188:(e,a,t)=>{var i=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=i(t(72788)),n={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},l={narrow:n.narrow,abbreviated:n.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kes\xe4kuuta","hein\xe4kuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},o={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},r={narrow:o.narrow,short:o.short,abbreviated:o.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},s={ordinalNumber:function(e,a){return Number(e)+"."},era:(0,u.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","j\xe4lkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,u.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,u.default)({values:n,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"}),day:(0,u.default)({values:o,defaultWidth:"wide",formattingValues:r,defaultFormattingWidth:"wide"}),dayPeriod:(0,u.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},wide:{am:"ap",pm:"ip",midnight:"keskiy\xf6ll\xe4",noon:"keskip\xe4iv\xe4ll\xe4",morning:"aamup\xe4iv\xe4ll\xe4",afternoon:"iltap\xe4iv\xe4ll\xe4",evening:"illalla",night:"y\xf6ll\xe4"}},defaultWidth:"wide"})};a.default=s,e.exports=a.default},6336:(e,a,t)=>{var i=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=i(t(61460)),n={ordinalNumber:(0,i(t(23219)).default)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,u.default)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|j\xe4lkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,u.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,u.default)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kes\xe4|hein\xe4|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kes\xe4kuu|hein\xe4kuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,u.default)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,u.default)({matchPatterns:{narrow:/^(ap|ip|keskiy\xf6|keskip\xe4iv\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i,any:/^(ap|ip|keskiy\xf6ll\xe4|keskip\xe4iv\xe4ll\xe4|aamup\xe4iv\xe4ll\xe4|iltap\xe4iv\xe4ll\xe4|illalla|y\xf6ll\xe4)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiy\xf6/i,noon:/^keskip\xe4iv\xe4/i,morning:/aamup\xe4iv\xe4ll\xe4/i,afternoon:/iltap\xe4iv\xe4ll\xe4/i,evening:/illalla/i,night:/y\xf6ll\xe4/i}},defaultParseWidth:"any"})};a.default=n,e.exports=a.default},50988:(e,a,t)=>{var i=t(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=i(t(39584)),n=i(t(33440)),l=i(t(32760)),o=i(t(28188)),r=i(t(6336)),s={code:"fi",formatDistance:u.default,formatLong:n.default,formatRelative:l.default,localize:o.default,match:r.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=s,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-fi-index-js.0be0a5ea.chunk.js.map
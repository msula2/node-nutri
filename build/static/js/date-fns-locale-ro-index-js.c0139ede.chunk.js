"use strict";(self.webpackChunknutri=self.webpackChunknutri||[]).push([[82376,70816,58272,2820,57184,17640],{44880:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={lessThanXSeconds:{one:"mai pu\u021bin de o secund\u0103",other:"mai pu\u021bin de {{count}} secunde"},xSeconds:{one:"1 secund\u0103",other:"{{count}} secunde"},halfAMinute:"jum\u0103tate de minut",lessThanXMinutes:{one:"mai pu\u021bin de un minut",other:"mai pu\u021bin de {{count}} minute"},xMinutes:{one:"1 minut",other:"{{count}} minute"},aboutXHours:{one:"circa 1 or\u0103",other:"circa {{count}} ore"},xHours:{one:"1 or\u0103",other:"{{count}} ore"},xDays:{one:"1 zi",other:"{{count}} zile"},aboutXWeeks:{one:"circa o s\u0103pt\u0103m\xe2n\u0103",other:"circa {{count}} s\u0103pt\u0103m\xe2ni"},xWeeks:{one:"1 s\u0103pt\u0103m\xe2n\u0103",other:"{{count}} s\u0103pt\u0103m\xe2ni"},aboutXMonths:{one:"circa 1 lun\u0103",other:"circa {{count}} luni"},xMonths:{one:"1 lun\u0103",other:"{{count}} luni"},aboutXYears:{one:"circa 1 an",other:"circa {{count}} ani"},xYears:{one:"1 an",other:"{{count}} ani"},overXYears:{one:"peste 1 an",other:"peste {{count}} ani"},almostXYears:{one:"aproape 1 an",other:"aproape {{count}} ani"}},t=function(e,a,t){var n,r=i[e];return n="string"===typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"\xeen "+n:n+" \xeen urm\u0103":n};a.default=t,e.exports=a.default},18488:(e,a,i)=>{var t=i(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(i(71808)),r={date:(0,n.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'la' {{time}}",long:"{{date}} 'la' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},24536:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={lastWeek:"eeee 'trecut\u0103 la' p",yesterday:"'ieri la' p",today:"'ast\u0103zi la' p",tomorrow:"'m\xe2ine la' p",nextWeek:"eeee 'viitoare la' p",other:"P"},t=function(e,a,t,n){return i[e]};a.default=t,e.exports=a.default},10436:(e,a,i)=>{var t=i(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(i(72788)),r={ordinalNumber:function(e,a){return String(e)},era:(0,n.default)({values:{narrow:["\xce","D"],abbreviated:["\xce.d.C.","D.C."],wide:["\xcenainte de Cristos","Dup\u0103 Cristos"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","s\xe2"],abbreviated:["dum","lun","mar","mie","joi","vin","s\xe2m"],wide:["duminic\u0103","luni","mar\u021bi","miercuri","joi","vineri","s\xe2mb\u0103t\u0103"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nop\u021bii",noon:"amiaz\u0103",morning:"diminea\u021b\u0103",afternoon:"dup\u0103-amiaz\u0103",evening:"sear\u0103",night:"noapte"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},36328:(e,a,i)=>{var t=i(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(i(61460)),r={ordinalNumber:(0,t(i(23219)).default)({matchPattern:/^(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(\xce|D)/i,abbreviated:/^(\xce\.?\s?d\.?\s?C\.?|\xce\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,wide:/^(\xcenainte de Cristos|\xcenaintea erei noastre|Dup\u0103 Cristos|Era noastr\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\xceC/i,/^DC/i],wide:[/^(\xcenainte de Cristos|\xcenaintea erei noastre)/i,/^(Dup\u0103 Cristos|Era noastr\u0103)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^trimestrul [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[ifmaasond]/i,abbreviated:/^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,wide:/^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^f/i,/^m/i,/^a/i,/^m/i,/^i/i,/^i/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ia/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^iun/i,/^iul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(d|l|ma|mi|j|v|s)/i,abbreviated:/^(dum|lun|mar|mie|jo|vi|s\xe2)/i,wide:/^(duminica|luni|mar\u0163i|miercuri|joi|vineri|s\xe2mb\u0103t\u0103)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^mi/i,/^j/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mn|a|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i,any:/^([ap]\.?\s?m\.?|miezul nop\u021bii|amiaza|(diminea\u0163a|dup\u0103-amiaza|seara|noaptea))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/amiaza/i,morning:/diminea\u0163a/i,afternoon:/dup\u0103-amiaza/i,evening:/seara/i,night:/noaptea/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},47956:(e,a,i)=>{var t=i(22411).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(i(44880)),r=t(i(18488)),o=t(i(24536)),d=t(i(10436)),u=t(i(36328)),m={code:"ro",formatDistance:n.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=m,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-ro-index-js.c0139ede.chunk.js.map
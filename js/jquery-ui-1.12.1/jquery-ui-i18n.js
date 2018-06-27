/*! jQuery UI - v1.10.4 - 2014-02-16
* http://jqueryui.com
* Includes: jquery.ui.datepicker-af.js, jquery.ui.datepicker-ar-DZ.js, jquery.ui.datepicker-ar.js, jquery.ui.datepicker-az.js, jquery.ui.datepicker-bg.js, jquery.ui.datepicker-bs.js, jquery.ui.datepicker-ca.js, jquery.ui.datepicker-cs.js, jquery.ui.datepicker-cy-GB.js, jquery.ui.datepicker-da.js, jquery.ui.datepicker-de.js, jquery.ui.datepicker-el.js, jquery.ui.datepicker-en-AU.js, jquery.ui.datepicker-en-GB.js, jquery.ui.datepicker-en-NZ.js, jquery.ui.datepicker-eo.js, jquery.ui.datepicker-es.js, jquery.ui.datepicker-et.js, jquery.ui.datepicker-eu.js, jquery.ui.datepicker-fa.js, jquery.ui.datepicker-fi.js, jquery.ui.datepicker-fo.js, jquery.ui.datepicker-fr-CH.js, jquery.ui.datepicker-fr.js, jquery.ui.datepicker-gl.js, jquery.ui.datepicker-he.js, jquery.ui.datepicker-hi.js, jquery.ui.datepicker-hr.js, jquery.ui.datepicker-hu.js, jquery.ui.datepicker-hy.js, jquery.ui.datepicker-id.js, jquery.ui.datepicker-is.js, jquery.ui.datepicker-it.js, jquery.ui.datepicker-ja.js, jquery.ui.datepicker-ka.js, jquery.ui.datepicker-kk.js, jquery.ui.datepicker-km.js, jquery.ui.datepicker-ko.js, jquery.ui.datepicker-lb.js, jquery.ui.datepicker-lt.js, jquery.ui.datepicker-lv.js, jquery.ui.datepicker-mk.js, jquery.ui.datepicker-ml.js, jquery.ui.datepicker-ms.js, jquery.ui.datepicker-nl-BE.js, jquery.ui.datepicker-nl.js, jquery.ui.datepicker-no.js, jquery.ui.datepicker-pl.js, jquery.ui.datepicker-pt-BR.js, jquery.ui.datepicker-pt.js, jquery.ui.datepicker-rm.js, jquery.ui.datepicker-ro.js, jquery.ui.datepicker-ru.js, jquery.ui.datepicker-sk.js, jquery.ui.datepicker-sl.js, jquery.ui.datepicker-sq.js, jquery.ui.datepicker-sr-SR.js, jquery.ui.datepicker-sr.js, jquery.ui.datepicker-sv.js, jquery.ui.datepicker-ta.js, jquery.ui.datepicker-th.js, jquery.ui.datepicker-tj.js, jquery.ui.datepicker-tr.js, jquery.ui.datepicker-uk.js, jquery.ui.datepicker-vi.js, jquery.ui.datepicker-zh-CN.js, jquery.ui.datepicker-zh-HK.js, jquery.ui.datepicker-zh-TW.js, jquery.ui.datepicker-be.js, jquery.ui.datepicker-fr-CA.js, jquery.ui.datepicker-ky.js, jquery.ui.datepicker-nb.js, jquery.ui.datepicker-nn.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

/* Written by Renier Pretorius. */
jQuery(function($){
	$.datepicker.regional['af'] = {
		closeText: 'Selekteer',
		prevText: 'Vorige',
		nextText: 'Volgende',
		currentText: 'Vandag',
		monthNames: ['Januarie','Februarie','Maart','April','Mei','Junie',
		'Julie','Augustus','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
		'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
		dayNames: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
		dayNamesShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
		dayNamesMin: ['So','Ma','Di','Wo','Do','Vr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['af']);
});
/* Mohamed Cherif BOUCHELAGHEM -- cherifbouchelaghem@yahoo.fr */

jQuery(function($){
	$.datepicker.regional['ar-DZ'] = {
		closeText: '?????',
		prevText: '&#x3C;??????',
		nextText: '??????&#x3E;',
		currentText: '?????',
		monthNames: ['?????', '?????', '????', '?????', '???', '????',
		'??????', '???', '??????','??????', '??????', '??????'],
		monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		dayNames: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
		dayNamesShort: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
		dayNamesMin: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
		weekHeader: '?????',
		dateFormat: 'dd/mm/yy',
		firstDay: 6,
  		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ar-DZ']);
});
/* Khaled Alhourani -- me@khaledalhourani.com */
/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name ?????? - ????? and there isn't any Arabic roots for these months */
jQuery(function($){
	$.datepicker.regional['ar'] = {
		closeText: '?????',
		prevText: '&#x3C;??????',
		nextText: '??????&#x3E;',
		currentText: '?????',
		monthNames: ['????? ??????', '????', '????', '?????', '????', '??????',
		'????', '??', '?????',	'????? ?????', '????? ??????', '????? ?????'],
		monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		dayNames: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
		dayNamesShort: ['?????', '???????', '????????', '????????', '??????', '??????', '?????'],
		dayNamesMin: ['?', '?', '?', '?', '?', '?', '?'],
		weekHeader: '?????',
		dateFormat: 'dd/mm/yy',
		firstDay: 6,
  		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ar']);
});
/* Written by Jamil Najafov (necefov33@gmail.com). */
jQuery(function($) {
	$.datepicker.regional['az'] = {
		closeText: 'Bagla',
		prevText: '&#x3C;Geri',
		nextText: 'Ir?li&#x3E;',
		currentText: 'Bugun',
		monthNames: ['Yanvar','Fevral','Mart','Aprel','May','Iyun',
		'Iyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
		monthNamesShort: ['Yan','Fev','Mar','Apr','May','Iyun',
		'Iyul','Avq','Sen','Okt','Noy','Dek'],
		dayNames: ['Bazar','Bazar ert?si','C?rs?nb? axsam?','C?rs?nb?','Cum? axsam?','Cum?','S?nb?'],
		dayNamesShort: ['B','Be','Ca','C','Ca','C','S'],
		dayNamesMin: ['B','B','C','С','C','C','S'],
		weekHeader: 'Hf',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['az']);
});
/* Written by Stoyan Kyosev (http://svest.org). */
jQuery(function($){
	$.datepicker.regional['bg'] = {
		closeText: 'затвори',
		prevText: '&#x3C;назад',
		nextText: 'напред&#x3E;',
		nextBigText: '&#x3E;&#x3E;',
		currentText: 'днес',
		monthNames: ['Януари','Февруари','Март','Април','Май','Юни',
		'Юли','Август','Септември','Октомври','Ноември','Декември'],
		monthNamesShort: ['Яну','Фев','Мар','Апр','Май','Юни',
		'Юли','Авг','Сеп','Окт','Нов','Дек'],
		dayNames: ['Неделя','Понеделник','Вторник','Сряда','Четвъртък','Петък','Събота'],
		dayNamesShort: ['Нед','Пон','Вто','Сря','Чет','Пет','Съб'],
		dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Съ'],
		weekHeader: 'Wk',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['bg']);
});
/* Written by Kenan Konjo. */
jQuery(function($){
	$.datepicker.regional['bs'] = {
		closeText: 'Zatvori',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Danas',
		monthNames: ['Januar','Februar','Mart','April','Maj','Juni',
		'Juli','August','Septembar','Oktobar','Novembar','Decembar'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljak','Utorak','Srijeda','Cetvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sri','Cet','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','Ce','Pe','Su'],
		weekHeader: 'Wk',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['bs']);
});
/* Writers: (joan.leon@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ca'] = {
		closeText: 'Tanca',
		prevText: 'Anterior',
		nextText: 'Seguent',
		currentText: 'Avui',
		monthNames: ['gener','febrer','marc','abril','maig','juny',
		'juliol','agost','setembre','octubre','novembre','desembre'],
		monthNamesShort: ['gen','feb','marc','abr','maig','juny',
		'jul','ag','set','oct','nov','des'],
		dayNames: ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
		dayNamesShort: ['dg','dl','dt','dc','dj','dv','ds'],
		dayNamesMin: ['dg','dl','dt','dc','dj','dv','ds'],
		weekHeader: 'Set',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ca']);
});
/* Written by Tomas Muller (tomas@tomas-muller.net). */
jQuery(function($){
	$.datepicker.regional['cs'] = {
		closeText: 'Zavrit',
		prevText: '&#x3C;Drive',
		nextText: 'Pozdeji&#x3E;',
		currentText: 'Nyni',
		monthNames: ['leden','unor','brezen','duben','kveten','cerven',
		'cervenec','srpen','zari','rijen','listopad','prosinec'],
		monthNamesShort: ['led','uno','bre','dub','kve','cer',
		'cvc','srp','zar','rij','lis','pro'],
		dayNames: ['nedele', 'pondeli', 'utery', 'streda', 'ctvrtek', 'patek', 'sobota'],
		dayNamesShort: ['ne', 'po', 'ut', 'st', 'ct', 'pa', 'so'],
		dayNamesMin: ['ne','po','ut','st','ct','pa','so'],
		weekHeader: 'Tyd',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['cs']);
});
/* Written by William Griffiths. */
jQuery(function($){
	$.datepicker.regional['cy-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['Ionawr','Chwefror','Mawrth','Ebrill','Mai','Mehefin',
		'Gorffennaf','Awst','Medi','Hydref','Tachwedd','Rhagfyr'],
		monthNamesShort: ['Ion', 'Chw', 'Maw', 'Ebr', 'Mai', 'Meh',
		'Gor', 'Aws', 'Med', 'Hyd', 'Tac', 'Rha'],
		dayNames: ['Dydd Sul', 'Dydd Llun', 'Dydd Mawrth', 'Dydd Mercher', 'Dydd Iau', 'Dydd Gwener', 'Dydd Sadwrn'],
		dayNamesShort: ['Sul', 'Llu', 'Maw', 'Mer', 'Iau', 'Gwe', 'Sad'],
		dayNamesMin: ['Su','Ll','Ma','Me','Ia','Gw','Sa'],
		weekHeader: 'Wy',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['cy-GB']);
});
/* Written by Jan Christensen ( deletestuff@gmail.com). */
jQuery(function($){
	$.datepicker.regional['da'] = {
		closeText: 'Luk',
		prevText: '&#x3C;Forrige',
		nextText: 'N?ste&#x3E;',
		currentText: 'Idag',
		monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
		'Juli','August','September','Oktober','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['Sondag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','Lordag'],
		dayNamesShort: ['Son','Man','Tir','Ons','Tor','Fre','Lor'],
		dayNamesMin: ['So','Ma','Ti','On','To','Fr','Lo'],
		weekHeader: 'Uge',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['da']);
});
/* Written by Milian Wolff (mail@milianw.de). */
jQuery(function($){
	$.datepicker.regional['de'] = {
		closeText: 'Schlie?en',
		prevText: '&#x3C;Zuruck',
		nextText: 'Vor&#x3E;',
		currentText: 'Heute',
		monthNames: ['Januar','Februar','Marz','April','Mai','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dez'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		weekHeader: 'KW',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['de']);
});
/* Written by Alex Cicovic (http://www.alexcicovic.com) */
jQuery(function($){
	$.datepicker.regional['el'] = {
		closeText: '????????',
		prevText: '????????????',
		nextText: '????????',
		currentText: '?????? ?????',
		monthNames: ['??????????','???????????','???????','????????','?????','???????',
		'???????','?????????','???????????','?????????','?????????','??????????'],
		monthNamesShort: ['???','???','???','???','???','????',
		'????','???','???','???','???','???'],
		dayNames: ['???????','???????','?????','???????','??????','?????????','???????'],
		dayNamesShort: ['???','???','???','???','???','???','???'],
		dayNamesMin: ['??','??','??','??','??','??','??'],
		weekHeader: '???',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['el']);
});
/* Based on the en-GB initialisation. */
jQuery(function($){
	$.datepicker.regional['en-AU'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-AU']);
});
/* Written by Stuart. */
jQuery(function($){
	$.datepicker.regional['en-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-GB']);
});
/* Based on the en-GB initialisation. */
jQuery(function($){
	$.datepicker.regional['en-NZ'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-NZ']);
});
/* Written by Olivier M. (olivierweb@ifrance.com). */
jQuery(function($){
	$.datepicker.regional['eo'] = {
		closeText: 'Fermi',
		prevText: '&#x3C;Anta',
		nextText: 'Sekv&#x3E;',
		currentText: 'Nuna',
		monthNames: ['Januaro','Februaro','Marto','Aprilo','Majo','Junio',
		'Julio','Augusto','Septembro','Oktobro','Novembro','Decembro'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['Dimanco','Lundo','Mardo','Merkredo','Jaudo','Vendredo','Sabato'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jau','Ven','Sab'],
		dayNamesMin: ['Di','Lu','Ma','Me','Ja','Ve','Sa'],
		weekHeader: 'Sb',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['eo']);
});
/* Traducido por Vester (xvester@gmail.com). */
jQuery(function($){
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '&#x3C;Ant',
		nextText: 'Sig&#x3E;',
		currentText: 'Hoy',
		monthNames: ['enero','febrero','marzo','abril','mayo','junio',
		'julio','agosto','septiembre','octubre','noviembre','diciembre'],
		monthNamesShort: ['ene','feb','mar','abr','may','jun',
		'jul','ogo','sep','oct','nov','dic'],
		dayNames: ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'],
		dayNamesShort: ['dom','lun','mar','mie','juv','vie','sab'],
		dayNamesMin: ['D','L','M','X','J','V','S'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['es']);
});
/* Written by Mart Somermaa (mrts.pydev at gmail com). */
jQuery(function($){
	$.datepicker.regional['et'] = {
		closeText: 'Sulge',
		prevText: 'Eelnev',
		nextText: 'Jargnev',
		currentText: 'Tana',
		monthNames: ['Jaanuar','Veebruar','Marts','Aprill','Mai','Juuni',
		'Juuli','August','September','Oktoober','November','Detsember'],
		monthNamesShort: ['Jaan', 'Veebr', 'Marts', 'Apr', 'Mai', 'Juuni',
		'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
		dayNames: ['Puhapaev', 'Esmaspaev', 'Teisipaev', 'Kolmapaev', 'Neljapaev', 'Reede', 'Laupaev'],
		dayNamesShort: ['Puhap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
		dayNamesMin: ['P','E','T','K','N','R','L'],
		weekHeader: 'nad',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['et']);
});
/* Karrikas-ek itzulia (karrikas@karrikas.com) */
jQuery(function($){
	$.datepicker.regional['eu'] = {
		closeText: 'Egina',
		prevText: '&#x3C;Aur',
		nextText: 'Hur&#x3E;',
		currentText: 'Gaur',
		monthNames: ['urtarrila','otsaila','martxoa','apirila','maiatza','ekaina',
			'uztaila','abuztua','iraila','urria','azaroa','abendua'],
		monthNamesShort: ['urt.','ots.','mar.','api.','mai.','eka.',
			'uzt.','abu.','ira.','urr.','aza.','abe.'],
		dayNames: ['igandea','astelehena','asteartea','asteazkena','osteguna','ostirala','larunbata'],
		dayNamesShort: ['ig.','al.','ar.','az.','og.','ol.','lr.'],
		dayNamesMin: ['ig','al','ar','az','og','ol','lr'],
		weekHeader: 'As',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['eu']);
});
/* Javad Mowlanezhad -- jmowla@gmail.com */
/* Jalali calendar should supported soon! (Its implemented but I have to test it) */
jQuery(function($) {
	$.datepicker.regional['fa'] = {
		closeText: '????',
		prevText: '&#x3C;????',
		nextText: '????&#x3E;',
		currentText: '?????',
		monthNames: [
			'???????',
			'????????',
			'?????',
			'???',
			'?????',
			'??????',
			'???',
			'????',
			'???',
			'??',
			'????',
			'?????'
		],
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		dayNames: [
			'??????',
			'??????',
			'???????',
			'????????',
			'???????',
			'????',
			'????'
		],
		dayNamesShort: [
			'?',
			'?',
			'?',
			'?',
			'?',
			'?',
			'?'
		],
		dayNamesMin: [
			'?',
			'?',
			'?',
			'?',
			'?',
			'?',
			'?'
		],
		weekHeader: '??',
		dateFormat: 'yy/mm/dd',
		firstDay: 6,
		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fa']);
});
/* Written by Harri Kilpio (harrikilpio@gmail.com). */
jQuery(function($){
	$.datepicker.regional['fi'] = {
		closeText: 'Sulje',
		prevText: '&#xAB;Edellinen',
		nextText: 'Seuraava&#xBB;',
		currentText: 'Tanaan',
		monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesakuu',
		'Heinakuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
		monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kesa',
		'Heina','Elo','Syys','Loka','Marras','Joulu'],
		dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','La'],
		dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
		dayNamesMin: ['Su','Ma','Ti','Ke','To','Pe','La'],
		weekHeader: 'Vk',
		dateFormat: 'd.m.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fi']);
});
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */
jQuery(function($){
	$.datepicker.regional['fo'] = {
		closeText: 'Lat aftur',
		prevText: '&#x3C;Fyrra',
		nextText: 'N?sta&#x3E;',
		currentText: 'I dag',
		monthNames: ['Januar','Februar','Mars','April','Mei','Juni',
		'Juli','August','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
		'Jul','Aug','Sep','Okt','Nov','Des'],
		dayNames: ['Sunnudagur','Manadagur','Tysdagur','Mikudagur','Hosdagur','Friggjadagur','Leyardagur'],
		dayNamesShort: ['Sun','Man','Tys','Mik','Hos','Fri','Ley'],
		dayNamesMin: ['Su','Ma','Ty','Mi','Ho','Fr','Le'],
		weekHeader: 'Vk',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fo']);
});
/* Written Martin Voelkle (martin.voelkle@e-tc.ch). */
jQuery(function($){
	$.datepicker.regional['fr-CH'] = {
		closeText: 'Fermer',
		prevText: '&#x3C;Prec',
		nextText: 'Suiv&#x3E;',
		currentText: 'Courant',
		monthNames: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin',
			'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'],
		monthNamesShort: ['janv.', 'fevr.', 'mars', 'avril', 'mai', 'juin',
			'juil.', 'aout', 'sept.', 'oct.', 'nov.', 'dec.'],
		dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
		dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
		dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		weekHeader: 'Sm',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fr-CH']);
});
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  Stephane Nahmani (sholby@sholby.net),
			  Stephane Raimbault <stephane.raimbault@gmail.com> */
jQuery(function($){
	$.datepicker.regional['fr'] = {
		closeText: 'Fermer',
		prevText: 'Precedent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin',
			'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'],
		monthNamesShort: ['janv.', 'fevr.', 'mars', 'avril', 'mai', 'juin',
			'juil.', 'aout', 'sept.', 'oct.', 'nov.', 'dec.'],
		dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
		dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
		dayNamesMin: ['D','L','M','M','J','V','S'],
		weekHeader: 'Sem.',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
});
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */
jQuery(function($){
	$.datepicker.regional['gl'] = {
		closeText: 'Pechar',
		prevText: '&#x3C;Ant',
		nextText: 'Seg&#x3E;',
		currentText: 'Hoxe',
		monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xuno',
		'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
		monthNamesShort: ['Xan','Feb','Mar','Abr','Mai','Xun',
		'Xul','Ago','Set','Out','Nov','Dec'],
		dayNames: ['Domingo','Luns','Martes','Mercores','Xoves','Venres','Sabado'],
		dayNamesShort: ['Dom','Lun','Mar','Mer','Xov','Ven','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Me','Xo','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['gl']);
});
/* Written by Amir Hardon (ahardon at gmail dot com). */
jQuery(function($){
	$.datepicker.regional['he'] = {
		closeText: '????',
		prevText: '&#x3C;?????',
		nextText: '???&#x3E;',
		currentText: '????',
		monthNames: ['?????','??????','???','?????','???','????',
		'????','??????','??????','???????','??????','?????'],
		monthNamesShort: ['???','???','???','???','???','????',
		'????','???','???','???','???','???'],
		dayNames: ['?????','???','?????','?????','?????','????','???'],
		dayNamesShort: ['?\'','?\'','?\'','?\'','?\'','?\'','???'],
		dayNamesMin: ['?\'','?\'','?\'','?\'','?\'','?\'','???'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['he']);
});
/* Written by Michael Dawart. */
jQuery(function($){
	$.datepicker.regional['hi'] = {
		closeText: '???',
		prevText: '?????',
		nextText: '????',
		currentText: '??',
		monthNames: ['????? ','?????','?????','??????','??','???',
		'?????','????? ','???????','???????','??????','???????'],
		monthNamesShort: ['??', '??', '?????', '??????', '??', '???',
		'?????', '??', '???', '????', '??', '??'],
		dayNames: ['??????', '??????', '???????', '??????', '???????', '????????', '??????'],
		dayNamesShort: ['???', '???', '????', '???', '????', '?????', '???'],
		dayNamesMin: ['???', '???', '????', '???', '????', '?????', '???'],
		weekHeader: '?????',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hi']);
});
/* Written by Vjekoslav Nesek. */
jQuery(function($){
	$.datepicker.regional['hr'] = {
		closeText: 'Zatvori',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Danas',
		monthNames: ['Sijecanj','Veljaca','Ozujak','Travanj','Svibanj','Lipanj',
		'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
		monthNamesShort: ['Sij','Velj','Ozu','Tra','Svi','Lip',
		'Srp','Kol','Ruj','Lis','Stu','Pro'],
		dayNames: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','Cetvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sri','Cet','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','Ce','Pe','Su'],
		weekHeader: 'Tje',
		dateFormat: 'dd.mm.yy.',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hr']);
});
/* Written by Istvan Karaszi (jquery@spam.raszi.hu). */
jQuery(function($){
	$.datepicker.regional['hu'] = {
		closeText: 'bezar',
		prevText: 'vissza',
		nextText: 'elore',
		currentText: 'ma',
		monthNames: ['Januar', 'Februar', 'Marcius', 'Aprilis', 'Majus', 'Junius',
		'Julius', 'Augusztus', 'Szeptember', 'Oktober', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
		'Jul', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
		dayNames: ['Vasarnap', 'Hetfo', 'Kedd', 'Szerda', 'Csutortok', 'Pentek', 'Szombat'],
		dayNamesShort: ['Vas', 'Het', 'Ked', 'Sze', 'Csu', 'Pen', 'Szo'],
		dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
		weekHeader: 'Het',
		dateFormat: 'yy.mm.dd.',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hu']);
});
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
jQuery(function($){
	$.datepicker.regional['hy'] = {
		closeText: '?????',
		prevText: '&#x3C;???.',
		nextText: '???.&#x3E;',
		currentText: '?????',
		monthNames: ['???????','???????','????','?????','?????','??????',
		'??????','???????','?????????','?????????','????????','?????????'],
		monthNamesShort: ['?????','????','????','???','?????','??????',
		'????','???','???','???','???','???'],
		dayNames: ['??????','?????????','?????????','??????????','?????????','??????','?????'],
		dayNamesShort: ['???','???','???','???','???','????','???'],
		dayNamesMin: ['???','???','???','???','???','????','???'],
		weekHeader: '???',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hy']);
});
/* Written by Deden Fathurahman (dedenf@gmail.com). */
jQuery(function($){
	$.datepicker.regional['id'] = {
		closeText: 'Tutup',
		prevText: '&#x3C;mundur',
		nextText: 'maju&#x3E;',
		currentText: 'hari ini',
		monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
		'Juli','Agustus','September','Oktober','Nopember','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
		'Jul','Agus','Sep','Okt','Nop','Des'],
		dayNames: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
		dayNamesShort: ['Min','Sen','Sel','Rab','kam','Jum','Sab'],
		dayNamesMin: ['Mg','Sn','Sl','Rb','Km','jm','Sb'],
		weekHeader: 'Mg',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['id']);
});
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
jQuery(function($){
	$.datepicker.regional['is'] = {
		closeText: 'Loka',
		prevText: '&#x3C; Fyrri',
		nextText: 'N?sti &#x3E;',
		currentText: 'I dag',
		monthNames: ['Januar','Februar','Mars','April','Mai','Juni',
		'Juli','Agust','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
		'Jul','Agu','Sep','Okt','Nov','Des'],
		dayNames: ['Sunnudagur','Manudagur','?ri?judagur','Mi?vikudagur','Fimmtudagur','Fostudagur','Laugardagur'],
		dayNamesShort: ['Sun','Man','?ri','Mi?','Fim','Fos','Lau'],
		dayNamesMin: ['Su','Ma','?r','Mi','Fi','Fo','La'],
		weekHeader: 'Vika',
		dateFormat: 'dd.mm.yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['is']);
});
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
jQuery(function($){
	$.datepicker.regional['it'] = {
		closeText: 'Chiudi',
		prevText: '&#x3C;Prec',
		nextText: 'Succ&#x3E;',
		currentText: 'Oggi',
		monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
			'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
		monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
			'Lug','Ago','Set','Ott','Nov','Dic'],
		dayNames: ['Domenica','Lunedi','Martedi','Mercoledi','Giovedi','Venerdi','Sabato'],
		dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['it']);
});
/* Written by Kentaro SATO (kentaro@ranvis.com). */
jQuery(function($){
	$.datepicker.regional['ja'] = {
		closeText: '???',
		prevText: '&#x3C;?',
		nextText: '?&#x3E;',
		currentText: '??',
		monthNames: ['1?','2?','3?','4?','5?','6?',
		'7?','8?','9?','10?','11?','12?'],
		monthNamesShort: ['1?','2?','3?','4?','5?','6?',
		'7?','8?','9?','10?','11?','12?'],
		dayNames: ['???','???','???','???','???','???','???'],
		dayNamesShort: ['?','?','?','?','?','?','?'],
		dayNamesMin: ['?','?','?','?','?','?','?'],
		weekHeader: '?',
		dateFormat: 'yy/mm/dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '?'};
	$.datepicker.setDefaults($.datepicker.regional['ja']);
});
/* Written by Lado Lomidze (lado.lomidze@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ka'] = {
		closeText: '???????',
		prevText: '&#x3c; ????',
		nextText: '??????? &#x3e;',
		currentText: '????',
		monthNames: ['???????','?????????','?????','??????','?????','??????', '??????','???????','??????????','?????????','????????','?????????'],
		monthNamesShort: ['???','???','???','???','???','???', '???','???','???','???','???','???'],
		dayNames: ['?????','????????','?????????','?????????','?????????','?????????','??????'],
		dayNamesShort: ['??','???','???','???','???','???','???'],
		dayNamesMin: ['??','???','???','???','???','???','???'],
		weekHeader: '?????',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ka']);
});
/* Written by Dmitriy Karasyov (dmitriy.karasyov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['kk'] = {
		closeText: 'Жабу',
		prevText: '&#x3C;Алды??ы',
		nextText: 'Келесі&#x3E;',
		currentText: 'Б?гін',
		monthNames: ['?а?тар','А?пан','Наурыз','С?уір','Мамыр','Маусым',
		'Шілде','Тамыз','?ырк?йек','?азан','?араша','Желто?сан'],
		monthNamesShort: ['?а?','А?п','Нау','С?у','Мам','Мау',
		'Шіл','Там','?ыр','?аз','?ар','Жел'],
		dayNames: ['Жексенбі','Д?йсенбі','Сейсенбі','С?рсенбі','Бейсенбі','Ж?ма','Сенбі'],
		dayNamesShort: ['жкс','дсн','ссн','срс','бсн','жма','снб'],
		dayNamesMin: ['Жк','Дс','Сс','Ср','Бс','Жм','Сн'],
		weekHeader: 'Не',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['kk']);
});
/* Written by Chandara Om (chandara.teacher@gmail.com). */
jQuery(function($){
	$.datepicker.regional['km'] = {
		closeText: '????????',
		prevText: '???',
		nextText: '???????',
		currentText: '????????',
		monthNames: ['????','??????','????','????','????','??????',
		'??????','????','?????','????','????????','????'],
		monthNamesShort: ['????','??????','????','????','????','??????',
		'??????','????','?????','????','????????','????'],
		dayNames: ['???????', '????', '??????', '???', '??????????', '?????', '????'],
		dayNamesShort: ['??', '?', '?', '??', '????', '??', '??'],
		dayNamesMin: ['??', '?', '?', '??', '????', '??', '??'],
		weekHeader: '???????',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['km']);
});
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */
jQuery(function($){
	$.datepicker.regional['ko'] = {
		closeText: '??',
		prevText: '???',
		nextText: '???',
		currentText: '??',
		monthNames: ['1?','2?','3?','4?','5?','6?',
		'7?','8?','9?','10?','11?','12?'],
		monthNamesShort: ['1?','2?','3?','4?','5?','6?',
		'7?','8?','9?','10?','11?','12?'],
		dayNames: ['???','???','???','???','???','???','???'],
		dayNamesShort: ['?','?','?','?','?','?','?'],
		dayNamesMin: ['?','?','?','?','?','?','?'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '?'};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});
/* Written by Michel Weimerskirch <michel@weimerskirch.net> */
jQuery(function($){
	$.datepicker.regional['lb'] = {
		closeText: 'Faerdeg',
		prevText: 'Zreck',
		nextText: 'Weider',
		currentText: 'Haut',
		monthNames: ['Januar','Februar','Maerz','Abrell','Mee','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan', 'Feb', 'Mae', 'Abr', 'Mee', 'Jun',
		'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
		dayNames: ['Sonndeg', 'Meindeg', 'Denschdeg', 'Mettwoch', 'Donneschdeg', 'Freideg', 'Samschdeg'],
		dayNamesShort: ['Son', 'Mei', 'Den', 'Met', 'Don', 'Fre', 'Sam'],
		dayNamesMin: ['So','Me','De','Me','Do','Fr','Sa'],
		weekHeader: 'W',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['lb']);
});
/* @author Arturas Paleicikas <arturas@avalon.lt> */
jQuery(function($){
	$.datepicker.regional['lt'] = {
		closeText: 'Uzdaryti',
		prevText: '&#x3C;Atgal',
		nextText: 'Pirmyn&#x3E;',
		currentText: 'Siandien',
		monthNames: ['Sausis','Vasaris','Kovas','Balandis','Geguze','Birzelis',
		'Liepa','Rugpjutis','Rugsejis','Spalis','Lapkritis','Gruodis'],
		monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
		'Lie','Rugp','Rugs','Spa','Lap','Gru'],
		dayNames: ['sekmadienis','pirmadienis','antradienis','treciadienis','ketvirtadienis','penktadienis','sestadienis'],
		dayNamesShort: ['sek','pir','ant','tre','ket','pen','ses'],
		dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','Se'],
		weekHeader: 'SAV',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['lt']);
});
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
jQuery(function($){
	$.datepicker.regional['lv'] = {
		closeText: 'Aizvert',
		prevText: 'Iepr.',
		nextText: 'Nak.',
		currentText: 'Sodien',
		monthNames: ['Janvaris','Februaris','Marts','Aprilis','Maijs','Junijs',
		'Julijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['svetdiena','pirmdiena','otrdiena','tresdiena','ceturtdiena','piektdiena','sestdiena'],
		dayNamesShort: ['svt','prm','otr','tre','ctr','pkt','sst'],
		dayNamesMin: ['Sv','Pr','Ot','Tr','Ct','Pk','Ss'],
		weekHeader: 'Ned.',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['lv']);
});
/* Written by Stojce Slavkovski. */
jQuery(function($){
	$.datepicker.regional['mk'] = {
		closeText: 'Затвори',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Денес',
		monthNames: ['Јануари','Февруари','Март','Април','Мај','Јуни',
		'Јули','Август','Септември','Октомври','Ноември','Декември'],
		monthNamesShort: ['Јан','Фев','Мар','Апр','Мај','Јун',
		'Јул','Авг','Сеп','Окт','Ное','Дек'],
		dayNames: ['Недела','Понеделник','Вторник','Среда','Четврток','Петок','Сабота'],
		dayNamesShort: ['Нед','Пон','Вто','Сре','Чет','Пет','Саб'],
		dayNamesMin: ['Не','По','Вт','Ср','Че','Пе','Са'],
		weekHeader: 'Сед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['mk']);
});
/* Written by Saji Nediyanchath (saji89@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ml'] = {
		closeText: '???',
		prevText: '?????????',
		nextText: '???????? ',
		currentText: '?????',
		monthNames: ['??????','?????????','?????????','????????','????','?????',
		'????','????????','????????????','?????????','???????','????????'],
		monthNamesShort: ['???', '????', '?????', '?????', '????', '?????',
		'????', '??', '????', '?????', '???', '???'],
		dayNames: ['??????', '????????', '?????', '??????', '??????', '??????', '???'],
		dayNamesShort: ['???', '?????', '?????', '???', '??????', '??????', '???'],
		dayNamesMin: ['??','??','??','??','????','??','?'],
		weekHeader: '?',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ml']);
});
/* Written by Mohd Nawawi Mohamad Jamili (nawawi@ronggeng.net). */
jQuery(function($){
	$.datepicker.regional['ms'] = {
		closeText: 'Tutup',
		prevText: '&#x3C;Sebelum',
		nextText: 'Selepas&#x3E;',
		currentText: 'hari ini',
		monthNames: ['Januari','Februari','Mac','April','Mei','Jun',
		'Julai','Ogos','September','Oktober','November','Disember'],
		monthNamesShort: ['Jan','Feb','Mac','Apr','Mei','Jun',
		'Jul','Ogo','Sep','Okt','Nov','Dis'],
		dayNames: ['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'],
		dayNamesShort: ['Aha','Isn','Sel','Rab','kha','Jum','Sab'],
		dayNamesMin: ['Ah','Is','Se','Ra','Kh','Ju','Sa'],
		weekHeader: 'Mg',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ms']);
});
/* David De Sloovere @DavidDeSloovere */
jQuery(function($){
	$.datepicker.regional['nl-BE'] = {
		closeText: 'Sluiten',
		prevText: '<',
		nextText: '>',
		currentText: 'Vandaag',
		monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
		'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
		monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
		'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
		dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
		dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
		dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['nl-BE']);
});
/* Written by Mathias Bynens <http://mathiasbynens.be/> */
jQuery(function($){
	$.datepicker.regional.nl = {
		closeText: 'Sluiten',
		prevText: '<',
		nextText: '>',
		currentText: 'Vandaag',
		monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
		'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
		monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
		'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
		dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
		dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
		dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
		weekHeader: 'Wk',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional.nl);
});
/* Written by Naimdjon Takhirov (naimdjon@gmail.com). */

jQuery(function($){
	$.datepicker.regional['no'] = {
		closeText: 'Lukk',
		prevText: '&#xAB;Forrige',
		nextText: 'Neste&#xBB;',
		currentText: 'I dag',
		monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
		monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
		dayNamesShort: ['son','man','tir','ons','tor','fre','lor'],
		dayNames: ['sondag','mandag','tirsdag','onsdag','torsdag','fredag','lordag'],
		dayNamesMin: ['so','ma','ti','on','to','fr','lo'],
		weekHeader: 'Uke',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['no']);
});
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
jQuery(function($){
	$.datepicker.regional['pl'] = {
		closeText: 'Zamknij',
		prevText: '&#x3C;Poprzedni',
		nextText: 'Nastepny&#x3E;',
		currentText: 'Dzis',
		monthNames: ['Styczen','Luty','Marzec','Kwiecien','Maj','Czerwiec',
		'Lipiec','Sierpien','Wrzesien','Pazdziernik','Listopad','Grudzien'],
		monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
		'Lip','Sie','Wrz','Pa','Lis','Gru'],
		dayNames: ['Niedziela','Poniedzialek','Wtorek','Sroda','Czwartek','Piatek','Sobota'],
		dayNamesShort: ['Nie','Pn','Wt','Sr','Czw','Pt','So'],
		dayNamesMin: ['N','Pn','Wt','Sr','Cz','Pt','So'],
		weekHeader: 'Tydz',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pl']);
});
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
jQuery(function($){
	$.datepicker.regional['pt-BR'] = {
		closeText: 'Fechar',
		prevText: '&#x3C;Anterior',
		nextText: 'Proximo&#x3E;',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Marco','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Terca-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});
jQuery(function($){
	$.datepicker.regional['pt'] = {
		closeText: 'Fechar',
		prevText: 'Anterior',
		nextText: 'Seguinte',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Marco','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Terca-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
		weekHeader: 'Sem',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pt']);
});
/* Written by Yvonne Gienal (yvonne.gienal@educa.ch). */
jQuery(function($){
	$.datepicker.regional['rm'] = {
		closeText: 'Serrar',
		prevText: '&#x3C;Suandant',
		nextText: 'Precedent&#x3E;',
		currentText: 'Actual',
		monthNames: ['Schaner','Favrer','Mars','Avrigl','Matg','Zercladur', 'Fanadur','Avust','Settember','October','November','December'],
		monthNamesShort: ['Scha','Fev','Mar','Avr','Matg','Zer', 'Fan','Avu','Sett','Oct','Nov','Dec'],
		dayNames: ['Dumengia','Glindesdi','Mardi','Mesemna','Gievgia','Venderdi','Sonda'],
		dayNamesShort: ['Dum','Gli','Mar','Mes','Gie','Ven','Som'],
		dayNamesMin: ['Du','Gl','Ma','Me','Gi','Ve','So'],
		weekHeader: 'emna',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['rm']);
});
jQuery(function($){
	$.datepicker.regional['ro'] = {
		closeText: 'Inchide',
		prevText: '&#xAB; Luna precedenta',
		nextText: 'Luna urmatoare &#xBB;',
		currentText: 'Azi',
		monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
		'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
		monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
		'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'],
		dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sam'],
		dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','Sa'],
		weekHeader: 'Sapt',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ro']);
});
/* Written by Andrew Stromnov (stromnov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3C;Пред',
		nextText: 'След&#x3E;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});
/* Written by Vojtech Rinik (vojto@hmm.sk). */
jQuery(function($){
	$.datepicker.regional['sk'] = {
		closeText: 'Zavriet',
		prevText: '&#x3C;Predchadzajuci',
		nextText: 'Nasledujuci&#x3E;',
		currentText: 'Dnes',
		monthNames: ['januar','februar','marec','april','maj','jun',
		'jul','august','september','oktober','november','december'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['nedela','pondelok','utorok','streda','stvrtok','piatok','sobota'],
		dayNamesShort: ['Ned','Pon','Uto','Str','Stv','Pia','Sob'],
		dayNamesMin: ['Ne','Po','Ut','St','St','Pia','So'],
		weekHeader: 'Ty',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sk']);
});
/* Written by Jaka Jancar (jaka@kubje.org). */
/* c = c, s = s z = z C = C S = S Z = Z */
jQuery(function($){
	$.datepicker.regional['sl'] = {
		closeText: 'Zapri',
		prevText: '&#x3C;Prejsnji',
		nextText: 'Naslednji&#x3E;',
		currentText: 'Trenutni',
		monthNames: ['Januar','Februar','Marec','April','Maj','Junij',
		'Julij','Avgust','September','Oktober','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Avg','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljek','Torek','Sreda','Cetrtek','Petek','Sobota'],
		dayNamesShort: ['Ned','Pon','Tor','Sre','Cet','Pet','Sob'],
		dayNamesMin: ['Ne','Po','To','Sr','Ce','Pe','So'],
		weekHeader: 'Teden',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sl']);
});
/* Written by Flakron Bytyqi (flakron@gmail.com). */
jQuery(function($){
	$.datepicker.regional['sq'] = {
		closeText: 'mbylle',
		prevText: '&#x3C;mbrapa',
		nextText: 'Perpara&#x3E;',
		currentText: 'sot',
		monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor',
		'Korrik','Gusht','Shtator','Tetor','Nentor','Dhjetor'],
		monthNamesShort: ['Jan','Shk','Mar','Pri','Maj','Qer',
		'Kor','Gus','Sht','Tet','Nen','Dhj'],
		dayNames: ['E Diel','E Hene','E Marte','E Merkure','E Enjte','E Premte','E Shtune'],
		dayNamesShort: ['Di','He','Ma','Me','En','Pr','Sh'],
		dayNamesMin: ['Di','He','Ma','Me','En','Pr','Sh'],
		weekHeader: 'Ja',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sq']);
});
/* Written by Dejan Dimic. */
jQuery(function($){
	$.datepicker.regional['sr-SR'] = {
		closeText: 'Zatvori',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Danas',
		monthNames: ['Januar','Februar','Mart','April','Maj','Jun',
		'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Avg','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','Cetvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sre','Cet','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','Ce','Pe','Su'],
		weekHeader: 'Sed',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sr-SR']);
});
/* Written by Dejan Dimic. */
jQuery(function($){
	$.datepicker.regional['sr'] = {
		closeText: 'Затвори',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Данас',
		monthNames: ['Јануар','Фебруар','Март','Април','Мај','Јун',
		'Јул','Август','Септембар','Октобар','Новембар','Децембар'],
		monthNamesShort: ['Јан','Феб','Мар','Апр','Мај','Јун',
		'Јул','Авг','Сеп','Окт','Нов','Дец'],
		dayNames: ['Недеља','Понедељак','Уторак','Среда','Четвртак','Петак','Субота'],
		dayNamesShort: ['Нед','Пон','Уто','Сре','Чет','Пет','Суб'],
		dayNamesMin: ['Не','По','Ут','Ср','Че','Пе','Су'],
		weekHeader: 'Сед',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sr']);
});
/* Written by Anders Ekdahl ( anders@nomadiz.se). */
jQuery(function($){
	$.datepicker.regional['sv'] = {
		closeText: 'Stang',
		prevText: '&#xAB;Forra',
		nextText: 'Nasta&#xBB;',
		currentText: 'Idag',
		monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
		'Juli','Augusti','September','Oktober','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNamesShort: ['Son','Man','Tis','Ons','Tor','Fre','Lor'],
		dayNames: ['Sondag','Mandag','Tisdag','Onsdag','Torsdag','Fredag','Lordag'],
		dayNamesMin: ['So','Ma','Ti','On','To','Fr','Lo'],
		weekHeader: 'Ve',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sv']);
});
/* Written by S A Sureshkumar (saskumar@live.com). */
jQuery(function($){
	$.datepicker.regional['ta'] = {
		closeText: '????',
		prevText: '?????????',
		nextText: '????????',
		currentText: '?????',
		monthNames: ['??','????','???????','????????','??????','???',
		'???','????','?????????','??????','??????????','???????'],
		monthNamesShort: ['??','????','???','????','????','???',
		'???','??','???','???','????','????'],
		dayNames: ['???????????????','????????????','???????????????','??????????','????????????','?????????????','??????????'],
		dayNamesShort: ['??????','???????','????????','?????','???????','??????','???'],
		dayNamesMin: ['??','??','??','??','??','??','?'],
		weekHeader: 'Не',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ta']);
});
/* Written by pipo (pipo@sixhead.com). */
jQuery(function($){
	$.datepicker.regional['th'] = {
		closeText: '???',
		prevText: '&#xAB;&#xA0;????',
		nextText: '?????&#xA0;&#xBB;',
		currentText: '??????',
		monthNames: ['??????','??????????','??????','??????','???????','????????',
		'???????','???????','???????','??????','?????????','???????'],
		monthNamesShort: ['?.?.','?.?.','??.?.','??.?.','?.?.','??.?.',
		'?.?.','?.?.','?.?.','?.?.','?.?.','?.?.'],
		dayNames: ['???????','??????','??????','???','????????','?????','?????'],
		dayNamesShort: ['??.','?.','?.','?.','??.','?.','?.'],
		dayNamesMin: ['??.','?.','?.','?.','??.','?.','?.'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['th']);
});
/* Written by Abdurahmon Saidov (saidovab@gmail.com). */
jQuery(function($){
	$.datepicker.regional['tj'] = {
		closeText: 'Идома',
		prevText: '&#x3c;?афо',
		nextText: 'Пеш&#x3e;',
		currentText: 'Имр?з',
		monthNames: ['Январ','Феврал','Март','Апрел','Май','Июн',
		'Июл','Август','Сентябр','Октябр','Ноябр','Декабр'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['якшанбе','душанбе','сешанбе','чоршанбе','пан?шанбе','?умъа','шанбе'],
		dayNamesShort: ['якш','душ','сеш','чор','пан','?ум','шан'],
		dayNamesMin: ['Як','Дш','Сш','Чш','Пш','?м','Шн'],
		weekHeader: 'Хф',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['tj']);
});
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */
jQuery(function($){
	$.datepicker.regional['tr'] = {
		closeText: 'kapat',
		prevText: '&#x3C;geri',
		nextText: 'ileri&#x3e',
		currentText: 'bugun',
		monthNames: ['Ocak','Subat','Mart','Nisan','May?s','Haziran',
		'Temmuz','Agustos','Eylul','Ekim','Kas?m','Aral?k'],
		monthNamesShort: ['Oca','Sub','Mar','Nis','May','Haz',
		'Tem','Agu','Eyl','Eki','Kas','Ara'],
		dayNames: ['Pazar','Pazartesi','Sal?','Carsamba','Persembe','Cuma','Cumartesi'],
		dayNamesShort: ['Pz','Pt','Sa','Ca','Pe','Cu','Ct'],
		dayNamesMin: ['Pz','Pt','Sa','Ca','Pe','Cu','Ct'],
		weekHeader: 'Hf',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['tr']);
});
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
/* Corrected by Igor Milla (igor.fsp.milla@gmail.com). */
jQuery(function($){
	$.datepicker.regional['uk'] = {
		closeText: 'Закрити',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Сьогодні',
		monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
		'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
		monthNamesShort: ['Січ','Лют','Бер','Кві','Тра','Чер',
		'Лип','Сер','Вер','Жов','Лис','Гру'],
		dayNames: ['неділя','понеділок','вівторок','середа','четвер','п’ятниця','субота'],
		dayNamesShort: ['нед','пнд','вів','срд','чтв','птн','сбт'],
		dayNamesMin: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Тиж',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['uk']);
});
/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */
jQuery(function($){
	$.datepicker.regional['vi'] = {
		closeText: 'Dong',
		prevText: '&#x3C;Tru?c',
		nextText: 'Ti?p&#x3E;',
		currentText: 'Hom nay',
		monthNames: ['Thang M?t', 'Thang Hai', 'Thang Ba', 'Thang Tu', 'Thang Nam', 'Thang Sau',
		'Thang B?y', 'Thang Tam', 'Thang Chin', 'Thang Mu?i', 'Thang Mu?i M?t', 'Thang Mu?i Hai'],
		monthNamesShort: ['Thang 1', 'Thang 2', 'Thang 3', 'Thang 4', 'Thang 5', 'Thang 6',
		'Thang 7', 'Thang 8', 'Thang 9', 'Thang 10', 'Thang 11', 'Thang 12'],
		dayNames: ['Ch? Nh?t', 'Th? Hai', 'Th? Ba', 'Th? Tu', 'Th? Nam', 'Th? Sau', 'Th? B?y'],
		dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
		dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
		weekHeader: 'Tu',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['vi']);
});
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		closeText: '??',
		prevText: '&#x3C;??',
		nextText: '??&#x3E;',
		currentText: '??',
		monthNames: ['??','??','??','??','??','??',
		'??','??','??','??','???','???'],
		monthNamesShort: ['??','??','??','??','??','??',
		'??','??','??','??','???','???'],
		dayNames: ['???','???','???','???','???','???','???'],
		dayNamesShort: ['??','??','??','??','??','??','??'],
		dayNamesMin: ['?','?','?','?','?','?','?'],
		weekHeader: '?',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '?'};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
/* Written by SCCY (samuelcychan@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-HK'] = {
		closeText: '??',
		prevText: '&#x3C;??',
		nextText: '??&#x3E;',
		currentText: '??',
		monthNames: ['??','??','??','??','??','??',
		'??','??','??','??','???','???'],
		monthNamesShort: ['??','??','??','??','??','??',
		'??','??','??','??','???','???'],
		dayNames: ['???','???','???','???','???','???','???'],
		dayNamesShort: ['??','??','??','??','??','??','??'],
		dayNamesMin: ['?','?','?','?','?','?','?'],
		weekHeader: '?',
		dateFormat: 'dd-mm-yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '?'};
	$.datepicker.setDefaults($.datepicker.regional['zh-HK']);
});
/* Written by Ressol (ressol@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-TW'] = {
		closeText: '??',
		prevText: '&#x3C;??',
		nextText: '??&#x3E;',
		currentText: '??',
		monthNames: ['??','??','??','??','??','??',
		'??','??','??','??','???','???'],
		monthNamesShort: ['??','??','??','??','??','??',
		'??','??','??','??','???','???'],
		dayNames: ['???','???','???','???','???','???','???'],
		dayNamesShort: ['??','??','??','??','??','??','??'],
		dayNamesMin: ['?','?','?','?','?','?','?'],
		weekHeader: '?',
		dateFormat: 'yy/mm/dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '?'};
	$.datepicker.setDefaults($.datepicker.regional['zh-TW']);
});
/* Written by Pavel Selitskas <p.selitskas@gmail.com> */
jQuery(function($){
	$.datepicker.regional['be'] = {
		closeText: 'Зачыніць',
		prevText: '&larr;Папяр.',
		nextText: 'Наст.&rarr;',
		currentText: 'Сёньня',
		monthNames: ['Студзень','Люты','Сакавік','Красавік','Травень','Чэрвень',
		'Ліпень','Жнівень','Верасень','Кастрычнік','Лістапад','Сьнежань'],
		monthNamesShort: ['Сту','Лют','Сак','Кра','Тра','Чэр',
		'Ліп','Жні','Вер','Кас','Ліс','Сьн'],
		dayNames: ['нядзеля','панядзелак','аўторак','серада','чацьвер','пятніца','субота'],
		dayNamesShort: ['ндз','пнд','аўт','срд','чцв','птн','сбт'],
		dayNamesMin: ['Нд','Пн','Аў','Ср','Чц','Пт','Сб'],
		weekHeader: 'Тд',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['be']);
});
jQuery(function ($) {
	$.datepicker.regional['fr-CA'] = {
		closeText: 'Fermer',
		prevText: 'Precedent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin',
			'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'],
		monthNamesShort: ['janv.', 'fevr.', 'mars', 'avril', 'mai', 'juin',
			'juil.', 'aout', 'sept.', 'oct.', 'nov.', 'dec.'],
		dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
		dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
		dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
		weekHeader: 'Sem.',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['fr-CA']);
});
/* Written by Sergey Kartashov (ebishkek@yandex.ru). */
jQuery(function($){
	$.datepicker.regional['ky'] = {
		closeText: 'Жабуу',
		prevText: '&#x3c;Мур',
		nextText: 'Кий&#x3e;',
		currentText: 'Б?г?н',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['жекшемби', 'д?йш?мб?', 'шейшемби', 'шаршемби', 'бейшемби', 'жума', 'ишемби'],
		dayNamesShort: ['жек', 'д?й', 'шей', 'шар', 'бей', 'жум', 'ише'],
		dayNamesMin: ['Жк','Дш','Шш','Шр','Бш','Жм','Иш'],
		weekHeader: 'Жум',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['ky']);
});
/* Written by Bjorn Johansen (post@bjornjohansen.no). */
jQuery(function($){
	$.datepicker.regional['nb'] = {
		closeText: 'Lukk',
		prevText: '&#xAB;Forrige',
		nextText: 'Neste&#xBB;',
		currentText: 'I dag',
		monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
		monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
		dayNamesShort: ['son','man','tir','ons','tor','fre','lor'],
		dayNames: ['sondag','mandag','tirsdag','onsdag','torsdag','fredag','lordag'],
		dayNamesMin: ['so','ma','ti','on','to','fr','lo'],
		weekHeader: 'Uke',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['nb']);
});
/* Written by Bjorn Johansen (post@bjornjohansen.no). */
jQuery(function($){
	$.datepicker.regional['nn'] = {
		closeText: 'Lukk',
		prevText: '&#xAB;Forre',
		nextText: 'Neste&#xBB;',
		currentText: 'I dag',
		monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
		monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
		dayNamesShort: ['sun','man','tys','ons','tor','fre','lau'],
		dayNames: ['sundag','mandag','tysdag','onsdag','torsdag','fredag','laurdag'],
		dayNamesMin: ['su','ma','ty','on','to','fr','la'],
		weekHeader: 'Veke',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['nn']);
});
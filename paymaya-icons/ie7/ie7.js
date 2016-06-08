/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'paymaya-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'pm-icon-activity': '&#xe900;',
		'pm-icon-ask': '&#xe901;',
		'pm-icon-back': '&#xe902;',
		'pm-icon-calendar': '&#xe903;',
		'pm-icon-close': '&#xe904;',
		'pm-icon-disburse': '&#xe905;',
		'pm-icon-dragphoto': '&#xe906;',
		'pm-icon-email': '&#xe907;',
		'pm-icon-employeelist': '&#xe908;',
		'pm-icon-info': '&#xe909;',
		'pm-icon-mobile': '&#xe90a;',
		'pm-icon-orgsettings': '&#xe90b;',
		'pm-icon-overview': '&#xe90c;',
		'pm-icon-paybills': '&#xe90d;',
		'pm-icon-paymaya': '&#xe90e;',
		'pm-icon-profilepic': '&#xe90f;',
		'pm-icon-search': '&#xe910;',
		'pm-icon-shop': '&#xe911;',
		'pm-icon-success': '&#xe912;',
		'pm-icon-transfer': '&#xe913;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/pm-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

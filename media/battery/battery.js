var chart = null;

function discharge(H, C, I, k) {
	/*
		Thank you Wikipedia. Wait. I mean a credible non-Wikipedia source. This models the linear discharge curve of batteries using Peukert's law. Returns hours until 100% discharge.
		H = rated discharge time (in hours)
		C = rated capacity at that discharge rate (in ampere-hours)
		I = actual discharge current (in amperes)
		k = Peukert constant
	*/

	var t = H * Math.pow(C/(I*H), k);
	return t;
}

var battery_data = {
	'e-l92': {
		'name': 'Energizer L92 Ultimate Lithium (AAA)',
		'H': 20,
		'C': 1300,
		'k': 1.08,
	},
	'e-l91': {
		'name': 'Energizer L91 Ultimate Lithium (AA)',
		'H': 20,
		'C': 3200,
		'k': 1.02,
	},
	'e-la522': {
		'name': 'Energizer LA522 Advanced Lithium (9v)',
		'H': 20,
		'C': 830,
		'k': 1.12,
	},
	'e-522': {
		'name': 'Energizer 522 (9v-Alkaline)',
		'H': 20,
		'C': 650,
		'k': 1.25,
	},
	'e-e91': {
		'name': 'Energizer E91 (AA-Alkaline)',
		'H': 20,
		'C': 2620,
		'k': 1.25,
	},
	'e-e92': {
		'name': 'Energizer E92 (AAA-Alkaline)',
		'H': 20,
		'C': 1150,
		'k': 1.25,
	},
	'penn-gc2-110': {
		'name': 'Penn GC2-110 (6v, car)',
		'H': 20,
		'C': 186000,
		'k': 1.15,
	},
	'trojan-t-145': {
		'name': 'Trojan T-145 (6v, car)',
		'H': 20,
		'C': 244000,
		'k': 1.134,
	},
	'exide-34xcd': {
		'name': 'Trojan T-145 (6v, car)',
		'H': 20,
		'C': 50000,
		'k': 1.08,
	},
	'optima-d31t': {
		'name': 'Optima D31T (12v, car)',
		'H': 20,
		'C': 75000,
		'k': 1.079,
	},
	'odyssey-pc2150': {
		'name': 'Odyssey PC2150 (12v, car)',
		'H': 20,
		'C': 104000,
		'k': 1.113,
	},
	'trojan-j-150': {
		'name': 'Trojan J-150 (12v, car)',
		'H': 20,
		'C': 150000,
		'k': 1.313,
	},
}

function update_math(H, C, k) {
	$('#math').css('visibility','hidden');
	$('#math').text('$$ f(x) =' + H + '\\left( \\frac{' + C + '}{' + H + 'x} \\right) ^{' + k + '} \\restriction x <' + C + '$$');
	MathJax.Hub.Queue(
		['Typeset', MathJax.Hub, 'math'],
		function () {
			$('#math').css('visibility','');
		}
	);
}

function update_graph(H, C, k, name) {
	var data = [];

	update_math(H, C, k);
	
	for (var i = 10; i < (3000 > C ? C : 3000); i += 10) {
		point = discharge(H, C, i, k);
		data.push([i, point]);
	}
	
	var options = {
		pointStart: 10,
		name: name,
		data: data,
		animation: {
			duration: 2000
		},
	};
	
	while (chart.series.length >= 3) {
		chart.series[0].remove();
	}
		
	chart.addSeries(options);
}

$(document).ready(function() {
	$('select').material_select();
	
	$('select').change(function() {
		battery = $('select').val();
		
		if (battery !== 'other') {			
			var H = battery_data[battery].H,
				C = battery_data[battery].C,
				k = battery_data[battery].k;

			$('#H').val(H);
			$('#C').val(C/1000);
			$('#k').val(k);
			
			update_graph(H, C, k, battery_data[battery].name);
		}
	});
	
	$('input').change(function() {
		var H = parseFloat($('#H').val()),
			C = parseFloat($('#C').val()) * 1000,
			k = parseFloat($('#k').val()),
			data = [];
			
		update_graph(H, C, k, 'Custom Battery');
	});

	var options = {
		chart: {
			renderTo: 'graph',
			marginRight: 20,
			zoomType: 'xy',
		},
		xAxis: {
			type: 'linear',
			title: {
				text: 'Discharge Current (mA)',
			},
		},
		yAxis: {
			title: {
				text: 'Longevity (hours)',
			},
			floor: 0,
		},
		credits: {
			enabled: false,
		},
		title: {
			text: 'Discharge Curves',
		},
		tooltip: {
			headerFormat: '<span style="font-size: 10px">{point.key} mA</span><br/>',
			valueDecimals: 3,
			valueSuffix: ' hours',
		},
		plotOptions: {
			line: {
				marker: {
					enabled: false
				}
			}
		},
	}

	chart = new Highcharts.Chart(options);
});
//sf står for standarfunksjoner. her er de samlet i en kolleksjon og hentes ut med objektorientering (kap 20 - 22)
var sf = {
	randInt: function(min, max) {//Tilfeldig heltallgenerator
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	storst: function(array) {  // finner største tall i en array
		var storst = 0;
		for (var i = 0; i < array.length; i++) {
			if(array[i] > storst) {
				storst = array[i];
			}
		}
		return storst;
	},

	minst: function(array) { // finner minste tall i en array
		var minst = array[0];
		for (var i = 0; i < array.length; i++) {
			if(array[i] < minst) {
				minst = array[i];
			}
		}
		return minst;
	},

	bubbleSort: function(array) { // sorterer en array etter metoden bubblesort
		for (var i = 0; i < array.length; i++) {
			for (var j = 1; j < array.length - i; j++) {
				if(array[j-1] > array[j]) {
					var temp = array[j];
					array[j] = array[j-1];
					array[j-1] = temp;
				}
			}
		}
		return array;
	},

	shuffle: function(array) { // sorterer en array etter metoden shuffle
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	},

	terning: function() {//Returnerer et tilfeldig tall fra 1 til 6
		var n = Math.floor(Math.random() * 6) + 1;
		return n
	},

	randFarge: function() {//Denne gir tilfeldig kombinasjon av rgb-verdier
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		return 'rgb('+r+', '+g+', '+b+')';
	},

	randFargeHsl: function(s, l) {//Denne gir tilfeldig hsl-fargekode med tilfeldig hue og gitt saturation og value. Ikke bruk %-tegn i argumenter i funskjonskallet
		var h = Math.floor(Math.random() * 360);
		return 'hsl('+h+', '+s+'%, '+l+'%)';
	},

	gangetabell: function(n) {//Gir en tekstvariabel som ved å skrives ut gir en gangetabell på n rader og n kolonner
		var tabell = '<table>';

		for(var k = 1; k<=n; k++) {
			tabell += ('<tr>');
			for(var r = 1; r<=n; r++) {
				tabell += ('<td>'+k*r+'</td>');
			}
			tabell += ('</tr>');
		}

		tabell += '</table>';

		return tabell;
	},

	losPolynom: function(a, b, c) {//Funksjon som returnerer en array med løsningene for likningen a x^2 + b x + c = 0
		if(a != 0) {
			var x_1 = (- b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
			var x_2 = (- b - Math.sqrt(b**2 - 4*a*c)) / (2*a);
			console.log('x_1: '+x_1+', x_2: '+x_2);
			return [x_1, x_2];
		}
		else {
			var x_1 = - c/b;
			return [x_1, x_1];
		}
	},

	decToHex: function(dec) { // gjør om fra desimaltall til hexadecimalt
		var hexVerdi = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
		var hex = '';

		for (var j = 0; 16 ** (j) <= dec; j++) {}

		for (var i = j - 1; i >= 0; i--) {
			var a = Math.floor(dec / (16 ** i));
			hex += hexVerdi[a];
			dec -= a * (16 ** i);
		}

		return hex
	},

	klokkeslett: function(dato) {//For å få klokkeslettet akkurat nå bruk new Date() som argument
		var h = dato.getHours();
		if (h < 10) {h = '0'+h;}

		var min = dato.getMinutes();
		if (min < 10) {min = '0'+min;}

		var s = dato.getSeconds();
		if (s < 10) {s = '0'+s;}

		var ms = dato.getMilliseconds();
		if (ms < 100) {
			ms = '0'+ms;
			if (ms < 10) {
				ms = '0'+ms;
			}
		}

		return h + ':' + min + ':' + s + '.' + ms;
	}
}

var jsPDFEditor = function() {

	var editor;   
	var loadSelectedFile = function() {
	var source='var doc = new jsPDF();';
source+='doc.setDrawColor(0);';
source+='doc.setFillColor(240);';
source+="doc.rect(35, 82, 43, 36, 'F');"; 
source+="doc.rect(15, 140, 180, 12, 'F');"; 
source+="doc.rect(127, 166, 42, 7, 'F'); ";
source+='doc.setFontSize(16);';
source+='doc.setFontType("bold");';
source+='doc.text(68, 56, "ETAT l\'y DES SOMMES DUES");';
source+='doc.setFontType("normal");';
source+='doc.setFontSize(12);';
source+='doc.setFontType("bold");';
source+='doc.text(122, 67, "120/15");';
source+='doc.setFontType("normal");';
source+='doc.setLineWidth(0.5);';
source+='doc.rect(52, 48, 105, 22);';
source+='doc.setLineWidth(0);';
source+='doc.line(35, 82, 175, 82);';
source+='doc.line(35, 88, 175, 88);';
source+='doc.line(35, 94, 175, 94);';
source+='doc.line(35, 100, 175, 100);';
source+='doc.line(35, 106, 175, 106);';
source+='doc.line(35, 112, 175, 112);';
source+='doc.line(35, 118, 175, 118);';
source+='doc.line(35, 82, 35, 118);';
source+='doc.line(78, 82, 78, 118);';
source+='doc.line(175, 82, 175, 118);';
source+='doc.setFontType("bold");';
source+='doc.text(39, 86.5, "Mois de");';
source+='doc.text(39, 92.5, "Présenté par M.");';
source+='doc.text(39, 98.5, "Grade");';
source+='doc.text(39, 104.5, "Résidence");';
source+='doc.text(39, 110.5, "CIN N°");';
source+='doc.text(39, 116.5, "DRPP");';
source+='doc.setFontType("normal");';
source+='doc.text(82, 86.5, "Avril 2015");';
source+='doc.text(82, 92.5, "Zouhair SEKKAT");';
source+='doc.text(82, 104.5, "RABAT");';
source+='doc.text(82, 110.5, "EE310557");';
source+='doc.text(82, 116.5, "1737578");';
source+='doc.line(15, 140, 195, 140);';
source+='doc.line(15, 152, 195, 152);';
source+='doc.line(15, 166, 195, 166);';
source+='doc.line(15, 159, 195, 159);';
source+='doc.line(15, 140, 15, 166);';
source+='doc.line(39, 140, 39, 166);';
source+='doc.line(80, 140, 80, 166);';
source+='doc.line(110, 140, 110, 166);';
source+='doc.line(127, 140, 127, 166);';
source+='doc.line(145, 140, 145, 166);';
source+='doc.line(169, 140, 169, 166);';
source+='doc.line(195, 140, 195, 166);';
source+='doc.line(95, 146.5, 95, 166);';
source+='doc.line(80, 146.5, 110, 146.5);';
source+='doc.setFontSize(10);';
source+='doc.text(22, 148, "Dates");';
source+='doc.text(40, 145, "Detail des déplacements ");';
source+='doc.text(42.5, 150, "et objet des tournées");';
source+='doc.text(89, 144.5, "Heures");';
source+='doc.text(84, 150.5, "Dep.");';
source+='doc.text(99, 150.5, "Ret.");';
source+='doc.text(112, 145, "Nombre");';
source+='doc.text(113, 150, "de taux");';
source+='doc.text(130, 145, "Taux de");';
source+='doc.text(149, 145, "Sommes");';
source+='doc.text(152, 150, "dues");';
source+='doc.text(171, 148, "Observations");';
source+='doc.line(127, 166, 127, 173);';
source+='doc.line(145, 166, 145, 173);';
source+='doc.line(169, 166, 169, 173);';
source+='doc.line(127, 173, 169, 173);';
source+='doc.text(130, 171, "TOTAL");';

source+='doc.setFontSize(11);';
source+='doc.text(20, 190, "Arrête le présent état à la somme de :");';
source+='doc.setFontType("bold");';
source+='doc.text(88, 190, "QUATRE VINGT QUATORZE");';
source+='doc.setFontType("normal");';




			editor=utf8.decode(source);
			
	};

	return {	
		init: function() {

			jsPDFEditor.update();
                        loadSelectedFile();
			
		},
		
		update: function(skipEval) {
			setTimeout(function() {
				if (! skipEval) {
					eval('try{' + editor + '} catch(e) { console.error(e.message,e.stack,e); }');
				}
				if (typeof doc !== 'undefined') try {
					
						var string = doc.output('bloburi');
					$('.preview-pane').attr('src', string);
				} catch(e) {
					alert('Error ' + e);
				}
			}, 0);
		}
	};

}();

$(document).ready(function() {
	jsPDFEditor.init();
});

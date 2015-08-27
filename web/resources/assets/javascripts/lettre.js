function ConvNumberLetter_fr(Nombre, bCheckFloat) {
    
    var strNombre = new String(Nombre) ;
    var TabNombre = new Array() ;
    var strLetter = new String() ;
    
    if(isNaN(parseFloat(Nombre))) return "";
    
    if(bCheckFloat) {
        TabNombre = strNombre.split(".") ;
        if(TabNombre.length > 2 || TabNombre.length <= 0) return "" ;
        for(var i = 0; i < TabNombre.length; i++) {
            if(i == 0) 
                strLetter = strLetter + ConvNumberLetter(parseFloat(TabNombre[i]), 1, 0) ;
            else
                strLetter = strLetter + ConvNumberLetter(parseFloat(TabNombre[i]), 0, 0) ;
        }
        return strLetter.toUpperCase() ;
    }
    else {
        strLetter = ConvNumberLetter(Nombre, 1, 0) ;
        return strLetter.toUpperCase() ;
    }
}

function ConvNumberLetter(Nombre, Devise, Langue) {
    var dblEnt, byDec ; 
    var bNegatif; 
    var strDev = new String();
    var strCentimes = new String();
    
    if( Nombre < 0 ) {
        bNegatif = true;
        Nombre = Math.abs(Nombre);
    }
    dblEnt = parseInt(Nombre) ;
	var a =Nombre*100 - dblEnt*100;
    byDec = parseInt(a);
	
    if( byDec == 0 ) {
        if (dblEnt > 999999999999999) {
            return "#TropGrand" ;            
        }
    }
    else {
        if (dblEnt > 9999999999999.99) {
            return "#TropGrand" ;            
        }    
    }
    switch(Devise) {
        case 0 :
            if (byDec > 0) strDev = " virgule" ;
            break;
        case 1 :
            strDev = " Dh" ;
            if (byDec > 0) strCentimes = strCentimes + " Cts" ;
            break;
        case 2 :
            strDev = " Dollar" ;
            if (byDec > 0) strCentimes = strCentimes + " Cent" ;
            break;
    }
    if (dblEnt > 1 && Devise != 0) strDev = strDev + "s" ;
    
    var NumberLetter = ConvNumEnt(parseFloat(dblEnt), Langue) + strDev + " " + ConvNumDizaine(byDec, Langue) + strCentimes ;
    return NumberLetter;
}

function ConvNumEnt(Nombre, Langue) {
    var byNum, iTmp, dblReste ;
    var StrTmp = new String();
    var NumEnt ;
    iTmp = Nombre - (parseInt(Nombre / 1000) * 1000) ;
    NumEnt = ConvNumCent(parseInt(iTmp), Langue) ;
    dblReste = parseInt(Nombre / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
    switch(iTmp) {
        case 0 :
            break;
        case 1 :
            StrTmp = "mille " ; 
            break;
        default : 
            StrTmp = StrTmp + " mille " ;
    }
    NumEnt = StrTmp + NumEnt ;
    dblReste = parseInt(dblReste / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
    switch(iTmp) {
        case 0 :
            break;
        case 1 :
            StrTmp = StrTmp + " million " ;
            break;
        default : 
            StrTmp = StrTmp + " millions " ;
    }
    NumEnt = StrTmp + NumEnt ;
    dblReste = parseInt(dblReste / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
    switch(iTmp) {
        case 0 :
            break;
        case 1 :
            StrTmp = StrTmp + " milliard " ;
            break;
        default : 
            StrTmp = StrTmp + " milliards " ;
    }
    NumEnt = StrTmp + NumEnt ;
    dblReste = parseInt(dblReste / 1000) ;
    iTmp = dblReste - (parseInt(dblReste / 1000) * 1000) ;
    StrTmp = ConvNumCent(parseInt(iTmp), Langue) ;
       switch(iTmp) {
        case 0 :
            break;
        case 1 :
            StrTmp = StrTmp + " billion " ;
            break;
        default : 
            StrTmp = StrTmp + " billions " ;
    }
    NumEnt = StrTmp + NumEnt ;
     return NumEnt;    
}

function ConvNumDizaine(Nombre, Langue) {
    var TabUnit, TabDiz ;
    var byUnit, byDiz ;
    var strLiaison = new String() ;
    
    TabUnit = Array("", "un", "deux", "trois", "quatre", "cinq", "six", "sept",
        "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze",
        "seize", "dix-sept", "dix-huit", "dix-neuf") ;
    TabDiz = Array("", "", "vingt", "trente", "quarante", "cinquante",
        "soixante", "soixante", "quatre-vingt", "quatre-vingt") ;
    if (Langue == 1) {
        TabDiz[7] = "septante" ;
        TabDiz[9] = "nonante" ;
    }
    else if (Langue == 2) {
        TabDiz[7] = "septante" ;
        TabDiz[8] = "huitante" ;
        TabDiz[9] = "nonante" ;
    }
    byDiz = parseInt(Nombre / 10) ;
    byUnit = Nombre - (byDiz * 10) ;
    strLiaison = "-" ;
    if (byUnit == 1) strLiaison = " et " ;
    switch(byDiz) {
        case 0 :
            strLiaison = "" ;
            break;
        case 1 :
            byUnit = byUnit + 10 ;
            strLiaison = "" ;
            break;
        case 7 :
            if (Langue == 0) byUnit = byUnit + 10 ;
            break;
        case 8 :
            if (Langue != 2) strLiaison = "-" ;
            break;
        case 9 :
            if (Langue == 0) {
                byUnit = byUnit + 10 ;
                strLiaison = "-" ;
            }
            break;
    }
    var NumDizaine = TabDiz[byDiz] ;
    if (byDiz == 8 && Langue != 2 && byUnit == 0) NumDizaine = NumDizaine + "s" ;
    if (TabUnit[byUnit] != "") {
        NumDizaine = NumDizaine + strLiaison + TabUnit[byUnit] ;
    }
    else {
        NumDizaine = NumDizaine ;
    } 
    return NumDizaine;
}

function ConvNumCent(Nombre, Langue) {
    var TabUnit ;
    var byCent, byReste ;
    var strReste = new String() ;
    var NumCent;
    TabUnit = Array("", "un", "deux", "trois", "quatre", "cinq", "six", "sept","huit", "neuf", "dix") ;
    
    byCent = parseInt(Nombre / 100) ;
    byReste = Nombre - (byCent * 100) ; 
    strReste = ConvNumDizaine(byReste, Langue) 
    switch(byCent) {
        case 0 :
            NumCent = strReste ;
            break;
        case 1 :
            if (byReste == 0)
                NumCent = "cent" ;
            else 
                NumCent = "cent " + strReste ;
            break;
        default :
            if (byReste == 0)
                NumCent = TabUnit[byCent] + " cents" ;
            else 
                NumCent = TabUnit[byCent] + " cent " + strReste ;
    }
    return NumCent;
};
function explode( text, max )
{
    // clean the text
    text = text.replace(/  +/g, " ").replace(/^ /, "").replace(/ $/, "");
    // return empty string if text is undefined
    if (typeof text === "undefined") return "";
    // if max hasn't been defined, max = 50
    if (typeof max === "undefined") max = 45;
    // return the initial text if already less than max
    if (text.length <= max) return text;
    // get the first part of the text
    var exploded = text.substring(0, max);
    // get the next part of the text
    text = text.substring(max);
    // if next part doesn't start with a space
    if (text.charAt(0) !== " ") {
        // while the first part doesn't end with a space && the first part still has at least one char
        while (exploded.charAt(exploded.length - 1) !== " " && exploded.length > 0) {
            // add the last char of the first part at the beginning of the next part
            text = exploded.charAt(exploded.length - 1) + text;
            // remove the last char of the first part
            exploded = exploded.substring(0, exploded.length - 1);
        }
        // if the first part has been emptied (case of a text bigger than max without any space)
        if (exploded.length == 0) {
            // re-explode the text without caring about spaces
            exploded = text.substring(0, max);
            text = text.substring(max);
        // if the first part isn't empty
        } else {
            // remove the last char of the first part, because it's a space
            exploded = exploded.substring(0, exploded.length - 1);
        }
    // if the next part starts with a space
    } else {
        // remove the first char of the next part
        text = text.substring(1);
    }
    // return the first part and the exploded next part, concatenated by \n
    return exploded + "\\n" + explode(text);
};
function mois_lettres(dateString) {
    var date = new Date(dateString);
    var m = date.getMonth()+1;
     var Mois = Array("","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
   return utf8.decode(Mois[m])+" "+date.getFullYear();
};
function retourDate(date,heure,nbrtx){
    var dateretour= new Date(date);
    
    var premJour=0;
    if(heure<=5){
        premJour=3;
    }else if(heure<=14){
        premJour=2;
    }else if(heure<=21){
        premJour=1;
    }
    var nbrjours=(nbrtx-premJour)/3;
    var nbrjoursEnt=parseInt(nbrjours);
    if(nbrjours-nbrjoursEnt==0){
        dateretour.setDate(dateretour.getDate()+nbrjours);
    }else{
        dateretour.setDate(dateretour.getDate()+nbrjours+1);
    }
    return formatHH(dateretour.getDate())+"/"+formatHH(dateretour.getMonth()+1) +"/"+dateretour.getFullYear();
    
};
function retourHeure(heure,nbrtx){
    var premJour=0;
    if(heure<=5){
        premJour=3;
    }else if(heure<=14){
        premJour=2;
    }else if(heure<=21){
        premJour=1;
    }
    if((nbrtx-premJour)%3==1){
            return 8+parseInt(heure/6.9);
        }else if((nbrtx-premJour)%3==2){
            return 15+parseInt(heure/6.9);
        }else return 21+parseInt(heure/10);
};
function formatHH(str){
    var strF= ''+str;
   
    if(strF.length==1){
        return '0'+str;
       
    }
    return str;
};
function num_format(num, date2){
    var strF= ''+num;
    var date= new Date(date2);
   
    if(strF.length==1){
        return '000'+num+'/'+date.getFullYear();
       
    }
    if(strF.length==2){
        return '00'+num+'/'+date.getFullYear();
       
    }
    if(strF.length==3){
        return '0'+num+'/'+date.getFullYear();
       
    }
    return num+'/'+date.getFullYear();
    
};

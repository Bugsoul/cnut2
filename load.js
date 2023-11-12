//-------------------------------------------------------- hasta notu oluşturuluyor-------
function sonNot() {
	var ts = document.getElementById("ta_sik").value;
	  var ti = document.getElementById("tx_icd").value;
	  var tt = document.getElementById("tx_TA").value;
  var tn = document.getElementById("tx_NB").value;
  	  var tss = document.getElementById("tx_SS").value;
  var ta = document.getElementById("tx_ates").value;
  var tsa = document.getElementById("tx_SAT").value;
     var xrbox = document.getElementById("ch_xr");
  var xrChecked = xrbox.checked; // dikkat "tıklı DEĞİL ise" ! özelliğini kullanmak için bunu da eklemen gerekiyor
 
 if (ts == "" || tt == "" || ti == "" || tn == "" || tss == "" || tsa == "" || !xrChecked) {
	    document.getElementById("lb_pan").style.width = "50%";
		document.getElementById("lb_pan").style.margin = "0 auto"; // Yatayda ortalamak için ekledik
		document.getElementById("lb_pan").style.fontSize = "20px"; 
	  document.getElementById("lb_pan").style.backgroundColor = "blue";
      document.getElementById("lb_pan").innerHTML = "Check Vitals, Diagnos and Bone"
	  clearInnerText(2000);
  }else {
  const v_sik = document.getElementById("ta_sik").value;
  const v_ozg = document.getElementById("tx_ozg").value;
   const v_alj = document.getElementById("tx_alj").value;
  const v_ame = document.getElementById("tx_ame").value;
  const v_ilac = document.getElementById("tx_ilac").value;
   const v_112 = selec_112();
   const v_adli = tog_adli();
  const v_ted = document.getElementById("ta_ted").value;
	const v_akc = document.getElementById("tx_akc").value;
  const v_TA = document.getElementById("tx_TA").value;
  const v_NB = document.getElementById("tx_NB").value;
  const v_SS = document.getElementById("tx_SS").value;
  const v_ates = document.getElementById("tx_ates").value;
  const v_SAT = document.getElementById("tx_SAT").value;

  const textBox = document.getElementById("tx_ks");
	let v_ks;
if (textBox.value.trim() !== "") {
  v_ks = "KŞ :" + textBox.value.trim();
} else {
  v_ks = "";
}

  const v_gks = document.getElementById("tx_gks").value;
  const v_sol = document.getElementById("tx_sol").value;
    const v_krd = document.getElementById("tx_krd").value;
  const v_nor = document.getElementById("tx_nor").value;
  const v_bat = document.getElementById("tx_bat").value;
  const v_rt = document.getElementById("tx_rt").value;
    const v_akg = document.getElementById("tx_akg").value;
  const v_dig = document.getElementById("tx_dig").value;
   const v_ekg = document.getElementById("tx_ekg").value;
  const v_ext = document.getElementById("ta_ext").value;
  const v_icd = document.getElementById("tx_icd").value;
  const v_trv = document.getElementById("ta_trv").value;
 
var vit_ara = `Geliş vital değerleri: TA:${v_TA}, Nb:${v_NB}, Sol.Sy:${v_SS}, Ateş:${v_ates}, SatO2:${v_SAT}, ${v_ks}.`;
const vitaller = vit_ara.replace('Ateş:,', ''); // travmada filan girilmediyse, boş kalsın diye

const eknot = `Öncelikli ön tanı/olası patoloji : ${v_icd}. ${v_ted}`;


const kons_mu = document.getElementById("ta_izl").value;

var i_oz = "";
var x_ozg = v_ozg + "\n";
var x_alj = v_alj + "\n";
var x_ilac = v_ilac + "\n";
var x_ame = v_ame + "\n";
    if (v_ozg || v_ilac || v_ame || v_alj) {
          i_oz = "Geçmiş anamnezi :\n";
    }
	
if (!document.getElementById("ch_ozg").checked && v_ozg !== "") {
  x_ozg = "Kronik hast.: " + v_ozg + ".\n";
}
if (v_ozg == "") {
	x_ozg = "";
}
if (!document.getElementById("ch_ilac").checked && v_ilac !== "") {
  x_ilac = "Kullandığı ilaçlar : " + v_ilac + ".\n";
}
if (v_ilac == "") {
	x_ilac = "";
}
if (!document.getElementById("ch_ame").checked && v_ame !== "") {
  x_ame = "Geçirdiği operasyonlar : " + v_ame + ".\n";
}
if (v_ame == "") {
	x_ame = "";
}
if (!document.getElementById("ch_alj").checked && v_alj !== "") {
  x_alj = "Allerji : " + v_alj + ".";
}
if (v_alj == "") {
	x_alj = "";
}

var bos1 ="";
var bos2 ="";
var bos3 ="";
if (document.getElementById("ch_ekg").checked) {
	bos1 ="\n";
}
if (document.getElementById("ch_akg").checked) {
	bos2 ="\n";
}
if (document.getElementById("ch_rt").checked) {
	bos3 ="\n";
}

const sonDeger = `${v_112}${v_sik}\n\n${i_oz}${x_ozg}${x_ilac}${x_ame}${x_alj}\n\n${vitaller}\n\n${v_trv}\nFizik Muayene Bulguları: ${v_gks} \
${v_sol} ${v_krd} ${v_bat} ${v_nor} ${v_dig}\n${bos3}${v_rt}${bos2}${v_akg} ${bos1}${v_ekg}\n${v_akc}\n\n${eknot}\n\
${v_adli}\n${kons_mu}\n    ${v_ext}`;

var redax = sonDeger.replace(', .', '.').replace('  ', ' ').replace('  ', ' ').replace(/(\s*\n){3,}/g, '\n\n')
.replace('👮|', '').replace('🤕|', '').replace('🚑|', '');
// yukarda noklama hatası ve çift boşluk düzelteme işlemi yapılmakta.

replaceWords(redax)
  .then(replacedText => {
    document.getElementById("ta_son").value = replacedText;
  })
  .catch(error => {
    console.error(`An error occurred while replacing words: ${error}`);
  });

const input = document.createElement('textarea');
input.style.position = 'fixed';
input.style.opacity = 0;
input.value = redax;
document.body.appendChild(input);
input.select();
document.execCommand('copy');
document.body.removeChild(input);

  document.getElementById("lb_pan").style.width = "50%";
  //document.getElementById("lb_pan").style.margin = "0 auto"; // Yatayda ortalamak için ekledik
  document.getElementById("lb_pan").style.fontSize = "20px"; 
  document.getElementById("lb_pan").innerHTML = "Copied - Check Hours"
  document.getElementById("lb_pan").style.backgroundColor = "#CCCCCC";
  clearInnerText(2500);

}
}

function subEnd() {// ------------------------------------------------------------- PC notu al Butonu ... "bt_krr"
	document.getElementById("ta_son").value = "";

	var slcElement = document.getElementById("slc_trj"); // triaj kırmızı ise yada aşağıdaki "if" de kons varsa izlem notu değişir
	var slcValue = slcElement.value;
	if (slcValue === "0") {
		//slcElement.style.border = "4px solid yellow";
		sariUyari(slc_trj);
	} else {
		if (slcValue === "2") {
			document.getElementById("ta_izl").value = jta_izl3;
		} else {
			document.getElementById("ta_izl").value = jta_izl2;
		}

		var keywords = { "K,": "kardiyoloji", "N,": "nöroloji", "G,": "göğüs hast.", "D,": "dahiliye", "İ,": "intaniye", "Nf,": "nefroloji",
		"Gt,": "gastroenteroloji", "A,": "anestezi", "Gc,": "genel cerrahi", "Ğc,": "göğüs cerrahisi", "Bc,": "beyin cerrahisi",
		"O,": "ortopedi", "Çc,": "çocuk cerrahisi", "Pc,": "PRC", "Kc,": "KVC", "Kb,": "kbb", "Gz,": "göz hast." };
		var comp = "";
		var text = document.getElementById("tx_plan").value;
		var crr_izl = document.getElementById("ta_izl").value;
		var sonk = "";
		
		// Süslü parantezler içindeki "Gc" kelimesini aramak için bir düzenli ifade kullanın
		for (var key in keywords) {
			var regex = new RegExp("{[^}]*" + key + "[^}]*}");
		if (regex.test(text)) {
			comp += keywords[key] + ", ";
			document.getElementById("ta_izl").value = jta_izl3;
			
			var sonk = jta_izl4.replace('##', comp).replace(',  ', ' ');
		}
		}

		document.getElementById("ta_izl").value = crr_izl + "\n\n" + sonk;
		slcElement.style.border = "";
		sonNot();
		}
}
//--------------------------------------------------------------------------------- Kons al butonu ... "bt_kons"
function subKons() {
	document.getElementById("ta_son").value = "";
	var textBox = document.getElementById("ta_izl");
	var txPlan = document.getElementById("tx_plan");
	textBox.value = jta_izl1;

	var selectElement = document.getElementById("slc_112");
	var selectedValue = selectElement.value;
	var ch_gksElement = document.getElementById("ch_gks"); 
	if (selectedValue != 0 && ch_gksElement.checked) {
		selectElement.style.border = "";
		ch_gksElement.style.border = "";
		renkSireni();
		setTimeout(function(){  // şukadar süre sonra şunu yap 
			sonNot();
		}, 30);
		setTimeout(function(){
			document.getElementById("bt_bck").click();
		}, 200);
	} else {
		sariUyari(slc_112);
		sariUyari(tx_gks);
	}
	vitalsHighlight();
	if (!txPlan.value.includes("💉") || !txPlan.value.includes("☢️") || !txPlan.value.toUpperCase().includes("TED")) { 
		document.getElementById("ta_ted").style.border = `3px solid #fcb308`;
	}
}

function clearInnerText(delayTime) {     //clearInnerText(3000)   bu 3 sn sonra temizler
  setTimeout(function() {
    document.getElementById("lb_pan").innerHTML = "";
	document.getElementById("lb_pan").style.backgroundColor = "";
	document.getElementById("bt_bck").disabled = false;
	document.getElementById("tx_name").style.background = "#30313b";
	document.getElementById("tx_icd").style.background = "#30313b";
	document.getElementById("ta_sik").style.background = "#30313b";
  }, delayTime);
}

//------------------------------    Burada rasgele harfler sonrası "3" basamaklı şifreyi yazınca giriyor
window.addEventListener('load', function() {
  var passwordInput = document.getElementById("gi-input");
  var giCon = document.getElementById("gi-container");
  var main = document.getElementById("main");
  main.style.display = "none"; 
  passwordInput.focus();

  passwordInput.addEventListener("input", function(event) {
    // if (event.key === "Enter") {
      if (passwordInput.value.toLowerCase().slice(-3) === "-ü,") {// anlık olarak küçük harefe dönüşüyor ve yazılan içinden 3 karakteri okuyor
        main.style.display = "block";
        giCon.style.display = "none";
		
		var elements = document.querySelectorAll("#ch_ame, #ch_ekg, #ch_ilac, #ch_rt, #ch_gks, #ch_sol, #ch_krd, #ch_nor, #ch_bat, #ch_dig, #ch_ozg, \
#ch_ted, #ch_ext, #ch_akg, #bt_bck, #bt_krr, #sYukle, #bt_kons, #tx_ame, #tx_ekg, #tx_ilac, #tx_rt, #tx_gks, #tx_sol, #tx_krd, #tx_nor, #tx_bat, \
#tx_dig, #tx_ozg, #tx_ted, #ta_ext, #tx_akg, #ch_plus, #tx_icd, #tx_NB, #tx_SAT, #tx_TA, #tx_SS, #tx_ates, #tx_name, #ta_sik, #ta_son, #ta_trv, \
#ch_trv, #tx_akc, #ch_akc, #tx_alj, #ch_alj, #ch_kns, #gistList, #bt_list, #bt_res");
for (var i = 0; i < elements.length; i++) {
  elements[i].disabled = false;
}

document.getElementById("bt_res").style.display = "block"; // şifreyi girinde görünür olması için
document.getElementById("im_ekg").style.opacity = "1";
document.getElementById("im_akg").style.opacity = "1";
document.getElementById("im_112").style.opacity = "1";
document.getElementById("im_trv").style.opacity = "1";
document.getElementById("im_xry").style.opacity = "1";

		handleFileSelect(); // Bu fonksiyonun otomatik olarak çağrılması gerekiyorsa	
        autoClickMe();
		vitalsHighlight();
		document.getElementById("bt_list").click();
		
      } else if (event.key === "Enter") {
        window.close();
      }
  });
  passwordInput.focus();
  startCounterx();
});

/*
document.addEventListener("keydown", function(event) {  // enter/esc'a basarsan sayfa kapanır
  if (event.key === "Escape") {
    window.close();
  }
});
*/

function autoClickMe() { //------------------------------------------------------------- Auto klik alanı
  const ch_ozg = document.getElementById("ch_ozg");
  const ch_ame = document.getElementById("ch_ame");
  const ch_ilac = document.getElementById("ch_ilac");
  const chk_ane = document.getElementById("ch_ekg");
  const ch_gks = document.getElementById("ch_gks");
  const ch_sol = document.getElementById("ch_sol");
  const ch_krd = document.getElementById("ch_krd");
  const ch_nor = document.getElementById("ch_nor");
  const ch_bat = document.getElementById("ch_bat");
  const ch_dig = document.getElementById("ch_dig");
  ch_ozg.click();
  ch_ame.click();
    ch_ilac.click();
  // ch_ekg.click();  //  bir süre ekg yi oto klikten çıkartıyorum
    // ch_gks.click();
  ch_sol.click();
    ch_krd.click();
    ch_nor.click();
  ch_bat.click();
  ch_dig.click();
  ch_ted.click();
  ch_alj.click();
  
  fake_vitals();

document.getElementById("lb_has").innerHTML = "Name:";
document.getElementById("lb_ozg").innerHTML = "Resume:";
document.getElementById("lb_ilac").innerHTML = "Medic:";
document.getElementById("lb_ta").innerHTML = "BP:";
document.getElementById("lb_NB").innerHTML = "Puls:";
document.getElementById("lb_SS").innerHTML = "RR:";
document.getElementById("lb_ates").innerHTML = "Fever:";
document.getElementById("lb_SAT").innerHTML = "SatO2:";
document.getElementById("lb_ks").innerHTML = "BG:";
document.getElementById("lb_ame").innerHTML = "Surgery:";
document.getElementById("lb_ekg").innerHTML = "ECG:";
document.getElementById("lb_gks").innerHTML = "GCS, PLR:";
document.getElementById("lb_sol").innerHTML = "Respiration:";
document.getElementById("lb_krd").innerHTML = "Cardiac:";
document.getElementById("lb_nor").innerHTML = "Neurological:";
document.getElementById("lb_bat").innerHTML = "Abdomen:";
document.getElementById("lb_dig").innerHTML = "Other:";
document.getElementById("lb_rt").innerHTML = "REx:";
document.getElementById("lb_akg").innerHTML = "ABG:";
document.getElementById("lb_icd").innerHTML = "Diagnosis :";
document.getElementById("lb_tre").innerHTML = "- Plan:";
document.getElementById("lb_adli").innerHTML = "Forensic";
document.querySelectorAll("#lb_ext, #lb_ext2").forEach(element => element.innerHTML = "Discharge :"); //aynı isim için
document.getElementById("lb_plus").innerHTML = "Plus Note";
document.getElementById("lb_sik").innerHTML = "History &<br> Complaints:";
document.getElementById("lb_ted").innerHTML = "Progress<br><br><br><font color='#2e90f2'>Imaging/Lab :</font>\
<br><br><font color='#f2b21b'>Medicine :</font>";
document.getElementById("lb_son").innerHTML = "Last note:";
document.getElementById("bt_bck").innerHTML = "Gist_SAVE";
document.getElementById("bt_new").innerHTML = "New";
document.getElementById("bt_del").innerHTML = "Del";
document.getElementById("bt_res").innerHTML = "Reset.ID";
document.getElementById("sYukle").innerHTML = "Get(Auto)";
document.getElementById("bt_krr").innerHTML = "Copy to PC";
document.getElementById("bt_kons").innerHTML = "Consultation";
document.getElementById("lb_trv").innerHTML = "Trauma";
document.getElementById("lb_trm").innerHTML = "Trauma:";
document.getElementById("lb_akc").innerHTML = "CXR";
document.getElementById("lb_cxr").innerHTML = "Chest X-ray:";
document.getElementById("lb_alj").innerHTML = "Allergy";
document.getElementById("lb_izl").innerHTML = "Observation :";
document.getElementById("ch_gor").textContent  = "Görmel";
document.getElementById("ps_flu").placeholder  = "Antiblur";
document.getElementById("ta_izl").value = jta_izl2;
clearInnerText(100);
}

function fake_vitals() {
	var vo_ta = document.getElementById("tx_TA");
var rNumber1 = Math.random() * (129 - 115) + 115;
var rNumber2 = Math.random() * (84 - 75) + 75;
vo_ta.value = rNumber1.toFixed(0)+ '/' +rNumber2.toFixed(0) + " ";

var vo_nb = document.getElementById("tx_NB");
var randomNumber = Math.random() * (88 - 67) + 67;
vo_nb.value = randomNumber.toFixed(0) + " ";

var vo_ss = document.getElementById("tx_SS");
var randomNumber = Math.random() * (24 - 20) + 20;
vo_ss.value = randomNumber.toFixed(0) + " ";
  
var vo_ates = document.getElementById("tx_ates");
var randomNumber = Math.random() * (37 - 36) + 36;
vo_ates.value = randomNumber.toFixed(1) + " ";
  
var vo_sat = document.getElementById("tx_SAT");
var randomNumber = Math.random() * (99 - 95) + 95;
vo_sat.value = randomNumber.toFixed(0) + " ";

	var now = new Date(); // saati anlık alabilmek için mecburen buraya bir date daha ekledim
	var hour = now.getHours().toString().padStart(2, "0"); // saat ve dakika tek basamak iken düzgün görünmesi için "0" ekliyorum
	var min = now.getMinutes().toString().padStart(2, "0");
	var timex = hour + ":" + min;
	document.getElementById("ta_sik").value = timex + " : Hastanın muayene bölümüne alınma ve ilk değerlendirmesi.\nŞikayeti : ";



document.getElementById("tx_ks").value = "";
document.getElementById("tx_name").focus(); // açılışta isim seçili gelsin diye
}

window.onload = function() {  // -----------------------------------------------------------------------  onLoad -----
	document.getElementById("bt_fk").innerHTML = "Log in"
	document.getElementById("lb_idm").innerHTML = "CNUT the Great"
    document.getElementById("tx_fk").value = "BRN_511";
	document.getElementById("gi-input").setAttribute("placeholder", "Enter Pass...");
	document.getElementById("tx_fk").setAttribute("placeholder", "Enter ID...");

var elements = document.querySelectorAll("#ch_ame, #ch_ekg, #ch_ilac, #ch_rt, #ch_gks, #ch_sol, #ch_krd, #ch_nor, #ch_bat, #ch_dig, #ch_ozg, \
#ch_ted, #ch_ext, #ch_akg, #bt_bck, #bt_krr, #sYukle, #bt_kons, #tx_ame, #tx_ekg, #tx_ilac, #tx_rt, #tx_gks, #tx_sol, #tx_krd, #tx_nor, #tx_bat, \
#tx_dig, #tx_ozg, #tx_ted, #ta_ext, #tx_akg, #ch_plus, #tx_icd, #tx_NB, #tx_SAT, #tx_TA, #tx_SS, #tx_ates, #tx_name, #ta_sik, #ta_son, #ta_trv, \
#ch_trv, #tx_akc, #ch_akc, #tx_alj, #ch_alj, #ch_kns, #gistList, #bt_list, #bt_res");
for (var i = 0; i < elements.length; i++) {
  elements[i].disabled = true;
}
document.getElementById("lb_has").innerHTML = "╭∩╮";
document.getElementById("lb_ozg").innerHTML = "╭∩╮";
document.getElementById("lb_ilac").innerHTML = "╭∩╮";
document.getElementById("lb_ta").innerHTML = "╭∩╮";
document.getElementById("lb_NB").innerHTML = "╭∩╮";
document.getElementById("lb_SS").innerHTML = "╭∩╮";
document.getElementById("lb_ates").innerHTML = "╭∩╮";
document.getElementById("lb_SAT").innerHTML = "╭∩╮";
document.getElementById("lb_ks").innerHTML = "╭∩╮";
document.getElementById("lb_ame").innerHTML = "╭∩╮";
document.getElementById("lb_ekg").innerHTML = "╭∩╮";
document.getElementById("lb_gks").innerHTML = "╭∩╮";
document.getElementById("lb_sol").innerHTML = "╭∩╮";
document.getElementById("lb_icd").innerHTML = "╭∩╮";
document.getElementById("lb_adli").innerHTML = "╭∩╮";
document.getElementById("lb_ext").innerHTML = "╭∩╮";
document.getElementById("lb_plus").innerHTML = "╭∩╮";
document.getElementById("lb_sik").innerHTML = "╭∩╮";
document.getElementById("lb_ted").innerHTML = "╭∩╮";
document.getElementById("lb_trv").innerHTML = "╭∩╮";
document.getElementById("lb_son").innerHTML = "╭∩╮";
document.getElementById("bt_bck").innerHTML = "╭∩╮";
document.getElementById("sYukle").innerHTML = "╭∩╮";
document.getElementById("bt_krr").innerHTML = "╭∩╮";
document.getElementById("lb_akc").innerHTML = "╭∩╮";
document.getElementById("lb_cxr").innerHTML = "╭∩╮";
document.getElementById("lb_alj").innerHTML = "╭∩╮";
document.getElementById("bt_kons").innerHTML = "╭∩╮";
document.getElementById("lb_cap").innerHTML = "Sing Up";
document.getElementById("im_ekg").style.opacity = "0";
document.getElementById("im_akg").style.opacity = "0";
document.getElementById("im_112").style.opacity = "0";
document.getElementById("im_trv").style.opacity = "0";
document.getElementById("im_xry").style.opacity = "0";
document.getElementById("bt_new").innerHTML = "╭∩╮";
document.getElementById("bt_del").innerHTML = "╭∩╮";
document.getElementById("bt_res").innerHTML = "╭∩╮";
document.getElementById("lb_izl").innerHTML = "╭∩╮";

};

function subFk() { // sahte giriş butonu
  document.getElementById("tx_fk").disabled = true;
  document.getElementById("gi-input").disabled = true;
  document.getElementById("lb_cap").innerHTML = "ID or password is incorrect please try again "
  document.getElementById("lb_cap").style.color = "red";
}

function showCheckboxes() {
    var select = document.getElementById("mySelect");
    var selectedOption = select.options[select.selectedIndex].value;
    var forms = document.getElementsByClassName("form");
    for (var i = 0; i < forms.length; i++) {
        forms[i].style.display = "none";
    }
    if (selectedOption === "") {
        for (var i = 0; i < forms.length; i++) {
            forms[i].style.display = "block";
        }
    } else {
        var selectedForm = document.getElementById("form" + selectedOption);
        selectedForm.style.display = "block";
    }
}

//-------------------------------------------------------------- brute SAYAÇ
var counterx = 6; // 3 dakika, saniye cinsinden hesaplanır
var intervalIdx;

function startCounterx() {
  intervalIdx = setInterval(function() {
    counterx--;
	if (counterx <= 0) {
		var passwordInput = document.getElementById("gi-input");
		var textInput = document.getElementById("tx_fk");
		var button = document.getElementById("bt_fk");
		var btkr = document.getElementById("bt_krr");
		textInput.disabled = true;
		button.disabled = true;
		passwordInput.disabled = true;
		if (btkr.disabled) {
			window.location.href = "404.html";
		}
	}
  }, 1000);
}
//------------------------------------------------------------------------------------ redax
const newWords = {
  "tariflenmedi": ["belirtilmedi", "söylenmedi"],
  "ameliyat": ["operasyon", "cerrahi girişim"],
  "hastalık öyküsü": ["hastalık geçmişi", "hastalık hikayesi"],
  "izlenmedi": ["saptanmadı"],
  "yorumlanmıştır": ["değerlendirilmiştir"],
  "Bilateral": ["Her iki", "Çift taraflı"],
  "olağan": ["normal sınırlarda"],
  "İzlemde": ["Takibinde"],
  "ayrıntılı": ["detaylı"],
  "şekilde": ["biçimde"],
  "görünmektedir": ["izlenmektedir"],
  "tespit edilmemiştir": ["izlenmemiştir", "saptanmamıştır"],
  "simetrik": ["eşit"],
  "söylenmiştir": ["belirtilmiştir", "iletilmiştir"],
  "tedavisi başlandı": ["tedaviye geçildi"],
  "Öncelikli olarak": ["İlk planda", "İlk aşamada", "Ön planda", "Ön tanıda"],
  ", .": ["."],
  "aa": ["xx"],
  "Bilinen": ["Tanımlanmış"]
};

function getRandomWord(word) {
  if (word in newWords && newWords[word].length > 0) {
    const randomIndex = Math.floor(Math.random() * newWords[word].length);
    return newWords[word][randomIndex];
  }
  return word;
}

function replaceWords(text) {
  const words = text.split(" ");
  const promises = words.map(word => {
    const shouldReplace = Math.random() < 0.5;
    if (shouldReplace) {
      return getRandomWord(word);
    }
    return Promise.resolve(word);
  });
  return Promise.all(promises).then(replacedWords => {
    return replacedWords.join(" ");
  });
}

function subNew() { //------------------------------------------------------------------ Yeni (new) Hasta için sayfayı temizle
    // Bu gurup önce tiki kaldırılıp sonra tiklenmesi gerekenler
	const checkboxIds = ["ch_ozg", "ch_ame", "ch_ilac", "ch_sol", "ch_krd", "ch_nor", "ch_bat", "ch_dig", "ch_alj", "ch_ted"];
	const checkboxler = checkboxIds.map((id) => document.getElementById(id));
	for (const checkbox of checkboxler) {
		checkbox.checked = false;
	}

	 // Bu gurup da önce tiklenip sonra tikinin kaldırılması gerekenler
	const checkboxes = [ch_trv, ch_ext, ch_akc, ch_akg, ch_rt, ch_ekg, ch_gks, ch_ext];
	const uncheck_yap = checkboxes.map((checkbox) => {
	checkbox.checked = true;
		return checkbox;
	});
	
ch_adli.checked = false;
ch_plus.checked = false;
	
    // Ardından, bir süre bekledikten sonra tüm checkbox'ları tik işlemi yap
    setTimeout(function () {
        for (var i = 0; i < checkboxler.length; i++) {
            checkboxler[i].click();
        }
		for (var i = 0; i < uncheck_yap.length; i++) {
            uncheck_yap[i].click();
        }
		document.getElementById("tx_name").focus();
    }, 200);
	
	fake_vitals();  
	var saat = document.getElementById("lb_saat").textContent;
	document.getElementById("tx_name").value = "";
	document.getElementById("tx_icd").value = "";
	document.getElementById("tx_plan").value = "";
	document.getElementById("lb_gist").textContent = '';
	document.getElementById("bt_bck").innerHTML = "Gist_SAVE";
	document.getElementById("ta_son").value = "";
	window.ilk_tarih = ""; // gece gün geçişinde karışıklık olmasın diye oluşturulmuştur. yeni kayıtta resetlenmesi gerekiyor
	// Buton işareti kaldırmak için CSS
	document.querySelectorAll("#im_easy, #im_sis, #im_ext, #im_bt").forEach(element => element.classList.remove("pressed"));

var selectElement = document.getElementById("gistList");
selectElement.selectedIndex = 0; // selectbox'u ilk yüklendiği hal, başlığı seçili hale getiriyor
var selectElement2 = document.getElementById("slc_112");
selectElement2.value = "0";
selectElement2.style.backgroundColor = "#6b6b6b";
var selectElement3 = document.getElementById("slc_trj");
selectElement3.value = "0";
selectElement3.style.backgroundColor = "#6b6b6b";

document.getElementById("lb_cunt").innerHTML = "180";  // sayacı başa aldık. yani 180sn ayarlı ya

	setTimeout(function(){         // şukadar süre sonra şunu yap 
		vitalsHighlight();
	}, 1000);
	
	gecisTemizle();
}

function subRes() {  
// gist id sıfırlıyor. gist name değiştirilemediği için yeni id ve isimle kayıt oluştur sonra eskiyi sil
  document.getElementById("lb_gist").textContent = '';
}

function subCopy() { // çıkış notunu ayarladığım textarea içeriğini copy-paste yapman için
  var textarea = document.getElementById("ta_ext");
  textarea.select();
  document.execCommand("copy");
}

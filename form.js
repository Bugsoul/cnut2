function tog_ozg() {
	var textBox = document.getElementById("tx_ozg");
	if (document.getElementById("ch_ozg").checked) {
		textBox.value = "Geçmiş bir hastalık öyküsü tariflemiyor.";
	} else {
		textBox.value = "";
	}
}
function tog_ilac() {
	var textBox = document.getElementById("tx_ilac");
	if (document.getElementById("ch_ilac").checked) {
		textBox.value = "Düzenli ilaç kullanımı tariflemiyor.";
	} else {
		textBox.value = "";
	}
}
function tog_ame() {
	var textBox = document.getElementById("tx_ame");
	if (document.getElementById("ch_ame").checked) {
		textBox.value = "Geçirilmiş ameliyat öyküsü yok.";
	} else {
		textBox.value = "";
	}
}
function tog_ekg() {
	var textBox = document.getElementById("tx_ekg");
	if (document.getElementById("ch_ekg").checked) {
		textBox.value = "EKG: SR. Hız:normal. Anlamlı ST,T deviasyonu izlenmedi.";
	} else {
		textBox.value = "";
	}
}
function tog_rt() {
	var textBox = document.getElementById("tx_rt");
	if (document.getElementById("ch_rt").checked) {
		textBox.value = "RT: Normal gaita bulaşı.";
	} else {
		textBox.value = "";
	}
}

function tog_gks() {
	var textBox = document.getElementById("tx_gks");
	if (document.getElementById("ch_gks").checked) {
		textBox.value = "FM: GKS: 15, IR +/+, GD: iyi, bilinç açık koopere oryante.";
	} else {
		textBox.value = "";
	}
}

function tog_sol() {
	var textBox = document.getElementById("tx_sol");
	if (document.getElementById("ch_sol").checked) {
		textBox.value = "Solunumu düzenli. HİHTSEK, ral-ronkus yok.";
	} else {
		textBox.value = "";
	}
}

function tog_nor() {
	var textBox = document.getElementById("tx_nor");
	if (document.getElementById("ch_nor").checked) {
		textBox.value = "Motor-duyu defisiti yok. Laterizan bulgusu yok. DTR normal. ";
	} else {
		textBox.value = "";
	}
}

function tog_bat() {
	var textBox = document.getElementById("tx_bat");
	if (document.getElementById("ch_bat").checked) {
		textBox.value = "Batın rahat. Defans-rebound, hassasiyet yok.";
	} else {
		textBox.value = "";
	}
}

function tog_dig() {
	var textBox = document.getElementById("tx_dig");
	if (document.getElementById("ch_dig").checked) {
		textBox.value = "Diğer fizik muayene bulguları olağan. ";
	} else {
		textBox.value = "";
	}
}


function submitForm() {
  // İlk üç textbox'ın değerlerini al
  const texVal1 = document.getElementById("tx_ozg").value;
  const texVal2 = document.getElementById("tx_ilac").value;
  const texVal3 = document.getElementById("txa1").value;

  // Boşlukla ayrılmış bir dize oluştur
  const sonDeger = `${texVal1} ${texVal2} ${texVal3}`;

  // Dizeyi son textbox'a yerleştir
  document.getElementById("txa2").value = sonDeger;
}


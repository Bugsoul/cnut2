//____________________________________________________________________________________ popup
 var activeTextbox;
  // Textbox'lara click event listener'ları ekle
  var textboxes = document.querySelectorAll('.gru_tbox, .son_tbox, #tx_SAT');
  textboxes.forEach(function(textbox) {
    textbox.addEventListener('dblclick', function() {
      activeTextbox = textbox;// Tıklanan textbox'a odaklan
      document.getElementById('popup').style.display = 'block';// Popup'ı aç
	  var popTextarea = document.getElementById('pop_ta');// Textarea'ya textbox'ın değerini yükle
			
	var allowedIds = ['tx_gks', 'tx_sol', 'tx_krd', 'tx_nor', 'tx_bat']; // belli textbox cümleleri satıra dağıtıyor (hızlı düzenleme)
	var allowedIds2 = ['ta_trv', 'ta_ted'];
    if (allowedIds.includes(textbox.id)) { 
		var formattedText = textbox.value.replace(/[,\.]/g, '\n$&'); // hem "." hemde "," alt satıra geçirir. Özel bir kod
		//var formattedText = textbox.value.split(',').join('\n,'); 
      popTextarea.value = formattedText; // burada "textbox.value" dersek aynı şekilde aktarır
    } else if (allowedIds2.includes(textbox.id))  {
		var formattedText = textbox.value.split('.').join('\n.');
		popTextarea.value = formattedText;
	} else if (textbox.id === 'tx_SAT' && textbox.value.length < 4) {
		popTextarea.value = textbox.value + "(O2 siz)" + ", xx(O2 ile)";
	}else {
        popTextarea.value = textbox.value; // diğer textboxlarda aynı aktarır
    }
      // Textarea'a odaklan
      var textarea = document.getElementById('pop_ta');
      textarea.focus();

      // Enter tuşuna basıldığında kaydet butonuna tıklanması için olay dinleyicisi ekle
      textarea.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          document.getElementById('pop_save').click();
        }
      });
	  increaseCounter(100); // main.js deki counter'a ekleme koduna buradan direkt ekleme yapabilirsin.
    });
  });
  
  // Popup'ın kaydet butonuna click event listener ekle
  document.getElementById('pop_save').addEventListener('click', function() {
    // popTextarea'daki değeri aktiftextbox'a yükle
	if (activeTextbox.id === 'ta_trv')  {//noktalamaları düzelt
		var duzelt = document.getElementById('pop_ta').value.replace(', ,', ', ');
		activeTextbox.value = duzelt.replace(/\n/g, '').trim(); //satırları tek satır yapar
	} else {
		activeTextbox.value = document.getElementById('pop_ta').value; // textbox lar zaten tek satır olduğu için 
	}
    // Popup'ı kapat
    document.getElementById('popup').style.display = 'none';
  });

  // Popup'ın iptal butonuna click event listener ekle
  document.getElementById('pop_cancel').addEventListener('click', function() {
    // Popup'ı kapat
    document.getElementById('popup').style.display = 'none';
  });

  // Esc tuşuna basıldığında iptal butonuna tıklanması için olay dinleyicisi ekle
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      document.getElementById('pop_cancel').click();
    }
  });

 document.getElementById('pop_pano').addEventListener('click', function() {
	activeTextbox.value = document.getElementById('pop_ta').value;

    // Pano'ya kopyala
    var copyText = activeTextbox.value;
    var tempInput = document.createElement("textarea");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
});

// Kons butonu'nu tıklayınca da notu şöyle bir göremek için hemen popup da açılması için
/*
document.getElementById('bt_kons').addEventListener('click', function() {
	// Popup'ı aç
	document.getElementById('popup').style.display = 'block';
	var son_not = document.getElementById("ta_son");
	
    setTimeout(function(){
        document.getElementById('pop_ta').value = son_not.value;// bu kodu az bişey gecikmeli çalıştır, önce ta_son hazır olsun
    }, 20);
            // Textarea'a odaklan
	var textarea = document.getElementById('pop_ta');
	textarea.focus();
  

});
*/

function sariUyari(element) { // 
  let count = 0;
  const interval = setInterval(() => {
    if (count < 7) {
      element.style.border = `3px solid red`;
      setTimeout(() => {
        element.style.border = '';
      }, 250);
      count++;
    } else {
      clearInterval(interval);
	  element.style.border = `3px solid yellow`;
    }
  }, 300);
}

function vitalsHighlight() { // vitaller için sonda boşluk ile başlar, yeni değer girilmedi ise sarı çerçeve çıkar
    var elementsToCheck = ["tx_TA", "tx_NB", "tx_SS", "tx_ates", "tx_SAT"];   
	var showAlert = false; // 
    elementsToCheck.forEach(function(elementId) {
        var element = document.getElementById(elementId);       
		if (element) {
            var value = element.value;
			if (value.endsWith(" ")) {
				element.style.border = `3px solid yellow`;
				if (event && event.target.id === "bt_kons") { // bu kısım, eğer bu buton ile çalıştırıldıysa çalışır **
					if (!showAlert) {
						showAlert = true; // uyarı herbiri için değil 1 kez verilsin diye
						alert("Vitalleri kontrol et !");
					}
				}
			} else {
				element.style.border = "";
			}
        }	
        if (element) {
            element.addEventListener("input", function() {
                var value = element.value;               
                if (value.endsWith(" ")) {
                    element.style.border = `3px solid yellow`; // Sarı
                } else {
                    //element.style.backgroundColor = "#30313b"; // Lacivert
					element.style.border = "";
                }
            });
        }
    });
}

function renkSireni() {
  const textboxIDs = ["tx_sol", "tx_krd", "tx_nor", "tx_bat", "tx_dig", "tx_rt", "tx_ekg", "tx_akg", "ta_trv", "tx_gks"];
  let index = 0;
  const interval = 250;

  function degistirArkaplanRengi() {
    if (index < textboxIDs.length) {
      if (index > 0) {
        document.getElementById(textboxIDs[index - 1]).style.border = ""; // Önceki elemanın border'ını kaldır
      }
      document.getElementById(textboxIDs[index]).style.border = "2px solid yellow";
      index++;

      setTimeout(degistirArkaplanRengi, interval);
    } else {
      if (index > 0) {
        document.getElementById(textboxIDs[index - 1]).style.border = ""; // Son elemanın border'ını kaldır
      }
    }
  }
  degistirArkaplanRengi();
}

function gecisTemizle() {
	document.getElementById("bt_bck").innerHTML = "Update";
	document.getElementById("bt_bck").style.backgroundColor = "royalblue";
	document.getElementById("bt_bck").style.width = "150px";
	document.getElementById("ta_son").value = ""; // kons ve not için kulladığım son txtarea içini temizlemek için
	document.querySelector('.cls_ext').style.display = 'none';
		ta_ext.value = "";
		// Buton işareti kaldırmak için CSS
	//document.querySelectorAll("#im_easy, #im_sis, #im_ext, #im_bt").forEach(element => element.classList.remove("pressed"));
	document.getElementById("ch_ext").checked = false;
	document.getElementById("ch_nrm").checked = false;
	document.getElementById("ch_gor").checked = true;
	document.getElementById("ch_iv").checked = true;
	
	const elementIDs = ["tx_TA", "tx_NB", "tx_SS", "tx_ates", "tx_SAT", "lb_trv", "tx_gks", "slc_112", "ta_ted"];
	for (const id of elementIDs) {
		const element = document.getElementById(id);
		if (element) element.style.border = "";
	}
	
	setTimeout(function(){         // şukadar süre sonra şunu yap 
		vitalsHighlight();
	}, 1000);
}
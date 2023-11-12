

function handleFileSelect() {
    const filePath = 'steam_text.json'; // Dosya yolu, bu dosya ile aynı dizinde olduğunu varsayalım
    const password = "abc"; // Şifreleme anahtarı

    fetch(filePath)
        .then(response => response.text())
        .then(content => {
            const decrypted = CryptoJS.AES.decrypt(content, password).toString(CryptoJS.enc.Utf8);
            const jsonData = JSON.parse(decrypted);

            const jtx_ozg1 = jsonData.jtx_ozg;
            const jtx_ilac1 = jsonData.jtx_ilac;

        })
        .catch(error => console.log("Hata:", error));
}


const jtx_ozg = jtx_ozg1.value;
const jtx_ilac = jtx_ilac1.value;


//const jtx_ozg = "Geçmiş öyküsünde kronik bir hastalık tariflenmedi.";
//const jtx_ilac = "Düzenli ilaç kullanımı tariflenmedi.";
const jtx_ame = "Geçirilmiş ameliyat veya invaziv işlem belirtilmedi.";
const jtx_alj = "Bilinen bir ilaç yada madde allerjisi belirtilmedi.";
const jtx_ekg = "— EKG : SR. Hız: normal. Anlamlı ST, T deviasyonu izlenmedi.";
const jtx_rt = "— Rektal Tuşe : Normal gaita bulaşı.";
const jtx_akg = "— AKG : pH normal sınırda ve baz dengesi normal olarak yorumlanmıştır.";
const jtx_gks = "GKS: 15, Pupiller izokorik, deviasyon yok, IR +/+.  GD: iyi, bilinç: açık, koopere, oryante.";
const jtx_sol = "Solunumu düzenli. HİHTSEK, ral-ronkus yok.";
const jtx_krd = "S1-S2 +. Bilateral radyal nabızlar açık ve eşit, sağ-sol tansiyon farkı yok. PTÖ (-/-)";
const jtx_krdp = "S1-S2 ritim normal, ek ses yok, üfürüm yok. Bilateral radyal nabızlar açık ve eşit, sağ-sol tansiyon farkı yok. \
PTÖ (-/-).";
const jtx_nor = "Motor-duyu defisiti saptanmadı. Belirgin laterizan bulgu ve dizartri saptanmadı. DTR normal.";
const jtx_norp = "Motor-duyu defisiti yok. Belirgin laterizan bulgu ve dizartri yok. DTR normal. menings iritasyon bulgusu izlenmedi, \
babinski (-/-), serebellar testler olağan, ataksisi yok. ";
const jtx_bat = "Batın rahat. Defans-rebound yok, hassasiyeti yok. ";
const jtx_batp = "Batın rahat. Defans-rebound, hassasiyet yok. 4 kadranda da barsak sesleri olağan.";
const jtx_dig = "Diğer fizik muayene bulguları olağan. ";

const jsl_112a= "(Ayaktan başvuran hasta.)\n";
const jsl_112b= "(Hasta ambulans tarafından direkt muayene alınana getirilmiştir.)\n";
const jsl_112c= "(Eş zamanlı muayene alanına getirilen ambulans sedyeleri nedeniyle, amb.ekibi hastayı hızlıca teslim edip \
ayrılmıştır.)\n";

const jch_adli = "(Hastanın adli vaka olduğu söylenmiştir.)";

const jtx_akc = "— PA Akc. Grafi: Her iki akciğer alanı simetrik görünmektedir. Parankiminde herhangi bir infiltrasyon, \
 konsolidasyon, nodül, kitle veya kavite alanı izlenmedi. KTO normal. Mediasten alanında herhangi bir genişleme veya \
 anormallik yoktur. Plevral yüzeyler düzgündür ve plevral effüzyon veya pnömotoraks bulgusu izlenmemiştir.";
const jta_trv = "Birincil (acil servis) travma değerlendirmesi : Baş, boyun muayenesi olağan. Trakea orta hatta. Vertebral hassasiyet \
yok. Palpasyon ile kotlarda,\
 ekstremitelerde hassasiyet yok. Vücutta belirgin yara bulgusu, ekimoz, abrazyon, eritem veya şişlik izlenmedi. ";
const jtx_krdt = "Bilateral radyal nabızlar açık ve eşit, sağ-sol tansiyon farkı yok.";
const jtx_nort = "Motor-duyu defisiti yok. Ekstremite hareketleri olağan. DTR normal. Babinski (neg)";
const jtx_solt = "Solunumu düzenli. HİHTSEK.";

const jta_ted = "İlk değerlendirme sonrası gözlem alanında monitörize edildi. Laboratuvar ve görüntüleme tetkikleri istendi. Damar \
yolu açıldı ve destek tedavisi başlandı. Vital, klinik takibe alındı.";

const jta_izl1 = "Hastayı ileri tetkik, tedavi yada takip amaçlı hastaneye yatış veya sevk açısından değerlendirmeniz ricasıyla, \
saygılarımla.";
const jta_izl2 = "İlk değerlendirme sonrasında; acil serviste hastanın izleminde klinik seyiri, kontrol muayeneleri ve tetkik \
sonuçlarına göre bir anormallik yada sorun olması durumda poliklinik kontrolleri önerilmesi planlandı.";
const jta_izl3 = "İlk değerlendirme sonrasında; acil serviste hastanın izleminde tetkik sonuçları, klinik seyirine göre bir anormallik \
yada sorun olması durumda acil servisten yada yatacağı klinikten konsultasyon önerilmesi planlandı.";
const jta_izl4 = "Hastaya ileri tetkik, tedavi, takip amaçlı hastaneye yatış veya sevk açısından ## konsultasyonu istendi.";

const jta_ext1 = ": İzlemde bir şikayeti olmadı. Kontrol vetalleri ve muayenesi normaldi. Konsultasyon sonuçlarında da; yatış, ek \
tetkik yada ted. düşünmedikileri ve polk.kontrolü önerir şeklinde belirtilmiştir. Hangi polikliniklere kontrole gitmesi gerektiği \
ve hangi durumlarda tekrar acil servise başvurması gerektiği veya 112’yi araması gerektiği durumlar hasta/hasta yakınına tekrar \
ayrıntılı bir şekilde anlatıldı. Tetkik sonuçlarını, yapılan işlemleri ve hekim notlarını E-nabız’dan yada girişteki sekreterlikten \
alabileceği söylendi.";
const jta_ext2 = ": İzlemde bir şikayeti olmadı. Kontrol vetalleri ve muayenesi normaldi. Hangi polikliniklere kontrole gitmesi \
gerektiği ve hangi durumlarda tekrar acil servise başvurması gerektiği veya 112’yi araması gerektiği durumlar hasta/hasta yakınına \
ayrıntılı bir şekilde anlatıldı. Tetkik sonuçlarını, yapılan işlemleri ve hekim notlarını E-nabız’dan yada girişteki sekreterlikten \
alabileceği söylendi.";
 
const j_info = "——————— CNUT Genel Özellikleri ———————\n\
— ANAMNEZ : tiki kaldırırsan, SADECE verileri gir. CÜMLE KURMA\n\
— Hasta ismi girilmezse uyarı verir. Unutulursa 'isimsiz..' diye kaydolur.\n\
* Hasta adı (gist name) güncelleme YOK. Reset.ID ile yeni kayıt yap. Eskiyi sil.\n\
— Vitaller şablondur. MUTLAKA düzelt.\n\
— Muayene alanları sen değişiklik yapınca standart renge döner.\n\
— UYARI : Muayene alanları sonuna 'x', sonraki açtığında kırmızı olur.\n\
— her kons/not aldığında belli yazı ve şablonlar random değişir.\n\
— Kons/Copy butonu ile (son) yazı ve sonu seçime uygun çıkar. Plan'a 💻 eklenir, Sisoft OK demek.\n\
— Taburcu ☐'u ayrı bir txa açar. Ve son yazıya ekler.\n\
— 180sn işlem yapmazsan yeni\güncelleme ile kayıt yapar ve kapanır.\n\
— Taburcu notuna otomatik saat eklenir. Saat'i tıklarsan kopyalanır. \n\n\
Adli ☐ chckbx polis sembolü ekler : Tanı [👮 AİTK]\n\
Plan [* 💻 Lab, kons, BT, x] = baştaki * taburcu olacak, sonraki x taburcu eder, silik olur.\n\
— Sayfa boşluğunda * ile yada 60sn kala blur olur ve 10 dk bekler. İstediğin yerde şifreyi gir aç.\n\
\n——————— Butonlar ve Kullanımı —————————\n\
— SAVE : Kayıt ve güncelleme yapar. Buton adı 'saat:dakika' olur.\n\
— NEW : Yeni kayıt için sayfası ilk haline getirir.\n\
— Reset.ID : Gist id yi siler, save ile yeni isimle (aynı verileri) kayıt yapar.\n\
— Save solundaki ☐, PC'ye kayıt ve çekmek için.\n\
— * kons/not için ☐gizli kilidi* açman gerekir. Not alanı rengi değişir.\n\
— Cons ☐, cons butonu ile tiklenir ve son not kons olur. Diğer durumda hasta notudur.\n\
— Açık mavi yazı olan: son not ve izlem notu sisteme kayıt olmaz.\n\
\n☐ : checkbox, txa : textarea, txb : textbox\n\
K: kardiyoloji, N: nöroloji, G: göğüs hast., D: dahiliye, Gt: gastroenteroloji, A: anestezi, \
Gc: genel cerrahi, Ğc: göğüs cerrahisi, Bc: beyin cerrahisi, O: ortopedi, Çc: çocuk cerrahisi, \
Pc: PRC, Kc: KVC, Kb: kbb, Gz: göz hast. ";

const questions = [
    // BÖLÜM 1: HTML
    {
        id: 1,
        category: "HTML",
        question: "HTML belgelerinde kullanılan karakter setini (örneğin Türkçe karakter desteği) belirtmek için hangi etiket kullanılır?",
        options: ["<title>", "<meta>", "<link>", "<char>"],
        answer: 1 // Index of correct answer (B)
    },
    {
        id: 2,
        category: "HTML",
        question: "Aşağıdakilerden hangisi bir “alt simge” (kimyasal formüllerdeki küçük alt sayı) oluşturur?",
        options: ["<sup>", "<small>", "<sub>", "<below>"],
        answer: 2 // C
    },
    {
        id: 3,
        category: "HTML",
        question: "Web sayfasındaki bir metni başka bir web sayfasına yönlendiren köprü (link) etiketi hangisidir?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1 // B
    },
    {
        id: 4,
        category: "HTML",
        question: "<ol> etiketi ile oluşturulan bir listenin maddeleri hangi etiket ile belirtilir?",
        options: ["<ul>", "<list>", "<item>", "<li>"],
        answer: 3 // D
    },
    {
        id: 5,
        category: "HTML",
        question: "Tablo içerisinde sütunları yatay olarak birleştirmek için hangi özellik kullanılır?",
        options: ["rowspan", "colspan", "align", "valign"],
        answer: 1 // B
    },
    {
        id: 6,
        category: "HTML",
        question: "Bir form içerisinde dosya yükleme butonu oluşturmak için hangi type kullanılır?",
        options: ['type="upload"', 'type="folder"', 'type="file"', 'type="submit"'],
        answer: 2 // C
    },
    {
        id: 7,
        category: "HTML",
        question: "HTML5’te sitenin ana menüsünü (navigasyon) temsil eden en uygun etiket hangisidir?",
        options: ["<menu>", "<nav>", "<header>", "<section>"],
        answer: 1 // B
    },
    {
        id: 8,
        category: "HTML",
        question: "Resim eklerken kullanılan src özelliğinin görevi nedir?",
        options: ["Resmin boyutunu belirlemek", "Resmin kaynağını (yolunu) belirtmek", "Resme çerçeve eklemek", "Resmi ortalamak"],
        answer: 1 // B
    },
    {
        id: 9,
        category: "HTML",
        question: "Metni kalın (bold) yapmak için kullanılan ve anlamsal olarak “önemli” olduğunu belirten etiket hangisidir?",
        options: ["<b>", "<i>", "<strong>", "<em>"],
        answer: 2 // C
    },
    {
        id: 10,
        category: "HTML",
        question: "<abbr> etiketi ne amaçla kullanılır?",
        options: ["Adres belirtmek için", "Kısaltmalar için", "Başlıklar için", "Resim yazıları için"],
        answer: 1 // B
    },
    {
        id: 11,
        category: "HTML",
        question: "HTML5’te sayfanın ana içeriğini temsil eden etiket hangisidir?",
        options: ["<div>", "<section>", "<main>", "<article>"],
        answer: 2 // C
    },
    {
        id: 12,
        category: "HTML",
        question: "Bir formun dosya yükleyebilmesi için hangi özellik zorunludur?",
        options: ['method="get"', "action", 'enctype="multipart/form-data"', "autocomplete"],
        answer: 2 // C
    },
    {
        id: 13,
        category: "HTML",
        question: "<label> etiketi ne işe yarar?",
        options: ["Formu gönderir", "Alanı gizler", "Input ile açıklamayı ilişkilendirir", "Formu doğrular"],
        answer: 2 // C
    },

    // BÖLÜM 2: CSS
    {
        id: 14,
        category: "CSS",
        question: "CSS'de bir elemana hem ID hem de Class verilmişse hangisi önceliklidir?",
        options: ["Class", "ID", "İkisi de aynıdır", "HTML’deki sırasına bakılır"],
        answer: 1 // B
    },
    {
        id: 15,
        category: "CSS",
        question: "Yazının puntosunu (boyutunu) değiştirmek için hangi özellik kullanılır?",
        options: ["font-style", "text-size", "font-size", "size"],
        answer: 2 // C
    },
    {
        id: 16,
        category: "CSS",
        question: "padding: 10px 20px 30px 40px; yazıldığında 40px hangi yönü temsil eder?",
        options: ["Üst", "Sağ", "Alt", "Sol"],
        answer: 3 // D (Üst Sağ Alt Sol -> Clockwise: Top Right Bottom Left)
    },
    {
        id: 17,
        category: "CSS",
        question: "border-style: dotted; kenarlığı nasıl gösterir?",
        options: ["Düz", "Noktalı", "Çizgili", "Gizli"],
        answer: 1 // B
    },
    {
        id: 18,
        category: "CSS",
        question: "Bir elemanı display: inline-block yapmak ne sağlar?",
        options: ["Tamamen gizler", "Yan yana gelir ve genişlik/yükseklik alır", "Sadece blok yapar", "Metni ortalar"],
        answer: 1 // B
    },
    {
        id: 19,
        category: "CSS",
        question: "Arka plan rengini belirlemek veya şeffaf yapmak için hangi özellik kullanılır?",
        options: ["color", "background-color", "opacity", "visibility"],
        answer: 1 // B
    },
    {
        id: 20,
        category: "CSS",
        question: "text-align: center; ne işe yarar?",
        options: ["Resmi ortalar", "Metni yatayda ortalar", "Kutuyu ortalar", "Dikey ortalar"],
        answer: 1 // B
    },
    {
        id: 21,
        category: "CSS",
        question: "CSS’de beyaz renk kodu hangisidir?",
        options: ["#000000", "#FFFFFF", "#FF0000", "#CCCCCC"],
        answer: 1 // B
    },
    {
        id: 22,
        category: "CSS",
        question: "a:hover seçicisi ne zaman çalışır?",
        options: ["Tıklanınca", "Ziyaret edilince", "Fare üzerine gelince", "Sayfa açılınca"],
        answer: 2 // C
    },
    {
        id: 23,
        category: "CSS",
        question: "Bir kutunun kenarlarını yuvarlatmak için hangi özellik kullanılır?",
        options: ["border-circle", "border-radius", "border-style", "corner-shape"],
        answer: 1 // B
    },
    {
        id: 24,
        category: "CSS",
        question: "list-style-type: none; genellikle nerede kullanılır?",
        options: ["Resimlerde", "Tablolarda", "Menü yaparken liste işaretlerini kaldırmak için", "Paragraflarda"],
        answer: 2 // C
    },
    {
        id: 25,
        category: "CSS",
        question: "float: left; ne işe yarar?",
        options: ["Metni sola yaslar", "Elemanı sola alır, yanına eleman gelmesini sağlar", "Yazıyı büyütür", "Sayfayı kaydırır"],
        answer: 1 // B
    },
    {
        id: 26,
        category: "CSS",
        question: "CSS’de * (yıldız) seçicisi neyi ifade eder?",
        options: ["İlk elemanı", "Tüm elemanları", "ID’leri", "Gizli elemanları"],
        answer: 1 // B
    },
    {
        id: 27,
        category: "CSS",
        question: "height: 100vh; ifadesindeki vh neyi temsil eder?",
        options: ["Genişlik", "Font", "Ekran yüksekliğinin yüzdesini", "Video yüksekliğini"],
        answer: 2 // C
    },
    {
        id: 28,
        category: "CSS",
        question: "::after sözde elementi ne işe yarar?",
        options: ["Elemandan sonra içerik ekler", "Elemanı siler", "Erteler", "Renklendirir"],
        answer: 0 // A
    },
    {
        id: 29,
        category: "CSS",
        question: "text-decoration: underline; ne yapar?",
        options: ["Kalın yapar", "Altını çizer", "İtalik yapar", "Siler"],
        answer: 1 // B
    },
    {
        id: 30,
        category: "CSS",
        question: "margin: auto; genellikle ne için kullanılır?",
        options: ["Yazı büyütmek", "Sabit genişlikli kutuyu ortalamak", "Kenarlık silmek", "Geçiş yapmak"],
        answer: 1 // B
    },
    {
        id: 31,
        category: "CSS",
        question: "font-weight: 700; neyi ifade eder?",
        options: ["Boyut", "Yazı kalınlığı (Bold)", "Font türü", "Satır aralığı"],
        answer: 1 // B
    },
    {
        id: 32,
        category: "CSS",
        question: "display: none; ile visibility: hidden; farkı nedir?",
        options: ["Fark yok", "None elemanı kaldırır, hidden yerini korur", "Hidden kaldırır", "None rengi siler"],
        answer: 1 // B
    },
    {
        id: 33,
        category: "CSS",
        question: "box-sizing: border-box; ne işe yarar?",
        options: ["Renklendirir", "Padding ve border’ı toplam genişliğe dahil eder", "Yuvarlar", "Gizler"],
        answer: 1 // B
    },
    {
        id: 34,
        category: "CSS",
        question: "z-index özelliği neyi belirler?",
        options: ["Yatay sıra", "Dikey sıra", "Üst üste binme sırası", "Renk"],
        answer: 2 // C
    },
    {
        id: 35,
        category: "CSS",
        question: "cursor: pointer; ne yapar?",
        options: ["Yazıyı değiştirir", "Fareyi el işaretine çevirir", "Fareyi gizler", "Resim ekler"],
        answer: 1 // B
    },
    {
        id: 36,
        category: "CSS",
        question: "line-height artırılırsa ne olur?",
        options: ["Harf arası", "Satır arası boşluk artar", "Yazı kalınlaşır", "Kelime arası"],
        answer: 1 // B
    },
    {
        id: 37,
        category: "CSS",
        question: "letter-spacing neyi ayarlar?",
        options: ["Kelime boşluğu", "Harfler arası boşluk", "Satır boşluğu", "Paragraf boşluğu"],
        answer: 1 // B
    },
    {
        id: 38,
        category: "CSS",
        question: "Bir elemanın dışına gölge eklemek için hangisi kullanılır?",
        options: ["text-shadow", "box-shadow", "border-shadow", "shadow-effect"],
        answer: 1 // B
    },
    {
        id: 39,
        category: "CSS",
        question: "position: fixed; olan bir eleman nasıl davranır?",
        options: ["Sayfa kaydırılsa bile sabit kalır", "Alta iner", "Hareket eder", "Gizlenir"],
        answer: 0 // A
    },
    {
        id: 40,
        category: "CSS",
        question: "opacity: 0.5; ne anlama gelir?",
        options: ["Eleman %50 şeffaf olur", "%50 küçülür", "Gizlenir", "Sabitlenir"],
        answer: 0 // A
    },
    {
        id: 41,
        category: "CSS",
        question: "input:focus seçicisi ne zaman aktif olur?",
        options: ["Sayfa açılınca", "Üzerine gelince", "Tıklanıp yazı girildiğinde", "Gönderilince"],
        answer: 2 // C
    },
    {
        id: 42,
        category: "CSS",
        question: "overflow: scroll; ne işe yarar?",
        options: ["Yazıyı kaydırır", "Kaydırma çubuğu ekler", "İçeriği siler", "Kutuyu büyütür"],
        answer: 1 // B
    },
    {
        id: 43,
        category: "CSS",
        question: "!important ne anlama gelir?",
        options: ["Geçersiz kılar", "En yüksek önceliği verir", "Hata verir", "Mobilde çalışır"],
        answer: 1 // B
    },
    {
        id: 44,
        category: "CSS",
        question: "Padding ile margin arasındaki temel fark nedir?",
        options: ["İkisi de iç boşluk", "İkisi de dış boşluk", "Padding iç, margin dış boşluktur", "Aynıdır"],
        answer: 2 // C
    },
    {
        id: 45,
        category: "CSS",
        question: "Aşağıdakilerden hangisi sözde sınıf (pseudo-class) örneğidir?",
        options: ["::before", "::after", ":hover", "*"],
        answer: 2 // C
    },
    {
        id: 46,
        category: "CSS",
        question: "em birimi neye göre hesaplanır?",
        options: ["Ekran", "px", "Parent font-size", "HTML"],
        answer: 2 // C
    },
    {
        id: 47,
        category: "CSS",
        question: "display: block; elemanın temel özelliği nedir?",
        options: ["Yan yana gelir", "Satırı tamamen kaplar", "Gizlenir", "Sabitlenir"],
        answer: 1 // B
    },
    {
        id: 48,
        category: "CSS",
        question: "box-sizing: border-box; kullanılmazsa ne olur?",
        options: ["Padding yok olur", "Border silinir", "Padding + border genişliği artırır", "Margin kalkar"],
        answer: 2 // C
    }
];

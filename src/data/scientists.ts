import { FieldId } from './fields';

export interface Scientist {
    id: string;
    name: string;
    fieldId: FieldId;
    years: string;
    contribution: string;
    biography: string;
    quote?: string;
    impact: string;
    imageUrl?: string;
}

export const SCIENTISTS: Scientist[] = [
    // Physics
    {
        id: 'marie-curie',
        name: 'Marie Curie',
        fieldId: 'physics',
        years: '1867–1934',
        contribution: 'Radyoaktivite teorisi ve yeni elementlerin keşfi',
        biography: 'Bilim tarihinin en ilham verici figürlerinden biri olan Marie Curie, Polonya\'da yoksulluk içinde büyüdü ancak bilim aşkıyla Paris\'e göç etti. Radyoaktivite üzerine yaptığı öncü çalışmalarla bilim dünyasını kökünden değiştirdi. 1903 yılında Nobel Fizik Ödülü\'nü kazanan ilk kadın oldu; yetmedi, 1911\'de Nobel Kimya Ödülü\'nü de kazanarak iki farklı alanda Nobel alan tek bilim insanı (kadın veya erkek) olarak tarihe geçti. Eşi Pierre Curie ile birlikte tonlarca uranyum cevherini ilkel koşullarda işleyerek Polonyum ve Radyum elementlerini keşfetti. I. Dünya Savaşı sırasında geliştirdiği mobil röntgen cihazlarıyla ("Petites Curies") binlerce yaralı askerin hayatını kurtardı. Hayatını adadığı radyoaktivite çalışmaları maalesef sağlığına mal oldu, ancak mirası kanser tedavisinde (radyoterapi) yaşamaya devam ediyor.',
        quote: 'Hayatta hiçbir şeyden korkmayın, sadece anlamaya çalışın. Şimdi daha fazlasını anlama zamanı, böylece daha az korkabiliriz.',
        impact: 'Radyolojiyi tıbba kazandırdı, kanser tedavisinde çığır açtı ve kadınların bilimdeki yerini ebedileştirdi.',
        imageUrl: '/images/scientists/marie-curie.jpg'
    },
    {
        id: 'lise-meitner',
        name: 'Lise Meitner',
        fieldId: 'physics',
        years: '1878–1968',
        contribution: 'Nükleer fisyonu keşfeden fizikçi',
        biography: 'Avusturyalı fizikçi Lise Meitner, uranyumun nötron bombardımanı altında daha hafif elementlere parçalandığını (fisyon) teorik olarak açıklayan ilk kişidir. Berlin\'de Otto Hahn ile otuz yıl süren verimli bir işbirliği yürüttü, ancak Nazi Almanyası\'nın yükselişiyle Yahudi kökeni nedeniyle ülkeyi terk etmek zorunda kaldı. Sürgündeyken bile çalışmalarına devam etti ve fisyonun muazzam enerji açığa çıkardığını hesapladı. Bu keşif nükleer enerjinin kapısını araladı; ancak 1944 Nobel Kimya Ödülü haksız bir şekilde sadece çalışma arkadaşı Otto Hahn\'a verildi. "Atom bombasının annesi" olarak anılsa da, hayatı boyunca nükleer silahlanmaya karşı çıktı ve Manhattan Projesi\'nde çalışmayı reddetti.',
        quote: 'Bilim insanlarını, gerçeğe olan tutkularından başka hiçbir şey yönlendirmemelidir.',
        impact: 'Einstein ona "Bizim Madam Curie\'miz" derdi. Nükleer enerjinin kapısını araladı, Element 109 (Meitneriyum) onuruna isimlendirildi.',
        imageUrl: '/images/scientists/lise-meitner.jpg'
    },
    {
        id: 'chien-shiung-wu',
        name: 'Chien-Shiung Wu',
        fieldId: 'physics',
        years: '1912–1997',
        contribution: 'Parite ihlalini deneysel olarak kanıtladı',
        biography: 'Çin asıllı Amerikalı fizikçi, deneysel fizikteki titizliği ve ustalığıyla tanınır. II. Dünya Savaşı sırasında Manhattan Projesi\'nde çalıştı ve uranyum zenginleştirme sürecine kritik katkılar sağladı. Ancak en büyük başarısı, fizik yasalarının (parite) her zaman simetrik olmadığını kanıtlayan ünlü "Wu Deneyi"dir. Bu çalışma, teoriyi ortaya atan meslektaşlarına (Yang ve Lee) 1957 Nobel Fizik Ödülü\'nü getirdi, ancak deneyi gerçekleştiren Wu yine göz ardı edildi. Buna rağmen küsmedi, "Fiziğin First Lady\'si" olarak anılmaya devam etti ve Amerikan Fizik Derneği\'nin ilk kadın başkanı seçildi.',
        impact: 'Stanford Üniversitesi\'nde tam profesör olan ilk kadındı. Deneysel fizikte devrim yarattı ve Nobel komitesinin en büyük hatalarından biri olarak anılır.',
        imageUrl: '/images/scientists/chien-shiung-wu.jpg'
    },
    {
        id: 'canan-dagdeviren',
        name: 'Canan Dağdeviren',
        fieldId: 'physics',
        years: '1985–Present',
        contribution: 'Giyilebilir kalp pili ve esnek elektronik cihazlar',
        biography: 'İstanbul doğumlu fizik mühendisi Canan Dağdeviren, bilimi insan yaşamına dokunan bir sanat olarak görüyor. Hacettepe Üniversitesi\'nden mezun olduktan sonra MIT Media Lab\'da kendi araştırma grubunu kurdu. En bilinen icadı, kalbin üzerine yapıştırılarak enerjisini kalbin atışından alan ve pil değişimi gerektirmeyen giyilebilir kalp pilidir (PZT). Ayrıca cilt kanserini 10 saniyede teşhis eden esnek bir cihaz ve Parkinson hastaları için beyin iğnesi gibi çığır açan buluşlara imza attı. Dedesinin, genç yaşta kalp yetmezliğinden ölmesi üzerine "Ben dedemi 28 yaşında kaybettim, ben 28 yaşıma gelene kadar kalp hastaları için bir şeyler yapacağım" sözünü tutarak tarihe geçti.',
        quote: 'Bilim, insanlık için yapılmalı. Hedefim, sevdiklerimin daha uzun ve kaliteli yaşamasını sağlamak.',
        impact: 'Harvard Üniversitesi Genç Akademi üyeliğine seçilen ilk Türk. Forbes tarafından "30 Yaş Altı 30 Bilim İnsanı" listesine seçildi.',
        imageUrl: '/images/scientists/canan-dagdeviren.jpg'
    },
    {
        id: 'feryal-ozel',
        name: 'Feryal Özel',
        fieldId: 'physics',
        years: '1975–Present',
        contribution: 'Kara deliklerin görüntülenmesi ve nötron yıldızları',
        biography: 'Türk-Amerikan astrofizikçi Feryal Özel, kara delikler ve nötron yıldızları üzerine yaptığı çığır açan çalışmalarla tanınır. Event Horizon Telescope (EHT) ekibinin kurucu üyelerinden ve modelleme liderlerinden biridir. Bu proje sayesinde 2019 yılında tarihte ilk kez bir kara deliğin (M87*) fotoğrafı çekildi. Özel, kara deliğin "gölgesinin" boyutunu tahmin ederek bu görüntünün elde edilmesinde kritik bir rol oynadı. Ayrıca nötron yıldızlarının yarıçapını hassas bir şekilde ölçen ilk kişidir. NASA Hubble Fellow ödülünü alan ilk Türk bilim insanıdır ve Stephen Hawking ile birlikte çalışma fırsatı bulmuştur.',
        quote: 'Evrenin sırlarını çözmek, bilinmeyene olan merakımızı tatmin etmenin en güzel yoludur.',
        impact: 'İlk kara delik fotoğrafının arkasındaki kilit isimlerden biridir. Columbia, Harvard ve NASA gibi prestijli kurumlarda çalışmalarını sürdürmektedir.',
        imageUrl: '/images/scientists/feryal-ozel.jpg'
    },

    // Medicine & Health
    {
        id: 'turkan-saylan',
        name: 'Türkan Saylan',
        fieldId: 'medicine',
        years: '1935–2009',
        contribution: 'Cüzzamla mücadele ve eğitim gönüllüsü',
        biography: 'Cumhuriyetin aydınlık yüzü Türkan Saylan, tıp doktoru kimliğinin çok ötesinde bir etki yarattı. Türkiye\'de o dönemde "lanetli hastalık" olarak görülen ve hastaların toplumdan dışlandığı cüzzam (lepra) hastalığını bitirme noktasına getirdi. Cüzzam Savaş Derneği\'ni kurarak hastaları sadece tedavi etmedi, onları topluma geri kazandırdı. Ancak onun en büyük savaşı cehaletleydi; Çağdaş Yaşamı Destekleme Derneği\'ni (ÇYDD) kurarak binlerce kız çocuğunun eğitim almasını, üniversiteye gitmesini sağladı ("Kardelenler" projesi). Hayatının son günlerinde bile kanser tedavisi görürken penceresinden öğrencilerine el sallayarak umut aşılamaya devam etti.',
        quote: 'Eğer bir yerlerde bilime, demokrasiye, barışa, aydınlığa aç bir çocuk senin ışığını bekliyorsa, sönmeye hakkın yoktur.',
        impact: 'Türkiye\'nin aydınlanma mücadelesinin simgesi oldu. Mahatma Gandhi Ödülü sahibi.',
        imageUrl: '/images/scientists/turkan-saylan.jpg'
    },
    {
        id: 'rosalind-franklin',
        name: 'Rosalind Franklin',
        fieldId: 'medicine',
        years: '1920–1958',
        contribution: 'DNA\'nın sarmal yapısının görüntülenmesi',
        biography: 'İngiliz kimyager Rosalind Franklin, X-ışını kristalografisi konusundaki üstün yeteneğiyle DNA\'nın yapısını aydınlatan kritik "Fotoğraf 51"i çekti. Bu fotoğraf, DNA\'nın ikili sarmal yapısının en net kanıtıydı. Ancak çalışma arkadaşı Maurice Wilkins, bu fotoğrafı Franklin\'den habersiz Watson ve Crick\'e gösterdi. Bu sayede DNA modelini çözen ikili Nobel Ödülü\'nü alırken, Franklin 37 yaşında kanserden hayatını kaybettiği için ödülü alamadı ve katkısı uzun süre gölgede kaldı. DNA\'nın yanı sıra virüslerin (özellikle çocuk felci virüsü) ve kömürün moleküler yapısını da haritalandırarak bilime devasa katkılar sağladı.',
        quote: 'Bilim ve günlük yaşam ayrıştırılamaz.',
        impact: 'Yaşamın sırrı olan DNA\'nın keşfindeki gizli kahramandır.',
        imageUrl: '/images/scientists/rosalind-franklin.jpg'
    },
    {
        id: 'elizabeth-blackwell',
        name: 'Elizabeth Blackwell',
        fieldId: 'medicine',
        years: '1821–1910',
        contribution: 'Amerika\'da tıp diploması alan ilk kadın',
        biography: '19. yüzyılda kadınların doktor olması imkansız görülürken, Elizabeth Blackwell 29 tıp fakültesine başvurdu ve hepsinden ret aldı. Son başvurduğu okulda, erkek öğrencilerle yapılan bir oylama sonucu "şaka" sanılarak kabul edildi. Ancak o bu şakayı ciddiye aldı, büyük dışlanmalara ve zorluklara rağmen sınıf birincisi olarak mezun oldu. Mezuniyetinden sonra da engeller bitmedi; hiçbir hastane onu işe almayınca New York\'ta kadınlar ve çocuklar için kendi hastanesini kurdu. Ayrıca İngiltere\'de Kadınlar Tıp Okulu\'nun kurulmasına öncülük ederek binlerce kadının doktor olmasının yolunu açtı.',
        impact: 'Kadınlar için tıp eğitiminin kapılarını zorlayarak açtı ve modern hemşirelik eğitiminin temellerini attı.',
        imageUrl: '/images/scientists/elizabeth-blackwell.jpg'
    },
    {
        id: 'tu-youyou',
        name: 'Tu Youyou',
        fieldId: 'medicine',
        years: '1930–Present',
        contribution: 'Sıtmaya karşı Artemisinin keşfi',
        biography: 'Çinli bilim insanı Tu Youyou, Vietnam Savaşı sırasında sıtmadan ölen askerlerin sayısının artması üzerine gizli bir askeri proje olan "Proje 523"e atandı. Modern ilaçların başarısız olduğu noktada, 1600 yıllık geleneksel Çin tıbbı metinlerini tarayarak çözüm aradı. Pelin otu (Artemisia annua) bitkisinin sıtmayı tedavi edebileceğini keşfetti, ancak yüksek sıcaklıkta kaynatmanın etken maddeyi bozduğunu fark etti. Soğuk ekstraksiyon yöntemiyle Artemisinin maddesini izole etmeyi başardı ve ilacı önce kendi üzerinde denedi. Bu keşfi, dünya genelinde milyonlarca insanın hayatını kurtardı ve 2015 yılında, 84 yaşındayken Nobel Tıp Ödülü\'ne layık görüldü.',
        impact: 'Milyonlarca hayat kurtardı ve 2015 Nobel Tıp Ödülü\'nü kazanan ilk Çinli bilim insanı oldu.',
        imageUrl: '/images/scientists/tu-youyou.jpg'
    },

    // CS/AI
    {
        id: 'ada-lovelace',
        name: 'Ada Lovelace',
        fieldId: 'cs',
        years: '1815–1852',
        contribution: 'İlk bilgisayar programcısı',
        biography: 'Ünlü şair Lord Byron\'ın kızı olan Ada Lovelace, annesi tarafından şiirden uzak dursun diye matematik ağırlıklı yetiştirildi. Ancak o, matematiği şiirsel bir dille birleştirdi. Dönemin ünlü matematikçisi Charles Babbage\'ın tasarladığı "Analitik Motor" adlı mekanik bilgisayar üzerine çalıştı. Makinenin sadece sayıları hesaplamakla kalmayıp, doğru veriler girildiğinde müzik besteleyebileceğini veya resim çizebileceğini öngördü. Makine için yazdığı Bernoulli sayılarını hesaplayan algoritma, tarihin ilk bilgisayar programı olarak kabul edilir. Vizyonu, kendi zamanının 100 yıl ötesindeydi.',
        quote: 'Hayal gücü, Keşif yeteneğidir. Matematiğin kanatlarıyla görünmeyeni görürüz.',
        impact: 'Bilgisayar çağının vizyoneri olarak kabul edilir. Programlama dili "Ada" onun onuruna isimlendirilmiştir.',
        imageUrl: '/images/scientists/ada-lovelace.jpg'
    },
    {
        id: 'grace-hopper',
        name: 'Grace Hopper',
        fieldId: 'cs',
        years: '1906–1992',
        contribution: 'İlk derleyicinin (compiler) geliştirilmesi',
        biography: 'Amerikan Donanması\'nda Tuğamiral rütbesine kadar yükselen "Amazing Grace", bilgisayar biliminin en renkli figürlerinden biridir. Bilgisayarların sadece matematikçiler tarafından değil, herkes tarafından kullanılabilmesi için programlama dillerinin makine kodundan (0 ve 1) bağımsız, İngilizceye yakın olması gerektiğine inandı. Bu vizyonla ilk derleyiciyi (compiler) geliştirdi ve modern iş dünyasının kullandığı COBOL dilini tasarladı. Ayrıca efsaneye göre, Mark II bilgisayarının içinde sıkışan bir güveyi (moth) bularak "bug" (böcek) terimini bilgisayar literatürüne kazandıran kişidir.',
        quote: 'Limanında duran gemi güvendedir, ancak gemiler bunun için yapılmamıştır. Risk almalısınız.',
        impact: 'Yazılım dünyasının anasıdır. Özgürlük Madalyası sahibidir.',
        imageUrl: '/images/scientists/grace-hopper.jpg'
    },
    {
        id: 'margaret-hamilton',
        name: 'Margaret Hamilton',
        fieldId: 'cs',
        years: '1936–Present',
        contribution: 'Apollo görevlerinin uçuş yazılımı',
        biography: 'MIT\'de çalışırken NASA\'nın Apollo uzay programı için yerleşik uçuş yazılımını geliştiren ekibin başına geçti. O dönemde yazılım mühendisliği diye bir disiplin yoktu; bu terimi bizzat kendisi icat etti. Apollo 11 Ay\'a inmek üzereyken bilgisayar aşırı yüklenmeden dolayı alarm verdiğinde, Hamilton\'ın tasarladığı önceliklendirme sistemi devreye girdi. Sistem, gereksiz görevleri durdurup inişi yöneten kritik görevlere odaklanarak Neil Armstrong ve Buzz Aldrin\'in güvenle Ay\'a inmesini sağladı. Yazdığı kodlar, boyunu aşan bir kağıt yığını oluşturacak kadar fazlaydı.',
        impact: 'Kodları sayesinde insanlık Ay\'a ayak bastı. NASA Olağanüstü Uzay Yasası Ödülü sahibi.',
        imageUrl: '/images/scientists/margaret-hamilton.jpg'
    },

    // Space
    {
        id: 'dilhan-eryurt',
        name: 'Dilhan Eryurt',
        fieldId: 'space',
        years: '1926–2012',
        contribution: 'Güneşin evrimi ve NASA Apollo Başarı Ödülü',
        biography: 'İzmir doğumlu Türk astrofizikçi Dilhan Eryurt, 1960\'larda NASA\'nın kapılarını aralayan ilk Türk bilim insanı oldu. Goddard Uzay Araştırma Enstitüsü\'nde çalışırken Güneş\'in evrimi üzerine devrim niteliğinde teoriler geliştirdi. O zamana kadar Güneş\'in oluşumundan beri giderek soğuduğu sanılıyordu; Eryurt ise Güneş\'in ilk oluştuğunda çok daha parlak ve sıcak olduğunu, zamanla "soğuduğunu" kanıtladı. Bu bilgi, Ay\'a gidecek Apollo araçlarının ısı kalkanlarının tasarımında hayati rol oynadı. Bu katkılarından dolayı 1969 yılında prestijli "Apollo Başarı Ödülü"ne layık görüldü.',
        quote: 'Aydınlık bir gelecek için bilimden şaşmayın.',
        impact: 'Uzay araştırmalarında Türkiye\'yi temsil etti ve ODTÜ Astrofizik Anabilim Dalı\'nı kurdu.',
        imageUrl: '/images/scientists/dilhan-eryurt.jpg'
    },
    {
        id: 'katherine-johnson',
        name: 'Katherine Johnson',
        fieldId: 'space',
        years: '1918–2020',
        contribution: 'NASA uçuş yörüngelerinin hesaplanması',
        biography: 'NASA\'nın "İnsan Bilgisayar"ı olarak tanınan Afro-Amerikan matematikçi. Irk ve cinsiyet ayrımcılığının zirvede olduğu yıllarda, NASA\'nın hesaplama biriminde deha seviyesindeki matematik yeteneğiyle öne çıktı. İlk Amerikalı astronot Alan Shepard\'ın yörüngesini hesapladı. En büyük anlarından biri, astronot John Glenn\'in Dünya yörüngesindeki uçuşuydu. Glenn, yeni çıkan elektronik bilgisayarlara güvenmedi ve "O kız (Johnson) sayıları kontrol etsin, eğer o tamam derse uçarım" dedi. Johnson hesabı doğruladı ve uçuş başarıyla gerçekleşti. Apollo 11\'in Ay\'a gidiş rotasını da o hesapladı.',
        quote: 'Saymak istediğiniz her şeyi saydım. Basamakları, bulaşıkları, yıldızları... Hep saydım.',
        impact: '"Gizli Sayılar" (Hidden Figures) filmiyle dünyaya duyurulan, uzay yarışının gizli kahramanıydı.',
        imageUrl: '/images/scientists/katherine-johnson.jpg'
    },
    {
        id: 'valentina-tereshkova',
        name: 'Valentina Tereshkova',
        fieldId: 'space',
        years: '1937–Present',
        contribution: 'Uzaya giden ilk kadın',
        biography: 'Sovyet kozmonot Valentina Tereshkova, uzaya çıkan ilk kadın olarak tarihi değiştirdi. Aslen bir tekstil fabrikası işçisiydi ancak hobi olarak yaptığı paraşütçülük (126 atlayış) sayesinde uzay programına seçildi. 16 Haziran 1963\'te Vostok 6 ile uzaya fırlatıldı. Tek başına gerçekleştirdiği bu görevde Dünya yörüngesinde 48 tur attı ve uzayda 3 gün kaldı; bu süre, o ana kadar uçan tüm Amerikalı astronotların toplam süresinden fazlaydı. Uçuş sırasında yaşadığı fiziksel rahatsızlıklara rağmen görevi başarıyla tamamladı ve kapsülüyle Dünya\'ya döndü.',
        impact: 'Kadınların sadece yeryüzünde değil, uzayda da var olabileceğini tüm dünyaya kanıtladı.',
        imageUrl: '/images/scientists/valentina-tereshkova.jpg'
    },
    {
        id: 'sally-ride',
        name: 'Sally Ride',
        fieldId: 'space',
        years: '1951–2012',
        contribution: 'Uzaya giden ilk Amerikalı kadın',
        biography: 'Fizik doktorasına sahip olan Sally Ride, 1983 yılında Challenger uzay mekiği ile yörüngeye çıkarak uzaya giden ilk Amerikalı kadın (ve en genç Amerikalı astronot) oldu. Uzayda robot kolu (Canadarm) kullanarak uyduları yörüngeye yerleştirdi. NASA\'dan ayrıldıktan sonra hayatını fen eğitimine adadı. Özellikle kız çocuklarının matematik ve bilime ilgisini artırmak için "Sally Ride Science" şirketini kurdu ve binlerce öğrenciye ilham oldu. Ölümünden sonra, hayat arkadaşı Tam O\'Shaughnessy ile ilişkisinin açıklanmasıyla LGBT+ topluluğu için de bir ikon haline geldi.',
        impact: 'Kız çocuklarına "yıldızlara ulaşabileceklerini" gösteren en güçlü rol modellerden biri oldu.',
        imageUrl: '/images/scientists/sally-ride.jpg'
    },

    // Chemistry/Biology
    {
        id: 'remziye-hisar',
        name: 'Remziye Hisar',
        fieldId: 'chemistry',
        years: '1902–1992',
        contribution: 'İlk Türk kadın kimyager',
        biography: 'Cumhuriyet döneminin ilk kadın kimyacısı ve Madam Curie\'nin laboratuvarında çalışan tek Türk bilim insanıdır. Darülfünun\'da (İstanbul Üniversitesi) eğitim aldıktan sonra, Milli Eğitim Bakanlığı bursuyla Paris\'e Sorbonne Üniversitesi\'ne gitti. Burada dünyaca ünlü fizikçi Marie Curie ve Paul Langevin gibi isimlerden ders aldı. Türkiye\'ye döndüğünde İTÜ Maden Fakültesi ve Kimya Fakültesi\'nde uzun yıllar hocalık yaptı. Hem bir bilim kadını hem de bir anne olarak (ünlü fizikçi Feza Gürsey\'in annesidir) büyük zorluklarla mücadele etti, ancak bilimden asla vazgeçmedi. "Bir kadın olarak birçok zorlukla karşılaştım, ancak bilim aşkı hepsinden üstündü" sözüyle hatırlanır.',
        impact: 'Türkiye Cumhuriyeti\'nin bilimsel temellerini atan, öncü kadın figürlerden biridir.',
        imageUrl: '/images/scientists/remziye-hisar.jpg'
    },
    {
        id: 'rachel-carson',
        name: 'Rachel Carson',
        fieldId: 'chemistry',
        years: '1907–1964',
        contribution: 'Modern çevre hareketinin başlangıcı',
        biography: 'Amerikalı deniz biyoloğu ve yazar Rachel Carson, doğaya olan derin sevgisini bilimsel titizlikle birleştirdi. II. Dünya Savaşı sonrasında yaygınlaşan sentetik tarım ilaçlarının (özellikle DDT) ekosisteme verdiği zararı fark etti. 1962 yılında yayınladığı "Sessiz Bahar" (Silent Spring) kitabı dünyayı sarstı. Kuşların ötmediği, nehirlerin zehirlendiği bir geleceği tasvir etti. Dev kimya şirketlerinin karalama kampanyalarına ve kanserle mücadelesine rağmen geri adım atmadı. Onun çabaları sonucunda DDT yasaklandı ve ABD Çevre Koruma Ajansı\'nın (EPA) kurulmasına giden yol açıldı.',
        quote: 'Doğada hiçbir şey tek başına var olmaz.',
        impact: 'Çevre bilincini küresel ölçekte uyandıran ve modern çevrecilik akımını başlatan kişidir.',
        imageUrl: '/images/scientists/rachel-carson.jpg'
    },
    {
        id: 'barbara-mcclintock',
        name: 'Barbara McClintock',
        fieldId: 'chemistry',
        years: '1902–1992',
        contribution: 'Genetik transpozisyonun keşfi',
        biography: 'Mısır (bitki) genetiği üzerine yaptığı yalnız ve sabırlı çalışmalarla bilim tarihinin en büyük keşiflerinden birini yaptı. Genlerin kromozom üzerinde sabit durmadığını, yer değiştirebildiğini ("zıplayan genler" veya transpozonlar) keşfetti. Bu buluş, genetiğin o dönemki dogmalarına o kadar tersti ki, bilim dünyası ona inanmadı ve uzun süre görmezden geldi. McClintock küsmeden, mısır tarlasında mikroskobuyla çalışmaya devam etti. Tam 30 yıl sonra, moleküler biyoloji geliştikçe haklı olduğu anlaşıldı ve 81 yaşında Nobel Tıp Ödülü\'nü tek başına kazandı.',
        impact: 'Genetiğin dinamik yapısını ortaya koyarak modern tıbbın ve biyoteknolojinin önünü açtı.',
        imageUrl: '/images/scientists/barbara-mcclintock.jpg'
    },
    {
        id: 'dorothy-hodgkin',
        name: 'Dorothy Hodgkin',
        fieldId: 'chemistry',
        years: '1910–1994',
        contribution: 'Biyomoleküllerin yapısının çözülmesi',
        biography: 'İngiliz kimyager Dorothy Hodgkin, X-ışını kristalografisinin kraliçesi olarak bilinir. Hayatı boyunca ellerini deforme eden romatoid artrit hastalığıyla mücadele etmesine rağmen, en karmaşık biyomoleküllerin yapısını çözmeyi başardı. II. Dünya Savaşı sırasında penisilinin yapısını çözerek antibiyotiklerin geliştirilmesini sağladı. B12 vitamininin yapısını da o belirledi. Ancak en büyük zaferi, diyabet hastaları için hayati olan İnsülinin yapısını çözmesiydi; bu tam 35 yılını aldı. Bu azimli çalışmaları ona 1964 Nobel Kimya Ödülü\'nü getirdi.',
        impact: 'Moleküler biyolojinin kurucularındandır. İnsülin çalışmaları tıpta devrim yaratmıştır.',
        imageUrl: '/images/scientists/dorothy-hodgkin.jpg'
    }
];

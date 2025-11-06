# Discord Benzeri Sesli Konuşma Sitesi

WebRTC ve Socket.io kullanarak Discord benzeri bir sesli konuşma uygulaması.

## ⚠️ ÖNEMLİ: Komutları Nasıl Kullanmalıyım?

Bu README dosyasında kod blokları içinde komutlar göreceksiniz. **Lütfen dikkat:**

- ```bash veya ``` işaretlerini PowerShell'e yapıştırmayın!
- Sadece komutun kendisini kopyalayın (örneğin: `npm.cmd install`)
- Komutları PowerShell'e yapıştırıp Enter'a basın

**Örnek:** 
- ❌ YANLIŞ: ```bash npm.cmd install ```
- ✅ DOĞRU: npm.cmd install

## 🎯 Bu Proje Nedir?

Bu proje, Discord gibi internet üzerinden sesli konuşma yapabileceğiniz bir web sitesidir. İki veya daha fazla kişi aynı anda bağlanıp birbirleriyle konuşabilir.

## 🚀 Özellikler

- ✅ Gerçek zamanlı sesli konuşma (WebRTC)
- ✅ Çoklu kullanıcı desteği
- ✅ Oda sistemi
- ✅ Mikrofon açma/kapama
- ✅ Ses açma/kapama
- ✅ Modern ve kullanıcı dostu arayüz

## 📋 Gereksinimler (Nedir ve Nasıl Kurulur?)

### Gereksinim Nedir?
Gereksinim, bu projeyi çalıştırmak için bilgisayarınızda olması gereken programlardır.

### 1. Node.js (En Önemli!)

**Node.js Nedir?**
- JavaScript programlama dilini bilgisayarınızda çalıştıran bir programdır
- Web sitelerinin arka planında çalışan kodları çalıştırmak için gereklidir

**Nasıl Kurulur?**
1. Tarayıcınızda https://nodejs.org adresine gidin
2. Yeşil renkli "LTS" butonuna tıklayın (bu en stabil sürümdür)
3. İndirilen dosyayı çalıştırın ve "Next" butonlarına tıklayarak kurulumu tamamlayın
4. Kurulum tamamlandıktan sonra bilgisayarınızı yeniden başlatın

**Kurulumu Kontrol Etme:**
- Windows'ta: Başlat menüsünden "PowerShell" veya "Command Prompt" açın
- Şu komutu yazın: `node --version`
- Eğer bir versiyon numarası görüyorsanız (örneğin: v18.17.0), kurulum başarılıdır!

### 2. npm (Node.js ile Birlikte Gelir)

**npm Nedir?**
- Node Package Manager'ın kısaltmasıdır
- Projenin ihtiyaç duyduğu kütüphaneleri (hazır kod parçaları) indirmek için kullanılır
- Node.js'i kurduğunuzda otomatik olarak gelir

**Kontrol Etme:**
- PowerShell veya Command Prompt'ta şu komutu yazın: `npm --version`
- Bir versiyon numarası görüyorsanız hazırsınız!

### 3. Modern Web Tarayıcısı

**Nedir?**
- Chrome, Firefox, Edge gibi güncel tarayıcılar
- Eski tarayıcılar (Internet Explorer gibi) çalışmaz

**Nasıl Kontrol Edilir?**
- Tarayıcınızı açın ve güncel olduğundan emin olun
- Chrome kullanıyorsanız: Ayarlar > Chrome Hakkında > Güncellemeleri kontrol et

## 🛠️ Kurulum (Adım Adım)

### Kurulum Nedir?
Kurulum, projenin çalışması için gerekli tüm dosyaları bilgisayarınıza indirmek demektir.

### Adım 1: Proje Klasörüne Gitme

1. Windows'ta PowerShell veya Command Prompt açın
2. Projenizin bulunduğu klasöre gidin. 

   **ÖNEMLİ:** Aşağıdaki komutu PowerShell'e kopyalayıp yapıştırın (```bash ve ``` işaretlerini KOPYALAMAYIN, sadece komutu kopyalayın):
   
   ```
   cd C:\Users\esady\Desktop\dc
   ```
   
   (Bu sizin projenizin yoludur)
   
   **Nasıl Yapılır:**
   - Yukarıdaki `cd C:\Users\esady\Desktop\dc` satırını seçin ve kopyalayın (Ctrl+C)
   - PowerShell penceresine yapıştırın (Ctrl+V)
   - Enter'a basın

### Adım 2: Frontend Kurulumu (Web Sitesinin Görünen Kısmı)

**Frontend Nedir?**
- Kullanıcıların gördüğü ve etkileşimde bulunduğu arayüzdür
- Butonlar, ekranlar, renkler gibi görsel kısımlar

**Nasıl Kurulur?**
1. PowerShell veya Command Prompt'ta proje klasöründeyken şu komutu yazın:
   
   **ÖNEMLİ:** Eğer `npm` komutu çalışmıyorsa, `npm.cmd` kullanın!
   
   ```
   npm.cmd install
   ```
   
   VEYA (eğer npm çalışıyorsa):
   ```
   npm install
   ```
   
2. Bu işlem birkaç dakika sürebilir (internet hızınıza bağlı)
3. "added X packages" gibi bir mesaj görürseniz başarılıdır!
   
   **Not:** Komutları kopyalarken sadece komutu kopyalayın, ``` işaretlerini kopyalamayın!

**Ne Oluyor?**
- `npm install` komutu, `package.json` dosyasında listelenen tüm kütüphaneleri indirir
- Bu kütüphaneler `node_modules` klasörüne kaydedilir

### Adım 3: Backend Kurulumu (Arka Plan Sunucusu)

**Backend Nedir?**
- Web sitesinin görünmeyen kısmıdır
- Kullanıcılar arasındaki mesajlaşmayı, bağlantıları yönetir
- Sunucu olarak çalışır

**Nasıl Kurulur?**
1. PowerShell veya Command Prompt'ta şu komutu yazın (sadece komutu kopyalayın):
   ```
   cd server
   ```
   (Bu komut `server` klasörüne geçmenizi sağlar)

2. Şimdi backend için gerekli dosyaları indirin:
   ```
   npm.cmd install
   ```
   (Eğer npm çalışmıyorsa npm.cmd kullanın)

3. Ana klasöre geri dönmek için:
   ```
   cd ..
   ```

## 🎯 Kullanım (Projeyi Çalıştırma)

### Geliştirme Modu Nedir?
Geliştirme modu, projeyi kendi bilgisayarınızda test etmek için çalıştırmak demektir.

### ⚠️ ÖNEMLİ: İki Pencere Gerekli!

Bu projeyi çalıştırmak için **iki ayrı terminal penceresi** açmanız gerekir:
- **Pencere 1**: Backend sunucusu için
- **Pencere 2**: Frontend (web sitesi) için

### Adım 1: Backend Sunucusunu Başlatma

**Backend Sunucusu Nedir?**
- Kullanıcılar arasındaki iletişimi sağlayan arka plan programıdır
- Bu olmadan sesli konuşma çalışmaz

**Nasıl Başlatılır?**
1. **İlk PowerShell/Command Prompt penceresini** açın
2. Proje klasörüne gidin (sadece komutu kopyalayın):
   ```
   cd C:\Users\esady\Desktop\dc
   ```
3. Server klasörüne gidin:
   ```
   cd server
   ```
4. Sunucuyu başlatın:
   ```
   npm.cmd start
   ```
   (Eğer npm çalışmıyorsa npm.cmd kullanın)
5. Şu mesajı görmelisiniz: `Server 3001 portunda çalışıyor`
6. **Bu pencereyi açık bırakın!** (Kapatırsanız sunucu durur)

### Adım 2: Frontend'i Başlatma

**Frontend Nedir?**
- Tarayıcıda açacağınız web sitesidir
- Kullanıcı arayüzü buradadır

**Nasıl Başlatılır?**
1. **YENİ bir PowerShell/Command Prompt penceresi** açın (ilk pencereyi kapatmayın!)
2. Proje klasörüne gidin (sadece komutu kopyalayın):
   ```
   cd C:\Users\esady\Desktop\dc
   ```
3. Frontend'i başlatın:
   ```
   npm.cmd run dev
   ```
   (Eğer npm çalışmıyorsa npm.cmd kullanın)
4. Şu mesajı görmelisiniz: `Local: http://localhost:3000`
5. **Bu pencereyi de açık bırakın!**

### Adım 3: Web Sitesini Açma

1. Tarayıcınızı açın (Chrome, Firefox, Edge)
2. Adres çubuğuna şunu yazın: `http://localhost:3000`
3. Enter'a basın
4. Web sitesi açılmalı!

**localhost Nedir?**
- Kendi bilgisayarınızı ifade eder
- Sadece sizin bilgisayarınızda çalışır, başkaları göremez

### Production Build (GitHub'a Yüklemek İçin)

**Build Nedir?**
- Projeyi internet üzerinden erişilebilir hale getirmek için hazırlamak demektir
- Tüm kodları optimize eder ve küçültür

**Nasıl Yapılır?**
1. PowerShell/Command Prompt'ta proje klasöründeyken (sadece komutu kopyalayın):
   ```
   npm.cmd run build
   ```
   (Eğer npm çalışmıyorsa npm.cmd kullanın)
2. Bu işlem birkaç saniye sürer
3. `dist/` klasörü oluşturulur - bu klasör GitHub'a yüklenecek dosyaları içerir

## 🌐 GitHub'a Yayımlama (İnternete Çıkarma)

### GitHub Nedir?
- Kodlarınızı saklayabileceğiniz ücretsiz bir platformdur
- Aynı zamanda web sitenizi yayınlamanıza da olanak sağlar

### Frontend'i GitHub Pages'e Yayımlama

**GitHub Pages Nedir?**
- GitHub'ın ücretsiz web sitesi yayınlama hizmetidir
- Siteniz `kullaniciadi.github.io/repository-adi` adresinde yayınlanır

**Adım Adım Nasıl Yapılır?**

1. **GitHub Hesabı Oluşturun**
   - https://github.com adresine gidin
   - "Sign up" butonuna tıklayın ve hesap oluşturun

2. **Yeni Repository Oluşturun**
   - GitHub'da sağ üstteki "+" işaretine tıklayın
   - "New repository" seçin
   - Repository adı verin (örneğin: `discord-voice-chat`)
   - "Public" seçin
   - "Create repository" butonuna tıklayın

3. **Kodlarınızı GitHub'a Yükleyin**
   - GitHub'da size gösterilen komutları kullanabilirsiniz VEYA
   - GitHub Desktop uygulamasını indirip kullanabilirsiniz (daha kolay!)

4. **vite.config.js Dosyasını Düzenleyin**
   - Projenizdeki `vite.config.js` dosyasını açın
   - `base: '/dc/'` satırını bulun
   - `'/dc/'` kısmını repository adınıza göre değiştirin
   - Örneğin repository adınız `my-voice-chat` ise: `base: '/my-voice-chat/'`

5. **GitHub Actions ile Otomatik Yayınlama**
   - `.github/workflows/deploy.yml` dosyası zaten hazır
   - Kodları GitHub'a yüklediğinizde otomatik olarak yayınlanacak

### Backend'i Yayımlama (ÖNEMLİ!)

**Neden Ayrı Yayımlama Gerekli?**
- GitHub Pages sadece statik dosyalar (HTML, CSS, JavaScript) için çalışır
- Backend sunucusu sürekli çalışan bir program olduğu için ayrı bir yerde barındırılmalıdır

**Ücretsiz Backend Hosting Seçenekleri:**

#### Seçenek 1: Railway (En Kolay - Önerilir)
1. https://railway.app adresine gidin
2. "Start a New Project" butonuna tıklayın
3. GitHub hesabınızla giriş yapın
4. "Deploy from GitHub repo" seçin
5. Repository'nizi seçin
6. Root Directory olarak `server` klasörünü seçin
7. Railway otomatik olarak deploy edecek!

#### Seçenek 2: Render
1. https://render.com adresine gidin
2. Ücretsiz hesap oluşturun
3. "New Web Service" seçin
4. GitHub repository'nizi bağlayın
5. Root Directory: `server`
6. Build Command: `npm install`
7. Start Command: `npm start`

#### Seçenek 3: Heroku (Daha Karmaşık)
- Heroku artık ücretsiz tier sunmuyor, bu yüzden önerilmez

**Backend Yayınlandıktan Sonra:**
- Backend'inizin URL'ini alın (örneğin: `https://your-app.railway.app`)
- `src/components/VoiceChat.jsx` dosyasını açın
- `SOCKET_URL` değişkenini bulun ve backend URL'inizi yazın

### Environment Variables

Backend için:
- `PORT`: Sunucu portu (varsayılan: 3001)
- `NODE_ENV`: `production` veya `development`

Frontend için:
- `VITE_SOCKET_URL`: Backend socket.io URL'i (production'da)

## 📁 Proje Yapısı

```
dc/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   ├── VoiceChat.jsx
│   │   └── VoiceChat.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🔧 Teknolojiler (Basit Açıklamalar)

**React Nedir?**
- Web sitesinin görsel kısmını (butonlar, ekranlar) yapmak için kullanılan bir araçtır
- Facebook tarafından geliştirilmiştir

**Vite Nedir?**
- Projeyi hızlı bir şekilde çalıştırmak ve hazırlamak için kullanılan bir araçtır
- Geliştirme sürecini hızlandırır

**Socket.io Nedir?**
- Kullanıcılar arasında anlık mesajlaşma sağlar
- Birisi bir şey yaptığında diğerleri anında görür

**WebRTC Nedir?**
- Tarayıcılar arasında doğrudan ses/video aktarımı yapmayı sağlar
- Discord'un kullandığı teknolojidir

**Express Nedir?**
- Backend sunucusunu yapmak için kullanılan bir araçtır
- Node.js ile çalışır

## ⚠️ Önemli Notlar

1. **HTTPS Gereksinimi**
   - WebRTC (sesli konuşma) için güvenli bağlantı (HTTPS) gereklidir
   - GitHub Pages otomatik olarak HTTPS sağlar, endişelenmeyin!

2. **STUN/TURN Sunucuları**
   - STUN: İnternet üzerinden bağlantı kurmak için kullanılır
   - Şu anda Google'ın ücretsiz STUN sunucularını kullanıyoruz
   - Çoğu durumda bu yeterlidir
   - Eğer bazı kullanıcılar bağlanamazsa, TURN sunucusu gerekebilir (ileri seviye)

3. **Mikrofon İzni**
   - Tarayıcı ilk kez mikrofonunuza erişmek için izin isteyecektir
   - "İzin Ver" butonuna tıklayın
   - Eğer reddederseniz, tarayıcı ayarlarından sonra izin verebilirsiniz

## 🐛 Sorun Giderme

### Mikrofon Çalışmıyor
**Sorun:** Mikrofonunuz açık ama ses gitmiyor

**Çözüm:**
1. Tarayıcınızın adres çubuğunda mikrofon simgesine tıklayın
2. Mikrofon izninin "İzin Verildi" olduğundan emin olun
3. Windows Ayarlar > Gizlilik > Mikrofon bölümünden tarayıcınıza izin verildiğini kontrol edin
4. Sayfayı yenileyin (F5)

### Bağlantı Hatası
**Sorun:** "Bağlantı Yok" yazıyor veya bağlanamıyorum

**Çözüm:**
1. Backend sunucusunun çalıştığından emin olun (Terminal 1'de `Server 3001 portunda çalışıyor` yazmalı)
2. Frontend'in çalıştığından emin olun (Terminal 2'de `Local: http://localhost:3000` yazmalı)
3. Her iki terminal penceresini de kontrol edin
4. Eğer hata mesajı varsa, terminaldeki kırmızı yazıları okuyun

### Ses Gelmiyor
**Sorun:** Diğer kullanıcıları duyamıyorum

**Çözüm:**
1. Sağ alttaki ses butonuna tıklayın (🔊 simgesi)
2. Ses açık olduğundan emin olun
3. Bilgisayarınızın ses seviyesini kontrol edin
4. Tarayıcı sekmesinin sesinin kapalı olmadığından emin olun (Chrome'da sekmede ses simgesi var)

### "npm: komut bulunamadı" Hatası
**Sorun:** Terminal'de npm komutu çalışmıyor

**Çözüm:**
1. Node.js'in kurulu olduğundan emin olun (`node --version` komutuyla kontrol edin)
2. Bilgisayarınızı yeniden başlatın
3. Yeni bir terminal penceresi açın

### Port Zaten Kullanılıyor Hatası
**Sorun:** "Port 3000/3001 zaten kullanılıyor" hatası

**Çözüm:**
1. O portu kullanan programı kapatın
2. Veya `vite.config.js` ve `server/index.js` dosyalarında port numarasını değiştirin

## 📝 Lisans

MIT


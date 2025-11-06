# Sitenizi Nasıl Açarsınız? - Detaylı Rehber

## 🎯 Sitenizi Açmak İçin Gerekenler

### 1. Frontend URL'i (GitHub Pages)

GitHub Pages'e yayınladıktan sonra siteniz şu formatta bir URL'de olacak:

```
https://kullaniciadi.github.io/repository-adi/
```

**Örnek:**
- GitHub kullanıcı adınız: `ahmet123`
- Repository adınız: `discord-voice-chat`
- Sitenizin URL'i: `https://ahmet123.github.io/discord-voice-chat/`

### 2. URL'inizi Nasıl Bulursunuz?

#### Yöntem 1: GitHub Settings'ten
1. GitHub repository'nizin ana sayfasına gidin
2. Sağ üstteki **"Settings"** sekmesine tıklayın
3. Sol menüden **"Pages"** seçeneğine tıklayın
4. **"Your site is live at"** yazısının altında URL'inizi göreceksiniz

#### Yöntem 2: Repository Adından
Eğer repository adınızı biliyorsanız:
- GitHub kullanıcı adınız: `kullaniciadi`
- Repository adınız: `repository-adi`
- URL: `https://kullaniciadi.github.io/repository-adi/`

### 3. Arkadaşlarınızla Paylaşma

**Çok Kolay!**
1. GitHub Pages URL'inizi kopyalayın
2. Arkadaşlarınıza gönderin (WhatsApp, Discord, Email, vb.)
3. Herkes bu linke tıklayarak sitenizi açabilir!

**Önemli:**
- Hiçbir kurulum gerekmez
- Sadece tarayıcıda açılır
- Herkes aynı anda kullanabilir
- Ücretsizdir!

### 4. Sitenizi Açmak İçin

1. **Tarayıcınızı açın** (Chrome, Firefox, Edge, Safari - hepsi çalışır)
2. **URL'i adres çubuğuna yapıştırın**
3. **Enter'a basın**
4. **Siteniz açılacak!**

### 5. İlk Kullanım

1. Siteniz açıldığında bir **giriş ekranı** göreceksiniz
2. **Kullanıcı adınızı** girin
3. **"Giriş Yap"** butonuna tıklayın
4. **Mikrofon izni** isteyecek - **"İzin Ver"** deyin
5. **"Mikrofonu Başlat"** butonuna tıklayın
6. Artık sesli konuşmaya başlayabilirsiniz!

### 6. Aynı Odada Buluşma

Arkadaşlarınızla aynı odada buluşmak için:
1. Herkes aynı **oda ID'sini** girmeli
2. Veya varsayılan oda (`default`) kullanılabilir
3. **"Katıl"** butonuna tıklayın
4. Artık birbirinizi görebilir ve konuşabilirsiniz!

## ⚠️ Önemli Notlar

### Backend URL'i Gerekli
- Sitenin çalışması için backend'in de Railway'de yayınlanmış olması gerekir
- Backend URL'ini `src/components/VoiceChat.jsx` dosyasına eklemeniz gerekir
- Backend olmadan site açılır ama sesli konuşma çalışmaz

### HTTPS Gerekli
- WebRTC (sesli konuşma) için HTTPS gerekir
- GitHub Pages otomatik olarak HTTPS sağlar
- Railway de HTTPS sağlar

### Mikrofon İzni
- İlk kullanımda tarayıcı mikrofon izni isteyecek
- **"İzin Ver"** demeniz gerekir
- İzin vermezseniz sesli konuşma çalışmaz

## 🐛 Sorun Giderme

**Site açılmıyor:**
- URL'in doğru olduğundan emin olun
- GitHub Pages'in aktif olduğunu kontrol edin
- Deploy'un tamamlandığından emin olun

**Sesli konuşma çalışmıyor:**
- Backend'in Railway'de çalıştığından emin olun
- Backend URL'inin doğru olduğundan emin olun
- Mikrofon izninin verildiğinden emin olun

**Arkadaşlarım bağlanamıyor:**
- Aynı oda ID'sini kullandıklarından emin olun
- Backend'in çalıştığından emin olun
- İnternet bağlantılarını kontrol edin


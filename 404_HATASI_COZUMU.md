# 404 Hatası Çözümü - vite.config.js Base Değeri

## 🔴 Sorun: 404 Hatası

`Failed to load resource: 404` hatası, JavaScript ve CSS dosyalarının yanlış yoldan yüklenmeye çalışıldığını gösterir.

## ✅ Çözüm: Repository Adınızı Bulun ve Base Değerini Güncelleyin

### Adım 1: Repository Adınızı Bulun

GitHub repository sayfanızın üst kısmında repository adınızı görebilirsiniz.

**Örnek URL'lerden:**
- `https://esadyesilyurt.github.io/dc/` → Repository adı: `dc`
- `https://esadyesilyurt.github.io/discord-voice-chat/` → Repository adı: `discord-voice-chat`

### Adım 2: vite.config.js Dosyasını Düzenleyin

Repository adınızı bulduktan sonra `vite.config.js` dosyasını şu şekilde güncelleyin:

**Eğer repository adınız `dc` ise:**
```javascript
base: '/dc/',
```

**Eğer repository adınız `discord-voice-chat` ise:**
```javascript
base: '/discord-voice-chat/',
```

**Eğer repository adınız başka bir şeyse:**
```javascript
base: '/repository-adi-izin/',
```

**ÖNEMLİ:**
- Başında `/` olmalı
- Sonunda `/` olmalı
- Repository adıyla tam olarak eşleşmeli

### Adım 3: Değişiklikleri GitHub'a Yükleyin

1. Dosyayı kaydedin
2. GitHub Desktop'ta:
   - "Commit to main" butonuna tıklayın
   - "Push origin" butonuna tıklayın
3. Veya terminal'de:
   ```powershell
   git add vite.config.js
   git commit -m "Fix base path"
   git push
   ```

### Adım 4: Bekleyin ve Test Edin

1. GitHub Actions'ın deploy'u tamamlanmasını bekleyin (2-5 dakika)
2. Tarayıcıda **Ctrl + F5** ile hard refresh yapın
3. Site artık çalışmalı!

## 🔍 Repository Adınızı Nasıl Bulursunuz?

1. GitHub repository sayfanızın URL'ine bakın
2. URL şu formatta olacak: `https://github.com/kullaniciadi/repository-adi`
3. `repository-adi` kısmı sizin repository adınızdır

**Örnek:**
- URL: `https://github.com/esadyesilyurt/dc`
- Repository adı: `dc`
- `base: '/dc/'` olmalı


# Beyaz Ekran Sorunu - Çözüm

## 🔴 Sorun: Site Tamamen Beyaz Görünüyor

Bu sorun genellikle `vite.config.js` dosyasındaki `base` değerinin repository adınızla eşleşmemesinden kaynaklanır.

## ✅ Çözüm

### Adım 1: Repository Adınızı Bulun

1. GitHub repository'nizin ana sayfasına gidin
2. Üst kısımda repository adını göreceksiniz (örneğin: `discord-voice-chat` veya `dc`)

### Adım 2: vite.config.js Dosyasını Düzenleyin

1. Projenizdeki `vite.config.js` dosyasını açın
2. `base: '/dc/'` satırını bulun
3. `'/dc/'` kısmını repository adınıza göre değiştirin

**Örnekler:**

Eğer repository adınız `discord-voice-chat` ise:
```javascript
base: '/discord-voice-chat/',
```

Eğer repository adınız `dc` ise:
```javascript
base: '/dc/',
```

Eğer repository adınız `my-voice-app` ise:
```javascript
base: '/my-voice-app/',
```

**ÖNEMLİ:**
- Başında `/` olmalı
- Sonunda `/` olmalı
- Repository adıyla tam olarak eşleşmeli

### Adım 3: Değişiklikleri GitHub'a Yükleyin

1. Dosyayı kaydedin
2. GitHub Desktop'ta veya terminal'de:
   ```powershell
   git add vite.config.js
   git commit -m "Fix base path for GitHub Pages"
   git push
   ```

3. GitHub Actions'ın yeniden deploy etmesini bekleyin (2-5 dakika)

### Adım 4: Tarayıcı Konsolunu Kontrol Edin

Eğer hala beyaz ekran görüyorsanız:

1. Tarayıcıda **F12** tuşuna basın (Developer Tools'u açmak için)
2. **Console** sekmesine gidin
3. Kırmızı hata mesajları var mı kontrol edin

**Yaygın Hatalar:**

- `Failed to load resource: 404` - Bu, `base` değerinin yanlış olduğunu gösterir
- `Cannot find module` - Build hatası olabilir
- `CORS error` - Backend URL'i yanlış olabilir

## 🔍 Alternatif Çözüm: Base Değerini Kaldırma

Eğer repository adınız `kullaniciadi.github.io` formatındaysa (yani repository adı kullanıcı adınızla aynıysa), `base` değerini kaldırabilirsiniz:

```javascript
export default defineConfig({
  plugins: [react()],
  // base: '/dc/',  // Bu satırı silin veya yorum satırı yapın
  server: {
    port: 3000,
    proxy: {
      '/socket.io': {
        target: 'http://localhost:3001',
        ws: true
      }
    }
  }
})
```

## 📝 Kontrol Listesi

- [ ] Repository adınızı biliyorum
- [ ] `vite.config.js` dosyasındaki `base` değeri repository adıyla eşleşiyor
- [ ] Değişiklikleri GitHub'a yükledim
- [ ] GitHub Actions deploy'u tamamlandı
- [ ] Tarayıcı konsolunda hata yok

## 🆘 Hala Çalışmıyorsa

1. Tarayıcı konsolundaki hata mesajlarını kontrol edin
2. GitHub Actions'ta build hatası var mı kontrol edin
3. `dist` klasöründeki dosyaları kontrol edin
4. Hard refresh yapın: **Ctrl + F5** (Windows) veya **Cmd + Shift + R** (Mac)


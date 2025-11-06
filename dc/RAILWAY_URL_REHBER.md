# Railway'den Backend URL'i Nasıl Alınır?

## 🎯 Adım Adım Rehber

### Adım 1: Railway'de Servisinizi Bulun
1. https://railway.app adresine gidin ve giriş yapın
2. Projenizi seçin
3. Deploy edilmiş servisinizin (service) üzerine tıklayın

### Adım 2: Domain/URL'i Bulun

Railway'de URL'i bulmak için birkaç yol var:

#### Yol 1: Ana Sayfada Domain Bölümü
1. Servisinizin ana sayfasında (Overview)
2. Sağ tarafta veya üst kısımda **"Domain"** veya **"Networking"** bölümünü arayın
3. Eğer domain yoksa, **"Generate Domain"** veya **"Create Domain"** butonuna tıklayın
4. Railway otomatik olarak bir domain oluşturacak
5. Örnek format: `your-app-name.up.railway.app`

#### Yol 2: Settings > Networking
1. Servisinizin **"Settings"** sekmesine gidin
2. **"Networking"** veya **"Domains"** bölümünü bulun
3. Burada domain'inizi görebilir veya yeni bir tane oluşturabilirsiniz

#### Yol 3: Deploy Loglarında
1. Servisinizin **"Deployments"** veya **"Logs"** sekmesine gidin
2. Başarılı deploy loglarında URL'i görebilirsiniz

### Adım 3: URL'i Kopyalayın

URL genellikle şu formatta olur:
```
https://your-app-name.up.railway.app
```

**ÖNEMLİ:** 
- URL'nin başında `https://` olduğundan emin olun
- Port numarası eklemeyin (Railway otomatik yönetir)

### Adım 4: Frontend Kodunu Güncelleyin

1. Projenizde `src/components/VoiceChat.jsx` dosyasını açın
2. Şu satırı bulun:
   ```javascript
   const SOCKET_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-backend-url.herokuapp.com' 
     : 'http://localhost:3001'
   ```
3. `'https://your-backend-url.herokuapp.com'` kısmını Railway URL'inizle değiştirin:
   ```javascript
   const SOCKET_URL = process.env.NODE_ENV === 'production' 
     ? 'https://your-app-name.up.railway.app' 
     : 'http://localhost:3001'
   ```
4. Dosyayı kaydedin

### Adım 5: Test Edin

1. Frontend'i yeniden build edin:
   ```powershell
   npm.cmd run build
   ```
2. GitHub'a yükleyin
3. Web sitesini açın ve bağlantıyı test edin

## 🔍 URL Bulamazsanız

Eğer Railway'de URL göremiyorsanız:

1. **Deploy'un tamamlanmasını bekleyin** - Bazen URL deploy tamamlandıktan sonra görünür
2. **Railway'in ücretsiz planında** domain oluşturma biraz zaman alabilir
3. **Settings > Networking** bölümüne bakın
4. Railway'in yeni arayüzünde farklı bir yerde olabilir

## ⚠️ Önemli Notlar

- Railway URL'i otomatik olarak HTTPS kullanır
- Port numarası eklemeyin (Railway otomatik yönetir)
- URL'yi kopyalarken başında ve sonunda boşluk olmadığından emin olun
- Eğer domain oluşturmakta sorun yaşıyorsanız, Railway'in ücretsiz planında limit olabilir

## 🆘 Sorun Giderme

**URL çalışmıyor:**
- Deploy'un başarılı olduğundan emin olun
- Logları kontrol edin
- Backend sunucusunun çalıştığını doğrulayın

**Bağlantı hatası:**
- URL'nin doğru kopyalandığından emin olun
- `https://` ile başladığından emin olun
- Frontend kodunu güncelledikten sonra yeniden build edin


# JavaScript'te Tırnak İşareti Kullanımı

## ✅ Tek Tırnak vs Çift Tırnak

JavaScript'te **hem tek tırnak (`'`) hem de çift tırnak (`"`) kullanabilirsiniz**. İkisi de aynı şekilde çalışır!

## 📝 Örnekler

### Tek Tırnak Kullanımı (Mevcut Kodunuzda Bu Kullanılıyor)
```javascript
const SOCKET_URL = 'https://your-app-name.up.railway.app'
```

### Çift Tırnak Kullanımı (Aynı Şekilde Çalışır)
```javascript
const SOCKET_URL = "https://your-app-name.up.railway.app"
```

**İkisi de aynı şekilde çalışır!**

## 🎯 Sizin Durumunuz

Projenizdeki `VoiceChat.jsx` dosyasında **tek tırnak (`'`)** kullanılıyor. Bu yüzden:

✅ **DOĞRU:**
```javascript
const SOCKET_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-app-name.up.railway.app' 
  : 'http://localhost:3001'
```

✅ **Ayrıca DOĞRU (çift tırnak da çalışır):**
```javascript
const SOCKET_URL = process.env.NODE_ENV === 'production' 
  ? "https://your-app-name.up.railway.app" 
  : "http://localhost:3001"
```

## 💡 Öneri

Kodunuzda tutarlılık için **tek tırnak (`'`)** kullanmanızı öneririm çünkü dosyanın geri kalanı da öyle.

## ⚠️ Önemli

- Tırnak işaretlerini **mutlaka** kullanmalısınız (tek veya çift)
- Tırnak olmadan yazarsanız hata alırsınız
- URL'nin başında ve sonunda tırnak olmalı

## 📋 Örnek Kullanım

Railway URL'iniz `https://my-app.up.railway.app` ise:

```javascript
const SOCKET_URL = process.env.NODE_ENV === 'production' 
  ? 'https://my-app.up.railway.app' 
  : 'http://localhost:3001'
```

**Dikkat:** URL'nin başında ve sonunda tek tırnak (`'`) var!


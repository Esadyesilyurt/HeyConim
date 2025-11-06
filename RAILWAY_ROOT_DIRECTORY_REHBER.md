# Railway Root Directory Ayarlama - Detaylı Rehber

## 🎯 Railway'de Root Directory Nasıl Bulunur?

### Adım 1: Projenizi Railway'e Bağlayın
1. https://railway.app adresine gidin
2. "Start a New Project" butonuna tıklayın
3. GitHub hesabınızla giriş yapın
4. "Deploy from GitHub repo" seçin
5. Repository'nizi seçin

### Adım 2: Root Directory'yi Bulun

Railway arayüzü zaman zaman değişebilir. Root Directory'yi bulmak için şu yolları deneyin:

#### Yol 1: Settings > Source
1. Projenizde oluşturulan **servisinizin (service) üzerine tıklayın**
2. Üst menüden **"Settings"** sekmesine gidin
3. Sayfayı aşağı kaydırın ve **"Source"** bölümünü bulun
4. **"Root Directory"** veya **"Working Directory"** alanını arayın
5. Bu alana `server` yazın
6. **"Save"** butonuna tıklayın

#### Yol 2: Variables Sekmesi
Bazen Root Directory ayarı **"Variables"** sekmesinde olabilir:
1. Servisinizin **"Variables"** sekmesine gidin
2. **"New Variable"** butonuna tıklayın
3. Name: `RAILWAY_WORKING_DIRECTORY`
4. Value: `server`
5. Kaydedin

#### Yol 3: Deploy Ayarları
1. Servisinizin ana sayfasına gidin
2. Sağ üstteki **"..."** (üç nokta) menüsüne tıklayın
3. **"Settings"** veya **"Configure"** seçeneğini bulun
4. Root Directory ayarını arayın

### Adım 3: Doğrulama

Root Directory'yi ayarladıktan sonra:
1. Railway otomatik olarak yeniden deploy başlatacak
2. Deploy loglarını kontrol edin
3. Loglarda `server` klasöründeki dosyaların göründüğünden emin olun

### ⚠️ Önemli Notlar

- Root Directory'ye sadece klasör adını yazın: `server` (başında `/` olmadan)
- Eğer hala bulamazsanız, Railway'in yeni arayüzünde farklı bir yerde olabilir
- Railway'in resmi dokümantasyonunu kontrol edin: https://docs.railway.com

### 🔄 Alternatif: Render Kullanın

Eğer Railway'de Root Directory bulmakta zorlanıyorsanız, Render daha kolay olabilir:
1. https://render.com adresine gidin
2. "New Web Service" seçin
3. GitHub repository'nizi bağlayın
4. Root Directory alanı açıkça görünecektir: `server` yazın
5. Build Command: `npm install`
6. Start Command: `npm start`


# Node.js ve npm Kurulum Kontrolü ve Çözümleri

## 🔍 Sorun: npm komutu bulunamıyor

Eğer PowerShell'de `npm --version` komutu çalışmıyorsa, şu adımları izleyin:

### Çözüm 1: PowerShell'i Yeniden Başlatın

1. **Tüm PowerShell pencerelerini kapatın**
2. **Yeni bir PowerShell penceresi açın**
3. Şu komutu tekrar deneyin:
   ```powershell
   npm --version
   ```

**Neden?** Node.js'i yeni kurduysanız, PowerShell'in PATH değişkenlerini yenilemesi için yeniden başlatılması gerekir.

### Çözüm 2: Node.js'in Kurulu Olduğunu Kontrol Edin

1. PowerShell'de şu komutu çalıştırın:
   ```powershell
   node --version
   ```
   
   - Eğer bir versiyon numarası görüyorsanız (örneğin: v24.11.0), Node.js kurulu demektir
   - Eğer "komut bulunamadı" hatası alıyorsanız, Node.js kurulu değildir

### Çözüm 3: Node.js'i Yeniden Kurun

Eğer Node.js kurulu değilse veya düzgün çalışmıyorsa:

1. **Mevcut Node.js'i kaldırın:**
   - Windows Ayarlar > Uygulamalar > Node.js'i bulun ve kaldırın

2. **Node.js'i yeniden kurun:**
   - https://nodejs.org adresine gidin
   - **LTS** (Long Term Support) sürümünü indirin
   - İndirilen `.msi` dosyasını çalıştırın
   - Kurulum sırasında **"Add to PATH"** seçeneğinin işaretli olduğundan emin olun
   - Kurulumu tamamlayın

3. **Bilgisayarınızı yeniden başlatın** (ÖNEMLİ!)

4. **Yeni bir PowerShell penceresi açın** ve tekrar deneyin:
   ```powershell
   node --version
   npm --version
   ```

### Çözüm 4: PATH'i Manuel Kontrol Edin

1. PowerShell'de şu komutu çalıştırın:
   ```powershell
   $env:PATH
   ```
   
2. Çıktıda şu yolları arayın:
   - `C:\Program Files\nodejs\`
   - `C:\Users\esady\AppData\Roaming\npm`

3. Eğer bu yollar yoksa:
   - Windows tuşu + R'ye basın
   - `sysdm.cpl` yazın ve Enter'a basın
   - "Gelişmiş" sekmesine gidin
   - "Ortam Değişkenleri" butonuna tıklayın
   - "Sistem değişkenleri" altında "Path"i bulun ve düzenleyin
   - `C:\Program Files\nodejs\` yolunu ekleyin
   - Tüm pencereleri kapatın ve PowerShell'i yeniden başlatın

### Çözüm 5: Tam Yolu Kullanarak Test Edin

PowerShell'de şu komutu deneyin:
```powershell
& "C:\Program Files\nodejs\npm.cmd" --version
```

Eğer bu çalışıyorsa, Node.js kurulu ama PATH'e eklenmemiş demektir.

### ✅ Başarılı Kontrol

Her şey düzgün çalışıyorsa şunları görmelisiniz:
```powershell
PS C:\Users\esady\Desktop\dc> node --version
v24.11.0

PS C:\Users\esady\Desktop\dc> npm --version
11.6.1
```

### 🆘 Hala Çalışmıyorsa

Eğer yukarıdaki çözümlerden hiçbiri işe yaramadıysa:

1. **Node.js'in kurulu olduğu klasörü bulun:**
   - Genellikle: `C:\Program Files\nodejs\`
   - Bu klasörde `node.exe` ve `npm.cmd` dosyaları olmalı

2. **Bu klasörün var olduğunu doğrulayın**

3. **Yardım için şu bilgileri paylaşın:**
   - `node --version` komutunun çıktısı
   - `npm --version` komutunun çıktısı (veya hata mesajı)
   - Node.js'in kurulu olduğu klasör yolu


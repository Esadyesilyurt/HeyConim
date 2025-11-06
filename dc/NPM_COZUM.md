# npm Çalışıyor! PowerShell PATH Sorunu Çözümü

## ✅ Durum
- Node.js kurulu: v24.11.0 ✓
- npm kurulu: 11.6.1 ✓
- Sorun: PowerShell npm'i bulamıyor (PATH sorunu)

## 🔧 Çözüm

### Yöntem 1: PowerShell'i Yeniden Başlatın (En Kolay)
1. **Tüm PowerShell pencerelerini kapatın**
2. **Yeni bir PowerShell penceresi açın**
3. Şu komutu deneyin:
   ```powershell
   npm --version
   ```

### Yöntem 2: PATH'i Yenileyin (Mevcut PowerShell'de)
PowerShell'de şu komutu çalıştırın:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

Sonra tekrar deneyin:
```powershell
npm --version
```

### Yöntem 3: Tam Yol ile Kullanın (Geçici Çözüm)
Eğer yukarıdakiler çalışmazsa, npm komutlarını şu şekilde kullanabilirsiniz:
```powershell
& "C:\Program Files\nodejs\npm.cmd" install
& "C:\Program Files\nodejs\npm.cmd" run dev
```

## 📝 Projeyi Çalıştırmak İçin

npm çalıştıktan sonra, projenizi şu şekilde başlatabilirsiniz:

### 1. Frontend Kurulumu
```powershell
npm install
```

### 2. Backend Kurulumu
```powershell
cd server
npm install
cd ..
```

### 3. Projeyi Çalıştırma

**Terminal 1 (Backend):**
```powershell
cd server
npm start
```

**Terminal 2 (Frontend):**
```powershell
npm run dev
```

## 💡 Not
npm kurulu ve çalışıyor, sadece PowerShell'in PATH'i yenilemesi gerekiyor. En kolay çözüm PowerShell'i yeniden başlatmaktır!


# npm.cmd Kullanım Kılavuzu

## ✅ Çözüm: npm.cmd Kullanın

PowerShell'de `npm` yerine `npm.cmd` kullanabilirsiniz. İkisi de aynı şeyi yapar!

## 📝 Kullanım Örnekleri

### Versiyon Kontrolü
```powershell
npm.cmd --version
```

### Frontend Kurulumu
```powershell
npm.cmd install
```

### Backend Kurulumu
```powershell
cd server
npm.cmd install
cd ..
```

### Projeyi Çalıştırma

**Terminal 1 (Backend):**
```powershell
cd server
npm.cmd start
```

**Terminal 2 (Frontend):**
```powershell
npm.cmd run dev
```

## 🔧 Alternatif: Alias Oluşturun

PowerShell'de npm için bir kısayol oluşturabilirsiniz. PowerShell profil dosyanıza şunu ekleyin:

```powershell
Set-Alias npm npm.cmd
```

Bu komutu her PowerShell açtığınızda çalıştırmanız gerekir. Veya PowerShell profil dosyanıza ekleyebilirsiniz (kalıcı çözüm).

## 💡 Not

`npm.cmd` ve `npm` aynı şeyi yapar, sadece `npm.cmd` PowerShell execution policy sorununu bypass eder.


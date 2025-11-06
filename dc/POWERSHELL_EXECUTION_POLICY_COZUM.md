# PowerShell Execution Policy Sorunu Çözümü

## 🔴 Sorun
PowerShell, npm script'lerini çalıştırmaya izin vermiyor. Bu bir güvenlik ayarıdır.

## ✅ Çözüm 1: Execution Policy'yi Değiştirin (Önerilen)

PowerShell'i **Yönetici olarak** açın ve şu komutu çalıştırın:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Nasıl Yönetici Olarak Açılır?**
1. Windows tuşuna basın
2. "PowerShell" yazın
3. "Windows PowerShell" üzerine sağ tıklayın
4. "Yönetici olarak çalıştır" seçin

**Komutu çalıştırdıktan sonra:**
- "Evet" veya "Y" yazın ve Enter'a basın
- Yeni bir PowerShell penceresi açın (yönetici olmasına gerek yok)
- `npm --version` komutunu tekrar deneyin

## ✅ Çözüm 2: Geçici Olarak Bypass Edin (Hızlı)

Normal PowerShell'de (yönetici olmadan) şu komutu çalıştırın:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

Bu sadece mevcut PowerShell oturumu için geçerlidir. Her yeni PowerShell açtığınızda tekrar yapmanız gerekir.

## ✅ Çözüm 3: npm.cmd Kullanın (Alternatif)

npm yerine `npm.cmd` kullanabilirsiniz:

```powershell
npm.cmd --version
npm.cmd install
npm.cmd run dev
```

Veya tam yol ile:
```powershell
& "C:\Program Files\nodejs\npm.cmd" --version
```

## 📝 Execution Policy Seviyeleri

- **Restricted**: Hiçbir script çalıştırılamaz (varsayılan)
- **RemoteSigned**: İnternet'ten indirilen scriptler imzalanmış olmalı (önerilen)
- **Unrestricted**: Tüm scriptler çalıştırılabilir (güvenlik riski)
- **Bypass**: Tüm kontrolleri atla (güvenlik riski)

**RemoteSigned** en güvenli ve pratik seçenektir.

## 🎯 Önerilen Adımlar

1. PowerShell'i **Yönetici olarak** açın
2. Şu komutu çalıştırın:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. "Y" yazın ve Enter'a basın
4. PowerShell'i kapatın ve yeni bir tane açın
5. `npm --version` komutunu deneyin

Bu işlemden sonra npm normal şekilde çalışacaktır!


# Changelog

## [v2.0.0] – 2025-06-29

### 🚀 Added

- 6 unique themes added (e.g., light-sadelovh, dark-pumping, soft-glow, neon, etc.), each with different style and animation.
- Full responsive design support for all devices and screen sizes.
- `useToastdev` hook now supports 3 different usage styles for developer flexibility:
  1. `const myToast = useToastdev(); myToast.success();`
  2. `const { success, error, info, warn } = useToastdev(); info("text");`
  3. `import { toastdev } from '@azadev/react-toastdev'; toastdev.success();`
- Dual-language JSDoc support: now available in both English and Azerbaijani.
- Detailed animation effects and shadows added to match toast types.

### ✨ Changed

- Default theme changed to `light-sadelovh`.
- Code structure simplified and modularized for better maintenance.
- Minor animation polishing for entry/exit transitions.

### 🐞 Fixed

- Rare animation conflict that occurred during fast toast stacking.
- Theme fallback issues when no theme was provided.

### ⚠️ Breaking Changes

- Default theme changed (may visually affect projects relying on old default).
- Custom theme logic has changed — manual theme override may need update.

---

## 🇦🇿 Azərbaycan – DƏYİŞİKLİKLƏR

```markdown
# Dəyişikliklər

## [v2.0.0] – 29-06-2025

### 🚀 Əlavə edildi

- 6 unikal tema əlavə olundu (məsələn: light-sadelovh, dark-pumping, soft-glow, neon və s.) – hər biri fərqli stil və animasiya ilə.
- Bütün cihazlar və ekran ölçüləri üçün responsive dizayn dəstəyi əlavə olundu.
- `useToastdev` hook-u 3 fərqli istifadə formasını dəstəkləyir:
  1. `const myToast = useToastdev(); myToast.success();`
  2. `const { success, error, info, warn } = useToastdev(); info("text");`
  3. `import { toastdev } from '@azadev/react-toastdev'; toastdev.success();`
- JSDoc sənədlərinə Azərbaycan dili dəstəyi əlavə olundu.
- Toast növünə uyğun animasiyalar və kölgə effektləri əlavə olundu.

### ✨ Dəyişdi

- Default tema `light-sadelovh` olaraq dəyişdirildi.
- Kod strukturu sadələşdirildi və daha modul şəkildə təşkil olundu.
- Toast-ların çıxış/giriş animasiyalarında kiçik optimizasiya edildi.

### 🐞 Düzəldildi

- Toast-lar ard-arda çox tez çıxanda yaranan nadir animasiya konflikti aradan qaldırıldı.
- Tema seçilmədikdə fallback problemi düzəldildi.

### ⚠️ Kəskin dəyişikliklər

- Default tema dəyişdirildi (əvvəlki default tema istifadə edən layihələrdə vizual fərqlilik yarana bilər).
- Xüsusi tema təyin etmə mexanizmi dəyişdi – əllə tema seçənlər kodunu yeniləməlidir.
```

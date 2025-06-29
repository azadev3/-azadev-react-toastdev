# Changelog

## [v2.0.0] – 29.06.2025

## [EN] CHANGES

### 🟢 Added

- 5 unique themes have been added. You can choose and use them according to your wishes. Each theme
  has a different design and animation. Also, animated themes are called "pumping".
- Themes for dark mode have been added. There are 5 unique themes and 1 is the default
  and you can use the others. (default: "light-sadelovh")
- Responsiveness for mobile devices has been added
- Prototypes such as `position`, `toastClass` have been added. You can easily
  set the direction of the toast. You can also apply your own `css` codes through the `toastClass` prototype.
  `NOT`: It is recommended that you check the `!important` keyword if your css codes do not work.
- `Azerbaijani` language support has been introduced for Doc

### 🟡 Changes have been made

- Significant improvements have been made to the usage patterns of the toaster. For example, in the
  previous version
  we could only use it by calling it with a hook:
  `const { notify } = useToastdev();`
  There are now 3 convenient ways to use it, depending on your preferences.
  1. `const { success, error, info, warn } = useToastdev(); // you will get 4 main types back`;
  2. `const myToast = useToastdev(); // assign to a custom variable`;
  3. `import { toastdev } from "@azadev/react-toastdev" // accessible from anywhere with import`;
- The `notify` keyword has now been replaced by the main `toastdev` keyword.

### 🔴 DEPRECATED

- `notify` keyword is no longer used
- `ToastdevContext` only holds `ToastdevProvider` in parallel

## [AZ] DƏYİŞİKLİKLƏR

## [v2.0.0] - 29.06.2025

### 🟢 Əlavə edildi

- 5 unikal tema əlavə edildi. İstəyinizə uyğun seçərək istifadə edə bilərsiniz. Hər bir tema
  fərqli dizayn və animasiya daşıyır. Həmçinin animasiyalı olan temalar "pumping" adlanır.
- Dark mode üçün temalar əlavə edildi. Həmin 5 unikal tema içərisindədir və 1 ədədi default olmaqla
  digərlərini istifadə edə bilərsiniz. (default: "light-sadelovh")
- Mobil cihazlar üçün uyğun responsive əlavə edildi
- `position`, `toastClass` kimi prototiplər əlavə edildi. Siz tostun istiqamətini rahatlıqla
  təyin edə bilərsiniz. Həmçinin `toastClass` prototipi vasitəsilə özəl `css` kodlarınızı tətbiq edə bilərsiniz.
  `NOT`: css kodlarınız işləmədiyi halda `!important` açar sözünü yoxlamağınız tövsiyyə olunur.
- Doc üçün `Azərbaycan` dili dəstəyi gətirildi

### 🟡 Dəyişiklik edildi

- Tosterinizin istifadə qaydasında bir sıra dəyişikliklər etdim. Misal üçün, əvvəlki versiyada
  yalnız hook ilə çağıraraq istifadə edə bilirdik:
  `const { notify } = useToastdev();`
  İndi isə 3 əsas yolumuz var. Hansı sizə rahatdırsa, onu istifadə edə bilərsiniz.
  1. `const { success, error, info, warn } = useToastdev(); // sizə 4 əsas tipi dönəcək`;
  2. `const myToast = useToastdev(); // fərdiləşdirilmiş dəyişkənə atayın`;
  3. `import { toastdev } from "@azadev/react-toastdev" // import ilə hər yerdən əlçatan`;
- `notify` açar sözü indi əsas `toastdev` açar sözü ilə əvəz edilib.

### 🔴 QALDIRILDI

- `notify` açar sözü artıq istifadə edilmir
- `ToastdevContext` paralelində yalnız `ToastdevProvider` saxlayır

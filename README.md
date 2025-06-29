# 🔊 azadev-react-toastdev

> **Bu paket həvəskar developer Azad Mirheydərzadə (azadev) tərəfindən community üçün hazırlanıb.**

> **Minimal, customizable and now sound-enabled toast notifications for React** — made with ❤️ in Azerbaijan by Azad Mirheydarzada.

> **Səsli toast bildirişləri React üçün!** — Azərbaycandan Azad Mirheydarzada tərəfindən hazırlanıb.

> **LAST UPDATE: 29.06.2025** > **SON DƏYİŞİKLİK: 29.06.2025**

**For new changes:**

### 📦 [Changelog](https://github.com/azadev3/-azadev-react-toaster/blob/main/CHANGELOG.md)

**Dəyişikliklər üçün:**

### 📦 [Changelog](https://github.com/azadev3/-azadev-react-toaster/blob/main/CHANGELOG.md)

---

## 🌟 Features

- ⚡ Super lightweight & blazing fast
- 🔥 Plug-and-play toast system for modern React projects
- 🔊 **Optional sound support** — plays a toast sound automatically when triggered
- ⏱ Configurable duration and position
- 🧠 Smart toast types: `success`, `error`, `info`, `warning`
- 🎨 Customizable design with SCSS support
- 🌓 Dark mode compatible
- ✌️ 5 Unique theme support (different styles)

## 🌟 Features (AZ)

- ⚡ Super yüngül və parlaq sürətli
- 🔥 Müasir React layihələri üçün “Plug-and-play tost” sistemi
- 🔊 **Könüllü səs dəstəyi** — işə salındıqda avtomatik olaraq tost səsi səsləndirir
- ⏱ Konfiqurasiya edilə bilən müddət və mövqe
- 🧠 Ağıllı tost növləri: `success`, `error`, `info`, və `warn` kimi
- 🎨 SCSS dəstəyi ilə fərdiləşdirilə bilən dizayn
- 🌓 Qaranlıq rejim uyğunluğu
- ✌️ 5 Unikal tema dəstəyi (fərqli stillər)

---

## 🔈 Sound-Enabled Notifications

You can now play a toast sound automatically by passing:

```ts
## 💻 Installation
npm install @azadev/react-toastdev **or** npm i @azadev/react-toastdev

## <> Code Example <>

import React from 'react'
import { toastdev } from "@azadev/react-toastdev"

const App: React.FC = () => {
  return (
    <div className='app'>
      <button
        type='button'
        onClick={() => toastdev.success()}
      >
        TOAST!
      </button>
    </div>
  )
}

export default App
```

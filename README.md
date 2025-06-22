# 🔊 azadev-react-toastdev

> **Minimal, customizable and now sound-enabled toast notifications for React** — made with ❤️ in Azerbaijan by Azad Mirheydarzada.

> **Səsli toast bildirişləri React üçün!** — Azərbaycandan Azad Mirheydarzada tərəfindən hazırlanıb.

---

## 🌟 Features

- ⚡ Super lightweight & blazing fast
- 🔥 Plug-and-play toast system for modern React projects
- 🔊 **Optional sound support** — plays a toast sound automatically when triggered
- ⏱ Configurable duration and position
- 🧠 Smart toast types: `success`, `error`, `info`, `warning`
- 🎨 Customizable design with SCSS support _(COMING SOON)_
- 🌓 Dark mode compatible _(COMING SOON)_
- 🤖 AI Entegration _(TEZLİKLƏ)_

- ⚡ Super yüngül və parlaq sürətli
- 🔥 Müasir React layihələri üçün “Plug-and-play tost” sistemi
- 🔊 **Könüllü səs dəstəyi** — işə salındıqda avtomatik olaraq tost səsi səsləndirir
- ⏱ Konfiqurasiya edilə bilən müddət və mövqe
- 🧠 Ağıllı tost növləri: `success`, `error`, `info`, və `warn` kimi
- 🎨 SCSS dəstəyi ilə fərdiləşdirilə bilən dizayn _(TEZLİKLƏ)_
- 🌓 Qaranlıq rejim uyğunluğu _(TEZLİKLƏ)_
- 🤖 AI İnteqrasiya _(TEZLİKLƏ)_

---

## 🔈 Sound-Enabled Notifications

You can now play a toast sound automatically by passing:

```ts
## 💻 Installation
npm install @azadev/react-toastdev **or** npm i @azadev/react-toastdev

## <> Code Example <>

import React from 'react'
import { useToastdev } from "@azadev/react-toastdev"

const App: React.FC = () => {
  const { notify } = useToastdev();

  return (
    <div className='app'>
      <button
        type='button'
        onClick={() => {
          notify.success("Successfully Authentification!", { sound: true });
        }}
      >
        TOAST!
      </button>
    </div>
  )
}

export default App
```

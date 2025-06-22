# 🔊 azadev-react-toastdev

> **Minimal, customizable and now sound-enabled toast notifications for React** — made with ❤️ in Azerbaijan by Azad Mirheydarzada.

---

## 🌟 Features

- ⚡ Super lightweight & blazing fast  
- 🔥 Plug-and-play toast system for modern React projects  
- 🔊 **Optional sound support** — plays a toast sound automatically when triggered  
- ⏱ Configurable duration and position  
- 🧠 Smart toast types: `success`, `error`, `info`, `warning`  
- 🎨 Customizable design with SCSS support *(COMING SOON)*  
- 🌓 Dark mode compatible *(COMING SOON)*  

---

## 🔈 Sound-Enabled Notifications

You can now play a toast sound automatically by passing:

```ts
notify.success({
  message: "Saved successfully!",
  sound: true, // 🔊 this will play a sound
});

## 💻 Installation

bash
npm install @azadev/react-toastdev
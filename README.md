# 🔊 azadev-react-toaster

> **Minimal, customizable and now sound-enabled toast notifications for React** — made with ❤️ in Azerbaijan by Azad Mirheydarzada.

---

## 🌟 Features

- ⚡ Super lightweight & blazing fast
- 🔥 Plug-and-play toast system for modern React projects
- 🎨 Customizable design with SCSS support
- 🔊 **Optional sound support** — play a sound automatically on toast trigger!
- 🧠 Smart toast types: `success`, `error`, `info`, `warning`
- 🌓 Dark mode compatible
- ⏱ Configurable duration, position and more

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
npm install @azadev/react-toaster
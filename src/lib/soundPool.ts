import infoSound from '../sounds/info.mp3';
import successSound from '../sounds/success.mp3';
import errorSound from '../sounds/error.mp3';
import warnSound from '../sounds/warning.mp3';
class SoundPool {
  private pool: Record<string, HTMLAudioElement[]> = {};
  private maxPoolSize = 5;
  constructor(private soundMap: Record<string, string>) {
    Object.keys(soundMap).forEach((type) => {
      this.pool[type] = [];
      for (let i = 0; i < this.maxPoolSize; i++) {
        const audio = new Audio(soundMap[type]);
        audio.preload = 'auto';
        this.pool[type].push(audio);
      }
    });
  }

  play(type: string) {
    const audios = this.pool[type];
    if (!audios) return;

    const audio = audios.find((a) => a.paused || a.ended);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  }
}

export const soundPool = new SoundPool({
  success: successSound,
  error: errorSound,
  info: infoSound,
  warn: warnSound,
});

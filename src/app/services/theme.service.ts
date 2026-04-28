import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'theme';

  /** Se llama al iniciar la app */
  initTheme(): void {
    const savedTheme = localStorage.getItem(this.storageKey);

    // Default: dark (queda mejor para portfolio)
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
  }

  isDark(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
``;

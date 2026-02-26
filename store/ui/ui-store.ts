import { create } from 'zustand';

interface UiState {
  isSideMenuOpen: boolean;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUiStore = create<UiState>()((set, get) => ({
  isSideMenuOpen: false,
  theme: 'light',
  toggleTheme: () => set({ theme: get().theme === 'light' ? 'dark' : 'light' }),
  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));

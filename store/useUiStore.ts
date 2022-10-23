import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface UiStore {
  isCartOpen: boolean;
  setIsCartOpen: (isCartOpen: boolean) => void;
}

const useUiStore = create(
  devtools(
    devtools<UiStore>(set => ({
      isCartOpen: false,
      setIsCartOpen: isCartOpen => set({ isCartOpen }),
    }))
  )
);

export default useUiStore;

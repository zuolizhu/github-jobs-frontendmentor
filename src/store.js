import create from 'zustand'

const useStore = create((set) => ({
  isLight: true,
  setIsLight: (isLight) =>
    set((state) => ({
      ...state,
      isLight
    }))
}))

export default useStore
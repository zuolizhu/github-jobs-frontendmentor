import create from 'zustand'

const useStore = create((set) => ({
  isLight: true,
  filterTitle: '',
  filterLocation: '',
  setIsLight: (isLight) =>
    set((state) => ({
      ...state,
      isLight
    })),
  setFilterTitle: (filterTitle) =>
    set((state) => ({
      ...state,
      filterTitle,
    })),
  setFilterLocation: (filterLocation) =>
    set((state) => ({
      ...state,
      filterLocation,
    })),
}))

export default useStore
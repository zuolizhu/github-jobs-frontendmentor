import create from 'zustand'

const useStore = create((set) => ({
  isLight: true,
  filterTitle: '',
  filterLocation: '',
  isFulltimeOnly: '',
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
  setSsFulltimeOnly: (isFulltimeOnly) =>
    set((state) => ({
      ...state,
      isFulltimeOnly,
    })),
}))

export default useStore
import create from 'zustand'

const useStore = create((set) => ({
  isLight: true,
  jobs: [],
  loadedPage: 0,
  setIsLight: (isLight) =>
    set((state) => ({
      ...state,
      isLight
    })),
  setJobs: (jobs) =>
    set((state) => ({
      ...state,
      jobs
    })),
  setLoadedPage: (loadedPage) =>
    set((state) => ({
      ...state,
      loadedPage
    }))
}))

export default useStore
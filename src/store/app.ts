import { defineStore } from 'pinia'

interface State {
  search: string;
}



const useAppStore = defineStore('app', {

  state: (): State => ({
    search: ""
  }),
  getters: {
    getSearch: (state) => state.search
  },
  actions: {
    setSearch(value: string) {
      this.search = value;
    },
  },

})

export default useAppStore;
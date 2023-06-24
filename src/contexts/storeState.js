import {create} from 'zustand';

export const useBaseUrl = create(set => ({
  url: {},
  increasePopulation: (_urlResponse) => {
    console.log(_urlResponse,'<<<< GOT_URL_RESPONSE >>>>')
    return set(() => ({ url: _urlResponse }))
  },
  removeAllBears: () => set({bears: 0}),
}));


export const useCategories = create(set => ({
    home_categories:[],
    setHomeCategories: (_categoryDetail) => set(() => ({ home_categories: _categoryDetail })),
    removeAllBears: () => set({bears: 0}),
  }));




import React from 'react';
import create from 'zustand';

//초기값 bears
//set
const useStore = create(set => ({
    bears: 0,
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    resetBears: () => set({ bears: 0 })
}))

export default useStore;
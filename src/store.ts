import { create } from "zustand";

type CountStore = {
	count: number;
	increment: () => void;
};

export const useCounterStore = create<CountStore>((set) => ({
	count: 0,

	increment: () => set((state) => ({ count: state.count + 1 })),
}));

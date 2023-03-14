import { create } from 'zustand';

export interface NameState {
	name: string;
	setName: (name: string) => void;
}

export const useNameState = create<NameState>((set) => ({
	name: '',
	setName: (name) => set({ name }),
}));

import { atom, AtomOptions } from 'recoil';

export const listPostState = atom<number>({
    key: 'listPost',
    default: 0,
});

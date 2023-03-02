import { selector } from 'recoil';
import { listPostState } from '@/atoms';

export const postsState = selector({
    key: 'postsStates',
    get: (props) => {
        const number = props.get(listPostState);
        return number + 1;
    },
    set: ({ get, set, reset }, id) => {
        console.log(123);
    },
});

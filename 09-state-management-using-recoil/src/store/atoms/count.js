import {atom, selector} from 'recoil'

export const countatom = atom({
    key : 'countAtom',
    default : 0
});

export const evenSelector = selector({
    key : 'evenSelector',
    get : ({get }) => {
        const count = get(countatom)
        return count % 2 == 0
    }
})
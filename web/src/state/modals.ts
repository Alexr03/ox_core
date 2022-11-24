import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { CharacterProps } from '../types';

const deleteModalAtom = atom<{ character: CharacterProps, visible: boolean }>({
  character: {
    firstname: '',
    lastname: '',
    slot: 0,
    last_played: '',
    gender: '',
    dateofbirth: '',
  },
  visible: false,
});

export const useDeleteModalValue = () => useAtomValue(deleteModalAtom);
export const useSetDeleteModal = () => useSetAtom(deleteModalAtom);
export const useDeleteModalState = () => useAtom(deleteModalAtom);

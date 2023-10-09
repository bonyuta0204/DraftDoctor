import { atom } from 'recoil';

export const documentState = atom({
  key: 'documentText',
  default: '// Your text here',
});

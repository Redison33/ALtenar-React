import { create } from 'zustand';

interface storeForm {
  descriptor: string;
  title: string;
  description: string;
  file: string;
  color: string;
  theme: boolean;
  linkName: string;
  link: string;
  success: boolean;
  time: Date;
  setDescriptor: (descriptor: string, count: number) => void;
  setTitle: (title: string, count: number) => void;
  setDescription: (description: string) => void;
  setColor: (color: string) => void;
  setTheme: () => void;
  setLinkName: (linkName: string, count: number) => void;
  setLink: (link: string, count: number) => void;
  setFile: (file: string) => void;
}

export const useForm = create<storeForm>((set) => ({
  descriptor: '',
  title: '',
  description: '',
  file: '',
  color: '#9197a3',
  theme: true,
  linkName: '',
  link: '',
  success: false,
  time: new Date(),
  setDescriptor: (descriptor, count) => descriptor.length <= count && set({ descriptor }),
  setTitle: (title, count) => title.length <= count && set({ title }),
  setDescription: (description) => set({ description }),
  setColor: (color) => set({ color }),
  setTheme: () => set((state) => ({ theme: !state.theme })),
  setLinkName: (linkName, count) => linkName.length <= count && set({ linkName }),
  setLink: (link, count) => link.length <= count && set({ link }),
  setFile: (file) => set({ file }),
}));

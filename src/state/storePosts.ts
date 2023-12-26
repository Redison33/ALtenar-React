import { create } from 'zustand';

interface storePost {
  posts: [];
  setPosts: (posts: []) => void;
}

export const usePosts = create<storePost>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));

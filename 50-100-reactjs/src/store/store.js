import { create } from "zustand";

const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";

export const usePasswordStore = create((set) => ({
  length: 6,
  includeNumbers: true,
  includeSymbols: false,
  includeUppercase: true,
  includeLowercase: true,
  generatedPassword: "",

  setLength: (length) => set({ length }),
  toggleNumbers: () => set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () => set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUppercase: () => set((state) => ({ includeUppercase: !state.includeUppercase })),
  toggleLowercase: () => set((state) => ({ includeLowercase: !state.includeLowercase })),

  generatePassword: () =>
    set((state) => {
      let characters = "";
      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeUppercase) characters += uppercase;
      if (state.includeLowercase) characters += lowercase;

      if (!characters) return { generatedPassword: "Select at least one option!" };

      let password = "";
      for (let i = 0; i < state.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      };

      return { generatedPassword: password };
    }),
}));

export const useNotesStore = create((set) => ({
  notes: [],

  addNote: (note) => set((state) => ({
    notes: [...state.notes, note],
  })),

  updateNote: (id, updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, ...updatedNote } : note),
    })),

  removeNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}));

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  removeRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export const useExpenseStore = create((set) => ({
  expenses: [],
  addExpense: (expense) =>
    set((state) => ({
      expenses: [...state.expenses, expense],
    })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));

export const useMealsStore = create((set) => ({
  meals: [],
  searchQuery: "",
  setMeals: (meals) => set({ meals }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
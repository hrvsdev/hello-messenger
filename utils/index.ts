// Add or remove item from immutable array
export const addOrRemove = (arr: string[], item: string): string[] => {
    if (arr.includes(item)) {
      return arr.filter((i) => i !== item);
    } else return [...arr, item];
  };
  
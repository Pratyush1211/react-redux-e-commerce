export const timeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

interface WithID {
  id?: string;
}

export const replace = <T extends WithID>(updated: T[], arr: T[]) =>
  arr.map(v => updated.find(u => v.id === u.id) || v);
export const remove = <T extends WithID>(remove: T[], arr: T[]) =>
  arr.filter(v => !remove.find(u => v.id === u.id) || v);

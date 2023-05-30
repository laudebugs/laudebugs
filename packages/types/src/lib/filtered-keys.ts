import { FilteredType } from './filtered-type';

export function filterKeys<T extends Record<string, any>, K extends RegExp>(
  source: T,
  regExp: K
): FilteredType<T, K>[] {
  return Object.keys(source).filter((key) => regExp.test(key)) as FilteredType<
    T,
    K
  >[];
}

export type FilteredType<TypeToFilter, Condition> = {
  [K in keyof TypeToFilter]: TypeToFilter[K] extends Condition ? K : never;
}[keyof TypeToFilter];

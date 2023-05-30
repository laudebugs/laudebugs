import { Constructable } from './constructable';

export function getConstructorParams<T>(constructor: Constructable<T>) {
  const params = constructor.toString().match(/\(([^)]*)\)/)?.[1];
  return params?.split(',').map((param) => param.trim()) ?? [];
}

import type { Equal } from '@type-challenges/utils'

export type GetReadonlyKeys<T> = keyof {
  [k in keyof T as Equal<Pick<T, k>, Readonly<Pick<T, k>>> extends true ? k : never]: T[k]
}

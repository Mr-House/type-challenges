import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer F, ...infer K] ? Equal<F, U> extends true ? true : Includes<K, U> : false

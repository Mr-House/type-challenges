type TupleToUnion<T extends unknown[]> = T[number]
// type TupleToUnion<T> = extends[infer F, ...infer K] ?F | TupleToUnion<K> : never

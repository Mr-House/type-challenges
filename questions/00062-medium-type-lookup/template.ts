type LookUp<U, T> = U extends { type: infer R } ? R extends T ? U : never : never

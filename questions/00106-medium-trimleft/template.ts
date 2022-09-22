type TrimLeftWord = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${TrimLeftWord}${infer R}` ? TrimLeft<R> : S

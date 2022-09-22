type TrimWord = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${TrimWord}${infer R1}` ? Trim<R1> : S extends `${infer R2}${TrimWord}` ? Trim<R2> : S

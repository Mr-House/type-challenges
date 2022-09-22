type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S : S extends `${infer R1}${From}${infer R2}` ? `${R1}${To}${R2}` : S

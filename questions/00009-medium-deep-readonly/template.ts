type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends string | number | boolean | Function ? T[K] : DeepReadonly<T[K]>
}

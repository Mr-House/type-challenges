type Chainable<T extends object = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
  get(): T
}

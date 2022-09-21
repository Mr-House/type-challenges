type MyOmit<T, K extends keyof T> = {
  [k in keyof T as k extends K ? never : k]: T[k]
}


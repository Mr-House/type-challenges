type AppendArgument<Fn, A> = Fn extends (...args: infer T) => infer R ? (...args: [...T, A]) => R : never

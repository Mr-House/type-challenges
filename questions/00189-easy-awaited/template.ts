type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : never


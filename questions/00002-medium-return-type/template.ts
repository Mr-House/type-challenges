type MyReturnType<T> = T extends (...v: any[]) => infer U ? U : never


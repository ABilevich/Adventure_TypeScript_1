function add(a: number, b: number){
    return a + b
}

// we can use the infer here to infere the return type of a function
type AddFn = typeof add
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;
type InferedReturn = ReturnValueType<AddFn> 

// There are a bunch of utility types already pre built, for example this one exists and is called ReturnType

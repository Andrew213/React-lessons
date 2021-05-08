import React, { Component, ComponentType } from "react";

let a: number | string = 10;
a = '1';

let names: Array<string> = ['a', 'Andrew', 'Oleg'];

names.forEach(str => {
    console.log(str.toLowerCase())
})

// ########################################################

type TAddress = {
    city: string
    country: string
}

type TUser = {
    sayHello: (message: string) => void
    name: string
    age: number
    isSamurai: boolean
    address: TAddress | null
}

let user: TUser = {
    sayHello(message: string) { alert(message) },
    name: 'Andrew',
    age: 22,
    isSamurai: true,
    address: null
};

// user.sayHello('sd')


// user.sayHello('Hi');

const summa = (a: number, b: number) => {
    return a + b
}

// ########################

function sumTS(arr: Array<number>) {
    return arr.reduce((a: number, b: number) => a + b)
}

sumTS([1, 2, 3, 4, 5, 6, 7, 8, 9])

// ############################################

let str = 'some';

let num = 2;

let plus = num;

console.log(typeof parseInt(str))

if (typeof str === 'number') {
    const result = str - num;
    console.log(result)
};

// ##############################

type StrOrNumber = string | number

const strOrNumber: StrOrNumber = '2';

type AllJSTypes = string | number | boolean | [] | Object | BigInt | Function | undefined | void

// Array
const tsArr: Array<StrOrNumber> = [1, 2, 3, 4];

// TUPPLE
const myTupple: [number, string] = [3, 'a']
const val = tsArr[1000]

// Object
type MyObjType = { a: number, b: string, c: boolean }
const myObj: MyObjType = {
    a: 1,
    b: 'a',
    c: false
};


interface MyFirstInterface {
    readonly a: number,
    b: string,
    c?: Array<number>;
}

const mineObj: MyFirstInterface = {
    a: 2,
    b: 'Andrew',
    // c: [2, 3, 4, 5]
};

const ApiAnswer: IndexInterface = { key: 'asd', key1: 123 }

interface IndexInterface {
    [key: string]: string | number
}

// FUNCTION ##############################

enum Methods {
    add,
    sub
}

function calculate(method: Methods, left: 4, right: number): number {
    switch (method) {
        case Methods.add: return left + right;
        case Methods.sub: return left - right
    }
}

const sum = calculate(Methods.add, 4, 3);

interface FnInterface {
    (a: number): void
}

const ArrowFn: FnInterface = (s) => 2;

type TypeFn = () => number

// TS_TYPES ##########################################

type StrangeTsTypes = any | unknown | never;

const some: any = ['2']

const un: unknown = '2';

if (typeof un === 'string') {
    un.concat();
    console.log(un)
}

function neverFn(): never {
    throw new Error('my error')
}

// GENERICS #########################################################

const myArr: MyArray<number> = [1, 2, 3]

interface MyArray<Type> {
    [key: number]: Type;
    map<U>(fn: (el: Type, index: number, arr: MyArray<Type>) => U): MyArray<U>
}

let x = myArr.map((el) => el + 'a')
myArr.map<string>((el) => el + 'a');

// console.log(x)

function identity<Type>(arg: Type): Type {
    return arg
}

const result = identity(12);

function getLen<Type extends Array<any>>(arr: Type): number {
    return arr.length
}

getLen([1, 2, 3]);

interface IValueWithType<Type> {
    type: string,
    value: Type
}

function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg
    }
};

const result3 = withType('abc');

console.log(result3)

// Встроенные GENERYCS ##########################################

interface IExample<Type> {
    type: string,
    value: Type,
    isEmpty: boolean;
}

const omittedObj: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: 'abc'
}

const picked: Pick<IExample<number>, 'isEmpty' | 'value'> = {
    isEmpty: true,
    value: 12
}

const partial: Partial<IExample<number>> = {
    value: 1
}

// CLASES ##########################################

class Constructor {
    readonly field: number = 123;

    constructor(arg: number) {
        this.field = arg;
    };

    public publicMethod(): number {
        return this.field
    };

    protected protectedMethod(): number {
        return this.field + 10
    };

    private ptivateMethod(): number {
        return this.field + 30
    }
}

const instance = new Constructor(123);

// console.log(instance.publicMethod())

class Child extends Constructor {

    public childMethod() {
        this.protectedMethod();
        this.publicMethod();
    };

    protected protectedMethod(): number {
        return super.protectedMethod();
    };
};

abstract class AbsttractClass {
    public abstract abstractField: number;

    public abstract abstractMethod(): number;

    protected protectedMethod() {
        return this.abstractField
    }

}

class NewChild extends AbsttractClass {

    public abstractField: number = 123;

    public abstractMethod(): number {
        return this.abstractField;
    }
};

interface MyInterface<Type> {
    field: string;
    method(): string;
}

class NewClass<Type> implements MyInterface<Type> {
    public field: string = 'abc';
    public conf?: Type
    method(): string {
        throw new Error("Method not implemented.");
    }
}

class MyComponent extends React.Component<{ prop1: number }, { state1: string }>{

    constructor(props: { prop1: number }) {
        super(props);
        this.state = {
            state1: '123'
        }
    }

    public render() {
        return (
            <div>{this.props.prop1}</div>
        )
    }
}

type T = {
    a: string
    b?: string
}

// Note b is optional
const sameAsT: { [K in keyof T]: string } = {
    a: 'asdf', // a is required
}

// Note a became optional
const canBeNotPresent: { [K in keyof T]?: string } = {
}

// Note b became required
const mustBePreset: { [K in keyof T]-?: string } = {
    a: 'asdf',
    b: 'asdf'  // b became required 
}

// INFER, TYPEOF, KETOF, MAPPED TYPES ###########################################

const misstake = [] as Array<number>;

misstake.push(1);
// misstake.push('1')

type MyReadOnly = {
    readonly [key in 'asd' | 'qwe']: key
}

const some2: MyReadOnly = {
    asd: 'asd',
    qwe: "qwe"
}


// type MyReadOnly2 = {
//     readonly [key in keyof TMyBigObj]: key
// }

// const some3: MyReadOnly = {
//     asd: 'asd',
//     qwe: "qwe"
// }

// type MyPartial<T> = {
//     [key in keyof T]?: T[key]
// }

// type MyPick<I, K extends keyof I> = {
//     [key in K]: I[key]
// }

type ReadOnlyDeep<T> = {
    readonly [key in keyof T]: T[key] extends object ? ReadOnlyDeep<T[key]> : T[key]
}

function greate(a: number, b: string): boolean {
    return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never

type TReturnType = ReturnType<typeof greate>
type TArgsType = Parameters<typeof greate>

// 1. ####################################################

function concatStr(a: string, b: string): string {
    return a + b
};

// 2. ####################################################

interface WidthDataInterface {
    howIDoIt: string,
    simeArray: [string, number]
}

interface MyInterface3 {
    howIDoIT: string,
    simeArray: Array<string | number>,
    withData: Array<WidthDataInterface>
}

const MyHomeTask: MyInterface3 = {
    howIDoIT: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3. ####################################################

interface MyArr<Type> {
    [index: number]: Type;
    reduce<U>(callbackfn: (previousValue: U, currentValue: Type, currentIndex: number, array: MyArr<Type>) => U, initialValue?: U): U;
}

const foora: MyArr<number> = [1, 2, 3];

let y = foora.reduce<number>((acc, val) => acc - val)

// 4. ####################################################

interface IHomeTask {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}

type MyPartial<T> = {

    readonly [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]

}

const homeTask: MyPartial<IHomeTask> = {

    externalData: {

        value: 'win'

    }

}

// 5. ####################################################

interface IProps {

    firstProp: string

};

function HomeComponent(props: IProps) {

    return (

        <div>

            { props.firstProp}

        </div>

    )
}

type TMyType<P> = P extends ComponentType<infer E> ? E : P;

type t = TMyType<typeof HomeComponent>;

// 6. ####################################################

// type foo2 = JSX.IntrinsicElements['a']

// type helper<K> = {
//     [N in K]: K[N]
// }

// type TGetJSXPropsProp<I, K extends keyof I> = {
//     [N in K]: I[K]
// }

type TGetJSXPropsProp<I> = I extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[I] : never;



type TDivProps = TGetJSXPropsProp<'div'>;

const props: TDivProps = {
    // some: '1233', // throw error потому что не содержится в атрибутах div

    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}


type TPerson<T> = {
    [key in keyof T]: T[key]
}



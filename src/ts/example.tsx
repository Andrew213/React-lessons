import React, { Component, ComponentType } from "react";


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

type TGetJSXPropsProp<I> = I extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[I] : never;


type TDivProps = TGetJSXPropsProp<'div'>;

const props: TDivProps = {
    some: '1233', // throw error потому что не содержится в атрибутах div

    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}






import React, {createElement} from 'react';

// const add = (leftSide: number) => (rightSide:number) => leftSide + rightSide

// add(1)(1)

// const addOne = add(1)
// const addSix = add(6)

// addOne(5) //6

// function addEventListenerWithDispose(element:any,name:string,handler:Function){
//     element.addEventListener(name,handler);
//     return () => element.removeEventListener(name, handler)
// }

// const dispose = addEventListenerWithDispose(window,'resize',() => {
//     console.log('resize');
//     dispose()
// })


// ###############################################################

// interface IBlockProps extends Record<string, unknown> {
//     title: string;
//     id: string;
//   }

// const withIdKey = withKey('id');
// const withIndexKey = withKey()

// function withKey(key?:string){
//     return <E extends Record<string,unknown>,  T extends React.ComponentType<E>>(component: T) => 
//     (props:E, index:number) => 
//         React.createElement(
//             component,
//             {...props, key: key ? props[key as keyof E] : index},
//             []
//         )
    
// }


// function Feed (props:{blocks:IBlockProps[]}){
//     return(
//         <div>
//             { props.blocks.map(withIdKey(Block))}
//         </div>
//     )
// }

// function Block (props:IBlockProps){
//     return(
//         <div>
//             {props.title}
//         </div>
//     )
// }


// ###################################################################################


// function Input({onChange,value}: {onChange: (value: string) => void, value:string}){
//     return(
//         <input value={value} onChange={getValue(onChange)} />
//     )
// }

// function Checkbox(props: {onChange: (value: boolean) => void, value:boolean}){
//     return(
//         <input type="checkbox" checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked )} />
//     )
// }

function Checkbox(props: {onChange: (value: boolean) => void, value:boolean}){
    return(
        <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
    )
}

function pickFromSyntheticEvent<T extends HTMLElement >(){
    return<K extends keyof T>(key: K) => 

    < E extends ( (t: T[K]) => void ) > (fn: E)  => 

    (e: React.SyntheticEvent<T>)=> fn(e.currentTarget[key])
}

export const getValue = pickFromSyntheticEvent<HTMLAnchorElement>()('href')
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')


function NotStandartLink(props: any){
    return(
        <a onClick={preventDefault(stopPropagation(props.onClick))}></a>
    )
}

function preventDefault<T extends (e:any) => void>(fn: T){
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.preventDefault();
        fn(e)
    }
}

function stopPropagation<T extends (e:any) => void>(fn: T){
    return <E extends React.SyntheticEvent<any>>(e: E) => {
        e.stopPropagation();
        fn(e)
    }
}

function compose<U>(...fns: Function[]){
    return <E,>(initialValue:any): U =>
    fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

function pipe<U>(...fns: Function[]){
    return <E,>(initialValue: any):U =>
    fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

interface IProps{
    onChange:(value:string) => void,
    value:string
}

function nput({value,onChange}:IProps){
    return (
        // <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
        // <input value={value} onChange={compose(onChange, getValue, stopPropagation, preventDefault)} />
        <input value={value} onChange={pipe(preventDefault, stopPropagation, getValue, onChange)} />

        )
}
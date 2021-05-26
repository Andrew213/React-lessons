import React from "react"

interface IItem{
    text:string;
    id:string;
    onClick: (id:string) => void;
    className: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?:string
}

interface IGenericListProps{
    list: IItem[];
}

export function GenericList({list}:IGenericListProps){

    return (
        <>
    {list.map(({As = 'div', text, href, onClick, className, id}) => (
        <As
        className={className}
        onClick={()=>onClick(id)}
        key={id}
        href={href}
        >
            {text}
        </As>
    ))}
        </>
    )

}

import React from "react";
import {v4 as uuid4} from "uuid"

const todos=[
    {
        id: uuid4(),
        title: "Rezaul Karim RK",
        desc: "Akkelpur, Joypurhat"
    },
    {
        id: uuid4(),
        title: "MD Nadim Hossain",
        desc: "Akkelpur, Joypurhat"
    },
    {
        id: uuid4(),
        title: "MD Hridoy Hossain",
        desc: "Akkelpur, Joypurhat"
    },
    {
        id: uuid4(),
        title: "Sakib Hossain",
        desc: "Akkelpur, Joypurhat"
    },
    {
        id: uuid4(),
        title: "Tarikul Islam",
        desc: "Akkelpur, Joypurhat"
    },
    {
        id: uuid4(),
        title: "Musa Karim Shuvo",
        desc: "Thakurgaon Sadar, Thakurgaon"
    },
    {
        id: uuid4(),
        title: "MD Tuhin Islam",
        desc: "Setabganj, Dinajpur"
    }
];


const List=()=>{
    // console.log(uuid4());
    return <div>
        {todos.map((todo)=>{
            const{id, title, desc}=todo;
            return <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>{id}</p>
            </div>
        })}
    </div>
}

export default List;
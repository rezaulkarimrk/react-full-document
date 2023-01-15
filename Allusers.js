import React from "react";

const users=[
    {
        name:"Rezaul Karim",
        age: 24,
        phone:[{ Home: "01521533574", Personal: "01832187613"}]
    },
    {
        name: "Pikul Islam",
        age: 23,
        phone: [{ Home: "01772364838", Personal: "01934480311"}]
    }
];



const User=()=>{
    return (<div>
        <h1>Nested Mapping</h1>
        {users.map((single, index)=>(
                <article key={index}>
                    <h1>Name: {single.name}</h1>
                    <p>Age: {single.age}</p>
                    {single.phone.map((phone)=>(
                        <div>
                        <p>Home: {phone.Home}</p>
                        <p>Personal: {phone.Personal}</p>
                        </div>
                    ))}
                </article>
            ))}
    </div>);
}

export default User;
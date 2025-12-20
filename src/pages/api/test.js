const { NextResponse } = require("next/server");

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

export default async function POST(req, res){
    // const res = await fetch(DATA_SOURCE_URL)
    // const todos = await res.json()
    
    const todos = {
        name: "fish",
        namez: "dog",
    }

    console.log("this is api");
    // console.log(req.body);
    
    // return todos
    // return NextResponse.json(todos)
    res.status(200).json(todos);
    // res.send(todos)
}

// https://nextjs.org/docs/api-routes/edge-api-routes
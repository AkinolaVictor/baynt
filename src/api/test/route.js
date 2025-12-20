const { NextResponse } = require("next/server");

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET(){
    // const res = await fetch(DATA_SOURCE_URL)
    // const todos = await res.json()
    
    const todos = {"name": "fish"}
    return todos
    // return NextResponse.json(todos)
}
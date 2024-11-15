import React from 'react'
import Card from './Card'

export default function TodoList(props) {
    const {todos} = props
  
    return (
    <ul className= "main">
        {todos.map((todoItem ,todoIndex) => 
        {
            return (
                <Card {...props}key={todoIndex} index ={todoIndex}>
                    <p>{todoItem}</p>
                </Card>
            )
        })}
    </ul>
  )
}

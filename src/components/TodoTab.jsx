import React from 'react'
import {List } from 'antd'
import TodoItem from './TodoItem'

const TodoTab = ({todos, onTodoRemoval, onTodoToggle}) => {
  return (
    <>
    <List 
        locale={{emptyText: "There's nothing to do :(", }}
        dataSource={todos}
        renderItem={() => {
            <TodoItem
                todo={todos}
                onTodoToggle={onTodoToggle}
                onTodoRemoval={onTodoRemoval}
            
            />
        }}
        pagination={{
            position: 'bottom',
            pageSize: 10,
        }}
    
    />
    </>
  )
}

export default TodoTab
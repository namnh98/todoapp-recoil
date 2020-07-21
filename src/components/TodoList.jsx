import React from "react";
import {useRecoilValue} from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListStats from "./TodoListStats";
import TodoListFilter from "./TodoListFilter";
import {todoListFilter} from "../selectors";

function TodoList() {
    const todoList = useRecoilValue(todoListFilter);
    return (
        <>
            <TodoListStats />
            <TodoItemCreator/>
            {
                todoList.map(todoItem => (
                    <TodoItem key={todoItem.id} item={todoItem}/>
                ))
            }
            <TodoListFilter/>
        </>
    )
}
export default TodoList;

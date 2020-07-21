import React from "react";
import {todoListFilterState} from "../states";
import {useRecoilState} from "recoil";

function TodoListFilter() {
    const [filter, setFilter ] = useRecoilState(todoListFilterState);

    const updateFilter = ({target: {value}}) => {
        setFilter(value);
    }

    return (
        <>
            <select onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    )
}

export default TodoListFilter;

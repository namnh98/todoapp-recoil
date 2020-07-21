import React from "react";
import {useRecoilValue} from "recoil";
import {todoListStats} from "../selectors";

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStats);
    const formattedPercentCompleted = Math.round(percentCompleted * 100);
    return <ul>
        <li>
            Total items: {totalNum}
        </li>
        <li>
            Items completed: {totalCompletedNum}
        </li>
        <li>
            Items uncompleted: {totalUncompletedNum}
        </li>
        <li>
            Percent completed: {percentCompleted}
        </li>
    </ul>
}

export default TodoListStats;

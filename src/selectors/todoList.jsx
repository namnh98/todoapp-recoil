import {selector} from "recoil";
import { todoListState, todoListFilterState} from "../states";

const todoListStats = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter(item => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum ? totalCompletedNum/ totalNum : 0;
        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted
        };
    }
});

const todoListFilter = selector({
    key: 'todoListFilter',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);
        switch (filter) {
            case 'Show Completed':
                return list.filter(item => item.isComplete);
            case 'Show Uncompleted':
                return list.filter(item => !item.isComplete);
            default:
                return list;
        }
    }
})
export {
    todoListStats,
    todoListFilter
};

import { createStore } from 'redux';

const defaultState = {
    todos: [
        {
            task: 'wazup from redux',
            state: 'Pending',
        },
    ],
    selectedState: 'Pending',
};

function todos(state = defaultState, action) {
    switch (action.type) {
    case 'ADD_TODO':
        return Object.assign({}, state, {
            todos: state.todos.concat([{
                task: action.text,
                state: 'Pending',
            }]),
        });
    default:
        return state;
    }
    return state;
}


export default createStore(todos);

import { createStore } from 'redux';
import assert from 'assert';

function todos(state=[] , action){
    return state;
}

assert.deepEqual(todos(), []);


export default createStore(todos);

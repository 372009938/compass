

import { useReducer } from 'react'
import { Button } from 'antd'

function reducer(state, action) {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'SET':
            return state + action.payload
        default:
            return state
    }
}

function TestuseReducer() {
    const [state, dispatch] = useReducer(reducer, 0)

    return <div>
        {state}

        <Button onClick={() => dispatch({ type: 'DEC' })}>-</Button>
        <Button onClick={() => dispatch({ type: 'INC' })}>+</Button>

        <Button onClick={() => dispatch({ type: 'SET', payload: 100 })}>update</Button>

    </div>
}
export default TestuseReducer
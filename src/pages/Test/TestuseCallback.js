
import { memo, useCallback, useState } from 'react'
import { Button, Input } from 'antd'

const MyInput = memo(function input({ onChange }) {
    console.log('子组件重新渲染了')
    return <Input style={{ width: '20%' }} placeholder="useCallback" onChange={(e) => onChange(e.target.value)} />

})

const TestuseCallback = () => {
    const [count, setCount] = useState(0)

    const handlerChange = useCallback((value) => {
        console.log('value: ', value)
    }, [])

    return <div>

        <MyInput onChange={handlerChange} />
        <Button onClick={() => { setCount(count + 1) }} >count {count}</Button>
    </div>
}
export default TestuseCallback
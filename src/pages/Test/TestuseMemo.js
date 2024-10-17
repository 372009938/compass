
import { useMemo, useState } from 'react'
import { Button } from 'antd'

function fib(n) {
    console.log('计算函数执行了')
    if (n < 3) {
        return 1
    }
    return fib(n - 2) + fib(n - 1)
}

const TestuseMemo = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const result = useMemo(() => {
        return fib(count)
    }, [count])

    console.log('组件重新渲染了')

    return <div>
        <Button onClick={() => { setCount(count + 1) }} >count {count}</Button>
        {result}
        <Button onClick={() => { setCount1(count1 + 1) }} >count1 {count1}</Button>
    </div>
}
export default TestuseMemo
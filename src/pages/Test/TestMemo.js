
import React, { memo, useState } from 'react'
import { Button } from 'antd'

const MemoSon = memo(function Son() {
    console.log('组件重新渲染了')
    return <div>son</div>
})

const TestMemo = () => {
    const [count, setCount] = useState(0)
    return <div>
        <MemoSon />
        <Button onClick={() => {
            setCount((state) => state + 1)
        }}>
            {count}
        </Button>
    </div>
}
export default TestMemo
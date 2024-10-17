
import { forwardRef, useRef } from 'react'
import { Button, Input } from 'antd'

const MyInput = forwardRef((_, ref) => {
    return <Input style={{ width: '20%' }} placeholder="forwardRef" ref={ref} />
})

const TestforwardRef = () => {
    const inputRef = useRef(null)
    const showRef = () => {
        // console.log('inputRef: ', inputRef)
        // console.dir(inputRef.current)
        inputRef.current.focus()

    }
    return <div>
        <MyInput ref={inputRef} />

        <Button onClick={showRef} >Button</Button>

    </div>
}
export default TestforwardRef

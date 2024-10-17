import { forwardRef, useRef, useImperativeHandle } from 'react'
import { Button, Input } from 'antd'

const MyInput = forwardRef((props, ref) => {

    const inputRef = useRef(null)

    const handlerFocus = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            handlerFocus
        }
    })

    return <Input placeholder="useImperativeHandle" style={{ width: '20%' }} ref={inputRef} />
})

const TestuseInperativeHandle = () => {
    const inputRef = useRef(null)
    const showRef = () => {
        inputRef.current.handlerFocus()
    }
    return <div>
        <MyInput ref={inputRef} />

        <Button onClick={showRef} >Button</Button>

    </div>
}
export default TestuseInperativeHandle
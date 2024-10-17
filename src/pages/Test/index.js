import { Tabs } from 'antd'
import TestforwardRef from './TestforwardRef'
import TestMemo from './TestMemo'
import TestuseCallback from './TestuseCallback'
import TestuseInperativeHandle from './TestuseInperativeHandle'

import TestuseReducer from './TestuseReducer'
import TestuseMemo from './TestuseMemo'

const Test = () => {
    const items = [
        {
            key: 1,
            label: 'useReduce',
            children: <TestuseReducer />
        }, {
            key: 2,
            label: 'useMemo',
            children: <TestuseMemo />
        }, {
            key: 3,
            label: 'memo',
            children: <TestMemo />
        }, {
            key: 4,
            label: 'useCallback',
            children: <TestuseCallback />
        }, {
            key: 5,
            label: 'forwardRef',
            children: <TestforwardRef />
        }, {
            key: 6,
            label: 'useInperativeHandle',
            children: <TestuseInperativeHandle />
        }
    ]
    return <div style={{ margin: '20px' }}>

        <Tabs defaultActiveKey="1" items={items} />
    </div>
}
export default Test
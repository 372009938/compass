import { useEffect, useState, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

import './index.scss'
const Compass = () => {

    const [data, setData] = useState([{ key: 0 }])
    const [count, setCount] = useState(1);

    const [textData, setTextData] = useState([[['向', '山'], []]]);

    // const [height, setHeight] = useState("110px");

    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current.innerHTML = ''
        init();
    }, [textData])

    // '袁病死墓绝胎养生沐冠官旺'
    // '巨廉贞破禄存贪狼文曲武曲'
    // '未坤申庚酉辛戌乾亥壬子癸丑艮寅甲卯乙辰巽巳丙午丁'

    // 初始化函数
    const init = () => {

        let newText = [];
        // 生成标签 存放文字展示
        for (let i = 0; i < textData.length; i++) {
            newText.push(textData[i])
            for (let j = 0; j < textData[i][0].length; j++) {
                let temp = createLabel(textData[i][0][j]);
                intervalRef.current.appendChild(temp);

                // let tempX = temp.offsetLeft + "px";
                // let tempY = temp.offsetTop + "px";
                temp.style.position = "absolute";
                temp.style.left = 630 / 2  - 21 / 2+ "px";
                console.log('temp.offsetLeft: ', temp.offsetLeft);
                temp.style.top = 630 / 2 - 21 / 2 + "px";
                console.log('temp.offsetTop: ', temp.offsetTop);

                // 将生成的标签存放在数组list中
                newText[i][1].push(temp);
            }
            let temp = createCircle(i);
            intervalRef.current.appendChild(temp);
        }
        runTime(newText);
        // setTextData(newText)
    }

    // 创建标签并将文字填充标签内 接收参数为文字内容
    const createCircle = (i) => {
        let widthMid = 630 / 2
        let r = (i + 1) * 30 + 20 * i;
        let x = widthMid - r - 25;
        let y = widthMid - r - 25;
        let div = document.createElement('div');
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.height = r * 2 + 50 + 'px';
        div.style.width = r * 2 + 50 + 'px';
        div.style.backgroundColor = `#000000${((i + 1) * 10)}`;
        // div.style.backgroundColor = ['#00cc6650', '#A1CC0050', '#CC6B0050', '#CC000050', '#CC00A550', '#7800CC50'][i];
        div.style.zIndex = 99 - i;
        div.style.borderRadius = '50%';
        div.classList.add('circle');
        return div;
    }

    // 创建标签并将文字填充标签内 接收参数为文字内容
    const createLabel = (text) => {
        let div = document.createElement('div');
        div.classList.add('label');
        div.innerText = text;
        return div;
    }

    const runTime = (data) => {
        // 圆心位置确定
        let widthMid = 630 / 2 - 21 / 2
        let heightMid = 630 / 2 - 21 / 2
        // 将每一个dom元素确定到圆的位置
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i][0].length; j++) {
                // 计算出每一个元素的位置  x y 坐标，圆的半径与时分秒的位置有关
                let r = (i + 1) * 30 + 20 * i;
                // 计算每一个平均的角度  将每一个单位对齐,再转化成弧度
                let deg = 360 / data[i][1].length * j;
                // 计算dom元素的坐标
                let x = r * Math.sin(deg * Math.PI / 180) + widthMid;
                let y = heightMid - r * Math.cos(deg * Math.PI / 180);
                // 样式
                let temp = data[i][1][j];
                temp.style.transform = 'rotate(' + (360 + deg) + 'deg)';
                // temp.style.transform = 'rotate(' + (-90 + deg) + 'deg)';
                temp.style.left = x + 'px';
                temp.style.top = y + 'px';
            }
        }
    }

    const handleAdd = () => {
        const newData = {
            key: count,
        };
        setData([...data, newData]);
        setCount(count + 1);
    };

    const handleDelete = (key) => {
        let newData = [...data].filter(item => item.key !== key);
        setData(newData);
    }

    const onFinish = (values) => {
        intervalRef.current.innerHTML = ''
        let newText = [];
        data.forEach(element => {
            let value = values[element.key];
            let str = removeSpaces(value).split('')
            newText.push([str, []])

        });
        setTextData(newText)

    };

    //去除字符串中的所有空格
    const removeSpaces = (str) => {
        return str ? str.replace(/\s+/g, '') : '';
    }

    // 生成图片自动下载为png格式（将dom转为二进制再编译下载）
    const getBlobPng = () => {
        const node = document.getElementById("node");
        domtoimage.toBlob(node).then((blob) => {
            // 调用file-save方法 直接保存图片
            saveAs(blob, `${(new Date()).valueOf()}.png`)
        })

        // domtoimage.toSvg(node)
        //     .then((defaultUrl) => {
        //         saveAs(defaultUrl, `${(new Date()).valueOf()}.svg`)
        //     });
    }

    return <div className='container'>
        <div className='compass'>
            <div ref={intervalRef} id='node' className='disk'></div>
        </div>
        <div className='section'>
            <Form
                name="basic"
                initialValues={{
                    0: '向山'
                }}
                onFinish={onFinish}
            >
                {
                    data.map((v, k) => {
                        return <Form.Item key={k}>
                            <Form.Item name={v.key} noStyle>
                                <Input placeholder="请输入" style={{ width: '86%' }} />
                            </Form.Item>
                            <Button onClick={() => {
                                handleDelete(v.key)
                            }} disabled={k === 0} style={{ marginLeft: 8 }} shape="circle" icon={<MinusOutlined />} />
                        </Form.Item>

                    })
                }
                <Form.Item >
                    <Button disabled={data.length === 6} block type="dashed" onClick={handleAdd} icon={<PlusOutlined />}>添加</Button>
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button type="primary" htmlType="submit">
                        更新
                    </Button>
                    <Button style={{ marginLeft: 8 }} onClick={getBlobPng}>
                        导出png
                    </Button>
                </Form.Item>
            </Form>
        </div>

    </div >
}
export default Compass
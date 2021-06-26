import { Card, message } from 'antd';
import React, { useEffect } from 'react';
import { clearInterval } from 'timers';

/* 随便弄一个  */
export const NoMatch = () => {

    useEffect(() => {
        let interval = setInterval(() => { }, 1000);
        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>未找到页面</p>
               
            </Card>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>检查路径</p>
                
            </Card>
        </>
    )
}

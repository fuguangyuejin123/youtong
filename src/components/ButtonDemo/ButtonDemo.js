import React from 'react';
import { Button } from 'antd';
import './ButtonDemo.less';

function ButtonDemo() {
    return (
        <div>
            <Button className="custom-button" type="primary">
                预约专属演示 &gt;
            </Button>
            <Button className="custom-button" type="primary">
                免费方案咨询 &gt;
            </Button>
        </div>
    );
}

export default ButtonDemo;
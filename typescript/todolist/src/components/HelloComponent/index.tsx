// 如何约束函数的返回值为ReactNode?
import React from 'react';
// FC = FunctionComponent

interface HelloComponentProps {
    name: string;
    age?: number;
}
// typescript 类型约束，重要的地方一定要约束
// 参数，返回值
// 泛型 泛指内部的类型
const HelloComponent: React.FC<HelloComponentProps> = (props) => {
    const {name,age} = props;
    return (
        <div>
            <div>Hello World:{name},{age}</div>
        </div>
    )
}

export default HelloComponent;
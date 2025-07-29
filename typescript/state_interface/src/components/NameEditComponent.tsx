import React from "react";

interface NameEditComponentProps {
userName: string;
// typescript 除了内置的类型之外，自定义类型 class interface
// React 提供的类型 事件类型 ChangeEvent
// type = "radio" type = "checkbox"
// HTMLInputElement event.target.value
// 重要地方约束 不会出错 减少99%的bug
onChange: (e: React.ChangeEvent<HTMLInputElement> )=>void;
}
const NameEditComponent: React.FC<NameEditComponentProps> = (props) => {
    return (
    <div>
        <label htmlFor="">Update name:</label>
        <input type="text" value={props.userName} onChange={props.onChange} />
    </div>
    )
}

export default NameEditComponent;
import { Component } from "react";
import Child from "./Child";

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    // 状态，生命周期
    // JSX
    doIncrement() {
        // console.log(this,'--------------')
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        console.log('组件挂载了');
    }
    componentDidUpdate() {
        console.log('组件更新了');
    }
    componentWillUnmount() {
        console.log('组件要卸载了');
    }
    render() {
        return (
            <>
                <h1>LifeCycleDemo</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.doIncrement.bind(this)}>Increment</button>
                <Child title={'hello child'}></Child>
            </>
        );
    }
}

export default LifeCycleDemo;
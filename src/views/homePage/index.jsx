import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//跨组件的调用store值

@inject(stores => ({loginStore: stores.store.loginStore}))

@observer
export default class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {username, loginState} = this.props.loginStore;
        return (
            <div>
                {loginState === 1 ? `登录成功，欢迎您：${username}` : '未登录，请重新登录！'}
            </div>
        )
    }
}
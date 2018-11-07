import React from 'react';
import {inject, observer} from 'mobx-react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import './style.scss';

const FormItem = Form.Item;

@inject((stores) => {
    return {
        loginStore: stores.store.loginStore
    }
})

@observer
class NormalLoginForm extends React.Component {

    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {login} = this.props.loginStore;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                login(values.userName, values.password);
                this.props.history.push('home');
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div id='login-page'>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: 'Please input your username!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Please input your Password!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => {
                            // setTimeout(() => {
                            //
                            // }, 2000)
                        }}>
                            Log in
                        </Button>
                        Or <a href="/home">register now!</a>
                    </FormItem>
                </Form>
                <div>{this.props.loginStore.username}</div>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
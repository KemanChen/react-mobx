import {observable, action, computed, runInAction} from 'mobx';

export class loginStore {
    @observable username = '';
    @observable password = '';
    @observable loginState = 0; //0 未登录 1 登录成功

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action
    login = (name, pwd) => {
        this.username = name;
        this.password = pwd;
        this.loginState = 1;
    }
}
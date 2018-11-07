import {configure, observable, computed} from 'mobx';
import {movieStore} from './movieStore';
import {loginStore} from './loginStore';

configure({enforceActions: 'observed'});

export default class store {
    @observable movieStore;
    @observable loginStore;

    constructor() {
        this.movieStore = new movieStore(this);
        this.loginStore = new loginStore(this);
    }
}
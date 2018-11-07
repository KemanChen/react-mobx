import {observable, action, computed, runInAction} from 'mobx';
import Api from '../api/movie';

export class movieStore {
    @observable movieList = [];
    @observable state = 'pending';

    @observable price = 0;
    @observable amount = 1;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.fetchMovies = this.fetchMovies.bind(this);
        this.setPrice = this.setPrice.bind(this);
    }

    @computed
    get total() {
        return this.price * this.amount;
    }

    @computed
    set total(total) {
        this.price = total / this.amount;
    }

    @action
    setPrice(total) {
        this.price = total;
    }


    @action
    async fetchMovies() {
        this.state = 'pending';
        this.movieList = [];
        try {
            const subjects = await Api.getMovie();
            runInAction(() => {
                this.state = 'Done';
                this.movieList = subjects;
            });
        } catch (e) {
            runInAction(() => {
                this.state = "error";
            });
        }
    }
}
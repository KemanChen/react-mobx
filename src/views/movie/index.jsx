import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import { Table } from 'antd';

@inject((stores) => {
    return {
        movieStore: stores.store.movieStore
    }
})

@observer
export default class Movie extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        const {movieList,fetchMovies} = this.props.movieStore;
        if (movieList.length > 0)
            return;
        await fetchMovies();
    }

    render() {
        const {state, movieList, setPrice, price} = this.props.movieStore;

        const columns = [{
            title: '名称',
            dataIndex: 'title',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '豆瓣评分',
            dataIndex: 'rating',
        }, {
            title: '年份',
            dataIndex: 'year',
        }, {
            title: '描述',
            dataIndex: 'original_title'
        }];

        const data = movieList.map(item => ({
            id: item.id,
            key: item.id,
            title: item.title,
            rating: item.rating.average,
            year: item.year,
            original_title: item.original_title
        }));

        return (
            <div>
                <Table loading={state === 'pending'} columns={columns} dataSource={data} />
            </div>
        )
    }
}
import React, { Component } from 'react';
import OfferItem from './OfferItem';


class OfferList extends Component {

    constructor() {
        super();
        console.log("[OffreList] constructor");
    }

    componentDidMount() {
        console.log("[OfferList] componentDidMount");
    }

    componentWillUnmount() {
        console.log("[OfferList] componentWillUnmount");
    }

    render() {

        console.log("[OfferList] render");

        let items = [
            { id : 1, name : "Book1", author : "Author1", description : "old" },
            { id : 2, name : "Book2", author : "Author2", description : "cool book" },
            { id : 3, name : "Book3", author : "Author3", description : "rare and interesting" },
            { id : 4, name : "Book4", author : "Author4", description : "can give this book for nothing" },
            { id : 5, name : "Book5", author : "Author5", description : "nice pictures" },
        ];    

        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map(item => <OfferItem item={ item } />)
                }
                </tbody>
            </table>
        );
    }
}

export default OfferList; 
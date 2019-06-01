import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class OfferItem extends Component {
    constructor() {
        super();
        console.log("[OfferItem] constructor");

        
    }

    componentDidMount() {
        console.log("[OfferItem] componentDidMount");
    }

    componentWillUnmount() {
        console.log("[OfferItem] componentWillUnmount");
    }


    render() {
        console.log("[OfferItem] render"); 

        const item = this.props.item;
        return (
            <tr key={ item.id }>
                <td>{ item.id }</td>
                <td>{ item.name }</td>
                <td>{ item.author }</td>
                <td>{ item.description }</td>
                <td><Link to={"/offer/" + item.id}>Details</Link></td>
            </tr>
        );
    }
}

export default OfferItem;
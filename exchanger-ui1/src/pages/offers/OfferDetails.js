import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class OfferDetails extends Component {

    constructor() {
        super();
        console.log("[OfferDetails] constructor");

    }

    componentDidMount() {
        console.log("[OfferDetails] componentDidMount");
    }

    componentWillUnmount() {
        console.log("[OfferDetails] componentWillUnmount");
    } 

    render() {
        console.log("[OfferDetails] render");        

        const id = this.props.match.params.offerId;
        return (
            <div>
                <Link to="/">Back to offer List</Link>
                <div>{id}</div>
            </div>
        );
    }
}

export default OfferDetails; 
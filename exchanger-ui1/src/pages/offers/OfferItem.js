import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class OfferItem extends Component {
    constructor() {
        super();
        console.log("[OfferItem] constructor");

        this.onRemove = this.onRemove.bind(this);
    }

    componentDidMount() {
        console.log("[OfferItem] componentDidMount");
    }

    componentWillUnmount() {
        console.log("[OfferItem] componentWillUnmount");
    }

    onRemove(id, e) {
        e.preventDefault();

        console.log(`[OfferItem] onRemove - ${id}`);
        // const request = {
        //     offerItemId : id
        // };

        fetch(`http://localhost:3000/api/exchange/${id}/remove`, {
          method: "PUT",
          headers: {
            "content-type" : "application/json"
          }
          //body: JSON.stringify(request)
        }).then(function(response) {
            console.log(`[OfferItem] onRemove - fetch.then(${response})`);

        }).catch(function(error) {
            console.log(`[OfferItem] onRemove - fetch.catch(${error})`);
        });
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
                <td><button onClick={(e) => this.onRemove(item.id, e)}>Remove</button></td>
                <td><Link to={"/offer/" + item.id}>Details</Link></td>
            </tr>
        );
    }
}

export default OfferItem;
import React, { Component } from 'react';

class CreateOffer extends Component {
    constructor() {
        super();
    }

    onSubmit(e) {
        e.preventDefault();
    
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    
        fetch("http://localhost:8080/api/user/register", {
          method: "POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(this.state)
        });
      } 
      render() {
        return (
          <div className="App">
            <div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-mail</label>
                    <input type="text" placeholder="Enter your e-mail" name="email" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="bookName">Book name</label>
                    <input type="text" placeholder="Enter book name" name="Book name" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="author">Author</label>
                    <input type="text" placeholder="Enter book author" name="author" />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="description">Description</label>
                    <input type="text" placeholder="Enter some information" name="description" />
                </div>
            </div>  
    
          </div>
        );
      }
}

export default CreateOffer;
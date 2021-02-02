import React, { Component } from 'react';

import Button from '../../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../../axios-orders';
import Spinner from '../../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zip: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients:this.state.ingredients,
            price:this.state.totalPrice,
            customer: {
                name:'Joe Shmoe',
                address:{
                    street:"1615 Pumpkinwood Ln.",
                    city: "Poopytown",
                    state: "MD",
                    zipCode: "12345",
                },
                email:'test@test.com'
            },
            shipping:'overnight'
        };
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false});
            });
            
    }

    render () {
        let form = (
            <form>
                <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                <input className={classes.Input} type='text' name='email' placeholder='Your Email'/>
                <input className={classes.Input} type='text' name='street' placeholder='Your Street'/>
                <input className={classes.Input} type='text' name='zip' placeholder='Your zip code'/>
                <Button btnType="Success" clicked={this.orderHandler}>SUBMIT ORDER</Button>
            </form>);
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Info</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
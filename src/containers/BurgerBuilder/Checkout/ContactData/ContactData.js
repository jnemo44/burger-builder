import React, { Component } from 'react';

import Button from '../../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zip: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Info</h4>
                <form>
                    <input className={classes.Input} type='text' name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type='text' name='email' placeholder='Your Email'/>
                    <input className={classes.Input} type='text' name='street' placeholder='Your Street'/>
                    <input className={classes.Input} type='text' name='zip' placeholder='Your zip code'/>
                    <Button btnType="Success">SUBMIT ORDER</Button>
                </form>
                
            </div>
        );
    }
}

export default ContactData;
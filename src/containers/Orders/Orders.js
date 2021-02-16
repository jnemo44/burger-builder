import React, {Component} from 'react';

import Order from '../../components/Order/CheckoutSummary/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    
    
    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let fetchedOrders = [];
                // Push Order info from JS object into an array
                // 
                for(let key in res.data) {
                    fetchedOrders.push({
                        //Distribute properties of order object
                        ...res.data[key],
                        //Reattach the key
                        id: key
                    });
                }
                console.log(fetchedOrders[0]);
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false});
            })
    };
    
    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}/>  
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
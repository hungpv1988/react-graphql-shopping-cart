import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import OrderBy from './OrderBy';
import styles from '../css/ContainerHeader.css';

export default class CardListHeader extends Component{
    render(){
        return(
            <div className={styles.container}>
                <small className={styles.productFound}>
                    <span>17 product(s) found</span>
                </small>

                <OrderBy />
            </div>
        )
    }
}
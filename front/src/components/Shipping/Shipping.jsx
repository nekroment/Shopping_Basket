import React, { useState } from 'react';
import { Input, Select } from '../../utils/FormControl';
import { minLength, maxLength, requierdField, phoneValid, emailValid } from '../../utils/validators/validator';
import { reduxForm, Field } from 'redux-form';
import {  Redirect } from 'react-router-dom';
import './Shipping.css';

const maxLengthNameField = maxLength(30);
const minLengthNameField = minLength(3);

const BuyForm = (props) => {
    const { pristine, reset, submitting, invalid } = props;
    console.log(props.cost);
    return (
        <div> 
            <form onSubmit={props.handleSubmit}>
                <p><span>Name</span> <Field component={Input} type={'text'} name={"name"} placeholder={"Name"} validate={[requierdField, minLengthNameField, maxLengthNameField]} /></p>
                <p><span>Address</span> <Field component={Input} type={'text'} name={"address"} placeholder={"Adress"} validate={[requierdField]} /></p>
                <p><span>Phone</span> <Field component={Input} type={'input'} name={"phone"} placeholder={"Number"} validate={[requierdField, phoneValid]} /></p>
                <p><span>E-mail</span> <Field component={Input} type={"text"} name={"email"} placeholder={"email"} validate={[requierdField, emailValid]} /></p>
                <p><span>Shoping options</span> <Field name={'options'} component={Select} validate={[requierdField]}>
                    <option selected></option>
                    <option disabled={props.cost >= 300} value="Express shipping (additional 9.99 €)">Express shipping</option>
                    <option disabled={props.cost >= 300} value="Courier shipping (additional 19.99 €)">Courier shipping</option>
                    <option disabled={props.cost < 300} value="free">Free shipping</option>
                </Field></p>
                <p className={"pay-price"}>{props.cost + ' ' + '€'}</p>
                <button className={'pay-button'} disabled={invalid || pristine || submitting}>PAY</button>
            </form>
        </div>
    )
}

const BuyReduxForm = reduxForm({
    form: 'shipping'
})(BuyForm);

const Shipping = (props) => {

    const [isBuy, setIsBuy] = useState(false)
    const onSubmit = (formData) => {
        let options = 0;
        if (formData.options == 'Courier shipping') {
            options = 19.99;
        } else if (formData.options == 'Express shipping') {
            options = 9.99;
        }
        const user = {
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            email: formData.email,
            options: formData.options,
            price: props.cost + options
        };
        props.delete(user);

        setIsBuy((isBuy) => {return true})
    }

    if(isBuy) {
        return <Redirect to='/cart' />
    }

    return (
        <div className={"buy-form"}>
            <BuyReduxForm onSubmit={onSubmit} cost={props.cost} />
        </div>
    )
}

export default Shipping;
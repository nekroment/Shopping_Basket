import React from 'react';
import { Input } from '../../utils/FormControl';
import { minLength, maxLength, requierdField, phoneValid, emailValid } from '../../utils/validators/validator';
import { reduxForm, Field } from 'redux-form';


const maxLengthNameField = maxLength(30);
const minLengthNameField = minLength(3);

const BuyForm = (props) => {
    const {pristine, reset, submitting, invalid} = props;
    console.log(props.cost);
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Input} type={'text'} name={"name"} placeholder={"Name"} validate={[requierdField, minLengthNameField, maxLengthNameField]} />
                <Field component={Input} type={'text'} name={"adress"} placeholder={"Adress"} validate={[requierdField]} />
                <Field component={Input} type={'input'} name={"number"} placeholder={"Number"} validate={[requierdField, phoneValid]} />
                <Field component={Input} type={"text"} name={"email"} placeholder={"email"} validate={[requierdField, emailValid]} />
                <Field name={'options'} component={"select"}>
                    <option disabled={props.cost >= 300} value="9.99">Express shipping</option>
                    <option disabled={props.cost >= 300 } value="19.99">Courier shipping</option>
                    <option disabled={props.cost < 300 } value="free">Free shipping</option>
                </Field>
                <button disabled={invalid || pristine || submitting}>BUY</button>
            </form>
        </div>
    )
}

const BuyReduxForm = reduxForm({
    form: 'shipping'
})(BuyForm);

const Shipping = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <BuyReduxForm onSubmit={onSubmit} cost={props.cost}/>
        </div>
    )
}

export default Shipping;
import React from 'react';
import './FormControl.css';

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={'formControl'}>
            <div className={hasError ? 'error' : ''}>
                <input {...input} {...props} />
                {hasError && <p>{meta.error}</p>}
            </div>
        </div>

    )
}

export const Select = ({ input, label, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={'formControl'}>
            <label>{label}</label>
            <div className={hasError ? 'error' : ''}>
                <select {...input} {...props}>
                    {children}
                </select>
                {hasError && <p>{meta.error}</p>}
            </div>
        </div>
    )
}

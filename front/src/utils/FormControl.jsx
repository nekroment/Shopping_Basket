import React from 'react';
import './FormControl.css';

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={'formControl'}>
            <div className={hasError ? 'error' : ''}>
                <input {...input} {...props} />
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>

    )
}
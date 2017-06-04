import React from 'react';


export default ({
    errors,
    fieldName
}) => {
    let fieldErrors = errors.get(fieldName);
    if( ! fieldErrors ) {
        return null;
    }
    return (
        <div className="ui error message" style={ { display: 'block' } }>
            <ul>
                {fieldErrors.map((error, key) => {
                    return <li key={ key }>{ error }</li>
                })}
            </ul>
        </div>
    )
}
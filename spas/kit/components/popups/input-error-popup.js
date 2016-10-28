import React from 'react';

const InputErrorPopup = ({ message }) => {


    return (
        <div className="ui flowing popup hidden  Input__Error__Popup">
            <span>{message}</span>
        </div>
    );
};

export default InputErrorPopup;
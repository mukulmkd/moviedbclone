import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

function CheckboxWithLabel(props) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Radio />
                </InputGroup.Prepend>
                <FormControl disabled value={props.label} style={{ fontSize: '0.9rem' }} />
            </InputGroup>
        </>
    )
}

export default CheckboxWithLabel;

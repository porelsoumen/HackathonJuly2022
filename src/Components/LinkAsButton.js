import React from 'react';
import {Link} from 'react-router-dom';

export default function LinkAsButton(props) {
    return (
        <Link to={props.to}>
            <button type="button">
                {props.name}
            </button>
        </Link>
    )
}
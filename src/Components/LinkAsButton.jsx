import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export default function LinkAsButton(props) {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Text>
            {props.text}
          </Card.Text>
          <Link to={props.to} >
            <button type="button" style={{  padding: '5px', borderRadius: '5px' }}>
                {props.name}
            </button>
        </Link>
        </Card.Body>
      </Card>
        
    )
}
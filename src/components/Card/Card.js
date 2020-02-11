import React from 'react'
import {Link} from 'react-router-dom'
const Card = (props) => {
    return (
        <div className="card" onClick={props.delete}>
            <div className="card-header">
                id: {props.id}
            </div>
            <div className="card-body">
                <h5 className="card-title">name: {props.name}</h5>
                <p className="card-text">price: {props.price}</p>
                <p className="card-text">{props.updated_at}</p>
                <p className="card-text">{props.created_at}</p>
                <Link to={`/product/edit/${props.id}`}>Edit</Link>
            </div>
        </div>
    )
}

export default Card
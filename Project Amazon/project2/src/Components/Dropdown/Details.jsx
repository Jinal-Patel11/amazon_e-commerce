import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
    const { id } = useParams();
    const [state, setState] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setState(data);
            });
    }, [id]);

    return (
        <div className="container mt-3">
            <h4 className="mb-4">Details</h4>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={state.image} style={{height:"300px",width:"300px"}} alt={state.title} />
                </div>
                <div className="col-md-6">
                    <h5 className="mb-3">{state.title}</h5>
                    <p>{state.description}</p>
                    <p className="text-success">₹{state.price}</p>
                </div>
            </div>
        </div>
    );
}

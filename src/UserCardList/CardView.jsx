import React from 'react';
import './Card.css';
import { truncateText } from '../Utils/Constant'


const CardView = ({ cardList, }) => {
    const nodeValue = cardList.node;

    return (
        <div className=''>
            <div className="card-group card-outer">
                <div className="d-flex justify-content-center card-outer-space">
                    <img src={nodeValue?.ImageStyle_thumbnail} className="image-view image-card" alt="..." />
                    <div className="card-body card-content">
                        <h5 className="card-title">{truncateText(nodeValue?.title, 6)}</h5>
                        <p className="card-text text-muted">{new Date(nodeValue?.last_update).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardView;

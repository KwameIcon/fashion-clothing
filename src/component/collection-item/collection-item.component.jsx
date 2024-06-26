import React from "react";

import './collection-item.style.scss';

const CollectionItem = ({id, name, imageUrl, price}) => (
    <div key={id} className="collection-item">
        <div 
            style={{backgroundImage: `url(${imageUrl})`}}
            className="image"
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)

export default CollectionItem;
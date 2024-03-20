import React from "react";

import SHOP_DATA from './shop-data';
import './shop.style.scss';
import CollectionPreviewPage from "../../component/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const collectionPreview = this.state.collection
        return(
            <div className="shop-page">
                {collectionPreview.map(({id, ...otherCollectionPreviews}) => (
                    <CollectionPreviewPage key={id} {...otherCollectionPreviews}/>
                ))}
            </div>
        )
    }
}

export default ShopPage;
import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.styles.scss';

import SHOP_DATA from '../../data/shop/shop.data';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default Shop;
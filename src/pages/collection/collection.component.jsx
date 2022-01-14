import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionComponent = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionContainer>
      <CollectionTitle> {title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

export default CollectionComponent;

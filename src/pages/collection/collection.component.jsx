import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.styles";

const CollectionComponent = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

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

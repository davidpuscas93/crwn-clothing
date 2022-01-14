import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { CollectionsOverviewContainer } from "./collections-overview.styles.jsx";

const CollectionsOverviewComponent= ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

export default CollectionsOverviewComponent;

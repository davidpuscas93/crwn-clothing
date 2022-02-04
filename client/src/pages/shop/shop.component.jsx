import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const Collection = lazy(() => import("../collection/collection.container"));

const ShopComponent = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </Suspense>
    </div>
  );
};

export default ShopComponent;

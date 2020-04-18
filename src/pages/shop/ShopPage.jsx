import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    const collectionPreviewDisplay = collections.map((collection) => {
      return <CollectionPreview key={collection.id} {...collection} />;
    });

    return <div>{collectionPreviewDisplay}</div>;
  }
}

export default ShopPage;

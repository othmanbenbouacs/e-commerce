import React from "react";
import Item from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  const itemsToDisplay = items
    .filter((item, index) => {
      return index < 4;
    })
    .map((item) => {
      return <Item key={item.id} {...item} />;
    });

  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="preview">{itemsToDisplay}</div>
    </div>
  );
};

export default CollectionPreview;

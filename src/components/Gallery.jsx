import { Card } from "./Card";
import { createImageUrl } from "../lib/flickrApi";

import "./Gallery.css";

export const Gallery = ({ images, onInfiniteScroll }) => {
  const handleScroll = (e) => {
    if (e.target.clientHeight + e.target.scrollTop >= e.target.scrollHeight) {
      onInfiniteScroll();
    }
  };

  return (
    <div className="gallery" onScroll={handleScroll}>
      {images.map((image) => (
        <Card key={image.id} {...image} src={createImageUrl(image)} />
      ))}
    </div>
  );
};

import { Gallery } from "./components/Gallery";
import { SearchForm } from "./components/SearchForm";
import { useFlickrImages } from "./hooks/useFlickrImages";

import "./styles.css";

export default function App() {
  const [images, error, getImages, loadMore] = useFlickrImages("tree");

  const handleSubmit = (e) => {
    getImages(e.target.elements.tags.value);
    document.getElementById("gallery").scrollTop = 0;
  };

  return (
    <div className="App">
      <SearchForm onSubmit={handleSubmit} />
      {error && <div>Error!</div>}
      {images.length > 0 && (
        <Gallery images={images} onInfiniteScroll={loadMore} />
      )}
    </div>
  );
}

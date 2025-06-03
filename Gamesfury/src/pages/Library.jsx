import CollectionNav from "../components/CollectionNav";

const Library = () => {
  return (
    <div className="library-wrapper">
      <div className="d-flex align-items-center gap-3">
        <h1 className="lh-1">Library</h1>
        <a href="">
          <i class="bi bi-arrow-clockwise fs-3 text-muted"></i>
        </a>
      </div>

      <CollectionNav />
    </div>
  );
};

export default Library;

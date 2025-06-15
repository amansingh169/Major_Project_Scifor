import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchResultSkeleton = () => {
  return (
    <div className="dropdown-link d-flex gap-3 rounded-3">
      <Skeleton height={100} width={230} borderRadius={4} baseColor="grey" />

      <div className="d-flex flex-column justify-content-between w-auto">
        <Skeleton height={16} width={400} baseColor="grey" />
        <Skeleton height={12} width={170} baseColor="grey" />
        <Skeleton height={12} width={200} baseColor="grey" />
      </div>
    </div>
  );
};

export default SearchResultSkeleton;

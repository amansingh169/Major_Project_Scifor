import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = () => {
  return (
    <div className="d-flex flex-column">
      <Skeleton className="thumbnail" height={180} width={400} borderRadius={4} baseColor="grey" />

      <Skeleton height={16} width={200} baseColor="grey" />

      <Skeleton height={22} width={200} baseColor="grey" />

      <Skeleton height={22} width={70} baseColor="grey" />
    </div>
  );
};

export default CardSkeleton;

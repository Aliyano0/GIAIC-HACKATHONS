import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating = 0, totalStars = 5 }) => {
  return (
    <div className="flex gap-1 items-end">
      {[...Array(totalStars)].map((_, index) => {
        const starIndex = index + 1;

        if (starIndex <= Math.floor(rating)) {
          return <FaStar key={index} className="text-yellow-400 text-lg" />;
        } else if (starIndex - 0.5 <= rating) {
          return (
            <FaStarHalfAlt key={index} className="text-yellow-400 text-lg" />
          );
        } else {
          return <FaRegStar key={index} className="text-gray-400 text-lg" />;
        }
      })}
      <p className="ml-[2px] h-4 text-[11px] xs:text-[13px] text-gray-500">
        {rating}/{totalStars}
      </p>
    </div>
  );
};

export default StarRating;

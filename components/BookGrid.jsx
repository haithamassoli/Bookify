import { StarIcon } from "@heroicons/react/solid";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

function BookGrid({ image, title, author, price, rating }) {
  const navigate = useNavigate();
  const handleClickImage = () => {
    navigate(`/book/${title.split(" ").join("-")}`);
  };
  const onClick = () => {
    console.log("clicked");
  };
  const rate =
    Math.round(rating) > rating ? Math.round(rating) : Math.floor(rating);
  return (
    <div className="flex justify-evenly flex-1 h-56 mb-4">
      {/* <img
        src={image}
        className="shadow-slate-300 shadow-xl"
        alt="book"
        onClick={handleClickImage}
      /> */}
      <div className="flex flex-col justify-between py-4">
        <div>
          <div className="flex">
            {Array.from({ length: Math.round(rating) }, (_, i) => (
              <StarIcon color="orange" width={20} height={20} key={i} />
            ))}
            {5 - rating >= 0 &&
              Array.from({ length: 5 - rate }, (_, i) => (
                <StarIcon color="gray" width={20} height={20} key={i} />
              ))}
          </div>
          <h4 className="text-lg">{title}</h4>
          <p className="text-slate-400">{author}</p>
        </div>
        <div>
          <h5 className="mb-4 font-semibold">${price}</h5>
          <Button onClick={onClick}>Buy Now</Button>
        </div>
      </div>
    </div>
  );
}

export default BookGrid;

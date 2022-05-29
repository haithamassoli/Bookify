import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import atomicHabits from "../../assets/atomic-habits.jpg";
function book() {
  const books = {
    image: atomicHabits,
    title: "Atomic Hapits aslfdjad s",
    author: "Haitham Assoli",
    rating: 2,
    price: 10,
  };
  return (
    <div className="bg-gray-400 p-20">
      <div className="flex gap-8">
        <Image
          src={books.image}
          alt="book"
          className="object-cover w-64 h-96"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold">{books.title}</h1>
            <h2 className="text-xl font-semibold text-gray-700">
              {books.author}
            </h2>
            <div className="flex">
              {Array.from({ length: Math.round(books.rating) }, (_, i) => (
                <StarIcon color="orange" width={20} height={20} key={i} />
              ))}
              {5 - books.rating >= 0 &&
                Array.from({ length: 5 - books.rating }, (_, i) => (
                  <StarIcon color="gray" width={20} height={20} key={i} />
                ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              ${books.price}
            </h2>
            <button onClick={() => console.log("Clicked")}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default book;

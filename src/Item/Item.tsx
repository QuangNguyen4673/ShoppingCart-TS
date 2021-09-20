import { CartItemType } from "../App";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className="flex flex-col">
      <div className="h-56">
        <img
          className="object-cover h-full"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div>
        <div className="font-semibold text-lg leading-6 mb-2">{item.title}</div>
        <p className="max-h-40 line-clamp-3">{item.description}</p>
      </div>
      <div className="mt-auto">
        <div className="mb-2">${item.price}</div>
        <button
          className="px-6 py-2 border-2 rounded bg-blue-500 text-white hover:bg-blue-800"
          onClick={() => handleAddToCart(item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;

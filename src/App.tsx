import "./assets/main.css";
import { useState } from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Item from "./Item/Item";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
const getProducts = async (): Promise<CartItemType[]> => {
  return await axios
    .get("https://fakestoreapi.com/products")
    .then((result) => result.data);
};
function App() {
  const [cartItems, setcartItems] = useState<CartItemType[]>([]);
  const [isCartOpen, setisCartOpen] = useState(false);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  const handleRemoveFromCart = () => null;

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Something went wrong</div>;
  console.log(data);
  return (
    <div>
      {data && (
        <div
          className="mx-auto 
          max-w-xs md:max-w-3xl lg:max-w-7xl 
          grid lg:grid-cols-4 lg:gap-10 
          md:grid-cols-3 md:gap-6"
        >
          {data.map((item) => {
            return (
              <Item
                key={item.id}
                item={item}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      )}

      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;

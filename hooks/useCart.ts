import { useEffect, useState } from "react";
import { Cart } from "../interface/interfaces";
import { cartStorage } from "../lib/storage/Storage";

export default function useCart(productId?: string) {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const onStorage = () => {
      if (productId) {
        setCarts(
          cartStorage.get().filter((obj: Cart) => {
            return obj.product.id === productId;
          })
        );
      } else {
        setCarts(cartStorage.get());
      }
    };
    if (productId) {
      setCarts(
        cartStorage.get().filter((obj: Cart) => {
          return obj.product.id === productId;
        })
      );
    } else {
      setCarts(cartStorage.get());
    }
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [productId]);

  useEffect(() => {
    const result = carts.reduce(
      (result: number, x: Cart) =>
        result + Number(x.product.price) * Number(x.count),
      0
    );
    setTotalPrice(result);
  }, [carts]);

  return { carts, totalPrice };
}

import jwt_decode from "jwt-decode";
import { Cart, JWT } from "../../interface/interfaces";

export const userStorage = {
  get() {
    const jwt = localStorage.getItem("Authentication");
    try {
      if (!jwt) return null;
      const decoded = jwt_decode<JWT>(jwt);
      if (decoded.exp < new Date().getTime() / 1000) {
        this.clear();
        return null;
      }
      return decoded.user;
    } catch (e) {
      localStorage.removeItem("Authentication");
      return null;
    }
  },
  set(jwt: string) {
    localStorage.setItem("Authentication", JSON.stringify(jwt));
  },
  clear() {
    localStorage.removeItem("Authentication");
  },
};

export const cartStorage = {
  get() {
    if (typeof window === "undefined") return [];
    const carts = sessionStorage.getItem("carts");
    if (!carts) return [];
    const parsedCarts = JSON.parse(carts);
    return parsedCarts;
  },
  set(item: Cart) {
    const carts = sessionStorage.getItem("carts");
    if (!carts) {
      sessionStorage.setItem("carts", JSON.stringify([item]));
      window.dispatchEvent(new Event("storage"));
      alert("장바구니에 추가되었습니다.");
    } else {
      const parsedCarts = JSON.parse(carts);
      if (
        parsedCarts.find((obj: Cart) => {
          return JSON.stringify(obj.product) === JSON.stringify(item.product);
        })
      ) {
        alert("장바구니에 이미 존제합니다.");
        return;
      }
      sessionStorage.setItem("carts", JSON.stringify([...parsedCarts, item]));
      window.dispatchEvent(new Event("storage"));
      alert("장바구니에 추가되었습니다.");
    }
  },

  clear() {
    localStorage.removeItem("carts");
    window.dispatchEvent(new Event("storage"));
  },

  addCount(id: string, color: string[], size: string[]) {
    const carts = sessionStorage.getItem("carts");
    if (!carts) return;
    var parsedCarts = JSON.parse(carts);
    const findedIndex = parsedCarts.findIndex((obj: Cart) => {
      return (
        obj.product.color[0] === color[0] &&
        obj.product.size[0] === size[0] &&
        obj.product.id === id
      );
    });
    parsedCarts[findedIndex].count += 1;
    sessionStorage.setItem("carts", JSON.stringify(parsedCarts));
    window.dispatchEvent(new Event("storage"));
  },

  subCount(id: string, color: string[], size: string[]) {
    const carts = sessionStorage.getItem("carts");
    if (!carts) return;
    var parsedCarts = JSON.parse(carts);
    const findedIndex = parsedCarts.findIndex((obj: Cart) => {
      return (
        obj.product.color[0] === color[0] &&
        obj.product.size[0] === size[0] &&
        obj.product.id === id
      );
    });
    if (parsedCarts[findedIndex].count === 1) {
      this.delete(id, color, size);
      return;
    }
    parsedCarts[findedIndex].count -= 1;
    sessionStorage.setItem("carts", JSON.stringify(parsedCarts));
    window.dispatchEvent(new Event("storage"));
  },

  delete(id: string, color: string[], size: string[]) {
    const carts = sessionStorage.getItem("carts");
    if (!carts) return;
    var parsedCarts = JSON.parse(carts);
    const findedIndex = parsedCarts.findIndex((obj: Cart) => {
      return (
        obj.product.color[0] === color[0] &&
        obj.product.size[0] === size[0] &&
        obj.product.id === id
      );
    });
    if (confirm("정말 삭제하시겠습니까?") === false) return;
    parsedCarts.splice(findedIndex, 1);
    sessionStorage.setItem("carts", JSON.stringify(parsedCarts));
    window.dispatchEvent(new Event("storage"));
  },
};

import { cartStorage } from "../storage/Storage";

export default function cartAction() {
  const onAddCount = (id: string, color: string[], size: string[]) => {
    cartStorage.addCount(id, color, size);
  };
  const onSubCount = (id: string, color: string[], size: string[]) => {
    cartStorage.subCount(id, color, size);
  };
  const onDelCart = (id: string, color: string[], size: string[]) => {
    cartStorage.delete(id, color, size);
  };

  return { onAddCount, onSubCount, onDelCart };
}

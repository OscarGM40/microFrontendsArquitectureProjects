/**
 * @jest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react-hooks";
import { useCartCount } from './hooks/useCartCount'


let callback = () => {};

jest.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: (cb) => {
      callback = cb;
    },
  },
}));

describe("useCartCount", () => {

  it("should return the cart count with 0", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  });

  it("should return the cart count with 1", () => {
    const { result } = renderHook(() => useCartCount());
    act(() => {
      callback({ cartItems: [{ id: 1 }] });
    });
    expect(result.current).toBe(1);
  });
});

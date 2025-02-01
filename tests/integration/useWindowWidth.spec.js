import { renderHook } from "@testing-library/react";
import { useWindowWidth } from "../../src/hooks/useWindowWidth.js";

test("return correct window width", () => {
  global.innerWidth = 500; //Window width mock
  global.dispatchEvent(new Event("resize")); //event resize call.
  const { result } = renderHook(() => useWindowWidth());
  expect(result.current).toBe(500);
});

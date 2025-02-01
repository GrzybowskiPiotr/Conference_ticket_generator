import "@testing-library/jest-dom";
import { InputWithLabel } from "../../src/components/InputWithLabel/InputWithLabel";
import { render, screen } from "@testing-library/react";

test("InputWithLabel renders with correct id", () => {
  render(<InputWithLabel id={"test"} label={"test label"} />);
  const input = screen.getByLabelText("test label");
  expect(input.id).toBe("test");
});
test("Component properly passes placeholder to input", () => {
  render(
    <InputWithLabel placeholder={"test placeHolder"} label={"test label"} />
  );
  const input = screen.getByLabelText("test label");
  expect(input.placeholder).toBe("test placeHolder");
});
test("Component displays error message and applies error styling", () => {
  const error = { message: "test error" };
  render(<InputWithLabel label={"error"} error={error} />);
  const errorParagraph = screen.getByRole("paragraph");
  expect(errorParagraph.textContent).toBe("test error");
  expect(errorParagraph).toHaveClass("errorP");
});

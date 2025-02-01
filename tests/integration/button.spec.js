import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../../src/components/Button/Button";

describe("Button component tests", () => {
  test("Button pass children properly", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  test("Button component invoke onClick function once on click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}></Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Button component corectly pass css class", () => {
    const customStyle = { fontSize: "12px", borderRadius: "4px" };
    render(<Button style={customStyle}>Styled Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("font-size: 12px");
    expect(button).toHaveStyle("border-radius: 4px");
  });

  test("Button component correctly apply typograpyPreset", () => {
    render(<Button typographyPreset={"text-preset-7"}>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-preset-7");
  });

  test("forward ref to the button element", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toBe("BUTTON");
  });
  test("renders Button with dynamic style", () => {
    const dynamicStyle = {
      "--height": "32px ",
      "--width": "96px",
      fontSize: "12px",
      borderRadius: "4px",
    };
    render(
      <Button style={dynamicStyle} typographyPreset={"text-preset-7"}>
        Dynamic Button
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveStyle("--width: 96px");
    expect(button).toHaveStyle("font-size: 12px");
    expect(button).toHaveClass("text-preset-7");
  });
});

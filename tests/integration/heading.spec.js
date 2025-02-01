import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Heading } from "../../src/components/Heading/Heading";
import * as useWindowWidthHook from "../../src/hooks/useWindowWidth"; // Import mockowany hook

describe("Heading component", () => {
  beforeEach(() => {
    jest.spyOn(useWindowWidthHook, "useWindowWidth");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const mockEmail = "grzybowski_p@wp.pl";
  const mockFullName = "Piotr Grzybowski";

  test("renders initial mode with default heading and subheading", () => {
    useWindowWidthHook.useWindowWidth.mockReturnValue(1024);
    render(<Heading mode="initial" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "Your Journey to Coding Conf 2025 Starts Here!"
    );

    const subheading = screen.getByText(
      "Secure your spot at next year's biggest coding conference."
    );
    expect(subheading).toBeInTheDocument();
  });

  test("renders submited mode with personalized heading and subheading", () => {
    useWindowWidthHook.useWindowWidth.mockReturnValue(1024);
    render(<Heading mode="submited" email={mockEmail} name={mockFullName} />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(
      "Congrats, Piotr Grzybowski! Your ticket is ready."
    );

    const subheading = screen.getByText(
      (content, element) =>
        element.tagName === "P" &&
        content.includes("We've emailed your ticket to")
    );
    expect(subheading).toHaveTextContent("grzybowski_p@wp.pl");
  });

  test("applies correct typography presets for mobile width", () => {
    useWindowWidthHook.useWindowWidth.mockReturnValue(500);
    render(<Heading mode="initial" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveClass("text-preset-1_mobile");

    const subheading = screen.getByText(
      "Secure your spot at next year's biggest coding conference."
    );
    expect(subheading).toHaveClass("text-preset-4mobile");
  });

  test("applies correct typography presets for desktop width", () => {
    useWindowWidthHook.useWindowWidth.mockReturnValue(1025);
    render(<Heading mode="initial" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading.classList.contains("text-preset-1"));

    const subheading = screen.getByText(
      "Secure your spot at next year's biggest coding conference."
    );
    expect(subheading.classList.contains("text-preset-4"));
  });
});

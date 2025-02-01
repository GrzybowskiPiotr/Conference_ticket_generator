import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Ticket } from "../../src/components/Ticket/TIcket";
import { formContext } from "../../src/contexts/formContext";
import { useFileReader } from "../../src/hooks/useFileReader.js";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

jest.mock("../../src/hooks/useFileReader", () => ({
  useFileReader: jest.fn(),
}));
test("Does component renders properly", () => {
  const mockFormData = {
    FullName: "John Doe",
    GitHubUserName: "jonhdoe",
    avatar: "mockAvatarFile",
  };

  require("react").useContext.mockReturnValue([mockFormData]);

  useFileReader.mockReturnValue({ preview: "mockedPreviewUrl" });

  render(<Ticket />);

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("jonhdoe")).toBeInTheDocument();
  expect(screen.getByAltText("Avatar preview")).toHaveAttribute(
    "src",
    "mockedPreviewUrl"
  );
});

const localStorageMock = (() => {
  let storage = {};
  return {
    getItem: (key) => storage[key] || null,
    setItem: (key, value) => (storage[key] = value.toString()),
    clear: () => (storage = {}),
    removeItem: (key) => delete storage[key],
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

global.crypto = {
  getRandomValues: (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
    }
    return arr;
  },
};

describe("Ticket Component - Ticket Number Generation", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Generates a ticket number correctly", () => {
    render(<Ticket />);
    const ticketNumber = screen.getByText(/#/);
    expect(ticketNumber).toBeInTheDocument();
  });

  test("Generates unique ticket number on re-render", () => {
    render(<Ticket />);

    localStorage.clear();

    render(<Ticket />);
    const ticketsNumbers = [];
    const tickets = screen.getAllByTestId("ticket-number");
    tickets.forEach((element) => {
      ticketsNumbers.push(element.textContent);
    });
    expect(ticketsNumbers[0]).not.toBe(ticketsNumbers[1]);
  });

  test("Ticket number is stored in localStorage and remains the same after re-render", () => {
    localStorage.tickets = "";
    render(<Ticket />);
    const ticketNumber = screen.getByTestId("ticket-number").textContent;

    expect(localStorage.tickets).toContain(ticketNumber);

    render(<Ticket />);
    const ticketsNumbers = [];
    const tickets = screen.getAllByTestId("ticket-number");
    tickets.forEach((element) => {
      ticketsNumbers.push(element.textContent);
    });
    expect(localStorage.tickets).toContain(ticketsNumbers[0]);
    expect(localStorage.tickets).toContain(ticketsNumbers[1]);
  });
});

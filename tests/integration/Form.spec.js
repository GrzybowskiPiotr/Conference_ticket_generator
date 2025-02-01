import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Form } from "../../src/components/Form/Form";
import { formContext } from "../../src/contexts/formContext";

test("Form render test", () => {
  const mockFormContextValue = [{ name: "test" }, jest.fn()];

  render(
    <formContext.Provider value={mockFormContextValue}>
      <Form />
    </formContext.Provider>
  );

  const renderedForm = screen.getByTestId("form");
  expect(renderedForm).toBeInTheDocument();

  const FullNameInput = screen.getByLabelText("Full Name");
  expect(renderedForm).toContainElement(FullNameInput);

  const submitButton = screen.getByText("Generate My Ticket");
  expect(renderedForm).toContainElement(submitButton);
});

import "@testing-library/jest-dom";
import { TicketRow } from "../../src/components/TicetRow/TicketRow";
import { render, screen } from "@testing-library/react";

const mockImg = { src: "testSrc", alt: "testAlt" };
test("is ticket row properly pass mode isLogo", () => {
  render(
    <TicketRow
      //   firstParagraph={"first test paragraph"}
      isLogo={false}
      img={mockImg}
    />
  );
  const image = screen.getByAltText("testAlt");
  expect(image).toHaveClass("img");
});

test("Does ticket row properly sets src and alt atributtes", () => {
  render(<TicketRow isLogo={false} img={mockImg} />);
  const image = screen.getByRole("img");
  expect(image).toHaveAttribute("src", "testSrc");
  expect(image).toHaveAttribute("alt", "testAlt");
});

test("Does component sets properly classes", () => {
  render(
    <TicketRow
      isLogo={false}
      img={mockImg}
      firstParagraph={"test"}
      firstParagraphTypoPreset={"testPreset"}
      secondParagraphe={"test2"}
      secondParagrapheTypoPreset={"testPreset2"}
    />
  );
  const firstParagraph = screen.getByText("test");
  const secondParagraphe = screen.getByText("test2");
  expect(firstParagraph).toHaveClass("testPreset");
  expect(secondParagraphe).toHaveClass("testPreset2");
});

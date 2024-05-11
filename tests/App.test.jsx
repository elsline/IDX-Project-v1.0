/* eslint-disable no-unused-vars */
import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import Welcome from "../src/components/Welcome";

// describe("count file", () => {
//   test("Count Number ", () => {
//     render(<Welcome />);
//     const counter = screen.getByTestId("countNumber");
//     expect(counter.innerHTML).toMatch("0");
//   });
//   test("Count up ", () => {
//     render(<Welcome />);
//     const counter = screen.getByTestId("countNumber");
//     const up = screen.getByTestId("main");
//     expect(counter).toHaveTextContent("0");
//     fireEvent.click(up);
//     expect(counter.innerHTML).toMatch("1");
//   });
//   test("Count down ", () => {
//     render(<Welcome />);
//     const counter = screen.getByTestId("countNumber");
//     const down = screen.getByTestId("sec");
//     expect(counter).toHaveTextContent("0");
//     fireEvent.click(down);
//     expect(counter.innerHTML).toMatch("-1");
//   });
// });

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tab from "../Tab";

describe("Tab tests", () => {
  let onClickMock;
  const text = "tab"
  let tabComponent;
  
  beforeEach(() => {
    onClickMock = jest.fn();
    tabComponent = render(
      <Tab onClick={onClickMock}>{text}</Tab>
    );
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.queryByText(text));
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});

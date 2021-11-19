import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import AttentionBox from "../AttentionBox";


const renderComponent = props => {
  return render(<AttentionBox {...props} />);
};

describe("AttentionBox tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});

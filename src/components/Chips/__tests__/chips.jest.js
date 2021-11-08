import React from "react";
import renderer from "react-test-renderer";
import Chips from "../Chips";

describe("Chips", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Chips />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with color", () => {
      const tree = renderer.create(<Chips color={Chips.colors.NEGATIVE} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    
    it("renders correctly disabled chip", () => {
      const tree = renderer.create(<Chips disabled={true} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly without close button", () => {
      const tree = renderer.create(<Chips readOnly={true} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with text", () => {
      const tree = renderer.create(<Chips label="text" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });
});

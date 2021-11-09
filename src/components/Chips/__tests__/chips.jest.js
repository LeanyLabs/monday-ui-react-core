import React from "react";
import Chips from "../Chips";
import { render, fireEvent, screen } from "@testing-library/react";
import { sinon, expect as sinonExpect } from "../../../test/test-helpers";
import renderer from "react-test-renderer";
import { Calendar } from "../../Icon/Icons";

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

    // To Do
    it.skip("renders correctly with right icon ", () => {
      const tree = renderer.create(<Chips rightIcon={Calendar} readOnly />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Integration Tests", () => { 
    const lable = "Chip";
    const className = "test-class";
    let onDeletedStub;
    let chipComponent;
    beforeEach(() => {
      onDeletedStub = sinon.stub();
      chipComponent = render(
        <Chips className={className} onDelete={onDeletedStub} label={lable}  />
      );
    });

    it("should call the click callback when clicked", () => {
      fireEvent.click(screen.queryByRole('button'));
      sinonExpect(onDeletedStub).to.be.calledOnce;
    })

    it("should not have close icon when read only", () => {
      const { container, rerender } = chipComponent;
      rerender (<Chips readOnly />);
      expect(container.firstChild.classList.contains('with-close')).toBeFalsy();
    })

    it("should not have close icon when disabled", () => {
      const { container, rerender } = chipComponent;
      rerender (<Chips disabled />);
      expect(container.firstChild.classList.contains('with-close')).toBeFalsy();
    })
  });
});

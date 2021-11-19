import React from "react";
import renderer from "react-test-renderer";
import Toast from "../Toast";

describe("Toast renders correctly", () => {
  it("renders correctly (renders nothing) with empty props", () => {
    const tree = renderer.create(<Toast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders nothing when open is false", () => {
    const tree = renderer.create(<Toast open={false}>Something Happened</Toast>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders toast when open is true", () => {
    const tree = renderer.create(<Toast open={true}>Something Happened</Toast>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("don't renders close button if closeable=false", () => {
    const tree = renderer
      .create(
        <Toast open={true} closeable={false}>
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with button", () => {
    const tree = renderer
      .create(
        <Toast open={true} actions={[{ type: Toast.actionTypes.BUTTON, content: "Undo 5" }]}>
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with link", () => {
    const tree = renderer
      .create(
        <Toast
          open={true}
          actions={[{ type: Toast.actionTypes.LINK, text: "Lorem ipsum", href: "https://monday.com" }]}
        >
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with button and link", () => {
    const tree = renderer
      .create(
        <Toast
          open={true}
          actions={[
            { type: Toast.actionTypes.BUTTON, content: "Undo 5" },
            { type: Toast.actionTypes.LINK, text: "Lorem ipsum", href: "https://monday.com" }
          ]}
        >
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
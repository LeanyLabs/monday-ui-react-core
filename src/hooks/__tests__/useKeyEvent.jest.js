import React from "react";
import { renderHook, cleanup, act, waitFor } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import useKeyEvent from "../useKeyEvent";

describe("useKeyEvent", () => {
  let element;
  let callbackStub;
  describe("single key", () => {
    const keys = ["Enter"];
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() =>
        useKeyEvent({
          keys,
          keyEventName: "keyup",
          ref: { current: element },
          callback: callbackStub
        })
      );
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it(`should call the callback with the ${keys[0]} key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should not call the callback with a different key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: "Escape"
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(0);
    });

    it("should not call on keyDown", () => {
      act(() => {
        fireEvent.keyDown(element, {
          key: keys[0]
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(0);
    });
  });

  describe("multiple keys", () => {
    const keys = ["Enter", "Esc", "Escape"];
    beforeEach(() => {
      callbackStub = jest.fn();
      element = document.createElement("div");
      document.body.appendChild(element);
      renderHook(() => {
        useKeyEvent({
          keys,
          keyEventName: "keyup",
          ref: { current: element },
          callback: callbackStub
        });
      });
    });

    afterEach(() => {
      element.remove();
      cleanup();
    });

    it(`should not call the callback with the ${keys[0]} key`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[0]
        });
      });
      expect(callbackStub.mock.calls.length).toEqual(1);
    });

    it(`should call the callback with a different key - ${keys[1]}`, () => {
      act(() => {
        fireEvent.keyUp(element, {
          key: keys[1]
        });
      });

      expect(callbackStub.mock.calls.length).toEqual(1);
    });
  });
});

import { useMemo } from "react";
import { ColorDescription } from "../color-description/color-description";
import { Frame } from "../frame/frame";
import { colorsHashMap } from "../../../general-stories/colors/colors-vars-map";

const colorsWithBorder = new Set(["text-color-on-inverted", "text-color-on-primary"]);

export const ColorsDescription = ({ colorNames }) => {
  const descriptions = useMemo(
    () =>
      colorNames.map(color => (
        <ColorDescription
          colorName={color}
          description={colorsHashMap.get(color)}
          withBorder={colorsWithBorder.has(color)}
        />
      )),
    [colorNames]
  );
  return <Frame>{descriptions}</Frame>;
};

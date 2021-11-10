import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import TooltipLineWrapper from "../../../../components/Tooltip/__stories__/TooltipLineWrapper";

export const TooltipDescription = () => {
  const component = useMemo(() => <TooltipLineWrapper />, []);
  return (
    <RelatedComponent
      component={component}
      title="Tooltip"
      description="Displays information related to an element over it."
    />
  );
};

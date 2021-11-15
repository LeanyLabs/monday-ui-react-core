import { SplitButtonDescription } from "./descriptions/split-button-description";
import { ButtonGroupDescription } from "./descriptions/button-group-description";
import { CheckboxDescription } from "./descriptions/checkbox-description";
import { RadioButtonDescription } from "./descriptions/radio-button-description";
import { LabelDescription } from "./descriptions/label-description";
import { CounterDescription } from "./descriptions/counter-description";
import { ChipsDescription } from "./descriptions/chips-description";
import { TooltipDescription } from "./descriptions/tooltip-description";

export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";
export const LABEL = "label";
export const CHECKBOX = "checkbox";
export const RADIO_BUTTON = "radio-button";
export const COUNTER = "counter";
export const CHIP = "chips";
export const TOOLTIP = "tooltip";

export const descriptionTypesMap = new Map();

descriptionTypesMap.set(SPLIT_BUTTON, <SplitButtonDescription />);
descriptionTypesMap.set(BUTTON_GROUP, <ButtonGroupDescription />);
descriptionTypesMap.set(LABEL, <LabelDescription />);
descriptionTypesMap.set(CHECKBOX, <CheckboxDescription />);
descriptionTypesMap.set(RADIO_BUTTON, <RadioButtonDescription />);
descriptionTypesMap.set(COUNTER, <CounterDescription />);
descriptionTypesMap.set(CHIP, <ChipsDescription />);
descriptionTypesMap.set(TOOLTIP, <TooltipDescription />);

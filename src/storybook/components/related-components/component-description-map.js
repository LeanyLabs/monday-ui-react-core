import { SplitButtonDescription } from "./descriptions/split-button-description";
import { ButtonGroupDescription } from "./descriptions/button-group-description";
import { CheckboxDescription } from "./descriptions/checkbox-description";
import { RadioButtonDescription } from "./descriptions/radio-button-description";
import { LabelDescription } from "./descriptions/label-description";

export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";
export const LABEL = "label";
export const SPLIT_BUTTON = "split-button";
export const BUTTON_GROUP = "button-group";
export const CHECKBOX = "checkbox";
export const RADIO_BUTTON = "radio-button";

export const descriptionTypesMap = new Map();

descriptionTypesMap.set(SPLIT_BUTTON, <SplitButtonDescription />);
descriptionTypesMap.set(BUTTON_GROUP, <ButtonGroupDescription />);
descriptionTypesMap.set(LABEL, <LabelDescription />);
descriptionTypesMap.set(CHECKBOX, <CheckboxDescription />);
descriptionTypesMap.set(RADIO_BUTTON, <RadioButtonDescription />);

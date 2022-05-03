import React from "react";
import { ColorInput } from "../color/ColorInput";
import { Color } from "../../util/Color";
import { MIXED } from "../../util/Mixed";

export const CSSColorInput: React.FC<{
  title?: string;
  placeholder?: string;
  value?: string | typeof MIXED;
  onChange?: (value?: string) => void;
  onChangeEnd?: (value?: string) => void;
}> = ({ title, placeholder, value, onChange, onChangeEnd }) => {
  const color = typeof value === "string" ? Color.fromCSS(value) : undefined;

  return (
    <ColorInput
      color={color}
      text={value}
      title={title}
      placeholder={placeholder}
      onChangeColor={(color) => onChange?.(color?.toString())}
      onChangeEndColor={(color) => onChangeEnd?.(color?.toString())}
      onChangeText={(text) => {
        if (!text) {
          onChange?.(undefined);
          onChangeEnd?.(undefined);
          return true;
        }
        const color = Color.fromCSS(text);
        if (!color) {
          return false;
        }
        onChange?.(text);
        onChangeEnd?.(text);
        return true;
      }}
    />
  );
};

import React, { CSSProperties } from 'react';
import { StyleProp } from 'react-native';

export function SandwichMenuSVG({ style }: SandwichMenuSVGProps) {
  return (
    <svg style={style} viewBox="0 0 100 80" width="1em" height="1em" color="currentColor">
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  );
}

type SandwichMenuSVGProps = {
  style: CSSProperties,
}
import { createBox } from "@dessert-box/react";
import type { ComponentProps } from "react";

import { themeSprinkles } from "./sprinkles.css";

export const Box = createBox({ atoms: themeSprinkles });
console.log(themeSprinkles);

export type BoxProps = ComponentProps<typeof Box>;

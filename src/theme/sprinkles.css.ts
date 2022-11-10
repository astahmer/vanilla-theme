// import { createSprinkles } from "@vanilla-extract/sprinkles";
import { createRainbowSprinkles } from "rainbow-sprinkles";

import { interactiveProperties, responsiveProperties, unresponsiveProperties } from "./base.css";
import { colorStyles } from "./colors.css";
import { spacingStyles } from "./spacing.css";

export const themeSprinkles = createRainbowSprinkles(
    unresponsiveProperties,
    responsiveProperties,
    interactiveProperties,
    spacingStyles,
    colorStyles
);

export type ThemeSprinkles = Parameters<typeof themeSprinkles>[0];

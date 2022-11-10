import { createSprinkles } from "@vanilla-extract/sprinkles";

import { statefulProperties, responsiveProperties, staticProperties } from "./base.css";
import { colorStyles } from "./colors.css";
import { spacingStyles } from "./spacing.css";

export const themeSprinkles = createSprinkles(
    staticProperties,
    responsiveProperties,
    statefulProperties,
    spacingStyles,
    colorStyles
);

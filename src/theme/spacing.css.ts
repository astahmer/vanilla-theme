// import { defineProperties } from "@vanilla-extract/sprinkles";
import { defineProperties } from "rainbow-sprinkles";

import { theme } from "./vars";

export const space = theme.space as Record<keyof typeof theme.space | `${keyof typeof theme.space}`, string>;

export type Space = keyof typeof space;

export const spacingStyles = defineProperties({
    staticProperties: {
        gap: space,
        rowGap: space,
        columnGap: space,
        padding: space,
        paddingTop: space,
        paddingBottom: space,
        paddingLeft: space,
        paddingRight: space,
        paddingInlineStart: space,
        paddingInlineEnd: space,
        margin: space,
        marginTop: space,
        marginBottom: space,
        marginLeft: space,
        marginRight: space,
        marginInlineStart: space,
        marginInlineEnd: space,
        // border: theme.borders,
        // borderWidth: theme.borders,
        // borderTop: theme.borders,
        // borderBottom: theme.borders,
        // borderLeft: theme.borders,
        // borderRight: theme.borders,
        // borderRadius: theme.radii,
        // outline: theme.borders,
    },
    shorthands: {
        m: ["margin"],
        mt: ["marginTop"],
        mr: ["marginRight"],
        mb: ["marginBottom"],
        ml: ["marginLeft"],
        mx: ["marginLeft", "marginRight"],
        my: ["marginTop", "marginBottom"],
        ms: ["marginInlineStart"],
        me: ["marginInlineEnd"],
        p: ["padding"],
        marginX: ["marginLeft", "marginRight"],
        marginY: ["marginTop", "marginBottom"],
        pt: ["paddingTop"],
        pr: ["paddingRight"],
        pb: ["paddingBottom"],
        pl: ["paddingLeft"],
        px: ["paddingLeft", "paddingRight"],
        paddingX: ["paddingLeft", "paddingRight"],
        paddingY: ["paddingTop", "paddingBottom"],
        ps: ["paddingInlineStart"],
        pe: ["paddingInlineEnd"],
        py: ["paddingTop", "paddingBottom"],
        // bw: ["borderWidth"],
        // bx: ["borderLeft", "borderRight"],
        // borderX: ["borderLeft", "borderRight"],
        // by: ["borderTop", "borderBottom"],
        // borderY: ["borderTop", "borderBottom"],
    },
});

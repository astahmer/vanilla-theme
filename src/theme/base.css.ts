import { defineProperties } from "@vanilla-extract/sprinkles";
import { theme } from "./vars";

const absPos = ["auto", 0, "0", "-50%", "0%", "50%", "100%"] as const;
const size = ["auto", "0", "0%", "25%", "50%", "75%", "100%", "100vh", "100vw"] as const;
const flexAlign = ["stretch", "flex-start", "center", "flex-end", "space-around", "space-between"] as const;

const screens = {
    mobile: { max: "599px" },
    tablet: { min: "600px", max: "899px" },
    "gt-tablet": { min: "600px" },
    "lt-small-desktop": { max: "899px" },
    "small-desktop": { min: "900px", max: "1199px" },
    "gt-small-desktop": { min: "900px" },
    "lt-medium-desktop": { max: "1199px" },
    "medium-desktop": { min: "1200px", max: "1799px" },
    "gt-medium-desktop": { min: "1200px" },
    "lt-large-desktop": { max: "1799px" },
    "large-desktop": { min: "1800px" },
} as const;
type TwResponsiveBreakpoints = keyof typeof screens;
type TwResponsiveBreakpointsMap = Record<TwResponsiveBreakpoints, { min?: string; max?: string }>;

// https://github.com/seek-oss/vanilla-extract/blob/2b0abcd646cbbc8836301822c27c10f393870f4a/packages/sprinkles/src/index.ts
type Condition = {
    "@media"?: string;
    "@supports"?: string;
    selector?: string;
};

const twBreakpointsToAppBreakpoints = (breakpointsMap: TwResponsiveBreakpointsMap) =>
    Object.fromEntries(
        Object.entries(breakpointsMap).map(([key, { min, max }]) => [
            key,
            {
                "@media": ["screen", min ? `(min-width: ${min})` : "", max ? `(max-width: ${max})` : ""]
                    .filter(Boolean)
                    .join(" and "),
            },
        ])
    ) as Record<TwResponsiveBreakpoints, Condition>;

export const responsiveProperties = defineProperties({
    conditions: { ...twBreakpointsToAppBreakpoints(screens), default: {} },
    defaultCondition: "default",
    // defaultCondition: "medium-desktop",
    responsiveArray: ["mobile", "tablet", "small-desktop", "medium-desktop"],
    properties: {
        fontFamily: theme.typography.fonts,
        fontSize: theme.typography.fontSizes,
        fontWeight: theme.typography.fontWeights,
        zIndex: theme.zIndices,
        position: ["absolute", "relative", "fixed", "sticky"],
        display: ["none", "flex", "inline-flex", "block", "inline"],
        flexDirection: ["row", "column", "row-reverse"],
        flexShrink: [0, 1] as const,
        flexGrow: [0, 1] as const,
        flex: [0, 1] as const,
        flexWrap: ["wrap", "nowrap", "revert", "wrap-reverse"],
        justifyContent: flexAlign,
        justifySelf: flexAlign,
        alignItems: flexAlign,
        alignSelf: flexAlign,
        top: absPos,
        bottom: absPos,
        left: absPos,
        right: absPos,
        inset: absPos,
        width: size,
        minWidth: size,
        maxWidth: size,
        height: size,
        minHeight: size,
        maxHeight: size,
        textAlign: ["inherit", "left", "center", "right"],
        textTransform: ["inherit", "uppercase", "lowercase", "capitalize", "none"],
        whiteSpace: ["nowrap", "unset"],
        overflow: ["auto", "hidden", "scroll", "visible"],
        visibility: ["unset", "hidden", "visible"],
    },
    // Inspired from https://chakra-ui.com/docs/features/style-props
    shorthands: {
        d: ["display"],
        pos: ["position"],
        t: ["top"],
        b: ["bottom"],
        l: ["left"],
        r: ["right"],
        boxSize: ["width", "height"],
        w: ["width"],
        h: ["height"],
        placeItems: ["justifyContent", "alignItems"],
        ta: ["textAlign"],
        tt: ["textTransform"],
        fs: ["fontSize"],
        fw: ["fontWeight"],
    },
});

export const staticProperties = defineProperties({
    properties: {
        transition: ["none", "all 0.1s ease"],
    },
});

/** https://chakra-ui.com/docs/styled-system/style-props#pseudo */
export const statefulProperties = defineProperties({
    conditions: {
        default: {},
        focus: { selector: "&:focus,&[data-focus]" },
        hover: { selector: "&:hover,&[data-hover]" },
        disabled: { selector: "&[disabled],&[aria-disabled=true],&[data-disabled]" },
        readonly: { selector: "&[aria-readonly=true],&[readonly],&[data-readonly]" },
        checked: { selector: "&[aria-checked=true],&[data-checked]" },
        indeterminate: { selector: "&:indeterminate,&[aria-checked=mixed],&[data-indeterminate]" },
    },
    defaultCondition: "default",
    properties: {
        boxShadow: theme.shadows,
        textShadow: theme.shadows,
        opacity: {
            "0": "0",
            disabled: "var(--vtmn-opacity_disabled-state)",
            "0.4": "0.6",
            "0.6": "0.6",
            "1": "1",
        },
        cursor: ["inherit", "pointer", "not-allowed", "initial", "wait", "col-resize"],
        pointerEvents: ["inherit", "all", "none"],
        userSelect: ["inherit", "none", "text", "all"],
    },
});

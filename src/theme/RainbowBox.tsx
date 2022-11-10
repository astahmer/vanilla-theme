import type { ComponentPropsWithoutRef, ElementType } from "react";
import { themeSprinkles, ThemeSprinkles } from "./sprinkles.css";

type PolymorphicComponentProps<TType extends ElementType, Props> = {
    as?: TType;
} & Omit<ComponentPropsWithoutRef<TType>, keyof Props> &
    Props;

export type RainbowBoxProps<TType extends ElementType> = PolymorphicComponentProps<TType, ThemeSprinkles>;

// export type OriginalRainbowBoxProps<C extends ElementType> = ThemeSprinkles &
//     ComponentPropsWithoutRef<C> & {
//         as?: C;
//     };

export const RainbowBox = <C extends ElementType = "div">({ as, children, ...props }: RainbowBoxProps<C>) => {
    const Component = as ?? "div";
    const { className, style, otherProps } = themeSprinkles(props);

    return (
        <Component className={className} style={style} {...otherProps}>
            {children}
        </Component>
    );
};

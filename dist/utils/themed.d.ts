export default function themed(modesOrVariant: {
    light: string;
    dark: string;
}): (props: import('../types').CustomThemeProps | import('../types').NoThemeProps | undefined) => string;

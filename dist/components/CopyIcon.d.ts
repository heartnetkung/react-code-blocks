/// <reference types="react" />
export interface IconProps {
    size: number | string;
    color: any;
    [x: string]: any;
}
export default function ({ size, color, copied, ...props }: IconProps & {
    copied: boolean;
}): JSX.Element;

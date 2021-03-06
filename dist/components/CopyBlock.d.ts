/// <reference types="react" />
import { Theme } from '../types';
export interface Props {
    /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
    theme: Theme;
    /** The code to be formatted */
    text: string;
    /** If true, the component render a `CodeBlock` instead of a `Code` component */
    codeBlock: boolean;
    /** This is a prop used internally by the `CopyBlock`'s button component to toggle the icon to a success icon */
    copied: boolean;
    /** The onCopy function is called if the copy icon is clicked. This enables you to add a custom message that the code block is copied. */
    onCopy: Function;
    /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */
    language: string;
    customStyle?: {};
    /** I know it's lazy, but I'll extend the interfaces later */
    [x: string]: any;
}
export default function CopyBlock({ theme, text, codeBlock, customStyle, onCopy, ...rest }: Props): JSX.Element;

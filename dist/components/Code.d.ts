import { PureComponent } from 'react';
import { Theme } from '../types';
export interface CodeProps {
    /** The style object to apply to code */
    codeStyle?: {};
    /** The element or custom react component to use in place of the default code tag */
    codeTagProps?: {};
    /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */
    language: string;
    /** The style object that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles. */
    customStyle?: {};
    /** The style object to apply to the container that shows line number */
    lineNumberContainerStyle?: {};
    /** The element or custom react component to use in place of the default span tag */
    preTag: Node | string;
    /** Indicates whether or not to show line numbers */
    showLineNumbers: boolean;
    /**For choosing starting line**/
    startingLineNumber: number;
    /** The code to be formatted */
    text: string;
    /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
    theme?: Theme;
    /**
     * Lines to highlight comma delimited.
     * Example uses:
  
     * - To highlight one line `highlight="3"`
     * - To highlight a group of lines `highlight="1-5"`
     * - To highlight multiple groups `highlight="1-5,7,10,15-20"`
     */
    highlight: string;
}
export default class Code extends PureComponent<CodeProps, {}> {
    _isMounted: boolean;
    static defaultProps: {
        theme: {};
        showLineNumbers: boolean;
        startingLineNumber: number;
        lineNumberContainerStyle: {};
        codeTagProps: {};
        preTag: string;
        highlight: string;
        customStyle: {};
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    getLineOpacity(lineNumber: number): 1 | 0.3;
    render(): JSX.Element;
}

import { PureComponent } from 'react';
import { Theme } from '../types';
export interface CodeBlockProps {
    /** The code to be formatted */
    text: string;
    /** The language in which the code is written. [See LANGUAGES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/LANGUAGES.md) */
    language: string;
    /** Indicates whether or not to show line numbers */
    showLineNumbers?: boolean;
    /**startingLineNumber - if showLineNumbers is enabled the line numbering will start from here.**/
    startingLineNumber: number;
    /** A custom theme to be applied, implements the `CodeBlockTheme` interface. You can also pass pass a precomposed theme into here. For available themes. [See THEMES.md](https://github.com/rajinwonderland/react-code-blocks/blob/master/THEMES.md) */
    theme?: Theme;
    /** The element or custom react component to use in place of the default `span` tag */
    lineNumberContainerStyle?: {};
    /** The style object to apply to the `CodeBlock` text directly i.e `fontSize` and such */
    codeBlockStyle?: {};
    /** The style object that accesses the style parameter on the `codeTagProps` property on the `Code` component */
    codeContainerStyle?: {};
    /** The style object that will be combined with the top level style on the pre tag, styles here will overwrite earlier styles. */
    customStyle?: {};
    /**
     * Lines to highlight comma delimited.
     * Example uses:
  
     * - To highlight one line `highlight="3"`
     * - To highlight a group of lines `highlight="1-5"`
     * - To highlight multiple groups `highlight="1-5,7,10,15-20"`
     */
    highlight?: string;
}
export default class CodeBlock extends PureComponent<CodeBlockProps, {}> {
    _isMounted: boolean;
    static displayName: string;
    static defaultProps: {
        showLineNumbers: boolean;
        startingLineNumber: number;
        language: string;
        theme: {};
        highlight: string;
        lineNumberContainerStyle: {};
        customStyle: {};
        codeBlockStyle: {};
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleCopy: (event: any) => void;
    render(): JSX.Element;
}

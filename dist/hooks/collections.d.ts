import React, { ReactNode } from 'react';
export declare const getId: () => string;
export declare const hasChild: (children: ReactNode | undefined, child: React.ElementType) => boolean;
export declare const pickChild: (children: ReactNode | undefined, targetChild: React.ElementType) => [ReactNode | undefined, ReactNode | undefined];
export declare const pickChildByProps: (children: ReactNode | undefined, key: string, value: any) => [ReactNode | undefined, ReactNode | undefined];
export declare const pickChildrenFirst: (children: ReactNode | undefined) => ReactNode | undefined;
export declare const setChildrenProps: (children: ReactNode | undefined, props?: object, targetComponents?: Array<React.ElementType>) => ReactNode | undefined;
export declare const setChildrenIndex: (children: ReactNode | undefined, targetComponents?: Array<React.ElementType>) => ReactNode | undefined;
export declare const getReactNode: (node?: React.ReactNode | (() => React.ReactNode)) => React.ReactNode;

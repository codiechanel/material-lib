import * as React from "react";
declare class Common {
    context: null;
    getContext(): null;
    createTheme(userTheme: any): any;
    createProvider(): {
        new (props: Readonly<any>): {
            render(): JSX.Element;
            setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<any>;
            state: Readonly<any>;
            context: any;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
        new (props: any, context?: any): {
            render(): JSX.Element;
            setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
            forceUpdate(callBack?: (() => void) | undefined): void;
            readonly props: Readonly<{
                children?: React.ReactNode;
            }> & Readonly<any>;
            state: Readonly<any>;
            context: any;
            refs: {
                [key: string]: React.ReactInstance;
            };
        };
    };
}
declare let common: Common;
export default common;

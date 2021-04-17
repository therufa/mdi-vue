export function ucFirst(str: any): any;
export function toName(str: any): any;
export function getAttrs(mdi: any, props_: any, attrs: any): {
    spanAttrs: any;
    svgAttrs: {
        fill: string;
        width: any;
        height: any;
        viewBox: any;
        xmlns: any;
    };
    pathAttrs: {
        d: any;
    };
};
export function getClass(props_: any, data: any): {
    [x: string]: boolean;
    [x: number]: boolean;
    'mdi-spin': boolean;
};
export function getInstall(renderer: any, versionDependentOpts?: {}): {
    install(app: any, { icons }: {
        icons: any;
    }): void;
};

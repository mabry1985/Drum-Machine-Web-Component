/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JmDrumMachinePad {
        "audioFileName": string;
        "title": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLJmDrumMachinePadElement extends Components.JmDrumMachinePad, HTMLStencilElement {
    }
    var HTMLJmDrumMachinePadElement: {
        prototype: HTMLJmDrumMachinePadElement;
        new (): HTMLJmDrumMachinePadElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "jm-drum-machine-pad": HTMLJmDrumMachinePadElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface JmDrumMachinePad {
        "audioFileName"?: string;
        "title"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "jm-drum-machine-pad": JmDrumMachinePad;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jm-drum-machine-pad": LocalJSX.JmDrumMachinePad & JSXBase.HTMLAttributes<HTMLJmDrumMachinePadElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
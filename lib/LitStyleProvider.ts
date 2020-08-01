import { CSSResult, unsafeCSS } from 'lit-element';
import { StyleProvider } from 'style-provider/create';

/**
 * Construct your own lit style provider with a custom fallback style object
 */
export class LitStyleProvider<T extends {}> extends StyleProvider<T, CSSResult> {
    constructor(fallback: T) {
        super(fallback, unsafeCSS);
    }
}

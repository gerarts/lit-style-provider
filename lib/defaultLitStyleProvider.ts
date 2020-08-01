import { defaultStyles, StyleObject } from './defaultStyles';
import { LitStyleProvider } from './LitStyleProvider';

// StyleProvider object
const styleProviderObject: LitStyleProvider<StyleObject> = new LitStyleProvider(defaultStyles);

// rootStyleProvider for use in the root component
export const rootStyleProvider: LitStyleProvider<StyleObject>['rootStyleProvider'] = styleProviderObject.rootStyleProvider;

// styleProvider to alter styles in child components
export const styleProvider: LitStyleProvider<StyleObject>['styleProvider'] = styleProviderObject.styleProvider;

/**
 * Typescript definition tests for d3/d3-format module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Format from '../../src/d3-format';

// ----------------------------------------------------------------------
// Preparatory Steps
// ----------------------------------------------------------------------

let num: number;

let formatFn: (n: number) => string;

let specifier: d3Format.FormatSpecifier;

let localeDef: d3Format.FormatLocaleDefinition;

let localeObj: d3Format.FormatLocaleObject;

// ----------------------------------------------------------------------
// Test Format and FormatPrefix
// ----------------------------------------------------------------------

formatFn = d3Format.format('.0%');

formatFn = d3Format.formatPrefix(',.0', 1e-6);

// ----------------------------------------------------------------------
// Test Format Specifier
// ----------------------------------------------------------------------

specifier = d3Format.formatSpecifier('.0%');

let fill: string = specifier.fill;
let align: string = specifier.align;
let sign: string = specifier.sign;
let symbol: string = specifier.symbol;
let zero: boolean = specifier.zero;
let width: number = specifier.width;
let comma: boolean = specifier.comma;
let precision: number = specifier.precision;
let type: string = specifier.type;

let formatString: string = specifier.toString();


// ----------------------------------------------------------------------
// Test Precision Suggestors
// ----------------------------------------------------------------------

num = d3Format.precisionFixed(0.0005);

num = d3Format.precisionPrefix(0.0005, 1000);

num = d3Format.precisionRound(0.0005, 3000);

// ----------------------------------------------------------------------
// Test Locale Definition
// ----------------------------------------------------------------------

let decimal: '.' | ',' = localeDef.decimal;
let thousands: '.' | ',' = localeDef.thousands;
let grouping: Array<number> = localeDef.grouping;
let currency: [string, string] = localeDef.currency;

localeDef = {
    decimal: ',',
    thousands: '.',
    grouping: [3],
    currency: ['EUR', '']
};

localeObj = d3Format.formatLocale(localeDef);

localeObj = d3Format.formatDefaultLocale(localeDef);

let formatFactory: (specifier: string)  => ((n: number) => string) = localeObj.format;
let formatPrefixFactory: (specifier: string, value: number)  => ((n: number) => string) = localeObj.formatPrefix;

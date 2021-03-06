//@flow
import { TEXT_FORMATS, DATE_FORMATS } from '@8base/utils';
import type { Format } from '@8base/utils';

export const FORMAT_PATTERN = {
  [TEXT_FORMATS.UNFORMATTED]: /.*/,
  [TEXT_FORMATS.NAME]: /.*/,
  [TEXT_FORMATS.ADDRESS]: /.*/,
  [TEXT_FORMATS.EMAIL]: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  [TEXT_FORMATS.PHONE]: /^(0|[1-9][0-9]{9})$/i,
  [TEXT_FORMATS.SSN]: /^(?!666|000|9\d{2})\d{3}[- ]{0,1}(?!00)\d{2}[- ]{0,1}(?!0{4})\d{4}$/,
  [TEXT_FORMATS.EIN]: /^\d{2}[- ]{0,1}\d{7}$/,
  [DATE_FORMATS.DATE]: /\d{4}-[01]\d-[0-3]\d/,
  [DATE_FORMATS.DATETIME]: /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
};

export const VALIDATION_ERROR = {
  IS_REQUIRED: (): string => 'Value is required',
  NOT_A_NUMBER: (): string => 'Value isn\'t a number',
  MAX_PRECISION: (maxPrecision: number): string => `Maximum allowed precision is ${maxPrecision}. It was exceeded.`,
  MIN_VALUE: (minValue: number): string => `Value is lower than minimum allowed value ${minValue}.`,
  MAX_VALUE: (maxValue: number): string => `Value is greater than maximum allowed value ${maxValue}.`,
  FORMAT: (format: Format): string => `Value doesn't match ${format} format.`,
  MAX_FIELD_SIZE: (maxFieldSize: number): string => `Maximum allowed field size is ${maxFieldSize}. It was exceeded.`,
  [TEXT_FORMATS.UNFORMATTED]: (): string => '',
  [TEXT_FORMATS.NAME]: (): string => '',
  [TEXT_FORMATS.ADDRESS]: (): string => '',
  [TEXT_FORMATS.EMAIL]: (): string => 'Invalid email.',
  [TEXT_FORMATS.PHONE]: (): string => 'Invalid phone number.',
  [TEXT_FORMATS.SSN]: (): string => 'Invalid Social Security Number.',
  [TEXT_FORMATS.EIN]: (): string => 'Invalid Employer Identification Number.',
  [DATE_FORMATS.DATE]: (): string => 'Invalid date.',
  [DATE_FORMATS.DATETIME]: (): string => 'Invalid datetime.',
};

export type ValidationError = $Values<typeof VALIDATION_ERROR>;

import i18next from 'i18next';

export { generateInvoice, generatePDFUPO } from './lib-public';
export { generateFA1 } from './lib-public/FA1-generator';
export { generateFA2 } from './lib-public/FA2-generator';
export { generateFA3 } from './lib-public/FA3-generator';
export { generateFARR } from './lib-public/FARR-generator';
export { generateNaglowekUPO } from './lib-public/generators/UPO4_3/Naglowek';
export { generateDokumentUPO } from './lib-public/generators/UPO4_3/Dokumenty';
export { generateStyle } from './shared/PDF-functions';
export * from './shared/enums/common.enum';

// Public types
export type { AdditionalDataTypes, FA2FakturaZaliczkowaData, FA3FakturaZaliczkowaData } from './lib-public/types/common.types';
export type { TaxSummaryTypes } from './lib-public/types/tax-summary.types';
export type * as FA1Types from './lib-public/types/fa1.types';
export type * as FA2Types from './lib-public/types/fa2.types';
export type * as FA3Types from './lib-public/types/fa3.types';
export type * as UPO42Types from './lib-public/types/upo-v4_2.types';
export type * as UPO43Types from './lib-public/types/upo-v4_3.types';

export { i18next };
export { initI18next } from './lib-public/i18n/i18n-init';

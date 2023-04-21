/**
 * Logger utility.
 *
 * @param {string} prefix
 */
export function getLogger(prefix: string): {
    debug: (...args: any[]) => void;
    error: (...args: any[]) => void;
    info: (...args: any[]) => void;
    log: (...args: any[]) => void;
    warn: (...args: any[]) => void;
};

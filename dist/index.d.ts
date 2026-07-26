export type LogLevel = 'info' | 'warn' | 'error' | 'debug';
export interface LoggerOptions {
    prefix?: string;
    enableTimestamp?: boolean;
}
export declare class Logger {
    private prefix;
    private enableTimestamp;
    constructor(options?: LoggerOptions);
    private format;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    debug(message: string): void;
}
//# sourceMappingURL=index.d.ts.map
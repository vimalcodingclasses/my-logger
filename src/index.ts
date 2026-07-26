export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export interface LoggerOptions {
    prefix?: string;
    enableTimestamp?: boolean;
}

export class Logger {
    private prefix: string;
    private enableTimestamp: boolean;

    constructor(options: LoggerOptions = {}) {
        this.prefix = options.prefix || 'LOG';
        this.enableTimestamp = options.enableTimestamp ?? true;
    }

    private format(level: LogLevel, message: string): string {
        const timestamp = this.enableTimestamp ? `[${new Date().toISOString()}]` : '';
        return `${timestamp} [${this.prefix}] [${level.toUpperCase()}]: ${message}`;
    }

    info(message: string): void {
        console.log(this.format('info', message));
    }

    warn(message: string): void {
        console.warn(this.format('warn', message));
    }

    error(message: string): void {
        console.error(this.format('error', message));
    }

    debug(message: string): void {
        console.debug(this.format('debug', message));
    }
}
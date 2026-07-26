"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    prefix;
    enableTimestamp;
    constructor(options = {}) {
        this.prefix = options.prefix || 'LOG';
        this.enableTimestamp = options.enableTimestamp ?? true;
    }
    format(level, message) {
        const timestamp = this.enableTimestamp ? `[${new Date().toISOString()}]` : '';
        return `${timestamp} [${this.prefix}] [${level.toUpperCase()}]: ${message}`;
    }
    info(message) {
        console.log(this.format('info', message));
    }
    warn(message) {
        console.warn(this.format('warn', message));
    }
    error(message) {
        console.error(this.format('error', message));
    }
    debug(message) {
        console.debug(this.format('debug', message));
    }
}
exports.Logger = Logger;

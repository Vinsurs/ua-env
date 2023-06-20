/// <reference types="node" />
import http from "http";
export declare function isWxWork(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;
export declare function isWx(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;
export declare function isQQ(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;
export declare function isMobile(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;
export declare function isPC(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;
export declare function isAndroid(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;
export declare function isIOS(UAOrHttpIncomingMessage: string | http.IncomingMessage): boolean;

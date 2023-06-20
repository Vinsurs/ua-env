import http from "http"
import { wxWorkRegEx, wxRegEx, qqRegEx, mobileRegEx, iosRegEx, androidRegEx } from "./matcher"

function getUaString(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    let ua = ""
    if (typeof UAOrHttpIncomingMessage === "string") {
        ua = UAOrHttpIncomingMessage
    } else if (typeof UAOrHttpIncomingMessage === "object" && UAOrHttpIncomingMessage !== null) {
        ua = UAOrHttpIncomingMessage.headers["user-agent"] || ""
    }
    return ua
}
export function isWxWork(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return wxWorkRegEx.test(getUaString(UAOrHttpIncomingMessage))
}
export function isWx(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return !isWxWork(UAOrHttpIncomingMessage) && wxRegEx.test(getUaString(UAOrHttpIncomingMessage))
}
export function isQQ(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return qqRegEx.test(getUaString(UAOrHttpIncomingMessage))
}
export function isMobile(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return mobileRegEx.test(getUaString(UAOrHttpIncomingMessage))
}
export function isPC(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return !isMobile(UAOrHttpIncomingMessage)
}
export function isAndroid(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return androidRegEx.test(getUaString(UAOrHttpIncomingMessage))
}
export function isIOS(UAOrHttpIncomingMessage: string | http.IncomingMessage) {
    return !isAndroid(UAOrHttpIncomingMessage) && iosRegEx.test(getUaString(UAOrHttpIncomingMessage))
}
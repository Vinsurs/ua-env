export function isBrowser() {
    return typeof window !== "undefined" && 
    typeof document !== "undefined" &&
    "document" in window && 
    typeof window.document === "object" &&
    window.document !== null
}
export function isServer() {
    return !isBrowser() &&
    typeof module === "object" &&
    module !== null &&
    typeof exports === "object" &&
    exports !== null &&
    "exports" in module &&
    typeof process !== "undefined"
}
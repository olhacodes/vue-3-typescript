interface FetchCountCallback {
    (count: number): void;
}

export default function fetchCount(callback: FetchCountCallback) { 
    callback(0)
}
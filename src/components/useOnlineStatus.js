import { useSyncExternalStore } from "react";

function subcribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);

    return() => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}

export function useOnlineStatus() {
    return useSyncExternalStore(
        subcribe,
        () => navigator.onLine,
        () => true
    );
}
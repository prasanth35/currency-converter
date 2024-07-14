/**
 * Utility functions for the application.
 */
export const utils = {
    /**
     * Throttles a function to prevent it from being called more frequently than the specified delay.
     * @param func - The function to throttle.
     * @param delay - The delay in milliseconds to throttle the function calls.
     * @returns A throttled version of the input function.
     */
    throttle: (func: (...args: any[]) => void, delay: number) => {
        let lastCall = 0;
        return (...args: any[]) => {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return func(...args);
        };
    },
};

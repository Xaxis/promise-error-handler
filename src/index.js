/**
 * This function can help create a pattern that replaces try/catch error handling since JavaScript promises
 * operate as an implied try/catch around the resolve/reject paradigm, whereby the promise 'catch' automatically
 * catches errors, throwing an exception which results in a rejected promise. This pattern can help produce more
 * reliable synchronous error handling especially around heavily asynchronous code, where traditional try/catch
 * operations can sometimes fail. Further, this pattern lends itself to improving the readability of code by creating
 * an enforced synchronous syntax, replacing the need for try/catch blocks.
 *
 * The final .catch not only catches explicit rejections, but also accidental errors in the handlers above.
 *
 * Another important fact is that reject() DOES NOT terminate control flow like a return statement does. In contrast
 * throw does terminate control flow.
 *
 * @param { Function|Promise } callback - If no promise is passed, expects function to use as 'resolve'
 * @param { Object } extendedError - Extend the error object when passed
 * @return { Promise }
 */
export function tryError(callback, extendedError) {
    let promise = null
    if (typeof callback === 'object' && typeof callback.then === 'function') {
        promise = callback
    } else {
        promise = new Promise(callback)
    }
    return promise
        .then((data) => [null, data])
        .catch((error) => {
            if (extendedError) {
                Object.assign(error, extendedError)
            }
            return [error]
        })
}

/*
 * Pure and Impure Functions
 *
 * Always returns the same thing.
 * Everything it returns is isolated from what it returns
 * independent of props passed to it.
 * produce side effects
 * creates a side effect outside its scope, it is accessible
 * but is not a action and accessible outside too
 * functions are predictable; however, they are impure functions
 *
 * (a, b) but a + b + c
 * c might change, that is an impure function
 */
const Functions = () => {

    return (
        <>
            <h1>This is a Test.</h1>
        </>
    )
}

export default Functions;
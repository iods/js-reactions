
/*
 *
 * Functional Components:
 * Pure functions, top to bottom.
 * Class components return what is in render.
 *
 * Functions and side=effects
 * Functions and pure-functions, impure functions and side effects
 */
const Functional = () => {
    /*
     * No Constructor
     * Takes some args, and returns something.
     * The args are the props of this component.
     * Classes are instantiated. Lifecycle methode, etc.
     * Stuff is continuing. Functional just runs when
     * they are asked and returns then done.
     */

    // do not go through lifecycles like class components
    return (
        <>
            <h1>This is a Test.</h1>
        </>
    )
}

export default Functional;
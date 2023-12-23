// import { useState } from "react";

import Card from "./Card";

/*
 * Props
 * Same as this.props
 * Params and args that are passed.
 *
 * implicit returns ()
 * explicit returns {}
 */
const CardListing = ({ golfers }) => (
    <section className="text-neutral-600">
        <div className="mx-auto px-5 py-12 md:px-12 lg:px-24 w-full relative items-center">
            <div className="grid grid-cols lg:grid-cols-4 mx-auto w-full gap-6">
                {golfers.map((golfer) => {
                    return (
                        <Card golfer={golfer} />
                    )
                })}
            </div>
        </div>
    </section>
)

export default CardListing;

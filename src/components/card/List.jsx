import { Component } from "react";

class List extends Component {

    render() {
        const { golfers } = this.props;

        const PHOTO_URL = 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,f_auto,g_face:center,h_268,q_auto,w_201/headshots_';

        return (
            <section>
                <div className="px-5 py-12 md:px-12 lg:px-24 mx-auto w-full relative items-center">
                    <div className="grid grid-cols-1 w-full lg:grid-cols-4 mx-auto gap-6">

                        {golfers.map((golfer) => (
                            <div key={golfer.PlayerID} className="p-6">
                                <img className="w-full md:h-36 lg:h-80 mb-6 object-cover object-center rounded-xl headshot" src={ PHOTO_URL + golfer.PgaTourPlayerID + `.png` } alt="Player Headshot" />
                                <div className="inline-flex justify-between w-full">
                                    <p className="mb-8 font-semibold text-sm text-green-600 uppercase leading-none tracking-normal">Country: {golfer.Country}</p>

                                    {golfer.Swings ? (
                                        <span className="text-sm leading-none text-neutral-600">Swings: {golfer.Swings}</span>
                                    ) : (
                                        <span className="text-sm leading-none text-neutral-600">Swings: N</span>
                                    )}
                                </div>
                                <p className="mx-auto mb-4 text-xl lg:text-2xl font-semibold leading-none tracking-tight text-neutral-600">{golfer.FirstName}<span className="flex text-2xl lg:text-3xl">{golfer.LastName}</span></p>

                                {golfer.College ? (
                                    <p className="inline-flex mt-2 lg:mb-0 font-semibold text-green-800 hover:text-neutral-600 leading-relaxed">College: {golfer.College}</p>
                                ) : (
                                    <p className="inline-flex mt-2 lg:mb-0 font-semibold text-green-800 hover:text-neutral-600 leading-relaxed">College: N/A</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default List;
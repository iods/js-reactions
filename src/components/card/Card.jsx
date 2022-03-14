

const Card = ({ golfer }) => {

    const PHOTO_URL = 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,f_auto,g_face:center,h_268,q_auto,w_201/headshots_';

    const { PlayerID, PgaTourPlayerID, Country, Swings, FirstName, LastName, College } = golfer;

    return (
        <div key={PlayerID} className="p-6">
            <img className="w-full md:h-36 lg:h-80 mb-6 object-cover object-center rounded-xl headshot" src={ PHOTO_URL + PgaTourPlayerID + `.png` } alt="Player Headshot" />
            <div className="inline-flex justify-between w-full">
                <p className="mb-8 font-semibold text-sm text-green-600 uppercase leading-none tracking-normal">Country: {Country}</p>

                {Swings ? (
                    <span className="text-sm leading-none text-neutral-600">Swings: {Swings}</span>
                ) : (
                    <span className="text-sm leading-none text-neutral-600">Swings: N</span>
                )}
            </div>
            <p className="mx-auto mb-4 text-xl lg:text-2xl font-semibold leading-none tracking-tight text-neutral-600">{FirstName}<span className="flex text-2xl lg:text-3xl">{LastName}</span></p>

            {College ? (
                <p className="inline-flex mt-2 lg:mb-0 font-semibold text-green-800 hover:text-neutral-600 leading-relaxed">College: {College}</p>
            ) : (
                <p className="inline-flex mt-2 lg:mb-0 font-semibold text-green-800 hover:text-neutral-600 leading-relaxed">College: N/A</p>
            )}
        </div>
    )
}

export default Card;
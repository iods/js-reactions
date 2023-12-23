import { Component } from "react";
import Card from "./Card";

class List extends Component {

    render() {
        const { golfers } = this.props;

        return (
            <section>
                <div className="px-5 py-12 md:px-12 lg:px-24 mx-auto w-full relative items-center">
                    <div className="grid grid-cols-1 w-full lg:grid-cols-4 mx-auto gap-6">

                        {golfers.map((golfer) => {
                            return (<Card golfer={golfer} />)
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default List;
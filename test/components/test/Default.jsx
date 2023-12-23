
const Default = (props) => {

    if (props.showSecond) {
        return <h1 className="text-3xl">Hello { props.first } { props.second }</h1>;
    }
    return <h1 className="text-3xl">Hello, { props.first }</h1>;
}

export default Default;
import Tags from "./Tags";

export default function Menu() {

    return (
        <div
            style={{
                width: '100vw',
                height: '20vh',
                background: 'darkblue'
            }}
        >
            <button className="btn primary">Add node</button>
            <Tags></Tags>
        </div>
    )
}
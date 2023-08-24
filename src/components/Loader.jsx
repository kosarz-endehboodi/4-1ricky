import "../load.scss"
export default function load() {
    return (
        <div className="width">
            <div id='outer'>
                <div id='middle'>

                    <div id='inner'>
                    </div>
                </div>
            </div>
        </div>
    )

}



export function loadCharcter() {
    return (
        <div
            style={{
                color: "var(--slate-300)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
            }}
        >
            <p> Loading Data...</p>
            <LoaderIcon style={{ width: "1.3rem", height: "1.3rem" }} />
        </div>
    );
}




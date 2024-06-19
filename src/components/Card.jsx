function Card({ title, imgSrc, onClick }) {
    if (title === "Axoltol") {
        return (
            <div className="card height" onClick={onClick}>
                <img src={imgSrc} alt={title}></img>
                <p>{title}</p>
            </div>
        )
    } else if (title === "Bogged Skeleton" || title === "Vindicator") {
        return (
            <div className="card width" onClick={onClick}>
                <img src={imgSrc} alt={title}></img>
                <p>{title}</p>
            </div>
        )
    }
    return (
        <div className="card" onClick={onClick}>
            <img src={imgSrc}></img>
            <p>{title}</p>
        </div>
    )
}

export default Card
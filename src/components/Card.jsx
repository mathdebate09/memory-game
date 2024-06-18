function Card ({ title, imgSrc, onClick }) {
    return ( 
        <div className="card" onClick={onClick}>
            <img src={imgSrc}></img>
            <p>{title}</p>
        </div>
    )
}

export default Card
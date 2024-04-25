import './card.css'

function Card (props) {

    return (
        <div className="card">
            <h1>{props.userData.name}</h1>

            <img src={props.userData.imageUrl} alt="" />

            <div className="actions">
                <button type="button">
                    Seguir  
                </button>
            </div>

        </div>
    )
}

export default Card
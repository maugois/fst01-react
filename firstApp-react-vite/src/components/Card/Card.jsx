import { useState } from "react"
import { BsCaretUp } from "react-icons/bs";
import { BsCaretDownFill } from "react-icons/bs";
import ButtonFollow from "../ButtonFollow/ButtonFollow"
import './card.css'

/**
 * 
 * Hooks do React sempre começa com "use".
 */

function Card (props) {

    const [followState, setFollowState] = useState(false);

    function handleClick(userName) {
        console.log(userName);

        setFollowState(!followState);

        props.changeCount(!followState);
    }

    return (
        <div className="card">
            <h1>{props.userData.name}</h1>

            <img src={props.userData.imageUrl} alt="" />

            <div className="actions">
                <button type="button" onClick={() => handleClick(props.userData.name)}>
                    {followState ? <BsCaretUp /> : <BsCaretDownFill />}
                    <ButtonFollow isFollowing={followState} />
                </button>
            </div>

        </div>
    )
}

export default Card
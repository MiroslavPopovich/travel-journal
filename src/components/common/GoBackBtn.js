import { useNavigate } from "react-router-dom";
export const GoBackBtn = (props) => {
    const navigate = useNavigate();
    function goBackHandler (e) {
        e.preventDefault();
        navigate(-1);
    }
    return (
        <button className={props.className} style={props.style} onClick={goBackHandler}>Go Back</button>
    );
}
import { useNavigate } from "react-router-dom";
export const GoHomeBtn = (props) => {
    const navigate = useNavigate();
    function goHomeHandler (e) {
        e.preventDefault();
        navigate('/');
    }
    return (
        <button className={props.className} onClick={goHomeHandler}>Go Home</button>
    );
}
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as userService from "../../services/userService"
import { HeaderContext } from '../../contexts/HeaderContext';
import { AuthContext } from '../../contexts/AuthContext';

export const PasswordChangePopUp = (props) => {
    const {linkState, setLinkState } = useContext(HeaderContext); 
    const { auth, setAuth } = useContext(AuthContext);
    const [values, setValues] = useState({});

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    function closeHandler() {
        setLinkState(!linkState);
        props.setShow(false);
    };
    function PasswordChangeHandler(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {newPassword, confirmPassword} = Object.fromEntries(formData);
        console.log(newPassword, confirmPassword);

        if (newPassword === confirmPassword){
            userService.editUser({password : newPassword}, auth.id)
                .then(result => {
                    setAuth({...auth, token: result.sessionToken});
                    closeHandler();
                }).catch((err) => {
                    alert(`Error ${err.error}`);
                });
        }else{
            alert(`Passwords don't match!`);
        }
    }
    return (
        <Modal show={props.show} onHide={closeHandler}>
            <Modal.Header closeButton>
                <Modal.Title>Change password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="passwordChangeForm" onSubmit={PasswordChangeHandler}>
                    <Form.Group className="mb-3" controlId="newPassword" onChange={changeHandler}>
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                            type="password"
                            name="newPassword"
                            placeholder="New password"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword" onChange={changeHandler}>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            autoFocus
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeHandler}>
                    Close
                </Button>
                <Button variant="primary"  type="submit" form="passwordChangeForm">
                    Change Password
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

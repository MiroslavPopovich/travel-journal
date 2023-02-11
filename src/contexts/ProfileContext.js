import { useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import * as profileService from "../services/profileService"
export const ProfileContext = createContext();

export const ProfileProvider = ({
    children,
}) => {
    const { auth } = useContext(AuthContext);
    const [profile, setProfile] = useState({});

    useEffect(() => {
        if (auth.hasProfile) {
            profileService.getProfile(auth.id)
          .then((result) => {
            setProfile(result.results[0]);
          });
        }else{
            setProfile({});
        }
    }, [auth]);

    return (
        <ProfileContext.Provider value={{
            profile,
            setProfile,
        }}>
            {children}
        </ProfileContext.Provider>  
    );
};
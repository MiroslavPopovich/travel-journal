import { createContext, useState } from "react";

export const ReloadContext = createContext();

export const ReloadProvider = ({
    children,
}) => {
    
    const [reload, setReload] = useState(false);

    return (
        <ReloadContext.Provider value={{
            reload,
            setReload,
        }}>
            {children}
        </ReloadContext.Provider>  
    );
}

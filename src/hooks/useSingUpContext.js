import { useContext } from "react";
import {SingUpContext} from "../context/SingUpContext";

export default function useSingUpContext() {
    const context = useContext(SingUpContext);
    
    if (context === undefined) {
        throw new Error("useSingUpContext must be used within a SinUpProvider");
    }

    return context;
}
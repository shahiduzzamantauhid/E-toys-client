import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user, setuser]= useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        toast.success("Account Created Successfully");
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const signIn = (email, password)=>{
        setLoading(true);
        toast.success("Signin Successfull");
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = ()=>{
        setLoading(true);
        toast.error("You are Logged Out");
        return signOut(auth);
    };
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setuser(currentUser);
            setLoading(false);
        });
        return ()=>{
            return unsubscribe()
        }
    },[]);
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
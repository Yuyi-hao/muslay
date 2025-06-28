import { axiosInstance } from "@/lib/axios";
import { Loader } from "lucide-react";
import { Children, useEffect, useState } from "react";
import { useViewTransitionState } from "react-router-dom";

// TODO: implement actual authentication

function getToken(){
    return "lalalalllalala";
}

function UpdateAPIToken(token: string|null){
    if(token){
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else{
        delete axiosInstance.defaults.headers.common["Authorization"];
    }
}

const authProvider = ({children}:{children:React.ReactNode}) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                UpdateAPIToken(token);
                if(token){

                }
            } catch (error) {
                UpdateAPIToken(null);
                console.error("error in auth provider", error);
            }
            finally{
                setIsLoading(false);
            }
        }
        initAuth();
    }, [getToken]);
    if(isLoading){
        return <div className="h-screen w-full flex items-center justify-center">
            <Loader className="size-8 text-emerald-500 animate-spin"/>
        </div>
    }
    return <>{children}</>;
};

export default authProvider;
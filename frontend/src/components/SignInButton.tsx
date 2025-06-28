import { Button } from "./ui/button";

const SignInButton = () => {
    const isLoaded = true;
    if(!isLoaded){
        return null;
    }
    return (
        <div><Button variant={"secondary"} className="w-full text-white border-zinc-200 h-11">Sign In</Button></div>
    )
}

export default SignInButton;
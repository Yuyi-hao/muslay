import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
    const isAdmin = false;
    return (
        <div className="flex items-center justify-between p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
            <div className="flex gap-2 items-center">
                Muslay
            </div>
            <div className="flex items-center gap4">
                {isAdmin && 
                    <Link to={"/admin"}>
                        <LayoutDashboardIcon className="size-4 mr-2"/>
                    </Link>
                }
            </div>
        </div>
    )
}

export default TopBar;
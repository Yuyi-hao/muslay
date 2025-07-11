import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HomeIcon, Library, MessageCircle} from "lucide-react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
    
    const isLoading = true;
  return <div className=" flex flex-col gap-2 h-[calc(100vh-300px)]">
    {/* Navigation menu */}
    <div className="rounded-lg bg-zinc-900 p-4">
        <div className="space-y-2">
            <Link 
            to={"/"} 
            className={cn(buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800"
            }))}>
                <HomeIcon className="mr-2 size-5"/>
                <span className="hidden md:inline">Home</span>
            </Link>
            <Link 
            to={"/chats"} 
            className={cn(buttonVariants({
                variant: "ghost",
                className: "w-full justify-start text-white hover:bg-zinc-800"
            }))}>
                <MessageCircle className="mr-2 size-5"/>
                <span className="hidden md:inline">Messages</span>
            </Link>
        </div>
    </div>
    {/* library section */}
    <div className="flex-1 rounded-lg bg-zinc-900 p-4">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-white px-2"> <Library className="size-5 mr-2"/> <span className="hidden md:inline">Libraries</span> </div>
        </div>
        <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="space-y-2">
                {isLoading?(
                    <PlaylistSkeleton/>
                ):(
                    <div>damm</div>
                )}
            </div>
        </ScrollArea>
    </div>
  </div>  
}
export default LeftSideBar;
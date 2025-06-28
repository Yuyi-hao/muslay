import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { HeadphonesIcon, Users, Users2Icon } from "lucide-react";


const LoggedInPrompt = () => {
    return <>
    <div className="h-full flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className='relative'>
			<div
				className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-lg
       opacity-75 animate-pulse'
				aria-hidden='true'
			/>
			<div className='relative bg-zinc-900 rounded-full p-4'>
				<HeadphonesIcon className='size-8 text-emerald-400' />
			</div>
		</div>

        <div className="space-y-2 max-w-[250px]">
            <h3 className="text-lg text-white font-semibold">See What Friends are Playing</h3>
            <span className="text-sm text-zinc-400">Login to discover what music your friends are playing right now.</span>
        </div>
    </div>
    </>
}

const RightSideBar = () => {
    const isLoggedIn = true;
    return (
        <div className="h-full bg-zinc-900 rounded-lg flex flex-col">
            <div className="p-4 flex justify-between items-center border-b border-zinc-800">
                <div className="flex items-center gap-2">
                    <Users className="size-5 shrink-0" />
                    <h2 className="font-semibold">What they're listening to</h2>
                </div>
            </div>
            {!isLoggedIn && <LoggedInPrompt/>}
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-4">

                </div>
            </ScrollArea>
        </div>
    );
}
export default RightSideBar;
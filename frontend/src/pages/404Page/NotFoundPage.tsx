import { Button } from "@/components/ui/button";
import { Home, Music2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className='h-screen bg-neutral-900 flex items-center justify-center'>
			<div className='text-center space-y-8 px-4'>
				{/* Large animated musical note */}
                <div className="flex items-center justify-center animate-bounce">
                    <Music2 className="text-emerald-500 size-24"/>
                </div>

				{/* Error message */}
                <div className="space-y-4">
                    <h1 className="font-bold text-7xl text-white">404</h1>
                    <h2 className="font-semibold text-2xl text-white">Page Not Found</h2>
                    <p className="text-neutral-400 max-w-md mx-auto">
                        Looks like this song does not exist yet.
                    </p>
                </div>
				{/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                    <Button onClick={() => navigate(-1)} variant="outline" className="bg-neutral-700 text-white border-neutral-700 w-full sm:w-auto">Go Back</Button>
                    <Button onClick={() => navigate("/")} className="bg-emerald-700 hover:bg-emerald-500 text-white w-full sm:w-auto"><Home className="mr-2 size-4"/> Back to Home</Button>
                </div>
			</div>
		</div>
    )
}

export default NotFoundPage;
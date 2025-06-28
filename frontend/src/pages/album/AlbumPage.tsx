import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Pause, Play } from "lucide-react";

const AlbumPage = () => {
    return (
        <div className="h-full">
            <ScrollArea className="h-full">
                {/* main content  */}
                <div className="relative min-h-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#503857]/80 via-zinc-900/800 to-zinc-50 pointer-events-none" aria-hidden='true'>
                    <div className="relative z-10">
                        <div className="flex p-6 gap-6 pb-8">
                            <img className='w-[240px] h-[240px] shadow-xl rounded'/>
                            <div className='flex flex-col justify-end'>
                                <p className='text-sm font-medium'>Album</p>
                                <h1 className='text-7xl font-bold my-4'>title</h1>
                                <div className='flex items-center gap-2 text-sm text-zinc-100'>
                                    <span className='font-medium text-white'>Artist</span>
                                    <span>•  songs</span>
                                    <span>• year</span>
                                </div>
                            </div>
                        </div>

                        {/* play button */}
						<div className='px-6 pb-4 flex items-center gap-6'>
							<Button
								// onClick={handlePlayAlbum}
								size='icon'
								className='w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 
                hover:scale-105 transition-all'
							>
								{/* {isPlaying && currentAlbum?.songs.some((song) => song._id === currentSong?._id) ? (
									<Pause className='h-7 w-7 text-black' />
								) : (
                                    )} */}
									<Play className='h-7 w-7 text-black' />
							</Button>
						</div>
                        <div className='bg-black/20 backdrop-blur-sm'>
							{/* table header */}
							<div
								className='grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-10 py-2 text-sm 
            text-zinc-400 border-b border-white/5'
							>
								<div>#</div>
								<div>Title</div>
								<div>Released Date</div>
								<div>
									<Clock className='h-4 w-4' />
								</div>
							</div>
                            <div className='px-6'>
								<div className='space-y-2 py-4'>
									{/* {currentAlbum?.songs.map((song, index) => { */}
										{/* // const isCurrentSong = currentSong?._id === song._id; */}
										{/* return ( */}
											<div
												// key={song._id}
												// onClick={() => handlePlaySong(index)}
												className={`grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 text-sm 
                      text-zinc-400 hover:bg-white/5 rounded-md group cursor-pointer
                      `}
											>
												<div className='flex items-center justify-center'>
													{/* {isCurrentSong && isPlaying ? (
                                                        <div className='size-4 text-green-500'>♫</div>
													) : (
														<span className='group-hover:hidden'>{index + 1}</span>
													)}
													{!isCurrentSong && (
														<Play className='h-4 w-4 hidden group-hover:block' />
													)} */}
												</div>

												<div className='flex items-center gap-3'>
													<img  className='size-10' />

													<div>
														<div className={`font-medium text-white`}></div>
														<div></div>
													</div>
												</div>
												<div className='flex items-center'></div>
												<div className='flex items-center'></div>
											</div>
								</div>
							</div>
                        </div>
                    </div>
                    </div>
                </div>
            </ScrollArea>
        </div>
    )
}

export default AlbumPage;
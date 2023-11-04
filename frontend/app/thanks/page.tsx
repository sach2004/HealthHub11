import AudioPlay from '@/components/base/audio';
import Nav from '@/components/base/nav';
import { Button } from '@/components/ui/button';

export default function Thank() {
    return (
        
        <main className="flex flex-col justify-center items-center">
            <div>
                    <div className="w-11/12 h-fit mt-10 ml-auto mr-auto flex gap-x-36 items-center justify-center relative z-10">
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                               // (pos === 'first' && ' border-sky-500')
                            }
                        >
                            <i className="bi text-4xl bi-arrow-right"></i>
                        </span>
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                                //(pos === 'second' && ' border-sky-500')
                            }
                        >
                            <i className="bi text-4xl bi-person"></i>
                        </span>
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                               // (pos === 'third' && ' border-sky-500')
                            }
                        >
                            <i className="bi bi-clipboard2-pulse text-4xl"></i>
                        </span>
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                                /*(pos === 'fourth' && ' border-sky-500')*/
                            }
                        >
                             <i className="bi bi-camera-video text-4xl"></i>
                        </span>
        
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                                //(pos === 'fifth' && ' border-sky-500')
                            }
                        >
                           <i className="bi bi-file-earmark-text text-4xl"></i>
                        </span>
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                                //(pos === 'six' && ' border-sky-500')
                            }
                        >
                            <i className="bi text-4xl bi-emoji-smile"></i>
                        </span>
                        
                        
                    </div>
                    <span className="absolute h-2 w-[1150px] bg-gray-300 top-[80px] left-[380px] z-0"></span>
                    <span className="absolute h-2 w-[1150px] bg-sky-500 top-20 left-[400px] z-0"></span>
                
                </div>
            <div className="flex flex-col justify-center mt-24 items-center">
                <h1 className="text-[78px] font-bold mt-[60px] ">
                    <AudioPlay audio="thankyou.mp3" />
                    Thanks! Hope we helped you! <br />
                </h1>
                <span className="text-sky-500 pt-5 text-7xl font-bold">
                    🩺 Health Hub
                </span>
            </div>
        </main>
    );
}

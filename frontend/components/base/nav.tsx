import React from 'react';

type Props = {
    pos ?: string;
};

export default function Nav({pos}: Props) {
    return (
        <nav className="ml-24">
            <div>
            <div className="w-11/12 h-fit mt-10 ml-auto mr-auto flex gap-x-36 items-center justify-center relative z-10">
                <span
                    className={
                        'flex items-center justify-center w-24 h-24 bg-white rounded-full border-sky-500 border-8 ' 
                       // (pos === 'first' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-arrow-right"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-24 bg-white rounded-full border-sky-500 border-8 ' 
                        //(pos === 'second' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-person"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-24 bg-white rounded-full border-sky-500 border-8 ' 
                       // (pos === 'third' && ' border-sky-500')
                    }
                >
                    <i className="bi bi-clipboard2-pulse text-4xl"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-24 bg-white rounded-full border-sky-500 border-8 ' 
                        /*(pos === 'fourth' && ' border-sky-500')*/
                    }
                >
                     <i className="bi bi-camera-video text-4xl"></i>
                </span>

                <span
                    className={
                        'flex items-center justify-center w-24 h-24 bg-white rounded-full border-sky-500 border-8 ' 
                        //(pos === 'fifth' && ' border-sky-500')
                    }
                >
                   <i className="bi bi-file-earmark-text text-4xl"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-24 bg-white rounded-full border-gray-300 border-8 ' 
                        //(pos === 'six' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-emoji-smile"></i>
                </span>
                
                
            </div>
            <span className="absolute h-2 w-[1200px] bg-gray-300 top-[80px] left-[420px] z-0"></span>
            <span className="absolute h-2 w-[910px] bg-sky-500 top-20 left-[450px] z-0"></span>
        
        </div>
        </nav>
    );
}

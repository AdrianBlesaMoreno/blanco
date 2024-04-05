"use client"
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'


export default function GameComponent() {

    const word = useSearchParams().get('word');
    const room = useSearchParams().get('room');


    return (
        <Suspense>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm content-center">
                    Tu palabra es...
                    <h1 className="text-center text-5xl font-bold tracking-tight text-gray-900 content-center">{word}</h1>
                </div>

            </div>
            <div className="absolute top-3 right-3">
                <h2 className="mt- text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sala {room}</h2>
            </div>
            <div className="absolute top-3 left-3">
                <button>Exit</button>
            </div>
        </Suspense>
    );
}

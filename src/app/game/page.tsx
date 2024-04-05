import dynamic from 'next/dynamic';


const NoSSR = dynamic(() => import('./gameComponent'), { ssr: false })

export default function Game() {

    return (
        <div style={{'height': '100vh'}}>
            <NoSSR/>
        </div>
    );
}

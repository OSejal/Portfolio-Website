"use client"

export default function LiIcon() {
    return (
        <figure className="absolute left-0 stroke-black">
            <svg className='-rotate-90 animate-pulse' width="50" height="50" viewBox="0 0 100 100" >
                <circle cx="50" cy="50" r="15" className="stroke-black  stroke-2 fill-none"/>
                <circle cx="50" cy="50" r="4" className="stroke-[5px] fill-white"/>
                <circle cx="50" cy="50" r="4" className="stroke-1 fill-black"/>
            </svg>
        </figure>
    )
}
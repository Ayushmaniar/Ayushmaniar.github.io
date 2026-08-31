'use client';

import { useState, useEffect } from 'react';
import { FaPlay } from 'react-icons/fa';

interface YouTubeFacadeProps {
    youtubeId: string;
    title: string;
}

export default function YouTubeFacade({ youtubeId, title }: YouTubeFacadeProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [imgSrc, setImgSrc] = useState(`https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`);

    useEffect(() => {
        // Check if the maxresdefault exists. If not, fetch the exact thumbnail metadata directly from YouTube.
        const checkThumbnail = async () => {
            const img = new Image();
            img.src = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
            img.onload = () => {
                if (img.width === 120) {
                    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${youtubeId}`)
                        .then(res => res.json())
                        .then(data => {
                            if (data && data.thumbnail_url) {
                                setImgSrc(data.thumbnail_url);
                            } else {
                                setImgSrc(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`);
                            }
                        })
                        .catch(() => setImgSrc(`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`));
                }
            };
        };

        checkThumbnail();
    }, [youtubeId]);

    if (isPlaying) {
        return (
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        );
    }

    return (
        <button
            onClick={() => setIsPlaying(true)}
            className="w-full aspect-video relative group bg-black flex items-center justify-center overflow-hidden cursor-none border-none p-0"
            aria-label={`Play ${title}`}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white px-6 py-4 font-black uppercase flex items-center shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:group-hover:shadow-[4px_4px_0_0_rgba(255,255,255,1)] active:translate-x-2 active:translate-y-2 active:shadow-none transition-all">
                <FaPlay className="mr-3" /> Play
            </div>
        </button>
    );
}

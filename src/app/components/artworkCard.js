import Image from "next/image";

export default function ArtworkCard({ href, imgSrc, title, description }) {
    return (
        <div className="relative">
            <a href={href} target="_blank">
                <Image src={imgSrc} alt="" width={400} height={400} className="block w-full h-auto" />
                <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-gradient-to-t from-gray-900/50 to-gray-900/25 overflow-scroll">
                    <div className="p-4 text-white">
                        <div className="text-xl mb-4">
                            {title}
                        </div>
                        <div>
                            {description}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};
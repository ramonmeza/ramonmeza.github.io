import Image from "next/image";

export default function Banner({ avatar, alt, title, subtitle }) {
    return (
        <div className="md:flex md:items-start md:gap-4 md:items-center md:justify-center">
            <Image src={avatar} alt={alt} width={1024} height={1024} className="mx-auto md:mx-0 size-64 rounded-full object-cover" />
            <div className="space-x-4">
                <h1 className="text-center text-5xl md:text-7xl font-medium text-gray-900">{title}</h1>
                <p className="text-center italic text-lg md:text-2xl text-gray-700">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};
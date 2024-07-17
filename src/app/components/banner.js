export default function Banner({ avatar, alt, title, subtitle }) {
    return (
        <div className="flex items-start gap-4 m-10 items-center justify-center">
            <img src={avatar} alt={alt} className="size-40 rounded-full object-cover" />
            <div>
                <h1 className="text-7xl font-medium text-gray-900">{title}</h1>
                <p className="mt-0.5 text-xl text-gray-700">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};
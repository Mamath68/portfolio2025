import Image from "next/image";

interface Props {
    title: string;
    image: string;
}

const SkillCard = ({image, title}: Props) => {
    return (
        <div className="p-6 h-[10rem] flex flex-col justify-center items-center bg-gray-900 rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-red-700">
    <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-contain mx-auto"
    />
    <h1 className="mt-1.5 text-lg font-semibold text-white">
        {title}
    </h1>
</div>

    )
}

export default SkillCard;

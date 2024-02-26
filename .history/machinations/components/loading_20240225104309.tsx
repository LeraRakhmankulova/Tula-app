import Image from "next/"

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
        <Image src="/spin.svg"
        alt="loading"
        width={120}
        height={120}
        className="animate-pulse duration-700"
        />
    </div>
  );
};

'use client';
import Image from 'next/image';
import Photo from '@/static/yhglass.png';

export default function CircleAvatar() {
  return (
    <div className="flex justify-center items-center w-fit mx-auto my-10">
      <Image
        src={Photo}
        alt="Yusuf HAYIRLI"
        width={200}
        height={200}
        className="w-[200px] h-[200px] object-cover rounded-full border-2 border-neutral-800 shadow-link-hover transition-all duration-300 ease-in-out"
        priority
      />
    </div>
  );
}

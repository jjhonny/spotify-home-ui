import { Play } from "lucide-react";
import Image from "next/image";

export function CardPlayList() {
  return (
    <a
      href="#"
      className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
    >
      <Image
        src="/album.jpg"
        width={104}
        height={104}
        alt="Capa do álbum Wasting Light da banda Foo Fighters"
      />
      <strong>Wasting Light</strong>
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
        <Play />
      </button>
    </a>
  );
}

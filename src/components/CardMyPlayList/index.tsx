import Image from "next/image";

export function CardMyPlayList() {
  return (
    <a
      href="#"
      className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
    >
      <Image
        src="/FooFighters.png"
        className="w-full rounded-md"
        width={104}
        height={104}
        alt="Capa do álbum Wasting Light da banda Foo Fighters"
      />
      <strong className="font-semibold">Daily Mix 1</strong>
      <span className="text-sm text-zinc-500">
        Wallows, COIN, girl in red an more
      </span>
    </a>
  );
}

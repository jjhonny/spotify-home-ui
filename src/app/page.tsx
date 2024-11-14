import { CardMyPlayList } from "@/components/CardMyPlayList";
import { CardPlayList } from "@/components/CardPlayList";
import { Footer } from "@/components/Footer/Index";
import { Sidebar } from "@/components/Sidebar/Index";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <CardPlayList />
            <CardPlayList />
            <CardPlayList />
            <CardPlayList />
            <CardPlayList />
            <CardPlayList />
          </div>
          <h1 className="font-semibold text-3xl mt-10">Made for Jhonny</h1>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <CardMyPlayList />
            <CardMyPlayList />
            <CardMyPlayList />
            <CardMyPlayList />
            <CardMyPlayList />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

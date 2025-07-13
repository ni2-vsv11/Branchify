import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#34d817] min-h-[100vh] grid grid-cols-2">
        <div className=" flex items-center justify-center">
         <p className="text-lime-300 font-black text-3xl">Everything you are. In one, simple link in bio.</p>
         <p>Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        </div>
        <div className="bg-sky-300">
          col 2
        </div>
      </section>

      <section className="bg-rose-400 min-h-[100vh]">
      
      </section>
    </main>
  );
}

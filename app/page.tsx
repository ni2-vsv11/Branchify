import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#254F1A] min-h-[100vh] grid grid-cols-2 ">
        <div className=" flex item-center justify-center flex-col ml-[10vw] gap-3 pt-30">
         <span className="text-yellow-300 font-black text-6xl">Everything you </span>
          <span className="text-yellow-300 font-black text-6xl">are. In one,</span> 
          <span className="text-yellow-300 font-black text-6xl">simple link in bio.</span>
         <span className="text-white text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</span>
         
         <div className="input flex gap-2">
          <input className="px-2 py-2 rounded-md focus:outline-lime-600 bg-white " type="text" placeholder="branchify.ee/your-url" />
          <button className="bg-rose-200 text-black font-semibold rounded-md px-4 py-4">Get your link-branch</button>
         </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <Image src="/Home.jpg" alt="Home-page" width={500} height={500} style={{ borderRadius: '20px' }} />
        </div>
      </section>

      <section className="bg-rose-200 min-h-[100vh]">
      
      </section>
    </main>
  );
}

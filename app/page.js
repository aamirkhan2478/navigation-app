import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center h-[500px]'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-6'>
          Welcome to my website
        </h1>
      </div>
    </>
  );
}

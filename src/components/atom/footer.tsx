import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#08092E] font-mono p-4 pt-8 sm:pt-16 text-white font-medium mt-28 sm:mt-40">
      <section className="flex flex-col  gap-8 sm:gap-20 mb-6 max-w-6xl mx-auto">
        <ul className="flex sm:justify-center items-center gap-6  ">
          <Link href="/about" className="hover:underline duration-150">
            About
          </Link>
          <Link href="/courses" className="hover:underline duration-150">
            Courses
          </Link>
          <Link href="/waitlist" className="hover:underline duration-150">
            Waitlist
          </Link>
          <Link href="/faqs" className="hover:underline duration-150">
            FAQs
          </Link>
        </ul>
        <div className="flex flex-col sm:flex-row gap-6 justify-between">
          <div className="flex flex-col gap-1 ">
            <h1 className="opacity-60">Call</h1>
            <p>+1892-435-932</p>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="opacity-60">WhatsApp</h1>
            <p>+1892-435-932</p>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="opacity-60">Email</h1>
            <p>gaiacademy79@gmail.com</p>
          </div>
          <div className="flex flex-col gap-1 ">
            <h1 className="opacity-60">Address</h1>
            <p>4th Floor, Labour House, Central Business District, Abuja</p>
          </div>
        </div>
      </section>
      <section className="border-t-2 border-[#303153] opacity-60">
        <p className="text-left sm:text-center p-4">
          &copy; GAI Academy. All Right Reserved
        </p>
      </section>
    </footer>
  );
}

// import AcmeLogo from '@/app/ui/acme-logo';
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function LearningNextJS() {
  
  return (
    <>
      <h1>LearningNextJS Layout</h1>
      <h1>LearningNextJS</h1>
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the{" "}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>
        , brought to you by Vercel.
      </p>

      {/* <Image
        src="/imgs/CSR vs SSR.png"
        width={560}
        height={620}
        className=""
        alt="CSR vs SSR"
      />

      <Image
        src="/next-js-app/src/imgs/2024-10-03 15_53_47-Greenshot.png"
        width={1000}
        height={760}
        className=""
        alt="Next js"
      />
      <hr />
      <hr /> */}

      <Image
        src="https://media.istockphoto.com/id/481101450/photo/program-code-react-and-javascript-on-lcd-screen.jpg?s=1024x1024&w=is&k=20&c=U2eS7eDni-q-wLYvtLrEz8Y72ZjYy8rybADUKlV6ipw="
        width={560}
        height={620}
        className=""
        alt="CSR vs SSR"
      />
      <br />
      <Image
        src="https://media.istockphoto.com/id/1389287506/photo/react-inscription-against-laptop-and-code-background.jpg?s=1024x1024&w=is&k=20&c=E8im8d3k0ng5M8eXChH6YKd8aaT81yaRHFHrnCFCUfw="
        width={1000}
        height={760}
        className=""
        alt="Next js"
      />

      <main className="flex min-h-screen flex-col p-6">
        <div className={styles.shape}>styles.shape</div>

        <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"></div>
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          hello
        </div>
        {/* <AcmeLogo /> */}
      </main>
    </>
  );
}

// Great! Your home page now has a custom font and hero images.

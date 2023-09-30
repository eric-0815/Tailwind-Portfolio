import React from "react";

export default function Work({}) {
  return (
    <section className="bg-fcda69 md:justfiy-between md: my-0 flex flex-col items-center p-2 md:flex-row">
      <section className="justfiy-center md: my-20 flex w-full flex-1 flex-col justify-center gap-4  md:my-0 md:w-5/12 ">
        <h1 className="px-16 text-center text-[2.5rem] font-semibold leading-[3.rem] md:px-0 md:text-left ">
          Work Experience
        </h1>
      </section>
      <section className="flex-row">
        <section className="my-2 w-full border-t border-black">
          <div className="flex justify-between py-2">
            <h2 className="font-semibold">Full-stack Developer</h2>
            <h2>Jun 2022 - Sep 2023</h2>
          </div>
          <h2 className="font-semibold">INTELICARE</h2>
          <h2 className="py-2">
            Skills: ReactJS, NodeJS, React Native, Python, Azure
          </h2>
        </section>

        <section className="my-2 w-full border-t border-black">
          <div className="flex justify-between py-2">
            <h2 className="font-semibold">Full-stack Developer</h2>
            <h2>Jan 2022 - Jun 2022</h2>
          </div>
          <h2 className="font-semibold">ASYNC-WORKING</h2>
          <h2 className="py-2">Skills: ReactJS, Java, SpringBoot, AWS</h2>
        </section>

        <section className="my-2 w-full border-t border-black">
          <div className="flex justify-between py-2">
            <h2 className="font-semibold">Full-stack Developer</h2>
            <h2>Nov 2021 - Mar 2022</h2>
          </div>
          <h2 className="font-semibold">AQUATERRA</h2>
          <h2 className="py-2">Skills: ReactJS, NodeJS, Docker, AWS</h2>
        </section>
      </section>
    </section>
  );
}

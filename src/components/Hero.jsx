import React from "react";

export default function Hero({}) {
  return (
    <section className="md:justfiy-between md: my-0 flex flex-col items-center p-2 md:flex-row">
      <section className="justfiy-center md: my-20 flex w-full flex-1 flex-col justify-center gap-4  md:my-0 md:w-5/12 ">
        <h1 className="px-16 text-center text-[2.5rem] font-semibold leading-[3.rem] md:px-0 md:text-left ">
          Full stack developer
        </h1>
        <p className="px-16 text-center text-sm text-black/70 md:px-0 md:text-left">
          Hi, I am a developer with 2 years experience{" "}
        </p>
        <section className="flex flex-col gap-4 md:flex-row">
          <button className="rounded-2xl bg-purple-500 px-8 py-3 text-white hover:bg-purple-700 active:bg-purple-800">
            Lets Talk
          </button>
          <button className="px-8 py-3 hover:bg-slate-200">Resume ↗</button>
        </section>
      </section>
      <section className="w-full md:w-7/12">
        <div className="h-full w-full">
          <img
            src="/heroright.png"
            className="h-full w-full object-cover"
            alt="dev"
          />
        </div>
      </section>
    </section>
  );
}

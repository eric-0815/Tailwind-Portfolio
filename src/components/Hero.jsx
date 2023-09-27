import React from "react";

export default function Hero({}) {
  return (
    <section className="flex w-full justify-between p-2">
      <section>
        <h1 className="text-[2.5rem]">Full stack developer</h1>
        <p className="text-sm text-black/70">
          Hi, I am a developer with 2 years experience{" "}
        </p>
        <section className="flex gap-4">
          <button className="rounded-2xl bg-purple-500 px-8 py-3 text-white hover:bg-purple-700 active:bg-purple-800">
            Lets Talk
          </button>
          <button className="px-8 py-3 hover:bg-slate-200">Resume</button>
        </section>
      </section>
      <section className="min-w[400px]">
        <div>
          <img src="/heroright.png" className="object-cover" alt="dev" />
        </div>
      </section>
    </section>
  );
}

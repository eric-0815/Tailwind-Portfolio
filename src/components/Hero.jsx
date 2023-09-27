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
          <button className="rounded-lg bg-purple-500 px-4 py-2 text-white hover:bg-purple-700 active:bg-purple-800">
            Lets Talk
          </button>
          <button>Lets Talk</button>
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

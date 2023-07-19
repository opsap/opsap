import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Product } from "../../../../libs/shared/types/mod.ts";

export default function Home() {
  const count = useSignal(1);
  const product: Product = {
    name: "Ipad",
    price: 200,
    quantity: 10,
  };
  return (
    <>
      <Head>
        <title>fresh-site</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
          <div>{JSON.stringify(product)}</div>
          <h1 class="text-4xl font-bold">Welcome to fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
          <Counter count={count} />
        </div>
      </div>
    </>
  );
}

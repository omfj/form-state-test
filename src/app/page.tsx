"use client";

import { createGroupAction } from "@/actions/create-group";
import { cn } from "@/lib/cn";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className={cn(
        "px-4 text-gray-700 h-10 flex items-center font-medium border rounded-lg justify-center hover:bg-gray-100 transition-colors duration-200 ease-in-out",
        {
          "bg-gray-200 opacity-50 cursor-not-allowed": pending,
        }
      )}
      type="submit"
    >
      {pending ? "Creating..." : "Create"}
    </button>
  );
};

export default function Home() {
  const [state, action] = useFormState(createGroupAction, undefined);

  return (
    <main className="py-24 max-w-screen-md mx-auto px-6 w-full">
      <h1 className="text-3xl font-light font-serif">Home</h1>
      <hr className="mb-8" />

      <form className="space-y-4" action={action}>
        {state?.message && (
          <div
            className={cn("p-4 rounded-lg", {
              "bg-red-100 text-red-700 border border-red-200": !state.success,
              "bg-green-100 text-green-700 border border-green-200":
                state.success,
            })}
          >
            {state.message}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium" htmlFor="name">
            Navn
          </label>
          <input
            className="rounded-lg border h-10 px-4 py-"
            type="text"
            name="name"
            id="name"
          />
        </div>

        <SubmitButton />
      </form>
    </main>
  );
}

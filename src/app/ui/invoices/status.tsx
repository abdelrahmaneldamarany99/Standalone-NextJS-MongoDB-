import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  // console.log(status); // undefined

  return (
    <>
      <h1>Status</h1>
      <span
        className={clsx(
          "inline-flex items-center rounded-full px-2 py-1 text-sm",
          {
            "bg-gray-100 text-gray-500": status === "pending",
            "bg-green-500 text-white": status === "paid",
          }
        )}
      >
        hello
      </span>
    </>
  );
}

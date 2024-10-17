import styles from "./ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import Search from "./ui/Search";
import CustomerDetails from "./ui/CustomerDetails";
import CustomerForm from "./ui/CustomerForm";

export default async function Home() {
  const response = await fetch("/api/customers");
  const customers = await response.json();

  return (
    <>
      <div className="home">
        <div className="search-and-customers">
          <Search />
          <div className="customers">
            {customers?.length ? (
              customers.map((customer) => (
                <CustomerDetails
                  key={customer._id}
                  customer={customer} setShowUpdateForm={undefined}                />
              ))
            ) : (
              <h1 className="no-customers">No Customers Found Yet</h1>
            )}
          </div>
        </div>
        <CustomerForm />
      </div>
    </>
  );
}

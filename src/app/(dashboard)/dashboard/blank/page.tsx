import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Alerts | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Alerts page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const Alerts = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Blank" />

      <div className="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
        <div className="w-full">
          <button className="text-center">Add</button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Alerts;

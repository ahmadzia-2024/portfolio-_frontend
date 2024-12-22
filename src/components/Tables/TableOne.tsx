"use client";
import Image from "next/image";
import SwitcherThree from "../Switchers/SwitcherThree";
import { HiViewBoards } from "react-icons/hi";
import { MdDownloadForOffline } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import Link from "next/link";
import AddUserPopup from "../user/AddUser";
import { useState } from "react";

const brandData: any[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "Vimeo",
    visitors: 1.5,
    revenues: "3,580",
    sales: 389,
    conversion: 2.5,
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "Facebook",
    visitors: 3.5,
    revenues: "6,768",
    sales: 390,
    conversion: 4.2,
  },
];
const headers = ["Source", "Visitors", "Revenues", "Sales", "Conversion"];
const title = "Users";
// const headers = {
//   source: "Source",
//   visitors: "Visitors",
//   revenues: "Revenues",
//   sales: "Sales",
//   conversation: "Conversion",
// };
// const TableOne = (title: string, header: [], data: []) => {
const TableOne = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between mb-8">
        <div className="flex justify-center items-center gap-7">
          <h4 className="font-semibold ">
            {title}
            {/* Here I Should Impelemnt the All Users */}
          </h4>
          <form action="" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 px-2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-7 py-2 pl-10 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
          </form>
          <h4 className="font-semibold ">Exact Match</h4>
          <SwitcherThree />
        </div>
        <div className="flex text-2xl gap-4">
          <Link href={""} title="Cutomize Column">
            <HiViewBoards />
          </Link>
          <Link href={""} title="Download">
            <MdDownloadForOffline />
          </Link>
          <Link href={""} title="Filter">
            <IoFilter />
          </Link>

          <Link href={""} onClick={handleOpenModal} title="Add">
            <FaCirclePlus />
          </Link>
          {isModalOpen && <AddUserPopup onClose={handleCloseModal} />}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-md text-white/100 bg-black dark:bg-meta-4 sm:grid-cols-5">
          {headers.map((header, index) => {
            return (
              <div className="p-2.5 text-center xl:p-5" key={index}>
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  {header}
                </h5>
              </div>
            );
          })}
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;

import React from "react";
import { IoIosAlert } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const FeatureBottom = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div className="flex w-full mt-10 lg:mt-20 xl:w-[90%] flex-col md:flex-row px-5 lg:px-20 xl:px-28 justify-evenly ">
      {/* Left Section */}
      <div className="xl:w-[40%] md:w-[55%] lg:w-[50%] w-full   flex flex-col items-center justify-center ">
        <div className="p-5 border-2  h-full border-black flex flex-col items-center justify-center ">
          <p className="lg:text-3xl text-2xl font-bold ">
            Convert title flows into flow charts for easier understanding.
          </p> 
          <br />
          <img
            src="/Frame 236.png"
            className="w-full object-contain h-full md:h-96 xl:h-fit"
            alt="Feature illustration"
          />
        </div>
        <div className="w-full flex flex-col items-start mt-0 md:mt-10 py-10 justify-center gap-4">
            
          <img
            src="Law.png"
            className=""
            alt="Law icon"
          />
          <h1 className="text-4xl md:text-4xl lg:text-7xl font-semibold leading-tight">
            Designed by real estate lawyers
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-[55%] w-full   flex flex-col md:items-end justify-between">
        {/* Table Section */}
        <div className=" w-full xl:w-[80%] lg:w-[85%] p-4 md:p-6 border-[1.9px] border-gray-800 ">
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="lg:px-4 md:px-2 px-4 py-2 text-sm font-medium text-gray-900">
                    MR Entry
                  </th>
                  <th className="lg:px-4 py-2 text-sm font-medium text-gray-900">
                    EC Entry
                  </th>
                  <th className="lg:px-4 py-2 text-sm font-medium text-gray-900">
                    RTC Entry
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="lg:px-4 md:px-2 px-4 md:py-1 lg:py-3 py-3 text-sm">
                    MR 11/
                    <br />
                    2006-07
                  </td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 md:py-1 lg:py-3 text-sm">Present</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 md:py-1 lg:py-3 text-sm">Present</td>
                </tr>
                <tr>
                  <td className="lg:px-4 md:px-2 px-4 py-3 md:py-1 lg:py-3 text-sm">
                    MR H12/
                    <br />
                    2017-18
                  </td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 md:py-1 lg:py-3 text-sm">Present</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 text-sm">Present</td>
                </tr>
                <tr>
                  <td className="lg:px-4 md:px-2 px-4 py-3 md:py-1 lg:py-3 text-sm">
                    MR H11/
                    <br />
                    2021-22
                  </td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 md:py-1 lg:py-3 text-sm text-red-500">Not found</td>
                  <td className="lg:px-4 md:px-2 px-4 py-3 text-sm">Present</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-2">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800">
              Verify encumbrance and revenue records.
            </h2>
            <p className="text-sm pt-4 md:text-base text-gray-600 leading-relaxed">
              Titlewize verifies every document that matters. Get complete title
              flow with automated cross-referencing of revenue records,
              encumbrance certificates, and title deeds.
            </p>
          </div>
        </div>

        {/* Notification Section */}
        <div className="w-full xl:w-[80%] lg:w-[85%] lg:mt-4 xl:-0 p-4 md:p-6 bg-white border-[1.9px] border-gray-800 ">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Get notified of any issues in the title flow.
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-800">
            Our AI instantly flags broken chains, missing documents, and revenue
            record discrepancies—protecting your investments from costly
            disputes.
          </p>
          <div ref={ref} className="mt-6 p-2 md:p-6 border-2 border-black rounded-md space-y-4">
            {/* Card 1 */}
            <motion.div
              className="card flex  items-center gap-3 p-4 bg-[#EF363626] rounded-lg border border-[#B02527]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <IoIosAlert className="w-6 h-6 text-red-500 flex-shrink-0" />
              <p className="xl:text-base text-sm leading-relaxed text-gray-900">
                The EC does not reflect Sale Deed bearing Document No.
                KRI-1-005177-2020-21.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="card flex items-center gap-3 p-4 bg-[#EF363626] rounded-lg border border-[#B02527]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                            <IoIosAlert className="w-6 h-6 text-red-500 flex-shrink-0" />
              <p className="xl:text-base text-sm leading-relaxed text-gray-900">
                There's a break in the chain of title between Paul D'Souza
                (owner vide Sale Deed bearing Document No. MDP-1-010408-2011-12)
                and Roy D'Mello (seller vide Sale Deed bearing Document No.
                GAN-1-11009-2015-16).
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBottom;

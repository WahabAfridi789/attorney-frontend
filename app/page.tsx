import { DataTable } from "@/components/ui/custom/data-table";
import { City } from "@/types/type"; // Assuming the interface is defined in a City.ts file
import { getCities } from "@/lib/service";
import { Button } from "@/components/ui/button";
interface CitiesProps {
  cities: City[];
}


import { columns } from "@/app/columns";
const Cities = async ({ searchParams }: { searchParams: any }) => {

  const page = searchParams?.page || "1";

  const citiesResponse = await getCities(page)
  if (citiesResponse.success === false) {
    return <div>Something went wrong</div>
  }

  const cities = citiesResponse.data;
  const re = cities?.response;
  const totalP = cities?.totalPages;


  return (
    <div className="w-full flex justify-center items-center m-4">
      <div className="w-full min-h-screen bg-white dark:bg-gray-900">

        <div className="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">


          <section className="flex items-center flex-1">
            <div className="flex flex-col w-full ">
              <h2 className="text-6xl font-extrabold text-center ">
                <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
                  Attorney-

                </span>

                <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
                  Finder
                </span>
              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                Discover legal experts in your area and get the help you need for your legal matters.

              </p>




            </div>
          </section>
          <DataTable data={re || []} columns={columns} searchTag="city" currentPage={page} totalPages={JSON.stringify(totalP) || '0'} />

          <footer className="flex flex-col items-center mt-12 sm:flex-row sm:justify-between">
            <a href="#" className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> Privacy Policy </a>

            <div className="mt-4 -mx-4 md:mt-0">
              <a href="#" className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> Facebook</a>

              <a href="#" className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Instagram</a>

              <a href="#" className="px-4 text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"> LinkedIn</a>
            </div>
          </footer>
        </div>


      </div>
    </div>
  );
};

export default Cities;

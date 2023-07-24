import Sidebar from "@/components/sidebar/Sidebar2";



export default function Routes({ children }) {
    return (
        <>
            <div className="flex w-full min-h-screen">
                <div className="sm:w-[60%] md:w-3/12 xl:w-2/12">
                    <Sidebar />
                </div>
                <div className="sm:w-full md:w-9/12 lg:w-10/12">
                    {children}
                </div>
            </div>

        </>
    )

};
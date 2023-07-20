import Sidebar from "@/components/sidebar/Sidebar2";



export default function Routes({ children }) {
    return (
        <>
            <div className="flex w-full h-full min-h-screen">
                <div className="m-auto">
                    <Sidebar />
                </div>
                <div className="sm:w-full md:w-9/12 lg:w-10/12">
                    {children}
                </div>
            </div>

        </>
    )

};
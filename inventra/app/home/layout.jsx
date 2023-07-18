import Sidebar from "@/components/sidebar/Sidebar";

export default function Routes({ children }) {
    return (
        <>
            <div className="flex h-full min-h-screen">
                <div className="md:w-3/12 lg:w-2/12">
                    <Sidebar />
                </div>
                <div className="md:w-9/12 lg:w-10/12">{children}</div>
            </div>

        </>
    )

};
import Sidebar from "@/components/sidebar/Sidebar";

export default function Routes({ children }) {
    return (
        <>
            <div className="flex h-full min-h-screen">
                <div className="w-2/12">
                <Sidebar />
                </div>
                <div className="w-10/12">{children}</div>
            </div>

        </>
    )

};
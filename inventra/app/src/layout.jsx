import Sidebar from "@/components/sidebar/Sidebar";

export default function Routes({ children }) {
    return (
        <>
            <div className="flex h-full min-h-screen">
                <Sidebar />
                <div className="w-full">{children}</div>
            </div>

        </>
    )

}
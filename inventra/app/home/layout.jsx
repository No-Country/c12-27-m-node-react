import Sidebar from "@/components/sidebar/Sidebar2";
import style from './layout.module.css'


export default function Routes({ children }) {
    return (
        <>
            <div className="flex w-full min-h-screen">
                <div className="sm:w-[60%] md:w-4/12 xl:w-1/1">
                    <Sidebar />
                </div>
                <div className="w-full flex justify-center">
                    {children}
                </div>
            </div>

        </>
    )

};
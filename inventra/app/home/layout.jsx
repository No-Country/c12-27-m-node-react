import Sidebar from "@/components/sidebar/Sidebar2";
import style from './layout.module.css'


export default function Routes({ children }) {
    return (
        <>
            <div className={style.childrenBox}>
                <div className="sm:w-[60%] md:w-3/12 ">
                    <Sidebar />
                </div>
                <div >
                    {children}
                </div>
            </div>

        </>
    )

};
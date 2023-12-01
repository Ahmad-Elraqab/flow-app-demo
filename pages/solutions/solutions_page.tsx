import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import '../../app/dropdown.css'
import '../../app/globals.css'
import ServiceCard from "@/components/service_card"
import styles from '../../styles/style.module.scss'

export default function SolutionsPage() {


    return <div className="pt-9 mx-auto z-10 flex flex-col items-center w-full h-[1500px]">

        <div
            className="z-5 mx-auto blur-xl absolute left-0 right-0"
            style={{
                height: "1884px",
                backgroundImage: `url("../../icons/bg_light.svg")`,
                backgroundPosition: "right -1200px bottom -750px",
            }}>

        </div>
        <div
            className="z-7 mx-auto absolute w-full left-0 right-0"
            style={{
                height: "1884px",
                backgroundImage: `url("../../icons/bg_light_outline.svg")`,
                backgroundPosition: "right -500px bottom -500px",
            }}>

        </div>

        <Navbar activeIndex={1} isDark={true} />

        <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

        <p className={`${styles.f25} font-regular mb-[30px]`}>Home / Solutions</p>

        <p className={`${styles.f56} font-extrabold mb-[18px]`}>Almost everything you need</p>

        <p className={`${styles.f25} font-regular mb-[90px]`}>ERPFlow comes with 1000+ objects to help you run your business</p>


        <div className='z-10 flex flex-wrap gap-[32px] mb-[200px] max-[390px]:justify-center'>

            <div className='gap-[32px] flex flex-col'>
                <ServiceCard iconHeight={62} iconWidth={62} icon='Settings' title='Services' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={56} iconWidth={44.8} icon='list' title='Distribution' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={56} iconWidth={44.8} icon='list' title='Distribution' subTitle='Run your services business better with ' />
            </div>

            <div className='gap-[32px] flex flex-col'>
                <ServiceCard iconHeight={58} iconWidth={58} icon='PetriDish' title='Manufacturing' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={49} iconWidth={49} icon='Bank' title='Education' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={49} iconWidth={49} icon='Bank' title='Education' subTitle='Run your services business better with ' />
            </div>

            <div className='gap-[32px] flex flex-col'>
                <ServiceCard iconHeight={46} iconWidth={57.5} icon='Standings' title='Retail' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={48} iconWidth={48} icon='BankCard' title='Non Profit' subTitle='Run your services business better with ' />
                <ServiceCard iconHeight={48} iconWidth={48} icon='BankCard' title='Non Profit' subTitle='Run your services business better with ' />
            </div>


        </div>

        <Footer />

    </div>


}
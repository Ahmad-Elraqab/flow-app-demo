import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import '../../app/dropdown.css'
import '../../app/globals.css'
import ServiceCard from "@/components/service_card"
import HostCard from "@/components/host_card"
import Image from "next/image"
import styles from '../../styles/style.module.scss'

export default function ServicesPage() {

    const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
    const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
    const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
    const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

    return <div className="pt-9 mx-auto z-10 flex flex-col items-center max-[1500px]:justify-center w-full h-[3000px]" style={{ overflow: 'hidden' }}>

        <div
            className="z-7 mx-auto absolute left-0 right-0 h-full"
            style={{
                height: "3000px",
                backgroundImage: `url("../../icons/bg_light_outline.svg")`,
                backgroundPosition: "right -1200px bottom -100px",
                backgroundRepeat: "no-repeat"
            }}>

        </div>

        <Navbar activeIndex={2} isDark={true} />

        <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

        <p className={`${styles.f25} font-regular mb-[30px]`}>Home / Services</p>

        <p className={`${styles.f56} font-extrabold mb-[18px]`}>We develop hardware devices using platform</p>

        <p className={`${styles.f25} font-regular mb-[90px]`}>. We have joined forces with team</p>


        <div className="h-full w-full z-20 flex flex-wrap justify-center items-start gap-[100px]">

            <div className="text-start flex flex-col justify-start max-[1500px]:justify-center items-stretch">

                <p className={`${styles.f37} max-[1500px]:text-center font-semibold mb-[21.7px]`}>Our services</p>
                <p className={`${styles.f20} max-[1500px]:text-center font-medium mb-[43.1px]`}>We develop and integrate hardware devices using platform . We have joined forces with team</p>

                {/* <Image className='w-[full]' src={"/icons/browser-shape.png"} alt='' width={670} height={533} /> */}

                <div className="relative">
                    <img className="" src="/icons/browser-shape.png" alt="" style={{ objectFit: "cover", width: "100%" }} />
                    <div className={`${styles.shapeSize} ${styles.setPadding} rounded-2xl text-start bg-white items-start`} style={{ ...setPosition("", 400, 100, ""), ...setPadding(16, 20, 16, 20), ...setBox("", 265), boxShadow: "0px 1px 50px #00000010" }}>

                        <p className={`${styles.f16} font-normal ${styles.marginSize} text-[#364F65]`} style={{ ...setMargin("", "", "", 10) }}>Total Students</p>
                        <p className={`${styles.f36} font-medium ${styles.marginSize} text-[#364F65]`} style={{ ...setMargin("", "", "", 10) }}>93</p>

                        <img className={styles.imgSize} style={{ ...setBox(46, 265) }} src={"/icons/grid_shape.svg"} alt='' />

                    </div>
                </div>

            </div>

            <div className="flex flex-wrap w-[800px] gap-[80px] justify-center">

                <HostCard iconHeight={218} iconWidth={218} icon='host1' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Support' />
                <HostCard iconHeight={218} iconWidth={218} icon='host2' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Enterprise' />
                <HostCard iconHeight={212} iconWidth={212} icon='host3' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Contact Us' />
                <HostCard iconHeight={225} iconWidth={225} icon='host4' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Frappe' />

            </div>

        </div>

        <Footer />

    </div>


}
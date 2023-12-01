import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import '../../app/globals.css'
import ServiceCard from "@/components/service_card"
import HostCard from "@/components/host_card"
import Image from "next/image"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react";
import { AddNoteIcon } from "../../components/addNoteIcon.jsx";
import { useState } from "react"
import FilledButton from "@/components/filled_button"
import styles from '../../styles/style.module.scss'


export default function FeaturePage() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const jobTitles = ["Manufacturing", "Services", "Retail", "Healthcare", "Education", "Agriculture", "Nonprofit"]
    const placeholders = ["Job titles", "Number of Employees", "Business Domain", "How can we help you ?", "Where did you hear about us ?"]

    const [title, setTitle] = useState("")
    const [country, setCountry] = useState(0)

    const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
    const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
    const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
    const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

    const info = [
        {
            title: "More integrations",
            desc: "Pay in more ways with integrations for m-pesa, Paytm, and taxjar. Voice call integrations and more."
        },
        {
            title: "Better issue metrics",
            desc: "See more data inside issues and filter them by day, week, and month in reports."
        },
        {
            title: "Social media post",
            desc: "Schedule posts directly to LinkedIn and Twitter right from your ERPNext account."
        },
        {
            title: "Putaway: get organized",
            desc: "With easy to configure putaway rules, organize your inventory and be in control of what goes where."
        },
        {
            title: "Multi currency payroll",
            desc: "With remote work and a global workforce, pay your employees regardless of their currency."
        },
        {
            title: "Employee self service",
            desc: "Not every user needs access to the whole system. Hence, introducing limited ‘ESS’ users."
        },
        {
            title: "Enhanced issue reporting",
            desc: "Get a readymade report of issues to see the important metrics at a glance under different time periods."
        },
        {
            title: "Assign leaves faster",
            desc: "Configurable leave assignments policies enables quick leave assigments."
        },
        {
            title: "Event streaming",
            desc: "Connect multiple ERPNext instances and even configure some to work offline!"
        },
    ]

    return (
        <div>
            <div className="pt-9 mx-auto z-10 flex flex-col justify-between items-center w-full" style={{ overflow: 'hidden' }}>

                <div
                    className="z-[1] w-full mx-auto absolute left-0 right-0"
                    style={{
                        zIndex: 1,
                        height: "2300px",
                        backgroundImage: `url("../../icons/bg_light_outline.svg")`,
                        backgroundPosition: "right -350px top -200px",
                        backgroundRepeat: "no-repeat"
                    }}>

                </div>
                <div
                    className="z-[1] w-full mx-auto absolute blur-2xl left-0 right-0"
                    style={{
                        zIndex: 1,
                        height: "2300px",
                        backgroundImage: `url("../../icons/bg_light.svg")`,
                        backgroundPosition: "right -550px top -500px",
                        backgroundRepeat: "no-repeat"
                    }}>

                </div>

                <div className="flex flex-col items-center relative w-full">

                    <Navbar activeIndex={4} isDark={true} />

                    <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

                    <p className={`${styles.f25} font-regular ${styles.marginSize}`} style={{ ...setMargin(0, 0, 0, 30) }}>Home / Features</p>

                    <p className={`${styles.f56} font-extrabold`} style={{ ...setMargin(0, 0, 0, 18) }}>Welcome to the future of ERP</p>

                    <p className={`${styles.f25} font-regular text-[#3B3B3B] mb-[100px] ${styles.imgSize} text-center`} style={{ ...setMargin(0, 0, 0, 50), ...setBox("", 858) }}>A complete redesign makeover changes the way you see everything. Also packed with 100+ new features and two new modules.</p>

                    {/* <Image src={'../../icons/cube-12.svg'} className="absolute right-[250px] z-[5] bottom-[500px]" alt="" height={193} width={217} />
            <Image src={'../../icons/cube.svg'} className="absolute left-[250px] z-[5] bottom-[700px]" alt="" height={90} width={100} /> */}



                    <div className={`w-full ${styles.paddingSize} ${styles.marginSize} max-[1750px]:justify-center max-[1750px]:text-center flex flex-wrap justify-between items-center relative overflow-visible`} style={{ ...setPadding(138, 0, 138, 0), ...setMargin(0, 0, 0, 78) }}>

                        <div className="relative">
                            <p className={`${styles.f37} font-semibold ${styles.marginSize}`} style={{ ...setMargin(0, 0, 0, 70) }}>Form and function</p>
                            <p className={`${styles.f189} font-regular ${styles.shapeSize} text-[#3b3b3b10]`} style={{ ...setPosition("", -100, "", "") }}>01</p>
                            <p className={`${styles.f20} font-medium ${styles.imgSize}`} style={{ ...setBox("", 515) }}>A new design, a new way to use ERPNext. Hundreds of careful UI adjustments to ensure you reach everything faster. See clearloutside and inside forms.</p>
                        </div>

                        {/* <img src="../../icons/feature1.png" alt="" /> */}
                        <div className={`${styles.imgSize} z-[5]`} style={{ ...setBox(740, 945), backgroundImage: `url("../../icons/feature1.svg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow: "visible" }}>

                        </div>

                        <img alt="" src={"../../icons/small_blue_cube.svg"} className={`${styles.shapeSize} z-[15]`} style={{ ...setPosition(168, -100, "", ""), ...setBox(89, 100) }} />
                        <img alt="" src={"../../icons/grey_cube.svg"} className={`${styles.shapeSize} z-[15]`} style={{ ...setPosition("", -80, -139, ""), ...setBox(42, 47) }} />


                    </div>

                    <div className={`${styles.paddingSize} ${styles.marginSize} w-full flex max-[1750px]:justify-center max-[1750px]:text-center flex-wrap justify-between items-center relative overflow-visible`} style={{ ...setPadding(138, 0, 138, 0), ...setMargin(0, 0, 0, 78) }}>

                        <div className="relative">
                            <p className={`${styles.f37} font-semibold ${styles.marginSize}`} style={{ ...setMargin(0, 0, 0, 70) }}>With dark mode</p>
                            <p className={`${styles.f189} font-regular ${styles.shapeSize} text-[#3b3b3b10]`} style={{ ...setPosition("", -130, "", "") }}>02</p>
                            <p className={`${styles.f20} font-medium ${styles.imgSize}`} style={{ ...setBox("", 515) }}>For those late nights when the reports are due or you just prefer a dark theme. cmd + shift + g.</p>
                        </div>

                        {/* <img src="../../icons/feature1.png" alt="" /> */}
                        <div className={`${styles.imgSize} z-[5]`} style={{ ...setBox(787, 945), backgroundImage: `url("../../icons/feature2.svg")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", overflow: "visible" }}>

                        </div>

                        <img alt="" src={"../../icons/cube-12.svg"} className={`${styles.shapeSize} z-[15]`} style={{ ...setPosition(-50, "", "", 50), ...setBox(175, 197) }} width={197} height={175} />

                    </div>

                    <div className={`${styles.paddingSize} w-full flex flex-wrap justify-between max-[1750px]:justify-center max-[1750px]:text-center items-center`} style={{ ...setPadding(138, 0, 138, 0) }}>

                        <div className="relative">
                            <p className={`${styles.f37} font-semibold ${styles.marginSize}`} style={{ ...setMargin(0, 0, 0, 70) }}>Accounting refreshed</p>
                            <p className={`${styles.f189} font-regular ${styles.shapeSize} text-[#3b3b3b10]`} style={{ ...setPosition("", -130, "", "") }}>03</p>
                            <p className={`${styles.f20} font-medium ${styles.imgSize}`} style={{ ...setBox("", 515) }}>We accounted for the things that matter.</p>
                        </div>

                        {/* <img src="../../icons/feature1.png" alt="" /> */}
                        <div className={`${styles.imgSize} z-[5]`} style={{ ...setBox(740, 1022), backgroundImage: `url("../../icons/feature3.svg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow: "visible" }}>

                        </div>

                    </div>

                    <div className={`${styles.paddingSize} ${styles.marginSize} w-full overflow-visible relative max-[1750px]:justify-center max-[1750px]:text-center`} style={{ ...setPadding(138, 0, 0, 0), ...setMargin(0, 0, 0, 78) }}>
                        <div
                            className={`${styles.shapeSize} z-7 w-full mx-auto blur-2xl h-full`}
                            style={{
                                ...setPosition(0, "", 0, ""),
                                zIndex: 1,
                                height: "2300px",
                                backgroundImage: `url("../../icons/bg_light.svg")`,
                                backgroundPosition: "right -1400px top -950px",
                                backgroundRepeat: "no-repeat"
                            }}>

                        </div>

                        <img alt="" src={"../../icons/big_blue_cube.svg"} className={`${styles.shapeSize}  z-[15]`} style={{ ...setPosition("", 80, 100, ""), ...setBox(175, 197) }} />

                        <p className={`${styles.f42} font-bold ${styles.marginSize} text-start`} style={{ ...setMargin(0, 0, 0, 70) }}>More Features</p>

                        <div className="w-full flex flex-row">


                            <div className="w-[65%] flex gap-x-[100px] flex-wrap gap-y-[35px]">

                                {
                                    info.map((e) => (

                                        <div className={`${styles.imgSize}`} style={{ ...setBox("", 515) }}>
                                            <p className={`${styles.f37} font-semibold ${styles.marginSize} text-start`} style={{ ...setMargin(0, 0, 0, 30) }}>{e.title}</p>
                                            <p className={`${styles.f20} font-medium text-start`}>{e.desc}</p>
                                        </div>

                                    ))
                                }

                            </div>

                            <div className={`${styles.imgSize} w-[35%] z-[5]`} style={{ ...setBox(660, ""), backgroundImage: `url("../../icons/moreFeatures.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow: "visible" }}>

                            </div>
                        </div>

                    </div>

                    <div className={`${styles.paddingSize} ${styles.marginSize} w-full relative`} style={{ ...setPadding(138, 0, 138, 0), ...setMargin(0, 0, 0, 146) }}>

                        <div className={`${styles.imgSize} ${styles.paddingSize} w-full rounded-[25px] bg-[#F8F8FB] flex flex-row justify-between items-center`} style={{ ...setPadding(87, 62, 110, 52), ...setBox(219, "") }}>
                            <div>

                                <p className={`${styles.f37} font-semibold mb-[14px] text-start`}>Ready to take a tour ?</p>
                                <p className={`${styles.f20} pl-[5px] font-medium text-start`}>Available in new accounts now</p>

                            </div>

                            <FilledButton borderRadius="30px" fillColor="#FFE05F" fontSize={styles.f18} fontWeight="600" textColor="black" title="Start Free Trial" py={19} px={70} />
                        </div>

                    </div>

                </div>

                <Footer />

            </div>
        </div>
    )


}
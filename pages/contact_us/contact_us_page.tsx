import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import '../../app/dropdown.css'
import '../../app/globals.css'
import ServiceCard from "@/components/service_card"
import HostCard from "@/components/host_card"
import Image from "next/image"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn } from "@nextui-org/react";
import { AddNoteIcon } from "../../components/addNoteIcon.jsx";
import { useState } from "react"
import FilledButton from "@/components/filled_button"
import styles from '../../styles/style.module.scss'
// const data = require("./data.json")

import data from "./data.json"

export default function ContactUsPage() {
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
    const jobTitles = ["Manufacturing", "Services", "Retail", "Healthcare", "Education", "Agriculture", "Nonprofit"]
    const placeholders = ["Job titles", "Number of Employees", "Business Domain", "How can we help you ?", "Where did you hear about us ?"]

    const [title, setTitle] = useState("")
    const [country, setCountry] = useState(0)

    const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
    const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
    const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
    const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

    return <div className="pt-9 mx-auto z-10 flex flex-col justify-between items-center w-full h-[2300px]" style={{ overflow: 'hidden' }}>

        <div
            className="z-1 mx-auto absolute w-full left-0 right-0 h-full"
            style={{
                zIndex: 1,
                height: "2300px",
                backgroundImage: `url("../../icons/bg_light_outline.svg")`,
                backgroundPosition: "right -350px top -200px",
                backgroundRepeat: "no-repeat"
            }}>

        </div>
        <div
            className="z-1 mx-auto absolute w-full blur-2xl left-0 right-0 h-full"
            style={{
                zIndex: 1,
                height: "2300px",
                backgroundImage: `url("../../icons/bg_light.svg")`,
                backgroundPosition: "right -550px top -500px",
                backgroundRepeat: "no-repeat"
            }}>

        </div>

        <div className="flex flex-col items-center relative w-full h-full">

            <Navbar activeIndex={3} isDark={true} />

            <div className="w-full z-20 h-[1px] bg-[#707070] mt-[38px] mb-[57px]">.</div>

            <p className={`${styles.f25} font-regular mb-[30px]`}>Home / Contact Us</p>

            <p className={`${styles.f56} font-extrabold mb-[18px]`}>How can we help you?</p>

            <p className={`${styles.f25} font-regular mb-[58px] text-[#3B3B3B]`}>Fill in the form and get it touch with us</p>

            <img src={'../../icons/cube-12.svg'} className={`${styles.shapeSize}`} style={{ ...setPosition("", "", 250, 500), ...setBox(193, 217) }} alt="" />
            <img src={'../../icons/cube.svg'} className={`${styles.shapeSize} z-[5]`} alt="" style={{ ...setPosition(250, "", "", 700), ...setBox(90, 100) }} />

            <div className={`${styles.paddingSize} ${styles.brs} bg-[white] flex flex-col justify-center items-center z-30 overflow-visible`} style={{ ...setPadding(90, 90, 90, 90), ['--data-br' as any]: 75 }}>
                <input type="text" placeholder="Name" className={`${styles.paddingSize} ${styles.marginSize} ${styles.imgSize} focus:outline-none focus:border-[#15BCCB] focus:border-[2px] ${styles.brs} border-[#B2B2B2] border-[1px] ${styles.f18} text-[#B2B2B2] font-regular`} style={{ ['--data-br' as any]: 30, ...setPadding(40, 20, 40, 20), ...setBox("", 676), ...setMargin(90, "", 90, 12) }} />
                <input type="text" placeholder="Email" className={`${styles.paddingSize} ${styles.marginSize} ${styles.imgSize} focus:outline-none focus:border-[#15BCCB] focus:border-[2px]  ${styles.brs} border-[#B2B2B2] border-[1px] ${styles.f18} text-[#B2B2B2] font-regular `} style={{ ['--data-br' as any]: 30, ...setPadding(40, 20, 40, 20), ...setBox("", 676), ...setMargin(90, "", 90, 12) }} />
                <div className={`w-full flex ${styles.marginSize} ${styles.paddingSize}`} style={{ ...setMargin("", "", "", 12), ...setPadding(90, 0, 90, 0) }}>
                    <Dropdown className="" placeholder="ahmad">
                        <DropdownTrigger className={`${styles.imgSize} rounded-l-[30px]`} style={{ ...setBox("", 200) }}>
                            <div className={` ${styles.paddingSize} ${styles.imgSize} flex flex-row justify-center gap-[12.3px] items-center border-[#B2B2B2] border-[1px] ${styles.f18} text-[black] font-regular`} style={{ ...setBox("", 676), ...setPadding("", 12, "", 12) }}>

                                <img className={styles.imgSize} src={'../../icons/arrow_down.svg'} alt="" style={{ ...setBox(7.57, 12.25) }} />
                                <p className={styles.f24}>{data[country].flag}</p>
                                <p className={`${styles.f18} text-[#000000] font-regular`}>({data[country].dial_code})</p>
                            </div>
                        </DropdownTrigger>
                        <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" className={`${styles.imgSize} overflow-scroll`} style={{ ...setBox(310, "") }}>
                            {
                                data.map((e) => (

                                    <DropdownItem
                                        className={`${styles.imgSize}`}
                                        style={{ ...setBox("", 147) }}
                                        key={""}
                                        shortcut=""
                                        onClick={() => {
                                            // setTitle(e)
                                            setCountry(data.indexOf(e))
                                        }}
                                        startContent={<div className="flex flex-row gap-[12.3px]"><p className={`${styles.f24}`}>{e.flag}</p> <p className={`${styles.f18} text-[#000000] font-regular`}>({e.dial_code})</p></div>}
                                    >
                                    </DropdownItem>
                                ))
                            }
                        </DropdownMenu>
                    </Dropdown>
                    <input type="text" placeholder="(345)1234 456" className={`${styles.paddingSize} focus:outline-none focus:border-[#15BCCB] focus:border-[2px] rounded-r-[30px] border-[#B2B2B2] border-[1px] w-full ${styles.f18} text-[#B2B2B2] font-regular`} style={{ ...setPadding(20, 20, 20, 20) }} />

                </div>
                {
                    placeholders.map((z) => (

                        <Dropdown className={`${styles.imgSize} ${styles.marginSize}`} style={{ ...setBox("", 290), ...setMargin(90, "", 90, "") }} placeholder="ahmad">
                            <DropdownTrigger className="" >
                                <div className={`${styles.paddingSize} ${styles.imgSize} ${styles.marginSize} flex flex-row justify-between items-center ${styles.brs} border-[#B2B2B2] border-[1px] ${styles.f18} text-[black] font-regular`} style={{ ['--data-br' as any]: 30, ...setPadding(40, 20, 40, 20), ...setBox("", 676), ...setMargin("", "", "", 12) }}>
                                    <p>{title == "" ? z : title}</p>
                                    {/* <p>icon</p> */}
                                    <img className={styles.imgSize} src={'../../icons/arrow_down.svg'} style={{ ...setBox(7.57, 12.25) }} alt="" />
                                </div>
                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons" className={`${styles.paddingSize} ${styles.imgSize}`} style={{ ...setBox("", 290), ...setPadding(39, 24, 39, 24) }}>
                                {jobTitles.map((e) =>
                                    <DropdownItem
                                        key={e}
                                        shortcut=""
                                        onClick={() => {
                                            setTitle(e)
                                        }}
                                        startContent={<p className={`${styles.f18} text-[#000000] font-regular`}>{e}</p>}
                                    >
                                    </DropdownItem>
                                )
                                }
                            </DropdownMenu>
                        </Dropdown>
                    ))

                }


                < textarea placeholder="Message" rows={5} className={`${styles.imgSize} ${styles.marginSize} ${styles.paddingSize} focus:outline-none focus:border-[#15BCCB] focus:border-[2px] ${styles.brs} border-[#B2B2B2] border-[1px] ${styles.f18} text-[black] font-regular`} style={{ ['--data-br' as any]: 30, ...setPadding(40, 20, 40, 20), ...setMargin(90, "", 90, 12), ...setBox("", 676) }}></textarea>
                <div className={`${styles.brs} overflow-hidden`} style={{ ['--data-br' as any]: 30 }}>
                    <FilledButton borderRadius="0px" fillColor="#15BCCB" fontSize={styles.f18} textColor="white" fontWeight="700px" py={19} title="send" px={314} />
                </div>
                <div className="bg-[#70707014] mt-[46.5px] w-full h-[1px] mb-[42px]">

                </div>

                <div className={`${styles.marginSize} flex flex-row justify-between items-center gap-[115px]`} style={{ ...setMargin("", 42, "", "") }}>
                    <div className="flex items-end">
                        <div className={`${styles.imgSize} ${styles.marginSize} bg-[#4A44C6] ${styles.brs} flex justify-center items-center`} style={{ ['--data-br' as any]: 15, ...setBox(80, 80), ...setMargin("", "", 23, "") }}>
                            <img alt="" className={styles.imgSize} src={"/icons/email.png"} style={{ ...setBox(22.5, 28.5) }} />
                        </div>

                        <p className={`${styles.f18} font-regular ${styles.marginSize}`} style={{ ...setMargin("", "", "", 18) }}>FlowERP@exmample.com</p>
                    </div>
                    <div className="flex items-end">
                        <div className={`${styles.imgSize} ${styles.marginSize} bg-[#FF6500] ${styles.brs} flex justify-center items-center`} style={{ ['--data-br' as any]: 15, ...setBox(80, 80), ...setMargin("", "", 23, "") }}>
                            <img alt="" className={styles.imgSize} src={"/icons/phone-call.png"} style={{ ...setBox(22.5, 28.5) }} />
                        </div>

                        <p className={`${styles.f18} font-regular ${styles.marginSize}`} style={{ ...setMargin("", "", "", 18) }}>+134 2111 2452</p>
                    </div>
                </div>
            </div>

        </div>



        <Footer />

    </div>


}
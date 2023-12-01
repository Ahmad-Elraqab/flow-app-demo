import Image from 'next/image'
import FilledButton from '@/components/filled_button'
import OutlinedButton from '@/components/outlined_button'
import ServiceCard from '@/components/service_card'
import HostCard from '@/components/host_card'
import Logos from '@/components/logos'
import '../styles/dropdown.css'
// import '../styles/fontsStyle';
// import Classes from '../styles/fontsStyle'
import styles from '../styles/style.module.scss';



import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function Home() {

  const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
  const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
  const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
  const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

  return (
    <div>
      <div className="pt-9 mx-auto z-10 flex flex-col items-center overflow-hidden relative" style={{ maxWidth: "1980px" }}>
        <div
          className={`z-0 mx-auto blur-2xl absolute left-0 right-0 w-full ${styles.imgPos}`}
          style={{
            height: "1121px",
            maxWidth:"1980px",
            backgroundImage: `url("icons/bg_logo.svg")`,
          }}>

        </div>

        <Navbar activeIndex={0} />
        <div className='flex flex-col justify-start z-40 w-full h-full text-center relative'>

          {/* part 1 */}
          <div className={`flex flex-col ${styles.ph} mt-12 justify-start overflow-hidden z-40 w-full text-center relative`}>

            <p className={`text-white z-40 text-semibold ${styles.f56}`}><b className='text-extrabold'>Most Agile ERP</b> on the Planet</p>
            <p className={`text-white z-40 text-regular ${styles.f25}`}>ERPNext is the world’s best free and open source ERP</p>

            <div className='flex flex-row gap-x-6 justify-center mt-10'>
              <FilledButton px={80} py={20} />
              <OutlinedButton px={80} py={20} />
            </div>

            <Logos />

            <img className={`z-30 ${styles.shapeSize}`} style={{ ...setPosition(460, "", "", 145), ...setBox(111, 100) }} src={"icons/cube-5.svg"} alt='' />
            <img className={`z-30 ${styles.shapeSize}`} style={{ ...setPosition("", 150, 188, ""), ...setBox(288, 323) }} src={"icons/cube.svg"} alt='' />

            <div className='flex flex-col absolute right-[75px] bottom-[184px] items-start'>

              <div className='w-px h-20 bg-white mb-6 ml-3'></div>

              <div className='flex flex-row justify-center items-center'>
                <p className='text-white mr-3'>EN</p>
                <div className='w-2 h-2 bg-white rounded-lg'></div>
              </div>
              <p className='text-white mt-3 opacity-50'>AR</p>

            </div>


            <div className='w-[1288px] h-[650px] relative items-center ml-[auto] mr-[auto] mt-[63px]'>

              {/* 1 */}
              <div className={`${styles.shapeSize} ${styles.borderRadiusSize} ${styles.paddingSizeAll} mt-[3%] z-40 rounded-2xl flex flex-row justify-start text-start bg-white items-center`} style={{ boxShadow: "0px 4px 60px #6C7E93", ['--data-p' as any]: 12, ['--data-w' as any]: 350, ['--data-l' as any]: 0, ['--data-r' as any]: 0, }}>

                <div className='rounded-md mr-3 p-3.5' style={{ backgroundColor: "#FEF8E7" }}>
                  <img className={`${styles.imgSize}`} src={"icons/paint.svg"} alt='' style={{ ...setBox(32, 32) }} />
                </div>

                <div className='mr-5'>
                  <p className={`text-black font-medium mb-1.5 ${styles.f18}`}>Basic design</p>
                  <p className={`${styles.f14} font-regular`} style={{ color: "#898C93" }}>Introduction to Graphic Design.</p>
                </div>

                <div className={`${styles.imgSize} rounded p-x-2.5 p-y-2 flex flex-row justify-center items-center`} style={{ ...setBox(24, 24), backgroundColor: "#FAFAFC" }}>
                  <Image className='' src={"icons/right-arrow.svg"} alt='' width={8} height={4} />
                </div>
              </div>

              {/* 2 */}
              <div className={`${styles.shapeSize} ${styles.borderRadiusSize} ${styles.marginSize} ${styles.paddingSize} z-50 rounded-2xl text-start bg-white items-center`} style={{ boxShadow: "0px 5px 108px #6C7E93", ...setPosition(0, "", 0, ""), ...setBox("", 245), ...setMargin(170, 150, 0, 0), ...setPadding(20, 16, 27, 10), }}>

                <p className={`${styles.f16} text-black text-md font-regular mb-3`} >Courses</p>

                <div className={`flex flex-row justify-start`}>

                  <p className={`${styles.f36} text-black font-medium ${styles.marginSize}`} style={{ ...setMargin(0, 0, 32, 0) }} >1</p>

                  <img className={`${styles.imgSize}`} src={"icons/chart_2.svg"} alt='' style={{ ...setBox(97, 147) }} />

                </div>

              </div>

              {/* 3 */}
              <div className={`rounded-2xl text-start bg-white items-center ${styles.borderRadiusSize} ${styles.shapeSize} ${styles.marginSize} ${styles.paddingSize}`} style={{ ...setMargin(400, 0, 0, 0), ...setBox("", 495), ...setPosition(0, "", 0, ""), ...setPadding(26, 36, 28, 51), boxShadow: "0px 4px 60px #6C7E93", }}>

                <img className={`${styles.marginSize} ${styles.imgSize}`} src={"icons/Group 418.svg"} alt='' style={{ ...setMargin(0, 0, 0, 61), ...setBox(236, 439), }} />

                <p className={`${styles.f16} font-normal`} style={{ color: "#4A44C6" }}>You have saved 12% of your spending compared to the previous month.</p>

              </div>

              {/* 4 */}
              <div className={`${styles.shapeSize} ${styles.marginSize} ${styles.borderRadiusSize} ${styles.paddingSize} z-30 mt-[1%] rounded-2xl text-start bg-white items-start`} style={{ boxShadow: "0px 4px 60px #6C7E93", ...setMargin(910, 0, 0, 0), ...setBox("", 188), ...setPosition(0, "", 0, ""), ...setPadding(16, 20, 16, 20) }}>

                <div className={`${styles.imgSize} rounded mb-[8px]`} style={{ ...setBox(46, 46), }}>
                  <img className={`${styles.imgSize}`} src={"icons/Mask Group.svg"} alt='' style={{ ...setBox(46, 46) }} />
                </div>

                <p className={`${styles.f16} font-normal mb-[14px]`}>Mohammed Awad</p>
                <p className={`${styles.f12} font-normal mb-[7px]`} style={{ color: "#A6B1BB" }}>Assistant</p>
                <p className={`${styles.f12} font-normal mb-[13px]`} style={{ color: "#A6B1BB" }}>Dept of Graphic Design</p>
                <FilledButton textColor='white' fillColor='#17BCCB' px={40} py={8} title='View Profile' fontSize={styles.f12} fontWeight='400' borderRadius='5px' width='100%' />

              </div>

              {/* 5 */}
              <div className={`${styles.shapeSize} ${styles.paddingSize} ${styles.borderRadiusSize} ${styles.marginSize} rounded-2xl text-start bg-white items-start`} style={{ boxShadow: "0px 4px 60px #6C7E93", ...setMargin(670, 400, 0, 0), ...setBox("", 245), ...setPosition(0, "", 0, ""), ...setPadding(16, 20, 16, 20) }}>

                <p className={`${styles.f16} font-normal mb-[12px] text-[#364F65]`}>Total Students</p>
                <p className={`${styles.f36} font-medium mb-[10px] text-[#364F65]`}>93</p>

                <img src={"icons/grid_shape.svg"} className={`${styles.imgSize}`} alt='' style={{ ...setBox(46, 245) }} />

              </div>

              {/* 6 */}
              <div className={`z-1 rounded-2xl text-start bg-[#FAFBFC] items-start ${styles.borderRadiusSize} ${styles.shapeSize} ${styles.marginSize} ${styles.paddingSize}`} style={{ boxShadow: "0px 4px 60px #6C7E93", ...setPosition(0, "", 0, ""), ...setMargin(930, 250, 0, 0), ...setBox("", 375), ...setPadding(40, 40, 30, 30), }}>

                <p className={`font-medium mb-[12px] text-[#203B54] ${styles.f24}`}>Termtest schedule</p>

                <div className='flex flex-row justify-between items-center mb-[13.5px]'>

                  <p className={`${styles.f14} font-normal mb-[12px] text-[#76808D]`}>15 march</p>
                  <img className={`${styles.imgSize}`} src={"icons/v.svg"} alt='' style={{ ...setBox(20, 20) }} />

                </div>

                <div className={`${styles.paddingSize} rounded-xl`} style={{ boxShadow: "0px 4px 60px #A5AAB5", ...setPadding(20, "", 24, "") }}>

                  <div className='flex flex-row justify-start items-center mb-[20px]'>

                    <p className={`${styles.f18} font-medium mr-[16px] text-[#898C93]`}>09:00</p>
                    <div className='mr-[16px]' style={{ width: "3px", height: "40px", backgroundColor: "#FED554", borderRadius: "3px" }}></div>
                    <div className='flex flex-col gap-[2px] items-start'>

                      <p className={`${styles.f11} font-normal text-[#9A9DAA]`}>GDM 2nd semester</p>
                      <p className={`${styles.f13} font-medium text-[#222222]`}>One-line Drawing Method</p>

                    </div>

                  </div>

                  <div className='flex flex-row justify-start items-center '>

                    <p className={`${styles.f18} font-medium mr-[16px] text-[#898C93]`}>09:00</p>
                    <div className='mr-[16px]' style={{ width: "3px", height: "40px", backgroundColor: "#FED554", borderRadius: "3px" }}></div>
                    <div className='flex flex-col gap-[2px] items-start'>

                      <p className={`${styles.f11} font-normal text-[#9A9DAA]`}>GDM 2nd semester</p>
                      <p className={`${styles.f13} font-medium text-[#222222]`}>One-line Drawing Method</p>

                    </div>

                  </div>


                </div>

              </div>

            </div>

          </div>

          {/* part 2 */}
          <div className='flex flex-col justify-center items-center z-40 w-full h-[1245px] max-[390px]:h-[800px] overflow-hidden text-center relative'>

            <div
              className="z-0 mx-auto absolute blur-2xl left-0 right-0 w-full"
              style={{
                height: "1884px",
                backgroundImage: `url("icons/yellow_bg_no_blur.png")`,
                backgroundPosition: "right -200px bottom -400px",
              }}>

            </div>

            <div
              className="z-0 mx-auto absolute left-0 right-0 w-full"
              style={{
                height: "1675px",
                backgroundImage: `url("icons/outline_yellow_bg.svg")`,
                backgroundPosition: "right -100px bottom -250px",
              }}>

            </div>

            <div className={`flex flex-wrap justify-between max-[1820px]:justify-center items-center z-40 w-full h-full text-center relative ${styles.paddingSize}`} style={{ ...setPadding(128, 0, 128, 0) }}>

              <img className={`${styles.shapeSize}`} style={{ ...setPosition("", 50, 150, 0), ...setBox(79, 89) }} src={"icons/grey_cube.svg"} alt='' />

              <div className={`${styles.paddingSize} max-[1820px]:justify-center max-[1820px]:items-center`} style={{ ...setPadding(0, 250, 0, 0) }}>
                <p className={`${styles.f60} font-semibold w-[431px] text-start max-[1820px]:text-center leading-[70px] mb-[20px]`}>Almost everything you need</p>
                <p className={`${styles.f16} font-medium text-[#676767] mb-[57px]`}>ERPFlow comes with 1000+ objects to help you run your business</p>

                <div className={`${styles.marginSize} max-[1820px]:justify-center max-[1820px]:items-center flex w-full`} style={{ ...setMargin(0, 0, 0, 100) }}>
                  <FilledButton py={19} px={53} fillColor='#15BCCB' title='MORE Solutions' textColor='white' fontWeight='700px' fontSize={styles.f18} />
                </div>

                <img className={`${styles.imgSize} ${styles.marginSize}`} src={"icons/grey_cube.svg"} alt='' style={{ ...setBox(112, 125), ...setMargin(150, 0, 0, 40) }} />
                {/* absolute bottom-[150px] left-[350px] */}
              </div>

              <div className='flex flex-row gap-[32px] max-[1820px]:justify-center'>

                <div className='gap-[32px] flex flex-col'>
                  <ServiceCard iconHeight={62} iconWidth={62} icon='Settings' title='Services' subTitle='Run your services business better with ' />
                  <ServiceCard iconHeight={56} iconWidth={44.8} icon='list' title='Distribution' subTitle='Run your services business better with ' />
                </div>

                <div className='mt-[67px] gap-[32px] flex flex-col'>
                  <ServiceCard iconHeight={58} iconWidth={58} icon='PetriDish' title='Manufacturing' subTitle='Run your services business better with ' />
                  <ServiceCard iconHeight={49} iconWidth={49} icon='Bank' title='Education' subTitle='Run your services business better with ' />
                </div>

                <div className='gap-[32px] flex flex-col'>
                  <ServiceCard iconHeight={46} iconWidth={57.5} icon='Standings' title='Retail' subTitle='Run your services business better with ' />
                  <ServiceCard iconHeight={48} iconWidth={48} icon='BankCard' title='Non Profit' subTitle='Run your services business better with ' />
                </div>


              </div>
            </div>

          </div>

          {/* part 3 */}
          <div className='flex flex-col items-center justify-center w-full h-[1080px] text-center relative'>

            <div
              className="mx-auto z-1 absolute left-0 right-0 w-full"
              style={{
                height: "1884px",
                backgroundImage: `url("icons/blue_bg.svg")`,
                backgroundPosition: "right -500px bottom -750px",
              }}>

            </div>

            <div
              className="mx-auto z-1 absolute left-0 right-0 w-full"
              style={{
                height: "1800px",
                backgroundImage: `url("icons/outlined_blue_bg.svg")`,
                backgroundPosition: "right -250px bottom -250px",
              }}>

            </div>

            <img className={`${styles.shapeSize}`} src={"icons/cube-6.svg"} alt='' style={{ ...setPosition("", 120, 200, ""), ...setBox(173, 194) }} />
            <img className={`${styles.shapeSize}`} src={"icons/cube-5.svg"} alt='' style={{ ...setPosition(160, "", "", 140), ...setBox(86, 97) }} />


            <p className={`${styles.f60} z-40 font-semibold text-[white] text-start leading-[70px] mb-[14px]`}>Self Hosted Support</p>
            <p className={`${styles.f16} z-40 font-medium text-[white] text-start leading-[32px] mb-[32px]`}>ERPFlow comes with 1000+ objects to help you run your business</p>

            <div className='flex flex-wrap w-full justify-center z-40 gap-[34px]'>

              <HostCard iconHeight={218} iconWidth={218} icon='host1' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Support' />
              <HostCard iconHeight={218} iconWidth={218} icon='host2' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Enterprise' />
              <HostCard iconHeight={212} iconWidth={212} icon='host3' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Contact Us' />
              <HostCard iconHeight={225} iconWidth={225} icon='host4' subTitle='Get priority bug fix support from the core ERPNext team with the experience to ensure your systems run defect-free' title='Frappe' />

            </div>
          </div>

          {/* part 4 */}
          <div className='flex flex-col items-center justify-center z-40 h-[1500px] max-[390px]:h-[900px] w-full overflow-hidden text-center relative'>

            <div
              className="w-full mx-auto z-1 blur-xl absolute left-0 right-0"
              style={{
                height: "1884px",
                backgroundImage: `url("icons/bg_light.svg")`,
                backgroundPosition: "right -500px bottom -650px",
              }}>

            </div>

            <img className={`${styles.shapeSize}`} style={{ ...setPosition("", 220, 170, ""), ...setBox(175, 197) }} src={"icons/big_blue_cube.svg"} alt='' />
            <img className={`${styles.shapeSize}`} style={{ ...setPosition(150, "", "", 400), ...setBox(89, 100) }} src={"icons/small_blue_cube.svg"} alt='' />

            <div className={`${styles.paddingSize} ${styles.imgSize} z-40 bg-gradient-to-b from-[white] to-[#FFFFFF30] rounded-[75px]`} style={{ ...setPadding(70, 109, 70, 109), ...setBox("", 1022), boxShadow: "0px 10px 50px #00000006" }}>

              <p className={`${styles.f60} ${styles.marginSize} z-40 font-bold text-center leading-[70px]`} style={{ ...setMargin(0, 0, 0, 51) }}>Frequently asked questions</p>
              <nav className={`${styles.paddingSize}`} style={{ ...setPadding(146, 0, 146, 0) }}>
                <ul>
                  {
                    ['How does it work?', 'How can i setup a new website?', 'How does it work?', 'How does it work?', 'How does it work?'].map(e => (
                      <li className={`${styles.marginSize}`} style={{ ...setMargin(0, 0, 0, 37) }}>
                        <a href="#nowhere" className="yourLinkClass">
                          <div className={`${styles.imgSize} flex flex-row justify-between items-start border-b-[2px] border-[#EFEFEF]`} style={{ ...setBox(71, 590) }}>
                            <div className='flex flex-row'>
                              <p className={`${styles.f21} z-40 font-medium text-center ${styles.marginSize}`} style={{ ...setMargin(0, 0, 0, 42) }}>01</p>
                              <p className={`${styles.f18} z-40 font-semibold text-center`}>{e}</p>
                            </div>
                            <img className={styles.imgSize} src={"icons/arrow_down.svg"} alt='' style={{ ...setBox(7.33, 12) }} />
                          </div>
                        </a>
                        <ul>
                          <li className={`font-medium ${styles.f16} text-[#676767] text-start ${styles.paddingSize}`} style={{ ...setPadding(50, 36, 0, 0) }}>Suppose you produce t-shirts in different sizes and colors. You’ll need to track each type of t-shirt and its variants, known as item variants. In ERPNext, the primary item is stored as an item template, and each of the variations is stored as an item variant. You can store any attribute, such as color or shape, for each item variant.</li>
                        </ul>
                      </li>
                    ))

                  }
                </ul>
              </nav>
            </div>


          </div>

          {/* part 5 */}
          <div className='mt-[99px] flex flex-col justify-center items-center mb-[132px]'>
            <p className={`${styles.f60} z-40 font-bold text-center leading-[70px] mb-[14px]`}>Loved by users</p>
            <p className={`${styles.f16} z-40 font-medium text-center leading-[70px] mb-[104px]`}>Used by more than 5000 companies across the world</p>
            <img className={`${styles.imgSize}  backdrop-grayscale-[.5]`} src={"icons/sponsor.svg"} alt='' style={{ ...setBox(175, 1643) }} />
          </div>
        </div>
        <Footer />
      </div >
    </div>
  )
}

import Link from "next/link";
import Image from "next/image";
import styles from '../styles/style.module.scss'

const Footer: React.FunctionComponent = () => {

  const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
  const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
  const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
  const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

  return (

    <div className='bg-[#E2FAFC] z-40 w-full z-50 max-[1500px]:justify-start max-[1500px]:items-start'>

      <div className={` w-full flex flex-wrap justify-center max-[1500px]:justify-start max-[1500px]:items-start ${styles.paddingSize}`} style={{ ...setPadding(135, "", 135, "") }}>

        <div className={`flex flex-row gap-[100px] justify-end items-between max-[1500px]:border-r-[0px] border-[#15BCCB] border-r-[1px] ${styles.paddingSize}`} style={{ ...setPadding("", 84, 60, 84) }}>
          <div className=''>
            <p className={`font-bold ${styles.f27} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 70) }}>contact</p>
            <p className={`font-regular ${styles.f18} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 20.7) }}>Saudi Arabai Jeddah</p>
            <p className={`font-regular ${styles.f18} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 20.7) }}>King Abdjalazez</p>
            <p className={`font-regular ${styles.f18} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 20.7) }}>123 street alhamdea</p>
            <p className={`font-regular ${styles.f18} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 20.7) }}>+966 598828477</p>
          </div>
          <div className={`flex flex-col gap-y-5 ${styles.marginSize}`} style={{ ...setMargin("", 80, "", "") }}>
            <div className={`${styles.imgSize} flex flex-row justify-center items-center`} style={{ ...setBox(46, 46), backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={styles.imgSize} src={"../../icons/logo-fb.svg"} alt='' style={{ ...setBox(13, 18) }} /></div>
            <div className={`${styles.imgSize} flex flex-row justify-center items-center`} style={{ ...setBox(46, 46), backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={styles.imgSize} src={"../../icons/logo-twitter.svg"} alt='' style={{ ...setBox(46, 18) }} /></div>
            <div className={`${styles.imgSize} flex flex-row justify-center items-center`} style={{ ...setBox(46, 46), backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={styles.imgSize} src={"../../icons/logo-instagram.svg"} alt='' style={{ ...setBox(46, 18) }} /></div>
            <div className={`${styles.imgSize} flex flex-row justify-center items-center`} style={{ ...setBox(46, 46), backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={styles.imgSize} src={"../../icons/logo-linkedin.svg"} alt='' style={{ ...setBox(46, 18) }} /></div>
          </div>
        </div>

        <div className={`flex flex-col justify-start items-stretch border-[#15BCCB] max-[1500px]:border-r-[0px] border-r-[1px] ${styles.paddingSize}`} style={{ ...setPadding("", 84, 119, 84) }}>
          <p className={`font-bold ${styles.f27} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 45) }}>services</p>
          <div className='grid grid-rows-5 grid-flow-col gap-[25px]'>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Cloud</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Support</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Support</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Enterprise</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Login</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Contact sales</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Sing Up</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Mobile Apps</p>

          </div>
        </div>
        <div className={`flex flex-col justify-start items-stretch ${styles.paddingSize}`} style={{ ...setPadding(119, 84, 119, 84) }}>
          <p className={`font-bold ${styles.f27} ${styles.marginSize}`} style={{ ...setMargin("", "", "", 45) }} >Solutions</p>
          <div className='grid grid-rows-5 grid-flow-col gap-[25px]'>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Manufacturing</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Services</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Distribution</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Retail</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Education</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Healthcare</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Agriculture</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Non Profit</p>
            <p className={`font-regular ${styles.f18}  text-[#777E90]`}>Whitepapers</p>

          </div>
        </div>
      </div>

      <div className='h-[87px] flex flex-col justify-center items-center border-[#15BCCB] border-t-[1px]'>
        <p className={`font-regular ${styles.f15}`}>Copyright © 2022 Flow Erp System</p>
      </div>

    </div>

  );
}

export default Footer
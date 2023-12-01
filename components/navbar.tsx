import Image from "next/image";
import Link from "next/link";
import styles from '../styles/style.module.scss'
import FilledButton from "./filled_button";

type NavbarProps = {
    isDark?: boolean;
    activeIndex: number,
};
const Navbar: React.FunctionComponent<NavbarProps> = ({ isDark = false, activeIndex }) => {

    let _color = isDark ? "#000000" : "#FFFFFF"

    let style = { color: _color };
    return (
        <div className="flex w-full flex-row z-40 items-center justify-center max-[820px]:justify-between max-[820px]:px-[50px]">

            {/* style={{ marginRight: "240px" }} */}
            <div className={`flex flex-row z-40 items-center ${styles.navLogoMarg}`} style={{ ['--data-mr' as any]: 240 }} >
                {/* <Image className="mr-4" src={"../../icons/logo.svg"} alt="" width={65.4} height={105} /> */}
                <img className={`mr-4 ${styles.imgSize}`} src={"../../icons/logo.svg"} alt="" style={{ ['--data-h' as any]: 105, ['--data-w' as any]: 65.4, }} />
                <div className="flex flex-col justify-end pb-3">
                    <p className={styles.f36} >Flow <b>ERP</b> </p>
                    <p className={styles.f9} >Enterprise Resource Planning System</p>
                </div>
            </div>
            {/* style={{ marginRight: "362px" }} */}
            <div className={`flex  flex-row z-40 justify-between max-[820px]:hidden ${styles.navListMarg}`} style={{ ['--data-mr' as any]: 362 }} >

                <Link href={'/'} className={`${styles.f18} mr-10`} style={{ ...style, fontWeight: activeIndex == 0 ? 'bold' : '500px' }}><p>HOME</p></Link>
                <Link href={'/solutions/solutions_page'} className={`${styles.f18} mr-10`} style={{ ...style, fontWeight: activeIndex === 1 ? 'bold' : '500px' }}><p>SOLUTIONS</p></Link>
                <Link href={'/services/services_page'} className={`${styles.f18} mr-10`} style={{ ...style, fontWeight: activeIndex == 2 ? 'bold' : '500px' }}><p>SERVICES</p></Link>
                <Link href={'/contact_us/contact_us_page'} className={`${styles.f18} mr-10`} style={{ ...style, fontWeight: activeIndex == 3 ? 'bold' : '500px' }}><p>CONTACT US</p></Link>
                <Link href={'/feature/feature_page'} className={`${styles.f18}`} style={{ ...style, fontWeight: activeIndex == 4 ? 'bold' : '500px' }}><p>FEATURE</p></Link>
            </div>
            <div className="flex flex-row z-40 items-center">

                <p className={`text-white ${styles.colorSign} ${styles.f18} font-medium mr-9`} style={style}>SIGN IN</p>

                <FilledButton px={57} py={19} />
            </div>

        </div>
    );
}

export default Navbar
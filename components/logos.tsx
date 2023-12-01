import Link from "next/link";
import Image from "next/image";
import styles from '../styles/style.module.scss'

const Logos: React.FunctionComponent = () => {

    return (

        <div className={`${styles.shapeSize} flex flex-col gap-y-5`} style={{ ['--data-l' as any]: 138, ['--data-b' as any]: 87 }}>
            <div className={`flex flex-row justify-center items-center ${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 46, backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={`${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 13, }} src={"icons/logo-fb.svg"} alt='' /></div>
            <div className={`flex flex-row justify-center items-center ${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 46, backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={`${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 18, }} src={"icons/logo-twitter.svg"} alt='' /></div>
            <div className={`flex flex-row justify-center items-center ${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 46, backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={`${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 18, }} src={"icons/logo-instagram.svg"} alt='' /></div>
            <div className={`flex flex-row justify-center items-center ${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 46, backgroundColor: "#15BCCB", borderRadius: "30px" }}><img className={`${styles.imgSize}`} style={{ ['--data-h' as any]: 46, ['--data-w' as any]: 18, }} src={"icons/logo-linkedin.svg"} alt='' /></div>
        </div>


    );
}

export default Logos
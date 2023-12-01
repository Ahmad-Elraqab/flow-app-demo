import Link from "next/link";
import { AppProps } from 'next/app';
import styles from '../styles/style.module.scss'
// import '../styles/style.module.scss'

type FilledButtonProps = {
    title?: string;
    px?: number,
    py?: number,
    fillColor?: string,
    textColor?: string,
    fontSize?: string,
    fontWeight?: string,
    borderRadius?: string,
    width?: string,
};


const FilledButton: React.FunctionComponent<FilledButtonProps> = ({ title, px, py, fillColor, textColor, fontWeight, fontSize, borderRadius, width }) => {

    return (

        <div className="flex flex-row z-40 items-center" style={{ minWidth: width ?? "0px", borderRadius: `${borderRadius ?? "30px"}` }}>

            <Link href={'/'} >
                <div className={`${styles.buttonPadding}`} style={{ ['--data-py' as any]: py, ['--data-px' as any]: px, textAlign: "center", backgroundColor: `${fillColor ? fillColor : "#FFE05F"} `, borderRadius: borderRadius ?? "40px" }}>
                    <p className={`${fontSize ?? styles.f18}`} style={{ fontWeight: fontWeight ? fontWeight : "600", color: `${textColor ? textColor : "#675611"}` }}>{title ? title : "Get Started"} </p>
                </div>
            </Link >
        </div >

    );
};


export default FilledButton
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/style.module.scss'

type HostCardProps = {
    icon?: string;
    iconHeight: number,
    iconWidth: number,
    title?: string,
    subTitle?: string,
};

const HostCard: React.FunctionComponent<HostCardProps> = ({ title, subTitle, icon, iconHeight, iconWidth }) => {

    const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
    const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
    const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
    const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

    return (

        <div className={`${styles.paddingSize} ${styles.imgSize} flex flex-col items-center justify-center rounded-[30px] bg-[white]`} style={{ ...setPadding(32, 26, 32, 33), ...setBox("", 357), boxShadow: "0px 10px 50px #00000006", }}>

            <img className={`${styles.imgSize} ${styles.marginSize}`} src={`../../icons/${icon}.svg`} alt='' style={{ ...setMargin("", "", "", 17), ...setBox(iconHeight, iconWidth) }} />
            < p className={`${styles.f18} ${styles.marginSize} font-semibold text-center`} style={{ ...setMargin("", "", "", 18) }}>{title}</p>
            <p className={`${styles.f16} ${styles.marginSize} font-medium text-center text-[#676767]`} style={{ ...setMargin("", "", "", 25) }}>{subTitle}</p>

        </div>

    );
}

export default HostCard
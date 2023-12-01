import Link from "next/link";
import Image from "next/image";
import style from '../styles/style.module.scss'

type ServiceCardProps = {
    icon?: string;
    iconHeight: number,
    iconWidth: number,
    title?: string,
    subTitle?: string,
};

const ServiceCard: React.FunctionComponent<ServiceCardProps> = ({ title, subTitle, icon, iconHeight, iconWidth }) => {
    const setPosition: Function = (l?: any, t?: any, r?: any, b?: any) => { return { ['--data-l' as any]: l, ['--data-t' as any]: t, ['--data-r' as any]: r, ['--data-b' as any]: b, } }
    const setMargin: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-ml' as any]: l, ['--data-mt' as any]: t, ['--data-mr' as any]: r, ['--data-mb' as any]: b, } }
    const setPadding: Function = (l: any, t: any, r: any, b: any) => { return { ['--data-pl' as any]: l, ['--data-pt' as any]: t, ['--data-pr' as any]: r, ['--data-pb' as any]: b, } }
    const setBox: Function = (h: any, w: any) => { return { ['--data-h' as any]: h, ['--data-w' as any]: w, } }

    return (

        <div className={`${style.imgSize} ${style.paddingSize} items-start rounded-[30px] bg-[white]`} style={{ ...setBox("", 276), ...setPadding(35, 46, 46, 33), boxShadow: "0px 10px 50px #00000006", }}>

            <img className={`${style.imgSize} ${style.marginSize}`} src={`../../icons/${icon}.svg`} style={{ ...setMargin("", "", "", 17), ...setBox(iconHeight, iconWidth) }} alt='' />
            <p className={`${style.f18} font-semibold text-start ${style.marginSize}`} style={{ ...setMargin("", "", "", 18) }}>{title}</p>
            <p className={`${style.f18} font-medium text-start text-[#676767] ${style.marginSize}`} style={{ ...setMargin("", "", "", 25) }}>{subTitle}</p>
            <img className={`${style.imgSize}`} src={"../../icons/share.svg"} alt='' style={{ ...setBox(20, 20) }} />

        </div>

    );
}

export default ServiceCard
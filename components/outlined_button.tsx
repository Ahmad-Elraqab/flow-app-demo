import Link from "next/link";
import styles from '../styles/style.module.scss'

type OutlinedButtonProps = {
    px?: number,
    py?: number,
    fontSize?: string,
};


const OutlinedButton: React.FunctionComponent<OutlinedButtonProps> = ({ px, py, fontSize }) => {

    return (
        <div className="flex flex-row z-40 items-center" style={{ minWidth: "0px", borderRadius: "30px" }}>

            <Link href={'/'} >
                <div className={`${styles.buttonPadding}`} style={{ ['--data-py' as any]: py, ['--data-px' as any]: px, border: "1px solid white", textAlign: "center", borderRadius: "40px" }}>
                    <p className={`${fontSize ?? styles.f18}`} style={{ fontWeight: "600", color: "white" }}> Get Started </p>
                </div>
            </Link >
        </div >
    );
}


export default OutlinedButton;
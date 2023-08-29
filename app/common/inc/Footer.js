"use client";

import Link from "next/link";
import classes from "../css/Footer.module.scss";

export default function Footer() {

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    return (
        <footer className={classes.footer}>
            <div className={classes.inner}>
                <div className={classes.copyright}>
                    <p className="poppins">Copyright 2023 kwonjunhee All Right Reserved</p>
                    <div onClick={scrollToTop}>Go To Top
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                                <g clipPath="url(#clip0_1023_2953)">
                                    <path d="M10 4.76L6.31 1.24L5 0L3.69 1.24L0 4.76L1.31 6L4 3.44V12H6V3.44L8.69 6L10 4.76Z" fill="#192227" />
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

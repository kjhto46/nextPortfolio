"use client";

import Link from "next/link";
import classes from "../css/Footer.module.scss";

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.inner}>
                <div className={classes.copyright}>
                    <p className="poppins">Copyright 2023 kwonjunhee All Right Reserved</p>
                    <Link href={"/"}>
                        Go To Top
                    </Link>
                </div>
            </div>
        </footer>
    )
}

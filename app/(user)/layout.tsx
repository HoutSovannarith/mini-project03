import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../globals.css";
import FooterComponent from "@/components/footer/FooterComponent";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import React from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} h-screen flex flex-col justify-between`}>
        <header>
            <NavbarComponent/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <FooterComponent/>
        </footer>
        </body>

        </html>
    );
}

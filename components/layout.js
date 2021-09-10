import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'
import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDarkMode } from './darkMode';
import Toggle from './Toggle';
import { Footer } from './footer';
import { Header } from './header';

const name = 'Storytale'
export const siteTitle = 'Story-powered solutions for products, brands and businesses'

const sidebar = {
  open: (height = 1000) => ({
    height: '100vh',
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
     transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    height: 'unset',
    clipPath: "circle(0px at 300px 1px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export default function Layout({ children, home, type }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'dark' ? 'dark' : 'light';


  return (
    <div className={styles.container} type ={type} theme={themeMode}>
      <Head>
      <html lang="eng" />
        <link rel="icon" href="/images/storytale_logomark.svg" />
        <link
            rel="stylesheet"
            href="/fonts/Silka/Silka-Roman-Webfont/stylesheet.css"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="/fonts/Silka/Silka-Italic-Webfont/stylesheet.css"
            crossOrigin=""
          />
        <meta
          name="description"
          content="Story-powered solutions for products, brands and businesses"
        />
        <meta
          property="og:image"
          content="https://storytale.design/images/storytalestudio-card.png"
        />
        <meta name="og:title" content={name + ' ' + siteTitle} />
        <meta property="og:site_name" content={name}/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@StudioStorytale"/>
        <meta name="twitter:image:alt" content="Stortale Studio Twitter Card Image" />
      </Head>

      
                <header className={styles.header}>
        <div className={styles.borderHeader}>
        {home ? (
          <a>
          <svg viewBox="0 0 188 71" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path style={{fill: "var(--color-dark)"}} d="M123.061 50.6522C126.228 50.6522 128.503 48.9227 129.927 46.9495C131.246 45.1217 132.045 42.8468 132.594 40.7096C133.616 36.7373 134.147 31.65 134.639 26.9422L134.639 26.9389C134.679 26.5588 134.718 26.1812 134.758 25.8068C135.314 20.5195 135.871 15.8065 136.9 12.4235C137.414 10.7322 137.927 9.79815 138.297 9.35846C138.332 9.3175 138.362 9.28479 138.387 9.25897C138.425 9.28758 138.481 9.33641 138.556 9.41606C138.919 9.80393 139.435 10.6308 139.964 12.1469C141.026 15.1897 141.648 19.5072 142.15 24.3467C142.28 25.5994 142.402 26.8983 142.525 28.2025L142.526 28.2033C142.85 31.6473 143.179 35.1285 143.657 37.8951C143.985 39.7915 144.453 41.8211 145.254 43.4774C145.981 44.9802 147.8 47.7454 151.395 47.7454C153.224 47.7454 154.993 47.2095 156.453 46.6445C157.965 46.0593 159.546 45.279 161.065 44.4941C161.771 44.1295 162.471 43.7609 163.168 43.3936C165.618 42.103 168.036 40.8292 170.578 39.8021C172.08 39.1951 174.919 38.8951 177.949 38.8578C179.351 38.8405 180.624 38.8791 181.546 38.9224C182.006 38.9439 182.373 38.9664 182.621 38.9831C182.745 38.9914 182.839 38.9983 182.899 39.0029L182.927 39.005L182.963 39.0078L182.973 39.0087L182.974 39.0088L182.975 39.0088L182.975 39.0089C185.527 39.2214 187.768 37.3363 187.983 34.7973C188.198 32.2575 186.304 30.0252 183.751 29.8112L183.706 29.8075L183.667 29.8044L183.605 29.7996C183.519 29.7932 183.399 29.7844 183.247 29.7741C182.943 29.7537 182.512 29.7275 181.983 29.7026C180.929 29.6532 179.466 29.6084 177.834 29.6285C174.795 29.666 170.37 29.9241 167.088 31.2503C164.064 32.4724 161.094 34.0388 158.599 35.3547L158.598 35.3555C157.963 35.6906 157.358 36.0094 156.792 36.3022C155.347 37.0487 154.152 37.6274 153.143 38.0218C153.031 37.5628 152.914 37.0029 152.798 36.3296C152.384 33.935 152.109 31.0222 151.8 27.7431L151.8 27.742C151.669 26.3559 151.532 24.9043 151.376 23.3988C150.879 18.6094 150.184 13.298 148.726 9.1192C147.39 5.29057 144.506 0 138.318 0C135.244 0 132.848 1.45815 131.187 3.43127C129.651 5.25685 128.688 7.55894 128.022 9.75096C126.689 14.1346 126.066 19.7771 125.533 24.8454C125.502 25.1419 125.471 25.4366 125.44 25.7294L125.44 25.7299C124.917 30.7134 124.453 35.1406 123.609 38.4204C123.312 39.5766 123.014 40.3887 122.755 40.9325C122.528 40.623 122.234 40.1437 121.884 39.4081C120.785 37.0967 119.912 33.8395 118.929 30.0005C118.878 29.8018 118.827 29.6013 118.775 29.3992L118.775 29.3988C117.899 25.9687 116.907 22.0834 115.557 19.0362C114.303 16.2059 111.664 11.6273 106.352 11.6273C102.846 11.6273 100.431 13.6631 98.9869 15.9133C97.6433 18.0074 96.8709 20.6336 96.3576 23.164C95.3917 27.926 95.0402 34.0547 94.7095 39.8193L94.7089 39.8308C94.6855 40.2385 94.6622 40.6444 94.6388 41.0478C94.269 47.4266 93.8713 53.2511 92.8519 57.4717C92.3865 59.3986 91.8739 60.6127 91.429 61.2984C91.2419 60.8546 91.029 60.2154 90.8221 59.3261C90.0919 56.1871 89.8299 51.8246 89.5494 46.8678L89.5334 46.5847C89.2733 41.984 88.983 36.8472 88.0524 32.8468C87.5798 30.8152 86.8427 28.5969 85.5198 26.7986C84.06 24.814 81.7863 23.2546 78.7442 23.2546C74.4262 23.2546 71.8607 25.9634 70.4833 28.5426C69.2925 30.7724 68.6245 33.5363 68.1246 35.6044L68.06 35.8715C67.4847 38.2455 67.0657 39.8524 66.5158 40.9316C66.424 40.7433 66.3198 40.5081 66.2046 40.2157C65.5282 38.4996 65.0547 36.2449 64.4581 33.4033L64.4573 33.3998L64.4559 33.3927C64.3489 32.8834 64.238 32.3552 64.1212 31.808C63.4243 28.5412 62.5074 24.5654 60.7749 21.3595C58.932 17.9492 55.7613 14.7388 50.5911 14.5377C45.4393 14.3373 41.8409 17.2193 39.4868 20.4302C37.2154 23.5283 35.6643 27.4791 34.4655 30.893C34.0234 32.1522 33.6329 33.3221 33.2698 34.4097C32.5572 36.5445 31.9502 38.3628 31.2658 39.9191C31.2085 40.0494 31.153 40.1721 31.0993 40.2876C30.8768 39.8017 30.6215 39.1811 30.2825 38.3569L30.1812 38.1109C29.5721 36.6311 28.6399 34.3866 27.0366 32.569C25.2094 30.4976 22.6118 29.0682 19.1696 29.0682C15.9871 29.0682 12.98 28.1906 10.6877 27.2419C9.55954 26.775 8.65159 26.3105 8.04025 25.9719C7.73575 25.8032 7.50827 25.6677 7.36752 25.5814C7.29724 25.5383 7.24891 25.5077 7.22373 25.4915L7.20543 25.4797C5.07897 24.0728 2.20778 24.6414 0.785283 26.7543C-0.64032 28.8718 -0.0710546 31.7384 2.05677 33.1571L2.11052 33.1925C2.13497 33.2085 2.16591 33.2286 2.20318 33.2524C2.2777 33.3002 2.37767 33.3632 2.50182 33.4394C2.74994 33.5915 3.09582 33.7966 3.5293 34.0367C4.39391 34.5156 5.62039 35.1412 7.12613 35.7643C10.1017 36.9958 14.3603 38.2982 19.1696 38.2982C19.7232 38.2982 19.85 38.4131 20.0662 38.6581C20.5062 39.1569 20.9361 40.0009 21.5983 41.6096C21.6558 41.7493 21.7168 41.8999 21.7816 42.0597C22.3101 43.3642 23.0853 45.2775 24.1949 46.8076C25.6694 48.8407 28.0315 50.6522 31.5194 50.6522C34.1661 50.6522 36.0524 49.211 37.2056 47.893C38.323 46.6159 39.1378 45.0411 39.7629 43.6194C40.6209 41.6684 41.4561 39.171 42.2498 36.7982C42.5814 35.8066 42.9058 34.8368 43.2215 33.9376C44.4039 30.5702 45.5874 27.7693 46.9796 25.8704C48.2892 24.0842 49.2835 23.7238 50.2288 23.7606C50.9954 23.7904 51.7012 24.0565 52.6061 25.731C53.6214 27.6099 54.3235 30.3273 55.0484 33.7248C55.144 34.1731 55.2408 34.6385 55.3401 35.1158C55.9183 37.8947 56.5798 41.0739 57.57 43.5861C58.6787 46.399 61.1221 50.6522 66.3924 50.6522C70.7104 50.6522 73.276 47.9435 74.6533 45.3643C75.8441 43.1345 76.5121 40.3706 77.012 38.3025L77.0766 38.0353C77.6123 35.8248 78.0125 34.2793 78.5091 33.2057C78.6703 33.6299 78.8453 34.1938 79.0162 34.9285C79.7465 38.0675 80.0084 42.43 80.289 47.3868L80.305 47.6697C80.565 52.2704 80.8554 57.4074 81.786 61.4078C82.2586 63.4394 82.9957 65.6577 84.3185 67.456C85.7784 69.4406 88.052 71 91.0941 71C94.5142 71 97.0736 69.2455 98.7602 66.9696C100.319 64.8665 101.247 62.2068 101.87 59.6287C103.122 54.4475 103.542 47.7364 103.899 41.5795C103.917 41.2634 103.935 40.9487 103.953 40.6355C104.302 34.5816 104.62 29.0784 105.449 24.9903C105.772 23.3985 106.127 22.2796 106.457 21.5405C106.63 21.835 106.835 22.2308 107.07 22.7594C108.098 25.0818 108.922 28.2977 109.894 32.0958L109.941 32.2791C110.865 35.8888 111.943 40.0803 113.5 43.3554C114.938 46.3793 117.762 50.6522 123.061 50.6522Z"/>
			</svg>
      </a>
        ) : (
            <Link href="/">
              <a>
              <svg viewBox="0 0 188 71" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path style={{fill: "var(--color-dark)"}} d="M123.061 50.6522C126.228 50.6522 128.503 48.9227 129.927 46.9495C131.246 45.1217 132.045 42.8468 132.594 40.7096C133.616 36.7373 134.147 31.65 134.639 26.9422L134.639 26.9389C134.679 26.5588 134.718 26.1812 134.758 25.8068C135.314 20.5195 135.871 15.8065 136.9 12.4235C137.414 10.7322 137.927 9.79815 138.297 9.35846C138.332 9.3175 138.362 9.28479 138.387 9.25897C138.425 9.28758 138.481 9.33641 138.556 9.41606C138.919 9.80393 139.435 10.6308 139.964 12.1469C141.026 15.1897 141.648 19.5072 142.15 24.3467C142.28 25.5994 142.402 26.8983 142.525 28.2025L142.526 28.2033C142.85 31.6473 143.179 35.1285 143.657 37.8951C143.985 39.7915 144.453 41.8211 145.254 43.4774C145.981 44.9802 147.8 47.7454 151.395 47.7454C153.224 47.7454 154.993 47.2095 156.453 46.6445C157.965 46.0593 159.546 45.279 161.065 44.4941C161.771 44.1295 162.471 43.7609 163.168 43.3936C165.618 42.103 168.036 40.8292 170.578 39.8021C172.08 39.1951 174.919 38.8951 177.949 38.8578C179.351 38.8405 180.624 38.8791 181.546 38.9224C182.006 38.9439 182.373 38.9664 182.621 38.9831C182.745 38.9914 182.839 38.9983 182.899 39.0029L182.927 39.005L182.963 39.0078L182.973 39.0087L182.974 39.0088L182.975 39.0088L182.975 39.0089C185.527 39.2214 187.768 37.3363 187.983 34.7973C188.198 32.2575 186.304 30.0252 183.751 29.8112L183.706 29.8075L183.667 29.8044L183.605 29.7996C183.519 29.7932 183.399 29.7844 183.247 29.7741C182.943 29.7537 182.512 29.7275 181.983 29.7026C180.929 29.6532 179.466 29.6084 177.834 29.6285C174.795 29.666 170.37 29.9241 167.088 31.2503C164.064 32.4724 161.094 34.0388 158.599 35.3547L158.598 35.3555C157.963 35.6906 157.358 36.0094 156.792 36.3022C155.347 37.0487 154.152 37.6274 153.143 38.0218C153.031 37.5628 152.914 37.0029 152.798 36.3296C152.384 33.935 152.109 31.0222 151.8 27.7431L151.8 27.742C151.669 26.3559 151.532 24.9043 151.376 23.3988C150.879 18.6094 150.184 13.298 148.726 9.1192C147.39 5.29057 144.506 0 138.318 0C135.244 0 132.848 1.45815 131.187 3.43127C129.651 5.25685 128.688 7.55894 128.022 9.75096C126.689 14.1346 126.066 19.7771 125.533 24.8454C125.502 25.1419 125.471 25.4366 125.44 25.7294L125.44 25.7299C124.917 30.7134 124.453 35.1406 123.609 38.4204C123.312 39.5766 123.014 40.3887 122.755 40.9325C122.528 40.623 122.234 40.1437 121.884 39.4081C120.785 37.0967 119.912 33.8395 118.929 30.0005C118.878 29.8018 118.827 29.6013 118.775 29.3992L118.775 29.3988C117.899 25.9687 116.907 22.0834 115.557 19.0362C114.303 16.2059 111.664 11.6273 106.352 11.6273C102.846 11.6273 100.431 13.6631 98.9869 15.9133C97.6433 18.0074 96.8709 20.6336 96.3576 23.164C95.3917 27.926 95.0402 34.0547 94.7095 39.8193L94.7089 39.8308C94.6855 40.2385 94.6622 40.6444 94.6388 41.0478C94.269 47.4266 93.8713 53.2511 92.8519 57.4717C92.3865 59.3986 91.8739 60.6127 91.429 61.2984C91.2419 60.8546 91.029 60.2154 90.8221 59.3261C90.0919 56.1871 89.8299 51.8246 89.5494 46.8678L89.5334 46.5847C89.2733 41.984 88.983 36.8472 88.0524 32.8468C87.5798 30.8152 86.8427 28.5969 85.5198 26.7986C84.06 24.814 81.7863 23.2546 78.7442 23.2546C74.4262 23.2546 71.8607 25.9634 70.4833 28.5426C69.2925 30.7724 68.6245 33.5363 68.1246 35.6044L68.06 35.8715C67.4847 38.2455 67.0657 39.8524 66.5158 40.9316C66.424 40.7433 66.3198 40.5081 66.2046 40.2157C65.5282 38.4996 65.0547 36.2449 64.4581 33.4033L64.4573 33.3998L64.4559 33.3927C64.3489 32.8834 64.238 32.3552 64.1212 31.808C63.4243 28.5412 62.5074 24.5654 60.7749 21.3595C58.932 17.9492 55.7613 14.7388 50.5911 14.5377C45.4393 14.3373 41.8409 17.2193 39.4868 20.4302C37.2154 23.5283 35.6643 27.4791 34.4655 30.893C34.0234 32.1522 33.6329 33.3221 33.2698 34.4097C32.5572 36.5445 31.9502 38.3628 31.2658 39.9191C31.2085 40.0494 31.153 40.1721 31.0993 40.2876C30.8768 39.8017 30.6215 39.1811 30.2825 38.3569L30.1812 38.1109C29.5721 36.6311 28.6399 34.3866 27.0366 32.569C25.2094 30.4976 22.6118 29.0682 19.1696 29.0682C15.9871 29.0682 12.98 28.1906 10.6877 27.2419C9.55954 26.775 8.65159 26.3105 8.04025 25.9719C7.73575 25.8032 7.50827 25.6677 7.36752 25.5814C7.29724 25.5383 7.24891 25.5077 7.22373 25.4915L7.20543 25.4797C5.07897 24.0728 2.20778 24.6414 0.785283 26.7543C-0.64032 28.8718 -0.0710546 31.7384 2.05677 33.1571L2.11052 33.1925C2.13497 33.2085 2.16591 33.2286 2.20318 33.2524C2.2777 33.3002 2.37767 33.3632 2.50182 33.4394C2.74994 33.5915 3.09582 33.7966 3.5293 34.0367C4.39391 34.5156 5.62039 35.1412 7.12613 35.7643C10.1017 36.9958 14.3603 38.2982 19.1696 38.2982C19.7232 38.2982 19.85 38.4131 20.0662 38.6581C20.5062 39.1569 20.9361 40.0009 21.5983 41.6096C21.6558 41.7493 21.7168 41.8999 21.7816 42.0597C22.3101 43.3642 23.0853 45.2775 24.1949 46.8076C25.6694 48.8407 28.0315 50.6522 31.5194 50.6522C34.1661 50.6522 36.0524 49.211 37.2056 47.893C38.323 46.6159 39.1378 45.0411 39.7629 43.6194C40.6209 41.6684 41.4561 39.171 42.2498 36.7982C42.5814 35.8066 42.9058 34.8368 43.2215 33.9376C44.4039 30.5702 45.5874 27.7693 46.9796 25.8704C48.2892 24.0842 49.2835 23.7238 50.2288 23.7606C50.9954 23.7904 51.7012 24.0565 52.6061 25.731C53.6214 27.6099 54.3235 30.3273 55.0484 33.7248C55.144 34.1731 55.2408 34.6385 55.3401 35.1158C55.9183 37.8947 56.5798 41.0739 57.57 43.5861C58.6787 46.399 61.1221 50.6522 66.3924 50.6522C70.7104 50.6522 73.276 47.9435 74.6533 45.3643C75.8441 43.1345 76.5121 40.3706 77.012 38.3025L77.0766 38.0353C77.6123 35.8248 78.0125 34.2793 78.5091 33.2057C78.6703 33.6299 78.8453 34.1938 79.0162 34.9285C79.7465 38.0675 80.0084 42.43 80.289 47.3868L80.305 47.6697C80.565 52.2704 80.8554 57.4074 81.786 61.4078C82.2586 63.4394 82.9957 65.6577 84.3185 67.456C85.7784 69.4406 88.052 71 91.0941 71C94.5142 71 97.0736 69.2455 98.7602 66.9696C100.319 64.8665 101.247 62.2068 101.87 59.6287C103.122 54.4475 103.542 47.7364 103.899 41.5795C103.917 41.2634 103.935 40.9487 103.953 40.6355C104.302 34.5816 104.62 29.0784 105.449 24.9903C105.772 23.3985 106.127 22.2796 106.457 21.5405C106.63 21.835 106.835 22.2308 107.07 22.7594C108.098 25.0818 108.922 28.2977 109.894 32.0958L109.941 32.2791C110.865 35.8888 111.943 40.0803 113.5 43.3554C114.938 46.3793 117.762 50.6522 123.061 50.6522Z"/>
			</svg>
              </a>
            </Link>
            )}
            <span className={styles.center}>
        
        </span>
        <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={styles.headerNav}
    >      
    <MenuToggle toggle={() => toggleOpen()}>{isOpen ? 
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.1922 20.1924C19.4112 20.9735 18.1449 20.9735 17.3638 20.1924L1.80747 4.63607C1.02642 3.85502 1.02642 2.58869 1.80747 1.80765V1.80765C2.58851 1.0266 3.85484 1.0266 4.63589 1.80765L20.1922 17.364C20.9733 18.145 20.9733 19.4114 20.1922 20.1924V20.1924Z" fill="var(--color-light)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.1925 1.80751C20.9736 2.58856 20.9736 3.85489 20.1925 4.63594L4.6362 20.1923C3.85515 20.9733 2.58882 20.9733 1.80777 20.1923V20.1923C1.02672 19.4112 1.02672 18.1449 1.80777 17.3639L17.3641 1.80751C18.1452 1.02647 19.4115 1.02647 20.1925 1.80751V1.80751Z" fill="var(--color-light)"/>
    </svg>
     : 
<svg viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M26 2C26 3.10457 25.1046 4 24 4L2 4C0.895431 4 2.7141e-07 3.10457 1.74846e-07 2V2C7.8281e-08 0.895431 0.89543 -7.8281e-08 2 -1.74846e-07L24 -2.09815e-06C25.1046 -2.19471e-06 26 0.895428 26 2V2Z" fill="var(--color-dark)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M26 11C26 12.1046 25.1046 13 24 13L15 13C13.8954 13 13 12.1046 13 11V11C13 9.89543 13.8954 9 15 9L24 9C25.1046 9 26 9.89543 26 11V11Z" fill="var(--color-dark)"/>
</svg>
}
</MenuToggle>
      <motion.div className={styles.background} variants={sidebar}><Navigation />
      
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      </motion.div>
      
      </motion.nav>
      </div>
      </header>
        

      <main className={styles.content}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer/>
    </div>
    
  )
}

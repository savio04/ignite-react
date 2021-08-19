import Link from 'next/link'
import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import { useRouter } from 'next/dist/client/router'

export function Header(){
    const {asPath} = useRouter()
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image 
                    src="/images/logo.svg"
                    alt="ignews"
                    width={102}
                    height={30}
                />
                <nav>
                    <Link href="/">
                        <a className={ asPath === '/' ? styles.active: ''} >Home</a>
                    </Link>

                    <Link href="/posts" prefetch>
                        <a className={ asPath === '/posts' ? styles.active : '' } >Posts</a>
                    </Link>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}
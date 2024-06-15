
import Nav from './navigation';
import Image from 'next/image';
import Logo from "../../public/image/logo.png";
import Link from 'next/link';
import { getServerSession } from "next-auth/next"
import UserTag from './users/userHeader';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { Button } from 'antd';

const Header = async () => {
    const session = await getServerSession(options);

    return (
        <header className="border-bottom">
            <div className="mx-auto w-[1200px] flex justify-between items-center">
                <Image src={Logo} alt='' width={100} height={50} />
                <Nav />

                <div className='flex items-center gap-x-4'>
                    <Link href="/payment">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="22" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
                    </Link>
                    <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    {session ? (
                        <>
                            <UserTag user={session?.user} />
                            <Link href="/api/auth/signout" className='no-underline font-extrabold text-red-500 hover:underline'>
                                    Sign Out
                            </Link>
                        </>
                    ) : (
                        <Link href="/api/auth/signin" className="no-underline ml-4 font-extrabold text-red-500 hover:underline">
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </header>

    )
}

export default Header;  
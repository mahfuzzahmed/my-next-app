import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="p-4 border-b border-gray-600 ">
            <div className="flex justify-between items-center max-w-6xl mx-auto">

              <ul className="flex gap-4 ">
                <Link href='/'><li className="text-gray-300 hover:text-gray-50">Home</li></Link>
                <Link href='/profile'><li className="text-gray-300 hover:text-gray-50">Profile</li></Link>
              </ul>

              <div className="flex gap-4">
                {user ?
                  <>
                    <button className="bg-white text-black px-2 py-1 rounded border hover:bg-gray-300"><LogoutLink>Log out</LogoutLink></button>
                  </> :
                  <>
                    <button className="bg-white text-black px-2 py-1 rounded border hover:bg-gray-300"><LoginLink>Sign in</LoginLink></button>
                    <button className="bg-white text-black px-2 py-1 rounded border hover:bg-gray-300"><RegisterLink>Sign up</RegisterLink></button>
                  </>
                }
              </div>

            </div>
          </nav>
        </header>
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}

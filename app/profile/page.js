import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation'

const page = async() => {
    const { isAuthenticated } = getKindeServerSession();
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated){
        redirect('/api/auth/login')

    }
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl text-center mt-6">Welcome to your profile!</h2>
        </div>
    );
};

export default page;
import Link from "next/link";

export default function LoginButton() {
    return (
        <div>
            <Link href={"/login"}>
                <button className="rounded-md bg-primary-light text-primary-verydark w-52 h-10 font-bold animate-appear">
                    Login
                </button>
            </Link>
        </div>
    );
}

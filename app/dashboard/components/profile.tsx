import Link from "next/link";

export default function callProfile() {
    return (
        <div>
            <Link href={"./profile.tsx"}>
                <button className="rounded-md bg-primary-light text-primary-verydark w-52 h-10 font-bold animate-appear">
                    Profile
                </button>
            </Link>
        </div>
    );
}

import Link from "next/link";
import ApplicationColumn from "./applicationColumn";
import ClickSave from "./ClickSave";
import ClickApply from "./ClickApply";

export default function ApplicationManager({
    pos,
    lan,
    link,
    isHeading,
}: {
    pos: string;
    lan: string[];
    link: string;
    isHeading: boolean;
}) {
    return (
        <div
            className={`flex justify-start  border-none rounded-lg ${
                isHeading ? "px-2 py-1" : "px-2 py-4"
            } gap-10`}
        >
            <ApplicationColumn
                className={`grow ${
                    isHeading ? "text-primary-verydark" : "text-primary-darkish"
                }`}
            >
                {pos}
            </ApplicationColumn>
            <ApplicationColumn className="w-[30rem]">
                {isHeading
                    ? <p className="text-primary-verydark">Languages</p>
                    : (
                        <div className="gap-2 flex items-center flex-wrap">
                            {lan.map((v) => (
                                <div
                                    className={`rounded-full text-sm px-2 text-primary-darkish bg-primary-darkish/15 !font-`}
                                    key={v}
                                >
                                    {v}
                                </div>
                            ))}
                        </div>
                    )}
            </ApplicationColumn>
            {isHeading
                ? (
                    <ApplicationColumn className="w-32 justify-center items-center">
                        Apply
                    </ApplicationColumn>
                )
                : (
                    <ApplicationColumn className="w-32 flex justify-start items-center">
                        <Link
                            href={link}
                            className="text-white font-semibold mr-auto py-0.5 px-4 gap-4 border-none bg-primary-darkish rounded-full"
                        >
                            Apply
                        </Link>
                    </ApplicationColumn>
                )}
            {isHeading
                ? (
                    <>
                        <ApplicationColumn className="w-24 text-left">
                            Save
                        </ApplicationColumn>
                        <ApplicationColumn className="w-24 text-center">
                            Applied
                        </ApplicationColumn>
                    </>
                )
                : (
                    <div className="flex items-center">
                        <ClickSave id=""></ClickSave>
                        <ClickApply id=""></ClickApply>
                    </div>
                )}
        </div>
    );
}

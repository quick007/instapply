"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRef, useState } from "react";

export default function UploadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const Uploader = () => {
		const drop = useRef<HTMLDivElement>(null)
    return (
      <div ref={drop}>
        <p>Drag & drop your syllabus here</p>
        
      </div>
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="border rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Enter your syllabus</DialogTitle>
            <Description>Drag and Drop the syllabus for you class</Description>
            <p>
              <Uploader />
            </p>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)}>Confirm</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

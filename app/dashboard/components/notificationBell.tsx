// this doesn't work yet
// import React from 'react';
// import { Menu } from '@headlessui/react';
// import { BellIcon } from '@heroicons/react';

// const notifications = [
//     { id: 1, message: 'Job application recieved!' },
//     { id: 2, message: 'You have a new message from an employer.' },
//     { id: 3, message: 'Job application recieved!' },
//     { id: 4, message: 'CLOSING SOON: apply to this position now!' },
// ];

// export default function NotificationBell({ children }) {
//     return (
//         <div className="relative">
//             <Menu>
//                 {({ open }) => (
//                     <>
//                         {/* Bell Icon */}
//                         <Menu.Button className="relative focus:outline-none">
//                             <BellIcon className="w-8 h-8 text-gray-500 hover:text-gray-700" />
//                             <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
//                         </Menu.Button>

//                         {/* Notifications Dropdown */}
//                         <Menu.Items
//                             className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-10 focus:outline-none"
//                         >
//                             <div className="max-h-64 overflow-y-auto">
//                                 {notifications.length > 0 ? (
//                                     notifications.map((notification) => (
//                                         <Menu.Item key={notification.id}>
//                                             {({ active }) => (
//                                                 <div
//                                                     className={`p-4 border-b border-gray-200 text-sm ${active ? 'bg-gray-100' : 'bg-white'
//                                                         }`}
//                                                 >
//                                                     {notification.message}
//                                                 </div>
//                                             )}
//                                         </Menu.Item>
//                                     ))
//                                 ) : (
//                                     <div className="p-4 text-sm text-gray-500">No new notifications</div>
//                                 )}
//                             </div>
//                             <div className="p-4 text-center">
//                                 <button className="text-sm text-blue-500 hover:underline">
//                                     View All Notifications
//                                 </button>
//                             </div>
//                         </Menu.Items>
//                     </>
//                 )}
//                 {children}
//             </Menu>
//         </div>
//     );
// }
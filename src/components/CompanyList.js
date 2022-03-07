import {FaSquareFull} from "react-icons/fa";

const list = [
    {
        icon: <FaSquareFull/>,
        name: 'Armstrong Bionics',
    },
    {
        icon: <FaSquareFull/>,
        name: 'Hastepoint',
    },
    {
        icon: <FaSquareFull/>,
        name: 'Manticore',
    },
    {
        icon: <FaSquareFull/>,
        name: 'Nishiyama Hi-Tech',
    },
    {
        icon: <FaSquareFull/>,
        name: 'Genki Media',
    },
]


// export default function CompanyList({name}) {
//     return (
//         <div className="text-2xl bg-neutral">
//             <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-2 gap-8 md:grid-cols-5 lg:grid-cols-5">
//                     {list.filter(c => c.name !== name).map((c) => (
//                         <div key={c.name} className="col-span-1 flex md:col-span-1 lg:col-span-1">
//                             <div className="self-center text-white">{c.icon}</div>
//                             <div className="self-center ml-3">
//                                 <p className="font-bold text-gray-100">{c.name}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default function CompanyList(name) {
//     return (
//         <div className="bg-neutral">
//             <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-extrabold text-white">Notable brands from the ETIO portfolio</h2>
//                 <div className="flow-root mt-8 lg:mt-10">
//                     <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
//                         {list.filter(c => c.name !== name).map((c) => (
//                             <div key={c.name} className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
//                                 <span>{c.icon}</span>
//                                 <span>{c.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// /* This example requires Tailwind CSS v2.0+ */
export default function CompanyList(name) {
    return (
        <div className="bg-neutral text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white">Some of the galaxy's most innovative companies are ETIO</h2>
                <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                    {list.filter(c => c.name !== name).map((c, i) => {
                        let colspan = 2;
                        if (i > 2) {
                            colspan = 3;
                        }
                        return (
                            <div key={c.name} className={`col-span-1 flex justify-center md:col-span-${colspan} lg:col-span-1`}>
                                <h1 className={"h-12 text-2xl"}>{c.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

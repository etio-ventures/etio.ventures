import './Logo.css'

export default function Logo(id) {
    return (<svg id={id} className="h-8 w-auto sm:h-10 logo" viewBox="0 0 144 90">
        <rect id="e-rect-n" className="fill-current letter-e-top" y="33" x="0" height="3" width="36"/>
        <rect id="e-rect-r" className="fill-current letter-e-middle" y="51" x="0" height="3" width="21"/>
        <rect id="e-rect-l" className="fill-current letter-e-bottom" y="69" x="0" height="3" width="36"/>
        <rect id="rect216" className="fill-current rectangle-1" x="81" y="30" width="3" height="60"/>
        <rect id="rect333" className="fill-current rectangle-2" x="51" y="0" width="3" height="90"/>
        <rect id="rect666" className="fill-current rectangle-3" x="33" y="18" width="39" height="3"/>
        <rect id="rect999" className="fill-current dot-1" x="81" y="18" width="3" height="3"/>
        <circle id="path225-3" className="fill-transparent stroke-current circle-1" strokeWidth="3" cx="120" cy="52" r="21"/>
    </svg>);
}

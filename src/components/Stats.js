import CountUp from "react-countup";
import {useState} from "react";
import {useInView} from "react-intersection-observer";

export default function Stats() {

    const {ref: statsRef, inView: statsVisible} = useInView();
    const [statsRendered, setStatsRendered] = useState(false);

    const stats = {
        years: 216,
        invested: 963,
        ventures: 112358
    }

    return (
        <div className="bg-neutral pt-12 sm:pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
                        Our advocates hail from over 12 planets.
                    </h2>
                    <p className="mt-3 text-xl text-primary sm:mt-4">
                        The ETIO network is a unique layer running on top of traditional quantum networking protocols
                        connecting all advocacy terminals.
                    </p>
                </div>
            </div>
            <div className="mt-10 pb-12 bg-neutral sm:pb-16">
                <div className="relative">
                    <div className="absolute inset-0 h-1/2 bg-neutral"/>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <dl ref={statsRef} className="rounded-lg bg-neutral shadow-lg sm:grid sm:grid-cols-3">
                                <div
                                    className="flex flex-col border-b border-black p-6 text-center sm:border-0 sm:border-r">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Ventures
                                        Started
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-secondary">
                                        {statsVisible && !statsRendered ? (
                                            <CountUp start={0} end={stats.ventures} duration={3}
                                                     delay={0}
                                                     onEnd={() => setStatsRendered(true)}
                                            >
                                                {({countUpRef, start}) => (<span ref={countUpRef}/>)}
                                            </CountUp>
                                        ) : stats.ventures }
                                    </dd>
                                </div>
                                <div
                                    className="flex flex-col border-t border-b border-black p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Credits
                                        Invested
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-secondary">
                                        {statsVisible && !statsRendered ? (
                                            <CountUp start={0} end={stats.invested} duration={3}
                                                     delay={0}
                                                     suffix={"q+"}
                                                     onEnd={() => setStatsRendered(true)}
                                            >
                                                {({countUpRef, start}) => (<span ref={countUpRef}/>)}
                                            </CountUp>) : `${stats.invested}q+` }
                                    </dd>
                                </div>
                                <div
                                    className="flex flex-col border-t border-black p-6 text-center sm:border-0 sm:border-l">
                                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Trusted
                                        Years
                                    </dt>
                                    <dd className="order-1 text-5xl font-extrabold text-secondary">
                                        {/* Replace this with "advocates" once passports are done */}
                                        {statsVisible && !statsRendered ? (
                                            <CountUp start={0} end={stats.years} duration={3}
                                                     delay={0}
                                                     onEnd={() => setStatsRendered(true)}
                                            >
                                                {({countUpRef, statsVisible}) => (<span ref={countUpRef}/>)}
                                            </CountUp>) : stats.years}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

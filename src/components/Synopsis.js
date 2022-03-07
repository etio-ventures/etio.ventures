export default function Synopsis() {
    return (
        <div className="relative contact">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/img/robot-open-sm.jpg"
                    alt="A human-looking robot with an exposed cranium and chest"
                />
                <div className="overlay" aria-hidden="true"/>
            </div>
            <div className="text-container">
                <h1 className="headline font-oxanium">
                    Our Mission
                </h1>
                <p className="text font-iceland">
                    The future is high-tech, and ETIO Ventures is leading the charge.
                    We invest in industry-leading companies that are paving the way to a brighter tomorrow.
                    From asteroid mining to cybernetics, we're committed to making the future a reality.
                </p>
            </div>
        </div>
    )
}
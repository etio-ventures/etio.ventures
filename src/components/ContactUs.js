export default function ContactUs() {
    return (
        <div className="relative contact">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/img/robot-open-sm.jpg"
                    alt=""
                />
                <div className="overlay" aria-hidden="true"/>
            </div>
            <div className="text-container">
                <h1 className="headline font-rock-salt">
                    Get in touch
                </h1>
                <p className="text">
                    The future is high-tech, and ETIO Ventures is leading the charge.
                    We invest in industry-leading companies that are paving the way to a brighter tomorrow.
                    From asteroid mining to cybernetics, we're committed to making the future a reality.
                </p>
            </div>
        </div>
    )
}
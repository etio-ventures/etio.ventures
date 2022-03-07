import {Link} from "react-router-dom";

const faqs = [
    {
        question: "Where do you operate?",
        answer:
            "We operate in numerous facilities both on and off-planet. " +
            "Our asteroid mining operations and interplanetary logistic subsidiaries are our primary focus, " +
            "along with caring for the humans and Advocates that make our company possible.",
    },
    {
        question: "What does the name ETIO mean?",
        answer:
            `The prefix 'etio' refers to the cause or origin. 
            We chose this because it represents a catalyst for change. 
            Please refer to our ${(<Link to={"/about-us"}>About Us</Link>)} page for more details.`
    },
    {
        question: "How long have you been in operation?",
        answer:
            "ETIO Ventures has been in operation for several centuries. " +
            "First established in 2022, our network has expanded to encompass multiple planets. " +
            "For more information, please tour the ETIO museum on Cetus-IX. " +
            "(Advocates of Beloved class or higher receive a 15% credit discount)"
        ,
    },
    {
        question: "Are your operations safe?",
        answer:
            "Our operations are rated #1 in S.A.F.E. protocols and we have not had a reported fatality in several years."
    },
    {
        question: "How do I become an Advocate?",
        answer:
            "We're glad you want to join us. Please log in to an advocate terminal and request to speak to a representative. " +
            "They will find you an appropriate designation and facility."
    },
    {
        question: "What does the future look like for ETIO?",
        answer:
            "As we continue to expand our horizons to new planets and new platforms, ETIO continues to seek opportunities to invest in the technology that propels mankind forward."
    }
]

export default function FAQs() {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-100 text-center">Frequently asked questions</h2>
                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <dt className="font-oxanium text-xl leading-6 font-medium text-white">{faq.question}</dt>
                                <dd className="text-lg mt-2 text-base text-gray-100">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
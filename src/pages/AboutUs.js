import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutUs() {
    return (
        <div>
            <Navbar/>
            <div className="relative py-16 bg-black overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                        <span
                            className="block text-base text-center text-white font-semibold tracking-wide uppercase">
                            About Us
                        </span>
                            <span
                                className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                                Who We Are
                        </span>
                        </h1>
                        <p className="mt-8 text-xl text-white leading-8">
                            The prefix "etio" refers to the cause or origin.
                            We chose this because it represents a catalyst for change.

                            ETIO Ventures is a venture capital firm that invests in early stage companies.
                            The firm has a focus on companies that are working on innovative new technologies.
                            ETIO Ventures is led by a team of experienced entrepreneurs and investors.
                            The firm has a portfolio of companies that include a variety of different industries.
                        </p>
                    </div>
                    <div className="mt-6 prose max-w-prose prose-white prose-lg text-white mx-auto">
                        <h2>What We Do</h2>
                        <p>
                            We invest in a wide range of business sectors, including:
                        </p>
                        <ul id="investment-sectors" role="list">
                            <li>Accommodation and Food Services</li>
                            <li>Administration, Business Support and Waste Management Services</li>
                            <li>Agriculture, Forestry, Fishing and Hunting</li>
                            <li>Arts, Entertainment and Recreation</li>
                            <li>Construction</li>
                            <li>Educational Services</li>
                            <li>Finance and Insurance</li>
                            <li>Healthcare and Social Assistance</li>
                            <li>Information</li>
                            <li>Manufacturing</li>
                            <li>Mining (secular and non-secular)</li>
                            <li>Other Services</li>
                            <li>Professional, Scientific and Technical Services</li>
                            <li>Real Estate and Rental and Leasing</li>
                            <li>Retail Trade</li>
                            <li>Interplanetary Transportation and Warehousing</li>
                            <li>Utilities</li>
                            <li>Wholesale Trade</li>
                            <li>Advisory and Financial Services</li>
                            <li>Business Franchises</li>
                            <li>Consumer Goods and Services</li>
                            <li>Industrial Machinery, Gas and Chemicals</li>
                            <li>Life Sciences</li>
                            <li>Online Retail</li>
                            <li>Retail Market Reports</li>
                            <li>Specialist Engineering, Infrastructure and Contractors</li>
                            <li>Technology</li>
                        </ul>
                        <p>
                            We are passionate about helping entrepreneurs build great companies.
                            We provide our portfolio companies with access to our network of industry experts, as well
                            as support services such as mentorship, marketing, and business development.
                            We are committed to providing our portfolio companies with the resources they need to grow
                            and succeed.
                        </p>
                        <blockquote>
                            <p>
                                The economy of human time is the next advantage of machinery in manufactures.
                            </p>
                            -Charles Babbage
                        </blockquote>
                        <p>
                            We believe that the success of our portfolio is vital in the optimization of human time.
                            Crucial to propelling mankind into the infinite reaches of physical reality as well as
                            digital reality. The companies in our portfolio capture value across the universe enabling
                            species-scale coordination.
                        </p>

                        <h2>Our Commitment</h2>
                        <p>
                            ETIO Ventures is a venture capital firm that is dedicated to helping entrepreneurs build
                            world-changing companies.
                            We believe that the most successful companies are the ones that solve a problem that people
                            care about.
                            That’s why we invest in companies that are solving big problems and have the potential to
                            make a real impact.
                        </p>
                        <p>
                            We are passionate about helping entrepreneurs build companies that make a difference.
                            We believe that ETIO Ventures can play a role in helping to solve some of the biggest
                            problems.
                            We are excited to work with entrepreneurs and help them build companies that can make a real
                            impact.
                            ETIO Ventures is a venture capital group that is focused on helping early stage startups
                            succeed.
                            As a venture capital group, we shepherd these companies until they can become active
                            contributors to the greater good.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

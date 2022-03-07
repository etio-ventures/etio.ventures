export default function CallToAction() {
  return (
    <div className="bg-neutral">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          <span className="block headline">Ready to dive in?</span>
          <span className="block description">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a href="/terminal" className="call-to-action hoverable">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

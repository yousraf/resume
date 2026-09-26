import { links } from '../data'

export function Header() {
  return (
    <div className="bg-gray-50">
      <div className="px-6 py-6 sm:px-10 sm:py-10 2xl:max-w-[75%]">
        <div className="flex flex-col items-start gap-4">
          <div className="max-w-xl">
            <h1 className="text-[17px] font-semibold text-gray-900">
              Yousra Fettach
            </h1>

            <p className="mt-1 text-[15px] text-gray-600">
              <span className="text-[15px] font-medium text-indigo-600">
                Postdoctoral Researcher, Ghent University
              </span>
            </p>

            <p className="mt-6 text-[15px] text-gray-600">
              Over the past five years I've built NLP and
              knowledge-representation systems end to end, from temporal
              knowledge graphs to BERT-based pipelines to retrieval-augmented
              systems to full LLM evaluation infrastructure.
            </p>
            <p className="mt-4 text-[15px] text-gray-600">
              As a postdoctoral researcher at{' '}
              <span className="text-[16px] font-medium text-indigo-600">
                Ghent University
              </span>
              , I research alignment, LLM agents, and cognition, building
              benchmarking pipelines and leading multi-disciplinary studies of
              AI alignment, with work accepted at{' '}
              <span className="text-[16px] font-medium text-indigo-600">
                ACL
              </span>
              ,{' '}
              <span className="text-[16px] font-medium text-indigo-600">
                IASEAI
              </span>
              , and{' '}
              <span className="text-[16px] font-medium text-indigo-600">
                ECML
              </span>
              .
            </p>
            <p className="mt-4 text-[15px] text-gray-600">
              Earlier, my Ph.D. research on knowledge graphs for education and
              labor markets appeared in{' '}
              <span className="text-[16px] font-medium text-indigo-600">
                Engineering Applications of Artificial Intelligence
              </span>
              .
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-4 py-1.5 text-[13px] text-gray-600 transition-colors outline-none hover:border-indigo-200 focus-visible:border-indigo-600 focus-visible:outline-2 focus-visible:outline-indigo-200"
            >
              <link.Icon size={14} style={{ color: link.color }} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

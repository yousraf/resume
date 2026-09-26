import { Header } from './components/Header'
import { Section } from './components/Section'
import { Skills } from './components/Skills'
import { Timeline } from './components/Timeline'
import { education, experience, honors, publications, teaching } from './data'

function App() {
  return (
    <div className="min-h-svh bg-white text-gray-900">
      <Header />

      <div className="px-6 pt-8 pb-16 sm:px-10 2xl:max-w-[75%]">
        <div className="space-y-16">
          <div className="grid grid-cols-1 gap-x-32 gap-y-16 2xl:grid-cols-2">
            <Section label="Experience">
              <Timeline items={experience} />
            </Section>

            <Section label="Education">
              <Timeline items={education} />
            </Section>
          </div>

          <div className="grid grid-cols-1 gap-x-32 gap-y-16 2xl:grid-cols-2">
            <Section label="Publications">
              <Timeline items={publications} />
            </Section>

            <Section label="Honors & Talks">
              <Timeline items={honors} />
            </Section>
          </div>

          <div className="grid grid-cols-1 gap-x-32 gap-y-16 2xl:grid-cols-2">
            <Section label="Teaching" className="2xl:order-2">
              <Timeline items={teaching} />
            </Section>

            <Section label="Skills" className="2xl:order-1">
              <Skills />
            </Section>
          </div>

          <Section label="Beyond work">
            <p className="text-[15px] text-gray-600">
              When I'm not researching, my time goes to sports and art - the
              gym, climbing, swimming, and taking pictures and painting. The
              sports keep me grounded; the arts keep me creative.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}

export default App

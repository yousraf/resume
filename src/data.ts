import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaGoogleScholar } from 'react-icons/fa6'
import { SiSubstack } from 'react-icons/si'

export type TimelineEntry = {
  title: string
  subtitle: string
  dates: string
  description?: string
}

export const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yousra-fettach',
    Icon: FaLinkedin,
    color: '#0A66C2',
  },
  {
    label: 'Substack',
    href: 'https://substack.com/@yousra39',
    Icon: SiSubstack,
    color: '#FF6719',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yousraf',
    Icon: FaGithub,
    color: '#181717',
  },
  {
    label: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=Mzy267IAAAAJ&hl=nl&oi=ao',
    Icon: FaGoogleScholar,
    color: '#4285F4',
  },
  {
    label: 'Contact',
    href: 'mailto:fettachyousra@gmail.com',
    Icon: HiMail,
    color: '#059669',
  },
]

export const experience: TimelineEntry[] = [
  {
    title: 'Postdoctoral Researcher',
    subtitle: 'Ghent University',
    dates: 'Mar. 2025 - Present',
    description:
      'Leading research on alignment, LLM agents, and cognition, implementing pipelines for benchmarking LLMs. Deployed and configured a self-hosted Label Studio instance for collaborative annotation and curated the resulting training dataset. Presented work at multiple venues and led multi-disciplinary teams (linguistics, psychology, computer science) on studies of AI alignment.',
  },
  {
    title: 'AI Engineer',
    subtitle: 'Freelance',
    dates: 'Oct. 2024 - Feb. 2025',
    description:
      'Built and deployed a cited-answer retrieval system over a self-constructed corpus of Australian tax law, returning source-linked provisions with every generated response.',
  },
  {
    title: 'Research Engineer',
    subtitle: 'International University of Rabat (UIR)',
    dates: 'Jul. 2023 - Sep. 2024',
    description:
      'Developed and deployed BERT-based models for topic modeling and sentiment classification in Moroccan Arabic, and automated a real-time social-media monitoring pipeline with dashboards.',
  },
  {
    title: 'Ph.D. Candidate',
    subtitle: 'International University of Rabat (UIR)',
    dates: 'Jan. 2020 - Oct. 2024',
    description:
      'Built an uncertain temporal knowledge graph for the Moroccan labor market and education system, modeling skill demand and education-employment mismatch. Trained transformer models for unsupervised skill-entity recognition and KG construction, and temporal, uncertain KG-embedding models for link and link-confidence prediction.',
  },
  {
    title: 'Data Science Intern',
    subtitle: 'International University of Rabat (UIR)',
    dates: 'Mar. 2019 - Oct. 2019',
    description:
      'Built ingestion pipelines and quantified education-job-market mismatch across Moroccan regions for the USAID project Data Science for Improving Education and Employability in Morocco.',
  },
]

export const education: TimelineEntry[] = [
  {
    title: 'Ph.D. in Computer Science Engineering',
    subtitle: 'International University of Rabat (UIR)',
    dates: '2020 - 2024',
  },
  {
    title: 'M.Sc. in Data Science and Big Data',
    subtitle: 'ENSIAS',
    dates: '2017 - 2019',
  },
  {
    title: 'B.Sc. in Mathematics and Computer Science',
    subtitle: 'Mohammed V University',
    dates: '2013 - 2017',
  },
]

export const publications: TimelineEntry[] = [
  {
    title:
      'Cards Against LLMs: Benchmarking Humor Alignment in Large Language Models',
    subtitle: 'Y. Fettach - CHum 2026 (ACL), Accepted',
    dates: '2026',
  },
  {
    title: 'Building and Measuring Trust between Large Language Models',
    subtitle: 'M. Buyl, Y. Fettach, G. Bied, T. De Bie - IASEAI',
    dates: '2026',
  },
  {
    title: 'BAIT: A Benchmark for Cognitive Bias Triggers Detection',
    subtitle: 'Y. Fettach et al. - BIAS (ECML-PKDD), extended abstract',
    dates: '2026',
  },
  {
    title:
      'JobEdKG: An uncertain knowledge-graph approach for recommending courses and predicting in-demand skills',
    subtitle:
      'Y. Fettach, A. Bahaj, M. Ghogho - Engineering Applications of Artificial Intelligence',
    dates: '2024',
  },
  {
    title:
      'Pro-Eating-Disorders and Pro-Recovery Communities on Reddit: Text and Network Comparative Analyses',
    subtitle: 'Y. Fettach, L. Benhiba - iiWAS, Munich',
    dates: '2019',
  },
]

export const honors: TimelineEntry[] = [
  {
    title: 'Contributor, New Development Model (CSMD)',
    subtitle: 'Commissioned by H.M. King Mohammed VI of Morocco',
    dates: '',
  },
  {
    title: 'Research Scholarship',
    subtitle: 'International University of Rabat',
    dates: '2020 - 2023',
  },
]

export const teaching: TimelineEntry[] = [
  {
    title: 'Teaching Assistant',
    subtitle: 'Introduction to Algorithms & Operating Systems, UIR',
    dates: '2020 - 2023',
    description:
      'Roughly 300 hours across 100+ students; designed and graded assignments, projects, and exams.',
  },
]

export const skills = [
  { label: 'Languages', value: 'Python, R, Java, C, SQL, LaTeX' },
  {
    label: 'ML & LLM',
    value:
      'PyTorch, Hugging Face, DeepSeek / OpenAI / Anthropic / Gemini / OpenRouter APIs, LangChain, spaCy, StanfordNLP',
  },
  {
    label: 'Infrastructure & Tools',
    value:
      'Label Studio, GCP, Pinecone, Neo4j, Cloudflare Tunnel, Git, Gephi, Tableau',
  },
  {
    label: 'Spoken',
    value: 'Arabic (native), English (fluent), French (C1), German (A1)',
  },
]

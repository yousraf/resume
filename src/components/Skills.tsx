import { skills } from '../data'

export function Skills() {
  return (
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill.label} className="text-[15px]">
          <span className="font-semibold text-gray-900">
            {skill.label}:{' '}
          </span>
          <span className="text-gray-600">{skill.value}</span>
        </div>
      ))}
    </div>
  )
}

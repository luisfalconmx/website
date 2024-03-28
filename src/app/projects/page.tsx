import { getCertifications } from '@/services/hygraph'

export default async function Projects() {
  const certifications = await getCertifications()

  return (
    <div>
      <h1>Projects v2</h1>

      {certifications?.map((certification) => (
        <div key={certification.name}>
          <h2>{certification.name}</h2>
          <p>{certification.slug}</p>
        </div>
      ))}
    </div>
  )
}

import { useState } from 'react'
import MainLayout from '@/Layouts/MainLayout'
import contentfulClient from '@/clients/contentfulClient'
import Button from '@/components/Button'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import addZero from '@/utils/addZero'
import CardCertification from '@/components/CardCertification'
import {
  GetCertificationsDocument,
  GetCertificationsQuery,
  GetCertificationsQueryVariables
} from '@/generated/contentful.schema'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps = (async () => {
  const client = contentfulClient()
  const response = await client.query<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >({
    query: GetCertificationsDocument,
    variables: {
      limit: 10,
      skip: 0
    }
  })

  return {
    props: {
      total: response.data.certificationCollection?.total || 0,
      certifications: response.data.certificationCollection?.items || []
    },
    revalidate: 60 * 5 // 5 minutes
  }
}) satisfies GetStaticProps

export default function Projects({
  total,
  certifications
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const limitCertifications = 6
  const [iterationCount, setIterationCount] =
    useState<number>(limitCertifications)
  const [extraCertificationsList, setExtraCertificationsList] = useState<
    typeof certifications
  >([])

  const getMoreCertifications = async () => {
    const client = contentfulClient()
    const response = await client.query<
      GetCertificationsQuery,
      GetCertificationsQueryVariables
    >({
      query: GetCertificationsDocument,
      variables: {
        limit: limitCertifications,
        skip: iterationCount
      }
    })

    setExtraCertificationsList((prev) => [
      ...prev,
      ...(response.data.certificationCollection?.items || [])
    ])

    setIterationCount((prev) => prev + limitCertifications)
  }

  return (
    <MainLayout>
      <main className="mx-auto mb-8 mt-8 max-w-screen-xl px-2 md:px-4 lg:box-content lg:px-6">
        <div className="mb-10 flex flex-col items-center lg:flex-row lg:items-start">
          <h1 className="mb-2 mr-4 text-4xl font-bold lg:mb-0">
            Certifications
          </h1>
          <span className="block text-4xl font-bold">{addZero(total)}</span>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {certifications?.map((certification) => (
            <CardCertification
              key={certification?.name}
              name={certification?.name || ''}
              image={certification?.picture?.url || ''}
              organizationName={certification?.issuingOrganization || ''}
              organizationImage={
                certification?.issuingOrganizationImage?.url || ''
              }
              date={certification?.issueDate || ''}
              credentialId={certification?.credentialId || ''}
              credentialUrl={certification?.credentialUrl || ''}
            />
          ))}

          {extraCertificationsList?.map((certification) => (
            <CardCertification
              key={certification?.name}
              name={certification?.name || ''}
              image={certification?.picture?.url || ''}
              organizationName={certification?.issuingOrganization || ''}
              organizationImage={
                certification?.issuingOrganizationImage?.url || ''
              }
              date={certification?.issueDate || ''}
              credentialId={certification?.credentialId || ''}
              credentialUrl={certification?.credentialUrl || ''}
            />
          ))}
        </div>

        {iterationCount < total && (
          <div className="flex justify-center">
            <Button
              variant="filled"
              onClick={getMoreCertifications}
              className="flex items-center"
            >
              <ArrowPathIcon className="mr-2 h-6 w-6" />
              Load More
            </Button>
          </div>
        )}
      </main>
    </MainLayout>
  )
}

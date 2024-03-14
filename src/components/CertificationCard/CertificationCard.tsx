import { Card, CardFooter, Image, Button } from '@nextui-org/react'

const CertificationCard = () => {
  return (
    <Card isFooterBlurred className="h-[430px] w-full">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 h-full w-full object-cover"
        src="https://www.luisfalconmx.dev/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ff6zp47ogowku%2F615bnZ2JXEMkdWSei2fzdk%2F78280c847990450726522e677ac20a0b%2Fdiploma-javascript-clean-code_page-0001.jpg&w=1920&q=75"
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/70 dark:border-default-100">
        <div className="flex flex-grow items-center gap-2">
          <Image
            alt="Certificacion del curso de clean code en javascript icon"
            className="h-12 w-12 rounded-full bg-black"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq4odFRbUxvuSxp1owv99ybwwEcm1UX9eI6-LVQ-GZg9sTalt33zGrnWjbV2ouI7Wg18&usqp=CAU"
          />
          <div className="flex flex-col">
            <p className="text-base font-bold text-white">
              Curso de clean code en javascript
            </p>
            <p className="text-small text-white">Platzi</p>
          </div>
        </div>
        <Button radius="full" size="md" className="bg-white text-black">
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CertificationCard

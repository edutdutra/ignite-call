import {Container, Hero, Preview} from "@/src/pages/home/styles";
import {Heading, Text} from "@ignite-ui/react";
import Image from "next/image";

import previewImage from '../../assets/app-preview.png'
import {ClaimUsernameForm} from "@/src/pages/home/components/ClaimUsernameForm";
import {NextSeo} from "next-seo";


export default function Home() {
    return (
        <>
            <NextSeo
                title="Descomplique sua agenda | Ignite Call"
                description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
            />
            <Container>
                <Hero>
                    <Heading size="4xl">Agendamento descomplicado</Heading>
                    <Text size="xl">
                        Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
                    </Text>

                    <ClaimUsernameForm/>
                </Hero>

                <Preview>
                    <Image
                        src={previewImage}
                        alt="Calendário simbolizando aplicação em funcionamento"
                        height={400}
                        quality={100}
                        priority
                    />
                </Preview>
            </Container>
        </>
    )
}

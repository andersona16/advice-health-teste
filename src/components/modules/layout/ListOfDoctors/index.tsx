import { FC } from "react"
import { CardUser, Container, ImageWrapper } from './styles';

const ListOfDoctors: FC = () => {
    return (
        <>
            <Container>
                <CardUser>
                    <ImageWrapper>
                        <img alt="" />
                        <div>
                            <h1>Nome médico</h1>
                            <span>Função</span>
                        </div>
                    </ImageWrapper>
                </CardUser>
                <CardUser>
                    <ImageWrapper>
                        <img alt="" />
                        <div>
                            <h1>Nome médico</h1>
                            <span>Função</span>
                        </div>
                    </ImageWrapper>
                </CardUser>
            </Container>
        </>
    )
}

export { ListOfDoctors }
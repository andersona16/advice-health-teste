import { FC } from "react"
import { CardUser, ImageWrapper } from "./styles"

const AddCustomer: FC = () => {
    return (
        <>

            <CardUser>
                <ImageWrapper>
                    <img alt="" />
                    <div>
                        <h1>Nome médico</h1>
                        <span>Função</span>
                    </div>

                </ImageWrapper>
            </CardUser>

        </>
    )
}
export { AddCustomer }
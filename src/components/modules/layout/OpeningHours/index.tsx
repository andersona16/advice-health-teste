import { FC } from "react"
import { Container, Content } from "./styles"
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { AddCustomer } from "../AddCustomer";


const OpeningHours: FC = () => {
    const data = new Date()

    return (
        <>
            <Container>
                <h1>New Date</h1>
                <Content>
                    <div>
                        <div>
                            <span>08:12</span>
                        </div>

                        <div>
                            <AddCustomer />
                        </div>

                        <div>
                            <span><FiPlus /></span>
                            <span><FiTrash2 /></span>
                            <span><FiEdit /></span>
                        </div>

                    </div>
                </Content>
            </Container>
        </>

    )
}

export { OpeningHours }
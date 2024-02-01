import { Container, Heading, VStack, Input, Button } from "@chakra-ui/react"
import { useState } from "react"
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const params = useParams()
    console.log(params)

  return (
    <Container py={'20'} height={"82vh"}>
      <form action="">
        <Heading 
        my="16"
        textTransform={"uppercase"}
        textAlign={["center","left"]}>
        Reset Password
        </Heading>
      </form>
      <VStack spacing={8}>
        <Input
        required
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        placeholder="abc@gmail.com"
        type="email"
        focusBorderColor="yellow.500"
        />
        <Button type="submit" w={"80%"} colorScheme={"yellow"}>Reset Password</Button>
      </VStack>
    </Container>
  )
}

export default ResetPassword

import { Heading, Icon, VStack, useTheme } from "native-base";
import Logo from '../assets/logo_primary.svg';
import { Envelope, Key } from "phosphor-react-native"
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
export function SignIn() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(){
        console.log(name, password)
    }
    const { colors } = useTheme()

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Acesse sua conta 
            </Heading>

            <Input
                placeholder="E-mail"
                mb={4}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setName}
            />
            <Input
                placeholder="Senha"
                mb={8}
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                secureTextEntry
                onChangeText={setPassword}
            />

            <Button title="ENTRAR" w="full" />
        </VStack>
    )
}
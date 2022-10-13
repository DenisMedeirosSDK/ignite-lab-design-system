import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <header className="flex flex-col items-center justify-center">
        <Logo />
        <Heading size="lg" className="mt-1">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar
        </Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4">
        <div className="flex flex-col gap-3">
          <Text asChild>
            <label htmlFor="email" className="font-semibold">
              Endereço de e-mail
            </label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope weight="duotone" />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </div>
        <div className="flex flex-col gap-3">
          <Text asChild>
            <label htmlFor="password" className="font-semibold">
              Sua senha
            </label>
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock weight="duotone" />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              name="password"
              type="password"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="remember" />
          <Text size="sm" asChild>
            <label htmlFor="remember">Salvar por 30 dias</label>
          </Text>
        </div>

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </form>

      <footer className="flex flex-col gap-3 items-center justify-center mt-8">
        <Text asChild size="sm">
          <a
            href=""
            className="text-gray-400 font-semibold underline underline-offset-4 hover:text-gray-200"
          >
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a
            href=""
            className="text-gray-400 font-semibold underline underline-offset-4 hover:text-gray-200"
          >
            Não possui uma conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}

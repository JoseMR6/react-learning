import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

export function CreateNewUser() {
    const { addUser } = useUserActions()
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
        event.preventDefault()

        setResult(null)

        const form = event.target
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name || !email || !github) {
            return setResult('ko')
        }

        addUser({ name, email, github })
        setResult('ok')
        form.reset()
    }

    return (
        <Card style={{ marginTop: '16px' }}>
            <Title>Create New User</Title>
            <form onSubmit={handleSubmit} className="">
                <TextInput
                    name="name"
                    placeholder="Nombre"
                />
                <TextInput
                    name="email"
                    placeholder="Email"
                />
                <TextInput
                    name="github"
                    placeholder="Usuario github"
                />

                <div>
                    <Button
                        type="submit"
                        style={{ marginTop: '16px' }}
                    >
                        Crear Usuario
                    </Button>
                    <span>
                        {result === 'ok' &&
                            <Badge>
                                <span style={{ color: 'green' }}>
                                    Guardado Correctamente
                                </span>
                            </Badge>
                        }
                        {result === 'ko' &&
                            <Badge>
                                <span style={{ color: 'red' }}>
                                    Error con los campos
                                </span>
                            </Badge>
                        }
                    </span>
                </div>
            </form>
        </Card>
    )
}
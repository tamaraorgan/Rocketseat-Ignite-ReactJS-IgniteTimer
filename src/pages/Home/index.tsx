import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import { CyclesContext } from '../../context/CyclesContext'

import {
    HomeContainer,
    StartCountdownButton,
    StopCountdownButton
} from './styles'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } =
        useContext(CyclesContext)

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    })
    const { handleSubmit, watch, reset } = newCycleForm

    const task = watch('task')
    const isSubmitDisable = !task

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data)
        reset()
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <Countdown />

                {activeCycle ? (
                    <StopCountdownButton
                        onClick={interruptCurrentCycle}
                        type='button'>
                        <HandPalm size={24} /> Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                        type='submit'
                        disabled={isSubmitDisable}>
                        <Play size={24} /> Começar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}

export { Home }

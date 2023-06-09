import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../../react/src/Button'
import { Heading } from '../../../react/src/Heading'
import { Text } from '../../../react/src/Text'
import { Input } from '../../../react/src/Input'
import { InputError } from '../../../react/src/InputError'

import { log } from '@/utils/log'
import { useCheckout } from '@/stores/checkout'

const creationFormValuesSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(8),
  country: z.string().min(2),
  tax_id: z.string(),
  address: z.string(),
  zip_code: z.string(),
})

type CreationFormValues = z.infer<typeof creationFormValuesSchema>

interface CreationProps {
  content?: any
  onSubmit: () => void
}

const CreationForm = ({ content, onSubmit }: CreationProps) => {
  const { inputs } = content

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CreationFormValues>({
    resolver: zodResolver(creationFormValuesSchema),
  })

  const createUser = (data: CreationFormValues) => {
    log(data)
    try {
      const customer = {
        name: data.name,
        email: data.email,
        document: data.tax_id,
        country: data.country,
        phone: data.phone,
      }

      onSubmit()

      useCheckout.setState((state) => ({ ...state, customer }))
    } catch (err) {
      log(err)
    }
  }

  console.log(errors)

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(createUser)}>
      <div className="flex items-start gap-12">
        <div className="flex w-[35%] flex-col gap-3">
          <Heading size="lg">{content?.title ?? ''}</Heading>

          <Text className="loose font-semibold text-neutral-500">
            {content?.text ?? ''}
          </Text>
          <Text className="loose text-neutral-500">
            {content?.annotation ?? ''}
          </Text>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <div className="flex gap-6">
            <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
              <label
                className="text-sm leading-relaxed tracking-[0.045em]"
                htmlFor={inputs.name.name}
              >
                {inputs.name.label}
              </label>
              <Input
                {...register(inputs.name.name)}
                id={inputs.name.name}
                status={errors.name ? 'error' : 'default'}
              />
              {errors.name && <InputError>{errors.name.message}</InputError>}
            </div>
            <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
              <label
                className="text-sm leading-relaxed tracking-[0.045em]"
                htmlFor={inputs.phone.name}
              >
                {inputs.phone.label}
              </label>
              <Input
                {...register(inputs.phone.name)}
                id={inputs.phone.name}
                status={errors.phone ? 'error' : 'default'}
              />
              {errors.phone && <InputError>{errors.phone.message}</InputError>}
            </div>
          </div>

          <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
            <label
              className="text-sm leading-relaxed tracking-[0.045em]"
              htmlFor={inputs.email.name}
            >
              {inputs.email.label}
            </label>
            <Input
              {...register(inputs.email.name)}
              id={inputs.email.name}
              status={errors.email ? 'error' : 'default'}
            />
            {errors.email && <InputError>{errors.email.message}</InputError>}
          </div>
          <div className="flex gap-6">
            <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
              <label
                className="text-sm leading-relaxed tracking-[0.045em]"
                htmlFor={inputs.country.name}
              >
                {inputs.country.label}
              </label>
              <Input
                {...register(inputs.country.name)}
                id={inputs.country.name}
                status={errors.country ? 'error' : 'default'}
              />
              {errors.country && (
                <InputError>{errors.country.message}</InputError>
              )}
            </div>

            <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
              <label
                className="text-sm leading-relaxed tracking-[0.045em]"
                htmlFor={inputs.tax_id.name}
              >
                {inputs.tax_id.label}
              </label>
              <Input
                {...register(inputs.tax_id.name)}
                id={inputs.tax_id.name}
                status={errors.tax_id ? 'error' : 'default'}
              />
              {errors.tax_id && (
                <InputError>{errors.tax_id.message}</InputError>
              )}
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
              <label
                className="text-sm leading-relaxed tracking-[0.045em]"
                htmlFor={inputs.address.name}
              >
                {inputs.address.label}
              </label>
              <Input
                {...register(inputs.address.name)}
                id={inputs.address.name}
                status={errors.address ? 'error' : 'default'}
              />
              {errors.address && (
                <InputError>{errors.address.message}</InputError>
              )}
            </div>
            <div className="w-full !flex-col !items-start gap-1 text-neutral-500">
              <label
                className="text-sm leading-relaxed tracking-[0.045em]"
                htmlFor={inputs.zip_code.name}
              >
                {inputs.zip_code.label}
              </label>
              <Input
                {...register(inputs.zip_code.name)}
                id={inputs.zip_code.name}
                status={errors.zip_code ? 'error' : 'default'}
              />
              {errors.zip_code && (
                <InputError> {errors.zip_code.message}</InputError>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="flex w-full items-center justify-end gap-4 border-t border-solid border-neutral-200 pt-5">
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="relative h-2 w-2 animate-[flash_0.5s_ease-out_infinite_alternate] rounded-[50%] bg-white shadow-[16px_0_#fff,_-16px_0_#fff]" />
          ) : (
            content?.btn_proceed?.cta ?? ''
          )}
        </Button>
      </footer>
    </form>
  )
}

export { CreationForm }

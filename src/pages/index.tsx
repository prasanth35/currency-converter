import { Button, Card, CardActions, CardContent, Container, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CountrySelect from '../components/countrySelector'
import { CountryType } from '../types/common'
import { ConversionRates, ExchangeRateApiResponseType } from '../types/apiResponseTypes'

const CurrencyConverter = () => {

    const [amount, setAmount] = useState<number>(0)
    const [fromCountry, setFromCountry] = useState<CountryType>({
        code: '',
        label: '',
        suggested: false
    })
    const [apiResponse, setApiResponse] = useState<ExchangeRateApiResponseType>()

    const [toCountry, setToCountry] = useState<CountryType>({
        code: '',
        label: '',
        suggested: false
    })

    const [errorText, setErrorText] = useState<string>()

    useEffect(() => {
        if (fromCountry?.code !== '') fetchConversionData()
    }, [fromCountry?.code]);

    const fetchConversionData = async () => {
        try {
            if (!fromCountry?.code) throw new Error('From country is not selected')
            const exchangeRateResponse = await fetch(`https://v6.exchangerate-api.com/v6/ef35cdaf98967a59b24aa31f/latest/${fromCountry?.code}`)
            const data = await exchangeRateResponse?.json() as unknown as ExchangeRateApiResponseType

            setApiResponse(data)
        } catch (error: any) {
            console.log("🚀 ~ fetchConversionData ~ error:", error)
            setErrorText(error?.toString())
        }
    }

    const onAmountChange = (event: any) => {
        setAmount(+event.target.value)
    }

    const onselectFromCurrency = (from: CountryType) => {
        setFromCountry(from)
    }

    const onSelectToCurrency = (to: CountryType) => {
        setToCountry(to)
    }

    const showOutPut = !!(fromCountry?.code !== '' && toCountry?.code !== '' && amount != 0 && apiResponse?.result)
    console.log("🚀 ~ CurrencyConverter ~ showOutPut:", apiResponse?.conversion_rates[fromCountry?.code as keyof ConversionRates])
    const currentRateForSelectedCountry = (apiResponse?.conversion_rates[toCountry?.code as keyof ConversionRates]) || 0
    return (
        <div className='w-full h-screen mx-auto bg-purple-50 flex items-center justify-center'>
            <Container maxWidth="md">
                <Card elevation={1} className='drop-shadow-sm rounded-lg'>
                    <CardContent>
                        <Typography gutterBottom variant="h6" marginBottom={4} fontWeight={700} textAlign={'start'} component="div">
                            Currency Converter
                        </Typography>
                        <Stack direction={'row'} gap={3} justifyContent={'space-around'}>
                            <TextField
                                type='number'
                                inputMode='numeric'
                                label='Amount'
                                onChange={onAmountChange}
                            />
                            <CountrySelect label='From' onSelect={onselectFromCurrency} />
                            <CountrySelect label='To' onSelect={onSelectToCurrency} />
                        </Stack>
                        {showOutPut ?
                            (<Stack gap={1} marginTop={2}>
                                <Typography variant='subtitle1' fontWeight={300}>{amount} {fromCountry?.code} = </Typography>
                                <Typography variant='h5' fontWeight={600}>{(amount * currentRateForSelectedCountry)?.toFixed(5)} {toCountry?.code}</Typography>
                                <Typography variant='subtitle2' fontWeight={300}>1 {fromCountry?.code} = {
                                    currentRateForSelectedCountry
                                } {toCountry?.code}</Typography>
                            </Stack>)
                            : null }
                        {
                            errorText ? <Typography variant='caption' className='text-red-700'> Oops : {errorText}</Typography> : null
                        }
                    </CardContent>
                    <CardActions className='flex-row-reverse'>
                        <Button variant='contained' size="medium">Convert</Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default CurrencyConverter

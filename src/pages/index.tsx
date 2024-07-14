import { Card, CardActions, CardContent, Container, Grid, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import CountrySelect from '../components/countrySelector'
import { CountryType } from '../lib/types/common'
import { ConversionRates, ExchangeRateApiResponseType } from '../lib/types/apiResponseTypes'
import { constants } from '../lib/utils/constants'
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs'
/**
 * @author PRASANTH.M
 * CurrencyConverter component allows users to convert an amount from one currency to another.
 * It fetches exchange rates from the Exchange Rate API and displays the conversion result.
 */

interface interfaceCountry extends CountryType {
    date?: string
}

const defaultValues = {
    code: '',
    imageCode: '',
    label: '',
    suggested: false
}
const fromCountryDefaultValues = {
    ...defaultValues,
    date : dayjs().format("YYYY-MM-DD")
}
const CurrencyConverter = () => {
    const currentDate = dayjs().format("YYYY-MM-DD")
    const [loading, setLoading] = useState<boolean>(false)
    const [amount, setAmount] = useState<number>(0)
    const [fromCountry, setFromCountry] = useState<interfaceCountry>({...fromCountryDefaultValues})
    const [toCountry, setToCountry] = useState<CountryType>({...defaultValues})
    const [currentApi, setCurrentApi] = useState<string>(constants.AVAILABLE_API[0])
    const [apiResponse, setApiResponse] = useState<ExchangeRateApiResponseType>()
    const [errorText, setErrorText] = useState<string>('')

    useEffect(() => {

        if (fromCountry?.code !== '' && errorText === '') { fetchConversionData() }
        // eslint-disable-next-line
    }, [fromCountry?.code, currentApi])

    /**
     * Fetches the conversion rates from the Exchange Rate API for the selected 'fromCountry'.
     * Sets the API response in the state and handles any errors that occur during the fetch.
     */
    const fetchConversionData = async () => {
        setLoading(true)
        try {
            if (!fromCountry?.code) throw new Error('From country is not selected')

            let exchangeRateResponse;
            if (currentApi === 'history') {
                const splitValue: any = fromCountry?.date?.split('-')
                const date = {
                    year: splitValue[0] || '',
                    month: splitValue[1] || '',
                    day: splitValue[2] || ''
                }
                exchangeRateResponse = await fetch(`https://v6.exchangerate-api.com/v6/${constants.API_KEY}/history/${fromCountry?.code}/${date?.year}/${date?.month}/${date?.day}`)
            } else {
                exchangeRateResponse = await fetch(`https://v6.exchangerate-api.com/v6/${constants.API_KEY}/latest/${fromCountry?.code}`)
            }
            const data: any = await exchangeRateResponse?.json()

            if (data?.result !== 'success') {
                if (data['error-type']?.includes('plan-upgrade-required')) {
                    throw new Error(`${data['error-type']} for historical data access`)
                }
                throw new Error(`${data['error-type']}`)
            }

            setApiResponse(data)
            setErrorText('')
        } catch (error: any) {
            console.error("🚀 ~ fetchConversionData ~ error:", error)
            setErrorText(error?.toString())
        } finally {
            setLoading(false)
        }
    }

    /**
     * Handles changes to the amount input field.
     * @param event - The input change event.
     */
    const onAmountChange = (event: any) => {
        setAmount(+event.target.value)
    }

    /**
     * Handles selection of the 'from' currency.
     * @param from - The selected 'from' country.
     */
    const onselectFromCurrency = (from: CountryType) => {
        setFromCountry({
            ...(from ? from : fromCountryDefaultValues)
         });
    }

    /**
     * Handles selection of the 'to' currency.
     * @param to - The selected 'to' country.
     */
    const onSelectToCurrency = (to: CountryType) => {
        setToCountry({
            ...(to ? to : defaultValues)
        })
    }
    /**
     * Handles selection of the API to use.
     * @param SelectChangeEvent.
     */
    const handleChange = (event: SelectChangeEvent) => {
        setErrorText('')
        setCurrentApi(event.target.value);
    };

    /**
    * Handles selection of the API to use.
    */
    const handleDateChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event?.target?.value

        setFromCountry(prevState => ({
            ...prevState,
            date: value
        }))
    };

    const showOutput = !!(fromCountry?.code !== '' && toCountry?.code !== '' && amount !== 0 && apiResponse?.result === 'success')
    const currentRateForSelectedCountry = apiResponse?.result === 'success' ? (apiResponse?.conversion_rates[toCountry?.code as keyof ConversionRates]) : 0

    return (
        <div className='w-full h-screen mx-auto flex items-center justify-center'>
            <Container maxWidth="md">
                <Card elevation={1} className='drop-shadow-sm rounded-lg'>
                    <CardContent>
                        <Stack gap={1} className='w-fit' marginBottom={2}>
                            <Typography variant="h6" fontWeight={600} fontStyle={'normal'} fontFamily={'initial'} textAlign={'start'} >
                                Currency Converter
                            </Typography>
                            <Select
                                value={currentApi}
                                onChange={handleChange}
                                size='small'>
                                {
                                    constants.AVAILABLE_API.map(api => <MenuItem key={api} value={api}>{api}</MenuItem>)
                                }
                            </Select>
                        </Stack>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={currentApi === 'history' ? 3 : 4}>
                                <TextField
                                    type='number'
                                    inputMode='numeric'
                                    label='Amount'
                                    onChange={onAmountChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={currentApi === 'history' ? 3 : 4}>
                                <CountrySelect label='From' onSelect={onselectFromCurrency} />
                            </Grid>
                            <Grid item xs={12} md={currentApi === 'history' ? 3 : 4}>
                                <CountrySelect label='To' onSelect={onSelectToCurrency} />
                            </Grid>
                            {currentApi === 'history' ?
                                <Grid item xs={12} md={3}>
                                    <TextField value={fromCountry?.date} type='date' onChange={handleDateChange} />
                                </Grid> : null}
                        </Grid>
                        {showOutput && (
                            <Grid container spacing={1} marginTop={1}>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle1' fontWeight={300}>{amount} {fromCountry?.code} = </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='h5' fontWeight={600}>{(amount * currentRateForSelectedCountry)?.toFixed(5)} {toCountry?.code}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2' fontWeight={300}>1 {fromCountry?.code} = {
                                        currentRateForSelectedCountry
                                    } {toCountry?.code}</Typography>
                                </Grid>
                            </Grid>
                        )}
                    </CardContent>
                    <CardActions className='flex-row-reverse'>
                        {loading ? <Typography variant='caption' className='text-gray-400' fontWeight={400}> Loading conversion data ... </Typography> : null}
                        {errorText ? (
                            <Typography variant='caption' className='text-red-700 border-2 rounded-lg p-2 border-red-100'> Oops : {errorText}</Typography>
                        ) : null}
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default CurrencyConverter

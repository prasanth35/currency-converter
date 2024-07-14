import { Card, CardActions, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CountrySelect from '../components/countrySelector'
import { CountryType } from '../lib/types/common'
import { ConversionRates, ExchangeRateApiResponseType } from '../lib/types/apiResponseTypes'
import { constants } from '../lib/utils/constants'
import React from 'react'

/**
 * @author PRASANTH.M
 * CurrencyConverter component allows users to convert an amount from one currency to another.
 * It fetches exchange rates from the Exchange Rate API and displays the conversion result.
 */
const CurrencyConverter = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [amount, setAmount] = useState<number>(0)
    const [fromCountry, setFromCountry] = useState<CountryType>()
    const [toCountry, setToCountry] = useState<CountryType>()

    const [apiResponse, setApiResponse] = useState<ExchangeRateApiResponseType>()
    const [errorText, setErrorText] = useState<string>()

    useEffect(() => {
        if (fromCountry?.code) { fetchConversionData() }
        // eslint-disable-next-line
    }, [fromCountry?.code])

    /**
     * Fetches the conversion rates from the Exchange Rate API for the selected 'fromCountry'.
     * Sets the API response in the state and handles any errors that occur during the fetch.
     */
    const fetchConversionData = async () => {
        setLoading(true)
        try {
            if (!fromCountry?.code) throw new Error('From country is not selected')

            const exchangeRateResponse = await fetch(`https://v6.exchangerate-api.com/v6/${constants.API_KEY}/latest/${fromCountry?.code}`)
            const data = await exchangeRateResponse?.json() as ExchangeRateApiResponseType

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
        setFromCountry(from) 
    }

    /**
     * Handles selection of the 'to' currency.
     * @param to - The selected 'to' country.
     */
    const onSelectToCurrency = (to: CountryType) => {
        setToCountry(to)
    }

    const showOutPut = !!(fromCountry?.code  && toCountry?.code && amount !== 0 && apiResponse?.result)
    const currentRateForSelectedCountry = (apiResponse?.conversion_rates[toCountry?.code as keyof ConversionRates]) || 0

    return (
        <div className='w-full h-screen mx-auto flex items-center justify-center'>
            <Container maxWidth="md">
                <Card elevation={1} className='drop-shadow-sm rounded-lg'>
                    <CardContent>
                        <Typography gutterBottom variant="h6" marginBottom={4} fontWeight={700} textAlign={'start'} component="div">
                            Currency Converter
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    type='number'
                                    inputMode='numeric'
                                    label='Amount'
                                    onChange={onAmountChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountrySelect label='From' onSelect={onselectFromCurrency} />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <CountrySelect label='To' onSelect={onSelectToCurrency} />
                            </Grid>
                        </Grid>
                        {showOutPut && (
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
                            <Typography variant='caption' className='text-red-700'> Oops : {errorText}</Typography>
                        ) : null}
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
}

export default CurrencyConverter

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CountryType } from '../types/common';

interface I_CountrySelect{
    label?:string,
    onSelect : any
}
export default function CountrySelect(props:I_CountrySelect) {

    const { label  = "Choose Country" , onSelect } = props

    const handleOnSelectCountry = (event:any,value:any) => {
        if(onSelect){
            onSelect(value)
        }
    }

    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.code}
            onChange={handleOnSelectCountry}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...optionProps}
                    >
                        {/* <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                            alt=""
                        /> */}
                        {option.label}{option.code}
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}


const countries: readonly CountryType[] = [
    { code: 'USD', label: '', suggested: false },
    { code: 'AED', label: '', suggested: false },
    { code: 'AFN', label: '', suggested: false },
    { code: 'ALL', label: '', suggested: false },
    { code: 'AMD', label: '', suggested: false },
    { code: 'ANG', label: '', suggested: false },
    { code: 'AOA', label: '', suggested: false },
    { code: 'ARS', label: '', suggested: false },
    { code: 'AUD', label: '', suggested: false },
    { code: 'AWG', label: '', suggested: false },
    { code: 'AZN', label: '', suggested: false },
    { code: 'BAM', label: '', suggested: false },
    { code: 'BBD', label: '', suggested: false },
    { code: 'BDT', label: '', suggested: false },
    { code: 'BGN', label: '', suggested: false },
    { code: 'BHD', label: '', suggested: false },
    { code: 'BIF', label: '', suggested: false },
    { code: 'BMD', label: '', suggested: false },
    { code: 'BND', label: '', suggested: false },
    { code: 'BOB', label: '', suggested: false },
    { code: 'BRL', label: '', suggested: false },
    { code: 'BSD', label: '', suggested: false },
    { code: 'BTN', label: '', suggested: false },
    { code: 'BWP', label: '', suggested: false },
    { code: 'BYN', label: '', suggested: false },
    { code: 'BZD', label: '', suggested: false },
    { code: 'CAD', label: '', suggested: false },
    { code: 'CDF', label: '', suggested: false },
    { code: 'CHF', label: '', suggested: false },
    { code: 'CLP', label: '', suggested: false },
    { code: 'CNY', label: '', suggested: false },
    { code: 'COP', label: '', suggested: false },
    { code: 'CRC', label: '', suggested: false },
    { code: 'CUP', label: '', suggested: false },
    { code: 'CVE', label: '', suggested: false },
    { code: 'CZK', label: '', suggested: false },
    { code: 'DJF', label: '', suggested: false },
    { code: 'DKK', label: '', suggested: false },
    { code: 'DOP', label: '', suggested: false },
    { code: 'DZD', label: '', suggested: false },
    { code: 'EGP', label: '', suggested: false },
    { code: 'ERN', label: '', suggested: false },
    { code: 'ETB', label: '', suggested: false },
    { code: 'EUR', label: '', suggested: false },
    { code: 'FJD', label: '', suggested: false },
    { code: 'FKP', label: '', suggested: false },
    { code: 'FOK', label: '', suggested: false },
    { code: 'GBP', label: '', suggested: false },
    { code: 'GEL', label: '', suggested: false },
    { code: 'GGP', label: '', suggested: false },
    { code: 'GHS', label: '', suggested: false },
    { code: 'GIP', label: '', suggested: false },
    { code: 'GMD', label: '', suggested: false },
    { code: 'GNF', label: '', suggested: false },
    { code: 'GTQ', label: '', suggested: false },
    { code: 'GYD', label: '', suggested: false },
    { code: 'HKD', label: '', suggested: false },
    { code: 'HNL', label: '', suggested: false },
    { code: 'HRK', label: '', suggested: false },
    { code: 'HTG', label: '', suggested: false },
    { code: 'HUF', label: '', suggested: false },
    { code: 'IDR', label: '', suggested: false },
    { code: 'ILS', label: '', suggested: false },
    { code: 'IMP', label: '', suggested: false },
    { code: 'INR', label: '', suggested: false },
    { code: 'IQD', label: '', suggested: false },
    { code: 'IRR', label: '', suggested: false },
    { code: 'ISK', label: '', suggested: false },
    { code: 'JEP', label: '', suggested: false },
    { code: 'JMD', label: '', suggested: false },
    { code: 'JOD', label: '', suggested: false },
    { code: 'JPY', label: '', suggested: false },
    { code: 'KES', label: '', suggested: false },
    { code: 'KGS', label: '', suggested: false },
    { code: 'KHR', label: '', suggested: false },
    { code: 'KID', label: '', suggested: false },
    { code: 'KMF', label: '', suggested: false },
    { code: 'KRW', label: '', suggested: false },
    { code: 'KWD', label: '', suggested: false },
    { code: 'KYD', label: '', suggested: false },
    { code: 'KZT', label: '', suggested: false },
    { code: 'LAK', label: '', suggested: false },
    { code: 'LBP', label: '', suggested: false },
    { code: 'LKR', label: '', suggested: false },
    { code: 'LRD', label: '', suggested: false },
    { code: 'LSL', label: '', suggested: false },
    { code: 'LYD', label: '', suggested: false },
    { code: 'MAD', label: '', suggested: false },
    { code: 'MDL', label: '', suggested: false },
    { code: 'MGA', label: '', suggested: false },
    { code: 'MKD', label: '', suggested: false },
    { code: 'MMK', label: '', suggested: false },
    { code: 'MNT', label: '', suggested: false },
    { code: 'MOP', label: '', suggested: false },
    { code: 'MRU', label: '', suggested: false },
    { code: 'MUR', label: '', suggested: false },
    { code: 'MVR', label: '', suggested: false },
    { code: 'MWK', label: '', suggested: false },
    { code: 'MXN', label: '', suggested: false },
    { code: 'MYR', label: '', suggested: false },
    { code: 'MZN', label: '', suggested: false },
    { code: 'NAD', label: '', suggested: false },
    { code: 'NGN', label: '', suggested: false },
    { code: 'NIO', label: '', suggested: false },
    { code: 'NOK', label: '', suggested: false },
    { code: 'NPR', label: '', suggested: false },
    { code: 'NZD', label: '', suggested: false },
    { code: 'OMR', label: '', suggested: false },
    { code: 'PAB', label: '', suggested: false },
    { code: 'PEN', label: '', suggested: false },
    { code: 'PGK', label: '', suggested: false },
    { code: 'PHP', label: '', suggested: false },
    { code: 'PKR', label: '', suggested: false },
    { code: 'PLN', label: '', suggested: false },
    { code: 'PYG', label: '', suggested: false },
    { code: 'QAR', label: '', suggested: false },
    { code: 'RON', label: '', suggested: false },
    { code: 'RSD', label: '', suggested: false },
    { code: 'RUB', label: '', suggested: false },
    { code: 'RWF', label: '', suggested: false },
    { code: 'SAR', label: '', suggested: false },
    { code: 'SBD', label: '', suggested: false },
    { code: 'SCR', label: '', suggested: false },
    { code: 'SDG', label: '', suggested: false },
    { code: 'SEK', label: '', suggested: false },
    { code: 'SGD', label: '', suggested: false },
    { code: 'SHP', label: '', suggested: false },
    { code: 'SLE', label: '', suggested: false },
    { code: 'SLL', label: '', suggested: false },
    { code: 'SOS', label: '', suggested: false },
    { code: 'SRD', label: '', suggested: false },
    { code: 'SSP', label: '', suggested: false },
    { code: 'STN', label: '', suggested: false },
    { code: 'SYP', label: '', suggested: false },
    { code: 'SZL', label: '', suggested: false },
    { code: 'THB', label: '', suggested: false },
    { code: 'TJS', label: '', suggested: false },
    { code: 'TMT', label: '', suggested: false },
    { code: 'TND', label: '', suggested: false },
    { code: 'TOP', label: '', suggested: false },
    { code: 'TRY', label: '', suggested: false },
    { code: 'TTD', label: '', suggested: false },
    { code: 'TVD', label: '', suggested: false },
    { code: 'TWD', label: '', suggested: false },
    { code: 'TZS', label: '', suggested: false },
    { code: 'UAH', label: '', suggested: false },
    { code: 'UGX', label: '', suggested: false },
    { code: 'UYU', label: '', suggested: false },
    { code: 'UZS', label: '', suggested: false },
    { code: 'VES', label: '', suggested: false },
    { code: 'VND', label: '', suggested: false },
    { code: 'VUV', label: '', suggested: false },
    { code: 'WST', label: '', suggested: false },
    { code: 'XAF', label: '', suggested: false },
    { code: 'XCD', label: '', suggested: false },
    { code: 'XDR', label: '', suggested: false },
    { code: 'XOF', label: '', suggested: false },
    { code: 'XPF', label: '', suggested: false },
    { code: 'YER', label: '', suggested: false },
    { code: 'ZAR', label: '', suggested: false },
    { code: 'ZMW', label: '', suggested: false },
    { code: 'ZWL', label: '', suggested: false },
];
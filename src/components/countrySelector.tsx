import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CountryType } from '../lib/types/common';

// Define the props interface for the CountrySelect component
interface I_CountrySelect {
    /**
     * The label for the country select field.
     * @default "Choose Country"
     */
    label?: string;
    /**
     * Callback function to handle the selection of a country.
     */
    onSelect: any;
    /**
     * If true, the input field will take up the full width of its container.
     * @default true
     */
    fullWidth?: boolean;
}

/**
 * @author PRASANTH.M
 * CountrySelect component provides an autocomplete field for selecting a country.
 * @param props - The props for the CountrySelect component.
 * @returns The JSX element for the CountrySelect component.
 */
export default function CountrySelect(props: I_CountrySelect) {

    const { label = "Choose Country", onSelect, fullWidth = true } = props;

    /**
     * Handles the selection of a country from the autocomplete options.
     * @param event - The change event.
     * @param value - The selected country value.
     */
    const handleOnSelectCountry = (event: any, value: CountryType | null) => {
        if (onSelect) {
            onSelect(value);
        }
    };

    return (
        <Autocomplete
            fullWidth={fullWidth}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
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
                        <img
                            loading="lazy"
                            width="20"
                            srcSet={`https://flagcdn.com/w40/${option.imageCode}.png 2x`}
                            src={`https://flagcdn.com/w20/${option.imageCode}.png`}
                            alt=""
                        />
                        ({option.code}) {option.label}
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


/**
 * List of countries
 */
const countries: readonly CountryType[] = [
    { code: 'USD', label: 'United States Dollar', suggested: false, imageCode: 'us' },
    { code: 'AED', label: 'United Arab Emirates Dirham', suggested: false, imageCode: 'ae' },
    { code: 'AFN', label: 'Afghan Afghani', suggested: false, imageCode: 'af' },
    { code: 'ALL', label: 'Albanian Lek', suggested: false, imageCode: 'al' },
    { code: 'AMD', label: 'Armenian Dram', suggested: false, imageCode: 'am' },
    { code: 'ANG', label: 'Netherlands Antillean Guilder', suggested: false, imageCode: 'nl' },
    { code: 'AOA', label: 'Angolan Kwanza', suggested: false, imageCode: 'ao' },
    { code: 'ARS', label: 'Argentine Peso', suggested: false, imageCode: 'ar' },
    { code: 'AUD', label: 'Australian Dollar', suggested: false, imageCode: 'au' },
    { code: 'AWG', label: 'Aruban Florin', suggested: false, imageCode: 'aw' },
    { code: 'AZN', label: 'Azerbaijani Manat', suggested: false, imageCode: 'az' },
    { code: 'BAM', label: 'Bosnia-Herzegovina Convertible Mark', suggested: false, imageCode: 'ba' },
    { code: 'BBD', label: 'Barbadian Dollar', suggested: false, imageCode: 'bb' },
    { code: 'BDT', label: 'Bangladeshi Taka', suggested: false, imageCode: 'bd' },
    { code: 'BGN', label: 'Bulgarian Lev', suggested: false, imageCode: 'bg' },
    { code: 'BHD', label: 'Bahraini Dinar', suggested: false, imageCode: 'bh' },
    { code: 'BIF', label: 'Burundian Franc', suggested: false, imageCode: 'bi' },
    { code: 'BMD', label: 'Bermudian Dollar', suggested: false, imageCode: 'bm' },
    { code: 'BND', label: 'Brunei Dollar', suggested: false, imageCode: 'bn' },
    { code: 'BOB', label: 'Bolivian Boliviano', suggested: false, imageCode: 'bo' },
    { code: 'BRL', label: 'Brazilian Real', suggested: false, imageCode: 'br' },
    { code: 'BSD', label: 'Bahamian Dollar', suggested: false, imageCode: 'bs' },
    { code: 'BTN', label: 'Bhutanese Ngultrum', suggested: false, imageCode: 'bt' },
    { code: 'BWP', label: 'Botswana Pula', suggested: false, imageCode: 'bw' },
    { code: 'BYN', label: 'Belarusian Ruble', suggested: false, imageCode: 'by' },
    { code: 'BZD', label: 'Belize Dollar', suggested: false, imageCode: 'bz' },
    { code: 'CAD', label: 'Canadian Dollar', suggested: false, imageCode: 'ca' },
    { code: 'CDF', label: 'Congolese Franc', suggested: false, imageCode: 'cd' },
    { code: 'CHF', label: 'Swiss Franc', suggested: false, imageCode: 'ch' },
    { code: 'CLP', label: 'Chilean Peso', suggested: false, imageCode: 'cl' },
    { code: 'CNY', label: 'Chinese Yuan', suggested: false, imageCode: 'cn' },
    { code: 'COP', label: 'Colombian Peso', suggested: false, imageCode: 'co' },
    { code: 'CRC', label: 'Costa Rican Colón', suggested: false, imageCode: 'cr' },
    { code: 'CUP', label: 'Cuban Peso', suggested: false, imageCode: 'cu' },
    { code: 'CVE', label: 'Cape Verdean Escudo', suggested: false, imageCode: 'cv' },
    { code: 'CZK', label: 'Czech Koruna', suggested: false, imageCode: 'cz' },
    { code: 'DJF', label: 'Djiboutian Franc', suggested: false, imageCode: 'dj' },
    { code: 'DKK', label: 'Danish Krone', suggested: false, imageCode: 'dk' },
    { code: 'DOP', label: 'Dominican Peso', suggested: false, imageCode: 'do' },
    { code: 'DZD', label: 'Algerian Dinar', suggested: false, imageCode: 'dz' },
    { code: 'EGP', label: 'Egyptian Pound', suggested: false, imageCode: 'eg' },
    { code: 'ERN', label: 'Eritrean Nakfa', suggested: false, imageCode: 'er' },
    { code: 'ETB', label: 'Ethiopian Birr', suggested: false, imageCode: 'et' },
    { code: 'EUR', label: 'Euro', suggested: false, imageCode: 'eu' },
    { code: 'FJD', label: 'Fijian Dollar', suggested: false, imageCode: 'fj' },
    { code: 'FKP', label: 'Falkland Islands Pound', suggested: false, imageCode: 'fk' },
    { code: 'FOK', label: 'Faroese Króna', suggested: false, imageCode: 'fo' },
    { code: 'GBP', label: 'British Pound', suggested: false, imageCode: 'gb' },
    { code: 'GEL', label: 'Georgian Lari', suggested: false, imageCode: 'ge' },
    { code: 'GGP', label: 'Guernsey Pound', suggested: false, imageCode: 'gg' },
    { code: 'GHS', label: 'Ghanaian Cedi', suggested: false, imageCode: 'gh' },
    { code: 'GIP', label: 'Gibraltar Pound', suggested: false, imageCode: 'gi' },
    { code: 'GMD', label: 'Gambian Dalasi', suggested: false, imageCode: 'gm' },
    { code: 'GNF', label: 'Guinean Franc', suggested: false, imageCode: 'gn' },
    { code: 'GTQ', label: 'Guatemalan Quetzal', suggested: false, imageCode: 'gt' },
    { code: 'GYD', label: 'Guyanese Dollar', suggested: false, imageCode: 'gy' },
    { code: 'HKD', label: 'Hong Kong Dollar', suggested: false, imageCode: 'hk' },
    { code: 'HNL', label: 'Honduran Lempira', suggested: false, imageCode: 'hn' },
    { code: 'HRK', label: 'Croatian Kuna', suggested: false, imageCode: 'hr' },
    { code: 'HTG', label: 'Haitian Gourde', suggested: false, imageCode: 'ht' },
    { code: 'HUF', label: 'Hungarian Forint', suggested: false, imageCode: 'hu' },
    { code: 'IDR', label: 'Indonesian Rupiah', suggested: false, imageCode: 'id' },
    { code: 'ILS', label: 'Israeli New Shekel', suggested: false, imageCode: 'il' },
    { code: 'IMP', label: 'Isle of Man Pound', suggested: false, imageCode: 'im' },
    { code: 'INR', label: 'Indian Rupee', suggested: false, imageCode: 'in' },
    { code: 'IQD', label: 'Iraqi Dinar', suggested: false, imageCode: 'iq' },
    { code: 'IRR', label: 'Iranian Rial', suggested: false, imageCode: 'ir' },
    { code: 'ISK', label: 'Icelandic Króna', suggested: false, imageCode: 'is' },
    { code: 'JEP', label: 'Jersey Pound', suggested: false, imageCode: 'je' },
    { code: 'JMD', label: 'Jamaican Dollar', suggested: false, imageCode: 'jm' },
    { code: 'JOD', label: 'Jordanian Dinar', suggested: false, imageCode: 'jo' },
    { code: 'JPY', label: 'Japanese Yen', suggested: false, imageCode: 'jp' },
    { code: 'KES', label: 'Kenyan Shilling', suggested: false, imageCode: 'ke' },
    { code: 'KGS', label: 'Kyrgyzstani Som', suggested: false, imageCode: 'kg' },
    { code: 'KHR', label: 'Cambodian Riel', suggested: false, imageCode: 'kh' },
    { code: 'KID', label: 'Kiribati Dollar', suggested: false, imageCode: 'ki' },
    { code: 'KMF', label: 'Comorian Franc', suggested: false, imageCode: 'km' },
    { code: 'KRW', label: 'South Korean Won', suggested: false, imageCode: 'kr' },
    { code: 'KWD', label: 'Kuwaiti Dinar', suggested: false, imageCode: 'kw' },
    { code: 'KYD', label: 'Cayman Islands Dollar', suggested: false, imageCode: 'ky' },
    { code: 'KZT', label: 'Kazakhstani Tenge', suggested: false, imageCode: 'kz' },
    { code: 'LAK', label: 'Lao Kip', suggested: false, imageCode: 'la' },
    { code: 'LBP', label: 'Lebanese Pound', suggested: false, imageCode: 'lb' },
    { code: 'LKR', label: 'Sri Lankan Rupee', suggested: false, imageCode: 'lk' },
    { code: 'LRD', label: 'Liberian Dollar', suggested: false, imageCode: 'lr' },
    { code: 'LSL', label: 'Lesotho Loti', suggested: false, imageCode: 'ls' },
    { code: 'LYD', label: 'Libyan Dinar', suggested: false, imageCode: 'ly' },
    { code: 'MAD', label: 'Moroccan Dirham', suggested: false, imageCode: 'ma' },
    { code: 'MDL', label: 'Moldovan Leu', suggested: false, imageCode: 'md' },
    { code: 'MGA', label: 'Malagasy Ariary', suggested: false, imageCode: 'mg' },
    { code: 'MKD', label: 'Macedonian Denar', suggested: false, imageCode: 'mk' },
    { code: 'MMK', label: 'Burmese Kyat', suggested: false, imageCode: 'mm' },
    { code: 'MNT', label: 'Mongolian Tögrög', suggested: false, imageCode: 'mn' },
    { code: 'MOP', label: 'Macanese Pataca', suggested: false, imageCode: 'mo' },
    { code: 'MRU', label: 'Mauritanian Ouguiya', suggested: false, imageCode: 'mr' },
    { code: 'MUR', label: 'Mauritian Rupee', suggested: false, imageCode: 'mu' },
    { code: 'MVR', label: 'Maldivian Rufiyaa', suggested: false, imageCode: 'mv' },
    { code: 'MWK', label: 'Malawian Kwacha', suggested: false, imageCode: 'mw' },
    { code: 'MXN', label: 'Mexican Peso', suggested: false, imageCode: 'mx' },
    { code: 'MYR', label: 'Malaysian Ringgit', suggested: false, imageCode: 'my' },
    { code: 'MZN', label: 'Mozambican Metical', suggested: false, imageCode: 'mz' },
    { code: 'NAD', label: 'Namibian Dollar', suggested: false, imageCode: 'na' },
    { code: 'NGN', label: 'Nigerian Naira', suggested: false, imageCode: 'ng' },
    { code: 'NIO', label: 'Nicaraguan Córdoba', suggested: false, imageCode: 'ni' },
    { code: 'NOK', label: 'Norwegian Krone', suggested: false, imageCode: 'no' },
    { code: 'NPR', label: 'Nepalese Rupee', suggested: false, imageCode: 'np' },
    { code: 'NZD', label: 'New Zealand Dollar', suggested: false, imageCode: 'nz' },
    { code: 'OMR', label: 'Omani Rial', suggested: false, imageCode: 'om' },
    { code: 'PAB', label: 'Panamanian Balboa', suggested: false, imageCode: 'pa' },
    { code: 'PEN', label: 'Peruvian Sol', suggested: false, imageCode: 'pe' },
    { code: 'PGK', label: 'Papua New Guinean Kina', suggested: false, imageCode: 'pg' },
    { code: 'PHP', label: 'Philippine Peso', suggested: false, imageCode: 'ph' },
    { code: 'PKR', label: 'Pakistani Rupee', suggested: false, imageCode: 'pk' },
    { code: 'PLN', label: 'Polish Złoty', suggested: false, imageCode: 'pl' },
    { code: 'PYG', label: 'Paraguayan Guaraní', suggested: false, imageCode: 'py' },
    { code: 'QAR', label: 'Qatari Riyal', suggested: false, imageCode: 'qa' },
    { code: 'RON', label: 'Romanian Leu', suggested: false, imageCode: 'ro' },
    { code: 'RSD', label: 'Serbian Dinar', suggested: false, imageCode: 'rs' },
    { code: 'RUB', label: 'Russian Ruble', suggested: false, imageCode: 'ru' },
    { code: 'RWF', label: 'Rwandan Franc', suggested: false, imageCode: 'rw' },
    { code: 'SAR', label: 'Saudi Riyal', suggested: false, imageCode: 'sa' },
    { code: 'SBD', label: 'Solomon Islands Dollar', suggested: false, imageCode: 'sb' },
    { code: 'SCR', label: 'Seychellois Rupee', suggested: false, imageCode: 'sc' },
    { code: 'SDG', label: 'Sudanese Pound', suggested: false, imageCode: 'sd' },
    { code: 'SEK', label: 'Swedish Krona', suggested: false, imageCode: 'se' },
    { code: 'SGD', label: 'Singapore Dollar', suggested: false, imageCode: 'sg' },
    { code: 'SHP', label: 'Saint Helena Pound', suggested: false, imageCode: 'sh' },
    { code: 'SLE', label: 'Sierra Leonean Leone', suggested: false, imageCode: 'sl' },
    { code: 'SLL', label: 'Sierra Leonean Leone', suggested: false, imageCode: 'sl' },
    { code: 'SOS', label: 'Somali Shilling', suggested: false, imageCode: 'so' },
    { code: 'SRD', label: 'Surinamese Dollar', suggested: false, imageCode: 'sr' },
    { code: 'SSP', label: 'South Sudanese Pound', suggested: false, imageCode: 'ss' },
    { code: 'STN', label: 'São Tomé and Príncipe Dobra', suggested: false, imageCode: 'st' },
    { code: 'SYP', label: 'Syrian Pound', suggested: false, imageCode: 'sy' },
    { code: 'SZL', label: 'Eswatini Lilangeni', suggested: false, imageCode: 'sz' },
    { code: 'THB', label: 'Thai Baht', suggested: false, imageCode: 'th' },
    { code: 'TJS', label: 'Tajikistani Somoni', suggested: false, imageCode: 'tj' },
    { code: 'TMT', label: 'Turkmenistani Manat', suggested: false, imageCode: 'tm' },
    { code: 'TND', label: 'Tunisian Dinar', suggested: false, imageCode: 'tn' },
    { code: 'TOP', label: 'Tongan Paʻanga', suggested: false, imageCode: 'to' },
    { code: 'TRY', label: 'Turkish Lira', suggested: false, imageCode: 'tr' },
    { code: 'TTD', label: 'Trinidad and Tobago Dollar', suggested: false, imageCode: 'tt' },
    { code: 'TVD', label: 'Tuvaluan Dollar', suggested: false, imageCode: 'tv' },
    { code: 'TWD', label: 'New Taiwan Dollar', suggested: false, imageCode: 'tw' },
    { code: 'TZS', label: 'Tanzanian Shilling', suggested: false, imageCode: 'tz' },
    { code: 'UAH', label: 'Ukrainian Hryvnia', suggested: false, imageCode: 'ua' },
    { code: 'UGX', label: 'Ugandan Shilling', suggested: false, imageCode: 'ug' },
    { code: 'UYU', label: 'Uruguayan Peso', suggested: false, imageCode: 'uy' },
    { code: 'UZS', label: 'Uzbekistani Som', suggested: false, imageCode: 'uz' },
    { code: 'VES', label: 'Venezuelan Bolívar', suggested: false, imageCode: 've' },
    { code: 'VND', label: 'Vietnamese Đồng', suggested: false, imageCode: 'vn' },
    { code: 'VUV', label: 'Vanuatu Vatu', suggested: false, imageCode: 'vu' },
    { code: 'WST', label: 'Samoan Tālā', suggested: false, imageCode: 'ws' },
    { code: 'XAF', label: 'Central African CFA Franc', suggested: false, imageCode: 'cf' },
    { code: 'XCD', label: 'East Caribbean Dollar', suggested: false, imageCode: 'xc' },
    { code: 'XOF', label: 'West African CFA Franc', suggested: false, imageCode: 'xo' },
    { code: 'XPF', label: 'CFP Franc', suggested: false, imageCode: 'pf' },
    { code: 'YER', label: 'Yemeni Rial', suggested: false, imageCode: 'ye' },
    { code: 'ZAR', label: 'South African Rand', suggested: false, imageCode: 'za' },
    { code: 'ZMW', label: 'Zambian Kwacha', suggested: false, imageCode: 'zm' },
    { code: 'ZWL', label: 'Zimbabwean Dollar', suggested: false, imageCode: 'zw' }
];
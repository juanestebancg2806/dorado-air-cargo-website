import api from "./api";


//https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file
const API_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
const FALLBACK_API_URL =
  "https://latest.currency-api.pages.dev/v1/currencies/";

export interface CurrencyApiResponse {
  date: string;
  usd?: Record<string, number>;
  eur?: Record<string, number>;
}

type Currency = "usd" | "eur";

/**
 * Try fetching exchange rate from the main CDN API.
 */
const fetchFromPrimaryAPI = async (
  currency: Currency
): Promise<number | null> => {
  const response = await api.get<CurrencyApiResponse>(
    `${API_URL}${currency}.json?nocache=${Date.now()}`
  );
  return response.data[currency]?.cop ?? null;
};

/**
 * Try fetching exchange rate from the fallback API.
 */
const fetchFromFallbackAPI = async (
  currency: Currency
): Promise<number | null> => {
  const response = await api.get<CurrencyApiResponse>(
    `${FALLBACK_API_URL}${currency}.json?nocache=${Date.now()}`
  );
  return response.data[currency]?.cop ?? null;
};

/**
 * Public service function to get the exchange rate from either source.
 */
export const fetchExchangeRate = async (
  currency: Currency
): Promise<number | null> => {
  try {
    const rate = await fetchFromPrimaryAPI(currency);
    if (rate !== null) return rate;
    throw new Error("No COP rate in primary API");
  } catch (primaryError) {
    console.warn("Primary API failed, trying fallback...", primaryError);

    try {
      const fallbackRate = await fetchFromFallbackAPI(currency);
      if (fallbackRate !== null) return fallbackRate;
      throw new Error("No COP rate in fallback API");
    } catch (fallbackError) {
      console.error("Both APIs failed", fallbackError);
      return null;
    }
  }
};

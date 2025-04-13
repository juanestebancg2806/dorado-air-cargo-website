import { useState, useEffect } from "react";
import api from "../../services/api";

const API_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
const FALLBACK_API_URL = "https://latest.currency-api.pages.dev/v1/currencies/";

// https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file

interface CurrencyApiResponse {
  date: string;
  usd?: Record<string, number>;
  eur?: Record<string, number>;
}

interface CurrencyConverterProps {
  currency?: "usd" | "eur";
  title?: string;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  currency = "usd",
  title = "1 Dólar estadounidense es igual a",
}) => {
  const [currencyToCop, setCurrencyToCop] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      setLoading(true);
      try {
        // Primary API call
        const { data } = await api.get<CurrencyApiResponse>(
          API_URL + `${currency}.json`
        );
        const rate = data[currency]?.cop ?? null;

        if (rate !== null) {
          setCurrencyToCop(rate);
        } else {
          throw new Error("No COP rate found in primary API.");
        }
      } catch (primaryError) {
        console.warn("Primary API failed, trying fallback...", primaryError);

        try {
          // Fallback API call
          const fallbackResponse = await fetch(
            `${FALLBACK_API_URL}${currency}.json`
          );
          const fallbackData: CurrencyApiResponse = await fallbackResponse.json();
          const fallbackRate = fallbackData[currency]?.cop ?? null;

          if (fallbackRate !== null) {
            setCurrencyToCop(fallbackRate);
          } else {
            throw new Error("No COP rate found in fallback API.");
          }
        } catch (fallbackError) {
          console.error("Fallback API also failed", fallbackError);
          setCurrencyToCop(0); // Show error message
        }
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [currency]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md font-open-sans">
      {currencyToCop === 0 ? (
        <p className="text-lg font-bold">No se pudo traer la información</p>
      ) : (
        <>
          <h2 className="text-lg text-gray-600">{title}</h2>

          {loading ? (
            <p className="text-gray-500 text-lg">Cargando...</p>
          ) : (
            <p className="text-lg font-bold">
              {currencyToCop?.toLocaleString("es-CO")} Pesos colombianos
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CurrencyConverter;

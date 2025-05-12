import { useState, useEffect } from "react";
import { fetchExchangeRate } from "../../services/currencyService";

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
  const [error, setError] = useState(false);

  useEffect(() => {
    const getExchangeRate = async () => {
      setLoading(true);
      setError(false); // reset error state

      try {
        const rate = await fetchExchangeRate(currency);
        if (rate === null) {
          setError(true);
          setCurrencyToCop(null);
        } else {
          setCurrencyToCop(rate);
        }
      } catch (err) {
        console.error("Error fetching exchange rate:", err);
        setError(true);
        setCurrencyToCop(null);
      } finally {
        setLoading(false);
      }
    };

    getExchangeRate();
  }, [currency]);

  return (
    <div className="bg-blue-dark/80 text-white p-6 rounded-lg shadow-md text-center max-w-md font-open-sans">
      {error ? (
        <p className="text-lg font-bold">No se pudo traer la información</p>
      ) : (
        <>
          <h2 className="text-lg">{title}</h2>

          {loading ? (
            <p className="text-lg">Cargando...</p>
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

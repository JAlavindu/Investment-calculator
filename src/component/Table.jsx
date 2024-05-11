import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Table({results}){
    console.log(results);
    const computedValues = calculateInvestmentResults(results);
    const initialInvestment = (computedValues[0].valueEndOfYear)-(computedValues[0].interest)-(computedValues[0].annualInvestment);
    return(
    <>
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {computedValues.map((value, id) =>{
                const totalInterest = value.valueEndOfYear-value.annualInvestment*value.year-initialInvestment;
                const totalAmountInvested = value.valueEndOfYear-totalInterest;
                return(
                    <tr key={id}>
                    <td>{value.year}</td>
                    <td>{formatter.format(value.valueEndOfYear)}</td>
                    <td>{formatter.format(value.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{totalAmountInvested}</td>
                    </tr>
                    )
            }) 
            }
        </tbody>
    </table> 
    </>
    )
}
export default function CalculatorBox({onChangeDetails, inputs}){
    return(
        <section id="user-input">
        <div className="input-group">
            <p>
            <label >Initial investment</label>
            <input type="number" required value={inputs.initialInvestment} onChange={(event) => onChangeDetails(event.target.value, 'initialInvestment')}/>
            </p>
            <p>
            <label>Annual investment</label>
            <input type="number" required value={inputs.annualInvestment} onChange={(event) => onChangeDetails(event.target.value, 'annualInvestment')}/>
            </p>
        </div>
        <div className="input-group">
            <p>
            <label>Expected return</label>
            <input type="number" required value={inputs.expectedReturn} onChange={(event) => onChangeDetails(event.target.value, 'expectedReturn')}/>
            </p>
            <p>
            <label>Duration</label>
            <input type="number" required value={inputs.duration} onChange={(event) => onChangeDetails(event.target.value, 'duration')}/>
            </p>
        </div>
        </section>
        
    )
}
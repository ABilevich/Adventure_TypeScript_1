type InvestmentData = {
    initialAmmount: number,
    annualContribution: number,
    expectedReturn: number,
    duration: number
}

type InvestmentResult = {
    year: string,
    totalAmmount: number,
    totalContributions: number,
    totalIntrestEarned: number
}

type calculationResult = InvestmentResult[] | string
function calculateInvestment(data: InvestmentData): calculationResult { 
    const {
        initialAmmount,
        annualContribution,
        expectedReturn,
        duration
    } = data
    
    if(initialAmmount < 0) return "Initial insvestment must be at least 0"
    if(duration <= 0) return "No valid amomunt of years"
    if(expectedReturn < 0) return "Expected return must be at least 0"
    
    let total = initialAmmount
    let totalContributions = 0
    let totalIntrestEarned = 0

    const annualResults: InvestmentResult[]  = []

    for(let i=0; i<duration; i++){
        total = total * (1+expectedReturn)
        totalIntrestEarned = total-totalContributions-initialAmmount
        totalContributions = totalContributions + annualContribution
        total = total + annualContribution;
        annualResults.push({
            year: `Year ${i+1}`,
            totalAmmount: total,
            totalIntrestEarned,
            totalContributions
        });
    }

    return annualResults
}

function printResults(results: calculationResult){
    if(typeof results === 'string'){
        console.log(results)
        return
    }
    for(const yearResult of results){
        console.log(yearResult.year)
        console.log(`Total: ${yearResult.totalAmmount.toFixed(0)}`)
        console.log(`Total Contributions: ${yearResult.totalContributions.toFixed(0)}`)
        console.log(`Total intrest Earned: ${yearResult.totalIntrestEarned.toFixed(0)}`)
        console.log('----------------------')
    }
}

const initialData: InvestmentData = {
    initialAmmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}

const results = calculateInvestment(initialData)

printResults(results)
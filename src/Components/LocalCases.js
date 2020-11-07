import React from 'react'
import TotalLocalCases from './TotalLocalCases'
import LocalRecovered from './LocalRecovered'
import TotalPcrTestingCount from './TotalPcrTestingCount'
import LocalDeaths from './LocalDeaths'


function LocalCases({ statistics }) {

    console.log("statistics", statistics)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
            < TotalLocalCases local_total_cases={statistics.local_total_cases}/>
            < LocalRecovered local_recovered={statistics.local_recovered}/>
            < TotalPcrTestingCount total_pcr_testing_count={statistics.total_pcr_testing_count}/> 
            < LocalDeaths local_deaths={statistics.local_deaths}/> 
        </div>
    )
}

export default LocalCases

import React from 'react'
import GlobalTotalCases from './GlobalTotalCases'
import GlobalRecovered from './GlobalRecovered'
import GlobalNewCases from './GlobalNewCases'
import GlobalDeaths from './GlobalDeaths'

function GlobalCases({statistics}) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center' }}>
            < GlobalTotalCases global_total_cases={statistics.global_total_cases}/>
            < GlobalRecovered global_recovered={statistics.global_recovered}/>
            < GlobalNewCases global_new_cases={statistics.global_new_cases}/>
            < GlobalDeaths global_deaths={statistics.global_deaths}/>
        </div>
    )
}

export default GlobalCases

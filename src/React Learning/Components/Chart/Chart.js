import ChartBar from "./ChartBar";
const Chart=(props)=>
{
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)  //transforming datapoint object to number
    const totalMaximum=Math.max(...dataPointValues)  //using spread operator ,since max function needs more than one arg 
    return(
        <div className="chart">
            {props.dataPoints.map(dataPoint=> <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)}
        </div>
    )
}
export default Chart;
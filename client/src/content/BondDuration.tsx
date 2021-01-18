import { useRef, useState } from "react";
import { sequence } from "../util/util";

function BondDuration() {

    const faceValue = 10000;
    const couponEl = useRef<HTMLInputElement>(null);
    const yieldEl = useRef<HTMLInputElement>(null);
    const periodEl = useRef<HTMLInputElement>(null);
    const periodLengthEl = useRef<HTMLSelectElement>(null);

    const [couponRate, setCouponRate] = useState(0.06);
    const [yieldRate, setYieldRate] = useState(0.05);
    const [period, setPeriod] = useState(5);
    const [periodLength, setPeriodLength] = useState(0.5);

    const displayOutput = () => {
        const couponRate = couponEl.current!.value;
        const yieldRate = yieldEl.current!.value;
        const period = periodEl.current!.value;
        const periodLength = periodLengthEl.current!.value;
        if (couponRate.trim() === '' || yieldRate.trim() === '' || period.trim() === '' || period === '0') {
            return;
        }
        setCouponRate(parseFloat(couponRate));
        setYieldRate(parseFloat(yieldRate));
        setPeriod(parseInt(period));
        setPeriodLength(parseFloat(periodLength));
    };

    const renderTable = () => {
        const interest = faceValue * couponRate * periodLength;
        const periodYieldRate = yieldRate * periodLength;
        let nPresentValue = 0;
        const rows = sequence(1, period, 1).map(i => {
            const cashFlow = i === period ? faceValue + interest : interest;
            const presentValue = cashFlow / (Math.pow((1+periodYieldRate), i));
            nPresentValue = nPresentValue + i * presentValue;
            return (<tr key={i}><td>{i}</td><td>{cashFlow.toFixed(2)}</td><td>{cashFlow.toFixed(2)}/({1+periodYieldRate})<sup>{i}</sup>={presentValue.toFixed(2)}</td><td>{i}&times;{presentValue.toFixed(2)}={(i*presentValue).toFixed(2)}</td></tr>);
        });
        const mcCauley = nPresentValue/faceValue;
        const modified = mcCauley / (1 + periodYieldRate) * periodLength;
        return (
        <div>
            <h2>麦考利久期</h2>
            <table style={{width: '100%', textAlign: 'left'}}>
                <thead><tr><th>周期</th><th>现金流</th><th>现值</th><th>n&times;现值</th></tr></thead>
                <tbody>
                    {rows} 
                    <tr><td>总和</td><td></td><td></td><td>{nPresentValue.toFixed(2)}</td></tr>
                    <tr><td>麦考利久期</td><td></td><td></td><td>{nPresentValue.toFixed(2)}/{faceValue}={mcCauley.toFixed(2)}</td></tr>
                    <tr><td>修正久期</td><td></td><td></td><td>{mcCauley.toFixed(2)}/{1+periodLength} * {periodLength}={(modified).toFixed(2)}</td></tr>
                </tbody>
            </table>
        </div>
        );
    };

    return (<div>
        <p>修正久期源自于利率和债券价格呈现相反关系的规律，用于衡量利率单位变化对债券价格的影响。</p>
        <p>修正久期 = 麦考利久期 / (1 + 收益率)</p>
        <div>
            <div>面值：$10,000</div>
            <br />
            <div>票面利率：<input ref={couponEl} defaultValue={couponRate} /></div>
            <br />
            <div>收益率：<input ref={yieldEl} defaultValue={yieldRate} /></div>
            <br />
            <div>复利周期：<input ref={periodEl} defaultValue={period} /></div>
            <br />
            <div>复利周期长度：
                <select ref={periodLengthEl} defaultValue={periodLength.toString()}>
                    <option value='0.5'>半年</option>
                    <option value='1'>1年</option>
                </select>
            </div>
            <br />
            <div><button onClick={() => displayOutput()}>计算</button></div>
        </div>
        {renderTable()}
    </div>)
}

export default BondDuration;
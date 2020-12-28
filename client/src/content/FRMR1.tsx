import Sentence from "../widget/Sentence";
import Title from "../widget/Title";

function FRMR1() {
    return (
        <div style={{fontSize: '20px'}}>
            <Title>READING 1: RISK MANAGEMENT: A HELICOPTER VIEW</Title>
            <p><Sentence sid={1}>Risk arises from the uncertainty regarding an entity’s future losses as well as future gains.</Sentence></p>
            <p>
                <Sentence sid={2}>Therefore, in simplified terms, there is a natural trade-off between risk and return.</Sentence>
                &nbsp;<Sentence sid={3}>Risk is not necessarily related to the size of the potential loss.</Sentence>
                &nbsp;<Sentence sid={4}>For example, many potential losses are large but are quite predictable and can be provided for using risk management techniques</Sentence>
                &nbsp;<Sentence sid={5}>The more important concern is the variability of the loss, especially a loss that could rise to unexpectedly high levels or a loss that suddenly occurs that was not anticipated.</Sentence>
            </p>
            <p>
                <Sentence sid={6}>As a starting point, risk management includes the sequence of activities aimed to reduce or eliminate an entity’s potential to incur expected losses. </Sentence>
                &nbsp;<Sentence sid={7}>On top of that, there is the need to manage the unexpected variability of some costs. </Sentence>
                &nbsp;<Sentence sid={8}>In managing both expected and unexpected losses, risk management can be thought of as a defensive technique.</Sentence>
                &nbsp;<Sentence sid={9}>However, risk management is actually broader in the sense that it considers how an entity can consciously determine how much risk it is willing to take to earn future uncertain returns, which involves risk taking.</Sentence>
            </p>
            <p>
                <Sentence sid={10}>Risk taking refers specifically to the active assumption of incremental risk in order to generate incremental gains. In that regard, risk taking can be thought of in an opportunistic context.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>The Risk Management Process</p>
            <p>
                <Sentence sid={11}>The risk management process involves the following five steps:</Sentence>
            </p>
            <p><Sentence sid={12}>Step 1: Identify the risks.</Sentence></p>
            <p><Sentence sid={13}>Step 2: Quantify and estimate the risk exposures or determine appropriate methods to transfer the risks.</Sentence></p>
            <p><Sentence sid={14}>Step 3: Determine the collective effects of the risk exposures or perform a cost-benefit analysis on risk transfer methods.</Sentence></p>
            <p><Sentence sid={15}>Step 4: Develop a risk mitigation strategy (i.e., avoid, transfer, mitigate, or assume risk).</Sentence></p>
            <p><Sentence sid={16}>Step 5: Assess performance and amend risk mitigation strategy as needed.</Sentence></p>
            <p>
            <Sentence sid={17}>In practice, this process is not likely to operate perfectly in this sequence.</Sentence>
            &nbsp;<Sentence sid={18}>Two key problems with the process include identifying the correct risk(s) and finding an efficient method of transferring the risk.</Sentence></p>
            <p>
                <Sentence sid={19}>One of the challenges in ensuring that risk management will be beneficial to the economy is that risk must be sufficiently dispersed among willing and able participants in the economy.</Sentence>
                <Sentence sid={20}>Unfortunately, a notable failure of risk management occurred during the financial crisis between 2007 and 2009 when it was subsequently discovered that risk was too concentrated among too few participants.</Sentence>
            </p>
            <p>
                <Sentence sid={21}>Another challenge of the risk management process is that it has failed to consistently assist in preventing market disruptions or preventing financial accounting fraud (due to corporate governance failures).</Sentence>
                &nbsp;<Sentence sid={22}>For example, the existence of derivative financial instruments greatly facilitates the ability to assume high levels of risk and the tendency of risk managers to follow each other’s actions (e.g., selling risky assets during a market crisis, which disrupts the market by increasing its volatility).</Sentence>
            </p>
            <p>
                <Sentence sid={23}>In addition, the use of derivatives as complex trading strategies assisted in overstating the financial position (i.e., net assets on balance sheet) of many entities and understating the level of risk assumed by many entities. </Sentence>
                &nbsp;<Sentence sid={24}>Even with the best risk management policies in place, using such inaccurate information would not allow the policies to be effective.</Sentence>
            </p>
            <p>
                <Sentence sid={24}>Finally, risk management may not be effective on an overall economic basis because it only involves risk transferring by one party and risk assumption by another party.</Sentence>
                &nbsp;<Sentence sid={25}> It does not result in overall risk elimination. In other words, risk management can be thought of as a zero-sum game in that some “winning” parties will gain at the expense of some “losing” parties.</Sentence>
                &nbsp;<Sentence sid={26}>However, if enough parties suffer devastating losses due to an excessive assumption of risk, it could lead to a widespread economic crisis.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Quantitative Risk Measures</p>
            <p>
                <Sentence sid={27}>Value at risk (VaR) states a certain loss amount and its probability of occurring.</Sentence>
                &nbsp;<Sentence sid={28}>For example, a financial institution may have a one-day VaR of $2.5 million at the 95% confidence level.</Sentence>
                &nbsp;<Sentence sid={29}> That would be interpreted as having a 5% chance that there will be a loss greater than $2.5 million on any given day.</Sentence>
                &nbsp;<Sentence sid={30}>VaR is a useful measure for liquid positions operating under normal market circumstances over a short period of time. </Sentence>
                &nbsp;<Sentence sid={31}> It is less useful and potentially dangerous when attempting to measure risk in non-normal circumstances, in illiquid positions, and over a long period of time.</Sentence>
            </p>
            <p>
                <Sentence sid={32}>To further illustrate the concept of VaR, assume you have gathered 1,000 monthly returns for a security and produced the histogram shown in Figure 1.1.</Sentence>
                &nbsp;<Sentence sid={33}> You decide that you want to compute the monthly VaR for this security at a confidence level of 95%.</Sentence>
                &nbsp;<Sentence sid={34}>At a 95% confidence level, the lower tail displays the lowest 5% of the underlying distribution’s returns.</Sentence>
                &nbsp;<Sentence sid={35}>. For this distribution, the value associated with a 9% confidence level is a return of −15.5%. If you have $1,000,000 invested in this security, the one-month VaR is $155,000 (−15.5% × $1,000,000).</Sentence>
            </p>
            <p>
                <Sentence sid={36}>Economic capital refers to holding sufficient liquid reserves to cover a potential loss.</Sentence>
                &nbsp;<Sentence sid={37}>For example, if one-day VaR is $2.5 million and the entity holds $2.5 million in liquid reserves, then it is unlikely to go bankrupt that day.</Sentence>
            </p>
        </div>
    );
}

export default FRMR1;
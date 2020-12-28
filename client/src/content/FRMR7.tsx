import Sentence from "../widget/Sentence";
import Title from "../widget/Title";

function FRMR7() {
    return (
        <div style={{fontSize: '20px'}}>
            <Title>READING 7: DECIPHERING THE LIQUIDITY AND CREDIT CRUNCH 2007-2008</Title>
            <p style={{fontSize: '24px', fontWeight: 600}}>MODULE 7.1: EVENTS THAT LED TO THE FINANCIAL CRISIS</p>
            <p><Sentence sid={1}>The housing bubble, which later burst and caused a liquidity squeeze, can be seen as the product of the following two broad factors:</Sentence></p>
            <p>
                <Sentence sid={2}>1. <i>Cheap credit</i>. Interest rates were low in the lead-up to the housing bubble due to a combination of factors.</Sentence>
                &nbsp;<Sentence sid={3}>First, an increase in demand for U.S. securities by foreign governments experiencing trade surpluses put downward pressure on interest rates.</Sentence>
                &nbsp;<Sentence sid={4}>Also, the Federal Reserve adopted a lax interest rate policy that promoted low interest rates to fend off deflation after the bursting of the internet bubble.</Sentence>
            </p>
            <p>
                <Sentence sid={5}>2. <i>Decline in lending standards</i>. In the past, banks held onto loans that they made until the loan was repaid.</Sentence>
                &nbsp;<Sentence sid={6}>In the years leading up to the housing bubble, this traditional banking model was replaced by a new originate-to-distribute model of banking, in which loans are collected together, sliced into tranches, and then sold as securities.</Sentence>
                &nbsp;<Sentence sid={7}>Since loan-originating institutions could transfer the default risk of borrowers to investors, the originating institutions had little incentive to be rigorous or diligent in their creditworthiness assessments. </Sentence>
                &nbsp;<Sentence sid={8}>(There are stories of banks awarding mortgage loans upon presentation of only a driver’s license.)</Sentence>
                &nbsp;<Sentence sid={9}>As a result, lending standards fell substantially</Sentence>
            </p>
            <p>
                <Sentence sid={10}>This decline in lending standards and abundance of cheap credit led banks to offer credit at low interest rates and lenient terms.</Sentence>
                &nbsp;<Sentence sid={11}>This environment of cheap money and plentiful borrowing opportunities led to a flood of real estate purchases, which generated a housing boom.</Sentence>
            </p>
            <p><Sentence sid={12}>The 2007–2009 U.S. mortgage crisis produced unprecedented financial turmoil—indeed, the worst since the Great Depression.</Sentence></p>
            <p><Sentence sid={13}>The related liquidity squeeze was caused by two major banking industry trends:</Sentence></p>
            <p><Sentence sid={14}>1. <i>Risk transference</i> through asset securitization: through the originate-to-distribute model</Sentence></p>
            <p><Sentence sid={15}>2. <i>Asset-liability maturity mismatch</i>: the purchase of long-term assets through the rollover of short-term debt instruments.</Sentence></p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Securitization</p>
            <p><Sentence sid={16}>In the past, banks that originated loans held those loans until they were paid off; hence, these banks had an incentive to exercise due diligence in evaluating the creditworthiness of the borrower.</Sentence></p>
            <p>
                <Sentence sid={17}>More recently, instead of retaining loans and carrying the risk of default of borrowers, banks began to transfer this risk to investors through securitization.</Sentence>
                &nbsp;<Sentence sid={18}>Banks developed structured products [e.g., collateralized debt obligations (CDOs)] based on an underlying pool of mortgages, bonds, and other loans.</Sentence>
                &nbsp;<Sentence sid={19}>The portfolio of underlying assets is sliced into various tranches (mainly senior, mezzanine, and equity), which offer a mix of risk and return tradeoffs. </Sentence>
                &nbsp;<Sentence sid={20}>For example, the senior tranche is the least risky due to the priority claim on cash flows; therefore, it offers the lowest return.</Sentence>
                &nbsp;<Sentence sid={21}>Securitization enables the originating institution to detach itself from the default risk of the underlying pool of assets and transfer it to investors, allowing these investors to select a tranche based on their specific risk and return preferences.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Asset/Liability Maturity Management</p>
            <p>
                <Sentence sid={22}>Sponsoring banks created structured investment vehicles (SIVs) that focused on investing in structured products.</Sentence>
                &nbsp;<Sentence sid={23}>Enabled by the environment of low interest rates and high ratings, these SIVs raised money by issuing short-term commercial paper to fund purchases of longterm assets, such as mortgage-backed securities (MBSs) and other securitized products.</Sentence>
                &nbsp;<Sentence sid={24}>However, due to the maturity mismatch between short-term commercial paper and long-term MBSs, the SIVs were exposed to funding liquidity risk.</Sentence>
                &nbsp;<Sentence sid={25}>Funding liquidity risk is the risk that buyers of commercial paper [mostly money market funds (MMFs)] might stop buying commercial paper, preventing these SIVs from rolling over the short-term debt.</Sentence>
                &nbsp;<Sentence sid={26}>This is exactly what happened during the financial crisis as asset prices began to fall and liquidity quickly evaporated.</Sentence>
            </p>
            <p>
                <Sentence sid={27}>Sponsoring banks had granted a credit line, called a liquidity backstop, to SIVs to ensure continuity of funding liquidity.</Sentence>
                &nbsp;<Sentence sid={28}>By extending credit, sponsoring banks were subject to liquidity risk, while long-term assets and their short-term financing remained an off-balancesheet item.</Sentence>
                &nbsp;<Sentence sid={29}>Banks took gigantic losses, including bankruptcies, when they were called upon to inject liquidity into the troubled SIVs.</Sentence>
            </p>
            <p>
                <Sentence sid={30}>The SIVs also used short-term repurchase agreements, or repos, for financing long-term assets, necessitating the frequent rollover of the short-term debt in the repo market.</Sentence>
                &nbsp;<Sentence sid={31}>This financing mechanism of investing in long-term assets through repurchase agreements left SIVs and their sponsoring banks vulnerable to any breakdown.</Sentence>
                &nbsp;<Sentence sid={32}>Later events demonstrated that, as with commercial paper, financing assets through the repo market was risky.</Sentence>
            </p>
            <p>
                <Sentence sid={33}>In summary, due to the short-term financing through commercial paper and the repo market and the liquidity commitments given to SIVs, banks left themselves vulnerable.</Sentence>
                &nbsp;<Sentence sid={34}>These institutions were eventually forced to sell assets into distressed markets at low prices.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Collateralized Debt Obligations</p>
            <p><Sentence sid={35}>A collateralized debt obligation (CDO) is a “structured” product that banks can use to unburden themselves of risk.</Sentence></p>
            <p><Sentence sid={36}>The creation of a CDO might be thought of as a three-step process:</Sentence></p>
            <p><Sentence sid={37}>1. Form a diversified portfolio. The bank collects a number of debt assets, such as mortgages, corporate bonds, various kinds of loans, as well as other types of debt instruments such as credit card receivables.</Sentence></p>
            <p>
                <Sentence sid={38}>2. Slice the portfolio into tranches.</Sentence>
                &nbsp;<Sentence sid={39}>The cash flows from the portfolio of collected securities are sliced into a number of investable tranches (a French word meaning “slices”), each with different characteristics.</Sentence>
                &nbsp;<Sentence sid={40}>The most junior tranche offers a high interest rate but receives cash flows only after all other tranches have been paid.</Sentence>
                &nbsp;<Sentence sid={41}>(For this reason, this most junior tranche is sometimes referred to as the “equity tranche” or even “toxic waste.”)</Sentence>
                &nbsp;<Sentence sid={42}>Above the equity tranche are the mezzanine tranches, which receive payment before the junior tranches.</Sentence>
                &nbsp;<Sentence sid={43}> The highest-rated tranche, called the “super senior” tranche (often rated AAA), is the safest tranche and the first tranche to be paid out; however, it pays investors a relatively low interest rate.</Sentence>
            </p>
            <p>
                <Sentence sid={44}>3. Sell tranches to investors.</Sentence>
                &nbsp;<Sentence sid={45}>Different groups of investors have varying appetites for risk.</Sentence>
                &nbsp;<Sentence sid={46}>The most senior tranches are sold to institutions that desire or require instruments with high credit ratings, such as pension funds.</Sentence>
                &nbsp;<Sentence sid={47}>The lowest rated (equity) tranches are (in theory, at least) retained by the CDO issuer to give that bank incentive to monitor the loan.</Sentence>
                &nbsp;<Sentence sid={48}>In practice, CDO issuers do not always hold onto this “toxic waste.”</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Credit Default Swaps</p>
            <p><Sentence sid={49}>Credit default swaps (CDSs) are insurance contracts that pay off when some reference instrument (such as a bond or a CDO tranche) defaults.</Sentence></p>
            <p><Sentence sid={50}>Like other insurance contracts, the buyer of a CDS pays a fixed periodic fee for protection and in return receives a payment in the event of a default.</Sentence></p>
            <p>
                <Sentence sid={51}>The holder of a bond or a CDO tranche might use a CDS to provide protection against such a default.</Sentence>
                &nbsp;<Sentence sid={52}>An investor who holds both a credit instrument plus CDS protection on the same instrument has a very low-risk position—provided that the CDS counterparty does not default.</Sentence>
            </p>
            <p><Sentence sid={53}>In addition to individual credit default swaps, there are also tradable CDS indices, including the CDX Index in the United States and iTraxx in Europe.</Sentence></p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Growth of Securitization and Structured Products</p>
            <p><Sentence sid={54}>To develop a better appreciation of securitization and the originate-to-distribute model, we need to understand the underlying reasons for the rapid growth of securitized products.</Sentence></p>
            <p><Sentence sid={55}>1. Originating institutions were in a position to offer lower interest rates on mortgages because (through securitization) they could spread the risk among several investors who were willing to bear the risk.</Sentence></p>
            <p>
                <Sentence sid={56}>2. Securitization offered benefits to certain institutional investors that faced regulatory prohibition against investing in, for example, less than AAA-rated securities.</Sentence>
                &nbsp;<Sentence sid={57}>Securitized products can help overcome these regulatory hurdles.</Sentence>
                &nbsp;<Sentence sid={58}> For example, such an institution can invest in the AAA-rated senior tranche of a structured product, even if the underlying pool is made of BBB-rated securities.</Sentence>
            </p>
            <p>
                <Sentence sid={59}>3. Securitization provides regulatory and rating arbitrage opportunities to the originating institutions.</Sentence>
                &nbsp;<Sentence sid={60}>The higher ratings of securitized products can allow a bank to meet lower regulatory capital charge requirements, without actually decreasing overall risk.</Sentence>
                &nbsp;<Sentence sid={61}>Loanoriginating institutions created an off-balance sheet entity (i.e., SIV) and moved pools of loans to the SIVs, lowering the number (and the dollar amount) of loans on the balance sheet.</Sentence>
                &nbsp;<Sentence sid={62}>This reduced the capital charge as mandated by Basel I (i.e., at least 8% of the loans on the balance sheet).</Sentence>
                &nbsp;<Sentence sid={63}>The sponsoring institution granted a non-contractual credit line (also known as a “reputational” credit line) to the SIVs, ensuring a AAA rating to the securitized product.</Sentence>
                &nbsp;<Sentence sid={64}>Under Basel I, there was no capital charge whatsoever on non-contractual credit lines extended to SIVs by sponsoring banks.</Sentence>
            </p>
            <p>
                <Sentence sid={65}>Basel II attempted to correct this loophole by instituting a capital charge based on asset ratings.</Sentence>
                &nbsp;<Sentence sid={66}>Still, by pooling loans into SIVs, banks were able to lower capital because (due to perceived diversification effects) rating agencies often gave a high rating to a securitized portfolio of assets.</Sentence>
                &nbsp;<Sentence sid={67}>For example, combining two assets separately rated BBB might produce a theoretically low-risk securitized asset with a AAA rating if the return correlation of the BBB-rated assets was sufficiently negative.</Sentence>
                &nbsp;<Sentence sid={68}>The bank may be able to hold this structured investment, as opposed to holding the two assets separately, at almost zero capital charge.</Sentence>
            </p>
            <p>
                <Sentence sid={69}>Structured products were given high ratings based on faulty over-optimism.</Sentence>
                &nbsp;<Sentence sid={70}>Rating agencies made future projections in line with past housing data, which showed generally low delinquency and default rates.</Sentence>
                &nbsp;<Sentence sid={71}>A broad decline in the real estate market had not been anticipated.</Sentence>
                &nbsp;<Sentence sid={72}>It was expected that a downturn in housing prices in one region would be offset by appreciation in others because price decreases tended to be region-specific rather than nationwide.</Sentence>
                &nbsp;<Sentence sid={73}>In reality, real estate prices fell across the entire country, and the quantitative models based on assumptions, scenarios, and projections using past information turned out to be substantially inaccurate.</Sentence>
                &nbsp;<Sentence sid={74}>Rating agencies received higher fees for rating structured products compared to rating bonds only.</Sentence>
                &nbsp;<Sentence sid={75}>This also explains, to some extent, why structured products received generously high ratings—sponsoring banks and rating agencies cooperated to ensure that senior tranches received a AAA rating.</Sentence>
                &nbsp;<Sentence sid={76}>In pursuit of yield, fund managers invested in these structured products with expectations of higher returns and a low probability of downside risk.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>MODULE 7.2: MECHANISMS THAT AMPLIFIED THE FINANCIAL CRISIS</p>
            <p><Sentence sid={77}>The subprime mortgage crisis, which emerged in February 2007, is considered to be the main trigger of the worldwide financial crisis.</Sentence></p>
            <p>
                <Sentence sid={78}>As delinquencies and foreclosures started to rise and housing prices began to fall, the cost of credit default swaps (a financial instrument insuring the default risk on debt securities, including MBSs) increased significantly.</Sentence>
                &nbsp;<Sentence sid={79}>UBS sustained huge losses related to subprime securities and decided to shut down its internal hedge fund in May 2007.</Sentence>
                &nbsp;<Sentence sid={80}>Bear Stearns saw two of its hedge funds face difficulty meeting margin calls in June 2007. </Sentence>
                &nbsp;<Sentence sid={81}>In July, the National Association of Home Builders announced a decline in new home sales, the largest homebuilding company in the United States experienced a loss in the same quarter, and Countrywide Financial reported a loss. </Sentence>
                &nbsp;<Sentence sid={82}>The months of June and July 2007 are important in the financial history of the United States, as the subprime mortgage crisis reached its peak.</Sentence>
                &nbsp;<Sentence sid={83}>Perhaps the most important development in these two months was the downgrading of subprime and other tranches of mortgage-related securitized assets by three major rating agencies.</Sentence>
            </p>
            <p><Sentence sid={84}>All these events were shocking for market participants, as these developments produced a significant, negative impact on the prices of mortgage-related securities.</Sentence></p>
            <p>
                <Sentence sid={85}>Commercial paper was a major vehicle for SIVs to roll over their short-term debt for the purpose of financing their investments in long-term, asset-backed securities.</Sentence>
                &nbsp;<Sentence sid={86}>In the environment of shocks, uncertainty, skepticism, and difficulties in valuation of structured investments in rapidly deteriorating market conditions, cracks started appearing in the commercial paper market in July 2007.</Sentence>
                &nbsp;<Sentence sid={87}>In the same month, the SIV sponsored by the small German bank IKB failed to obtain funding in the commercial paper market, and the bank was unable to inject the promised liquidity. </Sentence>
                &nbsp;<Sentence sid={88}>The bank had to be bailed out through a rescue package with the participation of private and public banks.</Sentence>
                &nbsp;<Sentence sid={89}>American Home Mortgage Investment Corp. declared bankruptcy in August 2007 due to its inability to roll over shortterm debt.</Sentence>
                &nbsp;<Sentence sid={90}>Concerned with rising demand for redemptions by investors panicked by the crumbling market conditions, French bank BNP halted redemptions for three of its funds.</Sentence>
            </p>
            <p>
                <Sentence sid={91}>Participants in the short-term credit market became reluctant to lend to each other as the short-term funding problems quickly spread beyond the commercial paper market.</Sentence>
                &nbsp;<Sentence sid={92}>(The repo market, the federal funds market, and the interbank market were shaken, as well.)</Sentence>
                &nbsp;<Sentence sid={93}>Banks and other borrowers found it difficult to roll over the debt at reasonable rates and terms.</Sentence>
                &nbsp;<Sentence sid={94}>For example, the spread between LIBOR and U.S. Treasury bills (i.e., the TED spread) jumped to nearly 4% in September and October 2008. </Sentence>
                &nbsp;<Sentence sid={95}>This spread was a reflection of the severity of the liquidity squeeze in the marketplace.</Sentence>
            </p>
            <p>
                <Sentence sid={96}>Faced with huge losses and margin calls, banks and hedge funds burdened with large investments in securitized products were forced to liquidate assets at depressed prices, further adding to their losses. </Sentence>
                &nbsp;<Sentence sid={97}>In this background of increased default and liquidity risk (at least as perceived by market participants), the interbank market froze on August 9, 2007.</Sentence>
                &nbsp;<Sentence sid={98}>The liquidity squeeze was not confined to the financial sector alone—as the flow of credit among banks virtually stopped, the availability of credit in the real sector became correspondingly scarce.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Funding Liquidity and Market Liquidity</p>
            <p><Sentence sid={99}>Funding liquidity refers to an institution’s ability to immediately settle obligations when they are due. If a bank is not able to settle its obligations on time, the bank is illiquid</Sentence></p>
            <p>
                <Sentence sid={100}>Leveraged investors pledge the asset that they purchase as collateral; however, they cannot borrow 100% of the price of the asset.</Sentence>
                &nbsp;<Sentence sid={101}>Rather, the investor must provide equity capital to finance the margin in an amount equal to the difference between the purchase price and the collateral value of the asset.</Sentence>
                &nbsp;<Sentence sid={102}>Required margin will fluctuate daily with market fluctuations in the asset price.</Sentence>
            </p>
            <p>
                <Sentence sid={103}>Traders usually do not retain excess cash, rather they invest whatever funds they have.</Sentence>
                &nbsp;<Sentence sid={104}>When adverse market conditions result in a decrease in the collateral value of an asset, traders may face a stressful situation where they must increase their equity capital contribution to meet the increased margin requirements.</Sentence>
            </p>
            <p>
                <Sentence sid={105}>Funding liquidity risk refers to the possibility that an institution will not be able to settle its obligations when they are due</Sentence>
                &nbsp;<Sentence sid={106}>In liquid markets, investors can borrow money with ease.</Sentence>
                &nbsp;<Sentence sid={107}>These same investors may experience funding liquidity risk when market conditions deteriorate.</Sentence>
                &nbsp;<Sentence sid={108}>Traders may be forced to sell an asset at a substantially lower price in deteriorating market conditions to meet margin requirements.</Sentence>
                &nbsp;<Sentence sid={109}>Three forms of funding liquidity risk are as follows:</Sentence>
            </p>
            <p><Sentence sid={110}>- Margin/haircut funding risk: A risk that arises when a decline in the collateral value of an asset results in an increase in margin requirement, requiring additional equity capital.</Sentence></p>
            <p>
                <Sentence sid={111}>- Rollover risk: The risk that investors may not be able to roll over short-term debt to finance the purchase of an asset.</Sentence>
                &nbsp;<Sentence sid={112}>The breakdown of short-term commercial paper and repo markets for financing long-term investments was a trigger that transformed the mortgage crisis into a global financial crisis.</Sentence>
                &nbsp;<Sentence sid={113}>Short-term debt markets dried up, and SIVs and hedge funds, heavily invested in MBSs and other asset-backed securities, were unable to continue to use these securities as collateral for rolling over debt.</Sentence>
            </p>
            <p>
                <Sentence sid={114}>- Redemption risk: The risk that depositors will withdraw funds from banks, or that investors will redeem their shares (e.g., from mutual funds).</Sentence>
                &nbsp;<Sentence sid={115}>A decline in a source of funding has the same effect as an increase in margin requirements.</Sentence>
            </p>
            <p>
                <Sentence sid={116}>Market liquidity refers to the ease or difficulty of selling an asset to raise money.</Sentence>
                &nbsp;<Sentence sid={117}>Market liquidity is high if it is relatively easy to find a counterparty to buy an asset at the going price (i.e., without lowering the price to attract a buyer).</Sentence>
                &nbsp;<Sentence sid={118}>Market liquidity can be expressed in the following three forms:</Sentence>
            </p>
            <p>
                <Sentence sid={119}>Bid-ask spread can be thought of as the loss that would be sustained by a trader who sells an asset and then immediately buys it back.</Sentence>
                &nbsp;<Sentence sid={120}>The higher the spread, the lower the market liquidity, and vice versa.</Sentence>
            </p>
            <p>
                <Sentence sid={121}>Market depth refers to the number of units of an asset a trader can buy or sell at the current market quote (bid and ask prices). </Sentence>
                &nbsp;<Sentence sid={122}>The greater the market depth, the higher the market liquidity.</Sentence>
            </p>
            <p><Sentence sid={123}>Market resiliency describes the length of time it will take an asset to regain its price after the price has fallen temporarily.</Sentence></p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Funding Liquidity vs. Market Liquidity</p>
            <p>
                <Sentence sid={124}>Consider two ways of raising funds: (1) selling an asset, or (2) using an asset as collateral to borrow money against it.</Sentence>
                &nbsp;<Sentence sid={122}>The greater the market depth, the higher the market liquidity.</Sentence>
                &nbsp;<Sentence sid={123}>Raising money by selling an asset is associated with market liquidity.</Sentence>
                &nbsp;<Sentence sid={124}>Market liquidity is low if it is difficult to sell the asset.</Sentence>
                &nbsp;<Sentence sid={125}>Funding liquidity is associated with the use of an asset as collateral to borrow money against it. </Sentence>
                &nbsp;<Sentence sid={126}>As discussed earlier, funding liquidity risk is high if margins or redemptions increase, or if rolling over short-term debt becomes difficult.</Sentence>
            </p>
            <p>
                <Sentence sid={127}>Interaction of funding liquidity and market liquidity can trigger a significant and sudden decline in, or even disappearance of, liquidity, transforming a relatively small shock into a financial disaster. </Sentence>
                &nbsp;<Sentence sid={128}>The recent global financial crisis is an example of the interaction of funding and market liquidity risks.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Loss Spiral and Margin Spiral</p>
            <p>
                <Sentence sid={129}>To maintain a particular margin (or leverage ratio) in the face of a market decline, an investor may need to sell a portion of assets to ensure that the overall value of the position aligns with the current smaller amount of equity capital and the lower borrowing capacity.</Sentence>
                &nbsp;<Sentence sid={130}>These kinds of forced sales put additional downward pressure on asset prices, further eroding equity capital and necessitating more forced sales. </Sentence>
                &nbsp;<Sentence sid={131}>This situation becomes a loss spiral when the decline leads to a cycle of further price decreases and further forced sales.</Sentence>
            </p>
            <p>
                <Sentence sid={132}>A loss spiral is a function of market liquidity.</Sentence>
                &nbsp;<Sentence sid={133}>An asset with low market liquidity will sustain a greater loss in a forced sale compared to an asset with higher market liquidity.</Sentence>
                &nbsp;<Sentence sid={134}>This cycle of forced sales does not necessarily self-correct because potential buyers may be reluctant to enter into the market or may be facing a similar situation.</Sentence>
                &nbsp;<Sentence sid={135}>In other cases, traders may engage in what is called predatory trading—creating a situation in which the seller, already distressed from reducing his position, is forced to sell at an unnaturally low price.</Sentence>
            </p>
            <p>
                <Sentence sid={136}>A margin spiral refers to the forced sale of an asset as a result of an increase in required margin, or, equivalently speaking, a decline in the permitted leverage ratio.</Sentence>
                &nbsp;<Sentence sid={137}>Investors may be required to increase their contributed equity capital in conditions of deteriorating market conditions and tightening of lending.</Sentence>
                &nbsp;<Sentence sid={138}>To satisfy the increased margin requirements, an investor may have to sell even more assets than under a loss spiral event in which margins and leverage ratios are held constant.</Sentence>
            </p>
            <p>
                <Sentence sid={139}>To illustrate a loss spiral and a margin spiral, assume that an investor has an original investment position of $100, with $10 of equity capital and $90 of borrowing (i.e., leverage ratio is 10).</Sentence>
                &nbsp;<Sentence sid={140}>Suppose that the investment assets experience a 5% decline in asset value, from $100 to $95.</Sentence>
                &nbsp;<Sentence sid={141}>In other words, the investor lost $5 in capital and only has $5 remaining.</Sentence>
                &nbsp;<Sentence sid={142}>To maintain the leverage ratio of 10, the investor would be forced to sell assets worth $45 to bring the value of the position down to $50.</Sentence>
                &nbsp;<Sentence sid={143}>Now assume the same situation except that the investor experiences a decline in the leverage ratio from 10 to 5.</Sentence>
                &nbsp;<Sentence sid={144}>The $5 of equity would support a position value of only $25, forcing the investor to sell assets worth $95 − $25 = $70.</Sentence>
            </p>
            <p><Sentence sid={145}>Thus, in an environment of declining prices and general tightening of lending, the necessity to deleverage can produce an ongoing cycle of forced sales, erosion of equity capital, and continued downward pressure on prices.</Sentence></p>
            <p>
                <Sentence sid={146}>In summary, with a loss spiral, a trader initiates a sale to maintain the leverage ratio; whereas with a margin spiral, a trader sells an asset to fulfill the requirements of a decline in the leverage ratio (as a result of rising margins).</Sentence>
                &nbsp;<Sentence sid={147}>Consequently, all else equal, a margin spiral situation results in a lower overall position value and lower borrowing amounts versus a loss spiral situation.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Network Risk</p>
            <p>
                <Sentence sid={148}>Network risk arises as a result of an increase in counterparty credit risk, particularly in an environment of market stress.</Sentence>
                &nbsp;<Sentence sid={149}>This increased risk causes a web of contracting parties to seek additional protection and liquidity, for example, by purchasing credit default swaps or by demanding increased collateral.</Sentence>
                &nbsp;<Sentence sid={150}>In this way, network risk can produce a potential systemic effect. Network risk is exacerbated by the absence of a clearinghouse, which is a central regulatory authority that can manage multilateral netting among multiple contracting parties that possess less than full information on one another.</Sentence>
            </p>
            <p>
                <Sentence sid={151}>Today’s financial system consists of a network of obligations distributed among numerous institutions.</Sentence>
                &nbsp;<Sentence sid={152}> Not all financial products are traded in formal markets; for example, structured and complex financial products such as CDOs and swaps are traded over the counter.</Sentence>
            </p>
            <p>
                <Sentence sid={151}>Today’s financial system consists of a network of obligations distributed among numerous institutions.</Sentence>
                &nbsp;<Sentence sid={152}>Not all financial products are traded in formal markets; for example, structured and complex financial products such as CDOs and swaps are traded over the counter.</Sentence>
            </p>
            <p>
                <Sentence sid={153}>A clearinghouse serves as a hub of information about the network of contracting parties and their positions and obligations.</Sentence>
                &nbsp;<Sentence sid={154}>In this capacity, a clearinghouse can facilitate multilateral netting arrangements, which eliminates counterparty credit risk, and, thus, the need for additional funding protection.</Sentence>
            </p>
            <p>
                <Sentence sid={155}>An example of network risk comes from the days immediately after the bankruptcy of Lehman Brothers.</Sentence>
                &nbsp;<Sentence sid={156}>Major investment banking firms had entered into multiple agreements with one another, involving various financial products.</Sentence>
                &nbsp;<Sentence sid={157}>In the absence of a centralized clearinghouse, full information, and multilateral risk netting arrangements, each investment bank was unable to assess the creditworthiness of the other banks.</Sentence>
                &nbsp;<Sentence sid={158}>As a result, they all started purchasing CDSs on the obligations of one another, causing a nearly 100% increase in the price of these instruments.</Sentence>
                &nbsp;<Sentence sid={159}>The price of the CDS for AIG, for example, increased more than 100% in a mere two days.</Sentence>
                &nbsp;<Sentence sid={160}>These activities contributed to the overall deteriorating market conditions and skepticism, intensifying the spread of systemic risk.</Sentence>
            </p>
        </div>
    );
}

export default FRMR7;
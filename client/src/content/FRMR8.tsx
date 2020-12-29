import Sentence from "../widget/Sentence";
import Subject from "../widget/Subject";
import Title from "../widget/Title";
import Verb from "../widget/Verb";

function FRMR8() {
    return (
        <div style={{fontSize: '20px'}}>
            <Title>READING 7: : GETTING UP TO SPEED ON THE FINANCIAL CRISIS: A ONEWEEKEND-READER’S GUIDE</Title>
            <p style={{fontSize: '24px', fontWeight: 600}}>MODULE 8.1: FINANCIAL CRISIS OVERVIEW AND TIME LINE</p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Key Terms Related to the Financial Crisis</p>
            <p>
                <Sentence sid={1}>Asset-backed commercial paper (ABCP). Commercial paper is created when nonfinancial firms with high credit ratings raise capital by issuing short-term debt.</Sentence>
                &nbsp;<Sentence sid={2}>ABCP is the bundling of longer-term debt from mortgages, credit card receivables, and other loans.</Sentence>
                &nbsp;<Sentence sid={3}>When ABCP reaches its maturity date, it is rolled over and bundled into new ABCP.</Sentence>
            </p>
            <p>
                <Sentence sid={4}>Bank run or “run”. A bank run occurs when depositors withdraw cash from a bank thinking the bank is about to fail.</Sentence>
                &nbsp;<Sentence sid={5}>A run can also be used as a generic term describing the withdrawal of cash by investors from any type of financial intermediary [e.g., a pension plan (depositor) withdrawing cash from a money market mutual fund (MMF)].</Sentence>
                &nbsp;<Sentence sid={6}>This example would be a run on the MMF.</Sentence>
            </p>
            <p>
                <Sentence sid={7}>Shadow bank. A shadow bank is a financial institution other than a regulated depository institution.</Sentence>
                &nbsp;<Sentence sid={8}>Examples of regulated depository institutions are commercial banks, thrifts, and credit unions.</Sentence>
                &nbsp;<Sentence sid={9}>Examples of shadow banks are private equity funds, investment banks, hedge funds, mortgage lenders, and insurance companies.</Sentence>
            </p>
            <p>
                <Sentence sid={10}>Repurchase agreements (repos). Repos involve an institutional investor making a shortterm deposit of cash with a shadow bank that in turn pays the investor interest on the cash (called the repo rate).</Sentence>
                &nbsp;<Sentence sid={11}>The shadow bank also gives the investor some type of collateral that the investor could sell in the event that the shadow bank does not return the investor’s cash.</Sentence>
            </p>
            <p>
                <Sentence sid={12}>Haircut. A haircut is the amount of collateral in a repo agreement in relation to a deposit.</Sentence>
                &nbsp;<Sentence sid={13}>For example, if an institutional investor deposits $90 million with a shadow bank and the investor receives collateral worth $100 million, the haircut is 10%.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Financial Market Participants and Market Conditions</p>
            <p>
                <Sentence sid={14}>The main financial market participants in the financial crisis starting in 2007 were institutional investors, such as money market mutual funds, nonfinancial firms, municipalities and state governments, and other large entities investing large amounts of cash with shadow banks.</Sentence>
                &nbsp;<Sentence sid={15}>The amount of cash held by institutional investors was larger than could be insured through a regular depository bank.</Sentence>
                &nbsp;<Sentence sid={16}>In addition, at that time, U.S. Treasuries were in short supply due to large holdings from foreign investors.</Sentence>
                &nbsp;<Sentence sid={17}>Thus, the shadow banks acted as financial intermediaries, providing institutional investors with a way to turn their cash into an investment by issuing repos and ABCP as a substitute for U.S. Treasuries.</Sentence>
            </p>
            <p>
                <Sentence sid={18}>The major contributing factor in the financial crisis was the bundling of subprime mortgages into mortgage-backed securities (MBSs) as well as asset-backed securities (ABSs) in the form of ABCP.</Sentence>
                &nbsp;<Sentence sid={19}>The main trigger of the financial crisis, as described by former U.S. Federal Reserve Chairman Ben Bernanke, was the prospect of losses on subprime mortgages.</Sentence>
                &nbsp;<Sentence sid={20}>Before 2007, housing prices in the United States and other developed nations showed an increase in prices.</Sentence>
                &nbsp;<Sentence sid={21}><Subject sid={21}>Securitization</Subject> <Verb sid={21}>enables</Verb> the originating institution to detach itself from the default risk of the underlying pool of assets and transfer it to investors, <Verb sid={21}>allowing</Verb> these investors to select a tranche based on their specific risk and return preferences.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Asset/Liability Maturity Management</p>
            <p>
                <Sentence sid={22}><Subject sid={22}>Sponsoring banks</Subject> <Verb sid={22}>created</Verb> structured investment vehicles (SIVs) that focused on investing in structured products.</Sentence>
                &nbsp;<Sentence sid={23}>Enabled by the environment of low interest rates and high ratings, <Subject sid={23}>these SIVs</Subject> <Verb sid={23}>raised</Verb> money by issuing short-term commercial paper to fund purchases of longterm assets, such as mortgage-backed securities (MBSs) and other securitized products.</Sentence>
                &nbsp;<Sentence sid={24}>However, due to the maturity mismatch between short-term commercial paper and long-term MBSs, <Subject sid={24}>the SIVs</Subject> <Verb sid={24}>were exposed</Verb> to funding liquidity risk.</Sentence>
                &nbsp;<Sentence sid={25}><Subject sid={25}>Funding liquidity risk</Subject> <Verb sid={25}>is</Verb> the risk that buyers of commercial paper [mostly money market funds (MMFs)] might stop buying commercial paper, preventing these SIVs from rolling over the short-term debt.</Sentence>
                &nbsp;<Sentence sid={26}><Subject sid={26}>This</Subject> <Verb sid={26}>is</Verb> exactly what happened during the financial crisis as asset prices began to fall and liquidity quickly evaporated.</Sentence>
            </p>
            <p>
                <Sentence sid={27}><Subject sid={27}>Sponsoring banks</Subject> <Verb sid={27}>had granted</Verb> a credit line, called a liquidity backstop, to SIVs to ensure continuity of funding liquidity.</Sentence>
                &nbsp;<Sentence sid={28}>By extending credit, <Subject sid={28}>sponsoring banks</Subject> <Verb sid={28}>were subject to</Verb> liquidity risk, while long-term assets and their short-term financing remained an off-balancesheet item.</Sentence>
                &nbsp;<Sentence sid={29}><Subject sid={29}>Banks</Subject> <Verb sid={29}>took</Verb> gigantic losses, including bankruptcies, when they were called upon to inject liquidity into the troubled SIVs.</Sentence>
            </p>
            <p>
                <Sentence sid={30}><Subject sid={30}>The SIVs</Subject> also <Verb sid={30}>used</Verb> short-term repurchase agreements, or repos, for financing long-term assets, necessitating the frequent rollover of the short-term debt in the repo market.</Sentence>
                &nbsp;<Sentence sid={31}><Subject sid={31}>This financing mechanism</Subject> of investing in long-term assets through repurchase agreements <Verb sid={31}>left</Verb> SIVs and their sponsoring banks vulnerable to any breakdown.</Sentence>
                &nbsp;<Sentence sid={32}><Subject sid={32}>Later events</Subject> <Verb sid={32}>demonstrated</Verb> that, as with commercial paper, financing assets through the repo market was risky.</Sentence>
            </p>
            <p>
                <Sentence sid={33}>In summary, due to the short-term financing through commercial paper and the repo market and the liquidity commitments given to SIVs, <Subject sid={33}>banks</Subject> <Verb sid={33}>left</Verb> themselves vulnerable.</Sentence>
                &nbsp;<Sentence sid={34}><Subject sid={34}>These institutions</Subject> <Verb sid={34}>were eventually forced</Verb> to sell assets into distressed markets at low prices.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Collateralized Debt Obligations</p>
            <p><Sentence sid={35}><Subject sid={35}>A collateralized debt obligation (CDO)</Subject> <Verb sid={35}>is</Verb> a “structured” product that banks can use to unburden themselves of risk.</Sentence></p>
            <p><Sentence sid={36}><Subject sid={36}>The creation</Subject> of a CDO <Verb sid={36}>might be thought of</Verb> as a three-step process:</Sentence></p>
            <p><Sentence sid={37}>1. Form a diversified portfolio. <Subject sid={37}>The bank</Subject> <Verb sid={37}>collects</Verb> a number of debt assets, such as mortgages, corporate bonds, various kinds of loans, as well as other types of debt instruments such as credit card receivables.</Sentence></p>
            <p>
                <Sentence sid={38}>2. Slice the portfolio into tranches.</Sentence>
                &nbsp;<Sentence sid={39}><Subject sid={39}>The cash flows</Subject> from the portfolio of collected securities <Verb sid={39}>are sliced</Verb> into a number of investable tranches (a French word meaning “slices”), each with different characteristics.</Sentence>
                &nbsp;<Sentence sid={40}><Subject sid={40}>The most junior tranche</Subject> <Verb sid={40}>offers</Verb> a high interest rate but <Verb sid={40}>receives</Verb> cash flows only after all other tranches have been paid.</Sentence>
                &nbsp;<Sentence sid={41}>(For this reason, <Subject sid={41}>this most junior tranche</Subject> <Verb sid={41}>is sometimes referred to</Verb> as the “equity tranche” or even “toxic waste.”)</Sentence>
                &nbsp;<Sentence sid={42}>Above the equity tranche <Verb sid={42}>are</Verb> <Subject sid={42}>the mezzanine tranches</Subject>, which receive payment before the junior tranches.</Sentence>
                &nbsp;<Sentence sid={43}><Subject sid={43}>The highest-rated tranche</Subject>, called the “super senior” tranche (often rated AAA), <Verb sid={43}>is</Verb> the safest tranche and the first tranche to be paid out; however, <Subject sid={43}>it</Subject> <Verb sid={43}>pays</Verb> investors a relatively low interest rate.</Sentence>
            </p>
            <p>
                <Sentence sid={44}>3. Sell tranches to investors.</Sentence>
                &nbsp;<Sentence sid={45}><Subject sid={45}>Different groups of investors</Subject> <Verb sid={45}>have</Verb> varying appetites for risk.</Sentence>
                &nbsp;<Sentence sid={46}><Subject sid={46}>The most senior tranches</Subject> <Verb sid={46}>are sold</Verb> to institutions that desire or require instruments with high credit ratings, such as pension funds.</Sentence>
                &nbsp;<Sentence sid={47}><Subject sid={47}>The lowest rated (equity) tranches</Subject> <Verb sid={47}>are (in theory, at least) retained</Verb> by the CDO issuer to give that bank incentive to monitor the loan.</Sentence>
                &nbsp;<Sentence sid={48}>In practice, <Subject sid={48}>CDO issuers</Subject> <Verb sid={48}>do not always hold</Verb> onto this “toxic waste.”</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Credit Default Swaps</p>
            <p><Sentence sid={49}><Subject sid={49}>Credit default swaps (CDSs)</Subject> <Verb sid={49}>are</Verb> insurance contracts that pay off when some reference instrument (such as a bond or a CDO tranche) defaults.</Sentence></p>
            <p><Sentence sid={50}>Like other insurance contracts, <Subject sid={50}>the buyer</Subject> of a CDS <Verb sid={50}>pays</Verb> a fixed periodic fee for protection and in return receives a payment in the event of a default.</Sentence></p>
            <p>
                <Sentence sid={51}><Subject sid={51}>The holder of a bond or a CDO tranche</Subject> <Verb sid={51}>might use</Verb> a CDS to provide protection against such a default.</Sentence>
                &nbsp;<Sentence sid={52}><Subject sid={52}>An investor</Subject> who holds both a credit instrument plus CDS protection on the same instrument <Verb sid={52}>has</Verb> a very low-risk position—provided that the CDS counterparty does not default.</Sentence>
            </p>
            <p><Sentence sid={53}>In addition to individual credit default swaps, there are also tradable CDS indices, including the CDX Index in the United States and iTraxx in Europe.</Sentence></p>
            <p style={{fontSize: '24px', fontWeight: 600}}>Growth of Securitization and Structured Products</p>
            <p><Sentence sid={54}>To develop a better appreciation of securitization and the originate-to-distribute model, <Subject sid={54}>we</Subject> <Verb sid={54}>need to understand</Verb> the underlying reasons for the rapid growth of securitized products.</Sentence></p>
            <p><Sentence sid={55}>1. <Subject sid={55}>Originating institutions</Subject> <Verb sid={55}>were</Verb> in a position to offer lower interest rates on mortgages because (through securitization) <Subject sid={55}>they</Subject> <Verb sid={55}>could spread</Verb> the risk among several investors who were willing to bear the risk.</Sentence></p>
            <p>
                <Sentence sid={56}>2. <Subject sid={56}>Securitization</Subject> <Verb sid={56}>offered</Verb> benefits to certain institutional investors that faced regulatory prohibition against investing in, for example, less than AAA-rated securities.</Sentence>
                &nbsp;<Sentence sid={57}><Subject sid={57}>Securitized products</Subject> <Verb sid={57}>can help overcome</Verb> these regulatory hurdles.</Sentence>
                &nbsp;<Sentence sid={58}>For example, <Subject sid={58}>such an institution</Subject> <Verb sid={58}>can invest</Verb> in the AAA-rated senior tranche of a structured product, even if the underlying pool is made of BBB-rated securities.</Sentence>
            </p>
            <p>
                <Sentence sid={59}>3. <Subject sid={59}>Securitization</Subject> <Verb sid={59}>provides</Verb> regulatory and rating arbitrage opportunities to the originating institutions.</Sentence>
                &nbsp;<Sentence sid={60}><Subject sid={60}>The higher ratings</Subject> of securitized products <Verb sid={60}>can allow</Verb> a bank to meet lower regulatory capital charge requirements, without actually decreasing overall risk.</Sentence>
                &nbsp;<Sentence sid={61}><Subject sid={61}>Loanoriginating institutions</Subject> <Verb sid={61}>created</Verb> an off-balance sheet entity (i.e., SIV) and moved pools of loans to the SIVs, lowering the number (and the dollar amount) of loans on the balance sheet.</Sentence>
                &nbsp;<Sentence sid={62}><Subject sid={62}>This</Subject> <Verb sid={62}>reduced</Verb> the capital charge as mandated by Basel I (i.e., at least 8% of the loans on the balance sheet).</Sentence>
                &nbsp;<Sentence sid={63}><Subject sid={63}>The sponsoring institution</Subject> <Verb sid={63}>granted</Verb> a non-contractual credit line (also known as a “reputational” credit line) to the SIVs, <Verb sid={63}>ensuring</Verb> a AAA rating to the securitized product.</Sentence>
                &nbsp;<Sentence sid={64}>Under Basel I, there was no capital charge whatsoever on non-contractual credit lines extended to SIVs by sponsoring banks.</Sentence>
            </p>
            <p>
                <Sentence sid={65}><Subject sid={65}>Basel II</Subject> <Verb sid={65}>attempted</Verb> to correct this loophole by instituting a capital charge based on asset ratings.</Sentence>
                &nbsp;<Sentence sid={66}>Still, by pooling loans into SIVs, <Subject sid={66}>banks</Subject> <Verb sid={66}>were able to lower</Verb> capital because (due to perceived diversification effects) rating agencies often gave a high rating to a securitized portfolio of assets.</Sentence>
                &nbsp;<Sentence sid={67}>For example, <Subject sid={67}>combining two assets</Subject> separately rated BBB <Verb sid={67}>might produce</Verb> a theoretically low-risk securitized asset with a AAA rating if the return correlation of the BBB-rated assets was sufficiently negative.</Sentence>
                &nbsp;<Sentence sid={68}><Subject sid={68}>The bank</Subject> <Verb sid={68}>may be able to hold</Verb> this structured investment, as opposed to <Verb sid={68}>holding</Verb> the two assets separately, at almost zero capital charge.</Sentence>
            </p>
            <p>
                <Sentence sid={69}><Subject sid={69}>Structured products</Subject> <Verb sid={69}>were given</Verb> high ratings based on faulty over-optimism.</Sentence>
                &nbsp;<Sentence sid={70}><Subject sid={70}>Rating agencies</Subject> <Verb sid={70}>made</Verb> future projections in line with past housing data, which showed generally low delinquency and default rates.</Sentence>
                &nbsp;<Sentence sid={71}><Subject sid={71}>A broad decline</Subject> in the real estate market <Verb sid={71}>had not been anticipated</Verb>.</Sentence>
                &nbsp;<Sentence sid={72}>It was expected that <Subject sid={72}>a downturn</Subject> in housing prices in one region <Verb sid={72}>would be offset</Verb> by appreciation in others because <Subject sid={72}>price decreases</Subject> <Verb sid={72}>tended to be</Verb> region-specific rather than nationwide.</Sentence>
                &nbsp;<Sentence sid={73}>In reality, <Subject sid={73}>real estate prices</Subject> <Verb sid={73}>fell</Verb> across the entire country, and <Subject sid={73}>the quantitative models</Subject> based on assumptions, scenarios, and projections using past information <Verb sid={73}>turned out</Verb> to be substantially inaccurate.</Sentence>
                &nbsp;<Sentence sid={74}><Subject sid={74}>Rating agencies</Subject> <Verb sid={74}>received</Verb> higher fees for rating structured products compared to rating bonds only.</Sentence>
                &nbsp;<Sentence sid={75}><Subject sid={75}>This</Subject> also <Verb sid={75}>explains</Verb>, to some extent, why structured products received generously high ratings—sponsoring banks and rating agencies cooperated to ensure that senior tranches received a AAA rating.</Sentence>
                &nbsp;<Sentence sid={76}>In pursuit of yield, <Subject sid={76}>fund managers</Subject> <Verb sid={76}>invested</Verb> in these structured products with expectations of higher returns and a low probability of downside risk.</Sentence>
            </p>
            <p style={{fontSize: '24px', fontWeight: 600}}>MODULE 7.2: MECHANISMS THAT AMPLIFIED THE FINANCIAL CRISIS</p>
            <p><Sentence sid={77}><Subject sid={77}>The subprime mortgage crisis</Subject>, which emerged in February 2007, <Verb sid={77}>is considered</Verb> to be the main trigger of the worldwide financial crisis.</Sentence></p>
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

export default FRMR8;
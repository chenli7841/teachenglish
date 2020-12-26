import Sentence from "../widget/Sentence";
import Title from "../widget/Title";
import { ArticleProp } from "./ArticleProp";

function Article1(props: ArticleProp) {
    return (
        <div>
            <Title>TRAVO Management</Title>
            <p style={{textAlign: 'center', fontWeight: 600, textDecoration: 'underline'}}>MODEL AGREEMENT | NON-EXCLUSIVE</p>
            <p>
                <Sentence highlight={props.currentSentenceId === 1}>This Model Agreement (the "Agreement") is entered into ____ (date) between MANAGER LLC (Hereinafter referred to as "Manager") with its principal place of business at 26 Broadway, 8th Floor, New York, NY 10004 and ________________ (the "Model"), whose address is ________________________________.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 2}>Manager and Model are hereinafter collectively referred to as the "Parties."</Sentence>
            </p>
            <p style={{fontWeight: 600, textDecoration: 'underline'}}>Representation</p>
            <p>
                <Sentence highlight={props.currentSentenceId === 3}>Model hereby constitutes and appoints Manager the non-exclusive personal <i>manager</i> of <i>model</i> worldwide in and with respect to advising, counseling promoting and contracting in all areas of professional modeling including, but not limited to, print, runway, showroom, fitting, media, live shows, television, commercials and film work (hereinafter, collectively referred to as "the Model's services").</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 4}>The model is entitled and allowed to work with other agencies, freelance, or book modeling work through other sources and that does not effect the relationship with Manager or its clients.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 5}>The model is not solely bound with Manager.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 6}>Model is business for him/herself, has the ability and qualifications to supply and perform services of a model in a professional manner include satisfying Manager clients.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 7}>The term of this agreement shall be One (1) year from the date first written above.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 8}>This agreement shall renew automatically for (1) additional year unless this agreement is terminated as discussed in the termination section of this agreement.</Sentence>
            </p>
            <p style={{fontWeight: 600, textDecoration: 'underline'}}>Terms and Duties</p>
            <p><Sentence highlight={props.currentSentenceId === 9}>As and when requested by <i>model</i> during and throughout the term hereof, <i>MANAGER</i> agrees to perform for <i>model</i> one or more of the services as follows:</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 10}>Advise, and counsel in the selection or consideration of career opportunities, photographers, advertisers and the selection or creation of vehicles for <i>models</i> services;</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 11}>(a) Advise and counsel in any and all matters pertaining to modeling, print, advertising, commercials television and film;</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 12}>(b) Advise and counsel relative to the adoption of proper format of presentation of <i>model</i>;</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 13}>(c) Advise and counsel with regard to general practicees in the modeling and advertising industries;</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 14}>(d) Send invoices, statements to <i>model's</i> clients, and collect fees for <i>model</i>; and</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 15}>(e) Advise on personal appearance composites and the formation of a portfolio.</Sentence></p>
            <p>
                <Sentence highlight={props.currentSentenceId === 16}><i>MANAGER</i> accepts such appointment upon the terms and provisions hereinafter stated.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 17}>It is understood and agreed that <i>MANAGER</i> is not an employment agent.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 18}>In this connection, <i>MANAGER</i> has not promised to procure employment for <i>model</i>, and shall not be obligated to secure or to attempt to secure the same hereunder.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 19}>Model understands and hereby acknowledges that under this agreement, Manager is not licensed as an employment agency or theoretical employment agency under the General Business Law of the state of New York; that, except to the extend permitted by law, Manager has not offered, attempted or promised to obtain employment or engagements for Model; and that, except to the permitted by law, Manager is not obligated, authorized, licensed, or expected to do so.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 20}>It is understood that since <i>MANAGER</i> is employed by <i>model, MANAGER</i> will not provide <i>model</i> with coverage for Worker's Compensation, State Disability or State Unemployment.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 21}>It is further understood that <i>model</i> is responsible for all such coverage, preparing and filing personal tax returns and paying all taxes, and that responsibility therefor has been assumed by <i>model</i> commencing as of the date <i>MANAGER</i> was first appointed as <i>MANAGER</i> of <i>model</i>.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 22}><i>Model</i> hereby releases and holds harmless <i>MANAGER</i> from any and all claims and/or responsibility with respect to Workmen's Compensation, State Disability, Federal Income Tax, Social Security or State Unemployment coverage or benefits relating to <i>Model</i>.</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 23}>It is further understood that <i>MANAGER</i> is not obliged to pay for any of <i>Model</i> own expenses, such as travel, lodgings, entertaining, wardrobe, makeup, etc.</Sentence></p>
            <p style={{fontWeight: 600, textDecoration: 'underline'}}>Independent Contractor</p>
            <p>
                <Sentence highlight={props.currentSentenceId === 24}>Model enters into this Agreement as, and shall be, an Independent Contractor and any moneys received from Manager will be non-employee compensation.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 25}>This means that there will be no state, local, or federal deduction taken out of model checks.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 26}>If services result in payment to model of $600.00 or more, model will receive a 1099 tax form at the end of the year to file model taxes.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 27}>It is the sole responsibility of the model to claim all income to the internal revenue service and state and to pay the necessary taxes due.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 28}>Manager shall not be responsible for withholding taxes with respect to models compensation.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 29}>Model shall have no claim against Manager for vacation, sick leave, retirement, benefits, unemployment insurance benefits, or employee benefits of any kind.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 30}>Under no circumstances shall Model look to Manager as employer, joint venture, partner, or principal.</Sentence>
            </p>
            <p style={{fontWeight: 600, textDecoration: 'underline'}}>Personal Injury or Property Damage</p>
            <p><Sentence highlight={props.currentSentenceId === 31}>Manager shall not be liable for model for any personal injury or property damage, lost or stolen that may occur while model is on assignment and/or providing services pursuant to this agreement.</Sentence></p>
            <p style={{fontWeight: 600, textDecoration: 'underline'}}>Termination</p>
            <p>
                <Sentence highlight={props.currentSentenceId === 32}>Manager reserves the right to terminate this agreement at anytime for any reason if it deems termination to be in the best interest or Manager or its clients.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 33}>Model may terminate this agreement by providing seven (7) days written notice of intent to terminate.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 34}>Agency may terminate this agreement upon the occurrence of any of the following events determined in its sole discretion: Failure to meet performance goals of event, tardiness, no showing for booking, walking off bookings, any form of misconduct or violence, willful destruction of property,</Sentence>
            </p>
        </div>
    );
}

export default Article1;
import Sentence from "../widget/Sentence";
import Title from "../widget/Title";
import { ArticleProp } from "./ArticleProp";

function Article2(props: ArticleProp) {
    return (
        <div style={{fontSize: '20px'}}>
            <Title>MODEL RELEASE</Title>
            <p><Sentence sid={1}>Mary Lu (the <b>"Model"</b>), for good and valuable consideration, the receipt of which is acknowledged, hereby grants to ____________ (<b>"Company"</b>), its legal representatives, assignees, and those acting under its authority, the unrestricted right and permission to copyright and/or use, and/or publish photographic portraits or pictures of the Model (the <b>"Pictures"</b>), and the negatives, transparencies, prints, or digital information pertaining to them, in still, single, multiple, moving or video format, or in which Model may be included in whole or in part, or composite, or distorted in form, or reproductions thereof, in color or otherwise, in any media for advertising or any other lawful purpose.</Sentence></p>
            <p>
                <Sentence sid={2}>Model hereby relinquishes any right that he/she may have to examine or approve the finished product or products or the advertising copy or printed matter that may be used in connection with an image that Company has taken of the Model, or the use to which it may be applied.</Sentence>
                &nbsp;<Sentence sid={3}>Model waives any ownership and publication right he/she might be entitled of in connection with the Pictures, with the exception of personal use of the Pictures as part of personal modeling portfolio.</Sentence>
                &nbsp;<Sentence sid={4}>Model agrees he/she has no right to sell, license or publish any of the Pictures to any person or entity.</Sentence>
            </p>
            <p>
                <Sentence sid={5}>Model further releases Company its parent company, subsidiaries, affiliates, officers, agents, servants, or employees (<b>"Releasees"</b>) from any claims for remuneration associated with any form of damage, foreseen or unforeseen, associated with the proper commercial or artistic use of these images unless it can be shown that said reproduction was maliciously caused, produced and published for the sole purpose of subjecting the Model to conspicuous ridicule, scandal, reproach, scorn and indignity.</Sentence>
                &nbsp;<Sentence sid={6}>Model also waives any and all claims, demands, actions, and causes of action whatsoever arising out of or related to any loss, damage, or injury, that may be sustained by Model, or any of the property belonging to Model, whether caused by the negligence of the Releasees, or otherwise, while performing the photography sessino, or while in, on or upon the premises where the photography session was performed.</Sentence>
            </p>
            <p><Sentence sid={7}>It is the express intent of Model that this document shall bind all members of Model's family, heirs, assignees and personal representatives.</Sentence></p>
            <p><Sentence sid={8}>Model represents that he/she is 18 year or older, that the photography session was conducted in a completely proper and highly professional manner, and this release was willingly signed.</Sentence></p>
        </div>
    );
}

export default Article2;
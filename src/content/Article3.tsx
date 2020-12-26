import Sentence from "../widget/Sentence";
import Title from "../widget/Title";
import { ArticleProp } from "./ArticleProp";

function Article3(props: ArticleProp) {
    return (
        <div>
            <Title>TFP CONTRACT</Title>
            <p><Sentence highlight={props.currentSentenceId === 1}>Mary Lu (hereafter "Model"), and Torsten Flaegel (hereafter "Photographer"), regulating the ownership and use of photographs and derivative works based thereupon (collectively hereafter the "Photos") taken by Torsten Flaegel on the date of 6/6/2018 for all lawful purposes, subject to the terms and conditions described below.</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 2}>The basis for this contract is a non-commercial arrangement where Model in the interest of gaining modelling experience, agrees that in exchange of modelling time, she shall receive processed photographs delivered to Torsten Flaegel in the quantity and format described as follows:</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 3}>Number of digital files: 15, resolution: 2 Mpx, in any format.</Sentence></p>
            <p>
                <Sentence highlight={props.currentSentenceId === 4}>Delivery shall take place in a timely manner and under any circumstaces no longer than 21 days after the date this contract is signed by Photographer.</Sentence>
                &nbsp;<Sentence highlight={props.currentSentenceId === 5}>This delivery constitutes the whole obligation of Photographer towards Model.</Sentence>
            </p>
            <p><Sentence highlight={props.currentSentenceId === 6}>Model agrees that copyright, moral rights, and all other intellectual property rights to the Photos belongs to Photographer and/or his or her heirs, licensees or assigns, with full right of lawful disposition in any manner.</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 7}>Model agrees that, while he/she may use the Photos for purposes related to the promotion of Model's modelling business, including, but not limited to: advertising, portfolios, composite cards, exhibitions, contests, and promotional web sites. Model will not sell or otherwise transfer publication rights to any of the Photos without Torsten Flaegel's prior consent.</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 8}>Likewise, Torsten Flaegel agrees that whole he may use the Photos for purposes related to the promotion of Yaf Sparkle Fine Jewelry as well as Torsten Flaegel's photography business, including, but not limited to: advertising, portfolios, composite cards, exhibitions, contests, and promotional web sites, Torsten Flaegel will not sell or otherwise transfer publication rights to any of the Photos except with Model's prior consent.</Sentence></p>
            <p><Sentence highlight={props.currentSentenceId === 9}>Model understands that Torsten Flaegel has the moral right to be identified as the author of the Photos when copies of the Photos are presented to the public, and shall communicate this understanding to publishers, designers and other third parties that act on Model behalf to create presentation material using the Photos.</Sentence></p>
        </div>
    );
}

export default Article3;
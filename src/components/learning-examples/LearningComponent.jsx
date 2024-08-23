import FirstComponent from './FirstComponent'
import {AnotherComponentInFirst} from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearnJS from './LearnJS';

export default function LearningComponent () {
    return (
      <div className='LearningComponent'>
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <AnotherComponentInFirst/>
        <LearnJS/>
      </div>
    )
  }
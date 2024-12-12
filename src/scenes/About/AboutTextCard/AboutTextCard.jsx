import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>MOHIT CHAVDA, </span>
        <br />a software engineer currently based in{' '}
        <span className={s.purple}>current technology.</span>
        <br />
        <br />
        I have a Bachelor's degree in Computer Science 
        <br />
        {/* Master's degree in Project Management from Ternopil Academy. */}
        <br />
        {/* <br /> */}
        My hobbies beyond programming:
      </p>

      <ul style={{ marginLeft: 14 }}>
        <li className={s.aboutActivity}>
          - Playing cricket
        </li>
        <li className={s.aboutActivity}>
          - Reading
        </li>
        <li className={s.aboutActivity}>
          - Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;

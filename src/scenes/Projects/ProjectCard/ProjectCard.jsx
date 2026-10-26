import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProjectCard = ({ link, image, title, description }) => {
  console.log(link)
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={link.site}
          state={{ background: location }}
          target="_blank"
        >
          <LazyLoadImage
            alt="card-img"
            effect="blur"
            src={image.src}
            width="100%"
            style={{ minHeight: '10rem' }}
            placeholderSrc={image.placeholderSrc}
          />
        </Link>

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;

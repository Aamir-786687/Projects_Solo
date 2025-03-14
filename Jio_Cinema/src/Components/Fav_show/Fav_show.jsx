import FeaturedShow from "../Featured_Show/FeaturedShow";
import "./fav_show.css";

const Fav_show = (props) => {
  return (
    <>
      <section className="fav">
        <h1 className="title">{props.title}</h1>

        <div className="shows">
          {props.movies?.map((movie) => {
            // console.log(movie)
            return <FeaturedShow movie={movie} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Fav_show;

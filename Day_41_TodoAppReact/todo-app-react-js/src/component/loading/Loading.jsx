// import loadingImg from "../assets/loading.svg";
import './Loading.css';

const Loading = (props) =>  {
  const { status } = props;

  return (
    <>
    {status &&
    <div className="overlay">
      <div className="loadersmall"></div>
    </div>

    }

    </>
  );
}

export default Loading;

const WelcomeMessage = ({onGetPostClick}) => {
  return (
    <center className="Welcome-message">
      <h1>THERE ARE NO POSTS </h1>
      <button type="button" onClick={onGetPostClick} className="btn btn-outline-info">
        Get Posts From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
 
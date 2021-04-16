import "./Card.css";

export const Card = ({ src, alt, title, ownername, tags }) => {
  return (
    <div className="card">
      <img src={src} alt={alt} height="200" width="200" />
      <div className="content">
        <span className="title">{title}</span> by{" "}
        <span className="username">{ownername}</span>
      </div>
    </div>
  );
};

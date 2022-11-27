import "./List.css";
import CopyButton from "./CopyButton";

export default function List({ urlList }) {
  if (urlList.length === 0) return null;
  return (
    <div className="list-section">
      {urlList.map(({ orginalURL, shortURL }, index) => {
        return (
          <div key={index} className="list">
            <div className="orginal-section">{orginalURL}</div>
            <div className="short-section">
              <div className="short-url">{shortURL}</div>
              <CopyButton shortURL={shortURL} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

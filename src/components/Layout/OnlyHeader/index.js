import Header from './Header';

function OnlyHeader({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default OnlyHeader;

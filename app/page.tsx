import SketchPad from "../components/SketchPad";

function Homepage() {
  return (
    <body>
      <div className="flex flex-col items-center">
        <div>
          <h1>Data Creator</h1>
        </div>
        <br />
        <SketchPad height={500} width={500} />
      </div>
    </body>
  );
}

export default Homepage;

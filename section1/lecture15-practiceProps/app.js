// ReactDOM.render here
ReactDOM.render(
  <div className="row">
    <Card data={data[0]} />
    <Card data={data[1]} />
    <Card data={data[2]} />
    <Card data={data[3]} />
    {/* <Card
      name={data[0].instructor}
      title={data[0].course}
      picture={data[0].image}
    />
    ,
    <Card
      name={data[1].instructor}
      title={data[1].course}
      picture={data[1].image}
    />
    ,
    <Card
      name={data[2].instructor}
      title={data[2].course}
      picture={data[2].image}
    />
    ,
    <Card
      name={data[3].instructor}
      title={data[3].course}
      picture={data[3].image}
    /> */}
  </div>,
  document.getElementById("root")
);

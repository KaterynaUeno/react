let cards = data.map((card, index) => {
  return <Card key={index} data={card} />;
});
console.log(cards);
// ReactDOM.render here
ReactDOM.render(
  <div className="row">
    {cards}
    {/* <Card data={data[0]} />
    <Card data={data[1]} />
    <Card data={data[2]} />
    <Card data={data[3]} /> */}
  </div>,

  document.getElementById("root")
);

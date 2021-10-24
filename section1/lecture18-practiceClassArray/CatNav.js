// change this Component to a class!
class CatNav extends React.Component {
  render() {
    console.log(this.props);
    const navElements = this.props.data.map((element, index) => {
      return (
        <li key={index} className="cat-link left valign-wrapper">
          <i className="material-icons">{element.icon}</i>
          {element.title}
        </li>
      );
    });
    return (
      <div className="row">
        <ul className="cat-nav center-align">{navElements}</ul>
      </div>
    );
  }
}
// get data from props and use map to build an array of <li>
// ... code goes here
